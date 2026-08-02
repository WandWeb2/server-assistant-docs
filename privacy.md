---
layout: default
title: Server Assistant Privacy Policy
permalink: /privacy/
description: How Server Assistant handles your Discord server's data, encrypted storage, per-guild isolation, AI provider data flow, the web portal, and billing.
---
# Server Assistant Privacy Policy

**Effective date:** May 9, 2026
**Last updated:** August 2, 2026

This policy describes how the Server Assistant Discord bot ("the Bot") collects, uses, and stores information when installed in a Discord server.

## Who is responsible

Server Assistant is built and maintained by **Wandering Webmaster** ([wandweb.co](https://wandweb.co)), based in **Queensland, Australia**, serving Discord communities **worldwide**. Contact us via the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command from any Discord server with the Bot installed.

Because we are in Australia and serve users everywhere, more than one privacy law can apply to the same information. We aim to handle your data in line with:
- the **Australian Privacy Act 1988 (Cth)** and the **13 Australian Privacy Principles (APPs)**, our primary framework;
- the **EU and UK GDPR**, where they apply to users in the EU/UK (a cross-server safety signal can involve monitoring the behaviour of those users); and
- the **CCPA**, for California residents.

Where these regimes use different language for the same idea, we have written this policy to meet the stronger expectation in plain terms.

Wandering Webmaster is the **data controller** (and, in Australian terms, the **APP entity**) for the information described in this policy. Where we process moderation records about a server's members **on that server's behalf**, the server owner is the controller and we act as a **processor** carrying out the owner's instructions. There is one important exception: for the **Cross-Server Threat Network** (see that section below), where we pool minimized signals from many servers into a shared safety dataset, **we act as the data controller** of that cross-server dataset.

### Our approach to your privacy

Server Assistant is run by a **small independent operator** who takes a **privacy-by-design, data-minimisation** approach: we collect only what each feature genuinely needs, share the minimum necessary, and prefer aggregates and severity levels over raw content wherever a feature allows. If you ever have a privacy concern, about the Threat Network or anything else, you can reach us directly through the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command from any server with the Bot installed, and we will respond. We **review and update this policy periodically** as the Bot's features evolve, and the "Last updated" date above reflects the most recent revision.

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

**Warnings & notes.** When staff issue a warning or note:
- Discord user ID of the affected member
- Timestamp, acting staff member's user ID, and the note/reason text

Retained until manually removed by staff or until the Bot is removed from the server.

**Moderation-actions log.** A server-side record of moderation *actions* taken in your server, both those issued by staff and those the Bot takes automatically (for example an automated scam-image removal or timeout), including actions taken directly in Discord (native bans, kicks, timeouts). Each entry records **only**:
- The affected member's Discord user ID
- The action type (e.g. ban, kick, timeout, delete, flag), the actor (a staff member, or an automated system such as "ThreatNet"), a timestamp, and a short reason label

This log is **always on** and is **visible to your server's admins in the web dashboard**. Because it lives on our servers, it cannot be edited or deleted from within Discord, so a moderation action is never left without a record, even if you have not set up a Discord log channel (or a channel entry is deleted). It does **not** store the message content or any image that triggered the action, only the fields listed above. That holds for **text written in the game** too, on a Minecraft server running our bridge: when in-game text trips your AutoMod — chat, a sign, a book, an item name, a mob name tag, a `/me` emote, a username, or a private message — the entry names the player, their Minecraft UUID, and which rule matched, and records **no part of the text itself**. Entries are automatically deleted after **180 days**.

### Alt-guard fingerprints (repeat-offender detection)

Alt-guard is the feature that spots someone your server banned coming back on a second account. To do that it needs a record of who has already been removed, so when a member is **banned or kicked** in your server, whether staff did it or the Bot did, we write a small **fingerprint** of that account to your server's own store on our host:

- Their **Discord user ID**
- Their **username** and **display name**, stored lower-cased
- Their **avatar hash**, the identifier of the picture rather than the picture itself (blank if they were on a default avatar)
- Whether it was a **ban** or a **kick**, and **when** it happened

That is the whole list. We do not keep the reason a staff member typed, and we store **nothing at all about a new member who joins**: a joiner's name, avatar and account age are compared against the store in memory and none of it is written down unless that joiner is themselves banned or kicked.

**Recording happens on every server, whether or not alt-guard is switched on.** We would rather say that plainly than leave it to be discovered. `/altguard on` controls what the Bot **does** with the store: whether joins are matched against it, whether staff are alerted, and whether a confident match is acted on. It does not control whether a fingerprint is taken. The reason is that a store which only starts filling on the day you enable the feature catches nobody: alt-guard works by comparing against history, and servers switch it on **after** a raid or a wave of ban evasion, not before, so a store that began empty at that moment would find nothing for months, which is exactly the period it was turned on for. We think that is the right trade. It does mean this policy previously described alt-guard as "off, opt-in", which a server owner could reasonably have read as meaning nothing was being recorded until they enabled it. That was not accurate, and this section is us correcting it rather than explaining it away.

**One other feature reads the same store.** If your server uses **join verification**, a joiner's risk score includes whether they resemble a previous offender, and that check reads these fingerprints regardless of the alt-guard switch.

**Limits on the store.** It holds at most **200 fingerprints per server**, and the 201st pushes out the oldest. A fingerprint is **deleted when that member is unbanned**, because an overturned ban should stop counting against them. There is **no time-based expiry**: a fingerprint stays until it is pushed out by newer ones, cleared by an unban, or the Bot is removed from the server.

**The fingerprint never leaves your host.** It is held per server, is not pooled with any other server's, and is not sent to any third party. **No indicator derived from it crosses servers either.** The Cross-Server Threat Network's schema carries a yes/no "matched a known offender" field, but the Bot has never sent it as true, and since **v6.112.0** it does not send the field at all. See *Cross-Server Threat Network* below.

**Alt-guard can ban automatically.** On a server that has switched it on, a confident match can end in a ban with no staff member involved. That is automated decision-making and we treat it as such, alongside ThreatNet auto-protect, under *Advisory by default, and optional Premium automated action* below.

**Why we record this (legitimate interest).** Under the GDPR our basis is **legitimate interest** (Article 6(1)(f)). Under the Australian Privacy Act it is collection **reasonably necessary** for the moderation function of a server the Bot is installed in (**APP 3**), used only for that purpose (**APP 6**). It is **not consent**, and it is worth being exact about why: the person whose fingerprint is taken has just been banned or kicked, and nobody in that position is being asked for anything.

*The interest.* Ban evasion. A ban somebody can walk around by making a new account in thirty seconds is not a moderation tool, it is a formality, and the member the ban was meant to protect is back where they started. Most servers are run by volunteers who cannot watch every join. That is the interest being pursued and it is the only one: the store answers "have we seen this account before", and nothing else reads it.

*Why the processing is necessary, and why unconditionally.* Matching an alt requires something to match against, and the only thing that separates a returning banned user from an ordinary new member is what the old account looked like. There is no less intrusive version that works: the comparison is fuzzy, on names that have been altered slightly and pictures that have been reused, and a hashed or de-identified store cannot be compared fuzzily. The **unconditional** part is a second decision and deserves its own answer rather than riding on the first. A store that only begins filling when a server enables the feature is empty precisely when that server needs it. Recording from the start is what makes the feature work on the day it is switched on instead of months later.

*The balancing.* On one side, a server able to make its bans mean something, and the members it banned someone in order to protect. On the other, a person who has been removed from a server and now has six fields about their account held indefinitely by us. What we weigh in favour is that the data is thin and already known to the server holding it: a user ID, two names, an avatar hash, a ban-or-kick label and a timestamp are all things that server's own staff can read off their ban list. It is held per server and pooled with nothing. It is read for one comparison at one moment, when a similar account joins. And it is deleted the moment the ban is overturned.

What we are **not** going to weigh in favour, because it would not be honest, is that the person agreed to it, or benefits from it, or that the intrusion is trivial. They did not, they do not, and for the person it misidentifies it is not.

*What this costs the person, said properly.* The matching is a similarity comparison, and similarity is not identity. The strongest signal it has is that a joining account is using the **same picture** as an account this server banned, and a picture is not a person: two people can pick the same popular image, and nothing in the comparison can tell that apart from an evader re-uploading their own. Add one supporting signal, an account a few days old, or a recent ban on that server, and the Bot has enough to act by itself. So a person who has never been banned anywhere can join a server and be **banned on arrival because of their profile picture**, without a human having looked at the decision first. They do get the ban-reason DM and the single appeal reply it invites, which reaches that server's staff next to the alert, so there is a route back. It depends on a person then choosing to read it. That is a real harm to a real individual, and it being uncommon does not make it small for whoever it lands on.

*Safeguards.* Taken together, these are what keep the recording proportionate:

- **Six fields, per server, pooled with nothing.** No reason text, no message content, no data about joiners.
- **A hard cap of 200 per server**, oldest out first, so it cannot grow into a permanent register of everyone a server ever removed.
- **Automatic deletion on unban**, with no request needed.
- **Acting on a match is a separate switch from recording**, and it is off by default.
- **Your right to object.** Because this rests on legitimate interest, you may **object** under **GDPR Article 21**, and ask what we hold about you, have it corrected, or have it deleted. Come to us directly through [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co); you do not have to go through the server that banned you.

### Staff decision records

Some alerts need a **person** to decide: a ban appeal, a borderline AutoMod flag, a possible raid, a risky action awaiting owner approval, or a flagged piece of in-game text from a bridged Minecraft server. When one is raised, we store a **decision record**, so that the same item appears both in your staff chat and in the web portal's "Needs input" strip, and so it is clear who acted on it. Each record holds:

- The server (guild) ID, the kind of decision, and a short title
- **What is being decided about**: up to about **500 characters** of the message, appeal text, or in-game text that triggered it, together with the rule or reason that matched
- For an **in-game Minecraft** flag, the player's name, their Minecraft UUID, and the bridged channel — there is no Discord account to point at instead
- Which staff member resolved it, what they chose, and when

This is the one place a short extract of flagged **in-game** text is written to our database; the moderation-actions log above deliberately holds none. A decision record is deleted **90 days after the decision is closed**. A decision **nobody has acted on stays open** and is kept until someone closes it — we do not delete an item still waiting on a moderator, because a decision that silently vanishes from the queue is worse than one that waits.

### Audit log

A rolling log of recent staff actions across the Bot, including actions taken **directly in Discord** (native bans, kicks, timeouts), not just those routed through the Bot. Each entry contains:
- Timestamp, acting staff member's user ID and tag
- Action type and parameters (truncated to 500 characters)
- Result status and guild ID

It is a fixed-size ring: we keep the **most recent 500 entries**, and each new one pushes out the oldest. There is no time limit on it, only that count.

This audit trail is **encrypted at rest** with the same master key used for credentials. Server staff cannot read, edit, or erase it; only the Bot can access it. If anyone deletes an entry from a server's visible log channel, the owner is alerted automatically, and the encrypted record remains intact.

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
- Per-call log: the **Discord user ID** of the person whose action triggered the call, feature name, model, token counts, estimated cost in USD, timestamp
- No message content is stored in the ledger, only usage metadata

The user ID is in that per-call log because some AI features are capped **per person** rather than per server, and this log is what the six-hour rolling cap is counted from. It is the only thing that reads it at that grain.

### Billing data

If you subscribe to Premium via Stripe:
- We store a reference to your Stripe Customer and Subscription ID (not your card details, those are held by Stripe)
- Guild ID, plan tier, subscription status, and period-end date
- Stripe handles all payment processing, card storage, and tax compliance per their own [Privacy Policy](https://stripe.com/privacy)

### Web portal sign-in (staff)

Server owners, admins, and moderators can manage their server from the web portal at **serverassistant.wandweb.co**. Signing in uses **Discord OAuth** (you authorise it on Discord; we never see your Discord password). For a signed-in staff member we store:
- Discord user ID and username
- Which of your servers they may manage and at what level (owner / admin / moderator), derived from the roles you mapped in `/setup`
- A session token with an expiry, and the time it was last used

We request the Discord scopes `identify`, `guilds`, and `guilds.members.read` **only** to confirm who you are and which servers and roles you have. The short-lived Discord access token used to read that is **not stored**; we derive your access level and discard it. The portal never grants a staff member more than their Discord role already allows, and every action is re-checked on our server.

### Push notifications (web portal)

If a staff member installs the portal as an app and turns on notifications, we store the browser **push subscription** (an endpoint URL and its encryption keys) together with their Discord ID, so we can alert them when something needs their input. Notifications are delivered through the push service operated by that person's **browser vendor** (e.g. Google, Mozilla, or Apple), see Sub-processors below. Signing out or disabling notifications deletes the subscription.

### Support tickets & appeals

When you message us through a support ticket (via `/support`) or reply to a ban-appeal DM, we store the content of those messages so staff and our operator can read and respond:
- **Support ticket:** your message text (up to 4,000 characters) and any image URLs you attach
- **Ban appeal:** the appeal reply you send, forwarded to the server's staff

**Minecraft ban/kick appeals (web form).** If you are banned or kicked on a Minecraft server running our bridge, the disconnect message may include a **one-time link** to a web appeal form. If you choose to submit it, we store the **appeal text you write**, together with your **Minecraft account UUID** and the ban context (your Minecraft player name, the action, and the staff-supplied reason), and forward it to that server's staff to review. This is information **you choose to send**; the form link is **single-use and expires**. Our lawful basis is our and the server operator's **legitimate interest in operating a fair appeals process** (Australian Privacy Principle 3; GDPR Article 6(1)(f)) — distinct from the opt-in *consent* basis for Minecraft account linking. We retain it with the related moderation record and delete it on request.

**How long we keep a ticket.** Once a ticket is marked **resolved**, it and any reply draft written with it are deleted **180 days** after their last activity. The clock runs from the last reply or the resolution, not from when you first wrote in, so it is 180 days of silence rather than 180 days from first contact. A ticket that is still **open** is **never deleted at any age**: an open ticket is somebody waiting for an answer, and a support conversation that quietly disappears out from under the person who started it is worse than one that sits there.

These are messages you choose to send to us or to your server's staff. **Ordinary Discord direct messages and private conversations are never read or stored.** That has always been a statement about **Discord**, and we have made it explicit here rather than leave it to be inferred: private messages sent *inside the game*, on a Minecraft server running our bridge, are a different thing entirely and have their own section — see *Minecraft chat and other in-game text → Private in-game messages* below.

### Bot message log

A record of the messages **the Bot itself sends**, to a server channel, a thread, or to a member by direct message (for example a ban-reason DM or a "finish setup" reminder). For each, we keep:
- The server (guild) ID and which channel it was sent to, or, for a DM, simply that a direct message was sent and to whom
- A short summary of the message (up to ~140 characters) and the time it was sent

This log covers only messages **the Bot sends**, never messages your members send to one another. It exists for operational reliability and as a safety/audit trail of the Bot's own activity, and is visible only to our operator. It is **not** shown in your server's web portal, and the **content** of a member's private DM is never echoed into any server channel, only a content-free note that the Bot reached out. Entries are automatically deleted after **60 days**.

### Community feature polls

Every so often we ask the servers we serve which feature we should build next. When we do, the Bot posts a **Discord poll** into the **staff-chat channel** you nominated in `/setup`, so the people who run the server can weigh in on what we work on. These go to a server's **staff**, about our roadmap. We do not put polls to a server's members, and we do not use this to survey your community about anything.

A vote is still a small piece of personal data, so we would rather list it than treat it as too minor to mention. For each vote cast we store:

- The **Discord user ID** of the person who voted, and **which option** they picked
- Which poll it belongs to, which server it was cast in, and the time

That is all of it. A vote carries no free text, and someone who does not vote leaves no record at all. Retracting a vote in Discord deletes the row. Totals are counted across every participating server, with the same person counted once however many servers they voted in.

**How long we keep them.** Votes on a **closed** poll are deleted **180 days** after it closed. Votes on a poll that is still **open** are not deleted at any age, because they are the live tally. The poll question and its options are our own record and hold nobody's personal data, so they stay.

**Why we do it.** Our basis is our **legitimate interest** in finding out what the people actually running these servers want built (GDPR Article 6(1)(f)); in Australian terms it is collection reasonably necessary for that purpose (APP 3), used only for it (APP 6). It is used for nothing else, and voting is entirely optional.

---

## What the Bot does NOT store

- Message content beyond what triggered an action or review — whether it was posted in Discord or written in the game on a Minecraft server running our bridge (when one is triggered, only a truncated copy is kept: up to 500 characters in the audit log, up to ~500 characters in the staff decision record described above, or up to ~1,500 characters of surrounding context for a message your staff send for review)
- User direct messages or private conversations. There are **three** exceptions, and they are the only ones: messages you send us through a support ticket (`/support`), and a ban-appeal reply, which we store so staff can respond (see **Support tickets & appeals** above); and a **private in-game message on a Minecraft server running our bridge that matches that server's AutoMod filter**, which is reported to that server's staff (see *Private in-game messages* below). A private in-game message that matches **nothing creates no record**: it passes through the queue we check it from, is deleted from it within about a day, is read by no person at any point, and is never written into the moderation log, a decision record, or anything else we keep
- Voice channel recordings, transcripts, or audio of any kind, nor any record of *which* member is in *which* voice channel (we read live voice state only to display an aggregate count, described below)
- Per-member presence/online status; we read it live to show an aggregate online count, but never store who is online
- User avatars, banners, or media (except images generated by `/imagine`)
- Email addresses, phone numbers, or any out-of-band contact information
- The full content of messages read by AI features, only the AI's output is retained in the channel

---

## What each feature reads

You control all of this via the `/privacy` panel. AutoMod and anti-raid are required for moderation and always on; everything else is opt-in.

| Feature | What it reads | Default |
|---|---|---|
| **AutoMod** | Message content, checked against your filters — in Discord and, if you run our Minecraft bridge, in the text players write in the game: chat, signs, books, item names, mob name tags, `/me` emotes, usernames, and private messages between players (see *Minecraft chat and other in-game text*) | Always on |
| **Anti-raid** | Join events only (no message content) | Always on |
| **Natural-language commands** | Messages in your staff-chat channel | Off (new servers) |
| **Message Report** | ~20 messages around the one you right-click | Off (new servers) |
| **AutoMod AI second-opinion** *(Premium, opt-in)* | The text of a single borderline AutoMod-flagged message + which filter matched. Only **word-filter and spam** hits are ever sent; confident hits and clear misses are never sent. **Discord messages only today** — see *Minecraft chat and other in-game text* below | Off (opt-in via `/automod → AI Review`) |
| **Alt-guard / repeat-offender detection** | A **local-only fingerprint** of each member banned or kicked in your server, by staff or by the Bot: their **Discord user ID**, username and display name, avatar hash, whether it was a ban or a kick, and the time. **Nothing is stored about a joiner**: a new member's name, avatar and account age are compared in memory and written nowhere. The fingerprint **itself** never leaves your host, and no match indicator derived from it is currently shared with the Cross-Server Threat Network either (see *Repeat-offender fingerprint match* below) | **Recording: always on, every server.** `/altguard on` (off by default) controls only what the Bot *does* with the store (matching, alerting, and acting), not whether a fingerprint is taken. See *Alt-guard fingerprints* above |
| **Cross-Server Threat Network** | Minimized abuse signals (a pseudonymous Discord user ID, ban/kick counts + recency, a **severity level**, e.g. minor / serious, account-age/join-velocity) shared across protected servers as **aggregates and a severity level only**, never the offence type/category, never reasons, never message text, never which server acted. Also includes **irreversible perceptual fingerprints of known scam images** (not linked to any user; the image itself never leaves the originating server). See **Cross-Server Threat Network** below | On (core feature, no *server* opt-out; individuals may opt out of profiling, subject to a safety exception) |
| **Ban-reason DMs + appeals** | The staff-supplied ban reason is sent in a DM to the banned member; the member's **single** appeal reply (if they send one) is forwarded to your staff channel verbatim. No AI is invoked unless staff press **Research** (which runs Message Report on the member's last message) | On (opt-out per server) |
| **Pulse** | Aggregate counts only, no message content stored | On |
| **Live server insights** *(Pulse + web-portal dashboard)* | Member **presence** (online / idle / DND vs offline) and **voice-channel membership**, read live to show **aggregate counts only** (e.g. "42 online · 6 in voice"). Never which member, never which channel; only the running totals are stored, as time-series numbers for the growth/activity charts | On |
| **Self-trained AutoMod** | Messages your staff delete or report | Off |
| **Bot Health Insurance** | The bot's own action counts | On |
| **SAi** | Your settings + recent event summary + pending staff decisions (which can include ban-appeal text) + your typed question | On-demand |

### SAi answering from channels you nominate (not live today)

We are building a capability that lets your staff nominate a small set of channels — typically rules, FAQ, or announcements — for **SAi** to answer from, so that when someone asks "what are the rules on X", SAi answers from what your server actually says rather than guessing. **It is not live today**, and no channel is read this way at present. We are setting it out here before it ships, because it would change what is **sent** to an AI provider. When it does arrive:

- **It is off by default, twice over.** It has its own switch in the privacy panel, which is off for every server including existing ones, and it does nothing at all until your staff also nominate at least one channel. No channel is nominated by default.
- **Your staff choose the channels, up to five.** There is no automatic selection.
- **Only channels `@everyone` can already read.** Each nominated channel is re-checked at the moment of the question, and one that is private or restricted is skipped rather than read — so no staff-only or members-only content is transmitted. Nominating a channel is not the same as granting permission to read it.
- **Read-only channels by default.** The intended sources are channels members cannot post in — your rules and announcements. Nominating a channel members *can* write in requires your staff to confirm a deliberate override; without that confirmation the channel is skipped, including if it was read-only when nominated and is opened up later.
- **Read live, kept nowhere.** The text is fetched when a question is asked, used to compose the answer, and discarded. It may sit in a short-lived in-memory cache (about 90 seconds) so a follow-up question does not re-read the same channel; that cache is lost when the service restarts and is never written to our database or to disk.
- **Strictly bounded.** SAi reads a channel's **pinned messages** first, falling back to a handful of recent messages only in a channel with no pins. Each message is truncated to about **300 characters**, and everything gathered across all five channels is capped at roughly **1,400 characters**. It is a small extract, not a channel archive.
- **We do not send the author of any message.** What goes to the AI provider is the message text and the channel's name; we never look up or attach a username, display name, or Discord user ID, and messages posted by bots are skipped. As with Message Report, an identifier can still appear if someone **typed it into the message itself** (for example a mention written inside a pinned rule) — we do not strip that.
- **It would reach every SAi surface**, including a question asked in-game through the Minecraft bridge's `@sai`.
- **It goes to the same AI provider that already answers your SAi questions** — see *Third-party AI providers* below.

Be clear about what this would and would not change. It **expands what is sent** to an AI provider when someone asks SAi a question: on a server that turns it on, current channel text would be transmitted that previously was not. It does **not** change what we **keep** — nothing read from those channels is retained.

---

## Cross-Server Threat Network (ThreatNet)

Server Assistant operates a **Cross-Server Threat Network**, branded **ThreatNet**, a shared safety signal that helps every protected server recognise users who have a serious, corroborated history of abuse (scams, raids, ban-evasion) on *other* protected servers, ideally **before** they cause harm on yours. This is a **core, defining feature** of Server Assistant, not an add-on, and it is described here in full. ("ThreatNet" and "the Threat Network" refer to the same thing throughout.)

<!-- LEGAL REVIEW (SEVERITY-ONLY DESIGN — RESIDUAL LOW/MEDIUM): This section pools the MINIMUM necessary personal information (a pseudonymous Discord user ID + counts/recency + a generic severity level + a fingerprint-match boolean + an account-age modifier) across servers. SERVERS get NO opt-out (core functionality); INDIVIDUALS get a QUALIFIED opt-out from profiling (via the self-service web-portal toggle — LIVE as of v5.8.0; /support is NOT an opt-out route) with a safety exception — compelling legitimate grounds (GDPR Art. 21(1) + safety/fraud) let the most serious corroborated signals be retained/shared despite an opt-out so bad actors can't evade detection. Plus access/correction/deletion via /support. Assessed APP-by-APP under the Australian Privacy Act 1988 (primary) and as a GDPR legitimate-interest basis (secondary, EU/UK). DESIGN CHANGE (locked 2026-06-21): the offence TYPE/CATEGORY no longer crosses servers (only a severity level does) and AI/free-text offence summaries are LOCAL-ONLY. On that design the cross-server dataset is assessed NON-sensitive under the Privacy Act (not a criminal-record per s6(1)) and very unlikely to be GDPR Art. 10 criminal-offence data, so APP 3.2 (reasonably necessary, non-sensitive, NO consent required) + APP 5 notice + APP 6 limits carry collection; EU/UK rests on legitimate interest per the LIA, NOT server-owner consent. R1 re-rated CRITICAL → LOW/MEDIUM in .omp/RISK-REGISTER.md on the strength of the design. Residual: keep the severity band genuinely generic (no offence label leaking in) and keep the EU/UK Art. 10 boundary under review. Internal assessment: .omp/threat-network-PIA-LIA.md §A2/§A-RISK/§B3; register: .omp/RISK-REGISTER.md R1. -->

### What this means for our role

For ordinary moderation records, the server owner is the controller and we act as a processor on their instructions (see *Who is responsible* above). The Threat Network is different. Because we **pool minimized signals from many servers** to build a shared, cross-server picture of a user's risk, **Wandering Webmaster is the data controller** of that cross-server safety dataset. We take on the controller's obligations for it, including the legal basis, retention limits, and data-subject rights described below.

### What data is shared across servers

Every protected server **contributes** minimized abuse signals to the network and is, in turn, **protected by** it. The network is **severity-only**: only a small, **minimized aggregate plus a single severity level** ever crosses the boundary between servers. Specifically, the network may hold, per Discord user:

- **A pseudonymous Discord user ID**: the identifier needed to match signals to the right person. This is the **minimum necessary personal information**; it is pseudonymous, not anonymous, but it is never accompanied by a name, message, or any free-text content.
- **Bans / kicks:** a count of how many *distinct* protected servers have actioned the user, and how recently, never which servers, never the reasons
- **A severity level** (e.g. *minor* / *serious*) summarising how serious the corroborated activity is, **never the offence type or category**. No "scam", "financial", or any other offence label crosses servers; only the severity level does.
- **Repeat-offender fingerprint match (AltGuard): not used, and no longer sent at all.** The network's schema has a field for a **yes/no** indicator that a user matched a known-offender fingerprint, and earlier versions of this policy listed it among the signals we share. Nothing ever set it: the Bot never sent it as true, so no such indicator has been shared about anyone. Since **v6.112.0** the Bot does not send the field at all, and the stored column keeps the zero it has always held. We corrected this rather than leave the policy claiming we share more than we do. The underlying fingerprint detail never crosses servers in any case (see *Alt-guard fingerprints* above)
- **Account-age / join-velocity modifier:** a risk modifier derived from data Discord already exposes

What **never** crosses the boundary:

- The **offence type or category** of any action, only a severity level travels, never a "scam/financial"-style label
- Raw moderation reasons or any free-text a staff member wrote
- **AI-generated offence summaries**, these are **local-only** and never leave the originating server (see below)
- **Which specific server** took an action (originating servers stay confidential)
- Message content of any kind
- The **scam image itself**, only an irreversible perceptual fingerprint travels, never the image, a thumbnail, a copy, or any text read from it
- Any name, username, avatar, or other Discord account identifier beyond the user ID needed to match signals

A server's local moderation record keeps its full detail for that server's own staff (governed by the rest of this policy); only the minimized, severity-only signals above feed the network. The **local** score (this server only) and the **network** score (everywhere else) are always shown as **separate bands** and are never silently combined.

**AI summaries are local-only.** Where an AI feature generates a short summary of an offence for your staff, that summary stays on the originating server and is shown only to that server's staff. **It never crosses into the network.** No free-text about an individual, AI-generated or human-written, ever crosses the server boundary; the network is aggregate and severity-only by design. This is data minimisation built into the architecture, not a wording promise.

**Scam-image fingerprints.** Separately from the per-user signals above, the network also holds a list of **perceptual fingerprints of known scam images**, short, **irreversible** hashes of screenshots that have been flagged as scams (for example, the fake "withdrawal received" or investment-profit images scammers post to defraud members). For each fingerprint the network keeps only:

- the **irreversible perceptual hash** itself, a short fingerprint from which the original image **cannot be reconstructed or viewed**;
- a **severity level** (advisory, or auto-remove) and whether the fingerprint was curated by us or reported by servers in the network;
- counts of how many distinct servers have reported it and how often it has been blocked.

Crucially, a scam-image fingerprint is **not linked to any Discord user**, it describes the *image*, not the person who posted it. The image itself, any text inside it, and any thumbnail or copy **never** leave the originating server; only the irreversible fingerprint is shared. When the bot removes a known scam image and actions whoever posted it, that enforcement produces an **ordinary severity signal** about the poster on exactly the same terms as any other moderation action (above), but the shared *fingerprint* carries no user identity, and is matched against the *image*, not the person.

### What we do NOT collect, keep, or share in the network

To be unambiguous, here is what the Cross-Server Threat Network **never** does. The network does **not**:

- **Share message or DM content** of any kind across servers, not your members' messages, not their direct messages.
- **Share cross-server free-text**: no staff-written moderation reasons and **no AI-generated offence summaries** ever cross the boundary (AI summaries are local-only).
- **Share the offence type or category** across servers, no "scam", "financial", or any other offence label travels; only a generic severity level does.
- **Share names or Discord profile data**: no username, display name, avatar, banner, or any other Discord account identifier crosses, beyond the **pseudonymous user ID** needed to match signals to the right person.
- **Share scam images themselves**: for the scam-image fingerprints described above, only an **irreversible perceptual hash** crosses; never the image, a thumbnail, a copy, or any text read from it, and the fingerprint is **not linked to any user**.
- **Reveal which server acted**: originating servers stay confidential across the network.
- **Sell your data, or use it for advertising or profiling for ads**: the network exists for safety only; we never sell data or share it with advertising or analytics networks.

### Why we do this (legal basis)

We operate the Threat Network for one purpose: **platform and community safety**, preventing fraud, scams, raids, and ban-evasion across the servers we protect. How that purpose is justified depends on which law applies to you.

**Under Australian law (our primary framework).** Australia's Privacy Act does not have a "legitimate interest" basis like the GDPR's. Instead, we assess the network against the **Australian Privacy Principles** directly:

- We collect this information because it is **reasonably necessary** for the network's safety function (**APP 3.2**). Because the cross-server signals are **not sensitive information** (see below), we do not need consent to collect them.
- This policy is your **collection notice** (**APP 5**): it tells you what we collect, why, and how to access, correct, or complain.
- We use and disclose the signals **only** for that safety purpose, a security purpose closely related to the moderation context in which they arise, and never for marketing, profiling for advertising, or any unrelated use (**APP 6**).
- We keep the data secure and destroy it when it is no longer needed (APP 11), and let you access and correct your record (APP 12 and APP 13).

The safeguards in this section, strict severity-only minimization, the qualified individual opt-out and rights-request route below, advisory-only use, anti-abuse corroboration, and a hard 12-month retention cap, are what keep this handling proportionate.

**How we give you notice.** Providing notice of the network is **our** responsibility, not something we push onto server owners. This published Privacy Policy is your standing notice now. In addition, the Bot delivers an **in-Discord notice when it is installed in a server**, and an **on-demand command that surfaces this disclosure on request is on our roadmap** (planned, not yet live). Server owners are welcome to tell their members that the server takes part, and we encourage it as good practice, but it is **not their obligation**; the duty to give notice rests with us as the operator.

**Under the EU/UK GDPR (where it applies to you).** Our legal basis is **legitimate interest** (Article 6(1)(f)), the interest of Wandering Webmaster, every protected server, and their communities in safety and anti-abuse, backed by a written **Legitimate Interest Assessment (LIA)** weighing that interest against the rights and freedoms of the individuals whose signals are pooled. This legitimate-interest basis is **our own**, assessed and documented by us; it does **not** rest on a server owner "consenting" on their members' behalf. Server-owner notice to members is good practice and helps transparency, but the lawful basis for the cross-server processing is the legitimate interest set out in the LIA.

**On sensitive information.** We have deliberately designed the network so that the cross-server data is **not** a "criminal record" or other **sensitive information** under the Australian Privacy Act, and is **very unlikely** to be **criminal-offence data** under GDPR Article 10. The reason is structural, not just careful wording: the **offence type or category never crosses servers** (only a generic severity level does), and **AI-generated and human-written offence summaries are local-only**. What travels is a pseudonymous user ID, counts, recency, a severity level, and an account-age modifier, none of which describes *what* a person allegedly did. For EU/UK users we keep a brief, honest residual note: the boundary between a generic severity signal and criminal-offence data is one a regulator could still test, so we keep the design under review and minimise further if needed. <!-- LEGAL REVIEW (CALIBRATED DOWN — DESIGN CHANGE): offence type/category no longer crosses servers (severity-only band) and AI/free-text summaries are local-only, so the cross-server dataset is assessed as NON-sensitive under the Privacy Act and very unlikely to be GDPR Art. 10 data. R1 re-rated CRITICAL → LOW/MEDIUM in .omp/RISK-REGISTER.md on the strength of the DESIGN, not wording. AU basis is APP 3.2 (non-sensitive, no consent) + APP 5 notice + APP 6; EU/UK basis is legitimate interest per the LIA, NOT server-owner consent. Residual EU/UK note retained honestly. See .omp/threat-network-PIA-LIA.md §A2/§A-RISK/§B3 and .omp/RISK-REGISTER.md R1. -->

### Opt-out: servers vs individuals

There are two different questions here, and they have different answers.

**Servers cannot opt out.** The Threat Network is core, defining functionality; it only works when **every** protected server participates, so that a user banned for scams across six servers lights up on the seventh. So **there is no server-level opt-out, and participation is on by default for every server, across the fleet.** A server cannot use Server Assistant's protection while withholding its own contribution; contribution and protection are two sides of the same network. We disclose this plainly here and in our [Terms of Service]({{ site.url }}{{ site.baseurl }}/terms/) so that server owners understand it when they invite the Bot.

**Individuals can opt out of profiling, with one safety-based exception.** Although a server cannot opt out, **you, as an individual, can ask us to stop profiling you in the network.** This is a **qualified opt-out**:

- **How to opt out.** Sign in to the **web portal** at [serverassistant.wandweb.co](https://serverassistant.wandweb.co) and use the **Threat Network opt-out** toggle on your account page. You act **directly** with us; you do not have to go through any server owner, and the change takes effect immediately. A server's admins can also action an opt-out for one of their members on request. (For access to, correction of, or erasure of your record, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co).)
- **The safety exception.** Because the whole point of the network is to stop serious cross-server harm, we keep one narrow exception: where we have **compelling legitimate grounds**, preventing serious harm such as a **verified raid, scam, or ban-evasion**, the **most serious, corroborated signals about you may still be retained or shared despite your opt-out**. This stops a known bad actor from opting out simply to evade detection. Outside that exception, an opt-out is honoured. If we rely on the exception, we will **tell you** and document our reasons.

This balance maps onto the law: under the **GDPR** it is the **Article 21(1)** right to object to legitimate-interest processing, which we honour **unless we can demonstrate compelling legitimate grounds** (the safety/fraud need above); under the **Australian Privacy Act** we offer this opt-out as a voluntary measure above the statutory floor, alongside your **correction** right (APP 13) and our duty to **destroy data once it is no longer needed** (APP 11.2).

### Advisory by default, and optional Premium automated action

For every server, the network score is **advisory**; it does not ban, kick, or sanction anyone on its own. It surfaces a risk picture to a server's human staff, who decide what (if anything) to do. The score is **explainable** (it shows what drove it, e.g. "flagged in 6 networked servers, 2 bans, last 9 days ago") and **appealable** (see your rights below). Bands are tuned conservatively to favour false-negatives over false-positives.

**Premium servers may opt in to "ThreatNet auto-protect."** When a server administrator switches it on, the bot will **automatically ban a user as they join** that server **if** the account meets a **cross-server risk threshold the server chooses**. The default, and most conservative, setting is the **highest band** (serious *and* corroborated across **two or more independent** servers); an administrator may set a broader threshold, which acts on weaker signals. It is **off by default**, applies **only on the servers that choose to enable it** and **at the threshold they set**, and does **not** act on anyone who has **opted out** of network profiling, with one exception, which is the same safety exception described above. Where we are relying on **compelling legitimate grounds** to keep sharing the most serious, corroborated signals about someone despite their opt-out (a verified raid, scam, or ban-evasion case), those signals remain visible to the network, and an auto-protect ban can still follow. We would rather say that plainly than tell you an opt-out is an absolute shield when it is not. Outside that narrow exception, an opt-out stops auto-protect acting on you.

**Alt-guard can also ban automatically, and it is a different feature from the network.** Repeat-offender detection (*Alt-guard fingerprints* above) is local to one server and uses no network data at all, but it can reach the same outcome by another road: on a server that has run `/altguard on`, a joining account that resembles a previously banned member closely enough is **banned as it joins, with no staff member involved**. The Bot only does that when the match scores **70 or more out of 100** *and* rests on a **strong** signal, which in practice means the joining account is using the **same profile picture** as one that server banned or kicked, plus at least one supporting signal such as a very new account or a recent offence. A name resemblance on its own, however close, cannot reach that bar: it raises a staff alert and nothing more, as does any weaker match. Staff are alerted either way, including when the Bot has already acted, but that alert has to have somewhere to go: it is sent only if your server has a log channel or a staff chat configured. If your server has neither, no alert is sent to anyone, and an automatic ban can happen with nobody told. Note the difference from the **recording** described above: recording is unconditional, but **acting on a match is opt-in per server and off by default**, and the server that switches it on chooses the behaviour.

One further point, because the boundary here changed and the change matters. Alt-guard **reads** no network data, and since **v6.112.0** an alt-guard **automatic** ban no longer **feeds** it either. When the Bot bans a joiner on a fingerprint match with no staff member involved, that ban is suppressed at the point where bans become cross-server signals: the staff alert still fires, your server's own offender record still updates, and the ban-reason DM still goes out, but **no signal about it reaches the Cross-Server Threat Network**. The reason is that two servers auto-banning the same account off one reused profile picture were between them manufacturing the corroborated, high-severity record that a third server's auto-protect then acted on. Automated action was producing its own evidence, and the network could not tell it from staff judgement.

**A ban your staff decide on themselves still feeds the network**, in the same way and at the same severity as before. That includes a staff ban of someone the Bot had already auto-banned: the suppression is narrow and time-boxed, so a human decision made later is never silenced by it. The line we draw is **who made the decision**, not which feature the ban came from.

Before v6.112.0 this policy said an alt-guard automatic ban did contribute a signal, in the same way and at the same severity as a staff ban. That was accurate when it was written and it is not accurate now, and we would rather correct it plainly here than quietly restate the section.

Because either of those bans can be a **decision based solely on automated processing that significantly affects you**, we apply **GDPR Article 22** safeguards to both (and equivalent care for all users). We disclose the existence and general logic of this automated decision-making **here, in this Privacy Policy**. For a ThreatNet auto-protect ban that is the only disclosure there is, because the Bot does not message people it bans on the network's account; an **alt-guard** auto-ban instead goes out through the ordinary ban-reason DM, where the server has left that switched on, and the single appeal reply it invites reaches that server's staff. Either way we provide a standing route to **obtain human review, contest the decision, and request correction or erasure**, through the [web portal](https://serverassistant.wandweb.co) or `/support`. Anyone may use that route whether or not they were individually notified, and **a human reviews such requests**. We honour opt-out and erasure here on the same terms as elsewhere in this policy, subject only to the published compelling-grounds safety exception.

### Data minimization

Minimization is engineered into the network, not bolted on: only counts, recency, and a **severity level** ever leave a server. **No offence type or category**, no free-text, **no AI-generated summaries**, no message content, no originating-server identity, and no Discord account identifiers beyond the **pseudonymous user ID** needed to match signals to the right person. We share the **minimum necessary personal information**, that pseudonymous user ID plus aggregate counts and a severity level; never names, messages, or content. This protects both the individual and the operational confidentiality of the server that originally acted. The scam-image blocklist follows the same principle: only an **irreversible perceptual fingerprint** of a flagged scam image is shared, never the image, a thumbnail, a copy, or any text read from it, and the fingerprint is **not linked to any Discord user**.

### Retention

Network signals are retained on a **rolling 12-month window measured from the last signal** for that user. When 12 months pass with no new contributing signal, the user's network record is **hard-deleted**. A new signal restarts the window.

### Your rights in the Threat Network

If you are an individual whose data is in the network, you can exercise the rights below **directly** with us; you do not have to go through a server owner. **To opt out of profiling, use the self-service Threat Network opt-out toggle in the [web portal](https://serverassistant.wandweb.co)** (see *How to opt out* above). For access, correction, deletion, or any question, contact us via the [`/support`]({{ site.url }}{{ site.baseurl }}/support/) slash command or [wandweb.co](https://wandweb.co).

**What you can always do (these are your rights, everywhere):**

- **Access (APP 12 / GDPR Art. 15).** Ask what network record we hold about you. Because the record is minimized to counts, recency, and a severity level, we can show you the drivers (for example, "flagged in 6 networked servers, 2 bans, last 9 days ago").
- **Correction (APP 13 / GDPR Art. 16).** If a signal about you is **wrong, out of date, or misleading**, for example a bad-faith ban, ask us to correct or remove it. We will take reasonable steps to fix it. This is the main route by which an unfair flag gets put right.

**Opt-out / deletion / objection.** You may **opt out of network profiling**, and **request deletion of, or object to, the processing of, your network record**. Australian privacy law does not give a general "right to erasure" or "right to object" the way the GDPR does, but we go beyond the legal floor and offer this opt-out and deletion path to everyone as a matter of good practice, and we are independently required to **destroy your record once it is no longer needed** (and in any case at the 12-month retention cap below). We handle each request **individually**:

- We will **honour** the request (opt you out, delete, or stop processing your network record), **unless**
- we have **compelling legitimate grounds**, a **clear, corroborated safety or fraud-prevention need** (a verified raid, scam, or ban-evasion), to retain the **most serious** signals, so that a known bad actor cannot opt out to evade detection. In that case we will **tell you and document why**. Outside that narrow exception, your opt-out is honoured.

**How to opt out:** use the self-service **Threat Network opt-out** toggle in the [web portal](https://serverassistant.wandweb.co). It takes effect immediately, and you come directly to us, no server owner involved.

**If you are in the EU or UK**, this same route services your GDPR **right to object** to legitimate-interest processing (Article 21) and your **right to erasure** (Article 17): we stop, opt you out, or erase **unless we can demonstrate compelling legitimate grounds** under **Article 21(1)** (the corroborated safety/fraud need above). <!-- LEGAL REVIEW (RESOLVED — DRAFTING): Re-based onto APP 12 (access) + APP 13 (correction) + APP 11.2 destruction-when-no-longer-needed as the AU framing (no standalone AU erasure/objection right), with the voluntary case-by-case deletion offered above the statutory floor; GDPR Art. 21/17 layered for EU/UK. The only residual is operational, not drafting: the "compelling/corroborated grounds" standard must be applied consistently and refusals documented when an opt-out / erasure request is actioned — tracked in .omp/threat-network-PIA-LIA.md Part C and .omp/RISK-REGISTER.md. -->

### Contribution vs visibility

To be clear about what each server *sees* versus what it *contributes*:

- **Every** protected server (free, standard, or Premium) **contributes** signals to and is **protected by** the network.
- The **rich dossier view**, the detailed per-user breakdown of network drivers, is a **Premium** feature. Free and standard servers receive only a **basic network band** (a low/elevated/high indicator) rather than the full breakdown.

Participation in the network itself does not depend on plan tier; only the depth of what staff can *view* does.

---

## XP, leveling & the public leaderboard

Server Assistant includes an **XP and leveling** system. Members earn **XP** ("experience points") simply by taking part; every message adds a small amount, and members climb through **levels** as it accumulates. This is an **always-on, mainline feature**: it is part of every plan, runs automatically for every server, and there is **no opt-in or opt-out** for XP tracking itself. (The only related control is a staff toggle for whether *level-up announcements* are posted in the channel; it does not change whether XP is counted.)

### What we collect and derive

For each member, to run XP and leveling we process:

- **Message-activity signal:** the fact that a member posted, a count of how many messages they have sent in a server, and a message's **length** (used to weight a small length bonus). We do **not** store the **content** of those messages for this feature, only the activity counts and the derived XP. A short-lived, in-memory check prevents the same message being counted twice and caps how much XP can be earned in any 60-second burst; that anti-spam window is not retained.
- **XP balance (the "XP wallet"):** a member's **account-wide** XP total. XP is tied to the **member, not to a single server**; chat activity across every server they share with the Bot, plus voting rewards (below), add up into **one account-wide balance** held centrally.
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

We process XP and leveling data to provide the leveling feature itself, ranking, the leaderboard, level-up progress, and to power the Crestbound game economy in the portal. Under the Australian Privacy Act, this collection is reasonably necessary for the feature a server has enabled (APP 3) and is used only for that purpose (APP 6). For members in the EU and UK, we rely on our **legitimate interests** (Article 6(1)(f) GDPR) in providing the community-engagement feature the server chose to install.

**Retention.** XP, level, message counts, reputation and the account-wide XP wallet are retained for as long as the member's account-wide wallet is in use, that is, until the data is deleted on request. There is no automatic expiry for XP data. You may contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) to request access to, or deletion of, the XP data we hold about you.

## Minecraft account linking (opt-in)

If you play on a Minecraft server running our Minecraft ↔ Discord bridge, you can **optionally link your Discord and Minecraft accounts**. This is **strictly opt-in**: nothing links automatically. You start it yourself, by running `/link` in Discord and then typing `!link <code>` in Minecraft chat, and only then do we connect your two accounts.

**Lawful basis.** We rely on your **consent** (GDPR Article 6(1)(a); Australian Privacy Principles 3 and 6). Linking is entirely your choice, and no accounts are ever connected unless you take both of those steps yourself.

**What we store.** **Only** the connection between your **Discord user ID** and your **Minecraft account UUID**. We do **not** store your Minecraft username. (This applies to the account-link mapping itself. Separately, if you submit a Minecraft ban/kick appeal, that moderation record includes your player name and the appeal you write — see **Support tickets & appeals**.)

**Why we store it.** So that:

- your in-game playtime can be credited as **XP** to your (account-wide) XP wallet; and
- if your server operator turns it on, your **Discord roles and in-game ranks** can be kept in step, a **two-way sync** (on first run it seeds from Minecraft → Discord).

**It is never sold or shared**, and it is **separate from the ThreatNet threat-intelligence network** described above.

**You stay in control.** Run `/unlink` at any time to delete the connection. We also automatically remove a link that has gone **unused for about 12 months** (data minimisation).

## Minecraft chat and other in-game text

This section is about **what players write in the game**, which is a separate matter from account linking above. Linking is opt-in and rests on your consent; this is not, so we set it out on its own.

If your Minecraft server runs our Minecraft ↔ Discord bridge, in-game **chat** is relayed into a Discord channel (and Discord chat back into the game) so the two sides read as one conversation. **Relayed chat is passed through to deliver the message and is not stored as chat.** Your player name is carried across so staff can see who said what.

**Chat is not the only place a player writes, so it is not the only place we check.** Someone who wants their words in front of other players without passing a chat filter can put them on a **sign**, in a **book**, on a **mob name tag**, in an **item name** (an anvil rename), or in a **`/me` emote**; they can aim them at one person with **`/msg`**; or they can simply **join under a name** that says it for them. Your AutoMod filter covers all eight of those, on the same single switch.

There is a **ninth** place a player can type, and it works differently, so we set it out rather than fold it into the list. On a Premium server that has enabled it, a player can summon the **in-world SAi companion** and ask it a question **privately**: the answer goes back to that one player and is not echoed to Discord. That ask is **not** run through your word filter, so it is not one of the AutoMod surfaces above. It **is** covered by the always-on safeguard described next, and if that safeguard fires the ask leaves the same records any other flag leaves.

**Checked is not the same as bridged, and most of this is only checked.** Chat is the only thing the bridge mirrors into your Discord channel. A sign is not conversation, and echoing every sign a player places into Discord would be noise nobody asked for — so signs, books, item names, name tags, emotes and private messages are **never posted to the Discord channel at all**. What happens on a match is that the matched words are **masked in-game**, so other players do not see them, and a **staff alert** is raised — carrying the world position, for the surfaces that have one, so staff can find the sign rather than hunt for it. A **username** is the one surface that is flagged but never rewritten: a name is an identity that the game server, Discord, and your permissions plugin all key off, and quietly changing it in one place would help nobody, so staff are told and staff decide.

**Your AutoMod applies to all of it.** There is one switch, not two, and not eight: when AutoMod is on, in-game text is checked against the same **word list and lexicon**, the built-in **scams pack**, and the **known-bad-domain link blocklist** as your Discord messages, including the same anti-evasion check for disguised slurs. This check is **deterministic pattern-matching — no AI provider is involved** at any point, on any surface. (One safeguard runs even with AutoMod off, and it is the one that covers all **nine** surfaces including the private companion ask: a line that asks the Bot to grant or raise someone's permissions, roles, or ranks is flagged to staff. The Bot never makes such a change on request; it takes no action and reports it.)

**Where the checking happens, and one consequence worth knowing.** All of it — chat, the public surfaces, and private messages alike — is **sent to us to be checked**, because the filter is your Discord server's AutoMod and that is where it runs. It is passed through to be delivered and checked, and is not kept as a record of what was written.

**Masking and flagging do not use the same filter, and that is visible to players.** *Flagging* happens here, against your full AutoMod — packs, custom filters, the community lexicon, the scams pack, the link blocklist. *Masking* happens in the game, by the plugin, which only holds part of that: your enabled word packs, your custom filters, the disguised-slur check, and your blocked-link list. The large **community profanity lexicon is too big to ship to a game server and is not sent to one**. The practical consequence, stated plainly because it is user-visible: a word that only the community lexicon knows about will be **reported to staff but will not have been masked** — the person it was aimed at saw it in full. Masking is a best effort; the staff alert is the reliable part.

**What a flagged piece of in-game text leaves behind.** This is the same whichever surface it came from: a chat line, a sign, a book, an item name, a name tag, an emote, a username, a private message, or a private ask to the in-world companion (which arrives here through the permission safeguard rather than your word filter). A match raises an alert to that server's staff, and leaves exactly two records:

- the **moderation-actions log** entry records the player's name, their Minecraft UUID, and which rule matched — and **no part of the text itself** (auto-deleted after 180 days); while
- the **staff decision record** that puts the alert in front of a moderator holds up to about **500 characters** of what was written, with the player name, UUID, and channel, so a human can see what they are deciding about. It is deleted 90 days after that decision is closed (see *Staff decision records* above).

The Bot does not itself punish the player for a filter match; it flags it for humans, unless the operator has separately enabled in-game enforcement. **None of this feeds the Cross-Server Threat Network** — an in-game flag creates no network signal, on any surface.

### Private in-game messages (`/msg`, `/tell`, `/w`)

This is the most intrusive processing described anywhere in this policy, and we would rather say so plainly than dress it up. A private message between two players is exactly what it sounds like: something the sender chose **not** to say in public. Checking it against a filter is a real intrusion on that, and no amount of good intention makes it not one.

We do it for one reason: **bullying and harassment**. Minecraft servers have a well-earned reputation for it, a great many of the people playing on them are children or teenagers, and private messaging is exactly where harassment goes the moment public chat is moderated. Filtering chat and leaving `/msg` alone does not protect the person being targeted — it relocates the abuse somewhere they face it on their own, with nobody else in the conversation to see it happen. That is the interest being pursued, and it is the only one. This is not a general appetite to know what players say to each other.

**So be clear about the scope: every private message is transmitted and checked, not just the bad ones.** On a server running the bridge with relaying on, a `/msg` between two players is sent to us and run through that server's filter — all of them, not a suspicious subset. There is no way to know whether a message contains harassment without looking at it, and the filter that can tell is the one on our side, because it holds the community lexicon that a game server is never given. We considered doing the check on the operator's own machine and rejected it: the plugin only holds part of the filter, so a local gate would have silently dropped exactly the harassment the lexicon exists to catch. That decision buys real protection and it costs real privacy, and we are not going to present it as costless.

**What we do not do is read them.** A private message is checked **by software, with no human eyes on it**. If it matches nothing, **no person ever reads it — not the server's staff, not us, not anyone.** Only when the filter finds evidence of abuse does a human being see anything, and then only in order to act: protecting the player being targeted, and dealing with whoever is doing it. Evidence is looked at to act on it, not browsed. **The content is not used for anything else** — not analytics, not training, not profiling, not product improvement, not building a picture of any player, and not for any purpose beyond the moderation of the server it was sent on.

These are the limits, and they are properties of how the system is built rather than promises about our conduct:

- **No human reads a message that does not match.** The check is automated from end to end. Nothing surfaces to a person, in Discord or in our portal, unless the filter matched.
- **It is held briefly, then gone.** A private message sits in the queue we check it from and is **automatically deleted from it within about a day** (sooner if the server unlinks its bridge, which clears the queue immediately). If it matched nothing, that is the end of it: **no durable record of it is created anywhere** — it is not written into the moderation log, not into a decision record, not into any archive.
- **No AI is involved** — not on any plan, not as a fallback, not at all. The check is deterministic pattern-matching. Nothing a player writes privately is sent to Anthropic, Groq, OpenAI, or any other provider named in this policy, and it is never sent to any other third party.
- **A match leaves the same two records any other flag leaves, and nothing more**: the moderation-actions log entry (player, UUID, which rule matched, **no part of the message**, deleted after 180 days), and the staff decision record that puts it in front of a moderator (up to about **500 characters** of what was written, deleted 90 days after that decision is closed). Both are visible only to that server's own staff.
- **The alert usually names who it was aimed at**, because a moderator handling harassment needs to know who is on the receiving end. Not always: where the recipient cannot be identified with confidence, the alert carries no recipient rather than a guessed one.
- **No profile is built, and no Cross-Server Threat Network signal is created** — exactly as with every other in-game flag.
- **It follows the server's word filter.** There is no separate control — and, to be equally plain about the other side of that, no setting that filters public chat while leaving private messages unchecked.

**Why our reasoning about public chat does not carry over here.** Further down this page we set out why we would allow AI review of a flagged chat message, and that assessment leans hard on the message being **public** — something the player posted in a shared channel they knew was moderated. That premise is simply absent for a private message, so the argument cannot be borrowed. It has to be made again, from scratch.

**The balancing test for private messages.** On one side is the protection of the player being harassed. Someone sent slurs, threats, sexual harassment, or a scam link in private has the same claim to protection as someone sent them in public — and a weaker position, because there are no witnesses and, on a game server whose players are often young, often no realistic prospect of them reporting it themselves. A moderation system that stops at the edge of public chat protects the server's appearance rather than its players.

On the other side is a real and reasonable expectation of privacy in a message deliberately sent privately, held by a player who, in the ordinary case, gains nothing at all from the check. It is done entirely for someone else's benefit, and we are not going to pretend otherwise.

What we weigh against that is not that the intrusion is small — it is that it is **narrow, automated, and short-lived**. A clean message is read by a pattern-matcher and by nothing and nobody else, is held for about a day, and then is gone with no record of it having existed. No human reads it. It is not sent to any third party, not run past an AI provider, not used for any purpose other than that server's moderation, and never built into a profile of the player — cross-server or otherwise. Where a message **does** match, what follows is equally narrow: that one message is shown to that server's own staff, the same people already moderating the server the player is on, so they can protect the person on the receiving end and deal with the person sending it. Nothing wider, and nothing else.

**And this is a heavier intrusion than the alternative we rejected, which we should say rather than leave for someone to discover.** A design that checked messages on the operator's own machine and sent us only the matches would have meant a clean private message never left the server it was typed on. That would have been better for privacy. We did not choose it, because the filter that actually catches harassment cannot run there. So the true position is this: **every private message on a bridged server passes through our systems, briefly, unread by any person**, and the protection that buys is the whole of the justification we are offering for it.

We are not going to claim that settles it. A player who thinks a private message should be private full stop is making a reasonable point, and is disagreeing with a real decision rather than misunderstanding one. The honest answer is that we have judged the protection of the person on the other end to outweigh it, on a game server whose operator has moderation switched on — not that the tension goes away.

**Your right to object.** This rests on **legitimate interest** (GDPR Article 6(1)(f)); under the Australian Privacy Act it is collection **reasonably necessary** for the moderation function the server operator has enabled (**APP 3**), used only for that purpose (**APP 6**). It is **not consent**: the party who switched moderation on is the **server operator**, not the player whose message is checked, and an operator cannot consent on a player's behalf. Because it is legitimate interest, you have the right to **object** under **GDPR Article 21**, and to ask what we hold about you, have it corrected, or have it deleted. Come to us directly through [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co) — you do not have to go through the server operator.

**On notice.** Every player joining a server where this filtering is running is told, in game, that **private messages are checked for abuse**. That notice is **mandatory**: the server's operator cannot switch it off, reword it, or remove the clause. It is the one disclosure on this page that does not depend on somebody else's configuration, and we made it that way deliberately — see *The one place notice is not weak* further down.

**In-game `@sai`** (Premium, off by default) sends the question a player types after `@sai` to an AI provider, together with the **server-information text the operator has written** for it (a block of up to 2,000 characters covering that server's rules, ranks, shops, or events). An operator can also nominate **one** web page — usually their own server's site — whose extracted text is sent along with it; we read only that address, re-read it about once a day, honour `robots.txt`, and keep only the extracted text. No player name, Minecraft UUID, or account identifier is sent with it.

**Chat translation** (off by default, switched on by the operator setting a target language in `/mcdc`) passes bridged chat through an AI translation model in both directions. No account identifiers are sent.

**AI review of flagged in-game chat is not live today.** Our AutoMod AI second-opinion currently applies to Discord messages only. If we extend it to bridged chat, it will send the **single flagged message and the name of the filter it matched** to an AI provider for a confidence score — and **never** the player name, the Minecraft UUID, or any account identifier. It would stay **Premium, opt-in, and off by default**, on the same `/automod → AI Review` switch. Because that would process the message content of people who may have no relationship with us at all, we have written the assessment below **before** enabling it.

### Why we would allow AI review of in-game chat (legitimate interest)

Our lawful basis for this processing is **legitimate interest** (GDPR Article 6(1)(f)). Under the Australian Privacy Act it is collection **reasonably necessary** for the moderation function the server operator has enabled (**APP 3**), used only for that purpose (**APP 6**). It is **not consent**: the person who switches AI review on is the **server operator**, not the player whose message is checked, and an operator cannot give consent on a player's behalf. As with the Threat Network, this legitimate-interest basis is **our own**, assessed and documented by us.

**The interest pursued.** Keeping a live game server free of scams, phishing links, harassment and slurs — the interest of the server operator, of the other players in that chat, and our own in running a moderation product that works. This is the same purpose the operator already pursues with the deterministic filter; the AI step only changes how accurately a match is judged.

**Why the processing is necessary.** A word list cannot tell a slur from a discussion of one, a scam link from a link to a wiki, or an insult from a joke between friends. Pattern-matching alone therefore produces false positives, and on a game server a false positive means a player wrongly reported to staff. Sending the flagged message for a second opinion is what allows a match to be judged in context. There is no less intrusive way to get that judgement: the assessment is about the meaning of the words, so the words are what must be assessed. We narrow it as far as the purpose allows — only messages that have already matched a filter are sent, never the general flow of chat, and never confident hits or clear misses.

**The balancing test.** This is the point in this policy where the individual is least connected to us, and we should say so plainly. The data subject may be **a Minecraft player who has never joined the server's Discord**, has never seen an install notice, has no account with us, and may not know Server Assistant exists. That is a weaker position than any other processing described here, and it is the reason this assessment exists.

Weighing against that: what is transmitted is **one message the player posted in a public, shared chat that was already being moderated**, stripped of every identifier — the provider receives words, not a person, and cannot attribute the message to anyone. Nothing new is retained as a result of the AI step; the verdict feeds the staff alert the filter match already produced, and the extract kept with that alert is the same one described above, on the same 90-day clock. No profile is built, no cross-server signal is created, and the outcome the player experiences is *more* accurate moderation rather than less. A player posting in a moderated public channel would reasonably expect the operator to be checking what is posted there; what they would not expect is to be identified to a third party, and they are not.

**Publicness is doing real work in that paragraph, so be clear about its limits.** Everything above turns on the message having been posted in a shared, already-moderated channel. That premise does not hold for a **private** message, and we do not stretch this assessment to cover one. Private in-game messages are assessed separately, on their own terms, under *Private in-game messages* above — and no AI provider is involved in that processing at all.

**We do not rely on the plugin's in-game join notice** to carry this. The plugin does show players a notice when they join, and we ask operators to keep it on — but **operators can customise its text**, so we cannot treat it as a dependable notice and we do not claim it as one. This published policy is our notice, and we accept that a player who never joins the Discord is unlikely to read it. **We treat that as a genuine residual weakness rather than an answered question**, and it is precisely why the payload is held to a single message with no identifiers: the safeguard has to do the work that notice cannot.

**The one place notice is not weak is the private-message filtering described above.** Unlike everything else on this page that depends on an operator's configuration, the in-game notice telling players that private messages are checked for abuse is **mandatory and cannot be removed**. It is not a setting: an operator cannot switch it off, cannot reword it, and cannot edit it down to drop the clause, because it is not drawn from their configuration at all. It sends to every player on join, on every server where the filtering is actually running — the one condition on it being honesty, since announcing a check that is not happening would be its own kind of wrong.

We made it non-removable for the reason this whole passage is about. This processing has **no opt-in moment** — no dialog, no prompt, nothing a player ever agrees to; it rides an always-on word filter — and the players it affects most are the least likely ever to read a privacy policy on a website. That in-game line is the only notice that actually reaches them. Being the only notice that reaches them is precisely why it could not be left as something an operator can turn off, which is what it was until we separated it from the operator's own bridge notice.

The separate **bridge** notice — "chat here goes to Discord" — remains the operator's, to word as they like or switch off, because how their server is wired up is theirs to explain. The privacy line is ours, and it always sends.


**Safeguards.** Taken together, these are what keep the processing proportionate:

- **Opt-in and off by default**, per server, behind the Premium tier — it never switches itself on.
- **A single message**, only once it has already matched a filter. Confident hits and clear misses are never sent.
- **No identifiers.** No player name, no Minecraft UUID, no Discord user ID reaches the provider.
- **No new retention.** The AI step adds no record of its own, and providers are barred by their API terms from training on what we send.
- **No Threat Network crossover.** Nothing written in the game, flagged or otherwise, becomes a cross-server signal.
- **Human decision.** The verdict informs a staff alert; a person decides what to do.

**Your right to object.** Because this rests on legitimate interest, you may **object** to it under **GDPR Article 21**, and ask what we hold, have it corrected, or have it deleted, through [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co) — you can come to us directly, without going through the server operator.

## Crest artwork & attribution

**Crestbound** Crest artwork is **crowdsourced and shared**. The first member to reveal a particular Crest's art triggers its one-time generation by a third-party image generator (**Pollinations**, [pollinations.ai](https://pollinations.ai)); the resulting image is then **stored by us and shown to every player, permanently**. The image prompt is generated automatically from the Crest's name and type, **no personal data is sent** to the image generator.

The member who first reveals a Crest's art is **credited publicly by their Discord display name** on that Crest ("discovered DD-MM-YY by …"), visible to anyone who views it. To provide this we store the Crest's id, your Discord user ID and display name, and the generated image. We rely on the same **legitimate-interest** basis as the XP feature above (providing the community-engagement feature the server installed); for members in Australia this is collection reasonably necessary for that feature (APP 3) used only for that purpose (APP 6).

**One-time opt-out (irreversible).** From the customer portal you may opt out of art attribution. This is a **one-time, permanent** action: all of your existing art credits are **removed**, the Crests you discovered are **re-illustrated by the next member who reveals them**, and any future discoveries are recorded **without your name**. It cannot be undone. Art-attribution data is otherwise retained while the credited art exists.

---

## Third-party AI providers

AI features transmit data to third-party providers **only when explicitly invoked by staff or when an enabled, opt-in feature fires** (e.g., right-click Message Report, `/imagine`, Self-trained AutoMod, SAi, or, if you've turned it on, AutoMod AI second-opinion or Minecraft bridge translation). The default shared-key providers are:

- **Anthropic** (https://anthropic.com), powers SAi, Message Report context summaries, Self-trained AutoMod, and (if enabled) AutoMod AI second-opinion, Minecraft bridge translation and in-game `@sai`. Approximately 20 messages of surrounding context are sent for Message Report; an SAi session sends your typed question and, as the conversation needs them, your server's settings, a summary of recent moderation events, your AI usage totals, and any staff decisions awaiting action (which can include the text of a ban appeal); only the **single borderline message** + matching filter name is sent for AutoMod AI second-opinion (never confident hits, never clear misses); in-game `@sai` sends the player's question together with the operator's server-information text (up to 2,000 characters) and, where the operator has switched on the optional **Website** feature, the text we extracted from the single web page they nominated. Other than SAi, no Discord user IDs or account identifiers are transmitted (a member's display name may appear within the message context that is sent); an SAi session also identifies the server and the staff member asking, by server ID and display name.
- **OpenAI** (https://openai.com), when AutoMod AI second-opinion is enabled, borderline **word-filter** hits are scored by OpenAI's dedicated, free content-moderation endpoint (`omni-moderation-latest`) so they don't spend your AI allowance. Only the **single borderline message** is sent; no Discord user IDs or account identifiers.
- **Groq** (https://groq.com), serves two roles: (1) the **standard AI provider for free-tier servers that have used up their included Claude (Anthropic) trial**, their AI features (SAi, Message Report context summaries, Self-trained AutoMod, and Minecraft bridge translation where enabled) run on Groq's free model thereafter; and (2) a fast **backup** that keeps those AI features working for other servers when the primary (Anthropic) service is temporarily unavailable, plus the fallback scorer for the AutoMod word-filter check above. Only the minimal content already described is sent (for the word-filter check, just the **single borderline message**); no Discord user IDs or account identifiers. **The bar on training applies to free use as well as paid.** Our use of Groq is governed by their Services Agreement, which excludes what we send from model training and applies on the same terms whether a given request is billed or free — so a free-tier server is not on a weaker footing than a paying one. That agreement carves out models Groq designates as "preview", and the free path deliberately runs on a generally-available model rather than a preview one. Groq's own terms, linked in the table below, are the authoritative statement of what they do with data; we describe them here for clarity but we don't control them, and if they change we will update this page.
- **OpenRouter** (https://openrouter.ai), a further **fallback AI inference provider** used only when the Groq path above is itself unavailable or exhausted, so core AI features keep working. It receives the same minimal content already described for those features; no Discord user IDs or account identifiers.

**Minecraft servers running our bridge.** Two bridge features send in-game content to the AI providers above, on whichever provider serves that server's tier. **Chat translation** (off by default; a server operator turns it on by setting a target language in `/mcdc`) passes bridged chat through the translation model in both directions — in-game lines on their way to Discord, and Discord messages on their way in-game. **In-game `@sai`** (Premium, off by default) sends the question a player types after `@sai`, together with the **server-information text the operator has written** for it — a block of up to 2,000 characters covering that server's rules, ranks, shops or events. Neither sends Discord or Minecraft account identifiers.

**Reading your server's website** (Premium, off by default, part of in-game `@sai`). An operator can nominate **one** web page — typically their own server's homepage or rules page — for `@sai` to answer from. When they do, we fetch that page from our servers roughly **once a day** (and immediately if they press *Refresh now*), extract its readable text, and include that text in what we send to the AI provider when a player asks a question. Three limits are worth stating plainly: we read **only** the address the operator gave us and never a link a player types into a question; we honour the site's `robots.txt`; and we refuse addresses that look like forums, wikis, comment threads, boards or user profiles, because a page strangers can write to could be used to influence what `@sai` tells players. We keep **only the extracted text**, never a copy of the page itself. It is overwritten on each re-read and deleted as soon as the operator turns the feature off, changes the address, or removes the bot. If the nominated page is public, its text is not personal data; operators should not point the feature at a page containing personal information they would not want sent to an AI provider. We don't store the chat or the AI's reply beyond delivering it. AutoMod's scanning of bridged chat involves **no AI provider at all**, and AI review of flagged in-game chat is **not live today**; both are set out under *Minecraft chat and other in-game text* above.

If you play on such a server, **this can apply to you whether or not you have ever joined its Discord server**. Ask your server operator whether translation or `@sai` is enabled, and see **Minecraft chat and other in-game text** and **Minecraft account linking** above for what is and is not stored.

If you've configured your own key via `/ai-config`:
- **Anthropic** (https://anthropic.com), same scope as the default Anthropic processing above, when you supply your own Anthropic key
- **xAI Grok** (https://x.ai), same scope as above when selected
- **OpenAI** (https://openai.com), same scope as above when selected

For `/imagine` (image generation): only your text prompt is sent to the image provider, **Pollinations** (the default), **Stability AI**, or **OpenAI** if selected. No user IDs or metadata.

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
| **Anthropic** | Default AI features (SAi, Message Report, etc.); also available with your own key (BYOK) | [anthropic.com](https://www.anthropic.com/legal/privacy) |
| **OpenAI** | AutoMod word-filter moderation second-opinion (our shared key); other AI features only if you supply your own key (BYOK) | [openai.com](https://openai.com/policies/privacy-policy) |
| **Groq** | Standard AI provider for free-tier servers past their Claude trial; fast backup when Anthropic is unavailable; fallback scorer for the AutoMod word-filter second-opinion | [groq.com](https://groq.com/privacy-policy/) |
| **OpenRouter** | Fallback AI inference provider when the Groq path is unavailable or exhausted | [openrouter.ai](https://openrouter.ai/privacy) |
| **xAI** | AI features, only if you supply your own key (BYOK) | [x.ai](https://x.ai/legal/privacy-policy) |
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
| Alt-guard fingerprints (repeat-offender detection) | **No time limit.** Capped at **200 per server**, with the oldest pushed out first; a fingerprint is deleted when that member is **unbanned**, and the whole store goes when the Bot is removed from the server |
| Moderation-actions log (actions taken in your server) | Rolling window (180 days), then auto-deleted |
| Staff decision records (the extract of the Discord message, appeal, or in-game text a decision is about — in-game text meaning chat, a sign, a book, an item name, a mob name tag, a `/me` emote, a username, a private message, or a private ask to the in-world companion) | Deleted **90 days after the decision is closed**. A decision still awaiting a moderator stays open, and is kept until it is closed |
| Audit log | The most recent **500 entries**; each new entry pushes out the oldest. No time limit, a count |
| Scheduled tasks | Deleted when fired or cancelled |
| AI token ledger (per-call log) | Auto-deleted after **90 days**, and on request before that |
| AI token ledger (per-server running totals) | Retained for billing while the server uses AI features; deleted on request |
| Support tickets and appeals (`/support`) | A **resolved** ticket, and any reply draft written with it, is deleted **180 days** after its last activity. A ticket that is still **open** is not deleted at any age |
| Stripe subscription reference | Retained while subscription is active; deleted on request after cancellation |
| Web-portal session (staff sign-in) | Expires automatically; deleted immediately on sign-out |
| Push notification subscription | Until the staff member disables notifications, signs out, or the Bot is removed |
| Server-insight counts (online / voice / member time-series) | Rolling window (~90 days) |
| Bot message log (messages the Bot sends) | Rolling window (~60 days), then auto-deleted |
| Community feature poll votes (Discord user ID + which option) | Deleted **180 days** after the poll closes. Votes on a poll that is still open are not deleted at any age |
| Cross-Server Threat Network signals | Rolling 12 months from the **last** signal, then hard-deleted |
| XP, level, message counts, reputation & account-wide XP wallet | Retained while the member's account-wide wallet is in use, until deleted on request; no automatic expiry |
| In-game text in transit (the queue in-game text is checked from, including private messages) | Automatically deleted within about **24 hours**; cleared immediately if the server unlinks its bridge. Text that matched nothing leaves no other record |
| Minecraft account-link mapping (Discord ID ↔ MC UUID) | Until you `/unlink` or leave; auto-removed after ~12 months unused (data minimisation) |
| Minecraft ban/kick appeal (UUID + player name + your appeal text + ban context) | Kept with the related moderation record; deleted on request |
| Channel text SAi reads to answer a question (the nominated-channel capability described above, not live today) | **Nothing retained.** Read at question time and held in memory only (a short-lived cache of about 90 seconds, lost on restart), then discarded; never written to our database or to disk |
| Text extracted from the one web page an operator nominates for in-game `@sai` | Only the current extract is kept, overwritten on each re-read (about daily). Deleted immediately when the operator turns the feature off, changes the address, or removes the Bot. The page itself is never stored |

---

## Your rights

**Server owners** can:
1. Remove the Bot from their server; this wipes encrypted credentials immediately
2. Contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) to request deletion of warnings, notes, audit log entries, and ledger data for their guild

**Portal staff** can **sign out** at any time from the portal's Settings; this deletes their session immediately and unsubscribes push notifications on that device.

**Individual members** wishing to have personal moderation records erased should contact their server owner first. If unresponsive, contact us directly via `/support`.

**Cross-Server Threat Network:** because we are the controller (Australian: APP entity) of the cross-server safety dataset, not a per-server processor, an individual can come **directly** to us, without going through any server owner. **Opt out of profiling** via the self-service toggle in the [web portal](https://serverassistant.wandweb.co); **access** your network record (APP 12), **correct** it (APP 13), or **request deletion of** it via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). We handle these requests individually and will honour them unless we have a **clear, corroborated safety or fraud-prevention need** (for EU/UK users, **compelling legitimate grounds** under GDPR **Article 21(1)**) to retain the **most serious** signals, in which case we explain our reasons. See **Cross-Server Threat Network → Opt-out: servers vs individuals** and **→ Your rights in the Threat Network** above for the full mechanism.

### Australian Privacy Act 1988 / Australian Privacy Principles (primary)

We are based in Queensland, Australia and treat the **Privacy Act 1988 (Cth)** and the **13 Australian Privacy Principles (APPs)** as our primary framework. Under the APPs you can:

- **Be informed** about how we handle your personal information (APP 1, APP 5), this policy is that notice.
- **Access** the personal information we hold about you (**APP 12**), including your Cross-Server Threat Network record.
- **Correct** personal information that is inaccurate, out of date, incomplete, or misleading (**APP 13**).
- Rely on our obligations to collect only what is **reasonably necessary** (APP 3), use and disclose it only for the purpose we collected it or a closely related purpose you'd reasonably expect (APP 6), keep it **secure** (APP 11), and **destroy or de-identify** it once it is no longer needed (APP 11.2).

Australian privacy law does **not** include a general "right to erasure" or standalone "right to object" of the kind the GDPR provides. Where you want a record removed, the routes above (correction under APP 13, and our destruction-when-no-longer-needed obligation) apply, and for the Threat Network we additionally offer a **voluntary, case-by-case deletion path** that goes beyond what the APPs strictly require (see *Cross-Server Threat Network → Your rights in the Threat Network*).

To exercise any of these, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). If you are not satisfied with our response, you can complain to the **Office of the Australian Information Commissioner (OAIC)** at [oaic.gov.au](https://www.oaic.gov.au/), see *Complaints* below.

### GDPR (EEA / UK)

If you're in the European Economic Area or the UK, the GDPR also applies to our processing of your personal data, and you have the right to **access, correct, delete, restrict, or object to** that processing, and the right to **data portability**. Our legal bases for processing are: **performance of the service** (running the features a server has enabled), our **legitimate interests** (security, anti-abuse, service integrity, and the **Cross-Server Threat Network** described above, platform and community safety, supported by a written Legitimate Interest Assessment), and **consent**, where **you personally give it** — for example opt-in **Minecraft account linking**, which you start yourself with `/link`.

For the **opt-in AI features**, our basis is **legitimate interest** (and performance of the service), **not consent**. The distinction matters, so we state it plainly: the party who switches those features on is the **server owner or their staff**, not the member or player whose message is then processed. A server owner cannot give consent on someone else's behalf, and calling it consent would claim an agreement the data subject never gave. As with the Threat Network, this legitimate-interest basis is **our own**, assessed and documented by us — and, exactly as with the Threat Network, it carries your **right to object** under Article 21. Where we rely on legitimate interest, including for the Threat Network, you have the right to **object** under Article 21 and to seek **erasure** under Article 17; for the Threat Network specifically, you can **opt out of profiling** and exercise these rights via the route described in *Cross-Server Threat Network → Opt-out: servers vs individuals*. We honour an objection/opt-out unless we can demonstrate **compelling legitimate grounds** under **Article 21(1)** (a corroborated safety/fraud need) to retain the most serious signals. To exercise any of these rights, contact us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co). You also have the right to lodge a complaint with your local data-protection **supervisory authority** (in the EU, your national Data Protection Authority; in the UK, the **Information Commissioner's Office (ICO)** at [ico.org.uk](https://ico.org.uk/)).

### CCPA (California)

We **do not sell or share** personal information (as those terms are defined under the CCPA), and never have. California residents may request to know what personal information we hold and to have it deleted, using the same channels above. We will **not discriminate** against you for exercising these rights.

---

## Data security

- **All stored data is encrypted at rest** on an encrypted (LUKS/AES) volume
- Credentials are additionally encrypted at the application layer (AES-128), with the encryption master key stored separately and restricted to file-owner access only
- All communications use HTTPS/TLS
- The web portal and its supporting API are the only public endpoints; they sit behind TLS and require authentication (Discord OAuth for staff), and every action is permission-checked server-side against the staff member's Discord role. The Bot otherwise communicates only over Discord's gateway connection
- Stripe handles payment card data under PCI-DSS compliance; we never see raw card numbers

---

## Privileged Gateway Intents

Discord gates three "privileged" gateway intents behind review. Server Assistant requests all three, each for a specific, minimal purpose, and requests no privileged data it does not use:

- **Message Content**: read to run **AutoMod and anti-raid**, **scam-image detection**, and the staff-invoked AI assists (**Message Report**, **SAi**, optional **AutoMod AI second-opinion**, and opt-in **Self-trained AutoMod**). Message content is **not stored** except in the limited, truncated cases set out under *What the Bot stores* and *What the Bot does NOT store*, and is **never used to train or fine-tune any AI model**; the AI assists send only the minimum necessary context to our AI providers for **real-time inference**, and those providers' API terms prohibit them from using what we send to train or fine-tune any model. This holds on the **free-model path too**: the agreement governing our use of Groq applies on the same terms whether the usage is free or paid, and bars training either way — the protection does not depend on us being a paying customer.
- **Server Members**: used for **join-time safety** (anti-raid, repeat-offender/AltGuard screening, new-joiner verification, and opt-in ThreatNet auto-protect), the **XP / leveling** system, and mapping your Discord **roles to the Bot's permission tiers** (Moderator / Admin / Owner). These need the member gateway events and member list because they must act the moment a member joins or a role changes.
- **Presence**: read **live only** to show an **aggregate** activity count (for example "42 online · 6 in voice") in **Pulse** and the web dashboard. We **never store which member is online** and never profile an individual's presence; only the running totals are kept, as the aggregate time-series described under *Live server insights*. (Live voice state is read on the same aggregate-only basis, a count of how many members are in voice, never which member is in which channel.)

We request the Presence and Server Members data for no purpose beyond those above, and retain only what *What the Bot stores* and *Data retention* describe.

---

## Discord platform compliance

Server Assistant is a Discord application and operates under Discord's developer agreements. The table below maps the obligations in each Discord policy to where this Privacy Policy meets them.

| Discord policy | The obligation | How Server Assistant complies |
|---|---|---|
| [Discord Developer Terms of Service](https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service) | Use "Platform Data" (the data obtained through Discord's API) only to operate your application; don't retain it longer than necessary; delete it on user request and when access ends | We store only the Platform Data needed to run the features a server has enabled (*What the Bot stores*), use it solely to provide those features, cap how long every category is kept (*Data retention*), and delete it on request or when the Bot is removed (*Your rights*). |
| [Discord Developer Policy](https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy), *publish a privacy policy* | Provide and follow a public privacy policy describing what you access, collect, store, share, and how users can request deletion | This document is public, linked from the Bot via `/support`, and describes exactly that. |
| Discord Developer Policy, *data minimization* | Only collect and use the data you genuinely need | We list precisely what we store **and** keep an explicit *What the Bot does NOT store* section; features are opt-in and read only what they need (*What each feature reads*). |
| Discord Developer Policy, *keep data secure* | Protect the data you hold with appropriate security | Encryption at rest (AES-128), restricted key access, TLS in transit, and authenticated, permission-checked endpoints (*Data security*). |
| Discord Developer Policy, *don't sell data; no ads or profiling* | Don't sell user data, share it with ad/analytics networks, or build profiles of users | We never sell or share data with advertising or analytics networks. Repeat-offender detection (Alt-guard) keeps its fingerprints **local to the server that made them**: the fingerprint never leaves your host, is never pooled with another server's, and is never used to build a picture of anyone across servers. **No indicator derived from those fingerprints crosses servers either**: the Cross-Server Threat Network's schema has a yes/no "match seen" field, holding none of the fingerprint's contents, but the Bot has never sent it as true and since **v6.112.0** does not send it at all. That network is a safety measure described in full above, not profiling for advertising, and it is never used for ads or marketing. |
| [Message Content Intent Review Policy](https://support-dev.discord.com/hc/en-us/articles/5324827539479-Message-Content-Intent-Review-Policy) | Message content is a privileged intent; use it only for the limited, declared purposes and don't retain more than needed | Message content is read only for moderation (AutoMod / anti-raid) and the opt-in features you switch on; it is not stored except in the limited, truncated cases disclosed, and only the minimum context is ever sent to an AI provider (*What each feature reads*, *Third-party AI providers*). |
| [Discord Terms of Service](https://discord.com/terms) & [Community Guidelines](https://discord.com/guidelines) | Respect Discord's users and platform rules; no spam or unsolicited contact | The Bot messages members only for moderation or operational reasons (e.g. a ban-reason DM or a setup reminder to the person who added it), honours per-server opt-outs, and never sends unsolicited or bulk promotional DMs to members. |
| [Discord Privacy Policy](https://discord.com/privacy) | Governs the identity data Discord provides during OAuth sign-in | At web-portal sign-in we request only `identify`, `guilds`, and `guilds.members.read`, discard the access token, and keep only the derived access level (*Web portal sign-in*). |
| Discord minimum-age requirement (13+) | Don't knowingly process data of users under Discord's minimum age | We don't knowingly collect data from anyone under 13 and delete it if found (*Children's privacy*). |

If you believe any part of the Bot's behaviour is inconsistent with these policies, please tell us via [`/support`]({{ site.url }}{{ site.baseurl }}/support/); we take platform compliance seriously and will correct it.

---

## Children's privacy

The Bot doesn't knowingly collect data from anyone under 13 (Discord's minimum age). If you become aware of a child's data in the system, contact us via `/support` and we'll delete it.

---

## Changes to this policy

Material changes will be announced via the Bot's release notes and posted in the staff-chat of each configured guild. The "Last updated" date above reflects the most recent revision.

---

## Complaints

If you have a privacy concern, please raise it with us first via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) or [wandweb.co](https://wandweb.co); we take it seriously and will try to resolve it.

If you are not satisfied with our response, you can complain to the relevant regulator for where you are:
- **Australia:** the **Office of the Australian Information Commissioner (OAIC)**, [oaic.gov.au](https://www.oaic.gov.au/) (our primary regulator).
- **United Kingdom:** the **Information Commissioner's Office (ICO)**, [ico.org.uk](https://ico.org.uk/).
- **EU / EEA:** your national **Data Protection Authority** (supervisory authority).

---

## Contact

[`/support`]({{ site.url }}{{ site.baseurl }}/support/) from any server with the Bot installed, or visit [wandweb.co](https://wandweb.co).
