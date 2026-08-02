# DRAFT, awaiting owner sign-off: re-running the LIA balance against automated action

**Status: DRAFT. Nothing here has been applied.** This file proposes replacement
text for `.omp/threat-network-PIA-LIA.md` sections **B3.3, B3.4, B3.5** and a new
**B3.6**. `threat-network-PIA-LIA.md` itself has **not** been edited. This is a
core-pillar change (the legitimate-interest assessment behind the lawful basis) and
under this repo's `CLAUDE.md` it requires explicit owner sign-off before it goes in.

**Prepared 2026-08-02.** Verified against `server-assistant@7eac827` (`BOT_VERSION`
6.111.0) and `sa-relay@743e266` (`RELAY_VERSION` 1.11.85), and against `privacy.md`
as published in `b7cda6b` earlier tonight.

`.omp/` is in `_config.yml` -> `exclude`, so this file is internal and does not
publish.

---

## Why the assessment has to be re-run

The LIA's balancing section currently carries this as safeguard #4
(`threat-network-PIA-LIA.md:413-414`, quoted verbatim, so its em-dash is the source
document's and not new writing):

> 4. Advisory-only, explainable, appealable — no Art. 22 automated decision with
>    legal/similarly-significant effect in v1.

Three of those four claims are no longer true of the shipped product, and the
fourth is weaker than it reads:

- **"Advisory-only" is false.** Two code paths ban a person automatically.
- **"No Art. 22 automated decision" is false.** Both paths are decisions based
  solely on automated processing, and exclusion from a community is the kind of
  effect Art. 22 is about. The published Privacy Policy says so itself
  (`privacy.md:345`), so the product's own customer-facing document now
  contradicts the assessment that is supposed to justify it.
- **"Explainable" holds only for one of the two paths.** A ThreatNet auto-protect
  ban tells the affected person nothing at all.
- **"Appealable" holds, but the route differs sharply between the two paths.**

The same stale claim appears in the necessity test at
`threat-network-PIA-LIA.md:361` ("advisory-only (no automated decision-making)"),
in the impact assessment at `:395-398`, and in Part D's description of `terms.md`
§6 as "advisory non-auto-actioning" at `:507`. Those need the same correction.

The register also has no Article 22 entry at all. A separate draft proposes one:
`.omp/PENDING-RISK-R9-article-22.md`.

---

## What the code actually does

Established by reading `bot.py` and `relay.py`, not by reading the policy.

### Path 1: alt-guard auto-ban (local, free tier, opt-in to act)

| Question | Answer, with citation |
| --- | --- |
| What triggers it | A member joins a server that has run `/altguard on`, is not a bot, and is not arriving during an active raid window (`bot.py:10039`) |
| Scoring | `_altguard_match` (`bot.py:8570-8611`): identical custom avatar +60 and sets `strong` (`bot.py:8587-8588`); name or display similarity >= 0.85 +40 and sets `strong` (`bot.py:8594-8595`); similarity 0.70 to 0.85 +20, not strong (`bot.py:8596-8597`); account age <= 7 days +15 (`bot.py:8599-8600`); the stored offence being <= 30 days old +10 (`bot.py:8602-8604`). Returns the best match at score >= 50 (`bot.py:8609`) |
| Ban condition | `auto = score >= 70 and match["strong"]` (`bot.py:8618`), then `guild.ban` (`bot.py:8621`) |
| What that means in practice | The name route maxes out at 40 + 15 + 10 = 65 and **cannot** reach 70. The only route to an automatic ban is the **avatar match** (60) plus at least 10 more points. `privacy.md:343` states this correctly |
| Human before the action | **None.** The staff alert is posted after the ban (`bot.py:8635-8654`) |
| What the banned person is told | The ban reaches `on_member_ban` (`bot.py:9932`) and `_send_ban_appeal` (`bot.py:9962`), gated on `ban_appeals_enabled`, default True (`bot.py:730`, gate at `bot.py:8845`). They get a DM carrying the reason string "Repeat-offender auto-ban, likely alt (score N)" (`bot.py:8621`) and an invitation to one reply |
| Appeal route | That one reply opens an appeal record for **that server's own staff**, who are human. If the person has DMs closed the send fails and is recorded as `dm_failed` (`bot.py:8886-8890`), and they are told nothing |
| Opt-out | **Does not apply.** The ThreatNet individual opt-out is not consulted anywhere in `_altguard_match` or `_altguard_handle`. Fingerprint recording is unconditional and runs on every server whether or not alt-guard is switched on (`bot.py:9947`, `9949`, `15608`, `39433`) |
| Safety exception | Not applicable, there being no opt-out to except |
| Default and control | Off by default (`bot.py:712`). Changed by the server owner, Manage Server, or Administrator (`bot.py:39704`) |
| Erasure | An unban clears the fingerprint (`_clear_offender`, `bot.py:8553`), and the store is capped at 200 per guild (`bot.py:8519`) |

### Path 2: ThreatNet auto-protect (cross-server, full Premium, opt-in)

| Question | Answer, with citation |
| --- | --- |
| What triggers it | A member joins a server that has run `/threatnet autoban on` (`bot.py:9978`, helper `bot.py:9863`) |
| Gates | `threatnet_autoban_enabled`, default False (`bot.py:9873`, `696`); full Premium re-checked at action time, not just at enable time (`bot.py:9875`); a dossier that is found and not suppressed (`bot.py:9888`); band at or above the server's threshold (`bot.py:9891`) |
| Threshold | The server's choice. Defaults to `high` (`bot.py:700`, `9809`, `9884`). **There is no floor** (`bot.py:9882-9883`). `/threatnet autoban on level:low` is an offered choice (`bot.py:41196`), carrying a written warning (`bot.py:41242-41247`) |
| What `low` means | `_threat_band` (`relay.py:1453-1467`) returns `low` as the fallback for any record that is neither corroborated nor serious. At level `low`, one `minor` signal from one server, a single kick or warn, is enough to ban on sight |
| Human before the action | **None** |
| What the banned person is told | **Nothing.** The ban is silent toward the affected user by design (`bot.py:9865-9866`, `9894-9897`, operator directive 2026-06-22). `_threatnet_autoban_mark` (`bot.py:9900`) makes `on_member_ban` skip both the network re-emission and the appeal DM (`bot.py:9945-9948`) |
| Staff notice | `_automated_ban_notice` to the server's alert channel (`bot.py:9829`, called at `9924`), plus `log_action` and `_post_mod_action` (`bot.py:9913`, `9919`) |
| Appeal route | The web portal or `/support`. `/support` opens a ticket to the operator, who is human (`bot.py:41263-41265`). The portal's threat route is a **self-service opt-out toggle** (`relay.py:16369`, `16385`), which is automated and is not itself human review |
| Opt-out | Honoured. Suppressed on the dossier read (`relay.py:1738-1766`), and collection stops as well, not merely disclosure (`relay.py:1505-1511`) |
| Safety exception | Operator-set only, with a mandatory documented reason; a customer can never set it (`relay.py:1538-1540`, `16385-16391`). Where it is in force **and** the record is serious and corroborated, the dossier is returned rather than suppressed (`relay.py:1740-1757`) |
| Default and control | Off by default. Changed by Manage Server on a full Premium guild (`bot.py:41204`, `41210`) |

### The finding that neither document records: the two paths chain

An alt-guard auto-ban is a ban like any other as far as the rest of the bot is
concerned. It reaches `on_member_ban` (`bot.py:9932`). It is **not** marked the way
a ThreatNet auto-ban is, so `_threatnet_autoban_consume` returns False
(`bot.py:9945`) and execution falls through to
`_emit_threat_signal(guild.id, user, "ban")` at `bot.py:9953`.
`_threat_severity_band` maps **any** ban to `serious` (`bot.py:4097-4098`).

So a ban decided by an avatar comparison, with no human involved, is contributed to
the cross-server network at the **top severity band**. On the relay,
`_threat_band` returns `high` once a `serious` signal is present across two or more
distinct servers (`relay.py:1453-1467`). `high` is the trigger for ThreatNet
auto-protect at its **default and safest** setting (`bot.py:9809`).

The consequence, stated plainly: **two servers independently auto-banning the same
account on an avatar match will manufacture exactly the record that causes a third
server to auto-ban that account on arrival, with no human involved at any point in
the chain.**

The circular-amplification guard that exists (`bot.py:9940-9948`) was written for
ThreatNet's own bans and correctly stops those feeding back. It does not cover
alt-guard's. Separately, the signal is emitted with `altguard_match` left at its
default of False (`bot.py:9953`, default at `bot.py:4144`), and no call site in
`bot.py` ever passes True, so the relay cannot tell an automated ban from a staff
ban and has no way to weight them differently.

---

## Proposed replacement text

### B3.3 Possible impact (replaces `threat-network-PIA-LIA.md:394-398`)

A wrongly or maliciously flagged user faces heightened scrutiny, pre-emptive
moderation, and, on servers that have enabled either automated path, **immediate
exclusion from a community without any human considering their case**.

The impact is no longer limited by an advisory-only design, because the design is
no longer advisory-only. It is limited instead by: the fact that both automated
paths are **off by default** and must be switched on per server; conservative band
derivation favouring false negatives; N >= 2 corroboration for the `high` band;
server-standing weighting; and explainability of the drivers. Those are real, but
they are weaker than what the previous text claimed, and one of them (corroboration)
is defeated by the server's own choice of a lower threshold.

The severity of the impact differs sharply between the two paths, and the
assessment should not average them:

- **Alt-guard** removes a person from one server, tells them why through the
  ban-reason DM where the server has left that enabled, and gives them a reply that
  reaches that server's staff. The consequence is local and the person knows it
  happened and why.
- **ThreatNet auto-protect** removes a person from a server they have just joined
  and tells them nothing. They learn only that they are banned. The reasoning, that
  a cross-server record exists, is discoverable solely by reading the Privacy
  Policy, which a banned stranger has no particular reason to read.

### B3.4 Safeguards (replaces the current list, with #4 rewritten)

1. Strict data minimization: aggregates and bands only, no free text, no message
   content, no originating-server identity, local and network shown separately.
2. Qualified individual opt-out from profiling, plus an erasure and objection route,
   via `/support` and the portal toggle (Art. 21 / Art. 17), honoured unless
   documented compelling legitimate grounds under Art. 21(1) apply. Verified in
   code: opt-out suppresses the dossier **and** stops collection
   (`relay.py:1505-1511`, `1738-1766`).
3. Hard 12-month rolling retention cap, then hard delete.
4. **Automated action exists and is bounded, but the network is no longer
   advisory-only.** The safeguard that used to sit here, "no Art. 22 automated
   decision", **no longer exists and should not be claimed.** What actually
   constrains the two automated paths is:
   - **Off by default, opt-in per server, and revocable at any time.** Neither path
     acts anywhere the server has not deliberately switched it on
     (`bot.py:712`, `696`).
   - **Plan and permission gating.** Auto-protect is full Premium only, re-checked
     at action time so a lapsed plan stops acting immediately (`bot.py:9875`).
     Both paths need Manage Server or above to enable (`bot.py:39704`, `41204`).
   - **Fail-safe on uncertainty.** No record, a relay outage, a suppressed dossier,
     or missing permissions all resolve to no ban (`bot.py:9887-9892`).
   - **A conservative default threshold.** Auto-protect defaults to `high`, meaning
     serious and corroborated across two or more independent servers
     (`bot.py:9809`, `relay.py:1463-1464`).
   - **A high bar on the alt-guard side, in practice a shared profile picture.**
     Score 70 with a strong signal, which the arithmetic restricts to the avatar
     route (`bot.py:8618`, `8587-8605`).
   - **Human review after the fact, through `/support` and the portal, open to
     anyone whether or not they were notified**, plus the ban-reason DM and staff
     reply route on the alt-guard path.
   - **Audit and staff visibility.** Both paths write a mod-log record and post a
     staff notice (`bot.py:8635-8654`, `9911-9927`).

   **What is not a safeguard, recorded so it is not mistaken for one:** there is no
   floor under the auto-protect threshold, no human confirmation step on either
   path, no notice at all to the person on the auto-protect path, and no mechanism
   preventing an automated ban from becoming a cross-server signal.
5. Anti-poisoning: server-standing weighting, N >= 2 corroboration, and the power
   to discount or suspend a manipulating server.
6. No **server** opt-out, disclosed plainly as the cost of a core network-effect
   feature, with the individual opt-out in #2 carrying the data subject's side.

### B3.5 Balancing conclusion (replaces `threat-network-PIA-LIA.md:422-448`)

**The interest is still legitimate and the processing is still necessary. The
balance is closer than it was, and it now has to be struck against automated action
rather than against advice.**

The purpose test (B1) and the necessity test (B2) are unaffected by automated
action, with one correction: B2's parenthetical "advisory-only (no automated
decision-making)" is wrong and must go. Pooling remains necessary for cross-server
recognition of serial abusers. Automated action is not necessary for that purpose:
it is a **convenience for the participating server**, sparing staff the work of
acting on a signal they have already been shown. That distinction matters, because
a safeguard given up for convenience weighs differently in the balance than one
given up out of necessity.

