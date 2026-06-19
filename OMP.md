# OMP.md — the Claude × omp build pipeline

This repo uses a **three-tier** model for substantial implementation work:

> **Director (human + Claude) sets intent and guards. A foreman (a Claude
> subagent) manages the worker. The worker (`omp`) implements inside the box.
> The box — the local working tree — is the boundary, and only the Director
> crosses it.**

`omp` is a full, autonomous coding agent (its own `bash`/`edit`/`write`/`ssh`/
`browser`/`github`/`task` tools, persistent memory, subagents, multi-provider) —
but on *this* project it is a **capable greenhorn**: fast hands, no shared
history, and it will make rookie mistakes until it is coached. Treat it
accordingly. Invoking it is closer to onboarding a new contractor than running a
command, so it always runs under the contract below, never ad hoc.

## Operating tiers

| Tier | Who | Owns |
| --- | --- | --- |
| **Director** | the human + the top-level Claude session | intent, scope, the spec, crossing the box boundary (push / PR / merge), merge-safety. Drives omp by **backgrounding** `scripts/omp-build` (output → a log) and **stays reachable to the human** while it runs, verifying omp's commit when the run wakes it on exit. Operates at the director level — does not babysit omp directly. |
| **Foreman** *(optional)* | a Claude **subagent** the Director may spawn when it wants omp-wrangling kept out of its own context | driving the omp loop **to completion within its single turn**: hand omp the spec, run `scripts/omp-build`, answer omp's questions, iterate, do the first-pass review, report up. A subagent gets exactly one turn and its children are reaped when it ends, so it must block to completion (or background **and** actively wait) — it must **never** `run_in_background` then rest. **Does not cross the box** either. By default the Director drives omp itself, backgrounded (rule 3). |
| **Worker** | `omp` | implementing inside the working tree. |

Both Foreman and Worker live **inside the box**. Only the Director pushes, opens
PRs, or merges.

## The flow

```
Director (human): a request
 └─ Director (Claude): turn it into a SPEC with explicit, testable
                       acceptance criteria (exact tests/commands that must pass)
     └─ Director: launch `scripts/omp-build` in the BACKGROUND (output → log),
                  then return and STAY REACHABLE; the run wakes the Director
                  on exit  (or, to isolate context, spawn a Foreman that drives
                  omp to completion within ONE turn — never background-and-rest)
         └─ omp: implement it inside the box  (bounded Q&A loop)
            · omp scoped to the repo, auto-approved, UNLIMITED subagents
            · local tools only — no github / ssh / browser / web
            · omp cannot push, open PRs, or merge
         └─ on exit: VERIFY omp's commit exists (git log) before anything else
     └─ Director (Claude): push the branch + open the PR
         └─ Director: independent review vs. the user's ORIGINAL intent
                      and the acceptance criteria
             └─ merge = auto-ship guardrails + Director's validation (below)
```

Use the pipeline for substantial, multi-file work. Small changes the Director
just makes directly.

## Driving the loop — rules learned the hard way

These are non-negotiable. Each one cost a botched run before it was written down.

1. **Never interrupt omp. Let it finish.** Do not `kill`/`pkill`/signal the omp
   process, and do **not** touch the working tree or run state-changing git
   (`commit`/`add`/`reset`/`rebase`/`amend`) while omp is running — you share its
   `.git`, and rewriting history or editing files under it can corrupt a build
   that was about to succeed. A tree that looks half-written or uncommitted
   mid-run is **normal progress, not failure**; snapshots taken while omp writes
   will race. Wait for omp to return.
2. **omp commits its own work locally — that is success, not a problem.** The
   expected end state of a run is omp's own local commit. The Director does
   **not** re-do, re-stage, or re-commit omp's work. If you think omp "produced
   nothing," check `git log` for its commit before concluding anything — it has
   probably already committed.
3. **Drive omp without freezing the Director — background it, stay reachable.**
   The Director (the top-level session) launches `scripts/omp-build` **in the
   background with its output redirected to a log file**, then returns at once and
   stays free to talk to the human. The background run wakes the Director when it
   exits; only then does it verify and review. Redirecting omp's chatter to a log
   is what keeps the Director's context clean — the job the Foreman used to do —
   *without* making the Director block. Never run omp so it freezes the Director
   for the whole build: a long run can outlast the foreground command ceiling, and
   a blocked Director can't answer the human.
4. **Whoever launches omp must not end their turn until omp's commit exists.** A
   subagent gets exactly **one turn**, and its child processes are reaped when it
   ends — so a Foreman must run omp to completion *within* that turn (foreground-
   block, or background **and actively wait**, e.g. a Monitor until-loop) and may
   **never** `run_in_background` and then rest: it will never receive the
   completion event, and its omp child dies uncommitted. Only the top-level
   session can safely background a job and be woken later — which is why driving
   omp from the Director (rule 3) is the default and a Foreman is the exception.
