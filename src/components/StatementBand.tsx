import React from "react";
import { HOME_CONTENT } from "../data/content";

export const StatementBand: React.FC = () => {
  const { statementBand } = HOME_CONTENT;

  return (
    <section className="w-full bg-[#14161A] border-y border-[#2A2F3A] py-24 sm:py-32 my-12 relative overflow-hidden">
      {/* Background Subtle Geometric Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#2A2F3A_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block mb-4">
          STATEMENT OF INTENT
        </span>
        <blockquote className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#E8E6E1] leading-tight tracking-tight max-w-4xl mx-auto">
          "{statementBand.quote}"
        </blockquote>
        <div className="w-16 h-0.5 bg-[#FF5A1F] mx-auto mt-8 rounded-full" />
      </div>
    </section>
  );
};
