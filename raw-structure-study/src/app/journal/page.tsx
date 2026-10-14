import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'JOURNAL & FIELD NOTES — RAW STRUCTURE',
  description: 'Technical commentary, constructability research, and site engineering logs from Raw Structure.',
};

export default function JournalPage() {
  const articles = [
    {
      id: '01',
      date: 'OCTOBER 2026',
      readTime: '6 MIN READ',
      title: 'WHY WE POUR CONCRETE AT NIGHT.',
      category: 'CONCRETE TECHNOLOGY',
      image: '/images/lQ9et0c22tqAJR1VFU4r9RQCf3w.jpg',
      summary:
        'Managing thermal hydration curves, minimizing micro-fissuring through ambient temperature control, and securing unimpeded city logistics during mass raft pours.',
    },
    {
      id: '02',
      date: 'SEPTEMBER 2026',
      readTime: '8 MIN READ',
      title: 'READING A SITE BEFORE BREAKING GROUND.',
      category: 'GEOTECHNICAL',
      image: '/images/yBBY6MbyHbb3vNonuZPaW1SRx4.jpg',
      summary:
        'Subterranean LiDAR scanning, ground penetrating radar, and 30-meter borehole cores: why geodetic intelligence prevents costly piling surprises.',
    },
    {
      id: '03',
      date: 'AUGUST 2026',
      readTime: '5 MIN READ',
      title: 'MASS TIMBER VS STRUCTURAL STEEL: THE HYBRID REALITY.',
      category: 'STRUCTURAL ENGINEERING',
      image: '/images/kQlbW52BNh2N5AkiRh0cQPwGWA.jpg',
      summary:
        'Moving past dogmatic material debates. How composite structural systems leverage the compression strength of concrete and speed of steel trusses.',
    },
    {
      id: '04',
      date: 'JULY 2026',
      readTime: '7 MIN READ',
      title: 'ZERO INCIDENTS ACROSS 1.2M HOURS: RUNNING SITES LIKE FLIGHT DECKS.',
      category: 'SITE CULTURE & SAFETY',
      image: '/images/cHIsaLk2xKFqBdK4OgR66pZJk64.jpg',
      summary:
        'How commercial high-risk construction borrows crew resource management protocols from naval aviation to achieve world-class site safety records.',
    },
  ];

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-32">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="border-b border-[rgba(231,227,220,0.14)] pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#ff4d00] uppercase tracking-widest font-semibold">
              (05) FIELD LOGS &amp; PAPERS
            </span>
            <div className="w-12 h-[1px] bg-[#ff4d00]/50" />
          </div>
          <h1 className="font-anton text-5xl sm:text-7xl lg:text-9xl text-[#f6f4f0] uppercase tracking-tight leading-[0.88] mb-8">
            FIELD NOTES.
          </h1>
          <p className="font-inter text-lg sm:text-2xl text-[#e7e3dc] max-w-3xl leading-relaxed">
            Technical commentary, constructability research, and site engineering logs directly from our project teams.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-[#1c1c1a] border border-[rgba(231,227,220,0.14)] hover:border-[#ff4d00] transition-colors flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-[#0e0e0d] overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] text-[#ff4d00] bg-black/80 px-2 py-0.5 border border-[#ff4d00]/30 uppercase">
                  {art.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between text-[#8c877f] font-mono text-xs mb-3">
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="font-anton text-2xl sm:text-3xl text-[#f6f4f0] group-hover:text-[#ff4d00] uppercase tracking-tight transition-colors mb-4">
                  {art.title}
                </h2>

                <p className="font-inter text-sm text-[#8c877f] leading-relaxed mb-6">
                  {art.summary}
                </p>

                <div className="flex items-center gap-2 font-mono text-xs text-[#ff4d00] font-semibold uppercase tracking-wider">
                  <span>READ FIELD REPORT</span>
                  <span>↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
