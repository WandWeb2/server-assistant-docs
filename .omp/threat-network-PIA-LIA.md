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

> **Citing code: name the SYMBOL, and treat the line number as a hint.**
> `bot.py` and `relay.py` are single-file production entry points of ~41k and ~33k
> lines. The line references in this document have now drifted **twice**: once when
> they were written against v6.111.0/v6.113.0 and never re-verified, and again when
> v6.114.0 moved `bot.py` by roughly 130 to 310 lines depending on the region. The
> drift is **not uniform**, so no offset can be applied in bulk, and several stale
> citations landed on unrelated code that read plausibly, which is worse than landing
> on nothing. Re-verified in full on 2026-08-02 against `BOT_VERSION` **6.114.0** and
> `RELAY_VERSION` **1.11.88**. **When you add or repair a reference, lead with the
> function, constant or setting key** (write "the full-Premium re-check
> (`_threatnet_autoban_gate`)", not a bare line number):
> the symbol survives a refactor and can be re-found with one grep. Keep the line
> number only where it genuinely aids navigation, and re-derive it by searching for
> the symbol rather than by adjusting the old number.

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
a **generic severity level** (e.g. minor / serious), and an account-age modifier
— **no offence type or category, and no free-text or AI-generated summary**
(summaries are local-only). **A fingerprint-match boolean (`altguard_match`) was
listed here and no longer crosses the boundary at all**: v6.112.0 removed the key
from the signal payload sent by `_emit_threat_signal` (`bot.py:4189-4204`) and the
dossier line that read it in `_render_network_threat_value` (`bot.py:37639-37640`).
The relay still carries the column at `DEFAULT 0` (the `threat_signals` schema,
`relay.py:706`) and `threat_record_signal` defaults the field to `False` when it is
absent (`relay.py:27757`), so nothing on that side depends on it being sent. Narrower
than assessed, not wider. A generic severity level does
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
constrained. Mitigations now reflected in the docs (NOTICE REFRAME, 2026-06-21 — notice is the
**operator's** responsibility, no longer pushed onto server owners):
- The public `privacy.md` is the standing APP 5 notice (purposes, overseas
  transfer, access/complaint path, OAIC).
- **Operator-delivered notice:** the Bot delivers an **in-Discord notice on install**,
  and an **on-demand command surfacing the disclosure is forthcoming (roadmap, not
  yet live)**. `terms.md` and `privacy.md` now state plainly that giving notice is
  **ours**, and that server owners are **encouraged but not obliged** to inform
  members. This replaces the earlier "owner must notify members" framing.
**Partially met; residual gap flagged** (subjects collected-about indirectly; the
operator-delivered notices are the reasonable-steps improvement).

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
  stays accountable under s16C for what those servers do with it. Minimization
  limits this, but it is a real residual. (**Corrected 2026-08-02:** this
  previously also credited an "advisory-only" design. It is not advisory-only,
  see B3.3 to B3.6.)
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

## A9. Mapping the owner's qualified opt-out + `/support` erasure/objection promise onto Australian law

**Updated 2026-06-21 — the owner locked a QUALIFIED INDIVIDUAL OPT-OUT** (servers
still cannot opt out — that is core, mandatory functionality — but the *individual*
being scored may opt out of network profiling). **Corrected 2026-08-02: the
self-service portal toggle is LIVE, not roadmap.** It shipped in v5.8.0 and is the
only opt-out route: `GET`/`POST /api/portal/threat-optout`
(`portal_threat_optout_get` / `portal_threat_optout_set`), always scoped to the
authenticated caller's own Discord id (`relay.py:16372-16410`), behind the portal's
ThreatNet card (`renderThreatPref`, `relay.py:20013-20025`). `/support` is **not** an
opt-out route (the `threatnet` command group's standing note, `bot.py:41365-41368`,
and `threatnet_status`, which is read-only and points at the portal); it remains the
route for **access, correction and erasure**,
which is what the rest of this section and A8 assess. It is **qualified by a safety
exception**: where there
are **compelling legitimate grounds** (a verified raid/scam/ban-evasion need), the
most serious corroborated signals may still be retained/shared despite the opt-out,
so a known bad actor cannot opt out to evade detection. This **supersedes the earlier
"no opt-out UI / case-by-case erasure only" stance** and is a **strong mitigation**:
the data subject now has an affirmative, advertised way to stop profiling, not merely
a discretionary erasure request.

The product promises an individual can **opt out of profiling** (self-service in the
web portal, live since v5.8.0), and request **erasure of, or object to**, their
network record via `/support`. **Australian law
gives no standalone right to erasure or right to object.** That promise maps onto
Australian law as:
- **APP 13 correction** (fix/remove an inaccurate or misleading signal), plus
- **APP 11.2 destruction/de-identification** once a record is no longer needed
  (the 12-month cap, and earlier where a signal is shown unfounded), plus
- a **good-practice voluntary opt-out and deletion** the operator chooses to offer
  beyond the statutory floor — i.e. the operator is promising **more** than the APPs
  require. The **safety exception** is the APP-side analogue of GDPR Art. 21(1)
  compelling-legitimate-grounds: the voluntary opt-out is honoured unless a
  corroborated safety/fraud need justifies retaining the most serious signals.
There is no Australian-law conflict in offering this; the customer-facing wording
just should not imply a *statutory* Australian erasure right that doesn't exist.
For **EU/UK** users the same `/support` route additionally services the **GDPR
Art. 21 objection** (honoured unless **compelling legitimate grounds** under
**Art. 21(1)** — the safety exception) and **Art. 17 erasure** rights (Part B).

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
severity level + account-age modifier; the **fingerprint-match boolean was listed
here and has not crossed the boundary since v6.112.0**, which stopped sending the key
at all: `_emit_threat_signal` payload `bot.py:4189-4204`, dossier line removed from
`_render_network_threat_value` `bot.py:37639-37640`, relay column held at `DEFAULT 0`
in the `threat_signals` schema `relay.py:706` and defaulted to `False` when absent in
`threat_record_signal` `relay.py:27757`) is **assessed
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
independent-server corroboration. A
full-detail dossier (raw reasons, originating-server identity) would be **more**
intrusive and is deliberately not built.

**Corrected 2026-08-02.** This test previously also claimed "advisory-only (no
automated decision-making)". That is false of the shipped product and has been
removed. What is necessary here is the **pooling**. Automated action on a pooled
signal is **not** necessary to the purpose: it is a convenience for the
participating server, sparing its staff the work of acting on a signal they have
already been shown. It is assessed on that footing in B3.5 and B3.6.
**Necessity test passes.**

