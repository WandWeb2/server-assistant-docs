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

---

## R1 — Sensitive-information / criminal-offence data vs no-opt-out (no consent) — **CRITICAL**

**What it is.** The shared signals ("scam/financial" actioning, "repeat offender",
serious-AutoMod-category hits) **plausibly are "sensitive information" (criminal-
record limb, s6(1) Privacy Act)** and **criminal-offence data under GDPR Art. 10**.
If so:
- **AU:** APP 3.3 generally requires the individual's **consent** to collect
  sensitive information. The **locked no-opt-out decision means there is no
  consent.** Collection must then rest on an **APP 3.4 exception** (serious-threat-
  to-safety / suspected-unlawful-activity-or-serious-misconduct), whose fit with a
  **standing, always-on, pooled scoring network** (rather than a specific
  situational action) is **uncertain**.
- **GDPR:** Art. 10 is **stricter** than Art. 9 — criminal-offence data may be
  processed only **under official authority** or where **authorised by Union/
  Member-State law**. A private Discord operator has **neither**. Legitimate
  interest (Art. 6(1)(f)) does **not** by itself unlock Art. 10 data.

**What I did to mitigate (drafting).** Documented the tension prominently and
honestly in `privacy.md` (legal-basis section + a candid "sit close to the line"
acknowledgement), in `terms.md` (member-notice obligation + residual flag), and in
the PIA+LIA (§A-RISK, §B3.1/B3.5). Did **not** paper it over. Re-based the whole
analysis to APP-first so the consent question is visible rather than hidden behind
"legitimate interest."

**What still needs a lawyer or a product change (drafting cannot cure this):**
1. **Lawyer:** is the offence-type signal "sensitive information" / Art. 10 data,
   and can an APP 3.4 exception lawfully carry a standing pooled network without
   consent? This is the single biggest open question.
2. **Product (cheapest real mitigation):** **drop or generalize the offence-type
   category band** ("scam/financial") so the shared signal reads as a generic risk
   level, not "this person committed offence X" — materially weakening the
   sensitive/Art. 10 argument.
3. **Product (cheap):** add a **server-admin notice + member acknowledgement at
   onboarding**, pushing notice/consent to the point of collection without giving
   servers a network opt-out.
4. **Decision the owner owns:** the no-opt-out lock is the root cause of the
   consent gap. No drafting removes it; only consent, an exception that genuinely
   fits, or signal-tightening does.

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
the disclaimer wording.

**What still needs a lawyer / product.** Confirm the residual liability exposure to
flagged third parties; the durable fixes are product-side (accuracy, correction,
appeal), not drafting.

---

## R5 — APP 5 notification gap: subjects are collected-about indirectly — **MEDIUM**

**What it is.** The flagged user does not interact with us directly and may never
see the privacy policy, so the APP 5 "notify at collection" obligation is hard to
meet in full.

**What I did to mitigate.** `privacy.md` serves as the standing notice; `terms.md`
now obliges the **server owner to tell members** about the network and policy.

**What still needs work (product).** Implement the **server-admin onboarding
notice** (also mitigates R1). Document the "reasonable steps" taken.

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

**What it is.** The access (APP 12), correction (APP 13), and case-by-case deletion/
objection promises only protect the owner if they are **actually serviced** with a
consistent standard and **documented refusals**.

**What I did to mitigate.** Documented the required workflow in the PIA Part C
checklist.

**What still needs work (operational).** Build the triage + decision-standard +
refusal-documentation + SLA before launch.

---

## Bottom line for the owner (the 2-3 things no drafting can cure)

1. **The no-opt-out lock + (likely) sensitive/criminal-offence signals = a consent
   gap** that drafting cannot close (R1). Realistic fixes are a **product change**
   (drop/generalize the offence-type band; add a server-admin onboarding notice) or
   a **lawyer's confirmation** that an APP 3.4 exception fits. Under GDPR, Art. 10
   may need authority the operator simply doesn't have.
2. **Exposure to a wrongly-flagged individual** isn't disclaimed by Terms that
   individual never signed (R4); the cure is accuracy/correction in the product,
   not wording.
3. **Launch is gated** on a real DPIA/PIA sign-off and (likely) on the Act applying
   despite small size (R2, R3) — both point to getting at least a one-off legal
   review of R1 before any cross-server data moves.

This pass makes the documentation **honest, consistent, and APP-correct**, and
surfaces every load-bearing risk — but it is **not** a substitute for the lawyer
review on R1–R3.
