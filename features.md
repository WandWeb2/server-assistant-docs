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

<style>
.ai-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1rem 0 1.5rem; }
.ai-card { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.15); border-radius: 14px; padding: 1rem 1.2rem; box-shadow: 0 4px 18px rgba(31,38,135,0.08); }
.ai-card h4 { margin: 0 0 .35rem; font-size: 1.05rem; }
.ai-card .ai-tag { display: inline-block; font-size: .68rem; font-weight: 700; padding: .12rem .55rem; border-radius: 999px; background: rgba(46,204,113,.15); color: #1b5e20; margin-left: .4rem; vertical-align: middle; }
.ai-card .ai-tag.premium { background: rgba(241,196,15,.18); color: #8a5a00; }
.ai-card p { margin: 0; font-size: .92rem; line-height: 1.45; color: #2e3340; }
.ai-card .ai-where { margin-top: .55rem; font-size: .8rem; color: #5c6470; }
@media (max-width: 700px) { .ai-grid { grid-template-columns: 1fr; } }
</style>

<div class="ai-grid">
  <div class="ai-card">
    <h4>🩺 Pulse <span class="ai-tag">on by default</span> <span class="tier-badge tier-trial">TRIAL</span></h4>
    <p>A daily one-embed health report — messages, joins/leaves, AutoMod blocks, warnings — with week-over-week deltas and flags for the quiet patterns humans miss.</p>
    <div class="ai-where">Configure: <code>/settings → 🩺 Pulse</code></div>
  </div>
  <div class="ai-card">
    <h4>🧠 Self-trained AutoMod <span class="ai-tag">opt-in</span> <span class="tier-badge tier-trial">TRIAL</span></h4>
    <p>Watches the messages your staff delete or report, then proposes server-specific AutoMod rules for your approval. Nothing auto-enforced; 30-day local log, no identities stored.</p>
    <div class="ai-where">Enable: <code>/automod → Self-training</code></div>
  </div>
  <div class="ai-card">
    <h4>🩹 Bot Health Insurance <span class="ai-tag">on by default</span> <span class="tier-badge tier-trial">TRIAL</span></h4>
    <p>The bot watches its <em>own</em> footprint. If it gets heavy-handed, it suggests tuning — at most once every 14 days, so the anti-noise feature never becomes noise.</p>
    <div class="ai-where">Toggle: <code>/settings → Behavior</code></div>
  </div>
  <div class="ai-card">
    <h4>🛡️ Threat Score <span class="ai-tag">advisory free · active Premium</span></h4>
    <p>At-a-glance per-user risk — 🟢 Low / 🟠 Elevated / 🔴 High — in user profiles. A transparent read of infraction history, weighted by severity and decaying over time. <strong>The advisory view is free for every server</strong>; the <strong>active, score-driven action</strong> phase (Premium) uses the score to drive moderation, with the safeguards listed on the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">roadmap</a>.</p>
    <div class="ai-where">Enable: <code>/settings → Behavior</code></div>
  </div>
</div>

---

## 🛡️ Moderation <span class="tier-badge tier-free">FREE</span>

<style>
.f-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1rem 0 1.5rem; }
.f-card { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.15); border-radius: 14px; padding: 0.95rem 1.15rem; box-shadow: 0 4px 18px rgba(31,38,135,0.08); }
.f-card h4 { margin: 0 0 .3rem; font-size: 1rem; }
.f-card p, .f-card ul { margin: 0; font-size: .9rem; line-height: 1.45; color: #2e3340; }
.f-card ul { padding-left: 1.1rem; }
.f-card code { font-size: 0.84em; }
@media (max-width: 700px) { .f-grid { grid-template-columns: 1fr; } }
</style>

<div class="f-grid">
  <div class="f-card">
    <h4>🛂 Role-based tiers</h4>
    <p>Defaults: <strong>Owner / Admin / Moderator</strong>. Each tier has its own capabilities + approval authority — fully customisable in <code>/settings → Role Tiers</code> (add Helper, Trial Mod, Senior Mod, anything).</p>
  </div>
  <div class="f-card">
    <h4>⚖️ Tiered approval</h4>
    <p>Dangerous actions (like <code>/purge</code>) route <strong>up</strong> a tier: admins approve moderators; the owner approves admins. Anyone with approval authority — or the owner — runs them directly.</p>
  </div>
  <div class="f-card">
    <h4>⚠️ Persistent warnings + DMs</h4>
    <p>Every warning is timestamped, attributed, and the user gets a DM with their current count and escalation context. Run <code>/warnings @user</code> or <code>/manage-warnings</code> to view or remove.</p>
  </div>
  <div class="f-card">
    <h4>📝 Private staff notes</h4>
    <p>For tracking behaviour without a formal warning. <strong>Invisible to the user</strong>; staff-only via <code>/note</code>, <code>/notes</code>, <code>/manage-notes</code>.</p>
  </div>
  <div class="f-card">
    <h4>🧹 Soft-ban + time-based purge</h4>
    <p><code>/softban</code> ban-then-unban to sweep messages without permanent removal. <code>/purge 50</code> or text <code>purge since 1pm</code> (your timezone; capped at Discord's 14-day limit).</p>
  </div>
  <div class="f-card">
    <h4>🤖 Smart purge</h4>
    <p><code>/smartpurge</code> — AI cleanup that removes only the genuinely problematic messages and <strong>keeps the rest</strong>, instead of clearing everything like a plain <code>/purge</code>.</p>
  </div>
  <div class="f-card">
    <h4>⏲️ Timed bans</h4>
    <p><code>/tempban @user 7d reason</code> bans for a set time — <code>30m</code>, <code>2h</code>, <code>7d</code>, <code>1w</code>, even <code>1d12h</code> (1 min–28 days) — then <strong>un-bans automatically</strong>. The timer survives restarts, and the lift is logged to your audit trail.</p>
  </div>
  <div class="f-card">
    <h4>🎭 One-command roles</h4>
    <p><code>/role add @user @role</code> / <code>/role remove @user @role</code> — no digging through Discord's menus. Guards against privilege escalation: you can only assign roles below your own, and managed/integration roles are off-limits.</p>
  </div>
  <div class="f-card">
    <h4>🚨 Server-wide lockdown</h4>
    <p><code>/lockdown start</code> locks every <strong>text and forum channel</strong> in one shot — including their threads and posts, so a raid can't just move into a thread. <code>/lockdown end</code> restores each channel to its <strong>exact prior permissions</strong>, not a best guess. Reuses your existing lock permission, so there's nothing new to configure.</p>
  </div>
  <div class="f-card">
    <h4>🕵️ Repeat-offender detection</h4>
    <p>Enable with <code>/altguard on</code>. Fingerprints the users you ban or kick, then checks every new joiner — a fresh account reusing a banned user's avatar or near-identical name is <strong>auto-banned and reported to staff</strong>; weaker matches are flagged for review. Soft-bans are excluded.</p>
  </div>
  <div class="f-card">
    <h4>🤔 AutoMod AI second-opinion <span class="tier-badge tier-premium">PREMIUM</span></h4>
    <p>Optional in <code>/automod → AI Review</code>. Borderline filter hits get an AI confidence check first — confident ones act, low-confidence ones go to a one-tap staff review card (<em>Delete &amp; warn</em> / <em>Allow</em>) instead of an auto-delete. Cuts false positives; only borderline messages cost tokens.</p>
  </div>
  <div class="f-card">
    <h4>📩 Ban reasons &amp; appeals</h4>
    <p>Every ban (manual, <code>/tempban</code>, AutoMod, or native) DMs the user <strong>why</strong> and invites <strong>one reply</strong> to appeal. The reply opens a staff appeal ticket with <strong>Unban</strong> / <strong>Deny</strong> / <strong>Research</strong> (runs Message Report on their last message). Soft-bans excluded; on by default.</p>
  </div>
  <div class="f-card">
    <h4>↩️ 24-hour undo</h4>
    <p>Reverses your most recent ban, mute, channel deletion (incl. permissions), or nickname change. Note: deleted message contents can't be recovered — that's a Discord limit.</p>
  </div>
</div>

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

The final step of `/setup` is a **community type** picker that tunes moderation to the *kind* of server you run, instead of one-size-fits-all. Each profile applies a tuned combo of **AutoMod pack + punishment ladder + anti-raid sensitivity**.

<div class="f-grid">
  <div class="f-card">
    <h4>🌐 General</h4>
    <p>Balanced defaults for a mixed community. The fallback if nothing else fits.</p>
  </div>
  <div class="f-card">
    <h4>🎮 Gaming</h4>
    <p>Scams + slurs filtering that allows casual profanity, tuned for fast-moving chat.</p>
  </div>
  <div class="f-card">
    <h4>🎨 Creator / Streamer</h4>
    <p>Stricter anti-raid to weather follow-raids and shout-out spikes.</p>
  </div>
  <div class="f-card">
    <h4>🌸 Anime / Fandom</h4>
    <p>Community-friendly moderation tuned for high-energy fandom chat.</p>
  </div>
  <div class="f-card">
    <h4>💰 Crypto / Trading</h4>
    <p>Strict anti-scam, fast escalation, and tight anti-raid — the highest-pressure profile.</p>
  </div>
  <div class="f-card">
    <h4>📚 Education / Study</h4>
    <p>A gentle, warning-first ladder that leans toward coaching over punishment.</p>
  </div>
  <div class="f-card">
    <h4>🔞 NSFW / 18+</h4>
    <p>Stricter anti-raid sized for adult communities and the traffic they attract.</p>
  </div>
  <div class="f-card">
    <h4>🛠️ Set it up myself</h4>
    <p>Applies nothing — you keep full manual control and tune every knob yourself.</p>
  </div>
</div>

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

A ban shouldn't be a silent door-slam. Server Assistant turns every ban — *manual, `/tempban`, AutoMod, or native Discord* — into a transparent process for both sides.

**For the banned member:** an automatic DM with the **exact reason** staff supplied, plus an invitation to send **one reply** to appeal. Just one — no escalating threads, no bot back-and-forth, no DM noise.

**For your staff:** that single reply opens an **appeal ticket** in your log / staff channel with three one-tap buttons:

| Button | What it does |
|---|---|
| ✅ **Unban** | Lifts the ban, DMs the user the decision, writes to the audit trail. |
| 🚫 **Deny** | DMs the user that the appeal was denied, closes the ticket. |
| 🔎 **Research** | Runs **Message Report** on the member's last message in your server — so you can judge context (tone, escalation, history) before deciding. |
| 👤 **Info** | Quick profile — created/joined dates, roles, warning + note counts, Threat Score (if enabled). Works even for already-banned users. |
| ⚠️ **Warnings** | Full warning history for the user, even if they're not in the server anymore. |
| 📝 **Notes** | Staff notes (private, invisible to the user). |

**Why this matters:** most moderation bots treat a ban as an opaque, final action. This gives every accused member a structured way to be heard — *without* a flood of DMs, *without* per-incident tickets, and *without* spending an AI token unless **Research** is pressed. And the **Info / Warnings / Notes** trio lets staff pull the full picture on a banned user without leaving the appeal card — no separate `/info` round-trip.

**Soft-bans excluded** (they're meant to let people rejoin). **On by default**; turn off per server in `/settings`. Buttons survive bot restarts.

---

## 🌟 Decision explainer & guided appeals <span class="tier-badge tier-premium">PREMIUM</span>

Two premium upgrades that build on the free flow above — fairer moderation for the people on the receiving end, less explaining for your staff.

**❓ "Why was I actioned?"** — when a member is **warned** or **muted**, the bot DMs them a short notice with a **Why was I actioned?** button. One tap returns a calm, plain-language explanation drawn from the staff-supplied reason, so the member understands what happened without a moderator writing it out. They can also just DM the bot *"why was I actioned?"* for the same on their most recent warning.

**🗣️ Guided multi-round appeals** — instead of the single reply, a ban appeal becomes a short **AI-facilitated back-and-forth**: the member shares their side, the bot may ask **one or two neutral follow-up questions** to draw out context, then hands staff a **concise summary plus the full transcript** — on the appeal ticket *and* the portal "Needs input" card. You set the maximum rounds (default 3), and the facilitator **never decides or promises an outcome** — your staff still make every call.

**On by default** for premium servers (toggle in **Settings → Protection**); both need AI enabled. Free servers keep the one-reply appeal + ban-reason DM exactly as above.

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

<div class="f-grid">
  <div class="f-card">
    <h4>🖼️ <code>/imagine</code> — image generation</h4>
    <p>Type <code>/imagine &lt;prompt&gt;</code>, get a 1024×1024 image. Uses your own AI key if you've added one in <code>/ai-config</code>; otherwise the free trial covers ~30 images and Premium is unlimited. 30s cooldown between images on the free tier.</p>
  </div>
  <div class="f-card">
    <h4>📋 Message Report — context summaries</h4>
    <p>Right-click any message → <strong>Apps ▸ Message Report</strong>. The bot reads ~20 surrounding messages and returns a 3–5 bullet summary: tone, possible rule-breaking, escalation pattern, recommended action. Only you see it — with one-tap <strong>Warn · Timeout · Delete · Kick · Ban</strong> buttons and a second row of <strong>👤 Info · ⚠️ Warnings · 📝 Notes</strong> for pulling the full picture before deciding (each respects your role permissions). Any action is logged to your audit trail <strong>with the report attached</strong>. <strong>The bot never auto-acts — staff always decide.</strong></p>
  </div>
</div>

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

Verbosity: **All / Dangerous-only / Errors-only** (`/settings → Behavior → Log verbosity`).

**Weekly digest** — every Monday at 9am (configurable day) the bot posts a summary: total actions, warnings, top action types, most active staff, member count. Separate from the daily 🩺 Pulse digest.

### 🔐 Complete, tamper-proof audit trail

Logging isn't just for actions run through the bot:

- **Native actions captured too.** A right-click ban, kick, or timeout done **directly in Discord** is logged like a bot command — nothing slips past your audit log.
- **Encrypted at rest.** Every action is written to a separate record encrypted with the same key protecting your credentials. Staff can't read, edit, or erase it — only Server Assistant can.
- **Tamper alerts.** Delete an entry from your log channel and the owner is notified automatically; the encrypted record stays intact.
- **Optional locked log channel.** During `/autopilot` or `/setup`, opt in to a `#server-assistant-log` channel only the bot can post to — entries can't be deleted.
- **Native-action coaching.** When staff moderate outside the bot, the log entry tips them to use Server Assistant next time (so it's reversible and logged consistently).

### 🩺 Permission health check

Catches the silent *"why did the bot stop working?"* failure after a channel is deleted or the bot's role is moved.

- **Once a day, per server,** the bot verifies it still has what it needs: the **Manage Roles** permission, plus a **working (existing + postable) staff chat and log channel**.
- If a later admin change broke any of them, the **server Owner gets a one-time DM** (with a channel-fallback `@owner` ping) naming exactly **what broke and how to fix it**.
- **Idempotent and quiet:** it only notifies when the *set* of problems changes, and clears once healthy — no repeat pings.
- **Read-only.** It checks and reports; it never changes your settings.

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

Manage your server from any browser — no Discord required. Sign in with Discord at **[serverassistant.wandweb.co](https://serverassistant.wandweb.co)** (or run `/portal` in your server for a private link), and you get a clean dashboard for everything:

- **Insights** — expandable KPIs (members · mod actions · AI usage) with trend charts, a member-growth chart, **online / in-voice** counts, a **paginated activity log** (with real names), and your **Daily Pulse + Weekly mod recap**.
- **Act from the web** — take moderation actions (warn/timeout/kick/ban/unban, per your role), and resolve **staff decisions** — ban appeals, AutoMod reviews, owner-approvals, raid lock-downs — from a "Needs input" strip, kept in sync with the Discord card.
- **Install it + get notified** — add the portal to your home screen as an app, and turn on notifications to get a push the moment something needs your input.
- **Settings** — every customisation, the same safe options as `/settings`, with sensible defaults shown inline.
- **Support** — open and follow up on tickets with the team, with reply notifications.
- **SAi** — your AI assistant in a chat bubble: ask in plain English and (as owner/admin) apply its suggestions in one tap.
- **Web setup** — brand-new servers can be configured entirely from the portal: pick your channels, roles and AI, and the bot does the rest.

Your **whole staff team** can sign in — **owners, admins, and moderators** — and the portal mirrors each person's role exactly, never granting more than they already have in your server:

- **Owners** — full control: settings, all moderation, billing, and setup.
- **Admins** — settings + the full moderation toolkit (warn, timeout, kick, ban, unban).
- **Moderators** — the moderation actions their role allows (e.g. warn, timeout, kick, ban) and a read-only view of settings.

Access is verified through Discord (no separate password), resolved from the **roles you've already configured** in `/setup`, and every session is scoped to just the servers that person manages — and re-checked on the server for every action.

---

## 🎫 Ticket Panels <span class="tier-badge tier-free">FREE</span> <span class="tier-badge tier-premium">PREMIUM</span>

Give members a private, structured way to reach staff without leaving your server. An admin posts a panel in any public channel; members click **Create Ticket** to open a dedicated private channel with your support team.

**How the flow works:**

1. Admin runs `/tickets setup` — picks the panel channel, ticket category, support role, and (optionally) a transcript channel.
2. The bot posts a styled embed with a persistent **Create Ticket** button.
3. A member clicks it, fills a short intake form (a Discord modal), and the bot creates a private `ticket-0001-username` channel — visible only to them, the support role, and admins.
4. The opening message shows the intake answers, pings the support role, and includes a **Close Ticket** button.
5. On close, the bot saves a `.txt` transcript to the transcript channel, then deletes the ticket channel after 5 seconds.

<div class="f-grid">
  <div class="f-card">
    <h4>Free tier <span class="tier-badge tier-free">FREE</span></h4>
    <ul>
      <li>Panel embed with one intake question (<em>"Briefly describe your issue"</em>)</li>
      <li>Private ticket channels with support-role and admin access</li>
      <li>Close button in every ticket + <code>/tickets close [reason]</code></li>
      <li>Plain-text <code>.txt</code> transcript posted to the transcript channel on close</li>
      <li>Edit panel title and description via <code>/tickets panel</code></li>
    </ul>
  </div>
  <div class="f-card">
    <h4>Premium tier <span class="tier-badge tier-premium">PREMIUM</span></h4>
    <ul>
      <li><strong>Up to 4 custom intake questions</strong> — <code>/tickets questions q1: … q2: … q3: … q4: …</code></li>
      <li><strong>Custom welcome message</strong> — set via <code>/tickets panel welcome_message: …</code></li>
      <li><strong>Custom close message</strong> — set via <code>/tickets panel close_message: …</code></li>
      <li><strong>Add users mid-ticket</strong> — <code>/tickets add @user</code></li>
    </ul>
  </div>
</div>

| Command | Who can use it |
|---|---|
| `/tickets setup` | Admin / Owner |
| `/tickets close [reason]` | Ticket owner, support-role members, anyone with Manage Channels |
| `/tickets panel` | Admin / Owner |
| `/tickets questions` | Admin / Owner *(Premium)* |
| `/tickets add @user` | Admin / Owner *(Premium)* |

> **Note:** The bot needs **Manage Channels** and **Manage Roles** permissions to create private ticket channels and set per-channel access overwrites. Make sure the bot's role sits above the support role in the Discord role hierarchy.

---

## 🔐 Privacy & Security <span class="tier-badge tier-free">FREE</span>

Your AI keys and other credentials are **encrypted at rest**. Per-server data is isolated. Removing the bot wipes your server's encrypted secrets immediately; the retention rules for warnings, notes, and audit logs are in the **[Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/)**.

---

## What's next?

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — get the bot running
- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** — every command + per-tier permissions
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
- **[Support]({{ site.url }}{{ site.baseurl }}/support/)** — get help
