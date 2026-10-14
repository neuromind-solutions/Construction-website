# RAW STRUCTURE — Construction & Engineering Web Platform Study

A high-fidelity study and engineering recreation of the industrial-brutalist construction & engineering web platform, built with **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, and **GSAP**.

This repository contains the complete web application, full asset library, architectural blueprints, design tokens, component specifications, and developer/AI agent prompt playbooks.

---

## 🏗️ Quick Start for Collaborators

### Prerequisites
- **Node.js**: v18.17+ or v20+ recommended
- **npm**: v9+

### 1. Install Dependencies
```bash
cd raw-structure-study
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Validation
```bash
npm run build
npm run start
```

---

## 📁 Repository Structure

```
.
├── README.md                                          # Master repository documentation
├── .gitignore                                         # Root ignore rules (node_modules, .next, etc.)
│
├── raw-structure-study/                               # Next.js 14 Web Application
│   ├── src/
│   │   ├── app/                                       # Next.js App Router routes
│   │   │   ├── page.tsx                               # Homepage (Hero, Selected Work, Blueprint HUD, Stats)
│   │   │   ├── layout.tsx                             # Master layout with SiteHeader & SiteFooter
│   │   │   ├── globals.css                            # Global CSS, resets, custom utilities
│   │   │   ├── about/page.tsx                         # Company history, mission, leadership
│   │   │   ├── services/page.tsx                      # Core engineering disciplines
│   │   │   ├── projects/                              # Projects directory & dynamic case studies
│   │   │   │   ├── page.tsx                           # Filterable projects grid
│   │   │   │   └── [slug]/page.tsx                    # Detailed case study (SSG prerendered)
│   │   │   ├── journal/page.tsx                       # Engineering publications & site logs
│   │   │   └── contact/page.tsx                       # HQ info & direct RFQ contact form
│   │   ├── components/                                # Reusable UI & animation components
│   │   │   ├── SiteHeader.tsx                         # Sticky brutalist navbar with mobile drawer
│   │   │   ├── SiteFooter.tsx                         # Enterprise footer with coordinates & links
│   │   │   ├── HeroSection.tsx                        # Monumental H1 + Rising Floors strip
│   │   │   ├── SelectedWorkSlider.tsx                 # Project carousel with keyboard & drag support
│   │   │   ├── DrawingToLandmark.tsx                  # GSAP blueprint-to-concrete zoom effect
│   │   │   ├── StatsSection.tsx                       # Industrial metric counters
│   │   │   ├── DisciplinesSection.tsx                 # Structural services grid
│   │   │   ├── HowWeBuildTimeline.tsx                 # Step-by-step methodology timeline
│   │   │   ├── ArchitecturalHUD.tsx                   # Live CAD / blueprint coordinate overlay
│   │   │   ├── DiagonalMarquee.tsx                    # Repeating technical ticker
│   │   │   └── TestimonialsSection.tsx                # Client and developer quotes
│   │   ├── data/                                      # Static datasets (projects, disciplines, stats, meta)
│   │   ├── styles/                                    # Design system tokens and @font-face rules
│   │   └── types/                                     # TypeScript interfaces
│   ├── public/                                        # Static runtime assets
│   │   ├── fonts/                                     # 20 WOFF2 fonts (Anton, Archivo, JetBrains Mono)
│   │   ├── svgs/                                      # Vector icons, CAD grids, indicators
│   │   └── images/                                    # Verified high-res photography
│   ├── package.json                                   # Dependencies & scripts
│   ├── tsconfig.json                                  # Strict TypeScript configuration
│   └── tailwind.config.ts                             # Custom theme, typography, & brutalist palette
│
├── raw_structure_integrity_playbook/                  # Developer & AI Agent Context
│   ├── docs/
│   │   ├── COMPONENT_SPECS.md                         # Detailed component props, states, & DOM hierarchy
│   │   ├── CONTENT_DICTIONARY.md                      # Verbatim text dictionary & labels
│   │   └── GAP_ANALYSIS_REPORT.md                     # Deep technical audit & parity analysis
│   ├── PROMPTS/                                       # Step-by-step instructions for AI agents
│   │   ├── 00_START_HERE.md                           # Onboarding guide for pair programming
│   │   ├── 02_ARCHITECTURE_SETUP.md                   # Next.js setup recipe
│   │   ├── 03_DESIGN_SKELETON.md                      # Design system integration guide
│   │   └── 04_ANIMATION_BUILD.md                      # GSAP & ScrollTrigger setup guide
│   ├── .agents/rules/                                 # Antigravity / Claude / Cursor coding rules
│   │   ├── animation.md                               # Animation standards (GSAP / CSS transitions)
│   │   ├── assets.md                                  # Asset hygiene rules (no placeholders, local only)
│   │   ├── frontend.md                                # Component & styling standards
│   │   └── testing.md                                 # QA & validation standards
│   ├── ASSET_REGISTER.csv                             # Complete registry of all assets with hashes
│   ├── DESIGN_SYSTEM.md                               # Complete token reference
│   └── ARCHITECTURE.md                                # Systems architecture & data flow
│
└── raw-structure-construction-engineering.assets.Woblo/ # Original scraped asset source archive
```

---

## 🎨 Design System & Aesthetics

- **Primary Canvas**: `#0e0e0d` (Deep Industrial Black)
- **Structural Gray**: `#1c1c1a` (Surface / Card Background)
- **Industrial Accent**: `#ff4d00` (Safety Orange / Action / Focus)
- **High-Contrast Text**: `#f6f4f0` (Bone White / Headlines)
- **Muted Blueprint Text**: `#8c877f` (Technical Metadata / Labels)
- **Borders & Dividers**: `rgba(231, 227, 220, 0.14)` (Precision CAD Hairlines)

### Typography
- **Display Headlines**: `Anton` (Monumental uppercase typography)
- **Body & Editorial**: `Archivo` (Clean geometric grotesk)
- **Technical & Coordinates**: `JetBrains Mono` (Code & surveyor metadata)

---

## 🤖 Context for AI Coding Assistants (Cursor / Claude Code / Antigravity)

When using this repo with AI pair-programming tools:
1. Refer to `raw_structure_integrity_playbook/.agents/rules/` for strict coding guidelines.
2. Review `raw_structure_integrity_playbook/docs/COMPONENT_SPECS.md` before refactoring any UI components.
3. Keep all assets local inside `raw-structure-study/public/` — **no external CDN links or AI-generated placeholders**.

---

## 📜 License
This study project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
