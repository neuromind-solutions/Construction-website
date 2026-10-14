---
trigger: glob
description: Frontend implementation standards for React, Next.js, TypeScript, and CSS.
globs: "src/**/*.ts, src/**/*.tsx, src/**/*.css"
---
-   Prefer semantic HTML and accessible controls.
-   Use TypeScript types that describe real data; avoid `any` unless
    justified.
-   Keep components focused and reusable, but do not over-abstract
    static markup.
-   Keep client components limited to browser interaction and animation
    needs.
-   Avoid global CSS leakage and unstable selector-based coupling.
-   Preserve responsive layouts and keyboard usability.
-   Do not fabricate content, company claims, testimonials, metrics, or
    certifications.
-   Run relevant lint/type/build checks after meaningful changes and
    report actual outcomes.
