# Privacy Impact Assessment (PIA, Australian) + Legitimate Interest Assessment (LIA, GDPR) — Cross-Server Threat Network

**Status:** DRAFT — best-effort internal assessment. **NOT a substitute for legal
advice.** This document was prepared without a qualified privacy lawyer. Several
conclusions below are flagged as requiring professional sign-off before any
cross-server data moves (this remains a P0 blocking prerequisite). Do not treat
any "passes"/"likely" judgement here as certified compliance.

**Controller / APP entity:** Wandering Webmaster (the "operator"), located in
**Queensland, Australia**, serving Discord servers **worldwide**.
**Drafted:** 2026-06-21 (re-based from a UK/EU-GDPR-only draft to Australian-primary;
updated 2026-06-21 for the owner's **severity-only** design lock — offence
type/category no longer crosses servers and AI/free-text offence summaries are
local-only, which re-rates the central sensitive-information finding down from
CRITICAL to LOW/MEDIUM, see A-RISK / R1).
**Scope:** The Cross-Server Threat Network feature of Server Assistant — pooling
minimized moderation signals across protected Discord servers to produce an
advisory cross-server risk score about Discord users.

**Legal frameworks (layered):**
- **PRIMARY — Australia:** Privacy Act 1988 (Cth) and the 13 Australian Privacy
  Principles (APPs). The operator is in Queensland; this is the home regime.
- **SECONDARY — EU/UK:** EU GDPR and UK GDPR, applying **extraterritorially**
  (Art. 3(2)) because EU/UK data subjects are served and a cross-server
  threat-scoring system arguably "monitors the behaviour" of those data subjects.
- Also acknowledged: CCPA (California) — see `privacy.md`.

**Internal only:** This document lives under `.omp/` and is excluded from the
Jekyll build (`_config.yml` → `exclude: .omp/`). It is NOT customer-facing. The
customer-facing disclosure is in `privacy.md` and `terms.md`.

> **Why two assessments in one doc.** Australian law has **no GDPR-style
> "legitimate interest" lawful basis** and **no standalone "right to erasure."**
> The Australian analysis is therefore an **APP-by-APP Privacy Impact Assessment
> (PIA)** — the OAIC-recommended instrument for a high-privacy-risk project. The
> GDPR analysis is retained as a **Legitimate Interest Assessment (LIA)** because
> GDPR applies on top for EU/UK users. Where the two regimes diverge (consent vs
> legitimate interest; erasure vs correction; criminal-offence data), this doc
> calls it out rather than forcing one framing onto the other.

---

# PART A — Privacy Impact Assessment (Australian Privacy Act 1988 + APPs) [PRIMARY]

A PIA is the OAIC-recommended systematic assessment of a project's privacy
impacts and the steps to manage them. This project — a cross-server, profiling,
arguably-sensitive-information network with no opt-out — is exactly the kind of
"high privacy risk" project for which the OAIC recommends a PIA. It is **not
legally mandatory** for a private operator (that mandate binds Australian
Government agencies), but it is strongly recommended best practice and is treated
here as a hard pre-launch step.

## A0. Threshold question — does the Privacy Act even apply? (Small-business exemption)

The operator's turnover is almost certainly **under AUD $3 million**, which would
*ordinarily* engage the **small-business operator exemption (s6D)** and remove the
APPs entirely. **The project very likely loses that exemption**, for two reasons
under s6D(4) / s6E:

1. **Disclosing personal information about another individual for a benefit,
   service or advantage.** The network's whole function is to **collect signals
   about individuals and disclose a cross-server risk picture to other servers**.
   Servers receive a tangible **benefit/service** (the advisory risk score) in
   return for contributing signals. OAIC treats "disclose personal information
   about another individual to anyone else for a benefit, service or advantage"
   as an exception that removes the exemption.
2. **Providing a service to collect/disclose personal information.** The network
   is, in substance, a service whose purpose is to collect and disclose personal
   information about individuals.

**Conclusion (best-effort): the operator is bound by the Privacy Act and the APPs
regardless of being under $3M turnover.** This is the safer assumption and the one
this PIA is written to. It rests on the assumption that the network's
contribute-to-be-protected exchange is a "benefit, service or advantage" within
s6D(4)/s6E — which is the natural reading but should be confirmed with legal
advice and against the OAIC "Does my small business need to comply?" checklist.

