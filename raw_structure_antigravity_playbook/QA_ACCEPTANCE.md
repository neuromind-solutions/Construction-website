# Quality Gates and Acceptance Criteria

No phase is considered complete because an agent says it is complete. It
is complete only when the stated checks have actually been performed and
the results are recorded.

## Gate 0 --- Project and safety

-   [ ] Correct local folder confirmed.
-   [ ] Existing files and Git state inspected.
-   [ ] No remote, deployment, or paid actions performed.
-   [ ] Project brief and agent rules read.

## Gate 1 --- Reference audit

-   [ ] Full page inspected at desktop.
-   [ ] Mobile/tablet inspected where available.
-   [ ] Section inventory created.
-   [ ] Interaction inventory created.
-   [ ] Verified observations separated from assumptions.
-   [ ] Unknowns and blocked items documented.
-   [ ] Owner reviews the audit before implementation.

## Gate 2 --- Architecture and setup

-   [ ] Stack and dependency rationale recorded.
-   [ ] Project created using official setup guidance.
-   [ ] TypeScript, linting, and build commands work.
-   [ ] Folder structure follows actual component needs.
-   [ ] No unnecessary backend or dependency added.

## Gate 3 --- Static visual skeleton

-   [ ] All observed sections exist in correct order.
-   [ ] Content widths, spacing, colors, typography, and image
    composition reviewed.
-   [ ] Responsive layouts are present.
-   [ ] Placeholder content is clearly marked.
-   [ ] No major animation complexity added before layout review.

## Gate 4 --- Motion implementation

-   [ ] Each animation maps to a verified observation or a documented
    approximation.
-   [ ] Down-scroll and reverse-scroll behavior tested.
-   [ ] Pinning, sticky sections, and horizontal galleries checked.
-   [ ] No duplicate triggers, jumps, or broken layout after resize.
-   [ ] Reduced-motion fallback works.
-   [ ] Keyboard/touch alternatives remain usable.

## Gate 5 --- Assets and legal hygiene

-   [ ] Every nontrivial asset has a provenance entry.
-   [ ] Licence/permission status recorded.
-   [ ] No unapproved proprietary assets or copied template source.
-   [ ] No broken external assets.
-   [ ] Client-ready version has original brand and content.

## Gate 6 --- Functional and visual QA

-   [ ] App starts successfully.
-   [ ] Main navigation and CTAs work.
-   [ ] Browser console checked.
-   [ ] Desktop, tablet, and mobile checked.
-   [ ] Screenshots captured at consistent viewport/scroll states where
    feasible.
-   [ ] Playwright smoke tests run where configured.
-   [ ] Screenshot comparison results reviewed rather than blindly
    accepted.
-   [ ] Production build succeeds, or failure is documented with
    evidence.
-   [ ] Performance and accessibility checks run where available.

## Gate 7 --- Final review

-   [ ] Known differences from reference listed.
-   [ ] Test commands and real outcomes documented.
-   [ ] Unresolved issues and risks listed.
-   [ ] Local run instructions included.
-   [ ] No public deployment or remote push without approval.
-   [ ] Owner explicitly approves the next phase or release.

## Suggested test commands

The actual commands depend on the generated package scripts. Inspect
`package.json` first; do not assume commands exist.

Typical examples: - `npm run lint` - `npx tsc --noEmit` -
`npm run build` - `npx playwright test`

Record skipped tests and reasons. Never claim a command passed if it was
not run.
