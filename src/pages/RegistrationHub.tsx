import React from "react";
import { Handshake, UserCheck, Rocket, ExternalLink } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { GOOGLE_FORM_LINKS } from "../data/formsConfig";
import { ScrollReveal } from "../components/ScrollReveal";

export const RegistrationHub: React.FC = () => {
  const handleOpenForm = (url: string, title: string) => {
    if (!url || url.includes("PASTE_")) {
      alert(
        `${title} Form URL: Please configure the URL in 'src/data/formsConfig.ts' (Current placeholder: ${url})`
      );
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Register with The Catalyst Room"
        description="Choose how you want to be part of the room. Register as Partner, Guest, or Founder."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white text-[#111827] border-b border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF5A1F] font-bold block animate-hero-eyebrow">
              PLATFORM PARTICIPATION
            </span>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold text-gray-900 leading-tight animate-hero-headline">
              REGISTER WITH THE CATALYST ROOM
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto font-normal animate-hero-subhead">
              Choose how you want to be part of the room.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Registration Blocks in Inverted Triangle Layout (Subtle Soft Gray #F7F7F7) */}
      <section className="py-20 lg:py-28 bg-[#F7F7F7] text-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TOP ROW: PARTNER (TOP LEFT) & GUEST (TOP RIGHT) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* 01. PARTNER (TOP LEFT) */}
            <ScrollReveal delay={100}>
              <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 sm:p-10 rounded-xs space-y-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#FF5A1F] transition-all duration-300 flex flex-col justify-between group h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF5A1F] tracking-widest uppercase">
                      01 — PARTNER
                    </span>
                    <div className="p-2.5 bg-[#FF5A1F]/10 rounded-xs text-[#FF5A1F] transition-transform group-hover:scale-105">
                      <Handshake className="w-6 h-6" />
                    </div>
                  </div>

                  <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors">
                    REGISTER AS PARTNER
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    For brands, businesses and ecosystem organisations interested in partnering with The Catalyst Room.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#FF5A1F]/15">
                  <div className="bg-white border border-[#FF5A1F]/15 p-4 rounded-xs space-y-1">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                      GOOGLE FORM
                    </span>
                    <p className="text-xs font-mono text-gray-700 font-semibold break-all">
                      [PASTE PARTNER GOOGLE FORM LINK HERE]
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleOpenForm(GOOGLE_FORM_LINKS.PARTNER_FORM_URL, "Partner")
                    }
                    className="w-full py-3.5 px-6 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-200 hover:-translate-y-[1px] shadow-md flex items-center justify-center space-x-2 cursor-pointer group-hover:bg-[#E04B14]"
                  >
                    <span>OPEN PARTNER FORM</span>
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* 02. GUEST (TOP RIGHT) */}
            <ScrollReveal delay={200}>
              <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 sm:p-10 rounded-xs space-y-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#FF5A1F] transition-all duration-300 flex flex-col justify-between group h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF5A1F] tracking-widest uppercase">
                      02 — GUEST
                    </span>
                    <div className="p-2.5 bg-[#FF5A1F]/10 rounded-xs text-[#FF5A1F] transition-transform group-hover:scale-105">
                      <UserCheck className="w-6 h-6" />
                    </div>
                  </div>

                  <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors">
                    REGISTER AS GUEST
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    For invited guests and ecosystem participants who want to participate in The Catalyst Room experience.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#FF5A1F]/15">
                  <div className="bg-white border border-[#FF5A1F]/15 p-4 rounded-xs space-y-1">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                      GOOGLE FORM
                    </span>
                    <p className="text-xs font-mono text-gray-700 font-semibold break-all">
                      [PASTE GUEST GOOGLE FORM LINK HERE]
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleOpenForm(GOOGLE_FORM_LINKS.GUEST_FORM_URL, "Guest")
                    }
                    className="w-full py-3.5 px-6 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-200 hover:-translate-y-[1px] shadow-md flex items-center justify-center space-x-2 cursor-pointer group-hover:bg-[#E04B14]"
                  >
                    <span>OPEN GUEST FORM</span>
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* BOTTOM ROW: FOUNDER (BOTTOM CENTER) */}
          <div className="mt-8 md:mt-10 max-w-xl mx-auto">
            <ScrollReveal delay={300}>
              <div className="bg-[#FFF9F5] border border-[#FF5A1F]/20 p-8 sm:p-10 rounded-xs space-y-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#FF5A1F] transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF5A1F] tracking-widest uppercase">
                      03 — FOUNDER
                    </span>
                    <div className="p-2.5 bg-[#FF5A1F]/10 rounded-xs text-[#FF5A1F] transition-transform group-hover:scale-105">
                      <Rocket className="w-6 h-6" />
                    </div>
                  </div>

                  <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#FF5A1F] transition-colors">
                    REGISTER AS FOUNDER
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    For founders and entrepreneurs who want to join the conversation, connect with the ecosystem and explore meaningful opportunities.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#FF5A1F]/15">
                  <div className="bg-white border border-[#FF5A1F]/15 p-4 rounded-xs space-y-1">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block">
                      GOOGLE FORM
                    </span>
                    <p className="text-xs font-mono text-gray-700 font-semibold break-all">
                      [PASTE FOUNDER GOOGLE FORM LINK HERE]
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleOpenForm(GOOGLE_FORM_LINKS.FOUNDER_FORM_URL, "Founder")
                    }
                    className="w-full py-3.5 px-6 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-all duration-200 hover:-translate-y-[1px] shadow-md flex items-center justify-center space-x-2 cursor-pointer group-hover:bg-[#E04B14]"
                  >
                    <span>OPEN FOUNDER FORM</span>
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationHub;
