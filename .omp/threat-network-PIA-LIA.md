# Privacy Impact Assessment (PIA, Australian) + Legitimate Interest Assessment (LIA, GDPR) — Cross-Server Threat Network

**Status:** DRAFT — best-effort internal assessment. **NOT a substitute for legal
advice.** This document was prepared without a qualified privacy lawyer. Several
conclusions below are flagged as requiring professional sign-off before any
cross-server data moves (this remains a P0 blocking prerequisite). Do not treat
any "passes"/"likely" judgement here as certified compliance.

**Controller / APP entity:** Wandering Webmaster (the "operator"), located in
**Queensland, Australia**, serving Discord servers **worldwide**.
**Drafted:** 2026-06-21 (re-based from a UK/EU-GDPR-only draft to Australian-primary).
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

**Sensitive information — THE CENTRAL RISK (see A-RISK below).** "Sensitive
information" under s6(1) expressly includes **criminal record**. A signal that a
user was **banned/actioned for "scam/financial" abuse** or is a **repeat
offender** is information/opinion about alleged wrongdoing tied to an identifiable
user — it **plausibly engages the "criminal record" limb** even though these are
platform-rule violations, not court convictions. If any shared signal is
sensitive information, **APP 3.3 requires consent** — which the **locked
no-opt-out decision cannot provide** — unless an **APP 3.4 exception** carries it.

The candidate APP 3.4 exceptions are the "permitted general situations":
**lessening/preventing a serious threat to safety**, and **taking appropriate
action in relation to suspected unlawful activity or serious misconduct**. These
are real and arguable for a safety network, BUT they are framed for **specific,
situational** action — not obviously for a **standing, pooled, always-on scoring
dataset about every actioned user**. This is the **sharpest Australian exposure
in the whole design** and is the item most in need of legal advice. See A-RISK
and the residual-risk register.

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
minimization safeguards. If the signal is **sensitive information**, the bar is
higher (directly related + reasonably expected, or consent/exception) — see A2.
**Defensible with the disclosed safeguards; tightest where signals are sensitive.**

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

## A-RISK. Sensitive-information / criminal-record exposure (HIGH) — the central PIA finding

**Finding.** The "scam/financial" / "repeat offender" / serious-AutoMod-category
signals **plausibly are "sensitive information" (criminal-record limb) under
s6(1)**. If so, **APP 3.3 generally requires consent** to collect them — which is
in **direct tension with the LOCKED no-opt-out decision** (no opt-out ⇒ no
consent). Lawful collection would then have to rest on an **APP 3.4 exception**
(serious-threat-to-safety / suspected-unlawful-activity-or-serious-misconduct),
whose fit with a **standing pooled scoring network** is **uncertain**. Under GDPR
the parallel is even harsher: **Art. 10 criminal-offence data** may be processed
only under official authority or specific Member-State-law authorisation — neither
of which a private Discord operator has (Part B).

**This tension cannot be fully cured by drafting.** It is documented here
prominently and surfaced (in plain language) in `privacy.md`. The cheapest
realistic mitigations, in rough order of value:
1. **Server-admin notice + consent at onboarding.** Have the server admin present
   members with a clear notice (and, ideally, an acknowledgement) that the server
   participates in the network and what is shared. This pushes an APP-5-style
   notice — and a possible consent layer — to the point of collection, partially
   addressing both APP 3.3 consent and APP 5 notification without giving servers a
   network opt-out. **Cheapest, highest-value; recommended.**
2. **Tighten which signals cross the boundary to stay below the sensitive
   threshold.** e.g. share only a generic risk *band* and counts/recency, and
   **drop or further generalize the offence-type category band** ("scam/financial")
   that most clearly evokes a "criminal record." The less the shared signal reads
   as "this person committed offence X," the weaker the sensitive-information /
   Art. 10 argument. **Product change; high value for de-risking.**
3. **Frame and operate strictly as a safety/security exception.** Document the
   network's reliance on the serious-threat-to-safety / suspected-serious-
   misconduct limbs (APP 3.4) and only let genuinely serious signals contribute —
   keeping the design within the spirit of those exceptions. **Supports the legal
   argument but does not by itself resolve the consent gap.**
4. **Get legal advice specifically on the APP 3.4 fit and the GDPR Art. 10 point
   before launch.** This is the one item no drafting removes.

**Do NOT paper over this.** It is the single most important finding of this PIA.

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
- Discord **user ID** + **minimized behavioural signals** (counts, recency, bands,
  match booleans) about moderation outcomes. No message content, no free-text, no
  contact/financial data.
- **Special-category data (Art. 9):** design intent is none — bands describe the
  abuse *type* ("scam/financial"), not protected characteristics.
- **Criminal-offence data (Art. 10) — RAISED, not dismissed.** A signal that a
  user was banned for "scam/financial" abuse or is a "repeat offender" **plausibly
  engages Art. 10** (data relating to criminal offences), which is **stricter than
  Art. 9**: it may be processed **only under the control of official authority or
  where authorised by Union/Member-State law with appropriate safeguards.** A
  private Discord operator has **neither**. **This is a HIGH GDPR exposure and is
  NOT resolved** — mitigations are the same as A-RISK (tighten/generalize the
  offence-type signal; legal advice). See residual-risk register.

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
On balance the legitimate interest is **not overridden**, **provided the §B3.4
safeguards hold AND the Art. 10 criminal-offence-data question is resolved in the
operator's favour or designed around.** The Art. 10 point is a potential **hard
blocker** that the balancing test cannot cure by itself: if the shared signal is
Art. 10 data and no authority/authorisation exists, legitimate interest is not
enough under GDPR. **This conclusion is the most legally load-bearing judgement in
the document and requires qualified sign-off.**

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

- [ ] **Qualified privacy-lawyer sign-off** on: the small-business-exemption-loss
      conclusion (A0), the sensitive-information/criminal-record classification and
      APP 3.4 fit (A-RISK), the GDPR Art. 10 position (B3.1/B3.5), and the
      legitimate-interest balancing conclusion (B3.5).
- [ ] **Decide the sensitive-info mitigation** before launch: at minimum implement
      the server-admin onboarding notice (A-RISK #1) and seriously consider
      dropping/generalizing the offence-type category band (A-RISK #2).
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
