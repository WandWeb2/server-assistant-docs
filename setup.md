---
layout: default
title: Setup
permalink: /setup/
description: Add Server Assistant to your Discord server in under a minute.
---

# 🚀 Setup Guide

Adding **Server Assistant** takes about 60 seconds. The wizard does the rest.

> ⚠️ Only the **Discord-native server owner** can run `/setup` — a hard safety check so admins can't escalate their own permissions.

<style>
.steps { display: grid; gap: 1rem; margin: 1.2rem 0 1.6rem; }
.step { display: grid; grid-template-columns: 56px 1fr; gap: 1rem; align-items: start; background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.15); border-radius: 14px; padding: 1.1rem 1.2rem; box-shadow: 0 4px 18px rgba(31,38,135,0.08); }
.step-n { width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #5865f2, #3498db); color: white; font-weight: 700; font-size: 1.25rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-body h3 { margin: 0 0 .35rem; font-size: 1.1rem; }
.step-body p { margin: 0 0 .5rem; font-size: .93rem; line-height: 1.5; color: #2e3340; }
.step-body p:last-child { margin-bottom: 0; }
.step-body ul { margin: .35rem 0 .25rem 1.1rem; padding: 0; font-size: .9rem; line-height: 1.5; color: #2e3340; }
.invite-cta { display: inline-block; background: linear-gradient(135deg, #5865f2, #3498db); color: white !important; padding: .55rem 1.1rem; border-radius: 999px; font-weight: 700; text-decoration: none !important; margin: .3rem 0; box-shadow: 0 4px 14px rgba(88,101,242,.35); }
.invite-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(88,101,242,.45); }
@media (max-width: 600px) { .step { grid-template-columns: 1fr; } .step-n { margin-bottom: .35rem; } }
</style>

<div class="steps">

  <div class="step"><div class="step-n">1</div>
    <div class="step-body">
      <h3>Invite the bot</h3>
      <p>You'll need <strong>Manage Server</strong> on the target guild. <strong>Don't uncheck any permissions</strong> in the OAuth flow — features like ban/kick/auto-role rely on them.</p>
      <p><a class="invite-cta" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands">➕ Invite Server Assistant</a></p>
      <p style="font-size:.83rem; color:#5c6470;">Also listed on <a href="https://top.gg/bot/1278486617375510570">Top.gg</a> and <a href="https://discordbotlist.com/bots/server-assistant">discordbotlist.com</a>. Slash commands take up to 1 hour to propagate the very first time.</p>
    </div>
  </div>

  <div class="step"><div class="step-n">2</div>
    <div class="step-body">
      <h3>Run <code>/setup</code> — three short steps</h3>
      <p><strong>Channels.</strong> Pick a <em>staff-chat</em> (where the bot listens to natural-language commands) and a <em>log channel</em> (audit-trail embeds). Both should be private/staff-only.</p>
      <p><strong>Roles.</strong> Map your existing Discord roles to the bot's tiers — <strong>Owner / Admin / Moderator</strong>. The Discord-native owner always has Owner tier implicitly. You can add custom tiers later in <code>/settings → Role Tiers</code>.</p>
      <p><strong>AI provider (optional).</strong> Three modes — <strong>🆓 host's shared key</strong> (rate-limited, default), <strong>🔑 your own key</strong> (xAI Grok or OpenAI; encrypted, no shared limits), or <strong>⏭️ Skip AI</strong>. Change anytime via <code>/ai-config</code>.</p>
      <p>Hit <strong>Finish Setup</strong>. The bot saves and auto-posts a 5-message walkthrough to staff-chat covering all three ways to use it.</p>
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

If you need different channels/roles, just run `/setup` again — it overwrites the mapping but **preserves warnings, notes, snippets, and audit logs**. For a full reset, open a ticket via [`/support`]({{ site.url }}{{ site.baseurl }}/support/).

---

## 🛠️ Common setup issues

<style>
details.tshoot { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.12); border-radius: 12px; margin: .4rem 0; }
details.tshoot[open] { background: rgba(255,255,255,0.72); box-shadow: 0 4px 14px rgba(31,38,135,0.08); }
details.tshoot summary { cursor: pointer; padding: .7rem 1rem; font-weight: 600; font-size: .94rem; list-style: none; }
details.tshoot summary::-webkit-details-marker { display: none; }
details.tshoot summary::after { content: '⌄'; float: right; color: #6a7280; transition: transform .2s; }
details.tshoot[open] summary::after { transform: rotate(180deg); }
details.tshoot .body { padding: 0 1rem .8rem; font-size: .9rem; line-height: 1.5; color: #2e3340; }
</style>

<details class="tshoot"><summary><code>/setup</code> doesn't appear when I type <code>/</code></summary>
<div class="body">First-time global propagation can take up to 1 hour. Wait, then try again. Still missing after that — open a ticket via <code>/support</code> from any server that has the bot (you can use another server you own where the commands are live).</div></details>

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
