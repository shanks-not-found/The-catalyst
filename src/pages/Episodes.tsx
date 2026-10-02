import React from "react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { YoutubeIcon, InstagramIcon, LinkedinIcon } from "../components/SocialIcons";
import { SEOHead } from "../components/SEOHead";
import { EpisodeCard } from "../components/EpisodeCard";
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

      {/* 2. EPISODE 01 SECTION — FEATURED INAUGURAL SESSION */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
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
      </section>

      {/* 3. THE FORMAT SECTION — MORE THAN A PODCAST */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
                className="bg-gray-50 border border-gray-200 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs"
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
      </section>

      {/* 4. UPCOMING EPISODES SECTION — THE SERIES */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
                className="bg-white border border-gray-200 p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gray-900 tracking-widest">
                    {ep.number}
                  </span>
                  <span className="px-2.5 py-1 bg-gray-100 border border-gray-200 text-[10px] font-mono text-[#FF5A1F] font-semibold uppercase rounded-xs">
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
      </section>

      {/* 5. FOLLOW THE SERIES — THE ROOM, OUTSIDE THE ROOM */}
      <section className="py-20 lg:py-28 bg-white text-[#111827] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              {followSeries.eyebrow}
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
              {followSeries.headline}
            </h2>
            <p className="text-xs text-gray-600">
              {followSeries.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* YouTube */}
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs flex flex-col justify-between">
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
              <div className="pt-4 border-t border-gray-200">
                <span className="px-3 py-1 bg-gray-200 text-[10px] font-mono font-bold text-gray-800 uppercase rounded-xs">
                  {followSeries.channels[0].status}
                </span>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-pink-600/10 text-pink-600 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial-heading text-xl font-bold text-gray-900">
                    Instagram
                  </h3>
                  <p className="text-xs font-semibold text-[#FF5A1F] mt-0.5">
                    {followSeries.channels[1].description}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <span className="px-3 py-1 bg-gray-200 text-[10px] font-mono font-bold text-gray-800 uppercase rounded-xs">
                  {followSeries.channels[1].status}
                </span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs flex flex-col justify-between">
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
              <div className="pt-4 border-t border-gray-200">
                <span className="px-3 py-1 bg-gray-200 text-[10px] font-mono font-bold text-gray-800 uppercase rounded-xs">
                  {followSeries.channels[2].status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL EPISODES CTA — WANT TO BE IN THE ROOM? */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 p-8 sm:p-12 lg:p-16 rounded-xs space-y-8 shadow-xl text-center">
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

