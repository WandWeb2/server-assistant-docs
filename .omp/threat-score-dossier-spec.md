# Threat Score Dossier — design spec (DRAFT)

Status: draft · Owner: repo owner · Drafted 2026-06-20
Scope decision (owner): **cross-server** — make the score as strong as possible
for every server under our wing.

---

## 1. Vision

Turn Threat Score from a single-server, single-signal advisory into a **cross-server
threat-intelligence network**: every server protected by Server Assistant contributes
moderation signals to (and benefits from) a shared picture of a user's risk. A member
who has been banned for scams in six networked servers should light up 🔴 the moment
they join the seventh — *before* they cause harm.

The **dossier** is the surfaced artifact: a single per-user view that fuses the local
record (this server) with the network picture (everywhere else), explainable and
advisory.

**Guiding principle (owner directive, 2026-06-20):** *anything that can build and
strengthen Server Assistant should do so.* Features should compound — every server's
signals make every other server safer — provided privacy is engineered in (§3). This
principle is why participation defaults **on** (§9-A) and why cross-server is the chosen
scope rather than the conservative per-guild default.

## 2. Where we are today (research baseline)

- `threatscore.py` (135 lines, in-repo, imported `bot.py:951`). **Advisory-only by
  hard promise** — never auto-actions (`threatscore.py:7-9`, `features.md:170`,
  `roadmap.md:964-977`).
- Score = weighted sum of **warnings only**, exponential time-decay (14-day half-life).
  Manual warn = 15, AutoMod warn = 8, ×1.6 for serious-term reasons. Bands Low/Elevated/
  High (15/40).
- **Strictly per-guild**: warnings stored `{guild_id:{user_id:[...]}}` in
  `staff_warnings.json`; the score for a user in server A uses only server A's data.
- Surfaced in **one place**: a field on the user-info embed (`_add_threat_score_field`,
  `bot.py:16866`), gated on per-guild `threat_score_enabled` (default off). No `/threatscore`
  command, no portal value, no anti-raid integration.
- **AltGuard** repeat-offender fingerprints (`offenders.json`) are also per-guild and
  explicitly **local-only / no cross-server lookup** — today's privacy posture.

## 3. The hard part: this is a privacy/legal redesign, not just a feature

Cross-server scoring changes our data role. Today each **server owner is the controller**
of their moderation records and we are a **processor** acting on their instructions
(privacy.md:18). Pooling one server's data to inform another makes **Wandering Webmaster
a controller** of a cross-server safety dataset about Discord users. That requires, as
first-class parts of this spec (not afterthoughts):

1. **Legal basis** — legitimate interest in platform/community safety, documented, with a
   balancing test. (Safety/anti-abuse is a well-trodden legitimate-interest case, but it
   must be written down.)
2. **Disclosure before launch** — privacy policy **and** terms updates describing the
   threat network: what's shared, why, retention, and rights. The deploy gate + docs-first
   rule already force docs ahead of code; this is bigger — treat the policy/terms PR as a
   **blocking dependency** of any network ingestion.
3. **Data minimization across the boundary** — servers must **not** see each other's raw
   moderation text. The network exposes **aggregates and bands**, never another server's
   free-text reasons or which server acted. Example dossier line:
   > 🔴 **Network: High** — flagged in **6** networked servers (2 bans, 4 warns, last 9d ago)
   …not "Server X banned them for 'scamming in #market'." This protects the user *and*
   the originating server's operational confidentiality.
4. **Data-subject rights** — access/erasure path for an individual (today's flow routes
   members to their server owner; a cross-server record needs a direct route via `/support`,
   already referenced in privacy.md:209).
5. **Anti-poisoning safeguards** — a malicious or sloppy server could mass-warn to poison
   the network. Mitigations: weight contributions by **server standing** (age, fleet
   tenure, volume sanity), require **independent corroboration** (signal only "counts" at
   N≥2 distinct servers), keep it **advisory-only** (a network score NEVER auto-actions),
   and keep it **explainable + appealable**.
6. **Participation model** — see Open Decision A.

## 4. Signals (network-eligible)

Aggregated across participating guilds, each time-decayed, each minimized to counts/bands:

