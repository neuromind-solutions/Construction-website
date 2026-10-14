'use client';

import React from 'react';
import { METRIC_STATS } from '@/data/stats';

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-32 border-b border-[rgba(231,227,220,0.14)] relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3D Geometric Architectural Model Simulation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] relative min-h-[380px] overflow-hidden group">
            <div className="absolute top-4 left-4 font-mono text-[10px] text-[#ff4d00] tracking-widest uppercase">
              MODEL // TOWER SCHEMATIC 3D
            </div>

            {/* Isometric 3D Wireframe Cube with Safety Orange Face */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 my-8 transform-gpu perspective-[800px]">
              <div className="w-full h-full relative transition-transform duration-700 ease-out group-hover:rotate-x-[15deg] group-hover:rotate-y-[25deg]">
                {/* SVG Isometric Structural Wireframe */}
                <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                  {/* Outer Cube */}
                  <polygon points="100,20 180,65 180,155 100,195 20,155 20,65" fill="#141413" stroke="rgba(231,227,220,0.25)" strokeWidth="1.5" />
                  {/* Top Face */}
                  <polygon points="100,20 180,65 100,110 20,65" fill="#1e1e1b" stroke="rgba(231,227,220,0.4)" strokeWidth="1.5" />
                  {/* Right Face: Safety Orange Accent */}
                  <polygon points="100,110 180,65 180,155 100,195" fill="#ff4d00" opacity="0.9" stroke="#ff4d00" strokeWidth="1.5" />
                  {/* Left Face: Dark Structural Grid */}
                  <polygon points="20,65 100,110 100,195 20,155" fill="#0e0e0d" stroke="rgba(231,227,220,0.3)" strokeWidth="1.5" />
                  {/* Floor Level Subdivision Lines */}
                  <line x1="20" y1="95" x2="100" y2="138" stroke="rgba(231,227,220,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="125" x2="100" y2="168" stroke="rgba(231,227,220,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="100" y1="138" x2="180" y2="95" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="100" y1="168" x2="180" y2="125" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                  {/* Center Vertical Axis */}
                  <line x1="100" y1="20" x2="100" y2="195" stroke="rgba(231,227,220,0.5)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] text-[#8c877f]">
              <span>TOLERANCE: &lt; 2 MM</span>
              <span className="text-[#ff4d00]">ISO 9001 VERIFIED</span>
            </div>
          </div>

          {/* Right: 2x2 Metric Stat Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(231,227,220,0.14)] border border-[rgba(231,227,220,0.14)]">
            {METRIC_STATS.map((stat) => (
              <div key={stat.tag} className="bg-[#0e0e0d] p-8 sm:p-10 flex flex-col justify-between">
                <span className="font-mono text-xs text-[#8c877f] uppercase tracking-widest block mb-6">
                  {stat.tag}
                </span>

                <div className="flex items-baseline mb-3">
                  <span className="font-anton text-5xl sm:text-7xl lg:text-8xl text-[#f6f4f0] leading-none tracking-tight">
                    {stat.number}
                  </span>
                  {stat.suffix && (
                    <span className="font-anton text-3xl sm:text-4xl text-[#ff4d00] ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <p className="font-inter text-sm text-[#8c877f] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
