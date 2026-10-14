'use client';

import React, { useRef } from 'react';

export default function DiagonalMarquee() {
  const ribbon1Text = "RETROFIT * GENERAL CONTRACTING * ZERO HARM * DESIGN & BUILD * STRUCTURAL STEEL * ";
  const ribbon2Text = "WE BUILD WHAT STANDS ⊕ TOLERANCE TO 2MM ⊕ ROTTERDAM ⊕ 214 DELIVERED ⊕ 1.2M SAFE HOURS ⊕ ";

  return (
    <div className="relative py-24 sm:py-36 overflow-hidden select-none pointer-events-auto" aria-hidden="true">
      <div className="relative flex flex-col gap-4 transform -rotate-[4deg] sm:-rotate-[5deg] scale-105 origin-center">
        {/* Ribbon 1: Orange Hazard Ribbon (RTL) */}
        <div className="bg-[#ff4d00] text-[#0e0e0d] py-3 sm:py-4 shadow-xl overflow-hidden flex whitespace-nowrap group">
          <div className="inline-flex animate-marquee-rtl group-hover:[animation-play-state:paused]">
            <span className="font-anton text-2xl sm:text-4xl tracking-wider uppercase px-4">
              {ribbon1Text.repeat(6)}
            </span>
          </div>
        </div>

        {/* Ribbon 2: Cream Technical Ribbon (LTR) */}
        <div className="bg-[#f6f4f0] text-[#0e0e0d] py-3 sm:py-4 shadow-xl overflow-hidden flex whitespace-nowrap group">
          <div className="inline-flex animate-marquee-ltr group-hover:[animation-play-state:paused]">
            <span className="font-archivo font-extrabold text-xl sm:text-3xl tracking-wider uppercase px-4">
              {ribbon2Text.repeat(6)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
