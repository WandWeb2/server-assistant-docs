# Residual Risk Register — Cross-Server Threat Network privacy/legal pass

**Status:** Internal, build-excluded (`.omp/` is in `_config.yml` → `exclude`).
**Prepared:** 2026-06-21. **Prepared by:** an AI assistant doing a best-effort
compliance pass — **NOT a lawyer.**

> ## Read this first — what this register is and is NOT
> This is a **best-effort, non-lawyer** privacy/legal review standing in for a
> professional review the operator cannot currently afford. It is **honest about
> its limits**. It does **NOT** certify compliance with the Australian Privacy Act,
> the GDPR, or any other law, and it must not be relied on as legal advice. Its job
> is the opposite: to surface, rank, and document the residual risks so the owner
> knows exactly where the exposure is and what a lawyer (or a product change) still
> needs to fix before the Cross-Server Threat Network goes live.
>
> **Jurisdiction:** operator in **Queensland, Australia**, serving **worldwide**.
> **Primary law:** Privacy Act 1988 (Cth) + the 13 APPs. **Secondary:** EU/UK GDPR
> (extraterritorial, Art. 3(2)). Full analysis: `.omp/threat-network-PIA-LIA.md`.

> **Citing code: name the SYMBOL, and treat the line number as a hint.**
> The line references below have now drifted **twice**: they were first written
> against v6.111.0/v6.113.0 of `bot.py` and not re-verified, and v6.114.0 then moved
> the file again by roughly 130 to 310 lines depending on the region. The drift is
> **not uniform**, so no single offset repairs it, and several stale references
> landed on unrelated code that read plausibly, which is worse than landing on
> nothing. Re-verified in full on 2026-08-02 against `BOT_VERSION` **6.114.0** and
> `RELAY_VERSION` **1.11.88**. **When you add or repair a reference, lead with the
> function, constant or setting key**; a symbol survives a refactor and is one grep
> away, a line number is neither. Re-derive a number by searching for the symbol,
> never by adjusting the old number.
>
> **Mixed provenance, 2026-08-02.** The passages rewritten in the v6.114.0 assessment
> update (R5, R8, and R9 throughout) carry line numbers verified against `BOT_VERSION`
> **6.115.0**, as do the auto-protect band constants wherever they appear, which were
> repaired at the same time so the document does not cite one constant at two
> addresses. Everything else is still the 6.114.0 verification and has drifted by
> roughly 2 to 5 lines in most regions. A mismatch between two nearby citations is
> that drift, not one of them being wrong. Re-derive from the symbol.

Severity scale: **CRITICAL** (could block launch / unlawful as designed) ·
**HIGH** · **MEDIUM** · **LOW**.

> **Ordering note (updated 2026-06-21).** Risk **IDs are stable** (other docs
> cross-reference "R1" etc.), but the register is no longer led by R1. After the
> owner's **severity-only design lock**, **R1 re-rates CRITICAL → LOW/MEDIUM**, so
> the current severity ordering is:
> **R2 (HIGH) ≈ R3 (HIGH) ≈ R4 (HIGH) ≈ R9 (HIGH) > R5 (MEDIUM) ≈ R6 (MEDIUM) >
> R8 (LOW/MEDIUM) ≈ R1 (LOW/MEDIUM) > R7 (LOW).**
> The top live exposures are now R2/R3/R4/R9 (exemption-loss assumption, DPIA/PIA
> sign-off, the unbound-third-party/ACL point, and solely-automated bans under
> GDPR Art. 22), **not** R1. **R9 was added 2026-08-02**, when the LIA was re-run
> against automated action.

---

## R1 — Sensitive-information / criminal-offence data — **LOW/MEDIUM** (was CRITICAL; de-risked by the severity-only design)

**What it is.** The original CRITICAL risk: the shared signals included an
offence-type **category band** ("scam/financial") and an offence-tied "repeat
offender" label, which **plausibly were "sensitive information" (criminal-record
limb, s6(1) Privacy Act)** and **criminal-offence data under GDPR Art. 10**. If so,
**AU APP 3.3 would require consent** (which the locked no-opt-out decision cannot
give), and **GDPR Art. 10** would need official authority/Member-State authorisation
a private operator lacks — a potential hard blocker.

**Why it re-rates DOWN to LOW/MEDIUM — a DESIGN change, not wording.** The owner
**locked a severity-only design (2026-06-21)**:
- The **offence type/category no longer crosses servers** — only a **generic
  severity level** (minor / serious) does. A severity level conveys *how serious*,
  never *what the person did*.
- **AI-generated and human-written offence summaries are local-only** — no
  free-text describing alleged wrongdoing is ever pooled.

On this design the cross-server dataset (pseudonymous user ID + counts + recency +
severity level + account-age modifier) is **assessed
NON-sensitive** under s6(1) — not a "criminal record." **APP 3.3 is not engaged, so
no consent is required**; collection rests on **APP 3.2** (reasonably necessary) +
**APP 5** notice + **APP 6** limits. The no-opt-out lock is **no longer in tension**
with a consent requirement, because none arises. Under GDPR, **Art. 10 is now very
unlikely** to be engaged for the same structural reason, so legitimate interest
(Art. 6(1)(f)) per the LIA is a sufficient basis. **This is the durable kind of fix:
the data that crosses the boundary changed, not just the description of it.**

**Corrected 2026-08-02:** that dataset list also carried a **fingerprint-match
boolean** (`altguard_match`). It has not crossed the boundary since **v6.112.0**,
which stopped sending the key at all (the `_emit_threat_signal` payload,
`bot.py:4189-4204`) and removed the dossier line that read it
(`_render_network_threat_value`, `bot.py:37639-37640`). The relay keeps the column at
`DEFAULT 0` (the `threat_signals` schema, `relay.py:706`) and `threat_record_signal`
defaults the field to `False` when it is absent
(`relay.py:27757`). The boundary is narrower than this rating was set against, so
the rating stands unchanged.

