/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, ArrowRight, Sun, Compass } from 'lucide-react';

interface HeroProps {
  onLearnMore?: () => void;
  onDonate?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore, onDonate }) => {
  const [isLampLit, setIsLampLit] = useState(false);

  useEffect(() => {
    // Light ignites smoothly when page loads
    const timer = setTimeout(() => {
      setIsLampLit(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Background radial glow that expands when lamp turns on */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] lg:w-[850px] h-[340px] sm:h-[650px] lg:h-[850px] rounded-full pointer-events-none transition-all duration-1000 ease-out ${
          isLampLit
            ? 'opacity-85 scale-100 bg-[radial-gradient(circle,rgba(245,183,0,0.18)_0%,rgba(11,93,59,0.08)_45%,transparent_70%)]'
            : 'opacity-20 scale-50 bg-[radial-gradient(circle,rgba(245,183,0,0.06)_0%,transparent_60%)]'
        }`}
        aria-hidden="true"
      />

      {/* Decorative overhead celestial / lantern beam */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-80 h-96 bg-gradient-to-b from-amber-300/25 via-amber-200/10 to-transparent blur-2xl pointer-events-none transition-opacity duration-1000 ${
          isLampLit ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Organization Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A82A]/10 border border-[#00A82A]/25 text-[#007A1E] text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F26522] animate-ping" />
          <span>{SITE_CONFIG.hero.badge} • Lazismu Jawa Timur</span>
        </div>

        {/* Central Lamp Illustration: "Menyalakan Cahaya" */}
        <div className="relative mb-6 select-none group">
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-700 ${
              isLampLit
                ? 'bg-gradient-to-b from-[#F26522] via-amber-400 to-[#00A82A] shadow-[0_0_50px_rgba(242,101,34,0.45),0_0_80px_rgba(0,168,42,0.25)] ring-4 ring-amber-300/40 ring-offset-4 ring-offset-white'
                : 'bg-slate-100 ring-1 ring-slate-200'
            }`}
          >
            {/* Lamp / Sun Icon with dynamic glow */}
            <Sun
              className={`w-10 h-10 sm:w-12 sm:h-12 transition-all duration-700 ${
                isLampLit
                  ? 'text-white rotate-45 scale-105'
                  : 'text-slate-400 rotate-0 scale-90'
              }`}
            />
          </div>

          {/* Interactive Light Switch Indicator */}
          <button
            type="button"
            onClick={() => setIsLampLit(!isLampLit)}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-wider uppercase font-semibold text-slate-700 hover:text-[#F26522] bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs transition-colors cursor-pointer"
            title="Klik untuk menyalakan/mematikan cahaya"
          >
            {isLampLit ? 'Cahaya Menyala' : 'Klik Nyalakan'}
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#06301F] tracking-tight leading-[1.1] mb-6 max-w-4xl">
          {SITE_CONFIG.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10 font-normal">
          {SITE_CONFIG.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              'Assalamu’alaikum Wr. Wb. Halo Tim Program SOS GERCEP PWM & Lazismu Jawa Timur, saya ingin berbagi cahaya donasi.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-white bg-[#F26522] hover:bg-[#D44E0E] shadow-[0_10px_25px_rgba(242,101,34,0.35)] hover:shadow-[0_12px_30px_rgba(242,101,34,0.5)] text-base tracking-wide transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-white fill-white" />
            <span>{SITE_CONFIG.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>

          <a
            href="#tentang"
            onClick={(e) => {
              e.preventDefault();
              if (onLearnMore) onLearnMore();
              handleScrollTo('#tentang');
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-[#007A1E] hover:text-white bg-white hover:bg-[#00A82A] border-2 border-[#00A82A] shadow-xs text-base transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            <span>{SITE_CONFIG.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Small subtle assurance banner */}
        <div className="mt-14 pt-8 border-t border-slate-200 w-full max-w-xl flex items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A82A]" />
            Amanah & Transparan
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F26522]" />
            Filantropi Lazismu
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
            Menjangkau Pelosok
          </span>
        </div>
      </div>
    </section>
  );
};
