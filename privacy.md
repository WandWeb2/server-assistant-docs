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

Server Assistant is built and maintained by **Wandering Webmaster** ([wandweb.co](https://wandweb.co)), based in **Queensland, Australia**, serving Discord communities **worldwide**. Contact us via the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command from any Discord server with the Bot installed.

Because we are in Australia and serve users everywhere, more than one privacy law can apply to the same information. We aim to handle your data in line with:
- the **Australian Privacy Act 1988 (Cth)** and the **13 Australian Privacy Principles (APPs)** — our primary framework;
- the **EU and UK GDPR**, where they apply to users in the EU/UK (a cross-server safety signal can involve monitoring the behaviour of those users); and
- the **CCPA**, for California residents.

Where these regimes use different language for the same idea, we have written this policy to meet the stronger expectation in plain terms.

Wandering Webmaster is the **data controller** (and, in Australian terms, the **APP entity**) for the information described in this policy. Where we process moderation records about a server's members **on that server's behalf**, the server owner is the controller and we act as a **processor** carrying out the owner's instructions. There is one important exception: for the **Cross-Server Threat Network** (see that section below), where we pool minimized signals from many servers into a shared safety dataset, **we act as the data controller** of that cross-server dataset.

### Our approach to your privacy

Server Assistant is run by a **small independent operator** who takes a **privacy-by-design, data-minimisation** approach: we collect only what each feature genuinely needs, share the minimum necessary, and prefer aggregates and severity levels over raw content wherever a feature allows. If you ever have a privacy concern — about the Threat Network or anything else — you can reach us directly through the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command from any server with the Bot installed, and we will respond. We **review and update this policy periodically** as the Bot's features evolve, and the "Last updated" date above reflects the most recent revision.

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
| **🛡️ Cross-Server Threat Network** | Minimized abuse signals (a pseudonymous Discord user ID, ban/kick counts + recency, a **severity level** — e.g. minor / serious, AltGuard fingerprint-match indicator, account-age/join-velocity) shared across protected servers as **aggregates and a severity level only** — never the offence type/category, never reasons, never message text, never which server acted. Also includes **irreversible perceptual fingerprints of known scam images** (not linked to any user; the image itself never leaves the originating server). See **Cross-Server Threat Network** below | On (core feature — no *server* opt-out; individuals may opt out of profiling, subject to a safety exception) |
| **📩 Ban-reason DMs + appeals** | The staff-supplied ban reason is sent in a DM to the banned member; the member's **single** appeal reply (if they send one) is forwarded to your staff channel verbatim. No AI is invoked unless staff press **Research** (which runs Message Report on the member's last message) | On (opt-out per server) |
| **🩺 Pulse** | Aggregate counts only — no message content stored | On |
| **🟢 Live server insights** *(Pulse + web-portal dashboard)* | Member **presence** (online / idle / DND vs offline) and **voice-channel membership**, read live to show **aggregate counts only** (e.g. "42 online · 6 in voice"). Never which member, never which channel; only the running totals are stored, as time-series numbers for the growth/activity charts | On |
| **🧠 Self-trained AutoMod** | Messages your staff delete or report | Off |
| **🩹 Bot Health Insurance** | The bot's own action counts | On |
| **💬 SAi** | Your settings + recent event summary + your typed question | On-demand |

---

## Cross-Server Threat Network (ThreatNet)

Server Assistant operates a **Cross-Server Threat Network** — branded **ThreatNet** — a shared safety signal that helps every protected server recognise users who have a serious, corroborated history of abuse (scams, raids, ban-evasion) on *other* protected servers — ideally **before** they cause harm on yours. This is a **core, defining feature** of Server Assistant, not an add-on, and it is described here in full. ("ThreatNet" and "the Threat Network" refer to the same thing throughout.)

<!-- LEGAL REVIEW (SEVERITY-ONLY DESIGN — RESIDUAL LOW/MEDIUM): This section pools the MINIMUM necessary personal information (a pseudonymous Discord user ID + counts/recency + a generic severity level + a fingerprint-match boolean + an account-age modifier) across servers. SERVERS get NO opt-out (core functionality); INDIVIDUALS get a QUALIFIED opt-out from profiling (via the self-service web-portal toggle — LIVE as of v5.8.0; /support is NOT an opt-out route) with a safety exception — compelling legitimate grounds (GDPR Art. 21(1) + safety/fraud) let the most serious corroborated signals be retained/shared despite an opt-out so bad actors can't evade detection. Plus access/correction/deletion via /support. Assessed APP-by-APP under the Australian Privacy Act 1988 (primary) and as a GDPR legitimate-interest basis (secondary, EU/UK). DESIGN CHANGE (locked 2026-06-21): the offence TYPE/CATEGORY no longer crosses servers (only a severity level does) and AI/free-text offence summaries are LOCAL-ONLY. On that design the cross-server dataset is assessed NON-sensitive under the Privacy Act (not a criminal-record per s6(1)) and very unlikely to be GDPR Art. 10 criminal-offence data, so APP 3.2 (reasonably necessary, non-sensitive, NO consent required) + APP 5 notice + APP 6 limits carry collection; EU/UK rests on legitimate interest per the LIA, NOT server-owner consent. R1 re-rated CRITICAL → LOW/MEDIUM in .omp/RISK-REGISTER.md on the strength of the design. Residual: keep the severity band genuinely generic (no offence label leaking in) and keep the EU/UK Art. 10 boundary under review. Internal assessment: .omp/threat-network-PIA-LIA.md §A2/§A-RISK/§B3; register: .omp/RISK-REGISTER.md R1. -->

### What this means for our role

For ordinary moderation records, the server owner is the controller and we act as a processor on their instructions (see *Who is responsible* above). The Threat Network is different. Because we **pool minimized signals from many servers** to build a shared, cross-server picture of a user's risk, **Wandering Webmaster is the data controller** of that cross-server safety dataset. We take on the controller's obligations for it — including the legal basis, retention limits, and data-subject rights described below.

### What data is shared across servers

Every protected server **contributes** minimized abuse signals to the network and is, in turn, **protected by** it. The network is **severity-only**: only a small, **minimized aggregate plus a single severity level** ever crosses the boundary between servers. Specifically, the network may hold, per Discord user:

- **A pseudonymous Discord user ID** — the identifier needed to match signals to the right person. This is the **minimum necessary personal information**; it is pseudonymous, not anonymous, but it is never accompanied by a name, message, or any free-text content.
- **Bans / kicks:** a count of how many *distinct* protected servers have actioned the user, and how recently — never which servers, never the reasons
- **A severity level** (e.g. *minor* / *serious*) summarising how serious the corroborated activity is — **never the offence type or category**. No "scam", "financial", or any other offence label crosses servers; only the severity level does.
- **Repeat-offender fingerprint match (AltGuard):** a **yes/no** indicator that the user matches a known-offender fingerprint seen elsewhere in the network — never the underlying fingerprint detail
- **Account-age / join-velocity modifier:** a risk modifier derived from data Discord already exposes

What **never** crosses the boundary:

- The **offence type or category** of any action — only a severity level travels, never a "scam/financial"-style label
- Raw moderation reasons or any free-text a staff member wrote
- **AI-generated offence summaries** — these are **local-only** and never leave the originating server (see below)
- **Which specific server** took an action (originating servers stay confidential)
- Message content of any kind
- The **scam image itself** — only an irreversible perceptual fingerprint travels, never the image, a thumbnail, a copy, or any text read from it
- Any name, username, avatar, or other Discord account identifier beyond the user ID needed to match signals

A server's local moderation record keeps its full detail for that server's own staff (governed by the rest of this policy); only the minimized, severity-only signals above feed the network. The **local** score (this server only) and the **network** score (everywhere else) are always shown as **separate bands** and are never silently combined.

**AI summaries are local-only.** Where an AI feature generates a short summary of an offence for your staff, that summary stays on the originating server and is shown only to that server's staff. **It never crosses into the network.** No free-text about an individual — AI-generated or human-written — ever crosses the server boundary; the network is aggregate and severity-only by design. This is data minimisation built into the architecture, not a wording promise.

**Scam-image fingerprints.** Separately from the per-user signals above, the network also holds a list of **perceptual fingerprints of known scam images** — short, **irreversible** hashes of screenshots that have been flagged as scams (for example, the fake "withdrawal received" or investment-profit images scammers post to defraud members). For each fingerprint the network keeps only:

- the **irreversible perceptual hash** itself — a short fingerprint from which the original image **cannot be reconstructed or viewed**;
- a **severity level** (advisory, or auto-remove) and whether the fingerprint was curated by us or reported by servers in the network;
- counts of how many distinct servers have reported it and how often it has been blocked.

Crucially, a scam-image fingerprint is **not linked to any Discord user** — it describes the *image*, not the person who posted it. The image itself, any text inside it, and any thumbnail or copy **never** leave the originating server; only the irreversible fingerprint is shared. When the bot removes a known scam image and actions whoever posted it, that enforcement produces an **ordinary severity signal** about the poster on exactly the same terms as any other moderation action (above) — but the shared *fingerprint* carries no user identity, and is matched against the *image*, not the person.

### What we do NOT collect, keep, or share in the network

To be unambiguous, here is what the Cross-Server Threat Network **never** does. The network does **not**:

- **Share message or DM content** of any kind across servers — not your members' messages, not their direct messages.
- **Share cross-server free-text** — no staff-written moderation reasons and **no AI-generated offence summaries** ever cross the boundary (AI summaries are local-only).
- **Share the offence type or category** across servers — no "scam", "financial", or any other offence label travels; only a generic severity level does.
- **Share names or Discord profile data** — no username, display name, avatar, banner, or any other Discord account identifier crosses, beyond the **pseudonymous user ID** needed to match signals to the right person.
- **Share scam images themselves** — for the scam-image fingerprints described above, only an **irreversible perceptual hash** crosses; never the image, a thumbnail, a copy, or any text read from it, and the fingerprint is **not linked to any user**.
- **Reveal which server acted** — originating servers stay confidential across the network.
- **Sell your data, or use it for advertising or profiling for ads** — the network exists for safety only; we never sell data or share it with advertising or analytics networks.

### Why we do this (legal basis)

We operate the Threat Network for one purpose: **platform and community safety** — preventing fraud, scams, raids, and ban-evasion across the servers we protect. How that purpose is justified depends on which law applies to you.

**Under Australian law (our primary framework).** Australia's Privacy Act does not have a "legitimate interest" basis like the GDPR's. Instead, we assess the network against the **Australian Privacy Principles** directly:

- We collect this information because it is **reasonably necessary** for the network's safety function (**APP 3.2**). Because the cross-server signals are **not sensitive information** (see below), we do not need consent to collect them.
- This policy is your **collection notice** (**APP 5**): it tells you what we collect, why, and how to access, correct, or complain.
- We use and disclose the signals **only** for that safety purpose — a security purpose closely related to the moderation context in which they arise — and never for marketing, profiling for advertising, or any unrelated use (**APP 6**).
- We keep the data secure and destroy it when it is no longer needed (APP 11), and let you access and correct your record (APP 12 and APP 13).

The safeguards in this section — strict severity-only minimization, the qualified individual opt-out and rights-request route below, advisory-only use, anti-abuse corroboration, and a hard 12-month retention cap — are what keep this handling proportionate.

**How we give you notice.** Providing notice of the network is **our** responsibility, not something we push onto server owners. This published Privacy Policy is your standing notice now. In addition, the Bot delivers an **in-Discord notice when it is installed in a server**, and an **on-demand command that surfaces this disclosure on request is on our roadmap** (planned, not yet live). Server owners are welcome to tell their members that the server takes part — and we encourage it as good practice — but it is **not their obligation**; the duty to give notice rests with us as the operator.

**Under the EU/UK GDPR (where it applies to you).** Our legal basis is **legitimate interest** (Article 6(1)(f)) — the interest of Wandering Webmaster, every protected server, and their communities in safety and anti-abuse — backed by a written **Legitimate Interest Assessment (LIA)** weighing that interest against the rights and freedoms of the individuals whose signals are pooled. This legitimate-interest basis is **our own**, assessed and documented by us; it does **not** rest on a server owner "consenting" on their members' behalf. Server-owner notice to members is good practice and helps transparency, but the lawful basis for the cross-server processing is the legitimate interest set out in the LIA.

**On sensitive information.** We have deliberately designed the network so that the cross-server data is **not** a "criminal record" or other **sensitive information** under the Australian Privacy Act, and is **very unlikely** to be **criminal-offence data** under GDPR Article 10. The reason is structural, not just careful wording: the **offence type or category never crosses servers** (only a generic severity level does), and **AI-generated and human-written offence summaries are local-only**. What travels is a pseudonymous user ID, counts, recency, a severity level, a fingerprint-match boolean, and an account-age modifier — none of which describes *what* a person allegedly did. For EU/UK users we keep a brief, honest residual note: the boundary between a generic severity signal and criminal-offence data is one a regulator could still test, so we keep the design under review and minimise further if needed. <!-- LEGAL REVIEW (CALIBRATED DOWN — DESIGN CHANGE): offence type/category no longer crosses servers (severity-only band) and AI/free-text summaries are local-only, so the cross-server dataset is assessed as NON-sensitive under the Privacy Act and very unlikely to be GDPR Art. 10 data. R1 re-rated CRITICAL → LOW/MEDIUM in .omp/RISK-REGISTER.md on the strength of the DESIGN, not wording. AU basis is APP 3.2 (non-sensitive, no consent) + APP 5 notice + APP 6; EU/UK basis is legitimate interest per the LIA, NOT server-owner consent. Residual EU/UK note retained honestly. See .omp/threat-network-PIA-LIA.md §A2/§A-RISK/§B3 and .omp/RISK-REGISTER.md R1. -->

### Opt-out: servers vs individuals

There are two different questions here, and they have different answers.

**Servers cannot opt out.** The Threat Network is core, defining functionality — it only works when **every** protected server participates, so that a user banned for scams across six servers lights up on the seventh. So **there is no server-level opt-out, and participation is on by default for every server, across the fleet.** A server cannot use Server Assistant's protection while withholding its own contribution; contribution and protection are two sides of the same network. We disclose this plainly here and in our [Terms of Service]({{ site.url }}{{ site.baseurl }}/terms/) so that server owners understand it when they invite the Bot.

**Individuals can opt out of profiling — with one safety-based exception.** Although a server cannot opt out, **you, as an individual, can ask us to stop profiling you in the network.** This is a **qualified opt-out**:

- **How to opt out.** Sign in to the **web portal** at [serverassistant.wandweb.co](https://serverassistant.wandweb.co) and use the **Threat Network opt-out** toggle on your account page. You act **directly** with us — you do not have to go through any server owner — and the change takes effect immediately. A server's admins can also action an opt-out for one of their members on request. (For access to, correction of, or erasure of your record, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co).)
- **The safety exception.** Because the whole point of the network is to stop serious cross-server harm, we keep one narrow exception: where we have **compelling legitimate grounds** — preventing serious harm such as a **verified raid, scam, or ban-evasion** — the **most serious, corroborated signals about you may still be retained or shared despite your opt-out**. This stops a known bad actor from opting out simply to evade detection. Outside that exception, an opt-out is honoured. If we rely on the exception, we will **tell you** and document our reasons.

This balance maps onto the law: under the **GDPR** it is the **Article 21(1)** right to object to legitimate-interest processing, which we honour **unless we can demonstrate compelling legitimate grounds** (the safety/fraud need above); under the **Australian Privacy Act** we offer this opt-out as a voluntary measure above the statutory floor, alongside your **correction** right (APP 13) and our duty to **destroy data once it is no longer needed** (APP 11.2).

### Advisory by default — and optional Premium automated action

For every server, the network score is **advisory** — it does not ban, kick, or sanction anyone on its own. It surfaces a risk picture to a server's human staff, who decide what (if anything) to do. The score is **explainable** (it shows what drove it — e.g. "flagged in 6 networked servers, 2 bans, last 9 days ago") and **appealable** (see your rights below). Bands are tuned conservatively to favour false-negatives over false-positives.

**Premium servers may opt in to "ThreatNet auto-protect."** When a server administrator switches it on, the bot will **automatically ban a user as they join** that server **if** the account meets a **cross-server risk threshold the server chooses**. The default — and most conservative — setting is the **highest band** (serious *and* corroborated across **two or more independent** servers); an administrator may set a broader threshold, which acts on weaker signals. It is **off by default**, applies **only on the servers that choose to enable it** and **at the threshold they set**, and **never** acts on anyone who has **opted out** of network profiling.

Because that ban can be a **decision based solely on automated processing that significantly affects you**, we apply **GDPR Article 22** safeguards (and equivalent care for all users). We disclose the existence and general logic of this automated decision-making **here, in this Privacy Policy** (rather than by messaging the affected user directly — the bot does not contact people it bans), and we provide a standing route to **obtain human review, contest the decision, and request correction or erasure** — through the [web portal](https://serverassistant.wandweb.co) or `/support`. Anyone may use that route whether or not they were individually notified, and **a human reviews such requests**. We honour opt-out and erasure here on the same terms as elsewhere in this policy, subject only to the published compelling-grounds safety exception. <!-- LEGAL REVIEW (NEW — Art. 22 automated decision, needs sign-off): Premium opt-in auto-ban is solely-automated processing with a significant effect → Art. 22 engaged. Safeguards in product: OFF by default, opt-in per server, DEFAULT threshold = high+corroborated, opt-out always honoured, automated-decision notice + human-review/appeal route, audit log, in-app warning on lower thresholds. OWNER DIRECTIVE 2026-06-22: the hard 'high' FLOOR was REMOVED — a server may set the threshold as low as 'low' (any cross-server record), so false-positive/Art. 22 exposure is materially higher and the server is responsible for the level it sets. Lawful basis remains our legitimate interest (LIA) for the network; the auto-action is the SERVER's enabled control over its own membership. Residual: a wrongly-banned individual is a third party; advisory-grade accuracy + appeal route are the mitigations, not a disclaimer. Confirm with owner + lawyer before publishing; update .omp/threat-network-PIA-LIA.md (Art. 22) and RISK-REGISTER.md. -->

### Data minimization

Minimization is engineered into the network, not bolted on: only counts, recency, a **severity level**, and a boolean fingerprint-match indicator ever leave a server. **No offence type or category**, no free-text, **no AI-generated summaries**, no message content, no originating-server identity, and no Discord account identifiers beyond the **pseudonymous user ID** needed to match signals to the right person. We share the **minimum necessary personal information** — that pseudonymous user ID plus aggregate counts and a severity level; never names, messages, or content. This protects both the individual and the operational confidentiality of the server that originally acted. The scam-image blocklist follows the same principle: only an **irreversible perceptual fingerprint** of a flagged scam image is shared — never the image, a thumbnail, a copy, or any text read from it — and the fingerprint is **not linked to any Discord user**.

### Retention

Network signals are retained on a **rolling 12-month window measured from the last signal** for that user. When 12 months pass with no new contributing signal, the user's network record is **hard-deleted**. A new signal restarts the window.

### Your rights in the Threat Network

If you are an individual whose data is in the network, you can exercise the rights below **directly** with us — you do not have to go through a server owner. **To opt out of profiling, use the self-service Threat Network opt-out toggle in the [web portal](https://serverassistant.wandweb.co)** (see *How to opt out* above). For access, correction, deletion, or any question, contact us via the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command or [wandweb.co](https://wandweb.co).

**What you can always do (these are your rights, everywhere):**

- **Access (APP 12 / GDPR Art. 15).** Ask what network record we hold about you. Because the record is minimized to counts, recency, and a severity level, we can show you the drivers (for example, "flagged in 6 networked servers, 2 bans, last 9 days ago").
- **Correction (APP 13 / GDPR Art. 16).** If a signal about you is **wrong, out of date, or misleading** — for example a bad-faith ban — ask us to correct or remove it. We will take reasonable steps to fix it. This is the main route by which an unfair flag gets put right.

**Opt-out / deletion / objection.** You may **opt out of network profiling**, and **request deletion of, or object to, the processing of, your network record**. Australian privacy law does not give a general "right to erasure" or "right to object" the way the GDPR does — but we go beyond the legal floor and offer this opt-out and deletion path to everyone as a matter of good practice, and we are independently required to **destroy your record once it is no longer needed** (and in any case at the 12-month retention cap below). We handle each request **individually**:

- We will **honour** the request (opt you out, delete, or stop processing your network record), **unless**
- we have **compelling legitimate grounds** — a **clear, corroborated safety or fraud-prevention need** (a verified raid, scam, or ban-evasion) — to retain the **most serious** signals, so that a known bad actor cannot opt out to evade detection. In that case we will **tell you and document why**. Outside that narrow exception, your opt-out is honoured.

**How to opt out:** use the self-service **Threat Network opt-out** toggle in the [web portal](https://serverassistant.wandweb.co). It takes effect immediately, and you come directly to us — no server owner involved.

**If you are in the EU or UK**, this same route services your GDPR **right to object** to legitimate-interest processing (Article 21) and your **right to erasure** (Article 17): we stop, opt you out, or erase **unless we can demonstrate compelling legitimate grounds** under **Article 21(1)** (the corroborated safety/fraud need above). <!-- LEGAL REVIEW (RESOLVED — DRAFTING): Re-based onto APP 12 (access) + APP 13 (correction) + APP 11.2 destruction-when-no-longer-needed as the AU framing (no standalone AU erasure/objection right), with the voluntary case-by-case deletion offered above the statutory floor; GDPR Art. 21/17 layered for EU/UK. The only residual is operational, not drafting: the "compelling/corroborated grounds" standard must be applied consistently and refusals documented when an opt-out / erasure request is actioned — tracked in .omp/threat-network-PIA-LIA.md Part C and .omp/RISK-REGISTER.md. -->

### Contribution vs visibility

To be clear about what each server *sees* versus what it *contributes*:

- **Every** protected server (free, standard, or Premium) **contributes** signals to and is **protected by** the network.
- The **rich dossier view** — the detailed per-user breakdown of network drivers — is a **Premium** feature. Free and standard servers receive only a **basic network band** (a low/elevated/high indicator) rather than the full breakdown.

Participation in the network itself does not depend on plan tier; only the depth of what staff can *view* does.

---

## XP, leveling & the public leaderboard

Server Assistant includes an **XP and leveling** system. Members earn **XP** ("experience points") simply by taking part — every message adds a small amount, and members climb through **levels** as it accumulates. This is an **always-on, mainline feature**: it is part of every plan, runs automatically for every server, and there is **no opt-in or opt-out** for XP tracking itself. (The only related control is a staff toggle for whether *level-up announcements* are posted in the channel — it does not change whether XP is counted.)

### What we collect and derive

For each member, to run XP and leveling we process:

- **Message-activity signal:** the fact that a member posted, a count of how many messages they have sent in a server, and a message's **length** (used to weight a small length bonus). We do **not** store the **content** of those messages for this feature — only the activity counts and the derived XP. A short-lived, in-memory check prevents the same message being counted twice and caps how much XP can be earned in any 60-second burst; that anti-spam window is not retained.
- **XP balance (the "XP wallet"):** a member's **account-wide** XP total. XP is tied to the **member, not to a single server** — chat activity across every server they share with the Bot, plus voting rewards (below), add up into **one account-wide balance** held centrally.
- **Level** and **progress** derived from that XP total.
- **Reputation:** a per-server reputation count derived from reactions.
- **Voting-reward XP:** if a member votes for Server Assistant on a bot-listing site, we record that they voted (to grant the reward XP and to enforce the ~12-hour cooldown between votes) and credit the reward to their XP balance. We send the member a confirmation direct message and a later "you can vote again" reminder.
- The member's **Discord user ID** and **username** (the username is cached so it can be shown on the leaderboard and rank card).

### What is exposed publicly

XP and leveling make a member's **identity and standing visible to others**:

- **`/leaderboard`** posts a ranked list of a server's most active members **publicly in the channel**, where everyone present can see it. Each entry shows the member's **username, their position/rank, their level, and their XP total**.
- **`/rank`** shows a member's level, rank, XP and progress; this reply is private to the person who runs it, but it can be run to look up **another** member's standing.
- A member's XP **wallet** (their account-wide balance) is also visible to them in the **customer portal** at [serverassistant.wandweb.co](https://serverassistant.wandweb.co), where it powers the **Crestbound** game economy (XP is the currency spent to collect in-game Crests). The same account-wide XP total drives both the leaderboard and Crestbound.

In short: by participating in a server with the Bot installed, a member's username and their activity standing (rank, level, XP) can be **shown publicly to other members of that server**, and their XP balance is available to them in the portal.

### Why we process it, and how long we keep it

We process XP and leveling data to provide the leveling feature itself — ranking, the leaderboard, level-up progress — and to power the Crestbound game economy in the portal. Under the Australian Privacy Act, this collection is reasonably necessary for the feature a server has enabled (APP 3) and is used only for that purpose (APP 6). For members in the EU and UK, we rely on our **legitimate interests** (Article 6(1)(f) GDPR) in providing the community-engagement feature the server chose to install.

**Retention.** XP, level, message counts, reputation and the account-wide XP wallet are retained for as long as the member's account-wide wallet is in use — that is, until the data is deleted on request. There is no automatic expiry for XP data. You may contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) to request access to, or deletion of, the XP data we hold about you.

## Crest artwork & attribution

**Crestbound** Crest artwork is **crowdsourced and shared**. The first member to reveal a particular Crest's art triggers its one-time generation by a third-party image generator (**Pollinations**, [pollinations.ai](https://pollinations.ai)); the resulting image is then **stored by us and shown to every player, permanently**. The image prompt is generated automatically from the Crest's name and type — **no personal data is sent** to the image generator.

The member who first reveals a Crest's art is **credited publicly by their Discord display name** on that Crest ("discovered DD-MM-YY by …"), visible to anyone who views it. To provide this we store the Crest's id, your Discord user ID and display name, and the generated image. We rely on the same **legitimate-interest** basis as the XP feature above (providing the community-engagement feature the server installed); for members in Australia this is collection reasonably necessary for that feature (APP 3) used only for that purpose (APP 6).

**One-time opt-out (irreversible).** From the customer portal you may opt out of art attribution. This is a **one-time, permanent** action: all of your existing art credits are **removed**, the Crests you discovered are **re-illustrated by the next member who reveals them**, and any future discoveries are recorded **without your name**. It cannot be undone. Art-attribution data is otherwise retained while the credited art exists.

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

Because Discord and our users are global, using the Bot from outside the United States involves an **international transfer** (in Australian terms, a **cross-border disclosure** under **APP 8**) of the limited data described in this policy to the US, and the Threat Network discloses minimized signals to protected servers in many countries. Where required, we rely on appropriate safeguards (such as Standard Contractual Clauses and data-processing agreements) for those transfers. Under APP 8 we **remain accountable** for how our overseas hosting providers and sub-processors handle Australian personal information. Our sub-processors may handle data in other regions under their own policies.

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
| XP, level, message counts, reputation & account-wide XP wallet | Retained while the member's account-wide wallet is in use, until deleted on request; no automatic expiry |

---

## Your rights

**Server owners** can:
1. Remove the Bot from their server — this wipes encrypted credentials immediately
2. Contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) to request deletion of warnings, notes, audit log entries, and ledger data for their guild

**Portal staff** can **sign out** at any time from the portal's Settings — this deletes their session immediately and unsubscribes push notifications on that device.

**Individual members** wishing to have personal moderation records erased should contact their server owner first. If unresponsive, contact us directly via `/support`.

**Cross-Server Threat Network:** because we are the controller (Australian: APP entity) of the cross-server safety dataset — not a per-server processor — an individual can come **directly** to us, without going through any server owner. **Opt out of profiling** via the self-service toggle in the [web portal](https://serverassistant.wandweb.co); **access** your network record (APP 12), **correct** it (APP 13), or **request deletion of** it via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). We handle these requests individually and will honour them unless we have a **clear, corroborated safety or fraud-prevention need** (for EU/UK users, **compelling legitimate grounds** under GDPR **Article 21(1)**) to retain the **most serious** signals, in which case we explain our reasons. See **Cross-Server Threat Network → Opt-out: servers vs individuals** and **→ Your rights in the Threat Network** above for the full mechanism.

### Australian Privacy Act 1988 / Australian Privacy Principles (primary)

We are based in Queensland, Australia and treat the **Privacy Act 1988 (Cth)** and the **13 Australian Privacy Principles (APPs)** as our primary framework. Under the APPs you can:

- **Be informed** about how we handle your personal information (APP 1, APP 5) — this policy is that notice.
- **Access** the personal information we hold about you (**APP 12**), including your Cross-Server Threat Network record.
- **Correct** personal information that is inaccurate, out of date, incomplete, or misleading (**APP 13**).
- Rely on our obligations to collect only what is **reasonably necessary** (APP 3), use and disclose it only for the purpose we collected it or a closely related purpose you'd reasonably expect (APP 6), keep it **secure** (APP 11), and **destroy or de-identify** it once it is no longer needed (APP 11.2).

Australian privacy law does **not** include a general "right to erasure" or standalone "right to object" of the kind the GDPR provides. Where you want a record removed, the routes above (correction under APP 13, and our destruction-when-no-longer-needed obligation) apply — and for the Threat Network we additionally offer a **voluntary, case-by-case deletion path** that goes beyond what the APPs strictly require (see *Cross-Server Threat Network → Your rights in the Threat Network*).

To exercise any of these, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). If you are not satisfied with our response, you can complain to the **Office of the Australian Information Commissioner (OAIC)** at [oaic.gov.au](https://www.oaic.gov.au/) — see *Complaints* below.

### GDPR (EEA / UK)

If you're in the European Economic Area or the UK, the GDPR also applies to our processing of your personal data, and you have the right to **access, correct, delete, restrict, or object to** that processing, and the right to **data portability**. Our legal bases for processing are: **performance of the service** (running the features a server has enabled), our **legitimate interests** (security, anti-abuse, service integrity, and the **Cross-Server Threat Network** described above — platform and community safety, supported by a written Legitimate Interest Assessment), and **consent** for opt-in AI features. Where we rely on legitimate interest — including for the Threat Network — you have the right to **object** under Article 21 and to seek **erasure** under Article 17; for the Threat Network specifically, you can **opt out of profiling** and exercise these rights via the route described in *Cross-Server Threat Network → Opt-out: servers vs individuals*. We honour an objection/opt-out unless we can demonstrate **compelling legitimate grounds** under **Article 21(1)** (a corroborated safety/fraud need) to retain the most serious signals. To exercise any of these rights, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). You also have the right to lodge a complaint with your local data-protection **supervisory authority** (in the EU, your national Data Protection Authority; in the UK, the **Information Commissioner's Office (ICO)** at [ico.org.uk](https://ico.org.uk/)).

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

## Complaints

If you have a privacy concern, please raise it with us first via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co) — we take it seriously and will try to resolve it.

If you are not satisfied with our response, you can complain to the relevant regulator for where you are:
- **Australia:** the **Office of the Australian Information Commissioner (OAIC)** — [oaic.gov.au](https://www.oaic.gov.au/) (our primary regulator).
- **United Kingdom:** the **Information Commissioner's Office (ICO)** — [ico.org.uk](https://ico.org.uk/).
- **EU / EEA:** your national **Data Protection Authority** (supervisory authority).

---

## Contact

[`/support`]({{ site.url }}{{ site.baseurl }}/support/) from any server with the Bot installed, or visit [wandweb.co](https://wandweb.co).
