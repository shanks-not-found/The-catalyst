import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "../data/content";


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
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-2.5 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Image with seamless blend & prominent presence */}
          <Link
            to="/"
            className="group flex items-center shrink-0 focus:outline-none py-0.5"
            aria-label="The Catalyst Room Home"
          >
            <img
              src="/logo.jpg"
              alt="The Catalyst Room"
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-[1.01]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs uppercase tracking-widest font-semibold transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#FF5A1F] font-bold"
                      : "text-gray-700 hover:text-[#FF5A1F]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Persistent Register Button (No Dropdown) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/register"
              className="px-6 py-2.5 bg-[#FF5A1F] hover:bg-[#E04B14] text-white text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-sm inline-flex items-center space-x-2"
            >
              <span>REGISTER</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <Link
              to="/register"
              className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-[#FF5A1F] rounded-xs"
            >
              REGISTER
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 text-gray-900 hover:text-[#FF5A1F] focus:outline-none rounded-md transition-colors"
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
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-white/98 backdrop-blur-xl border-t border-gray-200 flex flex-col justify-between px-6 py-6 animate-fadeIn text-gray-900 overflow-y-auto">
          <nav className="flex flex-col space-y-4 pt-2">
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-[#FF5A1F]" /> Navigation
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-editorial-heading tracking-wide transition-colors flex items-center justify-between border-b border-gray-200 pb-2 ${
                    isActive ? "text-[#FF5A1F] font-bold pl-2 border-l-2 border-l-[#FF5A1F]" : "text-gray-900 hover:text-[#FF5A1F]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-[10px] text-[#FF5A1F] font-mono font-bold">ACTIVE</span>}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Registration Button */}
          <div className="pt-6 border-t border-gray-200">
            <Link
              to="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 px-4 text-xs font-bold uppercase tracking-widest text-white bg-[#FF5A1F] active:bg-[#E04B14] rounded-xs shadow-md flex items-center justify-between"
            >
              <span>REGISTER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


