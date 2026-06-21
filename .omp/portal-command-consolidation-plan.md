# Member Portal & Command Consolidation — planning record

**STATUS: POSTPONED — needs further owner quizzing to fine-tune.**

Owner: repo owner · Recorded 2026-06-21 · Build-excluded (lives under `.omp/`,
which `_config.yml` `exclude`s from the Jekyll build).

> This is an internal record so a future session can resume with **full
> context**. It is **not** a committed spec — every section below is the owner's
> stated vision captured faithfully, pending the owner-quizzing pass in
> §"Open questions". The matching customer-facing roadmap line landed in the
> **🔵 Committed** band of `roadmap.md` ("🌐 Member Portal & streamlined
> commands"); that wording is deliberately high-level and the owner will review
> it.

---

## 1. Vision (owner, recorded verbatim-in-spirit)

A large future overhaul covering **both** a member-facing portal **and**
bot-command consolidation. The two halves are designed together: the portal
becomes the place capabilities actually live, and the command surface shrinks to
a thin, discoverable index that hands off to the portal.

### 1A. Notice-on-install

- **Server Assistant itself delivers the privacy / threat-network notice
  automatically when the bot is installed** — this is the bot's responsibility,
  **not** the server owner's. (Today, disclosure leans on the owner having read
  the docs; the vision makes the bot proactively deliver it on join/install.)
- The notice is **also available on demand via a bot command**.
- The notice **links to the relevant documentation** (privacy / terms / threat
  network pages on the docs site).

### 1B. Portal opens to ALL server members (currently staff-only)

Today the portal (`portal.md` → `https://serverassistant.wandweb.co/`) is
**staff-only**. The vision opens it to **every server member**, with:

- **Self-service, user-specific setting modification** — a member can change
  their own personal settings without going through staff.
- **Two-way records & forms** — records and forms that flow **both**
  directions: user→staff (e.g. a member submits something to the team) and
  staff→user (e.g. the team sends a record/form to a member).
- **Opt-outs** — including any **threat-network opt-out**. (See the hard tension
  this creates in §3 and the Open Questions — the current threat-network spec
  has *no* member opt-out UI.)

### 1C. Command consolidation

- **Minimise the number of bot commands**; move the heavy lifting to the
  **website / easy-to-use wizards**.
- **Every bot ability is still listed as a command for discoverability** — the
  command index stays complete; nothing becomes invisible.
- Where a simple wizard **can't** cover a capability, the command provides a
  **hotlink / deep-link to the exact setting or form on the portal** (not a
  generic "open the portal" link — the precise destination).

### 1D. Scope & status

This is a **large** update needing **further owner quizzing to fine-tune**.
**POSTPONED for now.** Do not begin implementation; resume by working the Open
Questions below with the owner.

---

## 2. Why these two halves belong in one initiative

- The command-consolidation half is only coherent **if** the portal exists to
  receive the deep-links — every "collapsed" command needs a precise portal
  destination to point at. So the portal work gates the command work.
- Opening the portal to all members (1B) is what makes member-facing deep-links
  (1C) reachable for non-staff in the first place — a deep-link into a staff-only
  portal would dead-end for a regular member.
- Notice-on-install (1A) is the member's first contact with the bot and the
  natural front door to the member portal and the opt-outs it will host.

---

## 3. Hard tension to resolve — threat-network opt-out vs. locked decisions

The member threat-network opt-out (1B) **directly contradicts** decisions
currently **LOCKED** in `.omp/threat-score-dossier-spec.md` §9:

- §9.1 — *"No server opt-out. Participation is default-on … the network is core
  functionality, not a toggle. Every server contributes."*
- §9.2 — *"Individual erasure/objection is case-by-case via `/support` — there is
  **no opt-out UI**. A data subject's erasure or objection request is handled
  individually and either honoured or refused with documented compelling
  legitimate grounds."*

The current legal basis is **legitimate interest backed by a written LIA**
(§9.4), and the no-opt-out-UI stance is load-bearing for that basis. Introducing
a **self-service member opt-out in the portal** is therefore **not a UI change —
it is a change to the threat-network's consent/legal-basis model** and must be
re-litigated with the owner *and* re-checked against the LIA and the
privacy/terms disclosures before any build. **Do not ship a threat-network
opt-out toggle without an explicit owner reversal of §9.1–9.2 and a legal
re-review.** This is the single biggest open question (see §6).

---

## 4. What exists today (resume baseline)

