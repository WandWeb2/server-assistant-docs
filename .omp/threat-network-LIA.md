# Legitimate Interest Assessment (LIA) — Cross-Server Threat Network

**Status:** DRAFT — requires qualified data-protection lawyer sign-off before any
cross-server data moves (this is a P0 blocking prerequisite).
**Controller:** Wandering Webmaster (the "operator")
**Drafted:** 2026-06-21
**Scope:** The Cross-Server Threat Network feature of Server Assistant — pooling
minimized moderation signals across protected Discord servers to produce an
advisory cross-server risk score about Discord users.
**Regimes:** UK GDPR and EU GDPR, Article 6(1)(f) (legitimate interests).
**Internal only:** This document lives under `.omp/` and is excluded from the
Jekyll build (`_config.yml` → `exclude: .omp/`). It is NOT customer-facing. The
customer-facing disclosure is in `privacy.md` and `terms.md`.

> A three-part test is required to rely on legitimate interests: (1) **Purpose
> test** — is there a legitimate interest? (2) **Necessity test** — is the
> processing necessary for it? (3) **Balancing test** — is the interest overridden
> by the individual's interests, rights, and freedoms? All three must pass.

<!-- LEGAL REVIEW: A qualified DPO/lawyer must review and sign off the conclusions
of all three tests below, confirm none of the contributed signals is special-category
data (Art. 9), and confirm the Art. 21 objection / Art. 17 erasure handling described
in the privacy policy is correctly implemented before launch. -->

---

## 1. Purpose test — is there a legitimate interest?

**The interest.** Protecting the safety and integrity of the communities running on
Server Assistant: preventing fraud, scams, raids, mass-spam, and ban-evasion by
users who move from server to server to repeat abuse. A user banned for scams across
six protected servers should be recognisable on the seventh **before** they cause
harm there.

**Whose interest.**
- **The operator (Wandering Webmaster):** running a safe, trustworthy platform; the
  network is core, defining functionality that differentiates the product.
- **Participating servers and their owners/staff:** protecting their members from
  known cross-server bad actors.
- **The wider community / members of those servers:** the third-party interest in
  not being scammed, raided, or harassed by serial offenders.

**Is it legitimate?** Yes. Preventing fraud and ensuring network/information security
is expressly recognised as a legitimate interest. UK GDPR Recital 47 notes processing
for fraud prevention; Recital 49 recognises network and information security as a
legitimate interest. Safety/anti-abuse is well-trodden ground for an LIA. The interest
is real, specific, and present (not speculative).

**Conclusion:** Purpose test **passes**.

---

## 2. Necessity test — is the processing necessary?

