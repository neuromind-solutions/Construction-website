# Prompt 02 --- Plan and scaffold the project

Prerequisites: reference audit reviewed and approved.

Read `ARCHITECTURE.md`, `PROJECT_BRIEF.md`, `SECURITY_AND_GIT.md`, and
the official source links in `SOURCES.md`.

Tasks: 1. Inspect the current workspace and preserve existing files. 2.
Choose a project name and confirm the folder is the intended local
workspace. 3. If the folder is empty, use the official `create-next-app`
workflow with TypeScript, App Router, Tailwind, and linting. Use current
compatible defaults; verify flags against installed CLI documentation.
4. Use the existing package manager if a project already exists. Do not
migrate package managers without approval. 5. Add GSAP/ScrollTrigger
only after confirming the need and checking current official
docs/licensing. Add `@gsap/react` if it materially improves safe
lifecycle management. 6. Do not add Three.js unless the reference audit
shows genuine 3D requirements that CSS cannot reasonably handle. 7.
Create only the folders/components required by the approved audit. Use
`ARCHITECTURE.md` as a guide, not a command to create empty
abstractions. 8. Record dependency choices in `docs/decisions.md`. 9.
Start the app and verify the initial page loads. 10. Run available
lint/type/build checks and record results.

Do not implement detailed design or animations yet. Deliver the chosen
architecture, tree, installed versions, commands, check results, and
trade-offs. Stop for owner review.
