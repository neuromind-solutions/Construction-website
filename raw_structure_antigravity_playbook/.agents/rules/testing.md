---
trigger: model_decision
description: Apply when changing layout, interaction, animation, routing, dependencies, or build configuration.
---
-   Inspect `QA_ACCEPTANCE.md` before planning validation.
-   Run only commands that exist or are explicitly installed; inspect
    `package.json` first.
-   Test browser behavior at desktop and mobile sizes for visual
    changes.
-   Use consistent screenshot viewport and scroll positions for
    comparisons.
-   Report failures, skips, and environment limitations honestly.
-   Never claim tests passed without actual command/browser evidence.
-   Update `docs/test-results.md` when tests are run; create it if
    needed.
