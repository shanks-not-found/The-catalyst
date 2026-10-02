import React from "react";
import { Radio, ExternalLink, Lock } from "lucide-react";
import { YoutubeIcon, InstagramIcon, LinkedinIcon } from "../components/SocialIcons";
import { SEOHead } from "../components/SEOHead";
import { EpisodeCard } from "../components/EpisodeCard";
import { EPISODES_CONTENT } from "../data/content";


export const Episodes: React.FC = () => {
  const { hero, whereToWatch } = EPISODES_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="Episodes / Content"
        description="Long-form and short-form content from inside The Catalyst Room — founder conversations, investor perspectives and real business outcomes."
      />

      {/* HERO SECTION (Dark Charcoal Background) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] block">
              MEDIA & CONTENT PLATFORM
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

      {/* SECTION 1: EPISODE LISTING (Dark Charcoal Section) */}
      <section className="py-20 lg:py-28 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block">
                PRE-LAUNCH ARCHITECTURE
              </span>
              <h2 className="font-editorial-heading text-3xl font-bold text-[#E8E6E1] mt-1">
                Featured Initial Episode
              </h2>
            </div>
            <div className="text-xs text-[#8A8F98] font-mono flex items-center">
              <Lock className="w-3.5 h-3.5 mr-1 text-[#FF5A1F]" />
              Closed-Door Recording at T-Hub
            </div>
          </div>

          {/* Episode Pre-launch Featured Card */}
          <EpisodeCard />
        </div>
      </section>

      {/* SECTION 2: WHERE TO WATCH (Light Warm White Section) */}
      <section className="py-20 lg:py-28 bg-[#E8E6E1] text-[#14161A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
              DISTRIBUTION CHANNELS
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-[#14161A]">
              {whereToWatch.title}
            </h2>
            <p className="text-xs text-[#14161A]/70">
              Official video and podcast distribution channels for The Catalyst Room.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* YouTube Channel */}
            <div className="bg-white border border-[#D8D4CA] p-6 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center">
                <YoutubeIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial-heading text-lg font-bold text-[#14161A]">
                  YouTube
                </h3>
                <p className="text-xs font-semibold text-[#FF5A1F] mt-0.5">
                  Catalyst by John
                </p>
                <p className="text-[11px] text-[#8A8F98] mt-2">
                  Full long-form video episodes & high-impact clips.
                </p>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center text-xs font-bold text-[#14161A] hover:text-[#FF5A1F] cursor-pointer">
                  <span>Subscribe to Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>

            {/* Spotify */}
            <div className="bg-white/60 border border-[#D8D4CA] p-6 rounded-xs space-y-4 opacity-75">
              <div className="w-10 h-10 rounded-full bg-green-600/10 text-green-600 flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial-heading text-lg font-bold text-[#14161A]">
                  Spotify
                </h3>
                <p className="text-xs font-mono text-[#8A8F98] mt-0.5">
                  Podcast Audio
                </p>
                <p className="text-[11px] text-[#8A8F98] mt-2">
                  Coming soon upon Episode 1 release.
                </p>
              </div>
              <div className="pt-2">
                <span className="px-2.5 py-1 bg-[#D8D4CA]/50 text-[10px] font-mono text-[#14161A] uppercase rounded-xs">
                  COMING SOON (TBD)
                </span>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-white/60 border border-[#D8D4CA] p-6 rounded-xs space-y-4 opacity-75">
              <div className="w-10 h-10 rounded-full bg-pink-600/10 text-pink-600 flex items-center justify-center">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial-heading text-lg font-bold text-[#14161A]">
                  Instagram
                </h3>
                <p className="text-xs font-mono text-[#8A8F98] mt-0.5">
                  Short Form Content
                </p>
                <p className="text-[11px] text-[#8A8F98] mt-2">
                  Highlights, takeaways & quotes.
                </p>
              </div>
              <div className="pt-2">
                <span className="px-2.5 py-1 bg-[#D8D4CA]/50 text-[10px] font-mono text-[#14161A] uppercase rounded-xs">
                  COMING SOON (TBD)
                </span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-white/60 border border-[#D8D4CA] p-6 rounded-xs space-y-4 opacity-75">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial-heading text-lg font-bold text-[#14161A]">
                  LinkedIn
                </h3>
                <p className="text-xs font-mono text-[#8A8F98] mt-0.5">
                  Executive Ecosystem
                </p>
                <p className="text-[11px] text-[#8A8F98] mt-2">
                  Founder insights & ecosystem news.
                </p>
              </div>
              <div className="pt-2">
                <span className="px-2.5 py-1 bg-[#D8D4CA]/50 text-[10px] font-mono text-[#14161A] uppercase rounded-xs">
                  COMING SOON (TBD)
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
