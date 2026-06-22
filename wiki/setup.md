---
layout: wiki
title: Server Assistant Setup Wizard
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
- **Web portal** — every screen has a *“finish setup on the web”* link to
  [the portal]({{ '/portal/' | relative_url }}) if you'd rather click through a browser.

> **Who can run it:** the server **owner**, or an admin with **Manage Server**.

## Step through every screen

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

## See also

- [Quick setup guide]({{ '/setup/' | relative_url }}) — the short marketing walkthrough
- [Autopilot]({{ '/wiki/' | relative_url }}) — let the bot detect and apply a full config for you *(coming soon)*
- [Settings hub]({{ '/wiki/' | relative_url }}) — every configuration panel *(coming soon)*
