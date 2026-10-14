# Project Brief --- RAW STRUCTURE Reference Recreation

## 1. Project objective

Build an independently implemented, local-first website that closely
reproduces the publicly observable layout and interaction behavior of
https://rawstructure.framer.website/ for private study and as a
technical reference for a future original construction-company website.

The project is a learning/reference implementation, not an attempt to
obtain or redistribute the original Framer project, private source,
proprietary files, or licensed template assets.

## 2. Success criteria

-   The complete reference page has been inspected at desktop and mobile
    widths, where available.
-   Every visible section is recorded in a section inventory before
    implementation.
-   Each important interaction has an evidence note: observed behavior,
    trigger, start/end condition, direction, and fallback.
-   The implementation uses a coherent component architecture and
    reusable design tokens.
-   Animation works when scrolling both down and up; no duplicated
    triggers, pin jumps, or layout collapse.
-   The website remains usable with touch, keyboard, and reduced-motion
    preferences.
-   Images, fonts, video, icons, and other assets have a documented
    origin and permitted use.
-   Browser tests and production checks are run and their actual results
    recorded.
-   Any differences from the reference are documented honestly.
-   No deployment, public upload, or paid purchase happens without
    explicit owner approval.

## 3. Reference details

-   Reference URL: https://rawstructure.framer.website/
-   Project codename: `raw-structure-study`
-   Default implementation: Next.js App Router + React + TypeScript +
    Tailwind CSS.
-   Animation: GSAP + ScrollTrigger, with React-safe lifecycle cleanup.
-   Optional 3D: CSS transforms first; use Three.js only if the observed
    visual cannot reasonably be reproduced with CSS/SVG.
-   Testing: Playwright for browser checks and screenshot comparisons
    where feasible.
-   Initial delivery: local development only.

## 4. Observed feature hypotheses to verify

These are leads from earlier research, not guaranteed facts about the
currently served page. Verify each one in the live browser before
implementation: - Character-by-character headline animation. - Technical
blueprint/grid reveal. - Blueprint-to-finished-building transition. -
Sticky or stacked project imagery. - Rotating concrete-block/3D
visual. - Animated statistics. - Project gallery and hover effects. -
Moving hazard-tape-style marquee. - Cursor effects. - Responsive page
and navigation variants.

If a feature cannot be observed, mark it `UNVERIFIED`; do not treat it
as a requirement merely because a third-party listing describes it.

## 5. Scope

### In scope

-   Publicly visible page structure and interaction research.
-   Original implementation of comparable visual effects.
-   Local assets that are original, user-provided, public-domain, or
    appropriately licensed.
-   Responsive behavior, accessibility, performance, tests, and
    documentation.
-   Reusable prompts and architecture patterns.

### Out of scope unless separately approved

-   Extracting private source code or bypassing access controls.
-   Downloading proprietary Framer project files without a licence.
-   Reusing copyrighted copy, logos, photographs, video, or fonts
    without permission.
-   Publishing the clone as the original website or implying
    affiliation.
-   Deploying, registering a domain, paying for services, or pushing to
    a remote repository.
-   Adding a backend, database, CMS, analytics, or lead collection
    without a real requirement.

## 6. Working principle

Observe → document → plan → implement one vertical slice → test → review
→ checkpoint → continue.

Do not build the entire website in one unreviewed agent pass. Keep
phases small enough that errors can be isolated and rolled back.
