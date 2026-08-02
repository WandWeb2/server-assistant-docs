---
layout: wiki
title: Server Assistant Wiki
permalink: /wiki/
wiki: true
wiki_category: "Getting Started"
summary: The complete Server Assistant reference, every command, every wizard, and every flow, with live examples of what you'll see in Discord.
wiki_keywords: [wiki, reference, commands, guide, help, documentation, examples]
description: The complete Server Assistant reference, every command, wizard and flow, each shown with a live example of what you'll see in Discord.
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

# Server Assistant Wiki

<p class="wiki-lead">Every <strong>feature, command and wizard</strong>, each shown as a live mock-up of what you'll see in Discord. Search above, or browse below.</p>

## Start here

<div class="wiki-hub">

  <a class="card" href="{{ '/wiki/features/' | relative_url }}">
    <h3 id="hub-features">Main features</h3>
    <p>Every feature: what it does, how to switch it on, where to read more.</p>
  </a>

  <a class="card" href="{{ '/wiki/setup/' | relative_url }}">
    <h3 id="hub-setup">Setup</h3>
    <p>Get configured in about a minute, then every screen of the <code>/setup</code> wizard, one state at a time.</p>
  </a>

  <a class="card" href="{{ '/wiki/commands/' | relative_url }}">
    <h3 id="hub-commands">All commands</h3>
    <p>Every slash command and right-click menu, grouped by area.</p>
  </a>

</div>

## Browse by area

<div class="wiki-hub">

  <a class="card" href="{{ '/wiki/moderation/' | relative_url }}">
    <h3 id="hub-moderation">Moderation &amp; safety</h3>
    <p>Warnings, mutes, bans, lockdown, purge and the anti-raid toolkit.</p>
  </a>

  <a class="card" href="{{ '/wiki/settings/' | relative_url }}">
    <h3 id="hub-settings">Settings &amp; dashboards</h3>
    <p>The Settings hub, autopilot, onboarding, schedules, privacy and every configuration panel.</p>
  </a>

  <a class="card" href="{{ '/wiki/automod/' | relative_url }}">
    <h3 id="hub-automod">AutoMod</h3>
    <p>AI review, self-training, filters, link blocklists and the punishment ladder.</p>
  </a>

  <a class="card" href="{{ '/wiki/ai/' | relative_url }}">
    <h3 id="hub-ai">AI &amp; intelligence</h3>
    <p>SAi concierge chat, image generation, translation, mediation, retrospectives and stats.</p>
  </a>

  <a class="card" href="{{ '/wiki/tickets/' | relative_url }}">
    <h3 id="hub-tickets">Tickets &amp; support</h3>
    <p>The ticket panel, intake questions, the FAQ and the support flow.</p>
  </a>

  <a class="card" href="{{ '/wiki/members/' | relative_url }}">
    <h3 id="hub-members">Member experience</h3>
    <p>Welcome DMs, verification, ban appeals, role panels and custom commands.</p>
  </a>

  <a class="card" href="{{ '/wiki/account/' | relative_url }}">
    <h3 id="hub-account">Account &amp; premium</h3>
    <p>Premium status, billing, backups, white-label branding and account commands.</p>
  </a>

</div>

## Feature deep-dives

