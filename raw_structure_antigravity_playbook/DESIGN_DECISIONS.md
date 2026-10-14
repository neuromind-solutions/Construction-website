# Design and Engineering Decision Log

Add an entry when a decision materially affects architecture,
performance, fidelity, accessibility, licensing, or maintenance.

## Entry template

### YYYY-MM-DD --- Short decision title

-   **Context:** What problem or constraint prompted the decision?
-   **Evidence:** What documentation, observation, test, or measurement
    supports it?
-   **Decision:** What will we do?
-   **Alternatives considered:** What other options were plausible?
-   **Consequences:** Trade-offs, risks, and future implications.
-   **Owner approval:** Required / not required; record approval where
    applicable.

## Initial decisions to validate

1.  Use Next.js + TypeScript + Tailwind for the local study unless the
    existing project already uses another compatible stack.
2.  Use GSAP/ScrollTrigger for complex scroll-linked interactions; use
    CSS for simple motion.
3.  Prefer SVG/CSS over Three.js unless actual 3D behavior is required.
4.  No backend/database for a static reference study.
5.  Keep all development local until owner approval.
6.  Rebuild visible interactions independently rather than importing the
    original template's private/proprietary implementation.
