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
  padding: 0.7rem 2.1rem 0.7rem 0.85rem;
  position: relative;
  font-weight: 600;
  font-size: 0.95rem;
  color: #222;
  user-select: none;
}
details.card > summary::-webkit-details-marker { display: none; } /* hide Safari marker */
details.card > summary:hover { color: #2c7ad6; }

details.card > summary::after {
  content: "›";
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: #bbb;
  font-size: 1.2rem;
  font-weight: 400;
  transition: transform 0.15s ease, color 0.15s ease;
  line-height: 1;
}
details.card[open] > summary::after {
  transform: translateY(-50%) rotate(90deg);
  color: #555;
}

details.card .desc {
  display: block;
  padding: 0 0.85rem 0.6rem;
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
  border-top: 1px solid #f0f0f0;
  padding-top: 0.6rem;
  margin-top: 0;
}

/* Vote-link button shown inside each expanded card */
details.card .vote-link {
  display: inline-block;
  margin: 0 0.85rem 0.75rem;
  padding: 0.3rem 0.75rem;
  background: #f0f7ff;
  border: 1px solid #c8dcf2;
  border-radius: 4px;
  color: #2c7ad6;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s ease;
}
details.card .vote-link:hover {
  background: #2c7ad6;
  border-color: #2c7ad6;
  color: #fff;
  text-decoration: none;
}

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
  border-radius: 4px;
  padding: 0.35rem 0.85rem;
  font-size: 0.8rem;
  color: #555;
  cursor: pointer;
  transition: all 0.15s;
}
.expand-all-bar button:hover {
  border-color: #2c7ad6;
  color: #2c7ad6;
}
</style>

# 🗺️ Roadmap

Where Server Assistant is heading. Priorities shift based on what server owners actually request — [join the support server]({{ site.url }}{{ site.baseurl }}/support/) if you want to influence the order.

<div class="roadmap-hero">
  <p>📌 <strong>Dates are deliberately omitted.</strong> Things land when they're ready.</p>
  <p>💚 <strong>Every current feature stays free forever.</strong> The Premium-tier section below adds <em>new</em> capabilities. Servers that joined during the free phase are grandfathered into premium access at no cost.</p>
</div>

<p class="roadmap-hint">Click any item to expand it. Each card has a 👍 vote button — votes go to the matching <a href="https://github.com/WandWeb2/server-assistant/discussions/categories/ideas" target="_blank" rel="noopener">GitHub Discussion</a> where the highest-voted items get prioritised.</p>

<div class="expand-all-bar">
  <button onclick="document.querySelectorAll('details.card').forEach(d=>d.open=true)">Expand all</button>
  <button onclick="document.querySelectorAll('details.card').forEach(d=>d.open=false)">Collapse all</button>
</div>