<div class="wiki-hub">

  <a class="card" href="{{ '/wiki/pulse/' | relative_url }}">
    <h3 id="hub-pulse">Pulse</h3>
    <p>Read-only whole-server health digests, in the portal and DM'd on your own cadence.</p>
  </a>

  <a class="card" href="{{ '/wiki/ban-appeals/' | relative_url }}">
    <h3 id="hub-ban-appeals">Ban appeals</h3>
    <p>DM-the-reason, one-reply staff appeal tickets: Unban / Deny / Research, plus Premium multi-round.</p>
  </a>

  <a class="card" href="{{ '/wiki/audit-log/' | relative_url }}">
    <h3 id="hub-audit-log">Audit log</h3>
    <p>A tamper-proof record of every moderation action, and how to set your log channel.</p>
  </a>

  <a class="card" href="{{ '/wiki/altguard/' | relative_url }}">
    <h3 id="hub-altguard">Alt / ban-evasion</h3>
    <p>Catches someone you banned returning on a new account. Local to your server, distinct from ThreatNet.</p>
  </a>

  <a class="card" href="{{ '/wiki/anti-nuke/' | relative_url }}">
    <h3 id="hub-anti-nuke">Anti-nuke / rogue-admin</h3>
    <p>Stops a server nuke or compromised admin: auto-quarantine with one-tap revert, exact permission restore, trusted-actor whitelist.</p>
  </a>

  <a class="card" href="{{ '/wiki/threatnet/' | relative_url }}">
    <h3 id="hub-threatnet">ThreatNet</h3>
    <p>The cross-server safety network: advisory band, scam-image defense, Premium auto-protect, what's shared, how to opt out.</p>
  </a>

  <a class="card" href="{{ '/wiki/minecraft/' | relative_url }}">
    <h3 id="hub-minecraft">Minecraft bridge</h3>
    <p>Two-way chat with your Paper/Spigot server, server health, moderation from Discord, account linking, playtime XP, rank sync and in-game <code>@sai</code>.</p>
  </a>

  <a class="card" href="{{ '/wiki/leveling/' | relative_url }}">
    <h3 id="hub-leveling">XP &amp; leveling</h3>
    <p>Members earn XP just by taking part, in chat, in voice and on a linked Minecraft server: levels, the <code>/rank</code> card, the leaderboard and level-up announcements.</p>
  </a>

  <a class="card" href="{{ '/wiki/crestbound/' | relative_url }}">
    <h3 id="hub-crestbound">Crestbound</h3>
    <p>The Crest-collecting game in the portal: spend earned XP on booster packs, complete the Chapter, burn spares back into XP.</p>
  </a>

  <a class="card" href="{{ '/wiki/emotes/' | relative_url }}">
    <h3 id="hub-emotes">Emote commands</h3>
    <p>React with the perfect GIF: <code>/emote</code>, <code>/cry</code>, <code>/hug</code>, <code>/dance</code> and more, plus <code>/meme</code>.</p>
  </a>

  <a class="card" href="{{ '/wiki/roll/' | relative_url }}">
    <h3 id="hub-roll">Group rolls</h3>
    <p>Settle giveaways and loot with <code>/roll</code>: a timed Need / Greed / Pass roll, highest wins, WoW-style.</p>
  </a>

</div>

## Changelogs

<div class="wiki-hub">

  <a class="card" href="{{ '/changelog/' | relative_url }}">
    <h3 id="hub-changelog-bot">SA Bot changelog</h3>
    <p>Release history for the bot, version by version.</p>
  </a>

  <a class="card" href="{{ '/wiki/changelog-portal/' | relative_url }}">
    <h3 id="hub-changelog-portal">Portal changelog</h3>
    <p>What's changed in the web portal.</p>
  </a>

  <a class="card" href="{{ '/wiki/changelog-crestbound/' | relative_url }}">
    <h3 id="hub-changelog-crestbound">Crestbound changelog</h3>
    <p>Release notes for the Crest-collecting game.</p>
  </a>

</div>

## How to read the examples

Every screen here recreates the real Discord interface: the same embeds, buttons and dropdowns you'll see in your server. Multi-step **wizards** (like the [setup page]({{ '/wiki/setup/' | relative_url }})) have a step-through, use **Next ›** and **‹ Back** to walk each state.

Commands are tagged:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs Premium &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission &nbsp;·&nbsp;
<span class="cmd-tag ai">AI</span> uses AI tokens

<p style="margin-top:2rem;">New here? Start with <a href="{{ '/wiki/features/' | relative_url }}">Main features</a> for the tour, or jump straight into <a href="{{ '/wiki/setup/' | relative_url }}">Setup</a>.</p>
