---
layout: default
title: Server Assistant Privacy Policy
permalink: /privacy/
description: How Server Assistant handles your Discord server's data — encrypted storage, per-guild isolation, AI provider data flow, the web portal, and billing.
---
# Server Assistant Privacy Policy

**Effective date:** May 9, 2026
**Last updated:** June 21, 2026

This policy describes how the Server Assistant Discord bot ("the Bot") collects, uses, and stores information when installed in a Discord server.

## Who is responsible

Server Assistant is built and maintained by **Wandering Webmaster** ([wandweb.co](https://wandweb.co)). Contact us via the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command from any Discord server with the Bot installed.

Wandering Webmaster is the **data controller** for the information described in this policy. Where we process moderation records about a server's members **on that server's behalf**, the server owner is the controller and we act as a **processor** carrying out the owner's instructions. There is one important exception: for the **Cross-Server Threat Network** (see that section below), where we pool minimized signals from many servers into a shared safety dataset, **we act as the data controller** of that cross-server dataset.

---

## What the Bot stores

The Bot stores the minimum data needed to run its features. All data lives on our hosting infrastructure and is not sold or shared except as described below.

### Per-server configuration

When a server owner runs `/setup` or `/autopilot`, the Bot stores:
- Discord server (guild) ID, staff-chat channel ID, log channel ID
- Role IDs mapped to permission tiers (Moderator, Admin, Owner)
- Server settings (embed colour, timezone, AutoMod presets, anti-raid thresholds, etc.)
- AI provider selection (shared / BYOK / disabled)
- Privacy panel toggles (which AI features are enabled per-server)

### Moderation records

When staff issue warnings, notes, or moderation actions:
- Discord user ID of the affected member
- Timestamp, acting staff member's user ID, action type, and reason text

Retained until manually removed by staff or until the Bot is removed from the server.

### Audit log

A rolling log of recent staff actions across the Bot — including actions taken **directly in Discord** (native bans, kicks, timeouts), not just those routed through the Bot. Each entry contains:
- Timestamp, acting staff member's user ID and tag
- Action type and parameters (truncated to 500 characters)
- Result status and guild ID

This audit trail is **encrypted at rest** with the same master key used for credentials. Server staff cannot read, edit, or erase it — only the Bot can access it. If anyone deletes an entry from a server's visible log channel, the owner is alerted automatically, and the encrypted record remains intact.

### Scheduled tasks

Reminder and recurring task data (task ID, creator ID, channel ID, guild ID, scheduled time, command text). Deleted automatically when the task fires or is cancelled.

### Encrypted credentials

Stored encrypted at rest:
- AI provider API keys (when server owner provides their own via `/ai-config`)
- Bot configuration secrets

The encryption key is stored separately on our host and never transmitted.

### AI token ledger

For servers using AI features on the shared key:
- Guild ID, current plan, tokens used (lifetime or monthly), plan reset date
- Per-call log: feature name, model, token counts, estimated cost in USD, timestamp
- No message content is stored in the ledger — only usage metadata

### Billing data

If you subscribe to Premium via Stripe:
- We store a reference to your Stripe Customer and Subscription ID (not your card details — those are held by Stripe)
- Guild ID, plan tier, subscription status, and period-end date
- Stripe handles all payment processing, card storage, and tax compliance per their own [Privacy Policy](https://stripe.com/privacy)

### Web portal sign-in (staff)

Server owners, admins, and moderators can manage their server from the web portal at **serverassistant.wandweb.co**. Signing in uses **Discord OAuth** (you authorise it on Discord; we never see your Discord password). For a signed-in staff member we store:
- Discord user ID and username
- Which of your servers they may manage and at what level (owner / admin / moderator), derived from the roles you mapped in `/setup`
- A session token with an expiry, and the time it was last used

We request the Discord scopes `identify`, `guilds`, and `guilds.members.read` **only** to confirm who you are and which servers and roles you have. The short-lived Discord access token used to read that is **not stored** — we derive your access level and discard it. The portal never grants a staff member more than their Discord role already allows, and every action is re-checked on our server.

### Push notifications (web portal)

If a staff member installs the portal as an app and turns on notifications, we store the browser **push subscription** (an endpoint URL and its encryption keys) together with their Discord ID, so we can alert them when something needs their input. Notifications are delivered through the push service operated by that person's **browser vendor** (e.g. Google, Mozilla, or Apple) — see Sub-processors below. Signing out or disabling notifications deletes the subscription.

### Support tickets & appeals

When you message us through a support ticket (via `/support`) or reply to a ban-appeal DM, we store the content of those messages so staff and our operator can read and respond:
- **Support ticket:** your message text (up to 4,000 characters) and any image URLs you attach
- **Ban appeal:** the appeal reply you send, forwarded to the server's staff

These are messages you choose to send to us or to your server's staff. Ordinary direct messages and private conversations are never read or stored.

### Bot message log

A record of the messages **the Bot itself sends** — to a server channel, a thread, or to a member by direct message (for example a ban-reason DM or a "finish setup" reminder). For each, we keep:
- The server (guild) ID and which channel it was sent to — or, for a DM, simply that a direct message was sent and to whom
- A short summary of the message (up to ~140 characters) and the time it was sent

This log covers only messages **the Bot sends** — never messages your members send to one another. It exists for operational reliability and as a safety/audit trail of the Bot's own activity, and is visible only to our operator. It is **not** shown in your server's web portal, and the **content** of a member's private DM is never echoed into any server channel — only a content-free note that the Bot reached out. Entries are automatically deleted after **60 days**.

---

## What the Bot does NOT store

- Message content beyond what triggered an action or review (when one is triggered, only a truncated copy is kept — up to 500 characters in the audit log, or up to ~1,500 characters of surrounding context for a message your staff send for review)
- User direct messages or private conversations — *except* messages you send us through a support ticket (`/support`) or a ban-appeal reply, which we store so staff can respond (see **Support tickets & appeals** above)
- Voice channel recordings, transcripts, or audio of any kind — nor any record of *which* member is in *which* voice channel (we read live voice state only to display an aggregate count, described below)
- Per-member presence/online status — we read it live to show an aggregate online count, but never store who is online
- User avatars, banners, or media (except images generated by `/imagine`)
- Email addresses, phone numbers, or any out-of-band contact information
- The full content of messages read by AI features — only the AI's output is retained in the channel

---

## What each feature reads

You control all of this via the `/privacy` panel. AutoMod and anti-raid are required for moderation and always on; everything else is opt-in.

| Feature | What it reads | Default |
|---|---|---|
| **AutoMod** | Message content, checked against your filters | Always on |
| **Anti-raid** | Join events only (no message content) | Always on |
| **Natural-language commands** | Messages in your staff-chat channel | Off (new servers) |
| **Message Report** | ~20 messages around the one you right-click | Off (new servers) |
| **🤔 AutoMod AI second-opinion** *(Premium, opt-in)* | The text of a single borderline AutoMod-flagged message + which filter matched. Confident hits and clear misses are never sent | Off (opt-in via `/automod → AI Review`) |
| **🕵️ Alt-guard / repeat-offender detection** | **Local-only fingerprint** of users your staff ban or kick (avatar hash, name fragments, account-age bucket) plus the same for each new joiner. The fingerprint **itself** never leaves your host; a **match indicator** may feed the Cross-Server Threat Network (see below) | Off (opt-in via `/altguard on`) |
| **🛡️ Cross-Server Threat Network** | Minimized abuse signals (ban/kick counts + recency, serious-category AutoMod count + band, AltGuard match indicator, account-age/join-velocity) shared across protected servers as **aggregates and bands only** — never reasons, never message text, never which server acted. See **Cross-Server Threat Network** below | On (core feature, no opt-out) |
| **📩 Ban-reason DMs + appeals** | The staff-supplied ban reason is sent in a DM to the banned member; the member's **single** appeal reply (if they send one) is forwarded to your staff channel verbatim. No AI is invoked unless staff press **Research** (which runs Message Report on the member's last message) | On (opt-out per server) |
| **🩺 Pulse** | Aggregate counts only — no message content stored | On |
| **🟢 Live server insights** *(Pulse + web-portal dashboard)* | Member **presence** (online / idle / DND vs offline) and **voice-channel membership**, read live to show **aggregate counts only** (e.g. "42 online · 6 in voice"). Never which member, never which channel; only the running totals are stored, as time-series numbers for the growth/activity charts | On |
| **🧠 Self-trained AutoMod** | Messages your staff delete or report | Off |
| **🩹 Bot Health Insurance** | The bot's own action counts | On |
| **💬 SAi** | Your settings + recent event summary + your typed question | On-demand |

---

## Cross-Server Threat Network

Server Assistant operates a **Cross-Server Threat Network**: a shared safety signal that helps every protected server recognise users who have a serious, corroborated history of abuse (scams, raids, ban-evasion) on *other* protected servers — ideally **before** they cause harm on yours. This is a **core, defining feature** of Server Assistant, not an add-on, and it is described here in full.

<!-- LEGAL REVIEW: This entire section describes cross-server pooling of personal data (Discord user IDs + minimized abuse signals) under a legitimate-interest basis with no server- or user-level opt-out, only a case-by-case rights-request route. A qualified data-protection lawyer should review the section as a whole against UK GDPR / EU GDPR Art. 6(1)(f), Art. 21 (right to object), and Art. 17 (erasure), and confirm the disclosure is adequate before launch. The written Legitimate Interest Assessment (LIA) supporting this basis is held internally and must be finalised and signed off before any cross-server data moves. -->

### What this means for our role

For ordinary moderation records, the server owner is the controller and we act as a processor on their instructions (see *Who is responsible* above). The Threat Network is different. Because we **pool minimized signals from many servers** to build a shared, cross-server picture of a user's risk, **Wandering Webmaster is the data controller** of that cross-server safety dataset. We take on the controller's obligations for it — including the legal basis, retention limits, and data-subject rights described below.

### What data is shared across servers

Every protected server **contributes** minimized abuse signals to the network and is, in turn, **protected by** it. Only a small, **minimized aggregate** ever crosses the boundary between servers. Specifically, the network may hold, per Discord user:

- **Bans / kicks:** a count of how many *distinct* protected servers have actioned the user, and how recently — never which servers, never the reasons
- **Serious-category AutoMod hits:** a count and a broad **category band** (e.g. "scam/financial") — never the message text
- **Repeat-offender fingerprint match (AltGuard):** a **yes/no (or band)** indicator that the user matches a known-offender fingerprint seen elsewhere in the network — never the underlying fingerprint detail
- **Account-age / join-velocity modifier:** a risk modifier derived from data Discord already exposes

What **never** crosses the boundary:

- Raw moderation reasons or any free-text a staff member wrote
- **Which specific server** took an action (originating servers stay confidential)
- Message content of any kind

A server's local moderation record keeps its full detail for that server's own staff (governed by the rest of this policy); only the minimized aggregates above feed the network. The **local** score (this server only) and the **network** score (everywhere else) are always shown as **separate bands** and are never silently combined.

### Why we do this (legal basis)

Our legal basis for the Threat Network is **legitimate interest** (UK GDPR and EU GDPR, Article 6(1)(f)) — specifically the legitimate interest of Wandering Webmaster, every protected server, and their communities in **platform and community safety**: preventing fraud, scams, raids, and ban-evasion across the servers we protect. We have carried out and documented a written **Legitimate Interest Assessment (LIA)** weighing this interest against the rights and interests of the individuals whose signals are pooled, and we keep the safeguards described in this section (strict minimization, the rights-request route below, advisory-only use, anti-abuse corroboration, and a hard retention cap) as the mitigations that keep this basis appropriate. <!-- LEGAL REVIEW: Confirm legitimate interest (not consent) is the correct lawful basis given there is no opt-out, and that the LIA's balancing conclusion is defensible. Confirm whether any contributed signal could be "special category" data (Art. 9) — design intent is that none is. -->

### No opt-out — and why

Because the Threat Network is core, defining functionality — it only works when **every** protected server participates, so that a user banned for scams across six servers lights up on the seventh — **there is no server-level opt-out, and participation is on by default for every server, across the fleet.** A server cannot use Server Assistant's protection while withholding its own contribution; contribution and protection are two sides of the same network. We disclose this plainly here and in our [Terms of Service]({{ site.url }}{{ site.baseurl }}/terms/) so that server owners understand it when they invite the Bot.

### Advisory only — never automatic

The network score is **advisory**. In its current version it **never auto-actions** — it does not ban, kick, or sanction anyone on its own. It surfaces a risk picture to a server's human staff, who decide what (if anything) to do. The score is **explainable** (it shows what drove it — e.g. "flagged in 6 networked servers, 2 bans, last 9 days ago") and **appealable** (see your rights below). Bands are tuned conservatively to favour false-negatives over false-positives.

### Data minimization

Minimization is engineered into the network, not bolted on: only counts, recency, category **bands**, and boolean/band fingerprint-match indicators ever leave a server. No free-text, no message content, no originating-server identity, and no Discord account identifiers beyond the user ID needed to match signals to the right person. This protects both the individual and the operational confidentiality of the server that originally acted.

### Retention

Network signals are retained on a **rolling 12-month window measured from the last signal** for that user. When 12 months pass with no new contributing signal, the user's network record is **hard-deleted**. A new signal restarts the window.

### Your rights in the Threat Network

The Threat Network has **no opt-out toggle**, but individuals are **not** without recourse. If you are an individual whose data is in the network, you may make a **rights request** — including a request for **erasure** of your network record or an **objection** to its processing — by contacting us via the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command (from any server with the Bot installed) or via [wandweb.co](https://wandweb.co). We handle each request **case by case**:

- We will **honour** the request (erase or stop processing your network record), **unless**
- We can demonstrate **compelling legitimate grounds** that override your interests, rights, and freedoms — for example a clear, corroborated safety or fraud-prevention need to retain the signal — in which case we will **refuse and tell you why**, documenting those grounds.

This case-by-case route is how we keep the network's legitimate-interest basis fair: your right to object is real and is assessed on its merits every time. <!-- LEGAL REVIEW: This implements Art. 21(1) — the right to object to legitimate-interest processing, where the controller must stop unless it shows compelling legitimate grounds. Confirm the "compelling legitimate grounds" standard is being applied correctly and that refusals are properly documented and communicated, and that an erasure refusal under Art. 17(1)(c)/(3) is similarly justified. -->

### Contribution vs visibility

To be clear about what each server *sees* versus what it *contributes*:

- **Every** protected server (free, standard, or Premium) **contributes** signals to and is **protected by** the network.
- The **rich dossier view** — the detailed per-user breakdown of network drivers — is a **Premium** feature. Free and standard servers receive only a **basic network band** (a low/elevated/high indicator) rather than the full breakdown.

Participation in the network itself does not depend on plan tier; only the depth of what staff can *view* does.

---

## Third-party AI providers

AI features transmit data to third-party providers **only when explicitly invoked by staff or when an enabled, opt-in feature fires** (e.g., right-click Message Report, `/imagine`, Self-trained AutoMod, SAi, or — if you've turned it on — AutoMod AI second-opinion). The default shared-key providers are:

- **Anthropic** (https://anthropic.com) — powers SAi, Message Report context summaries, Self-trained AutoMod, and (if enabled) AutoMod AI second-opinion. Approximately 20 messages of surrounding context are sent for Message Report; only your question is sent for SAi sessions; only the **single borderline message** + matching filter name is sent for AutoMod AI second-opinion (never confident hits, never clear misses). No Discord user IDs or account identifiers are transmitted (a member's display name may appear within the message context that is sent).
- **OpenAI** (https://openai.com) — when AutoMod AI second-opinion is enabled, borderline **word-filter** hits are scored by OpenAI's dedicated, free content-moderation endpoint (`omni-moderation-latest`) so they don't spend your AI allowance. Only the **single borderline message** is sent; no Discord user IDs or account identifiers.
- **Groq** (https://groq.com) — a fast backup model that keeps the AI features above working when the primary (Anthropic) service is temporarily unavailable, and acts as the fallback scorer for the AutoMod word-filter check above. Only the minimal content already described is sent (for the word-filter check, just the **single borderline message**); no Discord user IDs or account identifiers.

If you've configured your own key via `/ai-config`:
- **xAI Grok** (https://x.ai) — same scope as above when selected
- **OpenAI** (https://openai.com) — same scope as above when selected

For `/imagine` (image generation): only your text prompt is sent to the image provider — **Pollinations** (the default), **Stability AI**, or **OpenAI** if selected. No user IDs or metadata.

Each AI provider has their own privacy policy governing how they handle data. We don't store AI responses beyond posting them to the requesting channel. No data is shared with advertising networks or analytics services.

---

## Where your data is stored

Server Assistant runs on dedicated infrastructure hosted by **Hetzner Online GmbH** in the **United States (Oregon)**. All data described above is stored there.

Because Discord and our users are global, using the Bot from outside the United States involves an **international transfer** of the limited data described in this policy to the US. Where required, we rely on appropriate safeguards (such as Standard Contractual Clauses) for those transfers. Our sub-processors may handle data in other regions under their own policies.

### Sub-processors

We rely on a small set of vetted third parties to run the service:

| Sub-processor | Purpose | Privacy policy |
|---|---|---|
| **Hetzner Online GmbH** | Server hosting (United States) | [hetzner.com](https://www.hetzner.com/legal/privacy-policy) |
| **Anthropic** | Default AI features (SAi, Message Report, etc.) | [anthropic.com](https://www.anthropic.com/legal/privacy) |
| **OpenAI** | AutoMod word-filter moderation second-opinion (our shared key); other AI features only if you supply your own key (BYOK) | [openai.com](https://openai.com/policies/privacy-policy) |
| **Groq** | Fast backup AI model when Anthropic is unavailable, and fallback scorer for the AutoMod word-filter second-opinion | [groq.com](https://groq.com/privacy-policy/) |
| **xAI** | AI features — only if you supply your own key (BYOK) | [x.ai](https://x.ai/legal/privacy-policy) |
| **Pollinations · Stability AI** | Image generation (`/imagine`) | [pollinations.ai](https://pollinations.ai) · [stability.ai](https://stability.ai/legal/privacy-policy) |
| **Stripe** | Payment processing for Premium subscriptions | [stripe.com/privacy](https://stripe.com/privacy) |
| **Browser push services** (Google / Mozilla / Apple, depending on the staff member's browser) | Delivering web-portal push notifications to staff who opt in | per-vendor |

Staff sign in to the web portal with **Discord OAuth**; Discord's own [Privacy Policy](https://discord.com/privacy) governs the identity data they provide to us during sign-in.

We do **not** sell your data or share it with advertising or analytics networks.

---

## Data retention

| Data | Retention |
|---|---|
| Server configuration and settings | Until Bot is removed from the server |
| Encrypted API keys | Wiped immediately on Bot removal |
| Warnings and notes | Until manually removed by staff |
| Audit log | Rolling window; older entries auto-purged |
| Scheduled tasks | Deleted when fired or cancelled |
| AI token ledger | Retained for billing and analytics; deleted on request |
| Stripe subscription reference | Retained while subscription is active; deleted on request after cancellation |
| Web-portal session (staff sign-in) | Expires automatically; deleted immediately on sign-out |
| Push notification subscription | Until the staff member disables notifications, signs out, or the Bot is removed |
| Server-insight counts (online / voice / member time-series) | Rolling window (~90 days) |
| Bot message log (messages the Bot sends) | Rolling window (~60 days), then auto-deleted |
| Cross-Server Threat Network signals | Rolling 12 months from the **last** signal, then hard-deleted |

---

## Your rights

**Server owners** can:
1. Remove the Bot from their server — this wipes encrypted credentials immediately
2. Contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) to request deletion of warnings, notes, audit log entries, and ledger data for their guild

**Portal staff** can **sign out** at any time from the portal's Settings — this deletes their session immediately and unsubscribes push notifications on that device.

**Individual members** wishing to have personal moderation records erased should contact their server owner first. If unresponsive, contact us directly via `/support`.

**Cross-Server Threat Network:** because we are the controller of the cross-server safety dataset (not a per-server processor), an individual can come **directly** to us — without going through any server owner — to request **erasure** of their network record or to **object** to its processing, via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). We assess each request case by case and will honour it unless we can show **compelling legitimate grounds** (such as a corroborated safety or fraud-prevention need) to retain the signal, in which case we will explain our reasons. See **Cross-Server Threat Network → Your rights in the Threat Network** above for the full mechanism.

### GDPR (EEA / UK)

If you're in the European Economic Area or the UK, you have the right to **access, correct, delete, restrict, or object to** our processing of your personal data, and the right to **data portability**. Our legal bases for processing are: **performance of the service** (running the features a server has enabled), our **legitimate interests** (security, anti-abuse, service integrity, and the **Cross-Server Threat Network** described above — platform and community safety, supported by a written Legitimate Interest Assessment), and **consent** for opt-in AI features. Where we rely on legitimate interest — including for the Threat Network — you have the right to **object** under Article 21; for the Threat Network specifically, exercise it via the **case-by-case rights-request route** described in *Cross-Server Threat Network → Your rights in the Threat Network*. To exercise any of these rights, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). You also have the right to lodge a complaint with your local data-protection supervisory authority.

### CCPA (California)

We **do not sell or share** personal information (as those terms are defined under the CCPA), and never have. California residents may request to know what personal information we hold and to have it deleted, using the same channels above. We will **not discriminate** against you for exercising these rights.

---

## Data security

- Credentials stored encrypted at rest (AES-128)
- Encryption master key restricted to file-owner access only
- All communications use HTTPS/TLS
- The web portal and its supporting API are the only public endpoints; they sit behind TLS and require authentication (Discord OAuth for staff), and every action is permission-checked server-side against the staff member's Discord role. The Bot otherwise communicates only over Discord's gateway connection
- Stripe handles payment card data under PCI-DSS compliance — we never see raw card numbers

---

## Discord platform compliance

Server Assistant is a Discord application and operates under Discord's developer agreements. The table below maps the obligations in each Discord policy to where this Privacy Policy meets them.

| Discord policy | The obligation | How Server Assistant complies |
|---|---|---|
| [Discord Developer Terms of Service](https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service) | Use "Platform Data" (the data obtained through Discord's API) only to operate your application; don't retain it longer than necessary; delete it on user request and when access ends | We store only the Platform Data needed to run the features a server has enabled (*What the Bot stores*), use it solely to provide those features, cap how long every category is kept (*Data retention*), and delete it on request or when the Bot is removed (*Your rights*). |
| [Discord Developer Policy](https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy) — *publish a privacy policy* | Provide and follow a public privacy policy describing what you access, collect, store, share, and how users can request deletion | This document is public, linked from the Bot via `/support`, and describes exactly that. |
| Discord Developer Policy — *data minimization* | Only collect and use the data you genuinely need | We list precisely what we store **and** keep an explicit *What the Bot does NOT store* section; features are opt-in and read only what they need (*What each feature reads*). |
| Discord Developer Policy — *keep data secure* | Protect the data you hold with appropriate security | Encryption at rest (AES-128), restricted key access, TLS in transit, and authenticated, permission-checked endpoints (*Data security*). |
| Discord Developer Policy — *don't sell data; no ads or profiling* | Don't sell user data, share it with ad/analytics networks, or build profiles of users | We never sell or share data with advertising or analytics networks. Repeat-offender detection (Alt-guard) uses a **local-only** fingerprint that never leaves your host and is never used for cross-server profiling. |
| [Message Content Intent Review Policy](https://support-dev.discord.com/hc/en-us/articles/5324827539479-Message-Content-Intent-Review-Policy) | Message content is a privileged intent; use it only for the limited, declared purposes and don't retain more than needed | Message content is read only for moderation (AutoMod / anti-raid) and the opt-in features you switch on; it is not stored except in the limited, truncated cases disclosed, and only the minimum context is ever sent to an AI provider (*What each feature reads*, *Third-party AI providers*). |
| [Discord Terms of Service](https://discord.com/terms) & [Community Guidelines](https://discord.com/guidelines) | Respect Discord's users and platform rules; no spam or unsolicited contact | The Bot messages members only for moderation or operational reasons (e.g. a ban-reason DM or a setup reminder to the person who added it), honours per-server opt-outs, and never sends unsolicited or bulk promotional DMs to members. |
| [Discord Privacy Policy](https://discord.com/privacy) | Governs the identity data Discord provides during OAuth sign-in | At web-portal sign-in we request only `identify`, `guilds`, and `guilds.members.read`, discard the access token, and keep only the derived access level (*Web portal sign-in*). |
| Discord minimum-age requirement (13+) | Don't knowingly process data of users under Discord's minimum age | We don't knowingly collect data from anyone under 13 and delete it if found (*Children's privacy*). |

If you believe any part of the Bot's behaviour is inconsistent with these policies, please tell us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) — we take platform compliance seriously and will correct it.

---

## Children's privacy

The Bot doesn't knowingly collect data from anyone under 13 (Discord's minimum age). If you become aware of a child's data in the system, contact us via `/support` and we'll delete it.

---

## Changes to this policy

Material changes will be announced via the Bot's release notes and posted in the staff-chat of each configured guild. The "Last updated" date above reflects the most recent revision.

---

## Contact

[`/support`]({{ site.url }}{{ site.baseurl }}/support/) from any server with the Bot installed, or visit [wandweb.co](https://wandweb.co).