> **Design lever:** even if a lawyer concluded the exemption survived, relying on
> it would be fragile (one design change or a turnover increase flips it). The
> operator should plan to comply with the APPs by default. Do not build the
> product on the assumption of exemption.

## A1. APP 1 — Open and transparent management

**Obligation:** manage personal information openly/transparently and maintain a
clearly-expressed, up-to-date APP privacy policy describing how personal
information is handled.

**Assessment:** `privacy.md` now (a) identifies the operator and its location
(Queensland, Australia), (b) names the Privacy Act 1988 + APPs as the primary
framework, (c) has a dedicated, plain-language **Cross-Server Threat Network**
section describing what is shared, why, retention, and rights, and (d) names the
OAIC as the regulator and gives a complaint path. **Meets APP 1** in substance,
subject to keeping it current as signals/safeguards change.

## A2. APP 3 — Collection of solicited personal information (incl. the APP 3.3 sensitive-info bar)

**Obligation:** collect personal information only where **reasonably necessary**
for the entity's functions/activities. For **sensitive information**, the higher
**APP 3.3** bar applies: generally need the individual's **consent** AND
reasonable necessity, unless an **APP 3.4 exception** applies.

**Ordinary personal information** (Discord user ID + minimized behavioural
signals): collection is reasonably necessary for the protective function of the
network. The minimization design (aggregates/bands only, N≥2 corroboration,
no free-text, no originating-server identity) supports "reasonably necessary."
**Likely satisfies APP 3 for non-sensitive elements.**

**Sensitive information — SUBSTANTIALLY DE-RISKED BY THE SEVERITY-ONLY DESIGN
(see A-RISK below).** "Sensitive information" under s6(1) expressly includes
**criminal record**. The earlier draft shared an offence-type **category band**
(e.g. "scam/financial") — a signal that read as "this user was actioned for
offence X," which **plausibly engaged the "criminal record" limb.** The locked
**severity-only design (2026-06-21) removes that signal from the boundary
entirely**: what now crosses servers is a pseudonymous user ID, counts, recency,
a **generic severity level** (e.g. minor / serious), a fingerprint-match boolean,
and an account-age modifier — **no offence type or category, and no free-text or
AI-generated summary** (summaries are local-only). A generic severity level does
not describe *what* a person allegedly did; on this design the cross-server data
is **assessed as NON-sensitive** — it is not a "criminal record" within s6(1).

