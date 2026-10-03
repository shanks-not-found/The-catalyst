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

  // Subsequent sections visibility tracking
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

  // 1. SCROLL-RESPONSIVE ZOOM IN & ZOOM OUT FOR OPENING HERO SECTION
  useEffect(() => {
    if (!isFirstSection) return;

    // Check prefers-reduced-motion
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      if (imageRef.current) {
        imageRef.current.style.transform = "scale(1)";
        imageRef.current.style.opacity = "1";
      }
      return;
    }

    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const scrollY = window.scrollY || window.pageYOffset || 0;
      const sectionHeight = sectionRef.current.offsetHeight || window.innerHeight || 800;

      // Normalized scroll progress through the hero section: 0 -> 1
      const progress = Math.min(1, Math.max(0, scrollY / sectionHeight));

      let scale = 1.0;
      let imgOpacity = 1.0;

      if (progress <= 0.5) {
        // Phase 1: Scrolling down through the first half -> smoothly zoom in 1.00 -> 1.08
        const u = progress / 0.5; // 0 -> 1
        // Smooth cubic ease out
        const easeIn = 1 - Math.pow(1 - u, 3);
        scale = 1.0 + 0.08 * easeIn;
      } else {
        // Phase 2: As opening section moves out of view -> smoothly transition back toward normal scale (1.08 -> 1.01)
        const v = (progress - 0.5) / 0.5; // 0 -> 1
        // Smooth quadratic ease
        const easeOut = v * (2 - v);
        scale = 1.08 - 0.07 * easeOut;
      }

      // Smooth subtle opacity fade as the section leaves the viewport
      if (progress > 0.65) {
        imgOpacity = Math.max(0.1, 1 - (progress - 0.65) / 0.35);
      } else {
        imgOpacity = 1.0;
      }

      // Apply transform to image layer (isolated from text and controls)
      imageRef.current.style.transform = `scale(${scale.toFixed(4)})`;
      imageRef.current.style.opacity = `${imgOpacity.toFixed(3)}`;

      // Hero content stays 100% stable while in view; gently glides and fades when scrolling out
      if (contentRef.current) {
        if (progress > 0.45) {
          const fadeProgress = (progress - 0.45) / 0.55;
          const textOpacity = Math.max(0, 1 - fadeProgress * 1.2);
          const textOffset = -fadeProgress * 24;
          contentRef.current.style.opacity = `${textOpacity.toFixed(3)}`;
          contentRef.current.style.transform = `translate3d(0, ${textOffset.toFixed(1)}px, 0)`;
        } else {
          contentRef.current.style.opacity = "1";
          contentRef.current.style.transform = "translate3d(0, 0, 0)";
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    // Run once initially to sync state
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isFirstSection]);

  // 2. SMOOTH GRADUAL ENTRANCE & EXIT FOR SUBSEQUENT SECTIONS
  useEffect(() => {
    if (isFirstSection) {
      setIsVisible(true);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    // Accessibility: Respect reduced motion settings
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    // Trigger reveal 160px before entering bottom of viewport so user visibly sees the animation unfolding with zero empty gaps
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If the section has scrolled back completely below the viewport, reset for re-reveal on scroll down
          const vh = window.innerHeight || 800;
          if (entry.boundingClientRect.top > vh + 80) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "160px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
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
      {/* Background Image Layer (Separated from text and controls) */}
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
                ? "scale(1.00)"
                : isVisible
                ? "scale(1.00)"
                : "scale(1.04)",
              transition: isFirstSection
                ? "none"
                : "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1), transform 1300ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "opacity, transform",
            }}
            loading={priority || isFirstSection ? "eager" : "lazy"}
          />
          {bgOverlay}
        </div>
      )}

      {/* Content Layer (Stable, never collpased, separate from image animation) */}
      <div
        ref={contentRef}
        className={`relative z-10 w-full max-w-full pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 ${containerClassName}`}
        style={{
          opacity: isFirstSection ? 1 : isVisible ? 1 : 0,
          transform: isFirstSection
            ? "translate3d(0, 0, 0)"
            : isVisible
            ? "translateY(0px)"
            : "translateY(20px)",
          transition: isFirstSection
            ? "none"
            : "opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1) 120ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 120ms",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default CinematicSection;
