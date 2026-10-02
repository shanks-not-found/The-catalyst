import React from "react";
import { Link } from "react-router-dom";
import { Play, Sparkles, ArrowRight } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { EventStrip } from "../components/EventStrip";
import { StatementBand } from "../components/StatementBand";
import { HOME_CONTENT } from "../data/content";


export const Home: React.FC = () => {
  const { hero, platform, whyDifferent, longTermVision } = HOME_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="Home"
        description="The Catalyst Room is a curated founder platform bringing founders, investors, business leaders and ecosystem stakeholders into one room — beginning at T-Hub, Hyderabad."
      />

      {/* 1. HERO SECTION (Dark Charcoal Background) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A] overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#2A2F3A_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Tagline Chip */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 rounded-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5A1F]">
                {hero.taglineChip}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#E8E6E1] leading-[1.08]">
              BUILD THE ROOM.<br />
              <span className="text-[#FF5A1F]">BUILD THE ECOSYSTEM.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-[#E8E6E1]/85 font-sans leading-relaxed max-w-3xl font-light">
              {hero.subheadline}
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to={hero.primaryCta.href}
                className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-[#14161A] text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-lg hover:shadow-[#FF5A1F]/20 flex items-center justify-center space-x-2 group"
              >
                <span>{hero.primaryCta.text}</span>
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="px-8 py-4 bg-[#1E222A] hover:bg-[#252A34] border border-[#2A2F3A] text-[#E8E6E1] text-xs font-bold uppercase tracking-widest rounded-xs transition-all flex items-center justify-center space-x-2 group"
              >
                <Play className="w-3.5 h-3.5 text-[#FF5A1F] fill-[#FF5A1F] mr-1" />
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVENT STRIP */}
      <EventStrip />

      {/* 3. SECTION — THE PLATFORM (Alternating Light Warm White Section) */}
      <section className="py-20 lg:py-28 bg-[#E8E6E1] text-[#14161A] border-b border-[#D8D4CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
                PLATFORM ARCHITECTURE
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14161A] leading-tight">
                {platform.headline}
              </h2>
              <div className="w-12 h-1 bg-[#FF5A1F] rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <p className="text-base sm:text-lg text-[#14161A]/85 leading-relaxed font-sans">
                {platform.body}
              </p>

              <div className="pt-6 border-t border-[#D8D4CA]">
                <h3 className="text-xs uppercase font-mono tracking-widest text-[#14161A]/70 font-semibold mb-4">
                  DESIGNED AROUND
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {platform.designedAround.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-[#D8D4CA] rounded-xs flex items-center space-x-3 shadow-xs hover:border-[#FF5A1F] transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                      <span className="text-xs font-semibold text-[#14161A]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION — WHY IT'S DIFFERENT (Dark Charcoal Section) */}
      <section className="py-20 lg:py-28 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block">
              CORE PRINCIPLES
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#E8E6E1]">
              Why It's Different
            </h2>
            <p className="text-xs text-[#8A8F98] max-w-lg mx-auto">
              Intentionally constructed to maximize tangible business value and strategic clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyDifferent.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#181C23] border border-[#2A2F3A] p-8 rounded-xs space-y-4 hover:border-[#FF5A1F]/50 transition-all duration-300 group"
              >
                <div className="text-xs font-mono text-[#FF5A1F] font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial-heading text-xl font-bold text-[#E8E6E1] group-hover:text-[#FF5A1F] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#8A8F98] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH STATEMENT BAND */}
      <StatementBand />

      {/* 6. SECTION — THE LONG-TERM VISION (Light Warm White Section) */}
      <section className="py-20 lg:py-28 bg-[#E8E6E1] text-[#14161A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              SUSTAINABLE FOUNDER ECOSYSTEM
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-[#14161A] leading-tight">
              The Long-Term Vision
            </h2>
            <p className="text-base sm:text-lg text-[#14161A]/85 leading-relaxed">
              {longTermVision.body}
            </p>
          </div>

          {/* Grid of Outcomes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {longTermVision.outcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-[#D8D4CA] rounded-xs space-y-2 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <span className="text-[10px] font-mono text-[#FF5A1F] font-bold">
                  [ 0{idx + 1} ]
                </span>
                <h4 className="text-xs font-bold text-[#14161A] uppercase tracking-wider">
                  {item}
                </h4>
              </div>
            ))}
          </div>

          {/* Closing Line Callout */}
          <div className="pt-8 border-t border-[#D8D4CA] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-editorial-statement text-xl sm:text-2xl font-bold text-[#14161A]">
              "{longTermVision.closingLine}"
            </p>
            <Link
              to="/partner"
              className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-[#14161A] text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md shrink-0 flex items-center space-x-2"
            >
              <span>Explore Partnerships</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
