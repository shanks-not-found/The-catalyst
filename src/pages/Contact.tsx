import React from "react";
import { SEOHead } from "../components/SEOHead";
import { ContactForm } from "../components/ContactForm";
import { CONTACT_CONTENT } from "../data/content";

export const Contact: React.FC = () => {
  const { hero } = CONTACT_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="Contact"
        description="Connect with John Garapati, Founder of The Catalyst Room. Explore early partner association and ecosystem participation in Hyderabad."
      />

      {/* HERO SECTION (Dark Charcoal Background) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] block">
              GET IN TOUCH
            </span>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-[#E8E6E1] leading-tight">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-xl text-[#8A8F98] font-sans leading-relaxed max-w-3xl">
              {hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: CONTACT FORM & DIRECT CONTACT (Dark Charcoal Section) */}
      <section className="py-20 lg:py-28 bg-[#14161A] text-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
