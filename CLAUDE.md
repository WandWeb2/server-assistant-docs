# CLAUDE.md

Working notes for Claude Code sessions in this repository.

## PR workflow — auto-ship (standing authorization)

The repo owner has authorized Claude to **merge the PRs it opens automatically,
in every session — without waiting for a "ship it" confirmation.**

After pushing a change and opening its PR on the working branch:

1. Confirm CI is green (or none is configured) **and** there are no unresolved
   human review comments.
2. **Squash-merge** the PR into `main`.
3. Briefly report what was merged.

**Guardrails** — do _not_ auto-merge (report and wait instead) when:

- CI is failing or still running, or
- a human has left an unresolved review comment or change request.

If the working branch has drifted from `main` (from earlier squash-merges),
sync it first by merging `origin/main` into the branch and re-applying the
change — never force-push.

_To revoke this, delete this section._
