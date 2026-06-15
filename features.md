---
layout: default
title: Features
permalink: /features/
description: A scannable tour of Server Assistant's flagship features.
---

# ✨ Features

Each row is a feature area — what you get **free** on the left, what **Trial &amp; Premium** add on the right. Tap any card to expand the detail. See also **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** and **[Pricing]({{ site.url }}{{ site.baseurl }}/pricing/)**.

<style>
/* Continuous coloured-glass columns behind an aligned per-group grid. */
.cmp-wrap { position: relative; margin: 1.3rem 0; }
.cmp-bg { position: absolute; top: 0; bottom: 0; border-radius: 14px; z-index: 0; backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px); }
.cmp-bg.free { left: 0; right: calc(50% + .55rem); background: rgba(52,130,225,0.10); border: 1px solid rgba(52,130,225,0.30); }
.cmp-bg.prem { left: calc(50% + .55rem); right: 0; background: rgba(241,196,15,0.11); border: 1px solid rgba(241,196,15,0.34); }
.cmp { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; column-gap: 1.1rem; row-gap: .4rem; align-items: start; }
.col-head { font-size: 1.25rem; font-weight: 800; color: var(--ink); padding: .65rem .85rem .35rem; border-bottom: 2px solid var(--glass-border); margin-bottom: .15rem; }
.col-head.free { border-bottom-color: rgba(52,130,225,0.5); }
.col-head.prem { border-bottom-color: rgba(241,196,15,0.55); }
.grp-h { grid-column: 1 / -1; display: flex; align-items: center; gap: .45rem; font-size: 1.02rem; font-weight: 800; color: var(--ink); margin: .7rem 0 0; padding: .45rem .35rem .3rem; border-bottom: 2px solid var(--glass-border); }
.col { padding: .15rem .85rem .7rem; }
.col.empty { min-height: 0; padding: 0; }

