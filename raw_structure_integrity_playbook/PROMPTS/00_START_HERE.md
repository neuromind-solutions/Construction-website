# Prompt 00 — Start Here: Initialize & Review Playbook
<!-- Updated 2026-10-14 after comprehensive live-site audit with 29 screenshots -->

You are working in Google Antigravity. Read these files IN ORDER before writing any code:

1. `AGENTS.md` — Workspace rules and gating behavior
2. `EXECUTION_PLAN.md` — 8-phase roadmap with asset ingestion
3. `PROJECT_BRIEF.md` — Scope, 17-page architecture, key patterns
4. `ARCHITECTURE.md` — Next.js App Router file tree and component boundaries
5. `DESIGN_SYSTEM.md` — Exact colors, typography, button shapes, grid, HUD
6. `ANIMATION_SPEC.md` — GSAP specs for all 10 animation components
7. `REFERENCE_AUDIT.md` — 29 screenshot evidence table (all verified)
8. `ASSET_REGISTER.csv` — **39 VERIFIED LOCAL ASSETS** (21 JPEGs, 27 SVGs, 20 WOFF2 fonts)
9. `docs/ASSET_MANIFEST.md` — **MASTER ASSET SPECIFICATION & LOCAL MAPPING**
10. `docs/CONTENT_DICTIONARY.md` — **MASTER COPY SOURCE**: every exact string, number, label
11. `docs/COMPONENT_SPECS.md` — HTML/CSS/GSAP implementation blueprints
12. `docs/full_site_inventory.md` — Full DOM text extraction for all 17 pages

## Workspace Path
```
c:\Users\Nishant\Desktop\construction\
├── raw-structure-construction-engineering.assets.Woblo\ ← VERIFIED PRODUCTION ASSETS
│   ├── fonts\                                         ← 20 production WOFF2 fonts
│   ├── *.jpg                                          ← 21 high-res production JPEGs
│   └── *.svg                                          ← 27 production vector SVGs
└── raw_structure_integrity_playbook\                  ← you are here (documentation only)
    ├── ASSET_REGISTER.csv                             ← 39 verified asset records
    ├── screenshots\                                   ← 29 reference screenshots
    └── docs\
        ├── ASSET_MANIFEST.md                          ← Complete image/SVG/font mapping
        ├── full_site_inventory.md
        ├── search_index.json
        ├── CONTENT_DICTIONARY.md                      ← exact text for all pages
        └── COMPONENT_SPECS.md                         ← HTML/CSS/GSAP blueprints
```

The actual clone project will be scaffolded at:
```
c:\Users\Nishant\Desktop\construction\raw-structure-study\
```

## Immediate Objective
1. Read all 10 files listed above.
2. Confirm you understand the 17-page site structure and all 10 animation components.
3. Confirm the exact stats: **38+ years**, **214+ projects**, **1.2M safe hours**, **640+ people**.
4. Confirm the button shape: **compound rectangular** (orange label + separate black icon box), NOT a pill/capsule.
5. Confirm the two marquee ribbons: **orange bg with `*` separators** (RTL) and **cream bg with `⊕` separators** (LTR), both diagonal.
6. Summarize Phase 1 deliverables for owner review.
7. **STOP and wait** for owner confirmation before writing any project code files.

## Critical Corrections (vs. earlier documentation)
| Item | Wrong value | ✓ Correct value |
|---|---|---|
| Projects count | 420+ | **214+** |
| People count | 650 | **640+** |
| CTA button shape | Capsule/pill | **Compound rectangle** (orange + black icon box) |
| Nav backdrop | `blur(12px)` | **Solid dark** `#0e0e0d` (no blur) |
| Ribbon 2 separator | `·` (dot) | **`⊕`** (crosshair/target) |
| Timeline step display | Text tabs | **Giant outline-stroke Anton numbers** per panel |
| Metrics left element | Text only | **3D geometric building model** (dark cube + orange face) |
| Footer bottom | Just columns | **Massive `RAW STRUCTURE` wordmark** fills bottom |
