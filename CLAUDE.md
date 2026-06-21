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

## Background agents — hygiene (standing rule)

Subagents and background tasks are easy to leak. A prior session left **13 research agents running for 10–22h**, quietly burning tokens, because they were spawned and never reaped. To prevent recurrence:

- **Bound every background/research agent with a finite, focused task** (and a timeout where the tool allows) — never an open-ended "research X" that can loop indefinitely. Prefer one focused agent over a large parallel swarm.
- **Reap on completion.** When the work is done, confirm no background tasks are still running and stop any straggler. Never end a session with live background agents you no longer need.
- **If something feels slow, check `/tasks` (or the Background tasks panel).** A task running far longer than its work warrants is stuck — kill it and redo the work directly.
- Tasks spawned in an earlier context may not be stoppable from a later one programmatically; the operator can stop them from the `/tasks` panel.

## Core-pillar changes — direct owner liaison required (standing rule)

The product's **core legal/compliance pillars** — the **privacy policy, terms of service, the threat-network opt-out model, what data is collected/kept/shared, the lawful basis, and whether the small-business exemption is relied upon** — must **never be changed on assumption**. Any change that touches these pillars requires **extensive direct liaison with the owner: explicit questioning AND double-checking before the change goes live.** Never guess on a core pillar — surface it and confirm. Origin: a session where the individual opt-out stance shifted; it was caught and confirmed with the owner before it reached live policy.