/* First-glance cards — scannable summaries, full detail one tap away. */
.xgrid { display: grid; grid-template-columns: 1fr; gap: 0.4rem; margin: .3rem 0 0; align-items: start; }
.xgrid details.x { border: 1px solid var(--glass-border); border-radius: 10px; background: rgba(255,255,255,0.08); }
.xgrid details.x > summary { cursor: pointer; padding: 0.5rem 0.75rem; list-style: none; color: var(--ink); font-size: 0.92rem; }
.xgrid details.x > summary::-webkit-details-marker { display: none; }
.xgrid details.x > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .4rem; font-size: .75em; }
.xgrid details.x[open] > summary::before { content: "▾"; }
.xgrid details.x[open] > summary { border-bottom: 1px solid var(--glass-border); }
.xgrid details.x .b { padding: 0.55rem 0.8rem 0.65rem; color: var(--ink-soft); font-size: 0.86rem; line-height: 1.5; }
.xgrid details.x .b code { color: var(--accent); font-size: 0.85em; }
.xgrid details.x .b p { margin: 0 0 .5rem; }
.xgrid details.x .b p:last-child { margin-bottom: 0; }
.xgrid details.x .b table { width: 100%; font-size: 0.81rem; margin: .2rem 0 .4rem; border-collapse: collapse; }
.xgrid details.x .b th, .xgrid details.x .b td { text-align: left; padding: .25rem .4rem; border-bottom: 1px solid var(--glass-border); vertical-align: top; }
.xgrid .t { color: var(--ink-soft); font-weight: 400; }
.xgrid .t code { color: inherit; font-size: .9em; }
.tier-badge { display: inline-block; font-size: 0.58rem; font-weight: 800; letter-spacing: 0.04em; padding: 0.1rem 0.4rem; border-radius: 999px; vertical-align: middle; margin-left: 0.3rem; text-transform: uppercase; white-space: nowrap; }
.tier-trial { background: rgba(52,152,219,0.22); color: #1f6dbf; }
@media (max-width: 760px) {
  .cmp { grid-template-columns: 1fr; }
  .cmp-bg, .col-head { display: none; }
  .grp-h { grid-column: auto; margin-top: 1rem; }
  .col { border-radius: 10px; padding: .55rem .7rem .65rem; margin-bottom: .15rem; }
  .col.free { background: rgba(52,130,225,0.10); border: 1px solid rgba(52,130,225,0.30); }
  .col.prem { background: rgba(241,196,15,0.11); border: 1px solid rgba(241,196,15,0.34); }
}
</style>

<p style="font-size:.82rem;color:var(--ink-soft);margin:.2rem 0 0;">Trial features use your AI tokens (free trial included); Premium needs a subscription.</p>

<div class="cmp-wrap" markdown="0">
<div class="cmp-bg free"></div>
<div class="cmp-bg prem"></div>
<div class="cmp">

  <div class="col-head free">🆓 Free</div>
  <div class="col-head prem">✨ Trial &amp; Premium</div>

  <div class="grp-h">🛡️ Moderation</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>🛂 <strong>Role-based tiers</strong> <span class="t">— customisable</span></summary><div class="b">Defaults: <strong>Owner / Admin / Moderator</strong>. Each tier has its own capabilities + approval authority — fully customisable in <code>/settings → Role Tiers</code> (add Helper, Trial Mod, Senior Mod, anything).</div></details>
      <details class="x"><summary>⚖️ <strong>Tiered approval</strong> <span class="t">— actions route up</span></summary><div class="b">Dangerous actions (like <code>/purge</code>) route <strong>up</strong> a tier: admins approve moderators; the owner approves admins. Anyone with approval authority — or the owner — runs them directly.</div></details>
      <details class="x"><summary>⚠️ <strong>Persistent warnings + DMs</strong> <span class="t">— <code>/warn</code></span></summary><div class="b">Every warning is timestamped, attributed, and the user gets a DM with their current count and escalation context. Run <code>/warnings @user</code> or <code>/manage-warnings</code> to view or remove.</div></details>
      <details class="x"><summary>📝 <strong>Private staff notes</strong> <span class="t">— <code>/note</code></span></summary><div class="b">For tracking behaviour without a formal warning. <strong>Invisible to the user</strong>; staff-only via <code>/note</code>, <code>/notes</code>, <code>/manage-notes</code>.</div></details>
      <details class="x"><summary>🧹 <strong>Soft-ban + timed purge</strong> <span class="t">— <code>/softban</code> · <code>/purge</code></span></summary><div class="b"><code>/softban</code> ban-then-unban to sweep messages without permanent removal. <code>/purge 50</code> or text <code>purge since 1pm</code> (your timezone; capped at Discord's 14-day limit).</div></details>
      <details class="x"><summary>🤖 <strong>Smart purge</strong> <span class="t">— <code>/purge mode: Smart</code></span></summary><div class="b"><code>/purge … mode: Smart</code> — AI cleanup that removes only the genuinely problematic messages and <strong>keeps the rest</strong>, instead of clearing everything like a plain purge.</div></details>
      <details class="x"><summary>⏲️ <strong>Timed bans</strong> <span class="t">— <code>/tempban</code></span></summary><div class="b"><code>/tempban @user 7d reason</code> bans for a set time — <code>30m</code>, <code>2h</code>, <code>7d</code>, <code>1w</code>, even <code>1d12h</code> (1 min–28 days) — then <strong>un-bans automatically</strong>. The timer survives restarts, and the lift is logged.</div></details>
      <details class="x"><summary>🎭 <strong>One-command roles</strong> <span class="t">— <code>/role</code></span></summary><div class="b"><code>/role add @user @role</code> / <code>/role remove @user @role</code> — no digging through Discord's menus. Guards against privilege escalation: you can only assign roles below your own, and managed/integration roles are off-limits.</div></details>
      <details class="x"><summary>🚨 <strong>Server-wide lockdown</strong> <span class="t">— <code>/lockdown</code></span></summary><div class="b"><code>/lockdown start</code> locks every <strong>text and forum channel</strong> in one shot — including their threads and posts. <code>/lockdown end</code> restores each channel to its <strong>exact prior permissions</strong>, not a best guess.</div></details>
      <details class="x"><summary>🕵️ <strong>Repeat-offender detection</strong> <span class="t">— <code>/altguard</code></span></summary><div class="b">Enable with <code>/altguard on</code>. Fingerprints the users you ban or kick, then checks every new joiner — a fresh account reusing a banned user's avatar or near-identical name is <strong>auto-banned and reported to staff</strong>; weaker matches are flagged. Soft-bans excluded.</div></details>
      <details class="x"><summary>↩️ <strong>24-hour undo</strong></summary><div class="b">Reverses your most recent ban, mute, channel deletion (incl. permissions), or nickname change. Note: deleted message contents can't be recovered — that's a Discord limit.</div></details>
      <details class="x"><summary>📣 <strong>Bulk via role mention</strong></summary><div class="b"><code>mute @TrollRole 1 hour</code> actions every member of that role at once. Bots auto-excluded; &gt;5 targets requires the Owner.</div></details>
    </div>
  </div>
  <div class="col prem empty"></div>

  <div class="grp-h">📩 Ban reasons &amp; appeals</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>📨 <strong>For the banned member</strong> <span class="t">— reason + one reply</span></summary><div class="b">Every ban (manual, <code>/tempban</code>, AutoMod, or native) DMs the user the <strong>exact reason</strong> staff supplied, plus an invite to send <strong>one reply</strong> to appeal. Just one — no escalating threads, no DM noise. Soft-bans excluded.</div></details>
      <details class="x"><summary>🛠️ <strong>For your staff</strong> <span class="t">— one-tap appeal ticket</span></summary><div class="b"><p>That single reply opens an <strong>appeal ticket</strong> in your staff channel with one-tap buttons:</p><table><thead><tr><th>Button</th><th>What it does</th></tr></thead><tbody><tr><td>✅ <strong>Unban</strong></td><td>Lifts the ban, DMs the user, writes to the audit trail.</td></tr><tr><td>🚫 <strong>Deny</strong></td><td>DMs the denial, closes the ticket.</td></tr><tr><td>🔎 <strong>Research</strong></td><td>Runs Message Report on their last message for context.</td></tr><tr><td>👤 <strong>Info</strong></td><td>Profile — dates, roles, warning + note counts, Threat Score.</td></tr><tr><td>⚠️ <strong>Warnings</strong></td><td>Full history, even if they've left.</td></tr><tr><td>📝 <strong>Notes</strong></td><td>Staff notes (private).</td></tr></tbody></table><p>No AI token is spent unless <strong>Research</strong> is pressed. On by default; buttons survive restarts.</p></div></details>
    </div>
  </div>
  <div class="col prem">
    <div class="xgrid">
      <details class="x"><summary>❓ <strong>"Why was I actioned?"</strong></summary><div class="b">When a member is warned or muted, the bot DMs a short notice with a <strong>Why was I actioned?</strong> button that returns a calm, plain-language explanation from the staff-supplied reason. They can also DM the bot <em>"why was I actioned?"</em> for the same on their most recent warning.</div></details>
      <details class="x"><summary>🗣️ <strong>Guided multi-round appeals</strong></summary><div class="b">A ban appeal becomes a short <strong>AI-facilitated back-and-forth</strong>: the member shares their side, the bot asks one or two neutral follow-ups, then hands staff a <strong>concise summary plus the full transcript</strong> — on the ticket and the portal. You set the max rounds (default 3); the facilitator <strong>never decides or promises an outcome</strong>.</div></details>
    </div>
  </div>

  <div class="grp-h">🤖 AutoMod Engine</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>⚡ <strong>Filter presets</strong> <span class="t">— Off → Strict</span></summary><div class="b"><p>One-click packs in <code>/settings → Quick Presets → AutoMod</code>:</p><table><thead><tr><th>Preset</th><th>Catches</th></tr></thead><tbody><tr><td>Off</td><td>Nothing</td></tr><tr><td>Scams only</td><td>Free Nitro / Steam gift / Robux / IP-grabber links</td></tr><tr><td><strong>Scams + slurs</strong> ⭐</td><td>Above + Level-1 hate speech. Allows casual profanity</td></tr><tr><td>Strict</td><td>Above + slurs L2, profanity L3 (child-friendly only)</td></tr></tbody></table></div></details>
      <details class="x"><summary>🧩 <strong>Server-type templates</strong> <span class="t">— <code>/setup</code></span></summary><div class="b"><p>The final <code>/setup</code> step tunes moderation to the <em>kind</em> of server you run — a combo of AutoMod pack + punishment ladder + anti-raid sensitivity.</p><table><thead><tr><th>Type</th><th>Tuning</th></tr></thead><tbody><tr><td>🌐 General</td><td>Balanced defaults for a mixed community.</td></tr><tr><td>🎮 Gaming</td><td>Scams + slurs, allows casual profanity.</td></tr><tr><td>🎨 Creator</td><td>Stricter anti-raid for follow-raids.</td></tr><tr><td>🌸 Anime / Fandom</td><td>Community-friendly, high-energy chat.</td></tr><tr><td>💰 Crypto / Trading</td><td>Strict anti-scam, fast escalation.</td></tr><tr><td>📚 Education</td><td>Gentle, warning-first, coaching.</td></tr><tr><td>🔞 NSFW / 18+</td><td>Stricter anti-raid for adult communities.</td></tr><tr><td>🛠️ Manual</td><td>Applies nothing — full control.</td></tr></tbody></table><p>Pre-selected from your server's name. Applied only on a fresh setup or deliberate pick, so re-running <code>/setup</code> never overwrites your tuning.</p></div></details>
      <details class="x"><summary>🔧 <strong>Custom regex filters</strong> <span class="t">— <code>/automod</code></span></summary><div class="b"><code>/automod → Add Filter</code>, with a built-in safety check for catastrophic-backtracking patterns before a rule goes live.</div></details>
      <details class="x"><summary>🚫 <strong>Link blocklist</strong> <span class="t">— <code>/automod</code></span></summary><div class="b">Domain-level blocks, with known IP-grabber domains preloaded.</div></details>
      <details class="x"><summary>⏫ <strong>Punishment ladder</strong></summary><div class="b">Auto-escalation: Gentle 5/10/20 · Standard 3/5/10 · Strict 2/3/5 (warns → timeout → kick → ban).</div></details>
      <details class="x"><summary>💢 <strong>Anti-spam</strong></summary><div class="b">Auto-on; 5+ duplicate messages in 5 seconds are removed and the user is warned.</div></details>
      <details class="x"><summary>📩 <strong>User DM on removal</strong></summary><div class="b">Every AutoMod removal DMs the user <em>which rule fired</em> plus their warning count. Staff see the full embed in the log channel either way.</div></details>
    </div>
  </div>
  <div class="col prem">
    <div class="xgrid">
      <details class="x"><summary>🧠 <strong>Self-trained AutoMod</strong> <span class="t">— learns from you</span> <span class="tier-badge tier-trial">Free trial</span></summary><div class="b">Watches the messages your staff delete or report, then proposes server-specific AutoMod rules for your approval. Nothing auto-enforced; 30-day local log, no identities stored. Enable in <code>/automod → Self-training</code>.</div></details>
      <details class="x"><summary>🤔 <strong>AutoMod AI second-opinion</strong></summary><div class="b">Optional in <code>/automod → AI Review</code>. Borderline filter hits get an AI confidence check first — confident ones act, low-confidence ones go to a one-tap staff review card (<em>Delete &amp; warn</em> / <em>Allow</em>) instead of an auto-delete. Cuts false positives; only borderline messages cost tokens.</div></details>
    </div>
  </div>

  <div class="grp-h">🧠 Server health &amp; insight</div>
  <div class="col free empty"></div>
  <div class="col prem">
    <div class="xgrid">
      <details class="x"><summary>🩺 <strong>Pulse</strong> <span class="t">— daily health report</span> <span class="tier-badge tier-trial">Free trial</span></summary><div class="b">A daily one-embed health report — messages, joins/leaves, AutoMod blocks, warnings — with week-over-week deltas and flags for the quiet patterns humans miss. On by default; configure in <code>/settings → 🩺 Pulse</code>.</div></details>
      <details class="x"><summary>🩹 <strong>Bot Health Insurance</strong> <span class="t">— it watches itself</span> <span class="tier-badge tier-trial">Free trial</span></summary><div class="b">The bot watches its <em>own</em> footprint. If it gets heavy-handed, it suggests tuning — at most once every 14 days, so the anti-noise feature never becomes noise. Toggle in <code>/settings → Behavior</code>.</div></details>
      <details class="x"><summary>🛡️ <strong>Threat Score</strong> <span class="t">— per-user risk read</span></summary><div class="b">At-a-glance per-user risk — 🟢 Low / 🟠 Elevated / 🔴 High — in user profiles, weighted by severity and decaying over time. <strong>The advisory view is free for every server</strong>; the <strong>active, score-driven action</strong> phase (Premium) uses the score to drive moderation, with the safeguards listed on the roadmap.</div></details>
    </div>
  </div>

  <div class="grp-h">🖼️ AI tools</div>
  <div class="col free empty"></div>
  <div class="col prem">
    <div class="xgrid">
      <details class="x"><summary>🖼️ <strong>Image generation</strong> <span class="t">— <code>/imagine</code></span> <span class="tier-badge tier-trial">Free trial</span></summary><div class="b">Type <code>/imagine &lt;prompt&gt;</code>, get a 1024×1024 image. Uses your own AI key (<code>/ai-config</code>); otherwise the free trial covers ~30 images and Premium is unlimited. 30s cooldown on the free tier.</div></details>
      <details class="x"><summary>📋 <strong>Message Report</strong> <span class="t">— context summaries</span> <span class="tier-badge tier-trial">Free trial</span></summary><div class="b">Right-click any message → <strong>Apps ▸ Message Report</strong> for a 3–5 bullet summary: tone, possible rule-breaking, escalation, recommended action. Only you see it — with one-tap <strong>Warn · Timeout · Delete · Kick · Ban</strong> plus <strong>👤 Info · ⚠️ Warnings · 📝 Notes</strong> (each respects your role). The bot never auto-acts — staff always decide.</div></details>
    </div>
  </div>

  <div class="grp-h">🚨 Raid Protection</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>🚨 <strong>Anti-Raid Detection</strong> <span class="t">— join-rate alerts</span></summary><div class="b"><p>Tracks join rate. When the threshold trips, the bot pings the Owner (and any roles in <code>/settings → 🔔 Notifications</code>), suspends onboarding DMs, and logs the event.</p><table><thead><tr><th>Preset</th><th>Threshold</th></tr></thead><tbody><tr><td>Off</td><td>—</td></tr><tr><td>Normal</td><td>5 joins in 30s</td></tr><tr><td>Strict</td><td>3 joins in 15s</td></tr></tbody></table></div></details>
      <details class="x"><summary>🔐 <strong>DM Verification Gate</strong> <span class="t">— verify button on join</span></summary><div class="b">Optional measure (<code>/settings → Verification</code>). New members are DM'd a green <strong>Verify</strong> button; clicking it grants the verified role. If DMs are closed, the failure is logged and the user sees only <code>@everyone</code>-open channels. Stops most automated raid bots cold.</div></details>
    </div>
  </div>
  <div class="col prem empty"></div>

  <div class="grp-h">👋 Onboarding &amp; canned</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>✉️ <strong>Auto-onboarding DMs</strong> <span class="t">— <code>/onboarding</code></span></summary><div class="b">Welcome DMs (<code>/onboarding</code>) with placeholders: <code>[servername]</code>, <code>[usermention]</code>, <code>[membercount]</code>, <code>[owner]</code>, <code>[usercreatedat]</code>. Templates: Friendly · Gaming · Professional · Minimal · Custom.</div></details>
      <details class="x"><summary>🏷️ <strong>Auto-role on join</strong></summary><div class="b">Pick the role new members receive automatically (<code>/settings → New Members → Auto-role</code>).</div></details>
      <details class="x"><summary>👋 <strong>Welcome reaction emoji</strong></summary><div class="b">The bot reacts to "X joined the server" system messages with your chosen emoji.</div></details>
      <details class="x"><summary>📋 <strong>Snippets</strong> <span class="t">— canned replies</span></summary><div class="b"><code>snippet add rules-link …</code> then <code>snippet rules-link</code> (supports the same placeholders as onboarding). Mention a user when invoking to fill <code>[user]</code> slots.</div></details>
      <details class="x"><summary>⏰ <strong>Reminders</strong> <span class="t">— <code>/schedule</code></span></summary><div class="b"><code>/schedule</code> (modal) or text <code>schedule in 30 min: …</code> / <code>schedule at 9am: …</code>. Uses your <code>/timezone</code>. Fires in the channel where it was created.</div></details>
    </div>
  </div>
  <div class="col prem empty"></div>

  <div class="grp-h">📊 Audit Logging</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>🎨 <strong>Colour-coded log</strong> <span class="t">— every action</span></summary><div class="b"><p>Every action posts a colour-coded embed to your log channel:</p><table><thead><tr><th>Status</th><th>Colour</th></tr></thead><tbody><tr><td>EXECUTING / SUCCESS / APPROVED</td><td>🟢</td></tr><tr><td>OWNER_BYPASS</td><td>🔵</td></tr><tr><td>PENDING_APPROVAL</td><td>🟡</td></tr><tr><td>DENIED / FORBIDDEN</td><td>🔴</td></tr><tr><td>PERMISSION_DENIED</td><td>🟠</td></tr></tbody></table><p>Verbosity: All / Dangerous-only / Errors-only (<code>/settings → Behavior</code>).</p></div></details>
      <details class="x"><summary>📅 <strong>Weekly digest</strong></summary><div class="b">Every Monday at 9am (configurable day) the bot posts a summary: total actions, warnings, top action types, most active staff, member count. Separate from the daily 🩺 Pulse.</div></details>
      <details class="x"><summary>🔐 <strong>Tamper-proof trail</strong></summary><div class="b">Native right-click bans/kicks/timeouts are logged like bot commands. Every action is written to a separate record <strong>encrypted at rest</strong> that staff can't read, edit, or erase; deleting a log-channel entry <strong>alerts the owner</strong> while the encrypted record survives. Opt into a locked <code>#server-assistant-log</code> channel during setup.</div></details>
      <details class="x"><summary>🩺 <strong>Permission health check</strong></summary><div class="b">Once a day the bot verifies it still has <strong>Manage Roles</strong> plus a working staff + log channel. If an admin change broke any of them, the <strong>owner gets a one-time DM</strong> naming exactly what broke and how to fix it. Idempotent, quiet, read-only.</div></details>
    </div>
  </div>
  <div class="col prem empty"></div>

  <div class="grp-h">🎨 Customisation (<code>/settings</code>)</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>🎨 <strong>Branding</strong></summary><div class="b">Embed colour (12 presets + custom hex), bot nickname, default timezone.</div></details>
      <details class="x"><summary>⚡ <strong>Quick Presets</strong></summary><div class="b">One-click bundles for AutoMod, punishment ladder, onboarding template, anti-raid.</div></details>
      <details class="x"><summary>🛡️ <strong>Behaviour</strong></summary><div class="b">Approval timeout, log verbosity, weekly digest day, self-checks, Threat Score.</div></details>
      <details class="x"><summary>🛂 <strong>Role Tiers</strong></summary><div class="b">Custom tiers and approval authority per tier.</div></details>
      <details class="x"><summary>🔔 <strong>Notifications</strong></summary><div class="b">Which staff roles get pinged on raids / approval requests / AutoMod escalations.</div></details>
      <details class="x"><summary>📍 <strong>Channel allowlist</strong></summary><div class="b">Choose where the bot responds to mentions.</div></details>
    </div>
  </div>
  <div class="col prem empty"></div>

  <div class="grp-h">🌐 Web Portal</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>📊 <strong>Insights</strong></summary><div class="b">Expandable KPIs (members · mod actions · AI usage) with trend charts, a member-growth chart, <strong>online / in-voice</strong> counts, a paginated activity log with real names, and your Daily Pulse + Weekly mod recap.</div></details>
      <details class="x"><summary>🛡️ <strong>Act from the web</strong></summary><div class="b">Warn / timeout / kick / ban / unban (per your role) and resolve <strong>staff decisions</strong> — ban appeals, AutoMod reviews, owner-approvals, raid lock-downs — from a "Needs input" strip, kept in sync with the Discord card.</div></details>
      <details class="x"><summary>📲 <strong>Install + notify</strong></summary><div class="b">Add the portal to your home screen as an app and turn on notifications to get a push the moment something needs your input.</div></details>
      <details class="x"><summary>🤖 <strong>SAi assistant</strong></summary><div class="b">Your AI assistant in a chat bubble: ask in plain English and (as owner/admin) apply its suggestions in one tap.</div></details>
      <details class="x"><summary>🚀 <strong>Web setup</strong></summary><div class="b">Brand-new servers can be configured entirely from the portal: pick your channels, roles and AI, and the bot does the rest.</div></details>
      <details class="x"><summary>👥 <strong>Whole staff team</strong></summary><div class="b">Owners, admins, and moderators can all sign in, and the portal mirrors each person's role exactly — never granting more than they have in Discord. Verified through Discord, re-checked on the server for every action.</div></details>
    </div>
  </div>
  <div class="col prem empty"></div>

  <div class="grp-h">🎫 Ticket Panels</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>🎫 <strong>Ticket panels</strong> <span class="t">— <code>/tickets</code></span></summary><div class="b">An admin runs <code>/tickets setup</code> (panel channel, category, support role, optional transcript channel). Members click <strong>Create Ticket</strong> to open a private <code>ticket-0001-username</code> channel visible only to them, the support role, and admins. On close, a <code>.txt</code> transcript is saved and the channel removed. Free tier: one intake question + editable panel.</div></details>
    </div>
  </div>
  <div class="col prem">
    <div class="xgrid">
      <details class="x"><summary>🎫 <strong>Ticket Panels — Premium extras</strong> <span class="t">— <code>/tickets</code></span></summary><div class="b">Up to <strong>4 custom intake questions</strong> (<code>/tickets questions</code>), custom <strong>welcome + close messages</strong>, and <strong>add users mid-ticket</strong> (<code>/tickets add @user</code>).</div></details>
    </div>
  </div>

  <div class="grp-h">🛠️ Self-service &amp; branding toolkit</div>
  <div class="col free empty"></div>
  <div class="col prem">
    <div class="xgrid">
      <details class="x"><summary>🎭 <strong>Reaction roles</strong> <span class="t">— <code>/rolepanel</code></span></summary><div class="b">Self-service role buttons built from one wizard: pick roles from a dropdown, name the panel, post it. Members click to add/remove a role, and a <strong>🎭 My roles</strong> button opens a private menu with a ✓ next to roles they have. The bot only offers roles it can actually assign.</div></details>
      <details class="x"><summary>⌨️ <strong>Custom slash commands</strong> <span class="t">— <code>/customcmd</code></span></summary><div class="b">Define your own real <code>/command</code> (text or embed) — e.g. <code>/rules</code>, <code>/faq</code> — from a wizard. Embed commands have an optional <strong>🔄 Live</strong> toggle: edit once and <em>every copy already posted updates</em>. Names validated; up to 25 per server.</div></details>
      <details class="x"><summary>❓ <strong>AI Q&amp;A from your FAQ</strong> <span class="t">— <code>/faq</code></span></summary><div class="b">Members run <code>/faq</code> with a question and the bot answers <strong>only</strong> from your curated entries — when the FAQ doesn't cover something it says so and points to staff, rather than inventing an answer. Counts toward AI usage, with a per-user cooldown.</div></details>
      <details class="x"><summary>🌐 <strong>Translation</strong> <span class="t">— right-click or <code>/translate</code></span></summary><div class="b">Right-click any message → <strong>Translate</strong>, or use <code>/translate</code> — into your Discord language or one you name. On-demand only, so there's no per-message cost or channel noise.</div></details>
      <details class="x"><summary>🤝 <strong>Mediator</strong> <span class="t">— <code>/mediate</code></span></summary><div class="b">The wizard has the bot DM two members, collect each side privately, and post a <strong>neutral summary</strong> to staff — a chance to de-escalate <em>before</em> anyone reaches for a moderation action. It never takes sides or recommends punishment.</div></details>
      <details class="x"><summary>💾 <strong>Server backup &amp; restore</strong> <span class="t">— <code>/backup</code></span></summary><div class="b">Snapshot your roles, categories, channels and their exact permission overwrites. <strong>Restore</strong> is owner-only, confirmation-gated, and strictly <strong>additive — recreates anything missing and reapplies overwrites, never deletes</strong>.</div></details>
      <details class="x"><summary>🎨 <strong>White-label branding</strong> <span class="t">— <code>/brand</code></span></summary><div class="b">Rebrand the bot for your server: a custom per-server <strong>nickname</strong>, your <strong>name + icon</strong> on embeds, your <strong>colour</strong>, and your name in footers. <em>Discord allows only one global bot identity, so this rebrands the nickname and output — not the underlying account.</em></div></details>
    </div>
  </div>

  <div class="grp-h">🔐 Privacy &amp; security</div>
  <div class="col free">
    <div class="xgrid">
      <details class="x"><summary>🔐 <strong>Privacy &amp; security</strong></summary><div class="b">AI keys and credentials are <strong>encrypted at rest</strong>, per-server data is isolated, and removing the bot wipes your encrypted secrets immediately. Retention rules are in the <a href="{{ site.url }}{{ site.baseurl }}/privacy/">Privacy Policy</a>.</div></details>
    </div>
  </div>
  <div class="col prem empty"></div>

</div>
</div>

---

## What's next?

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — get the bot running
- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** — every command + per-tier permissions
- **[Pricing]({{ site.url }}{{ site.baseurl }}/pricing/)** — plans and prices
- **[Support]({{ site.url }}{{ site.baseurl }}/support/)** — get help