**On balance, the legitimate interest is still not overridden**, on the current
defaults and gating. The processing that most affects the data subject is off unless
a server deliberately turns it on, the default threshold is the conservative one,
and there is a real route to a human afterwards. But the conclusion is now
**conditional on facts a server controls rather than facts the operator controls**,
and it should be recorded that way rather than as a settled pass.

**The residual risk, stated without softening:**

1. **A person who has never been banned anywhere can be banned on arrival because
   of their avatar.** The strongest alt-guard signal is a shared profile picture.
   A picture is not a person. Avatars are copied, reused from the same public
   sources, adopted from a shared community, or simply set to the same popular
   image by two unconnected people. The scoring treats this as the strong signal,
   and the supporting signals that push it over 70 (a new account, a recent
   offence on the stored record) are properties that a genuinely new and innocent
   member very commonly has. The bar for the most consequential automated action
   the product takes is therefore, in the ordinary case, **an image match plus
   being new.** No human sees the case first.
2. **Automated action can manufacture its own evidence.** An alt-guard auto-ban is
   emitted to the network as a `serious` signal (`bot.py:9953`, `4097-4098`), and
   two of them from independent servers produce the `high` band that triggers
   auto-protect elsewhere (`relay.py:1463-1464`). The network cannot distinguish an
   automated ban from a staff ban, because `altguard_match` is never set
   (`bot.py:9953`). A person wrongly auto-banned twice on an avatar match acquires
   a cross-server record that reads exactly like a corroborated serious offender's,
   and it will be acted on automatically by servers that never saw the original
   matches. This is the most serious residual and it is currently unmitigated.
