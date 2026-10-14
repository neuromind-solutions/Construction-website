# Prompt 06 --- Full browser QA and visual comparison

Read `QA_ACCEPTANCE.md`.

Tasks: 1. Inspect `package.json` and identify the actual available
scripts. 2. Start the development server using the documented project
command. 3. Run linting, TypeScript checks, and production build where
available. 4. Run Playwright smoke tests if installed/configured; do not
add a test framework without explaining why. 5. Test all visible
navigation links, buttons, menu states, and contact controls. 6. Inspect
desktop, tablet, and mobile layouts. 7. Test each scroll effect down and
up, after resize, and under reduced motion. 8. Look for console errors,
failed assets, horizontal overflow, hydration warnings, pin jumps,
layout shifts, inaccessible controls, and excessive animation. 9.
Capture screenshots at consistent viewport dimensions and scroll
positions. Use Playwright screenshot comparisons where feasible; review
results manually. 10. Fix confirmed defects and rerun the relevant
checks. 11. Create or update `docs/test-results.md` with exact commands,
results, skipped tests, screenshots, and remaining limitations.

Do not claim pixel-perfect equivalence or successful tests without
evidence. Report each item as PASS, FAIL, BLOCKED, or NOT RUN, with a
short reason. Stop for owner review.
