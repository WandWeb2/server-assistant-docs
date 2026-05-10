---
layout: default
title: Server Assistant — Discord moderation bot with AI-assisted reports and customisable AutoMod
description: Multi-tenant Discord moderation bot with AI-assisted reports, customisable AutoMod, anti-raid detection, DM verification gate, AI image generation, and a 60-second setup wizard. Free for everyone.
image: /server-assistant-docs/assets/banner.jpeg
---

<div align="center">
  <picture>
    <source srcset="{{ '/assets/logo.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant logo" width="240" height="231" fetchpriority="high">
  </picture>

  <h1>Server Assistant</h1>

  <p><strong>Smart Discord moderation, AI-assisted reports, and customisation for any community.</strong></p>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Server Assistant",
  "applicationCategory": "Discord Bot",
  "operatingSystem": "Discord",
  "description": "Multi-tenant Discord moderation and automation bot with AI-assisted moderation reports, customisable AutoMod with custom regex and ReDoS guard, anti-raid detection, DM-button verification gate, and AI image generation.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://wandweb2.github.io/server-assistant-docs/",
  "image": "https://wandweb2.github.io/server-assistant-docs/assets/banner.jpeg",
  "author": {
    "@type": "Organization",
    "name": "WandWeb2"
  }
}
</script>

---

## What is Server Assistant?

**Server Assistant** is a **multi-tenant Discord moderation and automation bot**. Each server gets its own isolated configuration — warnings, notes, AutoMod rules, and settings stay scoped to that guild. Built around three principles: **safety** (dangerous actions require Owner approval), **transparency** (every action logged with full audit trail), and **extensibility** (server owners customise everything from embed colours to punishment ladders without code).

## Quick links

<table>
<tr>
<td>🚀 <a href="{{ site.url }}{{ site.baseurl }}/setup/"><b>Setup Guide</b></a><br>Add the bot in 60 seconds</td>
<td>📚 <a href="{{ site.url }}{{ site.baseurl }}/commands/"><b>Commands</b></a><br>Full reference</td>
</tr>
<tr>
<td>✨ <a href="{{ site.url }}{{ site.baseurl }}/features/"><b>Features</b></a><br>AutoMod, AI, verification, more</td>
<td>❓ <a href="{{ site.url }}{{ site.baseurl }}/faq/"><b>FAQ</b></a><br>Common questions</td>
</tr>
<tr>
<td>💬 <a href="{{ site.url }}{{ site.baseurl }}/support/"><b>Get Help</b></a><br>Support server, bug reports</td>
<td>📋 <a href="{{ site.url }}{{ site.baseurl }}/changelog/"><b>Changelog</b></a><br>Release history and patch notes</td>
</tr>
<tr>
<td colspan="2">🔐 <a href="{{ site.url }}{{ site.baseurl }}/privacy/"><b>Privacy</b></a> · <a href="{{ site.url }}{{ site.baseurl }}/terms/"><b>Terms</b></a></td>
</tr>
</table>

## Add to your Discord server

<p align="center">
  <a href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=1376267689287&scope=bot+applications.commands"><strong>➕ Invite Server Assistant to your server</strong></a>
</p>

You'll need **Manage Server** permission. Authorise the requested permissions, then run `/setup` as the server owner — full walkthrough in the [Setup Guide]({{ site.url }}{{ site.baseurl }}/setup/).

*Pre-verification direct invite — Server Assistant is awaiting Discord's bot verification (75-server threshold) before it can list on the [Discord App Directory](https://discord.com/application-directory) and major bot directories.*

## Features at a glance

### 🛡️ Moderation
- **Role-based actions** — Owner / Admin / Moderator tiers with optional custom roles
- **Persistent warnings** with DM notifications and full history
- **Private staff notes** invisible to users
- **Soft-ban**, **timeout**, **purge** with time-based filters (`purge since 1pm`)
- **Undo system** — reverses bans, mutes, channel deletions within 24h

### 🤖 AutoMod & Anti-Raid
- **Curated filter packs** — Off / Scams only / Scams + slurs (gaming) / Strict
- **Custom regex** + **link blocklists**
- **Configurable punishment ladder** — Gentle / Standard / Strict presets
- **Anti-raid detection** with mass-join alerts and Owner ping
- **DM-button verification gate** — close the door on automated raids

### 🎨 AI Features
- **`/imagine`** — AI image generation (DALL·E 3 / Stable Diffusion / free Pollinations.ai fallback)
- **AI moderation reports** — right-click any message for an objective summary of recent context
- **BYO API keys** for xAI Grok or OpenAI, or use the host's shared key

### 👋 New-Member Experience
- Auto-onboarding DMs with placeholder substitution (`[user]`, `[servername]`, etc.)
- Auto-role on join + welcome reaction emoji

### 🎨 Customisation Hub (`/settings`)
- Per-server **embed colour**, **bot nickname**, **default timezone**
- **Quick presets** for AutoMod, ladder, onboarding template, anti-raid sensitivity
- **Channel allowlist** to restrict where the bot responds
- **Custom role tiers** beyond the default three

### 🔐 Privacy & Security

All API keys and tokens stored **encrypted at rest** (Fernet / AES-128). Per-guild data isolation — no cross-server leaks.

---

## Three ways to use the bot

1. **Type commands** in your staff-chat channel — `warn @user`, `mute @user 30 min`, `purge since 1pm`...
2. **Slash commands** — type `/` to access `/setup`, `/settings`, `/imagine`, `/info` and more.
3. **Right-click menus** — right-click any user or message → hover **Apps ▸** for **View Info**, **View Warnings**, and AI-powered **Report Message**.

---

*Server Assistant • [GitHub](https://github.com/WandWeb2/server-assistant) • Built with Discord.py*
