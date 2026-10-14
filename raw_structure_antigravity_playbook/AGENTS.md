# Workspace Agent Instructions

## Mission

Build a high-quality, independently implemented local reference
recreation of https://rawstructure.framer.website/ for private study.
Follow `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `SECURITY_AND_GIT.md`, and
`QA_ACCEPTANCE.md`.

## Non-negotiable rules

1.  Inspect and document before coding. Never invent unobserved sections
    or interactions.
2.  Separate verified observations from assumptions. Mark uncertain
    findings `UNVERIFIED`.
3.  Do not copy or extract private source code, bypass access controls,
    or use assets without a valid basis for use.
4.  Keep all work local by default. Do not deploy, publish, push to a
    remote repository, register a domain, or incur costs without
    explicit owner approval.
5.  Never read, print, commit, or expose secrets. Do not request
    credentials unless a specific approved integration truly requires
    them.
6.  Do not make destructive changes or run broad cleanup commands
    without explaining the impact and getting approval.
7.  Use TypeScript, reusable components, semantic HTML, accessible
    controls, and documented design tokens.
8.  For GSAP in React, scope animations to component roots and clean
    them up on unmount. Avoid duplicate ScrollTriggers.
9.  Respect `prefers-reduced-motion`. Provide non-animated or simplified
    alternatives for non-essential motion.
10. Never claim a test, browser check, build, or screenshot comparison
    passed unless it was actually run.
11. Work phase by phase. After each major phase, summarize changed
    files, commands run, results, unresolved risks, and the next
    proposed phase. Stop for owner review at the gates in
    `QA_ACCEPTANCE.md`.
12. Prefer the simplest technique that reproduces the observed result:
    CSS before JavaScript; SVG/CSS before a 3D engine; no new dependency
    without a reason.

## Standard loop

-   Read relevant project documentation and nearby code.
-   State the specific goal and acceptance criteria.
-   Inspect current state before editing.
-   Make a small, coherent change.
-   Run the most relevant checks.
-   Review browser output when visual behavior changes.
-   Update documentation and asset register.
-   Report facts, limitations, and remaining work.

## Evidence discipline

For every major reference feature, record: - URL and approximate
section. - Viewport dimensions. - Trigger/scroll range. - Visible
before/after states. - Directional behavior on reverse scroll. -
Evidence captured (screenshot/video/notes) where possible. - Confidence:
high / medium / low. - Whether the implementation is an approximation.

## Technical defaults

-   Use the package manager already present; if the project is empty,
    use npm unless the owner chooses otherwise.
-   Use the current stable versions compatible with the project at setup
    time, and record versions in the lockfile.
-   Keep client components limited to genuinely interactive sections.
-   Avoid global CSS side effects and excessive `will-change`.
-   Do not put secrets in source, screenshots, reports, or
    `.env.example`.
-   Use local placeholder content for unverified business facts.

## Completion report

At each phase end, report: 1. What was inspected or changed. 2. Files
created/modified. 3. Commands and tests actually run. 4.
Pass/fail/blocked status. 5. Visual differences or risks. 6. Whether
approval is needed before the next phase.
