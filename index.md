---
layout: default
title: Server Assistant — AI Discord moderation bot with daily server-health digests
description: AI Discord moderation bot with Pulse daily server-health digests, smart AutoMod, anti-raid detection, AI-assisted reports, DM verification gate, image generation, and a 60-second setup wizard. Free for everyone.
image: /server-assistant-docs/assets/banner.jpeg
---

<div align="center">
  <picture>
    <source srcset="{{ '/assets/logo.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant logo" width="240" height="231" fetchpriority="high">
  </picture>

  <h1>Server Assistant</h1>

  <p><strong>AI moderation that gives your staff x-ray vision into server health.</strong></p>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Server Assistant",
  "applicationCategory": "Discord Bot",
  "operatingSystem": "Discord",
  "description": "AI Discord moderation and automation bot with Pulse daily server-health digests, AI-assisted moderation reports, customisable AutoMod with custom regex and ReDoS guard, anti-raid detection, DM-button verification gate, and AI image generation.",
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

**Server Assistant** is a Discord moderation and automation bot built around three principles: **safety** (dangerous actions require Owner approval), **transparency** (every action logged with a full audit trail), and **extensibility** (server owners customise everything from embed colours to punishment ladders without code).

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
  &nbsp;·&nbsp;
  <a href="https://top.gg/bot/1278486617375510570"><strong>👍 Vote on Top.gg</strong></a>
</p>

You'll need **Manage Server** permission. Authorise the requested permissions, then run `/setup` as the server owner — full walkthrough in the [Setup Guide]({{ site.url }}{{ site.baseurl }}/setup/).

*Now listed on [Top.gg](https://top.gg/bot/1278486617375510570) and [discordbotlist.com](https://discordbotlist.com/bots/server-assistant). Discord App Directory listing follows once the bot reaches Discord's 75-server verification threshold.*

<div style="margin: 1.5rem 0; padding: 1rem 1.25rem; background: #fff7e6; border-left: 4px solid #f1c40f; border-radius: 6px;">
  <strong>🎁 Beta-period perk:</strong> servers that add Server Assistant <em>before the premium tier launches</em> receive <strong>12 months of free premium access</strong> from launch day. Use the bot now → keep premium free for a year. No card, no claim form — if you're a beta server, you're in automatically. See the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">Roadmap</a> for what's coming.
</div>

## Features at a glance

### 🩺 Pulse — daily server-health analyst
- **Once-a-day health digest** posted to your staff chat: messages, joins/leaves, AutoMod blocks, warnings — each with a **week-over-week delta** vs your 7-day baseline
- **Leading-indicator flags** — catches an AutoMod spike or a sub-raid "quiet flood" join pattern before it becomes a problem
- **Read-only** — Pulse never auto-actions; it just gives your team x-ray vision. *No other moderation bot does this.*

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

## 📸 See it in action

<style>
.sa-shots figure { margin: 0 0 2rem; }
.sa-shots img    { display: block; max-width: 100%; height: auto; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,.15); margin: 0 auto; }
.sa-shots figcaption { color: #828282; font-size: .9rem; text-align: center; margin-top: .4rem; }
.sa-shots .pair { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
.sa-shots .pair figure { flex: 1 1 360px; max-width: 480px; }
</style>

<div class="sa-shots" markdown="0">

<figure>
  <img src="{{ '/assets/screenshots/setup-wizard.webp' | relative_url }}" alt="The /setup wizard prompting for staff chat and log channel" loading="lazy">
  <figcaption><strong>60-second <code>/setup</code> wizard</strong> — pick channels, pick roles, pick AI provider.</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/screenshots/settings-hub.webp' | relative_url }}" alt="The /settings hub showing seven sub-wizards" loading="lazy">
  <figcaption><strong>Customisation Hub</strong> — 7 sub-wizards covering branding, presets, behaviour, new-member, verification, channel allowlist, and role tiers.</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/screenshots/imagine-example.webp' | relative_url }}" alt="AI-generated image of a cat in a hat fishing, output of /imagine" loading="lazy">
  <figcaption><strong>AI image generation with <code>/imagine</code></strong> — DALL·E 3, Stable Diffusion, or the free Pollinations.ai fallback (no API key required).</figcaption>
</figure>

<div class="pair">
  <figure>
    <img src="{{ '/assets/screenshots/report-menu.webp' | relative_url }}" alt="Discord right-click context menu showing Apps → Server Assistant → Report Message" loading="lazy">
    <figcaption><strong>Right-click any message</strong> → <strong>Apps ▸ Server Assistant ▸ Report Message</strong>.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/screenshots/report-result.webp' | relative_url }}" alt="AI Moderation Report embed summarising tone and recommended action" loading="lazy">
    <figcaption><strong>The bot replies with an AI Moderation Report</strong> — objective tone, rule-breaking call-outs, recommended action.</figcaption>
  </figure>
</div>

<div class="pair">
  <figure>
    <img src="{{ '/assets/screenshots/automod-log.webp' | relative_url }}" alt="AutoMod staff log embed showing a removed message and user warning count" loading="lazy">
    <figcaption><strong>AutoMod is transparent</strong> — every action posts a structured embed to your staff log channel.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/screenshots/automod-user-dm.webp' | relative_url }}" alt="DM that AutoMod sends the user explaining which rule fired" loading="lazy">
    <figcaption><strong>Users always know why</strong> — the bot DMs them with the rule name, warning count, and escalation policy.</figcaption>
  </figure>
</div>

</div>

---

## Three ways to use the bot

1. **Type commands** in your staff-chat channel — `warn @user`, `mute @user 30 min`, `purge since 1pm`...
2. **Slash commands** — type `/` to access `/setup`, `/settings`, `/imagine`, `/info` and more.
3. **Right-click menus** — right-click any user or message → hover **Apps ▸** for **View Info**, **View Warnings**, and AI-powered **Report Message**.

---

*Server Assistant • [GitHub](https://github.com/WandWeb2/server-assistant) • Built with Discord.py*
