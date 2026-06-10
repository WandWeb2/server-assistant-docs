---
layout: default
title: Compare
permalink: /compare/
description: Honest feature comparisons — Server Assistant vs the bots you might already use. Where each wins, where each loses, and which one fits your server.
---

<style>
.compare-hero {
  margin: 1.5rem 0 2rem;
  padding: 1.25rem 1.5rem;
  border-left: 4px solid #3498db;
  background: #eef5fb;
  border-radius: 6px;
  color: #333;
}
.compare-hero p { margin: 0.3rem 0; }

.compare-block {
  margin: 2.5rem 0;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
}
.compare-block h2 {
  margin: 0 0 0.4rem;
  font-size: 1.4rem;
  border: none;
}
.compare-block .wedge {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: #555;
  font-style: italic;
}
.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 1rem 0;
}
@media (max-width: 720px) { .compare-grid { grid-template-columns: 1fr; } }
.compare-col {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 1rem 1.2rem;
}
.compare-col h3 {
  margin: 0 0 0.7rem;
  font-size: 1.05rem;
  border: none;
}
.compare-col h3 .pill {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  vertical-align: middle;
}
.compare-col h3 .pill-them { background: #fce4ec; color: #ad1457; }
.compare-col h3 .pill-us   { background: #e8f5e9; color: #2e7d32; }
.compare-col ul {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.92rem;
  line-height: 1.55;
}
.compare-col li { margin-bottom: 0.35rem; }
.pick-row {
  margin-top: 1rem;
  padding: 0.7rem 1rem;
  background: #fffbe6;
  border: 1px dashed #f1c40f;
  border-radius: 6px;
  font-size: 0.92rem;
}
.pick-row strong { color: #8a6d00; }
</style>

# 🤝 How Server Assistant compares

<div class="compare-hero">
  <p>📌 <strong>Honest framing.</strong> No bot is the right pick for every server. The pages below show where each tool genuinely wins — including the cases where you should pick <em>them</em> over us.</p>
  <p>🔍 <strong>Feature comparisons only.</strong> We don't grade websites or marketing — only what the bots actually do once installed.</p>
</div>

## 🧠 vs Civora

<div class="compare-block">
  <h2>Server Assistant vs Civora</h2>
  <p class="wedge">Civora's pitch: "Discord moderation that understands meaning." A focused AI chat-moderation bot with multi-language NLP, launched early 2026.</p>

  <div class="compare-grid">
    <div class="compare-col">
      <h3>Where Civora wins <span class="pill pill-them">Their edge</span></h3>
      <ul>
        <li><strong>Native multi-language NLP.</strong> 30+ languages with native-level tuning for Hungarian, Polish, Czech, Romanian, German, Spanish.</li>
        <li><strong>5 ready-made server templates.</strong> Gaming / Paid / Brand / Study / NSFW presets out of the box.</li>
        <li><strong>Customer-facing override dashboard.</strong> Mods correct mistakes in a web UI; the AI learns server-specific style over time.</li>
      </ul>
    </div>
    <div class="compare-col">
      <h3>Where Server Assistant wins <span class="pill pill-us">Our edge</span></h3>
      <ul>
        <li><strong>The whole moderation suite, not just chat-AI.</strong> Anti-raid, Threat Score, Self-trained AutoMod, Bot Health Insurance, Ticket Panels, baseline admin commands (<code>/role</code> / <code>/lockdown</code> / <code>/tempban</code> / <code>/altguard</code>).</li>
        <li><strong>Risk-graded enforcement.</strong> Threat Score adjusts actions to the actual threat instead of fixed punishment ladders — with extensive safeguards against false positives.</li>
        <li><strong>Ban reasons + one-reply appeals.</strong> Every ban DMs the user the reason and opens a structured appeal channel to staff. Civora doesn't do post-action recovery flows.</li>
        <li><strong>One-tap setup on install.</strong> Bot DMs the owner a one-button Apply proposal when it joins — no need to remember <code>/setup</code> exists.</li>
        <li><strong>Better usage economics.</strong> Premium $7/mo includes ~750,000 AI tokens; Civora Pro $14/mo includes 8,000 messages. Roughly an order of magnitude more usage for half the price.</li>
        <li><strong>Image generation.</strong> <code>/imagine</code> command — the free trial covers ~30 AI images; unlimited on Premium, or bring your own image key for unmetered generation.</li>
      </ul>
    </div>
  </div>

  <div class="pick-row">
    <strong>Pick Civora if:</strong> your server is primarily Hungarian, Polish, Czech, Romanian, or another Central/Eastern European language community and chat-moderation context is your only need.
    <br>
    <strong>Pick Server Assistant if:</strong> you want a full moderation suite — chat-AI <em>plus</em> anti-raid, risk-based actions, appeals, tickets, onboarding, and baseline admin — at roughly half the price.
  </div>
</div>

## 🎮 vs MEE6

<div class="compare-block">
  <h2>Server Assistant vs MEE6</h2>
  <p class="wedge">MEE6's pitch: the original all-in-one community bot. Leveling, music, reaction roles, and basic keyword automod.</p>

  <div class="compare-grid">
    <div class="compare-col">
      <h3>Where MEE6 wins <span class="pill pill-them">Their edge</span></h3>
      <ul>
        <li><strong>Mature leveling / XP system</strong> with role rewards and a polished web dashboard.</li>
        <li><strong>Music playback</strong> in voice channels (most users' main reason to install).</li>
        <li><strong>Embedded YouTube / Twitch alerts</strong> for stream notifications.</li>
        <li><strong>Massive installed base.</strong> Familiar to almost every Discord mod.</li>
      </ul>
    </div>
    <div class="compare-col">
      <h3>Where Server Assistant wins <span class="pill pill-us">Our edge</span></h3>
      <ul>
        <li><strong>AI-context moderation</strong> instead of keyword regex. Catches sarcasm, slang, and intent that MEE6's filters miss entirely.</li>
        <li><strong>Self-trained AutoMod</strong> learns from your staff's manual moderation decisions and proposes server-specific rules for approval.</li>
        <li><strong>Threat Score</strong> — risk-based actions instead of one-size-fits-all punishment ladders.</li>
        <li><strong>Ban reasons + one-reply appeals</strong> built in. MEE6's ban flow is silent.</li>
        <li><strong>Bot Health Insurance</strong> — the bot watches its own noisiness and proactively suggests tuning before staff get fed up and mute it.</li>
        <li><strong>Real anti-raid</strong> with auto-actions, not just join logging.</li>
        <li><strong>Free tier is genuinely usable.</strong> No paywalled essentials (no "upgrade to use timeouts" gates).</li>
      </ul>
    </div>
  </div>

  <div class="pick-row">
    <strong>Pick MEE6 if:</strong> you primarily want leveling, music, and stream alerts — and your moderation needs are basic.
    <br>
    <strong>Pick Server Assistant if:</strong> moderation quality matters more than engagement features. You can run both side-by-side — they don't conflict.
  </div>
</div>

## 🛡️ vs Wick

<div class="compare-block">
  <h2>Server Assistant vs Wick</h2>
  <p class="wedge">Wick's pitch: the gold standard for anti-nuke and raid protection. Trusted by very large servers as their last line of defence.</p>

  <div class="compare-grid">
    <div class="compare-col">
      <h3>Where Wick wins <span class="pill pill-them">Their edge</span></h3>
      <ul>
        <li><strong>Deepest anti-nuke protection in the category.</strong> Mass-action quarantine, suspect detection, server-snapshot recovery. Battle-tested at scale.</li>
        <li><strong>Premium-grade raid response.</strong> Coordinated multi-account attack detection that's well beyond what most bots attempt.</li>
        <li><strong>Granular permission hierarchy</strong> with carefully designed defaults for enterprise-scale Discord communities.</li>
      </ul>
    </div>
    <div class="compare-col">
      <h3>Where Server Assistant wins <span class="pill pill-us">Our edge</span></h3>
      <ul>
        <li><strong>Chat-content moderation.</strong> Wick is built around catastrophic protection (nukes, raids); we're built around day-to-day chat quality (AutoMod, Threat Score, Self-trained rules).</li>
        <li><strong>Onboarding + verification wizard</strong> and right-click context menus for routine mod tasks.</li>
        <li><strong>Ticket Panels</strong> for private support tickets.</li>
        <li><strong>Baseline admin</strong>: <code>/role</code>, <code>/lockdown</code>, <code>/tempban</code>, <code>/altguard</code>, all permission-gated and audited.</li>
        <li><strong>Appeals + ban-reason DMs</strong> — actual post-action recovery flows that Wick doesn't focus on.</li>
        <li><strong>AI-driven `/sai` concierge</strong> for natural-language config changes by the owner.</li>
        <li><strong>Friendlier pricing</strong> and a usable free tier.</li>
      </ul>
    </div>
  </div>

  <div class="pick-row">
    <strong>Pick Wick if:</strong> you run a 10,000+ member server where a nuke attempt is a credible threat and you need elite anti-nuke as your headline defence.
    <br>
    <strong>Pick Server Assistant if:</strong> your moderation pain is daily — toxic messages, slow staff response, no appeal path — rather than catastrophic. They don't conflict; many servers run both.
  </div>
</div>

## 🎨 vs Carl-bot

<div class="compare-block">
  <h2>Server Assistant vs Carl-bot</h2>
  <p class="wedge">Carl-bot's pitch: the deepest reaction-roles, tags, and embed builder on Discord. The community-content workhorse.</p>

  <div class="compare-grid">
    <div class="compare-col">
      <h3>Where Carl-bot wins <span class="pill pill-them">Their edge</span></h3>
      <ul>
        <li><strong>Best-in-class reaction roles</strong> — button-based, dropdown, mutually-exclusive groups, the full range.</li>
        <li><strong>Powerful tags system</strong> with arguments, scripting, and inline conditionals.</li>
        <li><strong>Mature embed builder</strong> with persistent storage and inline editing.</li>
        <li><strong>Auto-response system</strong> with regex hooks and timed posts.</li>
      </ul>
    </div>
    <div class="compare-col">
      <h3>Where Server Assistant wins <span class="pill pill-us">Our edge</span></h3>
      <ul>
        <li><strong>AI-context moderation</strong> — Carl-bot's automod is keyword-based and inherits the same blind-spots as every regex filter.</li>
        <li><strong>Risk-based enforcement</strong> via Threat Score with safeguards.</li>
        <li><strong>Self-trained AutoMod</strong> from staff decisions.</li>
        <li><strong>Real appeals</strong> + one-reply ban DMs.</li>
        <li><strong>Anti-raid auto-actions</strong> with sub-raid detection.</li>
        <li><strong>One-tap setup on install</strong> and right-click context menus.</li>
        <li><strong>Reaction roles + custom slash commands + embed builder are on the roadmap</strong> (Premium Tier A/B). Not in our free tier today.</li>
      </ul>
    </div>
  </div>

  <div class="pick-row">
    <strong>Pick Carl-bot if:</strong> reaction roles, tags, and embed-driven content are the core of your community and moderation is secondary.
    <br>
    <strong>Pick Server Assistant if:</strong> moderation is your primary problem. Run Carl-bot alongside for the content surface — they don't conflict.
  </div>
</div>

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) — get up and running in a minute
- [Features]({{ site.url }}{{ site.baseurl }}/features/) — the full capability list
- [Pricing]({{ site.url }}{{ site.baseurl }}/pricing/) — the free / Premium / BYOK breakdown
- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) — what's coming next
- [Support]({{ site.url }}{{ site.baseurl }}/support/) — questions and feature requests
