---
layout: default
title: Server Assistant — the Discord moderation bot that understands your whole server
description: Most Discord mod bots react to messages. Server Assistant watches your server's health, learns your team's judgment, gives banned members a fair appeal, and keeps a tamper-proof audit trail. Privacy-first, free to start.
image: /server-assistant-docs/assets/banner.jpeg
---

<div align="center">
  <picture>
    <source srcset="{{ '/assets/logo.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant logo" width="240" height="231" fetchpriority="high">
  </picture>

  <h1>Server Assistant</h1>

  <p style="font-size:1.15rem; font-weight:700;">Most Discord mod bots just react to messages.<br>This one understands your whole server.</p>
  <p style="font-size:.95rem; color:#4a5568; margin-top:-.25rem;">Daily health insight · AutoMod that learns your team · fair ban appeals · a tamper-proof audit trail.<br><strong>Privacy-first. Free to start.</strong></p>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Server Assistant",
  "applicationCategory": "Discord Bot",
  "operatingSystem": "Discord",
  "description": "A Discord moderation bot that watches server health (Pulse daily digests), learns your staff's moderation decisions (self-trained AutoMod), reduces false positives with an AI second-opinion, gives banned members a structured one-reply appeal, catches ban-evading alts, and keeps an encrypted tamper-proof audit trail. AutoMod, anti-raid, verification, ticket panels, and AI image generation included.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://wandweb2.github.io/server-assistant-docs/",
  "image": "https://wandweb2.github.io/server-assistant-docs/assets/banner.jpeg",
  "author": { "@type": "Organization", "name": "WandWeb2" }
}
</script>

