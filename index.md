---
layout: default
title: Server Assistant — Discord Moderation & AutoMod Bot
description: Free Discord moderation bot — AutoMod, anti-raid, audit logs, ban appeals, and AI that watches your server's health and learns your team's judgment. Privacy-first.
image: /assets/banner.jpeg
---

<div align="center">
  <picture>
    <source srcset="{{ '/assets/logo.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant logo" width="200" height="193" fetchpriority="high">
  </picture>

  <h1>Server Assistant</h1>

  <p style="font-size:1.15rem; font-weight:700;">Most Discord mod bots just react to messages.<br>This one understands your whole server.</p>
  <p style="font-size:.95rem; color:var(--ink-soft); margin-top:-.25rem;">Daily health insight · AutoMod that learns your team · fair ban appeals · a tamper-proof audit trail.</p>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Server Assistant",
  "applicationCategory": "Discord Bot",
  "operatingSystem": "Discord",
  "description": "A Discord moderation bot that watches server health (Pulse daily digests), learns your staff's moderation decisions (self-trained AutoMod), reduces false positives with an AI second-opinion, gives banned members a structured appeal, catches ban-evading alts, and keeps an encrypted tamper-proof audit trail. Free AutoMod, anti-raid, verification, ticket panels and image generation, plus a Premium toolkit: reaction roles, custom slash commands, AI Q&A from your FAQ, translation, AI mediation, server backup & restore, and white-label branding.",
  "offers": { "@type": "AggregateOffer", "lowPrice": "0", "highPrice": "7", "priceCurrency": "USD", "offerCount": "3" },
  "url": "https://wandweb2.github.io/server-assistant-docs/",
  "image": "https://wandweb2.github.io/server-assistant-docs/assets/banner.jpeg",
  "author": { "@type": "Organization", "name": "WandWeb2" }
}
</script>

