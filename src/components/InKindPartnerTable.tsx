import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";
import { PARTNER_CONTENT } from "../data/content";

export const InKindPartnerTable: React.FC = () => {
  const { strategicPartnerships } = PARTNER_CONTENT;

  return (
    <div className="w-full space-y-10" id="strategic-partnerships">
      {/* Intro Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-[11px] uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block">
          IN-KIND & INFRASTRUCTURE
        </span>
        <h2 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-gray-900">
          {strategicPartnerships.heading}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed font-sans">
          {strategicPartnerships.intro}
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategicPartnerships.categories.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 p-6 rounded-xs space-y-4 hover:border-[#FF5A1F] transition-all shadow-xs flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF5A1F] uppercase">
                  {item.category}
                </span>
                <Handshake className="w-4 h-4 text-gray-400 group-hover:text-[#FF5A1F] transition-colors" />
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500 uppercase font-semibold">POSITION</span>
              <span className="text-xs font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors">
                {item.partnerPosition}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Strip */}
      <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-gray-600 italic">
          Opportunities are subject to relevance, availability and mutual fit.
        </p>
        <Link
          to="/register"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xs transition-all shadow-md group shrink-0"
        >
          <span>BECOME A STRATEGIC PARTNER</span>
          <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

