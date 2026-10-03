import React from "react";
import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import { YoutubeIcon, InstagramIcon, LinkedinIcon } from "../components/SocialIcons";
import { SEOHead } from "../components/SEOHead";
import { EpisodeCard } from "../components/EpisodeCard";
import { CinematicSection } from "../components/CinematicSection";
import { EPISODES_CONTENT } from "../data/content";

export const Episodes: React.FC = () => {
  const { hero, formatSection, upcomingEpisodes, followSeries, finalCta } =
    EPISODES_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="Episodes — The Conversations Start Here"
        description="Long-form conversations with investors, founders, business leaders and ecosystem builders — recorded inside The Catalyst Room."
      />

      {/* 1. HERO SECTION (WHITE) */}
      <CinematicSection
        isFirstSection={true}
        priority={true}
        bgImage="/coming-soon-bg.jpg"
        bgImageAlt="The Conversations Start Here — The Catalyst Room"
        bgOverlay={
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent" />
        }
        theme="white"
        className="border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block animate-hero-eyebrow">
              {hero.eyebrow}
            </span>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-gray-900 leading-tight animate-hero-headline">
              {hero.headline}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 font-sans leading-relaxed max-w-3xl animate-hero-subhead">
              {hero.subhead}
            </p>
          </div>
        </div>
      </CinematicSection>

      {/* 2. EPISODE 01 SECTION (SUBTLE SOFT GRAY #F7F7F7) */}
      <CinematicSection theme="gray" id="episode-01">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-200/60">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
                INAUGURAL RELEASE
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
                Episode 01
              </h2>
            </div>
            <div className="text-xs text-gray-600 font-mono flex items-center">
              <Lock className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
              Closed-Door Recording at T-Hub, Hyderabad
            </div>
          </div>

          {/* Featured Episode Card */}
          <EpisodeCard />
        </div>
      </CinematicSection>

      {/* 3. THE FORMAT SECTION (WHITE) */}
      <CinematicSection theme="white" id="format">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {formatSection.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {formatSection.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formatSection.cards.map((card) => (
              <div
                key={card.number}
                className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md h-full"
              >
                <div className="w-8 h-8 rounded-xs bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] font-mono font-bold text-xs flex items-center justify-center">
                  {card.number}
                </div>
                <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                  0{card.number} — {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* 4. UPCOMING EPISODES SECTION (SUBTLE SOFT GRAY #F7F7F7) */}
      <CinematicSection theme="gray" id="upcoming-episodes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block font-bold">
              {upcomingEpisodes.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {upcomingEpisodes.headline}
            </h2>
            <p className="text-xs text-gray-600 max-w-lg font-sans">
              {upcomingEpisodes.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {upcomingEpisodes.episodes.map((ep, idx) => (
              <div
                key={idx}
                className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md h-full"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gray-900 tracking-widest">
                    {ep.number}
                  </span>
                  <span className="px-2.5 py-1 bg-white border border-[#FF5A1F]/20 text-[10px] font-mono text-[#FF5A1F] font-semibold uppercase rounded-xs">
                    {ep.status}
                  </span>
                </div>
                <h3 className="font-editorial-heading text-xl font-bold text-gray-800">
                  Guest Announcement Coming Soon
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {ep.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* 5. FOLLOW THE SERIES (WHITE) */}
      <CinematicSection theme="white" id="channels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {followSeries.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {followSeries.headline}
            </h2>
            <p className="text-xs text-gray-600">{followSeries.subhead}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* YouTube */}
            <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center">
                  <YoutubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                    YouTube
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5A1F] mt-0.5">
                    {followSeries.channels[0].description}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200/60">
                <span className="px-3 py-1 bg-white border border-gray-200 text-[10px] font-mono font-bold text-gray-800 uppercase rounded-xs">
                  {followSeries.channels[0].status}
                </span>
              </div>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/thecatalyst_tech?stkn=eXl5cWtsMzc2NWFw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between h-full group"
              title="Follow The Catalyst Room on Instagram (@thecatalyst_tech)"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-pink-600/10 text-pink-600 flex items-center justify-center transition-transform group-hover:scale-110">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial-heading text-xl font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors flex items-center justify-between">
                    <span>Instagram</span>
                    <span className="text-xs font-mono text-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5A1F] mt-0.5">
                    {followSeries.channels[1].description}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="px-3 py-1 bg-[#FF5A1F] text-white text-[10px] font-mono font-bold uppercase rounded-xs transition-colors group-hover:bg-[#E04B14]">
                  FOLLOW ON INSTAGRAM →
                </span>
                <span className="text-[11px] font-mono text-gray-500 group-hover:text-[#FF5A1F] transition-colors">
                  @thecatalyst_tech
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] hover:-translate-y-1 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                    LinkedIn
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5A1F] mt-0.5">
                    {followSeries.channels[2].description}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200/60">
                <span className="px-3 py-1 bg-white border border-gray-200 text-[10px] font-mono font-bold text-gray-800 uppercase rounded-xs">
                  {followSeries.channels[2].status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* 6. FINAL EPISODES CTA (SUBTLE SOFT GRAY #F7F7F7) */}
      <CinematicSection theme="gray" id="participation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 sm:p-12 lg:p-16 rounded-xs space-y-8 shadow-sm text-center hover:border-[#FF5A1F]/50 transition-colors">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F] block font-bold">
                PARTICIPATION
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
                  className={`w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-200 hover:-translate-y-[1px] flex items-center justify-center space-x-2 group ${
                    idx === 0
                      ? "bg-[#FF5A1F] hover:bg-[#E04B14] text-white shadow-md"
                      : "bg-white hover:bg-gray-50 border border-gray-300 text-gray-900"
                  }`}
                >
                  <span>{btn.text}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </CinematicSection>
    </div>
  );
};

export default Episodes;
