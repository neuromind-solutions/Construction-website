'use client';

import React, { useState } from 'react';
import { SITE_METADATA } from '@/data/site-meta';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="border-b border-[rgba(231,227,220,0.14)] pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
              (06) TENDER &amp; COMMISSIONING
            </span>
            <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-9xl text-[#f6f4f0] uppercase tracking-tight leading-[0.88] mb-8">
            START A BUILD.
          </h1>
          <p className="font-inter text-lg sm:text-2xl text-[#e7e3dc] max-w-3xl leading-relaxed">
            Form RS-01 — Submit site development details or contact our engineering headquarters in Rotterdam directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form: FORM RS-01 */}
          <div className="lg:col-span-7 bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8 sm:p-12 relative">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[rgba(231,227,220,0.1)]">
              <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-bold">
                FORM RS-01 // TENDER INTAKE
              </span>
              <span className="font-mono text-[10px] text-[#8c877f]">
                SECURE CHANNEL
              </span>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <span className="text-[#ff4d00] font-mono text-2xl font-bold">✓ ENQUIRY TRANSMITTED</span>
                <h3 className="font-anton text-3xl text-[#f6f4f0] uppercase">
                  ACKNOWLEDGEMENT OF RECEIPT
                </h3>
                <p className="font-inter text-sm text-[#8c877f] max-w-md mx-auto">
                  Our commercial bid team and structural superintendents review tenders within 24 hours. Reference code: RS-{Math.floor(100000 + Math.random() * 900000)}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-mono text-xs text-[#ff4d00] underline uppercase"
                >
                  SUBMIT ANOTHER TENDER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-[#8c877f] uppercase block mb-2">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-[#0e0e0d] border border-[rgba(231,227,220,0.2)] focus:border-[#ff4d00] text-[#f6f4f0] px-4 py-3 font-inter text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-[#8c877f] uppercase block mb-2">
                      ORGANIZATION / CLIENT *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Meridian Holdings B.V."
                      className="w-full bg-[#0e0e0d] border border-[rgba(231,227,220,0.2)] focus:border-[#ff4d00] text-[#f6f4f0] px-4 py-3 font-inter text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-[#8c877f] uppercase block mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="j.doe@meridian.com"
                      className="w-full bg-[#0e0e0d] border border-[rgba(231,227,220,0.2)] focus:border-[#ff4d00] text-[#f6f4f0] px-4 py-3 font-inter text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-[#8c877f] uppercase block mb-2">
                      PROJECT DISCIPLINE *
                    </label>
                    <select
                      required
                      className="w-full bg-[#0e0e0d] border border-[rgba(231,227,220,0.2)] focus:border-[#ff4d00] text-[#f6f4f0] px-4 py-3 font-inter text-sm outline-none transition-colors"
                    >
                      <option value="GENERAL CONTRACTING">01 GENERAL CONTRACTING</option>
                      <option value="DESIGN & BUILD">02 DESIGN &amp; BUILD</option>
                      <option value="STRUCTURAL STEEL">03 STRUCTURAL STEEL</option>
                      <option value="CIVIL INFRASTRUCTURE">04 CIVIL INFRASTRUCTURE</option>
                      <option value="RESTORATION & SEISMIC">05 RESTORATION &amp; SEISMIC</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#8c877f] uppercase block mb-2">
                    SITE LOCATION &amp; COORDINATES
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rotterdam Port, Lot 04 (N 51°54' / E 4°28')"
                    className="w-full bg-[#0e0e0d] border border-[rgba(231,227,220,0.2)] focus:border-[#ff4d00] text-[#f6f4f0] px-4 py-3 font-inter text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[#8c877f] uppercase block mb-2">
                    SCOPE BRIEF &amp; TIMELINE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide initial parameters: floor count, site conditions, anticipated groundbreaking date, procurement structure..."
                    className="w-full bg-[#0e0e0d] border border-[rgba(231,227,220,0.2)] focus:border-[#ff4d00] text-[#f6f4f0] px-4 py-3 font-inter text-sm outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="cta-compound w-full sm:w-auto">
                    <span className="cta-label py-4 px-8 text-sm">TRANSMIT TENDER INTAKE</span>
                    <span className="cta-icon py-4 px-5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Headquarters Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8">
              <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-bold block mb-4">
                HEAD OFFICE // ROTTERDAM
              </span>
              <p className="font-inter text-base text-[#f6f4f0] leading-relaxed mb-4">
                {SITE_METADATA.contact.addressLine1}
                <br />
                {SITE_METADATA.contact.addressLine2}
                <br />
                {SITE_METADATA.contact.country}
              </p>
              <div className="font-mono text-xs text-[#8c877f] space-y-1 pt-4 border-t border-[rgba(231,227,220,0.1)]">
                <div>DIRECT: {SITE_METADATA.contact.phone}</div>
                <div>EMAIL: {SITE_METADATA.contact.email}</div>
                <div>HOURS: MON–FRI 07:00–18:00 CET</div>
              </div>
            </div>

            <div className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8">
              <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-bold block mb-4">
                EMERGENCY SITE HOTLINE
              </span>
              <p className="font-inter text-sm text-[#8c877f] leading-relaxed mb-4">
                Active site supervisors, emergency structural services, and duty foremen have 24/7 priority access.
              </p>
              <div className="font-mono text-sm text-[#ff4d00] font-bold">
                +31 (0) 10 555 0199 [24/7 DISPATCH]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
