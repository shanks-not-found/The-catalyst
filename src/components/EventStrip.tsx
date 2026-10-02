import React from "react";
import { Calendar, MapPin, Layers, Users } from "lucide-react";
import { HOME_CONTENT } from "../data/content";

export const EventStrip: React.FC = () => {
  const { eventStrip } = HOME_CONTENT;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Calendar className="w-4 h-4" />;
      case 1:
        return <MapPin className="w-4 h-4" />;
      case 2:
        return <Layers className="w-4 h-4" />;
      case 3:
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full bg-[#F8F9FA] border-y border-gray-200 py-6 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {eventStrip.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-4 rounded-xs flex items-start space-x-3 hover:border-[#FF5A1F] transition-colors shadow-xs"
            >
              <div className="p-2 bg-[#FF5A1F]/10 text-[#FF5A1F] rounded-xs mt-0.5 shrink-0">
                {getIcon(idx)}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono block">
                  {item.label}
                </span>
                <span className="text-xs font-semibold text-gray-900 leading-snug">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

