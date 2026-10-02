import React from "react";
import { Shield } from "lucide-react";
import { PARTNER_CONTENT } from "../data/content";

export const PartnershipTable: React.FC = () => {
  const { sponsorship } = PARTNER_CONTENT;

  return (
    <div className="w-full space-y-8">
      {/* Desktop Table View (Hidden on mobile) */}
      <div className="hidden lg:block overflow-hidden rounded-xs border border-gray-200 bg-white shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200 text-gray-700 font-mono text-[11px] uppercase tracking-widest">
              <th className="py-5 px-6 font-semibold w-1/4">PARTNERSHIP</th>
              <th className="py-5 px-6 font-semibold w-1/5">INVESTMENT</th>
              <th className="py-5 px-6 font-semibold w-1/4">ASSOCIATION</th>
              <th className="py-5 px-6 font-semibold w-3/10">KEY BENEFITS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sponsorship.tiers.map((tier) => (
              <tr
                key={tier.id}
                className={`transition-colors ${
                  tier.badge
                    ? "bg-[#FF5A1F]/5 hover:bg-[#FF5A1F]/10 border-l-4 border-l-[#FF5A1F]"
                    : "hover:bg-gray-50"
                }`}
              >
                <td className="py-6 px-6 align-top">
                  <div className="font-editorial-heading text-lg font-bold text-gray-900">
                    {tier.name}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-sans">
                    {tier.description}
                  </p>
                  {tier.badge && (
                    <span className="inline-block mt-3 px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-mono font-bold bg-[#FF5A1F] text-white rounded-xs">
                      {tier.badge}
                    </span>
                  )}
                </td>
                <td className="py-6 px-6 align-top">
                  <div className="text-lg sm:text-xl font-editorial-statement font-bold text-[#FF5A1F]">
                    {tier.fee}
                  </div>
                </td>
                <td className="py-6 px-6 align-top">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-900 rounded-xs border border-gray-200">
                    {tier.association}
                  </span>
                </td>
                <td className="py-6 px-6 align-top">
                  <p className="text-xs text-gray-700 leading-relaxed font-mono">
                    {tier.keyBenefits}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View (Visible on mobile/tablet) */}
      <div className="lg:hidden space-y-6">
        {sponsorship.tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-6 rounded-xs border ${
              tier.badge
                ? "bg-white border-[#FF5A1F] relative overflow-hidden shadow-md"
                : "bg-white border-gray-200 shadow-xs"
            } space-y-4`}
          >
            {tier.badge && (
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#FF5A1F] text-white text-[9px] uppercase tracking-widest font-mono font-bold rounded-bl-xs">
                {tier.badge}
              </div>
            )}
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 block font-semibold">
                PARTNERSHIP LEVEL
              </span>
              <h3 className="font-editorial-heading text-xl font-bold text-gray-900 mt-0.5">
                {tier.name}
              </h3>
              <p className="text-xs text-gray-600 mt-1 font-sans">
                {tier.description}
              </p>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 block font-semibold">
                INVESTMENT
              </span>
              <div className="text-2xl font-editorial-statement font-bold text-[#FF5A1F] mt-1">
                {tier.fee}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 block mb-1 font-semibold">
                ASSOCIATION
              </span>
              <span className="inline-block px-3 py-1 bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-900 rounded-xs">
                {tier.association}
              </span>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 block mb-2 font-semibold">
                KEY BENEFITS
              </span>
              <p className="text-xs text-gray-700 font-mono leading-relaxed">
                {tier.keyBenefits}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footnote / Legal Qualifier */}
      <div className="flex items-start space-x-3 text-xs text-gray-600 bg-gray-50 p-4 border border-gray-200 rounded-xs leading-relaxed">
        <Shield className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
        <span>{sponsorship.legalQualifier}</span>
      </div>
    </div>
  );
};

