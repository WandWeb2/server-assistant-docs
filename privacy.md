---
layout: default
title: Server Assistant Privacy Policy
permalink: /privacy/
description: How Server Assistant handles your Discord server's data — encrypted storage, per-guild isolation, AI provider data flow, the web portal, and billing.
---
# Server Assistant Privacy Policy

**Effective date:** May 9, 2026
**Last updated:** June 17, 2026

This policy describes how the Server Assistant Discord bot ("the Bot") collects, uses, and stores information when installed in a Discord server.

## Who is responsible

Server Assistant is built and maintained by **Wandering Webmaster** ([wandweb.co](https://wandweb.co)). Contact us via the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command from any Discord server with the Bot installed.

Wandering Webmaster is the **data controller** for the information described in this policy. Where we process moderation records about a server's members **on that server's behalf**, the server owner is the controller and we act as a **processor** carrying out the owner's instructions.

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
| **🕵️ Alt-guard / repeat-offender detection** | **Local-only fingerprint** of users your staff ban or kick (avatar hash, name fragments, account-age bucket) plus the same for each new joiner. **Nothing leaves your host** — no AI, no third party, no cross-server lookup | Off (opt-in via `/altguard on`) |
| **📩 Ban-reason DMs + appeals** | The staff-supplied ban reason is sent in a DM to the banned member; the member's **single** appeal reply (if they send one) is forwarded to your staff channel verbatim. No AI is invoked unless staff press **Research** (which runs Message Report on the member's last message) | On (opt-out per server) |
| **🩺 Pulse** | Aggregate counts only — no message content stored | On |
| **🟢 Live server insights** *(Pulse + web-portal dashboard)* | Member **presence** (online / idle / DND vs offline) and **voice-channel membership**, read live to show **aggregate counts only** (e.g. "42 online · 6 in voice"). Never which member, never which channel; only the running totals are stored, as time-series numbers for the growth/activity charts | On |
| **🧠 Self-trained AutoMod** | Messages your staff delete or report | Off |
| **🩹 Bot Health Insurance** | The bot's own action counts | On |
| **💬 SAi** | Your settings + recent event summary + your typed question | On-demand |

---

## Third-party AI providers

AI features transmit data to third-party providers **only when explicitly invoked by staff or when an enabled, opt-in feature fires** (e.g., right-click Message Report, `/imagine`, Self-trained AutoMod, SAi, or — if you've turned it on — AutoMod AI second-opinion). The default shared-key provider is:

- **Anthropic** (https://anthropic.com) — powers SAi, Message Report context summaries, Self-trained AutoMod, and (if enabled) AutoMod AI second-opinion. Approximately 20 messages of surrounding context are sent for Message Report; only your question is sent for SAi sessions; only the **single borderline message** + matching filter name is sent for AutoMod AI second-opinion (never confident hits, never clear misses). No Discord user IDs or account identifiers are transmitted (a member's display name may appear within the message context that is sent).

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
| **OpenAI / xAI** | AI features — only if you supply your own key (BYOK) | [openai.com](https://openai.com/policies/privacy-policy) · [x.ai](https://x.ai/legal/privacy-policy) |
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

---

## Your rights

**Server owners** can:
1. Remove the Bot from their server — this wipes encrypted credentials immediately
2. Contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) to request deletion of warnings, notes, audit log entries, and ledger data for their guild

**Portal staff** can **sign out** at any time from the portal's Settings — this deletes their session immediately and unsubscribes push notifications on that device.

**Individual members** wishing to have personal moderation records erased should contact their server owner first. If unresponsive, contact us directly via `/support`.

### GDPR (EEA / UK)

If you're in the European Economic Area or the UK, you have the right to **access, correct, delete, restrict, or object to** our processing of your personal data, and the right to **data portability**. Our legal bases for processing are: **performance of the service** (running the features a server has enabled), our **legitimate interests** (security, anti-abuse, and service integrity), and **consent** for opt-in AI features. To exercise any of these rights, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). You also have the right to lodge a complaint with your local data-protection supervisory authority.

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

## Children's privacy

The Bot doesn't knowingly collect data from anyone under 13 (Discord's minimum age). If you become aware of a child's data in the system, contact us via `/support` and we'll delete it.

---

## Changes to this policy

Material changes will be announced via the Bot's release notes and posted in the staff-chat of each configured guild. The "Last updated" date above reflects the most recent revision.

---

## Contact

[`/support`]({{ site.url }}{{ site.baseurl }}/support/) from any server with the Bot installed, or visit [wandweb.co](https://wandweb.co).