5. **Verify before declaring done.** Never conclude on a status message ("omp is
   working autonomously…"). Check `git log` shows a **new omp commit** and
   `git status` is clean. A clean tree with an unchanged HEAD means omp produced
   **nothing** — re-drive it; do not report success.
6. **After omp returns, the Director's whole job is verify-and-merge.** Review
   the committed diff against the original intent and the acceptance criteria,
   run the tests, then push → PR → merge. That's it — don't babysit omp and don't
   rebuild what it already built.
7. **Watch GitHub; don't poll or interrupt.** Drive on PR events via the
   subscription (CI failures, review comments). Don't busy-poll or sit
   interrupting things while waiting.

## Onboarding the greenhorn

`omp` has no memory of this project between runs. Set it up to succeed:

- **Write generous specs.** A greenhorn needs more than a one-liner: state the
  goal, the exact files/areas in scope, what is explicitly out of scope, the
  acceptance criteria (tests/commands), and any gotchas. Vague specs get vague
  work.
- **Point it at its bearings.** The `sa-orientation` skill tells omp to read
  the README, the entry-point module, and the relevant tests, and to run the
  suite once for a green baseline before changing anything.
- **Review closely, early.** Expect rookie mistakes on the first tasks. The
  Foreman checks omp's diff carefully and sends it back to fix its own misses
  rather than papering over them.
- **Coach by accretion.** When omp repeats a mistake, capture the correction as
  a new `sa-*` skill (or tighten an existing one). The skill set is how the
  greenhorn becomes a journeyman — keep it lean and specific.

## The box boundary (the one rule that matters)

- **Inside the box** (the local working tree): Foreman + `omp` have full
  autonomy — read/edit/write, run builds/tests, commit locally, and omp may
  spawn as many subagents as it wants. Blast radius is files the Director
  reviews before anything leaves.
- **Crossing the box** (push / open PR / merge / deploy / any external service):
  **only the Director**, under normal confirmation rules. Neither the Foreman
  nor `omp` is granted the tools or credentials to cross it.

Enforced structurally, not by trust:

1. `omp` is launched (via `scripts/omp-build`) with a local-only `--tools`
   whitelist — no dedicated `github`, `ssh`, `browser`, or `web_search` tool.
2. That whitelist *does* include `bash`, a superset that could otherwise shell
   out to `ssh` / `git push` / `curl` — so `scripts/omp-build` additionally runs
   omp under a **scrubbed, throwaway `HOME`** with no SSH credentials and a
   neutered git-over-ssh. Even a deliberate `bash` attempt has no key to reach
   prod, so containment holds **regardless of the network policy** (it does not
   depend on port 22 being firewalled).
3. This environment has no `gh` CLI and `omp` is given no push credentials, so
   it *cannot* reach GitHub even if it tried.
4. `omp` runs with `--no-rules --no-extensions`, so it does not ingest this
   repo's `CLAUDE.md` (including the auto-ship authorization) and cannot act on
   it. Its instructions come only from the spec the Director (or Foreman) hands it.

## Invocation

The Director (or, optionally, a Foreman) invokes `omp` only through the wrapper,
never raw:

```sh
scripts/omp-build "<spec with acceptance criteria>"
scripts/omp-build @spec.md
scripts/omp-build < spec.md          # spec on stdin (most robust for long specs)
```

**Director default — background it and stay reachable** (rule 3). Run the wrapper
through the background command runner with its output redirected to a log, so
omp's chatter never lands in the Director's context and the Director is free to
keep talking to the human; the run wakes the Director on exit, who then verifies
the commit (rule 5) and reviews:

```sh
scripts/omp-build < spec.md > /tmp/omp-run.log 2>&1   # launched in the background
```

`scripts/omp-build` bakes in: `--cwd <repo>`, the local-only tool set,
`--approval-mode yolo` (safe — the boundary is structural), `--no-rules
--no-extensions`, the curated `sa-*` skills, and **unlimited subagents**
(`task.maxConcurrency = 0`). Pin a specific Claude model with the
`OMP_BUILD_MODEL` env var; with only the Anthropic key provisioned, omp defaults
to Claude. The wrapper also maps `OMP_ANTHROPIC_API_KEY` → `ANTHROPIC_API_KEY`
automatically, so omp authenticates without the Foreman exporting it by hand (a
missing key used to make omp launch and silently hang).

## Preloaded skills (curated, not kitchen-sink)

`omp` loads a small, deliberate set from `.omp/skills/` (scoped to `sa-*`):

- **`sa-orientation`** — how to get your bearings on this repo before changing
  anything (a greenhorn's first move).
- **`sa-stay-in-box`** — the boundary, restated at the instruction level.
- **`sa-self-verify`** — run the repo's tests/linters and re-check the diff
  against the acceptance criteria before yielding; report, don't guess.
- a project-conventions skill (`sa-python-service` or `sa-jekyll-docs`).

Grow this set from observed mistakes; keep it lean so omp stays focused.

## Subagents

Completely open by design: `task.maxConcurrency = 0` (no cap on concurrent
subagents). Only the *recursion depth* is kept finite (`maxRecursionDepth = 5`),
purely to prevent an infinite agent-spawn loop — not to limit how many run at
once.

## Merge gate

The standing **auto-ship** authorization in `CLAUDE.md` still applies, but for
any `omp`-authored change the Director's independent review is an **additional
hard gate**. Squash-merge only when:

- CI is green (or none is configured), **and**
- there are no unresolved human review comments, **and**
- the Director's independent review of the diff is clean.

If the review flags anything material, do **not** merge — report and wait.

## Accountability

The Director owns the merged result, not the Foreman and not `omp`. Every
omp-authored diff is reviewed before it ships, and the human is told what
changed and which tools/model `omp` used. Never echo, log, or commit the
`OMP_ANTHROPIC_API_KEY` / `ANTHROPIC_API_KEY`.
