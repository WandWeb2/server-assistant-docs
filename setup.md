---
layout: default
title: Setup
permalink: /setup/
description: Add Server Assistant to your Discord server in under a minute.
---

# 🚀 Setup Guide

Adding **Server Assistant** takes about 60 seconds — the wizard does the rest.

<style>
.cta-inline { display: inline-block; padding: .55rem 1.2rem; border-radius: 999px; font-weight: 700; text-decoration: none !important; background: linear-gradient(135deg,#5865f2,#3498db); color: #fff !important; box-shadow: 0 4px 14px rgba(88,101,242,.35); }
.cta-inline:hover { filter: brightness(1.08); }

.callout { display: flex; gap: .9rem; align-items: flex-start; margin: 1rem 0; padding: .9rem 1.2rem; border-radius: 12px; font-size: .92rem; line-height: 1.5; color: var(--ink-soft); }
.callout .ico { font-size: 1.4rem; flex-shrink: 0; }
.callout strong { color: var(--ink); }
.callout code { color: var(--accent); }
.callout.warn { background: rgba(241,196,15,0.08); border: 1px solid rgba(241,196,15,0.28); }
.callout.info { background: rgba(52,130,225,0.09); border: 1px solid rgba(52,130,225,0.26); }

/* Coloured-glass step rows */
.steprow { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; align-items: center; margin: 0; padding: 1.4rem 1.6rem; border-radius: 16px; border: 1px solid var(--glass-border); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.steprow.c-blue  { background: rgba(52,130,225,0.08);  border-color: rgba(52,130,225,0.24); }
.steprow.c-green { background: rgba(46,204,113,0.07);  border-color: rgba(46,204,113,0.22); }
.steprow .stext { min-width: 0; }
.steprow .stepn { display: inline-flex; align-items: center; justify-content: center; width: 2rem; height: 2rem; border-radius: 50%; background: linear-gradient(135deg,#5865f2,#3498db); color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: .5rem; }
.steprow .stext h3 { margin: 0 0 .5rem; font-size: 1.25rem; line-height: 1.25; }
.steprow .stext > p { margin: 0 0 .6rem; color: var(--ink-soft); font-size: .96rem; line-height: 1.55; }
.steprow .stext code, .steprow .sbody code { color: var(--accent); }
.steprow .smore > summary { cursor: pointer; color: var(--accent); font-weight: 600; font-size: .9rem; list-style: none; }
.steprow .smore > summary::-webkit-details-marker { display: none; }
.steprow .smore > summary::before { content: "▸ "; }
.steprow .smore[open] > summary::before { content: "▾ "; }
.steprow .smore .sbody { margin-top: .45rem; color: var(--ink-soft); font-size: .9rem; line-height: 1.55; }
.steprow .smore .sbody ul { margin: .35rem 0 0 1.05rem; padding: 0; }
.steprow .smore .sbody li { margin: .2rem 0; }
.steprow .sshot { min-width: 0; }
.steprow .sshot .dc { max-width: 100%; margin: 0; }
.steprow.flip .stext { order: 2; }
.steprow.flip .sshot { order: 1; }

/* Flow connectors: one step flows into the next; the middle branches and re-merges */
.flow-down { display: flex; flex-direction: column; align-items: center; color: var(--ink-soft); margin: .1rem 0; }
.flow-down .arrow { font-size: 1.5rem; line-height: 1; }
.flow-down .cap { font-size: .9rem; margin-top: -.1rem; }
.branch-h { display: flex; align-items: center; gap: .5rem; justify-content: center; margin: .2rem 0 .1rem; font-weight: 800; font-size: 1.05rem; color: var(--ink); }
.branch-h .stepn { display: inline-flex; align-items: center; justify-content: center; width: 1.7rem; height: 1.7rem; border-radius: 50%; background: linear-gradient(135deg,#5865f2,#3498db); color: #fff; font-weight: 800; font-size: .95rem; }
.paths { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; position: relative; margin: 1.5rem 0; }
.paths::before, .paths::after { content: ""; position: absolute; left: 16.66%; right: 16.66%; height: 2px; background: var(--glass-border); }
.paths::before { top: -.9rem; }
.paths::after  { bottom: -.9rem; }
.path { position: relative; border-radius: 14px; border: 1px solid var(--glass-border); padding: 1rem 1.1rem; text-align: center; }
.path::before, .path::after { content: ""; position: absolute; left: 50%; transform: translateX(-50%); width: 2px; height: .9rem; background: var(--glass-border); }
.path::before { top: -.9rem; }
.path::after  { bottom: -.9rem; }
.path.c-green { background: rgba(46,204,113,0.08);  border-color: rgba(46,204,113,0.24); }
.path.c-purple{ background: rgba(155,89,182,0.09);  border-color: rgba(155,89,182,0.26); }
.path.c-blue  { background: rgba(52,130,225,0.09);  border-color: rgba(52,130,225,0.26); }
.path .ptag { display: inline-block; font-size: .66rem; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: .25rem; }
.path .pico { font-size: 1.7rem; line-height: 1; }
.path h4 { margin: .25rem 0 .3rem; font-size: 1.05rem; }
.path h4 code { color: var(--accent); }
.path p { margin: 0; color: var(--ink-soft); font-size: .87rem; line-height: 1.5; }
@media (max-width: 760px) {
  .steprow, .paths { grid-template-columns: 1fr; }
  .steprow.flip .stext, .steprow.flip .sshot { order: 0; }
  .paths::before, .paths::after, .path::before, .path::after { display: none; }
}

.qwin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: .6rem; margin: 1rem 0; }
.qwin { background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 10px; padding: .7rem .9rem; font-size: .9rem; color: var(--ink-soft); }
.qwin code { color: var(--accent); }

details.tshoot { background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 12px; margin: .4rem 0; }
details.tshoot[open] { background: rgba(255,255,255,0.07); }
details.tshoot summary { cursor: pointer; padding: .7rem 1rem; font-weight: 600; font-size: .94rem; list-style: none; color: var(--ink); }
details.tshoot summary::-webkit-details-marker { display: none; }
details.tshoot summary::after { content: '⌄'; float: right; color: var(--ink-soft); transition: transform .2s; }
details.tshoot[open] summary::after { transform: rotate(180deg); }
details.tshoot .body { padding: 0 1rem .8rem; font-size: .9rem; line-height: 1.5; color: var(--ink-soft); }
details.tshoot .body code { color: var(--accent); }
</style>

<div class="callout warn">
  <div class="ico">⚠️</div>
  <div>Only the <strong>Discord-native server owner</strong> can run <code>/setup</code> — a hard safety check so admins can't escalate their own permissions.</div>
</div>

<div class="callout info">
  <div class="ico">🌐</div>
  <div><strong>Prefer the web?</strong> Owners can finish setup from the <a href="https://serverassistant.wandweb.co">web portal</a> — pick your channels, roles and AI in a browser and the bot configures everything. Run <code>/portal</code> for a private link.</div>
</div>

<div class="steprow c-blue">
  <div class="stext">
    <div class="stepn">1</div>
    <h3>Invite the bot</h3>
    <p>One click to add it — <strong>don't uncheck any OAuth permissions</strong> (ban/kick/auto-role rely on them). The moment it joins, it scans your server and <strong>DMs the owner a pre-filled setup proposal</strong>.</p>
    <p><a class="cta-inline" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands">➕ Add to Discord</a></p>
    <details class="smore"><summary>More</summary><div class="sbody">Also on <a href="https://top.gg/bot/1278486617375510570">Top.gg</a> and <a href="https://discordbotlist.com/bots/server-assistant">discordbotlist.com</a>. Slash commands take up to 1 hour to propagate the first time.</div></details>
  </div>
  <div class="sshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed green">
          <div class="dc-title">👋 Thanks for adding me!</div>
          <div class="dc-desc">I scanned your server and detected sensible defaults. Tap <strong>Apply</strong> and you're set up.</div>
          <div class="dc-fname">Detected</div><div class="dc-fval">#staff-chat · #mod-log · @Admin · @Moderator</div>
          <div class="dc-foot">Or run /setup to configure step by step</div>
          <div class="dc-btns"><span class="dc-btn green">✅ Apply</span><span class="dc-btn grey">Customise</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="flow-down"><span class="arrow">▼</span></div>

<div class="branch-h"><span class="stepn">2</span> Finish setup — any one of these</div>

<div class="paths">
  <div class="path c-green">
    <div class="ptag">⚡ Fastest</div>
    <div class="pico">✅</div>
    <h4>Tap "Apply"</h4>
    <p>One tap on the DM the bot just sent you — it applies the detected config and you're live.</p>
  </div>
  <div class="path c-purple">
    <div class="ptag">🧭 Guided</div>
    <div class="pico">🧭</div>
    <h4><code>/setup</code></h4>
    <p>The 3-step wizard: confirm channels, map roles, pick your server type + AI. About 60 seconds.</p>
  </div>
  <div class="path c-blue">
    <div class="ptag">🤖 Hands-off</div>
    <div class="pico">🤖</div>
    <h4><code>/autopilot</code></h4>
    <p>One command — detects and applies a sensible config in a single step.</p>
  </div>
</div>

<div class="flow-down"><span class="arrow">▼</span><span class="cap">…all three land you here</span></div>

<div class="steprow flip c-green">
  <div class="stext">
    <div class="stepn">3</div>
    <h3>Customise — <code>/settings</code> <span style="font-weight:400;font-size:.9rem;color:var(--ink-soft);">(optional)</span></h3>
    <p>Nine sub-wizards, all in one place. Everything saves instantly — no code, no restart.</p>
    <details class="smore"><summary>The nine wizards</summary><div class="sbody"><ul>
      <li>🎨 <strong>Branding</strong> · embed colour, nickname, timezone</li>
      <li>⚡ <strong>Quick Presets</strong> · AutoMod / ladder / onboarding / anti-raid bundles</li>
      <li>🛡️ <strong>Behaviour</strong> · approval timeout, log verbosity, self-checks, Threat Score</li>
      <li>👋 <strong>New Members</strong> · auto-role, welcome reaction emoji</li>
      <li>🔐 <strong>Verification</strong> · DM-button gate for raid protection</li>
      <li>📍 <strong>Channel allowlist</strong> · where the bot responds to mentions</li>
      <li>🛂 <strong>Role Tiers</strong> · custom tiers + approval authority</li>
      <li>🔔 <strong>Notifications</strong> · per-event role pings</li>
      <li>🩺 <strong>Pulse</strong> · daily health digest channel + time + on/off</li>
    </ul></div></details>
  </div>
  <div class="sshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/settings</span></div>
        <div class="dc-embed">
          <div class="dc-title">🎨 Settings — pick a wizard</div>
          <div class="dc-desc">Nine sub-wizards, all in one place. Choose one to configure — every change saves instantly.</div>
          <div class="dc-btns"><span class="dc-btn blurple">🎨 Branding</span><span class="dc-btn grey">⚡ Presets</span><span class="dc-btn grey">🛡️ Behaviour</span><span class="dc-btn grey">🛂 Role Tiers</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

---

## ✅ Recommended quick wins

<div class="qwin-grid">
  <div class="qwin">📨 <strong>Set your welcome DM</strong> — <code>/onboarding</code></div>
  <div class="qwin">🤖 <strong>Enable AutoMod</strong> — <code>/automod</code> → Scams + slurs (gaming)</div>
  <div class="qwin">🕐 <strong>Set your timezone</strong> — <code>/timezone</code> (for <code>/schedule</code> &amp; <code>purge since…</code>)</div>
  <div class="qwin">💬 <strong>Tell staff</strong> to type <code>help</code> in staff-chat for the full list</div>
  <div class="qwin">🖱️ <strong>Right-click a user</strong> → Apps ▸ Server Assistant → View Info / Warnings</div>
  <div class="qwin">📋 <strong>Right-click a message</strong> → Message Report for an AI context summary</div>
</div>

---

## 🔁 Re-running setup

Need different channels/roles? Run `/setup` again — it overwrites the mapping but **preserves warnings, notes, snippets, and audit logs**. For a full reset, open a ticket via [`/support`]({{ site.url }}{{ site.baseurl }}/support/).

---

## 🛠️ Common setup issues

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
