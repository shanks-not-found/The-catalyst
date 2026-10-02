import React from "react";
import { Shield } from "lucide-react";
import { PARTNER_CONTENT } from "../data/content";


export const PartnershipTable: React.FC = () => {
  const { partnershipTiers, footnote, seatStrip } = PARTNER_CONTENT;

  return (
    <div className="w-full space-y-10">
      {/* Seat Scarcity Banner */}
      <div className="bg-[#14161A] border border-[#2A2F3A] p-6 rounded-xs shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-[#FF5A1F] animate-ping" />
            <span className="text-xs uppercase tracking-widest font-mono text-[#8A8F98]">
              Limited Partner Allocations Across 3 Episodes
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {seatStrip.map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-[#1E222A] border border-[#2A2F3A] text-xs font-semibold text-[#E8E6E1] rounded-xs"
              >
                <span className="text-[#FF5A1F] mr-1">●</span> {item.tier}:{" "}
                <span className="text-white font-mono">{item.count}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Table View (Hidden on mobile) */}
      <div className="hidden lg:block overflow-hidden rounded-xs border border-[#2A2F3A] bg-[#14161A] shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1E222A] border-b border-[#2A2F3A] text-[#8A8F98] font-mono text-[11px] uppercase tracking-widest">
              <th className="py-5 px-6 font-semibold w-1/5">TIER</th>
              <th className="py-5 px-6 font-semibold w-1/5">ACCESS</th>
              <th className="py-5 px-6 font-semibold w-1/5">FEE</th>
              <th className="py-5 px-6 font-semibold w-2/5">INCLUDES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2F3A]">
            {partnershipTiers.map((tier) => (
              <tr
                key={tier.id}
                className={`transition-colors ${
                  tier.featured
                    ? "bg-[#FF5A1F]/5 hover:bg-[#FF5A1F]/10 border-l-4 border-l-[#FF5A1F]"
                    : "hover:bg-[#1E222A]/50"
                }`}
              >
                <td className="py-6 px-6 align-top">
                  <div className="font-editorial-heading text-lg font-bold text-[#E8E6E1]">
                    {tier.name}
                  </div>
                  {tier.featured && (
                    <span className="inline-block mt-2 px-2 py-0.5 text-[9px] uppercase tracking-widest font-mono font-bold bg-[#FF5A1F] text-[#14161A] rounded-xs">
                      RECOMMENDED
                    </span>
                  )}
                </td>
                <td className="py-6 px-6 align-top">
                  <span className="inline-block px-3 py-1 bg-[#1E222A] text-xs font-semibold text-[#FF5A1F] rounded-xs border border-[#2A2F3A]">
                    {tier.access}
                  </span>
                </td>
                <td className="py-6 px-6 align-top">
                  <div className="text-xl font-editorial-statement font-bold text-[#E8E6E1]">
                    {tier.fee}
                  </div>
                </td>
                <td className="py-6 px-6 align-top">
                  <p className="text-xs text-[#E8E6E1]/90 leading-relaxed font-normal">
                    {tier.includes}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View (Visible on mobile/tablet) */}
      <div className="lg:hidden space-y-6">
        {partnershipTiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-6 rounded-xs border ${
              tier.featured
                ? "bg-[#1E222A] border-[#FF5A1F] relative overflow-hidden"
                : "bg-[#14161A] border-[#2A2F3A]"
            } space-y-4`}
          >
            {tier.featured && (
              <div className="absolute top-0 right-0 px-4 py-1 bg-[#FF5A1F] text-[#14161A] text-[9px] uppercase tracking-widest font-mono font-bold rounded-bl-xs">
                FEATURED
              </div>
            )}
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#8A8F98] block">
                PARTNERSHIP TIER
              </span>
              <h3 className="font-editorial-heading text-xl font-bold text-[#E8E6E1] mt-0.5">
                {tier.name}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 bg-[#14161A] border border-[#2A2F3A] text-xs font-semibold text-[#FF5A1F] rounded-xs">
                {tier.access}
              </span>
            </div>

            <div className="pt-2 border-t border-[#2A2F3A]">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#8A8F98] block">
                FINANCIAL INVESTMENT
              </span>
              <div className="text-2xl font-editorial-statement font-bold text-[#FF5A1F] mt-1">
                {tier.fee}
              </div>
            </div>

            <div className="pt-2 border-t border-[#2A2F3A]">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#8A8F98] block mb-2">
                WHAT'S INCLUDED
              </span>
              <p className="text-xs text-[#E8E6E1] leading-relaxed">
                {tier.includes}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="flex items-center space-x-2 text-xs text-[#8A8F98] italic bg-[#1E222A]/50 p-4 border border-[#2A2F3A] rounded-xs">
        <Shield className="w-4 h-4 text-[#8A8F98] shrink-0" />
        <span>Footnote: {footnote}</span>
      </div>
    </div>
  );
};
