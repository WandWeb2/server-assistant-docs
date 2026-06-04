---
layout: default
title: Changelog
permalink: /changelog/
description: Release history for Server Assistant — major features, fixes, and announcements.
---

# 📋 Changelog

What's new in Server Assistant. Internal-only updates (CI, dependency bumps, host-side tooling) aren't listed here.

---

## v5.5.1 — Actionable Message Reports

### Changed
- **Message Report now has action buttons.** After the right-click AI summary, staff can act in one tap — **⚠️ Warn** (with a reason), **🔇 Timeout 10m**, **🗑️ Delete message**, **👢 Kick**, **🔨 Ban** — without leaving the report or typing a command. Each button respects the staff member's role permissions, and a ban from here still sends the member their reason + appeal.

---

## v5.5 — Ban reasons & one-reply appeals

Bans are no longer a silent door slam — and an appeal is one reply away.

### Added
- **📩 Ban-reason DMs + appeals.** When anyone is banned — manually, by `/tempban`, by AutoMod, or by a native Discord ban — Server Assistant DMs them **why**, and invites them to send **one reply** to appeal. (Soft-bans are excluded, since they're meant to let people rejoin.)
- **One-reply appeal tickets.** The user's single reply opens an **appeal ticket** in your log/staff channel with three buttons: **✅ Unban** (lifts the ban and DMs the user), **🚫 Deny** (DMs the user the decision), and **🔎 Research** — which runs **Message Report** on the user's last message so you can judge the context before deciding. Buttons survive restarts.
- On by default; turn it off any time if your server doesn't want appeals.

### Changed
- **Report Message is now "Message Report."** Same right-click AI context summary — clearer name. It also powers the new appeal **Research** button.

---

## v5.4 — Smarter AutoMod & ban-evasion defence

Two safety upgrades — one that cuts false positives, one that catches returning troublemakers.

### Added
- **🤔 AutoMod AI second-opinion** *(Premium, opt-in)*. Turn it on in `/automod → AI Review`. Borderline AutoMod hits (word filters & spam) get a quick AI confidence check before anything happens. Hits at or above your threshold are actioned automatically; anything below is **left up** and posted to staff as a review card with one-tap **Delete & warn** / **Allow** buttons. High-confidence hits (blocked links, mention spam) still act instantly. AI usage counts toward your server's token allowance, and only borderline messages are checked — so the cost stays low.
- **🕵️ Repeat-offender detection** *(free, opt-in)*. Enable with `/altguard on`. Server Assistant fingerprints the users you ban or kick (reused custom avatar, name, account age), then checks every new joiner against them. A **confident** match — like a fresh account reusing a banned user's avatar or near-identical name — is **auto-banned and reported to staff**; weaker matches are flagged for review only. Soft-bans are excluded (they're meant to let people rejoin).

---

## v5.3 — Baseline admin essentials

Three plug-and-play admin commands that close common gaps — all permission-gated and written to your audit trail.

### Added
- **🎭 `/role add` / `/role remove`.** Add or remove a role from a member in one command, instead of digging through Discord's role menus. Guarded against privilege escalation: you can only assign roles **below** your own highest role, and `@everyone` / integration-managed roles are off-limits. Usable by anyone with **Manage Roles** (or a role tier that grants it).
- **🚨 `/lockdown start` / `/lockdown end`.** Lock **every text and forum channel** at once for raid response — including their threads and posts, so a raid can't just move into a thread — then restore each channel's **exact** prior permissions on `end`, not a best guess. Reuses your existing channel-lock permission, so there's nothing new to configure.
- **⏲️ `/tempban <user> <duration>`.** Timed bans that **un-ban automatically** — `30m`, `2h`, `7d`, `1w`, even `1d12h` (1 minute to 28 days). The timer is persisted and survives restarts; when it expires the bot un-bans, logs it to your audit trail, and DMs the staff member who set it.

---

## v5.2 — Ticket Panels

Private in-server support tickets — no DMs, no leaving your server, no messy threads.

### Added
- **🎫 Ticket Panels.** Admins run `/tickets setup` to post a panel embed with a **Create Ticket** button in any channel — or pass `create_channel` to have the bot make a properly-locked channel for you (members can see the panel and click, but not chat). Members click it to fill a short intake form; the bot creates a private `ticket-NNNN-username` channel, notifies the support role, and drops in a **Close Ticket** button. On close, a full `.txt` transcript is posted to the configured channel and the ticket channel is deleted.
- **Free tier:** one-question intake form, private ticket channels, transcript on close, editable panel text.
- **Premium tier:** up to 4 custom intake form questions (`/tickets questions`), custom welcome and close messages (`/tickets panel`), and the ability to add users to an open ticket mid-conversation (`/tickets add @user`).
- **Persistent panels** — the Create Ticket button survives bot restarts.
- **Per-ticket privacy** — each ticket channel is visible only to the opener, the configured support role, and admins.
- **Storage** in `tickets.json` alongside the other per-guild JSON stores; no extra setup required.