<!-- ════════════════════════════════════════════════════════════════════════
     TOP KANBAN — In Development + Planned
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-top">

  <div class="lane lane-now">
    <h3>🟢 In Development<small>v4.0 — the AI-moderation update</small></h3>

    <details class="card">
      <summary>Pulse</summary>
      <span class="desc">Always-on AI server-health analyst. Daily digests, leading-indicator flags, channel-tone shifts. Never auto-actions — just gives staff x-ray vision.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/24" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Self-trained AutoMod</summary>
      <span class="desc">Bot watches your staff's manual decisions for 2–4 weeks, clusters the patterns, then proposes server-specific AutoMod rules for owner approval.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/25" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Bot health insurance</summary>
      <span class="desc">Bot watches its own impact in each server and proactively suggests tuning when it's becoming too noisy. Stops Server Assistant from quietly becoming the bot every server eventually mutes.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/26" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Threat Score</summary>
      <span class="desc">Risk-based moderation that replaces fixed punishment ladders. Actions fit the actual threat — context-aware, opt-in, with extensive safeguards against punishing legitimate users.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/27" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
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
  </div>

  <div class="lane lane-planned">
    <h3>🔵 Planned<small>Free-tier features after v4.0</small></h3>

    <details class="card">
      <summary>AutoMod confidence scoring</summary>
      <span class="desc">Every AI-flagged action shows its confidence level. Staff set thresholds for auto-action vs review-required.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/28" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Repeat-offender detection</summary>
      <span class="desc">Fingerprint behaviour to recognise users coming back on alt accounts after a ban.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/29" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>AI rule explainer</summary>
      <span class="desc">AutoMod DMs the user not just which filter matched, but why this rule exists, in plain language.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/30" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Smart purge</summary>
      <span class="desc"><code>purge ai 50</code> deletes the genuinely problematic messages and archives constructive ones to a thread, instead of nuke-everything.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/31" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Mod team retrospectives</summary>
      <span class="desc">Weekly auto-generated retro embed: case counts, resolution times, notable patterns, items worth discussing.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/32" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Cross-server reputation</summary>
      <span class="desc">Opt-in positive reputation that follows trusted users between partner servers. The inverse of federated banlists.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/33" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Community-of-practice sharing</summary>
      <span class="desc"><em>"Servers like yours configure X this way"</em> recommendations based on similar community profiles.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/34" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Staff coverage map</summary>
      <span class="desc">Time-zone-aware visualisation of when each mod is typically active; flags coverage gaps for raid-prone hours.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/35" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>

    <details class="card">
      <summary>Bot-on-bot detection</summary>
      <span class="desc">Flag suspicious automation pretending to be human — relevant for mass-marketing raids that evade text filters.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/36" target="_blank" rel="noopener">👍 Vote on this idea ›</a>
    </details>
  </div>

</div>

<!-- ════════════════════════════════════════════════════════════════════════
     PREMIUM-TIER — full width, 4 sub-columns by tier
     ════════════════════════════════════════════════════════════════════════ -->

<div class="roadmap-section premium">
  🟡 Premium-tier feature backlog
  <span class="sub">Launches alongside Discord App Directory verification. Current features stay free; early servers grandfathered.</span>
</div>

