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
severity level + fingerprint-match boolean + account-age modifier) is **assessed
NON-sensitive** under s6(1) — not a "criminal record." **APP 3.3 is not engaged, so
no consent is required**; collection rests on **APP 3.2** (reasonably necessary) +
**APP 5** notice + **APP 6** limits. The no-opt-out lock is **no longer in tension**
with a consent requirement, because none arises. Under GDPR, **Art. 10 is now very
unlikely** to be engaged for the same structural reason, so legitimate interest
(Art. 6(1)(f)) per the LIA is a sufficient basis. **This is the durable kind of fix:
the data that crosses the boundary changed, not just the description of it.**

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
stop profiling** (opt-out via `/support` now; self-service portal toggle on the
roadmap), in addition to correction (APP 13) and erasure — honoured unless we have
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

**What still needs work (product).** Ship the **bot-delivered install notice** and
the **on-demand disclosure command** per the roadmap. Document the "reasonable steps"
taken.

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

**What I did to mitigate.** Documented the required workflow (including the
compelling-grounds standard) in the PIA Part C checklist.

**What still needs work (operational).** Build the triage + decision-standard +
opt-out handling + refusal-documentation + SLA before launch; ship the self-service
portal opt-out toggle per the roadmap.

---

## R9: Solely-automated bans (GDPR Art. 22), **HIGH**

**Added 2026-08-02**, alongside the re-run of the LIA balance against automated
action (`.omp/threat-network-PIA-LIA.md` B3.3 to B3.6).

**What it is.** The product takes two kinds of automated decision that exclude a
person from a community with no human involved, and until 2026-08-02 neither the
LIA nor this register acknowledged that any such decision existed.

- **ThreatNet auto-protect.** A full-Premium server may switch on automatic banning
  at a cross-server risk threshold **it** chooses (`bot.py:9863`, gate at `9873`,
  threshold at `9884`). The **hard "high" floor was removed by owner directive on
  2026-06-22**, which left `low` selectable, at which a single minor signal from a
  single server, one kick or one warning, banned a joining account on sight
  (`relay.py:1467`, `bot.py:9891`, `41196`). **A floor was restored at `elevated` by
  owner decision on 2026-08-02, shipped in v6.112.0** (`bot.py:9871`, normalised on
  every read at `9874-9887`), so the two selectable bands are now `high` and
  `elevated` (`bot.py:41276-41279`) and a server can no longer cause a ban on a
  single uncorroborated record. The operating point above that floor is still the
  server's to choose: see residual 3. The ban is **silent toward the affected
  person**: no DM, no notice (`bot.py:9894-9897`).
- **Alt-guard auto-ban.** A server that has run `/altguard on` automatically bans a
  joining account that scores 70 or more with a strong signal
  (`bot.py:8618`, `8621`). The arithmetic restricts the strong route in practice to
  a **shared profile picture** plus one supporting signal such as a new account
  (`bot.py:8587-8605`). A picture is not a person. **A person who has never been
  banned anywhere can be banned on arrival because of their avatar, with no human
  in the loop.** Fingerprint recording is unconditional and happens on every server
  regardless of the switch (`bot.py:9947`, `9949`, `15608`, `39433`); only the
  acting on it is opt-in.

**The two paths chained, and nothing stopped them (fixed in v6.112.0, see residual
4).** As originally assessed: an alt-guard auto-ban is not marked
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
rather than on an exemption. Alongside that, the threshold floor restored at
`elevated` on 2026-08-02 still leaves the operating point above it to each customer,
so the false-positive rate is set per server rather than by the operator, and the
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
  `/support`, open to anyone whether or not they were notified. Published
  2026-08-02 on the owner's sign-off.
- On the alt-guard path only, the affected person gets the ban-reason DM and a
  single reply that reaches that server's staff (`bot.py:8845`, `9962`).
