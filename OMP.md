# OMP.md — the Claude × omp build pipeline

This repo uses a two-agent model for substantial implementation work:

> **Claude Code plans and guards. `omp` (the oh-my-pi coding agent) implements.
> The box — the local working tree — is the boundary. Claude owns everything
> that leaves it.**

`omp` is a full, autonomous coding agent (its own `bash`/`edit`/`write`/`ssh`/
`browser`/`github`/`task` tools, persistent memory, subagents, multi-provider).
Invoking it is closer to handing the keys to a second coding agent than to
running a command — so it runs under the contract below, never ad hoc.

## The flow

```
you (human): a request
 └─ Claude: turn it into a SPEC with explicit, testable acceptance criteria
            (the exact tests/commands that must pass)
     └─ omp: implement it  ── bounded Q&A loop with Claude ──┐
        · scoped to the repo, auto-approved, UNLIMITED subagents
        · local tools only — no github / ssh / browser / web
        · cannot push, open PRs, or merge
     └─ Claude: push the branch + open the PR  ◄────────────-┘
         └─ Claude: review the diff independently, against the user's
                    ORIGINAL intent and the acceptance criteria
             └─ merge = auto-ship guardrails + Claude's validation (see below)
```

Use the pipeline for substantial, multi-file work. Small changes Claude just
makes directly.

## The box boundary (the one rule that matters)

- **Inside the box** (the local working tree): `omp` has full autonomy —
  read/edit/write, run builds/tests, commit locally, and spawn as many
  subagents as it wants. Blast radius is files Claude reviews before anything
  leaves.
- **Crossing the box** (push / open PR / merge / deploy / any external service):
  **only Claude**, under its normal confirmation rules. `omp` is never granted
  the tools or credentials to cross it.

This is enforced structurally, not by trust:

1. `omp` is launched (via `scripts/omp-build`) with a local-only `--tools`
   whitelist — no `github`, `ssh`, `browser`, or `web_search`.
2. This environment has no `gh` CLI and `omp` is given no push credentials, so
   it *cannot* reach GitHub even if it tried.
3. `omp` runs with `--no-rules --no-extensions`, so it does not ingest this
   repo's `CLAUDE.md` (including the auto-ship authorization) and cannot act on
   it. Its instructions come only from the spec Claude hands it.

## Invocation

Always through the wrapper, never raw:

```sh
scripts/omp-build "<spec with acceptance criteria>"
scripts/omp-build @spec.md
```

`scripts/omp-build` bakes in: `--cwd <repo>`, the local-only tool set,
`--approval-mode yolo` (safe — the boundary is structural), `--no-rules
--no-extensions`, the curated `sa-*` skills, and **unlimited subagents**
(`task.maxConcurrency = 0`). Pin a specific Claude model with the
`OMP_BUILD_MODEL` env var; with only the Anthropic key provisioned, omp
defaults to Claude.

## Preloaded skills (curated, not kitchen-sink)

`omp` loads a small, deliberate set from `.omp/skills/` (scoped to `sa-*`):

- **`sa-stay-in-box`** — the boundary, restated at the instruction level.
- **`sa-self-verify`** — run the repo's tests/linters and re-check the diff
  against the acceptance criteria before yielding; report, don't guess.
- a project-conventions skill (`sa-python-service` or `sa-jekyll-docs`).

Grow this set from observed mistakes; keep it lean so omp stays focused.

## Subagents

Completely open by design: `task.maxConcurrency = 0` (no cap on concurrent
subagents). Only the *recursion depth* is kept finite (`maxRecursionDepth = 5`),
purely to prevent an infinite agent-spawn loop — not to limit how many
subagents run at once.

## Merge gate

The standing **auto-ship** authorization in `CLAUDE.md` still applies, but for
any `omp`-authored change Claude's independent review is an **additional hard
gate**. Squash-merge only when:

- CI is green (or none is configured), **and**
- there are no unresolved human review comments, **and**
- Claude's independent review of the diff is clean.

If Claude's review flags anything material, it does **not** merge — it reports
and waits.

## Accountability

Claude owns the merged result, not `omp`. Claude reviews every omp-authored diff
before it ships and tells the human what changed and which tools/model `omp`
used. Never echo, log, or commit the `OMP_ANTHROPIC_API_KEY` / `ANTHROPIC_API_KEY`.