<div class="premium-grid">

  <div class="premium-tier-col">
    <h4>Tier A — ship first</h4>

    <details class="card"><summary>Reaction roles</summary><span class="desc">Button-based self-service role panels in any channel.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/37" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Custom slash commands</summary><span class="desc">Server owners define their own <code>/foo</code> returning a configured embed or text snippet.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/38" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Daily AI channel summaries</summary><span class="desc">Once-a-day digest of activity in a chosen channel, posted to a configured destination.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/39" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Mediator</summary><span class="desc">When a conversation is escalating, bot DMs both parties, collects each side privately, and produces a neutral summary for staff.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/40" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Decision explainer + appeals</summary><span class="desc">Users can DM <em>"why was I warned?"</em> for a plain-language answer. Banned users start structured appeals through a guided AI flow.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/41" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier B — solid additions</h4>

    <details class="card"><summary>Leveling / XP</summary><span class="desc">Server-wide XP with level-up roles and a leaderboard. Opt-in per server, opt-out per user.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/42" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Polls</summary><span class="desc"><code>/poll</code> with button-based voting and live tally.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/43" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Embed builder</summary><span class="desc">Interactive wizard for crafting rich announcements with fields, images, and buttons.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/44" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier C — nice-to-have</h4>

    <details class="card"><summary>Birthday tracker</summary><span class="desc">Opt-in birthdays with auto-DM and channel post on the day.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/45" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Welcome card images</summary><span class="desc">Auto-generated PNG welcome for each new joiner.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/46" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>AI Q&amp;A from server FAQ</summary><span class="desc">Bot answers questions based on FAQ snippets the owner has provided.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/47" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Auto-translate</summary><span class="desc">On-demand or automatic translation for configured channels.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/48" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
  </div>

  <div class="premium-tier-col">
    <h4>Tier D — power users</h4>

    <details class="card"><summary>REST / webhook API</summary><span class="desc">Read-only endpoints for your guild's bot data (warnings, audit log, activity stats).</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/49" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>White-label branding</summary><span class="desc">Fully replace the bot's identity per-server — your name, your avatar, your colour scheme.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/50" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
    <details class="card"><summary>Unlimited <code>/imagine</code></summary><span class="desc">Premium removes the 30-second per-guild rate limit.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/51" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>
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

  <details class="card"><summary>Voice-channel moderation</summary><span class="desc">Real-time transcription + AutoMod / threat-score logic applied to voice channels. The industry's biggest moderation blind spot — no major bot touches voice.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/52" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Federated moderation network</summary><span class="desc">Opt-in cross-server ban / warn data sharing for trusted communities. Solves cross-server raid coordination.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/53" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>AI-drafted server policy</summary><span class="desc">Bot reads your channels for two weeks, drafts a rules document tailored to your community's actual norms, posts it for owner approval.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/54" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Conversational onboarding</summary><span class="desc">Replace the static welcome DM with a short AI conversation that auto-assigns roles based on answers and filters bad-faith joiners before their first message.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/55" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Drift detection</summary><span class="desc">Track server tone and behaviour over weeks. Alert the Owner when material drift is detected so culture can be maintained before it erodes invisibly.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/56" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Community DNA fingerprint</summary><span class="desc">Per-server embedding capturing community character. Powers new-member matching, cross-server compatibility, and rule recommendations.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/57" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Predictive mod scheduling</summary><span class="desc">Operational intelligence: <em>"Sunday evenings see 3× your average AutoMod hits — adjust on-call rotation?"</em></span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/58" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Mod-team coaching / bias audit</summary><span class="desc">Compares each mod's decision patterns against the team average; surfaces outliers for self-reflection, never public shaming.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/59" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Persona / role-based moderation</summary><span class="desc">Different filter aggressiveness per role tier. Community norms scale with trust — verified members get more latitude, unverified get less.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/60" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Channel-specific tone tuning</summary><span class="desc">Per-channel policy — vent channels soft, family-friendly strict, debate channels allow heat but flag personal attacks.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/61" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Misinformation flagging</summary><span class="desc">Fact-checkable claims get a 💡 reaction linking to a verified source. Never auto-removes; treats the user as an adult.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/62" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Reverse moderation</summary><span class="desc">When a conversation derails, the bot suggests a constructive question or topic shift — soft-touch alternative to message deletion.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/63" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>Cross-modal moderation</summary><span class="desc">Unified text + image NSFW + link safety + voice analysis. Closes the gap where bad actors flip between modalities to evade single-mode filters.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/64" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>AI-generated mod training</summary><span class="desc">Auto-generated new-mod onboarding doc based on actual cases your team has handled and house style they've established.</span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/65" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

  <details class="card"><summary>AI thread management</summary><span class="desc">Off-topic conversations get auto-threaded with a soft DM to participants — <em>"moved this fascinating tangent to its own space."</em></span><a class="vote-link" href="https://github.com/WandWeb2/server-assistant/discussions/66" target="_blank" rel="noopener">👍 Vote on this idea ›</a></details>

</div>

---

## 📣 How to influence the roadmap

The fastest way to move something up the list:

1. **Post in `#bot-feedback`** on the [support server]({{ site.url }}{{ site.baseurl }}/support/) describing the use case — not just *"add feature X"* but *what you'd do with it*.
2. **File a feature request issue** on GitHub if you want formal tracking.
3. **+1 existing issues** so the team can see which ideas have multiple supporters.

What ships is what gets requested most clearly. Vague *"add more features"* feedback is unactionable; *"I run a 2,000-member RP server and we need X because Y"* gets prioritised.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't installed yet
- [Changelog]({{ site.url }}{{ site.baseurl }}/changelog/) for what's already shipped
- [Support]({{ site.url }}{{ site.baseurl }}/support/) to ask questions or request features
