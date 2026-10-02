import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { YoutubeIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { NAV_ITEMS, SITE_METADATA } from "../data/content";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14161A] border-t border-[#2A2F3A] text-[#E8E6E1] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2A2F3A]">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF5A1F] text-[#14161A] font-bold flex items-center justify-center text-sm rounded-xs">
                CR
              </div>
              <span className="font-editorial-heading font-semibold text-xl tracking-wider text-[#E8E6E1]">
                THE CATALYST ROOM
              </span>
            </div>
            <p className="font-serif italic text-[#FF5A1F] text-base tracking-wide">
              "{SITE_METADATA.tagline}"
            </p>
            <p className="text-xs text-[#8A8F98] max-w-sm leading-relaxed">
              A curated founder platform bringing founders, investors, business leaders and ecosystem stakeholders into one room — beginning at T-Hub, Hyderabad.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8A8F98]">
              Platform Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-xs uppercase tracking-wider text-[#E8E6E1]/80 hover:text-[#FF5A1F] transition-colors inline-flex items-center group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FF5A1F]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information & Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8A8F98]">
              Direct Contact & Access
            </h4>
            <div className="space-y-3 text-xs">
              <p className="text-[#E8E6E1] font-medium">{SITE_METADATA.founderRole}</p>
              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="flex items-center text-[#E8E6E1]/80 hover:text-[#FF5A1F] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 mr-2 text-[#FF5A1F]" />
                <span>{SITE_METADATA.email}</span>
              </a>
              <a
                href={`tel:${SITE_METADATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center text-[#E8E6E1]/80 hover:text-[#FF5A1F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#FF5A1F]" />
                <span>{SITE_METADATA.phone}</span>
              </a>
              <div className="flex items-center text-[#8A8F98]">
                <MapPin className="w-3.5 h-3.5 mr-2 text-[#8A8F98]" />
                <span>{SITE_METADATA.location}</span>
              </div>
            </div>

            {/* Social Icons (Links TBD as per Source of Truth) */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#8A8F98] block mb-2 font-mono">
                Official Channels (TBD)
              </span>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2F3A] text-[#8A8F98] cursor-not-allowed hover:border-[#FF5A1F]/40" title="YouTube (Catalyst by John) - Coming Soon">
                  <YoutubeIcon className="w-4 h-4" />
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2F3A] text-[#8A8F98] cursor-not-allowed hover:border-[#FF5A1F]/40" title="Instagram - Coming Soon">
                  <InstagramIcon className="w-4 h-4" />
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#2A2F3A] text-[#8A8F98] cursor-not-allowed hover:border-[#FF5A1F]/40" title="LinkedIn - Coming Soon">
                  <LinkedinIcon className="w-4 h-4" />
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8F98] space-y-4 sm:space-y-0">
          <div>
            © {SITE_METADATA.copyrightYear} {SITE_METADATA.title}. All rights reserved.
          </div>
          <div className="text-[11px] font-mono tracking-wider text-[#8A8F98]">
            catalyst.tech · Hyderabad, India
          </div>
        </div>
      </div>
    </footer>
  );
};
