import React from 'react';
import Link from 'next/link';
import { SITE_METADATA } from '@/data/site-meta';

export default function SiteFooter() {
  return (
    <footer className="bg-[#0e0e0d] border-t border-[rgba(231,227,220,0.14)] relative z-20">
      {/* Pre-footer Call to Action */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-[rgba(231,227,220,0.14)]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#8c877f] uppercase tracking-widest block mb-4">
              [COMMISSIONING &amp; TENDER]
            </span>
            <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-[#f6f4f0] uppercase tracking-tight leading-[0.92]">
              GOT A SITE? LET&apos;S BUILD SOMETHING THAT STANDS.
            </h2>
          </div>
          <div>
            <Link href="/contact" className="cta-compound">
              <span className="cta-label text-sm py-4 px-6">START A PROJECT</span>
              <span className="cta-icon py-4 px-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4-Column Technical Grid */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[rgba(231,227,220,0.14)]">
        {/* Col 01: Head Office */}
        <div>
          <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest block mb-4 font-medium">
            (01) HEAD OFFICE
          </span>
          <p className="font-inter text-sm text-[#e7e3dc] leading-relaxed">
            {SITE_METADATA.contact.addressLine1}
            <br />
            {SITE_METADATA.contact.addressLine2}
            <br />
            {SITE_METADATA.contact.country}
          </p>
          <div className="mt-4 font-mono text-xs text-[#8c877f]">
            COORDINATES // {SITE_METADATA.coordinates}
          </div>
        </div>

        {/* Col 02: Talk to Us */}
        <div>
          <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest block mb-4 font-medium">
            (02) TALK TO US
          </span>
          <div className="flex flex-col gap-2 font-inter text-sm">
            <a
              href={`mailto:${SITE_METADATA.contact.email}`}
              className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors"
            >
              {SITE_METADATA.contact.email}
            </a>
            <a
              href={`tel:${SITE_METADATA.contact.phone.replace(/\s+/g, '')}`}
              className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors font-mono"
            >
              {SITE_METADATA.contact.phone}
            </a>
            <span className="font-mono text-xs text-[#8c877f] mt-2">
              MON–FRI 07:00–18:00 CET
            </span>
          </div>
        </div>

        {/* Col 03: Sitemap */}
        <div>
          <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest block mb-4 font-medium">
            (03) SITEMAP
          </span>
          <nav className="flex flex-col gap-2 font-archivo text-xs uppercase tracking-wider">
            <Link href="/" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              ABOUT
            </Link>
            <Link href="/services" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              SERVICES
            </Link>
            <Link href="/projects" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              PROJECTS
            </Link>
            <Link href="/journal" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              JOURNAL
            </Link>
            <Link href="/contact" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              CONTACT
            </Link>
          </nav>
        </div>

        {/* Col 04: Follow the Build */}
        <div>
          <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest block mb-4 font-medium">
            (04) FOLLOW THE BUILD
          </span>
          <nav className="flex flex-col gap-2 font-archivo text-xs uppercase tracking-wider">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              LINKEDIN ↗
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              INSTAGRAM ↗
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              X / TWITTER ↗
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#e7e3dc] hover:text-[#ff4d00] transition-colors">
              YOUTUBE ↗
            </a>
          </nav>
        </div>
      </div>

      {/* Monumental Wordmark */}
      <div className="overflow-hidden py-6 sm:py-10 text-center select-none border-b border-[rgba(231,227,220,0.1)]">
        <h1 className="font-anton text-[14vw] leading-[0.8] text-[#f6f4f0]/90 tracking-tighter uppercase whitespace-nowrap">
          {SITE_METADATA.companyName}
        </h1>
      </div>

      {/* Legal & Standards Bottom Bar */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8c877f]">
        <div>{SITE_METADATA.copyright}</div>
        <div className="text-[#ff4d00]/80 tracking-widest">{SITE_METADATA.certifications}</div>
      </div>
    </footer>
  );
}
