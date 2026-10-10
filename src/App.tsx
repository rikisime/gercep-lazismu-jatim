/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProgressBar } from './components/ProgressBar';
import { LightParticles } from './components/LightParticles';
import { Navbar } from './components/Navbar';
import { DisparitySection } from './components/DisparitySection';
import { AboutGercepSection } from './components/AboutGercepSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ThreePillarsSection } from './components/ThreePillarsSection';
import { TimelineSection } from './components/TimelineSection';
import { VisionQuoteSection } from './components/VisionQuoteSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 relative selection:bg-amber-400/30 selection:text-[#06301F]">
      {/* Scroll Progress Bar at top */}
      <ProgressBar />

      {/* Floating Ambient Light Particles */}
      <LightParticles />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section Kesenjangan: Cahaya Belum Sampai ke Semua Sekolah */}
        <DisparitySection />

        {/* Section Apa Itu GERCEP: 3D Flip Card */}
        <AboutGercepSection />

        {/* Section Prinsip: Cepat • Tepat • Berdampak */}
        <PrinciplesSection />

        {/* Section Tiga Pilar (Interaktif: AUM, Siswa, GTK) */}
        <ThreePillarsSection />

        {/* Section Tujuan Gerakan (Timeline & Peta Jawa Timur) */}
        <TimelineSection />

        {/* Section Kutipan Visi */}
        <VisionQuoteSection />
      </main>

      {/* Footer Resmi Lazismu Jawa Timur */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
