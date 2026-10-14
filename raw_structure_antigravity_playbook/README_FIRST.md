# RAW STRUCTURE → Antigravity Website Recreation Playbook

Version: 1.0\
Reference: https://rawstructure.framer.website/\
Purpose: a local-first, professionally managed reference recreation and
reusable workflow for building modern animated websites with Google
Antigravity.

## What this pack is

This is a set of project instructions, research checklists,
implementation prompts, agent rules, and QA gates. It is not the
original Framer project, and it does not contain RAW STRUCTURE's
proprietary source code or original assets.

The intended outcome is an independently implemented local website that
closely studies the publicly visible reference. Use it for private
learning and visual comparison. Before shipping a client website,
replace the reference's brand identity, copy, and non-licensed assets
with original or properly licensed material.

## Recommended use

1.  Create a new, empty local folder named `raw-structure-study`.
2.  Open that folder in Google Antigravity.
3.  Copy the contents of this pack into the project root, preserving
    `.agents/` paths.
4.  Read `PROJECT_BRIEF.md` and `AGENTS.md`.
5.  Start with `PROMPTS/01_RECONNAISSANCE.md`. Do not ask the agent to
    code immediately.
6.  Work through the prompts in numerical order. Review the agent's
    evidence and artifacts at each gate.
7.  Keep the project local unless you explicitly decide to publish it.
8.  After the private reference study is complete, use
    `PROMPTS/08_CLIENT_ADAPTATION.md` to transform the result into a
    distinct client-ready website.

## File guide

-   `PROJECT_BRIEF.md` --- goals, scope, requirements, constraints.
-   `AGENTS.md` --- persistent workspace-level agent instructions.
-   `ARCHITECTURE.md` --- recommended stack, folders, component
    boundaries.
-   `REFERENCE_AUDIT.md` --- page and animation inventory template.
-   `DESIGN_SYSTEM.md` --- visual measurement and responsive rules.
-   `ANIMATION_SPEC.md` --- animation behavior and implementation rules.
-   `ASSET_REGISTER.csv` --- provenance/licensing register starter.
-   `QA_ACCEPTANCE.md` --- verification gates and release criteria.
-   `SECURITY_AND_GIT.md` --- safe local workflow and prohibited
    actions.
-   `SOURCES.md` --- authoritative documentation and research links.
-   `.agents/rules/*.md` --- scoped Antigravity rules.
-   `PROMPTS/*.md` --- phase-by-phase prompts to paste into Antigravity.

## Important: how to use Antigravity instructions

Google Antigravity supports workspace rules such as `AGENTS.md` and
scoped rule files under `.agents/rules/`. Check the current official
docs for the exact behavior of the Antigravity version installed on your
machine. Keep the root `AGENTS.md` short enough to remain useful; put
detailed workflows in the prompt files and project docs.

## No-guesses policy

The agent must not claim it has inspected a page, run a browser,
executed tests, or verified visual fidelity unless it actually did so.
If the reference is unavailable, blocked, or behaves differently in the
browser, record that limitation and ask for the missing evidence rather
than inventing details.
