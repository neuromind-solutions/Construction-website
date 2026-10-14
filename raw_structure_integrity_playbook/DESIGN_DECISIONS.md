# Design and Engineering Decision Log

## Architecture Decisions Record (ADR)

### ADR-01: Multi-Page App Router vs Single Page Application
- **Context:** The preliminary hypothesis assumed a single landing page with anchor links. Live empirical investigation revealed 17 distinct pages, including 6 dedicated case studies and 4 engineering articles.
- **Decision:** Scaffold a multi-page Next.js App Router project using dynamic segment routes (`/projects/[slug]` and `/journal/[slug]`).
- **Consequences:** Ensures 1:1 structural fidelity with the original site, clean semantic URLs, superior performance via React Server Components, and modular code isolation.

### ADR-02: Typography Stack Selection
- **Context:** The reference site uses web font subsets of `Anton`, `Archivo`, `JetBrains Mono`, and `Inter`.
- **Decision:** Load `Anton` (Display), `Archivo` (H2/H3), `JetBrains Mono` (Technical numbers & coordinates), and `Inter` (Body) via `next/font/google` and local woff2 fallbacks.
- **Consequences:** Eliminates external CDN font pop-in, optimizes Cumulative Layout Shift (CLS), and provides 100% typography fidelity.

### ADR-03: GSAP 3 with `@gsap/react` (`useGSAP`)
- **Context:** Complex scroll-scrubbed counters, horizontal drag sliders, and infinite marquees require robust lifecycle cleanup in React 19.
- **Decision:** Use GSAP 3 + ScrollTrigger scoped within `@gsap/react` `useGSAP()` hooks.
- **Consequences:** Completely prevents duplicate triggers during React Strict Mode mounts and hot reloads, avoiding pin-jumps and memory leaks.

### ADR-04: Static Typed Data Layer
- **Context:** All 17 pages have rich technical copy, metrics, and structured specifications.
- **Decision:** Store data in typed TypeScript dictionaries (`src/data/projects.ts`, `src/data/journal.ts`, `src/data/services.ts`).
- **Consequences:** Clean separation of presentation and content, enabling instant page builds without requiring an external database or CMS for local study.
