---
layout: default
title: Server Assistant Setup
permalink: /setup/
description: Add Server Assistant to your Discord server in under a minute — invite the bot, run /setup, and get AutoMod, anti-raid, audit logs and welcome flows configured.
---

# 🚀 Server Assistant Setup

You're set up in about a minute. The bot does the work — you just confirm.

<style>
.cta-inline { display: inline-flex; align-items: center; gap: .6rem; padding: .82rem 1.45rem; border-radius: 8px; font-weight: 600; text-decoration: none !important; background: #5865F2; color: #fff !important; box-shadow: 0 8px 22px rgba(88,101,242,.4); }
.cta-inline:hover { background: #4752c4; transform: translateY(-1px); box-shadow: 0 12px 30px rgba(88,101,242,.5); }
.cta-inline .dlogo { width: 22px; height: 22px; flex: none; }

.steprow { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; align-items: center; margin: 0; padding: 1.4rem 1.6rem; border-radius: 16px; border: 1px solid var(--glass-border); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.steprow.c-blue  { background: rgba(52,130,225,0.08);  border-color: rgba(52,130,225,0.24); }
.steprow.c-green { background: rgba(46,204,113,0.07);  border-color: rgba(46,204,113,0.22); }
.steprow .stext { min-width: 0; }
.steprow .stepn { display: inline-flex; align-items: center; justify-content: center; width: 2rem; height: 2rem; border-radius: 50%; background: linear-gradient(135deg,var(--brand-discord),var(--brand-blue)); color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: .5rem; }
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

.fork-title { display: flex; align-items: center; gap: .5rem; justify-content: center; margin: 1.3rem 0 0; font-weight: 800; font-size: 1.05rem; color: var(--ink); }
.fork-title .farrow { color: var(--ink-soft); font-size: 1.2rem; }
.fork-title .stepn { display: inline-flex; align-items: center; justify-content: center; width: 1.7rem; height: 1.7rem; border-radius: 50%; background: linear-gradient(135deg,var(--brand-discord),var(--brand-blue)); color: #fff; font-weight: 800; font-size: .95rem; }
.forksvg { display: block; width: 100%; height: 24px; margin: 0; overflow: visible; }
.forksvg line { stroke: var(--glass-border); stroke-width: 2; vector-effect: non-scaling-stroke; }
.paths { display: grid; grid-template-columns: repeat(3, 1fr); gap: .8rem; }
.path { position: relative; border-radius: 14px; border: 1px solid var(--glass-border); padding: .9rem .8rem; text-align: center; }
.path.c-blue  { background: rgba(52,130,225,0.09);  border-color: rgba(52,130,225,0.26); }
.path.c-purple{ background: rgba(155,89,182,0.09);  border-color: rgba(155,89,182,0.26); }
.path.c-amber { background: rgba(241,196,15,0.08);  border-color: rgba(241,196,15,0.26); }
.path .ptag { display: inline-block; font-size: .66rem; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: .25rem; }
.path .pico { font-size: 1.7rem; line-height: 1; }
.path h4 { margin: .25rem 0 .3rem; font-size: 1.05rem; }
.path h4 code { color: var(--accent); }
.path p { margin: 0; color: var(--ink-soft); font-size: .88rem; line-height: 1.5; }
@media (max-width: 760px) {
  .steprow, .paths { grid-template-columns: 1fr; }
  .steprow { padding: 1.1rem 1.2rem; gap: 1rem; }
  .steprow.flip .stext, .steprow.flip .sshot { order: 0; }
  /* connectors are decorative — hidden when stacked; restore vertical rhythm */
  .forksvg { display: none; }
  .fork-title { margin: 1.6rem 0 .5rem; }
  .paths { gap: .6rem; margin-bottom: 1.4rem; }
  /* compact, left-aligned branch cards (centred wastes space when stacked) */
  .path { text-align: left; padding: .8rem 1rem; display: grid; grid-template-columns: 2.4rem 1fr; align-items: center; column-gap: .2rem; }
  .path .pico { grid-row: 1 / 3; font-size: 1.5rem; }
  .path .ptag { grid-column: 2; margin: 0; }
  .path h4 { grid-column: 2; margin: .1rem 0 0; }
  .path p { grid-column: 1 / -1; margin: .4rem 0 0; }
}

.qwin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: .6rem; margin: 1rem 0; }
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

<div class="steprow c-blue">
  <div class="stext">
    <div class="stepn">1</div>
    <h3>Add the bot</h3>
    <p>One click. It scans your server and DMs you a ready-filled wizard the instant it joins.</p>
    <p><a class="cta-inline" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands"><svg class="dlogo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0C9.46 4.79 9.25 4.36 9.06 4.03A.07.07 0 0 0 9 4c-1.5.26-2.93.71-4.27 1.33a.06.06 0 0 0-.03.02C1.98 9.42 1.23 13.38 1.6 17.3a.1.1 0 0 0 .03.05c1.8 1.32 3.53 2.12 5.24 2.65a.07.07 0 0 0 .07-.02c.4-.55.76-1.13 1.07-1.74a.07.07 0 0 0-.04-.09 12.9 12.9 0 0 1-1.64-.78.07.07 0 0 1-.01-.11l.33-.25a.07.07 0 0 1 .07-.01c3.44 1.57 7.15 1.57 10.55 0a.07.07 0 0 1 .07.01l.33.26c.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78a.07.07 0 0 0-.04.09c.32.61.68 1.19 1.07 1.74a.07.07 0 0 0 .08.03c1.72-.53 3.45-1.33 5.25-2.65a.07.07 0 0 0 .03-.05c.44-4.53-.73-8.46-3.1-11.95a.05.05 0 0 0-.03-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"/></svg>Add to Discord</a></p>
  </div>
  <div class="sshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🧭 Welcome — let's get you set up</div>
          <div class="dc-desc">I've filled in your channels and roles. Step 1 of 3 — looks right?</div>
          <div class="dc-fname">Staff chat</div><div class="dc-fval">#staff-chat ✓</div>
          <div class="dc-fname">Log channel</div><div class="dc-fval">#mod-log ✓</div>
          <div class="dc-btns"><span class="dc-btn grey">Create for me</span><span class="dc-btn green">✅ Looks good →</span></div>
          <div class="dc-btns"><span class="dc-btn">🌐 …or finish setup on the web</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="fork-title"><span class="farrow">▼</span> <span class="stepn">2</span> Finish it — whichever's easiest</div>

<svg class="forksvg" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true"><line x1="50" y1="0" x2="50" y2="4"/><line x1="16.67" y1="4" x2="83.33" y2="4"/><line x1="16.67" y1="4" x2="16.67" y2="12"/><line x1="50" y1="4" x2="50" y2="12"/><line x1="83.33" y1="4" x2="83.33" y2="12"/></svg>

<div class="paths">
  <div class="path c-blue">
    <div class="ptag">Default</div>
    <div class="pico">💬</div>
    <h4>In your DMs</h4>
    <p>Your wizard's waiting, already filled in. Tap <strong>Looks good</strong>.</p>
  </div>
  <div class="path c-purple">
    <div class="ptag">Same wizard</div>
    <div class="pico">🧭</div>
    <h4><code>/setup</code></h4>
    <p>Rather do it in-server? Run it any time.</p>
  </div>
  <div class="path c-amber">
    <div class="ptag">In a browser</div>
    <div class="pico">🌐</div>
    <h4>Web portal</h4>
    <p>Set it all up at <a href="https://serverassistant.wandweb.co">serverassistant.wandweb.co</a>.</p>
  </div>
</div>

<svg class="forksvg" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true"><line x1="16.67" y1="0" x2="16.67" y2="8"/><line x1="50" y1="0" x2="50" y2="8"/><line x1="83.33" y1="0" x2="83.33" y2="8"/><line x1="16.67" y1="8" x2="83.33" y2="8"/><line x1="50" y1="8" x2="50" y2="12"/></svg>

<div class="steprow flip c-green">
  <div class="stext">
    <div class="stepn">3</div>
    <h3>Make it yours <span style="font-weight:400;font-size:.9rem;color:var(--ink-soft);">(optional)</span></h3>
    <p>Tweak anything in <code>/settings</code> — nine wizards, every change saves instantly.</p>
    <details class="smore"><summary>The nine wizards</summary><div class="sbody"><ul>
      <li>🎨 <strong>Branding</strong> · embed colour, nickname, timezone</li>
      <li>⚡ <strong>Quick Presets</strong> · AutoMod / ladder / onboarding / anti-raid</li>
      <li>🛡️ <strong>Behaviour</strong> · approval timeout, log verbosity, Threat Score</li>
      <li>👋 <strong>New Members</strong> · auto-role, welcome reaction</li>
      <li>🔐 <strong>Verification</strong> · DM-button gate</li>
      <li>📍 <strong>Channel allowlist</strong> · where the bot responds</li>
      <li>🛂 <strong>Role Tiers</strong> · custom tiers + approval authority</li>
      <li>🔔 <strong>Notifications</strong> · per-event role pings</li>
      <li>🩺 <strong>Pulse</strong> · daily health digest</li>
    </ul></div></details>
  </div>
  <div class="sshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/settings</span></div>
        <div class="dc-embed">
          <div class="dc-title">🎨 Settings — pick a wizard</div>
          <div class="dc-desc">Nine sub-wizards, all in one place. Every change saves instantly.</div>
          <div class="dc-btns"><span class="dc-btn blurple">🎨 Branding</span><span class="dc-btn grey">⚡ Presets</span><span class="dc-btn grey">🛡️ Behaviour</span><span class="dc-btn grey">🛂 Role Tiers</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<p style="text-align:center; font-size:.85rem; color:var(--ink-soft); margin:1.1rem 0 0;">💡 In a real hurry? <code>/autopilot</code> does the whole thing in one tap.</p>

---

## ✅ Nice first touches

<div class="qwin-grid">
  <div class="qwin">📨 <strong>Welcome new members</strong> — <code>/onboarding</code></div>
  <div class="qwin">🤖 <strong>Turn on AutoMod</strong> — <code>/automod</code></div>
  <div class="qwin">🕐 <strong>Set your timezone</strong> — <code>/timezone</code></div>
  <div class="qwin">💬 <strong>Type</strong> <code>help</code> in staff-chat for the full list</div>
</div>

---

## 🛠️ If something needs a nudge

<details class="tshoot"><summary>Commands not showing yet?</summary>
<div class="body">First-time global commands can take up to an hour to appear. Hard-refresh Discord (Ctrl+R) and they'll be there.</div></details>

<details class="tshoot"><summary>Bot can't action someone?</summary>
<div class="body">Drag the bot's role above theirs in <strong>Server Settings → Roles</strong> — Discord lets a bot action only roles below its own.</div></details>

<details class="tshoot"><summary>AutoMod looks quiet?</summary>
<div class="body">Pick a preset in <code>/settings → Quick Presets → AutoMod</code>, then flip <strong>Enabled</strong> on in <code>/automod</code>.</div></details>

<details class="tshoot"><summary>Setting it up again?</summary>
<div class="body">Run <code>/setup</code> any time — it keeps your warnings, notes, snippets, and audit logs.</div></details>

---

## What's next?

- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** — every command + per-tier permissions
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** — deep dives
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
