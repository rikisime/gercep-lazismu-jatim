/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Zap, Target, Sparkles } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cepat':
        return <Zap className="w-8 h-8 text-[#F26522] fill-[#F26522]/20" />;
      case 'tepat':
        return <Target className="w-8 h-8 text-[#00A82A]" />;
      case 'berdampak':
        return <Sparkles className="w-8 h-8 text-sky-600 fill-sky-600/20" />;
      default:
        return <Zap className="w-8 h-8 text-[#F26522]" />;
    }
  };

  const getBorderGlow = (id: string) => {
    switch (id) {
      case 'cepat':
        return 'hover:border-[#F26522] group-hover:shadow-[0_10px_30px_rgba(242,101,34,0.18)]';
      case 'tepat':
        return 'hover:border-[#00A82A] group-hover:shadow-[0_10px_30px_rgba(0,168,42,0.18)]';
      case 'berdampak':
        return 'hover:border-sky-400 group-hover:shadow-[0_10px_30px_rgba(79,179,232,0.18)]';
      default:
        return 'hover:border-amber-400';
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007A1E] bg-[#00A82A]/10 border border-[#00A82A]/25 px-3.5 py-1.5 rounded-full mb-3">
            <span>Prinsip Aksi GERCEP</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#06301F] mb-4">
            Cepat • Tepat • Berdampak
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Landasan gerak dan pertanggungjawaban dalam mengawal setiap denyut kebaikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.principles.map((p) => (
            <div
              key={p.id}
              className={`group relative rounded-3xl p-8 sm:p-9 bg-white border border-slate-200 ${getBorderGlow(
                p.id
              )} transition-all duration-300 hover:-translate-y-1.5 shadow-xs flex flex-col items-center text-center`}
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(p.id)}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#06301F] mb-2">
                {p.title}
              </h3>

              <div
                className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                  p.id === 'cepat'
                    ? 'text-[#F26522]'
                    : p.id === 'tepat'
                    ? 'text-[#00A82A]'
                    : 'text-sky-600'
                }`}
              >
                {p.subtitle}
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