**Is the processing necessary to achieve the interest?** Cross-server recognition of
serial abusers is, by definition, impossible from a single server's data alone. A
strictly per-guild record (today's posture) cannot tell server #7 that the joining
user was banned for scams in servers #1–#6. Pooling signals across servers is therefore
**necessary** to deliver the protective interest.

**Is there a less intrusive way to achieve the same result?** We have minimized to the
least intrusive form that still works:
- We pool **only minimized aggregates** — counts, recency, category *bands*, and
  boolean/band fingerprint-match indicators. We do **not** pool raw moderation reasons,
  free-text, message content, or which specific server acted.
- We pool only the **v1 signal set** that materially predicts cross-server abuse:
  bans/kicks (distinct-server count + recency), serious-category AutoMod hits (count +
  category band), AltGuard fingerprint-match (boolean/band), and an account-age/
  join-velocity modifier. Lower-value or higher-sensitivity signals are excluded.
- A signal only "counts" with **N≥2 independent-server corroboration**, so a single
  server cannot by itself create a network flag.
- The result is **advisory only** — it never auto-actions — which is less intrusive
  than automated decision-making about individuals.

A full-detail cross-server dossier (raw reasons, originating server identity) would be
**more** intrusive and is deliberately not built. The minimized design is the least
intrusive option that still achieves the purpose.

**Conclusion:** Necessity test **passes** — the processing is necessary and is
minimized to the least intrusive effective form.

---

## 3. Balancing test — interest vs the individual's rights

### 3.1 Nature of the data
- Discord **user ID** plus **minimized behavioural signals** (counts, recency, bands,
  match booleans) about moderation outcomes.
- **Not** special-category data (Art. 9) by design — no data revealing race, religion,
  health, sexuality, politics, etc. Category *bands* describe the **abuse type** (e.g.
  "scam/financial"), not protected characteristics. <!-- LEGAL REVIEW: confirm no v1
  signal or category band could be construed as special-category or criminal-offence
  data (Art. 10) — "ban for X" outcomes should be reviewed against the Art. 10 line. -->
- No message content, no free-text, no contact details, no financial/payment data.

### 3.2 Reasonable expectations of the individual
- Discord users generally expect that **abusive behaviour can have consequences** and
  that moderation tools exist across servers. A user banned for scams in many servers
  would not reasonably expect that record to be wholly invisible everywhere else.
- However, a cross-server safety dataset held by a single operator is **less obviously
  expected** than per-server moderation. This weighs in favour of **strong, prominent
  disclosure** — which we provide in `privacy.md` and `terms.md` — and in favour of an
  accessible objection/erasure route.

### 3.3 Possible impact on the individual
- **Risk:** a wrongly- or maliciously-flagged user could face heightened scrutiny,
  DM check-ins, or pre-emptive moderation on a server they join.
- **Severity-limiting factors:** advisory-only (no automatic ban/kick/sanction in v1),
  conservative band tuning (favouring false-negatives over false-positives), N≥2
  corroboration, server-standing weighting against poisoning, and explainability so a
  human can see and discount a weak signal.

### 3.4 Safeguards / mitigations (the heart of the balance)
1. **Strict data minimization** — only aggregates/bands cross the boundary; no
   free-text, no message content, no originating-server identity, local vs network
   shown as separate bands and never conflated.
2. **Case-by-case erasure/objection route via `/support`** (Art. 21 / Art. 17) — an
   individual can object or request erasure of their network record at any time; we
   honour it **unless** we can document **compelling legitimate grounds** (a corroborated
   safety/fraud-prevention need). This is the primary safeguard that keeps the basis
   fair in the absence of an opt-out, and refusals are documented and explained.
3. **Hard retention cap** — rolling 12 months from the last signal, then hard-delete;
   stale records do not accumulate indefinitely.
4. **Advisory-only, explainable, appealable** — no automated decision-making with legal
   or similarly significant effect in v1; a human always decides.
5. **Anti-poisoning** — server-standing weighting + N≥2 independent corroboration +
   power to discount/suspend a manipulating server.
6. **No opt-out is disclosed plainly** as the cost of a core, network-effect feature,
   so server owners and (via the policy) individuals know the position up front.

### 3.5 Balancing conclusion
The interest in cross-server community safety is substantial and present; the
processing is necessary and minimized; the impact on individuals is constrained by an
advisory-only design and a real, accessible objection/erasure mechanism with a hard
retention cap. On balance, the legitimate interest is **not overridden** by the
interests, rights, and freedoms of the individuals concerned, **provided the
safeguards in §3.4 are implemented and maintained** — in particular the `/support`
case-by-case rights route and strict minimization. If any safeguard is weakened, this
assessment must be re-run.

<!-- LEGAL REVIEW: The balancing conclusion is the most legally load-bearing judgement
in this document and must be reviewed and signed off by a qualified lawyer/DPO. In
particular: (a) the adequacy of "no opt-out + case-by-case objection" versus a true
opt-out; (b) whether a DPIA is required (Art. 35 — large-scale profiling / safety
dataset likely triggers one); (c) the international-transfer position (data stored in
the US) for this specific dataset. -->

---

## 4. Outstanding items before launch (P0)
- [ ] Lawyer/DPO sign-off on all three tests and the balancing conclusion.
- [ ] Confirm no signal/category band is special-category (Art. 9) or criminal-offence
      (Art. 10) data.
- [ ] Assess whether a **DPIA** is required (Art. 35) — likely yes; complete it.
- [ ] Confirm international-transfer safeguards (SCCs) cover this dataset (US hosting).
- [ ] Operationalise the `/support` rights route: triage, decision standard for
      "compelling legitimate grounds", documentation of refusals, response SLAs.
- [ ] Confirm retention job hard-deletes at 12 months from last signal.
- [ ] Re-run this LIA whenever the v1 signal set, minimization, or safeguards change.

---

## 5. Mapping to customer-facing disclosure
- `privacy.md` → **Cross-Server Threat Network** section (controller-role shift, what's
  shared, legal basis, minimization, retention, no-opt-out, advisory nature, rights +
  `/support` route) and the **GDPR** + **Your rights** sections (Art. 21 objection route).
- `terms.md` → **§6 Cross-Server Threat Network** (core functionality / no opt-out,
  advisory non-auto-actioning, anti-poisoning + appeal, no warranty of accuracy).
