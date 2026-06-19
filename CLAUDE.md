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

## Implementation — the Claude session implements directly (omp removed)

This repo previously delegated substantial implementation to **omp** (the
oh-my-pi coding agent) as a default-on "greenhorn" implementer, with the Claude
session acting as Director. **omp has been removed.** It authenticated with the
*same* Anthropic account that powers the product's customer AI and billed
pay-per-token against it, so every omp run competed with customers for credits
and could drain the shared balance (it did — a zero balance took out both omp
and the bot's AI). The `scripts/omp-build` wrapper and `OMP.md` are gone, and the
environment's omp install step should stay disabled.

Going forward the Claude session is both Director **and** implementer: spec the
change, make it directly, self-verify (build the Jekyll site locally), then push,
open the PR, and ship under the auto-ship guardrails above. Two habits carry over
from the old pipeline and still matter:

- **Read once, don't re-derive.** The durable house rules live in this `CLAUDE.md`
  and the `.omp/skills/sa-*` knowledge skills (e.g. `sa-jekyll-docs`). Nothing
  auto-loads them now, so read them when relevant — and when you learn something
  durable, write it back into a skill so it never has to be learned again.
- **Keep the session free.** Delegate broad research to subagents rather than
  reading large files into the main context.