## B3. Balancing test — interest vs the individual's rights

### B3.1 Nature of the data
- A **pseudonymous Discord user ID** + **minimized behavioural signals** (counts,
  recency, a generic **severity level**, account-age modifier) about moderation
  outcomes. No message content, no free-text, no AI-generated summary, no offence
  type/category, no contact/financial data.
- **Alt-guard fingerprint-match boolean: SPECIFIED BUT NOT IN USE, corrected
  2026-08-02.** Earlier revisions of this assessment listed a fingerprint-match
  boolean among the signals crossing the boundary. The network schema carries the
  field, but **no call site sets it true**, so the value transmitted is invariably
  false and **no fingerprint-derived indicator about any individual is in fact
  shared**. It is accordingly excluded from the nature-of-data above, and the five
  corresponding claims in `privacy.md` were corrected on the same date rather than
  left asserting a disclosure wider than the processing. **If it were ever wired
  up**, a local fingerprint judgement would begin crossing the boundary and the
  balancing test at B3 would not cover it; the assessment must be re-run before any
  such change ships.
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

**Re-run 2026-08-02 against automated action.** The previous text limited severity
by an "advisory-only design". The design is not advisory-only, so that limit has
been removed rather than qualified.

A wrongly or maliciously flagged user faces heightened scrutiny, pre-emptive
moderation, and, on servers that have enabled either automated path, **immediate
exclusion from a community without any human considering their case**.

