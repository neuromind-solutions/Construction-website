import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Breadcrumb Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="font-mono text-xs text-[#8c877f] hover:text-[#ff4d00] uppercase tracking-wider transition-colors inline-flex items-center gap-2"
          >
            ← RETURN TO ALL PROJECTS
          </Link>
        </div>

        {/* Hero Title & Classification */}
        <div className="border-b border-[rgba(231,227,220,0.14)] pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] font-bold uppercase tracking-widest bg-black/60 px-3 py-1 border border-[#ff4d00]/30">
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#8c877f] uppercase tracking-wider">
              {project.location} · COMMISSIONED {project.year}
            </span>
          </div>

          <h1 className="font-anton text-5xl sm:text-7xl lg:text-9xl text-[#f6f4f0] uppercase tracking-tight leading-[0.88] mb-6">
            {project.title}
          </h1>

          <p className="font-inter text-lg sm:text-2xl text-[#ff4d00] font-medium max-w-4xl leading-relaxed">
            {project.headline}
          </p>
        </div>

        {/* Hero Image Full Bleed */}
        <div className="relative aspect-[16/9] w-full bg-[#1c1c1a] border border-[rgba(231,227,220,0.2)] overflow-hidden mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover contrast-115"
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
          <div className="absolute top-4 left-4 font-mono text-[10px] text-[#f6f4f0] bg-black/80 px-2 py-1 border border-[rgba(231,227,220,0.2)]">
            SITE PHOTOMETRY // AS-BUILT
          </div>
        </div>

        {/* Narrative & Specifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-anton text-3xl sm:text-4xl text-[#f6f4f0] uppercase tracking-tight">
              ENGINEERING &amp; EXECUTION NARRATIVE
            </h2>
            <p className="font-inter text-base sm:text-lg text-[#e7e3dc] leading-relaxed">
              {project.description}
            </p>
            <p className="font-inter text-base text-[#8c877f] leading-relaxed">
              Continuous 4D scheduling with sub-millimeter GNSS elevation telemetry maintained flawless coordination across 45 concurrent subcontract packages. Critical path milestone buffers were absorbed through proprietary continuous-pour cycling and offsite modular assembly.
            </p>
          </div>

          {/* Right Specifications Table */}
          <div className="lg:col-span-5 bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] p-8">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-bold block mb-6">
              STRUCTURAL DATA SHEET
            </span>

            <div className="divide-y divide-[rgba(231,227,220,0.1)]">
              {project.specifications.map((spec) => (
                <div key={spec.key} className="py-3 flex justify-between gap-4 font-mono text-xs">
                  <span className="text-[#8c877f] uppercase">{spec.key}</span>
                  <span className="text-[#f6f4f0] text-right font-medium">{spec.val}</span>
                </div>
              ))}
            </div>

            {/* Key Deliverable Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[rgba(231,227,220,0.14)]">
              {project.stats.map((s) => (
                <div key={s.label} className="bg-[#0e0e0d] p-4 border border-[rgba(231,227,220,0.1)]">
                  <span className="font-mono text-[10px] text-[#8c877f] block mb-1">{s.label}</span>
                  <span className="font-anton text-2xl text-[#ff4d00]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-[#1c1c1a] border border-[#ff4d00]/40 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-anton text-2xl sm:text-3xl text-[#f6f4f0] uppercase">
              HAVE A SIMILAR DEVELOPMENT ENQUIRY?
            </h3>
            <p className="font-inter text-sm text-[#8c877f] mt-1">
              Connect with our structural engineering team for early constructability modeling.
            </p>
          </div>
          <Link href="/contact" className="cta-compound flex-shrink-0">
            <span className="cta-label">TENDER ENQUIRY</span>
            <span className="cta-icon">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
