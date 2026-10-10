/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, RotateCw, Lightbulb, Zap, CheckCircle2 } from 'lucide-react';

export const AboutGercepSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="makna-gercep" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Soft warm light bloom in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5D3B] bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-3">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{SITE_CONFIG.aboutGercep.kicker}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#06301F] mb-6 leading-tight">
              {SITE_CONFIG.aboutGercep.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {SITE_CONFIG.aboutGercep.description}
            </p>

            {/* Value checklist */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-slate-600">
                  <strong className="text-[#06301F]">Filantropi Kolaboratif:</strong> Menghubungkan kepedulian warga Persyarikatan, alumni, dan para dermawan.
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-[#0B5D3B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-slate-600">
                  <strong className="text-[#06301F]">Tiga Sasaran Utuh:</strong> Membina keutuhan ekosistem: sekolahnya berbenah, muridnya terlindungi, gurunya bermartabat.
                </p>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-slate-600">
                  <strong className="text-[#06301F]">Transparan & Terarah:</strong> Bantuan langsung tersalurkan ke titik kebutuhan tanpa birokrasi berbelit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Flip Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="group cursor-pointer perspective-1000 w-full max-w-md h-[340px] sm:h-[360px]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsFlipped(!isFlipped);
                }
              }}
              aria-label="Kartu dua sisi makna GERCEP. Klik untuk membalik kartu."
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Sisi 1: Gerakan Cahaya Pendidikan (Muhammadiyah Green) */}
                <div className="absolute inset-0 backface-hidden rounded-3xl p-8 bg-gradient-to-br from-[#00A82A] to-[#007A1E] border-2 border-emerald-300 shadow-xl flex flex-col justify-between group-hover:shadow-2xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-widest text-emerald-100 font-bold px-3 py-1 rounded-full bg-white/20 border border-white/30">
                        {SITE_CONFIG.aboutGercep.flipCard.front.tag}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                        <Lightbulb className="w-5 h-5 text-amber-300 fill-amber-300" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                      {SITE_CONFIG.aboutGercep.flipCard.front.title}
                    </h3>

                    <p className="text-emerald-50 text-sm sm:text-base leading-relaxed">
                      {SITE_CONFIG.aboutGercep.flipCard.front.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20 text-xs text-emerald-100 font-semibold">
                    <span>{SITE_CONFIG.aboutGercep.flipCard.front.hint}</span>
                    <RotateCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  </div>
                </div>

                {/* Sisi 2: Gerak Cepat (Lazismu Orange) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-8 bg-gradient-to-br from-[#F26522] to-[#D44E0E] border-2 border-amber-300 shadow-xl flex flex-col justify-between group-hover:shadow-2xl transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-widest text-amber-100 font-bold px-3 py-1 rounded-full bg-white/20 border border-white/30">
                        {SITE_CONFIG.aboutGercep.flipCard.back.tag}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                        <Zap className="w-5 h-5 fill-amber-300 text-amber-300" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                      {SITE_CONFIG.aboutGercep.flipCard.back.title}
                    </h3>

                    <p className="text-amber-50 text-sm sm:text-base leading-relaxed">
                      {SITE_CONFIG.aboutGercep.flipCard.back.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20 text-xs text-amber-100 font-semibold">
                    <span>{SITE_CONFIG.aboutGercep.flipCard.back.hint}</span>
                    <RotateCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Helper button for accessibility & clarity */}
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#0B5D3B] hover:text-[#06301F] py-1.5 px-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Balik kartu untuk melihat sisi lain</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
