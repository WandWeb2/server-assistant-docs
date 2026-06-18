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
| **Director** | the human + the top-level Claude session | intent, scope, the spec, crossing the box boundary (push / PR / merge), merge-safety. Operates at the director level — does not babysit omp directly. |
| **Foreman** | a Claude **subagent** the Director spawns per build task | driving the omp loop: hand omp the spec, run `scripts/omp-build`, answer omp's questions, iterate, do the first-pass review, and report results up. Keeps omp-wrangling out of the Director's context. **Does not cross the box** either. |
| **Worker** | `omp` | implementing inside the working tree. |

Both Foreman and Worker live **inside the box**. Only the Director pushes, opens
PRs, or merges.

## The flow

```
Director (human): a request
 └─ Director (Claude): turn it into a SPEC with explicit, testable
                       acceptance criteria (exact tests/commands that must pass)
     └─ spawn a FOREMAN subagent, hand it the spec
         └─ Foreman ⇄ omp: implement it  (bounded Q&A loop)
            · omp scoped to the repo, auto-approved, UNLIMITED subagents
            · local tools only — no github / ssh / browser / web
            · omp cannot push, open PRs, or merge
         └─ Foreman: first-pass review of omp's diff; report up to Director
     └─ Director (Claude): push the branch + open the PR
         └─ Director: independent review vs. the user's ORIGINAL intent
                      and the acceptance criteria
             └─ merge = auto-ship guardrails + Director's validation (below)
```

Use the pipeline for substantial, multi-file work. Small changes the Director
just makes directly.

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
   whitelist — no `github`, `ssh`, `browser`, or `web_search`.
2. This environment has no `gh` CLI and `omp` is given no push credentials, so
   it *cannot* reach GitHub even if it tried.
3. `omp` runs with `--no-rules --no-extensions`, so it does not ingest this
   repo's `CLAUDE.md` (including the auto-ship authorization) and cannot act on
   it. Its instructions come only from the spec the Foreman hands it.

## Invocation

The Foreman invokes `omp` only through the wrapper, never raw:

```sh
scripts/omp-build "<spec with acceptance criteria>"
scripts/omp-build @spec.md
```

`scripts/omp-build` bakes in: `--cwd <repo>`, the local-only tool set,
`--approval-mode yolo` (safe — the boundary is structural), `--no-rules
--no-extensions`, the curated `sa-*` skills, and **unlimited subagents**
(`task.maxConcurrency = 0`). Pin a specific Claude model with the
`OMP_BUILD_MODEL` env var; with only the Anthropic key provisioned, omp defaults
to Claude.

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