3. **The threshold floor is gone.** Owner directive, 2026-06-22. A server may set
   auto-protect to `low`, at which a single minor signal from a single server, one
   kick or one warning, bans on sight (`relay.py:1467`, `bot.py:9891`). At that
   setting corroboration, which is the safeguard the rest of this assessment leans
   on hardest, does no work at all. The command warns the administrator and places
   responsibility on them (`bot.py:41242-41247`). That is a fair allocation between
   operator and customer, but it is **not** a safeguard for the data subject, who
   is not party to that allocation and cannot see what level a server has chosen.
4. **The auto-protect path gives the affected person no notice.** They are banned
   silently. Art. 22(3) requires at minimum the ability to obtain human
   intervention, express a point of view, and contest the decision. That route
   exists, but a person who does not know a decision was made, or that it was
   automated, is unlikely to exercise it. The operator directive behind the silence
   (do not tip off a flagged actor, 2026-06-22) is a genuine security rationale, and
   it trades directly against Art. 22(3) effectiveness. Both halves of that trade
   should be recorded, not just the rationale.
5. **Notice on the alt-guard path is conditional and can fail silently.** The DM
   depends on `ban_appeals_enabled` remaining on and on the person accepting DMs
   (`bot.py:8845`, `8886-8890`). The staff alert depends on a log channel or staff
   chat being configured (`bot.py:8635-8637`). A server with neither set, and with
   ban appeals off, will auto-ban a joining member with **nobody notified at all**,
   neither the person nor the staff.
