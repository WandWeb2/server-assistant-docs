---
layout: wiki
title: Settings hub & configuration
permalink: /wiki/settings/
wiki: true
wiki_category: "Settings & dashboards"
summary: The /settings hub and every configuration command — branding, presets, behaviour, new members, verification, notifications and Pulse — plus autopilot, privacy, onboarding, snippets, timezone and schedule. Each shown as it appears in Discord.
wiki_keywords: [settings, configuration, branding, presets, behaviour, behavior, verification, allowlist, role tiers, notifications, pulse, autopilot, privacy, onboarding, snippets, timezone, schedule, dashboard]
description: Every Server Assistant configuration dashboard — the /settings hub and its tabs, plus the standalone setup commands — shown one panel at a time exactly as it looks in Discord.
---

# ⚙️ Settings hub & configuration

Once Server Assistant is set up, **`/settings`** is your control panel. It opens a
single hub, now organised into **four sections** so you can jump straight to the
area you want without scrolling past everything else:

- **⚙️ Settings** — branding, quick presets, behaviour, role tiers, AI config,
  white-label, snippets, custom commands and FAQ.
- **👥 Members** — new members, verification, onboarding and role panels.
- **🔔 Notifications** — event role-pings and the Pulse digest.
- **🛡️ Security** — AutoMod, anti-nuke, scam images, the channel allowlist,
  privacy and backups.

Several tools used to live *only* behind their own slash command — AutoMod, AI
config, onboarding, privacy, backups, white-label, snippets, custom commands, FAQ
and role panels. They're now **also reachable from the matching `/settings`
section**, so you can configure everything from one place. Those slash commands
still work exactly as before, and every Premium or permission requirement is
unchanged — the section is just another door to the same tool.

This page covers the **Settings hub** and the handful of standalone commands that
sit alongside it: `/autopilot`, `/privacy`, `/onboarding`, `/snippets`,
`/timezone` and `/schedule`.

> **Who can configure:** the server **owner** or an **admin** role. `/timezone`
> is the exception — anyone can set their *own* timezone.

## The `/settings` hub

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/settings</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Open the settings hub — four sections covering every part of the bot. Takes no arguments; everything is done with buttons and dropdowns.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — the hub is fully interactive.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">⚙️ Settings</div>
        <div class="dc-desc">Pick a section to configure. Changes save instantly.</div>
        <div class="dc-btns">
          <span class="dc-btn grey">⚙️ Settings</span>
          <span class="dc-btn grey">👥 Members</span>
        </div>
        <div class="dc-btns">
          <span class="dc-btn grey">🔔 Notifications</span>
          <span class="dc-btn grey">🛡️ Security</span>
        </div>
        <div class="dc-btns">
          <span class="dc-btn blurple">Done</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">Each button opens that section's own panel of tools. <strong>⚙️ Settings</strong> holds branding, quick presets, behaviour, role tiers, AI config, white-label, snippets, custom commands and FAQ; <strong>👥 Members</strong> covers new members, verification, onboarding and role panels; <strong>🔔 Notifications</strong> is event role-pings and the Pulse digest; and <strong>🛡️ Security</strong> gathers AutoMod, anti-nuke, scam images, the channel allowlist, privacy and backups. The tools shown below appear under whichever section fits them.</p>

### Step through every tab

