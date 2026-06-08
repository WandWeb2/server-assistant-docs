---
layout: default
title: Changelog — v3.x
permalink: /changelog/v3/
description: Server Assistant v3.x release history.
---

# 📋 Changelog — v3.x

The v3.x line — multi-tenant rewrite, Pulse, Self-trained AutoMod, Bot Health Insurance, Threat Score.

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


---

<style>
.changelog-nav { display: flex; gap: 0.4rem; flex-wrap: wrap; margin: 0.6rem 0 1.2rem; padding: 0.5rem; background: rgba(46,204,113,0.06); border: 1px solid rgba(46,204,113,0.20); border-radius: 10px; }
.changelog-nav strong { font-size: 0.78rem; color: #2c7ad6; font-weight: 700; padding: 0.35rem 0.6rem 0.35rem 0; align-self: center; }
.changelog-nav a { display: inline-block; padding: 0.35rem 0.85rem; border-radius: 999px; font-size: 0.85rem; font-weight: 600; text-decoration: none; color: #2c3e50; background: rgba(255,255,255,0.7); border: 1px solid rgba(31,38,135,0.12); transition: all 0.15s; }
.changelog-nav a:hover { background: #2c7ad6; color: white; border-color: #2c7ad6; text-decoration: none; }
.changelog-nav a.current { background: #2c7ad6; color: white; border-color: #2c7ad6; }
.changelog-nav .latest-tag { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.8; margin-left: 0.3rem; }
</style>

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
