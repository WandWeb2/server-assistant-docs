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

<p class="wiki-lead">The full reference for Server Assistant — <strong>every command, every setup wizard, and every automatic flow</strong>, each shown with a live mock-up of exactly what you'll see in Discord. Search above, or browse by area below.</p>

<div class="wiki-hub">

  <a class="card" href="{{ '/wiki/setup/' | relative_url }}">
    <h3>🚀 The /setup wizard</h3>
    <p>Walk through every screen of first-time setup — channels, roles, permissions and AI — one state at a time.</p>
  </a>

  <div class="card soon">
    <h3>🛡️ Moderation &amp; safety</h3>
    <p>Warnings, mutes, bans, lockdown, purge and the anti-raid toolkit — every command with its output.</p>
  </div>

  <div class="card soon">
    <h3>⚙️ Settings &amp; dashboards</h3>
    <p>The Settings hub, AutoMod, onboarding, tickets and every configuration panel.</p>
  </div>

  <div class="card soon">
    <h3>🤖 AI &amp; intelligence</h3>
    <p>SAi chat, image generation, translation, mediation and how AI tiers work.</p>
  </div>

  <div class="card soon">
    <h3>🎫 Tickets &amp; support</h3>
    <p>The ticket panel, intake questions and the full support flow.</p>
  </div>

  <div class="card soon">
    <h3>✨ Member experience</h3>
    <p>Welcome DMs, role panels, verification and the flows new members see.</p>
  </div>

  <div class="card soon">
    <h3>💎 Account &amp; premium</h3>
    <p>Premium status, billing, privacy controls and account commands.</p>
  </div>

</div>

> **This wiki is growing.** We're adding every command and flow area by area. Live sections are linked above and listed in the sidebar; the rest are on the way.

## How to read the examples

Every screen on this wiki is a faithful recreation of the real Discord interface — the same embeds, buttons and dropdowns you'll see in your server. Where a feature is a multi-step **wizard**, you'll find a step-through like the one on the [setup page]({{ '/wiki/setup/' | relative_url }}): use **Next ›** and **‹ Back** to walk each state.

Commands are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs Premium &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission &nbsp;·&nbsp;
<span class="cmd-tag ai">AI</span> uses AI tokens

<p style="margin-top:2rem;">New here? Start with <a href="{{ '/setup/' | relative_url }}">the quick setup guide</a>, then come back for the full reference.</p>