The impact is no longer limited by an advisory-only design, because the design is
no longer advisory-only. It is limited instead by: the fact that both automated
paths are **off by default** and must be switched on per server; conservative band
derivation favouring false negatives; N≥2 corroboration for the `high` band;
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

### B3.4 Safeguards (the heart of the balance)

**Re-run 2026-08-02.** Safeguard #4 previously read "Advisory-only, explainable,
appealable, no Art. 22 automated decision with legal/similarly-significant effect
in v1". Three of those four claims are false of the shipped product. The claim has
been **removed, not qualified**, and replaced with what actually constrains the two
automated paths.

1. Strict data minimization: aggregates and bands only, no free text, no message
   content, no originating-server identity, local and network shown separately.
2. Qualified individual opt-out from profiling, plus an erasure and objection route,
   via `/support` and the portal toggle (Art. 21 / Art. 17), honoured unless
   documented compelling legitimate grounds under Art. 21(1) apply. Verified in
   code: opt-out suppresses the dossier (`_threat_dossier`, `relay.py:1741-1769`)
   **and** stops collection (the write guard in `_threat_record_signal`,
   `relay.py:1559-1561`).
3. Hard 12-month rolling retention cap, then hard delete.
4. **Automated action exists and is bounded, but the network is no longer
   advisory-only.** The safeguard that used to sit here, "no Art. 22 automated
   decision", **no longer exists and should not be claimed.** What actually
   constrains the two automated paths is:
   - **Off by default, opt-in per server, and revocable at any time.** Neither path
     acts anywhere the server has not deliberately switched it on: the
     `altguard_enabled` and `threatnet_autoban_enabled` settings both default
     `False` (`bot.py:714`, `698`).
   - **Plan and permission gating.** Auto-protect is full Premium only, re-checked
     at action time so a lapsed plan stops acting immediately (the
     `is_premium_full` test inside `_threatnet_autoban_check`, `bot.py:10083`).
     Both paths need Manage Server or above to enable (`slash_altguard`,
     `bot.py:39984`; `threatnet_autoban` via `_can_manage_server`, `bot.py:41511`).
   - **Fail-safe on uncertainty.** No record, a relay outage, a suppressed dossier,
     or missing permissions all resolve to no ban (`_threatnet_autoban_check`,
     `bot.py:10096-10102`, and the `discord.Forbidden` branch at `10113-10116`).
   - **A conservative default threshold.** Auto-protect defaults to `high`, meaning
     serious and corroborated across two or more independent servers
     (`_THREATNET_AUTOBAN_DEFAULT_BAND`, `bot.py:9991`; `_threat_band`,
     `relay.py:1466-1467`).
   - **A high bar on the alt-guard side, in practice a shared profile picture.**
     Score 70 with a strong signal, which the arithmetic restricts to the avatar
     route (`_altguard_handle`, `bot.py:8793`; the scoring in `_altguard_match`,
     `bot.py:8729-8750`).
   - **Human review after the fact, through `/support` and the portal, open to
     anyone whether or not they were notified**, plus the ban-reason DM and staff
     reply route on the alt-guard path.
   - **Audit and staff visibility.** Both paths write a mod-log record and post a
     staff notice (`_altguard_handle`, `bot.py:8814-8833`;
     `_threatnet_autoban_check`, `bot.py:10121-10137`).

   **What is not a safeguard, recorded so it is not mistaken for one:** the floor
   under the auto-protect threshold is back at `elevated` since 2026-08-02
   (`_THREATNET_AUTOBAN_FLOOR_BAND`, `bot.py:9999`) but the operating point above it
   is still the customer's to set,
   there is no human confirmation step on either path, and no notice at all to the
   person on the auto-protect path. An automated ban is no longer able to become a
   cross-server signal (both paths suppress the emit since v6.112.0, residual 2
   below), but that suppression is in-process state and does not survive a restart
   between the mark and the ban event.
5. Anti-poisoning: server-standing weighting, N≥2 corroboration, and the power to
   discount or suspend a manipulating server.
