# Design System and Visual Fidelity

## Goal

Reproduce the reference's visual logic through measured observation
rather than intuition. Avoid a generic construction-company redesign
during the private study phase.

## Capture design tokens

Record approximate values and evidence for: - Background, surface, text,
muted text, accent, border, and overlay colors. - Display font, body
font, weights, line heights, letter spacing. - Container max-width and
horizontal gutters. - Spacing scale and section padding. - Border
widths, corner radii, shadows, and image treatments. - Header height and
sticky behavior. - Button size, shape, hover/focus/active states. -
Image aspect ratios and focal positions. - Breakpoints and mobile layout
changes.

Use CSS variables in one token file. Keep approximate values labelled as
estimates until verified.

## Typography

-   Match line breaks and headline proportions before adding decorative
    effects.
-   Prefer licensed/local fonts or an approved web font.
-   Never scrape or reuse a font file without checking its licence.
-   Avoid using character-by-character animation when it makes headings
    inaccessible. Keep the semantic text complete and readable to
    assistive technology.

## Image matching

For each image, record subject, orientation, focal point, aspect ratio,
crop, overlay, and provenance. Use CSS `object-fit` / `object-position`
intentionally. Do not stretch an image to force a match. Do not use an
unrelated image just because it is visually dramatic.

## Responsive rules

-   Mobile must be designed, not merely squeezed down.
-   Prevent horizontal overflow except where an explicitly designed
    gallery has a usable mobile interaction.
-   Rework pinned horizontal sections on touch devices if they interfere
    with normal scrolling.
-   Ensure tap targets and text remain usable.
-   Test reduced motion and small viewport heights.
-   Avoid relying on hover-only information.

## Visual review method

Compare screenshots at the same viewport size, browser, zoom, and scroll
position. Review: 1. Global composition. 2. Section heights and
boundaries. 3. Text wrapping and hierarchy. 4. Image crop/focal point.
5. Spacing/alignment. 6. Animation state at the comparison point. 7.
Mobile-specific differences.

Use screenshot comparison as evidence, not as an excuse to ignore
functionality, accessibility, or licensing.
