---
layout: default
title: Server Assistant — AI Discord moderation bot with daily server-health digests
description: AI Discord moderation bot with Pulse daily server-health digests, smart AutoMod, anti-raid detection, AI-assisted reports, DM verification gate, image generation, and a 60-second setup wizard. Free for everyone during beta.
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
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://wandweb2.github.io/server-assistant-docs/",
  "image": "https://wandweb2.github.io/server-assistant-docs/assets/banner.jpeg",
  "author": { "@type": "Organization", "name": "WandWeb2" }
}
</script>

<style>
.cta-row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.5rem 0; }
.cta { display: inline-block; padding: .6rem 1.2rem; border-radius: 999px; font-weight: 700; text-decoration: none !important; transition: transform .15s, box-shadow .15s; }
.cta-primary { background: linear-gradient(135deg, #5865f2, #3498db); color: white !important; box-shadow: 0 4px 14px rgba(88,101,242,.35); }
.cta-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(88,101,242,.45); }
.cta-secondary { background: rgba(255,255,255,0.55); color: #2e3340 !important; border: 1px solid rgba(31,38,135,.18); }
.cta-secondary:hover { background: rgba(255,255,255,0.8); }

.beta-callout { margin: 1.5rem 0; padding: 1rem 1.25rem; background: rgba(241,196,15,.12); border-left: 4px solid #f1c40f; border-radius: 10px; }

.feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.25rem 0; }
.feat-card { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.15); border-radius: 14px; padding: 1rem 1.15rem; box-shadow: 0 4px 18px rgba(31,38,135,0.08); }
.feat-card h3 { margin: 0 0 .35rem; font-size: 1rem; }
.feat-card ul { margin: 0; padding-left: 1.1rem; font-size: .88rem; line-height: 1.5; color: #2e3340; }
.feat-card ul li { margin: .15rem 0; }
@media (max-width: 900px) { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .feat-grid { grid-template-columns: 1fr; } }

.ways-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; }
.way { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.15); border-radius: 14px; padding: 1rem 1.15rem; box-shadow: 0 4px 18px rgba(31,38,135,0.08); }
.way h3 { margin: 0 0 .35rem; font-size: .98rem; }
.way p { margin: 0; font-size: .88rem; line-height: 1.45; color: #2e3340; }
.way code { font-size: .82em; }
@media (max-width: 700px) { .ways-grid { grid-template-columns: 1fr; } }
</style>

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=1376267689287&scope=bot+applications.commands">➕ Invite to your server</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/setup/">📖 Setup guide</a>
  <a class="cta cta-secondary" href="https://top.gg/bot/1278486617375510570">👍 Vote on Top.gg</a>
</div>

<div class="beta-callout">
  <strong>🎁 Beta-period perk:</strong> servers added <em>before the premium tier launches</em> lock in <strong>12 months of free premium</strong> automatically — no card, no claim form. See the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">roadmap</a> for what's coming.
</div>

---

## What is Server Assistant?

A Discord moderation and automation bot built on three principles:

- **🛡️ Safety** — tiered approval (admins approve moderators; the owner approves admins). Nothing dangerous happens silently.
- **🔍 Transparency** — every action audit-logged with a colour-coded embed; users always told why.
- **🎨 Extensibility** — server owners customise everything from embed colour to the punishment ladder, no code needed.

## Quick links

<div class="feat-grid">
  <div class="feat-card"><h3>🚀 <a href="{{ site.url }}{{ site.baseurl }}/setup/">Setup</a></h3><ul><li>Add the bot in 60 seconds</li></ul></div>
  <div class="feat-card"><h3>📚 <a href="{{ site.url }}{{ site.baseurl }}/commands/">Commands</a></h3><ul><li>Full reference + permissions</li></ul></div>
  <div class="feat-card"><h3>✨ <a href="{{ site.url }}{{ site.baseurl }}/features/">Features</a></h3><ul><li>Deep dives on every feature</li></ul></div>
  <div class="feat-card"><h3>❓ <a href="{{ site.url }}{{ site.baseurl }}/faq/">FAQ</a></h3><ul><li>Common questions</li></ul></div>
  <div class="feat-card"><h3>📋 <a href="{{ site.url }}{{ site.baseurl }}/changelog/">Changelog</a></h3><ul><li>Release history</li></ul></div>
  <div class="feat-card"><h3>💬 <a href="{{ site.url }}{{ site.baseurl }}/support/">Support</a></h3><ul><li>Get help, report bugs</li></ul></div>
</div>

## What's in the box

<div class="feat-grid">
  <div class="feat-card">
    <h3>🩺 Pulse</h3>
    <ul>
      <li>Daily server-health digest to staff-chat</li>
      <li>Week-over-week deltas + early-warning flags</li>
      <li><em>No other mod bot does this</em></li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🧠 Self-trained AutoMod</h3>
    <ul>
      <li>Learns from your team's manual decisions</li>
      <li>Proposes server-specific rules for approval</li>
      <li>Never auto-enforces</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🛡️ Threat Score <small>(premium)</small></h3>
    <ul>
      <li>🟢 / 🟠 / 🔴 risk shown in user profiles</li>
      <li>Explainable + time-decayed</li>
      <li>Advisory only</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>⚙️ Full mod toolkit</h3>
    <ul>
      <li>warn / mute / kick / ban / softban / purge</li>
      <li>Tiered approval, 24h undo</li>
      <li>Role-based, customisable</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🤖 AutoMod + Anti-Raid</h3>
    <ul>
      <li>Curated filter packs + custom regex</li>
      <li>Configurable punishment ladder</li>
      <li>Mass-join detection + alerts</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🔐 DM Verification Gate</h3>
    <ul>
      <li>Button-based new-member verification</li>
      <li>Stops most automated raid bots</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🎨 AI Features</h3>
    <ul>
      <li><code>/imagine</code> — image gen (free Pollinations fallback)</li>
      <li>Right-click "Report Message" for an AI summary</li>
      <li>BYO xAI/OpenAI key, or use the host's</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>👋 New-Member Experience</h3>
    <ul>
      <li>Auto-onboarding DMs with placeholders</li>
      <li>Auto-role on join, welcome reaction emoji</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🎛️ Customisation Hub</h3>
    <ul>
      <li>Nine sub-wizards in <code>/settings</code></li>
      <li>Per-server branding, role tiers, notifications</li>
      <li>All changes save instantly</li>
    </ul>
  </div>
</div>

<img src="{{ '/assets/screenshots/pulse-digest.webp' | relative_url }}" alt="Pulse daily server-health digest" style="max-width: 540px; width: 100%; border-radius: 14px; box-shadow: 0 8px 32px rgba(31,38,135,0.12); margin: 1rem auto; display: block;">
<p style="font-size: 0.82rem; color: #6a7280; text-align: center; margin-top: -0.5rem;"><em>Pulse — example digest (illustrative figures)</em></p>

---

## Three ways to use the bot

<div class="ways-grid">
  <div class="way">
    <h3>⌨️ Slash commands — anywhere</h3>
    <p>Every moderation action works as a <code>/</code> command in any channel: <code>/warn</code>, <code>/mute</code>, <code>/kick</code>, <code>/ban</code>, <code>/purge</code>…</p>
  </div>
  <div class="way">
    <h3>💬 Text — in staff-chat</h3>
    <p>Natural-language shorthand in your staff-chat: <code>warn @user</code>, <code>mute @user 30 min</code>, <code>purge since 1pm</code>.</p>
  </div>
  <div class="way">
    <h3>🖱️ Right-click menus</h3>
    <p>Apps ▸ <strong>View Info</strong> / <strong>View Warnings</strong> on a user, or <strong>Report Message</strong> on a message for an AI context summary.</p>
  </div>
</div>

---

## 📸 See it in action

<style>
.sa-shots figure { margin: 0 0 2rem; }
.sa-shots img    { display: block; max-width: 100%; height: auto; border-radius: 14px; box-shadow: 0 8px 32px rgba(31,38,135,0.12); margin: 0 auto; }
.sa-shots figcaption { color: #6a7280; font-size: .88rem; text-align: center; margin-top: .55rem; }
.sa-shots .pair { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
.sa-shots .pair figure { flex: 1 1 360px; max-width: 480px; }
</style>

<div class="sa-shots" markdown="0">

<figure>
  <img src="{{ '/assets/screenshots/setup-wizard.webp' | relative_url }}" alt="The /setup wizard prompting for staff chat and log channel" loading="lazy">
  <figcaption><strong>60-second <code>/setup</code> wizard</strong> — channels, roles, AI provider.</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/screenshots/settings-hub.webp' | relative_url }}" alt="The /settings customisation hub" loading="lazy">
  <figcaption><strong>Customisation Hub</strong> — nine sub-wizards (branding, presets, behaviour, new-member, verification, channel allowlist, role tiers, notifications, Pulse).</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/screenshots/imagine-example.webp' | relative_url }}" alt="AI-generated image, output of /imagine" loading="lazy">
  <figcaption><strong><code>/imagine</code></strong> — DALL·E 3, Stable Diffusion, or free Pollinations fallback.</figcaption>
</figure>

<div class="pair">
  <figure>
    <img src="{{ '/assets/screenshots/report-menu.webp' | relative_url }}" alt="Right-click Apps menu showing Report Message" loading="lazy">
    <figcaption><strong>Right-click any message</strong> → Apps ▸ Server Assistant ▸ Report Message.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/screenshots/report-result.webp' | relative_url }}" alt="AI Moderation Report embed" loading="lazy">
    <figcaption><strong>AI Moderation Report</strong> — objective tone, possible rule-breaking, recommended action.</figcaption>
  </figure>
</div>

<div class="pair">
  <figure>
    <img src="{{ '/assets/screenshots/automod-log.webp' | relative_url }}" alt="AutoMod staff log embed" loading="lazy">
    <figcaption><strong>AutoMod is transparent</strong> — every action gets a structured embed in your log channel.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/screenshots/automod-user-dm.webp' | relative_url }}" alt="DM from AutoMod explaining which rule fired" loading="lazy">
    <figcaption><strong>Users always know why</strong> — DM with the rule, warning count, and escalation context.</figcaption>
  </figure>
</div>

</div>

---

<p style="text-align: center; color: #6a7280; font-size: .88rem;">
  Server Assistant · <a href="https://github.com/WandWeb2/server-assistant-docs">Docs & issues on GitHub</a> · Built with Discord.py
</p>
