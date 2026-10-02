import React, { useState, useEffect } from "react";

export const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Quick, professional initial load effect
    const timer = setTimeout(() => {
      setIsFading(true);
      const finishTimer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(finishTimer);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[110] bg-white flex flex-col items-center justify-center transition-opacity duration-400 ease-out pointer-events-none ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center space-y-4 px-4">
        {/* Brand identity */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="The Catalyst Room"
            className="h-10 w-auto object-contain mix-blend-multiply"
          />
        </div>
        
        {/* Minimal progress line */}
        <div className="w-32 h-[2px] bg-gray-100 overflow-hidden rounded-full relative">
          <div className="absolute inset-y-0 left-0 bg-[#FF5A1F] w-full animate-loaderLine rounded-full" />
        </div>
      </div>
    </div>
  );
};
