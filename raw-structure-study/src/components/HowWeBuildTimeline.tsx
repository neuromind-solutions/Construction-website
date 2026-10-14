'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TIMELINE_LEVELS } from '@/data/timeline';

export default function HowWeBuildTimeline() {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const activeLevel = TIMELINE_LEVELS[activeLevelIdx];

  return (
    <section className="py-20 sm:py-32 border-b border-[rgba(231,227,220,0.14)] relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
              (03) HOW WE BUILD
            </span>
            <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
          </div>
          <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-[#f6f4f0] uppercase tracking-tight leading-[0.92]">
            FLOOR BY FLOOR. DAY BY NIGHT.
          </h2>
        </div>

        {/* Level Navigation Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[rgba(231,227,220,0.14)] pb-4 mb-10 overflow-x-auto">
          {TIMELINE_LEVELS.map((level, idx) => {
            const isActive = idx === activeLevelIdx;
            return (
              <button
                key={level.levelNumber}
                onClick={() => setActiveLevelIdx(idx)}
                className={`text-left p-3 border transition-all duration-200 ${
                  isActive
                    ? 'border-[#ff4d00] bg-[#1c1c1a] text-[#f6f4f0]'
                    : 'border-transparent hover:border-[rgba(231,227,220,0.2)] text-[#8c877f]'
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#ff4d00] mb-1">
                  {level.levelNumber}
                </div>
                <div className="font-archivo font-bold text-sm sm:text-base uppercase tracking-tight text-[#f6f4f0]">
                  {level.title}
                </div>
                <div className="font-mono text-[10px] text-[#8c877f]">
                  {level.timeframe}
                </div>
              </button>
            );
          })}
        </div>

        {/* Level Detailed Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-6 sm:p-12 relative overflow-hidden">
          {/* Subtle background blueprint grid */}
          <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

          {/* Left Metadata & Narrative */}
          <div className="lg:col-span-5 relative z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-bold">
                  {activeLevel.levelNumber} // {activeLevel.timeframe}
                </span>
                <span className="font-mono text-xs text-[#8c877f] uppercase">
                  SEQUENCE 0{activeLevelIdx + 1}/05
                </span>
              </div>

              {/* Giant Outline Number */}
              <div
                className="font-anton text-7xl sm:text-9xl leading-none select-none text-transparent mb-2"
                style={{ WebkitTextStroke: '2px #ff4d00' }}
              >
                {activeLevel.outlineNumber}
              </div>

              <h3 className="font-anton text-3xl sm:text-5xl text-[#f6f4f0] uppercase tracking-tight mb-4">
                {activeLevel.title}
              </h3>

              <p className="font-inter text-sm sm:text-base text-[#e7e3dc] leading-relaxed mb-6">
                {activeLevel.description}
              </p>
            </div>

            {/* Checklist Deliverables */}
            <div className="space-y-2 pt-4 border-t border-[rgba(231,227,220,0.1)]">
              {activeLevel.bulletPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-[#ff4d00] text-xs font-mono mt-0.5">◆</span>
                  <span className="font-mono text-xs text-[#e7e3dc] uppercase tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right High-Resolution Production Image */}
          <div className="lg:col-span-7 relative z-10 aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-[rgba(231,227,220,0.2)] bg-[#0e0e0d]">
            <Image
              src={activeLevel.image}
              alt={activeLevel.title}
              fill
              className="object-cover contrast-115 transition-all duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* HUD Overlay inside photo */}
            <div className="absolute top-3 left-3 font-mono text-[10px] text-[#f6f4f0] bg-black/70 px-2 py-1 border border-[rgba(231,227,220,0.2)] uppercase">
              FIELD VIEW // {activeLevel.title}
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[10px] text-[#ff4d00] bg-black/70 px-2 py-1 border border-[#ff4d00]/40 uppercase">
              SPEC: NAP ±0.00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
