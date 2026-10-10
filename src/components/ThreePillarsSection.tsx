/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG, PillarData } from '../config/siteConfig';
import { School, GraduationCap, Award, Lightbulb, CheckCircle2, Quote } from 'lucide-react';

export const ThreePillarsSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<'aum' | 'siswa' | 'gtk'>('aum');

  const selectedPillar =
    SITE_CONFIG.pillars.find((p) => p.id === selectedPillarId) || SITE_CONFIG.pillars[0];

  const getPillarIcon = (id: string, isSelected: boolean) => {
    switch (id) {
      case 'aum':
        return (
          <School
            className={`w-7 h-7 transition-colors ${
              isSelected ? 'text-amber-400' : 'text-amber-300/60'
            }`}
          />
        );
      case 'siswa':
        return (
          <GraduationCap
            className={`w-7 h-7 transition-colors ${
              isSelected ? 'text-emerald-400' : 'text-emerald-300/60'
            }`}
          />
        );
      case 'gtk':
        return (
          <Award
            className={`w-7 h-7 transition-colors ${
              isSelected ? 'text-sky-400' : 'text-sky-300/60'
            }`}
          />
        );
      default:
        return <Lightbulb className="w-7 h-7" />;
    }
  };

  return (
    <section id="tiga-pilar" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Background ambient glow matching the active pillar */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-15"
        style={{ backgroundColor: selectedPillar.color }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5D3B] bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Fokus Intervensi Program</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#06301F] mb-6 leading-tight">
            Tiga Pilar Penyangga Cahaya
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Pilih pilar untuk menyalakan lampu dukungannya dan melihat rincian fokus bantuan.
          </p>
        </div>

        {/* 3 Pillar Clickable Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {SITE_CONFIG.pillars.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`relative text-left p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-white shadow-xl scale-[1.02]'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                }`}
                style={{
                  borderColor: isSelected ? pillar.color : undefined,
                  boxShadow: isSelected ? `0 10px 30px ${pillar.glowColor}` : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center border transition-all"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}50`,
                    }}
                  >
                    {getPillarIcon(pillar.id, isSelected)}
                  </div>

                  {/* Indicator lamp for each pillar */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                        isSelected ? 'opacity-100' : 'opacity-60 text-slate-500'
                      }`}
                      style={{ color: isSelected ? pillar.color : undefined }}
                    >
                      {isSelected ? 'Lampu Menyala' : 'Klik'}
                    </span>
                    <div
                      className={`w-3.5 h-3.5 rounded-full border transition-all duration-500 ${
                        isSelected ? 'animate-pulse scale-125' : 'bg-transparent border-slate-300'
                      }`}
                      style={{
                        backgroundColor: isSelected ? pillar.color : 'transparent',
                        borderColor: isSelected ? pillar.color : '#cbd5e1',
                        boxShadow: isSelected ? `0 0 14px ${pillar.color}` : 'none',
                      }}
                    />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#06301F] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {pillar.focus}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Display */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          {/* Top highlight bar in pillar's color */}
          <div
            className="absolute top-0 left-0 right-0 h-2 transition-colors duration-500"
            style={{ backgroundColor: selectedPillar.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Lamp and Visual representation */}
            <div className="lg:col-span-4 flex flex-col items-center text-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-700 animate-pulse-glow"
                style={{
                  backgroundColor: `${selectedPillar.color}20`,
                  boxShadow: `0 0 45px ${selectedPillar.glowColor}`,
                  border: `2px solid ${selectedPillar.color}`,
                }}
              >
                <Lightbulb
                  className="w-12 h-12 transition-all duration-500"
                  style={{ color: selectedPillar.color }}
                />
              </div>

              <div
                className="mt-5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  color: selectedPillar.color,
                  backgroundColor: `${selectedPillar.color}15`,
                  border: `1px solid ${selectedPillar.color}40`,
                }}
              >
                {selectedPillar.focus}
              </div>

              <span className="text-xs text-slate-500 mt-2 font-medium">
                Pilar Terpilih: <strong className="text-slate-800">{selectedPillar.title}</strong>
              </span>
            </div>

            {/* Description, Quote, and Scope */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#06301F] mb-3">
                  {selectedPillar.title}
                </h4>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {selectedPillar.description}
                </p>
              </div>

              {/* Pillar Quote */}
              <div
                className="p-5 sm:p-6 rounded-2xl border bg-white shadow-xs relative"
                style={{
                  borderColor: `${selectedPillar.color}50`,
                }}
              >
                <Quote
                  className="w-6 h-6 absolute top-4 right-4 opacity-40"
                  style={{ color: selectedPillar.color }}
                />
                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed pr-6">
                  &ldquo;{selectedPillar.quote}&rdquo;
                </p>
              </div>

              {/* Bullet points of focus */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Fokus Tindakan Nyata:
                </span>
                <ul className="space-y-2.5">
                  {selectedPillar.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                      <CheckCircle2
                        className="w-5 h-5 shrink-0 mt-0.5"
                        style={{ color: selectedPillar.color }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
