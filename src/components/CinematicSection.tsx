import React, { useEffect, useRef, useState } from "react";

export interface CinematicSectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  theme?: "white" | "gray" | "warm" | "transparent";
  bgImage?: string;
  bgImageAlt?: string;
  bgOverlay?: React.ReactNode;
  bgPosition?: string;
  isFirstSection?: boolean;
  priority?: boolean;
  children: React.ReactNode;
}

export const CinematicSection: React.FC<CinematicSectionProps> = ({
  id,
  className = "",
  containerClassName = "",
  theme = "white",
  bgImage,
  bgImageAlt = "",
  bgOverlay,
  bgPosition = "object-center",
  isFirstSection = false,
  priority = false,
  children,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Entrance visibility state for subsequent sections
  const [isVisible, setIsVisible] = useState(isFirstSection);

  const getThemeClass = (t: string) => {
    switch (t) {
      case "gray":
        return "bg-[#F7F7F7] text-[#111827]";
      case "warm":
        return "bg-[#FFF9F5] text-[#111827]";
      case "transparent":
        return "bg-transparent text-[#111827]";
      case "white":
      default:
        return "bg-white text-[#111827]";
    }
  };

  // 1. SCROLL-LINKED COORDINATED MOTION (HERO ZOOM + SUBTLE LAYERED DEPTH)
  useEffect(() => {
    // Check prefers-reduced-motion
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      if (imageRef.current) {
        imageRef.current.style.transform = "scale(1)";
        imageRef.current.style.opacity = "1";
      }
      if (contentRef.current) {
        contentRef.current.style.transform = "none";
        contentRef.current.style.opacity = "1";
      }
      return;
    }

    let animationFrameId: number;
    let isIntersectingViewport = isFirstSection;

    // Intersection observer to pause calculations when section is offscreen
    const viewportObserver = new IntersectionObserver(
      ([entry]) => {
        isIntersectingViewport = entry.isIntersecting;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If scrolled completely below, reset for clean re-entrance
          const vh = window.innerHeight || 800;
          if (entry.boundingClientRect.top > vh + 100) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "200px 0px 200px 0px",
      }
    );

    if (sectionRef.current) {
      viewportObserver.observe(sectionRef.current);
    }

    const updateMotion = () => {
      if (!sectionRef.current || !isIntersectingViewport) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 800;

      if (isFirstSection) {
        // --- OPENING HERO SECTION LOGIC ---
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const sectionHeight = sectionRef.current.offsetHeight || viewportHeight;
        const progress = Math.min(1, Math.max(0, scrollY / sectionHeight));

        let scale = 1.0;
        let imgOpacity = 1.0;

        if (progress <= 0.5) {
          // Phase 1: Scroll down through first half -> smooth zoom in (1.000 -> 1.075)
          const u = progress / 0.5;
          const easeIn = 1 - Math.pow(1 - u, 3);
          scale = 1.0 + 0.075 * easeIn;
        } else {
          // Phase 2: As opening section exits -> ease back toward normal scale (1.075 -> 1.010)
          const v = (progress - 0.5) / 0.5;
          const easeOut = v * (2 - v);
          scale = 1.075 - 0.065 * easeOut;
        }

        // Soft opacity dissolve as section leaves viewport
        if (progress > 0.65) {
          imgOpacity = Math.max(0.12, 1 - (progress - 0.65) / 0.35);
        }

        // Restrained subtle downward parallax for the background image
        const imgParallaxY = scrollY * 0.12;

        if (imageRef.current) {
          imageRef.current.style.transform = `translate3d(0, ${imgParallaxY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
          imageRef.current.style.opacity = `${imgOpacity.toFixed(3)}`;
        }

        // Hero content: stays stable while reading; glides slightly and fades when scrolling out
        if (contentRef.current) {
          if (progress > 0.40) {
            const fadeProgress = (progress - 0.40) / 0.60;
            const textOpacity = Math.max(0, 1 - fadeProgress * 1.15);
            const textOffset = -fadeProgress * 24;
            contentRef.current.style.opacity = `${textOpacity.toFixed(3)}`;
            contentRef.current.style.transform = `translate3d(0, ${textOffset.toFixed(1)}px, 0)`;
          } else {
            contentRef.current.style.opacity = "1";
            contentRef.current.style.transform = "translate3d(0, 0, 0)";
          }
        }
      } else {
        // --- SUBSEQUENT SECTIONS LAYERED PARALLAX DEPTH ---
        // Calculate center offset relative to viewport: -1 (above) to +1 (below)
        const centerDiff = rect.top + rect.height / 2 - viewportHeight / 2;
        const norm = Math.max(-1, Math.min(1, centerDiff / viewportHeight));

        // Background image layer: subtle gentle parallax (20px rate)
        if (imageRef.current) {
          const bgParallaxY = (norm * 18).toFixed(1);
          imageRef.current.style.transform = `translate3d(0, ${bgParallaxY}px, 0) scale(1.02)`;
        }

        // Content layer: slight complementary rate (-8px) creating refined layered depth
        if (contentRef.current) {
          const contentParallaxY = (norm * -6).toFixed(1);
          // Soft exit fade when scrolling far past top
          let contentOpacity = 1;
          if (rect.bottom < 160) {
            contentOpacity = Math.max(0.2, rect.bottom / 160);
          }
          contentRef.current.style.transform = `translate3d(0, ${contentParallaxY}px, 0)`;
          contentRef.current.style.opacity = `${contentOpacity.toFixed(3)}`;
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateMotion);
    };

    // Initial positioning
    updateMotion();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      viewportObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isFirstSection]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`cinematic-section relative min-h-[90svh] lg:min-h-[100svh] w-full max-w-full flex flex-col justify-center overflow-hidden border-b border-gray-200/80 ${getThemeClass(
        theme
      )} ${className}`}
    >
      {/* Background Image Layer (Layer 0: Separate from text and controls) */}
      {bgImage && (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden max-w-full">
          <img
            ref={imageRef}
            src={bgImage}
            alt={bgImageAlt}
            className={`w-full h-full object-cover max-w-full origin-center ${bgPosition}`}
            style={{
              opacity: isFirstSection ? 1 : isVisible ? 1 : 0,
              transform: isFirstSection
                ? "translate3d(0, 0, 0) scale(1.00)"
                : isVisible
                ? "translate3d(0, 0, 0) scale(1.02)"
                : "translate3d(0, 20px, 0) scale(1.04)",
              transition: isFirstSection
                ? "none"
                : "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1), transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform, opacity",
            }}
            loading={priority || isFirstSection ? "eager" : "lazy"}
          />
          {bgOverlay}
        </div>
      )}

      {/* Content Layer (Layer 1: Stable, crisp typography, layered motion) */}
      <div
        ref={contentRef}
        className={`relative z-10 w-full max-w-full pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 ${containerClassName}`}
        style={{
          opacity: isFirstSection ? 1 : isVisible ? 1 : 0,
          transform: isFirstSection
            ? "translate3d(0, 0, 0)"
            : isVisible
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, 18px, 0)",
          transition: isFirstSection
            ? "none"
            : "opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 100ms",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default CinematicSection;
