---
layout: default
title: Changelog — v4.x
permalink: /changelog/v4/
description: Server Assistant v4.x release history.
---

# 📋 Changelog — v4.x

The v4.x line — Server Assistant's AI-Moderation milestone.

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


---

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
