/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultGreeting = encodeURIComponent(
    'Assalamu’alaikum Wr. Wb. Halo Tim Program SOS GERCEP PWM Jawa Timur, saya ingin bertanya seputar Gerakan Cahaya Pendidikan.'
  );

  return (
    <aside
      aria-label="Layanan Bantuan WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none"
    >
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-amber-200 animate-in slide-in-from-right-3 duration-300">
          <span className="font-medium">
            Ada pertanyaan seputar <strong>SOS GERCEP</strong>?
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${defaultGreeting}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
        aria-label="Hubungi kami melalui WhatsApp resmi"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
