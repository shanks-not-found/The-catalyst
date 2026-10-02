import React, { useState } from "react";
import { Play, Bell, Calendar, MapPin, Check, Sparkles } from "lucide-react";
import { EPISODES_CONTENT } from "../data/content";

export const EpisodeCard: React.FC = () => {
  const episode = EPISODES_CONTENT.episodes[0];
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setShowModal(false);
    }
  };

  return (
    <div className="w-full bg-[#14161A] border border-[#2A2F3A] rounded-xs overflow-hidden shadow-2xl hover:border-[#FF5A1F]/40 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Visual Media Placeholder Thumbnail */}
        <div className="lg:col-span-5 relative bg-gradient-to-br from-[#1E222A] to-[#14161A] p-8 min-h-[260px] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2A2F3A]">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#FF5A1F] text-[#14161A] text-[10px] uppercase font-mono font-bold tracking-widest rounded-xs">
              INAUGURAL SESSION
            </span>
            <span className="text-[10px] font-mono text-[#8A8F98] uppercase tracking-widest">
              PRE-LAUNCH
            </span>
          </div>

          <div className="my-auto py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 text-[#FF5A1F] flex items-center justify-center shadow-lg group">
              <Play className="w-7 h-7 ml-1 text-[#FF5A1F]" />
            </div>
            <p className="text-xs text-[#8A8F98] font-mono tracking-wider">
              VIDEO & PODCAST RECORDING
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-[#8A8F98]">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
              30 Oct 2026
            </span>
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
              T-Hub, Hyderabad
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F]">
              {episode.number} · PRE-LAUNCH FEATURED STATE
            </div>
            <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1] leading-tight">
              {episode.title}
            </h3>
            <p className="text-sm text-[#E8E6E1]/80 leading-relaxed font-sans">
              {episode.description}
            </p>
          </div>

          <div className="pt-6 border-t border-[#2A2F3A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#8A8F98] flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#FF5A1F]" />
              Founders · Investors · GCC Leaders
            </div>

            {subscribed ? (
              <div className="w-full sm:w-auto px-5 py-2.5 bg-[#FF5A1F]/10 border border-[#FF5A1F] text-[#FF5A1F] text-xs font-bold rounded-xs flex items-center justify-center space-x-2">
                <Check className="w-4 h-4" />
                <span>You will be notified for launch!</span>
              </div>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#FF5A1F] hover:bg-[#E04B14] text-[#14161A] text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Notify Me for Launch</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-[#14161A]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1E222A] border border-[#2A2F3A] p-6 sm:p-8 rounded-xs max-w-md w-full shadow-2xl space-y-4 relative">
            <h4 className="font-editorial-heading text-xl font-bold text-[#E8E6E1]">
              Get Notified for Episode 1
            </h4>
            <p className="text-xs text-[#8A8F98] leading-relaxed">
              Enter your email to receive direct notifications when Episode 1 drops from T-Hub, Hyderabad.
            </p>
            <form onSubmit={handleNotifySubmit} className="space-y-4 pt-2">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="founder@company.com"
                className="w-full px-4 py-3 bg-[#14161A] border border-[#2A2F3A] text-xs text-[#E8E6E1] rounded-xs focus:outline-none focus:border-[#FF5A1F]"
              />
              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-xs text-[#8A8F98] hover:text-[#E8E6E1]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#FF5A1F] text-[#14161A] text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-[#E04B14]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