<style>
.cta-row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.4rem 0 .5rem; }
.cta { display: inline-block; padding: .6rem 1.3rem; border-radius: 999px; font-weight: 700; text-decoration: none !important; transition: transform .15s, box-shadow .15s; }
.cta-primary { display: inline-flex; align-items: center; gap: .6rem; background: #5865F2; color: #fff !important; border-radius: 8px; padding: .82rem 1.45rem; font-weight: 600; box-shadow: 0 8px 22px rgba(88,101,242,.4); }
.cta-primary:hover { background: #4752c4; transform: translateY(-1px); box-shadow: 0 12px 30px rgba(88,101,242,.5); }
.cta-primary .dlogo { width: 22px; height: 22px; flex: none; }
.cta-secondary { border-radius: 8px; padding: .82rem 1.45rem; font-weight: 600; background: rgba(255,255,255,0.08); color: var(--ink) !important; border: 1px solid var(--glass-border); box-shadow: 0 8px 22px rgba(0,0,0,.28); }
.cta-secondary:hover { background: rgba(255,255,255,0.14); transform: translateY(-1px); box-shadow: 0 12px 30px rgba(0,0,0,.38); }
.free-line { text-align: center; font-size: .85rem; color: var(--ink-soft); margin: 0 0 1.5rem; }
.section-lead { text-align: center; font-size: 1rem; color: var(--ink-soft); max-width: 720px; margin: .6rem auto 1.3rem; line-height: 1.55; }

/* Full-width coloured-glass feature rows: text (brief + expand) on one side, screenshot on the other. */
.frow { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; align-items: center; margin: 1rem 0; padding: 1.4rem 1.6rem; border-radius: 16px; border: 1px solid var(--glass-border); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.frow.c-green  { background: rgba(46,204,113,0.07);  border-color: rgba(46,204,113,0.22); }
.frow.c-blue   { background: rgba(52,130,225,0.08);  border-color: rgba(52,130,225,0.24); }
.frow.c-amber  { background: rgba(241,196,15,0.07);  border-color: rgba(241,196,15,0.24); }
.frow.c-purple { background: rgba(155,89,182,0.08);  border-color: rgba(155,89,182,0.26); }
.frow.c-red    { background: rgba(231,76,60,0.07);   border-color: rgba(231,76,60,0.22); }
.frow .ftext { min-width: 0; }
.frow .ftext h3 { margin: 0 0 .5rem; font-size: 1.25rem; line-height: 1.25; }
.frow .ftext > p { margin: 0 0 .55rem; color: var(--ink-soft); font-size: .96rem; line-height: 1.55; }
.frow .fmore > summary { cursor: pointer; color: var(--accent); font-weight: 600; font-size: .9rem; list-style: none; }
.frow .fmore > summary::-webkit-details-marker { display: none; }
.frow .fmore > summary::before { content: "▸ "; }
.frow .fmore[open] > summary::before { content: "▾ "; }
.frow .fmore .fbody { margin-top: .45rem; color: var(--ink-soft); font-size: .9rem; line-height: 1.55; }
.frow .fmore .fbody code { color: var(--accent); }
.frow .fshot { min-width: 0; }
.frow .fshot .dc { max-width: 100%; margin: 0; }
.frow.flip .ftext { order: 2; }
.frow.flip .fshot { order: 1; }
@media (max-width: 760px) { .frow { grid-template-columns: 1fr; } .frow.flip .ftext, .frow.flip .fshot { order: 0; } }

.xgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 0.5rem; align-items: start; margin: 1rem 0 1.4rem; }
.xgrid details.x { border: 1px solid var(--glass-border); border-radius: 10px; background: rgba(255,255,255,0.04); }
.xgrid details.x > summary { cursor: pointer; padding: 0.6rem 0.85rem; list-style: none; color: var(--ink); font-size: 0.96rem; font-weight: 700; }
.xgrid details.x > summary::-webkit-details-marker { display: none; }
.xgrid details.x > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .4rem; font-size: .75em; }
.xgrid details.x[open] > summary::before { content: "▾"; }
.xgrid details.x[open] > summary { border-bottom: 1px solid var(--glass-border); }
.xgrid details.x .b { padding: 0.6rem 0.85rem 0.7rem; color: var(--ink-soft); font-size: 0.88rem; line-height: 1.5; }
.xgrid details.x .b code { color: var(--accent); font-size: 0.85em; }

.shipped-strip { background: rgba(46,204,113,.10); border-left: 4px solid #2ecc71; border-radius: 10px; padding: .85rem 1.1rem; margin: 1.5rem 0; font-size: .9rem; line-height: 1.55; }
.shipped-strip strong.lbl { color: #56d08a; }
.shipped-strip code { font-size: .82em; }
.upcoming-strip { background: rgba(60,193,240,.10); border-left: 4px solid var(--accent); border-radius: 10px; padding: .85rem 1.1rem; margin: 1.5rem 0; font-size: .9rem; line-height: 1.55; }
.upcoming-strip strong.lbl { color: #3cc1f0; }

.ways-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; }
.way { background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 14px; padding: 1rem 1.15rem; }
.way h3 { margin: 0 0 .35rem; font-size: .98rem; color: var(--ink); }
.way p { margin: 0; font-size: .88rem; line-height: 1.45; color: var(--ink-soft); }
.way code { font-size: .82em; color: var(--accent); }
@media (max-width: 700px) { .ways-grid { grid-template-columns: 1fr; } }
</style>

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands"><svg class="dlogo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0C9.46 4.79 9.25 4.36 9.06 4.03A.07.07 0 0 0 9 4c-1.5.26-2.93.71-4.27 1.33a.06.06 0 0 0-.03.02C1.98 9.42 1.23 13.38 1.6 17.3a.1.1 0 0 0 .03.05c1.8 1.32 3.53 2.12 5.24 2.65a.07.07 0 0 0 .07-.02c.4-.55.76-1.13 1.07-1.74a.07.07 0 0 0-.04-.09 12.9 12.9 0 0 1-1.64-.78.07.07 0 0 1-.01-.11l.33-.25a.07.07 0 0 1 .07-.01c3.44 1.57 7.15 1.57 10.55 0a.07.07 0 0 1 .07.01l.33.26c.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78a.07.07 0 0 0-.04.09c.32.61.68 1.19 1.07 1.74a.07.07 0 0 0 .08.03c1.72-.53 3.45-1.33 5.25-2.65a.07.07 0 0 0 .03-.05c.44-4.53-.73-8.46-3.1-11.95a.05.05 0 0 0-.03-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"/></svg>Add to Discord</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore every feature</a>
</div>

<p class="free-line">Free to start — the full moderation toolkit is free forever.</p>

---

<div class="partners-band">
  <h2 class="partners-band-title">Trusted by</h2>
  <div class="partners-logos">
    <a class="partner-logo-link" href="https://discordforge.org" target="_blank" rel="noopener" aria-label="Discord Forge" data-name="Discord Forge">
      <img src="{{ '/assets/partners/discordforge-icon.svg' | relative_url }}" alt="Discord Forge" width="84" height="84" loading="lazy">
    </a>
    <!-- Future partners: add another <a class="partner-logo-link" …> block here. -->
  </div>
</div>

<style>
.partners-band { text-align: left; margin: 1.4rem 0; }
.partners-band-title { font-size: .8rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-soft); margin: 0 0 1.1rem; }
.partners-logos { display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start; gap: 1.4rem 2.4rem; }
.partner-logo-link { position: relative; display: inline-flex; align-items: center; justify-content: center; transition: transform .15s ease; }
.partner-logo-link img { height: 72px; width: auto; box-shadow: none; border-radius: 18px; opacity: .9; transition: opacity .15s ease; }
.partner-logo-link:hover { transform: translateY(-3px); }
.partner-logo-link:hover img { opacity: 1; }
/* Name on hover */
.partner-logo-link::after {
  content: attr(data-name);
  position: absolute;
  top: calc(100% + 9px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: var(--glass-strong);
  border: 1px solid var(--glass-border);
  color: var(--ink);
  font-size: .78rem; font-weight: 600; white-space: nowrap;
  padding: .3rem .6rem; border-radius: 8px;
  opacity: 0; pointer-events: none;
  transition: opacity .15s ease, transform .15s ease;
}
.partner-logo-link:hover::after { opacity: 1; transform: translateX(-50%) translateY(0); }
@media (prefers-reduced-motion: reduce) {
  .partner-logo-link, .partner-logo-link::after { transition: none; }
}
</style>

---

## ⚡ What makes Server Assistant different

<p class="section-lead">Most bots are rule-runners: a message breaks a filter, the bot reacts. Server Assistant adds an intelligence layer on top — here's how.</p>

<div class="frow c-green">
  <div class="ftext">
    <h3>🩺 Whole-server health insight</h3>
    <p>Every other bot waits for a rule to break. <strong>Pulse</strong> posts a health report to your staff channel — daily, weekly or monthly, your call — and flags the slow-burn patterns humans miss.</p>
    <details class="fmore"><summary>How it works</summary><div class="fbody">Messages, joins, AutoMod activity and warnings, each with a week-over-week trend — like a trickle of joins sitting just under your raid threshold. Set the cadence (or turn it off) in <code>/settings → 🔔 Notifications</code>. Read-only: it never acts on its own, it just gives your team x-ray vision.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">9:00 AM</span></div>
        <div class="dc-embed green">
          <div class="dc-title">🩺 Daily Pulse — last 24 hours</div>
          <div class="dc-desc">Your server looks healthy. One thing worth a glance. 👇</div>
          <div class="dc-fname">Messages</div><div class="dc-fval">4,812 · ▲ 6% vs avg</div>
          <div class="dc-fname">New members</div><div class="dc-fval">37 joins · ⚠️ above baseline, below raid threshold</div>
          <div class="dc-foot">Read-only insight · never auto-actions</div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow flip c-blue">
  <div class="ftext">
    <h3>📩 Fair ban appeals</h3>
    <p>A ban shouldn't be a silent door-slam. The member is DM'd <strong>exactly why</strong>, and one reply opens a staff appeal ticket — so you decide with context, not vibes.</p>
    <details class="fmore"><summary>How it works</summary><div class="fbody">The appeal ticket has one-tap <strong>Unban</strong>, <strong>Deny</strong>, and <strong>Research</strong> — which runs an AI report on the member's last message. No DM noise, no per-incident tickets, no AI token spent unless you press Research.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">📨 Ban appeal</div>
          <div class="dc-desc">"I was out of line and I'm sorry — I've read the rules properly now and won't do it again."</div>
          <div class="dc-fname">Ban reason</div><div class="dc-fval">Repeated harassment after two warnings</div>
          <div class="dc-btns"><span class="dc-btn green">✅ Unban</span><span class="dc-btn red">🚫 Deny</span><span class="dc-btn grey">🔎 Research</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow c-amber">
  <div class="ftext">
    <h3>🤔 AutoMod that asks before it over-reacts</h3>
    <p>Keyword filters punish the innocent — the classic "I love visiting Scunthorpe" problem. Borderline hits get an AI confidence check first.</p>
    <details class="fmore"><summary>How it works</summary><div class="fbody">Clear violations act instantly; anything doubtful is <strong>left up</strong> and handed to staff with one-tap <strong>Delete &amp; warn</strong> or <strong>Allow</strong>. Less collateral damage, less mod drama — and only borderline messages cost tokens.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">🤔 AutoMod — needs review</div>
          <div class="dc-desc">Flagged by <code>word_filter</code> · <strong>32/100</strong> confidence — below your threshold, left up for you.</div>
          <div class="dc-fname">AI note</div><div class="dc-fval">Likely false positive — UK place name, not a slur</div>
          <div class="dc-code">honestly I love visiting Scunthorpe in the summer</div>
          <div class="dc-btns"><span class="dc-btn red">🗑️ Delete &amp; warn</span><span class="dc-btn grey">✅ Allow</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow flip c-blue">
  <div class="ftext">
    <h3>🧠 AutoMod that learns your team</h3>
    <p>Off-the-shelf filters are one-size-fits-all. Self-trained AutoMod studies the calls your staff actually make and proposes rules tailored to <em>your</em> community.</p>
    <details class="fmore"><summary>How it works</summary><div class="fbody">It clusters what your team deletes and reports, then suggests a server-specific rule for your approval. Nothing is ever auto-enforced — every rule is a suggestion until you accept it.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🧠 Suggested AutoMod rule</div>
          <div class="dc-desc">Your team removed <strong>11 messages</strong> matching this pattern in two weeks. Want me to start catching it?</div>
          <div class="dc-fname">Proposed filter</div>
          <div class="dc-code">crypto pump · "guaranteed 10x" · DM-for-signals spam</div>
          <div class="dc-foot">Learned from your staff · never auto-enforced</div>
          <div class="dc-btns"><span class="dc-btn green">✅ Add rule</span><span class="dc-btn grey">Skip</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow c-purple">
  <div class="ftext">
    <h3>🛡️ A tamper-proof audit trail</h3>
    <p>Every action is recorded — even bans done by hand in Discord — in an <strong>encrypted log staff can't edit or erase</strong>, and the owner is pinged if anyone tries to delete an entry.</p>
    <details class="fmore"><summary>How it works</summary><div class="fbody">Native right-click bans/kicks/timeouts are captured like bot commands; the record is encrypted with the same key protecting your credentials; deleting a log-channel entry alerts the owner while the encrypted copy survives. No other moderation bot ties native-capture, encryption, and tamper alerts together.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">to the owner</span></div>
        <div class="dc-embed red">
          <div class="dc-title">🛡️ Tamper alert — log entry deleted</div>
          <div class="dc-desc">Someone removed an entry from <strong>#server-assistant-log</strong>. The encrypted record is intact — here's what they tried to hide.</div>
          <div class="dc-fname">Deleted by</div><div class="dc-fval">@rogue-mod</div>
          <div class="dc-fname">Hidden action</div><div class="dc-fval">ban @user — "spam" (done by hand in Discord)</div>
          <div class="dc-foot">Owner notified · original preserved, encrypted</div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow flip c-red">
  <div class="ftext">
    <h3>🕵️ Catches ban-evading alts</h3>
    <p><strong>Repeat-offender detection</strong> fingerprints the people you ban and auto-stops their alt accounts at the door — and <strong>Threat Score</strong> turns raw behaviour into an explainable risk level.</p>
    <details class="fmore"><summary>How it works</summary><div class="fbody">A fresh account reusing a banned user's avatar or near-identical name is auto-banned and reported (weaker matches flagged). Threat Score is time-decayed, shown to staff in profiles — visibility first, with extensive safeguards before any action.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">👤 Info → Threat Score</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">🛡️ Threat Score — @driftwood</div>
          <div class="dc-desc">🟠 <strong>Elevated</strong> · 58/100 — an explainable read of infraction history, weighted by severity and decaying over time.</div>
          <div class="dc-fname">Recent history</div><div class="dc-fval">3 warnings · 1 timeout · 0 bans</div>
          <div class="dc-foot">Advisory view · free for every server</div>
        </div>
      </div></div>
    </div>
  </div>
</div>

---

## 📸 What your staff actually sees

<p class="section-lead">The same intelligence, in the moments it matters. Each panel is a to-scale mock of a real message — the situation on one side, what the bot does on the other.</p>

<div class="frow c-amber">
  <div class="ftext">
    <h3>A regular suddenly turns hostile in #general</h3>
    <p>Third flare-up with the same member today. Instead of guessing, a moderator right-clicks the message → <strong>Message Report</strong>.</p>
    <details class="fmore"><summary>What the feature does</summary><div class="fbody"><strong>Message Report</strong> reads ~20 surrounding messages and returns a 3–5 bullet AI summary — tone, likely rule broken, escalation pattern, suggested action — with one-tap Warn / Timeout / Kick / Ban. The bot never auto-acts; staff always decide, and the action is logged with the report attached.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">right-click → Message Report</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">📋 Message Report</div>
          <div class="dc-desc">• <strong>Tone:</strong> hostile, escalating<br>• <strong>Likely breaks:</strong> rule 3 — personal attacks<br>• <strong>Pattern:</strong> third flare-up with the same member today<br>• <strong>Suggested:</strong> short timeout + a staff check-in</div>
          <div class="dc-foot">AI summary · reads ~20 messages of context</div>
          <div class="dc-btns"><span class="dc-btn grey">⚠️ Warn</span><span class="dc-btn grey">🔇 Timeout</span><span class="dc-btn red">👢 Kick</span><span class="dc-btn red">🔨 Ban</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow flip c-red">
  <div class="ftext">
    <h3>A day-old account drops a "free Nitro" link</h3>
    <p>Classic scam, posted while your team is asleep. AutoMod handles it before anyone sees it — and tells the user why.</p>
    <details class="fmore"><summary>What the feature does</summary><div class="fbody">Filter packs catch scams / slurs (IP-grabber domains preloaded); the message is removed and the user DM'd which rule fired plus their warning count. Staff are completely exempt, and repeat hits auto-escalate up your punishment ladder.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed red">
          <div class="dc-title">🤖 AutoMod · scam_link</div>
          <div class="dc-fname">User</div><div class="dc-fval">@newbie_4821 · account 19h old</div>
          <div class="dc-fname">Action</div><div class="dc-fval">Message deleted · auto-warning #1 · user DM'd</div>
          <div class="dc-code">join for free nitro 🎁 discord-gift[.]ru/x</div>
          <div class="dc-foot">Logged · staff exempt · IP-grabbers preloaded</div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow c-blue">
  <div class="ftext">
    <h3>A mod tries to purge 200 messages</h3>
    <p>Powerful, irreversible — so it doesn't just run. The action routes <em>up</em> the chain for sign-off, and everything is logged.</p>
    <details class="fmore"><summary>What the feature does</summary><div class="fbody"><strong>Tiered approval</strong>: dangerous actions (like <code>/purge</code>) post an approval card to a higher tier — only the Owner can approve an Admin's request. Once approved it executes and is written to your audit trail with the approver recorded. No rogue purges, no silent mass-deletes.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed">
          <div class="dc-title">⚖️ Approval needed — /purge 200</div>
          <div class="dc-desc">@admin-jess wants to purge 200 messages in #general. This routes up a tier for sign-off.</div>
          <div class="dc-fname">Requested by</div><div class="dc-fval">@admin-jess (Admin)</div>
          <div class="dc-fname">Approver</div><div class="dc-fval">Owner only</div>
          <div class="dc-btns"><span class="dc-btn green">✅ Approve</span><span class="dc-btn red">❌ Deny</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="shipped-strip">
  <strong class="lbl">🚀 Recently shipped</strong> &nbsp;·&nbsp;
  <span id="recently-shipped">New features ship continuously — see the changelog for the latest</span> &nbsp;·&nbsp;
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/">full changelog →</a>
</div>

<script>
/* Pull the latest shipped features straight from the roadmap's Shipped band,
   so this strip never needs separate updating. Same-origin fetch; degrades to
   the evergreen fallback text if JS is off or the fetch fails. */
(function () {
  var box = document.getElementById("recently-shipped");
  if (!box) return;
  fetch("{{ site.url }}{{ site.baseurl }}/roadmap/")
    .then(function (r) { return r.ok ? r.text() : null; })
    .then(function (html) {
      if (!html) return;
      var doc = new DOMParser().parseFromString(html, "text/html");
      var cards = doc.querySelectorAll(".band-shipped .shipped-scroll > details.card > summary");
      var names = [];
      for (var i = 0; i < cards.length && names.length < 5; i++) {
        var s = cards[i].cloneNode(true);
        var pill = s.querySelector(".shipped-pill");
        if (pill) pill.parentNode.removeChild(pill);
        var t = (s.textContent || "").replace(/\s+/g, " ").trim();
        if (t) names.push(t);
      }
      if (names.length) box.textContent = names.join(" · ");
    })
    .catch(function () {});
})();
</script>

---

## 🧰 The complete toolkit

<p class="section-lead">Everything below is in the box. The free tier is a <em>complete</em> moderation suite; Premium adds your server's own power tools.</p>

<div class="xgrid" markdown="0">
  <details class="x"><summary>🛡️ Full mod toolkit</summary><div class="b">warn · mute · kick · ban · softban · <code>/tempban</code> (timed, auto-unban) · one-command <code>/role</code> · <strong>tiered approval</strong> (dangerous actions route up the chain) · <strong>24-hour undo</strong>.</div></details>
  <details class="x"><summary>🤖 AutoMod engine</summary><div class="b">Filter packs (scams / slurs), <strong>custom regex</strong> with a safety check, link blocklist, anti-spam, and an auto-escalating punishment ladder. Staff are completely exempt.</div></details>
  <details class="x"><summary>🚨 Anti-raid &amp; lockdown</summary><div class="b">Always-on mass-join detection with staff alerts. <code>/lockdown</code> locks every channel in one command and restores the <strong>exact prior permissions</strong> when lifted.</div></details>
  <details class="x"><summary>🔐 DM Verification Gate</summary><div class="b">Button-based new-member verification that stops most automated raid bots cold before they reach your channels.</div></details>
  <details class="x"><summary>🎫 Ticket Panels</summary><div class="b">Private in-server support tickets — a panel button opens a private channel with an intake form; a <code>.txt</code> transcript is saved on close. The bot can even create the channel for you.</div></details>
  <details class="x"><summary>🎨 AI extras</summary><div class="b"><code>/imagine</code> image generation · 🌐 <code>/translate</code> · ❓ <code>/faq</code> Q&amp;A · right-click <strong>Message Report</strong> &amp; <strong>Translate</strong>. Use the host's key or bring your own.</div></details>
  <details class="x"><summary>🎛️ Customisation Hub</summary><div class="b">Nine sub-wizards in <code>/settings</code> — branding, role tiers, punishment ladders, notifications, Pulse and more. Everything saves instantly, no code.</div></details>
  <details class="x"><summary>💎 Premium toolkit</summary><div class="b">🎭 Reaction roles · ⌨️ custom <code>/commands</code> with live embeds · ❓ AI Q&amp;A from your FAQ · 🌐 translation · 🤝 AI mediator · 💾 backup &amp; restore · 🎨 white-label branding. Most set up from a one-screen wizard.</div></details>
</div>

---

## 🖱️ Three ways to use it

<div class="ways-grid">
  <div class="way">
    <h3>⌨️ Slash commands — anywhere</h3>
    <p>Every action works as a <code>/</code> command in any channel: <code>/warn</code>, <code>/mute</code>, <code>/ban</code>, <code>/tempban</code>, <code>/lockdown</code>, <code>/purge</code>…</p>
  </div>
  <div class="way">
    <h3>💬 Text — in staff-chat</h3>
    <p>Natural-language shorthand: <code>warn @user</code>, <code>mute @user 30 min</code>, <code>purge since 1pm</code>.</p>
  </div>
  <div class="way">
    <h3>🖱️ Right-click menus</h3>
    <p>Apps ▸ <strong>View Info</strong> / <strong>View Warnings</strong> on a user, or <strong>Message Report</strong> on a message for an AI summary.</p>
  </div>
</div>

<div class="upcoming-strip">
  <strong class="lbl">🟢 Coming up next</strong> &nbsp;·&nbsp;
  Your votes decide — feature polls land in your staff chat and the top picks ship first &nbsp;·&nbsp;
  <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">see the live roadmap →</a>
</div>

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands"><svg class="dlogo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0C9.46 4.79 9.25 4.36 9.06 4.03A.07.07 0 0 0 9 4c-1.5.26-2.93.71-4.27 1.33a.06.06 0 0 0-.03.02C1.98 9.42 1.23 13.38 1.6 17.3a.1.1 0 0 0 .03.05c1.8 1.32 3.53 2.12 5.24 2.65a.07.07 0 0 0 .07-.02c.4-.55.76-1.13 1.07-1.74a.07.07 0 0 0-.04-.09 12.9 12.9 0 0 1-1.64-.78.07.07 0 0 1-.01-.11l.33-.25a.07.07 0 0 1 .07-.01c3.44 1.57 7.15 1.57 10.55 0a.07.07 0 0 1 .07.01l.33.26c.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78a.07.07 0 0 0-.04.09c.32.61.68 1.19 1.07 1.74a.07.07 0 0 0 .08.03c1.72-.53 3.45-1.33 5.25-2.65a.07.07 0 0 0 .03-.05c.44-4.53-.73-8.46-3.1-11.95a.05.05 0 0 0-.03-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"/></svg>Add to Discord</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore every feature</a>
</div>

<p style="text-align: center; color: var(--ink-soft); font-size: .88rem; margin-top: 1.5rem;">
  Server Assistant · <a href="{{ site.url }}{{ site.baseurl }}/features/">Features</a> · <a href="{{ site.url }}{{ site.baseurl }}/compare/">Compare</a> · <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> · <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">Roadmap</a> · <a href="{{ site.url }}{{ site.baseurl }}/support/">Support</a>
</p>