6. **Art. 22(2) is not squarely satisfied by any of the three gates.** The
   processing is not necessary for a contract with the data subject, who has no
   contract with the operator. It is not authorised by Union or Member State law.
   It does not rest on the data subject's explicit consent. The honest position is
   that the operator relies on the safeguards, the opt-out, and the after-the-fact
   human route, rather than on a clean Art. 22(2) exemption. **This is the single
   point on which qualified legal advice would be most useful**, and it was not
   part of what was signed off tonight.

**Conclusion.** The balance passes on the current configuration, and the passing is
narrower and more contingent than the previous text implied. It should be re-run
again if the default threshold changes, if either path is made on by default, if the
alt-guard scoring or its 70 threshold changes, or if the chaining in residual 2 is
left unaddressed.

### B3.6 Article 22 position (new)

Both automated paths are decisions based solely on automated processing. Whether
being banned from a Discord community is a "similarly significant effect" is
arguable rather than settled, and the operator has chosen not to argue it: the
published Privacy Policy applies Art. 22 safeguards to both paths and extends
equivalent care to all users regardless of jurisdiction (`privacy.md:345`). This
assessment adopts the same posture. Treating the effect as significant is the
conservative reading and it costs nothing to hold.

Measures in place against Art. 22(3):

- Disclosure of the existence and general logic of the automated decision-making,
  in the Privacy Policy (`privacy.md:341`, `343`, `345`).
