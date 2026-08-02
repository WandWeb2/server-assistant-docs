# Internal legal-review notes

**Internal only. Do not publish, and do not put any of this back into a published page.**

These are the internal legal-review annotations that used to live as HTML comments
inside the published privacy policy (`privacy.md`) and terms of service (`terms.md`).
They were moved here on 2026-08-02.

**Why they moved.** An HTML comment is not private. Jekyll passes it straight through
into the generated page, so every one of these notes was being served to anyone who
chose "view source" on the live site. They contain candid internal risk analysis:
severity ratings, unresolved exposure, references to the internal PIA/LIA and risk
register, and open questions flagged for the owner and a lawyer. That is not customer
copy. This directory is a dotfile directory, which Jekyll excludes from the build, so
notes kept here never reach the published site.

**Standing rule: these notes must NOT be reintroduced into published pages as HTML
comments.** New legal-review annotations belong in this file. If a note needs to be
tied to a specific clause, describe the clause here (heading plus a quoted lead-in),
rather than embedding a marker in the published page.

Each entry below records which published file and clause the note annotated, the note
body **verbatim** (only the enclosing `<!--` and `-->` were stripped), and the status
the note declares in its own label. Bodies are reproduced exactly as written, including
their original punctuation, capitalisation and internal references, because they are
assessment records rather than prose to be edited.

Entries are ordered `privacy.md` first, then `terms.md`, in the order they appeared in
each file.


## 1. `privacy.md`, SEVERITY-ONLY DESIGN / RESIDUAL LOW-MEDIUM

- **Published file:** `privacy.md`
- **Section:** `## Cross-Server Threat Network (ThreatNet)`
- **Clause annotated:** The section's opening paragraph, which begins "Server Assistant operates a **Cross-Server Threat Network**, branded **ThreatNet**, a shared safety signal that helps every protected server recognise users ...". The note sat on its own line immediately after that paragraph, annotating the ThreatNet section as a whole.
- **Declared status:** SEVERITY-ONLY DESIGN / RESIDUAL LOW-MEDIUM

Note body, verbatim:

```text
LEGAL REVIEW (SEVERITY-ONLY DESIGN — RESIDUAL LOW/MEDIUM): This section pools the MINIMUM necessary personal information (a pseudonymous Discord user ID + counts/recency + a generic severity level + a fingerprint-match boolean + an account-age modifier) across servers. SERVERS get NO opt-out (core functionality); INDIVIDUALS get a QUALIFIED opt-out from profiling (via the self-service web-portal toggle — LIVE as of v5.8.0; /support is NOT an opt-out route) with a safety exception — compelling legitimate grounds (GDPR Art. 21(1) + safety/fraud) let the most serious corroborated signals be retained/shared despite an opt-out so bad actors can't evade detection. Plus access/correction/deletion via /support. Assessed APP-by-APP under the Australian Privacy Act 1988 (primary) and as a GDPR legitimate-interest basis (secondary, EU/UK). DESIGN CHANGE (locked 2026-06-21): the offence TYPE/CATEGORY no longer crosses servers (only a severity level does) and AI/free-text offence summaries are LOCAL-ONLY. On that design the cross-server dataset is assessed NON-sensitive under the Privacy Act (not a criminal-record per s6(1)) and very unlikely to be GDPR Art. 10 criminal-offence data, so APP 3.2 (reasonably necessary, non-sensitive, NO consent required) + APP 5 notice + APP 6 limits carry collection; EU/UK rests on legitimate interest per the LIA, NOT server-owner consent. R1 re-rated CRITICAL → LOW/MEDIUM in .omp/RISK-REGISTER.md on the strength of the design. Residual: keep the severity band genuinely generic (no offence label leaking in) and keep the EU/UK Art. 10 boundary under review. Internal assessment: .omp/threat-network-PIA-LIA.md §A2/§A-RISK/§B3; register: .omp/RISK-REGISTER.md R1.
```

## 2. `privacy.md`, CALIBRATED DOWN (DESIGN CHANGE)

- **Published file:** `privacy.md`
- **Section:** `### Why we do this (legal basis)`, within `## Cross-Server Threat Network (ThreatNet)`
- **Clause annotated:** The "On sensitive information" paragraph, which begins "**On sensitive information.** We have deliberately designed the network so that the cross-server data is **not** a "criminal record" ...". The note sat at the end of that paragraph.
- **Declared status:** CALIBRATED DOWN (DESIGN CHANGE)

Note body, verbatim:

```text
LEGAL REVIEW (CALIBRATED DOWN — DESIGN CHANGE): offence type/category no longer crosses servers (severity-only band) and AI/free-text summaries are local-only, so the cross-server dataset is assessed as NON-sensitive under the Privacy Act and very unlikely to be GDPR Art. 10 data. R1 re-rated CRITICAL → LOW/MEDIUM in .omp/RISK-REGISTER.md on the strength of the DESIGN, not wording. AU basis is APP 3.2 (non-sensitive, no consent) + APP 5 notice + APP 6; EU/UK basis is legitimate interest per the LIA, NOT server-owner consent. Residual EU/UK note retained honestly. See .omp/threat-network-PIA-LIA.md §A2/§A-RISK/§B3 and .omp/RISK-REGISTER.md R1.
```

## 3. `privacy.md`, RESOLVED (DRAFTING)

