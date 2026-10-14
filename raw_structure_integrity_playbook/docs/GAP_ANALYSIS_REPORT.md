# Documentation Gap Analysis & Audit Report
**Audit Date:** 2026-10-14  
**Screenshots captured:** 29 (across all pages, desktop + mobile)  
**Status:** ALL GAPS FIXED ✓

---

## Critical Errors Found & Fixed

| # | File | Error | Fix Applied |
|---|---|---|---|
| 1 | `ANIMATION_SPEC.md` | Projects count stated as **420** | Corrected to **214+** (confirmed live) |
| 2 | `ANIMATION_SPEC.md` | People count stated as **650** | Corrected to **640+** (confirmed live) |
| 3 | `EXECUTION_PLAN.md` | Projects count stated as **420+** | Corrected to **214+** |
| 4 | `REFERENCE_AUDIT.md` | Projects count stated as **420+** in SEC-07 | Corrected to **214+** |
| 5 | `DESIGN_SYSTEM.md` | CTA button described as **capsule/pill** (`border-radius: 9999px`) | Corrected: **compound rectangle** — orange label block + separate black arrow box |
| 6 | `DESIGN_SYSTEM.md` | No mention of right-side elevation ruler | Added: fixed right-edge vertical scale (000 M → 100 M+, orange ticks) |
| 7 | `DESIGN_SYSTEM.md` | No mention of "DRAWING → LANDMARK" full-bleed photo section | Added as standalone Section 5E |
| 8 | `DESIGN_SYSTEM.md` | No mention of massive "RAW STRUCTURE" wordmark in footer | Added in footer structure |
| 9 | `DESIGN_SYSTEM.md` | No mention of hero image strip L01–L06 | Added with orange accent card specs |
| 10 | `ANIMATION_SPEC.md` | Marquee separator for Ribbon 2 described as `·` | Corrected to **`⊕`** (crosshair) |
| 11 | `ANIMATION_SPEC.md` | Nav described as having `backdrop-filter: blur(12px)` | Corrected: **solid dark background, no blur** |
| 12 | `ANIMATION_SPEC.md` | Timeline described as "clickable tabs" | Corrected: **sticky-scroll pinned panels with outline-stroke Anton numbers** |
| 13 | `ANIMATION_SPEC.md` | Metrics section described as text-only | Added **3D geometric building model** on left side |
| 14 | `ANIMATION_SPEC.md` | Timeline steps were guessed | Confirmed: SURVEY / EXCAVATE / FOUNDATION / FRAME / HANDOVER |
| 15 | `REFERENCE_AUDIT.md` | Only 11 screenshots referenced | Updated to all **29 screenshots** from thorough audit |
| 16 | `PROJECT_BRIEF.md` | Missing "DRAWING → LANDMARK" feature | Added as feature #6 |
| 17 | `PROJECT_BRIEF.md` | Missing footer wordmark feature | Added as feature #7 |
| 18 | `PROJECT_BRIEF.md` | Missing elevation ruler feature | Added as feature #8 |

---

## New Files Created

| File | Purpose |
|---|---|
| `docs/CONTENT_DICTIONARY.md` | **Master copy source** — every exact string, number, label, breadcrumb, and micro-copy from all 17 pages. No hallucination allowed during build. |
| `docs/COMPONENT_SPECS.md` | **Implementation blueprints** — HTML structure, CSS tokens, and GSAP code for all 8 major components (Header, Hero, Marquee, DisciplineRow, Timeline, StatsGrid, Footer, ElevationRuler) |

---

## Confirmed Facts From Visual Audit

### Global
- Nav: `height ~64px`, solid `#0e0e0d` bg, no backdrop blur
- Logo: `◆` (orange diamond) + `RAW STRUCTURE` (bold Archivo)
- CTA: `[START A PROJECT]` + `[↗]` as two conjoined rectangular segments
- Right-edge ruler: fixed, shows scroll depth in meters, orange ticks

### Home Page Sections (10 confirmed)
1. **Hero** — Coordinate bar + L01–L06 strip + H1 "WE BUILD WHAT STANDS." + LOT 07 tag + body copy + 2 CTAs
2. **Dual diagonal marquee** — Orange ribbon (`*` separators) + Cream ribbon (`⊕` separators)
3. **(01) WHO WE ARE** — Body copy + 2 CTAs
4. **(02) WHAT WE DO** — 5 discipline rows (full-width, hairline-separated)
5. **(03) HOW WE BUILD** — 5 sticky-scroll panels, outline-stroke Anton numbers
6. **(04) SELECTED WORK** — `04 FEATURED / 214 DELIVERED`, ← → arrows, drag carousel
7. **DRAWING → LANDMARK** — Full-bleed construction photo + massive text overlay
8. **(05) METRICS** — 3D building model + 2×2 stats grid (38+, 214+, 1.2M, 640+)
9. **(06) FIELD NOTES** — Journal preview cards
10. **Footer** — CTA headline + 4 columns + massive wordmark + bottom bar

### All 17 Pages Verified
- `/` ✓ — `/about` ✓ — `/services` ✓ — `/projects` ✓
- 6× `/projects/[slug]` ✓ — `/journal` ✓ — 4× `/journal/[slug]` ✓
- `/contact` ✓ — `/404` ✓

---

## What Was Already Correct
- Color palette tokens (`#0e0e0d`, `#ff4d00`, `#1c1c1a`, `#f6f4f0`)
- Font families: Anton, Archivo, JetBrains Mono, Inter
- 17-page route architecture (all routes confirmed)
- Footer 4-column layout and exact contact details
- Discipline names and right-side tag clusters (verified pixel-perfect)
- Timeline level labels: LEVEL 00–04, WEEK 0-4 through MONTH 18+
- All 6 project case study details (location, year, client, category)
- All 4 journal article titles, dates, categories, descriptions
- Contact form fields (Full name, Email, Project type, Budget, Tell us about the site)
- ISO certifications in footer: ISO 9001, ISO 45001, VCA**

---

## Playbook Readiness Status

| Phase | Status |
|---|---|
| Phase 0: Playbook & Docs | ✅ COMPLETE — all gaps fixed |
| Phase 1: Next.js Scaffolding | 🟡 READY TO START |
| Phase 2: Design Tokens | 🟡 READY (tokens defined in DESIGN_SYSTEM.md) |
| Phase 3: Global Shell | 🟡 READY (component specs in COMPONENT_SPECS.md) |
| Phase 4: Core Pages | 🟡 READY (copy in CONTENT_DICTIONARY.md) |
| Phase 5: Dynamic Routes | 🟡 READY (all case study data in full_site_inventory.md) |
| Phase 6: Animations | 🟡 READY (GSAP specs in ANIMATION_SPEC.md + COMPONENT_SPECS.md) |
| Phase 7: QA | 🟡 WAITING (no code yet) |