6. No **server** opt-out, disclosed plainly as the cost of a core network-effect
   feature, with the individual opt-out in #2 carrying the data subject's side.

### B3.5 Balancing conclusion

**Re-run 2026-08-02 against automated action.**

**The interest is still legitimate and the processing is still necessary. The
balance is closer than it was, and it now has to be struck against automated action
rather than against advice.**

The purpose test (B1) and the necessity test (B2) are unaffected by automated
action, with one correction, now applied: B2's parenthetical "advisory-only (no
automated decision-making)" was wrong and has been removed. Pooling remains
necessary for cross-server recognition of serial abusers. Automated action is not
necessary for that purpose: it is a **convenience for the participating server**,
sparing staff the work of acting on a signal they have already been shown. That
distinction matters, because a safeguard given up for convenience weighs
differently in the balance than one given up out of necessity.

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
2. **Automated action could manufacture its own evidence. MITIGATED 2026-08-02,
   shipped in v6.112.0.** As originally assessed, an alt-guard auto-ban was emitted
   to the network as a `serious` signal, and two of them from independent servers
   produced the `high` band that triggers auto-protect elsewhere (`_threat_band`,
   `relay.py:1466-1467`). The network could not distinguish an automated ban from a
   staff ban, because `altguard_match` is never set. A person wrongly auto-banned
   twice on an avatar match therefore acquired a cross-server record reading exactly
   like a corroborated serious offender's, and it would be acted on automatically by
   servers that never saw the original matches. This was recorded here as the most
   serious residual. **Both automated paths now suppress the emit**: a mark/consume
   pair around the ban keeps an alt-guard automatic ban out of the network
   (`_altguard_recent_autoban` with `_altguard_autoban_mark` / `_altguard_autoban_consume`,
   `bot.py:8767-8785`; marked at `8796` inside `_altguard_handle` before the ban
   because the gateway event can land mid-await, cleared at `8802` and `8806` if the
   ban is refused; consumed in `on_member_ban` at `10178`), mirroring the equivalent
   pair that already covered the ThreatNet auto-protect path
   (`_threatnet_recent_autoban` with `_threatnet_autoban_mark` /
   `_threatnet_autoban_consume`, `bot.py:10018-10034`). Only the emit is suppressed: the staff
   alert, the local offender record and the ban-appeal DM are unaffected, a **staff**
   ban of the same user still emits exactly as before, and the mark is time-boxed to
   120s so a stale one cannot silence a genuine staff decision later. **What remains:**
   the suppression is in-process state, so it does not survive a restart between the
   mark and the ban event, and it addresses the manufacture of NEW automated evidence
   rather than any record created before v6.112.0. Register: R9 residual 4.
3. **The threshold floor is back at `elevated`, and the customer still sets the
   level above it.** Owner directive, 2026-06-22, removed the hard `high` floor,
   which left `low` selectable: a server could set auto-protect to `low`, at which a
   single minor signal from a single server, one kick or one warning, banned on
   sight (the `low` fall-through in `_threat_band`, `relay.py:1470`, acted on by the
   band comparison in `_threatnet_autoban_check`, `bot.py:10101`), and at that
   setting corroboration, which
   is the safeguard the rest of this assessment leans on hardest, did no work at
   all. Owner decision, 2026-08-02, put a floor back at `elevated` rather than the
   original `high` (`_THREATNET_AUTOBAN_FLOOR_BAND`, `bot.py:9999`, shipped in
   v6.112.0): `low` is no longer offered by the `/threatnet autoban` level picker
   (`bot.py:41501-41503`) and every read normalises a stored `low` up to `elevated`
   (`_threatnet_autoban_band`, `bot.py:10002-10015`), so a server can no longer cause
   a ban on a single
   uncorroborated record. That narrows this residual rather than closing it. The
   operating point above the floor is still the server's choice, and `elevated`
   still acts on a single serious signal, so the false-positive rate is set per
   server rather than by the operator. The command warns the administrator and
   places responsibility on them (the `warn` string in `threatnet_autoban`,
   `bot.py:41550-41556`). That is a fair allocation
   between operator and customer, but it is **not** a safeguard for the data
   subject, who is not party to that allocation and cannot see what level a server
   has chosen.
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
   (`_send_ban_appeal`: the toggle gate at `bot.py:9024`, the `discord.Forbidden` /
   `HTTPException` fall-through to `dm_failed` at `9065-9069`). The staff alert
   depends on a log channel or staff chat being configured (the `dest_id` lookup in
   `_altguard_handle`, `bot.py:8814-8816`). A server with neither set, and with
   ban appeals off, will auto-ban a joining member with **nobody notified at all**,
   neither the person nor the staff.
