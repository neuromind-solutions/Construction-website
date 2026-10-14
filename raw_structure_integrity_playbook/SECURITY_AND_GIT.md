# Security, Git, and Local-First Guardrails

## Default operating mode

Local-only. No remote pushes, public deployment, paid services,
production changes, or domain registration unless the owner explicitly
approves the specific action.

## Before changes

1.  Inspect the current directory and repository status.
2.  If Git is already initialized, inspect `git status` and current
    branch.
3.  Do not overwrite or delete user work.
4.  Create a local checkpoint/commit only if Git is configured and doing
    so is safe; otherwise make a timestamped local backup of the files
    that will be changed.
5.  Work in a dedicated project folder. Do not point the agent at
    unrelated personal or company directories.

## Forbidden without explicit approval

-   `git push`, publishing, deployment, or uploading artifacts.
-   Deleting files/directories, force resets, destructive migrations, or
    broad cleanup.
-   Installing global tools or modifying global Antigravity settings.
-   Using paid APIs, services, domains, or subscriptions.
-   Sending messages, submitting real forms, or transmitting user data.
-   Reading credential stores or dumping environment variables.
-   Disabling security controls or bypassing site restrictions.

## Secrets

-   Never commit `.env` files.
-   Provide `.env.example` with names and placeholders only if
    configuration is needed.
-   Keep API keys out of client-side code.
-   Never include tokens, cookies, private URLs, or personal data in
    screenshots and reports.
-   Do not ask for credentials for a static reference recreation.

## Git workflow

-   Use local Git for history and rollback if available.
-   Review `git diff` before each checkpoint.
-   Never rewrite a user's existing branch history.
-   Do not push to any remote by default.
-   If a new repository is needed, initialize it locally only after
    confirming the folder is correct.

## Reference website safety

-   Access the public reference through ordinary browser navigation.
-   Do not circumvent login, bot protection, paywalls, access controls,
    or download restrictions.
-   Do not extract private source, proprietary project files, or
    licensed assets.
-   Use original or properly licensed assets and record their
    provenance.

## Report

For any blocked or potentially destructive action, stop and ask the
owner. Explain what the action would do and why it is necessary.
