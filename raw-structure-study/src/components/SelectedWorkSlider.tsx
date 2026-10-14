'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

export default function SelectedWorkSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-32 border-b border-[rgba(231,227,220,0.14)] relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
                (04) SELECTED WORK
              </span>
              <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-[#f6f4f0] uppercase tracking-tight leading-[0.92]">
              BUILT TO LAST CENTURIES.
            </h2>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <span className="font-mono text-xs text-[#8c877f] uppercase tracking-widest">
              04 FEATURED / 214 DELIVERED
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 border border-[rgba(231,227,220,0.2)] hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-[#0e0e0d] flex items-center justify-center transition-colors text-[#f6f4f0]"
                aria-label="Previous project"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M 6.75 0 L 0 6.75 L 6.75 13.5 Z" transform="translate(6 5.25)" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 border border-[rgba(231,227,220,0.2)] hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-[#0e0e0d] flex items-center justify-center transition-colors text-[#f6f4f0]"
                aria-label="Next project"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M 0 0 L 6.75 6.75 L 0 13.5 Z" transform="translate(9 5.25)" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 sm:px-8 pb-8 no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="flex-shrink-0 w-[300px] sm:w-[420px] group bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] hover:border-[#ff4d00] transition-colors"
          >
            {/* Project Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0e0e0d]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                sizes="(max-width: 640px) 300px, 420px"
              />
              <div className="absolute top-3 left-3 font-mono text-[10px] text-[#ff4d00] bg-black/80 px-2 py-0.5 border border-[#ff4d00]/30 uppercase">
                {project.category}
              </div>
            </div>

            {/* Project Meta */}
            <div className="p-6">
              <div className="flex items-center justify-between text-[#8c877f] font-mono text-xs mb-2">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl text-[#f6f4f0] group-hover:text-[#ff4d00] uppercase tracking-tight transition-colors">
                {project.title}
              </h3>
              <p className="font-inter text-xs text-[#8c877f] mt-3 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