Because the shared signals are **not** sensitive information, the higher **APP 3.3
bar does not apply** and **no consent is required** to collect them. Collection
rests on **APP 3.2** (reasonably necessary for the operator's safety function),
with **APP 5** notice (the privacy policy) and **APP 6** use/disclosure limits.
The locked no-opt-out decision is therefore **no longer in tension with a consent
requirement**, because no consent requirement is engaged. The APP 3.4 "permitted
general situations" (serious-threat-to-safety; suspected serious misconduct)
remain available as a **belt-and-braces** argument if a regulator took a broader
view of a severity signal, but the design no longer *depends* on them. **Residual:
keep the severity band genuinely generic so an offence label cannot leak back in.**

## A3. APP 5 — Notification of collection

**Obligation:** at/before collection (or as soon as practicable after), take
reasonable steps to notify the individual of the prescribed matters (identity,
purposes, the fact and consequences of collection, disclosures including overseas
recipients, how to access/complain).

**Assessment / gap:** the operator does not collect from the data subject
directly — signals are generated by **server staff actions**, and the subject
(the flagged user) may never see the privacy policy. Reasonable steps here are
constrained. Mitigations now reflected in the docs:
- The public `privacy.md` is the standing APP 5 notice (purposes, overseas
  transfer, access/complaint path, OAIC).
- **APP 5 is push down to the server admin at onboarding:** `terms.md` already
  requires the server owner to make members aware of the Privacy Policy; this PIA
  recommends strengthening that into an explicit onboarding notice/consent step
  the admin presents to members (cheap mitigation — see A-RISK mitigations).
**Partially met; residual gap flagged** (subjects collected-about indirectly).

## A4. APP 6 — Use or disclosure (THE CRUX)

**Obligation:** information collected for a primary purpose may be used/disclosed
only for that primary purpose, a **reasonably-expected and related secondary
purpose** (directly related, for sensitive info), with consent, or under an
exception.

**Assessment:** the **cross-server disclosure is the crux of the whole feature.**
A signal is collected by Server A for Server A's own moderation (primary purpose);
the network **discloses a derived risk picture to Servers B…N**. Whether that is a
"reasonably expected" secondary purpose is contestable: a user banned across many
servers may reasonably expect *some* cross-server consequence, but a centralized
pooled dataset held by one operator is **less obviously expected**. The
disclosure is defensible as a related security/anti-fraud secondary purpose
**only with strong, prominent notice** (now in `privacy.md`/`terms.md`) and the
minimization safeguards. Because the severity-only design means the signals are
**not sensitive information** (A2), the higher directly-related/consent bar for
sensitive info does **not** apply — the ordinary reasonably-expected-and-related
secondary-purpose test governs, which the safety/anti-fraud purpose plus prominent
notice and minimization satisfy. **Defensible with the disclosed safeguards.**

## A5. APP 8 — Cross-border disclosure

**Obligation:** before disclosing to an overseas recipient, take reasonable steps
to ensure the recipient does not breach the APPs (APP 8.1). **Accountability rule
(s16C):** the disclosing entity **remains accountable** for the overseas
recipient's APP-breaching acts, effectively strict, unless an APP 8.2 exception
(e.g. substantially-similar law, or informed consent) applies.

**Assessment:** highly relevant because service is **worldwide** and hosting is in
the **US (Hetzner, Oregon)**, and sub-processors (AI providers, Stripe, push
vendors) are overseas. Two distinct flows:
- **Operator → US hosting / sub-processors:** standard cross-border disclosure;
  `privacy.md` lists sub-processors and the US hosting location and relies on
  contractual safeguards. **Reasonable steps should be documented** (DPAs/SCCs on
  file) — operational to-do, not a drafting fix.
- **Network → participating servers worldwide:** disclosing the risk score to
  servers in other countries is itself a cross-border disclosure. The operator
  stays accountable under s16C for what those servers do with it. The advisory-
  only + minimization design limits this, but it is a real residual.
**Disclosed; the s16C strict-accountability posture is a standing operational
obligation, flagged.**

## A6. APP 11 — Security, and destruction/de-identification (the erasure substitute)

**Obligation:** take reasonable steps to protect personal information; and under
**APP 11.2**, take reasonable steps to **destroy or de-identify** personal
information once it is **no longer needed** for any APP-permitted purpose.

**Assessment:** security is covered by the existing posture (encryption at rest,
restricted key access, TLS, authenticated endpoints). For APP 11.2, the **rolling
12-month retention cap → hard-delete** is the concrete mechanism: a record with no
new signal for 12 months is no longer "needed" and is destroyed. This is the
**organisational** side of what GDPR users would call erasure. **Meets APP 11,
provided the 12-month cap is genuinely enforced** (retention job is a pre-launch
checklist item) and provided 12 months is defensible as "needed" (conservative
but arguable for repeat-abuse detection).

## A7. APP 12 — Access

**Obligation:** give individuals access to the personal information held about
them on request, subject to exceptions.

**Assessment:** the `/support` route lets an individual ask what network record is
held about them. Because the data is minimized aggregates/bands, an access
response is feasible (and the explainability design — "flagged in N servers, M
bans, last X days ago" — already surfaces the drivers). **Met, provided the
`/support` workflow actually services access requests** (operational item). Note:
an APP 12 exception may apply where disclosing the record would reveal another
server's confidential action or prejudice anti-fraud measures — document any such
refusal.

## A8. APP 13 — Correction

**Obligation:** take reasonable steps to correct personal information that is
inaccurate, out-of-date, incomplete, irrelevant or misleading, on request or on
own initiative.

**Assessment:** an individual who says a network signal is wrong (e.g. a bad-faith
ban) can seek correction via `/support`; the anti-poisoning design (server-
standing weighting, N≥2 corroboration, power to discount a manipulating server)
is the upstream mechanism, and correction/removal of a discredited signal is the
downstream one. **Met in design;** the case-by-case `/support` route is where APP
13 (and the de-facto deletion the owner promised) actually lands.

## A9. Mapping the owner's `/support` erasure/objection promise onto Australian law

The product promises an individual can request **erasure of, or object to**, their
network record via `/support`. **Australian law gives no standalone right to
erasure or right to object.** That promise maps onto Australian law as:
- **APP 13 correction** (fix/remove an inaccurate or misleading signal), plus
- **APP 11.2 destruction/de-identification** once a record is no longer needed
  (the 12-month cap, and earlier where a signal is shown unfounded), plus
- a **good-practice voluntary deletion** the operator chooses to offer beyond the
  statutory floor — i.e. the operator is promising **more** than the APPs require.
There is no Australian-law conflict in offering this; the customer-facing wording
just should not imply a *statutory* Australian erasure right that doesn't exist.
For **EU/UK** users the same `/support` route additionally services the **GDPR
Art. 21 objection** and **Art. 17 erasure** rights (Part B).

## A-RISK. Sensitive-information / criminal-record exposure (LOW/MEDIUM) — de-risked by the severity-only design

**Finding (re-rated 2026-06-21: was HIGH/CRITICAL → now LOW/MEDIUM).** The central
PIA risk was that the offence-type **category band** ("scam/financial") and an
offence-tied "repeat offender" label were **"sensitive information" (criminal-record
limb, s6(1))**, which would trigger the **APP 3.3 consent** bar — in direct tension
with the locked no-opt-out decision. **The owner's locked severity-only design
change (2026-06-21) removes the cause of that risk** rather than merely re-wording
it:
- The **offence type/category no longer crosses servers.** Only a **generic
  severity level** (minor / serious) travels — it conveys *how serious*, never
  *what the person did*.
- **AI-generated and human-written offence summaries are local-only** and never
  cross the boundary, so no free-text describing alleged wrongdoing is pooled.

On that design the cross-server dataset (pseudonymous user ID + counts + recency +
severity level + fingerprint-match boolean + account-age modifier) is **assessed
NON-sensitive** under s6(1): it is not a "criminal record." **APP 3.3 is therefore
not engaged and no consent is required**; collection rests on **APP 3.2**
(reasonably necessary for the safety function) + **APP 5** notice + **APP 6** limits.
The no-opt-out decision is **no longer in tension** with a consent requirement,
because none is engaged. Under **GDPR**, the parallel **Art. 10 criminal-offence
data** classification is now **very unlikely** for the same structural reason — a
generic severity level is not "data relating to criminal offences." (See B3.1.)

**Why this is a DESIGN de-risk, not a drafting one.** The risk dropped because the
*data that crosses the boundary changed*, not because the words changed. That is
the durable kind of mitigation. The earlier register listed "drop/generalize the
offence-type band" and "summaries local-only" as the cheapest real fixes; the owner
has now **implemented both**.

**Residual (kept honestly, LOW/MEDIUM, mostly EU/UK):**
1. **Keep the severity band genuinely generic.** If an implementation ever let an
   offence label leak into or alongside the severity level, the sensitive/Art. 10
   argument would return. Enforce that only an abstract severity travels.
2. **EU/UK Art. 10 boundary is a regulator-testable line.** A severity signal
   derived from moderation outcomes is *very unlikely* to be Art. 10 data, but the
   boundary between "generic risk severity" and "criminal-offence data" is one a
   supervisory authority could probe. Keep the design under review; minimise
   further if challenged. **Not a launch blocker on the current design, but a
   standing review item.**
3. **Server-admin onboarding notice** still recommended as good practice (supports
   APP 5 and transparency) — now a *nice-to-have*, no longer a consent-gap patch.

This finding is **no longer the single biggest blocker**; with offence-type off the
wire and summaries local-only, R1 is a managed LOW/MEDIUM residual, not a CRITICAL.

---

# PART B — Legitimate Interest Assessment (EU/UK GDPR) [SECONDARY, retained]

GDPR applies on top of Australian law for EU/UK data subjects via **Art. 3(2)**
(monitoring the behaviour of data subjects in the Union). Under GDPR the operator
relies on **legitimate interests, Art. 6(1)(f)**, which requires the three-part
test below. (This is the original assessment, retained and lightly updated — it is
NOT the Australian basis; Australia has no legitimate-interest lawful basis.)

> A three-part test is required to rely on legitimate interests: (1) **Purpose
> test** — is there a legitimate interest? (2) **Necessity test** — is the
> processing necessary for it? (3) **Balancing test** — is the interest overridden
> by the individual's interests, rights, and freedoms? All three must pass.

## B1. Purpose test — is there a legitimate interest?

**The interest.** Protecting the safety and integrity of the communities running
on Server Assistant: preventing fraud, scams, raids, mass-spam, and ban-evasion by
users who move from server to server to repeat abuse. A user banned for scams
across six protected servers should be recognisable on the seventh **before** they
cause harm there.

**Whose interest.** The operator (a safe, trustworthy platform; the network is
core, defining functionality); participating servers and their owners/staff
(protecting members from known cross-server bad actors); and the wider
community/members (the third-party interest in not being scammed, raided, or
harassed by serial offenders).

**Is it legitimate?** Yes. Fraud prevention and network/information security are
expressly recognised legitimate interests (UK/EU GDPR Recitals 47 and 49). The
interest is real, specific, and present.

**Conclusion:** Purpose test **passes**.

## B2. Necessity test — is the processing necessary?

Cross-server recognition of serial abusers is impossible from a single server's
data alone, so pooling is **necessary** to deliver the protective interest. We have
minimized to the least intrusive effective form: only aggregates/bands cross the
boundary; only the v1 signal set that materially predicts cross-server abuse; N≥2
independent-server corroboration; advisory-only (no automated decision-making). A
full-detail dossier (raw reasons, originating-server identity) would be **more**
intrusive and is deliberately not built. **Necessity test passes.**

## B3. Balancing test — interest vs the individual's rights

### B3.1 Nature of the data
- A **pseudonymous Discord user ID** + **minimized behavioural signals** (counts,
  recency, a generic **severity level**, fingerprint-match boolean, account-age
  modifier) about moderation outcomes. No message content, no free-text, no
  AI-generated summary, no offence type/category, no contact/financial data.
- **Special-category data (Art. 9):** none — a generic severity level describes
  *how serious*, not a protected characteristic, and no offence type crosses.
- **Criminal-offence data (Art. 10) — RAISED, now VERY UNLIKELY after the
  severity-only design.** The earlier draft shared an offence-type band
  ("scam/financial") that **plausibly engaged Art. 10** (data relating to criminal
  offences), which is stricter than Art. 9 and needs official authority or
  Member-State-law authorisation a private operator lacks. The locked
  **severity-only design (2026-06-21) takes the offence type/category off the wire
  entirely** and keeps offence summaries **local-only**. A **generic severity
  level** is not "data relating to criminal offences," so on the current design
  Art. 10 is **very unlikely to be engaged** — the GDPR exposure drops from HIGH to
  a LOW/MEDIUM residual. **Residual (honest):** the line between a generic severity
  signal and criminal-offence data is regulator-testable; keep the band abstract
  and the design under review. See A-RISK and the residual-risk register R1.

### B3.2 Reasonable expectations
Discord users generally expect abusive behaviour to have consequences and that
cross-server moderation tools exist; a user banned for scams in many servers would
not reasonably expect that record to be wholly invisible elsewhere. But a
centralized cross-server safety dataset held by one operator is **less obviously
expected** — weighing in favour of strong, prominent disclosure (provided in
`privacy.md`/`terms.md`) and an accessible objection/erasure route.

### B3.3 Possible impact
A wrongly- or maliciously-flagged user could face heightened scrutiny or
pre-emptive moderation. Severity is limited by advisory-only design, conservative
band tuning (favouring false-negatives), N≥2 corroboration, server-standing
weighting, and explainability.

### B3.4 Safeguards (the heart of the balance)
1. Strict data minimization (aggregates/bands only; no free-text, no message
   content, no originating-server identity; local vs network shown separately).
2. **Case-by-case erasure/objection route via `/support`** (Art. 21 / Art. 17) —
   honoured unless documented **compelling legitimate grounds** (a corroborated
   safety/fraud need). Primary safeguard absent an opt-out; refusals documented.
3. Hard **12-month** rolling retention cap → hard-delete.
4. Advisory-only, explainable, appealable — no Art. 22 automated decision with
   legal/similarly-significant effect in v1.
5. Anti-poisoning — server-standing weighting + N≥2 corroboration + power to
   discount/suspend a manipulating server.
6. No opt-out disclosed plainly as the cost of a core, network-effect feature.

### B3.5 Balancing conclusion
On balance the legitimate interest is **not overridden**, given the §B3.4
safeguards **and** the severity-only design that takes the Art. 10 trigger off the
wire. The earlier draft flagged Art. 10 as a potential **hard blocker** — if the
shared signal were criminal-offence data, legitimate interest alone could not carry
it. The locked **severity-only design (2026-06-21) has been designed around that**:
with the offence type/category no longer crossing and summaries local-only, the
shared signal is **very unlikely to be Art. 10 data**, so the balancing test is no
longer hostage to that question. The legitimate-interest basis here is **the
operator's own**, documented in this LIA — it does **not** rely on a server owner
consenting on members' behalf. **Residual:** keep the severity band generic and the
EU/UK boundary under review (B3.1); this remains the most load-bearing GDPR
judgement and benefits from qualified sign-off, but it is **no longer a hard
blocker** on the current design.

## B4. DPIA (GDPR Art. 35) — likely MANDATORY

A DPIA is required where processing is "likely to result in a high risk,"
specifically including (a) systematic/extensive profiling with significant effects,
(b) large-scale processing of Art. 9/10 data, and (c) large-scale systematic
monitoring. A cross-server profiling/risk-scoring network **plausibly hits all
three**, so a DPIA is **effectively mandatory** for EU/UK users. The Australian
analogue is the **PIA in Part A**. Treat both as pre-launch deliverables; this
document is the first draft of both.

---

# PART C — Outstanding items before launch (P0)

- [x] **Severity-only design lock (2026-06-21)** — offence type/category removed
      from the cross-server boundary; AI/free-text offence summaries kept
      local-only. This is the product mitigation that re-rates the sensitive-info
      finding down (A-RISK / R1). Enforce in implementation: only a generic
      severity level crosses; no offence label may leak in.
- [ ] **Qualified privacy-lawyer sign-off** (still prudent, no longer a hard
      blocker on the current design) on: the small-business-exemption-loss
      conclusion (A0), confirmation that a **generic severity level** is
      non-sensitive under s6(1) / not GDPR Art. 10 data (A2 / A-RISK / B3.1), and
      the legitimate-interest balancing conclusion (B3.5).
- [ ] **(Recommended, good practice)** server-admin onboarding notice to members
      (A-RISK #3) — now a transparency nice-to-have, not a consent-gap patch.
- [ ] Complete the **GDPR DPIA** (Art. 35) and finalize this **PIA** (Part A).
- [ ] Confirm **cross-border safeguards** (DPAs/SCCs) for US hosting and overseas
      sub-processors, and the APP 8 / s16C accountability posture for worldwide
      disclosure to participating servers.
- [ ] Operationalise the **`/support`** route: triage, the "compelling legitimate
      grounds" standard, APP 12 access servicing, APP 13 correction, documentation
      of refusals, response SLAs.
- [ ] Confirm the **retention job** hard-deletes at 12 months from last signal
      (APP 11.2 enforcement).
- [ ] **Re-run this PIA+LIA** whenever the v1 signal set, minimization, or
      safeguards change.

---

# PART D — Mapping to customer-facing disclosure
- `privacy.md` → **Cross-Server Threat Network** section (controller-role shift,
  what's shared, **APP-based** legal framing + GDPR legitimate-interest layer,
  minimization, retention, no-opt-out, advisory nature, rights + `/support` route),
  the **Australian Privacy Act / APPs** and **GDPR** rights sections, and the
  **OAIC** + EU/UK supervisory-authority complaint paths.
- `terms.md` → **§6 Cross-Server Threat Network** (core functionality / no opt-out,
  advisory non-auto-actioning, anti-poisoning + appeal, no warranty of accuracy)
  and **§12 Governing law** (Australia).
- `RISK-REGISTER.md` (internal, build-excluded) → the ranked residual-risk register.