<style>
.cta-row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.5rem 0; }
.cta { display: inline-block; padding: .6rem 1.2rem; border-radius: 999px; font-weight: 700; text-decoration: none !important; transition: transform .15s, box-shadow .15s; }
.cta-primary { background: linear-gradient(135deg, #5865f2, #3498db); color: white !important; box-shadow: 0 4px 14px rgba(88,101,242,.35); }
.cta-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(88,101,242,.45); }
.cta-secondary { background: rgba(255,255,255,0.55); color: #2e3340 !important; border: 1px solid rgba(31,38,135,.18); }
.cta-secondary:hover { background: rgba(255,255,255,0.8); }

.free-callout { margin: 1.5rem 0; padding: 1rem 1.25rem; background: rgba(46,204,113,.12); border-left: 4px solid #2ecc71; border-radius: 10px; }

/* ── Differentiators ─────────────────────────────────────────────────────── */
.lead-line { text-align:center; font-size:1.05rem; color:#3a4252; max-width:760px; margin:1rem auto 2rem; }
.diff { display:flex; gap:1.5rem; align-items:center; margin:2.25rem 0; flex-wrap:wrap; }
.diff:nth-child(even) { flex-direction:row-reverse; }
.diff-text { flex:1 1 300px; min-width:280px; }
.diff-text .tag { display:inline-block; font-size:.72rem; font-weight:800; letter-spacing:.04em; text-transform:uppercase; color:#5865f2; background:rgba(88,101,242,.1); padding:.15rem .55rem; border-radius:999px; margin-bottom:.5rem; }
.diff-text h3 { margin:.1rem 0 .5rem; font-size:1.3rem; line-height:1.25; }
.diff-text p { margin:0; color:#3a4252; font-size:.95rem; line-height:1.55; }
.diff-mock { flex:1 1 360px; min-width:300px; }

/* ── Discord embed mockups ───────────────────────────────────────────────── */
.dc { background:#313338; border-radius:10px; padding:.7rem .8rem; font-family:"gg sans","Segoe UI",system-ui,sans-serif; color:#dbdee1; font-size:.84rem; line-height:1.4; box-shadow:0 8px 30px rgba(31,38,135,.18); }
.dc + .dc { margin-top:.5rem; }
.dc-row { display:flex; gap:.6rem; align-items:flex-start; }
.dc-av { width:38px; height:38px; border-radius:50%; flex:0 0 38px; object-fit:cover; background:#fff; }
.mock-pair { display:flex; gap:.8rem; flex-wrap:wrap; justify-content:center; }
.mock-pair > .dc { flex:1 1 320px; }
.dc-body { flex:1; min-width:0; }
.dc-head { margin-bottom:.15rem; }
.dc-name { font-weight:600; color:#f2f3f5; }
.dc-bot { background:#5865f2; color:#fff; font-size:.6rem; font-weight:700; padding:.02rem .28rem; border-radius:3px; margin-left:.35rem; vertical-align:middle; text-transform:uppercase; letter-spacing:.02em; }
.dc-time { color:#949ba4; font-size:.7rem; margin-left:.4rem; }
.dc-embed { border-left:4px solid #5865f2; background:#2b2d31; border-radius:0 4px 4px 0; padding:.55rem .75rem; margin-top:.15rem; }
.dc-embed.red { border-left-color:#da373c; }
.dc-embed.blue { border-left-color:#3498db; }
.dc-embed.green { border-left-color:#2ecc71; }
.dc-embed.amber { border-left-color:#f1c40f; }
.dc-title { font-weight:700; color:#f2f3f5; margin-bottom:.2rem; }
.dc-desc { color:#dbdee1; }
.dc-fname { font-weight:700; color:#f2f3f5; font-size:.78rem; margin-top:.45rem; }
.dc-fval { color:#b5bac1; font-size:.82rem; }
.dc-foot { color:#949ba4; font-size:.7rem; margin-top:.55rem; }
.dc-code { background:#1e1f22; border-radius:4px; padding:.3rem .5rem; font-family:Consolas,monospace; font-size:.78rem; color:#dbdee1; margin-top:.3rem; white-space:pre-wrap; word-break:break-word; }
.dc-btns { display:flex; gap:.4rem; margin-top:.55rem; flex-wrap:wrap; }
.dc-btn { font-size:.76rem; font-weight:600; padding:.3rem .65rem; border-radius:4px; color:#fff !important; }
.dc-btn.green{background:#248046;} .dc-btn.red{background:#da373c;} .dc-btn.grey{background:#4e5058;} .dc-btn.blurple{background:#5865f2;}
.dc-flow { text-align:center; color:#949ba4; font-size:.74rem; margin:.35rem 0; }

.feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.25rem 0; }
.feat-card { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.15); border-radius: 14px; padding: 1rem 1.15rem; box-shadow: 0 4px 18px rgba(31,38,135,0.08); }
.feat-card h3 { margin: 0 0 .35rem; font-size: 1rem; }
.feat-card ul { margin: 0; padding-left: 1.1rem; font-size: .88rem; line-height: 1.5; color: #2e3340; }
.feat-card ul li { margin: .15rem 0; }
@media (max-width: 900px) { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .feat-grid { grid-template-columns: 1fr; } }

.ways-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; }
.way { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.15); border-radius: 14px; padding: 1rem 1.15rem; box-shadow: 0 4px 18px rgba(31,38,135,0.08); }
.way h3 { margin: 0 0 .35rem; font-size: .98rem; }
.way p { margin: 0; font-size: .88rem; line-height: 1.45; color: #2e3340; }
.way code { font-size: .82em; }
@media (max-width: 700px) { .ways-grid { grid-template-columns: 1fr; } }
</style>

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands">➕ Invite to your server</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/setup/">📖 Setup guide</a>
  <a class="cta cta-secondary" href="https://top.gg/bot/1278486617375510570">👍 Vote on Top.gg</a>
</div>

<div class="free-callout">
  <strong>🆓 Free to start, free to stay:</strong> the full moderation toolkit is free forever. The AI features come with a <strong>150K-token trial</strong>, and Premium only bills once your trial runs out — so light-use servers may never pay. <a href="{{ site.url }}{{ site.baseurl }}/pricing/">See pricing</a>.
</div>

---

## Four things almost no other mod bot does

<p class="lead-line">Most bots are rule-runners: a message breaks a filter, the bot reacts. Server Assistant adds an intelligence layer on top — it watches your server's health, learns how <em>your</em> team moderates, second-guesses its own false positives, and treats the people on the other end of a ban like adults.</p>

<div class="diffs" markdown="0">

<div class="diff">
  <div class="diff-text">
    <span class="tag">🩺 Pulse · whole-server insight</span>
    <h3>It watches your server's health — not just its messages</h3>
    <p>Every other bot waits for a rule to break. Once a day, Pulse posts a health report to your staff channel — messages, joins, AutoMod activity and warnings, each with a week-over-week trend — and flags the slow-burn patterns humans miss, like a trickle of joins sitting just under your raid threshold. It's read-only: it never acts on its own, it just gives your team x-ray vision.</p>
  </div>
  <div class="diff-mock">
    <div class="dc">
      <div class="dc-row">
        <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
        <div class="dc-body">
          <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">9:00 AM</span></div>
          <div class="dc-embed green">
            <div class="dc-title">🩺 Daily Pulse — last 24 hours</div>
            <div class="dc-desc">Your server looks healthy. One thing worth a glance. 👇</div>
            <div class="dc-fname">Messages</div><div class="dc-fval">4,812 &nbsp;·&nbsp; ▲ 6% vs 7-day avg</div>
            <div class="dc-fname">New members</div><div class="dc-fval">37 joins &nbsp;·&nbsp; ⚠️ above baseline, below raid threshold</div>
            <div class="dc-fname">AutoMod + warnings</div><div class="dc-fval">9 blocks · 3 warnings &nbsp;·&nbsp; ▼ 20%</div>
            <div class="dc-foot">Read-only insight · never auto-actions · /settings → Pulse</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="diff">
  <div class="diff-text">
    <span class="tag">📩 Appeals · a fair process</span>
    <h3>A ban isn't a silent door-slam — accused members get one appeal</h3>
    <p>On most servers a ban just… happens, with no explanation and no recourse. Server Assistant DMs the banned member <strong>exactly why</strong>, and invites a single reply to appeal. That one reply opens an appeal ticket for your staff with one-tap <strong>Unban</strong>, <strong>Deny</strong>, and <strong>Research</strong> — which runs an AI report on the member's last message so you decide with context, not vibes.</p>
  </div>
  <div class="diff-mock">
    <div class="dc">
      <div class="dc-row">
        <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
        <div class="dc-body">
          <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">to the banned member</span></div>
          <div class="dc-embed red">
            <div class="dc-title">You've been banned from WWM Gaming</div>
            <div class="dc-desc"><strong>Reason:</strong> Repeated harassment after two warnings.<br><br>If you'd like to appeal, <strong>reply once</strong> with your side — it goes straight to the staff team.</div>
            <div class="dc-foot">Server Assistant · ban appeal</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dc-flow">↓ &nbsp; the member sends one reply &nbsp; ↓</div>
    <div class="dc">
      <div class="dc-row">
        <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
        <div class="dc-body">
          <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
          <div class="dc-embed blue">
            <div class="dc-title">📨 Ban appeal</div>
            <div class="dc-desc">"I was out of line and I'm sorry — I've read the rules properly now and won't do it again."</div>
            <div class="dc-fname">Ban reason</div><div class="dc-fval">Repeated harassment after two warnings</div>
            <div class="dc-fname">Their last message</div>
            <div class="dc-code">that's it, I'm done with this place</div>
            <div class="dc-foot">appeal · review below</div>
            <div class="dc-btns"><span class="dc-btn green">✅ Unban</span><span class="dc-btn red">🚫 Deny</span><span class="dc-btn grey">🔎 Research</span></div>
            <div class="dc-btns"><span class="dc-btn grey">👤 Info</span><span class="dc-btn grey">⚠️ Warnings</span><span class="dc-btn grey">📝 Notes</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="diff">
  <div class="diff-text">
    <span class="tag">🤔 AI second-opinion · fewer false positives</span>
    <h3>AutoMod that asks before it over-reacts</h3>
    <p>Keyword filters punish the innocent — the classic "I love visiting Scunthorpe" problem. Switch on AI review and borderline hits get a confidence check first: clear violations act instantly, anything doubtful is <strong>left up</strong> and handed to staff with one-tap <strong>Delete &amp; warn</strong> or <strong>Allow</strong>. Less collateral damage, less mod drama.</p>
  </div>
  <div class="diff-mock">
    <div class="dc">
      <div class="dc-row">
        <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
        <div class="dc-body">
          <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
          <div class="dc-embed amber">
            <div class="dc-title">🤔 AutoMod — needs review</div>
            <div class="dc-desc">A message flagged by <code>word_filter</code> scored <strong>32/100</strong> confidence — below your threshold, so it was left up for you to decide.</div>
            <div class="dc-fname">AI note</div><div class="dc-fval">Likely false positive — UK place name, not a slur</div>
            <div class="dc-fname">Message</div>
            <div class="dc-code">honestly I love visiting Scunthorpe in the summer</div>
            <div class="dc-btns"><span class="dc-btn red">🗑️ Delete &amp; warn</span><span class="dc-btn grey">✅ Allow</span></div>
            <div class="dc-btns"><span class="dc-btn grey">👤 Info</span><span class="dc-btn grey">⚠️ Warnings</span><span class="dc-btn grey">📝 Notes</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="diff">
  <div class="diff-text">
    <span class="tag">🧠 Self-trained · adapts to you</span>
    <h3>AutoMod that learns your team's judgment</h3>
    <p>Off-the-shelf filters are one-size-fits-all. Self-trained AutoMod quietly studies the calls your staff actually make — what they delete, what they report — clusters the patterns, and proposes rules tailored to <em>your</em> community for your approval. Nothing is ever auto-enforced; every rule is a suggestion until you accept it.</p>
  </div>
  <div class="diff-mock">
    <div class="dc">
      <div class="dc-row">
        <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
        <div class="dc-body">
          <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
          <div class="dc-embed blue">
            <div class="dc-title">🧠 Suggested AutoMod rule</div>
            <div class="dc-desc">Your team has removed <strong>11 messages</strong> matching this pattern in the last two weeks. Want me to start catching it?</div>
            <div class="dc-fname">Proposed filter</div>
            <div class="dc-code">crypto pump · "guaranteed 10x" · DM-for-signals spam</div>
            <div class="dc-foot">Learned from your staff · never auto-enforced</div>
            <div class="dc-btns"><span class="dc-btn green">✅ Add rule</span><span class="dc-btn grey">Skip</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

> And it keeps you honest: a **🛡️ tamper-proof audit trail** records every action — even bans done by hand in Discord — in an encrypted log staff can't edit or erase, and pings the owner if anyone tries. **🕵️ Repeat-offender detection** fingerprints the people you ban and auto-stops their alt accounts at the door. **🛡️ Threat Score** turns raw behaviour into an explainable risk level. No other moderation bot ties all of this together.

<style>
.shipped-strip { background: rgba(46,204,113,.10); border-left: 4px solid #2ecc71; border-radius: 10px; padding: .85rem 1.1rem; margin: 1.5rem 0 0; font-size: .9rem; line-height: 1.55; }
.shipped-strip strong.lbl { color: #1b8e3a; }
.shipped-strip code { font-size: .82em; }
.shipped-pill-i { display: inline-block; font-size: .68rem; font-weight: 800; letter-spacing: .04em; padding: .12rem .45rem; border-radius: 999px; background: #d6eaf8; color: #1a5276; margin-right: .25rem; vertical-align: middle; }
</style>

<div class="shipped-strip">
  <strong class="lbl">🚀 Shipped this fortnight</strong> &nbsp;·&nbsp;
  <span class="shipped-pill-i">v5.2</span>Ticket Panels &nbsp;·&nbsp;
  <span class="shipped-pill-i">v5.3</span><code>/role</code> · <code>/lockdown</code> · <code>/tempban</code> &nbsp;·&nbsp;
  <span class="shipped-pill-i">v5.4</span>AutoMod AI second-opinion + alt-guard &nbsp;·&nbsp;
  <span class="shipped-pill-i">v5.5</span>Ban reasons + one-reply appeals &nbsp;·&nbsp;
  <span class="shipped-pill-i">v5.5.4</span>Premium <code>/imagine</code> cooldown removed &nbsp;·&nbsp;
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/">see the full changelog →</a>
</div>

---

## Everything else, included

<div class="feat-grid">
  <div class="feat-card">
    <h3>⚙️ Full mod toolkit</h3>
    <ul>
      <li>warn · mute · kick · ban · softban · timed bans</li>
      <li><strong>Tiered approval</strong> — dangerous actions route up the chain</li>
      <li>24-hour undo · one-command roles</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🚨 Anti-raid &amp; lockdown</h3>
    <ul>
      <li>Mass-join detection with staff alerts</li>
      <li><code>/lockdown</code> every channel in one command</li>
      <li>Restores exact prior permissions when lifted</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🔐 DM Verification Gate</h3>
    <ul>
      <li>Button-based new-member verification</li>
      <li>Stops most automated raid bots cold</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🎫 Ticket Panels</h3>
    <ul>
      <li>Private in-server support tickets</li>
      <li>Intake form, transcripts, persistent button</li>
      <li>Bot can even create the channel for you</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🎨 AI extras</h3>
    <ul>
      <li><code>/imagine</code> image generation (free trial; unlimited on Premium)</li>
      <li>Right-click <strong>Message Report</strong> for AI context</li>
      <li>Bring your own key, or use the host's</li>
    </ul>
  </div>
  <div class="feat-card">
    <h3>🎛️ Customisation Hub</h3>
    <ul>
      <li>Nine sub-wizards in <code>/settings</code></li>
      <li>Branding, role tiers, ladders, notifications</li>
      <li>Everything saves instantly — no code</li>
    </ul>
  </div>
</div>

---

## Built on three promises

- **🛡️ Safe** — dangerous actions route up the chain for approval before they run. No rogue bans, no silent purges.
- **🔍 Transparent** — every action is logged and the affected member is told why. The audit trail is encrypted and tamper-evident.
- **🎨 Yours to shape** — role tiers, punishment ladders, branding, thresholds — all configurable, no code.

<style>
.upcoming-strip { background: rgba(52,152,219,.08); border-left: 4px solid #3498db; border-radius: 10px; padding: .85rem 1.1rem; margin: 1rem 0 1.75rem; font-size: .9rem; line-height: 1.55; }
.upcoming-strip strong.lbl { color: #1f6dbf; }
.upcoming-strip code { font-size: .82em; }
</style>

<div class="upcoming-strip">
  <strong class="lbl">🟢 Coming up next</strong> &nbsp;·&nbsp;
  AI rule explainer · Smart purge · Native-action coaching (all <code>v5.6</code>) &nbsp;·&nbsp;
  <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">see the full roadmap →</a>
</div>

## Three ways to use it

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

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands">➕ Invite to your server</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore every feature</a>
</div>

---

## 📸 More of what your staff sees

Every panel below is a to-scale mock of a real Server Assistant message — same logo, same layout you'll see in your own server.

<div class="diffs" markdown="0">

<div class="dc" style="max-width:540px;margin:0 auto 1.2rem;">
  <div class="dc-row">
    <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
    <div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">right-click → Message Report</span></div>
      <div class="dc-embed amber">
        <div class="dc-title">📋 Message Report</div>
        <div class="dc-desc">• <strong>Tone:</strong> hostile, escalating over the last few messages<br>• <strong>Likely breaks:</strong> rule 3 — personal attacks<br>• <strong>Pattern:</strong> third flare-up with the same member today<br>• <strong>Suggested action:</strong> short timeout + a staff check-in</div>
        <div class="dc-fname">Reported user</div><div class="dc-fval">@nightowl</div>
        <div class="dc-foot">AI summary · reads ~20 messages of context</div>
        <div class="dc-btns"><span class="dc-btn grey">⚠️ Warn</span><span class="dc-btn grey">🔇 Timeout</span><span class="dc-btn grey">🗑️ Delete</span><span class="dc-btn red">👢 Kick</span><span class="dc-btn red">🔨 Ban</span></div>
        <div class="dc-btns"><span class="dc-btn grey">👤 Info</span><span class="dc-btn grey">⚠️ Warnings</span><span class="dc-btn grey">📝 Notes</span></div>
      </div>
    </div>
  </div>
</div>

<p style="text-align:center;color:#3a4252;font-weight:600;margin:.4rem 0 .7rem;">AutoMod is transparent both ways — staff get a structured log, the member gets a clear explanation.</p>

<div class="mock-pair">
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed red">
          <div class="dc-title">🤖 AutoMod · word_filter</div>
          <div class="dc-fname">User</div><div class="dc-fval">@spammer42</div>
          <div class="dc-fname">Action</div><div class="dc-fval">Message deleted · auto-warning #2</div>
          <div class="dc-code">join for free nitro 🎁 discord-gift[.]ru/x</div>
          <div class="dc-foot">Logged to your channel — structured + searchable</div>
        </div>
      </div>
    </div>
  </div>
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">to the member</span></div>
        <div class="dc-embed red">
          <div class="dc-title">⚠️ AutoMod action in WWM Gaming</div>
          <div class="dc-desc">Your message was removed because it matched a content filter (<code>word_filter</code>).<br><br>This is <strong>auto-warning #2</strong>. Repeated violations escalate to mute, kick, or ban.</div>
          <div class="dc-foot">Think it was a mistake? Contact a moderator.</div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

---

<p style="text-align: center; color: #6a7280; font-size: .88rem;">
  Server Assistant · Get help with <a href="{{ site.url }}{{ site.baseurl }}/support/"><code>/support</code></a> · <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> · <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">Roadmap</a>
</p>