- A standing route to human intervention, to express a point of view, and to
  contest, via the portal or `/support`, open to anyone whether or not they were
  individually notified (`bot.py:41263-41265`).
- On the alt-guard path only, individual notification through the ban-reason DM and
  a reply that reaches that server's staff.
- Correction and erasure on the same terms as the rest of the policy, subject to
  the published compelling-grounds safety exception.

Measures **not** in place, recorded honestly:

- No human confirmation before either action.
- No individual notification at all on the auto-protect path.
- No floor under the threshold a server may set.
- No barrier between an automated ban and the cross-server record it creates.

---

## Discrepancies found between the published policy and the code

Reported because `privacy.md` was published hours ago and these would be live
inaccuracies. **None has been changed.**

1. **`privacy.md:341` is absolute where the code is not.** It says auto-protect
   "**never** acts on anyone who has **opted out** of network profiling." Where an
   operator-set safety exception is in force and the record is serious and
   corroborated, the relay returns the dossier unsuppressed (`relay.py:1740-1757`),
   and `_threatnet_autoban_check` never inspects `safety_exception` or
   `compelling_grounds` (`bot.py:9888`), so the ban proceeds. `privacy.md:345`
   qualifies this correctly ("subject only to the published compelling-grounds
   safety exception"), so the policy contradicts itself four lines apart. The fix is
   to soften the absolute at 341, or to make the code honour the absolute by
   checking the exception flag. **This is a pillar decision, not a wording tidy.**
2. **`privacy.md:343` says "Staff are alerted either way".** The alert is sent only
   if a log channel or a staff chat is configured (`bot.py:8635-8637`). With neither
   set, no alert is sent to anyone.
3. **An alt-guard auto-ban feeds the cross-server network, and this is disclosed
   nowhere.** `privacy.md:343` says alt-guard "is local to one server and uses no
   network data at all". That is true of its **inputs** and silent about its
   **outputs**: the ban emits a `serious` ThreatNet signal (`bot.py:9953`,
   `4097-4098`). A reader would not learn that an automated local ban becomes part
   of their cross-server record.
4. **The "fingerprint-match boolean" is inert.** `privacy.md:224` and the LIA's own
   B3.1 (`:368`) both list it among the signals the network carries.
   `_emit_threat_signal` accepts `altguard_match` (`bot.py:4144`) but **no call site
   anywhere in `bot.py` ever passes True**, so it is always False on the wire, and
   the dossier modifier that renders it (`bot.py:37360-37361`) can never fire. The
   documents describe a signal that does not exist in practice.

Two further inaccuracies that are not in the policy but bear on it:

5. **`bot.py:39712`, the `/altguard status` help text, overstates the auto-ban
   condition.** It tells administrators a confident match is "reused custom avatar,
   **or a near-identical name on a fresh account**". A near-identical name on a
   fresh account scores 40 + 15 = 55, or 65 with a recent offence, and can never
   reach 70. `privacy.md:343` gets this right; the bot's own copy does not. An
   administrator enabling the feature is being told it is broader than it is.
6. **`bot.py:9804-9807`, the comment heading the auto-protect block, is stale and
   states the opposite of the code beneath it.** It claims "a hard 'high' floor",
   removed by owner directive on 2026-06-22 and contradicted at `bot.py:9882-9883`,
   and "The banned user is told it was an automated decision and how to contest it
   (GDPR Art. 22)", contradicted at `bot.py:9894-9897` where the ban is silent by
   design. Not customer-facing, but it is the comment the next session will read and
   believe.