Use **Next ›** and **‹ Back** to walk each tab of the hub — including the modal
forms that open from some of them.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">🎨 Branding</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="🎨 Branding">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🎨 Branding</div>
          <div class="dc-desc">Make the bot's messages feel like part of your server.</div>
          <div class="dc-fname">Embed colour</div>
          <div class="dc-select">Blue (default)</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🎨 Custom hex colour</span>
            <span class="dc-btn grey">✏️ Set bot nickname</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn grey">🕒 Default timezone</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Branding.</strong> Pick the colour of every embed the bot posts from the dropdown (Blue, Red, Green, Gold, Discord Blurple and more), or open <strong>🎨 Custom hex colour</strong> to enter any hex like <code>#5865F2</code>. <strong>✏️ Set bot nickname</strong> changes the bot's display name in your server, and <strong>🕒 Default timezone</strong> sets the server-wide timezone used for digests and time displays.</p>
  </div>

  <div class="wiz-step" data-step="🎨 Custom hex colour (modal)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Custom hex colour</div>
          <div class="dc-modal-sub">Use any colour for the bot's embeds.</div>
          <div class="dc-flabel">Hex (with or without #)</div>
          <div class="dc-input ph">e.g. #5865F2 or 0x5865F2</div>
          <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The colour form.</strong> Opens from <strong>🎨 Custom hex colour</strong>. Paste any hex value, with or without the leading <code>#</code> (or in <code>0x</code> form). The two sibling buttons open similar one-field forms — a <em>bot nickname</em> (up to 32 characters; leave blank to reset) and a <em>default timezone</em> (an IANA name like <code>Australia/Sydney</code>).</p>
  </div>

  <div class="wiz-step" data-step="⚡ Quick Presets">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">⚡ Quick Presets</div>
          <div class="dc-desc">Set several things at once with sensible bundles.</div>
          <div class="dc-fname">AutoMod preset</div>
          <div class="dc-select">Scams + slurs (gaming, recommended)</div>
          <div class="dc-fname">Punishment ladder</div>
          <div class="dc-select">Standard (3/5/10)</div>
          <div class="dc-fname">Onboarding template</div>
          <div class="dc-select">Friendly</div>
          <div class="dc-fname">Anti-raid sensitivity</div>
          <div class="dc-select">Normal (5 in 30s)</div>
          <div class="dc-btns"><span class="dc-btn grey">← Back</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Quick Presets.</strong> Four dropdowns that each set a whole bundle in one tap: an <em>AutoMod preset</em> (Off, Scams only, Scams + slurs, or Strict), a <em>punishment ladder</em> (Gentle, Standard or Strict), an <em>onboarding template</em> (Friendly, Gaming, Professional, Minimal or Custom), and <em>anti-raid sensitivity</em> (Off, Normal, or Strict). The same presets the setup wizard applies from your community type — handy for changing your whole posture quickly.</p>
  </div>

  <div class="wiz-step" data-step="🛡️ Behavior">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🛡️ Behavior</div>
          <div class="dc-desc">How the bot logs, digests and checks itself.</div>
          <div class="dc-fname">Log verbosity</div>
          <div class="dc-select">All actions logged</div>
          <div class="dc-fname">Weekly digest day</div>
          <div class="dc-select">Monday</div>
          <div class="dc-btns">
            <span class="dc-btn grey">⏱️ Approval timeout</span>
            <span class="dc-btn grey">📊 Toggle weekly digest</span>
            <span class="dc-btn grey">📣 Toggle external mentions</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn grey">🩹 Toggle self-checks</span>
            <span class="dc-btn grey">🛡️ Toggle Threat Score</span>
            <span class="dc-btn grey">📣 Toggle Dev Updates</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn grey">🧭 Toggle weekly recap</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Behavior.</strong> Controls how much the bot logs (all actions, dangerous-only, or errors-only) and which day the weekly digest lands. The toggles switch on or off the weekly digest, mentions outside your staff chat, the bot's own self-checks (Health Insurance), the advisory <span class="wiki-prem">PREMIUM</span> <em>Threat Score</em> display, dev-update notes, and the weekly mod-team recap. <strong>⏱️ Approval timeout</strong> opens a form to set how long (30–300 seconds) a dangerous-action approval stays open.</p>
  </div>

  <div class="wiz-step" data-step="👋 New Members">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">👋 New Members</div>
          <div class="dc-desc">What happens when someone joins.</div>
          <div class="dc-fname">Auto-assign role on join</div>
          <div class="dc-select">Pick a role…</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🚫 Clear auto-role</span>
            <span class="dc-btn grey">👋 Set welcome emoji</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn grey">🚫 Clear welcome emoji</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>New Members.</strong> Choose a role to grant automatically when someone joins, and set the emoji the bot reacts with to welcome them. <strong>👋 Set welcome emoji</strong> opens a one-field form that accepts a standard emoji, a <code>:shortcode:</code>, or a custom <code>&lt;:name:id&gt;</code> emoji. The two <strong>🚫 Clear</strong> buttons reset each setting.</p>
  </div>

  <div class="wiz-step" data-step="🔐 Verification gate">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🔐 Verification gate</div>
          <div class="dc-desc">Make members click to prove they're human before they get access.</div>
          <div class="dc-fname">Role granted on verification</div>
          <div class="dc-select">Pick a role…</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🔘 Toggle on/off</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Verification gate.</strong> Pick the role that's handed out once a member verifies, then flip <strong>🔘 Toggle on/off</strong>. You have to choose a role before you can enable the gate. A simple, low-friction human check that keeps drive-by spam accounts out.</p>
  </div>

  <div class="wiz-step" data-step="📍 Channel Allowlist">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">📍 Channel Allowlist</div>
          <div class="dc-desc">Limit where the bot listens and acts. Empty = every channel.</div>
          <div class="dc-select">Pick channels to allow…</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🚫 Clear allowlist (allow all)</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Channel Allowlist.</strong> By default the bot works everywhere it can see. Add channels here to restrict it to just those, or use <strong>🚫 Clear allowlist (allow all)</strong> to go back to listening everywhere. Useful if you want commands confined to a couple of staff channels.</p>
  </div>

  <div class="wiz-step" data-step="🛂 Role Tiers">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🛂 Role Tiers</div>
          <div class="dc-desc">Decide which roles can run which commands.</div>
          <div class="dc-fname">Current tiers</div>
          <div class="dc-fval">@Admin · @Moderator</div>
          <div class="dc-select">Remove a tier…</div>
          <div class="dc-btns">
            <span class="dc-btn grey">➕ Add custom tier</span>
            <span class="dc-btn grey">👑 Add co-owner</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Role Tiers.</strong> Maps your Discord roles to what they're allowed to do. <strong>➕ Add custom tier</strong> picks a role and a template — <em>Owner</em> (full access), <em>Admin</em> (most actions) or <em>Moderator</em> (the core mod toolkit). <strong>👑 Add co-owner</strong> (owner-only) grants a role full owner-level access. The dropdown removes a tier. The server owner always has full access regardless.</p>
  </div>

  <div class="wiz-step" data-step="🔔 Notifications">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🔔 Notifications</div>
          <div class="dc-desc">What the bot tells you about, and who gets pinged.</div>
          <div class="dc-fname">Pulse digest cadence</div>
          <div class="dc-select">🩺 Daily</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🎉 Milestones: On</span>
            <span class="dc-btn grey">📣 Announcements: On</span>
            <span class="dc-btn grey">⚡ Native-action alerts: On</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn blurple">🚨 Instant alerts →</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Notifications.</strong> Opening this section now drops you straight onto the notification options — no extra menu step in between. Sets the Pulse digest cadence (Off, Daily, Weekly or Monthly) and toggles celebratory milestone cards, product announcements and service notices, and native-action alerts (logging when staff moderate directly in Discord). <strong>🚨 Instant alerts →</strong> opens the role-ping screen.</p>
  </div>

  <div class="wiz-step" data-step="🚨 Instant alerts">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">🚨 Instant alerts</div>
          <div class="dc-desc">Pick which roles get pinged the moment something urgent happens.</div>
          <div class="dc-fname">🚨 Anti-raid alert</div>
          <div class="dc-select">Pick roles (or leave empty)…</div>
          <div class="dc-fname">🛡️ Dangerous-action approval</div>
          <div class="dc-select">Pick roles…</div>
          <div class="dc-fname">🤖 AutoMod escalation</div>
          <div class="dc-select">Pick roles…</div>
          <div class="dc-btns"><span class="dc-btn grey">← Back</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Instant alerts.</strong> Choose which roles get an immediate ping for each urgent event: an <em>anti-raid</em> trigger, a <em>dangerous-action approval</em> request, and an <em>AutoMod escalation</em> (only timeouts, kicks and bans). Leave any of them empty for no ping.</p>
  </div>

  <div class="wiz-step" data-step="🩺 Pulse">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🩺 Pulse</div>
          <div class="dc-desc">A daily digest of your server's activity, posted automatically.</div>
          <div class="dc-fname">Destination</div>
          <div class="dc-select">#staff-chat</div>
          <div class="dc-btns">
            <span class="dc-btn grey">🔁 Toggle on/off</span>
            <span class="dc-btn grey">🕘 Set hour…</span>
            <span class="dc-btn grey">🧪 Send a sample now</span>
          </div>
          <div class="dc-btns"><span class="dc-btn grey">← Back</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Pulse.</strong> A daily digest of activity counts (no message content is stored). Turn it on or off, choose its destination channel, and use <strong>🕘 Set hour…</strong> to pick the hour of day (0–23, server local time) it posts. <strong>🧪 Send a sample now</strong> posts one immediately so you can see what it looks like.</p>
  </div>
</div>

## `/autopilot`

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/autopilot</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Let Server Assistant detect your channels and roles and apply a sensible config in one tap — no step-by-step wizard. Owner only.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — review the proposal, then Apply.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🛫 Autopilot — here's what I'd set up</div>
        <div class="dc-desc">I detected your channels and roles. Apply this and you're done, or switch to manual setup.</div>
        <div class="dc-fname">Staff chat · Log channel</div><div class="dc-fval">#staff-chat · #mod-log</div>
        <div class="dc-fname">Admin · Moderator</div><div class="dc-fval">@Admin · @Moderator</div>
        <div class="dc-fname">Defaults</div><div class="dc-fval">AutoMod: Scams + slurs (gaming) · Anti-raid: Normal (5/30s) · Ladder: Standard (3→5→10) · Pulse: on</div>
        <div class="dc-btns">
          <span class="dc-btn green">Apply</span>
          <span class="dc-btn grey">Manual setup</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

If something can't be detected, the bot flags it (for example *“none detected —
recommend creating a private #staff channel”*) so you know what to create.
Prefer to go screen by screen instead? Choose **Manual setup** to open the
[`/setup` wizard]({{ '/wiki/setup/' | relative_url }}).

## `/privacy`

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/privacy</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Control what the bot is allowed to read. Every reading feature is a toggle — turn off anything you don't want.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — toggle each feature on or off.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🔒 Privacy — what the bot can read</div>
        <div class="dc-desc">Each feature that reads messages is opt-out. Turn off anything you'd rather keep private.</div>
        <div class="dc-btns">
          <span class="dc-btn grey">🗣️ Toggle NL Commands</span>
          <span class="dc-btn grey">📋 Toggle Message Report</span>
        </div>
        <div class="dc-btns">
          <span class="dc-btn grey">🩺 Toggle Pulse</span>
          <span class="dc-btn grey">🧠 Toggle Self-trained</span>
          <span class="dc-btn grey">🩹 Toggle Health Insurance</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

Each toggle controls one reading feature: **natural-language commands** in your
staff chat (like `warn @user 30min`), the right-click **Message Report** menu,
**Pulse** (counts only — no message content is stored), **self-trained AutoMod**
(which learns from staff deletions), and the bot's **Health Insurance**
self-checks. Turn off anything you don't want, any time.

## `/onboarding`

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/onboarding</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Set up the welcome DM new members receive when they join. Toggle it on, edit the text, and send yourself a test.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — manage from the panel.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">👋 Onboarding — welcome DM</div>
        <div class="dc-desc">Greet every new member with a DM. Use placeholders like <strong>[servername]</strong>, <strong>[usermention]</strong>, <strong>[membercount]</strong> and <strong>[owner]</strong>.</div>
        <div class="dc-btns">
          <span class="dc-btn grey">🔘 Toggle on/off</span>
          <span class="dc-btn grey">✏️ Edit message</span>
          <span class="dc-btn grey">🧪 Test (DM me)</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

**✏️ Edit message** opens a text box (up to 2000 characters) where you write your
greeting, dropping in placeholders such as `[servername]`, `[usermention]`,
`[user]`, `[membercount]`, `[owner]` and `[usercreatedat]`. **🧪 Test (DM me)**
sends a live preview to you.

## `/snippets`

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/snippets</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Save canned responses your staff can post in a tap — FAQs, role guides, rule reminders. Add, view and remove them here.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — manage from the panel.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🗂️ Snippets — canned responses</div>
        <div class="dc-desc">Save reusable replies and post them in a tap.</div>
        <div class="dc-select">Select snippets to remove…</div>
        <div class="dc-btns"><span class="dc-btn green">➕ Add snippet</span></div>
      </div>
    </div></div>
  </div>
</div>

**➕ Add snippet** opens a short form: a **name** (no spaces, like `welcome` or
`faq-roles`) and the **text** (up to 2000 characters, with the same placeholders
as onboarding). The dropdown removes any you no longer need.

## `/timezone`

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/timezone</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Set <em>your own</em> personal timezone so time-based commands and displays read correctly for you. Anyone can use this — it only affects you.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — pick from the list or enter a custom name.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🕒 Your timezone</div>
        <div class="dc-desc">Pick the closest match, or enter your own.</div>
        <div class="dc-select">Pick a timezone…</div>
        <div class="dc-btns"><span class="dc-btn grey">Custom (type IANA name)</span></div>
      </div>
    </div></div>
  </div>
</div>

Choose from the popular list (UTC, Sydney, London, New York, Tokyo and more), or
hit **Custom (type IANA name)** to enter any IANA timezone such as
`Australia/Brisbane`, or an abbreviation like `PST`.

## `/schedule`

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/schedule</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Schedule a reminder or task to fire later — in plain language like “in 30 min” or “at 9am”. View and cancel pending tasks here too.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — create from the panel.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">⏰ Scheduled tasks</div>
        <div class="dc-desc">Reminders and tasks fire at the time you set, in your timezone.</div>
        <div class="dc-select">Select tasks to cancel…</div>
        <div class="dc-btns"><span class="dc-btn green">➕ Create new</span></div>
      </div>
    </div></div>
  </div>
</div>

**➕ Create new** asks two things: **when** (in plain language — `in 30 min`,
`in 2 hours`, `at 9am`, `at 14:00`) and **what should happen** (up to 500
characters). Times use the timezone you set with `/timezone`. The dropdown lists
your pending tasks so you can cancel any of them.

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}) — first-time setup, screen by screen
- [AutoMod]({{ '/wiki/automod/' | relative_url }}) — the full auto-moderation dashboard
- [Wiki home]({{ '/wiki/' | relative_url }}) — every command and flow
