/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmailInput('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* 1. Newsletter Card: Ikuti Kabar Terbaru Lazismu Jawa Timur (as in uploaded screenshot) */}
        <div className="bg-[#F26522] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-sans font-bold text-lg sm:text-xl text-white mb-1">
              Ikuti Kabar Terbaru Lazismu Jawa Timur
            </h3>
            <p className="text-white/90 text-xs sm:text-sm">
              Update terkini, laporan donasi, dan kegiatan sosial semua langsung di email Anda
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex-1 max-w-md w-full">
            <div className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Masukkan Email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-white text-slate-800 placeholder-slate-400 text-sm px-5 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#00A82A] hover:bg-[#008f24] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Terdaftar!</span>
                  </>
                ) : (
                  <>
                    <span>Langganan</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* 2. Main Lazismu Jawa Timur Card (Matching screenshot layout & branding) */}
        <div className="bg-[#F26522] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Lazismu Logo with Sunburst Petals */}
            <div className="lg:col-span-4 flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-2">
                {SITE_CONFIG.brand.logoUrl ? (
                  <img
                    src={SITE_CONFIG.brand.logoUrl}
                    alt="Logo Lazismu Jawa Timur"
                    className="h-12 w-auto max-w-[200px] object-contain brightness-0 invert"
                  />
                ) : (
                  <>
                    {/* Official Lazismu 8-petaled Sunburst SVG */}
                    <svg
                      viewBox="0 0 100 100"
                      className="w-12 h-12 text-white fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="50" cy="50" r="10" />
                      {/* 8 Elliptical Petals radiating outwards */}
                      <ellipse cx="50" cy="18" rx="5.5" ry="14" />
                      <ellipse cx="50" cy="82" rx="5.5" ry="14" />
                      <ellipse cx="18" cy="50" rx="14" ry="5.5" />
                      <ellipse cx="82" cy="50" rx="14" ry="5.5" />
                      <ellipse cx="27" cy="27" rx="6" ry="14" transform="rotate(45 27 27)" />
                      <ellipse cx="73" cy="73" rx="6" ry="14" transform="rotate(45 73 73)" />
                      <ellipse cx="73" cy="27" rx="6" ry="14" transform="rotate(-45 73 27)" />
                      <ellipse cx="27" cy="73" rx="6" ry="14" transform="rotate(-45 27 73)" />
                    </svg>

                    <div className="flex flex-col">
                      <span className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-none">
                        lazismu
                      </span>
                      <span className="font-sans font-bold text-sm sm:text-base tracking-wider text-white/95 mt-0.5">
                        jawa timur
                      </span>
                    </div>
                  </>
                )}
              </div>

              <p className="text-white/85 text-xs sm:text-sm mt-3 leading-relaxed">
                Lembaga Amil Zakat, Infaq, dan Shadaqah Muhammadiyah Jawa Timur. Mengawal program Shine Our School (SOS) GERCEP untuk pemerataan pendidikan.
              </p>
            </div>

            {/* Middle: Lainnya Informasi */}
            <div className="lg:col-span-4 space-y-2 text-xs sm:text-sm">
              <h4 className="font-bold text-white text-sm sm:text-base mb-3 border-b border-white/20 pb-1 inline-block">
                Lainnya Informasi
              </h4>

              <div className="grid grid-cols-[80px_1fr] gap-x-2 gap-y-1.5 text-white/95">
                <span className="font-semibold text-white/80">Layanan</span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:underline font-medium"
                >
                  {SITE_CONFIG.contact.email}
                </a>

                <span className="font-semibold text-white/80">Pedoman</span>
                <a
                  href={`tel:${SITE_CONFIG.contact.pedoman}`}
                  className="hover:underline font-mono font-medium"
                >
                  {SITE_CONFIG.contact.pedoman}
                </a>

                <span className="font-semibold text-white/80">Ambulan</span>
                <a
                  href={`tel:${SITE_CONFIG.contact.ambulan}`}
                  className="hover:underline font-mono font-medium"
                >
                  {SITE_CONFIG.contact.ambulan}
                </a>
              </div>
            </div>

            {/* Right: Kantor Jawa Timur & Social Media Icons */}
            <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm">
              <h4 className="font-bold text-white text-sm sm:text-base mb-3 border-b border-white/20 pb-1 inline-block">
                Kantor Jawa Timur
              </h4>

              <div className="space-y-1.5 text-white/95">
                <p className="flex items-start gap-1.5">
                  <span className="font-semibold text-white/80 shrink-0">•</span>
                  <span>{SITE_CONFIG.contact.addressSidoarjo}</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <span className="font-semibold text-white/80 shrink-0">•</span>
                  <span>{SITE_CONFIG.contact.addressSurabaya}</span>
                </p>
              </div>

              {/* Social Media SVG Icons (Facebook, Instagram, YouTube, LinkedIn, TikTok) */}
              <div className="pt-4 flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook Lazismu Jawa Timur"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.18 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/lazismujatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram Lazismu Jawa Timur"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center text-white transition-colors"
                  aria-label="YouTube Lazismu Jawa Timur"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center text-white transition-colors"
                  aria-label="LinkedIn Lazismu Jawa Timur"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 flex items-center justify-center text-white transition-colors"
                  aria-label="TikTok Lazismu Jawa Timur"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47 6.13 6.13 0 0 0 1.82-4.46V8.67a8.21 8.21 0 0 0 4.77 1.49v-3.4a4.88 4.88 0 0 1-.81-.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <p>{SITE_CONFIG.footer.copyright}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A82A]" />
            <span className="text-[#00A82A] font-bold">PWM Jawa Timur</span>
            <span aria-hidden="true">·</span>
            <span className="w-2 h-2 rounded-full bg-[#F26522]" />
            <span className="text-[#F26522] font-bold">Lazismu Jawa Timur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
