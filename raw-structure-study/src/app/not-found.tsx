import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-8">
      <div className="max-w-xl w-full bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-bold block mb-4">
            DATUM ERROR // CODE 404
          </span>
          <h1 className="font-anton text-6xl sm:text-8xl text-[#f6f4f0] uppercase tracking-tight mb-4">
            UNBUILT VOID.
          </h1>
          <p className="font-inter text-sm sm:text-base text-[#8c877f] mb-8 leading-relaxed">
            The requested coordinate or project file has not been surveyed or registered in the engineering index.
          </p>

          <Link href="/" className="cta-compound inline-flex">
            <span className="cta-label">RETURN TO BASE</span>
            <span className="cta-icon">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
