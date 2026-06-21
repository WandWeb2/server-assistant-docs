---
layout: default
title: Server Assistant Terms of Service
permalink: /terms/
description: Server Assistant terms of use — permitted use, moderation responsibility, AI features, billing, and no-warranty clause.
---
# Server Assistant Terms of Service

**Effective date:** May 9, 2026
**Last updated:** June 21, 2026

Server Assistant is built and maintained by **Wandering Webmaster** ([wandweb.co](https://wandweb.co)) ("we", "us", "our"). These terms govern your use of the Server Assistant Discord bot ("the Bot"). By inviting the Bot to a server, the server owner agrees to these terms on behalf of that server.

---

## 1. Acceptance

You accept these terms by inviting the Bot to a server you own or administer. Continued use constitutes ongoing acceptance.

---

## 2. Eligibility

You must comply with [Discord's Terms of Service](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines) at all times. The Bot is intended for users aged 13 and above (or the minimum age required by Discord in your jurisdiction).

---

## 3. Permitted use

The Bot is provided for legitimate moderation and community-management purposes. You agree not to:

- Use the Bot to harass, threaten, dox, or harm any user
- Use the Bot to violate Discord's Terms of Service or Community Guidelines
- Circumvent Discord's rate limits, anti-spam systems, or technical safeguards
- Reverse-engineer, decompile, or attempt to extract the Bot's source code or stored secrets
- Interfere with the Bot's operation in other servers
- Resell, sublicense, or redistribute the Bot without explicit written permission

---

## 4. Server-owner responsibility

You are solely responsible for:
- All moderation decisions made through the Bot in your server
- The accuracy of warnings, notes, and other moderation records you create
- Configuring appropriate roles, permissions, and channels
- Ensuring your server complies with applicable laws

We give members notice of the Bot's [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) and of the Cross-Server Threat Network ourselves (see §6); you are **encouraged** to point your members to the Privacy Policy as good practice, but we do **not** make member-notice your obligation.

The Bot is a tool. Final accountability for any moderation action rests with the staff member who invoked it.

---

## 5. AI features

The Bot offers optional AI features (SAi, Message Report, Self-trained AutoMod, Pulse, `/imagine`) powered by Anthropic and optionally by third-party providers (xAI, OpenAI) when you supply your own key:

- AI-generated content is **not guaranteed to be accurate or appropriate**
- You are responsible for reviewing AI output before relying on it for moderation decisions
- AI providers may process transmitted data per their own privacy policies
- We don't guarantee continued availability of any specific AI provider or model
- If you supply your own API keys (BYOK mode), you are responsible for any costs incurred with that provider

---

## 6. Cross-Server Threat Network

The Bot operates a **Cross-Server Threat Network** — a shared safety signal that helps protected servers recognise users with a serious, corroborated history of abuse on other protected servers. It is a **core, defining feature** of the Bot. Full detail of what is shared and how individual rights are handled is in the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

- **Participation is core functionality, not optional.** By inviting the Bot, your server **contributes** minimized abuse signals to the network and is **protected by** it. **There is no server-level opt-out** — the network only works when every protected server participates, and contribution and protection are inseparable. The network is **severity-only**: only minimized aggregates (a pseudonymous user ID, counts, recency, a generic **severity level**, and a fingerprint-match indicator) are shared — **never the offence type or category**, never your staff's free-text reasons, never any AI-generated offence summary, never your members' message content, and never which server acted.

- **Notice to members is ours, not yours.** Giving members notice of the network is **our** responsibility as the operator — we do **not** put it on you. We provide it through our published [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/), through an in-Discord notice the Bot delivers when it is installed, and (on our roadmap, not yet live) an on-demand command that surfaces the disclosure on request. You are **welcome and encouraged** to tell your members that the server takes part — it is good practice — but it is **not an obligation we place on you.** Member notice supports transparency; it is **not** the legal basis for the network. The lawful basis is ours: under Australian law the cross-server signals are non-sensitive personal information collected as reasonably necessary for a safety function (APP 3.2) under the notice in the Privacy Policy (APP 5), and for EU/UK members the basis is our own **legitimate interest** backed by a written assessment — **not** the server owner consenting on members' behalf. <!-- LEGAL REVIEW (SEVERITY-ONLY DESIGN — RESIDUAL LOW/MEDIUM): A server owner accepting these Terms binds the server to no-opt-out CONTRIBUTION (servers cannot opt out; individuals get a qualified opt-out — see Appeals bullet). NOTICE REFRAME (locked 2026-06-21): notice is the OPERATOR's responsibility (Privacy Policy + bot-delivered notice on install + on-demand command forthcoming/roadmap), NOT a server-owner obligation — owners are encouraged, not obliged. With the offence type/category no longer crossing (severity-only) and summaries local-only, the cross-server signals are assessed NON-sensitive (AU) and very unlikely to be GDPR Art. 10 data, so APP 3.3 consent is not engaged and the AU basis is APP 3.2 + APP 5 + APP 6; EU/UK rests on legitimate interest per the LIA, NOT server-owner consent (the docs deliberately do NOT over-rely on owner-consent-for-everyone). Member notice is transparency, not the basis. See .omp/threat-network-PIA-LIA.md §A2/§A-RISK and .omp/RISK-REGISTER.md R1. -->

- **Advisory only — no automatic action.** The network score is **advisory**. In its current version it **never auto-actions**: it does not ban, kick, or sanction any user on its own. It surfaces a risk picture to human staff, who decide what (if anything) to do. Final accountability for any moderation action rests with the staff member who takes it (see *Server-owner responsibility*).

- **Anti-abuse and integrity.** You must not attempt to **poison, game, or manipulate** the network — for example by issuing bad-faith bans, kicks, or warnings to inflate another user's network signal, or by automating moderation actions to that end. We weight contributions by server standing, require corroboration across **independent** servers before a signal counts, and may **discount, suspend, or remove** a server's contributions (and the server's access) if we detect manipulation.

- **Individual opt-out and appeals.** Although a *server* cannot opt out, an **individual may opt out of network profiling**, and may request review, correction, or erasure of, or object to the processing of, their network record via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) (a self-service portal toggle is **planned, not yet live**). Because the score can affect how a user is treated by participating servers, the network is **explainable and appealable**. Opt-out and erasure are honoured **unless we have compelling legitimate grounds** (a verified raid/scam/ban-evasion need) to retain the most serious signals, so known bad actors cannot opt out to evade detection — handled individually as described in the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

- **No warranty of accuracy.** The network score is a **probabilistic, advisory signal** and is **not guaranteed to be accurate, complete, or infallible**. It may produce false positives or false negatives. You are responsible for reviewing it and applying your own judgement before relying on it for any moderation decision. Our liability for the network is subject to *No warranty* and *Limitation of liability* below. <!-- LEGAL REVIEW (PARTIALLY RESOLVED): The advisory-only framing + §8 (No warranty) + §9 (Limitation of liability) disclaim liability between us and the SERVER OWNER who accepts these Terms. RESIDUAL, needs a lawyer: (a) a wrongly-flagged END USER is a third party who never accepted these Terms, so this clause does not bind them — exposure to a defamation / misleading-data / privacy complaint by a flagged individual is NOT disclaimed by Terms the individual never agreed to; and (b) under the Australian Consumer Law, certain consumer guarantees and liability cannot be excluded by contract, so the §9 cap may not hold against an Australian consumer regardless of wording. Advisory-only design, correction rights (APP 13), and conservative tuning are the real mitigations here, not the disclaimer. See .omp/RISK-REGISTER.md. -->

---

## 7. Billing and subscriptions

**Free tier:** The core moderation toolkit is free with no subscription required. AI features include a lifetime allowance of 150,000 tokens.

**Premium subscription ($7 USD/month):** When you subscribe:
- Your payment method is saved at checkout but **not charged immediately**
- Billing begins only when your 150,000 lifetime token allowance is exhausted
- Once billing starts, you are charged $7 USD/month on a recurring basis
- Taxes (VAT, GST, sales tax) are calculated and added at checkout based on your billing region

**Premium BYOK ($3 USD/month):** Charged immediately on subscribe and monthly thereafter.

**Top-up packs ($3 USD):** One-time purchase of 300,000 additional tokens. Non-refundable once applied.

**Cancellation:** You may cancel at any time via the Stripe customer portal. Cancellation takes effect at the end of the current billing period. No partial refunds for unused time in the current period.

**Refunds:** All subscriptions are non-refundable except where required by applicable consumer protection law. If you subscribed to Premium and billing has not yet started (you haven't exhausted your 150K trial tokens), contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) within 7 days of subscribing and we'll issue a full refund.

**Founding-server perk:** Servers that joined during the beta received 12 months of free Premium access, applied as a subscription credit; no card is required and no automatic billing begins at the end of the perk period. This window has closed for new servers.

**Payment processing** is handled by Stripe. By subscribing, you agree to [Stripe's Terms of Service](https://stripe.com/legal). We never store your card details.

---

## 8. No warranty

The Bot is provided **"as-is"** without warranty of any kind. We make no representations that:
- The Bot will be uninterrupted, secure, or error-free
- AI-generated content will be accurate or suitable for purpose
- Data stored by the Bot will never be lost
- The Bot will be free from defects, vulnerabilities, or unauthorised access

You use the Bot at your own risk.

---

## 9. Limitation of liability

To the maximum extent permitted by law, we won't be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from your use of the Bot, including:

- Lost data, lost members, or lost revenue
- Erroneous moderation actions
- Data breaches affecting third-party AI or payment providers
- Discord platform outages or changes affecting the Bot's behaviour

Our total liability won't exceed the greater of (a) the amount you paid for Premium in the 12 months preceding the claim, or (b) ten US dollars (USD $10).

---

## 10. Termination

You may stop using the Bot at any time by removing it from your server. We may terminate or suspend the Bot's access to your server at any time, with or without notice, for:
- Violation of these terms
- Violation of Discord's Terms of Service
- Abuse of Bot features that affects other servers
- Decommissioning of the service

On removal, encrypted credentials for your server are wiped immediately. Other data (warnings, notes, audit log, billing reference) is deleted on request — see the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

---

## 11. Changes to these terms

We may update these terms to reflect changes in the Bot's features, legal requirements, or industry practice. Material changes will be announced via the Bot's release notes (see [Changelog]({{ site.url }}{{ site.baseurl }}/changelog/)) and posted in the staff-chat of each configured guild. Continued use after changes take effect constitutes acceptance.

---

## 12. Governing law

These terms are governed by the laws of Australia. Any disputes shall be resolved in Australian courts.

---

## 13. Severability

If any provision of these terms is held invalid or unenforceable, the remaining provisions remain in full force.

---

## Contact

[`/support`]({{ site.url }}{{ site.baseurl }}/support/) from any server with the Bot installed, or visit [wandweb.co](https://wandweb.co).