**What was done (in the docs).** Propagated the severity-only design through
`privacy.md` (signals list, what-never-crosses list, data-minimisation, legal-basis
section), `terms.md` §6, the PIA+LIA (§A2, §A-RISK, §A4, §B3.1, §B3.5), and this
register. Reframed the lawful basis as APP 3.2 + APP 5 + APP 6 (AU) and operator's
own legitimate interest per the LIA (EU/UK) — **not** server-owner consent. Added the
"minimum necessary personal information" framing (a pseudonymous user ID **is**
personal info — pseudonymous, not anonymous — so the docs no longer claim "no
personal information is shared").

**Residual (honest, LOW/MEDIUM, mostly EU/UK):**
1. **Keep the severity band genuinely generic** — if an offence label ever leaked
   into/alongside it, the sensitive/Art. 10 argument would return. Enforce in
   implementation.
2. **EU/UK Art. 10 boundary is regulator-testable** — a severity signal is *very
   unlikely* to be criminal-offence data, but the line is one a supervisory
   authority could probe. Keep under review; minimise further if challenged. **Not
   a launch blocker on the current design.**
3. **Server-admin onboarding notice** still recommended as good-practice
   transparency (supports APP 5) — now a nice-to-have, no longer a consent patch.

---

## R2 — Small-business exemption probably does NOT apply — **HIGH** (but protective to assume)

**What it is.** Turnover is likely under **AUD $3M**, which would ordinarily exempt
the operator from the APPs (s6D). The network's design — **disclosing personal
information about individuals to other servers for a benefit/service**, and
**providing a service to collect/disclose personal information** — **plausibly
trips s6D(4)/s6E**, removing the exemption. So the operator is **likely bound by
the Privacy Act regardless of size.**

**What I did to mitigate.** Wrote the entire PIA on the assumption the Act
**applies** (the safe posture) and documented the exemption-loss reasoning in
`.omp/threat-network-PIA-LIA.md` §A0.

**What still needs a lawyer.** Confirm s6D(4)/s6E is triggered (run the OAIC small-
business checklist / get advice). **Do not build on the assumption of exemption** —
it's fragile and flips on one design or turnover change.

---

## R3 — GDPR DPIA / Australian PIA not yet completed & signed off — **HIGH**

**What it is.** GDPR Art. 35 makes a **DPIA effectively mandatory** here (large-
scale systematic monitoring + profiling + likely Art. 9/10 data — hits multiple
triggers). The Australian analogue (**PIA**) is OAIC-recommended best practice for
exactly this kind of high-risk project.

**What I did to mitigate.** Produced the **first draft of both** as the combined
`.omp/threat-network-PIA-LIA.md`.

**What still needs a lawyer / owner.** Have the DPIA/PIA **reviewed and signed off**
by a qualified person before launch; treat it as a P0 gate (it already is, per the
spec). Re-run whenever signals/safeguards change.

---

## R4 — A wrongly-flagged END USER is not bound by the Terms — **HIGH**

**What it is.** The no-warranty / liability-cap clauses in `terms.md` bind the
**server owner** who accepts the Terms. A **flagged individual never accepted
them**, so those clauses do **not** disclaim a privacy / misleading-data /
defamation-style complaint brought by that individual. Separately, the **Australian
Consumer Law** prevents excluding certain consumer guarantees/liability by
contract, so the §9 cap may not hold against an Australian consumer.

**What I did to mitigate.** Flagged both points candidly in `terms.md` §6 and noted
that the **real** mitigations are the product design (conservative
tuning, N≥2 corroboration, anti-poisoning) and the **APP 13 correction right**, not
the disclaimer wording. **Corrected 2026-08-02:** that list previously led with
"advisory-only", which is false of the shipped product. See **R9**. **Strengthened 2026-06-21 by the qualified individual
opt-out:** a wrongly-flagged individual now has an **affirmative, advertised way to
stop profiling** (self-service portal toggle, **live since v5.8.0**; corrected
2026-08-02, this previously read "via `/support` now; self-service portal toggle on
the roadmap"), in addition to correction (APP 13) and erasure via `/support` — honoured unless we have
compelling legitimate grounds (a corroborated safety/fraud need) to retain the most
serious signals. This gives the third party real, exercisable recourse that does not
depend on Terms they never signed, **reducing the practical exposure** even though
the *legal* point (Terms don't bind a non-signatory; the ACL cap may not hold)
stands.

**Net rating: still HIGH, and the residual ROSE on 2026-08-02.** The opt-out
plus correction/erasure is a stronger answer to a flagged individual than the
case-by-case-only stance was. The HIGH stays because the unbound-third-party and ACL
points are legal questions a lawyer should still confirm; the durable fixes remain
product-side (accuracy, correction, appeal, opt-out).

**What changed 2026-08-02.** A wrongly-flagged individual may now be **banned
automatically**, on the servers that have enabled either automated path, rather than
merely scrutinised by staff who could catch the error. The unbound third party is
therefore exposed to a worse outcome than this entry originally assessed, and the
"advisory-only" mitigation it leaned on does not exist. See **R9**, which carries
the automated-decision analysis in full.

**What still needs a lawyer / product.** Confirm the residual liability exposure to
flagged third parties; the durable fixes are product-side (accuracy, correction,
appeal, opt-out), not drafting.

---

## R5 — APP 5 notification gap: subjects are collected-about indirectly — **MEDIUM**

**What it is.** The flagged user does not interact with us directly and may never
see the privacy policy, so the APP 5 "notify at collection" obligation is hard to
meet in full.

**What I did to mitigate (NOTICE REFRAME, 2026-06-21).** `privacy.md` serves as the
standing notice. Notice is now framed as the **operator's** responsibility, **not**
the server owner's: the Bot delivers an **in-Discord notice on install**, with an
**on-demand disclosure command forthcoming (roadmap, not yet live)**; server owners
are **encouraged but no longer obliged** to tell members. This replaces the earlier
"owner must notify members" framing in `terms.md`.

**Net rating: still MEDIUM, slightly improved.** Operator-delivered notice on install
is a better "reasonable steps" answer than relying on owners to notify, but subjects
are still collected-about indirectly (the flagged user may never see any notice), so
the gap is reduced, not closed.

**Corrected 2026-08-02: the install notice has SHIPPED, in v6.114.0.** This entry,
and the bottom-line summary, listed it as outstanding product work. Until v6.114.0
both `privacy.md` and `terms.md` committed to an in-Discord notice on install that
the code did not send: `on_guild_join` onboarded and said nothing about the network.
It now sends one (`_threatnet_install_notice_text` builds it, `bot.py:8130`;
`_deliver_threatnet_install_notice` delivers it, `bot.py:8153`, from `on_guild_join`
at `8455` and from the missed-joins reconciliation at `8280`, so servers that
installed while the bot was offline are covered too). It states that the server takes
part, that there is **no server-level opt-out**, that an individual can opt out
self-service in the portal, and links the policy.

**The rating stays MEDIUM, and the reason is the point of this entry.** The notice
goes to the **server**: the inviter, or the owner, or failing both a channel. The
data subjects this risk is about are the flagged members, who are not the recipients
and may still never see any notice. The commitment is now honoured rather than
merely written, which is a genuine improvement to the "reasonable steps" record, but
it improves the *operator's* position more than the *subject's*. If a corrected fact
here argued for anything, it would be a move to LOW, and it does not: nothing about
indirect collection changed.

**What still needs work (product).** Ship the **on-demand disclosure command** per
the roadmap (still not live). Document the "reasonable steps" taken, which now
includes the install notice and its delivery outcomes: the helper never raises and
records `undelivered` for a server with closed DMs and no writable channel, so the
notice is best-effort by design and the published policy remains the standing notice
for those servers.

---

## R6 — APP 8 cross-border accountability is strict (s16C) — **MEDIUM**

**What it is.** Worldwide service + US hosting + overseas sub-processors + disclosing
scores to servers in many countries = ongoing cross-border disclosure. Under APP 8 /
s16C the operator **stays accountable** for overseas recipients' handling.

**What I did to mitigate.** `privacy.md` now states the APP 8 cross-border framing
and the "we remain accountable" position, lists sub-processors and the US hosting
location.

**What still needs work (operational).** Have **DPAs/SCCs on file** for hosting and
sub-processors; document the reasonable-steps assessment.

---

## R7 — "No erasure right" wording must not overclaim — **LOW** (mitigated by drafting)

**What it is.** Earlier draft implied a GDPR-style erasure/objection right as if it
were the baseline. Australian law has **no standalone erasure or objection right**.

**What I did to mitigate.** Re-framed `privacy.md` onto **APP 12 (access) + APP 13
(correction) + APP 11.2 (destroy when no longer needed)**, with a clearly-labelled
**voluntary** case-by-case deletion path offered *above* the statutory floor, and
GDPR Art. 17/21 layered only for EU/UK users. The promise now matches the law.

**Residual.** None material from drafting; just keep the wording from drifting back
into implying a statutory AU erasure right.

---

## R8 — Operationalising `/support` rights handling — **LOW/MEDIUM** (operational)

**What it is.** The access (APP 12), correction (APP 13), **qualified opt-out**, and
deletion/objection promises only protect the data subject if they are **actually
serviced** with a consistent standard and **documented refusals**. The qualified
opt-out (locked 2026-06-21) **raises the operational bar slightly**: opt-out requests
must be honoured promptly, and the **compelling-grounds safety exception** must be
applied **consistently and documented** each time it is invoked — otherwise the
opt-out is a promise on paper only.

**Corrected 2026-08-02.** The opt-out half of that workload is no longer a `/support`
queue: the **self-service portal toggle shipped in v5.8.0** and is now the only
opt-out route (`portal_threat_optout_get` / `portal_threat_optout_set`,
`relay.py:16372-16410`; UI in `renderThreatPref`, `relay.py:20013-20025`), with
`/support` explicitly **not** an opt-out route (the `threatnet` command group's
standing note, `bot.py:41370-41373`). What remains manual, and
what this risk is really about, is **access (APP 12), correction (APP 13), erasure /
objection, and the operator-set safety exception**, which a customer can never set
themselves. The rating is left unchanged.

**"Operator-set" became true in code in v6.114.0, and was aspirational before it.**
This entry, the PIA and the published policy all described the compelling-grounds
exception as the operator's, on the operator's undertaking to demonstrate the grounds
and document the decision. Until v6.114.0 the command enforced only
`_can_manage_server`, so **any** Manage-Server admin in the fleet could set it on any
user, with a free-text reason they typed themselves. It is now gated on
`_is_sa_operator` (`bot.py:8204`, enforced at `bot.py:41438`) and **fails closed**
when the operator's home guild is not in cache. The operational obligation this risk
is about is unchanged and unrelieved: the exception still has to be applied
consistently and its refusals documented, and the population able to create that
obligation is now one person rather than thousands. Rating still unchanged, but note
that the workload this entry describes is now genuinely the operator's alone, where
before it was silently distributed across every customer's admins with no record kept.

**What I did to mitigate.** Documented the required workflow (including the
compelling-grounds standard) in the PIA Part C checklist.

**What still needs work (operational).** Build the triage + decision-standard +
refusal-documentation + SLA before launch. The self-service portal opt-out toggle,
listed here as outstanding, is **done** (v5.8.0).

---

## R9: Solely-automated bans (GDPR Art. 22), **HIGH**

**Added 2026-08-02**, alongside the re-run of the LIA balance against automated
action (`.omp/threat-network-PIA-LIA.md` B3.3 to B3.6).

**What it is.** The product takes automated decisions that exclude a
person from a community with no human involved, and until 2026-08-02 neither the
LIA nor this register acknowledged that any such decision existed.

**Corrected 2026-08-02: this entry counted TWO automated ban paths. There are
THREE.** The two below are the join-time bans, and they are the two this entry was
built around because they are the ones gated by a per-server switch. The third is the
**AutoMod ladder ban**: a server's configurable punishment ladder bans a member once
their **auto-warning counter** crosses a threshold nobody reviews (the `act == "ban"`
branch of `_automod_apply`, `bot.py:15871-15885`). It is the most widely-reachable of
the three by a wide margin, because AutoMod runs on **every server on every plan**
rather than behind an opt-in switch, and because the auto-warnings that feed the
counter are themselves automated: a filter matching a word, escalated by arithmetic,
ending in a ban. It is bounded instead by the server having configured a ban rung on
its ladder at all. Alongside it sit automated actions that are not bans but were
still automated decisions the network was told about until v6.114.0: the **AutoMod
auto-warn**, the **AutoMod ladder kick**, and **automated scam-image enforcement**
(a perceptual-hash match that deletes the message and times the poster out,
`_enforce_image_scam`, `bot.py:17426`).

The Art. 22 analysis below was written against the two join-time paths. Adding the
ladder ban does not change its shape, since the same three Art. 22(2) gates fail for
the same reasons and there is no human before any of them, but it materially widens
the population exposed, and the residuals are re-stated accordingly.

- **ThreatNet auto-protect.** A full-Premium server may switch on automatic banning
  at a cross-server risk threshold **it** chooses (`_threatnet_autoban_check`,
  `bot.py:10071`; the `threatnet_autoban_enabled` gate at `10081`; the threshold read
  at `10093`). The **hard "high" floor was removed by owner directive on
  2026-06-22**, which left `low` selectable, at which a single minor signal from a
  single server, one kick or one warning, banned a joining account on sight (the
  `low` fall-through in `_threat_band`, `relay.py:1470`, acted on by the band
  comparison in `_threatnet_autoban_check`, `bot.py:10101`; the `low` choice itself
  was removed from the `/threatnet autoban` picker in v6.112.0 and no longer exists
  in `bot.py`). **A floor was restored at `elevated` by
  owner decision on 2026-08-02, shipped in v6.112.0** (`_THREATNET_AUTOBAN_FLOOR_BAND`,
  `bot.py:10004`, normalised on every read by `_threatnet_autoban_band`,
  `bot.py:10007-10020`), so the two selectable bands are now `high` and
  `elevated` (the `level` choices on `threatnet_autoban`, `bot.py:41506-41509`) and a
  server can no longer cause a ban on a
  single uncorroborated record. The operating point above that floor is still the
  server's to choose: see residual 3. The ban is **silent toward the affected
  person**: no DM, no notice (`bot.py:10104-10107`).
- **Alt-guard auto-ban.** A server that has run `/altguard on` automatically bans a
  joining account that scores 70 or more with a strong signal (`_altguard_handle`:
  the `auto` test at `bot.py:8798`, the `guild.ban` call at `8803`). The arithmetic
  restricts the strong route in practice to
  a **shared profile picture** plus one supporting signal such as a new account
  (the scoring in `_altguard_match`, `bot.py:8729-8750`). A picture is not a person.
  **A person who has never been
  banned anywhere can be banned on arrival because of their avatar, with no human
  in the loop.** Fingerprint recording is unconditional and happens on every server
  regardless of the switch (`_record_offender` calls in `on_member_ban`,
  `bot.py:10162` and `10164`; the AutoMod ladder kick at `15888`; `/kick` at
  `39718`); only the
  acting on it is opt-in.

**The paths chained, and nothing stopped them (fixed in v6.112.0 and v6.114.0, see
residual 4).** As originally assessed, and stated here in the past tense because
those releases changed it: an alt-guard auto-ban **was** not marked the way a
ThreatNet auto-ban is,
so it fell through to `_emit_threat_signal`, and every ban maps to the **top**
severity band (`_threat_severity_band`, `bot.py:4116-4117`). Two independent servers
auto-banning the same account on an avatar match therefore produced the `high`
cross-server band (`_threat_band`, `relay.py:1466-1467`) that is the **default**
trigger for auto-protect elsewhere (`_THREATNET_AUTOBAN_DEFAULT_BAND`,
`bot.py:9996`). Automated action manufactured the exact input for further automated
action, with no human anywhere in the chain. The relay could not tell the two apart
either. **Corrected 2026-08-02:** the reason given for that was "the `altguard_match`
flag is never set by any call site", which understates the current position. Since
v6.112.0 the field is **not sent at all**: the key was removed from the signal
payload (`_emit_threat_signal`, `bot.py:4189-4204`) and from the dossier line that
read it (`_render_network_threat_value`, `bot.py:37639-37640`); the relay holds the
column at `DEFAULT 0` (the `threat_signals` schema, `relay.py:706`) and
`threat_record_signal` defaults the field to `False` when it is absent
(`relay.py:27757`). The existing
circular-amplification guard was written for ThreatNet's own bans and did not cover
this.

**Corrected again 2026-08-02: the chain was wider than "the two paths".** Framing
this as alt-guard feeding auto-protect described the narrowest version of the
problem, because it looked only at what could **ban**. Four further automated actions
were emitting into the same pool with no human in them, and the **AutoMod ladder ban**
fed the chain on exactly the same terms as alt-guard: it reached `on_member_ban`
indistinguishable from a ban a moderator clicked, and every ban maps to the top
severity band, so two ladder bans on two servers produced the same `high` band that
triggers auto-protect on a third. Because AutoMod is on for every server on every
plan, it did so at fleet volume rather than behind an opt-in switch. The **AutoMod
auto-warn** was, by the bot's own note, the highest-volume emitter in the product;
the **AutoMod ladder kick** and **automated scam-image enforcement** emitted on the
same footing. **v6.114.0 stopped all four**, on a stated rule: the line is **who made
the decision**, not which feature acted. Detail and symbols:
`.omp/threat-network-PIA-LIA.md` B3.5 residual 2.

**Why it is HIGH.** Art. 22(1) restricts decisions based solely on automated
processing that produce legal effects or similarly significant effects. None of the
three Art. 22(2) gates fits cleanly: there is no contract with the data subject, no
Union or Member State authorisation, and no explicit consent. The operator's
position rests on the safeguards, the opt-out, and after-the-fact human review
rather than on an exemption. Alongside that, the threshold floor restored at
`elevated` on 2026-08-02 still leaves the operating point above it to each customer,
so the false-positive rate is set per server rather than by the operator, and the
alt-guard evidence bar is an image match. **Add to that the third ban path:** the
AutoMod ladder ban reaches every server on every plan, and it is the one path where
even the *inputs* to the decision were automated, since the counter it fires on is a
tally of auto-warnings a filter issued. **The rating stays HIGH**, and nothing in the
v6.114.0 update moves it, because what drives it is the unresolved Art. 22(2) gate
and the absence of a human before an automated ban. Counting a third path can only
make that worse, never better.

**What has been done to mitigate.**

- The **join-time** paths are **off by default** and opt-in per server: the
  `threatnet_autoban_enabled` and `altguard_enabled` settings both default `False`
  (`bot.py:698`, `714`). **This does not extend to the ladder ban**, which is a rung
  on the AutoMod punishment ladder rather than a switch, and AutoMod runs everywhere.
  What bounds it is the server having configured a ban rung at all, which is a
  weaker bound and a customer-side one.
- Auto-protect is **full Premium only, re-checked at action time**, so a lapsed plan
  stops acting immediately (the `is_premium_full` test inside
  `_threatnet_autoban_check`, `bot.py:10088`), and both join-time paths need Manage
  Server or above (`slash_altguard`, `bot.py:39989`; `threatnet_autoban` via
  `_can_manage_server`, `bot.py:41516`). The ladder is configured under the same
  Manage-Server class of permission, but the ban itself is not separately gated.
- **The compelling-grounds safety exception is the OPERATOR's alone since v6.114.0**
  (`_is_sa_operator`, `bot.py:8204`, enforced on the `safety_exception` argument of
  `threatnet_admin`, `bot.py:41438`), and it **fails closed** when the operator's
  home guild is not in cache. Until then any actor passing `_can_manage_server`
  could set it, on a self-typed free-text reason, with nobody reviewing it. This
  matters to Art. 22 and not only to R8's operational bar: an exception returns an
  **unsuppressed** dossier for an opted-out user, and `_threatnet_autoban_check`
  acts on that without inspecting the exception flag, so a server admin could
  previously undo a stranger's opt-out far enough to expose them to an automated
  ban. Reading the flag stays open to server staff; only setting it moved.
- **An in-Discord install notice ships since v6.114.0**
  (`_threatnet_install_notice_text` / `_deliver_threatnet_install_notice`,
  `bot.py:8130`, `8153`; from `on_guild_join` at `8455` and the missed-joins
  reconciliation at `8280`), covering participation, the absence of a server-level
  opt-out, the individual portal opt-out and a policy link. **Counted honestly, it is
  a transparency mitigation and not an Art. 22(3) one:** it reaches the server, not
  the person a decision is made about. It moves R5 and the PIA's A3
  reasonable-steps position; it does not move residual 2 below.
- **Fail-safe on uncertainty**: no record, relay outage, suppressed dossier, or
  missing permissions all resolve to no ban (`_threatnet_autoban_check`,
  `bot.py:10096-10102`, and the `discord.Forbidden` branch at `10113-10116`).
- **Conservative default threshold** of `high`, serious and corroborated across two
  or more independent servers (`_THREATNET_AUTOBAN_DEFAULT_BAND`, `bot.py:9996`).
- **Opt-out is honoured and stops collection, not merely disclosure** (the write
  guard in `_threat_record_signal`, `relay.py:1559-1561`; the read suppression in
  `_threat_dossier`, `relay.py:1741-1769`).
- **Disclosed in the Privacy Policy**, which applies Art. 22 safeguards to both
  paths and offers human review, contest, correction and erasure via the portal or
  `/support`, open to anyone whether or not they were notified. Published
  2026-08-02 on the owner's sign-off.
- On the alt-guard path only, the affected person gets the ban-reason DM and a
  single reply that reaches that server's staff (`_send_ban_appeal`, gated on
  `ban_appeals_enabled` at `bot.py:9024` and invoked from `on_member_ban` at
  `10190`; the reply is captured by `_try_capture_appeal` at `9255` and posted to
  staff by `_post_appeal_ticket` at `9767`).
- Audit trail and staff notice on both paths (`_altguard_handle`,
  `bot.py:8814-8833`; `_threatnet_autoban_check`, `bot.py:10121-10137`),
  **subject to a log or staff channel actually being configured** (the `dest_id`
  lookup in `_altguard_handle`, `bot.py:8814-8816`).

**Residual, stated without softening.**

1. **No human confirmation before any of the three automated bans.** The only human
   is downstream of the ban. Unchanged by v6.112.0 and v6.114.0, and it is half of
   what drives the HIGH rating.
2. **The auto-protect path notifies nobody.** The affected person learns only that
   they are banned, never that a decision was made about them or that it was
   automated. Art. 22(3) rights they do not know they have are rights they will not
   use. The operator directive behind the silence (do not tip off a flagged actor,
   2026-06-22) is a genuine security rationale that trades directly against this.
3. **The floor was restored at `elevated` in v6.112.0, and this residual is
   narrowed rather than closed.** As originally assessed there was no floor at all:
   at `low` a single uncorroborated record from one server banned on sight, so
   corroboration, the safeguard the rest of the assessment leans on hardest, did no
   work. Owner decision 2026-08-02 put a floor back at `elevated` rather than the
   original `high`, so a server can still go broader than the default but cannot act
   on a lone record. Enforced at both ends: `low` is gone from the `/threatnet
   autoban` choices and the settings picker, and every read of
   `threatnet_autoban_min_band` normalises through `_threatnet_autoban_band()`,
   which raises a stored `low` to `elevated`. That read-side normalisation is the
   migration for servers that had already chosen `low`. **What remains:** the
   customer still chooses the operating point above that floor, so the
   false-positive rate is still set per server rather than by the operator, and the
   `/threatnet` warning that assigns the administrator responsibility (the `warn`
   string in `threatnet_autoban`, `bot.py:41550-41556`) still protects the data
   subject not at all, since they are
   not party to it and cannot see the level a server chose.
4. **Automated action becomes cross-server evidence. LARGELY CLOSED, and re-stated
   2026-08-02 because the earlier resolution was written too early.** Residual 2 of
   the LIA's B3.5.

   **What this said before, and why it was premature.** It was struck through and
   marked RESOLVED on the strength of the **alt-guard** fix alone (`v6.112.0`:
   `_altguard_recent_autoban` plus a mark/consume pair mirroring the ThreatNet one,
   marked before the ban because the gateway event can land mid-await, cleared if the
   ban is refused). That fix is real and still stands. But the residual it was
   resolving is headed *automated bans become cross-server evidence*, and at the
   moment it was struck through **four other automated actions were still emitting**,
   including a **third ban path**. A resolution true of one path was left reading as
   true of all of them, on the entry that most needed to be read precisely. That is
   the recurring defect in these documents, appearing here inside the fix for it.

   **What is actually true now.** Since **v6.114.0**, no automated action emits a
   cross-server signal. The AutoMod ladder ban carries the same mark/consume shape as
   the two join-time bans (`_automod_recent_autoban`, `bot.py:15795-15814`); the
   AutoMod auto-warn, the AutoMod ladder kick and automated scam-image enforcement no
   longer call `_emit_threat_signal` at all. Only the crossing is suppressed in every
   case: the staff alert, the local offender or warning record, the mod-log row and
   the ban-appeal DM all still happen, and what a **human** types still emits exactly
   as before. The three ban marks are time-boxed to 120s so a stale one cannot
   silence a genuine staff decision later. Symbols and line references:
   `.omp/threat-network-PIA-LIA.md` B3.5 residual 2.

   **Why "largely closed" and not "resolved".** Two things remain, and neither is
   cosmetic. (a) The three **ban** suppressions are **in-process state**, so a
   restart landing between the mark and the `on_member_ban` event still lets that
   emit through. It is a narrow window and an ordinary one: a deploy is a restart,
   and the fleet deploys often. (b) None of it **unwinds** what was already
   manufactured. Records created by automated action before v6.112.0 and v6.114.0 are
   still on the network, still reading as staff judgement, and still corroborating
   automated decisions elsewhere, until the 12-month retention cap reaches them. The
   feedback loop is cut going forward; it is not undone.

   `privacy.md` was updated to the alt-guard behaviour on 2026-08-02, replacing the
   paragraph that had correctly disclosed the old one. **Open question for the
   owner:** whether the published policy should also describe the wider v6.114.0
   suppression, which is a customer-facing copy change and outside this update.
5. **Alt-guard notice can fail silently in both directions.** The DM depends on
   `ban_appeals_enabled` and on open DMs (`_send_ban_appeal`: the toggle gate at
   `bot.py:9024`, the `discord.Forbidden` / `HTTPException` fall-through to
   `dm_failed` at `9065-9069`); the staff
   alert depends on a configured log or staff channel (the `dest_id` lookup in
   `_altguard_handle`, `bot.py:8814-8816`). A server
   with neither, and appeals off, auto-bans a joining member with nobody told.
6. **`privacy.md` previously overstated the opt-out** as absolute ("never acts on
   anyone who has opted out"), while the safety-exception path can return an
   unsuppressed dossier (the `suppressed: False` branch of `_threat_dossier`,
   `relay.py:1743-1760`) that `_threatnet_autoban_check` acts
   on without inspecting the exception flag (`bot.py:10103`). **Corrected in wording
   on 2026-08-02**, not in code: the policy now carries the qualification in both
   places. The code still does not consult the exception flag.

   **Narrowed in v6.114.0, on the other end of the same mechanism.** Who can *set*
   the exception changed: it is now the **operator's alone** (`_is_sa_operator`,
   `bot.py:8204`, enforced on the `safety_exception` argument of `threatnet_admin`,
   `bot.py:41438`), and the check **fails closed** if the operator's home guild is
   not in cache. Before that, any actor passing `_can_manage_server` could set it on
   any user, with a free-text reason they typed themselves and nobody reviewing it,
   which meant a customer's own admin could turn a stranger's opt-out into an
   unsuppressed dossier that auto-protect would then act on elsewhere. That route is
   closed. **What is not changed:** `_threatnet_autoban_check` still does not consult
   the exception flag, so where the operator does set one, an opted-out person can
   still be auto-banned on a dossier their opt-out would otherwise have suppressed.
   The population who can trigger that shrank from every Manage-Server admin in the
   fleet to one person who is accountable for documenting it. The code-level fix
   asked for below is still outstanding.

**What still needs a lawyer or the owner.**

- **Lawyer:** whether exclusion from a Discord community is a "similarly significant
  effect", and which if any Art. 22(2) gate the operator can rely on. This is the
  question the 2026-08-02 sign-off did not answer, and it is the one most likely to
  change the product rather than the wording. The owner published the Art. 22
  disclosure on 2026-08-02 **without lawyer review**, knowingly (see the decision
  log). The threshold floor has since been restored at `elevated` (2026-08-02,
  v6.112.0), which narrows but does not remove the customer-set exposure, so that
  outstanding review keeps its value rather than losing it. **Targeted advice on the
  Art. 22(2) question has since been sought and is outstanding** (decision log,
  2026-08-02). **Note for whoever briefs them:** the brief should describe **three**
  ban paths, not two. The earlier framing would have understated the exposed
  population by omitting the one path that runs on every server on every plan.
- **Owner:** two of the questions previously listed here are **answered**. The floor
  question, by the 2026-08-02 decision to restore it at `elevated` rather than the
  original `high` (residual 3). And "whether an alt-guard auto-ban should be barred
  from emitting a network signal", by v6.112.0 and then v6.114.0, which barred it and
  then barred every other automated action too (residual 4). Still open:
  whether alt-guard's auto-ban should require staff confirmation; whether the AutoMod
  **ladder ban** should, given it reaches every server and fires on a counter of
  automated warnings; whether
  the `privacy.md` opt-out absolute is additionally corrected **in code** now that
  it has been corrected in wording; and whether the published policy should describe
  the wider v6.114.0 emit suppression rather than only the alt-guard half of it.

---

## Bottom line for the owner (what changed, and what still bites)

**The biggest single risk (R1) has been retired by design, not wording.** The
owner's **severity-only lock** — offence type/category off the cross-server wire,
offence summaries local-only — moves the sensitive-information / criminal-offence
question from CRITICAL to a managed LOW/MEDIUM residual. The consent gap that the
no-opt-out lock used to create **no longer arises**, because the cross-server data
is non-sensitive (AU) and very unlikely to be Art. 10 data (GDPR), so no consent is
required; the basis is APP 3.2 + APP 5 + APP 6 (AU) and the operator's own
legitimate interest per the LIA (EU/UK).

**Second improvement — the qualified individual opt-out (locked 2026-06-21).**
Servers still cannot opt out (core functionality), but the **individual** can now
opt out of profiling (**self-service portal toggle, live since v5.8.0**; corrected
2026-08-02, this previously read "via `/support` now; self-service portal toggle on
the roadmap"), subject to a **compelling-grounds safety exception** (verified
raid/scam/ban-evasion → most serious signals may be retained, so bad actors can't
opt out to evade detection). This **supersedes the old "no opt-out UI / case-by-case
erasure only" stance** and strengthens the data-subject posture across the board:
it is the GDPR **Art. 21(1)** objection right implemented affirmatively (improves
the LIA balance, B3.4/B3.5), gives a wrongly-flagged individual real recourse
(reduces the **R4** residual, though R4 stays HIGH on the unbound-third-party/ACL
legal points), and — with the **notice reframe** (operator-delivered notice, no
longer an owner obligation) — slightly improves **R5**. Severity ratings are
unchanged, but R4/R5/R8 residuals are reduced.

**What still bites (now the top live items):**
1. **DPIA/PIA sign-off (R3)** and the **small-business-exemption-loss assumption
   (R2)** remain HIGH — the prudent posture is still a one-off legal review and
   completing the DPIA before launch, though the review is no longer dominated by an
   unresolved consent gap.
2. **Exposure to a wrongly-flagged individual (R4)** isn't disclaimed by Terms that
   individual never signed; the cure is accuracy/correction/**opt-out** in the
   product (conservative tuning, APP 13, qualified opt-out), not
   wording. Still HIGH, and the residual **rose** on 2026-08-02 because such an
   individual may now be banned automatically. See R9.
3. **Solely-automated bans under GDPR Art. 22 (R9), HIGH, added 2026-08-02.**
   **THREE** paths ban a person with no human in the loop, and no Art. 22(2) gate
   fits cleanly. This item said "two" until 2026-08-02: it counted the two join-time
   bans and missed the **AutoMod ladder ban**, which is the one that reaches every
   server on every plan rather than sitting behind an opt-in switch. Targeted legal
   advice on the Art. 22(2) question has been sought and is
   outstanding, and the brief for it should say three.
   **Three of the six residuals have moved.** With **v6.112.0**: the threshold has a
   floor again at `elevated` (residual 3, narrowed), and an automated alt-guard ban
   no longer emits a cross-server signal. With **v6.114.0**: no automated action
   emits at all, which closes the ladder ban, the AutoMod auto-warn, the AutoMod
   ladder kick and automated scam-image enforcement as well (residual 4, now stated
   as largely closed rather than resolved, because the ban suppressions are
   in-process and nothing unwinds records already manufactured); the
   compelling-grounds safety exception became operator-only and fails closed
   (residual 6, narrowed); and the promised in-Discord install notice shipped.
   The rating stays **HIGH**, because what
   drives it is the unresolved Art. 22(2) gate and the absence of a human before
   an automated ban, neither of which these releases touched. Counting a third path
   pushes in the other direction.
4. **Operational follow-through** — DPAs/SCCs (R6), the `/support` rights workflow
   (access, correction, erasure) with consistent compelling-grounds application on
   the operator-set safety exception (R8), the **on-demand disclosure command**,
   and keeping the severity band genuinely generic (R1 residual) — are the live
   to-dos. **Two items listed here as outstanding are done:** the portal opt-out
   toggle (v5.8.0, corrected 2026-08-02), so opt-out handling is no
   longer part of the `/support` workload; and the **bot-delivered install notice**
   (v6.114.0, corrected 2026-08-02), which honours a commitment both published
   documents had been making ahead of the code.

This pass makes the documentation **honest, consistent, and APP-correct**, reflects
the severity-only design throughout, and **does not overclaim**: it still notes the
residual EU/UK Art. 10 review point and flags R2–R4 plainly. It remains a
**best-effort, non-lawyer** review, not certified compliance.

**Updated 2026-08-02.** Until that date this summary described a product that takes
**no automated action**, which was wrong. The register now carries **R9**, the LIA
balance has been re-run against automated action, and the "advisory-only" claim has
been removed everywhere it appeared rather than supplemented. The summary above
"does not overclaim" only with R9 read alongside it.

---

## Decision log

**2026-08-02 (owner sign-off, no lawyer review) - the Article 22 position for
automated bans went live.** The Privacy Policy text covering **GDPR Article 22**
for both **alt-guard auto-ban** and **ThreatNet auto-protect** was published on
the owner's sign-off **alone**. **No lawyer reviewed it.** The draft carried an
internal `<!-- LEGAL REVIEW ... -->` marker reading "Confirm with owner + lawyer
before publishing"; the owner discharged that marker knowingly, accepting the
outstanding lawyer review as a known and explicitly accepted exposure, and the
marker was removed from `privacy.md` at the same time. This was the owner's
explicit decision, made in full knowledge that the lawyer half of the gate was
not satisfied.

Scope of what went live: both bans are disclosed as solely-automated decisions
with a significant effect; disclosure is via the Privacy Policy (plus the
ordinary ban-reason DM for alt-guard, where a server leaves it on); the standing
route to human review, contest, correction and erasure is the web portal or
`/support`, open to anyone whether or not they were individually notified.

Related, still open (not changed by this sign-off):

- **R3 (DPIA/PIA sign-off, HIGH)** is unchanged and now carries this decision
  too. Publishing on owner sign-off is not the professional review R3 asks for.
- **Owner directive 2026-06-22** removed the hard "high" threshold floor, so a
  server could set auto-protect as low as "low". False-positive and Article 22
  exposure was correspondingly higher, and the server owns the level it sets.
  That raises, not lowers, the value of the outstanding lawyer review.
  **Superseded in part on 2026-08-02**, when a floor was restored at "elevated":
  see the entry at the end of this log. The server still owns the level it sets
  above that floor.
- **`.omp/threat-network-PIA-LIA.md` is now STALE on this point.** Its LIA
  balancing safeguard #4 still reads "Advisory-only, explainable, appealable, no
  Art. 22 automated decision with legal/similarly-significant effect in v1",
  which the shipped auto-ban contradicts. The LIA balance has not been re-run
  against automated action. Re-running it is a core-pillar assessment change and
  needs the owner directly; it was deliberately **not** rewritten here.
  **RESOLVED later the same day:** the balance WAS re-run against automated action
  (B3.3 to B3.6), and safeguard #4 no longer makes the advisory-only claim. This
  bullet is kept as the record of the position at the moment of sign-off.
- **`terms.md` still carries its own unreleased markers**, including one on the
  auto-protect clause reading "Confirm with the owner AND a lawyer before
  publishing". Tonight's sign-off was scoped to `privacy.md`, so those were left
  in place and remain outstanding.
  **RESOLVED as to the FILE, 2026-08-02:** the markers are no longer in `terms.md`.
  They were HTML comments, which Jekyll serves to customers in view-source, so they
  were moved out of both published pages into `.omp/legal-review-notes.md`;
  `grep -c "<!--"` is now **0** for `terms.md` and `privacy.md` alike, and the
  quoted sentence now lives at `.omp/legal-review-notes.md:104`, in the verbatim body
  of note 5 (`terms.md`, the auto-protect bullet). **The underlying
  item is NOT discharged:** owner and lawyer confirmation on the auto-protect
  clause remains outstanding. Only its location changed.

**2026-08-02 (owner decision) - targeted legal advice on Article 22(2) has been
SOUGHT and is OUTSTANDING.** Rather than commission a full legal review, the owner
decided to seek **targeted advice on the Article 22(2) question specifically**:
whether any of the three gates (necessity for a **contract** with the data subject,
authorisation by **Union or Member State law**, or the data subject's **explicit
consent**) is available to the operator for the two solely-automated ban paths.

This is an **OPEN ACTION, not a closed one.** The advice has been sought. It has
not been received, and nothing in this register or in
`.omp/threat-network-PIA-LIA.md` should be read as resting on it.

- **Scope is deliberately narrow.** It covers the Art. 22(2) gate question only. It
  is **not** the qualified privacy-lawyer sign-off that **R3** asks for, and it does
  not discharge R3, the small-business-exemption question (**R2**), or the
  unbound-third-party and ACL points (**R4**). Those remain open on their own terms.
- **Why this question.** It is the one point where the current position is
  acknowledged as not squarely satisfied. The LIA's B3.5 residual 6 and B3.6 both
  record that none of the three gates fits cleanly and that the operator relies
  instead on safeguards, the opt-out, and after-the-fact human review. **R9** rates
  the exposure HIGH on that basis.
- **What it does not change.** The Article 22 position published on 2026-08-02 went
  live on owner sign-off with **no lawyer review** (see the entry above), and it is
  live now. Seeking this advice does not retrospectively satisfy that gate.
- **On receipt:** re-run the LIA balance (B3.5, B3.6), re-rate **R9**, and revisit
  the published `privacy.md` and `terms.md` Article 22 wording if the advice moves
  the position.

**2026-08-02 (owner decision) - the auto-protect threshold floor was RESTORED, at
"elevated".** The hard "high" floor removed on 2026-06-22 (see the first entry in
this log) is back, one band lower than the original: `_THREATNET_AUTOBAN_FLOOR_BAND
= "elevated"` (`bot.py:10004`), shipped in **v6.112.0**. `low` is no longer offered by
the `/threatnet autoban` picker (the `level` choices on `threatnet_autoban`,
`bot.py:41506-41509`), and every read of a stored
threshold normalises through `_threatnet_autoban_band()` (`bot.py:10007-10020`), which
raises a stored `low` to `elevated` from the next join onward. That read-side
normalisation is the migration for servers that had already chosen `low`: no
backfill, and no window in which stored data still bans on a single record. The two
selectable bands are therefore `high` and `elevated`, and a server can no longer
cause a ban on a single uncorroborated record.

What this does and does not move here:

- **R9 residual 3 is narrowed, not closed**, and the **R9 rating stays HIGH.** What
  drives the rating is the unresolved Art. 22(2) gate and the absence of a human
  before either ban, neither of which this decision touches.
- **The customer still chooses the operating point above the floor**, and `elevated`
  still acts on a single serious signal, so the false-positive rate is still set per
  server rather than by the operator.
- **`.omp/threat-network-PIA-LIA.md` B3.4 #4, B3.5 residual 3 and B3.6 were updated
  to this fact.** The balance conclusion itself was not re-run on the strength of it.

**2026-08-02 (owner sign-off) - all copy shipped this day is APPROVED.** The owner
approved the customer-facing and document copy written across the 23 merges of
2026-08-02, after the corrections had shipped. Recorded here because a core-pillar
approval given in conversation is worthless if it is not written down.

**What this discharges.** The OWNER half of the outstanding marker on the terms
auto-protect clause, which reads "Confirm with the owner AND a lawyer before
publishing" (`.omp/legal-review-notes.md`, note 5). It also covers the corrected
wording in `privacy.md`, `terms.md`, `pricing.md` and the wiki: the AI second-opinion
claim, the auto-protect plan gate, the decision-record retention description, the XP
activity-log disclosure, and the opt-out qualification wherever it appears.

**What this does NOT discharge, and must not be read as discharging:**

- **The LAWYER half of that same marker.** It is a conjunction, not a choice. The
  targeted Article 22(2) advice recorded in the entry above is still sought and
  still outstanding, and the marker stays until it arrives.
- **R9's rating.** Still HIGH. What drives it is the unresolved Art. 22(2) gate and
  the absence of a human before either automated ban. Approving copy does not move
  either.
- **The four assessment passages that v6.114.0 superseded** (flagged by the citation
  pass, listed in the PIA). Rewriting an assessment conclusion is not a copy change,
  so it needs its own decision rather than inheriting this one.
  **DISCHARGED by the entry below**, on a separate owner sign-off given the same day.
- **R3.** Publishing on owner sign-off is still not the professional review R3 asks
  for. That has been true of every sign-off in this log and remains true of this one.

**2026-08-02 (owner sign-off) - the four v6.114.0-superseded assessment passages were
UPDATED.** The entry above expressly withheld these from the copy approval, on the
ground that rewriting an assessment is not a copy change. **The owner has since given
that separate approval**, and this entry is the record of it. Scope: the **factual
basis** of the affected passages in `.omp/threat-network-PIA-LIA.md` and this
register only. Both documents are internal and build-excluded, so nothing
customer-facing moved.

**What v6.114.0 changed, verified against `BOT_VERSION` 6.115.0 and `RELAY_VERSION`
1.11.88 before anything was written:**

1. **No automated action emits to ThreatNet any more.** The suppression previously
   covered only the two auto-bans on join. It now also covers the AutoMod auto-warn,
   the AutoMod ladder kick, the AutoMod ladder ban (a new mark-and-consume pair,
   `_automod_recent_autoban` / `_automod_autoban_mark` / `_automod_autoban_consume`,
   mirroring the alt-guard one) and automated scam-image enforcement. Staff `/warn`,
   `/kick` and staff bans still emit. The line the code draws is **who decided**.
2. **The compelling-grounds safety exception is operator-only** (`_is_sa_operator`),
   and fails closed when the operator's home guild is not cached. Any actor passing
   `_can_manage_server` could set it before.
3. **An in-Discord install notice now exists**, from `on_guild_join` and from the
   missed-joins reconciliation, covering participation, the absence of a
   server-level opt-out, the individual portal opt-out, and a policy link.

**What was rewritten.** PIA **B3.4 safeguard #4** ("what is not a safeguard"), PIA
**B3.5 residual 2**, PIA **B3.6** (both the measures-in-place and measures-not-in-place
lists), PIA **A3**, and here **R5**, **R8**, and **R9** (the path count in "what it
is", the chaining paragraph, "why it is HIGH", the mitigation list, residuals 1, 4 and
6, the lawyer/owner asks, and the bottom-line summary).

**What was deliberately NOT changed, and this is the constraint the sign-off was
given under:**

- **No risk RATING moved and no balance CONCLUSION was re-run.** **R9 stays HIGH**,
  R5 stays MEDIUM, R8 stays LOW/MEDIUM, and the LIA's B3.5 conclusion stands as
  written. Correcting a fact an assessment rests on is not the same act as re-rating
  the assessment, and only the first was authorised.
- **R9's HIGH is, if anything, better supported than before.** The path count went
  **up**, from two automated ban paths to three, because the AutoMod ladder ban was
  never counted. It is the one that reaches every server on every plan. Nothing in
  v6.114.0 touches the Art. 22(2) gate or the absence of a human before an automated
  ban, which is what drives the rating.
- **R9 residual 4 was un-struck-through**, from "RESOLVED" back to "largely closed".
  It was marked resolved on the strength of the alt-guard fix alone while four other
  automated actions were still emitting, including a third ban path. Restating it is
  a correction of an over-claim, not a re-rating: the underlying position is
  **better** than when it was struck through, and the entry now says so accurately
  instead of saying so early.

**Flagged for the owner, not actioned:** two passages elsewhere in the PIA still
describe the network as producing an "advisory" risk score (the Scope line in the
header, and the s6D(4) benefit analysis in A0). Both are residue of the
advisory-only sweep, which this log records as complete. They were left alone because
they sit outside the v6.114.0 scope of this sign-off and one of them is load-bearing
in the small-business-exemption reasoning (R2).

**2026-08-02 (owner decision) - the Article 22(2) advice will NOT be obtained. The
operator proceeds on their own sign-off.** The targeted advice recorded above as
sought and outstanding is closed unobtained. The owner decided not to pursue it and
to accept the published Article 22 position on their own authority.

**This is a decision, not a lapse.** It is written here so it reads as one. An
outstanding question that quietly stops being asked is indistinguishable, six months
later, from a question nobody thought of.

**What it changes.** The marker on the `terms.md` auto-protect clause, "Confirm with
the owner AND a lawyer before publishing", is discharged: the owner half was given
with the copy approval above, and the lawyer half is now waived rather than pending.
The note is closed on that basis in `.omp/legal-review-notes.md`.

**What it does NOT change, and cannot.**

- **R9 stays HIGH**, and the reason is unchanged: Article 22(2) is still not squarely
  satisfied by any of contract, Member State law, or explicit consent, and there is
  still no human before any of the three automated ban paths. Declining to ask a
  lawyer does not answer the question; it only means the question stays unanswered.
  If anything the rating is now harder to move, because the route that could have
  moved it is closed.
- **R3 stays HIGH and open.** Publishing on owner sign-off is not the professional
  DPIA/PIA review R3 asks for, and this decision makes that gap permanent rather than
  temporary. R3 should not be read as discharged by this entry.
- **The position is untested.** The operator's Art. 22 stance rests on the safeguards,
  the opt-out and after-the-fact human review rather than on a clean Art. 22(2)
  exemption. That was true before this decision and remains true. Nobody qualified has
  reviewed it.

**If circumstances change, revisit.** The obvious triggers: a complaint from a
wrongly-banned individual, a supervisory-authority enquiry, EU/UK volume growing
materially, or the automated-ban design widening again. The third ban path recorded
in R9 today is exactly the kind of change that would warrant re-opening this.

**2026-08-02 (owner decisions) - three questions raised by the v6.114.0 assessment
update, answered.**

**1. The AutoMod ladder ban is ACCEPTED as intended AutoMod behaviour, and R9 stays
HIGH.** The update found a third automated ban path: the ladder ban fires on an
auto-warning counter, is not behind a switch, is not plan-gated, and AutoMod runs on
effectively every server, so none of the bounds this register lists as R9 mitigations
(off by default, opt-in per server, Premium gating) reach it. That was put to the
owner with the option of gating it behind an off-by-default switch, or re-rating R9
to CRITICAL. The owner chose neither: the ladder ban is an intended AutoMod
escalation, not a ThreatNet feature that escaped its safeguards.

Recorded so the next reader knows this was **considered and accepted, not missed**,
because the path's absence from the earlier assessments looks exactly like an
oversight and will be re-reported as one otherwise.

What that acceptance does not change, and what a future reader should weigh:
- The path is still **solely automated with no human before the ban**, so it counts
  toward the Art. 22 analysis exactly as the other two do. R9 stays HIGH on that
  basis, not on the basis that this path is fine.
- It is **the widest-reaching of the three by a distance**. The other two require a
  server to switch something on; this one is on wherever AutoMod is.
- It **no longer feeds the network** since v6.114.0, which is what makes acceptance
  reasonable: an accepted automated ban that cannot manufacture cross-server evidence
  is a materially different thing from one that can.
- If the ladder ban is ever given the ability to emit again, or AutoMod's thresholds
  are loosened, this acceptance should be revisited rather than inherited.

**2. `privacy.md` will NOT be widened to describe the full suppression scope.** The
published text describes the alt-guard half; since v6.114.0 the suppression covers
four more paths. The owner chose to leave it. The published claim is **narrower than
reality, not false**, and under-describing a protection is the safe direction.

Recorded because it will otherwise be re-reported as the same not-swept defect this
log is full of. It is not: it is a deliberate decision to leave a true-but-narrow
statement alone. Anyone tempted to "finish the sweep" should read this entry first.

**3. The mandatory in-game privacy notice is CONFIRMED SENT, by owner observation.**
`privacy.md` leans on a notice delivered by the MCDC plugin, whose source is not in
any repository available to these sessions, so it could not be verified from code.
The owner confirmed on 2026-08-02 that the notice **is being sent**, observed
directly by joining the test server.

Scope of that confirmation, stated precisely because it is now the evidence for a
published claim: it establishes the notice **is delivered on join**. It is a live
observation, not a source review, so the separate property that it **cannot be
switched off** rests on two other legs: the relay exposes only `join_notice` and
`join_notice_text` as operator-configurable, with no control over the privacy notice,
and the plugin is the only component that could expose one. Consistent, and not the
same as having read the jar. If the plugin source becomes available, confirm the
non-removability directly and replace this note.
