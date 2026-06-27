---
layout: wiki
title: Server Assistant Setup
permalink: /wiki/setup/
wiki: true
wiki_category: Getting started
summary: A screen-by-screen walkthrough of the /setup wizard — preflight checks, channels, roles, permission review, AI and the welcome guide. Step through every state.
wiki_keywords: [setup, wizard, onboarding, channels, roles, permissions, automod, ai, byok, getting started, configure]
description: Every screen of the Server Assistant /setup wizard, shown one state at a time exactly as it appears in Discord.
---

# 🧭 The `/setup` wizard

`/setup` is how Server Assistant gets configured for your server. It's a short,
guided flow: the bot detects sensible defaults, fills them in for you, and you
just confirm each screen. The whole thing takes about a minute.

You can reach it three ways:

- **Automatically** — when the bot joins, it DMs the server owner a **Welcome**
  message that opens the wizard.
- **`/setup`** — run it in your server any time to re-open the wizard (it
  pre-fills your *current* configuration, not a blank slate).
- **Web portal** — the wizard offers a *“finish setup on the web”* link to
  [the portal]({{ '/portal/' | relative_url }}) if you'd rather click through a browser.

> **Who can run it:** the server **owner**, or an admin with **Manage Server**.

<style>
.cta-inline { display: inline-flex; align-items: center; gap: .6rem; padding: .82rem 1.45rem; border-radius: 8px; font-weight: 600; text-decoration: none !important; background: #5865F2; color: #fff !important; box-shadow: 0 8px 22px rgba(88,101,242,.4); }
.cta-inline:hover { background: #4752c4; transform: translateY(-1px); box-shadow: 0 12px 30px rgba(88,101,242,.5); }
.cta-inline .dlogo { width: 22px; height: 22px; flex: none; }
.steprow { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; align-items: center; margin: 0; padding: 1.4rem 1.6rem; border-radius: 16px; border: 1px solid var(--glass-border); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.steprow.c-blue  { background: rgba(52,130,225,0.08);  border-color: rgba(52,130,225,0.24); }
.steprow.c-green { background: rgba(46,204,113,0.07);  border-color: rgba(46,204,113,0.22); }
.steprow .stext { min-width: 0; }
.steprow .stepn { display: inline-flex; align-items: center; justify-content: center; width: 2rem; height: 2rem; border-radius: 50%; background: linear-gradient(135deg,var(--brand-discord),var(--brand-blue)); color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: .5rem; }
.steprow .stext h3 { margin: 0 0 .5rem; font-size: 1.25rem; line-height: 1.25; border: 0; padding: 0; }
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
@media (max-width: 760px) {
  .steprow, .paths { grid-template-columns: 1fr; }
  .steprow { padding: 1.1rem 1.2rem; gap: 1rem; }
  .steprow.flip .stext, .steprow.flip .sshot { order: 0; }
  .forksvg { display: none; }
  .fork-title { margin: 1.6rem 0 .5rem; }
  .paths { gap: .6rem; }
  .path { text-align: left; padding: .8rem 1rem; display: grid; grid-template-columns: 2.4rem 1fr; align-items: center; column-gap: .2rem; }
  .path .pico { grid-row: 1 / 3; font-size: 1.5rem; }
  .path .ptag { grid-column: 2; margin: 0; }
  .path h4 { grid-column: 2; margin: .1rem 0 0; }
  .path p { grid-column: 1 / -1; margin: .4rem 0 0; }
}
</style>

## 🚀 Quick start

You're set up in about a minute — the bot does the work, you just confirm.

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
    <p>Rather do it in-server? Run it any time — or tap the <strong>🚀 Run setup</strong> button the bot shows on any command before you're set up.</p>
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
      <li>🩺 <strong><a href="{{ '/wiki/pulse/' | relative_url }}">Pulse</a></strong> · daily health digest</li>
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

<p style="text-align:center; font-size:.85rem; color:var(--ink-soft); margin:1.1rem 0 0;">💡 In a real hurry? <code>/autopilot</code> skips the step-by-step wizard and applies the detected defaults in one tap — a faster <em>style</em> of setup, not a separate place to start (fine-tune anything later in <code>/settings</code>).</p>

### Nice first touches

<div class="qwin-grid">
  <div class="qwin">📨 <strong>Welcome new members</strong> — <code>/onboarding</code></div>
  <div class="qwin">🤖 <strong>Turn on AutoMod</strong> — <code>/automod</code></div>
  <div class="qwin">🕐 <strong>Set your timezone</strong> — <code>/timezone</code></div>
  <div class="qwin">💬 <strong>Type</strong> <code>help</code> in staff-chat for the full list</div>
</div>

## Step through every screen

Want the detail behind each confirmation? Here's the wizard, screen by screen.

Use **Next ›** and **‹ Back** to walk each state — including the two
*conditional* screens (Preflight and Permission review) that only appear when the
bot needs them.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">Preflight · permission check</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="Preflight · permission check">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">⚠️ Before we start — a couple of permissions</div>
          <div class="dc-desc">I'm missing a permission I need to set things up properly. Grant it and re-check, or continue and I'll do what I can.</div>
          <div class="dc-fname">Manage Roles</div><div class="dc-fval">❌ Needed to create and assign your staff roles</div>
          <div class="dc-fname">Manage Channels</div><div class="dc-fval">✓ Granted</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🔄 Re-check</span>
            <span class="dc-btn blurple">Continue anyway →</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Only shows if something's missing.</strong> If the bot already has the permissions it needs, the wizard skips straight to Step 1. “Re-check” re-reads the bot's permissions after you fix them; “Continue anyway” proceeds and the bot does what it can.</p>
  </div>

  <div class="wiz-step" data-step="Step 1 · Channels">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🧭 Welcome — let's get you set up</div>
          <div class="dc-desc">I've filled in your channels and roles. <strong>Step 1 of 3</strong> — looks right?</div>
          <div class="dc-fname">Staff chat <span style="color:#949ba4;font-weight:400">(where I listen for commands)</span></div><div class="dc-fval">#staff-chat ✓ <span style="color:#949ba4">(detected)</span></div>
          <div class="dc-fname">Log channel <span style="color:#949ba4;font-weight:400">(your audit trail)</span></div><div class="dc-fval">#mod-log ✓ <span style="color:#949ba4">(detected)</span></div>
          <div class="dc-select">Pick a different staff chat…</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🆕 Create for me</span>
            <span class="dc-btn green">✅ Looks good →</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn blurple">🌐 …or finish setup on the web</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Channels.</strong> Pick the <em>staff chat</em> (the command listening post) and a <em>log channel</em> (the audit trail). The bot pre-fills both from what it detected — use the dropdowns to change them, or <strong>🆕 Create for me</strong> to have it make fresh channels. Tags read <code>(detected)</code> on a new server, or <code>(current)</code> if you're re-running setup.</p>
  </div>

  <div class="wiz-step" data-step="Step 2 · Roles">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🛡️ Who's on your team?</div>
          <div class="dc-desc"><strong>Step 2 of 3</strong> — tell me which roles are your admins and moderators so commands respect your hierarchy.</div>
          <div class="dc-fname">🟥 Admin role</div><div class="dc-fval">@Admin ✓ <span style="color:#949ba4">(detected)</span></div>
          <div class="dc-fname">🟦 Moderator role</div><div class="dc-fval">@Moderator ✓ <span style="color:#949ba4">(detected)</span></div>
          <div class="dc-foot">Server owner always has full access — no role needed.</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🆕 Create Admin + Mod</span>
            <span class="dc-btn green">✅ Looks good →</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Roles.</strong> Choose your <em>Admin</em> and <em>Moderator</em> roles — the colour emoji mirrors each role's colour so they're easy to spot. No suitable roles yet? <strong>🆕 Create Admin + Mod</strong> generates them with sensible permissions. The owner is always treated as full-access, so an owner role is optional.</p>
  </div>

  <div class="wiz-step" data-step="Permission review">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">🔐 Quick permission tidy-up</div>
          <div class="dc-desc">To make these roles work, I'd like to adjust a few permissions. Nothing happens until you approve.</div>
          <div class="dc-fname">➕ @Moderator</div><div class="dc-fval">+ Timeout Members, + Manage Messages</div>
          <div class="dc-fname">➖ @everyone</div><div class="dc-fval">− Mention @everyone <span style="color:#949ba4">(in #staff-chat)</span></div>
          <div class="dc-btns">
            <span class="dc-btn green">✅ Approve &amp; apply</span>
            <span class="dc-btn grey">🆕 Generate fresh instead</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Only shows if a tidy-up is needed.</strong> If your staff roles are missing a permission they need — or <code>@everyone</code> has a risky one — the bot lists the exact change and waits for your <strong>✅ Approve &amp; apply</strong>. If it can't make a change because of role hierarchy, this becomes a <strong>🔄 Re-check</strong> after you move its role up.</p>
  </div>

  <div class="wiz-step" data-step="Step 3 · AI &amp; community type">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🎚️ Last step — tune the defaults</div>
          <div class="dc-desc"><strong>Step 3 of 3.</strong> Pick your community type so I can preset AutoMod, the punishment ladder and anti-raid sensibly — then choose how you'd like AI.</div>
          <div class="dc-fname">Community type</div>
          <div class="dc-select">🎮 Gaming</div>
          <div class="dc-fname">AI features</div>
          <div class="dc-fval">Start with a free <strong>150k-token trial</strong>, bring your own key, or skip for now.</div>
          <div class="dc-btns">
            <span class="dc-btn green">Finish setup ✓</span>
            <span class="dc-btn blurple">🔑 Enter my own key</span>
            <span class="dc-btn grey">Skip AI</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>AI &amp; community type.</strong> The bot guesses your <em>community type</em> from your server name and description (Gaming, Creator, Anime, Crypto, Education, DIY and more) and uses it to preset AutoMod, the punishment ladder and anti-raid. Then pick your AI path — the <strong>free trial</strong>, <strong>🔑 your own key</strong> (opens the form on the next screen), or <strong>Skip AI</strong>.</p>
  </div>

  <div class="wiz-step" data-step="Bring your own key (optional)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Use your own AI key</div>
          <div class="dc-modal-sub">Paste a provider key and you control your own usage and billing.</div>
          <div class="dc-flabel">API key</div>
          <div class="dc-input ph">sk-…</div>
          <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Only if you chose “Enter my own key”.</strong> Choosing <strong>🔑 Enter my own key</strong> on the previous screen opens this short form. Paste a supported provider key and your server runs AI on your own account — no trial limit. You can change or remove it later with <code>/ai-config</code>.</p>
  </div>

  <div class="wiz-step" data-step="Setup complete">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed green">
          <div class="dc-title">🎉 You're all set!</div>
          <div class="dc-desc">Server Assistant is configured and watching your server. Here's the summary:</div>
          <div class="dc-fname">Channels</div><div class="dc-fval">Staff #staff-chat · Logs #mod-log</div>
          <div class="dc-fname">Roles</div><div class="dc-fval">Admin @Admin · Mod @Moderator</div>
          <div class="dc-fname">Preset</div><div class="dc-fval">🎮 Gaming · AutoMod on · Anti-raid on</div>
          <div class="dc-foot">Want your mods to know the ropes? I can post a quick welcome guide to your staff chat.</div>
          <div class="dc-btns">
            <span class="dc-btn green">📤 Post welcome to staff chat</span>
            <span class="dc-btn grey">Skip</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Done.</strong> A recap of everything that was configured. <strong>📤 Post welcome to staff chat</strong> drops a short “how to drive the bot” guide into your staff channel for the rest of your team (on a re-run this becomes <strong>🔁 Re-post</strong>). From here, try <code>/help</code> or open <code>/settings</code> to fine-tune anything.</p>
  </div>
</div>

## What if I want to change something later?

Nothing here is one-shot. Re-run **`/setup`** any time — it loads your current
configuration so you can adjust a single thing without starting over. For
deeper, per-feature control, open the **Settings hub** with `/settings`, or
manage AutoMod, onboarding and the rest from their own commands (each gets its
own page in this wiki).

## If something needs a nudge

<details class="tshoot"><summary>Commands not showing yet?</summary>
<div class="body">First-time global commands can take up to an hour to appear. Hard-refresh Discord (Ctrl+R) and they'll be there.</div></details>

<details class="tshoot"><summary>Bot can't action someone?</summary>
<div class="body">Drag the bot's role above theirs in <strong>Server Settings → Roles</strong> — Discord lets a bot action only roles below its own.</div></details>

<details class="tshoot"><summary>AutoMod looks quiet?</summary>
<div class="body">Pick a preset in <code>/settings → Quick Presets → AutoMod</code>, then flip <strong>Enabled</strong> on in <code>/automod</code>.</div></details>

<details class="tshoot"><summary>Setting it up again?</summary>
<div class="body">Run <code>/setup</code> any time — it keeps your warnings, notes, snippets, and audit logs.</div></details>

## See also

- [Main features]({{ '/wiki/features/' | relative_url }}) — everything the bot does
- [Settings hub]({{ '/wiki/settings/' | relative_url }}) — every configuration panel
- [AutoMod]({{ '/wiki/automod/' | relative_url }}) — auto-moderation in depth
- [Wiki home]({{ '/wiki/' | relative_url }}) — the full command reference
