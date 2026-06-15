---
layout: default
title: Features
permalink: /features/
description: A scannable tour of Server Assistant's flagship features.
---

# ✨ Features

A scannable tour. For the full command list and permissions, see **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)**. For what's free vs Premium, see **[Pricing]({{ site.url }}{{ site.baseurl }}/pricing/)**.

<style>
.tier-badge { display: inline-block; font-size: 0.65rem; font-weight: 800; letter-spacing: 0.05em;
              padding: 0.15rem 0.5rem; border-radius: 999px; vertical-align: middle;
              margin-left: 0.4rem; text-transform: uppercase; }
.tier-free    { background: rgba(46,204,113,0.18);  color: #1b8e3a; }
.tier-trial   { background: rgba(52,152,219,0.18);  color: #1f6dbf; }
.tier-premium { background: rgba(241,196,15,0.20);  color: #8a5a00; }
</style>

**Tier badges below:**
<span class="tier-badge tier-free">FREE</span> always free (no AI tokens used) ·
<span class="tier-badge tier-trial">TRIAL</span> uses your guild's AI tokens, available on free trial ·
<span class="tier-badge tier-premium">PREMIUM</span> requires Premium subscription

---

## 🧠 The AI-Moderation Suite

AI features that watch your server's *health and behaviour* — **advisory by design**. X-ray vision for your team; the decisions stay with you.

<div class="dc" style="max-width:540px;margin:1rem 0 1.5rem;">
  <div class="dc-row">
    <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
    <div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">👤 Info → Threat Score</span></div>
      <div class="dc-embed amber">
        <div class="dc-title">🛡️ Threat Score — @driftwood</div>
        <div class="dc-desc">🟠 <strong>Elevated</strong> · 58/100 — an explainable read of infraction history, weighted by severity and decaying over time.</div>
        <div class="dc-fname">Recent history</div><div class="dc-fval">3 warnings · 1 timeout · 0 bans</div>
        <div class="dc-fname">Trend</div><div class="dc-fval">▲ rising — 2 of 3 warnings in the last 7 days</div>
        <div class="dc-foot">Advisory view · free for every server · /settings → Behavior</div>
      </div>
    </div>
  </div>
</div>

| Feature | What it does |
|---|---|
| 🩺 **Pulse** <span class="tier-badge tier-trial">TRIAL</span> | Daily one-embed health report — messages, joins/leaves, AutoMod blocks, warnings — with week-over-week deltas. On by default; `/settings → 🩺 Pulse`. |
| 🧠 **Self-trained AutoMod** <span class="tier-badge tier-trial">TRIAL</span> | Watches the messages staff delete or report, then proposes server-specific AutoMod rules for your approval — nothing auto-enforced, no identities stored. `/automod → Self-training`. |
| 🩹 **Bot Health Insurance** <span class="tier-badge tier-trial">TRIAL</span> | The bot watches its *own* footprint and suggests tuning if it gets heavy-handed — at most once every 14 days, so the anti-noise feature never becomes noise. `/settings → Behavior`. |
| 🛡️ **Threat Score** | At-a-glance per-user risk (🟢 Low / 🟠 Elevated / 🔴 High) from infraction history, weighted by severity and decaying over time. **Advisory view free for every server**; the score-driven **action** phase is Premium. `/settings → Behavior`. |

---

<style>
/* Deep-detail collapsibles — tap a heading to expand the genuinely long bits. */
.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: 0.7rem 0; background: rgba(255,255,255,0.03); }
.doc-sec > summary { cursor: pointer; font-size: 1.02rem; font-weight: 700; padding: 0.6rem 0.85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] > summary { border-bottom: 1px solid var(--glass-border); margin-bottom: .5rem; }
.doc-sec > *:not(summary) { margin-left: 0.85rem; margin-right: 0.85rem; }
.doc-sec[open] { padding-bottom: 0.5rem; }
</style>

## 🛡️ Moderation <span class="tier-badge tier-free">FREE</span>

The core toolkit — staff-only, role-aware, every action logged.

| Feature | What it does |
|---|---|
| 🛂 **Role-based tiers** | Owner / Admin / Moderator defaults, each with its own capabilities + approval authority — fully customisable in `/settings → Role Tiers`. |
| ⚖️ **Tiered approval** | Dangerous actions (e.g. `/purge`) route *up* a tier for sign-off; anyone with approval authority — or the owner — runs them directly. |
| ⚠️ **Persistent warnings + DMs** | Every warning is timestamped, attributed, and DM'd to the user with their current count — view or remove via `/warnings` / `/manage-warnings`. |
| 📝 **Private staff notes** | Track behaviour without a formal warning; invisible to the user, via `/note`, `/notes`, `/manage-notes`. |
| 🧹 **Soft-ban + timed purge** | `/softban` sweeps messages without a permanent ban; `/purge 50` or `purge since 1pm` clears recent messages (14-day Discord cap). |
| 🤖 **Smart purge** | `/purge … mode: Smart` — AI removes only the genuinely problematic messages and keeps the rest. |
| ⏲️ **Timed bans** | `/tempban @user 7d` auto-unbans after a set time (1 min–28 days); the timer survives restarts and the lift is logged. |
| 🎭 **One-command roles** | `/role add` / `/role remove` with privilege-escalation guards — you can only assign roles below your own. |
| 🚨 **Server-wide lockdown** | `/lockdown start` locks every text + forum channel (and their threads) at once; `/lockdown end` restores the exact prior permissions. |
| 🕵️ **Repeat-offender detection** | `/altguard on` fingerprints banned users and auto-bans returning alts that reuse an avatar or near-identical name; weaker matches are flagged. |
| 🤔 **AutoMod AI second-opinion** <span class="tier-badge tier-premium">PREMIUM</span> | Borderline filter hits get an AI confidence check — confident ones act, the rest go to a one-tap staff review card. |
| 📩 **Ban reasons & appeals** | Every ban DMs the user *why* and invites one reply to appeal, opening a staff ticket with Unban / Deny / Research. |
| ↩️ **24-hour undo** | Reverses your most recent ban, mute, channel deletion, or nickname change (deleted message contents can't be recovered — a Discord limit). |

> **Bulk via role mention:** `mute @TrollRole 1 hour` actions every member of that role. Bots auto-excluded; >5 targets requires the Owner.

---

## 🤖 AutoMod Engine <span class="tier-badge tier-free">FREE</span>

AutoMod runs on every non-staff message. Staff are completely exempt.

**Filter presets** (`/settings → Quick Presets → AutoMod`):

| Preset | Catches |
|---|---|
| Off | Nothing |
| Scams only | Free Nitro / Steam gift / Robux / IP-grabber links |
| **Scams + slurs (gaming)** ⭐ | Above + Level-1 hate speech. Allows casual profanity |
| Strict | Above + slurs L2, profanity L3 (high false-positive rate; child-friendly servers only) |

**Other knobs:**

- **Custom regex** — `/automod → Add Filter`, with a built-in safety check for catastrophic-backtracking patterns
- **Link blocklist** — domain-level blocks (IP-grabbers preloaded)
- **Punishment ladder** — Gentle 5/10/20 · Standard 3/5/10 · Strict 2/3/5 (warns → action)
- **Anti-spam** — auto on; 5+ duplicate messages in 5s = removed + warned
- **User DM** — every AutoMod removal DMs the user *which rule fired* + their warning count. Staff see the full embed in the log channel either way.

### 🧩 Server-type templates <span class="tier-badge tier-free">FREE</span>

The final step of `/setup` is a **community type** picker that tunes moderation to the *kind* of server you run. Each profile applies a tuned combo of **AutoMod pack + punishment ladder + anti-raid sensitivity**.

| Type | Tuning |
|---|---|
| 🌐 **General** | Balanced defaults for a mixed community — the fallback if nothing else fits. |
| 🎮 **Gaming** | Scams + slurs filtering that allows casual profanity, tuned for fast-moving chat. |
| 🎨 **Creator / Streamer** | Stricter anti-raid to weather follow-raids and shout-out spikes. |
| 🌸 **Anime / Fandom** | Community-friendly moderation tuned for high-energy fandom chat. |
| 💰 **Crypto / Trading** | Strict anti-scam, fast escalation, tight anti-raid — the highest-pressure profile. |
| 📚 **Education / Study** | A gentle, warning-first ladder that leans toward coaching over punishment. |
| 🔞 **NSFW / 18+** | Stricter anti-raid sized for adult communities and the traffic they attract. |
| 🛠️ **Set it up myself** | Applies nothing — you keep full manual control and tune every knob yourself. |

It's **pre-selected from your server's name** and defaults to General. A template is applied **only on a fresh setup or a deliberate pick**, so re-running `/setup` never overwrites tuning you've changed. **Pulse and Threat Score are never auto-enabled by a template.**

<div class="mock-pair">
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/automod → Add Filter</span></div>
        <div class="dc-embed green">
          <div class="dc-title">✅ Custom filter added</div>
          <div class="dc-desc">Your new regex rule is live and will run on every non-staff message.</div>
          <div class="dc-fname">Pattern</div>
          <div class="dc-code">\b(free|cheap)\s+followers?\b</div>
          <div class="dc-fname">Safety check</div><div class="dc-fval">Passed — no catastrophic backtracking</div>
          <div class="dc-foot">Staff are exempt · edit anytime in /automod</div>
        </div>
      </div>
    </div>
  </div>
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">⏫ Punishment ladder — auto-escalation</div>
          <div class="dc-desc">@loudmouth hit <strong>auto-warning #3</strong> on the Standard ladder (3/5/10), so the bot escalated automatically.</div>
          <div class="dc-fname">Action</div><div class="dc-fval">10-minute timeout applied · DM sent</div>
          <div class="dc-foot">Standard ladder · warns → timeout → kick → ban</div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## 📩 Ban reasons & one-reply appeals <span class="tier-badge tier-free">FREE</span>

A ban shouldn't be a silent door-slam. Every ban — *manual, `/tempban`, AutoMod, or native Discord* — DMs the member the **exact reason** staff supplied plus an invite to send **one reply** to appeal. That single reply opens an **appeal ticket** in your staff channel with one-tap buttons:

| Button | What it does |
|---|---|
| ✅ **Unban** | Lifts the ban, DMs the user the decision, writes to the audit trail. |
| 🚫 **Deny** | DMs the user that the appeal was denied, closes the ticket. |
| 🔎 **Research** | Runs **Message Report** on the member's last message so you can judge context before deciding. |
| 👤 **Info** | Quick profile — created/joined dates, roles, warning + note counts, Threat Score. Works even for banned users. |
| ⚠️ **Warnings** | Full warning history, even if they've left the server. |
| 📝 **Notes** | Staff notes (private, invisible to the user). |

No DM noise, no per-incident tickets, and no AI token spent unless **Research** is pressed — and the Info / Warnings / Notes trio pulls the full picture without leaving the card. **Soft-bans excluded; on by default** (toggle in `/settings`); buttons survive restarts.

---

## 🌟 Decision explainer & guided appeals <span class="tier-badge tier-premium">PREMIUM</span>

Two upgrades on the free flow above — fairer for members on the receiving end, less explaining for staff.

**❓ "Why was I actioned?"** — when a member is warned or muted, the bot DMs a short notice with a **Why was I actioned?** button that returns a calm, plain-language explanation drawn from the staff-supplied reason. They can also DM the bot *"why was I actioned?"* for the same on their most recent warning.

**🗣️ Guided multi-round appeals** — a ban appeal becomes a short **AI-facilitated back-and-forth**: the member shares their side, the bot asks one or two neutral follow-ups, then hands staff a **concise summary plus the full transcript** (on the ticket *and* the portal). You set the max rounds (default 3); the facilitator **never decides or promises an outcome**. Staff can press **📨 More info** to reopen with a follow-up.

**On by default** for premium servers (toggle in **Settings → Protection**); both need AI enabled. Free servers keep the one-reply appeal exactly as above.

---

## 💎 The Premium Toolkit <span class="tier-badge tier-premium">PREMIUM</span>

Seven premium features, most set up from a one-screen wizard. Tap a card for details.

<style>
.feat-list details.feat { border: 1px solid var(--glass-border); border-radius: 12px; margin: 0.45rem 0; background: var(--glass-bg); }
.feat-list details.feat > summary { cursor: pointer; font-weight: 700; padding: 0.6rem 0.9rem; list-style: none; color: var(--ink); }
.feat-list details.feat > summary::-webkit-details-marker { display: none; }
.feat-list details.feat > summary::before { content: "▸ "; color: var(--ink-soft); }
.feat-list details.feat[open] > summary::before { content: "▾ "; }
.feat-list details.feat .body { padding: 0 0.9rem 0.75rem; color: var(--ink-soft); font-size: 0.92rem; }
.feat-list details.feat code { color: var(--accent); }
</style>

<div class="feat-list" markdown="0">

<details class="feat"><summary>🎭 Reaction roles — <code>/rolepanel</code></summary>
<div class="body">Self-service role buttons built from one wizard: pick roles from a dropdown, name the panel, post it. Members click a button to add or remove a role, and a <strong>🎭 My roles</strong> button opens a private menu showing a ✓ next to the roles they already have. The bot only ever offers roles it can actually assign (nothing above its own role).</div>
</details>

<details class="feat"><summary>⌨️ Custom slash commands — <code>/customcmd</code></summary>
<div class="body">Define your own real <code>/command</code> (text or embed) — e.g. <code>/rules</code>, <code>/faq</code> — from a wizard. Embed commands have an optional <strong>🔄 Live</strong> toggle: edit the embed once and <em>every copy already posted updates</em>, turning announcements into living documents. Names are validated and can't shadow the bot's built-ins; up to 25 per server.</div>
</details>

<details class="feat"><summary>❓ AI Q&amp;A from your FAQ — <code>/faq</code></summary>
<div class="body">Members run <code>/faq</code> with a question and the bot answers <strong>only</strong> from your curated entries — when the FAQ doesn't cover something it says so and points them to staff, rather than inventing an answer. Staff curate from the <code>/faq</code> management wizard. Counts toward your AI usage, with a per-user cooldown.</div>
</details>

<details class="feat"><summary>🌐 Translation — right-click or <code>/translate</code></summary>
<div class="body">Right-click any message → <strong>Translate</strong>, or use <code>/translate</code> — into your Discord language or one you name. On-demand only, so there's no per-message cost or channel noise.</div>
</details>

<details class="feat"><summary>🤝 Mediator — <code>/mediate</code></summary>
<div class="body">The wizard has the bot DM two members, collect each side privately, and post a <strong>neutral summary</strong> to staff — a chance to de-escalate <em>before</em> anyone reaches for a moderation action. It never takes sides or recommends punishment.</div>
</details>

<details class="feat"><summary>💾 Server backup &amp; restore — <code>/backup</code></summary>
<div class="body">Snapshot your roles, categories, channels and their exact permission overwrites. <strong>Restore</strong> is owner-only, confirmation-gated, and strictly <strong>additive — it recreates anything missing and reapplies overwrites, never deletes</strong> — safe insurance after a nuke or a botched reorg.</div>
</details>

<details class="feat"><summary>🎨 White-label branding — <code>/brand</code></summary>
<div class="body">Rebrand the bot for your server: a custom per-server <strong>nickname</strong>, your <strong>name + icon</strong> on the bot's embeds, your <strong>colour</strong>, and your name in place of "Server Assistant" in footers. <em>Discord allows only one global bot identity, so this rebrands the nickname and the bot's output — not the underlying account.</em></div>
</details>

</div>

---

## 🚨 Anti-Raid Detection <span class="tier-badge tier-free">FREE</span>

Tracks join rate. When the threshold trips, the bot pings the Owner (and any roles configured in `/settings → 🔔 Notifications`), suspends onboarding DMs, and logs the event.

| Preset | Threshold |
|---|---|
| Off | — |
| Normal | 5 joins in 30s |
| Strict | 3 joins in 15s |

---

## 🔐 DM Verification Gate <span class="tier-badge tier-free">FREE</span>

Optional anti-raid measure (`/settings → Verification`). New members are DM'd a green **Verify** button; clicking it grants the verified role. If DMs are closed, the failure is logged and the user sees only `@everyone`-open channels. Stops most automated raid bots cold.

---

## 🎨 AI Features <span class="tier-badge tier-trial">TRIAL</span>

| Feature | What it does |
|---|---|
| 🖼️ **`/imagine`** | `/imagine <prompt>` returns a 1024×1024 image. Uses your own AI key (`/ai-config`), or the free trial (~30 images), or unlimited on Premium; 30s cooldown on the free tier. |
| 📋 **Message Report** | Right-click any message → **Apps ▸ Message Report** for a 3–5 bullet context summary (tone, rule-breaking, escalation, recommended action), with one-tap **Warn · Timeout · Delete · Kick · Ban** + **👤 Info · ⚠️ Warnings · 📝 Notes** (each respects your role). The bot never auto-acts — staff always decide; any action is logged with the report attached. |

<div class="mock-pair">
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/imagine</span></div>
        <div class="dc-embed">
          <div class="dc-title">🖼️ Here's your image</div>
          <div class="dc-desc"><em>"a cozy pixel-art tavern at night, warm lantern glow"</em></div>
          <div class="dc-fname">Size</div><div class="dc-fval">1024 × 1024</div>
          <div class="dc-fname">Billed to</div><div class="dc-fval">Free trial · ~30 images included</div>
          <div class="dc-foot">30s cooldown on the free tier · add your own key in /ai-config</div>
        </div>
      </div>
    </div>
  </div>
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/sai</span></div>
        <div class="dc-embed green">
          <div class="dc-title">🤖 Done — settings updated</div>
          <div class="dc-desc">You asked: <em>"make the embed colour purple and switch AutoMod to scams + slurs"</em></div>
          <div class="dc-fname">Branding → colour</div><div class="dc-fval">Custom purple <code>#8e44ad</code></div>
          <div class="dc-fname">AutoMod preset</div><div class="dc-fval">Scams + slurs (gaming) ⭐</div>
          <div class="dc-foot">Natural-language config · changes saved instantly</div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## 👋 New-Member Experience <span class="tier-badge tier-free">FREE</span>

- **Auto-onboarding DMs** (`/onboarding`) with placeholders: `[servername]`, `[usermention]`, `[membercount]`, `[owner]`, `[usercreatedat]`. Templates: Friendly · Gaming · Professional · Minimal · Custom.
- **Auto-role on join** — pick the role new members receive (`/settings → New Members → Auto-role`).
- **Welcome reaction emoji** — bot reacts to "X joined the server" system messages with your chosen emoji.

---

## 📋 Canned Responses & Scheduled Reminders <span class="tier-badge tier-free">FREE</span>

- **Snippets** — `snippet add rules-link …` then `snippet rules-link` (supports the same placeholders as onboarding). Mention a user when invoking to fill `[user]` slots.
- **Reminders** — `/schedule` (modal) or text `schedule in 30 min: check the new mod application` / `schedule at 9am: post daily update`. Uses your `/timezone`. Fires in the channel where it was created.

---

## 📊 Audit Logging <span class="tier-badge tier-free">FREE</span>

Every action posts a colour-coded embed to your log channel:

| Status | Colour |
|---|---|
| EXECUTING / SUCCESS / APPROVED | 🟢 |
| OWNER_BYPASS | 🔵 |
| PENDING_APPROVAL | 🟡 |
| DENIED / FORBIDDEN | 🔴 |
| PERMISSION_DENIED | 🟠 |

Verbosity is **All / Dangerous-only / Errors-only** (`/settings → Behavior`). A **weekly digest** posts every Monday 9am (configurable): total actions, warnings, top action types, most active staff, member count — separate from the daily 🩺 Pulse.

<details class="doc-sec" markdown="1">
<summary>🔐 Tamper-proof trail &amp; daily permission health check</summary>

**Complete, tamper-proof audit trail** — native right-click bans/kicks/timeouts are logged like bot commands (nothing slips past); every action is written to a separate record **encrypted at rest** that staff can't read, edit, or erase; deleting a log-channel entry **alerts the owner** while the encrypted record survives; and during setup you can opt into a locked `#server-assistant-log` channel only the bot can post to. When staff moderate outside the bot, the log entry nudges them to use Server Assistant next time.

**Permission health check** — once a day the bot verifies it still has **Manage Roles** plus a working staff + log channel. If a later admin change broke any of them, the **owner gets a one-time DM** naming exactly what broke and how to fix it. Idempotent and quiet (only notifies when the set of problems changes, clears once healthy), and strictly read-only.
</details>

---

## 🎨 Customisation Hub (`/settings`) <span class="tier-badge tier-free">FREE</span>

**Nine sub-wizards.** All changes save instantly.

<div class="dc" style="max-width:540px;margin:0 0 1.2rem;">
  <div class="dc-row">
    <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
    <div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/settings</span></div>
      <div class="dc-embed">
        <div class="dc-title">🎨 Settings — pick a wizard</div>
        <div class="dc-desc">Nine sub-wizards, all in one place. Choose one to configure — every change saves instantly.</div>
        <div class="dc-fname">Available</div><div class="dc-fval">🎨 Branding · ⚡ Quick Presets · 🛡️ Behaviour · 👋 New Members · 🔐 Verification</div>
        <div class="dc-fname">More</div><div class="dc-fval">📍 Channel allowlist · 🛂 Role Tiers · 🔔 Notifications · 🩺 Pulse</div>
        <div class="dc-foot">Changes save instantly · no code, no restart</div>
        <div class="dc-btns"><span class="dc-btn blurple">🎨 Branding</span><span class="dc-btn grey">⚡ Presets</span><span class="dc-btn grey">🛡️ Behaviour</span><span class="dc-btn grey">🛂 Role Tiers</span></div>
      </div>
    </div>
  </div>
</div>

| | What it covers |
|---|---|
| 🎨 **Branding** | Embed colour (12 presets + custom hex), bot nickname, default timezone |
| ⚡ **Quick Presets** | One-click bundles for AutoMod, ladder, onboarding template, anti-raid |
| 🛡️ **Behaviour** | Approval timeout, log verbosity, weekly digest day, self-checks, Threat Score |
| 👋 **New Members** | Auto-role, welcome reaction emoji |
| 🔐 **Verification** | Toggle gate + verified role |
| 📍 **Channel allowlist** | Where the bot responds to mentions |
| 🛂 **Role Tiers** | Custom tiers + approval authority per tier |
| 🔔 **Notifications** | Which staff roles get pinged on raids / approval requests / AutoMod escalations |
| 🩺 **Pulse** | Daily health digest channel + time + on/off |

---

## 🌐 Web Portal <span class="tier-badge tier-free">FREE</span>

Manage your server from any browser — no Discord required. Sign in with Discord at **[serverassistant.wandweb.co](https://serverassistant.wandweb.co)** (or run `/portal` for a private link) for a clean dashboard.

| Area | What you get |
|---|---|
| 📊 **Insights** | Expandable KPIs (members · mod actions · AI usage) with trend charts, member-growth, online / in-voice counts, a paginated activity log, and your Daily Pulse + Weekly recap. |
| 🛡️ **Act from the web** | Warn / timeout / kick / ban / unban (per your role) and resolve staff decisions — appeals, AutoMod reviews, approvals, lockdowns — from a "Needs input" strip kept in sync with the Discord card. |
| 📲 **Install + notify** | Add the portal to your home screen as an app and get a push the moment something needs your input. |
| ⚙️ **Settings** | Every customisation, the same safe options as `/settings`, with defaults shown inline. |
| 🎫 **Support** | Open and follow up on tickets with the team, with reply notifications. |
| 🤖 **SAi** | Your AI assistant in a chat bubble — ask in plain English and (as owner/admin) apply suggestions in one tap. |
| 🚀 **Web setup** | Configure a brand-new server entirely from the portal — channels, roles, AI, done. |

<details class="doc-sec" markdown="1">
<summary>👥 Your whole staff team can sign in</summary>

Owners, admins, and moderators can all sign in, and the portal mirrors each person's role exactly — never granting more than they already have in Discord. **Owners** get full control (settings, all moderation, billing, setup); **Admins** get settings + the full moderation toolkit (warn, timeout, kick, ban, unban); **Moderators** get the actions their role allows plus a read-only view of settings. Access is verified through Discord (no separate password), resolved from the roles you configured in `/setup`, scoped to just the servers that person manages, and re-checked on the server for every action.
</details>

---

## 🎫 Ticket Panels <span class="tier-badge tier-free">FREE</span> <span class="tier-badge tier-premium">PREMIUM</span>

A private, structured way for members to reach staff. An admin posts a panel; members click **Create Ticket** to open a private channel with your support team. On close, a `.txt` transcript is saved to the transcript channel and the ticket channel is removed.

| | Free <span class="tier-badge tier-free">FREE</span> | Premium <span class="tier-badge tier-premium">PREMIUM</span> |
|---|---|---|
| **Intake** | One question ("Briefly describe your issue") | Up to 4 custom questions |
| **Messages** | Default welcome | Custom welcome + close messages |
| **Mid-ticket** | — | Add users with `/tickets add @user` |
| **Always** | Private channels, Close button + `/tickets close`, `.txt` transcript, editable panel title/description | Everything in Free, plus the above |

<details class="doc-sec" markdown="1">
<summary>⚙️ Setup flow &amp; commands</summary>

Run `/tickets setup` — pick the panel channel, ticket category, support role, and an optional transcript channel. The bot posts a styled embed with a persistent **Create Ticket** button; a member's click opens a private `ticket-0001-username` channel visible only to them, the support role, and admins, showing the intake answers with a **Close Ticket** button.

| Command | Who can use it |
|---|---|
| `/tickets setup` · `/tickets panel` | Admin / Owner |
| `/tickets close [reason]` | Ticket owner, support role, anyone with Manage Channels |
| `/tickets questions` · `/tickets add @user` | Admin / Owner *(Premium)* |

The bot needs **Manage Channels** + **Manage Roles**, with its role above the support role in the hierarchy.
</details>

---

## 🔐 Privacy & Security <span class="tier-badge tier-free">FREE</span>

Your AI keys and other credentials are **encrypted at rest**. Per-server data is isolated. Removing the bot wipes your server's encrypted secrets immediately; the retention rules for warnings, notes, and audit logs are in the **[Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/)**.

---

## What's next?

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — get the bot running
- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** — every command + per-tier permissions
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
- **[Support]({{ site.url }}{{ site.baseurl }}/support/)** — get help
