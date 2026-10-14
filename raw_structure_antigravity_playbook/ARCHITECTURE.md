# Architecture and File Structure

## Recommended stack

-   Next.js App Router + React + TypeScript.
-   Tailwind CSS for layout utilities, with a small set of explicit
    design tokens.
-   GSAP + ScrollTrigger for scroll-linked motion.
-   `@gsap/react` / `useGSAP` where appropriate for React lifecycle
    management.
-   SVG and CSS for blueprint lines, masks, simple illustrations, and 3D
    transforms.
-   Three.js only if an observed effect genuinely requires real 3D
    geometry.
-   Playwright for browser-level functional and visual checks.
-   No backend or database for the initial static reference study.

Do not blindly upgrade dependencies or add a library because it is
fashionable. Check current official docs and compatibility before
installation.

## Suggested structure

``` text
raw-structure-study/
├── AGENTS.md
├── PROJECT_BRIEF.md
├── ARCHITECTURE.md
├── REFERENCE_AUDIT.md
├── DESIGN_SYSTEM.md
├── ANIMATION_SPEC.md
├── QA_ACCEPTANCE.md
├── SECURITY_AND_GIT.md
├── SOURCES.md
├── ASSET_REGISTER.csv
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── public/
│   ├── images/
│   ├── video/
│   ├── fonts/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── SiteHeader.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BlueprintReveal.tsx
│   │   │   ├── ProjectGallery.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── StatisticsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── motion/
│   │   │   ├── SplitText.tsx
│   │   │   ├── Reveal.tsx
│   │   │   ├── Marquee.tsx
│   │   │   └── ScrollProgress.tsx
│   │   └── ui/
│   ├── data/
│   │   ├── projects.ts
│   │   └── site-content.ts
│   ├── hooks/
│   ├── lib/
│   │   ├── gsap.ts
│   │   └── motion-preferences.ts
│   └── styles/
│       └── tokens.css
├── tests/
│   ├── smoke.spec.ts
│   ├── navigation.spec.ts
│   ├── responsive.spec.ts
│   └── visual.spec.ts
├── docs/
│   ├── reference-notes.md
│   ├── decisions.md
│   └── test-results.md
└── .agents/
    └── rules/
        ├── frontend.md
        ├── animation.md
        ├── assets.md
        └── testing.md
```

This is a target structure, not a requirement to create empty files in
advance. Let the actual page audit determine which sections are needed.
Avoid over-componentizing simple static markup.

## Component rules

-   Keep the page composition in `src/app/page.tsx`; keep individual
    sections in `components/sections/`.
-   Keep content data separate from presentation where the data repeats
    or may later be replaced.
-   Use server components by default; use client components only for
    state, browser APIs, or animation.
-   A GSAP-heavy component should own its animation setup and cleanup.
-   Avoid one giant component containing every section and animation.
-   Avoid a global animation manager unless multiple sections
    demonstrably need it.
-   Keep CSS selectors scoped and predictable.
-   Prefer stable keys and semantic markup.

## Dependency policy

Before adding a package: 1. State the feature it provides. 2. Check
whether existing CSS/JS can do the job. 3. Check the official
documentation and current licence. 4. Check package compatibility and
bundle impact. 5. Install only after this check and record the reason in
`docs/decisions.md`.

## Architecture decision log

Record meaningful decisions with date, context, choice, alternatives,
and consequences. Do not create abstraction layers solely for
hypothetical future needs.
