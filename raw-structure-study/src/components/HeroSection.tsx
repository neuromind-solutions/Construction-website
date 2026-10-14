'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_METADATA } from '@/data/site-meta';

export default function HeroSection() {
  const stripCards = [
    { type: 'image', label: 'L01', src: '/images/mUdMPbzNFGwgVSZnu6VXATDtkPs.jpg', alt: 'L01 Foundation Core' },
    { type: 'image', label: 'L02', src: '/images/cHIsaLk2xKFqBdK4OgR66pZJk64.jpg', alt: 'L02 Crane Scaffolding' },
    { type: 'accent', label: 'L03', text: '42 FLOORS TOPPED OUT THIS YEAR' },
    { type: 'image', label: 'L04', src: '/images/XCsFzEjL11OrhWvehONxhZVKUo.jpg', alt: 'L04 Superstructure' },
    { type: 'image', label: 'L05', src: '/images/uBBAplfPyIWicTCsVvWg7UU.jpg', alt: 'L05 Floor Plate' },
    { type: 'image', label: 'L06', src: '/images/dIXtk7wOxfTY46ikTp5PnquPG7Q.jpg', alt: 'L06 Steel Superstructure' },
  ];

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-24 overflow-hidden border-b border-[rgba(231,227,220,0.14)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Coordinate Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-3 border-b border-[rgba(231,227,220,0.14)] mb-8 font-mono text-[11px] text-[#8c877f] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff4d00] inline-block animate-pulse"></span>
            <span>{SITE_METADATA.coordinates} — {SITE_METADATA.siteCode}</span>
          </div>
          <div>EST. {SITE_METADATA.foundingYear} · ROTTERDAM — NEW YORK — OSLO</div>
        </div>

        {/* Rising Floors Photo Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12 sm:mb-16">
          {stripCards.map((card, idx) => (
            <div
              key={card.label}
              className="relative aspect-[3/4] overflow-hidden bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] group"
            >
              {card.type === 'accent' ? (
                <div className="w-full h-full bg-[#ff4d00] text-[#0e0e0d] p-4 flex flex-col justify-between">
                  <span className="font-mono text-base font-bold">✳</span>
                  <p className="font-anton text-lg sm:text-xl leading-tight uppercase">
                    {card.text}
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">
                    {card.label}
                  </span>
                </div>
              ) : (
                <>
                  <Image
                    src={card.src!}
                    alt={card.alt!}
                    fill
                    className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-2 left-2 font-mono text-[10px] text-[#f6f4f0] uppercase tracking-wider bg-black/60 px-1.5 py-0.5 border border-[rgba(231,227,220,0.2)]">
                    {card.label}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Monumental Headline */}
        <div className="mb-8">
          <h1 className="font-anton text-[12vw] sm:text-[9vw] xl:text-[110px] leading-[0.88] text-[#f6f4f0] uppercase tracking-tight">
            {SITE_METADATA.tagline}
          </h1>
        </div>

        {/* LOT Tag */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-[#ff4d00]"></div>
          <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-medium">
            {SITE_METADATA.heroLot}
          </span>
          <div className="w-8 h-[1px] bg-[#ff4d00]"></div>
        </div>

        {/* Narrative Copy & Dual Compound CTAs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-4">
          <p className="font-inter text-base sm:text-lg text-[#e7e3dc] max-w-2xl leading-relaxed">
            {SITE_METADATA.heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="cta-compound">
              <span className="cta-label">START A PROJECT</span>
              <span className="cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>

            <Link href="/projects" className="cta-outline">
              <span className="cta-label">VIEW PROJECTS</span>
              <span className="cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
