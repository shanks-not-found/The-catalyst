import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { ABOUT_CONTENT } from "../data/content";


export const About: React.FC = () => {
  const { hero, whyPartnerGrid, earlyPartnerAdvantage } = ABOUT_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="About / The Platform"
        description="What association with The Catalyst Room offers your brand — opportunities, access and visibility, not guarantees."
      />

      {/* HERO SECTION (Dark Charcoal Background) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] block">
              PLATFORM PROPOSITION
            </span>
            <h1 className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-[#E8E6E1] leading-tight">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-xl text-[#8A8F98] font-sans leading-relaxed max-w-3xl">
              {hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION — WHY PARTNER (6-item grid on Light Warm White Section) */}
      <section className="py-20 lg:py-28 bg-[#E8E6E1] text-[#14161A] border-b border-[#D8D4CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              STRATEGIC BRAND BENEFITS
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#14161A]">
              Why Partner With The Platform
            </h2>
            <p className="text-xs text-[#14161A]/70">
              Six core advantages of early positioning in The Catalyst Room ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartnerGrid.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D8D4CA] p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="w-8 h-8 rounded-xs bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] font-mono font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial-heading text-xl font-bold text-[#14161A]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#14161A]/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — THE EARLY PARTNER ADVANTAGE (Dark Charcoal Band) */}
      <section className="py-20 lg:py-28 bg-[#14161A] text-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#181C23] border border-[#2A2F3A] p-8 sm:p-12 lg:p-16 rounded-xs space-y-10 shadow-2xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F] block">
                INTENTIONALLY LIMITED ACCESS
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E6E1]">
                The Early Partner Advantage
              </h2>
              <p className="text-base sm:text-lg text-[#E8E6E1]/90 leading-relaxed">
                {earlyPartnerAdvantage.body}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#2A2F3A]">
              {earlyPartnerAdvantage.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#14161A] border border-[#2A2F3A] rounded-xs space-y-2"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                  <p className="text-xs font-semibold text-[#E8E6E1] leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-[#2A2F3A] flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="font-editorial-statement text-xl sm:text-2xl font-bold text-[#FF5A1F]">
                "{earlyPartnerAdvantage.closingLine}"
              </p>
              <Link
                to="/partner"
                className="w-full sm:w-auto px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-[#14161A] text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shrink-0 flex items-center justify-center space-x-2"
              >
                <span>Select Your Tier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
