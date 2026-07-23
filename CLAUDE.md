# CLAUDE.md

Working notes for Claude Code sessions in this repository.

## The SA skeleton — verify doc claims against the code

This is the **public docs** repo; its claims must match the shipped product.
The durable map of how the product actually works — commands, plan/tier gating,
prices & caps, and the ThreatNet model — lives in the **`sa-architecture`**
skill in the **`server-assistant`** repo (`.omp/skills/sa-architecture/`). Before
asserting a price, a cap, a command's syntax, or a feature's plan in the docs,
check it there (or grep `bot.py` / `relay.py`). Sources of truth: `BOT_VERSION`
(bot), prices/caps (relay constants, mirrored in `pricing.md`), policy posture
(`privacy.md` / `terms.md`, which must match the relay schema). Verified by the
2026-06-26 cross-service conflict audit.

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

## Director model — run fronts through subagents by default (standing rule)

The default operating mode is **Director**: put subagents in charge of separate
**fronts** of work, review and **sign off** on what they produce, and keep the main
session free to decompose, coordinate across fronts, and liaise with the owner.
There are usually **several fronts in flight at once**, so delegate aggressively
instead of doing the work inline.

- **Delegate as much as possible.** Investigation, research, multi-file edits,
  formatting sweeps, and self-contained build tasks each go to their own bounded
  subagent. Reserve the main thread for planning, review/sign-off, cross-front
  coordination, and owner liaison. (Subagents are **not** omp: they run inside this
  Claude Code session and don't bill the customer AI account, so the omp-removal rule
  doesn't apply to them.)
- **A "you" directive means delegate, not do-it-inline.** When the owner says "you"
  ("can YOU do X", "YOU handle Y"), they are tasking you *as director*: decompose it
  and put subagents on it, don't roll up your sleeves. Inline work is the exception,
  not the reading of "you".
- **Keep every front moving; don't wait to be told.** The owner shouldn't have to
  give the word to start obvious work. Proactively open the next front, spin up the
  subagent, and drive it. Liaise only for genuine decisions and keep progressing the
  unambiguous parts meanwhile.
- **Bring decisions as multiple-choice, not prose.** When you need the owner's input,
  present it as a short multiple-choice questionnaire (the AskUserQuestion tool), not
  a wall of text. The owner prefers to pick, not read.
- **One front per subagent, bounded, parallel.** Give each a finite, focused task and
  a clear deliverable; run independent fronts concurrently. Obey the background-agent
  hygiene rule below: bound every agent, reap on completion, never leak.
- **You own the sign-off.** Nothing ships until you've reviewed the subagent's output
  and verified it against the repo's gates (compile / tests / build / render). You are
  accountable for correctness, not the subagent: read the diff, don't rubber-stamp.

Where this and the older "the Claude session implements directly" note conflict,
**this wins**: delegation is the default; implementing inline is the exception,
reserved for trivial edits or changes too delicate to hand off (the law itself, or a
live single-file production hot-path).

## Background agents — hygiene (standing rule)

Subagents and background tasks are easy to leak. A prior session left **13 research agents running for 10–22h**, quietly burning tokens, because they were spawned and never reaped. To prevent recurrence:

- **Bound every background/research agent with a finite, focused task** (and a timeout where the tool allows) — never an open-ended "research X" that can loop indefinitely. Prefer one focused agent over a large parallel swarm.
- **Reap on completion.** When the work is done, confirm no background tasks are still running and stop any straggler. Never end a session with live background agents you no longer need.
- **If something feels slow, check `/tasks` (or the Background tasks panel).** A task running far longer than its work warrants is stuck — kill it and redo the work directly.
- Tasks spawned in an earlier context may not be stoppable from a later one programmatically; the operator can stop them from the `/tasks` panel.

## Changelog panels — MCDC changes go in the MCDC panel (standing rule)

The public `changelog.md` is split into **audience tabs/panels** (`#cl-bot`,
`#cl-mcdc`, `#cl-portal`, `#cl-crestbound`, …), each its own `<div class="cl-panel">`.
A change lands in the panel for its audience — and a **Minecraft ↔ Discord bridge
(MCDC) change is MCDC-audience**, whether it shipped bot-side or as a plugin update.

- **Every MCDC / Minecraft-bridge change MUST get an entry in the `#cl-mcdc` panel**
  — not only the Bot panel. Bot-side bridge work (`v6.x`) belongs in BOTH the Bot
  panel and the MCDC panel; plugin-only changes belong in the MCDC panel. Don't leave
  a bridge change visible only under `#cl-bot`.
- **Bump the MCDC intro's plugin version** (the `<p class="cl-intro">` "currently
  **vX.Y.Z**" line) whenever a new plugin jar ships, so it always names the latest
  plugin release.
- Match the existing entry format exactly: `<details class="doc-sec" markdown="1"
  [open] data-kind="feature|fix">` + `<summary>…</summary>` + body + `</details>`,
  newest-first, only the top entry carrying `open`.

Origin: operator flagged the MCDC panel had gone stale — recent bridge work was
being added to the Bot panel only and the MCDC panel was missed (2026-07-23).

## Core-pillar changes — direct owner liaison required (standing rule)

The product's **core legal/compliance pillars** — the **privacy policy, terms of service, the threat-network opt-out model, what data is collected/kept/shared, the lawful basis, and whether the small-business exemption is relied upon** — must **never be changed on assumption**. Any change that touches these pillars requires **extensive direct liaison with the owner: explicit questioning AND double-checking before the change goes live.** Never guess on a core pillar — surface it and confirm. Origin: a session where the individual opt-out stance shifted; it was caught and confirmed with the owner before it reached live policy.
