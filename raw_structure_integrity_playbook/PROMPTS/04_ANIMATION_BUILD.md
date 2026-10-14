# Prompt 04 --- Implement animations one at a time

Prerequisites: static layout approved.

Read `ANIMATION_SPEC.md` and the verified interaction inventory.
Implement one effect at a time, in this order unless the audit suggests
another priority:

1.  Hero headline entrance.
2.  Blueprint/grid drawing.
3.  Blueprint-to-building reveal.
4.  Sticky/stacked imagery or project gallery.
5.  Marquee.
6.  Statistics count-up.
7.  3D block or cursor effect only if verified and worthwhile.

For every effect: - Identify the observed trigger, start/end points,
duration/easing, scroll coupling, and reverse behavior. - Implement it
in a focused component. - Use GSAP/ScrollTrigger for scroll-linked
effects; use CSS for simple transitions. - Register plugins and scope
selectors correctly. - Ensure cleanup on unmount and no duplicate
triggers. - Test down-scroll, reverse-scroll, fast scroll, resize, and
mobile. - Respect `prefers-reduced-motion`. - Compare to reference
screenshots/video at consistent states. - Record whether it is a close
match or approximation.

Do not implement all effects in a single huge component. Do not add
unnecessary dependencies. Stop after the first two effects for review;
then continue effect-by-effect after approval.
