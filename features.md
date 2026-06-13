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

<figure class="media-frame">
  <img src="{{ '/assets/screenshots/pulse-digest.webp' | relative_url }}" alt="The daily Pulse health digest embed showing message counts, joins and leaves, AutoMod blocks, and week-over-week deltas." loading="lazy">
  <figcaption>The daily 🩺 Pulse digest — server health at a glance.</figcaption>
</figure>

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

<figure class="media-frame">
  <img src="{{ '/assets/screenshots/automod-log.webp' | relative_url }}" alt="The AutoMod staff log embed showing which rule fired on a removed message." loading="lazy">
  <figcaption>Staff see the full removal in the log channel — which rule fired and why.</figcaption>
</figure>

<figure class="media-frame">
  <img src="{{ '/assets/screenshots/automod-user-dm.webp' | relative_url }}" alt="The DM a member receives after an AutoMod removal, naming the rule that fired and their warning count." loading="lazy">
  <figcaption>The member gets a DM naming the rule and their current warning count.</figcaption>
</figure>

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

<figure class="media-frame">
  <img src="{{ '/assets/screenshots/report-menu.webp' | relative_url }}" alt="The Discord right-click Apps menu showing the Message Report action." loading="lazy">
  <figcaption>Right-click any message → Apps ▸ Message Report.</figcaption>
</figure>

<figure class="media-frame">
  <img src="{{ '/assets/screenshots/report-result.webp' | relative_url }}" alt="A Message Report result: an AI bullet summary with one-tap action and investigative buttons." loading="lazy">
  <figcaption>The AI summary, with action and investigative buttons attached.</figcaption>
</figure>

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

---

## 🎨 Customisation Hub (`/settings`) <span class="tier-badge tier-free">FREE</span>

**Nine sub-wizards.** All changes save instantly.

<figure class="media-frame">
  <img src="{{ '/assets/screenshots/settings-hub.webp' | relative_url }}" alt="The /settings hub showing its sub-wizards for branding, presets, behaviour, and more." loading="lazy">
  <figcaption>The <code>/settings</code> hub — every sub-wizard in one place.</figcaption>
</figure>

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
