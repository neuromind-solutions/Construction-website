---
trigger: glob
description: GSAP and scroll-animation implementation rules.
globs: "src/**/*.ts, src/**/*.tsx, src/**/*.css"
---
-   Match documented observations; do not add motion just to make the
    page look busy.
-   Register GSAP plugins explicitly.
-   Scope selectors to component roots and clean up every
    animation/ScrollTrigger on unmount.
-   Test reverse scrolling, resizing, fast scrolling, and mobile
    behavior.
-   Avoid nested pinning and transformed ancestors around pinned content
    unless tested.
-   Respect `prefers-reduced-motion`; provide a usable static state.
-   Prefer transforms and opacity for frequent animation.
-   Do not claim an animation matches the reference until compared in a
    browser.
