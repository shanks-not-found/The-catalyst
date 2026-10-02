import React from "react";
import { SEOHead } from "../components/SEOHead";
import { ContactForm } from "../components/ContactForm";
import { ScrollReveal } from "../components/ScrollReveal";
import { CONTACT_CONTENT } from "../data/content";

export const Contact: React.FC = () => {
  const { hero } = CONTACT_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="Contact — Let's Build The Room"
        description="Whether you're a founder, investor, business leader, ecosystem partner, brand or creator, we'd love to hear from you."
      />

      {/* Hero Section (White) */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block animate-hero-eyebrow">
              {hero.eyebrow}
            </span>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-gray-900 leading-tight animate-hero-headline">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto animate-hero-subhead">
              {hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* Single Focused Inquiry Form Section (Subtle Soft Gray #F7F7F7) */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7] text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
