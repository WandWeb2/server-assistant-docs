---
layout: default
title: Changelog
permalink: /changelog/
description: Release history for Server Assistant — major features, fixes, and announcements.
---

# 📋 Changelog

What's new in Server Assistant. Internal-only updates (CI, dependency bumps, host-side tooling) aren't listed here — see the [support server]({{ site.url }}{{ site.baseurl }}/support/) `#bot-feedback` channel for full release notes.

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
- **Right-click discoverability** — `/help`, the text `help` command, and the welcome DM now all surface the **Apps ▸ Server Assistant** context menus (View Info, View Warnings, Report Message).
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
