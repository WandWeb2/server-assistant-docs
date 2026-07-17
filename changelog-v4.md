---
layout: default
title: Changelog - v4.x
permalink: /changelog/v4/
description: Server Assistant v4.x release history.
---

# Changelog: v4.x

The v4.x line: Server Assistant's AI-Moderation milestone.

**Tap a release to expand it.**

<style>
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
  font-size: .58rem; font-weight: 800; letter-spacing: .07em; text-transform: uppercase;
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
.cl-super { display: inline-block; font-size: .58rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: #cbd2e0; background: rgba(120,132,158,0.26); border: 1px solid rgba(160,172,196,0.34); padding: .1rem .5rem; border-radius: 999px; margin-left: .5rem; vertical-align: middle; text-decoration: none; white-space: nowrap; }
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
.changelog-nav .latest-tag { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.7; margin-left: 0.25rem; }
</style>

<p class="cl-legend"><span class="lbl">Release type</span><span class="cl-key fix">Fix</span><span class="cl-key feature">Feature</span><span class="cl-key update">Update</span></p>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v4.3.0: Support Channel + Dev Updates</summary>

*2026-05-31*

The way you get help, and the way I tell you about new releases, both get cleaner.

**Added**

- **`/support` slash command: now the only way to contact the maintainer.** No support server, no email, no GitHub issues for support. The flow is consent-based: running `/support` shows you an ephemeral info embed with two buttons: **Create a ticket** or **Never mind**. Tap *Create*, I'll DM you, and your next DM opens the ticket (15-minute window). Nothing leaves the channel without your tap.
- **Two-way ticket conversation via DM.** Once a ticket is open, the maintainer's replies arrive as a DM from Server Assistant. **Reply to the DM** to add a follow-up. Your message lands in the same ticket automatically. The bot reacts with a check-mark to confirm receipt. No more "please use this other channel" routing.
- **Image attachments on ticket DMs.** Send a screenshot to the bot: first DM (which opens the ticket) and follow-ups both support attachments. PNG, JPG, GIF, WEBP, up to 12 MB each, 10 per message.
- **Dev Updates opt-in.** New question in `/setup`: opt your server into Server Assistant development updates, posted as embeds to your staff chat when a release ships. Off by default. Toggle anytime via `/settings → Behaviour → Dev updates`.

**Changed**

- **Maintainer broadcast embeds are now red.** When the maintainer sends a notice into a staff chat, it's signed **"Server Assistant Dev"** with a red embed colour, and the footer makes clear that replies to that embed are NOT seen. To respond, open a `/support` ticket.
- **Documentation rewrite.** Every page on the docs site now routes support through `/support` only. The public web support form is closed. `SECURITY.md` also routes through `/support` (prefix your message with `[SECURITY]`).

**Removed**

- The Server Assistant support server is no longer the way to get help, replaced by the in-bot `/support` flow.
- The public web ticket form (and the docs-site form on the Support page) is closed.

**Fixed**

- **DMs to the bot without an open ticket** are now silently discarded: no confusing "use /support" auto-reply, no unintended reactions. The bot only engages on DMs from users with an active support thread.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v4.0.0: The AI-Moderation Update</summary>

*2026-05-29*

The milestone. Server Assistant's four flagship AI-moderation features are all live, and a **premium tier** arrives.

**Added**

- **Premium tier (per-server).** A real free/premium split, and the free tier stays genuinely generous: all core moderation, AutoMod, anti-raid, Pulse, Self-trained AutoMod, Bot Health Insurance, AI reports, and `/imagine`. Premium adds Threat Score, higher AI usage limits, and more to come.
- **`/premium`**: see your server's status and the full free-vs-premium breakdown.
- **Your beta perk, now concrete:** during the beta, premium is **free for every server**, and servers using the bot during the beta lock in **12 months of free premium** automatically when the paid tier launches. No card, no claim form.

**The v4.0 AI-moderation suite (read-only / advisory by design)**

- **Pulse**: daily server-health digest with trends + leading-indicator flags
- **Self-trained AutoMod**: learns from your moderators, proposes server-specific rules
- **Bot Health Insurance**: the bot watches its own footprint and suggests tuning before it gets noisy
- **Threat Score**: explainable per-user risk visibility for staff

Every one gives your team x-ray vision and leaves the decisions to you.
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
