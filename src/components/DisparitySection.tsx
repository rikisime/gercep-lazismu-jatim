/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Building2, GraduationCap, HeartHandshake, AlertCircle } from 'lucide-react';

export const DisparitySection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-7 h-7 text-[#F26522]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-[#00A82A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-sky-600" />;
      default:
        return <AlertCircle className="w-7 h-7 text-[#F26522]" />;
    }
  };

  return (
    <section id="tentang" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-slate-50/70">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007A1E] bg-[#00A82A]/10 border border-[#00A82A]/25 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
            <span>Kondisi Realitas Lapangan</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#06301F] mb-6 leading-tight">
            {SITE_CONFIG.disparity.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {SITE_CONFIG.disparity.narrative}
          </p>
        </div>

        {/* 3 Dimmed / Focused Reality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.disparity.cards.map((card, index) => (
            <div
              key={card.id}
              className="relative group bg-white border border-slate-200/90 hover:border-amber-400 rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-xs flex flex-col justify-between"
            >
              {/* Top indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-center justify-center p-3 group-hover:scale-105 transition-all">
                  {getIcon(card.iconName)}
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#06301F] mb-3 group-hover:text-[#0B5D3B] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom gentle reminder */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-800 font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Membutuhkan Uluran Cahaya</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
