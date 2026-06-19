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

## Build pipeline — Director orchestrates, omp implements (omp is default-on for builds)

For substantial implementation work this repo uses **omp** (the oh-my-pi coding
agent) as the implementer **by default**. You — with the human — are the
**Director**: you set intent, guard the boundary, review, and ship. Treat `omp`
as a **capable greenhorn**: fast and cheap, contained to the local working tree,
and it **learns the house rules from the committed `.omp/skills/sa-*` set it
loads on every run**. Full operating model and rationale: [`OMP.md`](OMP.md).

Two standing principles — the Director session is the expensive one, so protect it:

- **Read once, don't re-derive.** The durable lessons live in this `CLAUDE.md`
  and the `.omp/skills/sa-*` skills (omp loads them; you read them). Don't burn
  Director tokens re-learning what's already written — and when you learn
  something durable, write it back into a skill so it never has to be learned
  again.
- **Keep the Director free.** Default to driving omp **backgrounded** so you stay
  interactive with the human on the fly, and delegate research to subagents
  rather than reading large files into the Director context.

The loop:

1. **Spec it.** Turn the request into a spec with explicit, testable acceptance
   criteria (the exact tests/commands that must pass) — generous enough for a
   greenhorn to follow.
2. **Drive omp — backgrounded by default.** You (the top-level session) run
   `scripts/omp-build` in the **background** with output to a log, then return at
   once and stay reachable. The run wakes you on exit; **verify omp's commit
   landed** (`git log`) before anything else — an unchanged HEAD with a clean tree
   means omp produced nothing, so re-drive it. `omp` runs autonomously, contained
   to the working tree (auto-approved, unlimited subagents) with **no**
   boundary-crossing tools (no github/ssh/web, no push/PR/merge); `omp-build`
   runs it under a scrubbed HOME so containment can't be defeated through its
   `bash` tool. *Optional:* spawn a Foreman subagent to keep omp's chatter out of
   your context — but a subagent gets **one turn** and its child is reaped when it
   ends, so it must drive omp to completion within that turn and must **never**
   `run_in_background` then rest. **Never interrupt omp** — don't kill it or touch
   the working tree / git while it runs; it commits its own work when done.
3. **You cross the boundary, never `omp`.** You push the branch and open the PR;
   `omp` only commits locally — that local commit is the expected successful
   outcome (check `git log` before concluding omp "did nothing"). Verify and
   merge, don't redo.
4. **Review independently** — the omp-authored diff against the original intent
   and the acceptance criteria.
5. **Merge = auto-ship guardrails + your validation.** The auto-ship
   authorization above still applies, but for any `omp`-authored change your
   independent review is an additional hard gate: squash-merge only when CI is
   green, there are no unresolved human reviews, **and** your review is clean.
   If your review flags anything material, do not merge — report and wait.

Use the pipeline for substantial multi-file work; small changes you make
directly. `omp` is only ever invoked through `scripts/omp-build`, which keeps it
boundary-contained — never grant it push, PR, or merge ability.
