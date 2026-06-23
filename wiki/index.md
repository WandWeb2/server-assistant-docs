---
layout: wiki
title: Server Assistant Wiki
permalink: /wiki/
wiki: true
wiki_category: Getting started
summary: The complete Server Assistant reference — every command, every wizard, and every flow, with live examples of what you'll see in Discord.
wiki_keywords: [wiki, reference, commands, guide, help, documentation, examples]
description: The complete Server Assistant reference — every command, wizard and flow, each shown with a live example of what you'll see in Discord.
---

<style>
.wiki-hub { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; margin: 1.6rem 0; }
.wiki-hub .card { display: block; padding: 1.1rem 1.2rem; border-radius: var(--r-md); border: 1px solid var(--border); background: var(--surface); text-decoration: none; transition: transform .12s, border-color .12s, background .12s; }
.wiki-hub a.card:hover { transform: translateY(-2px); border-color: var(--accent); background: var(--surface-2); }
.wiki-hub .card h3 { margin: 0 0 .3rem; font-size: 1.04rem; color: var(--fg-0); display: flex; align-items: center; gap: .5rem; }
.wiki-hub .card p { margin: 0; color: var(--fg-1); font-size: .88rem; line-height: 1.5; }
.wiki-hub .card.soon { opacity: .62; }
.wiki-hub .card.soon h3::after { content: "Coming soon"; margin-left: auto; font-size: .58rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: var(--fg-2); background: var(--surface-2); padding: .12rem .4rem; border-radius: 5px; }
.wiki-lead { color: var(--fg-1); font-size: 1.02rem; line-height: 1.6; max-width: 62ch; }
</style>

# 📖 Server Assistant Wiki

<p class="wiki-lead">The full reference for Server Assistant — <strong>every feature, command, wizard and flow</strong>, each shown with a live mock-up of exactly what you'll see in Discord. Search above, or browse below.</p>

## Start here

<div class="wiki-hub">

  <a class="card" href="{{ '/wiki/features/' | relative_url }}">
    <h3>🌟 Main features</h3>
    <p>A guided tour of everything the bot does — what each feature is, how to switch it on, and where to read more.</p>
  </a>

  <a class="card" href="{{ '/wiki/setup/' | relative_url }}">
    <h3>🚀 Setup</h3>
    <p>Configured in about a minute — a quick-start flow, then every screen of the <code>/setup</code> wizard, one state at a time.</p>
  </a>

</div>

## Browse by area

<div class="wiki-hub">

  <a class="card" href="{{ '/wiki/moderation/' | relative_url }}">
    <h3>🛡️ Moderation &amp; safety</h3>
    <p>Warnings, mutes, bans, lockdown, purge and the anti-raid toolkit — every command with its output.</p>
  </a>

  <a class="card" href="{{ '/wiki/settings/' | relative_url }}">
    <h3>⚙️ Settings &amp; dashboards</h3>
    <p>The Settings hub, autopilot, onboarding, schedules, privacy and every configuration panel.</p>
  </a>

  <a class="card" href="{{ '/wiki/automod/' | relative_url }}">
    <h3>🧹 AutoMod</h3>
    <p>AI review, self-training, filters, link blocklists and the punishment ladder — the full AutoMod dashboard.</p>
  </a>

  <a class="card" href="{{ '/wiki/ai/' | relative_url }}">
    <h3>🤖 AI &amp; intelligence</h3>
    <p>SAi concierge chat, image generation, translation, mediation, retrospectives and stats.</p>
  </a>

  <a class="card" href="{{ '/wiki/tickets/' | relative_url }}">
    <h3>🎫 Tickets &amp; support</h3>
    <p>The ticket panel, intake questions, the FAQ and the full support flow.</p>
  </a>

  <a class="card" href="{{ '/wiki/members/' | relative_url }}">
    <h3>✨ Member experience</h3>
    <p>Welcome DMs, verification, ban appeals, role panels and custom commands.</p>
  </a>

  <a class="card" href="{{ '/wiki/account/' | relative_url }}">
    <h3>💎 Account &amp; premium</h3>
    <p>Premium status, billing, backups, white-label branding and account commands.</p>
  </a>

</div>

## Feature deep-dives

<div class="wiki-hub">

  <a class="card" href="{{ '/wiki/pulse/' | relative_url }}">
    <h3>🩺 Pulse</h3>
    <p>Read-only whole-server health digests, posted to your staff channel on the cadence you choose.</p>
  </a>

  <a class="card" href="{{ '/wiki/ban-appeals/' | relative_url }}">
    <h3>📩 Ban appeals</h3>
    <p>The DM-the-reason, one-reply staff appeal ticket flow — Unban / Deny / Research, and Premium multi-round.</p>
  </a>

  <a class="card" href="{{ '/wiki/audit-log/' | relative_url }}">
    <h3>📜 Audit log</h3>
    <p>The tamper-proof record of every moderation action, and how to set your log channel.</p>
  </a>

  <a class="card" href="{{ '/wiki/altguard/' | relative_url }}">
    <h3>🕵️ Alt / ban-evasion</h3>
    <p>Catches someone you banned coming back on a new account — local to your server, distinct from ThreatNet.</p>
  </a>

  <a class="card" href="{{ '/wiki/anti-nuke/' | relative_url }}">
    <h3>🛡️ Anti-nuke / rogue-admin</h3>
    <p>Stops a server nuke or compromised admin — auto-quarantine with one-tap revert, exact permission restore, and a trusted-actor whitelist.</p>
  </a>

  <a class="card" href="{{ '/wiki/threatnet/' | relative_url }}">
    <h3>🌐 ThreatNet</h3>
    <p>The cross-server safety network — advisory band, Premium auto-protect, what's shared, and how to opt out.</p>
  </a>

</div>

## How to read the examples

Every screen on this wiki is a faithful recreation of the real Discord interface — the same embeds, buttons and dropdowns you'll see in your server. Where a feature is a multi-step **wizard**, you'll find a step-through like the one on the [setup page]({{ '/wiki/setup/' | relative_url }}): use **Next ›** and **‹ Back** to walk each state.

Commands are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs Premium &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission &nbsp;·&nbsp;
<span class="cmd-tag ai">AI</span> uses AI tokens

<p style="margin-top:2rem;">New here? Start with <a href="{{ '/wiki/features/' | relative_url }}">Main features</a> for the tour, or jump straight into <a href="{{ '/wiki/setup/' | relative_url }}">Setup</a>.</p>
