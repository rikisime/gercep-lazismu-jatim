/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, Menu, X, ArrowRight, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenDonate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const waDonateUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    'Assalamu’alaikum Wr. Wb. Halo Tim Program SOS GERCEP PWM & Lazismu Jawa Timur, saya ingin berbagi cahaya donasi.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1"
          >
            {SITE_CONFIG.brand.logoUrl && !imageLoadError ? (
              <img
                src={SITE_CONFIG.brand.logoUrl}
                alt="Logo Lazismu Jawa Timur"
                onError={() => setImageLoadError(true)}
                className="h-9 sm:h-10 w-auto max-w-[170px] object-contain group-hover:scale-102 transition-transform duration-200"
              />
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F26522] via-amber-400 to-[#00A82A] p-[2px] shadow-sm group-hover:shadow-md transition-all">
                <div className="w-full h-full bg-white rounded-[8px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#F26522] group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-[#06301F] tracking-wide flex items-center gap-1.5">
                {SITE_CONFIG.brand.shortName}
              </span>
              <span className="text-[11px] text-[#00A82A] font-extrabold tracking-wider uppercase -mt-0.5 hidden xs:inline">
                PWM & LAZISMU JATIM
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700" aria-label="Menu Utama">
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-[#00A82A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00A82A] hover:after:w-full after:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A82A] rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waDonateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#F26522] hover:bg-[#D44E0E] shadow-sm hover:shadow-[0_4px_16px_rgba(242,101,34,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>Berbagi Cahaya</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            aria-expanded={isMobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-lg text-slate-800 hover:bg-emerald-50 hover:text-[#0B5D3B] font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <a
                href={waDonateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-[#F26522] hover:bg-[#D44E0E] shadow-md text-sm cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Berbagi Cahaya</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
