'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DISCIPLINES } from '@/data/disciplines';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'WHAT CONTRACT STRUCTURES DO YOU OPERATE UNDER?',
      a: 'We operate primarily under Guaranteed Maximum Price (GMP), Design-Build (EPC), and Lump-Sum contracts with shared cost-savings incentives. All scheduling and site telemetry is open-book.',
    },
    {
      q: 'WHAT IS YOUR TYPICAL PROJECT SCALE?',
      a: 'Our core capability spans major projects from €25M to €400M in commercial towers, heavy civil bridges, high-tech industrial plants, and complex adaptive reuse restorations.',
    },
    {
      q: 'HOW DO YOU MAINTAIN SUB-MILLIMETER TOLERANCES ON HIGH-RISES?',
      a: 'We utilize dual-frequency GNSS antenna receivers integrated with robotic total stations and internal fiber-optic core plumb lines, auditing structural datum points every 4 vertical meters.',
    },
    {
      q: 'WHAT CERTIFICATIONS DO YOUR SITES HOLD?',
      a: 'Every site is independently audited and certified under ISO 9001 (Quality Management), ISO 45001 (Occupational Health & Safety), and VCA** (Petrochemical & Heavy Industrial Safety).',
    },
  ];

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="border-b border-[rgba(231,227,220,0.14)] pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
              (02) CAPABILITIES &amp; DISCIPLINES
            </span>
            <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-9xl text-[#f6f4f0] uppercase tracking-tight leading-[0.88] mb-8">
            DISCIPLINE &amp; METHOD.
          </h1>
          <p className="font-inter text-lg sm:text-2xl text-[#e7e3dc] max-w-3xl leading-relaxed">
            From complex civil cantilevers to high-density commercial towers, our multidisciplinary engineering teams execute across five integrated disciplines.
          </p>
        </div>

        {/* 5 Disciplines Deep Dive */}
        <div className="space-y-16 mb-24">
          {DISCIPLINES.map((disc) => (
            <div
              key={disc.number}
              id={disc.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}
              className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-[#ff4d00] font-bold">
                    {disc.number} // DISCIPLINE
                  </span>
                  <div className="flex gap-2">
                    {disc.tags.map((t) => (
                      <span key={t} className="font-mono text-[9px] text-[#8c877f] bg-black/60 px-2 py-0.5 border border-[rgba(231,227,220,0.1)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="font-anton text-3xl sm:text-5xl text-[#f6f4f0] uppercase tracking-tight">
                  {disc.name}
                </h2>

                <p className="font-inter text-base text-[#ff4d00] font-medium leading-relaxed">
                  {disc.subheadline}
                </p>

                <p className="font-inter text-sm sm:text-base text-[#e7e3dc] leading-relaxed">
                  {disc.description}
                </p>

                <div className="pt-4 border-t border-[rgba(231,227,220,0.1)] space-y-2">
                  <span className="font-mono text-xs text-[#8c877f] uppercase tracking-wider block mb-2">
                    KEY DELIVERABLES:
                  </span>
                  {disc.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-3">
                      <span className="text-[#ff4d00] text-xs font-mono mt-0.5">◆</span>
                      <span className="font-mono text-xs text-[#e7e3dc] uppercase">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discipline Verified Production Asset */}
              <div className="lg:col-span-6 relative aspect-[4/3] bg-[#0e0e0d] border border-[rgba(231,227,220,0.2)] overflow-hidden">
                <Image
                  src={disc.image}
                  alt={disc.name}
                  fill
                  className="object-cover grayscale contrast-120"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] text-[#f6f4f0] bg-black/80 px-2 py-1 border border-[rgba(231,227,220,0.2)]">
                  DISCIPLINE {disc.number} · ON SITE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="pt-12 border-t border-[rgba(231,227,220,0.14)]">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold block mb-2">
              TECHNICAL CONSULTATION
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-[#f6f4f0] uppercase tracking-tight">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
          </div>

          <div className="divide-y divide-[rgba(231,227,220,0.14)] border-y border-[rgba(231,227,220,0.14)]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="py-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-archivo font-bold text-base sm:text-lg text-[#f6f4f0] hover:text-[#ff4d00] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#ff4d00] font-mono text-xl">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 font-inter text-sm sm:text-base text-[#8c877f] leading-relaxed max-w-3xl">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
