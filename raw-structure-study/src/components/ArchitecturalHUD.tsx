'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ArchitecturalHUD() {
  const [elevation, setElevation] = useState('000 M');

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
        const meters = Math.round(progress * 168); // 168m = Meridian Tower pinnacle
        setElevation(`${String(meters).padStart(3, '0')} M`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed right-0 top-0 bottom-0 w-8 z-30 pointer-events-none hidden lg:flex flex-col items-center justify-between py-24 border-l border-[rgba(231,227,220,0.12)] bg-[#0e0e0d]/40 backdrop-blur-[1px]"
      aria-hidden="true"
    >
      {/* Top Coordinate */}
      <span
        className="font-mono text-[9px] text-[#8c877f] tracking-widest uppercase"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        N 51°54&apos; / E 4°28&apos;
      </span>

      {/* Center Dynamic Elevation Meter */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-[1px] h-8 bg-[#ff4d00]/40" />
        <span
          className="font-mono text-[10px] text-[#ff4d00] font-bold tracking-wider"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {elevation}
        </span>
        <div className="w-[1px] h-8 bg-[#ff4d00]/40" />
      </div>

      {/* Bottom Datum */}
      <span
        className="font-mono text-[9px] text-[#8c877f] tracking-widest uppercase"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        REF DATUM: NAP ±0.00
      </span>
    </div>
  );
}
