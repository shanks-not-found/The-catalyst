import React from "react";
import { Link } from "react-router-dom";
import { Layers } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { ABOUT_CONTENT } from "../data/content";

export const About: React.FC = () => {
  const {
    hero,
    whatIsCatalystRoom,
    howItWorks,
    whoBelongs,
    whyTheRoomExists,
    longTermVision,
    finalCta,
  } = ABOUT_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="About The Catalyst Room"
        description="A room built for the people building what's next. The Catalyst Room is a curated business media and ecosystem platform."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white text-[#111827] border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {hero.eyebrow}
            </span>
            <h1 className="font-editorial-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 font-sans leading-relaxed max-w-3xl">
              {hero.subhead}
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS THE CATALYST ROOM? */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              PLATFORM ESSENCE
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {whatIsCatalystRoom.heading}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed font-sans">
              {whatIsCatalystRoom.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIsCatalystRoom.cards.map((card) => (
              <div
                key={card.number}
                className="bg-white border border-gray-200 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold text-[#FF5A1F] tracking-widest">
                    {card.number}
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

      {/* 3. ONE PLATFORM. TWO EXPERIENCES. */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {howItWorks.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {howItWorks.heading}
            </h2>
            <p className="text-xs text-gray-500 font-mono">
              {howItWorks.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItWorks.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 sm:p-10 rounded-xs space-y-6 hover:border-[#FF5A1F] transition-all shadow-xs group"
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FF5A1F]/10 text-[#FF5A1F] border border-[#FF5A1F]/30 rounded-xs text-xs font-mono font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>EXPERIENCE 0{idx + 1}</span>
                </div>
                <h3 className="font-editorial-heading text-2xl font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO BELONGS IN THE ROOM? */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {whoBelongs.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {whoBelongs.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whoBelongs.audiences.map((aud, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-xs space-y-3 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="w-7 h-7 rounded-xs bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] font-mono font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial-heading text-lg font-bold text-gray-900">
                  {aud.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {aud.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY THE ROOM EXISTS */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {whyTheRoomExists.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {whyTheRoomExists.heading}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {whyTheRoomExists.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyTheRoomExists.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="w-8 h-8 rounded-xs bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
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

      {/* 6. BUILT BEYOND A SINGLE EPISODE. */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {longTermVision.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
              {longTermVision.heading}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              {longTermVision.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {longTermVision.tiles.map((tile, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-gray-200 rounded-xs space-y-2 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <span className="text-[10px] font-mono text-[#FF5A1F] font-bold">
                  [ 0{idx + 1} ]
                </span>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {tile}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA: THE ROOM IS JUST BEGINNING. */}
      <section className="py-20 lg:py-28 bg-white text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] border border-gray-200 p-8 sm:p-12 lg:p-16 rounded-xs space-y-8 shadow-xl text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F] font-bold block">
                JOIN THE PLATFORM
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
                {finalCta.headline}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {finalCta.subhead}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              {finalCta.buttons.map((btn, idx) => (
                <Link
                  key={idx}
                  to={btn.href}
                  className={`w-full sm:w-auto px-6 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-all flex items-center justify-center space-x-2 ${
                    idx === 2
                      ? "bg-[#FF5A1F] hover:bg-[#E04B14] text-white shadow-md"
                      : "bg-white hover:bg-gray-100 border border-gray-300 text-gray-900"
                  }`}
                >
                  <span>{btn.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

