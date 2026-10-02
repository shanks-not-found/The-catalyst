import React from "react";
import { Calendar, MapPin, Lock, Users } from "lucide-react";
import { HOME_CONTENT } from "../data/content";

export const EventStrip: React.FC = () => {
  const { eventStrip } = HOME_CONTENT;

  return (
    <div className="w-full bg-[#181C23] border-y border-[#2A2F3A] py-6 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Item 1: Date */}
          <div className="bg-[#14161A]/80 border border-[#2A2F3A] p-4 rounded-xs flex items-start space-x-3 hover:border-[#FF5A1F]/40 transition-colors">
            <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mt-0.5 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8F98] font-mono block">
                DATE
              </span>
              <span className="text-xs font-semibold text-[#E8E6E1] leading-snug">
                {eventStrip.startDate.replace("Starting From: ", "")}
              </span>
            </div>
          </div>

          {/* Item 2: Venue */}
          <div className="bg-[#14161A]/80 border border-[#2A2F3A] p-4 rounded-xs flex items-start space-x-3 hover:border-[#FF5A1F]/40 transition-colors">
            <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mt-0.5 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8F98] font-mono block">
                VENUE
              </span>
              <span className="text-xs font-semibold text-[#E8E6E1] leading-snug">
                {eventStrip.venue.replace("Venue: ", "")}
              </span>
            </div>
          </div>

          {/* Item 3: Format */}
          <div className="bg-[#14161A]/80 border border-[#2A2F3A] p-4 rounded-xs flex items-start space-x-3 hover:border-[#FF5A1F]/40 transition-colors">
            <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mt-0.5 shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8F98] font-mono block">
                FORMAT
              </span>
              <span className="text-xs font-semibold text-[#E8E6E1] leading-snug">
                {eventStrip.format.replace("Format: ", "")}
              </span>
            </div>
          </div>

          {/* Item 4: In The Room */}
          <div className="bg-[#14161A]/80 border border-[#2A2F3A] p-4 rounded-xs flex items-start space-x-3 hover:border-[#FF5A1F]/40 transition-colors">
            <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mt-0.5 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8F98] font-mono block">
                IN THE ROOM
              </span>
              <span className="text-xs font-semibold text-[#E8E6E1] leading-snug">
                Founders · Investors · Business & GCC leaders
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