6. **Art. 22(2) is not squarely satisfied by any of the three gates.** The
   processing is not necessary for a contract with the data subject, who has no
   contract with the operator. It is not authorised by Union or Member State law.
   It does not rest on the data subject's explicit consent. The honest position is
   that the operator relies on the safeguards, the opt-out, and the after-the-fact
   human route, rather than on a clean Art. 22(2) exemption. **This is the single
   point on which qualified legal advice would be most useful**, and it was not
   part of what was signed off on 2026-08-02. Targeted advice on exactly this
   question has since been sought and is outstanding (see the decision log in
   `.omp/RISK-REGISTER.md`).

**Conclusion.** The balance passes on the current configuration, and the passing is
narrower and more contingent than the previous text implied. It should be re-run
again if the default threshold changes, if either path is made on by default, if the
alt-guard scoring or its 70 threshold changes, or if the chaining in residual 2 is
left unaddressed.

#### Unchanged by this re-run: the Art. 10 and Art. 21(1) findings

The two paragraphs below are the 2026-06-21 balancing findings on criminal-offence
data and on the qualified opt-out. The automated-action re-run above does not
disturb either, and R1 in `.omp/RISK-REGISTER.md` still rests on them, so they are
retained here rather than replaced.

On balance the legitimate interest is **not overridden**, given the §B3.4
safeguards **and** the severity-only design that takes the Art. 10 trigger off the
wire. The earlier draft flagged Art. 10 as a potential **hard blocker** — if the
shared signal were criminal-offence data, legitimate interest alone could not carry
it. The locked **severity-only design (2026-06-21) has been designed around that**:
with the offence type/category no longer crossing and summaries local-only, the
shared signal is **very unlikely to be Art. 10 data**, so the balancing test is no
longer hostage to that question. The legitimate-interest basis here is **the
operator's own**, documented in this LIA — it does **not** rely on a server owner
consenting on members' behalf.

The **qualified individual opt-out locked 2026-06-21 further strengthens the
balance.** Art. 21(1) already gives EU/UK data subjects the right to object to
legitimate-interest processing, defeated only by **compelling legitimate grounds**;
the product now **implements exactly that** — an affirmative opt-out honoured unless
a corroborated safety/fraud need justifies retaining the most serious signals. This
moves the design from "no opt-out, rely on minimization + case-by-case erasure" to
"Art. 21(1)-shaped opt-out with a documented compelling-grounds exception," which is
materially more favourable to the data subject and squarely within how Art. 21(1) is
meant to operate. The remaining tension is no longer *whether* an objection right
exists (it is now offered affirmatively) but only the **consistent, documented
application** of the compelling-grounds exception (operational — see Part C / R8).
**Residual:** keep the severity band generic and the EU/UK Art. 10 boundary under
review (B3.1); apply the compelling-grounds exception consistently and document
refusals. This remains the most load-bearing GDPR judgement and benefits from
qualified sign-off, but it is **no longer a hard blocker** on the current design.

### B3.6 Article 22 position

**Added 2026-08-02.**

Both automated paths are decisions based solely on automated processing. Whether
being banned from a Discord community is a "similarly significant effect" is
arguable rather than settled, and the operator has chosen not to argue it: the
published Privacy Policy applies Art. 22 safeguards to both paths and extends
equivalent care to all users regardless of jurisdiction (`privacy.md`, the
*Advisory by default, and optional Premium automated action* section). This
assessment adopts the same posture. Treating the effect as significant is the
conservative reading and it costs nothing to hold.