---

## v5.1 — Complete audit trail & tamper protection

Oversight you can trust. Server Assistant now records **every** moderation action — not just the ones run through the bot — and keeps them somewhere staff can't touch.

### Added
- **🛡️ Native-action logging.** Moderation done **directly in Discord** — a right-click ban, kick, or timeout — is now captured and logged just like actions taken through the bot. Nothing slips past your audit log anymore.
- **🔐 Encrypted audit trail.** Every action is written to a separate record that's **encrypted at rest**. Your staff can't read, edit, or erase it — only Server Assistant can. It's the tamper-proof source of truth behind your visible log channel.
- **⚠️ Tamper alerts.** If anyone deletes an entry from your log channel, the server owner is **automatically notified** — and the encrypted record stays intact regardless.
- **💡 Native-action coaching.** When a staff member moderates outside the bot, the log entry includes a friendly tip on doing it through Server Assistant next time (so it's reversible and consistent with your ladder).
- **🔒 Optional secure log channel.** During `/autopilot` or `/setup`, you can have Server Assistant create a locked `#server-assistant-log` channel that only it can post to — entries can't be deleted. Totally optional; your existing log works fine and is monitored either way.

### Fixed
- **`/autopilot` role detection.** Now recognises staff roles by **name** (e.g. "Moderators", "Admin", "Staff"), not just by permissions — so a correctly-named role is detected even if its powers come from channel overrides. It also suggests the standard staff permissions if a detected role is missing them.

---

## v5.0 — Premium tier, Concierge, Auto-pilot, Privacy panel

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

---

## 2026-05-31 — v4.3.0 — Support Channel + Dev Updates

The way you get help, and the way I tell you about new releases, both get cleaner.

### Added
- **`/support` slash command — now the only way to contact the maintainer.** No support server, no email, no GitHub issues for support. The flow is consent-based: running `/support` shows you an ephemeral info embed with two buttons — **Create a ticket** or **Never mind**. Tap *Create*, I'll DM you, and your next DM opens the ticket (15-minute window). Nothing leaves the channel without your tap.
- **Two-way ticket conversation via DM.** Once a ticket is open, the maintainer's replies arrive as a DM from Server Assistant. **Reply to the DM** to add a follow-up — your message lands in the same ticket automatically. The bot reacts ✅ to confirm receipt. No more "please use this other channel" routing.
- **Image attachments on ticket DMs.** Send a screenshot to the bot — first DM (which opens the ticket) and follow-ups both support attachments. PNG, JPG, GIF, WEBP — up to 12 MB each, 10 per message.
- **Dev Updates opt-in.** New question in `/setup`: opt your server into Server Assistant development updates, posted as embeds to your staff chat when a release ships. Off by default. Toggle anytime via `/settings → Behaviour → Dev updates`.

### Changed
- **Maintainer broadcast embeds are now red.** When the maintainer sends a notice into a staff chat, it's signed **"Server Assistant Dev"** with a red embed colour, and the footer makes clear that replies to that embed are NOT seen — to respond, open a `/support` ticket.
- **Documentation rewrite.** Every page on the docs site now routes support through `/support` only. The public web support form is closed. `SECURITY.md` also routes through `/support` (prefix your message with `[SECURITY]`).

### Removed
- The Server Assistant support server is no longer the way to get help — replaced by the in-bot `/support` flow.
- The public web ticket form (and the docs-site form on the Support page) is closed.

### Fixed
- **DMs to the bot without an open ticket** are now silently discarded — no confusing "use /support" auto-reply, no unintended reactions. The bot only engages on DMs from users with an active support thread.

---

## 2026-05-29 — v4.0.0 — The AI-Moderation Update 🚀

The milestone. Server Assistant's four flagship AI-moderation features are all live, and a **premium tier** arrives.

### Added
- **Premium tier (per-server).** A real free/premium split — and the free tier stays genuinely generous: all core moderation, AutoMod, anti-raid, 🩺 Pulse, 🧠 Self-trained AutoMod, 🩹 Bot Health Insurance, AI reports, and `/imagine`. Premium adds 🛡️ Threat Score, higher AI usage limits, and more to come.
- **`/premium`** — see your server's status and the full free-vs-premium breakdown.
- **Your beta perk, now concrete:** during the beta, premium is **free for every server** — and servers using the bot during the beta lock in **12 months of free premium** automatically when the paid tier launches. No card, no claim form.

### The v4.0 AI-moderation suite (read-only / advisory by design)
- **🩺 Pulse** — daily server-health digest with trends + leading-indicator flags
- **🧠 Self-trained AutoMod** — learns from your moderators, proposes server-specific rules
- **🩹 Bot Health Insurance** — the bot watches its own footprint and suggests tuning before it gets noisy
- **🛡️ Threat Score** — explainable per-user risk visibility for staff

Every one gives your team x-ray vision and leaves the decisions to you.

---

## 2026-05-29 — v3.8.0

### Added
- **🛡️ Threat Score (advisory).** Each user now gets an at-a-glance risk score — 🟢 Low / 🟠 Elevated / 🔴 High — shown in their profile (`/info` and the right-click **View Info** menu). It's transparent and explainable: a time-decayed weighted view of a user's infraction history (manual warnings count more than AutoMod hits; serious categories like scams/raids/slurs count more; old infractions fade), with a one-line summary of what's driving it. **Advisory only — it never takes any action.** It just helps staff *see* who's trending risky and decide. Score-driven moderation (with grace periods, soft-touch DM check-ins, server-defined thresholds) is a separate, later phase. Opt-in (slated premium), off by default — enable under `/settings → Behavior`.

---

## 2026-05-29 — v3.7.0

### Added
- **🩹 Bot Health Insurance.** The bot now watches its *own* footprint so it never quietly becomes the bot a server mutes. If its AutoMod activity looks heavy-handed over a week, it posts a single gentle check-in to staff chat with concrete ways to dial it back (gentler filter pack, softer ladder, trimming custom filters). **Read-only — it never changes settings on its own**, and it's self-limiting to at most once every 14 days. On by default; toggle under `/settings → Behavior`.

---

## 2026-05-28 — v3.6.0

### Added
- **🧠 Self-trained AutoMod** (`/automod → Self-training`). The bot learns from *your* moderators, not just preset filters:
  - **Watches** the content of messages your staff delete or flag via Message Report (opt-in, stored locally for 30 days — message text only, no identities, nothing leaves the host)
  - **Learns** on demand — once it has enough samples, the AI clusters the patterns and proposes server-specific AutoMod rules, each with a rationale and the examples it would catch
  - **You approve** each rule one at a time; accepted rules run through the same backtracking-safety guard as hand-written filters. **Nothing is ever auto-enforced** — they're suggestions until you accept them
  - Off by default; toggle on and clear the learning log any time

---

## 2026-05-28 — v3.5.2

### Fixed
- **`/vote` now links to the correct directories.** The "Discord Bot List" link previously pointed at the support server by mistake; it now goes to the actual listing, with dedicated upvote buttons for both Top.gg and Discord Bot List. The newly-approved discord.bots.gg listing is included too.

---

## 2026-05-28 — v3.5.1

### Changed
- **Pulse digests carry an occasional gentle vote reminder** — at most once a week, the daily digest adds a single line noting that a quick `/vote` helps other communities discover Server Assistant. No extra posts, no nagging.

---

## 2026-05-28 — v3.5.0

### Added
- **🩺 Pulse — daily server-health digest** (`/settings → 🩺 Pulse`). Once a day at a time you choose, Pulse posts a one-embed summary to your staff chat:
  - 24-hour activity (messages, joins/leaves, AutoMod blocks, warnings) with **week-over-week deltas** vs your 7-day baseline
  - **Leading-indicator flags** when something's notable — *AutoMod activity is 2× the 7-day average*, or *join spike above the baseline but below the raid threshold*
  - **Read-only.** Pulse never auto-actions. Just gives staff x-ray vision so they decide what to do.
  - **On by default** for configured servers — posts to your staff chat at 09:00 server-local time. Toggle off, change the destination channel, or pick a different hour anytime in `/settings → 🩺 Pulse`.

---

## 2026-05-21 — v3.4.2

### Changed
- **Beta-period perk made explicit across the site.** Servers that add Server Assistant *before* the premium tier launches receive **12 months of free premium access** from launch day. The welcome DM new owners receive now mentions this too — invite the bot now, lock in a year of premium for free.

---

## 2026-05-20 — v3.4

### Added
- **🔔 Notification Roles** (`/settings → Notifications`). Pick which staff roles get @-pinged on three high-signal events:
  - Anti-raid alerts (mass-join detection)
  - Dangerous-action approval requests
  - AutoMod escalations (timeout / kick / ban)

  Up to 10 roles per event type. Leaving a selector empty makes that event silent — existing behaviour preserved for anyone who doesn't change anything. AutoMod single-message blocks intentionally don't ping, to avoid channel noise.

### Fixed
- **AutoMod now DMs the user when their message is removed.** Previously the message vanished silently with no explanation. The DM names which rule fired, shows the user's current warning count, and warns about escalation.
- **Duplicate response bug** where the bot occasionally replied twice to the same staff message.

---

## 2026-05-10 — v3.3

### Added
- **Weekly setup reminder** — if `/setup` hasn't been completed in your server, the bot DMs the server owner once every 7 days with a link to the setup guide. Falls back to the server's system channel if owner DMs are closed. Stops automatically once setup is complete.

---

## 2026-05-10 — v3.2

### Added
- **Bot directory stats sync** — pushes live server count to [discordbotlist.com](https://discordbotlist.com/bots/server-assistant) and [Top.gg](https://top.gg/bot/1278486617375510570) every 30 minutes.

### Security
- **AutoMod custom-regex safety net** — admin-supplied filter patterns are now rejected at add-time if they contain catastrophic-backtracking constructs (nested quantifiers, alternation-in-repeat, optional-in-repeat). Stops a single bad pattern from impacting the bot's responsiveness.

### Performance
- Faster user-history search across multi-channel allowlists (channels scanned in parallel).

### Fixed
- **`/schedule` reminders now actually fire.** A bug introduced in an earlier release silently prevented scheduled tasks from running. The user-facing commands (`schedule in 2 hours: ...`, `remind at 9am: ...`) and slash-command equivalents work as intended.

---

## 2026-05-10 — v3.2 launch

### Added
- **First-steps guide** — after `/setup` completes, the bot auto-posts a 5-message walkthrough to your staff-chat covering core commands, slash commands, right-click menus, and `/settings`.
- **Right-click discoverability** — `/help`, the text `help` command, and the welcome DM now all surface the **Apps ▸ Server Assistant** context menus (View Info, View Warnings, Message Report).
- **`/vote`** — quick link to vote for the bot on Top.gg.
- **Public documentation site** — full Setup, Commands, Features, FAQ, Support, Privacy, Terms, and this Changelog page.

### Fixed
- **Duplicate context-menu entries** in the Apps submenu.
- Natural-language command parsing — phrasings like `schedule in 3 days: check ...` now route correctly.

### Changed
- Slash commands propagate to your server within seconds of an update, not the previous up-to-1-hour delay.

---

## 2026-05-09 — v3.1

### Added
- **Privacy Policy** and **Terms of Service** documents — required for Discord verification submissions.

---

## 2026-05-01 — v3.0

The major rewrite. Server Assistant became a Discord bot for any community, not just one specific server.

### Added
- **`/setup` wizard** — interactive 3-step config (channels, roles, AI provider).
- **`/settings` Customisation Hub** — 8 sub-wizards for branding, presets, behaviour, new-member features, verification, channel allowlist, role tiers, and notifications.
- **AI image generation** (`/imagine`) — supports DALL·E 3, Stable Diffusion, and Pollinations.ai (free fallback).
- **Per-server branding** — embed colour, bot nickname, default timezone.
- **Punishment ladder presets** — Gentle / Standard / Strict.
- **AutoMod filter packs** — Off / Scams only / Scams + slurs / Strict.
- **Anti-raid sensitivity presets** — Off / Normal / Strict.
- **Onboarding template gallery** — Friendly / Gaming / Professional / Minimal / Custom.
- **DM verification gate** — button-based new-member verification.
- **Custom role tiers** beyond Owner / Admin / Moderator.
- Slash commands and right-click context menus.

---

## 2026-04-30 — v2.2

### Added
- AutoMod engine with curated regex packs.
- Anti-raid protection with mass-join detection and Owner alerts.
- Custom canned response snippets with placeholder substitution.
- Scheduled actions (`schedule in 2 hours: ...`, `remind at 9am: ...`).
- AI-assisted reports via right-click on messages.

### Changed
- Visible reaction states on bot responses: 👀 (saw it), ⏳ (working), ✅ (done), ❌ (error).

---

## 2026-04-30 — v2.0

### Added
- Persistent warning system with DM notifications and full per-guild history.
- Private staff notes invisible to users.
- Auto-onboarding DMs.
- Undo system reversing bans, mutes, channel deletions, and nickname changes within 24h.
- Bulk operations via role mention.
- Audit log channel integration.

---

## 2026-04-30 — v1.0

Initial release.

- Role-based moderation (Owner / Admin / Moderator).
- Slash command `/setup` (early version).
- Core ban / kick / mute / warn / info / stats commands.
- Owner approval workflow for dangerous actions.