- **Portal**: `server-assistant-docs/portal.md` is a redirect stub to
  `https://serverassistant.wandweb.co/`; the portal app itself is staff-facing.
  The relay (`sa-relay/relay.py`) + PWA (`sa-relay/pwa/`) back it.
- **Commands**: catalogued in `server-assistant-docs/commands.md`; implemented in
  `server-assistant/bot.py`. Setup/`/settings` wizards already exist — note the
  **🪄 Setup & settings wizard overhaul** card already sits in the Committed band
  and is a natural companion / dependency for the wizard-first command model.
- **Privacy notice / docs**: `privacy.md`, `terms.md`, and the threat-network
  disclosure live in the docs repo; the deploy gate is already "docs-first".
- **Threat network**: spec at `.omp/threat-score-dossier-spec.md` (decisions
  LOCKED, see §3); contribution layer free/standard, rich dossier Premium.
- **Single-file deploy constraint** (from all three repos' `CLAUDE.md`): `bot.py`
  and `relay.py` ship as single files — any shared helper for notice-on-install
  or deep-link generation must be **inlined**, not added as a sibling module.

---

## 5. Workstream sketch (provisional — for sizing only, not a commitment)

1. **Notice-on-install** — bot delivers the privacy/threat-network notice on
   install + a `/notice` (or similar) on-demand command; links to docs.
2. **Member portal auth** — extend portal identity beyond staff to any server
   member (see Open Questions on auth model).
3. **Member self-service settings** — per-user settings surface in the portal.
4. **Two-way records & forms** — data model + UI for user→staff and staff→user
   records/forms.
5. **Opt-outs surface** — portal opt-out centre; threat-network opt-out gated on
   the §3 legal resolution.
6. **Command consolidation** — audit every command in `commands.md`/`bot.py`;
   for each, decide: keep · collapse-into-wizard · deep-link-to-portal. Keep the
   full command list for discoverability; generate precise deep-links.

---

## 6. Open questions to resolve with owner

- **Portal auth for non-staff members.** How does a regular member authenticate
  to the portal? Discord OAuth per member? How is per-server membership proven
  and scoped, so a member only sees/edits their own settings in servers they're
  actually in? Rate-limiting / abuse model for a now much larger audience?
- **Threat-network opt-out vs. locked decisions (§3).** Does the owner intend to
  **reverse** §9.1–9.2 of the threat-score spec (no server opt-out / no opt-out
  UI)? If so: what exactly can a member opt out of — contribution, dossier
  surfacing, or both? How does an opt-out interact with the network's
  **coverage** (a member opting out reduces the shared picture for every other
  server)? What's the legal-basis impact on the LIA and the privacy/terms
  disclosures? **Blocking** — nothing threat-network ships until this is settled.
- **Which commands collapse into wizards vs. deep-links.** Criteria for "a simple
  wizard can cover it" vs. "needs a portal deep-link". Which commands stay as
  real bot commands (e.g. urgent moderation actions that must work in-chat) and
  must **not** be portalised?
- **Records & forms data model.** What's the schema for two-way records/forms?
  Where stored (relay DB?)? Retention? Who can see what (member vs. staff
  visibility)? Notification/delivery (DM? portal-only?)? Audit trail?
- **Notice-on-install mechanics.** Delivered where on install — DM to installer,
  post in a system channel, or both? On-demand command name and visibility
  (ephemeral?)? Does re-delivery happen on version/notice changes?
- **Deep-link addressing.** The portal needs **stable, precise** deep-link
  targets (one per setting/form) for commands to link to — does the portal app
  support deep-linkable routes today, or is that new work?
- **Pricing/tiering.** Which of these are free/standard vs. Premium? (Mirror the
  threat-network split: contribution free, rich surface Premium?)
- **Migration / discoverability.** When commands collapse, how are existing users
  guided from the old command to the wizard/deep-link without breaking muscle
  memory?

---

## 7. Resumption checklist (for the next session)

1. Re-read this doc and `.omp/threat-score-dossier-spec.md` §9 (locked
   decisions).
2. Work §6 Open Questions with the owner — **start with the §3 threat-network
   opt-out tension**, since it's blocking and has legal dependencies.
3. Only then turn the workstream sketch (§5) into a real, sequenced spec.
4. Respect the single-file deploy rule (inline shared helpers into
   `bot.py` / `relay.py`).
5. The customer-facing roadmap line is already live in the Committed band; keep
   it in sync if scope is cut or split.
