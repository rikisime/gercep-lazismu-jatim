/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Eye, Users2, Award, Sparkles, ArrowRight } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Eye':
        return <Eye className="w-5 h-5 text-white" />;
      case 'Users2':
        return <Users2 className="w-5 h-5 text-white" />;
      case 'Award':
        return <Award className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="tujuan" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007A1E] bg-[#00A82A]/10 border border-[#00A82A]/25 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
            <span>Peta Jalan Transformasi</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#06301F] mb-6 leading-tight">
            {SITE_CONFIG.timeline.title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {SITE_CONFIG.timeline.subtitle}
          </p>
        </div>

        {/* 3 Horizontal Cards with Background Images & Transparent Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SITE_CONFIG.timeline.steps.map((step) => {
            const accentColor = (step as any).accentColor || '#00A82A';
            const subtitle = (step as any).subtitle || 'Pilar Strategis';
            const imageUrl = (step as any).imageUrl;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[460px] flex flex-col justify-between p-7 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* 1. Background Photo */}
                <img
                  src={imageUrl}
                  alt={`Ilustrasi ${step.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* 2. Transparent Multi-Layer Gradient Overlays for High Legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/35 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />

                {/* Top: Number Badge and Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg text-white shadow-lg backdrop-blur-sm"
                    style={{ backgroundColor: accentColor }}
                  >
                    {step.number}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xs">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Bottom: Text Content */}
                <div className="relative z-10 pt-16">
                  {/* Subtitle / Kicker */}
                  <div
                    className="text-[11px] uppercase font-extrabold tracking-widest mb-2"
                    style={{ color: accentColor === '#00A82A' ? '#4ade80' : accentColor === '#F26522' ? '#fb923c' : '#7dd3fc' }}
                  >
                    {subtitle}
                  </div>

                  {/* Main Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Bottom Decorative Line */}
                  <div
                    className="mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: accentColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Statement Banner */}
        <div className="p-6 rounded-3xl bg-white border border-emerald-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#00A82A]/10 text-[#00A82A] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#F26522]" />
            </div>
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              Dari <strong>kepedulian</strong> bersama lahir <strong>solidaritas</strong> antar-amal usaha, hingga cahaya kualitas pendidikan <strong>merata</strong> di setiap sudut Jawa Timur.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-[#007A1E] shrink-0 self-end sm:self-center">
            <span>Kolaborasi Berkelanjutan</span>
            <ArrowRight className="w-4 h-4 text-[#F26522]" />
          </div>
        </div>
      </div>
    </section>
  );
};
