'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DrawingToLandmark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!photoRef.current || !containerRef.current) return;

      gsap.fromTo(
        photoRef.current,
        {
          scale: 0.6,
          rotate: -4,
          borderRadius: '16px',
        },
        {
          scale: 1,
          rotate: 0,
          borderRadius: '0px',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-36 border-b border-[rgba(231,227,220,0.14)] overflow-hidden bg-[#0e0e0d] relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
            SECTION A–A · 1:200
          </span>
          <div className="w-16 h-[1px] bg-[#ff4d00]" />
        </div>
        <h2 className="font-anton text-5xl sm:text-7xl lg:text-9xl text-[#f6f4f0] uppercase tracking-tight leading-[0.88]">
          DRAWING → LANDMARK
        </h2>
      </div>

      {/* Centerpiece Full-Bleed Zoom Photo with Verified Production Asset */}
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4">
        <div
          ref={photoRef}
          className="relative aspect-[16/9] w-full overflow-hidden border border-[rgba(231,227,220,0.2)] shadow-2xl bg-[#1c1c1a]"
        >
          <Image
            src="/images/6QMjWT0pZjHhUYaPIXKvYkjjcU.jpg"
            alt="Drawing to Landmark centerpiece"
            fill
            className="object-cover contrast-120"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          {/* Blueprint Corner Accents */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-[#f6f4f0] bg-black/80 px-2 py-1 border border-[rgba(231,227,220,0.3)]">
            MERIDIAN TOWER · ROTTERDAM · 2025
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#ff4d00] bg-black/80 px-2 py-1 border border-[#ff4d00]/40">
            ELEVATION +168.0 M PINNACLE
          </div>
        </div>
      </div>
    </section>
  );
}
