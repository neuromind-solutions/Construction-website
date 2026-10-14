# Animation Specification and Engineering Rules

## Principle

Implement only observed interactions. A close match comes from correct
timing, distance, trigger positions, easing, layering, and reverse
behavior---not from adding more effects.

## Recommended techniques

-   CSS transitions for simple hover/focus states.
-   CSS keyframes for independent, decorative loops.
-   GSAP timelines for coordinated sequences.
-   ScrollTrigger for scroll-linked, pinned, or scrubbed effects.
-   SVG strokes for blueprint/technical-line drawing.
-   CSS masks/clip-path for image reveals when performance is
    acceptable.
-   CSS 3D transforms for a simple rotating block.
-   Three.js only if geometry, lighting, or camera behavior makes it
    necessary.

## React and GSAP

-   Register required GSAP plugins explicitly.
-   Use `@gsap/react` and `useGSAP` where suitable, or an equivalent
    effect with robust cleanup.
-   Scope selectors to the component root.
-   Revert contexts and kill triggers/tweens when components unmount.
-   Avoid creating animations during every render.
-   Avoid duplicate ScrollTriggers after hot reload, route transitions,
    or breakpoint changes.
-   Recalculate measurements after layout changes when necessary.
-   Avoid transformed ancestors around pinned elements unless the
    behavior is understood and tested.
-   Use `will-change` sparingly; remove it when no longer useful.
-   Do not animate layout-heavy properties continuously when
    transform/opacity can work.

## ScrollTrigger review checklist

-   Start/end positions match observed behavior.
-   `scrub` is used only when animation progress should track scroll.
-   Pinning does not cause jumps, blank gaps, or overlap.
-   Pin duration is appropriate on desktop.
-   Reverse scroll restores the expected state.
-   Resize/orientation changes do not leave stale measurements.
-   Mobile behavior is intentionally selected, not accidental.
-   No nested pinning unless the documented limitations are understood.
-   Test fast scrolling and reduced-motion mode.

## Blueprint reveal

-   Use original SVG paths or an independently drawn technical pattern.
-   Keep SVG dimensions/viewBox responsive.
-   Animate stroke drawing or mask progression only if it matches
    observed behavior.
-   Reveal a correctly cropped image behind/alongside the blueprint.
-   Ensure meaningful content remains visible without animation.

## Pinned/stacked project images

-   Confirm exact order and overlap from observation.
-   Define explicit stacking contexts and z-index.
-   Reserve sufficient layout height.
-   Test both scroll directions.
-   On mobile, consider a conventional vertical gallery if pinning harms
    usability.

## Marquee

-   Avoid large duplicated DOM trees.
-   Respect reduced motion.
-   Do not make essential text available only in a moving element.
-   Ensure no abrupt loop seam or visible jump.

## Custom cursor

-   Desktop enhancement only; never hide the native cursor if the custom
    cursor becomes unavailable.
-   Do not use it as the only indication of clickability.
-   Disable or simplify on touch, keyboard navigation, and reduced
    motion.
-   Keep pointer tracking lightweight and scoped.

## Accessibility

-   Respect `prefers-reduced-motion`.
-   Do not make motion necessary to read content or complete tasks.
-   Avoid flashing effects.
-   Keep focus indicators visible.
-   Ensure interactive elements have semantic roles and keyboard
    support.
-   Preserve readable text when split into animation spans.

## Performance

-   Prefer transform and opacity for frequent animation.
-   Keep video compressed and poster-backed.
-   Avoid autoplaying heavy video on mobile without a reason.
-   Lazy-load below-the-fold media.
-   Reserve image dimensions to reduce layout shift.
-   Test the production build; development performance alone is not
    sufficient.
