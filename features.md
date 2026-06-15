---
layout: default
title: Features
permalink: /features/
description: A scannable tour of Server Assistant's flagship features.
---

# ✨ Features

Scroll for the highlights — **tap any card to expand the detail.** For the full command list see **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)**; for what's free vs Premium see **[Pricing]({{ site.url }}{{ site.baseurl }}/pricing/)**.

<style>
.tier-badge { display: inline-block; font-size: 0.62rem; font-weight: 800; letter-spacing: 0.05em;
              padding: 0.12rem 0.45rem; border-radius: 999px; vertical-align: middle;
              margin-left: 0.35rem; text-transform: uppercase; }
.tier-free    { background: rgba(46,204,113,0.18);  color: #1b8e3a; }
.tier-trial   { background: rgba(52,152,219,0.18);  color: #1f6dbf; }
.tier-premium { background: rgba(241,196,15,0.20);  color: #8a5a00; }

/* First-glance card grid — scannable summaries, full detail one tap away. */
.xgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.5rem; align-items: start; margin: 1rem 0 1.4rem; }
.xgrid details.x { border: 1px solid var(--glass-border); border-radius: 10px; background: rgba(255,255,255,0.04); }
.xgrid details.x > summary { cursor: pointer; padding: 0.55rem 0.8rem; list-style: none; color: var(--ink); font-size: 0.94rem; }
.xgrid details.x > summary::-webkit-details-marker { display: none; }
.xgrid details.x > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .4rem; font-size: .75em; }
.xgrid details.x[open] > summary::before { content: "▾"; }
.xgrid details.x[open] > summary { border-bottom: 1px solid var(--glass-border); }
.xgrid details.x .b { padding: 0.55rem 0.85rem 0.7rem; color: var(--ink-soft); font-size: 0.87rem; line-height: 1.5; }
.xgrid details.x .b code { color: var(--accent); font-size: 0.85em; }
.xgrid details.x .b p { margin: 0 0 .5rem; }
.xgrid details.x .b p:last-child { margin-bottom: 0; }
.xgrid details.x .b table { width: 100%; font-size: 0.82rem; margin: .2rem 0 .4rem; border-collapse: collapse; }
.xgrid details.x .b th, .xgrid details.x .b td { text-align: left; padding: .25rem .4rem; border-bottom: 1px solid var(--glass-border); vertical-align: top; }
.xgrid .t { color: var(--ink-soft); font-weight: 400; }
@media (max-width: 600px) { .xgrid { grid-template-columns: 1fr; } }
</style>

<p style="font-size:.85rem;color:var(--ink-soft);margin:.2rem 0 0;">
<span class="tier-badge tier-free">FREE</span> always free ·
<span class="tier-badge tier-trial">TRIAL</span> uses your AI tokens, on the free trial ·
<span class="tier-badge tier-premium">PREMIUM</span> needs a subscription
</p>

---

## 🧠 The AI-Moderation Suite

AI that watches your server's *health and behaviour* — **advisory by design**. X-ray vision for your team; the decisions stay with you.

<div class="dc" style="max-width:540px;margin:1rem 0 1.2rem;">
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

<div class="xgrid" markdown="0">
  <details class="x"><summary>🩺 <strong>Pulse</strong> <span class="t">— daily health report</span> <span class="tier-badge tier-trial">TRIAL</span></summary><div class="b">A daily one-embed health report — messages, joins/leaves, AutoMod blocks, warnings — with week-over-week deltas and flags for the quiet patterns humans miss. On by default; configure in <code>/settings → 🩺 Pulse</code>.</div></details>
  <details class="x"><summary>🧠 <strong>Self-trained AutoMod</strong> <span class="t">— learns from you</span> <span class="tier-badge tier-trial">TRIAL</span></summary><div class="b">Watches the messages your staff delete or report, then proposes server-specific AutoMod rules for your approval. Nothing auto-enforced; 30-day local log, no identities stored. Enable in <code>/automod → Self-training</code>.</div></details>
  <details class="x"><summary>🩹 <strong>Bot Health Insurance</strong> <span class="t">— it watches itself</span> <span class="tier-badge tier-trial">TRIAL</span></summary><div class="b">The bot watches its <em>own</em> footprint. If it gets heavy-handed, it suggests tuning — at most once every 14 days, so the anti-noise feature never becomes noise. Toggle in <code>/settings → Behavior</code>.</div></details>
  <details class="x"><summary>🛡️ <strong>Threat Score</strong> <span class="t">— per-user risk read</span></summary><div class="b">At-a-glance per-user risk — 🟢 Low / 🟠 Elevated / 🔴 High — in user profiles. A transparent read of infraction history, weighted by severity and decaying over time. <strong>The advisory view is free for every server</strong>; the <strong>active, score-driven action</strong> phase (Premium) uses the score to drive moderation, with the safeguards listed on the roadmap. Enable in <code>/settings → Behavior</code>.</div></details>
</div>

---

## 🛡️ Moderation <span class="tier-badge tier-free">FREE</span>

The core toolkit — staff-only, role-aware, every action logged.

<div class="xgrid" markdown="0">
  <details class="x"><summary>🛂 <strong>Role-based tiers</strong> <span class="t">— customisable</span></summary><div class="b">Defaults: <strong>Owner / Admin / Moderator</strong>. Each tier has its own capabilities + approval authority — fully customisable in <code>/settings → Role Tiers</code> (add Helper, Trial Mod, Senior Mod, anything).</div></details>
  <details class="x"><summary>⚖️ <strong>Tiered approval</strong> <span class="t">— actions route up</span></summary><div class="b">Dangerous actions (like <code>/purge</code>) route <strong>up</strong> a tier: admins approve moderators; the owner approves admins. Anyone with approval authority — or the owner — runs them directly.</div></details>
  <details class="x"><summary>⚠️ <strong>Persistent warnings + DMs</strong></summary><div class="b">Every warning is timestamped, attributed, and the user gets a DM with their current count and escalation context. Run <code>/warnings @user</code> or <code>/manage-warnings</code> to view or remove.</div></details>
  <details class="x"><summary>📝 <strong>Private staff notes</strong></summary><div class="b">For tracking behaviour without a formal warning. <strong>Invisible to the user</strong>; staff-only via <code>/note</code>, <code>/notes</code>, <code>/manage-notes</code>.</div></details>
  <details class="x"><summary>🧹 <strong>Soft-ban + timed purge</strong></summary><div class="b"><code>/softban</code> ban-then-unban to sweep messages without permanent removal. <code>/purge 50</code> or text <code>purge since 1pm</code> (your timezone; capped at Discord's 14-day limit).</div></details>
  <details class="x"><summary>🤖 <strong>Smart purge</strong> <span class="t">— AI keeps the rest</span></summary><div class="b"><code>/purge … mode: Smart</code> — AI cleanup that removes only the genuinely problematic messages and <strong>keeps the rest</strong>, instead of clearing everything like a plain purge.</div></details>
  <details class="x"><summary>⏲️ <strong>Timed bans</strong> <span class="t">— auto-unban</span></summary><div class="b"><code>/tempban @user 7d reason</code> bans for a set time — <code>30m</code>, <code>2h</code>, <code>7d</code>, <code>1w</code>, even <code>1d12h</code> (1 min–28 days) — then <strong>un-bans automatically</strong>. The timer survives restarts, and the lift is logged to your audit trail.</div></details>
  <details class="x"><summary>🎭 <strong>One-command roles</strong></summary><div class="b"><code>/role add @user @role</code> / <code>/role remove @user @role</code> — no digging through Discord's menus. Guards against privilege escalation: you can only assign roles below your own, and managed/integration roles are off-limits.</div></details>
  <details class="x"><summary>🚨 <strong>Server-wide lockdown</strong></summary><div class="b"><code>/lockdown start</code> locks every <strong>text and forum channel</strong> in one shot — including their threads and posts, so a raid can't just move into a thread. <code>/lockdown end</code> restores each channel to its <strong>exact prior permissions</strong>, not a best guess.</div></details>
  <details class="x"><summary>🕵️ <strong>Repeat-offender detection</strong></summary><div class="b">Enable with <code>/altguard on</code>. Fingerprints the users you ban or kick, then checks every new joiner — a fresh account reusing a banned user's avatar or near-identical name is <strong>auto-banned and reported to staff</strong>; weaker matches are flagged for review. Soft-bans are excluded.</div></details>
  <details class="x"><summary>🤔 <strong>AutoMod AI second-opinion</strong> <span class="tier-badge tier-premium">PREMIUM</span></summary><div class="b">Optional in <code>/automod → AI Review</code>. Borderline filter hits get an AI confidence check first — confident ones act, low-confidence ones go to a one-tap staff review card (<em>Delete &amp; warn</em> / <em>Allow</em>) instead of an auto-delete. Cuts false positives; only borderline messages cost tokens.</div></details>
  <details class="x"><summary>📩 <strong>Ban reasons &amp; appeals</strong></summary><div class="b">Every ban (manual, <code>/tempban</code>, AutoMod, or native) DMs the user <strong>why</strong> and invites <strong>one reply</strong> to appeal. The reply opens a staff appeal ticket with <strong>Unban</strong> / <strong>Deny</strong> / <strong>Research</strong> (runs Message Report on their last message). Soft-bans excluded; on by default.</div></details>
  <details class="x"><summary>↩️ <strong>24-hour undo</strong></summary><div class="b">Reverses your most recent ban, mute, channel deletion (incl. permissions), or nickname change. Note: deleted message contents can't be recovered — that's a Discord limit.</div></details>
</div>

> **Bulk via role mention:** `mute @TrollRole 1 hour` actions every member of that role. Bots auto-excluded; >5 targets requires the Owner.

---

## 🤖 AutoMod Engine <span class="tier-badge tier-free">FREE</span>

Runs on every non-staff message. Staff are completely exempt.

<div class="xgrid" markdown="0">
  <details class="x"><summary>⚡ <strong>Filter presets</strong> <span class="t">— Off → Strict</span></summary><div class="b"><p>One-click packs in <code>/settings → Quick Presets → AutoMod</code>:</p><table><thead><tr><th>Preset</th><th>Catches</th></tr></thead><tbody><tr><td>Off</td><td>Nothing</td></tr><tr><td>Scams only</td><td>Free Nitro / Steam gift / Robux / IP-grabber links</td></tr><tr><td><strong>Scams + slurs (gaming)</strong> ⭐</td><td>Above + Level-1 hate speech. Allows casual profanity</td></tr><tr><td>Strict</td><td>Above + slurs L2, profanity L3 (high false-positive; child-friendly only)</td></tr></tbody></table></div></details>
  <details class="x"><summary>🧩 <strong>Server-type templates</strong> <span class="t">— tune to your community</span></summary><div class="b"><p>The final <code>/setup</code> step tunes moderation to the <em>kind</em> of server you run — each profile a combo of AutoMod pack + punishment ladder + anti-raid sensitivity.</p><table><thead><tr><th>Type</th><th>Tuning</th></tr></thead><tbody><tr><td>🌐 General</td><td>Balanced defaults for a mixed community.</td></tr><tr><td>🎮 Gaming</td><td>Scams + slurs, allows casual profanity, tuned for fast chat.</td></tr><tr><td>🎨 Creator / Streamer</td><td>Stricter anti-raid for follow-raids and shout-out spikes.</td></tr><tr><td>🌸 Anime / Fandom</td><td>Community-friendly, tuned for high-energy fandom chat.</td></tr><tr><td>💰 Crypto / Trading</td><td>Strict anti-scam, fast escalation, tight anti-raid.</td></tr><tr><td>📚 Education / Study</td><td>Gentle, warning-first, coaching over punishment.</td></tr><tr><td>🔞 NSFW / 18+</td><td>Stricter anti-raid sized for adult communities.</td></tr><tr><td>🛠️ Set it up myself</td><td>Applies nothing — full manual control.</td></tr></tbody></table><p>Pre-selected from your server's name. Applied only on a fresh setup or a deliberate pick, so re-running <code>/setup</code> never overwrites tuning you've changed. Pulse and Threat Score are never auto-enabled.</p></div></details>
  <details class="x"><summary>🔧 <strong>Custom regex filters</strong></summary><div class="b"><code>/automod → Add Filter</code>, with a built-in safety check for catastrophic-backtracking patterns before a rule goes live.</div></details>
  <details class="x"><summary>🚫 <strong>Link blocklist</strong></summary><div class="b">Domain-level blocks, with known IP-grabber domains preloaded.</div></details>
  <details class="x"><summary>⏫ <strong>Punishment ladder</strong></summary><div class="b">Auto-escalation: Gentle 5/10/20 · Standard 3/5/10 · Strict 2/3/5 (warns → timeout → kick → ban).</div></details>
  <details class="x"><summary>💢 <strong>Anti-spam</strong></summary><div class="b">Auto-on; 5+ duplicate messages in 5 seconds are removed and the user is warned.</div></details>
  <details class="x"><summary>📩 <strong>User DM on removal</strong></summary><div class="b">Every AutoMod removal DMs the user <em>which rule fired</em> plus their warning count. Staff see the full embed in the log channel either way.</div></details>
</div>

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

A ban shouldn't be a silent door-slam — every ban becomes a transparent process for both sides.

<div class="xgrid" markdown="0">
  <details class="x"><summary>📨 <strong>For the banned member</strong> <span class="t">— reason + one reply</span></summary><div class="b">An automatic DM with the <strong>exact reason</strong> staff supplied, plus an invitation to send <strong>one reply</strong> to appeal. Just one — no escalating threads, no bot back-and-forth, no DM noise. Soft-bans are excluded (they're meant to let people rejoin).</div></details>
  <details class="x"><summary>🛠️ <strong>For your staff</strong> <span class="t">— one-tap appeal ticket</span></summary><div class="b"><p>That single reply opens an <strong>appeal ticket</strong> in your staff channel with one-tap buttons:</p><table><thead><tr><th>Button</th><th>What it does</th></tr></thead><tbody><tr><td>✅ <strong>Unban</strong></td><td>Lifts the ban, DMs the user, writes to the audit trail.</td></tr><tr><td>🚫 <strong>Deny</strong></td><td>DMs the denial, closes the ticket.</td></tr><tr><td>🔎 <strong>Research</strong></td><td>Runs Message Report on their last message for context.</td></tr><tr><td>👤 <strong>Info</strong></td><td>Profile — dates, roles, warning + note counts, Threat Score.</td></tr><tr><td>⚠️ <strong>Warnings</strong></td><td>Full history, even if they've left.</td></tr><tr><td>📝 <strong>Notes</strong></td><td>Staff notes (private).</td></tr></tbody></table><p>No AI token is spent unless <strong>Research</strong> is pressed. On by default; toggle in <code>/settings</code>; buttons survive restarts.</p></div></details>
</div>

---

## 🌟 Decision explainer & guided appeals <span class="tier-badge tier-premium">PREMIUM</span>

Two upgrades on the free flow above — fairer for members, less explaining for staff.

<div class="xgrid" markdown="0">
  <details class="x"><summary>❓ <strong>"Why was I actioned?"</strong> <span class="t">— plain-language reason</span></summary><div class="b">When a member is <strong>warned</strong> or <strong>muted</strong>, the bot DMs a short notice with a <strong>Why was I actioned?</strong> button. One tap returns a calm, plain-language explanation drawn from the staff-supplied reason — no moderator has to write it out. They can also DM the bot <em>"why was I actioned?"</em> for the same on their most recent warning.</div></details>
  <details class="x"><summary>🗣️ <strong>Guided multi-round appeals</strong> <span class="t">— AI-facilitated</span></summary><div class="b">A ban appeal becomes a short <strong>AI-facilitated back-and-forth</strong>: the member shares their side, the bot asks <strong>one or two neutral follow-ups</strong>, then hands staff a <strong>concise summary plus the full transcript</strong> — on the ticket <em>and</em> the portal "Needs input" card. You set the max rounds (default 3); the facilitator <strong>never decides or promises an outcome</strong>. Staff can press <strong>📨 More info</strong> to reopen with a follow-up.</div></details>
</div>

**On by default** for premium servers (toggle in **Settings → Protection**); both need AI enabled. Free servers keep the one-reply appeal exactly as above.

---

## 💎 The Premium Toolkit <span class="tier-badge tier-premium">PREMIUM</span>

Seven premium features, most set up from a one-screen wizard.

<div class="xgrid" markdown="0">
  <details class="x"><summary>🎭 <strong>Reaction roles</strong> <span class="t">— <code>/rolepanel</code></span></summary><div class="b">Self-service role buttons built from one wizard: pick roles from a dropdown, name the panel, post it. Members click to add or remove a role, and a <strong>🎭 My roles</strong> button opens a private menu showing a ✓ next to roles they already have. The bot only offers roles it can actually assign (nothing above its own role).</div></details>
  <details class="x"><summary>⌨️ <strong>Custom slash commands</strong> <span class="t">— <code>/customcmd</code></span></summary><div class="b">Define your own real <code>/command</code> (text or embed) — e.g. <code>/rules</code>, <code>/faq</code> — from a wizard. Embed commands have an optional <strong>🔄 Live</strong> toggle: edit the embed once and <em>every copy already posted updates</em>. Names are validated and can't shadow the bot's built-ins; up to 25 per server.</div></details>
  <details class="x"><summary>❓ <strong>AI Q&amp;A from your FAQ</strong> <span class="t">— <code>/faq</code></span></summary><div class="b">Members run <code>/faq</code> with a question and the bot answers <strong>only</strong> from your curated entries — when the FAQ doesn't cover something it says so and points to staff, rather than inventing an answer. Staff curate from the <code>/faq</code> wizard. Counts toward your AI usage, with a per-user cooldown.</div></details>
  <details class="x"><summary>🌐 <strong>Translation</strong> <span class="t">— right-click or <code>/translate</code></span></summary><div class="b">Right-click any message → <strong>Translate</strong>, or use <code>/translate</code> — into your Discord language or one you name. On-demand only, so there's no per-message cost or channel noise.</div></details>
  <details class="x"><summary>🤝 <strong>Mediator</strong> <span class="t">— <code>/mediate</code></span></summary><div class="b">The wizard has the bot DM two members, collect each side privately, and post a <strong>neutral summary</strong> to staff — a chance to de-escalate <em>before</em> anyone reaches for a moderation action. It never takes sides or recommends punishment.</div></details>
  <details class="x"><summary>💾 <strong>Server backup &amp; restore</strong> <span class="t">— <code>/backup</code></span></summary><div class="b">Snapshot your roles, categories, channels and their exact permission overwrites. <strong>Restore</strong> is owner-only, confirmation-gated, and strictly <strong>additive — recreates anything missing and reapplies overwrites, never deletes</strong> — safe insurance after a nuke or a botched reorg.</div></details>
  <details class="x"><summary>🎨 <strong>White-label branding</strong> <span class="t">— <code>/brand</code></span></summary><div class="b">Rebrand the bot for your server: a custom per-server <strong>nickname</strong>, your <strong>name + icon</strong> on embeds, your <strong>colour</strong>, and your name in place of "Server Assistant" in footers. <em>Discord allows only one global bot identity, so this rebrands the nickname and output — not the underlying account.</em></div></details>
</div>

---

## 🚨 Raid Protection <span class="tier-badge tier-free">FREE</span>

Two layers that blunt automated raids before they reach your channels.

<div class="xgrid" markdown="0">
  <details class="x"><summary>🚨 <strong>Anti-Raid Detection</strong> <span class="t">— join-rate alerts</span></summary><div class="b"><p>Tracks join rate. When the threshold trips, the bot pings the Owner (and any roles in <code>/settings → 🔔 Notifications</code>), suspends onboarding DMs, and logs the event.</p><table><thead><tr><th>Preset</th><th>Threshold</th></tr></thead><tbody><tr><td>Off</td><td>—</td></tr><tr><td>Normal</td><td>5 joins in 30s</td></tr><tr><td>Strict</td><td>3 joins in 15s</td></tr></tbody></table></div></details>
  <details class="x"><summary>🔐 <strong>DM Verification Gate</strong> <span class="t">— verify button on join</span></summary><div class="b">Optional measure (<code>/settings → Verification</code>). New members are DM'd a green <strong>Verify</strong> button; clicking it grants the verified role. If DMs are closed, the failure is logged and the user sees only <code>@everyone</code>-open channels. Stops most automated raid bots cold.</div></details>
</div>

---

## 🎨 AI Features <span class="tier-badge tier-trial">TRIAL</span>

<div class="xgrid" markdown="0">
  <details class="x"><summary>🖼️ <strong>Image generation</strong> <span class="t">— <code>/imagine</code></span></summary><div class="b">Type <code>/imagine &lt;prompt&gt;</code>, get a 1024×1024 image. Uses your own AI key if you've added one in <code>/ai-config</code>; otherwise the free trial covers ~30 images and Premium is unlimited. 30s cooldown between images on the free tier.</div></details>
  <details class="x"><summary>📋 <strong>Message Report</strong> <span class="t">— context summaries</span></summary><div class="b">Right-click any message → <strong>Apps ▸ Message Report</strong>. The bot reads ~20 surrounding messages and returns a 3–5 bullet summary: tone, possible rule-breaking, escalation pattern, recommended action. Only you see it — with one-tap <strong>Warn · Timeout · Delete · Kick · Ban</strong> and a second row of <strong>👤 Info · ⚠️ Warnings · 📝 Notes</strong> (each respects your role). Any action is logged <strong>with the report attached</strong>. The bot never auto-acts — staff always decide.</div></details>
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

<div class="xgrid" markdown="0">
  <details class="x"><summary>✉️ <strong>Auto-onboarding DMs</strong></summary><div class="b">Welcome DMs (<code>/onboarding</code>) with placeholders: <code>[servername]</code>, <code>[usermention]</code>, <code>[membercount]</code>, <code>[owner]</code>, <code>[usercreatedat]</code>. Templates: Friendly · Gaming · Professional · Minimal · Custom.</div></details>
  <details class="x"><summary>🏷️ <strong>Auto-role on join</strong></summary><div class="b">Pick the role new members receive automatically (<code>/settings → New Members → Auto-role</code>).</div></details>
  <details class="x"><summary>👋 <strong>Welcome reaction emoji</strong></summary><div class="b">The bot reacts to "X joined the server" system messages with your chosen emoji.</div></details>
</div>

---

## 📋 Canned Responses & Scheduled Reminders <span class="tier-badge tier-free">FREE</span>

<div class="xgrid" markdown="0">
  <details class="x"><summary>📋 <strong>Snippets</strong> <span class="t">— reusable canned replies</span></summary><div class="b"><code>snippet add rules-link …</code> then <code>snippet rules-link</code> (supports the same placeholders as onboarding). Mention a user when invoking to fill <code>[user]</code> slots.</div></details>
  <details class="x"><summary>⏰ <strong>Reminders</strong> <span class="t">— scheduled messages</span></summary><div class="b"><code>/schedule</code> (modal) or text <code>schedule in 30 min: check the new mod application</code> / <code>schedule at 9am: post daily update</code>. Uses your <code>/timezone</code>. Fires in the channel where it was created.</div></details>
</div>

---

## 📊 Audit Logging <span class="tier-badge tier-free">FREE</span>

<div class="xgrid" markdown="0">
  <details class="x"><summary>🎨 <strong>Colour-coded log</strong> <span class="t">— every action, every status</span></summary><div class="b"><p>Every action posts a colour-coded embed to your log channel:</p><table><thead><tr><th>Status</th><th>Colour</th></tr></thead><tbody><tr><td>EXECUTING / SUCCESS / APPROVED</td><td>🟢</td></tr><tr><td>OWNER_BYPASS</td><td>🔵</td></tr><tr><td>PENDING_APPROVAL</td><td>🟡</td></tr><tr><td>DENIED / FORBIDDEN</td><td>🔴</td></tr><tr><td>PERMISSION_DENIED</td><td>🟠</td></tr></tbody></table><p>Verbosity: All / Dangerous-only / Errors-only (<code>/settings → Behavior</code>).</p></div></details>
  <details class="x"><summary>📅 <strong>Weekly digest</strong></summary><div class="b">Every Monday at 9am (configurable day) the bot posts a summary: total actions, warnings, top action types, most active staff, member count. Separate from the daily 🩺 Pulse.</div></details>
  <details class="x"><summary>🔐 <strong>Tamper-proof trail</strong></summary><div class="b">Native right-click bans/kicks/timeouts are logged like bot commands — nothing slips past. Every action is written to a separate record <strong>encrypted at rest</strong> that staff can't read, edit, or erase; deleting a log-channel entry <strong>alerts the owner</strong> while the encrypted record survives. Opt into a locked <code>#server-assistant-log</code> channel during setup.</div></details>
  <details class="x"><summary>🩺 <strong>Permission health check</strong></summary><div class="b">Once a day the bot verifies it still has <strong>Manage Roles</strong> plus a working staff + log channel. If a later admin change broke any of them, the <strong>owner gets a one-time DM</strong> naming exactly what broke and how to fix it. Idempotent, quiet, and read-only.</div></details>
</div>

---

## 🎨 Customisation Hub <span class="tier-badge tier-free">FREE</span>

**Nine sub-wizards in `/settings`** — all changes save instantly, no code, no restart.

<div class="dc" style="max-width:540px;margin:0 0 1rem;">
  <div class="dc-row">
    <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
    <div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">/settings</span></div>
      <div class="dc-embed">
        <div class="dc-title">🎨 Settings — pick a wizard</div>
        <div class="dc-desc">Nine sub-wizards, all in one place. Choose one to configure — every change saves instantly.</div>
        <div class="dc-btns"><span class="dc-btn blurple">🎨 Branding</span><span class="dc-btn grey">⚡ Presets</span><span class="dc-btn grey">🛡️ Behaviour</span><span class="dc-btn grey">🛂 Role Tiers</span></div>
      </div>
    </div>
  </div>
</div>

<div class="xgrid" markdown="0">
  <details class="x"><summary>🎨 <strong>Branding</strong></summary><div class="b">Embed colour (12 presets + custom hex), bot nickname, default timezone.</div></details>
  <details class="x"><summary>⚡ <strong>Quick Presets</strong></summary><div class="b">One-click bundles for AutoMod, punishment ladder, onboarding template, anti-raid.</div></details>
  <details class="x"><summary>🛡️ <strong>Behaviour</strong></summary><div class="b">Approval timeout, log verbosity, weekly digest day, self-checks, Threat Score.</div></details>
  <details class="x"><summary>👋 <strong>New Members</strong></summary><div class="b">Auto-role and welcome reaction emoji.</div></details>
  <details class="x"><summary>🔐 <strong>Verification</strong></summary><div class="b">Toggle the DM verification gate and pick the verified role.</div></details>
  <details class="x"><summary>📍 <strong>Channel allowlist</strong></summary><div class="b">Choose where the bot responds to mentions.</div></details>
  <details class="x"><summary>🛂 <strong>Role Tiers</strong></summary><div class="b">Custom tiers and approval authority per tier.</div></details>
  <details class="x"><summary>🔔 <strong>Notifications</strong></summary><div class="b">Which staff roles get pinged on raids / approval requests / AutoMod escalations.</div></details>
  <details class="x"><summary>🩺 <strong>Pulse</strong></summary><div class="b">Daily health digest channel, time, and on/off.</div></details>
</div>

---

## 🌐 Web Portal <span class="tier-badge tier-free">FREE</span>

Manage your server from any browser — no Discord required. Sign in with Discord at **[serverassistant.wandweb.co](https://serverassistant.wandweb.co)** (or run `/portal` for a private link).

<div class="xgrid" markdown="0">
  <details class="x"><summary>📊 <strong>Insights</strong></summary><div class="b">Expandable KPIs (members · mod actions · AI usage) with trend charts, a member-growth chart, <strong>online / in-voice</strong> counts, a paginated activity log with real names, and your Daily Pulse + Weekly mod recap.</div></details>
  <details class="x"><summary>🛡️ <strong>Act from the web</strong></summary><div class="b">Warn / timeout / kick / ban / unban (per your role) and resolve <strong>staff decisions</strong> — ban appeals, AutoMod reviews, owner-approvals, raid lock-downs — from a "Needs input" strip, kept in sync with the Discord card.</div></details>
  <details class="x"><summary>📲 <strong>Install + notify</strong></summary><div class="b">Add the portal to your home screen as an app and turn on notifications to get a push the moment something needs your input.</div></details>
  <details class="x"><summary>⚙️ <strong>Settings</strong></summary><div class="b">Every customisation, the same safe options as <code>/settings</code>, with sensible defaults shown inline.</div></details>
  <details class="x"><summary>🎫 <strong>Support</strong></summary><div class="b">Open and follow up on tickets with the team, with reply notifications.</div></details>
  <details class="x"><summary>🤖 <strong>SAi</strong> <span class="t">— AI assistant</span></summary><div class="b">Your AI assistant in a chat bubble: ask in plain English and (as owner/admin) apply its suggestions in one tap.</div></details>
  <details class="x"><summary>🚀 <strong>Web setup</strong></summary><div class="b">Brand-new servers can be configured entirely from the portal: pick your channels, roles and AI, and the bot does the rest.</div></details>
  <details class="x"><summary>👥 <strong>Your whole staff team</strong></summary><div class="b">Owners, admins, and moderators can all sign in, and the portal mirrors each person's role exactly — never granting more than they have in Discord. Verified through Discord (no separate password), resolved from the roles you configured in <code>/setup</code>, and re-checked on the server for every action.</div></details>
</div>

---

## 🎫 Ticket Panels <span class="tier-badge tier-free">FREE</span> <span class="tier-badge tier-premium">PREMIUM</span>

A private, structured way for members to reach staff. An admin posts a panel; members click **Create Ticket** to open a private channel with your support team.

<div class="xgrid" markdown="0">
  <details class="x"><summary>🎫 <strong>How it works</strong></summary><div class="b">Run <code>/tickets setup</code> — pick the panel channel, ticket category, support role, and an optional transcript channel. The bot posts a styled embed with a persistent <strong>Create Ticket</strong> button; a click opens a private <code>ticket-0001-username</code> channel visible only to the member, support role, and admins. On close, a <code>.txt</code> transcript is saved and the channel is removed.</div></details>
  <details class="x"><summary>🆓 <strong>Free tier</strong> <span class="tier-badge tier-free">FREE</span></summary><div class="b">One intake question, private ticket channels, a Close button + <code>/tickets close [reason]</code>, a plain-text transcript on close, and an editable panel title/description via <code>/tickets panel</code>.</div></details>
  <details class="x"><summary>💎 <strong>Premium tier</strong> <span class="tier-badge tier-premium">PREMIUM</span></summary><div class="b">Up to <strong>4 custom intake questions</strong> (<code>/tickets questions</code>), custom <strong>welcome + close messages</strong> (<code>/tickets panel</code>), and <strong>add users mid-ticket</strong> (<code>/tickets add @user</code>).</div></details>
  <details class="x"><summary>⚙️ <strong>Commands &amp; permissions</strong></summary><div class="b"><table><thead><tr><th>Command</th><th>Who</th></tr></thead><tbody><tr><td><code>/tickets setup</code> · <code>/tickets panel</code></td><td>Admin / Owner</td></tr><tr><td><code>/tickets close [reason]</code></td><td>Ticket owner, support role, Manage Channels</td></tr><tr><td><code>/tickets questions</code> · <code>/tickets add</code></td><td>Admin / Owner <em>(Premium)</em></td></tr></tbody></table><p>The bot needs <strong>Manage Channels</strong> + <strong>Manage Roles</strong>, with its role above the support role.</p></div></details>
</div>

---

## 🔐 Privacy & Security <span class="tier-badge tier-free">FREE</span>

Your AI keys and credentials are **encrypted at rest**, per-server data is isolated, and removing the bot wipes your server's encrypted secrets immediately. Retention rules for warnings, notes, and audit logs are in the **[Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/)**.

---

## What's next?

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — get the bot running
- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** — every command + per-tier permissions
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
- **[Support]({{ site.url }}{{ site.baseurl }}/support/)** — get help
