import React from "react";
import { SEOHead } from "../components/SEOHead";
import { PartnershipTable } from "../components/PartnershipTable";
import { InKindPartnerTable } from "../components/InKindPartnerTable";
import { PARTNER_CONTENT } from "../data/content";

export const Partner: React.FC = () => {
  const { hero } = PARTNER_CONTENT;

  return (
    <div className="w-full">
      <SEOHead
        title="Partner With Us"
        description="Choose your place in The Catalyst Room. Explore Starter, Strategic, Presenting, and In-Kind partner access across three episodes."
      />

      {/* HERO SECTION (Dark Charcoal Background) */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] block">
              PARTNERSHIP OPPORTUNITIES
            </span>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-[#E8E6E1] leading-tight">
              {hero.headline}
            </h1>
            <p className="text-sm sm:text-base text-[#8A8F98] max-w-2xl">
              Strictly limited partner allocations across the first three recorded episodes at T-Hub, Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: MONETARY PARTNERSHIP TABLE (Dark Charcoal / Alternating Section) */}
      <section className="py-16 lg:py-24 bg-[#14161A] text-[#E8E6E1] border-b border-[#2A2F3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5A1F] block">
              PARTNERSHIP TIERS & PRICING
            </span>
            <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-[#E8E6E1]">
              Financial Partnership Structure
            </h2>
          </div>

          <PartnershipTable />
        </div>
      </section>

      {/* SECTION 2: IN-KIND PARTNERSHIPS (Alternating Light Warm White Section) */}
      <section className="py-16 lg:py-24 bg-[#E8E6E1] text-[#14161A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <InKindPartnerTable />
        </div>
      </section>
    </div>
  );
};
