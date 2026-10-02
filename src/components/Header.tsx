import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { NAV_ITEMS, SITE_METADATA } from "../data/content";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#14161A]/95 backdrop-blur-md border-b border-[#2A2F3A] py-3 shadow-xl"
          : "bg-gradient-to-b from-[#14161A]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none"
            aria-label="The Catalyst Room Home"
          >
            <div className="w-9 h-9 rounded-sm bg-[#FF5A1F] text-[#14161A] flex items-center justify-center font-bold text-lg tracking-wider group-hover:scale-105 transition-transform">
              CR
            </div>
            <div className="flex flex-col">
              <span className="font-editorial-heading font-semibold text-lg sm:text-xl text-[#E8E6E1] tracking-wider leading-tight group-hover:text-white transition-colors">
                THE CATALYST ROOM
              </span>
              <span className="text-[10px] text-[#8A8F98] uppercase tracking-widest hidden sm:block">
                catalyst.tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#FF5A1F] font-semibold"
                      : "text-[#E8E6E1]/80 hover:text-[#E8E6E1]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F] rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Persistent CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/partner"
              className="group inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#14161A] bg-[#FF5A1F] hover:bg-[#E04B14] rounded-xs transition-all duration-200 shadow-md hover:shadow-[#FF5A1F]/20"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link
              to="/partner"
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#14161A] bg-[#FF5A1F] rounded-xs"
            >
              Partner
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 text-[#E8E6E1] hover:text-[#FF5A1F] focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] rounded-md transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-[#14161A]/98 backdrop-blur-xl border-t border-[#2A2F3A] flex flex-col justify-between px-6 py-8 animate-fadeIn">
          <nav className="flex flex-col space-y-6 pt-4">
            <div className="text-[10px] uppercase tracking-widest text-[#8A8F98] mb-2 font-mono flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-[#FF5A1F]" /> Platform Navigation
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-editorial-heading tracking-wide transition-colors flex items-center justify-between border-b border-[#2A2F3A]/40 pb-3 ${
                    isActive ? "text-[#FF5A1F] font-bold pl-2 border-l-2 border-l-[#FF5A1F]" : "text-[#E8E6E1] hover:text-[#FF5A1F]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#FF5A1F] font-mono">ACTIVE</span>}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col space-y-4 pt-6 border-t border-[#2A2F3A]">
            <div className="text-xs text-[#8A8F98] text-center">
              {SITE_METADATA.tagline}
            </div>
            <Link
              to="/partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-widest text-[#14161A] bg-[#FF5A1F] active:bg-[#E04B14] rounded-xs shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
