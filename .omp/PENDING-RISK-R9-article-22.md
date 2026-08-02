# DRAFT, awaiting owner sign-off: new risk-register entry R9 (Article 22)

**Status: DRAFT. Nothing here has been applied.** This file proposes a new entry for
`.omp/RISK-REGISTER.md`. That file has **not** been edited. Core pillar, needs the
owner's sign-off first, per this repo's `CLAUDE.md`.

**Prepared 2026-08-02.** Verified against `server-assistant@7eac827` (`BOT_VERSION`
6.111.0) and `sa-relay@743e266` (`RELAY_VERSION` 1.11.85). The companion draft
re-running the LIA balance is `.omp/PENDING-LIA-article-22.md`.

**Placement.** Insert after R8, keeping IDs stable as the register's ordering note
requires. R9 is proposed at **HIGH**, which changes the severity ordering line at
`RISK-REGISTER.md:26-28` to:

> **R2 (HIGH) approx R3 (HIGH) approx R4 (HIGH) approx R9 (HIGH) > R5 (MEDIUM)
> approx R6 (MEDIUM) > R8 (LOW/MEDIUM) approx R1 (LOW/MEDIUM) > R7 (LOW).**

Three consequential edits elsewhere in the register would follow from accepting
this entry, and are noted at the end.

---

## Proposed text

## R9: Solely-automated bans (GDPR Art. 22), **HIGH**

> Heading note: R1 to R8 separate their parts with em-dashes. The no-em-dash house
> rule (owner directive, 2026-08-01) applies to new writing, and existing copy is
> deliberately left alone rather than swept, so this heading uses a colon and a
> comma instead. If you would rather R9 match its neighbours exactly, that is a
> one-character change and the rule's own wording allows the owner to make it.

**What it is.** The product takes two kinds of automated decision that exclude a
person from a community with no human involved, and until tonight neither the LIA
nor this register acknowledged that any such decision existed.

- **ThreatNet auto-protect.** A full-Premium server may switch on automatic banning
  at a cross-server risk threshold **it** chooses (`bot.py:9863`, gate at `9873`,
  threshold at `9884`). The **hard "high" floor was removed by owner directive on
  2026-06-22**, so a server may set the trigger as low as `low`, at which a single
  minor signal from a single server, one kick or one warning, bans a joining account
  on sight (`relay.py:1467`, `bot.py:9891`, `41196`). The ban is **silent toward the
  affected person**: no DM, no notice (`bot.py:9894-9897`).
- **Alt-guard auto-ban.** A server that has run `/altguard on` automatically bans a
  joining account that scores 70 or more with a strong signal
  (`bot.py:8618`, `8621`). The arithmetic restricts the strong route in practice to
  a **shared profile picture** plus one supporting signal such as a new account
  (`bot.py:8587-8605`). A picture is not a person. **A person who has never been
  banned anywhere can be banned on arrival because of their avatar, with no human
  in the loop.** Fingerprint recording is unconditional and happens on every server
  regardless of the switch (`bot.py:9947`, `9949`, `15608`, `39433`); only the
  acting on it is opt-in.

**The two paths chain, and nothing stops them.** An alt-guard auto-ban is not marked
the way a ThreatNet auto-ban is, so it falls through to `_emit_threat_signal`
(`bot.py:9945-9953`), and every ban maps to the **top** severity band
(`bot.py:4097-4098`). Two independent servers auto-banning the same account on an
avatar match therefore produce the `high` cross-server band
(`relay.py:1463-1464`) that is the **default** trigger for auto-protect elsewhere
(`bot.py:9809`). Automated action manufactures the exact input for further automated
action, with no human anywhere in the chain. The relay cannot even tell the two
apart, because the `altguard_match` flag is never set by any call site
(`bot.py:9953`, default at `4144`). The existing circular-amplification guard
(`bot.py:9940-9948`) was written for ThreatNet's own bans and does not cover this.

**Why it is HIGH.** Art. 22(1) restricts decisions based solely on automated
processing that produce legal effects or similarly significant effects. None of the
three Art. 22(2) gates fits cleanly: there is no contract with the data subject, no
Union or Member State authorisation, and no explicit consent. The operator's
position rests on the safeguards, the opt-out, and after-the-fact human review
rather than on an exemption. Alongside that, the removed threshold floor means the
false-positive rate is set by each customer rather than by the operator, and the
alt-guard evidence bar is an image match.

**What has been done to mitigate.**

