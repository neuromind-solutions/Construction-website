# Authoritative Sources and Research Notes

Accessed/researched for this playbook on 2026-10-14. Official
documentation can change; re-check before implementation.

## Google Antigravity

-   Rules and workspace instruction discovery:
    https://antigravity.google/docs/rules/
-   Agent settings and permissions:
    https://antigravity.google/docs/agent-settings
-   Creating custom agents:
    https://antigravity.google/docs/cli/commands/agents/
-   Getting started/projects:
    https://antigravity.google/docs/getting-started

Use the official documentation to confirm which rule and agent
mechanisms are supported in the installed Antigravity version. This pack
uses a root `AGENTS.md` and scoped `.agents/rules/*.md` as documented
workspace conventions.

## Next.js

-   `create-next-app` CLI:
    https://nextjs.org/docs/app/api-reference/cli/create-next-app
-   Project structure:
    https://nextjs.org/docs/app/getting-started/project-structure

Use the official CLI to create a project and record the actual selected
options. Avoid manually inventing config files when the official
generator can create compatible defaults.

## GSAP

-   ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
-   Plugins: https://gsap.com/docs/v3/Plugins/
-   React integration is linked from the GSAP documentation and package
    ecosystem; check current `@gsap/react` guidance before
    implementation.

Important implementation concern: ScrollTrigger pinning can be affected
by transformed ancestors; React animation contexts require correct
cleanup. Verify against the current official docs.

## Browser testing

-   Playwright visual comparisons:
    https://playwright.dev/docs/test-snapshots
-   Playwright test docs: https://playwright.dev/docs/writing-tests

Screenshot rendering can vary across operating systems, browsers, and
hardware. Capture and compare baselines in a consistent environment.

## Accessibility

-   WCAG 2.2 Understanding: https://www.w3.org/WAI/WCAG22/Understanding/
-   Animation from interactions (SC 2.3.3):
    https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions
-   Reduced-motion CSS technique:
    https://www.w3.org/WAI/WCAG22/Techniques/css/C39.html

Non-essential motion can cause discomfort for some users. Support
reduced-motion preferences and preserve access to information without
animation.

## Performance

-   Core Web Vitals: https://web.dev/articles/vitals
-   Web Vitals measurement:
    https://web.dev/articles/vitals-measurement-getting-started

Use lab tools to diagnose issues and, when the site is deployed, field
data to understand real-user experience. Do not treat a single
Lighthouse run as a guarantee of real-world performance.

## Template and asset licensing

-   Framer Community Terms:
    https://www.framer.com/legal/community-terms/1.0

Read the current terms that apply to the exact asset/template and the
intended use. Template licences vary by creator and asset. A publicly
viewable website does not by itself grant permission to reuse its code,
brand, copy, images, or paid template files.

## Original reference

-   RAW STRUCTURE public preview: https://rawstructure.framer.website/

Only public-facing behavior should be observed through normal browser
access. Do not infer that its assets or source are licensed for reuse.

## Source-use rules

-   Prefer official documentation for technical APIs and terms.
-   Record package versions and the date of checking them.
-   If a source conflicts with observed behavior or installed-version
    docs, investigate and record the conflict.
-   Do not treat search snippets as a substitute for reading the
    relevant official documentation.
