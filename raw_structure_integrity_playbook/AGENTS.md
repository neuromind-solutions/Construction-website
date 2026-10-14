# Workspace Agent Instructions — RAW STRUCTURE Recreation

## 1. Mission & Operational Scope

You are pair-programming with the user inside Google Antigravity to build an independently implemented, local-first reference clone of **RAW STRUCTURE** (https://rawstructure.framer.website/) for local study, architectural code inspection, and technical training.

Follow `EXECUTION_PLAN.md`, `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `ANIMATION_SPEC.md`, and `QA_ACCEPTANCE.md`.

---

## 2. Core Non-Negotiable Rules

1. **Gated Phased Execution:** Follow the 8-phase roadmap in `EXECUTION_PLAN.md`. Never attempt to build the entire 17-page site in a single uncontrolled generation. Complete one phase, verify it, present results, and wait for user confirmation before starting the next phase.
2. **Use Verified Data Only:** Do not hallucinate or make up project names, metrics, or copy. Every headline, level description, case study parameter, and technical journal post is already captured and organized in `docs/full_site_inventory.md` and `docs/search_index.json`.
3. **Local-First Safety:** Work strictly inside the local project workspace. No remote git pushes, public domain registrations, external deployments, or cloud credential requests.
4. **Design & Motion Standards:**
   - Adhere strictly to the verified design tokens in `DESIGN_SYSTEM.md` (`Anton`, `Archivo`, `JetBrains Mono`, `Inter`, `#0e0e0d`, `#1c1c1a`, `#ff4d00`, `#e7e3dc`).
   - Clean up all GSAP timelines and ScrollTriggers on React component unmount (`useGSAP()` with proper scoping).
   - Ensure complete support for `@media (prefers-reduced-motion: reduce)`.
5. **No Blind Claims:** Never claim a test, route, layout, or animation is working without running actual commands (`tsc`, `lint`, `build`) and inspecting browser output.
6. **Visual Grounding:** Reference the 11 captured audit screenshots in `screenshots/` as the ground truth for visual fidelity across desktop and mobile.

---

## 3. Standard Phase Execution Loop

1. **Inspect:** Check current code state and target requirements for the active phase.
2. **Implement:** Write clean, modular, typed TypeScript/React code with proper CSS tokens.
3. **Verify:** Run TypeScript check (`npx tsc --noEmit`) and dev server validation.
4. **Document:** Log changes made, components created, and test outcomes.
5. **Report & Discuss:** Present the phase completion report to the user and await approval for the next phase.
