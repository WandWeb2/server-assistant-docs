---
layout: default
title: Setup
permalink: /setup/
description: Add Server Assistant to your Discord server in under a minute.
---

# 🚀 Setup Guide

Adding **Server Assistant** takes about 60 seconds — the wizard does the rest.

> ⚠️ Only the **Discord-native server owner** can run `/setup` — a hard safety check so admins can't escalate their own permissions.

> 🌐 **Prefer the web?** Owners can also finish setup from the **[web portal](https://serverassistant.wandweb.co)** — pick your channels, roles and AI in a browser and the bot configures everything. Run `/portal` for a private link.

<style>
.steps { display: grid; gap: 1rem; margin: 1.2rem 0 1.6rem; }
.step { display: grid; grid-template-columns: 56px 1fr; gap: 1rem; align-items: start; background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 14px; padding: 1.1rem 1.2rem; }
.step-n { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #5865f2, #3498db); color: white; font-weight: 700; font-size: 1.25rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-body h3 { margin: 0 0 .35rem; font-size: 1.1rem; color: var(--ink); }
.step-body p { margin: 0 0 .5rem; font-size: .93rem; line-height: 1.5; color: var(--ink-soft); }
.step-body p:last-child { margin-bottom: 0; }
.step-body ul { margin: .35rem 0 .25rem 1.1rem; padding: 0; font-size: .9rem; line-height: 1.5; color: var(--ink-soft); }
.step-body code { color: var(--accent); }
.invite-cta { display: inline-block; background: linear-gradient(135deg, #5865f2, #3498db); color: white !important; padding: .55rem 1.1rem; border-radius: 999px; font-weight: 700; text-decoration: none !important; margin: .3rem 0; box-shadow: 0 4px 14px rgba(88,101,242,.35); }
.invite-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(88,101,242,.45); }
@media (max-width: 600px) { .step { grid-template-columns: 1fr; } .step-n { margin-bottom: .35rem; } }
/* Steps on the left (~4/7), the wizard screenshot pinned to the right (~3/7) */
.setup-layout { display: grid; grid-template-columns: 4fr 3fr; gap: 1.5rem; align-items: start; margin: 1.2rem 0 1.6rem; }
.setup-layout .steps { margin: 0; }
.setup-layout .setup-shot { margin: 0; max-width: none; position: sticky; top: 80px; }
.setup-layout .setup-shot figcaption { font-size: .8rem; }
@media (max-width: 760px) { .setup-layout { grid-template-columns: 1fr; } .setup-layout .setup-shot { position: static; } }
</style>

<div class="setup-layout">
<div class="steps">

  <div class="step"><div class="step-n">1</div>
    <div class="step-body">
      <h3>Invite the bot</h3>
      <p>You'll need <strong>Manage Server</strong> on the target guild. <strong>Don't uncheck any OAuth permissions</strong> — ban/kick/auto-role rely on them.</p>
      <p><a class="invite-cta" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands">➕ Invite Server Assistant</a></p>
      <p style="font-size:.83rem; color:#9aa3b6;">Also on <a href="https://top.gg/bot/1278486617375510570">Top.gg</a> and <a href="https://discordbotlist.com/bots/server-assistant">discordbotlist.com</a>. Slash commands take up to 1 hour to propagate the first time.</p>
    </div>
  </div>

  <div class="step"><div class="step-n" style="font-size:.95rem; background:linear-gradient(135deg,#1e8449,#2ecc71);">1.5</div>
    <div class="step-body">
      <h3>💬 …or skip <code>/setup</code> entirely</h3>
      <p>You might not even need step 2: when the bot joins it <strong>DMs the owner the full setup wizard</strong>, pre-filled by auto-detection — finish it in under a minute. Prefer one command? <code>/autopilot</code> applies a sensible config in one step. (Falls back to a staff channel if DMs are closed.)</p>
    </div>
  </div>

  <div class="step"><div class="step-n">2</div>
    <div class="step-body">
      <h3>Run <code>/setup</code> — the wizard does the rest</h3>
      <p>The bot <strong>auto-detects</strong> sensible channels and roles, so most of the wizard is just confirming — and if it's missing a permission, it shows a <strong>one-click fix-it screen first</strong> rather than looking set up while quietly not working.</p>
      <ul>
        <li><strong>① Channels</strong> — pick (or let it create) a staff-chat and a log channel.</li>
        <li><strong>② Roles</strong> — map your roles to <strong>Owner / Admin / Moderator</strong> tiers (pre-filled).</li>
        <li><strong>③ Server type + AI</strong> — pick your community (🎮 Gaming · 🎨 Creator · 🌸 Anime · 💰 Crypto · 📚 Education · 🔞 NSFW · 🌐 General) to tune AutoMod, the ladder &amp; anti-raid, then choose your AI: host's key, your own, or skip.</li>
      </ul>
      <p>Hit <strong>Finish</strong> — the bot saves, applies your tuning, and posts a short walkthrough to staff-chat.</p>
    </div>
  </div>

  <div class="step"><div class="step-n">3</div>
    <div class="step-body">
      <h3>Customise — <code>/settings</code> (optional, recommended)</h3>
      <p>Nine sub-wizards. Everything saves instantly.</p>
      <ul>
        <li>🎨 <strong>Branding</strong> · embed colour, nickname, timezone</li>
        <li>⚡ <strong>Quick Presets</strong> · AutoMod / ladder / onboarding / anti-raid bundles</li>
        <li>🛡️ <strong>Behaviour</strong> · approval timeout, log verbosity, self-checks, Threat Score</li>
        <li>👋 <strong>New Members</strong> · auto-role, welcome reaction emoji</li>
        <li>🔐 <strong>Verification</strong> · DM-button gate for raid protection</li>
        <li>📍 <strong>Channel allowlist</strong> · where the bot responds to mentions</li>
        <li>🛂 <strong>Role Tiers</strong> · custom tiers + approval authority</li>
        <li>🔔 <strong>Notifications</strong> · per-event role pings</li>
        <li>🩺 <strong>Pulse</strong> · daily health digest channel + time + on/off</li>
      </ul>
    </div>
  </div>

</div>

<div class="setup-shot">
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/setup · step 2 of 3</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🧭 Setup — Server type + AI</div>
          <div class="dc-desc">Tune moderation to fit your community — we pre-selected a best guess from your server's name.</div>
          <div class="dc-fname">Server type</div><div class="dc-fval">🎮 Gaming — anti-scam AutoMod · standard ladder · tighter anti-raid</div>
          <div class="dc-fname">AI provider</div><div class="dc-fval">🆓 Host's shared key · 150K-token free trial</div>
          <div class="dc-foot">Change anything later in /settings</div>
          <div class="dc-btns"><span class="dc-btn grey">← Back</span><span class="dc-btn green">Finish ✓</span></div>
        </div>
      </div>
    </div>
  </div>
  <div style="font-size:.8rem;color:#aab2c5;text-align:center;margin-top:.5rem;">Channels · roles · server type + AI.</div>
</div>

</div>

---

## ✅ Recommended quick wins

- **`/onboarding`** — set your welcome DM
- **`/automod`** → enable **Scams + slurs (gaming)** preset
- **`/timezone`** — set yours (used by `/schedule` and `purge since …`)
- Tell your staff to type **`help`** in staff-chat for the full command list
- Right-click a **user** → **Apps ▸ Server Assistant** → **View Info / View Warnings**
- Right-click a **message** → **Apps ▸ Server Assistant** → **Message Report** for an AI context summary

---

## 🔁 Re-running setup

Need different channels/roles? Run `/setup` again — it overwrites the mapping but **preserves warnings, notes, snippets, and audit logs**. For a full reset, open a ticket via [`/support`]({{ site.url }}{{ site.baseurl }}/support/).

---

## 🛠️ Common setup issues

<style>
details.tshoot { background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 12px; margin: .4rem 0; }
details.tshoot[open] { background: rgba(255,255,255,0.07); }
details.tshoot summary { cursor: pointer; padding: .7rem 1rem; font-weight: 600; font-size: .94rem; list-style: none; color: var(--ink); }
details.tshoot summary::-webkit-details-marker { display: none; }
details.tshoot summary::after { content: '⌄'; float: right; color: var(--ink-soft); transition: transform .2s; }
details.tshoot[open] summary::after { transform: rotate(180deg); }
details.tshoot .body { padding: 0 1rem .8rem; font-size: .9rem; line-height: 1.5; color: var(--ink-soft); }
details.tshoot .body code { color: var(--accent); }
</style>

<details class="tshoot"><summary><code>/setup</code> doesn't appear when I type <code>/</code></summary>
<div class="body">First-time global propagation can take up to 1 hour. Wait, then try again. Still missing? Open a ticket via <code>/support</code> from any server where the bot's commands are already live.</div></details>

<details class="tshoot"><summary>"⛔ Only the server owner can run setup"</summary>
<div class="body">You're not the Discord-native owner. Owners can transfer ownership in <strong>Server Settings → Members</strong>.</div></details>

<details class="tshoot"><summary>The bot can't ban/kick certain users</summary>
<div class="body">Discord's role hierarchy: the <strong>bot's</strong> role must be higher than the target's highest role. Drag the bot's role above the target's in <strong>Server Settings → Roles</strong>.</div></details>

<details class="tshoot"><summary>AutoMod isn't blocking anything</summary>
<div class="body">Run <code>/settings → Quick Presets → AutoMod</code>, pick a non-Off preset, then run <code>/automod</code> and toggle <strong>Enabled</strong> on.</div></details>

---

## What's next?

- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** — every command + per-tier permissions
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** — deep dives
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
