import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'ABOUT — RAW STRUCTURE',
  description: 'Built by builders. Founded in 1987 in Rotterdam, engineered with obsessive precision.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="border-b border-[rgba(231,227,220,0.14)] pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
              (01) WHO WE ARE
            </span>
            <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-9xl text-[#f6f4f0] uppercase tracking-tight leading-[0.88] mb-8">
            BUILT BY BUILDERS.
          </h1>
          <p className="font-inter text-lg sm:text-2xl text-[#e7e3dc] max-w-3xl leading-relaxed">
            Founded in 1987 in the industrial docklands of Rotterdam, Raw Structure was built on a simple premise: that complex engineering should be executed with uncompromising physical discipline.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-7 space-y-6 font-inter text-base sm:text-lg text-[#e7e3dc] leading-relaxed">
            <h2 className="font-anton text-3xl sm:text-4xl text-[#f6f4f0] uppercase tracking-tight">
              THE SITE IS THE TRUTH.
            </h2>
            <p>
              We don&apos;t build from ivory towers. Every project executive, structural engineer, and commercial director at Raw Structure has spent formative years with steel-toe boots in wet concrete. We believe the true test of engineering is not the elegance of the CAD drawing, but how the steel fits under rain at 3:00 AM on a cantilever deck.
            </p>
            <p>
              Over 38 years and 214 delivered structures across Europe and North America, our reputation has been forged through one immutable standard: we do not accept excuses, we do not compromise on tolerances, and we deliver what we promise.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] overflow-hidden">
            <Image
              src="/images/cHIsaLk2xKFqBdK4OgR66pZJk64.jpg"
              alt="Raw Structure Construction Site Scaffolding"
              fill
              className="object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#f6f4f0] bg-black/80 px-2 py-1 border border-[rgba(231,227,220,0.2)]">
              MERIDIAN TOWER · LEVEL 42 · 03:12 AM POUR
            </div>
          </div>
        </div>

        {/* Principles Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[rgba(231,227,220,0.14)]">
          <div className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8">
            <span className="font-mono text-xs text-[#ff4d00] font-bold block mb-4">01 / DISCIPLINE</span>
            <h3 className="font-anton text-2xl text-[#f6f4f0] uppercase mb-3">TOLERANCE TO 2MM</h3>
            <p className="font-inter text-sm text-[#8c877f] leading-relaxed">
              We check every elevation benchmark three times with dual-frequency robotic total stations. When tolerance is locked, the structure stands forever.
            </p>
          </div>

          <div className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8">
            <span className="font-mono text-xs text-[#ff4d00] font-bold block mb-4">02 / CULTURE</span>
            <h3 className="font-anton text-2xl text-[#f6f4f0] uppercase mb-3">ZERO HARM STANDARD</h3>
            <p className="font-inter text-sm text-[#8c877f] leading-relaxed">
              Over 1.2 million consecutive hours without a lost-time injury. Safety is not a compliance checkbox — it is our operational pride.
            </p>
          </div>

          <div className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8">
            <span className="font-mono text-xs text-[#ff4d00] font-bold block mb-4">03 / HONESTY</span>
            <h3 className="font-anton text-2xl text-[#f6f4f0] uppercase mb-3">OPEN BOOK PRICING</h3>
            <p className="font-inter text-sm text-[#8c877f] leading-relaxed">
              Transparent cost accounting and real-time CPM telemetry shared directly with clients. No hidden variation margins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