- Both paths are **off by default** and opt-in per server (`bot.py:696`, `712`).
- Auto-protect is **full Premium only, re-checked at action time**, so a lapsed plan
  stops acting immediately (`bot.py:9875`), and both paths need Manage Server or
  above (`bot.py:39704`, `41204`).
- **Fail-safe on uncertainty**: no record, relay outage, suppressed dossier, or
  missing permissions all resolve to no ban (`bot.py:9887-9892`).
- **Conservative default threshold** of `high`, serious and corroborated across two
  or more independent servers (`bot.py:9809`).
- **Opt-out is honoured and stops collection, not merely disclosure**
  (`relay.py:1505-1511`, `1738-1766`).
- **Disclosed in the Privacy Policy**, which applies Art. 22 safeguards to both
  paths and offers human review, contest, correction and erasure via the portal or
  `/support`, open to anyone whether or not they were notified
  (`privacy.md:341`, `343`, `345`). Published 2026-08-02 on the owner's sign-off.
- On the alt-guard path only, the affected person gets the ban-reason DM and a
  single reply that reaches that server's staff (`bot.py:8845`, `9962`).
- Audit trail and staff notice on both paths (`bot.py:8635-8654`, `9911-9927`).

**Residual, stated without softening.**

1. **No human confirmation before either action.** The only human is downstream of
   the ban.
2. **The auto-protect path notifies nobody.** The affected person learns only that
   they are banned, never that a decision was made about them or that it was
   automated. Art. 22(3) rights they do not know they have are rights they will not
   use. The operator directive behind the silence (do not tip off a flagged actor,
   2026-06-22) is a genuine security rationale that trades directly against this.
3. **No floor under the threshold.** At `low`, corroboration, the safeguard the rest
   of the assessment leans on hardest, does no work. The `/threatnet` command warns
   the administrator and assigns them responsibility (`bot.py:41242-41247`), which
   allocates risk fairly between operator and customer but protects the data
   subject not at all, since they are not party to it and cannot see the level a
   server chose.
4. **Automated bans become cross-server evidence.** Residual 2 of the LIA draft.
   Unmitigated.
5. **Alt-guard notice can fail silently in both directions.** The DM depends on
   `ban_appeals_enabled` and on open DMs (`bot.py:8845`, `8886-8890`); the staff
   alert depends on a configured log or staff channel (`bot.py:8635-8637`). A server
   with neither, and appeals off, auto-bans a joining member with nobody told.
6. **`privacy.md:341` overstates the opt-out** as absolute ("never acts on anyone
   who has opted out"), while the safety-exception path can return an unsuppressed
   dossier (`relay.py:1740-1757`) that `_threatnet_autoban_check` acts on without
   inspecting the exception flag (`bot.py:9888`). `privacy.md:345` qualifies it
   correctly, so the published policy conflicts with itself four lines apart.

**What still needs a lawyer or the owner.**

- **Lawyer:** whether exclusion from a Discord community is a "similarly significant
  effect", and which if any Art. 22(2) gate the operator can rely on. This is the
  question tonight's sign-off did not answer, and it is the one most likely to
  change the product rather than the wording. The owner published the Art. 22
  disclosure on 2026-08-02 **without lawyer review**, knowingly (see the decision
  log). Removing the threshold floor raises the value of that outstanding review
  rather than lowering it.
- **Owner:** whether the removed floor stays removed; whether alt-guard's auto-ban
  should require staff confirmation; whether an alt-guard auto-ban should be barred
  from emitting a network signal; and whether `privacy.md:341` is corrected in
  wording or in code.

---

## Consequential edits elsewhere in the register, if R9 is accepted

1. **The ordering note (`RISK-REGISTER.md:26-28`)** gains R9 at HIGH, as set out
   above.
2. **R4 (`:119-149`)** describes the mitigations for a wrongly-flagged individual as
   "advisory-only, conservative tuning, N>=2 corroboration, anti-poisoning"
   (`:131-132`, and again at `:257-259`). Advisory-only is no longer true, and a
   wrongly-flagged individual may now be **banned automatically** rather than merely
   scrutinised. R4's residual rises, and its cross-reference should point at R9.
3. **The bottom-line section (`:226-268`)** says the pass "does not overclaim". That
   remains true only once R9 is in it. As it stands the register's summary describes
   a product that takes no automated action.

The decision-log entry of 2026-08-02 (`:274-308`) already records that the LIA is
stale on this point and that re-running it was deliberately deferred to the owner.
R9 and `.omp/PENDING-LIA-article-22.md` are that re-run, offered for sign-off.
