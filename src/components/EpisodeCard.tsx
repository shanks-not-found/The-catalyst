import React from "react";
import { Link } from "react-router-dom";
import { Play, Calendar, MapPin, Sparkles, ShieldAlert, ArrowRight } from "lucide-react";
import { EPISODES_CONTENT } from "../data/content";

export const EpisodeCard: React.FC = () => {
  const ep = EPISODES_CONTENT.episode01;

  return (
    <div className="w-full bg-[#FFF9F5] border border-[#FF5A1F]/25 rounded-xs overflow-hidden shadow-sm hover:shadow-md hover:border-[#FF5A1F]/50 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Video Thumbnail Placeholder Frame */}
        <div 
          className="lg:col-span-5 relative p-8 min-h-[300px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#FF5A1F]/15 group bg-cover bg-center rounded-xs overflow-hidden"
          style={{ backgroundImage: "url('/coming-soon-bg.jpg')" }}
        >
          {/* Subtle neutral overlay for content readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 bg-[#FF5A1F] text-white text-[10px] uppercase font-mono font-bold tracking-widest rounded-xs">
              {ep.label}
            </span>
            <span className="text-[10px] font-mono text-[#FF5A1F] uppercase tracking-widest flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse mr-1.5" />
              COMING SOON
            </span>
          </div>

          <div className="relative z-10 my-auto py-8 text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FF5A1F]/20 border border-[#FF5A1F]/60 text-[#FF5A1F] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#FF5A1F] group-hover:text-white transition-all duration-300 cursor-pointer backdrop-blur-xs">
              <Play className="w-7 h-7 ml-1 fill-current" />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-mono text-[#FF5A1F] font-bold tracking-widest uppercase">
                {ep.videoStatus}
              </p>
              <p className="text-[11px] font-mono text-gray-300 uppercase tracking-widest">
                {ep.brandText}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-between text-xs text-gray-300 pt-4 border-t border-white/20 gap-2">
            <span className="flex items-center font-mono text-[11px] text-gray-200">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
              {ep.date}
            </span>
            <span className="flex items-center font-mono text-[11px] text-gray-200">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
              {ep.venue}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold">
                {ep.label}
              </span>
              <span className="text-xs text-gray-300">|</span>
              <span className="text-[11px] font-mono text-gray-500">
                {ep.format}
              </span>
            </div>

            <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {ep.headline}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              {ep.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-gray-500">
              <ShieldAlert className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>AUDIENCE:</span>
              <span className="text-gray-900 font-semibold">{ep.audience}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#FF5A1F]/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-600 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
              <span>Closed-door recording at T-Hub, Hyderabad</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/register"
                className="px-6 py-3.5 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-200 hover:-translate-y-[1px] shadow-md flex items-center justify-center space-x-2 shrink-0 group"
              >
                <span>REGISTER</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
