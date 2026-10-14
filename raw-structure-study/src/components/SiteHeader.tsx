'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_METADATA } from '@/data/site-meta';
import { Menu, X } from 'lucide-react';

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Hairline Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#ff4d00] z-50 pointer-events-none" />

      <header className="fixed top-[2px] left-0 right-0 h-16 bg-[#0e0e0d] border-b border-[rgba(231,227,220,0.14)] z-40 flex items-center px-4 sm:px-8">
        <div className="w-full max-w-[1320px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group text-decoration-none">
            <span className="text-[#ff4d00] text-lg font-bold">◆</span>
            <span className="font-archivo font-bold text-sm sm:text-base tracking-wider text-[#f6f4f0] uppercase transition-colors group-hover:text-[#ff4d00]">
              {SITE_METADATA.companyName}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-archivo font-medium text-xs tracking-widest uppercase transition-colors py-1 ${
                    isActive
                      ? 'text-[#ff4d00] border-b-2 border-[#ff4d00]'
                      : 'text-[#e7e3dc] hover:text-[#ff4d00]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Compound CTA Button: Orange Label + Separate Black ↗ Box */}
            <Link href="/contact" className="cta-compound hidden sm:inline-flex">
              <span className="cta-label">START A PROJECT</span>
              <span className="cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#f6f4f0] p-2 border border-[rgba(231,227,220,0.2)] hover:border-[#ff4d00] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[66px] bg-[#0e0e0d] z-50 flex flex-col p-6 sm:p-10 border-t border-[rgba(231,227,220,0.14)] md:hidden overflow-y-auto">
          <div className="text-[11px] font-mono text-[#8c877f] uppercase tracking-widest mb-6">
            NAVIGATION INDEX // {SITE_METADATA.coordinates}
          </div>

          <div className="flex flex-col gap-5 mb-10">
            {NAV_LINKS.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-anton text-4xl text-[#f6f4f0] hover:text-[#ff4d00] tracking-wide uppercase transition-colors flex items-center justify-between border-b border-[rgba(231,227,220,0.1)] pb-3"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#8c877f]">0{idx + 1}</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-[rgba(231,227,220,0.14)]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="cta-compound w-full flex justify-between items-center mb-6"
            >
              <span className="cta-label flex-1 text-center py-3">START A PROJECT</span>
              <span className="cta-icon py-3 px-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>

            <div className="font-mono text-xs text-[#8c877f] space-y-1">
              <div>ROTTERDAM HQ · {SITE_METADATA.contact.phone}</div>
              <div>{SITE_METADATA.contact.email}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
