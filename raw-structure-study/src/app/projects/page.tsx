'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'COMMERCIAL', 'INFRASTRUCTURE', 'RESIDENTIAL', 'HEALTHCARE'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="border-b border-[rgba(231,227,220,0.14)] pb-12 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
              (04) DELIVERED RECORD
            </span>
            <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-9xl text-[#f6f4f0] uppercase tracking-tight leading-[0.88] mb-8">
            PROJECT ARCHIVE.
          </h1>
          <p className="font-inter text-lg sm:text-2xl text-[#e7e3dc] max-w-3xl leading-relaxed">
            Over 214 high-performance structures engineered to sub-millimeter tolerances across 38 years.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition-colors ${
                activeCategory === cat
                  ? 'bg-[#ff4d00] text-[#0e0e0d] border-[#ff4d00] font-bold'
                  : 'bg-[#1c1c1a] text-[#8c877f] border-[rgba(231,227,220,0.14)] hover:border-[#ff4d00]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] group hover:border-[#ff4d00] transition-colors overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-[#0e0e0d] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] text-[#ff4d00] bg-black/80 px-2 py-0.5 border border-[#ff4d00]/30 uppercase">
                  {project.category}
                </div>
                <div className="absolute top-3 right-3 font-mono text-[10px] text-[#f6f4f0] bg-black/80 px-2 py-0.5 border border-[rgba(231,227,220,0.2)]">
                  {project.year}
                </div>
              </div>

              <div className="p-8">
                <div className="font-mono text-xs text-[#8c877f] uppercase mb-2">
                  {project.location}
                </div>
                <h2 className="font-anton text-3xl sm:text-4xl text-[#f6f4f0] group-hover:text-[#ff4d00] uppercase tracking-tight transition-colors mb-4">
                  {project.title}
                </h2>
                <p className="font-inter text-sm text-[#8c877f] leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>

                {/* Micro Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[rgba(231,227,220,0.1)] font-mono text-[10px]">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <span className="text-[#8c877f] block">{s.label}</span>
                      <span className="text-[#ff4d00] font-bold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
