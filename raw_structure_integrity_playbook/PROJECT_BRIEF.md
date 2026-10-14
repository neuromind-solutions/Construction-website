# Project Brief — RAW STRUCTURE Reference Recreation

## 1. Project Objective

Build an independently implemented, local-first website that faithfully reproduces the complete visual hierarchy, brutalist architecture aesthetics, typography, layout, and interaction behavior of **RAW STRUCTURE** (https://rawstructure.framer.website/) for local study, technical benchmarking, and pair-programming training in Google Antigravity.

This project is a private learning and technical reference implementation. It runs strictly locally on the user's laptop.

---

## 2. Verified Scope & Complete Site Architecture

Through live browser reconnaissance and extraction of the site's search index and asset manifest, the site has been verified to consist of **17 distinct pages** and sub-routes:

| # | Route | Page Title | Primary Purpose / Observable Structure |
|---|---|---|---|
| 1 | `/` | RAW STRUCTURE — Construction & Engineering | Main Landing Page: Dual hero headline, ticker tags, (01) Who we are, (02) What we do, (03) How we build timeline, (04) Selected work carousel, (05) Metrics & Client words, (06) Site office journal preview, Footer CTA |
| 2 | `/about` | Built by Builders — About RAW STRUCTURE | Brand manifesto, 1987–2026 timeline (Rotterdam, New York, Oslo), core safety principles, executive leadership team, quality certifications |
| 3 | `/services` | Five Ways We Move Earth — Services | Detailed breakdown of the 5 disciplines (General Contracting, Design & Build, Structural Steel, Civil Works, Renovation & Retrofit), (02) Capability Sheet metrics table, (03) Interactive FAQ accordion |
| 4 | `/projects` | Work That Carries Weight — Projects | Portfolio archive with filter chips (`All`, `Commercial`, `Infrastructure`, `Residential`, `Industrial`), project grid with location, year, and hover scale |
| 5 | `/projects/meridian-tower` | Meridian Tower — Case Study | 42-story commercial tower in Rotterdam, NL (2025). Structural core, jump-form specs, engineering timeline, site photo gallery |
| 6 | `/projects/kessel-bridge` | Kessel Bridge — Case Study | 420m balanced cantilever infrastructure in Hamburg, DE (2024). Zero shipping lane closures, marine works engineering |
| 7 | `/projects/foundry-lofts` | Foundry Lofts — Case Study | Adaptive reuse residential loft in Brooklyn, NY (2024). Historic cast-iron facade retention and seismic retrofit |
| 8 | `/projects/atlas-clinic` | Atlas Clinic — Case Study | Vibration-sensitive medical surgical center in Oslo, NO (2023). Live campus excavation and acoustic mitigation |
| 9 | `/projects/northgate-logistics-hub` | Northgate Logistics Hub — Case Study | 120,000 m² high-bay distribution hub in Leeds, UK (2023). 48m clear-span structural steel framing |
| 10 | `/projects/monolith-house` | Monolith House — Case Study | Single continuous pour pigmented concrete residence in Bergen, NO (2022). 9m fjord cantilever |
| 11 | `/journal` | Field Notes & Engineering — Journal | Technical journal index categorized by `Site Notes`, `Engineering`, `Safety`, `Process` |
| 12 | `/journal/why-we-pour-concrete-at-night` | Why we pour concrete at night — Journal | Technical article: hydration temperature management, urban traffic logistics, curing curve data |
| 13 | `/journal/reading-a-site-before-breaking-ground` | Reading a site before breaking ground — Journal | Technical article: geotech borehole testing, groundwater table mapping, retaining wall shoring |
| 14 | `/journal/mass-timber-vs-steel-an-honest-comparison` | Mass timber vs. steel: an honest comparison — Journal | Technical article: comparative carbon metrics, erection speed, fire rating, tolerance analysis |
| 15 | `/journal/zero-incidents-across-1-2-million-hours` | Zero incidents across 1.2 million hours — Journal | Technical article: behavioral safety culture, method statements, subcontractor alignment |
| 16 | `/contact` | Let’s Talk About Your Site — Contact | Technical enquiry Form RS-01, Rotterdam Head Office coordinates, direct line, emergency site hotline |
| 17 | `/404` | 404 — Page Not Found | Industrial blueprint error layout with coordinates and return link |

---

## 3. Technical Stack & Implementation Requirements

- **Framework:** Next.js (App Router) + React 19 + TypeScript.
- **Styling:** Tailwind CSS + Vanilla CSS Tokens (`tokens.css`).
- **Typography:**
  - `Anton` (Display Hero headlines, uppercase, -0.04em letter spacing).
  - `Archivo` (H2/H3 headlines and navigation, weights 400, 500, 600, 700, 900).
  - `JetBrains Mono` / `Fragment Mono` (Technical labels, coordinates, numbers, badges).
  - `Inter` (Body copy, high-readability paragraphs).
- **Animation Engine:** GSAP 3 + ScrollTrigger + `@gsap/react` (`useGSAP`).
- **UI Architecture:** Clean separation into atoms, layout shell, page sections, motion wrappers, and typed static data.
- **Testing & Verification:** Visual audit against captured reference screenshots at 1440px, 1280px, 768px, and 390px.

---

## 4. Key Observable Design Patterns & Features

1. **Fixed Sticky Shell:**
   - Top Header with glass/dark blur, capsule nav items, hover underline/pill, and orange CTA button.
   - Right architectural coordinate widget (`N 51°54' / E 4°28'`).
2. **Dual Diagonal Hazard Marquee:**
   - High-contrast marquee ribbons (`RETROFIT * GENERAL CONTRACTING * ZERO HARM * DESIGN & BUILD`) running continuously.
3. **Interactive "How We Build" Level Tabs:**
   - 5 construction levels (Level 00 to Level 04), matching timeframe (`Week 0–4` to `Month 18+`), description, and technical deliverables.
4. **Interactive Horizontal Drag Gallery:**
   - "Selected work" horizontal swipe/drag with cursor pill cue (`Drag to explore →`).
5. **Interactive FAQ Accordion:**
   - Services page accordion with smooth height animation and icon rotation.
5. **Metrics Dashboard with 3D Building Model:**
   - Left side: rotating/parallax 3D geometric building model (dark cube, orange face, grid lines).
   - Right: animated count-up metrics: `38+` Years Building, `214+` Projects Delivered, `1.2M` Safe Work Hours, `640+` People on Payroll.
6. **"DRAWING → LANDMARK" Full-Bleed Section:**
   - Full-viewport-width color construction photo of Meridian Tower.
   - Massive Anton text overlay: `DRAWING → LANDMARK`.
   - Attribution label: `MERIDIAN TOWER · ROTTERDAM · 2025`.
7. **Large Footer Brand Wordmark:**
   - `RAW STRUCTURE` in massive Anton typography fills the bottom of the footer.
8. **Right-Side Elevation Ruler:**
   - Fixed vertical scale bar on far right showing scroll depth in meters (000 M → 100 M+).
   - Color: safety orange tick marks.

---

## 5. Working Guidelines

- **Step-by-Step Gated Execution:** Follow `EXECUTION_PLAN.md` phase by phase. Discuss each step upon completion before proceeding.
- **No Hallucinated Content:** Use the complete texts, numbers, and specifications already captured in `docs/full_site_inventory.md` and `docs/search_index.json`.
- **Responsive by Default:** All layouts must render impeccably on desktop (1440px) and mobile (390px).
