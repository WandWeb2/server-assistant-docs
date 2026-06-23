---
layout: default
title: Server Assistant Changelog
permalink: /changelog/
description: Release history for Server Assistant — v5.x line.
---

# 📋 Server Assistant Changelog — v5.x

The current release line.

What's new in Server Assistant. Internal-only updates (CI, dependency bumps, host-side tooling) aren't listed here. **Tap a release to expand it.**

<style>
.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: .5rem 0; background: rgba(255,255,255,0.04); }
.doc-sec > summary { cursor: pointer; font-size: 1.02rem; font-weight: 700; padding: .65rem .85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] { padding: 0 .9rem .6rem; }
.doc-sec[open] > summary { margin: 0 -.9rem .35rem; }
.doc-sec code { color: var(--accent); }
.doc-sec h3 { font-size: 1rem; margin: .7rem 0 .3rem; }
.changelog-nav { display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: baseline; margin: 1.6rem 0 0.4rem; padding-top: 0.85rem; border-top: 1px solid var(--glass-border); font-size: 0.8rem; opacity: 0.7; }
.changelog-nav strong { font-size: 0.68rem; font-weight: 600; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.05em; }
.changelog-nav a { color: var(--ink-soft); text-decoration: none; border-bottom: 1px dotted var(--ink-soft); padding-bottom: 1px; transition: color 0.15s, border-color 0.15s; }
.changelog-nav a:hover { color: var(--accent); border-bottom-color: var(--accent); text-decoration: none; }
.changelog-nav a.current { color: var(--ink); border-bottom-style: solid; }
.changelog-nav .latest-tag { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.7; margin-left: 0.25rem; }
/* "Tempered" — named quality release; tempered-glass styling, set apart from numbered cards */
.doc-sec.tempered { background: linear-gradient(135deg, rgba(96,165,250,0.17), rgba(124,155,255,0.07) 55%, rgba(20,25,39,0.45)); border: 1px solid rgba(96,165,250,0.45); box-shadow: inset 0 0 0 1px rgba(158,197,255,0.10), 0 10px 34px rgba(20,40,90,0.40); }
.doc-sec.tempered > summary { color: #cfe0ff; font-size: 1.08rem; }
.doc-sec.tempered > summary::before { color: #60a5fa; }
.doc-sec.tempered .tg-badge { display: inline-block; font-size: .6rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #0a1030; background: linear-gradient(135deg, #bcd6ff, #60a5fa); padding: .1rem .45rem; border-radius: 999px; margin-left: .55rem; vertical-align: middle; }
</style>

<details class="doc-sec" markdown="1" open>
<summary>📖 New — the Server Assistant Wiki: every feature &amp; command, with live examples</summary>


**There's now a full wiki for Server Assistant** — a complete, browsable reference that shows a live mock-up of exactly what you'll see in Discord for every command, wizard and flow.

- **Main features** — a guided tour of what the bot does, with deep-dive pages for Pulse, ban appeals, the audit log, alt / ban-evasion detection and ThreatNet.
- **Every command** — grouped by area (moderation, AutoMod, AI, tickets, member experience, account &amp; premium), each shown the way it appears in Discord.
- **Step-through wizards** — walk the `/setup` wizard and other multi-step flows one screen at a time.
- **Search** — find any command or feature in seconds.

Open it from **Main Features** in the top menu, or jump straight in at [the wiki]({{ '/wiki/' | relative_url }}). Setup and the full command reference now live there too.
</details>

<details class="doc-sec" markdown="1">
<summary>v5.9.0 — ThreatNet auto-protect (Premium): close the gate on join</summary>


**Premium servers can now have ThreatNet ban the worst actors automatically — as they join, before they act.**

Turn on **auto-protect** and a user who joins meeting a **cross-server risk threshold you choose** is **banned automatically on join**. The default — and safest — level is the **highest band** (serious *and* corroborated across **2+ independent** servers); you can set a broader level if you want a wider net (it acts on weaker signals, with more chance of a mistake).

It's **off by default** and **opt-in per server** — an admin enables it with `/threatnet autoban on` and picks the level. Because it's an **automated** action, it ships with safeguards: anyone who has **opted out** of network profiling is **never** auto-banned; **every auto-ban is in your audit log**; and although the ban is **silent** (the bot doesn't message the banned user), it's disclosed in our Privacy Policy and stays **appealable** via the web portal (human review). You choose the threshold and stay responsible for moderation in your own server.

Prefer advisory-only? Nothing changes unless you switch this on.


</details>

<details class="doc-sec tempered" markdown="1">
<summary>v5.8.0 — ThreatNet: cross-server safety, on by default<span class="tg-badge">ThreatNet</span></summary>


Server Assistant now protects every server with **ThreatNet**, our **Cross-Server Threat Network**. When someone with a serious, corroborated history of scams, raids or ban-evasion on *other* protected servers turns up on yours, your staff see an **advisory cross-server risk signal** on their profile — often **before** any harm is done.

It's **severity-only** by design: never the offence type, your staff's reasons, message content, or which server acted — just a generic risk band, how many servers corroborate it, and recency. ThreatNet is a **core, on-by-default** safety feature for every server; **Premium** adds the richer cross-server view. You stay in control of your own data — **opt out of profiling anytime in the [web portal](https://serverassistant.wandweb.co)**, subject to a published safety exception.


</details>

<details class="doc-sec" markdown="1">
<summary>Portal sign-in reliability fix</summary>


Fixed an issue where signing in to the web dashboard could show **"Invalid or expired state. Try again"** — most often on mobile, or after refreshing or tapping back during sign-in — even though the sign-in had actually gone through. Signing in is now reliable: open the portal and you're straight in.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.50 — A full trial on our best AI, then AI that keeps working</summary>


Every free server now starts with a full trial on our **most capable AI**, then keeps core AI features running on our **fast free model** — so the AI never just stops. **Premium** servers stay on our most capable AI with a generous monthly allowance, and **BYOK** servers keep using your own key (now reserved for the AI that writes and replies, while routine moderation checks run on our free model at no cost to you). Tap `/premium` any time to keep everything flowing without limits.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.49 — Friendlier responses to mistyped commands</summary>


When a command can't find the user or role you named — a typo, or someone who has already left — Server Assistant now replies with a clear, friendly note instead of a confusing error. You can also `/ban`, `/softban`, and `/tempban` someone who has already left the server by passing their ID or mention.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.48 — AI that keeps working on every plan</summary>


AI features now run on a **fast, free model by default for every server**, so they keep working without burning through an allowance. **Premium servers automatically use our most capable model** (Claude) for the highest-quality results, and **BYOK** servers keep using your own key. Same features everywhere — Premium just turns the quality up.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.47 — Sharper AutoMod AI review</summary>


When AutoMod's optional **AI second-opinion** is switched on, borderline word-filter catches are now scored **for free, without using any of your AI allowance** — same careful false-positive handling, at no cost to your AI budget. Nothing else changes; the feature stays Premium and opt-in. (Our privacy policy has been updated to note the providers used for this check.)


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.46 — A broader AutoMod word filter + custom brand icons</summary>


**Optional community profanity lexicon.** AutoMod has a new opt-in filter pack that adds thousands of profanity and slur words drawn from well-maintained public word lists, refreshed automatically every day. It matches **whole words only**, so ordinary words that merely contain a flagged fragment — the classic "Scunthorpe" problem — are never caught. Turn it on under `/automod → Filter Packs`; nothing changes until you enable it, and borderline catches still go through the Premium AI second-opinion like other word filters.

**Custom brand icons.** Premium servers can now upload a brand icon straight to `/brand` (the new **icon** option) — PNG/JPG/GIF/WebP up to 12 MB — instead of hunting for a public image URL. We host it so it never expires, and it becomes your white-label embed icon right away. Pasting a URL still works too.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.40 — AI features keep working during maintenance</summary>


While our main AI is being upgraded, the AI-powered features on the shared plan — **`/faq`**, **Translate**, and **Message Report** — now switch to a fast temporary backup model instead of pausing, so they keep working. Replies from the backup carry a small note so you know it's temporary, and Server Assistant switches back to the main model automatically once it's restored. Your AI allowance and feature limits are unchanged.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.38 — Asking the bot to post a message now reliably sends it</summary>


When you told the bot in plain language to post something — e.g. "say hello in the lounge" — it could acknowledge the request without the message actually going out, or post its own paraphrase instead of your words, sometimes in the wrong channel. The bot now sends exactly what you asked, finds the channel by name (#lounge, "lounge", or "the lounge channel" all work), and tells you if it can't find the channel or has nothing to send.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.36 — Stability & reliability</summary>


A quick behind-the-scenes maintenance update — small reliability fixes to keep Server Assistant responsive and dependable. Nothing to do on your end.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.35 — Polls: a last-chance nudge + a live countdown</summary>


Small touches so your community never misses a vote.

### Added

- **⏳ A live countdown on community votes.** A vote now shows a **live countdown** to close ("closes in 2 days, 4 hours") instead of a fixed date — so at a glance everyone knows how long is left.
- **📣 A "last chance to vote" nudge.** Shortly before a vote closes, Server Assistant posts a gentle last-chance reminder. It **replies to the original poll** so the link is right there — and if that message has scrolled far away or was deleted, it **reposts the poll and carries every existing vote across**, so nobody loses their say and no one can vote twice.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.34 — Upload a custom brand icon</summary>


### Added

- **🖼️ Upload a custom brand icon in `/brand`.** Premium servers can now attach an image file directly to `/brand` (the new **icon** option) instead of hunting for a public image URL — PNG/JPG/GIF/WebP up to 12 MB. The image is hosted on our side so it never expires, and immediately becomes your white-label embed icon. Pasting a URL still works too.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.33 — Native-action notifications, your call</summary>


### Added

- **🔕 Turn off "done directly in Discord" notices.** When staff moderate directly in Discord (a native ban/kick/timeout), the bot posts a heads-up in your log channel with a tip for the team. Some servers love it, some find it noisy — so it's now a toggle in **`/settings → 🔔 Notifications`**. On by default; flip it off any time. (Your private, tamper-proof audit log still records every native action regardless.)


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.32 — Achievements, expanded</summary>


### Added

- **🏆 A bigger trophy case.** Server Assistant now tracks far more for your community to earn — new tiered ranks for **Guardian** (AutoMod catches), **Bastion** (raids stopped), **Word of Mouth** (servers that joined through your invite link) and **Patron** (months on Premium), plus a set of one-off **Unique Achievements** (Early Adopter, Setup Complete, First Branding, Loyal Companion, First Catch, Held the Line, Spotless, Trendsetter, Fully Loaded, Welcoming Committee and Phoenix). Each is a hand-designed emblem; everything you'd already earned was unlocked for you automatically — quietly, with no wall of notifications. See it all in your portal's trophy case.
- **📈 Rising & Buzzing stats** in your portal — members gained in the last 30 days, and your peak activity in the period.

### Changed

- _Achievements got a glow-up:_ the emblems are now tiered hex rank-badges (bronze → silver → gold → diamond), and your server's best in each category sits right in your portal header.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.31 — Share your server + milestone badges, in your portal</summary>


Two small touches that help you celebrate — and spread the word about — what you've built.

### Added

- **💛 Share Server Assistant, right from your portal.** Your server's web portal now has a **"Share Server Assistant"** card with your own personal invite link — hand it to a friend's server in one tap, and watch the running count of servers that joined through yours tick up.
- **🏅 Your milestone badges, in the portal.** The milestones your community has earned — member-count landmarks, anniversaries, moderation streaks — now show as **badges in your portal header**, so the wins you've hit are always in view.

**Privacy policy updated** — small clarifications to keep it matching exactly what the bot does. See the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.30 — Your updates, your cadence — Notifications hub + Milestones</summary>


One place for every way Server Assistant keeps you in the loop — set your own pace — plus a warm new way to celebrate your community's wins.

### Added

- **🔔 One place for all your updates — `/settings → Notifications`.** The various ways Server Assistant kept you posted are now a single hub, split in two:
  - **Updates & digests** — *your* choice of how often. Set **Pulse** to **Off / Daily / Weekly / Monthly**, and toggle **Milestones** and **Announcements** on or off.
  - **Instant alerts** — the live role-pings for raids, approvals and AutoMod escalations. Unchanged, because you can't put a live raid on a weekly digest.

  Your existing Pulse settings carry over automatically.
- **🎉 Milestones.** Server Assistant now celebrates your community's wins in staff chat — **member-count landmarks** (100, 500, 1k, 5k, 10k…), **server anniversaries**, and **moderation milestones** — framed as *your* achievement, with the occasional, never-pushy nudge to leave a review or recommend us. Capped to at most one a day, and fully toggleable in the Notifications hub.
- **🤝 Recommend Server Assistant — `/share`.** A quick way for your staff to hand the bot's install link to another server they help run. Free-tier servers only.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.29 — Setup tells you when a permission needs a nudge</summary>


When you run **`/setup`**, Server Assistant sets up channel and role permissions for you. If its own role sits too low in your server's role list to apply one of them, it used to finish quietly and leave that permission unset. Now it tells you.

- **A clear heads-up.** If a permission can't be applied because the **Server Assistant** role is below another role, the bot messages whoever ran `/setup` (and falls back to the owner) with exactly what to do: drag the **Server Assistant** role above the affected roles in **Server Settings → Roles**, then re-run `/setup`.
- **Nothing silently skipped.** Everything that *can* be configured still is — you just get told about the one or two bits that need a quick role re-order.

**Privacy policy updated** — we disclosed the image-generation providers used by `/imagine` (Pollinations, Stability AI) and clarified that messages you send us via a support ticket or ban appeal are stored. See the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).


</details>

<details class="doc-sec tempered" markdown="1">
<summary>✨ Tempered<span class="tg-badge">Quality release</span></summary>


A special **quality release** — no new features, just Server Assistant running **faster and smoother**, with a few rough edges smoothed out. Named **"Tempered"** — strengthened through refinement, like tempered glass — and set apart from the usual version line.

### Faster

- **The bot responds quicker.** Work that used to briefly stall the bot now runs out of the way, so commands and moderation stay snappy even under load.

### Clearer

- **`/help`** now lists `/settings` and `/premium`.
- The **`/onboarding`** setup no longer lets you tap an enable button that does nothing — it's clearly disabled until you've added a message.
- The upgrade prompt now points you straight to **`/premium`**.
- Docs corrected to match the bot exactly — e.g. **`/setup`** is open to the **owner _or_ any admin with Manage Server** (not just the owner).

### More polished

- A refreshed, more consistent visual style across our site.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.28 — Setup works when staff add the bot</summary>


A smoother first five minutes — especially when an admin, not the server owner, is the one who adds the bot.

### Changed

- **Whoever adds the bot can set it up.** Previously only the **server owner** could run `/setup`, so when an admin or staff member added Server Assistant they'd hit a wall and the owner got a setup prompt out of the blue. Now the bot recognises **who installed it** and walks **them** through setup, while giving the owner a friendly heads-up. `/setup` is open to the owner **or** any admin with **Manage Server** — the same permission Discord already requires to add a bot.
- **White-label, Server backup & restore, and Custom slash commands are now part of full Premium** (no longer on the cheaper Premium **BYOK** plan). The AI-powered premium features stay on BYOK, since your own API key powers them.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.27 — The premium toolkit</summary>


A big drop of **seven new Premium features** — most built around one-screen **wizards** so they're quick to set up — plus a tidier command list. Free-tier moderation is untouched.

### Added — Premium

- **🎭 Reaction roles.** Build self-service role panels from one **`/rolepanel`** wizard: pick roles from a dropdown, name the panel, post it. Members click a button to add or remove a role, and a **🎭 My roles** button opens a private menu showing a ✓ next to the roles they already have. The bot only ever offers roles it can actually assign.
- **⌨️ Custom slash commands.** Define your own real **`/command`** (text or embed) with the **`/customcmd`** wizard — e.g. `/rules`, `/faq`. Embed commands have an optional **🔄 Live** toggle: edit the embed once and **every copy already posted updates**, turning announcements into living documents.
- **❓ AI Q&A from your FAQ.** Members run **`/faq`** with a question and the bot answers **only** from your curated entries — when the FAQ doesn't cover something it says so and points them to staff, instead of inventing an answer. Staff curate from the `/faq` management wizard.
- **🌐 Translation.** Right-click any message → **Translate**, or use **`/translate`** — into your Discord language or one you name. On-demand, so no per-message cost or channel noise.
- **🤝 Mediator.** The **`/mediate`** wizard has the bot DM two members, collect each side privately, and post a **neutral summary** to staff — a chance to de-escalate *before* anyone reaches for a moderation action. It never takes sides or recommends punishment.
- **💾 Server backup & restore.** The **`/backup`** wizard snapshots your roles, categories, channels and their exact permission overwrites. **Restore** is owner-only, confirmation-gated, and strictly **additive — it recreates anything missing and reapplies overwrites, never deletes** — safe insurance after a nuke or a botched reorg.
- **🎨 White-label branding.** Rebrand the bot for your server from the **`/brand`** wizard: a per-server **nickname**, your **name + icon** on the bot's embeds, your **colour**, and your name in place of "Server Assistant" in footers. *(Discord allows only one global bot identity, so this rebrands the nickname and the bot's output — not the underlying account.)*

### Changed

- **📨 Ban appeals — "request more info".** Staff can now reopen a guided appeal with a follow-up question; the member's reply refreshes the neutral summary and returns a fresh ticket. Completes the guided-appeals flow.
- **Tidier command list.** Removed the redundant **`/image`** alias (use `/imagine` or `/img`) and the long-deprecated **`/concierge`** (use `/sai`), and folded **`/smartpurge`** into **`/purge`** as a **Smart** mode (`/purge … mode: Smart`). No capability lost.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.26 — Guided appeals & the decision explainer</summary>


Two premium upgrades that make moderation fairer for the people on the receiving end. *(Your free one-reply appeals and ban-reason DMs are unchanged.)*

### Added

- **🌟 "Why was I actioned?" (Premium).** When a member is **warned** or **muted**, the bot DMs them a short notice with a **❓ Why was I actioned?** button — one tap returns a calm, plain-language explanation drawn from the staff reason, so they understand what happened without a moderator having to spell it out. Members can also just DM the bot *"why was I actioned?"* to get the same for their most recent warning.
- **🌟 Guided multi-round appeals (Premium).** A ban appeal becomes a short **back-and-forth** instead of a single reply: the member shares their side, the bot may ask **one or two neutral follow-up questions** to draw out context, then hands your staff a **concise summary plus the full transcript** — on the appeal ticket *and* the portal "Needs input" card — so you judge with more than one line. You set the max rounds (default 3), and the bot never decides or promises an outcome.

Both are on by default for premium servers (toggle in **Settings → Protection**) and need AI enabled. Free servers keep the existing one-reply appeal + ban-reason DM exactly as-is.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.25 — The web portal grows up</summary>


Your portal at [serverassistant.wandweb.co](https://serverassistant.wandweb.co) went from a settings screen to a full command center. Run `/portal` to jump in.

### Added

- **A real Insights dashboard.** At-a-glance KPIs (members · 30-day mod actions · AI usage) that tap to expand with trend charts, a **member-growth chart**, **🟢 online / 🔊 in-voice** counts, and a **paginated activity log** (moderation, AutoMod, raids, config changes, tickets) with filters and real names. Plus your **🩺 Daily Pulse** and **📅 Weekly mod recap** surfaced right on the page.
- **Act from the web — and get notified.** Take moderation actions from the portal, and resolve staff decisions — **ban appeals, AutoMod reviews, owner-approvals, and raid lock-downs** — from a "⚡ Needs input" strip, all **kept in sync with the Discord card** (whoever acts first wins). **Install the portal as an app** on your phone or desktop and **turn on notifications** to get a push the moment something needs your input.
- **Finish setup from the web** for new servers, plus support tickets, billing, and your **SAi** assistant — all in one place.

### Changed

- The portal moved to its own home at **[serverassistant.wandweb.co](https://serverassistant.wandweb.co)** with a branded, installable, animated redesign.

### Privacy

- **Our [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) was updated (June 14, 2026)** to match the new web portal and live insights. It now describes: what we store when staff **sign in to the portal** (your Discord ID, username, and which servers/roles you manage) and how portal **push notifications** work; that we read **presence and voice state only to show aggregate counts** ("42 online · 6 in voice") — never which member, never which channel, only the running totals; and that the web portal and its API are the service's only public endpoints (behind TLS + Discord sign-in). Nothing changed about what the bot does inside Discord — this simply documents the data handling the portal introduced.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.17 — Your whole staff team can use the web portal</summary>


The web portal now fits everyone on your team, not just owners and admins.

### Added

- **Moderators can now sign in to the web portal** — and everyone gets exactly the access their role already grants, never more. The portal reads the **roles you configured in `/setup`**: owners get full control, admins get settings plus the full moderation toolkit, and moderators get the moderation actions their role allows (e.g. warn, timeout, kick, ban) with a read-only view of settings. Every action is also re-checked on the server, so the access is real, not just hidden buttons.

### Changed

- **Portal sign-in now reflects your role tiers.** Previously the portal only recognised the server owner and Discord admins; now it recognises your configured **Moderator** and **Admin** roles too. (You may be asked to approve one extra Discord permission the first time you sign in, so the portal can see which of your roles you hold.)


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.15 — Manage your server from the web</summary>


A new web portal lets owners and admins run their server from any browser.

### Added

- **New `/portal` command + web portal at [serverassistant.wandweb.co](https://serverassistant.wandweb.co).** Sign in with Discord and manage your server from your browser — adjust settings, take moderation actions, view insights and AI usage, handle support tickets, and chat with your AI assistant **SAi**. Run `/portal` for a private link straight to it. Only the server owner and admins can sign in, and each session is scoped to just the servers you manage.
- **Finish setup from the web.** Brand-new servers can be configured straight from the portal — pick your staff chat, log channel, admin and moderator roles, and whether to turn AI on, and the bot does the rest. You can still run `/setup` in Discord — whichever you prefer.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.8 — Mid-cycle servers get a vote</summary>


Joining partway through a community vote no longer means missing out.

### Added

- **Servers that join during an open community poll now get it automatically.** When you finish setup while a feature vote is running, the poll (and its live results card) is delivered straight to your staff chat — so newer servers still get a say in the round they joined during, not just the next one. Once a poll closes, nothing is sent.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.5 — Reliable "your channel is gone" alerts</summary>


If a channel Server Assistant relies on disappears, the right people now hear about it.

### Fixed

- **A deleted staff chat is reliably detected — and flagged to the right people.** If your configured staff chat is removed, the bot now notices promptly (even catching cases its daily self-check used to miss) and posts a heads-up in a visible channel that tags **both the owner and your admin roles** — not just the owner — so whoever can repoint it in `/settings` actually sees it. (Reminder: the bot never changes your channel settings on its own — it only flags what needs your attention.)


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.4 — Smarter staff-chat commands</summary>


Server Assistant listens more carefully, and butts in a lot less.

### Fixed

- **No more reacting to ordinary words in conversation.** A message that simply *started* with a word like "Stop" (or "Die", "Move", "Check", "Send", "Role", "Note", "Welcome"…) could be mistaken for a command — most noticeably, "Stop…" got a "that action isn't permitted" reply. Now those blocked/system words only ever respond when you actually address the bot, and everyday words that happen to be commands ("move", "remove", "create", "delete", "check", "send", "say", "role", "note", "report", "invite", "welcome", "setup"…) only count as a command when they include a real target (an `@mention`). Genuine shorthand like `warn @user 30m`, `ban @user`, `purge 50`, or `slowmode 10` works exactly as before — and you can always ask directly: `@Assistant send the rules to #general`.
- **Casual sentences aren't taken literally.** Phrases like "create a poll for movie night" or "send help lol" are now understood as conversation instead of triggering the matching action.
- **The "Post welcome to staff chat" button no longer errors out.** At the end of `/setup` it could occasionally fail with an "interaction expired" message; it now acknowledges instantly and posts reliably.
- **A deleted log channel no longer causes repeated errors.** If your log channel is removed, the bot notices and stops trying to post there (set a new one via `/setup` or `/settings`) instead of erroring on every action.
- **More complete moderation logging.** Fixed an internal hiccup that could skip some audit-log entries (e.g. certain native timeouts), so they now appear consistently.

### Changed

- **Roadmap poll links land on the right feature.** The live vote re-orders cards as results come in, which could previously scroll a poll link to the wrong card; links now reliably scroll to, expand, and highlight the exact feature you tapped.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.3 — Community feature polls</summary>


Your voice now decides what gets built next.

### Added

- **Feature polls land right in your staff chat.** Vote on what Server Assistant should build next with a one-tap Discord poll — change your mind any time, and votes update live. A companion card shows how the whole community is leaning (not just your server) and links each option to its card on the public roadmap, so you know exactly what you're voting for. Every staff member in every server gets an equal say, and the results directly set the build order. Polls follow the same opt-out as Dev Updates (`/settings → Behaviour`).
- **Results announced when a vote closes.** When a poll ends, your server gets the outcome — the top picks confirmed for the next release with their vote share, plus a heads-up that the next round opens once that release ships.

### Changed

- **Polls reach every server.** Like service notices, feature polls now go to everyone so no one misses the chance to vote — even servers without a staff chat configured get them in a sensible channel.
- **Clearer ties on the roadmap.** The public roadmap now explains how ties are handled, and when features tie for the final slot it invites you to vote rather than promoting one arbitrarily — your vote breaks the tie.

### Fixed

- **Reliable installs.** An invite link we'd shared in a few places was missing a permission Server Assistant needs to configure itself, which left some servers with a half-finished setup. It's corrected everywhere now — and as a safety net, if the bot is ever added without a permission it needs, it immediately **DMs the server owner a one-click re-invite link** to fix it, so setup can finish in about a minute.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.2 — Feedback command & dev-update prompts</summary>


A friendlier front door for sharing ideas — plus a nudge so you never forget it's there.

### Added

- **`/feedback` is now an alias for `/support`.** They open the exact same ticket — text and screenshots welcome, with two-way replies via DM — but `/feedback` is there for when you want to share an idea or suggestion rather than report a problem. Reach for whichever word fits.
- **Dev updates now point you to it.** When a release note lands in your staff chat, it now carries a short prompt reminding you that you can run `/feedback` or `/support` to send ideas, bug reports, or questions straight to the dev. Urgent service notices stay short and stick to the point.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.1 — Permission health check</summary>


Server Assistant now keeps an eye on its own permissions so a stray server change can't quietly break your moderation.

### Added

- **Daily permission health check.** Once a day the bot confirms it still has the permissions and channels it needs to moderate — manage roles, post in your log channel, read your staff chat. If an admin edits the bot's role or a channel and something drifts, the bot **DMs the owner** (or posts a quiet staff-chat note) the moment it notices, with exactly what broke and how to fix it. No more silent failures — and no spam, since it only speaks up when something's actually wrong.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.6.0 — Templates, smart purge, weekly retros & more</summary>


The biggest feature drop in the v5.x line: a setup that fits your kind of community, two new moderation tools, a weekly team recap, and a clearer way to see what's changed.

### Set up in your server's flavor

- **`/setup` now asks what kind of community you run** — Gaming, Creator/Streamer, Anime/Fandom, Crypto/Trading, Education/Study, NSFW/18+, or General — and tunes AutoMod, the punishment ladder, and anti-raid to fit. It even pre-guesses from your server's name, so most servers just confirm. Re-running setup never overwrites moderation you've already tuned.

### Two new ways to moderate

- **`/smartpurge` — cleanup that thinks.** Instead of nuking the last N messages, it has the AI flag only the genuinely problematic ones (spam, scams, raids, slurs), shows you a **preview**, and removes *only* those once you confirm. Constructive messages stay, pinned messages are never touched, and everything removed is archived to your log channel so you can review or restore.
- **`/retro` — a weekly mod-team recap.** Cases handled, the week-over-week trend, most-active staff, and a short AI "notable patterns" summary — posted to your staff chat. Built from **aggregate counts only** (no message content). Opt-in via `/settings → Behaviour`.

### Quality of life

- **`/whatsnew`** — see recent releases at a glance right in Discord, with anything new since you last looked flagged for you.
- **Co-owner roles** — `/settings → Role Tiers → Add co-owner` grants a Discord role full owner-tier power, for servers with more than one owner.
- **`/image` and `/img`** now work as aliases for `/imagine`.
- **More reliable image generation.** `/imagine` is sturdier and clearer when the service is busy. The free trial covers **~30 AI images**; **Premium is unlimited**. Add your own image key anytime via `/ai-config` for unmetered generation.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.15 — Invite-link permission fix</summary>


If you added Server Assistant recently and it couldn't finish `/setup` — stopping to say it was missing a permission — here's why: the invite link was handing the bot an **incomplete set of permissions**. It's fixed.

### What changed
- **The invite link now grants the bot the full set of permissions it needs up front** (managing roles, channels, and messages), so `/setup` works on the first try.
- **Already added the bot and got stuck?** Just re-invite it from the button on this site (or run `/invite`), then run `/setup` again — it'll go through this time.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.14 — Gentler setup reminders</summary>


If you add Server Assistant but don't finish `/setup` right away, the bot sends a short reminder so your server doesn't sit half-protected. This release makes those reminders **finite and considerate**.

### What's different

- **A capped reminder sequence instead of an open-ended one.** You'll get a friendly nudge at roughly **day 2, day 7, and day 14** after adding the bot — and then it stops. No more reminders after that.
- **The last one says it's the last one** — *"run `/setup` whenever you're ready, or remove me if you don't need me, no hard feelings."* If a server genuinely isn't going to use the bot, it won't keep getting pinged.
- **Reminders are spaced out**, never bunched up — even if the bot has been sitting in a server a while.

### What didn't change

- Reminders still go to the **server owner's DMs first**, falling back to the server's system channel if DMs are closed.
- **Once you've run `/setup`, reminders stop immediately** — configured servers are never nudged.
- This only affects servers that haven't completed setup; it changes nothing about how the bot moderates.

</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.13 — A rebuilt `/setup`, from first join to finish</summary>


Setup is the one thing every server does before getting any value from the bot, so this release rebuilds it end to end — from the moment the bot joins, through to the final confirmation. The goal: get a server configured and moderating in about a minute, with nothing silently half-working.

### The wizard, rebuilt

- **It starts the moment you add the bot.** Instead of a separate "click to apply" prompt, the bot walks you straight through setup — in your DMs, or in-server if your DMs are closed.
- **Everything is pre-filled.** Your staff chat, log channel, and Admin/Moderator roles are detected automatically from your server's naming and permissions. If the detection's right, you can confirm in a single click — the button literally turns green and reads **"Looks good"**.
- **You can't get stuck with a half-done step.** Each step stays locked until it's actually valid, so you never reach the end with something missing.
- **One button creates whatever's missing.** No staff chat? No Moderator role? A single **"Create required channels / roles"** button makes them — private staff channels, sensibly-permissioned roles, color-coded — so you don't have to set any of it up by hand first.
- **A pre-flight check before you invest any time.** If the bot was added without a permission it needs to actually moderate, setup tells you up front — with a one-click re-invite link — rather than letting you finish a setup that can't work.
- **A plain-language permission review.** If any of your existing roles or channels need a change to work safely — for example a Moderator role that can manage the whole server, or a staff channel that's visible to everyone — the bot shows you exactly what it wants to change and waits for your approval. It never silently weakens or strips permissions you set on purpose.
- **Clear guidance when the bot can't fix something itself.** If a staff role sits above the bot in your role list (so Discord won't let the bot edit it), you get exact step-by-step instructions and a re-check button — not a silent failure.

### Re-running `/setup` is now safe

- **It shows your current setup, not a blank form.** Running `/setup` again pre-fills everything you already chose, so you can review or tweak one thing without redoing all of it.
- **It never wipes your other settings.** Re-running setup preserves everything you've tuned elsewhere — alert roles, Pulse schedule, anti-raid thresholds, and the rest. Only what the wizard actually manages gets touched.

### Smarter, more honest defaults

- **Dev Updates are on by default for new servers** — most owners want release notes about the bot running their server, posted to your staff chat. You can turn them off any time via `/settings → Behaviour`. **Existing servers are unaffected** — if you never turned this on, it stays off; if you'd set it either way, your choice is kept.
- **The Behaviour panel now shows the true Dev Updates state** (it previously could show "off" while updates were actually being delivered).

### Also fixed

- **The welcome can never fail silently.** If the bot can't build the full wizard the instant it joins, it falls back to a short text welcome pointing you at `/setup` — a new server always hears from the bot.
- **Buttons no longer hang on a spinner.** A rare timing hiccup with Discord could leave a wizard button stuck loading; it now fails cleanly and you can simply click again.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.12 — Natural-language commands now require the action word at the start</summary>


An owner reported staff chat in their server triggering the bot on completely unrelated messages — *"hey bert can you help me move grass this weekend?"* got the bot to reply *"The `move` action isn't fully implemented yet"*. The cause: shorthand commands in staff chat were triggering whenever an action word (`move`, `remove`, `create`, `role`, etc.) appeared **anywhere** in the message.

### What's different

**Shorthand commands now need the action word at the start of the message.** A single interjection or vocative in front is fine — `bot, ban @user`, `ok mute @user 1h`, `yes warn @user` — but anything beyond that no longer triggers.

| Pattern | Before | Now |
|---|---|---|
| `warn @user spam` | ✅ triggers | ✅ triggers |
| `ban @user reason` | ✅ triggers | ✅ triggers |
| `bot, mute @user 1h` | ✅ triggers | ✅ triggers |
| `ok kick @user` | ✅ triggers | ✅ triggers |
| `let's ban @user` | ✅ triggers | ❌ silent (was a false positive) |
| `should we mute @user?` | ✅ triggers | ❌ silent (was a false positive) |
| `hey bert can you help me move grass` | ✅ triggers | ❌ silent (was a false positive) |
| `@Server Assistant ban @user` | ✅ triggers | ✅ triggers (mentions always work) |
| `/ban @user` | ✅ triggers | ✅ triggers (slash commands always work) |

### What didn't change

- **Slash commands** (`/warn`, `/ban`, `/mute`, etc.) work the same as before — they always trigger regardless of how they're typed.
- **Direct @mentions** of the bot bypass this check entirely. If you need the bot mid-sentence, just `@mention` it.
- **Reply-to-bot** is unchanged — replying to a bot message keeps the conversation going.
- **Privacy panel** controls aren't affected — if you'd disabled NL commands via `/privacy → Natural-language commands in staff-chat`, that stays disabled.

### Why this is the right fix

The action keywords in our internal sets are common English words (`move`, `remove`, `create`, `role`, `note`, `record`, …). Matching them anywhere in a sentence made the bot interrupt natural conversation between staff. Now the bot only steps in when the message reads like a command (action word at the front).

If you want the bot to act on a request mid-sentence, the `@mention` path is the explicit way to do it.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.11 — UX hotfix sweep</summary>


A focused pass on places where the bot's behaviour didn't match what its menus claimed. Three real bugs and two defaults made more honest. Nothing changes for servers that had explicitly configured anything — only the *uncontested* defaults move.

### Fixed
- **Pulse menus no longer lie about whether Pulse is on.** Three places in the privacy and settings panels (`/privacy → 🩺 Toggle Pulse`, `/settings → 🩺 Pulse`, and the Settings hub summary) were showing **⚪ Disabled** for servers that had never explicitly toggled the setting — while Pulse was actually firing because the default was on. The panels and the digest now read from the same source of truth, so what the menu says matches what actually happens.
- **`/help → ← Overview` button "does nothing" fixed.** The button was rendered on every page including the Overview screen itself. Clicking it from the Overview tried to redraw the same content, which Discord no-op'd visually — so it looked broken. The button now disables itself when you're already on the Overview, so its state honestly reflects what a click can do.
- **`/autopilot` Apply button now surfaces errors instead of swallowing them.** A rare error path was double-responding to the same interaction, which meant the original error never reached you. Now errors come through reliably.

### Changed — defaults moved to opt-in
- **Pulse (daily server-health digest) is now off by default.** No more surprise 9 AM digests in servers that didn't explicitly ask for them. Turn it on via `/settings → 🩺 Pulse` (with full controls for hour and destination channel) or `/privacy → 🩺 Toggle Pulse`. **Existing servers that had explicitly enabled or disabled Pulse keep their choice** — only the default for servers that never touched it changes.
- **Weekly digest is now off by default** for the same reason. Turn it on via `/settings → Behavior` if you want it.
- **The one-tap install proposal no longer silently enables Pulse.** Apply previously turned Pulse on without showing it in the proposal — that's an undisclosed opt-in. Apply now leaves Pulse alone; you enable it explicitly when you want it.

### Improved — `/setup` wizard
- **The wizard is now a single ephemeral message that updates in place** as you pick each value. Previously, every dropdown choice and every Next-button press spawned a fresh acknowledgement message below the wizard, scrolling your viewport down. Now the wizard stays put and the embed itself shows a live "Selected so far" summary, so you can see what's locked in without losing context. Step transitions edit the same message rather than starting fresh.
- **Welcome embed for new server installs updated.** The on-join embed previously referenced a closed beta perk that expired on 2 June. Removed. (Servers that already hold the grant are unaffected — only the embed text changed.)


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.10 — One-tap setup on install</summary>


### Changed
- **Setup is now one tap when you add the bot.** As soon as you install Server Assistant, the bot scans your server, detects sensible defaults (staff chat, log channel, Owner / Admin / Mod roles), and **DMs the owner with a one-button "Apply" proposal**. Tap once and your server is fully configured — no need to remember `/setup` exists. The configuration includes the AutoMod "Scams + slurs (gaming)" preset, **Normal** anti-raid (5 joins / 30s), the **Standard** punishment ladder, and Pulse daily digests.
- **Fallback if your DMs are closed:** the same proposal posts to your server's system channel (or the first sendable channel) with the owner @-pinged — so nobody misses the setup prompt because of a privacy setting.
- `/setup` and `/autopilot` still work exactly as before for owners who prefer the manual flow or want to re-run later.

### Fixed
- **Removed a duplicate `on_guild_join` handler** that was being silently shadowed. The earlier handler's content (basic "run /setup" DM) was never actually firing in production — only the more-detailed second handler did. Both are now collapsed into the single streamlined v5.5.10 flow above.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.9 — Per-server command usage logging</summary>


### Added
- **Command usage now logs to your server's log channel.** Every slash command, right-click context menu, and natural-language text command appears as a compact entry: *user · command · channel · invocation type*. Owners and staff can see exactly what's being used and by whom, in the same channel they already check. Fire-and-forget — never blocks the command itself.
- **Off-switch:** if your server is chatty, toggle this off in `/settings → Behaviour → Log command usage`. Moderation actions (warn / mute / ban / kick / etc.) keep their existing detailed entries regardless — only the additional "command was invoked" entries are silenced.
- **Skipped by default:** commands that already produce a detailed log entry (warn, mute, kick, ban, softban, tempban, role add/remove, lockdown, purge, nick) don't double-log. Read-only and personal commands (`/info`, `/stats`, `/help`, `/timezone`, `/schedule`) and config commands (`/sai`, `/settings`, `/automod`, etc.) get the compact entry.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.7 — `/concierge` renamed to `/sai` + admin read-only mode</summary>


### Renamed
- **`/concierge` → `/sai`.** Same Server Assistant intelligence chat, shorter name. Owners get full access (read insights + propose config changes); **admins now get read-only access** (can ask questions, get insights, but can't enroll proposed changes — must ask the owner to apply). Embed shows the caller's role tag (`owner · full access` or `admin · read-only`) so it's obvious which mode the answer came from.

### Deprecated
- **`/concierge`** kept as a stub for ~30 days. Running it returns a short nudge: *"renamed to `/sai`, use that instead."* `/sai` remains the easiest way for owners to update the bot's settings. Stub removed in v5.7.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.6 — Multi-tenant address detection + per-feature NL billing</summary>


### Fixed
- **Multi-tenant address check.** The bot now recognises its actual per-server nickname when staff write things like "Pepper, mute @user" or "Watchdog: ban that user" — previously it only matched a hardcoded set of legacy names, so servers that renamed the bot didn't get the by-name addressing path. The bot's nickname, base username, and generic fallbacks `bot,` / `assistant,` all trigger the same path now.

### Changed
- **Every AI call is now properly tagged in your token usage breakdown.** Five natural-language AI features (fuzzy-intent interpretation, conversational fallback, channel-create extraction, message-send extraction, report context summarisation, self-trained AutoMod analysis) previously charged your allowance under a catch-all `general` tag. They now use distinct labels (`nl_intent`, `nl_chat`, `nl_extract`, `report_command`, `self_trained`) so you can see exactly which features ate which tokens in `/premium`.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.5 — Refreshed staff onboarding + Dev Updates default ON</summary>


### Changed
- **Staff onboarding overhauled.** The welcome message posted after `/setup` is now a 4-embed sequence (was 3): Text · Slash · Right-click · Decision cards walkthrough. First message **@mentions every configured staff role** so your team actually sees it. Slash command list grouped into Core moderation / Raid response / Config / Personal categories with all the v5.5.x additions (`/tempban`, `/role add/remove`, `/lockdown`, `/altguard`, `/tickets`, `/premium`). Final embed links to the docs site for the deeper dive.
- **Dev Updates default to ON in setup.** Owners almost always want release notes for the bot powering their server, so the `/setup` wizard's Dev Updates toggle now starts enabled. Toggle off in the wizard or via `/settings → Behaviour` any time.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.4 — Docs reconciliation + Premium `/imagine` cooldown removed</summary>


A coordinated sweep across the docs site, pricing page, privacy policy, roadmap, and listing copy — plus one small but long-promised bot fix. No moderation behaviour changes; this is mostly visibility, accuracy, and surface-level polish.

### Added
- **Premium servers now get unlimited `/imagine`.** The 30-second per-guild cooldown is gone for Premium guilds — matches what the pricing page has always said. Free servers keep the cooldown (and the free Pollinations.ai fallback).
- **Pricing → "What uses AI tokens":** added **🤔 AutoMod AI second-opinion** (~1K tokens per borderline filter hit). It was billable since v5.4 and should never have been missing from this table.
- **Pricing → "What's always free":** expanded to list the v5.3–v5.5 baseline-admin shipped capabilities — `/role`, `/lockdown`, `/tempban`, `/altguard`, ban-reason DMs + one-reply appeals, and the encrypted tamper-proof audit log — so the free-tier picture is current.
- **Privacy policy:** added entries for AutoMod AI second-opinion (what's sent, only when borderline), alt-guard fingerprinting (**local-only**, nothing leaves your host), and the ban-reason DM + appeal flow (no AI tokens unless **Research** is pressed).
- **Features page** now has a dedicated **📩 Ban reasons & one-reply appeals** section with the full Unban / Deny / Research breakdown.
- **Features page** gained a top-of-page "Why Server Assistant?" callout linking back to the four homepage differentiators, so the narrative carries through the funnel instead of opening on token math.
- **Commands page** gained a **🚨 Raid response & escalation** cluster grouping `/lockdown`, `/altguard`, `/tempban`, `/slowmode`, and per-channel locks into one runbook — plus a suggested raid playbook.
- **Commands page → Moderation table:** `/role add` · `/role remove` · `/tempban` are now in the main section, not buried at the bottom of the slash-command quick reference.
- **Homepage:** added a **🚀 Shipped this fortnight** strip (v5.2 → v5.5.4) and a small **🟢 Coming up next** strip (v5.6 items), so visitors see velocity *and* direction without scrolling the full roadmap.
- **Top-up packs — three-tier ladder.** The single $3/300K pack has grown into 🪣 **Splash** ($3 / 300K · $1.00 per 100K), 🛢️ **Surge** ($10 / 1.25M · $0.80 per 100K), and 🏭 **Stockpile** ($25 / 3.4M · $0.74 per 100K). Tokens never expire; stacks on any tier. Premium remains the cheapest steady-state rate — top-ups reward upfront commit for bursts and overflow. Buy directly from `/premium` in your server.
- **Investigate-the-user buttons on every decision card.** Ban-appeal tickets, Message Reports, and borderline AutoMod review cards all gained a row of **👤 Info · ⚠️ Warnings · 📝 Notes** buttons. So before you Unban, Deny, Warn, Timeout, Delete, Kick, Ban, or **Allow**, you can pull the same info you'd get from `/info`, `/warnings`, or `/notes` — right from the card, ephemerally to you, without leaving the decision context. Works on banned users too (you can still review the warning history of someone who's no longer in your server). Every reply is staff-only and ephemeral; pulling info doesn't ping the subject and doesn't broadcast.

### Changed
- **Threat Score wording is now consistent everywhere.** Pricing, features, and roadmap all explicitly state: **advisory view is free for every server, active (score-driven action) is Premium**.
- **Roadmap → Coming up (v5.6):** moved **Native-action coaching** out of "Future" — the logging half shipped in v5.1, what's left is the coaching nudge, and sitting in "Future" misrepresented that. Now grouped with AI rule explainer and Smart purge.
- **Roadmap → Tier A:** the **Decision explainer + appeals** card was double-covering shipped work. Sharpened to **multi-round appeals beyond the v5.5 one-reply flow** plus on-demand "why was I actioned?" DM Q&A for warnings/mutes. **Mediator** clarified as the pre-action sibling to ban appeals.
- **Roadmap header now reads v5.5.4**, not v5.5.
- **Pricing FAQ** clarified that ban-reason DMs + one-reply appeals keep working when AI tokens run out — only **Research** consumes AI, and only if you press it.
- **Roadmap → Threat Score shipped card** spells out: advisory shipped free in v3.8; the active phase is the Premium gate.

### Fixed
- **`/imagine` cooldown vs Premium copy mismatch.** Pricing page claimed "Unlimited `/imagine`" on Premium, while the roadmap had "Unlimited `/imagine` — removes the 30s rate limit" listed as planned Tier D. The pricing page was right about the intent and the roadmap card has been retired — Premium really is unlimited now.

### Notes
- No breaking changes; no migration required.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.3 — Pulse on your clock</summary>


### Fixed
- **Pulse (and the weekly digest) now fire at the configured hour in *your server's* timezone.** They were comparing the target hour against the host's UTC clock, so "Pulse at 9am" actually went out at 9am UTC regardless of your server's timezone. Set your timezone in `/settings → Default timezone` and the digest hour now means *your* local time.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.2 — Reports on the record</summary>


### Changed
- **Actions taken from a Message Report now log the report itself.** When a staff member uses a report's Warn / Timeout / Delete / Kick / Ban button, the full AI report is written into your **encrypted audit trail** and shown on the **log-channel entry** — so every action carries the reasoning that led to it. The log footer now reads **"via Message Report"** (rather than "via slash command").


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5.1 — Actionable Message Reports</summary>


### Changed
- **Message Report now has action buttons.** After the right-click AI summary, staff can act in one tap — **⚠️ Warn** (with a reason), **🔇 Timeout 10m**, **🗑️ Delete message**, **👢 Kick**, **🔨 Ban** — without leaving the report or typing a command. Each button respects the staff member's role permissions, and a ban from here still sends the member their reason + appeal.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.5 — Ban reasons & one-reply appeals</summary>


Bans are no longer a silent door slam — and an appeal is one reply away.

### Added
- **📩 Ban-reason DMs + appeals.** When anyone is banned — manually, by `/tempban`, by AutoMod, or by a native Discord ban — Server Assistant DMs them **why**, and invites them to send **one reply** to appeal. (Soft-bans are excluded, since they're meant to let people rejoin.)
- **One-reply appeal tickets.** The user's single reply opens an **appeal ticket** in your log/staff channel with three buttons: **✅ Unban** (lifts the ban and DMs the user), **🚫 Deny** (DMs the user the decision), and **🔎 Research** — which runs **Message Report** on the user's last message so you can judge the context before deciding. Buttons survive restarts.
- On by default; turn it off any time if your server doesn't want appeals.

### Changed
- **Report Message is now "Message Report."** Same right-click AI context summary — clearer name. It also powers the new appeal **Research** button.



</details>

<details class="doc-sec" markdown="1">
<summary>v5.4 — Smarter AutoMod & ban-evasion defence</summary>


Two safety upgrades — one that cuts false positives, one that catches returning troublemakers.

### Added
- **🤔 AutoMod AI second-opinion** *(Premium, opt-in)*. Turn it on in `/automod → AI Review`. Borderline AutoMod hits (word filters & spam) get a quick AI confidence check before anything happens. Hits at or above your threshold are actioned automatically; anything below is **left up** and posted to staff as a review card with one-tap **Delete & warn** / **Allow** buttons. High-confidence hits (blocked links, mention spam) still act instantly. AI usage counts toward your server's token allowance, and only borderline messages are checked — so the cost stays low.
- **🕵️ Repeat-offender detection** *(free, opt-in)*. Enable with `/altguard on`. Server Assistant fingerprints the users you ban or kick (reused custom avatar, name, account age), then checks every new joiner against them. A **confident** match — like a fresh account reusing a banned user's avatar or near-identical name — is **auto-banned and reported to staff**; weaker matches are flagged for review only. Soft-bans are excluded (they're meant to let people rejoin).


</details>

<details class="doc-sec" markdown="1">
<summary>v5.3 — Baseline admin essentials</summary>


Three plug-and-play admin commands that close common gaps — all permission-gated and written to your audit trail.

### Added
- **🎭 `/role add` / `/role remove`.** Add or remove a role from a member in one command, instead of digging through Discord's role menus. Guarded against privilege escalation: you can only assign roles **below** your own highest role, and `@everyone` / integration-managed roles are off-limits. Usable by anyone with **Manage Roles** (or a role tier that grants it).
- **🚨 `/lockdown start` / `/lockdown end`.** Lock **every text and forum channel** at once for raid response — including their threads and posts, so a raid can't just move into a thread — then restore each channel's **exact** prior permissions on `end`, not a best guess. Reuses your existing channel-lock permission, so there's nothing new to configure.
- **⏲️ `/tempban <user> <duration>`.** Timed bans that **un-ban automatically** — `30m`, `2h`, `7d`, `1w`, even `1d12h` (1 minute to 28 days). The timer is persisted and survives restarts; when it expires the bot un-bans, logs it to your audit trail, and DMs the staff member who set it.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.2 — Ticket Panels</summary>


Private in-server support tickets — no DMs, no leaving your server, no messy threads.

### Added
- **🎫 Ticket Panels.** Admins run `/tickets setup` to post a panel embed with a **Create Ticket** button in any channel — or pass `create_channel` to have the bot make a properly-locked channel for you (members can see the panel and click, but not chat). Members click it to fill a short intake form; the bot creates a private `ticket-NNNN-username` channel, notifies the support role, and drops in a **Close Ticket** button. On close, a full `.txt` transcript is posted to the configured channel and the ticket channel is deleted.
- **Free tier:** one-question intake form, private ticket channels, transcript on close, editable panel text.
- **Premium tier:** up to 4 custom intake form questions (`/tickets questions`), custom welcome and close messages (`/tickets panel`), and the ability to add users to an open ticket mid-conversation (`/tickets add @user`).
- **Persistent panels** — the Create Ticket button survives bot restarts.
- **Per-ticket privacy** — each ticket channel is visible only to the opener, the configured support role, and admins.
- **Storage** in `tickets.json` alongside the other per-guild JSON stores; no extra setup required.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.1 — Complete audit trail & tamper protection</summary>


Oversight you can trust. Server Assistant now records **every** moderation action — not just the ones run through the bot — and keeps them somewhere staff can't touch.

### Added
- **🛡️ Native-action logging.** Moderation done **directly in Discord** — a right-click ban, kick, or timeout — is now captured and logged just like actions taken through the bot. Nothing slips past your audit log anymore.
- **🔐 Encrypted audit trail.** Every action is written to a separate record that's **encrypted at rest**. Your staff can't read, edit, or erase it — only Server Assistant can. It's the tamper-proof source of truth behind your visible log channel.
- **⚠️ Tamper alerts.** If anyone deletes an entry from your log channel, the server owner is **automatically notified** — and the encrypted record stays intact regardless.
- **💡 Native-action coaching.** When a staff member moderates outside the bot, the log entry includes a friendly tip on doing it through Server Assistant next time (so it's reversible and consistent with your ladder).
- **🔒 Optional secure log channel.** During `/autopilot` or `/setup`, you can have Server Assistant create a locked `#server-assistant-log` channel that only it can post to — entries can't be deleted. Totally optional; your existing log works fine and is monitored either way.

### Fixed
- **`/autopilot` role detection.** Now recognises staff roles by **name** (e.g. "Moderators", "Admin", "Staff"), not just by permissions — so a correctly-named role is detected even if its powers come from channel overrides. It also suggests the standard staff permissions if a detected role is missing them.


</details>

<details class="doc-sec" markdown="1">
<summary>v5.0 — Premium tier, Concierge, Auto-pilot, Privacy panel</summary>


The biggest release yet. Premium ships with an honest billing model — subscribe when you want AI features, pay only when you've actually used your free tokens.

### Added
- **💸 Premium — $7 USD/month.** Subscribe now, card charged only when your 150K free tokens run out. Small servers may never pay. Includes Concierge chat, active Threat Score, unlimited `/imagine`, 750K tokens/month, and top-up packs ($3 USD / +300K extra). See [pricing]({{ site.url }}{{ site.baseurl }}/pricing/).
- **🔑 Premium BYOK — $3 USD/month.** Bring your own Anthropic/xAI/OpenAI key, pay us just $3/mo for the features and infrastructure. Card charged immediately on subscribe.
- **🎯 Free tier — 150K tokens lifetime** to evaluate every AI feature. Core moderation is always free, period.
- **🪄 Auto-pilot bootstrap.** Run `/autopilot` — the bot scans your server, detects staff chat, log channel, and staff roles, and proposes a full config. One tap applies it. Zero configuration required.
- **💬 Concierge (Premium).** `/concierge` is an AI assistant that reads your server's actual settings and recent moderation events, then gives specific advice and proposes concrete changes. Grounded in your data, not generic tips.
- **🔒 Privacy panel.** `/privacy` gives per-feature toggles for what the bot is allowed to read. New servers start privacy-first; existing servers keep their current behaviour.
- **📊 Budget warnings.** DM to the owner at 80% and 100% of token allowance. Core moderation never pauses regardless of usage.
- **🎁 Beta-period perk.** Servers active before launch: 12 months of free Premium locked in automatically. No card, no claim form.

### Changed
- All AI features now route through Anthropic Claude with prompt caching and per-guild token accounting. BYOK preserved for users with their own keys.
- 6-hour rolling caps on high-variance features (Concierge, Message Report, `/imagine`, Self-trained rounds) — invisible to normal use, prevents any single user from draining the server's allowance.
- Bot framing updated to reflect what it actually is: **privacy-first moderation with optional AI enhancement.**

### Coming next
- In-bot Stripe Checkout subscribe flow
- Discord App Subscriptions (when Server Assistant reaches 75 server installs)
- Premium Plus tier ($14 USD/mo, 2M tokens, multi-server bundle)


</details>

<div class="changelog-nav">
  <strong>Browse by version</strong>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/" class="{% if page.permalink == '/changelog/' %}current{% endif %}">v5.x <span class="latest-tag">latest</span></a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v4/" class="{% if page.permalink == '/changelog/v4/' %}current{% endif %}">v4.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v3/" class="{% if page.permalink == '/changelog/v3/' %}current{% endif %}">v3.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v2/" class="{% if page.permalink == '/changelog/v2/' %}current{% endif %}">v2.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v1/" class="{% if page.permalink == '/changelog/v1/' %}current{% endif %}">v1.x</a>
</div>

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