Measures in place against Art. 22(3):

- Disclosure of the existence and general logic of the automated decision-making,
  in the Privacy Policy.
- A standing route to human intervention, to express a point of view, and to
  contest, via the portal or `/support`, open to anyone whether or not they were
  individually notified (`slash_support` / `slash_feedback`, `bot.py:41572-41579`,
  both entering `_open_support_ticket` at `41314`; portal side,
  `portal_threat_optout_get` / `_set` and `renderThreatPref`).
- On the alt-guard path only, individual notification through the ban-reason DM and
  a reply that reaches that server's staff.
- Correction and erasure on the same terms as the rest of the policy, subject to
  the published compelling-grounds safety exception.

Measures **not** in place, recorded honestly:

- No human confirmation before either action.
- No individual notification at all on the auto-protect path.
- No operator control of the threshold above the floor: there is a floor again since
  2026-08-02, at `elevated` (`_THREATNET_AUTOBAN_FLOOR_BAND`, `bot.py:9999`), but the
  level above it is the server's to set.
- No DURABLE barrier between an automated ban and the cross-server record it
  creates: both paths suppress the emit since v6.112.0 (`_altguard_recent_autoban`,
  `bot.py:8767-8785`; `_threatnet_recent_autoban`, `bot.py:10018-10034`), but the
  mark is in-process and does not survive a restart between
  the mark and the ban event.

The Art. 22(2) question (whether any of contract, Member State law, or explicit
consent provides a gate) is not resolved by this assessment. Targeted legal advice
on that specific question has been sought and is outstanding. See R9 and the
decision log in `.omp/RISK-REGISTER.md`.

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
- [x] **Qualified individual opt-out lock (2026-06-21)** — servers cannot opt out;
      the *individual* can opt out of profiling, subject to a compelling-grounds
      safety exception (Art. 21(1) + APP framing). Supersedes the old "no opt-out
      UI / case-by-case erasure only" stance and strengthens the objection analysis
      (A9 / B3.4 #2 / B3.5). **Portal toggle: DONE, shipped v5.8.0** (corrected
      2026-08-02; this item previously read "on the roadmap, NOT yet live" and
      "service opt-outs via `/support`" as the interim). Self-service opt-out is
      now the **only** opt-out route: `GET`/`POST /api/portal/threat-optout`
      (`portal_threat_optout_get` / `portal_threat_optout_set`), session-scoped to
      the caller's own Discord id (`relay.py:16372-16410`), UI in `renderThreatPref`
      (`relay.py:20013-20025`). `/support` is **not** an opt-out route (the
      `threatnet` group's standing note, `bot.py:41365-41368`); it stays the route
      for access, correction and erasure.
- [x] **Notice reframe (2026-06-21)** — providing member notice is the OPERATOR's
      responsibility (Privacy Policy + bot-delivered notice on install + on-demand
      command forthcoming/roadmap), NOT a server-owner obligation. Removed the
      "server owners must notify their members" requirement from `terms.md`.
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
  minimization, retention, no-opt-out, the **advisory-by-default nature and the
  optional automated action** with its Art. 22 disclosure (corrected 2026-08-02
  from "advisory nature"), rights + `/support` route),
  the **Australian Privacy Act / APPs** and **GDPR** rights sections, and the
  **OAIC** + EU/UK supervisory-authority complaint paths.
- `terms.md` → **§6 Cross-Server Threat Network** (core functionality / no opt-out;
  **advisory by default with optional Premium automated action**, corrected
  2026-08-02 from the stale "advisory non-auto-actioning" description, which
  `terms.md` itself no longer says: §6 discloses the auto-protect ban as an
  automated decision with a human-review route, and the server-set threshold and
  its responsibility for it, see B3.6; anti-poisoning + appeal; no warranty of
  accuracy) and **§12 Governing law** (Australia).
- `RISK-REGISTER.md` (internal, build-excluded) → the ranked residual-risk register.
