import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user scrolls down past 400px
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      setIsVisible(currentScrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 p-3 sm:p-3.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/90 text-gray-800 shadow-md hover:shadow-xl hover:bg-[#FF5A1F] hover:text-white hover:border-[#FF5A1F] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/40 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default ScrollToTopButton;
