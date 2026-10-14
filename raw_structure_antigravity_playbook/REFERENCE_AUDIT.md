# Reference Reconnaissance and Audit

## Rules

-   Observe the public website using a normal browser.
-   Do not bypass authentication, access controls, anti-bot protections,
    or technical restrictions.
-   Do not assume the DOM/source/assets are reusable just because the
    site is public.
-   Capture screenshots only for private analysis and keep them local.
-   If a section does not load or an interaction cannot be tested,
    record that limitation.

## Viewport matrix

Inspect at least: - Desktop wide: 1440 × 900 (or nearest supported
viewport). - Laptop: 1280 × 800. - Tablet portrait: approximately 768 ×
1024. - Mobile: 390 × 844. - Narrow mobile: approximately 360 × 800.

Record actual viewport sizes used. Browser rendering, fonts, and
viewport chrome may affect measurements.

## Section inventory template

For each section, fill in: - Section ID and visible title/text (brief
notes only). - Approximate vertical range and height. - Background
color/texture. - Content width and alignment. - Typography hierarchy and
line breaks. - Image/video subject, aspect ratio, crop, and focal
point. - Layout structure (grid, split, stacked, pinned). - Entry and
exit behavior. - Interaction triggers. - Mobile behavior. -
Screenshot/evidence filename. - Confidence: high / medium / low. - Notes
and unresolved questions.

## Interaction inventory template

For each interaction: - ID and target element. - Initial state. -
Trigger (page load, hover, click, scroll position, scroll progress). -
Start and end conditions. - Duration/easing, if measurable. - Whether it
is scrubbed to scroll or time-based. - Reverse-scroll behavior. - Touch
and keyboard equivalent. - Reduced-motion fallback. - Performance
risks. - Evidence and confidence.

## Required inspection passes

### Pass A --- First impression

Record brand impression, palette, font character, navigation, hero
composition, and main CTA.

### Pass B --- Slow full-page scroll

Scroll slowly from top to bottom. Note every section boundary and all
visible transitions. Repeat in reverse.

### Pass C --- Interaction audit

Test links, buttons, menus, gallery interactions, hover states, cursor
behavior, sticky elements, and any forms. Do not submit real personal
data.

### Pass D --- Responsive audit

Repeat on mobile and tablet viewports. Note which desktop effects are
simplified, replaced, or removed.

### Pass E --- Performance/accessibility

Observe loading, layout shifts, image quality, keyboard access, text
contrast, and reduced-motion behavior where testable.

## Reference feature confidence

Use: - `VERIFIED`: directly observed in the live site. -
`PARTIALLY VERIFIED`: some behavior observed but details are
uncertain. - `UNVERIFIED`: inferred from a listing, screenshot, or prior
description only. - `NOT PRESENT`: tested and not found.

Do not promote a third-party description into `VERIFIED` status without
direct observation.

## Deliverables before coding

-   `docs/reference-notes.md`
-   A section inventory.
-   An interaction inventory.
-   Desktop/mobile screenshots or written evidence notes.
-   A list of unknowns.
-   A prioritized implementation plan.
