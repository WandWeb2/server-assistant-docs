---
layout: default
title: Server Assistant Terms of Service
permalink: /terms/
description: Server Assistant terms of use, permitted use, moderation responsibility, AI features, billing, and no-warranty clause.
---
# Server Assistant Terms of Service

**Effective date:** May 9, 2026
**Last updated:** August 1, 2026

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

You are also responsible for enabling and configuring any optional Minecraft integration (playtime XP crediting and Discord-role ↔ in-game-rank sync) on your own game server, and for the roles and ranks you map through it.

We give members notice of the Bot's [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) and of the Cross-Server Threat Network ourselves (see §6); you are **encouraged** to point your members to the Privacy Policy as good practice, but we do **not** make member-notice your obligation.

**Telling your Minecraft players is the one exception, and it is yours.** If you run our Minecraft bridge, the Bot's moderation reaches the text your players write **in the game** — chat, signs, books, item names, mob name tags, `/me` emotes, usernames, and **private messages between players**. Some of that is **always-on**: it follows your AutoMod switch, there is no separate control, and so — unlike the optional AI features in §5 — there is **no moment at which you switch it on**. **The duty to tell your players applies regardless of whether you had to enable anything.** You are responsible for making them aware that in-game text, **including private messages**, is filtered: say so in your own server rules, and leave the plugin's in-game notices in place. (The plugin's privacy notice about private-message filtering is mandatory and you cannot switch it off; that does not discharge your own duty to tell your players.) We accept the notice duty everywhere we can reach the person ourselves; a Minecraft player who has never joined your Discord is someone only you can reach. The [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) sets out exactly what is checked, what is kept, and for how long.

The Bot is a tool. Final accountability for any moderation action rests with the staff member who invoked it.

---

## 5. AI features

The Bot offers optional AI features (SAi, Message Report, Self-trained AutoMod, Pulse, `/imagine`, and — if you run our Minecraft bridge — chat translation and in-game `@sai`) powered by Anthropic, with other providers used for specific checks and as fallbacks, and, when you supply your own key (BYOK), by the provider whose key you bring (**Anthropic**, **xAI**, or **OpenAI**). The [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) lists every provider and exactly what each receives.

- AI-generated content is **not guaranteed to be accurate or appropriate**
- You are responsible for reviewing AI output before relying on it for moderation decisions
- AI providers may process transmitted data per their own privacy policies
- Some optional features transmit content that was **not typed in your Discord server** — enabling Minecraft bridge translation or in-game `@sai` sends in-game chat to an AI provider. These are **off until you switch them on**, and by switching them on **you accept responsibility for telling your members and players** that you have done so
- **Not everything the Minecraft bridge does is optional, and this bullet does not cover the rest of it.** AutoMod's filtering of in-game text — including private messages between players — is **always-on**, has no switch of its own, and involves **no AI provider at all**. Your duty to tell your players about it does not depend on your having enabled anything: see §4
- We don't guarantee continued availability of any specific AI provider or model
- If you supply your own API keys (BYOK mode), you are responsible for any costs incurred with that provider

---

## 6. Cross-Server Threat Network (ThreatNet)

The Bot operates a **Cross-Server Threat Network**, branded **ThreatNet**, a shared safety signal that helps protected servers recognise users with a serious, corroborated history of abuse on other protected servers. It is a **core, defining feature** of the Bot. Full detail of what is shared and how individual rights are handled is in the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

- **Participation is core functionality, not optional.** By inviting the Bot, your server **contributes** minimized abuse signals to the network and is **protected by** it. **There is no server-level opt-out**; the network only works when every protected server participates, and contribution and protection are inseparable. The network is **severity-only**: only minimized aggregates (a pseudonymous user ID, counts, recency, a generic **severity level**, and a fingerprint-match indicator) are shared, **never the offence type or category**, never your staff's free-text reasons, never any AI-generated offence summary, never your members' message content, and never which server acted.

- **Notice to members is ours, not yours.** Giving members notice of the network is **our** responsibility as the operator; we do **not** put it on you. We provide it through our published [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/), through an in-Discord notice the Bot delivers when it is installed, and (on our roadmap, not yet live) an on-demand command that surfaces the disclosure on request. You are **welcome and encouraged** to tell your members that the server takes part, it is good practice, but it is **not an obligation we place on you.** Member notice supports transparency; it is **not** the legal basis for the network. The lawful basis is ours: under Australian law the cross-server signals are non-sensitive personal information collected as reasonably necessary for a safety function (APP 3.2) under the notice in the Privacy Policy (APP 5), and for EU/UK members the basis is our own **legitimate interest** backed by a written assessment, **not** the server owner consenting on members' behalf.

- **Advisory by default; optional Premium automated action.** For every server, the network score is **advisory**; it surfaces a risk picture to human staff, who decide what (if anything) to do. **Premium servers may additionally opt in to ThreatNet auto-protect**, which **automatically bans a user when they join** when that account meets a **cross-server risk threshold the server chooses**, from the **highest band** (serious *and* corroborated across **multiple independent** servers; the default, and the most conservative) to one broader band a server administrator may select, which also acts on a single **serious** signal. Below that we enforce a **floor**: the broadest setting is not available to any server, so a minor record on its own, a single kick or warning from a single server, can never trigger an automatic ban. Auto-protect is **off by default**, is switched on and configured per server by a server administrator, and **the server chooses and is responsible for the threshold it sets** (a lower threshold acts on weaker signals and carries a higher chance of error). Where it is enabled, the resulting ban is an **automated decision**: the bot does **not** message the affected user, but the automated nature of the decision and the route to **human review** and appeal are disclosed in this agreement, in our [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) and through the [web portal](https://serverassistant.wandweb.co) (see *Individual opt-out and appeals*); individuals who have opted out of network profiling are **not** auto-actioned, save where the **compelling-legitimate-grounds safety exception** described in *Individual opt-out and appeals* below is engaged, in which case the most serious, corroborated signals concerning that individual remain available to the network and an auto-protect ban may still follow; and the decision to enable, configure and operate auto-protect, and final accountability for it, rests with the server (see *Server-owner responsibility*).

- **No warranty for automated action.** Where you enable auto-protect, you accept that the underlying network signal is **probabilistic and not guaranteed accurate** (see *No warranty of accuracy* below) and that automated bans may produce **false positives**. You are responsible for the decision to enable it, for reviewing its audit log, and for handling appeals you receive. We honour opt-out and erasure and provide the human-review route described in the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

- **Anti-abuse and integrity.** You must not attempt to **poison, game, or manipulate** the network, for example by issuing bad-faith bans, kicks, or warnings to inflate another user's network signal, or by automating moderation actions to that end. We weight contributions by server standing, require corroboration across **independent** servers before a signal counts, and may **discount, suspend, or remove** a server's contributions (and the server's access) if we detect manipulation.

- **Individual opt-out and appeals.** Although a *server* cannot opt out, an **individual may opt out of network profiling** using the **self-service toggle in the web portal** ([serverassistant.wandweb.co](https://serverassistant.wandweb.co)), or a server's admins may action an opt-out for one of their members on request. Individuals may also request review, correction, or erasure of their network record via [`/support`]({{ site.url }}{{ site.baseurl }}/support/). Because the score can affect how a user is treated by participating servers, the network is **explainable and appealable**. Opt-out and erasure are honoured **unless we have compelling legitimate grounds** (a verified raid/scam/ban-evasion need) to retain the most serious signals, so known bad actors cannot opt out to evade detection, handled individually as described in the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

- **No warranty of accuracy.** The network score is a **probabilistic, advisory signal** and is **not guaranteed to be accurate, complete, or infallible**. It may produce false positives or false negatives. You are responsible for reviewing it and applying your own judgement before relying on it for any moderation decision. Our liability for the network is subject to *No warranty* and *Limitation of liability* below.

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

On removal, encrypted credentials for your server are wiped immediately. Other data (warnings, notes, audit log, billing reference) is deleted on request, see the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

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
