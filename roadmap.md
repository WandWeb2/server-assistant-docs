---
layout: default
title: Roadmap
permalink: /roadmap/
description: Server Assistant's product roadmap — what's in development, what's next, and where we're exploring.
---

<style>
/* Widen the Minima container for just this page so the swimlanes can breathe */
.page-content .wrapper { max-width: 1280px; }

.roadmap-hero {
  margin: 1.5rem 0 2rem;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid #2ecc71;
  background: #f4f8f5;
  border-radius: 6px;
  color: #333;
}
.roadmap-hero p { margin: .3rem 0; }
/* Live community-poll results (filled by JS from the public results API) */
.lp-q { font-weight: 700; margin-bottom: .55rem; }
.lp-row { display: flex; align-items: center; gap: .55rem; margin: .28rem 0; font-size: .85rem; }
.lp-label { flex: 0 0 42%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lp-label a { color: inherit; text-decoration: underline dotted; }
.lp-track { flex: 1; background: #dcebe0; border-radius: 999px; height: 10px; overflow: hidden; }
.lp-fill { display: block; height: 100%; background: linear-gradient(90deg, #1e8449, #2ecc71); border-radius: 999px; }
.lp-pct { flex: 0 0 70px; text-align: right; font-variant-numeric: tabular-nums; font-size: .8rem; }
.lp-meta { margin-top: .55rem; font-size: .8rem; color: #555; }

.roadmap-hint {
  font-size: 0.82rem;
  color: #888;
  text-align: center;
  margin: 0.8rem 0 0.5rem;
  font-style: italic;
}

/* ── Top kanban: In Development + Planned, side by side ───────────────────── */
.roadmap-top {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}
@media (max-width: 720px) {
  .roadmap-top { grid-template-columns: 1fr; }
}

/* ── Section banner ───────────────────────────────────────────────────────── */
.roadmap-section {
  margin: 2.5rem 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 6px 6px 0 0;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
}
.roadmap-section.comingup { background: #229954; }
.roadmap-section.future   { background: #2471a3; }
.roadmap-section.premium  { background: #d4ac0d; }
.roadmap-section.longterm { background: #7d3c98; }
.roadmap-section.flagship { background: linear-gradient(90deg, #16a085, #2471a3); }
/* Flagship — the next major release, full-width hero card */
.flagship-card {
  background: #f3fbf9;
  border: 1px solid #cdeae3;
  border-left: 4px solid #16a085;
  border-radius: 0 0 6px 6px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
}
.flagship-card h4 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  color: #117a65;
}
.flagship-card ul { margin: 0.5rem 0 0; padding-left: 1.2rem; }
.flagship-card li { margin: 0.25rem 0; }
.roadmap-section .sub {
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: none;
  opacity: 0.95;
  margin-top: 0.2rem;
}

/* ── Premium tier: 4 columns (Tier A/B/C/D) ───────────────────────────────── */
.premium-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}
@media (max-width: 1000px) { .premium-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px)  { .premium-grid { grid-template-columns: 1fr; } }
.premium-tier-col {
  background: #fdfaf1;
  border-top: 3px solid #f1c40f;
  border-radius: 6px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ── Long-term + Future free-tier: 3-column gallery ───────────────────────── */
.longterm-grid, .future-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
@media (max-width: 900px) { .longterm-grid, .future-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .longterm-grid, .future-grid { grid-template-columns: 1fr; } }

/* ── Lane shared styles ───────────────────────────────────────────────────── */
.lane {
  background: #fafafa;
  border-top: 4px solid;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.lane-now      { border-color: #2ecc71; }
.lane-comingup { border-color: #229954; }
.lane-planned  { border-color: #3498db; }

/* Shipped column: locked height + scrollable list. Latest releases at top,
   older work below — visitors can browse history without the column eating
   half the page. */
.shipped-history {
  position: relative;
  /* Anchor for the bottom-fade overlay */
}
.shipped-scroll {
  max-height: 380px;
  overflow-y: auto;
  padding-bottom: 1.25rem;          /* room under the last card for the fade */
  scrollbar-gutter: stable;
}
/* Plain block layout for the cards — flex-shrink was squashing them */
.shipped-scroll > details.card                    { margin-bottom: 0.5rem; }
.shipped-scroll > details.card:last-child         { margin-bottom: 0; }
/* Subtle scrollbar — visible enough to signal "scrollable", not screaming */
.shipped-scroll::-webkit-scrollbar                { width: 6px; }
.shipped-scroll::-webkit-scrollbar-track          { background: transparent; }
.shipped-scroll::-webkit-scrollbar-thumb          { background: #cfd8dc; border-radius: 3px; }
.shipped-scroll::-webkit-scrollbar-thumb:hover    { background: #b0bec5; }
.shipped-scroll                                   { scrollbar-width: thin; scrollbar-color: #cfd8dc transparent; }
/* Bottom alpha fade. Sits on the .shipped-history wrapper (not the scrollable
   div) so it never scrolls with content. Always-on so the "more below"
   affordance is permanent — no JS scroll listener needed. */
.shipped-history::after {
  content: "";
  position: absolute;
  left: 0;
  right: 8px;                       /* leave the scrollbar gutter clear */
  bottom: 0;
  height: 50px;
  background: linear-gradient(to bottom,
                              rgba(250, 250, 250, 0) 0%,
                              rgba(250, 250, 250, 0.95) 100%);
  pointer-events: none;
  z-index: 3;
}

.lane h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #333;
}
.lane h3 small {
  display: block;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #888;
  margin-top: 0.2rem;
}
.premium-tier-col h4 {
  margin: 0 0 0.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #b7910c;
  border-bottom: 1px dotted #e6c860;
  padding-bottom: 0.25rem;
}

/* ── Cards: <details> elements, collapsed by default ──────────────────────── */
details.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  overflow: hidden;
}
details.card:hover { box-shadow: 0 3px 8px rgba(0,0,0,0.08); }
details.card[open] {
  background: #fdfdfd;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

details.card > summary {
  list-style: none;          /* hide Firefox/Chrome marker */
  cursor: pointer;
  padding: 0.7rem 0.85rem;
  position: relative;
  font-weight: 600;
  font-size: 0.95rem;
  color: #222;
  user-select: none;
}
details.card > summary::-webkit-details-marker { display: none; } /* hide Safari marker */
details.card > summary:hover { color: #2c7ad6; }

details.card .desc {
  display: block;
  padding: 0 0.85rem 0.75rem;
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
  border-top: 1px solid #f0f0f0;
  padding-top: 0.6rem;
  margin-top: 0;
}

.shipped-pill {
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.12rem 0.5rem;
  background: #c8e6c9;
  border: 1px solid #66bb6a;
  border-radius: 999px;
  color: #1b5e20;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  vertical-align: middle;
}
.admin-pill {
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.12rem 0.5rem;
  background: #d6eaf8;
  border: 1px solid #5dade2;
  border-radius: 999px;
  color: #1a5276;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  vertical-align: middle;
}
/* "Committed" pill — used on quality/correctness work that ships regardless
   of community votes. Visually distinct from shipped (green) and admin
   (blue) so visitors don't confuse them. */
.committed-pill {
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.12rem 0.5rem;
  background: #f4ecf7;
  border: 1px solid #bb8fce;
  border-radius: 999px;
  color: #5b2c6f;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  vertical-align: middle;
}
/* "Premium" pill — marks a card as a Premium-tier capability when it appears
   outside the Premium section (e.g. an early Premium feature pulled forward
   into the Future lane). Gold/amber palette to match the Premium theme. */
.premium-pill {
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.12rem 0.5rem;
  background: #fcf3cf;
  border: 1px solid #f1c40f;
  border-radius: 999px;
  color: #7d6608;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  vertical-align: middle;
}
.ver-pill {
  display: inline-block;
  margin-left: 0.4rem;
  padding: 0.12rem 0.5rem;
  background: #e8eaf6;
  border: 1px solid #9fa8da;
  border-radius: 999px;
  color: #283593;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  vertical-align: middle;
  font-variant-numeric: tabular-nums;
}
/* Version tag inside a tier column header */
.premium-tier-col h4 .ver-pill { margin-left: 0.3rem; }

/* Safeguards nested details (for Threat Score) */
details.safeguards {
  margin: 0.4rem 0.85rem 0.75rem;
  font-size: 0.82rem;
  color: #555;
}
details.safeguards summary {
  cursor: pointer;
  color: #2980b9;
  font-weight: 500;
}
details.safeguards ul {
  margin: 0.4rem 0 0 1rem;
  padding: 0;
  line-height: 1.5;
}
details.safeguards li { margin-bottom: 0.2rem; }

/* Expand/Collapse all helper buttons */
.expand-all-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0 1.5rem;
}
.expand-all-bar button {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 999px;
  padding: 0.4rem 1.1rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition: all 0.15s;
}
.expand-all-bar button:hover {
  background: #2c7ad6;
  border-color: #2c7ad6;
  color: #fff;
}
</style>

<!-- ════════════════════════════════════════════════════════════════════════════
     ROADMAP FORMATTING RULES — read before editing this file
     ════════════════════════════════════════════════════════════════════════════
     Every non-Shipped card must have EXACTLY ONE of the three states below.
     Inconsistency here makes the page read as half-finished.

       ┌─────────────────────┬───────────────────────┬─────────────────────────┐
       │ State               │ Visual                │ When to use             │
       ├─────────────────────┼───────────────────────┼─────────────────────────┤
       │ Shipped             │ <span class=           │ Done. Goes in the       │
       │                     │  "shipped-pill">       │ Shipped lane, latest    │
       │                     │  ✅ Shipped vX.Y       │ first.                  │
       │                     │ </span>                │                         │
       ├─────────────────────┼───────────────────────┼─────────────────────────┤
       │ Operator-side /     │ <span class=           │ Internal infra or       │
       │ Baseline admin      │  "admin-pill">         │ baseline admin tooling. │
       │                     │  Operator-side         │ Not a community-votable │
       │                     │  (or Baseline admin)   │ feature.                │
       │                     │ </span>                │                         │
       ├─────────────────────┼───────────────────────┼─────────────────────────┤
       │ Committed           │ <span class=           │ Quality / correctness   │
       │                     │  "committed-pill">     │ work we're doing        │
       │                     │  Committed             │ regardless of votes.    │
       │                     │ </span>                │                         │
       └─────────────────────┴───────────────────────┴─────────────────────────┘

     Every card always carries a `ver-pill` (🎯 vX.Y) that names the targeted
     release — this is independent of the states above; it just says when.

     COMMUNITY VOTING — as of June 2026, voting happens IN DISCORD, not here.
     Feature polls are broadcast to every server's staff chat and tallied
     fleet-wide; poll results decide promotion between sections. The old
     GitHub-Discussions vote arrows are retired (threads closed, kept for
     history). Cards on this page carry NO vote UI.

     When promoting from Coming-up / Future → Shipped:
       1. Strip any committed-pill (it's now shipped, that supersedes it).
       2. Swap the ver-pill (🎯 v5.6) for a shipped-pill (✅ Shipped v5.6).
       3. Move the card to the top of the .shipped-scroll list (latest first).

     When promoting Potential ideas → Future (or Future → Coming-up):
       Add a ver-pill for the targeted release.

     ════════════════════════════════════════════════════════════════════════════ -->

# 🗺️ Roadmap

Where Server Assistant is heading. Priorities are decided by the people who run servers: we send **feature polls straight to every server's staff chat** and tally the votes across the whole fleet — every staff member in every server gets an equal say. Between polls, [`/feedback`]({{ site.url }}{{ site.baseurl }}/support/) or [`/support`]({{ site.url }}{{ site.baseurl }}/support/) reach the dev directly.

<div class="roadmap-hero" id="live-poll">
  <p>🗳️ <strong>Community votes decide what we build.</strong> Feature polls arrive in every server's staff chat — live results appear here.</p>
</div>

<div class="expand-all-bar">
  <button onclick="document.querySelectorAll('details.card').forEach(d=>d.open=true)">Expand all</button>
  <button onclick="document.querySelectorAll('details.card').forEach(d=>d.open=false)">Collapse all</button>
</div>

<!-- ════════════════════════════════════════════════════════════════════════
     TOP KANBAN — In Development + Planned
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-top">

  <div class="lane lane-now">
    <h3>✅ Shipped<small>Live in production today 🚀 — scroll for history</small></h3>

    <div class="shipped-history">
    <div class="shipped-scroll">
    <details class="card">
      <summary>🛡️ Permission health check <span class="shipped-pill">✅ Shipped v5.6.1</span></summary>
      <span class="desc">After setup, an admin can edit the bot's role or a channel's permissions and silently break moderation. This periodically verifies Server Assistant still has what it needs — manage roles, post in your log channel, read your staff chat — and <strong>DMs the owner</strong> (or posts a quiet staff-chat note) the moment something drifts, with exactly what broke and how to fix it. No spam; it only speaks up when something's actually wrong.</span>
    </details>

    <details class="card">
      <summary>🎨 Server-type templates in <code>/setup</code> <span class="shipped-pill">✅ Shipped v5.6.0</span></summary>
      <span class="desc">A picker step in the setup wizard (and the autopilot Apply DM) that asks <em>"what kind of community is this?"</em> and applies a moderation profile tuned to the answer. Categories picked from the actual dominant Discord community types — not generic labels:
        <br><br>
        🎮 <strong>Gaming</strong> · 🎨 <strong>Creator / Streamer</strong> · 🌸 <strong>Anime / Fandom</strong> · 💰 <strong>Crypto / Trading</strong> · 📚 <strong>Education / Study</strong> · 🔞 <strong>NSFW / 18+</strong> · 🛠️ <strong>Set it up myself</strong>
        <br><br>
        Each template = a tuned combo of AutoMod preset, punishment ladder, anti-raid threshold, Pulse default, and Threat Score mode. Crypto, for example, ships strict anti-scam and link filters by default; Education uses a soft-action ladder (warnings over bans); Creator servers get tighter anti-raid because rival fan bases are a real attack vector; NSFW gets age-verification emphasis. The underlying presets already exist — this surfaces them as a 5-second self-classification instead of leaving owners with a one-size-fits-all default.
      </span>
    </details>

    <details class="card">
      <summary>📣 <code>/whatsnew</code> command + post-update DM <span class="shipped-pill">✅ Shipped v5.6.0</span></summary>
      <span class="desc">A slash command any staff member can run to see what's changed since they last looked, plus a one-time DM to the owner after each update summarising the user-visible changes that affect their server (new commands, default changes, panel additions). Replaces "why did this start happening?" support questions before they get sent.</span>
    </details>

    <details class="card">
      <summary>Smart purge <span class="shipped-pill">✅ Shipped v5.6.0</span></summary>
      <span class="desc"><code>purge ai 50</code> deletes the genuinely problematic messages and archives constructive ones to a thread, instead of nuke-everything.</span>
    </details>

    <details class="card">
      <summary>Mod team retrospectives <span class="shipped-pill">✅ Shipped v5.6.0</span></summary>
      <span class="desc">Weekly auto-generated retro embed: case counts, resolution times, notable patterns, items worth discussing. A weekly artifact your mod team will actually want to share with each other and with the owner.</span>
    </details>

    <details class="card">
      <summary><code>/image</code> and <code>/img</code> — aliases for <code>/imagine</code> <span class="shipped-pill">✅ Shipped v5.6.0</span></summary>
      <span class="desc">Quality-of-life shortcuts. The full <code>/imagine</code> command stays as the canonical name; the aliases are there because muscle memory is real and everyone types one of those two by default.</span>
    </details>

    <details class="card">
      <summary>👑 Co-owner role mapping in <code>/settings</code> <span class="shipped-pill">✅ Shipped v5.6.0</span></summary>
      <span class="desc">For servers with multiple owners — business partners, co-founders, or anyone the registered Discord owner wants to grant <strong>Owner-tier</strong> capabilities to. <code>/settings → Roles → Add a co-owner role</code> picks a Discord role and grants it the same skip-approval-on-dangerous-actions permission the Discord-native owner has.<br><br>Follow-up to the v5.6 setup-wizard simplification: the Owner role dropdown was removed from <code>/setup</code> because most servers don't need it (the Discord-native owner is implicit Owner-tier). This is the surface for the minority who do — surfacing it as a deliberate <em>"I want a co-owner"</em> choice rather than an unclear option during initial setup.</span>
    </details>

    <details class="card">
      <summary>🔔 Gentler setup reminders <span class="shipped-pill">✅ Shipped v5.5.14</span></summary>
      <span class="desc">Servers that add the bot but don't finish <code>/setup</code> now get a <strong>short, finite reminder sequence</strong> — a friendly nudge around day 2, day 7, and day 14, then it stops for good (the last one says so). Previously these reminders ran weekly with no end. Spaced out, never bunched; owner DM first with a system-channel fallback; and the moment you run <code>/setup</code>, reminders stop. Only touches servers that haven't completed setup — nothing about moderation changes.</span>
    </details>

    <details class="card">
      <summary>🧭 <code>/setup</code> rebuilt end-to-end + safer defaults <span class="shipped-pill">✅ Shipped v5.5.13</span></summary>
      <span class="desc">The whole setup experience, rebuilt from the moment the bot joins to the final Finish. <strong>Pre-filled detection:</strong> your staff chat, log channel, and Admin/Moderator roles are detected and filled in — confirm a clean detection in a single click. <strong>Guided and can't-get-stuck:</strong> each step stays locked until it's actually valid, and one button creates any missing channels or roles for you (private staff channels, sensibly-permissioned roles). <strong>Pre-flight permission check:</strong> if the bot was added without a permission it needs to moderate, setup tells you up front — with a one-click re-invite — instead of letting you finish a setup that silently can't work. <strong>Plain-language permission review:</strong> if an existing role or channel needs a change to be safe (a Moderator role that can manage the whole server, a staff channel visible to everyone), the bot shows exactly what it wants to change and waits for your approval — it never silently strips or weakens permissions you set on purpose. When the bot <em>can't</em> fix something itself (a staff role sitting above it in the list), it gives exact step-by-step instructions rather than failing silently. <strong>Safe re-runs:</strong> running <code>/setup</code> again pre-fills your current setup and never wipes settings you've tuned elsewhere. <strong>Safer defaults:</strong> Dev Updates ship on for new servers (existing servers are unaffected — your choice is kept), and the welcome can never fail silently — if the full wizard can't load instantly, a short text welcome points you at <code>/setup</code>.</span>
    </details>

    <details class="card">
      <summary>🩹 UX hotfix sweep — privacy defaults, in-place wizards, menu correctness <span class="shipped-pill">✅ Shipped v5.5.11</span></summary>
      <span class="desc">A focused pass on places where the bot's menus didn't match its behaviour. <strong>Fixed:</strong> Pulse panels showing "Disabled" while Pulse was actually firing (three UI sites now read the same source the digest does); <code>/help → ← Overview</code> button doing nothing on click (now correctly disabled on the Overview screen); <code>/autopilot</code> Apply silently swallowing errors. <strong>Defaults moved to opt-in:</strong> Pulse and the weekly digest are now off by default — no more surprise daily messages; autopilot's one-tap install no longer silently enables Pulse. <strong>Improved:</strong> <code>/setup</code> wizard is now a single ephemeral that edits in place (no more viewport-jumping ack messages), with a live "Selected so far" summary; welcome embed for new installs no longer references the closed beta perk. <strong>Existing servers that explicitly configured anything keep their choices</strong> — only the never-touched defaults change.</span>
    </details>

    <details class="card">
      <summary>🚀 One-tap setup on install <span class="shipped-pill">✅ Shipped v5.5.10</span></summary>
      <span class="desc">As soon as you add Server Assistant, the bot scans your server, detects sensible defaults (staff chat, log channel, Owner / Admin / Mod roles), and <strong>DMs the owner with a one-button "Apply" proposal</strong>. Tap once and your server is fully configured. Fallback to your system channel with an owner @-ping if DMs are closed, so nobody misses the setup prompt because of a privacy setting. <code>/setup</code> and <code>/autopilot</code> still work for manual flows.</span>
    </details>

    <details class="card">
      <summary>⌘ Per-server command usage logging <span class="shipped-pill">✅ Shipped v5.5.9</span></summary>
      <span class="desc">Every slash command, right-click context menu, and natural-language text command appears in your server's log channel as a compact entry: <em>user · command · channel · invocation type</em>. Owners and staff see exactly what's being used and by whom, in the same channel they already check. Fire-and-forget — never blocks the command itself. Toggle off in <code>/settings → Behaviour</code> if your server is chatty.</span>
    </details>

    <details class="card">
      <summary>💬 <code>/concierge</code> renamed to <code>/sai</code> + admin read-only <span class="shipped-pill">✅ Shipped v5.5.7</span></summary>
      <span class="desc">Same Server Assistant intelligence chat, shorter name. Owners get full access (read insights + propose config changes); <strong>admins now get read-only access</strong> — they can ask questions and get insights but can't enroll proposed changes. Embed shows the caller's role tag so it's obvious which mode the answer came from.</span>
    </details>

    <details class="card">
      <summary>🏷️ Multi-tenant address detection + per-feature NL billing <span class="shipped-pill">✅ Shipped v5.5.6</span></summary>
      <span class="desc">The bot now recognises its <strong>actual per-server nickname</strong> when staff write "Pepper, mute @user" or "Watchdog: ban that user" — previously it only matched a hardcoded set of names. Also: every AI call is now properly tagged in your token usage breakdown (<code>nl_intent</code>, <code>nl_chat</code>, <code>nl_extract</code>, <code>report_command</code>, <code>self_trained</code>) so you see exactly which features ate which tokens in <code>/premium</code>.</span>
    </details>

    <details class="card">
      <summary>👋 Refreshed staff onboarding + Dev Updates default ON <span class="shipped-pill">✅ Shipped v5.5.5</span></summary>
      <span class="desc">The welcome message posted after <code>/setup</code> is now a 4-embed sequence (Text · Slash · Right-click · Decision cards) and <strong>@mentions every configured staff role</strong> so your team actually sees it. Slash command list grouped by Core moderation / Raid response / Config / Personal with all v5.5.x additions. Dev Updates toggle starts enabled in setup — owners almost always want release notes for the bot powering their server.</span>
    </details>

    <details class="card">
      <summary>📚 Docs reconciliation + Premium <code>/imagine</code> cooldown removed <span class="shipped-pill">✅ Shipped v5.5.4</span></summary>
      <span class="desc">Premium servers now get <strong>unlimited <code>/imagine</code></strong> — the 30-second per-guild cooldown is gone, matching what the pricing page has always said. Coordinated sweep across docs, pricing, privacy policy, and listing copy to make sure every page reflects what actually shipped in v5.3–v5.5.</span>
    </details>

    <details class="card">
      <summary>📩 Ban reasons &amp; one-reply appeals <span class="shipped-pill">✅ Shipped v5.5</span></summary>
      <span class="desc"><strong>Shipped 2026-06-03.</strong> Every ban — manual, <code>/tempban</code>, AutoMod, or native — now DMs the user the reason and invites <strong>one reply</strong> to appeal. That reply opens a staff appeal ticket with <strong>Unban</strong> / <strong>Deny</strong> / <strong>Research</strong> buttons; Research runs <strong>Message Report</strong> (the renamed right-click AI summary) on the user's last message so you can judge context first. Soft-bans excluded; on by default.</span>
    </details>

    <details class="card">
      <summary>AutoMod AI second-opinion + repeat-offender detection <span class="shipped-pill">✅ Shipped v5.4</span></summary>
      <span class="desc"><strong>Shipped 2026-06-03.</strong> Two safety upgrades. <strong>AutoMod AI second-opinion</strong> (Premium, opt-in via <code>/automod → AI Review</code>) scores borderline filter hits and routes low-confidence catches to a one-tap staff review card — <em>Delete &amp; warn</em> / <em>Allow</em> — instead of auto-deleting, cutting false positives. <strong>Repeat-offender detection</strong> (free, opt-in via <code>/altguard</code>) fingerprints banned/kicked users and, on a confident match, auto-bans likely ban-evading alts on join while alerting staff.</span>
    </details>

    <details class="card">
      <summary>Baseline admin: <code>/role</code> · <code>/lockdown</code> · <code>/tempban</code> <span class="admin-pill">Baseline admin</span><span class="shipped-pill">✅ Shipped v5.3</span></summary>
      <span class="desc"><strong>Shipped 2026-06-03.</strong> Three plug-and-play admin essentials — all permission-gated and written to your audit trail. <code>/role add|remove</code> changes a member's roles in one command, with guards so staff can't assign a role at or above their own. <code>/lockdown start|end</code> locks every channel at once for raid response and, on end, restores each channel's <em>exact</em> prior permissions — not a best guess. <code>/tempban @user 7d</code> bans for a set time and un-bans automatically, with a timer that survives restarts.</span>
    </details>

    <details class="card">
      <summary>🎫 Ticket Panels <span class="shipped-pill">✅ Shipped v5.2</span></summary>
      <span class="desc"><strong>Shipped 2026-06-03.</strong> In-server private support tickets — no DMs, no messy threads. Admins run <code>/tickets setup</code> to post a panel with a <strong>Create Ticket</strong> button; members open a private <code>ticket-NNNN</code> channel via a short intake form, and a full <code>.txt</code> transcript is saved on close. <strong>Free:</strong> one-question intake, private channels, transcripts. <strong>Premium:</strong> up to 4 custom questions, custom welcome/close messages, and adding users mid-ticket.</span>
    </details>

    <details class="card">
      <summary>Threat Score <span class="shipped-pill">✅ v1 (advisory) shipped v3.8</span></summary>
      <span class="desc">Risk-based moderation that replaces fixed punishment ladders. Actions fit the actual threat — context-aware, opt-in, with extensive safeguards against punishing legitimate users. <strong>v1 (advisory) shipped 2026-05-29 — free for every server</strong> — each user gets an explainable, time-decayed risk score shown to staff in their profile. <strong>It never auto-actions</strong>; it's pure visibility. The <strong>active</strong>, score-driven phase (<strong>Premium</strong>, with the safeguards below) comes only after the advisory version proves accurate in real servers.</span>
      <details class="safeguards">
        <summary>Safeguards against false positives</summary>
        <ul>
          <li>Sentiment + content paired with velocity (eager new members score down, not up)</li>
          <li>First-week grace period for genuinely new users</li>
          <li>Moderate scores trigger a friendly check-in DM, not an action</li>
          <li>Score decay over sustained good behaviour</li>
          <li>No silent kicks or bans — high-score events ping staff for review</li>
          <li>Full transparency: every action shows its score breakdown to user + staff</li>
          <li>Server-defined thresholds; fallback to fixed-ladder mode supported</li>
        </ul>
      </details>
    </details>

    <details class="card">
      <summary>Bot health insurance <span class="shipped-pill">✅ Shipped v3.7</span></summary>
      <span class="desc">Bot watches its own impact in each server and proactively suggests tuning when it's becoming too noisy. Stops Server Assistant from quietly becoming the bot every server eventually mutes. <strong>Shipped 2026-05-29</strong> — weekly self-check on AutoMod footprint, gentle tuning suggestion to staff chat, read-only, ≤once/14 days.</span>
    </details>

    <details class="card">
      <summary>Self-trained AutoMod <span class="shipped-pill">✅ Shipped v3.6</span></summary>
      <span class="desc">Bot watches your staff's manual decisions (deletes + reported messages), clusters the patterns, then proposes server-specific AutoMod rules for owner approval. <strong>v1 shipped 2026-05-28</strong> — opt-in observation, on-demand AI rule suggestions, accept/skip review. Nothing is ever auto-enforced.</span>
    </details>

    <details class="card">
      <summary>Pulse <span class="shipped-pill">✅ Shipped v3.5</span></summary>
      <span class="desc">Always-on AI server-health analyst. Daily digests, leading-indicator flags, channel-tone shifts. Never auto-actions — just gives staff x-ray vision. <strong>v1 shipped 2026-05-28</strong> — 24-hour summary, week-over-week deltas, two leading-indicator flags (AutoMod-rate spike, sub-raid join spike). Channel-tone analysis lands in a later iteration.</span>
    </details>
    </div>
    </div>
  </div>

  <div class="lane lane-comingup">
    <h3>🟢 Coming up<small>Next — shaped by your votes</small></h3>

    <details class="card" id="card-ai-command">
      <summary>🤖 <code>/ai</code> — general-purpose AI for your community <span class="ver-pill">🎯 v5.7</span></summary>
      <span class="desc">A Premium-only command any member can use in opted-in servers: <code>/ai &lt;your question&gt;</code> and Server Assistant replies under its own name with a Claude-powered answer. Default <strong>off</strong>; the owner enables it in <code>/settings → 🤖 AI Access</code> with controls for allowed channels, public-vs-ephemeral replies, per-user and per-channel rate limits, and a query log. Useful for "what time is it in Berlin?", "explain this Discord setting", "draft a server rule for X". Image generation stays on <code>/imagine</code> separately so the free-tier Pollinations fallback isn't lost.</span>
    </details>

    <details class="card" id="card-ai-access">
      <summary>🤖 <code>/settings → AI Access</code> panel <span class="ver-pill">🎯 v5.7</span></summary>
      <span class="desc">The owner-facing control panel for everything AI: <code>/ai</code> enable toggle, allowed channels, reply visibility (public/ephemeral), per-user and per-channel rate limits, content strictness, and the log-to channel. Ships alongside <code>/ai</code>.</span>
    </details>

    <details class="card" id="card-rule-explainer">
      <summary>AI rule explainer <span class="ver-pill">🎯 v5.7</span></summary>
      <span class="desc">AutoMod DMs the user not just which filter matched, but why this rule exists, in plain language. Cuts the "I have no idea why I got warned" complaint at the root.</span>
    </details>

    <details class="card" id="card-native-coaching">
      <summary>Native-action coaching <span class="admin-pill">Baseline admin</span><span class="ver-pill">🎯 v5.7</span></summary>
      <span class="desc"><strong>Logging</strong> of native Discord actions (right-click ban/kick/timeout) <strong>shipped in v5.1</strong>. What's coming next: when a staff member moderates from Discord's own UI, they get a gentle one-line tip on doing the same thing through Server Assistant (so you keep your escalation ladder, approvals, and undo window intact). Read-only; never blocks the action.</span>
    </details>

    <details class="card" id="card-coverage-map">
      <summary>Staff coverage map <span class="ver-pill">🎯 v5.7</span></summary>
      <span class="desc">Time-zone-aware visualisation of when each mod is typically active; flags coverage gaps for raid-prone hours.</span>
    </details>
  </div>

</div>

<!-- ════════════════════════════════════════════════════════════════════════
     FUTURE — planned, direction set, timing isn't
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-section future">
  🔵 Future
  <span class="sub">Planned and prioritised — the direction is set, the timing isn't. Free-tier upgrades target the <strong>v5.6–v5.9</strong> series, and the <strong>first Premium features now arrive in the v5.8–v5.9 ramp</strong> ahead of the full Premium suite at <strong>v6.0</strong>. Voting reorders what lands first.</span>
</div>

<div class="future-grid">

  <details class="card" id="card-verification-gate">
    <summary>🛡️ Verification gate — DM-button · web captcha · risk-targeted <span class="ver-pill">🎯 v5.8</span></summary>
    <span class="desc">A configurable join-gate that holds new members in a quarantine role until they prove they're human, then auto-grants your member role. <strong>Three modes, so friction matches your threat level:</strong> <strong>DM-button</strong> (one tap, lowest friction — the sensible default), <strong>web captcha</strong> (a hosted challenge page for raid-prone or high-profile servers), and <strong>risk-targeted</strong> — verify <em>only</em> accounts that Threat Score and AltGuard already flag as suspicious (brand-new accounts, likely ban-evading alts) while trusted regulars walk straight in. Fail or time out → auto-kick, staff alerted. <strong>The differentiator:</strong> friction scales with risk instead of taxing every legitimate joiner the way fixed-captcha bots do — only Server Assistant already computes the risk signal to drive it.</span>
  </details>

  <details class="card" id="card-application-forms">
    <summary>📋 Application / join-approval forms <span class="ver-pill">🎯 v5.9</span></summary>
    <span class="desc">A staff-reviewed application step before access is granted. Owners define the questions (<em>why are you here, age-gate confirmation, rules agreement</em>); applicants answer a short form on join, and each submission lands in staff chat with one-tap <strong>Approve</strong> / <strong>Deny</strong> and an optional reason DM'd back. Builds directly on the Ticket Panels intake engine shipped in v5.2, and pairs naturally with the Verification gate for communities that want both a human-check <em>and</em> a curation step.</span>
  </details>

  <details class="card" id="card-anti-nuke">
    <summary>🛡️ Anti-nuke / rogue-admin guard <span class="ver-pill">🎯 v5.9</span></summary>
    <span class="desc">Proactive protection against a compromised admin account or a malicious insider — the gap between today's <em>manual</em> <code>/lockdown</code> and a real attack. Rate-limits destructive admin actions (mass channel/role deletions, mass bans/kicks, mass webhook creation) and, on a confident burst, <strong>auto-strips the actor's roles into a powerless quarantine</strong> mid-attack and alerts the owner with exactly what was attempted. Reuses the exact-permission restore engine already shipped in <code>/lockdown end</code>, so reversing the damage isn't a best-guess. Core security → free forever.</span>
  </details>

  <details class="card">
    <summary>💾 Server backup &amp; restore <span class="ver-pill">🎯 v6.x</span><span class="premium-pill">💎 Premium</span></summary>
    <span class="desc">Scheduled snapshots of your server's structure — channels, categories, roles, and their <em>exact</em> permission overwrites — with one-tap restore after a nuke or a botched reorganisation. The insurance policy that sits behind the anti-nuke guard: if something does get through, you rebuild in seconds instead of from memory. Builds on the same permission-capture primitive the anti-nuke guard and <code>/lockdown</code> already use.</span>
  </details>

  <details class="card" id="card-community-practice">
    <summary>Community-of-practice sharing <span class="ver-pill">🎯 v5.8</span></summary>
    <span class="desc"><em>"Servers like yours configure X this way"</em> recommendations based on similar community profiles. Privacy-first — patterns only, no per-server identifying data.</span>
  </details>

  <details class="card" id="card-bot-on-bot">
    <summary>Bot-on-bot detection <span class="ver-pill">🎯 v5.8</span></summary>
    <span class="desc">Flag suspicious automation pretending to be human — relevant for mass-marketing raids that evade text filters.</span>
  </details>

  <details class="card" id="card-byo-media">
    <summary>🎨 Bring your own AI media credits <span class="ver-pill">🎯 v5.8</span></summary>
    <span class="desc">Connect your own <a href="https://pollinations.ai" target="_blank" rel="noopener">Pollinations</a> account to power AI media generation — <code>/imagine</code> images today, plus video, text-to-speech, and voice over time — on your <strong>own</strong> balance, with no shared limits. A one-time approve-in-browser flow links your account; you set your own budget, restrict allowed models, and revoke access any time. Media runs at your pace, independent of the built-in allowance.</span>
  </details>

  <details class="card" id="card-decision-explainer">
    <summary>🌟 Decision explainer + multi-round appeals <span class="ver-pill">🎯 v5.8</span><span class="premium-pill">💎 Premium</span></summary>
    <span class="desc">Builds on the one-reply ban-appeal flow shipped in v5.5. Adds: warned/muted users can DM the bot <em>"why was I actioned?"</em> for a plain-language answer drawn from the staff-supplied reason and the matched rule; banned users get a <strong>guided multi-round</strong> appeal — a short AI-facilitated back-and-forth that gives staff more than a single line to judge.</span>
  </details>

  <details class="card" id="card-reaction-roles">
    <summary>Reaction roles <span class="ver-pill">🎯 v5.9</span><span class="premium-pill">💎 Premium</span></summary>
    <span class="desc">Button-based self-service role panels in any channel.</span>
  </details>

  <details class="card" id="card-custom-commands">
    <summary>Custom slash commands <span class="ver-pill">🎯 v5.9</span><span class="premium-pill">💎 Premium</span></summary>
    <span class="desc">Server owners define their own <code>/foo</code> returning a configured embed or text snippet.</span>
  </details>

</div>

<!-- ════════════════════════════════════════════════════════════════════════
     PREMIUM-TIER — part of Future, full width, 4 sub-columns by tier
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-section premium">
  🟡 Premium-tier — new paid capabilities
  <span class="sub">Part of <strong>Future</strong>. Core moderation stays free forever — the items below are <em>new</em> capabilities planned for the Premium tier, alongside the larger monthly AI-token allowance Premium already includes.</span>
</div>

<div class="premium-grid">

  <div class="premium-tier-col">
    <h4>Tier A — ship first <span class="ver-pill">🎯 v6.0</span></h4>
    <p style="margin:0 0 0.25rem;font-size:0.78rem;color:#8a6d0c;">A few Tier A features have been pulled forward into the <strong>v5.8–v5.9</strong> ramp (see the Future lane above) — the rest land here at v6.0.</p>

    <details class="card"><summary>🌟 Mediator — pre-action de-escalation</summary><span class="desc">When a conversation is escalating <em>before</em> any moderation action, bot DMs both parties, collects each side privately, and produces a neutral summary for staff. The pre-action sibling to v5.5's one-reply ban appeals. Differentiator — no other major bot does this.</span></details>

    <details class="card"><summary>Daily AI channel summaries</summary><span class="desc">Once-a-day digest of activity in a chosen channel, posted to a configured destination.</span></details>

    <details class="card"><summary>🌟 Premium Plus ($14/mo) <span class="shipped-pill">Under consideration</span></summary><span class="desc">For high-volume servers that push past the 750K/month Standard Premium cap. Includes: 2M tokens/month, priority Concierge response queue, multi-server bundle (3 servers per subscription), and bonus features as they ship. Pending validation from 50+ Standard Premium subs — highest-voted ideas from that cohort will define the final feature set.</span></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier B — solid additions <span class="ver-pill">🎯 v6.1</span></h4>

    <details class="card"><summary>🌟 AI Q&amp;A from server FAQ</summary><span class="desc">Bot answers member questions based on FAQ snippets the owner has provided — or pinned messages it learns from automatically. Cuts the same-question-asked-50-times noise without staff having to babysit channels. Differentiator: nobody else combines this with the moderation context the bot already has.</span></details>

    <details class="card"><summary>Embed builder</summary><span class="desc">Interactive wizard for crafting rich announcements with fields, images, and buttons.</span></details>

    <details class="card"><summary>Leveling / XP</summary><span class="desc">Server-wide XP with level-up roles and a leaderboard. Opt-in per server, opt-out per user.</span></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier C — nice-to-have <span class="ver-pill">🎯 v6.2</span></h4>

    <details class="card"><summary>🌟 Auto-translate (per-channel)</summary><span class="desc">On-demand or automatic translation for configured channels — per-language, per-channel rules so an international community can have an English channel, a Spanish channel, and a bilingual one without bots crossing wires. Differentiator over off-the-shelf translate bots: pairs with moderation context (won't translate AutoMod-deleted messages, surfaces tone shifts across language).</span></details>

    <details class="card"><summary>Welcome card images</summary><span class="desc">Auto-generated PNG welcome for each new joiner.</span></details>

    <details class="card"><summary>Birthday tracker</summary><span class="desc">Opt-in birthdays with auto-DM and channel post on the day.</span></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier D — power users <span class="ver-pill">🎯 v6.3</span></h4>

    <details class="card"><summary>🌟 White-label branding</summary><span class="desc">Fully replace the bot's identity per-server — your name, your avatar, your colour scheme, your support footer. No "Powered by Server Assistant" required. Differentiator: no other major moderation bot lets you fully rebrand.</span></details>

    <details class="card"><summary>REST / webhook API</summary><span class="desc">Read-only endpoints for your guild's bot data (warnings, audit log, activity stats). For staff dashboards and external tooling — and the <strong>backend foundation for the v7.0.0 web portal</strong>.</span></details>
  </div>

</div>

<!-- ════════════════════════════════════════════════════════════════════════
     FLAGSHIP — the next major version, full-width hero
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-section flagship">
  🚀 Flagship — v7.0.0
  <span class="sub">The next <strong>major</strong> release. Everything in the v5.x–v6.x line is built and managed inside Discord; v7.0.0 opens a second front door.</span>
</div>

<div class="flagship-card">
  <h4>🖥️ Web portal for server administration <span class="ver-pill">🎯 v7.0.0</span></h4>
  <span class="desc"><strong>Free for every server.</strong> A full browser-based control panel for Server Assistant — sign in with <strong>Discord OAuth</strong>, pick a server, and manage it from a real screen instead of chat. The big-three bots (MEE6, Dyno, Carl-bot) all lead with a dashboard; this is Server Assistant's answer, built on top of the v6.3 <strong>REST / webhook API</strong> as its backend. <strong>At launch:</strong>
    <ul>
      <li><strong>Config &amp; settings, visualised</strong> — edit AutoMod, escalation ladders, server-type templates, and every <code>/settings</code> toggle with live previews, not blind form fields.</li>
      <li><strong>Moderation &amp; cases</strong> — searchable case history, warnings, appeals, tickets, and the audit trail in one filterable view; act on cases (review, undo, escalate) from the browser.</li>
      <li><strong>Analytics dashboards</strong> — Pulse, threat-score trends, mod-team retros, and token usage as real charts over time.</li>
      <li><strong>Guardrails carried over, not bypassed</strong> — the portal honours the same approval prompts, undo windows, and audit logging as the Discord commands. The web is a new <em>surface</em>, never a back door around the safety model — the core differentiator versus competitors' raw settings dashboards.</li>
    </ul>
    <em>After launch:</em> multi-server management from one login, with per-server role-mapped access for your staff.</span>
</div>

<!-- ════════════════════════════════════════════════════════════════════════
     LONG-TERM EXPLORATIONS — full width, 3-column gallery
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-section longterm">
  🔮 Potential ideas
  <span class="sub">Bigger conceptual swings we're genuinely interested in — including <strong>voice-channel moderation</strong>, the industry's biggest blind spot. Exploratory, not committed to any release. The ones you vote up are the ones we investigate first.</span>
</div>

<div class="longterm-grid">

  <details class="card"><summary>Voice-channel moderation</summary><span class="desc">Real-time transcription + AutoMod / threat-score logic applied to voice channels. The industry's biggest moderation blind spot — no major bot touches voice.</span></details>

  <details class="card"><summary>Federated moderation network</summary><span class="desc">Opt-in cross-server ban / warn data sharing for trusted communities. Solves cross-server raid coordination.</span></details>

  <details class="card"><summary>Cross-server reputation</summary><span class="desc">Opt-in positive reputation that follows trusted users between partner servers — the inverse of federated banlists. Conceptually strong, operationally complex (cross-tenant trust, abuse vectors). Held here until two communities ask for it by name with a use case.</span></details>

  <details class="card"><summary>Polls</summary><span class="desc"><em>Likely not building this.</em> Discord shipped native polls in 2024, which removes the need for a bot-driven <code>/poll</code> in almost every case. Kept here as a reference point — if a real use case emerges (advanced poll types, longer durations, role-restricted voting) it can be promoted back.</span></details>

  <details class="card"><summary>AI-drafted server policy</summary><span class="desc">Bot reads your channels for two weeks, drafts a rules document tailored to your community's actual norms, posts it for owner approval.</span></details>

  <details class="card"><summary>Conversational onboarding</summary><span class="desc">Replace the static welcome DM with a short AI conversation that auto-assigns roles based on answers and filters bad-faith joiners before their first message.</span></details>

  <details class="card"><summary>Drift detection</summary><span class="desc">Track server tone and behaviour over weeks. Alert the Owner when material drift is detected so culture can be maintained before it erodes invisibly.</span></details>

  <details class="card"><summary>Community DNA fingerprint</summary><span class="desc">Per-server embedding capturing community character. Powers new-member matching, cross-server compatibility, and rule recommendations.</span></details>

  <details class="card"><summary>Predictive mod scheduling</summary><span class="desc">Operational intelligence: <em>"Sunday evenings see 3× your average AutoMod hits — adjust on-call rotation?"</em></span></details>

  <details class="card"><summary>Mod-team coaching / bias audit</summary><span class="desc">Compares each mod's decision patterns against the team average; surfaces outliers for self-reflection, never public shaming.</span></details>

  <details class="card"><summary>Persona / role-based moderation</summary><span class="desc">Different filter aggressiveness per role tier. Community norms scale with trust — verified members get more latitude, unverified get less.</span></details>

  <details class="card"><summary>Channel-specific tone tuning</summary><span class="desc">Per-channel policy — vent channels soft, family-friendly strict, debate channels allow heat but flag personal attacks.</span></details>

  <details class="card"><summary>Misinformation flagging</summary><span class="desc">Fact-checkable claims get a 💡 reaction linking to a verified source. Never auto-removes; treats the user as an adult.</span></details>

  <details class="card"><summary>Reverse moderation</summary><span class="desc">When a conversation derails, the bot suggests a constructive question or topic shift — soft-touch alternative to message deletion.</span></details>

  <details class="card"><summary>Cross-modal moderation</summary><span class="desc">Unified text + image NSFW + link safety + voice analysis. Closes the gap where bad actors flip between modalities to evade single-mode filters.</span></details>

  <details class="card"><summary>AI-generated mod training</summary><span class="desc">Auto-generated new-mod onboarding doc based on actual cases your team has handled and house style they've established.</span></details>

  <details class="card"><summary>AI thread management</summary><span class="desc">Off-topic conversations get auto-threaded with a soft DM to participants — <em>"moved this fascinating tangent to its own space."</em></span></details>

  <details class="card"><summary>Multi-language moderation NLP</summary><span class="desc">Native-level moderation, intent detection, and natural-language commands for languages beyond English — e.g. Spanish, French, German, Polish, Hungarian, Czech. Currently exploratory; not on a release path. Voteable once a clear cluster of non-English servers asks for a specific language by name. The work is real (per-language prompts, evals, edge-case discovery) and proportional to the languages we choose to support.</span></details>

</div>

---

## 📣 How to influence the roadmap

The fastest way to move something up the list:

1. **Vote in the feature polls** that arrive in your server's staff chat — every staff member in every server gets an equal vote, and the fleet-wide tally decides what gets built first.
2. **Send [`/feedback`]({{ site.url }}{{ site.baseurl }}/support/) or open a [`/support`]({{ site.url }}{{ site.baseurl }}/support/) ticket** describing the use case — not just *"add feature X"* but *what you'd do with it*.

What ships is what gets requested most clearly. Vague *"add more features"* feedback is unactionable; *"I run a 2,000-member RP server and we need X because Y"* gets prioritised.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't installed yet
- [Changelog]({{ site.url }}{{ site.baseurl }}/changelog/) for what's already shipped
- [Support]({{ site.url }}{{ site.baseurl }}/support/) to ask questions or request features


<script>
(function () {
  // Deep-links from community-poll embeds: #card-xyz opens that card.
  function openCardFromHash() {
    var id = location.hash.replace(/^#/, "");
    if (!id) return;
    var el = document.getElementById(id);
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      el.scrollIntoView({ block: "center" });
    }
  }
  window.addEventListener("hashchange", openCardFromHash);
  openCardFromHash();
})();
</script>

<script>
(function () {
  // Live community-vote results in the hero — aggregate numbers only, served
  // by the public results API (60s cache). Falls back to the static line if
  // no poll has run yet or the API is unreachable.
  var box = document.getElementById("live-poll");
  if (!box) return;
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  fetch("https://sa.wandweb.co/api/public/poll-results")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) {
      var p = data && data.poll;
      if (!p || !p.answers || !p.answers.length) return;
      var t = p.tallies || {};
      var total = 0;
      Object.keys(t).forEach(function (k) { total += Number(t[k]) || 0; });
      var rows = p.answers.map(function (a, i) {
        var n = Number(t[i]) || 0;
        var pct = total ? Math.round(n / total * 100) : 0;
        var name = esc((a.emoji ? a.emoji + " " : "") + a.text);
        var label = a.link ? '<a href="' + esc(a.link) + '">' + name + "</a>" : name;
        return '<div class="lp-row"><span class="lp-label">' + label + '</span>' +
               '<span class="lp-track"><span class="lp-fill" style="width:' + pct + '%"></span></span>' +
               '<span class="lp-pct">' + pct + "% (" + n + ")</span></div>";
      }).join("");
      var closes = "";
      if (p.status === "active" && p.closes_at) {
        var d = new Date(p.closes_at);
        if (!isNaN(d)) closes = " · closes " + d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
      }
      box.innerHTML =
        '<div class="lp-q">🗳️ Live community vote — ' + esc(p.question) + "</div>" + rows +
        '<div class="lp-meta">' + total + " votes · " + (p.servers || 0) + " server" + (p.servers === 1 ? "" : "s") + closes +
        (p.status === "active"
          ? " · 🟢 live — vote from your server's staff chat; every staff member has a voice"
          : " · ✅ closed — thank you!") +
        "</div>";
    })
    .catch(function () { /* keep the static fallback line */ });
})();
</script>
