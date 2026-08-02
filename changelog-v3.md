---
layout: default
title: Changelog - v3.x
permalink: /changelog/v3/
description: Server Assistant v3.x release history.
---

# Changelog: v3.x

The v3.x line: multi-tenant rewrite, Pulse, Self-trained AutoMod, Bot Health Insurance, Threat Score.

**Tap a release to expand it.**

<style>
/* This page is long-form prose in cards, not a grid: the 1280px default left
   every expanded release with a readable text column on the left and a large
   dead margin on the right. glass.css reads --panel-max with a fallback, so
   declaring it here narrows the panel to fit the reading column. */
:root { --panel-max: 55rem; }
/* Release cards - colour-coded, collapsible (matches the v6.x changelog) */
.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: .5rem 0; background: rgba(255,255,255,0.04); }
.doc-sec > summary { cursor: pointer; font-size: 1.02rem; font-weight: 700; padding: .65rem .85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] { padding: 0 .9rem .6rem; }
.doc-sec[open] > summary { margin: 0 -.9rem .35rem; }
.doc-sec code { color: var(--accent); }
.doc-sec h3 { font-size: 1rem; margin: .7rem 0 .3rem; }
/* "Tempered" - named quality release; tempered-glass styling, set apart from numbered cards */
.doc-sec.tempered { background: linear-gradient(135deg, rgba(96,165,250,0.17), rgba(124,155,255,0.07) 55%, rgba(20,25,39,0.45)); border: 1px solid rgba(96,165,250,0.45); box-shadow: inset 0 0 0 1px rgba(158,197,255,0.10), 0 10px 34px rgba(20,40,90,0.40); }
.doc-sec.tempered > summary { color: #cfe0ff; font-size: 1.08rem; }
.doc-sec.tempered > summary::before { color: #60a5fa; }
.doc-sec.tempered .tg-badge { display: inline-block; font-size: .6rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #0a1030; background: linear-gradient(135deg, #bcd6ff, #60a5fa); padding: .1rem .45rem; border-radius: 999px; margin-left: .55rem; vertical-align: middle; }
/* Release-type colour coding - Fix / Feature / Update */
.doc-sec[data-kind] { border-left-width: 3px; border-left-style: solid; }
.doc-sec[data-kind="fix"]     { border-left-color: #e0913a; }  /* amber */
.doc-sec[data-kind="feature"] { border-left-color: #2ea36b; }  /* green */
.doc-sec[data-kind="update"]  { border-left-color: #3b82c4; }  /* blue  */
.doc-sec > summary { position: relative; }
.doc-sec[data-kind] > summary { padding-right: 5.4rem; }
.doc-sec[data-kind] > summary::after {
  position: absolute; right: .7rem; top: .6rem;
  font-size: var(--fs-3xs); font-weight: 800; letter-spacing: .07em; text-transform: uppercase;
  padding: .14rem .5rem; border-radius: 999px; color: #fff; line-height: 1.5;
}
.doc-sec[data-kind="fix"]     > summary::after { content: "Fix";     background: #c9781a; }
.doc-sec[data-kind="feature"] > summary::after { content: "Feature"; background: #1e8f5e; }
.doc-sec[data-kind="update"]  > summary::after { content: "Update";  background: #2f74b5; }
/* Tempered cards keep their own identity - never overridden by a type accent. */
.doc-sec.tempered[data-kind] { border-left-width: 1px; }
.doc-sec.tempered[data-kind] > summary { padding-right: .85rem; }
.doc-sec.tempered[data-kind] > summary::after { content: none; }
/* Legend */
.cl-legend { display: flex; gap: .7rem; flex-wrap: wrap; align-items: center; margin: .2rem 0 1.1rem; font-size: .74rem; }
.cl-legend .lbl { font-size: .66rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-soft); }
.cl-key { display: inline-flex; align-items: center; gap: .4rem; color: var(--ink-soft); }
.cl-key::before { content: ""; width: .7rem; height: .7rem; border-radius: 3px; }
.cl-key.fix::before     { background: #c9781a; }
.cl-key.feature::before { background: #1e8f5e; }
.cl-key.update::before  { background: #2f74b5; }
/* "Superseded by vX" pill - a release whose feature was later replaced */
.cl-super { display: inline-block; font-size: var(--fs-3xs); font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: #cbd2e0; background: rgba(120,132,158,0.26); border: 1px solid rgba(160,172,196,0.34); padding: .1rem .5rem; border-radius: 999px; margin-left: .5rem; vertical-align: middle; text-decoration: none; white-space: nowrap; }
.cl-super:hover { background: rgba(150,162,186,0.42); color: #fff; text-decoration: none; }
/* A superseded card shows the "Superseded by" pill inline instead of the type pill. */
.doc-sec.superseded[data-kind] > summary { padding-right: .85rem; }
.doc-sec.superseded[data-kind] > summary::after { content: none; }
.doc-sec.superseded { opacity: .82; }
/* Version navigation */
.changelog-nav { display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: baseline; margin: 1.6rem 0 0.4rem; padding-top: 0.85rem; border-top: 1px solid var(--glass-border); font-size: 0.8rem; opacity: 0.7; }
.changelog-nav strong { font-size: 0.68rem; font-weight: 600; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.05em; }
.changelog-nav a { color: var(--ink-soft); text-decoration: none; border-bottom: 1px dotted var(--ink-soft); padding-bottom: 1px; transition: color 0.15s, border-color 0.15s; }
.changelog-nav a:hover { color: var(--accent); border-bottom-color: var(--accent); text-decoration: none; }
.changelog-nav a.current { color: var(--ink); border-bottom-style: solid; }
.changelog-nav .latest-tag { font-size: var(--fs-3xs); font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.7; margin-left: 0.25rem; }
</style>

<p class="cl-legend"><span class="lbl">Release type</span><span class="cl-key fix">Fix</span><span class="cl-key feature">Feature</span><span class="cl-key update">Update</span></p>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.8.0: Threat Score (advisory)</summary>

*2026-05-29*

**Added**

- **Threat Score (advisory).** Each user now gets an at-a-glance risk score (Low / Elevated / High) shown in their profile (`/info` and the right-click **View Info** menu). It's transparent and explainable: a time-decayed weighted view of a user's infraction history (manual warnings count more than AutoMod hits; serious categories like scams/raids/slurs count more; old infractions fade), with a one-line summary of what's driving it. **Advisory only. It never takes any action.** It just helps staff *see* who's trending risky and decide. Score-driven moderation (with grace periods, soft-touch DM check-ins, server-defined thresholds) is a separate, later phase. Opt-in (slated premium), off by default: enable under `/settings → Behavior`.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.7.0: Bot Health Insurance</summary>

*2026-05-29*

**Added**

- **Bot Health Insurance.** The bot now watches its *own* footprint so it never quietly becomes the bot a server mutes. If its AutoMod activity looks heavy-handed over a week, it posts a single gentle check-in to staff chat with concrete ways to dial it back (gentler filter pack, softer ladder, trimming custom filters). **Read-only: it never changes settings on its own**, and it's self-limiting to at most once every 14 days. On by default; toggle under `/settings → Behavior`.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.6.0: Self-trained AutoMod</summary>

*2026-05-28*

**Added**

- **Self-trained AutoMod** (`/automod → Self-training`). The bot learns from *your* moderators, not just preset filters:
  - **Watches** the content of messages your staff delete or flag via Message Report (opt-in, stored locally for 30 days: message text only, no identities, nothing leaves the host)
  - **Learns** on demand. Once it has enough samples, the AI clusters the patterns and proposes server-specific AutoMod rules, each with a rationale and the examples it would catch
  - **You approve** each rule one at a time; accepted rules run through the same backtracking-safety guard as hand-written filters. **Nothing is ever auto-enforced**: they're suggestions until you accept them
  - Off by default; toggle on and clear the learning log any time
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v3.5.2: /vote now links to the correct directories</summary>

*2026-05-28*

**Fixed**

- **`/vote` now links to the correct directories.** The "Discord Bot List" link previously pointed at the support server by mistake; it now goes to the actual listing, with dedicated upvote buttons for both Top.gg and Discord Bot List. The newly-approved discord.bots.gg listing is included too.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v3.5.1: Pulse digests carry a gentle vote reminder</summary>

*2026-05-28*

**Changed**

- **Pulse digests carry an occasional gentle vote reminder**: at most once a week, the daily digest adds a single line noting that a quick `/vote` helps other communities discover Server Assistant. No extra posts, no nagging.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.5.0: Pulse: daily server-health digest</summary>

*2026-05-28*

**Added**

- **Pulse: daily server-health digest** (`/settings → Pulse`). Once a day at a time you choose, Pulse posts a one-embed summary to your staff chat:
  - 24-hour activity (messages, joins/leaves, AutoMod blocks, warnings) with **week-over-week deltas** vs your 7-day baseline
  - **Leading-indicator flags** when something's notable: *AutoMod activity is 2× the 7-day average*, or *join spike above the baseline but below the raid threshold*
  - **Read-only.** Pulse never auto-actions. Just gives staff x-ray vision so they decide what to do.
  - **On by default** for configured servers: posts to your staff chat at 09:00 server-local time. Toggle off, change the destination channel, or pick a different hour anytime in `/settings → Pulse`.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v3.4.2: Beta-period perk made explicit</summary>

*2026-05-21*

**Changed**

- **Beta-period perk made explicit across the site.** Servers that add Server Assistant *before* the premium tier launches receive **12 months of free premium access** from launch day. The welcome DM new owners receive now mentions this too: invite the bot now, lock in a year of premium for free.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.4: Notification Roles</summary>

*2026-05-20*

**Added**

- **Notification Roles** (`/settings → Notifications`). Pick which staff roles get @-pinged on three high-signal events:
  - Anti-raid alerts (mass-join detection)
  - Dangerous-action approval requests
  - AutoMod escalations (timeout / kick / ban)

  Up to 10 roles per event type. Leaving a selector empty makes that event silent. Existing behaviour preserved for anyone who doesn't change anything. AutoMod single-message blocks intentionally don't ping, to avoid channel noise.

**Fixed**

- **AutoMod now DMs the user when their message is removed.** Previously the message vanished silently with no explanation. The DM names which rule fired, shows the user's current warning count, and warns about escalation.
- **Duplicate response bug** where the bot occasionally replied twice to the same staff message.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.3: Weekly setup reminder</summary>

*2026-05-10*

**Added**

- **Weekly setup reminder**: if `/setup` hasn't been completed in your server, the bot DMs the server owner once every 7 days with a link to the setup guide. Falls back to the server's system channel if owner DMs are closed. Stops automatically once setup is complete.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v3.2: Directory stats sync, regex safety net & scheduling fix</summary>

*2026-05-10*

**Added**

- **Bot directory stats sync**: pushes live server count to [discordbotlist.com](https://discordbotlist.com/bots/server-assistant) and [Top.gg](https://top.gg/bot/1278486617375510570) every 30 minutes.

**Security**

- **AutoMod custom-regex safety net**: admin-supplied filter patterns are now rejected at add-time if they contain catastrophic-backtracking constructs (nested quantifiers, alternation-in-repeat, optional-in-repeat). Stops a single bad pattern from impacting the bot's responsiveness.

**Performance**

- Faster user-history search across multi-channel allowlists (channels scanned in parallel).

**Fixed**

- **`/schedule` reminders now actually fire.** A bug introduced in an earlier release silently prevented scheduled tasks from running. The user-facing commands (`schedule in 2 hours: ...`, `remind at 9am: ...`) and slash-command equivalents work as intended.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.2 launch: First-steps guide & public documentation site</summary>

*2026-05-10*

**Added**

- **First-steps guide**: after `/setup` completes, the bot auto-posts a 5-message walkthrough to your staff-chat covering core commands, slash commands, right-click menus, and `/settings`.
- **Right-click discoverability**: `/help`, the text `help` command, and the welcome DM now all surface the **Apps ▸ Server Assistant** context menus (View Info, View Warnings, Message Report).
- **`/vote`**: quick link to vote for the bot on Top.gg.
- **Public documentation site**: full Setup, Commands, Features, FAQ, Support, Privacy, Terms, and this Changelog page.

**Fixed**

- **Duplicate context-menu entries** in the Apps submenu.
- Natural-language command parsing: phrasings like `schedule in 3 days: check ...` now route correctly.

**Changed**

- Slash commands propagate to your server within seconds of an update, not the previous up-to-1-hour delay.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v3.1: Privacy Policy & Terms of Service</summary>

*2026-05-09*

**Added**

- **Privacy Policy** and **Terms of Service** documents, required for Discord verification submissions.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v3.0: The major rewrite</summary>

*2026-05-01*

The major rewrite. Server Assistant became a Discord bot for any community, not just one specific server.

**Added**

- **`/setup` wizard**: interactive 3-step config (channels, roles, AI provider).
- **`/settings` Customisation Hub**: 8 sub-wizards for branding, presets, behaviour, new-member features, verification, channel allowlist, role tiers, and notifications.
- **AI image generation** (`/imagine`): supports DALL·E 3, Stable Diffusion, and Pollinations.ai (free fallback).
- **Per-server branding**: embed colour, bot nickname, default timezone.
- **Punishment ladder presets**: Gentle / Standard / Strict.
- **AutoMod filter packs**: Off / Scams only / Scams + slurs / Strict.
- **Anti-raid sensitivity presets**: Off / Normal / Strict.
- **Onboarding template gallery**: Friendly / Gaming / Professional / Minimal / Custom.
- **DM verification gate**: button-based new-member verification.
- **Custom role tiers** beyond Owner / Admin / Moderator.
- Slash commands and right-click context menus.
</details>

<div class="changelog-nav">
  <strong>Browse by version</strong>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/" class="{% if page.permalink == '/changelog/' %}current{% endif %}">v6.x <span class="latest-tag">latest</span></a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v5/" class="{% if page.permalink == '/changelog/v5/' %}current{% endif %}">v5.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v4/" class="{% if page.permalink == '/changelog/v4/' %}current{% endif %}">v4.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v3/" class="{% if page.permalink == '/changelog/v3/' %}current{% endif %}">v3.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v2/" class="{% if page.permalink == '/changelog/v2/' %}current{% endif %}">v2.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v1/" class="{% if page.permalink == '/changelog/v1/' %}current{% endif %}">v1.x</a>
</div>

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
