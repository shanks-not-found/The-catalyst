import React from "react";
import { Link } from "react-router-dom";
import { Play, Lock, Layers } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { EventStrip } from "../components/EventStrip";
import { HOME_CONTENT } from "../data/content";

export const Home: React.FC = () => {
  const {
    hero,
    episode01Feature,
    theFormat,
    curatedRoomPositioning,
    whoIsInTheRoom,
    whyDifferent,
    longTermVision,
    buildWithTheRoom,
  } = HOME_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="The Catalyst Room — Where Conversations Create Momentum"
        description="A curated business media and ecosystem platform bringing founders, investors, CEOs, GCC leaders and industry experts into one room."
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white text-[#111827] border-b border-gray-200 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Headline */}
            <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111827] leading-[1.08]">
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-gray-600 font-sans leading-relaxed max-w-3xl font-normal">
              {hero.subheadline}
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/register"
                className="px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>REGISTER →</span>
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="px-8 py-4 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900 text-xs font-bold uppercase tracking-widest rounded-xs transition-all flex items-center justify-center space-x-2 group"
              >
                <span>{hero.secondaryCta.text}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EPISODE 01 — MAJOR HOMEPAGE SECTION */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xs overflow-hidden shadow-xl hover:border-[#FF5A1F]/40 transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Frame Placeholder */}
              <div className="lg:col-span-5 relative bg-gradient-to-br from-gray-100 via-gray-50 to-white p-8 min-h-[300px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#FF5A1F] text-white text-[10px] uppercase font-mono font-bold tracking-widest rounded-xs">
                    {episode01Feature.eyebrow}
                  </span>
                  <span className="text-[10px] font-mono text-[#FF5A1F] uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse mr-1.5" />
                    {episode01Feature.statusBadge}
                  </span>
                </div>

                <div className="my-auto py-8 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/40 text-[#FF5A1F] flex items-center justify-center shadow-md">
                    <Play className="w-7 h-7 ml-1 fill-current" />
                  </div>
                  <p className="text-xs font-mono text-[#FF5A1F] font-bold tracking-widest uppercase">
                    WATCH EPISODE → (COMING SOON)
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                  <span className="font-mono text-[11px] text-gray-700">
                    {episode01Feature.subtext}
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] block">
                    {episode01Feature.eyebrow} · INAUGURAL CONVERSATION
                  </span>
                  <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {episode01Feature.headline}
                  </h2>
                  <div>
                    <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                      {episode01Feature.guestName}
                    </h3>
                    <p className="text-xs font-mono text-[#FF5A1F] mt-0.5">
                      {episode01Feature.guestRole}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {episode01Feature.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-gray-600 flex items-center font-mono">
                    <Lock className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
                    <span>Closed-door recording at T-Hub, Hyderabad</span>
                  </div>
                  <Link
                    to="/register"
                    className="px-6 py-3.5 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center justify-center space-x-2 shrink-0"
                  >
                    <span>REGISTER →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVENT / EPISODE INFORMATION CARDS */}
      <EventStrip />

      {/* 4. THE FORMAT — ONE ROOM. TWO EXPERIENCES. */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              {theFormat.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
              {theFormat.headline}
            </h2>
            <p className="text-xs text-gray-500 font-mono">
              {theFormat.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {theFormat.experiences.map((exp) => (
              <div
                key={exp.number}
                className="bg-gray-50 border border-gray-200 p-8 sm:p-10 rounded-xs space-y-6 hover:border-[#FF5A1F] transition-all shadow-xs group"
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FF5A1F]/10 text-[#FF5A1F] border border-[#FF5A1F]/30 rounded-xs text-xs font-mono font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>EXPERIENCE {exp.number}</span>
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

      {/* 5. A CURATED ROOM, NOT A CROWDED ONE. */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {curatedRoomPositioning.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {curatedRoomPositioning.headline}
            </h2>
            <div className="w-16 h-1 bg-[#FF5A1F] rounded-full" />
            <p className="text-base sm:text-xl text-gray-700 leading-relaxed font-sans">
              {curatedRoomPositioning.body}
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHO IS IN THE ROOM? (THE PEOPLE WHO BUILD THE ECOSYSTEM) */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              {whoIsInTheRoom.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {whoIsInTheRoom.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whoIsInTheRoom.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-6 rounded-xs space-y-3 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="w-7 h-7 rounded-xs bg-[#FF5A1F]/10 text-[#FF5A1F] font-mono font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial-heading text-lg font-bold text-gray-900">
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

      {/* 7. WHY IT'S DIFFERENT */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              CORE PRINCIPLES
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              Why It's Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyDifferent.map((card) => (
              <div
                key={card.number}
                className="bg-white border border-gray-200 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="text-xs font-mono font-bold text-[#FF5A1F]">
                  {card.number}
                </div>
                <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THE LONG-TERM VISION */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              {longTermVision.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
              {longTermVision.headline}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {longTermVision.body}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {longTermVision.outcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-50 border border-gray-200 rounded-xs space-y-2 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <span className="text-[10px] font-mono text-[#FF5A1F] font-bold">
                  [ 0{idx + 1} ]
                </span>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BUILD WITH THE ROOM — PARTNERSHIPS CTA */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 p-8 sm:p-12 lg:p-16 rounded-xs space-y-8 shadow-xl text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F] block font-bold">
                {buildWithTheRoom.eyebrow}
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-gray-900">
                {buildWithTheRoom.headline}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {buildWithTheRoom.subhead}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              {buildWithTheRoom.buttons.map((btn, idx) => (
                <Link
                  key={idx}
                  to={btn.href}
                  className={`w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-all flex items-center justify-center space-x-2 ${
                    idx === 0
                      ? "bg-[#FF5A1F] hover:bg-[#E04B14] text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900"
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

