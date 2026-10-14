'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DISCIPLINES } from '@/data/disciplines';

export default function DisciplinesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-32 border-b border-[rgba(231,227,220,0.14)] relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
                (02) WHAT WE DO
              </span>
              <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-[#f6f4f0] uppercase tracking-tight leading-[0.92]">
              FIVE WAYS WE MOVE EARTH.
            </h2>
          </div>
          <Link href="/services" className="cta-outline self-start md:self-end">
            <span className="cta-label">VIEW ALL SERVICES</span>
            <span className="cta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </Link>
        </div>

        {/* Disciplines Accordion/List with Image Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of Disciplines */}
          <div className="lg:col-span-8 divide-y divide-[rgba(231,227,220,0.14)] border-y border-[rgba(231,227,220,0.14)]">
            {DISCIPLINES.map((disc, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={disc.number}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`py-8 group cursor-pointer transition-colors duration-200 ${
                    isHovered ? 'bg-[#1c1c1a]/40 px-4' : 'px-2'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-sm text-[#ff4d00] font-semibold">
                        {disc.number}
                      </span>
                      <h3 className="font-anton text-2xl sm:text-4xl lg:text-5xl text-[#f6f4f0] group-hover:text-[#ff4d00] uppercase tracking-tight transition-colors">
                        {disc.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 self-end md:self-center">
                      <div className="hidden sm:flex flex-wrap gap-2 text-right">
                        {disc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-[#8c877f] uppercase bg-black/40 px-2 py-0.5 border border-[rgba(231,227,220,0.1)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="w-10 h-10 border border-[rgba(231,227,220,0.2)] group-hover:border-[#ff4d00] group-hover:bg-[#ff4d00] flex items-center justify-center transition-colors">
                        <span className="text-[#f6f4f0] group-hover:text-[#0e0e0d] font-bold text-sm">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Subheadline shown on active */}
                  {isHovered && (
                    <div className="mt-4 pt-4 border-t border-[rgba(231,227,220,0.1)] font-inter text-sm text-[#e7e3dc] max-w-2xl">
                      <p>{disc.subheadline}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Image Preview Pane */}
          <div className="lg:col-span-4 sticky top-24 hidden lg:block">
            <div className="aspect-[3/4] relative overflow-hidden bg-[#1c1c1a] border border-[rgba(231,227,220,0.2)]">
              {hoveredIdx !== null && (
                <>
                  <Image
                    src={DISCIPLINES[hoveredIdx].image}
                    alt={DISCIPLINES[hoveredIdx].name}
                    fill
                    className="object-cover contrast-125 transition-all duration-500 ease-out"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 font-mono text-[11px] text-[#f6f4f0] uppercase tracking-wider bg-black/70 p-3 border border-[rgba(231,227,220,0.2)]">
                    <div className="text-[#ff4d00] font-bold mb-1">
                      {DISCIPLINES[hoveredIdx].number} // {DISCIPLINES[hoveredIdx].name}
                    </div>
                    <div className="text-[10px] text-[#8c877f]">
                      SPEC: EUROCODE 3 &amp; 8 COMPLIANT
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