- **Published file:** `privacy.md`
- **Section:** `### Your rights in the Threat Network`, within `## Cross-Server Threat Network (ThreatNet)`
- **Clause annotated:** The EU/UK rights paragraph, which begins "**If you are in the EU or UK**, this same route services your GDPR **right to object** to legitimate-interest processing (Article 21) ...". The note sat at the end of that paragraph.
- **Declared status:** RESOLVED (DRAFTING)

Note body, verbatim:

```text
LEGAL REVIEW (RESOLVED — DRAFTING): Re-based onto APP 12 (access) + APP 13 (correction) + APP 11.2 destruction-when-no-longer-needed as the AU framing (no standalone AU erasure/objection right), with the voluntary case-by-case deletion offered above the statutory floor; GDPR Art. 21/17 layered for EU/UK. The only residual is operational, not drafting: the "compelling/corroborated grounds" standard must be applied consistently and refusals documented when an opt-out / erasure request is actioned — tracked in .omp/threat-network-PIA-LIA.md Part C and .omp/RISK-REGISTER.md.
```

## 4. `terms.md`, SEVERITY-ONLY DESIGN / RESIDUAL LOW-MEDIUM

- **Published file:** `terms.md`
- **Section:** `## 6. Cross-Server Threat Network (ThreatNet)`
- **Clause annotated:** The member-notice bullet, which begins "**Notice to members is ours, not yours.** Giving members notice of the network is **our** responsibility as the operator ...". The note sat at the end of that bullet.
- **Declared status:** SEVERITY-ONLY DESIGN / RESIDUAL LOW-MEDIUM

Note body, verbatim:

```text
LEGAL REVIEW (SEVERITY-ONLY DESIGN — RESIDUAL LOW/MEDIUM): A server owner accepting these Terms binds the server to no-opt-out CONTRIBUTION (servers cannot opt out; individuals get a qualified opt-out — see Appeals bullet). NOTICE REFRAME (locked 2026-06-21): notice is the OPERATOR's responsibility (Privacy Policy + bot-delivered notice on install + on-demand command forthcoming/roadmap), NOT a server-owner obligation — owners are encouraged, not obliged. With the offence type/category no longer crossing (severity-only) and summaries local-only, the cross-server signals are assessed NON-sensitive (AU) and very unlikely to be GDPR Art. 10 data, so APP 3.3 consent is not engaged and the AU basis is APP 3.2 + APP 5 + APP 6; EU/UK rests on legitimate interest per the LIA, NOT server-owner consent (the docs deliberately do NOT over-rely on owner-consent-for-everyone). Member notice is transparency, not the basis. See .omp/threat-network-PIA-LIA.md §A2/§A-RISK and .omp/RISK-REGISTER.md R1.
```

## 5. `terms.md`, NEW (AUTOMATED ACTION, needs sign-off)

- **Published file:** `terms.md`
- **Section:** `## 6. Cross-Server Threat Network (ThreatNet)`
- **Clause annotated:** The auto-protect bullet, which begins "**Advisory by default; optional Premium automated action.** For every server, the network score is **advisory** ...". The note sat at the end of that bullet.
- **Declared status:** NEW (AUTOMATED ACTION, needs sign-off)

Note body, verbatim:

```text
LEGAL REVIEW (NEW — AUTOMATED ACTION, needs sign-off): REVERSES the prior "advisory only — never auto-actions" stance for Premium opt-in servers. A fully automated ban with a significant effect engages GDPR Art. 22. Mitigations shipped: opt-in only + OFF by default, default threshold = high+corroborated, opt-out always honoured, automated-decision notice + human-review/appeal route, audit log, no re-emission of a network signal from an auto-ban, in-app warning when an admin picks a lower threshold. NOTE (floor REMOVED 2026-06-22, RESTORED 2026-08-02): the hard 'high' floor was removed at the owner's instruction on 2026-06-22, which left 'low' selectable. Owner decision of 2026-08-02 put a floor back at 'elevated' (shipped v6.112.0), enforced at both the write sites and the read site so a stored 'low' is raised on read, with 'low' removed from the picker (bot.py:9871, 9874, 41276). A server may still broaden one step below the default, so this NARROWS false-positive and Art. 22 exposure rather than closing it: at 'elevated' a single serious signal still acts without corroboration, and the server bears responsibility for the level it sets within the allowed range. Residual: a wrongly-banned END USER never accepted these Terms (defamation / Art. 22 / ACL). Confirm with the owner AND a lawyer before publishing.
```

## 6. `terms.md`, PARTIALLY RESOLVED

- **Published file:** `terms.md`
- **Section:** `## 6. Cross-Server Threat Network (ThreatNet)`
- **Clause annotated:** The accuracy-disclaimer bullet, which begins "**No warranty of accuracy.** The network score is a **probabilistic, advisory signal** ...". The note sat at the end of that bullet.
- **Declared status:** PARTIALLY RESOLVED

Note body, verbatim:

```text
LEGAL REVIEW (PARTIALLY RESOLVED): The advisory-only framing + §8 (No warranty) + §9 (Limitation of liability) disclaim liability between us and the SERVER OWNER who accepts these Terms. RESIDUAL, needs a lawyer: (a) a wrongly-flagged END USER is a third party who never accepted these Terms, so this clause does not bind them — exposure to a defamation / misleading-data / privacy complaint by a flagged individual is NOT disclaimed by Terms the individual never agreed to; and (b) under the Australian Consumer Law, certain consumer guarantees and liability cannot be excluded by contract, so the §9 cap may not hold against an Australian consumer regardless of wording. Advisory-only design, correction rights (APP 13), and conservative tuning are the real mitigations here, not the disclaimer. See .omp/RISK-REGISTER.md.
```
