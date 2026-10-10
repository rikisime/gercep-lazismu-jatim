/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, Sun } from 'lucide-react';

export const VisionQuoteSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center bg-white border-y border-slate-200/80">
      {/* Radiant golden warm burst in center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[600px] lg:h-[800px] rounded-full bg-[radial-gradient(circle,rgba(245,183,0,0.18)_0%,rgba(11,93,59,0.06)_40%,transparent_70%)] blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-50 to-emerald-50 border-2 border-orange-200 flex items-center justify-center text-[#F26522] mb-8 shadow-sm">
          <Sun className="w-9 h-9 text-[#F26522]" />
        </div>

        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#00A82A] font-bold mb-6">
          Visi Pokok Gerakan
        </p>

        <blockquote className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#06301F] leading-[1.2] tracking-tight mb-8">
          &ldquo;{SITE_CONFIG.visionQuote.text}&rdquo;
        </blockquote>

        <cite className="not-italic text-sm sm:text-base text-slate-600 font-semibold tracking-wide">
          {SITE_CONFIG.visionQuote.source}
        </cite>

        {/* Decorative divider */}
        <div className="w-28 h-1.5 rounded-full bg-gradient-to-r from-[#00A82A] via-amber-400 to-[#F26522] mt-8" />
      </div>
    </section>
  );
};
