# Quality Gates and Acceptance Criteria

No phase is considered complete because an agent says it is complete. It is complete only when the stated checks have actually been performed, verified, and recorded with evidence.

---

## Gate 0 — Workspace & Integrity Validation
- [x] Reference site inspected across desktop and mobile.
- [x] Complete 17-route site map extracted and verified.
- [x] 11 reference screenshots archived in `screenshots/`.
- [x] Design tokens, typography, and animation specs documented.
- [x] `EXECUTION_PLAN.md` established with review checkpoints.

---

## Gate 1 — Project Architecture & Scaffolding
- [ ] Next.js App Router project initialized with TypeScript and Tailwind CSS.
- [ ] Dependencies installed: `gsap`, `@gsap/react`, `lucide-react`, `clsx`, `tailwind-merge`.
- [ ] `npm run dev` starts without errors or warnings.
- [ ] `npx tsc --noEmit` exits with code 0.
- [ ] Directory layout matches `ARCHITECTURE.md`.

---

## Gate 2 — Design System & Tokens
- [ ] Custom fonts (`Anton`, `Archivo`, `JetBrains Mono`, `Inter`) properly loaded.
- [ ] CSS tokens (`--color-bg-base`, `--color-accent-safety`, etc.) defined in `tokens.css`.
- [ ] Typography scale matches reference at 1440px and 390px.
- [ ] Base UI atoms (`Button`, `Badge`, `Container`) render correctly.

---

## Gate 3 — Global Shell & Navigation
- [ ] Fixed `SiteHeader` with capsule nav links and "Start a project" CTA.
- [ ] Floating right `ArchitecturalHUD` coordinate widget tracks scroll progress.
- [ ] Mobile hamburger toggle opens full-screen industrial drawer.
- [ ] Full `SiteFooter` with 4-column metadata grid, sitemap, and ISO badges.

---

## Gate 4 — Static Page Layouts
- [ ] **Home (`/`):** All 6 chapters and hero match reference layout.
- [ ] **About (`/about`):** Manifesto, timeline, leadership team, certifications.
- [ ] **Services (`/services`):** 5 disciplines, capability sheet, FAQ accordion.
- [ ] **Contact (`/contact`):** Form RS-01, Rotterdam coordinates, hotline.

---

## Gate 5 — Dynamic Routing & Case Studies
- [ ] Filterable archive on `/projects` (`Commercial`, `Infrastructure`, `Residential`, `Industrial`).
- [ ] Dynamic case study pages for all 6 projects with blueprint specs and photos.
- [ ] Journal archive on `/journal` with category filtering.
- [ ] Dynamic technical articles for all 4 engineering deep-dives.
- [ ] Custom `404` page renders properly on invalid URLs.

---

## Gate 6 — Motion & ScrollTrigger Verification
- [ ] Dual diagonal marquee runs infinitely with pause-on-hover.
- [ ] Selected work carousel supports smooth drag/swipe and cursor pill tracking.
- [ ] How We Build timeline switches between levels smoothly with tab indicator animation.
- [ ] Statistics numbers count up smoothly when scrolled into view.
- [ ] Services FAQ accordion expands and collapses cleanly with rotating icons.
- [ ] Zero duplicate ScrollTriggers or layout shifts on reverse scroll or window resize.
- [ ] Reduced motion mode (`prefers-reduced-motion`) provides functional static fallbacks.

---

## Gate 7 — Production Build & Final Acceptance
- [ ] `npm run build` completes with zero errors and generates static/server output for all 17 routes.
- [ ] Zero console errors or hydration mismatches.
- [ ] Responsive layouts verified at 1440px, 1280px, 768px, and 390px.
- [ ] Final visual comparison documented in `docs/test-results.md`.
