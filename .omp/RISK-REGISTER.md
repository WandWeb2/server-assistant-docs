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
> **R2 (HIGH) ≈ R3 (HIGH) ≈ R4 (HIGH) > R5 (MEDIUM) ≈ R6 (MEDIUM) > R8 (LOW/MEDIUM)
> ≈ R1 (LOW/MEDIUM) > R7 (LOW).**
> The top live exposures are now R2/R3/R4 (exemption-loss assumption, DPIA/PIA
> sign-off, and the unbound-third-party/ACL point), **not** R1.

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
that the **real** mitigations are the product design (advisory-only, conservative
tuning, N≥2 corroboration, anti-poisoning) and the **APP 13 correction right**, not
the disclaimer wording. **Strengthened 2026-06-21 by the qualified individual
opt-out:** a wrongly-flagged individual now has an **affirmative, advertised way to
stop profiling** (opt-out via `/support` now; self-service portal toggle on the
roadmap), in addition to correction (APP 13) and erasure — honoured unless we have
compelling legitimate grounds (a corroborated safety/fraud need) to retain the most
serious signals. This gives the third party real, exercisable recourse that does not
depend on Terms they never signed, **reducing the practical exposure** even though
the *legal* point (Terms don't bind a non-signatory; the ACL cap may not hold)
stands.

**Net rating: still HIGH, but the residual is meaningfully reduced.** The opt-out
plus correction/erasure is a stronger answer to a flagged individual than the
case-by-case-only stance was. The HIGH stays because the unbound-third-party and ACL
points are legal questions a lawyer should still confirm; the durable fixes remain
product-side (accuracy, correction, appeal, opt-out).

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
   product (advisory only, conservative tuning, APP 13, qualified opt-out), not
   wording. Still HIGH, residual reduced.
3. **Operational follow-through** — DPAs/SCCs (R6), the `/support` rights + **opt-out
   handling** workflow with consistent compelling-grounds application (R8), shipping
   the bot-delivered install notice + roadmap portal opt-out toggle, and keeping the
   severity band genuinely generic (R1 residual) — are the live to-dos.

This pass makes the documentation **honest, consistent, and APP-correct**, reflects
the severity-only design throughout, and **does not overclaim**: it still notes the
residual EU/UK Art. 10 review point and flags R2–R4 plainly. It remains a
**best-effort, non-lawyer** review, not certified compliance.