- Audit trail and staff notice on both paths (`bot.py:8635-8654`, `9911-9927`),
  **subject to a log or staff channel actually being configured**
  (`bot.py:8635-8637`).

**Residual, stated without softening.**

1. **No human confirmation before either action.** The only human is downstream of
   the ban.
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
   `/threatnet` warning that assigns the administrator responsibility
   (`bot.py:41242-41247`) still protects the data subject not at all, since they are
   not party to it and cannot see the level a server chose.
4. ~~**Automated bans become cross-server evidence.**~~ **RESOLVED 2026-08-02.**
   Residual 2 of the LIA's B3.5. Shipped in **v6.112.0** and confirmed running on
   the live bot the same day: `_altguard_recent_autoban` plus a mark/consume pair
   mirroring the ThreatNet one suppresses the emit for an alt-guard **automatic**
   ban, marked before the ban because the gateway event can land mid-await, and
   cleared if the ban is refused. Only the emit is suppressed, so the staff alert,
   the local offender record and the ban-appeal DM all still happen. A **staff** ban
   of the same user still emits exactly as before, and the mark is time-boxed to
   120s so a stale one cannot silence a genuine staff decision later. `privacy.md`
   was updated to the new behaviour on 2026-08-02, replacing the paragraph that had
   correctly disclosed the old one.
5. **Alt-guard notice can fail silently in both directions.** The DM depends on
   `ban_appeals_enabled` and on open DMs (`bot.py:8845`, `8886-8890`); the staff
   alert depends on a configured log or staff channel (`bot.py:8635-8637`). A server
   with neither, and appeals off, auto-bans a joining member with nobody told.
6. **`privacy.md` previously overstated the opt-out** as absolute ("never acts on
   anyone who has opted out"), while the safety-exception path can return an
   unsuppressed dossier (`relay.py:1740-1757`) that `_threatnet_autoban_check` acts
   on without inspecting the exception flag (`bot.py:9888`). **Corrected in wording
   on 2026-08-02**, not in code: the policy now carries the qualification in both
   places. The code still does not consult the exception flag.

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
  2026-08-02).
- **Owner:** the floor question is **answered**, by the 2026-08-02 decision to
  restore it at `elevated` rather than the original `high` (residual 3). Still open:
  whether alt-guard's auto-ban should require staff confirmation; whether an
  alt-guard auto-ban should be barred from emitting a network signal; and whether
  the `privacy.md` opt-out absolute is additionally corrected **in code** now that
  it has been corrected in wording.

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
opt out of profiling (via `/support` now; self-service portal toggle on the
roadmap), subject to a **compelling-grounds safety exception** (verified
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
3. **Solely-automated bans under GDPR Art. 22 (R9), HIGH, added 2026-08-02.** Two
   paths ban a person with no human in the loop, and no Art. 22(2) gate fits
   cleanly. Targeted legal advice on the Art. 22(2) question has been sought and is
   outstanding. **Two of the six residuals moved on 2026-08-02 with v6.112.0**: the
   two paths no longer chain, because an automated alt-guard ban no longer emits a
   cross-server signal (residual 4, resolved), and the threshold has a floor again
   at `elevated` (residual 3, narrowed). The rating stays **HIGH**, because what
   drives it is the unresolved Art. 22(2) gate and the absence of a human before
   either ban, neither of which this release touched.
4. **Operational follow-through** — DPAs/SCCs (R6), the `/support` rights + **opt-out
   handling** workflow with consistent compelling-grounds application (R8), shipping
   the bot-delivered install notice + roadmap portal opt-out toggle, and keeping the
   severity band genuinely generic (R1 residual) — are the live to-dos.

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
= "elevated"` (`bot.py:9871`), shipped in **v6.112.0**. `low` is no longer offered by
the `/threatnet autoban` picker (`bot.py:41276-41279`), and every read of a stored
threshold normalises through `_threatnet_autoban_band()` (`bot.py:9874-9887`), which
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
