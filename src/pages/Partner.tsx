import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { PartnershipTable } from "../components/PartnershipTable";
import { InKindPartnerTable } from "../components/InKindPartnerTable";
import { PARTNER_CONTENT } from "../data/content";

export const Partner: React.FC = () => {
  const {
    hero,
    twoWaysToPartner,
    sponsorship,
    whatPartnersReceive,
    buildFromBeginning,
    finalCta,
  } = PARTNER_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="Partnerships — Build With The Room"
        description="The Catalyst Room works with brands, businesses and ecosystem organisations looking to build sustained association across the series."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white text-[#111827] border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="pt-4">
              <a
                href="#two-ways-to-partner"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md group"
              >
                <span>{hero.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO WAYS TO PARTNER */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200" id="two-ways-to-partner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              PARTNERSHIP ARCHITECTURE
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
              {twoWaysToPartner.heading}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed font-sans">
              {twoWaysToPartner.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {twoWaysToPartner.cards.map((card) => (
              <div
                key={card.number}
                className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 sm:p-10 rounded-xs space-y-6 shadow-xs flex flex-col justify-between hover:border-[#FF5A1F] transition-all group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF5A1F]">
                      {card.number}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-semibold">
                      ROUTE 0{card.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-editorial-heading text-2xl font-bold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans mt-2">
                      {card.description}
                    </p>
                  </div>

                  {card.benefits && (
                    <div className="space-y-2 pt-2 border-t border-[#FF5A1F]/15">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-semibold">
                        BENEFITS INCLUDE:
                      </span>
                      <ul className="space-y-1.5">
                        {card.benefits.map((b, i) => (
                          <li key={i} className="text-xs text-gray-700 flex items-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F] mr-2 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {card.categories && (
                    <div className="space-y-2 pt-2 border-t border-[#FF5A1F]/15">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-semibold">
                        CATEGORIES INCLUDE:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {card.categories.map((c, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-white border border-[#FF5A1F]/15 text-[11px] font-semibold text-gray-800 rounded-xs"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-[#FF5A1F]/15">
                  <a
                    href={card.href}
                    className="inline-flex items-center text-xs font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform text-[#FF5A1F]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SPONSORSHIP OPPORTUNITIES */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200" id="sponsorship-opportunities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              FINANCIAL SPONSORSHIP
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {sponsorship.heading}
            </h2>
            <p className="text-xs text-gray-600 max-w-2xl font-sans">
              {sponsorship.subhead}
            </p>
          </div>

          <PartnershipTable />
        </div>
      </section>

      {/* 4. WHAT PARTNERS RECEIVE */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              VALUE DELIVERED
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {whatPartnersReceive.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatPartnersReceive.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-6 sm:p-8 rounded-xs space-y-3 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="w-7 h-7 rounded-xs bg-[#FF5A1F]/10 text-[#FF5A1F] font-mono font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial-heading text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200 flex items-center space-x-2 text-xs text-gray-600 italic">
            <ShieldCheck className="w-4 h-4 text-[#FF5A1F] shrink-0" />
            <span>{whatPartnersReceive.qualifier}</span>
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC PARTNERSHIPS */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InKindPartnerTable />
        </div>
      </section>

      {/* 6. BUILD FROM THE BEGINNING */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              PARTNER ECOSYSTEM PRINCIPLES
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {buildFromBeginning.heading}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {buildFromBeginning.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buildFromBeginning.cards.map((card) => (
              <div
                key={card.number}
                className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="text-xs font-mono font-bold text-[#FF5A1F]">
                  {card.number}
                </div>
                <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL PARTNER CTA */}
      <section className="py-20 lg:py-28 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF9F5] border border-[#FF5A1F]/25 p-8 sm:p-12 lg:p-16 rounded-xs space-y-8 shadow-xl text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F] block font-bold">
                START A CONVERSATION
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
                {finalCta.heading}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {finalCta.subhead}
              </p>
            </div>

            <div className="pt-4 flex justify-center">
              <Link
                to="/register"
                className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
              >
                <span>REGISTER →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
