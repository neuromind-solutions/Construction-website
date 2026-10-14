# Architecture and File Structure

## Recommended Stack

- **Framework:** Next.js (App Router) + React 19 + TypeScript.
- **Styling:** Vanilla CSS design tokens (`tokens.css`) + Tailwind CSS utilities.
- **Motion:** GSAP 3 + ScrollTrigger + `@gsap/react` (`useGSAP`).
- **Icons:** Lucide React (feather-style crisp industrial icons) + Custom inline SVGs for blueprint symbols.
- **Type Safety:** 100% strict TypeScript with zero `any`.
- **Data Architecture:** Static typed data dictionaries (`src/data/projects.ts`, `src/data/journal.ts`, `src/data/services.ts`, `src/data/site-meta.ts`).

---

## Complete Project Directory Layout

```text
raw-structure-study/
├── .agents/
│   └── rules/
│       ├── frontend.md
│       ├── animation.md
│       ├── assets.md
│       └── testing.md
├── public/
│   ├── fonts/                            # 20 Verified Production WOFF2 Fonts
│   │   ├── PCXT6E5YCQO6SSVLT6UZPPGT7QKGXOUS.woff2 # Anton 400
│   │   ├── 7BTLO3ZVFMNDGT63YATXTEALTKTYZUZG.woff2 # Archivo 400
│   │   ├── EPHSF4UBJRLGUILEFJVCMY7ET4W5HPUF.woff2 # Archivo 500
│   │   ├── HI3GXDQAABUJ5YHSPOI3V5JTNTJ4PCRR.woff2 # Archivo 600
│   │   ├── UHPKREF72UMVMQSKHPDQ42AVOZPICLOJ.woff2 # Archivo 700
│   │   ├── 4QOBYYT6LF33KRDEW47UQ3DFAEWGYHD4.woff2 # Archivo 900
│   │   ├── EO5MKE3BUDOZN44BP4HDPXAJAC2BIMCD.woff2 # JetBrains Mono 400
│   │   ├── 33ZCUAC3GU2QVDMGY6EP3BNWHET5IUK4.woff2 # JetBrains Mono 500
│   │   ├── C4X2AZFIU7APBBKUZ2X4AGSKANOLALFP.woff2 # JetBrains Mono 600
│   │   └── 5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2      # Inter 400
│   ├── images/                           # 21 Verified Production JPEGs
│   │   ├── mUdMPbzNFGwgVSZnu6VXATDtkPs.jpg        # Hero L01
│   │   ├── cHIsaLk2xKFqBdK4OgR66pZJk64.jpg        # Hero L02
│   │   ├── XCsFzEjL11OrhWvehONxhZVKUo.jpg        # Hero L04 & Discipline 01
│   │   ├── uBBAplfPyIWicTCsVvWg7UU.jpg            # Hero L05
│   │   ├── dIXtk7wOxfTY46ikTp5PnquPG7Q.jpg        # Hero L06
│   │   ├── Ejb9xKkRa10W0e7hV42bq6Rf7GY.jpg        # Discipline 02: Design & Build
│   │   ├── kQlbW52BNh2N5AkiRh0cQPwGWA.jpg        # Discipline 03 & Timeline L03
│   │   ├── YU4bdJs7Pxvs6xbPAMiKnFwD0A.jpg        # Discipline 04: Civil Infra
│   │   ├── XevLGaPtsCniv0VETXlJSmNKo.jpg        # Discipline 05: Seismic
│   │   ├── yBBY6MbyHbb3vNonuZPaW1SRx4.jpg        # Timeline Level 00 Survey
│   │   ├── umiAul3BCC6J5wiNHx7VCJRrs.jpg          # Timeline Level 01 Excavate
│   │   ├── N3y8qP9josbTFQ04tUWWGGECc.jpg          # Timeline Level 02 Foundation
│   │   ├── lQ9et0c22tqAJR1VFU4r9RQCf3w.jpg        # Timeline Level 04 Handover
│   │   ├── eqrLSETPpkJONqFnCfAZhUsKem0.jpg        # Project: Meridian Tower
│   │   ├── a37tu7mhireD1ajDd8iWq6BbrmY.jpg        # Project: Kessel Bridge
│   │   ├── ZXGCQ9ramf2nzvPDkqJe6G1p7E.jpg        # Project: Foundry Lofts
│   │   ├── 1Z6NS71E0hj9I28vHqgoVDEVo8.jpg        # Project: Atlas Clinic
│   │   ├── 6QMjWT0pZjHhUYaPIXKvYkjjcU.jpg        # Zoom Hero: Drawing to Landmark
│   │   ├── Y613vnAJPUR911i0n2tx8ZwHM.jpg          # Avatar: Ilse van Dijk
│   │   ├── lApTWiLV6p4H3Ej4xwxVAC3TLY.jpg        # Avatar: Markus Brandt
│   │   └── wQi3fuduH13jDNFulIx6mxVM2CY.jpg        # Avatar: Elena Rostova
│   └── svgs/                             # 27 Verified Production Vector SVGs
│       ├── svg-1.svg                              # Blueprint Primary Coordinate Grid
│       └── svg-26.svg                             # Blueprint Secondary Overlay Grid
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root HTML shell with font loaders and theme tokens
│   │   ├── page.tsx                       # Complete Home landing page
│   │   ├── globals.css                    # Tailwind imports and base resets
│   │   ├── not-found.tsx                  # Custom 404 industrial blueprint page
│   │   ├── about/
│   │   │   └── page.tsx                   # Built by Builders narrative page
│   │   ├── services/
│   │   │   └── page.tsx                   # 5 Disciplines, Capability Sheet, FAQ Accordion
│   │   ├── projects/
│   │   │   ├── page.tsx                   # Filterable Project Archive
│   │   │   └── [slug]/
│   │   │       └── page.tsx               # Dynamic Project Case Study route
│   │   ├── journal/
│   │   │   ├── page.tsx                   # Engineering & Site Notes Archive
│   │   │   └── [slug]/
│   │   │       └── page.tsx               # Dynamic Technical Article route
│   │   └── contact/
│   │       └── page.tsx                   # Form RS-01, Office coordinates, hotline
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx             # Sticky navbar with capsule navigation
│   │   │   ├── MobileNavDrawer.tsx        # Full-screen industrial menu overlay
│   │   │   ├── SiteFooter.tsx             # 4-column brutalist footer + big CTA signoff
│   │   │   ├── ArchitecturalHUD.tsx       # Fixed right coordinates widget (N 51°54' / E 4°28')
│   │   │   └── PageTransition.tsx         # Route enter/exit wrapper
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.tsx        # Dual headline, ticker, discipline tags
│   │   │   │   ├── WhoWeAreSection.tsx    # Section (01) Mission and trust stats
│   │   │   │   ├── WhatWeDoSection.tsx    # Section (02) 5 discipline cards
│   │   │   │   ├── HowWeBuildTimeline.tsx # Section (03) 5-level interactive timeline
│   │   │   │   ├── SelectedWorkSlider.tsx # Section (04) Horizontal drag carousel
│   │   │   │   ├── StatsAndTestimonials.tsx# Section (05) 4 metrics + client quotes
│   │   │   │   └── JournalPreviewSection.tsx# Section (06) Latest field notes
│   │   │   ├── services/
│   │   │   │   ├── DisciplinesDeepDive.tsx
│   │   │   │   ├── CapabilitySheet.tsx    # Technical specs table
│   │   │   │   └── FaqAccordion.tsx       # Expandable question cards
│   │   │   ├── projects/
│   │   │   │   ├── ProjectFilterGrid.tsx
│   │   │   │   └── ProjectCaseStudyView.tsx
│   │   │   └── contact/
│   │   │       └── SiteEnquiryForm.tsx    # Form RS-01 with technical fields
│   │   ├── motion/
│   │   │   ├── DiagonalMarquee.tsx        # High-contrast dual hazard tape ribbons
│   │   │   ├── SplitHeadline.tsx          # Character/word staggering reveal
│   │   │   ├── CounterScrub.tsx           # Numeric count-up animation on scroll
│   │   │   └── BlueprintGridOverlay.tsx   # Crosshairs, rulers, grid lines
│   │   └── ui/
│   │       ├── Button.tsx                 # Solid orange, outline wireframe, capsule
│   │       ├── Badge.tsx                  # Mono discipline & status tag
│   │       ├── Container.tsx              # Standard 1320px constrained wrapper
│   │       └── SectionHeading.tsx         # Tag (01) + Headline + Sub-lead
│   ├── data/
│   │   ├── projects.ts                    # Detailed case studies data
│   │   ├── journal.ts                     # Full article data with metadata
│   │   ├── services.ts                    # Disciplines, capabilities, FAQs
│   │   └── site-meta.ts                   # Navigation links, contact coordinates, social
│   ├── hooks/
│   │   ├── useReducedMotion.ts            # Accessibility motion preference detection
│   │   └── useScrollProgress.ts           # Header opacity and coordinate tracking
│   ├── lib/
│   │   ├── gsap.ts                        # Configured GSAP instance with registered plugins
│   │   └── utils.ts                       # `cn` clsx/tailwind-merge helper
│   └── styles/
│       └── tokens.css                     # Raw CSS variables for colors, typography, spacing
├── docs/
│   ├── full_site_inventory.md
│   ├── search_index.json
│   ├── extracted_assets.json
│   └── test-results.md
├── screenshots/                           # 11 reference visual audit captures
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Component Boundary & Responsibility Rules

1. **Server vs. Client Components:**
   - Pages and static layouts are Server Components by default for optimal SEO, lightning-fast TTFB, and zero client JS overhead.
   - Interactive components (`SelectedWorkSlider`, `HowWeBuildTimeline`, `FaqAccordion`, `MobileNavDrawer`, `DiagonalMarquee`, `CounterScrub`) are marked `'use client'` and encapsulate their state and GSAP hooks cleanly.
2. **GSAP Scope & React Lifecycle:**
   - Every GSAP animation is wrapped inside `useGSAP()` with a scoped `scope` ref.
   - All timelines and ScrollTriggers are automatically killed on component unmount to prevent memory leaks or duplicate triggers during route transitions.
3. **Data Separation:**
   - No hardcoded multiline marketing copy inside layout JSX. All projects, journal posts, services, and FAQ items live in typed data files under `src/data/`.
