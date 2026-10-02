import React from "react";
import { Mail } from "lucide-react";
import { PARTNER_CONTENT } from "../data/content";


export const InKindPartnerTable: React.FC = () => {
  const { inKindSection } = PARTNER_CONTENT;

  return (
    <div className="w-full space-y-8">
      {/* Intro Box */}
      <div className="bg-[#14161A] border-l-4 border-l-[#FF5A1F] border border-[#2A2F3A] p-6 sm:p-8 rounded-xs shadow-lg">
        <h3 className="font-editorial-heading text-2xl font-bold text-[#E8E6E1] mb-3">
          {inKindSection.heading}
        </h3>
        <p className="font-serif italic text-base sm:text-lg text-[#E8E6E1]/90 leading-relaxed">
          "{inKindSection.intro}"
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-xs border border-[#2A2F3A] bg-[#14161A] shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1E222A] border-b border-[#2A2F3A] text-[#8A8F98] font-mono text-[11px] uppercase tracking-widest">
              <th className="py-4 px-6 font-semibold w-1/4">CATEGORY</th>
              <th className="py-4 px-6 font-semibold w-2/5">CONTRIBUTION</th>
              <th className="py-4 px-6 font-semibold w-1/3">PARTNER POSITION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2F3A]">
            {inKindSection.categories.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-[#1E222A]/40 transition-colors"
              >
                <td className="py-4 px-6 font-semibold text-xs text-[#E8E6E1] font-mono">
                  {item.category}
                </td>
                <td className="py-4 px-6 text-xs text-[#E8E6E1]/80">
                  {item.contribution}
                </td>
                <td className="py-4 px-6 text-xs font-semibold text-[#FF5A1F]">
                  {item.partnerPosition}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {inKindSection.categories.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-[#14161A] border border-[#2A2F3A] rounded-xs space-y-2 hover:border-[#FF5A1F]/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F98]">
                {item.category}
              </span>
            </div>
            <p className="text-xs font-medium text-[#E8E6E1]">
              <span className="text-[#8A8F98]">Contribution:</span> {item.contribution}
            </p>
            <div className="pt-2 border-t border-[#2A2F3A]/60 flex items-center justify-between">
              <span className="text-[10px] text-[#8A8F98]">POSITION</span>
              <span className="text-xs font-semibold text-[#FF5A1F]">
                {item.partnerPosition}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Availability Note & Become a Partner CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-[#2A2F3A]">
        <p className="text-xs text-[#8A8F98] italic">
          {inKindSection.availabilityNote}
        </p>
        <a
          href={inKindSection.cta.href}
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#14161A] bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xs transition-all shadow-md group"
        >
          <span>{inKindSection.cta.text}</span>
          <Mail className="w-3.5 h-3.5 ml-2 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};
