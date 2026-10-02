import React from "react";
import { SEOHead } from "../components/SEOHead";
import { ContactForm } from "../components/ContactForm";
import { CONTACT_CONTENT } from "../data/content";

export const Contact: React.FC = () => {
  const { hero, whoShouldReachOut, finalCta } = CONTACT_CONTENT;

  const scrollToForm = () => {
    const el = document.getElementById("conversation-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Contact — Let's Build The Room"
        description="Whether you're a founder, investor, business leader, ecosystem partner, brand or creator, we'd love to hear from you."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white text-[#111827] border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {hero.eyebrow}
            </span>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-gray-900 leading-tight">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 font-sans leading-relaxed max-w-3xl">
              {hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM SECTION & DIRECT CONTACT DETAILS */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* 3. WHO SHOULD REACH OUT? SECTION */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {whoShouldReachOut.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {whoShouldReachOut.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoShouldReachOut.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-7 h-7 rounded-xs bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] font-mono font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CONTACT CTA — HAVE SOMETHING ELSE IN MIND? */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 p-8 sm:p-12 lg:p-16 rounded-xs space-y-8 shadow-xl text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F] block font-bold">
                COLLABORATION
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
                {finalCta.headline}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {finalCta.subhead}
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md cursor-pointer"
              >
                <span>{finalCta.buttonText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

