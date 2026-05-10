---
layout: default
title: Changelog
permalink: /changelog/
description: Release history and patch notes for Server Assistant.
---

# 📋 Changelog

All notable changes to Server Assistant. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

The latest patches are also posted to **#bot-feedback** in the [support server]({{ site.url }}{{ site.baseurl }}/support/).

---

## [3.2.4] — 2026-05-10

### Security
- **AutoMod custom regex ReDoS guard** — admin-supplied filter patterns with nested quantifiers, alternation-in-repeat, or optional-in-repeat are rejected at add-time. Stops a single bad pattern from locking the message-handling event loop.

### Performance
- **Parallel channel scan in user-history search** — staff `history` now scans channels concurrently instead of sequentially.

### Added
- `tests/` with pytest covering announce, telemetry, and the ReDoS heuristic. CI runs the suite on every push.

---

## [3.2.3] — 2026-05-10

### Fixed
- **Scheduled tasks not firing** — a stub defined later in the module was silently overwriting the real `process_scheduled_tasks()` implementation. `/schedule` reminders now actually execute. Thanks to Jules for catching this.

### Security
- Vault key file and vault save now use atomic `O_CREAT | O_EXCL` with mode `0o600`, closing the race where freshly written secrets briefly had umask permissions before `chmod`.

### Changed
- `yt_notify.py` state file writes are now atomic (temp + rename), surviving interrupted writes.
- Staff `actions` / `audit` command no longer blocks the event loop when the log file is large.

### Repo housekeeping
- Dependency floors bumped via Dependabot.

---

## [3.2.2] — 2026-05-10

### Added
- **AI usage tracking** — chat completions now record input/output tokens per provider/model; image generations record per-provider call counts. Stored locally in `telemetry.json`, never transmitted.
- **"AI Usage…" tray menu item** — opens a window with per-provider totals and an estimated USD cost. Covers xAI Grok, OpenAI chat + DALL·E 3, Stability SDXL, and Pollinations.

---

## [3.2.1] — 2026-05-10

### Added
- **Public Changelog page** at `/changelog/` on the docs site, mirrored from the bot's internal `CHANGELOG.md`.
- **`announce.py`** — helper that posts release notes to the public `#bot-feedback` channel.

### Changed
- Public docs nav: `Privacy` and `Terms` are now correctly capitalised.

### Removed
- Legacy files no longer used by the bot.

---

## [3.2.0] — 2026-05-10

### Added
- **First-steps guide** — after `/setup` completes, the bot auto-posts a 5-message walkthrough to the configured staff-chat channel covering core commands, slash commands, right-click menus, and `/settings`.
- **Right-click discoverability** — `/help`, the text `help` command, and the `on_guild_join` welcome DM all now surface the **Apps ▸ Server Assistant** context menus (View Info, View Warnings, Report Message).
- **`/vote` slash command** — links to the bot's directory listings for users who want to support the project.
- **Public documentation site** — full Setup, Commands, Features, FAQ, Support, Privacy, and Terms pages.

### Fixed
- **Duplicate context-menu entries** — View Info / View Warnings / Report Message were appearing twice in the Apps submenu. Startup now clears stale guild-scoped commands and re-syncs cleanly.
- **`detect_action()` keyword priority** — the parser now matches the earliest-position keyword within each priority tier instead of relying on Python set-iteration order. Fixes cases like `schedule in 3 days: check ...` being mis-routed to the `check` action.

### Changed
- Slash commands sync to all configured guilds on startup for instant propagation (no more 1-hour wait after restarts).

---

## [3.1.0] — 2026-05-09

### Added
- **Premium architecture stub** — every guild gets full access during the growth phase; pricing flips on post-launch.
- **Privacy-respecting telemetry** — anonymous local counters for AutoMod blocks, images generated, warnings issued, etc. Never transmitted off the host.
- **Privacy + Terms documents** — required for Discord verification.
- **GitHub repository** with CI workflow, Dependabot, issue and PR templates.

### Changed
- Bot version bumped to 3.1.0.

---

## [3.0.0] — 2026-05-01

### Added
- **Multi-tenant architecture** — bot can be invited to any server; each server gets isolated configuration, warnings, notes, AutoMod rules, and settings.
- **`/setup` wizard** — interactive 3-step config (channels, roles, AI provider) for new server owners.
- **`/settings` Customisation Hub** — 7 sub-wizards for branding, presets, behaviour, new-member features, verification, channel allowlist, and role tiers.
- **Encrypted secrets vault** — Fernet-encrypted on-disk storage for all credentials.
- **AI image generation** (`/imagine`) — supports DALL·E 3, Stable Diffusion, and Pollinations.ai (free fallback).
- **Per-server custom branding** — embed colour, bot nickname, default timezone.
- **Punishment ladder presets** — Gentle / Standard / Strict.
- **AutoMod filter packs** — Off / Scams only / Scams + slurs / Strict.
- **Anti-raid sensitivity presets** — Off / Normal / Strict.
- **Onboarding template gallery** — Friendly / Gaming / Professional / Minimal / Custom.
- **DM verification gate** — button-based new-member verification.
- **Custom role tiers** beyond Owner / Admin / Moderator.
- Slash commands and right-click context menus.

---

## [2.2.0] — 2026-04-30

### Added
- AutoMod engine with curated regex packs.
- Anti-raid protection with mass-join detection and Owner alerts.
- Custom canned response snippets with placeholder substitution.
- Scheduled actions (`schedule in 2 hours: ...`, `remind at 9am: ...`).
- AI-assisted reports via right-click on messages.

### Changed
- Bot reactions now indicate processing state: 👀 (saw it), ⏳ (working), ✅ (done), ❌ (error).

---

## [2.0.0] — 2026-04-30

### Added
- Persistent warning system with DM notifications and full per-guild history.
- Private staff notes invisible to users.
- Auto-onboarding with placeholder substitution.
- Undo system reversing bans, mutes, channel deletions, and nickname changes within 24h.
- Bulk operations via role mention.
- Audit log channel integration.

---

## [1.0.0] — 2026-04-30

Initial release.

- Role-based moderation (Owner / Admin / Moderator).
- Slash command `/setup` (early version).
- Basic ban / kick / mute / warn / info / stats commands.
- Owner approval workflow for dangerous actions.