| Signal | Source today | Network form |
|---|---|---|
| Bans / kicks | mod actions | count of distinct servers + recency |
| Warnings (manual / AutoMod) | `staff_warnings.json` | counts by type, decayed |
| AutoMod serious-category hits | automod | count, category band (no text) |
| AltGuard fingerprint matches | `offenders.json` | "matches known-offender fingerprint in network" boolean/band |
| Account age / join velocity | Discord | risk modifier (already available, unused) |

Raw reasons/free-text **never cross the boundary**. Local view keeps full detail; network
view is aggregate-only.

## 5. Scoring model

Keep the transparent weighted-decay core; add a **network component** computed separately
and shown as its own band, so local and network are never silently conflated:

```
local_score   = current per-guild weighted-decay (unchanged)
network_score  = Σ over OTHER servers ( signal_weight × decay × server_standing )
                 with N≥2-server corroboration gating
dossier        = { local: (score, band, drivers), network: (score, band, breadth) }
```

Bands tuned conservatively at first (favor false-negatives over false-positives, matching
the advisory ethos). Never auto-action on either band in v1.

## 6. Surfaces

- **Dossier embed** — extend `_build_user_info_embed` / "View Info" context menu with a
  Local + Network section (gated on `threat_score_enabled`).
- **`/threatscore @user`** — new dedicated staff command opening the full dossier.
- **Anti-raid** — a joiner with a High network band can flag the raid alert (advisory).
- **Portal** — show the dossier in the relay portal (currently only the toggle is exposed,
  `sa-relay/relay.py:1588`).

## 7. Architecture & storage (deploy-aware)

Cross-server data **cannot** live in per-guild JSON. The **relay** is the natural home —
it already spans the fleet and has sqlite. Proposed split:

- **Bot → relay**: emit minimized moderation events (`ban|kick|warn|automod`, user_id,
  decayed weight, category band — no free-text) via an authenticated relay endpoint.
- **Relay**: stores network events, computes `network_score(user_id)` with standing +
  corroboration, exposes `GET /threat/{user_id}` (operator/bot auth).
- **Bot ← relay**: dossier assembly fetches the network component; degrades gracefully to
  local-only if the relay is unavailable.
- **Single-file deploy constraint**: `threatscore.py` is a box-only sibling **not
  re-shipped**; network *client* logic that lives in `bot.py` must be **inlined** (no new
  bot sibling module). The scoring engine itself lives in the relay (`relay.py`, also
  single-file — inline there too).

## 8. Phasing

- **P0 — Consent & disclosure (blocking):** privacy + terms updates; participation model;
  legal-basis note. No data moves until this lands.
- **P1 — Ingestion:** bot emits minimized events; relay stores + computes network score.
  No user-facing surface yet (shadow mode to validate signal quality + tune anti-poisoning).
- **P2 — Dossier view:** Local+Network embed, `/threatscore`, portal. Advisory only.
- **P3 — (deferred) action assist:** optional, server-defined thresholds → *suggest* (DM
  check-ins / raid-alert weighting), still never silent auto-bans. Separate spec + safeguards.

## 9. Open decisions (need owner call)

- **A. Participation default.** **DECIDED → default-on for every server, with opt-out**
  (owner: "strongest for all under our wing" + the strengthen-SA principle). This carries the
  heaviest disclosure/consent burden, so it makes P0 (privacy + terms + prominent disclosure +
  easy opt-out, advisory-only) a hard blocking dependency. Remaining sub-question: is opt-out
  per-server only, or also a per-user (data-subject) suppression?
- **B. Free vs Premium.** Advisory Threat Score is marketed "free for every server"
  (features.md:170) yet listed under Premium unlocks in the relay (relay.py:5576). Resolve
  before the dossier ships — the network is most valuable when *every* server participates,
  which argues for the contribution layer being free/standard even if the rich dossier view
  is Premium.
- **C. Which signals cross the boundary.** Start minimal (bans/kicks + serious-category
  AutoMod + AltGuard match) and expand; confirm the v1 set.

## 10. Risks

- Reputational/legal if cross-server PII sharing is shipped without airtight disclosure +
  minimization — **P0 is non-negotiable**.
- False positives harming innocent users → advisory-only, corroboration gating, appeal path.
- Network poisoning → server-standing weighting + N≥2 corroboration.
- Quality of `band()` thresholds → P1 shadow mode before any surface goes live.
