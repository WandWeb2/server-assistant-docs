---
layout: default
title: Roadmap
permalink: /roadmap/
description: Server Assistant's product roadmap — what's in development, what's next, and where we're exploring.
---

<style>
.roadmap-hero {
  margin: 1.5rem 0 2rem;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid #2ecc71;
  background: #f4f8f5;
  border-radius: 6px;
  color: #333;
}
.roadmap-hero p { margin: .3rem 0; }

.roadmap-board {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}
@media (max-width: 1100px) {
  .roadmap-board { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .roadmap-board { grid-template-columns: 1fr; }
}

.lane {
  background: #fafafa;
  border-top: 4px solid;
  border-radius: 6px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.lane-now      { border-color: #2ecc71; }
.lane-planned  { border-color: #3498db; }
.lane-premium  { border-color: #f1c40f; }
.lane-future   { border-color: #9b59b6; }

.lane h3 {
  margin: 0 0 0.25rem;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #555;
}
.lane h4 {
  margin: 0.5rem 0 0.1rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #888;
  border-bottom: 1px dotted #ddd;
  padding-bottom: 0.15rem;
}

.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.55rem 0.7rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.card:hover {
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
  transform: translateY(-1px);
}
.card .title {
  display: block;
  font-weight: 600;
  font-size: 0.88rem;
  color: #222;
  margin-bottom: 0.15rem;
}
.card .desc {
  display: block;
  font-size: 0.78rem;
  color: #666;
  line-height: 1.35;
}

details.safeguards {
  margin-top: 0.4rem;
  font-size: 0.75rem;
  color: #555;
}
details.safeguards summary {
  cursor: pointer;
  color: #2980b9;
  font-weight: 500;
}
details.safeguards ul {
  margin: 0.35rem 0 0 0.9rem;
  padding: 0;
  line-height: 1.4;
}
details.safeguards li { margin-bottom: 0.15rem; }
</style>

# 🗺️ Roadmap

Where Server Assistant is heading. The board below is the at-a-glance view; priorities shift based on what server owners actually request — [join the support server]({{ site.url }}{{ site.baseurl }}/support/) if you want to influence the order.

<div class="roadmap-hero">
  <p>📌 <strong>Dates are deliberately omitted.</strong> Things land when they're ready.</p>
  <p>💚 <strong>Every current feature stays free forever.</strong> The Premium-tier column adds <em>new</em> capabilities. Servers that joined during the free phase are grandfathered into premium access at no cost.</p>
</div>

<div class="roadmap-board">

  <!-- ════════ NOW ════════ -->
  <div class="lane lane-now">
    <h3>🟢 In Development<br>(v4.0 — AI Moderation)</h3>

    <div class="card">
      <span class="title">Pulse</span>
      <span class="desc">Always-on AI server-health analyst. Daily digests, leading-indicator flags, channel-tone shifts. Never auto-actions — just gives staff x-ray vision.</span>
    </div>

    <div class="card">
      <span class="title">Self-trained AutoMod</span>
      <span class="desc">Bot watches your staff's manual decisions for 2-4 weeks, clusters the patterns, then proposes server-specific AutoMod rules for owner approval.</span>
    </div>

    <div class="card">
      <span class="title">Bot health insurance</span>
      <span class="desc">Bot watches its own impact in each server and proactively suggests tuning when it's becoming too noisy. Stops Server Assistant from quietly becoming the bot every server eventually mutes.</span>
    </div>

    <div class="card">
      <span class="title">Threat Score</span>
      <span class="desc">Risk-based moderation that replaces fixed punishment ladders. Actions fit the actual threat — context-aware, opt-in, with extensive safeguards against punishing legitimate users.</span>
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
    </div>
  </div>

  <!-- ════════ PLANNED ════════ -->
  <div class="lane lane-planned">
    <h3>🔵 Planned<br>(Upcoming Releases)</h3>

    <div class="card">
      <span class="title">AutoMod confidence scoring</span>
      <span class="desc">Every AI-flagged action shows its confidence level. Staff set thresholds for auto-action vs review-required.</span>
    </div>

    <div class="card">
      <span class="title">Repeat-offender detection</span>
      <span class="desc">Fingerprint behaviour to recognise users coming back on alt accounts after a ban.</span>
    </div>

    <div class="card">
      <span class="title">AI rule explainer</span>
      <span class="desc">AutoMod DMs the user not just which filter matched, but why this rule exists, in plain language.</span>
    </div>

    <div class="card">
      <span class="title">Smart purge</span>
      <span class="desc"><code>purge ai 50</code> deletes the genuinely problematic messages and archives constructive ones to a thread, instead of nuke-everything.</span>
    </div>

    <div class="card">
      <span class="title">Mod team retrospectives</span>
      <span class="desc">Weekly auto-generated retro embed: case counts, resolution times, notable patterns, items worth discussing.</span>
    </div>

    <div class="card">
      <span class="title">Cross-server reputation</span>
      <span class="desc">Opt-in positive reputation that follows trusted users between partner servers. The inverse of federated banlists.</span>
    </div>

    <div class="card">
      <span class="title">Community-of-practice sharing</span>
      <span class="desc"><em>"Servers like yours configure X this way"</em> recommendations based on similar community profiles.</span>
    </div>

    <div class="card">
      <span class="title">Staff coverage map</span>
      <span class="desc">Time-zone-aware visualisation of when each mod is typically active; flags coverage gaps for raid-prone hours.</span>
    </div>

    <div class="card">
      <span class="title">Bot-on-bot detection</span>
      <span class="desc">Flag suspicious automation pretending to be human — relevant for mass-marketing raids that evade text filters.</span>
    </div>
  </div>

  <!-- ════════ PREMIUM ════════ -->
  <div class="lane lane-premium">
    <h3>🟡 Premium-tier<br>(Post-verification)</h3>

    <h4>Tier A — ship first</h4>

    <div class="card">
      <span class="title">Reaction roles</span>
      <span class="desc">Button-based self-service role panels in any channel.</span>
    </div>

    <div class="card">
      <span class="title">Custom slash commands</span>
      <span class="desc">Server owners define their own <code>/foo</code> returning a configured embed or text snippet.</span>
    </div>

    <div class="card">
      <span class="title">Daily AI channel summaries</span>
      <span class="desc">Once-a-day digest of activity in a chosen channel, posted to a configured destination.</span>
    </div>

    <div class="card">
      <span class="title">Mediator</span>
      <span class="desc">When a conversation is escalating, bot DMs both parties, collects each side privately, and produces a neutral summary for staff.</span>
    </div>

    <div class="card">
      <span class="title">Decision explainer + appeals</span>
      <span class="desc">Users can DM <em>"why was I warned?"</em> for a plain-language answer. Banned users start structured appeals through a guided AI flow.</span>
    </div>

    <h4>Tier B</h4>

    <div class="card">
      <span class="title">Leveling / XP</span>
      <span class="desc">Server-wide XP with level-up roles and a leaderboard. Opt-in per server, opt-out per user.</span>
    </div>

    <div class="card">
      <span class="title">Polls</span>
      <span class="desc"><code>/poll</code> with button-based voting and live tally.</span>
    </div>

    <div class="card">
      <span class="title">Embed builder</span>
      <span class="desc">Interactive wizard for crafting rich announcements with fields, images, and buttons.</span>
    </div>

    <h4>Tier C</h4>

    <div class="card">
      <span class="title">Birthday tracker</span>
      <span class="desc">Opt-in birthdays with auto-DM and channel post on the day.</span>
    </div>

    <div class="card">
      <span class="title">Welcome card images</span>
      <span class="desc">Auto-generated PNG welcome for each new joiner.</span>
    </div>

    <div class="card">
      <span class="title">AI Q&amp;A from server FAQ</span>
      <span class="desc">Bot answers questions based on FAQ snippets the owner has provided.</span>
    </div>

    <div class="card">
      <span class="title">Auto-translate</span>
      <span class="desc">On-demand or automatic translation for configured channels.</span>
    </div>

    <h4>Tier D — power users</h4>

    <div class="card">
      <span class="title">REST / webhook API</span>
      <span class="desc">Read-only endpoints for your guild's bot data (warnings, audit log, activity stats).</span>
    </div>

    <div class="card">
      <span class="title">White-label branding</span>
      <span class="desc">Fully replace the bot's identity per-server — your name, your avatar, your colour scheme.</span>
    </div>

    <div class="card">
      <span class="title">Unlimited <code>/imagine</code></span>
      <span class="desc">Premium removes the 30-second per-guild rate limit.</span>
    </div>
  </div>

  <!-- ════════ LONG-TERM ════════ -->
  <div class="lane lane-future">
    <h3>🔮 Long-term<br>Explorations</h3>

    <div class="card">
      <span class="title">Voice-channel moderation</span>
      <span class="desc">Real-time transcription + AutoMod / threat-score logic applied to voice channels. Industry's biggest moderation blind spot.</span>
    </div>

    <div class="card">
      <span class="title">Federated moderation network</span>
      <span class="desc">Opt-in cross-server ban / warn data sharing for trusted communities.</span>
    </div>

    <div class="card">
      <span class="title">AI-drafted server policy</span>
      <span class="desc">Bot reads your channels for two weeks, drafts a rules document tailored to your community's actual norms.</span>
    </div>

    <div class="card">
      <span class="title">Conversational onboarding</span>
      <span class="desc">Replace static welcome DM with a short AI conversation that auto-assigns roles based on answers and filters bad-faith joiners.</span>
    </div>

    <div class="card">
      <span class="title">Drift detection</span>
      <span class="desc">Track server tone and behaviour over weeks. Alert the Owner when material drift is detected.</span>
    </div>

    <div class="card">
      <span class="title">Community DNA fingerprint</span>
      <span class="desc">Per-server embedding capturing community character. Powers new-member matching, cross-server compatibility, rule recommendations.</span>
    </div>

    <div class="card">
      <span class="title">Predictive mod scheduling</span>
      <span class="desc">Operational intelligence: <em>"Sunday evenings see 3× your average AutoMod hits — adjust on-call rotation?"</em></span>
    </div>

    <div class="card">
      <span class="title">Mod-team coaching / bias audit</span>
      <span class="desc">Surfaces outliers in each mod's decision patterns vs the team average — for self-reflection, never public shaming.</span>
    </div>

    <div class="card">
      <span class="title">Persona / role-based moderation</span>
      <span class="desc">Different filter aggressiveness per role tier. Community norms scale with trust.</span>
    </div>

    <div class="card">
      <span class="title">Channel-specific tone tuning</span>
      <span class="desc">Per-channel policy — vent channels soft, family-friendly strict, debate channels allow heat but flag personal attacks.</span>
    </div>

    <div class="card">
      <span class="title">Misinformation flagging</span>
      <span class="desc">Fact-checkable claims get a 💡 reaction linking to a verified source. Never auto-removes.</span>
    </div>

    <div class="card">
      <span class="title">Reverse moderation</span>
      <span class="desc">When a conversation derails, the bot suggests a constructive question or topic shift — soft alternative to deletion.</span>
    </div>

    <div class="card">
      <span class="title">Cross-modal moderation</span>
      <span class="desc">Unified text + image NSFW + link safety + voice. Closes the gap where bad actors flip between modalities.</span>
    </div>

    <div class="card">
      <span class="title">AI-generated mod training</span>
      <span class="desc">Auto-generated new-mod onboarding doc based on actual cases your team has handled.</span>
    </div>

    <div class="card">
      <span class="title">AI thread management</span>
      <span class="desc">Off-topic conversations get auto-threaded with a soft DM to participants explaining the move.</span>
    </div>
  </div>
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
