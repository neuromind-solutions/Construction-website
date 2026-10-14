'use client';

import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 border-b border-[rgba(231,227,220,0.14)] relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
              (05) CLIENT WORDS
            </span>
            <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
          </div>
          <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-[#f6f4f0] uppercase tracking-tight leading-[0.92]">
            WHAT PEOPLE SAY AFTER HANDOVER.
          </h2>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8 flex flex-col justify-between group hover:border-[#ff4d00] transition-colors"
            >
              <div>
                <span className="font-mono text-[10px] text-[#ff4d00] uppercase tracking-widest block mb-6">
                  {t.projectTag}
                </span>
                <blockquote className="font-inter text-base sm:text-lg text-[#f6f4f0] leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Row with Verified Production Avatar */}
              <div className="flex items-center gap-4 pt-6 border-t border-[rgba(231,227,220,0.1)]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[rgba(231,227,220,0.2)] bg-[#0e0e0d] flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover grayscale"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-archivo font-bold text-sm text-[#f6f4f0] uppercase tracking-wide">
                    {t.author}
                  </div>
                  <div className="font-mono text-xs text-[#8c877f]">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
