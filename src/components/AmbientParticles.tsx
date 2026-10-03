import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  color: string;
  vx: number;
  vy: number;
  phase: number;
  phaseSpeed: number;
  depth: number; // 0.3 (far/slow) to 1.0 (near/responsive)
}

export const AmbientParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Track scroll velocity for subtle organic parallax depth
    let lastScrollY = window.scrollY || 0;
    let scrollDelta = 0;
    let smoothedScrollDelta = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Generate balanced, editorial particles (restrained count: ~36 particles)
    const particleCount = Math.min(36, Math.floor(width / 35));
    const particles: Particle[] = [];

    // Colors: Catalyst Orange and Subtle Graphite
    const colors = [
      "rgba(255, 90, 31, ",  // Catalyst Orange
      "rgba(255, 110, 50, ", // Warm amber
      "rgba(30, 34, 42, ",   // Graphite Charcoal
      "rgba(88, 93, 102, ",  // Slate grey
    ];

    for (let i = 0; i < particleCount; i++) {
      const isOrange = i % 2 === 0;
      const color = isOrange
        ? colors[i % 2]
        : colors[2 + (i % 2)];
      const depth = 0.35 + Math.random() * 0.65;
      const baseAlpha = isOrange
        ? 0.12 + Math.random() * 0.16 // Warm orange: 0.12 - 0.28
        : 0.05 + Math.random() * 0.10; // Dark grey: 0.05 - 0.15

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.2 + Math.random() * 1.6 * depth,
        baseAlpha,
        alpha: baseAlpha,
        color,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.15 - Math.random() * 0.25 * depth, // Gentle upward drift
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.008 + Math.random() * 0.015,
        depth,
      });
    }

    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const dt = Math.min(32, currentTime - lastTime);
      lastTime = currentTime;

      // Smooth scroll delta dampening (smooth return to 0)
      smoothedScrollDelta += (scrollDelta - smoothedScrollDelta) * 0.1;
      scrollDelta *= 0.88; // decay native delta

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // 1. Natural horizontal sinusoidal oscillation
          p.phase += p.phaseSpeed * (dt / 16);
          const sway = Math.sin(p.phase) * 0.22;
          p.x += (p.vx + sway) * (dt / 16);

          // 2. Vertical motion: natural upward drift + restrained scroll parallax
          const scrollParallax = -smoothedScrollDelta * p.depth * 0.06;
          p.y += (p.vy + scrollParallax) * (dt / 16);

          // 3. Subtle organic pulsing opacity
          p.alpha = p.baseAlpha + Math.sin(p.phase * 0.7) * (p.baseAlpha * 0.3);

          // 4. Smooth screen wrapping with padding
          const pad = 20;
          if (p.y < -pad) {
            p.y = height + pad;
            p.x = Math.random() * width;
          } else if (p.y > height + pad) {
            p.y = -pad;
            p.x = Math.random() * width;
          }

          if (p.x < -pad) p.x = width + pad;
          else if (p.x > width + pad) p.x = -pad;
        }

        // Draw particle with gentle soft edge
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default AmbientParticles;
