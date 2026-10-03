import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";
import { YoutubeIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { NAV_ITEMS, SITE_METADATA } from "../data/content";
import { ScrollReveal } from "./ScrollReveal";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-full overflow-hidden bg-white border-t border-gray-200 text-[#111827] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-200">
            {/* Brand & Tagline */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center">
                <Link to="/" className="inline-block focus:outline-none">
                  <img
                    src="/logo.jpg"
                    alt="The Catalyst Room"
                    className="h-9 sm:h-12 w-auto object-contain mix-blend-multiply"
                  />
                </Link>
              </div>
              <p className="font-serif italic text-[#FF5A1F] text-base tracking-wide">
                "{SITE_METADATA.tagline}"
              </p>
              <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
                {SITE_METADATA.footerDescription}
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                Platform Navigation
              </h4>
              <ul className="space-y-2.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-xs uppercase tracking-wider text-gray-700 hover:text-[#FF5A1F] transition-colors inline-flex items-center group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FF5A1F]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Channels & Location */}
            <div className="md:col-span-4 space-y-5">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                Platform Location & Channels
              </h4>
              <div className="flex items-center text-xs text-gray-600 font-mono">
                <MapPin className="w-3.5 h-3.5 mr-2 text-[#FF5A1F]" />
                <span>{SITE_METADATA.location}</span>
              </div>

              {/* Social Icons */}
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2 font-mono">
                  Official Channels
                </span>
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 cursor-not-allowed hover:border-[#FF5A1F]/40 transition-colors" title="YouTube - Coming Soon">
                    <YoutubeIcon className="w-4 h-4" />
                  </span>
                  <a
                    href={SITE_METADATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all duration-200 shadow-xs hover:shadow-md hover:scale-105"
                    title="Follow The Catalyst Room on Instagram (@thecatalyst_tech)"
                    aria-label="The Catalyst Room on Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 cursor-not-allowed hover:border-[#FF5A1F]/40 transition-colors" title="LinkedIn - Coming Soon">
                    <LinkedinIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <div>
            © {SITE_METADATA.copyrightYear} {SITE_METADATA.title}. All rights reserved.
          </div>
          <div className="text-[11px] font-mono tracking-wider text-gray-500">
            catalyst.tech · Hyderabad, India
          </div>
        </div>
      </div>
    </footer>
  );
};
