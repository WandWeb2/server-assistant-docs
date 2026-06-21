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
- Making your server's members aware of the Bot's [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/)
- Ensuring your server complies with applicable laws

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

- **Participation is core functionality, not optional.** By inviting the Bot, your server **contributes** minimized abuse signals to the network and is **protected by** it. **There is no server-level opt-out** — the network only works when every protected server participates, and contribution and protection are inseparable. Only minimized aggregates (counts, recency, category bands, match indicators) are shared — never your staff's free-text reasons, never your members' message content, and never which server acted. <!-- LEGAL REVIEW: Confirm a server owner can validly bind their server to mandatory, no-opt-out cross-server contribution by accepting these Terms, and that this is consistent with our controller-role disclosure and the legitimate-interest basis in the Privacy Policy. -->

- **Advisory only — no automatic action.** The network score is **advisory**. In its current version it **never auto-actions**: it does not ban, kick, or sanction any user on its own. It surfaces a risk picture to human staff, who decide what (if anything) to do. Final accountability for any moderation action rests with the staff member who takes it (see *Server-owner responsibility*).

- **Anti-abuse and integrity.** You must not attempt to **poison, game, or manipulate** the network — for example by issuing bad-faith bans, kicks, or warnings to inflate another user's network signal, or by automating moderation actions to that end. We weight contributions by server standing, require corroboration across **independent** servers before a signal counts, and may **discount, suspend, or remove** a server's contributions (and the server's access) if we detect manipulation.

- **Appeals.** Because the score can affect how a user is treated by participating servers, the network is **explainable and appealable**. An individual may request review, erasure, or object to the processing of their network record via [`/support`]({{ site.url }}{{ site.baseurl }}/support/); requests are handled case by case as described in the Privacy Policy.

- **No warranty of accuracy.** The network score is a **probabilistic, advisory signal** and is **not guaranteed to be accurate, complete, or infallible**. It may produce false positives or false negatives. You are responsible for reviewing it and applying your own judgement before relying on it for any moderation decision. Our liability for the network is subject to *No warranty* and *Limitation of liability* below. <!-- LEGAL REVIEW: Confirm the no-warranty / no-infallibility language for an advisory cross-server risk signal is sufficient to disclaim liability for a wrongly-flagged user, in combination with §8 (No warranty) and §9 (Limitation of liability). -->

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
