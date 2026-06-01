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
.roadmap-section.premium  { background: #d4ac0d; }
.roadmap-section.longterm { background: #7d3c98; }
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

/* ── Long-term: 3-column gallery ──────────────────────────────────────────── */
.longterm-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
@media (max-width: 900px) { .longterm-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .longterm-grid { grid-template-columns: 1fr; } }

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
.lane-planned  { border-color: #3498db; }

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
  padding: 0.7rem 4.5rem 0.7rem 0.85rem;  /* right padding leaves room for vote-arrow */
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

/* Vote-arrow: green up-arrow + count, positioned where the chevron used to be */
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
.vote-arrow {
  position: absolute;
  right: 0.55rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.55rem;
  background: #e8f5e9;
  border: 1px solid #a5d6a7;
  border-radius: 999px;
  color: #2e7d32;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  line-height: 1;
  transition: all 0.15s ease;
}
.vote-arrow:hover {
  background: #2e7d32;
  border-color: #2e7d32;
  color: #fff;
  transform: translateY(-50%) scale(1.06);
  text-decoration: none;
}
.vote-arrow-icon {
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1;
}
.vote-arrow-count {
  font-variant-numeric: tabular-nums;
  min-width: 0.6em;
  text-align: center;
}
.vote-arrow.zero {
  background: #f5f5f5;
  border-color: #e0e0e0;
  color: #888;
}
.vote-arrow.zero:hover {
  background: #2e7d32;
  border-color: #2e7d32;
  color: #fff;
}
.vote-arrow.loading { opacity: 0.55; }

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

# 🗺️ Roadmap

Where Server Assistant is heading. Priorities shift based on what server owners actually request — open a ticket via [`/support`]({{ site.url }}{{ site.baseurl }}/support/) to suggest features or vote on what's next.

<div class="roadmap-hero">
  <p>📌 <strong>Dates are deliberately omitted.</strong> Things land when they're ready.</p>
  <p>💚 <strong>Every current feature stays free forever.</strong> The Premium-tier section below adds <em>new</em> capabilities.</p>
  <p>🎁 <strong>Beta-period perk:</strong> servers that add Server Assistant <em>before the premium tier launches</em> receive <strong>12 months of free premium access</strong> from launch day. Use the bot now → keep premium free for a year. No card, no claim form.</p>
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
    <h3>✅ Shipped<small>v4.0 — the AI-moderation update is live 🚀</small></h3>

    <details class="card">
      <summary>Pulse <span class="shipped-pill">✅ Shipped v3.5</span><a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/1" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Always-on AI server-health analyst. Daily digests, leading-indicator flags, channel-tone shifts. Never auto-actions — just gives staff x-ray vision. <strong>v1 shipped 2026-05-28</strong> — 24-hour summary, week-over-week deltas, two leading-indicator flags (AutoMod-rate spike, sub-raid join spike). Channel-tone analysis lands in a later iteration.</span>
    </details>

    <details class="card">
      <summary>Self-trained AutoMod <span class="shipped-pill">✅ Shipped v3.6</span><a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/2" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Bot watches your staff's manual decisions (deletes + reported messages), clusters the patterns, then proposes server-specific AutoMod rules for owner approval. <strong>v1 shipped 2026-05-28</strong> — opt-in observation, on-demand AI rule suggestions, accept/skip review. Nothing is ever auto-enforced.</span>
    </details>

    <details class="card">
      <summary>Bot health insurance <span class="shipped-pill">✅ Shipped v3.7</span><a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/3" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Bot watches its own impact in each server and proactively suggests tuning when it's becoming too noisy. Stops Server Assistant from quietly becoming the bot every server eventually mutes. <strong>Shipped 2026-05-29</strong> — weekly self-check on AutoMod footprint, gentle tuning suggestion to staff chat, read-only, ≤once/14 days.</span>
    </details>

    <details class="card">
      <summary>Threat Score <span class="shipped-pill">✅ v1 (advisory) shipped v3.8</span><a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/4" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Risk-based moderation that replaces fixed punishment ladders. Actions fit the actual threat — context-aware, opt-in, with extensive safeguards against punishing legitimate users. <strong>v1 (advisory) shipped 2026-05-29</strong> — each user gets an explainable, time-decayed risk score shown to staff in their profile. <strong>It never auto-actions</strong>; it's pure visibility. The active, score-driven phase (with the safeguards below) comes only after the advisory version proves accurate in real servers.</span>
      <details class="safeguards">
        <summary>Safeguards against false positives<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/5" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
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
  </div>

  <div class="lane lane-planned">
    <h3>🔵 Planned<small>Free-tier features after v4.0</small></h3>

    <details class="card">
      <summary>AutoMod confidence scoring</summary>
      <span class="desc">Every AI-flagged action shows its confidence level. Staff set thresholds for auto-action vs review-required.</span>
    </details>

    <details class="card">
      <summary>Repeat-offender detection<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/6" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Fingerprint behaviour to recognise users coming back on alt accounts after a ban.</span>
    </details>

    <details class="card">
      <summary>AI rule explainer<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/7" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">AutoMod DMs the user not just which filter matched, but why this rule exists, in plain language.</span>
    </details>

    <details class="card">
      <summary>Smart purge<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/8" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc"><code>purge ai 50</code> deletes the genuinely problematic messages and archives constructive ones to a thread, instead of nuke-everything.</span>
    </details>

    <details class="card">
      <summary>Mod team retrospectives<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/9" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Weekly auto-generated retro embed: case counts, resolution times, notable patterns, items worth discussing.</span>
    </details>

    <details class="card">
      <summary>Cross-server reputation<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/10" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Opt-in positive reputation that follows trusted users between partner servers. The inverse of federated banlists.</span>
    </details>

    <details class="card">
      <summary>Community-of-practice sharing<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/11" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc"><em>"Servers like yours configure X this way"</em> recommendations based on similar community profiles.</span>
    </details>

    <details class="card">
      <summary>Staff coverage map<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/12" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Time-zone-aware visualisation of when each mod is typically active; flags coverage gaps for raid-prone hours.</span>
    </details>

    <details class="card">
      <summary>Bot-on-bot detection<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/13" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary>
      <span class="desc">Flag suspicious automation pretending to be human — relevant for mass-marketing raids that evade text filters.</span>
    </details>
  </div>

</div>

<!-- ════════════════════════════════════════════════════════════════════════
     PREMIUM-TIER — full width, 4 sub-columns by tier
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-section premium">
  🟡 Premium-tier feature backlog
  <span class="sub">Launches alongside Discord App Directory verification. Current features stay free forever. Beta-period servers (those using Server Assistant before launch) get 12 months of free premium access on launch.</span>
</div>

<div class="premium-grid">

  <div class="premium-tier-col">
    <h4>Tier A — ship first</h4>

    <details class="card"><summary>🌟 Premium Plus ($14/mo) <span class="shipped-pill">Under consideration</span></summary><span class="desc">For high-volume servers that push past the 750K/month Standard Premium cap. Includes: 2M tokens/month, priority Concierge response queue, multi-server bundle (3 servers per subscription), and bonus features as they ship. Pending validation from 50+ Standard Premium subs — highest-voted ideas from that cohort will define the final feature set.</span></details>

    <details class="card"><summary>Reaction roles<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/14" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Button-based self-service role panels in any channel.</span></details>
    <details class="card"><summary>Custom slash commands<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/15" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Server owners define their own <code>/foo</code> returning a configured embed or text snippet.</span></details>
    <details class="card"><summary>Daily AI channel summaries<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/16" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Once-a-day digest of activity in a chosen channel, posted to a configured destination.</span></details>
    <details class="card"><summary>Mediator<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/17" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">When a conversation is escalating, bot DMs both parties, collects each side privately, and produces a neutral summary for staff.</span></details>
    <details class="card"><summary>Decision explainer + appeals<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/18" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Users can DM <em>"why was I warned?"</em> for a plain-language answer. Banned users start structured appeals through a guided AI flow.</span></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier B — solid additions</h4>

    <details class="card"><summary>Leveling / XP<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/19" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Server-wide XP with level-up roles and a leaderboard. Opt-in per server, opt-out per user.</span></details>
    <details class="card"><summary>Polls<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/20" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc"><code>/poll</code> with button-based voting and live tally.</span></details>
    <details class="card"><summary>Embed builder<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/21" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Interactive wizard for crafting rich announcements with fields, images, and buttons.</span></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier C — nice-to-have</h4>

    <details class="card"><summary>Birthday tracker<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/22" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Opt-in birthdays with auto-DM and channel post on the day.</span></details>
    <details class="card"><summary>Welcome card images<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/23" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Auto-generated PNG welcome for each new joiner.</span></details>
    <details class="card"><summary>AI Q&amp;A from server FAQ<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/24" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Bot answers questions based on FAQ snippets the owner has provided.</span></details>
    <details class="card"><summary>Auto-translate<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/25" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">On-demand or automatic translation for configured channels.</span></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier D — power users</h4>

    <details class="card"><summary>REST / webhook API<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/26" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Read-only endpoints for your guild's bot data (warnings, audit log, activity stats).</span></details>
    <details class="card"><summary>White-label branding<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/27" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Fully replace the bot's identity per-server — your name, your avatar, your colour scheme.</span></details>
    <details class="card"><summary>Unlimited <code>/imagine</code><a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/28" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Premium removes the 30-second per-guild rate limit.</span></details>
  </div>

</div>

<!-- ════════════════════════════════════════════════════════════════════════
     LONG-TERM EXPLORATIONS — full width, 3-column gallery
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-section longterm">
  🔮 Long-term explorations
  <span class="sub">Bigger conceptual swings. Interesting if v4.0 validates the AI-moderation direction; not yet committed to any specific release.</span>
</div>

<div class="longterm-grid">

  <details class="card"><summary>Voice-channel moderation<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/29" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Real-time transcription + AutoMod / threat-score logic applied to voice channels. The industry's biggest moderation blind spot — no major bot touches voice.</span></details>

  <details class="card"><summary>Federated moderation network<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/30" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Opt-in cross-server ban / warn data sharing for trusted communities. Solves cross-server raid coordination.</span></details>

  <details class="card"><summary>AI-drafted server policy<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/31" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Bot reads your channels for two weeks, drafts a rules document tailored to your community's actual norms, posts it for owner approval.</span></details>

  <details class="card"><summary>Conversational onboarding<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/32" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Replace the static welcome DM with a short AI conversation that auto-assigns roles based on answers and filters bad-faith joiners before their first message.</span></details>

  <details class="card"><summary>Drift detection<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/33" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Track server tone and behaviour over weeks. Alert the Owner when material drift is detected so culture can be maintained before it erodes invisibly.</span></details>

  <details class="card"><summary>Community DNA fingerprint<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/34" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Per-server embedding capturing community character. Powers new-member matching, cross-server compatibility, and rule recommendations.</span></details>

  <details class="card"><summary>Predictive mod scheduling<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/35" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Operational intelligence: <em>"Sunday evenings see 3× your average AutoMod hits — adjust on-call rotation?"</em></span></details>

  <details class="card"><summary>Mod-team coaching / bias audit<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/36" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Compares each mod's decision patterns against the team average; surfaces outliers for self-reflection, never public shaming.</span></details>

  <details class="card"><summary>Persona / role-based moderation<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/37" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Different filter aggressiveness per role tier. Community norms scale with trust — verified members get more latitude, unverified get less.</span></details>

  <details class="card"><summary>Channel-specific tone tuning<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/38" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Per-channel policy — vent channels soft, family-friendly strict, debate channels allow heat but flag personal attacks.</span></details>

  <details class="card"><summary>Misinformation flagging<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/39" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Fact-checkable claims get a 💡 reaction linking to a verified source. Never auto-removes; treats the user as an adult.</span></details>

  <details class="card"><summary>Reverse moderation<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/40" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">When a conversation derails, the bot suggests a constructive question or topic shift — soft-touch alternative to message deletion.</span></details>

  <details class="card"><summary>Cross-modal moderation<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/41" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Unified text + image NSFW + link safety + voice analysis. Closes the gap where bad actors flip between modalities to evade single-mode filters.</span></details>

  <details class="card"><summary>AI-generated mod training<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/42" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Auto-generated new-mod onboarding doc based on actual cases your team has handled and house style they've established.</span></details>

  <details class="card"><summary>AI thread management<a class="vote-arrow" href="https://github.com/WandWeb2/server-assistant-docs/discussions/43" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Vote on this idea"><span class="vote-arrow-icon">↑</span><span class="vote-arrow-count">0</span></a></summary><span class="desc">Off-topic conversations get auto-threaded with a soft DM to participants — <em>"moved this fascinating tangent to its own space."</em></span></details>

</div>

---

## 📣 How to influence the roadmap

The fastest way to move something up the list:

1. **Vote on the cards above** — the highest-voted ideas get prioritised.
2. **Open a [`/support`]({{ site.url }}{{ site.baseurl }}/support/) ticket** describing the use case — not just *"add feature X"* but *what you'd do with it*.

What ships is what gets requested most clearly. Vague *"add more features"* feedback is unactionable; *"I run a 2,000-member RP server and we need X because Y"* gets prioritised.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't installed yet
- [Changelog]({{ site.url }}{{ site.baseurl }}/changelog/) for what's already shipped
- [Support]({{ site.url }}{{ site.baseurl }}/support/) to ask questions or request features

<script>
// Live vote counts for each roadmap card — fetched from the public GitHub
// Discussions API for the docs repo. Cached in localStorage for 5 minutes
// to stay well under the 60 req/hour unauthenticated rate limit.
(function () {
  // Counts are produced by a scheduled GitHub Action (every 15 min) that
  // queries the GraphQL upvoteCount of each Ideas-category discussion and
  // commits the result to assets/data/votes.json. Fetching the static file
  // means: no client-side auth, no rate limit, instant page load.
  const API_URL = '{{ "/assets/data/votes.json" | relative_url }}?ts=' + Math.floor(Date.now() / 60000);
  const CACHE_KEY = 'sa_vote_counts_v3';
  const CACHE_TTL_MS = 5 * 60 * 1000;

  function applyCounts(counts) {
    document.querySelectorAll('a.vote-arrow').forEach(function (a) {
      const m = a.href.match(/discussions\/(\d+)/);
      if (!m) return;
      const num = parseInt(m[1], 10);
      const count = counts[num] || 0;
      const countEl = a.querySelector('.vote-arrow-count');
      if (countEl) countEl.textContent = count;
      a.classList.toggle('zero', count === 0);
      a.classList.remove('loading');
    });
  }

  // Mark all vote-arrows as loading so the colour gives a visual cue while the fetch is in flight
  document.querySelectorAll('a.vote-arrow').forEach(function (a) { a.classList.add('loading'); });

  // Try cache first
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
    if (cached && (Date.now() - cached.ts) < CACHE_TTL_MS) {
      applyCounts(cached.counts);
      return;
    }
  } catch (e) { /* localStorage unavailable; fall through */ }

  // Fetch fresh from the static JSON file (kept up-to-date by GitHub Actions)
  fetch(API_URL)
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (data) {
      // votes.json shape: { updated_at: "...", counts: { "1": 5, "2": 0, ... } }
      const counts = {};
      const raw = (data && data.counts) || {};
      Object.keys(raw).forEach(function (k) { counts[parseInt(k, 10)] = raw[k]; });
      applyCounts(counts);
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), counts: counts }));
      } catch (e) {}
    })
    .catch(function (err) {
      console.warn('[roadmap] vote counts unavailable:', err);
      // Drop loading state so arrows show as zero rather than perpetually fading
      document.querySelectorAll('a.vote-arrow').forEach(function (a) { a.classList.remove('loading'); });
    });
})();
</script>
