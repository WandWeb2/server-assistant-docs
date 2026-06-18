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

## Multi-agent build pipeline — Claude orchestrates, omp implements

For substantial implementation work this repo uses a **three-tier** model: the
**Director** (the human + you) sets intent and guards; a **Foreman** (a Claude
subagent you spawn) manages the worker; the **Worker** (`omp`, the oh-my-pi
coding agent) implements. You and the human operate at the director level — you
do not babysit `omp` directly. Treat `omp` as a **capable greenhorn**: fast, but
new to this project and in need of onboarding. Full operating model and
rationale: [`OMP.md`](OMP.md).

The short version:

1. **Turn the user's request into a spec** with explicit, testable acceptance
   criteria (the exact tests/commands that must pass) — generous enough for a
   greenhorn to follow.
2. **Spawn a Foreman subagent to run the omp loop.** The Foreman invokes
   `scripts/omp-build "<spec>"`, answers omp's questions, iterates in a bounded
   Q&A loop, and does the first-pass review. It drives omp **synchronously to
   completion** (runs in the foreground and blocks until omp returns) — it never
   backgrounds omp and rests. `omp` runs autonomously but is contained to the
   local working tree (auto-approved, unlimited subagents, but **no**
   github/ssh/browser/web and **no** push/PR/merge). The Foreman does not cross
   the boundary either. **Never interrupt omp** — don't kill it or touch the
   working tree / git while it runs; it commits its own work when done.
3. **You cross the boundary, never the Foreman or `omp`.** You push the branch
   and open the PR; `omp` only commits locally — that local commit is the
   expected successful outcome (check `git log` for it before concluding omp
   "did nothing"). Your job is to verify it and merge, not to redo it.
4. **Review independently** — the omp-authored diff against the user's original
   intent and the acceptance criteria.
5. **Merge = auto-ship guardrails + your validation.** The auto-ship
   authorization above still applies, but for any `omp`-authored change your
   independent review is an additional hard gate: squash-merge only when CI is
   green, there are no unresolved human reviews, **and** your review is clean.
   If your review flags anything material, do not merge — report and wait.

Use the pipeline for substantial multi-file work; small changes you make
directly. `omp` is only ever invoked through `scripts/omp-build`, which keeps it
boundary-contained — never grant it push, PR, or merge ability.
