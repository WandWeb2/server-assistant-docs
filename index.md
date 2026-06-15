---
layout: default
title: Server Assistant — the Discord moderation bot that understands your whole server
description: Most Discord mod bots react to messages. Server Assistant watches your server's health, learns your team's judgment, gives banned members a fair appeal, and keeps a tamper-proof audit trail. Privacy-first, free to start.
image: /server-assistant-docs/assets/banner.jpeg
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
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://wandweb2.github.io/server-assistant-docs/",
  "image": "https://wandweb2.github.io/server-assistant-docs/assets/banner.jpeg",
  "author": { "@type": "Organization", "name": "WandWeb2" }
}
</script>

<style>
.cta-row { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.4rem 0 .5rem; }
.cta { display: inline-block; padding: .6rem 1.3rem; border-radius: 999px; font-weight: 700; text-decoration: none !important; transition: transform .15s, box-shadow .15s; }
.cta-primary { background: linear-gradient(135deg, #5865f2, #3498db); color: white !important; box-shadow: 0 4px 14px rgba(88,101,242,.35); }
.cta-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(88,101,242,.45); }
.cta-secondary { background: rgba(255,255,255,0.08); color: var(--ink) !important; border: 1px solid var(--glass-border); }
.cta-secondary:hover { background: rgba(255,255,255,0.14); }
.free-line { text-align: center; font-size: .85rem; color: var(--ink-soft); margin: 0 0 1.5rem; }

/* First-glance cards — same pattern as the Features page */
.xgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 0.5rem; align-items: start; margin: 1rem 0 1.4rem; }
.xgrid details.x { border: 1px solid var(--glass-border); border-radius: 10px; background: rgba(255,255,255,0.04); }
.xgrid details.x > summary { cursor: pointer; padding: 0.6rem 0.85rem; list-style: none; color: var(--ink); font-size: 0.96rem; font-weight: 700; }
.xgrid details.x > summary::-webkit-details-marker { display: none; }
.xgrid details.x > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .4rem; font-size: .75em; }
.xgrid details.x[open] > summary::before { content: "▾"; }
.xgrid details.x[open] > summary { border-bottom: 1px solid var(--glass-border); }
.xgrid details.x .b { padding: 0.6rem 0.85rem 0.7rem; color: var(--ink-soft); font-size: 0.88rem; line-height: 1.5; }
.xgrid details.x .b code { color: var(--accent); font-size: 0.85em; }
.xgrid .t { color: var(--ink-soft); font-weight: 400; }
.xgrid .pp { display: inline-block; font-size: .58rem; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; padding: .1rem .4rem; border-radius: 999px; background: rgba(241,196,15,0.2); color: #8a5a00; vertical-align: middle; margin-left: .3rem; }
.section-lead { text-align: center; font-size: 1rem; color: var(--ink-soft); max-width: 720px; margin: .6rem auto 1rem; line-height: 1.55; }

.shipped-strip { background: rgba(46,204,113,.10); border-left: 4px solid #2ecc71; border-radius: 10px; padding: .85rem 1.1rem; margin: 1.5rem 0; font-size: .9rem; line-height: 1.55; }
.shipped-strip strong.lbl { color: #56d08a; }
.shipped-strip code { font-size: .82em; }
.upcoming-strip { background: rgba(52,152,219,.10); border-left: 4px solid #3498db; border-radius: 10px; padding: .85rem 1.1rem; margin: 1.5rem 0; font-size: .9rem; line-height: 1.55; }
.upcoming-strip strong.lbl { color: #6fa8ff; }

.ways-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; }
.way { background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 14px; padding: 1rem 1.15rem; }
.way h3 { margin: 0 0 .35rem; font-size: .98rem; color: var(--ink); }
.way p { margin: 0; font-size: .88rem; line-height: 1.45; color: var(--ink-soft); }
.way code { font-size: .82em; color: var(--accent); }
@media (max-width: 700px) { .ways-grid { grid-template-columns: 1fr; } }
</style>

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands">➕ Add to Discord</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore every feature</a>
</div>

<p class="free-line">Free to start — the full moderation toolkit is free forever.</p>

---

## ⚡ What makes it different

<p class="section-lead">Most bots are rule-runners: a message breaks a filter, the bot reacts. Server Assistant adds an intelligence layer on top — tap a card to see how.</p>

<div class="xgrid" markdown="0">
  <details class="x"><summary>🩺 Whole-server health insight <span class="t">— Pulse</span></summary><div class="b">Every other bot waits for a rule to break. Once a day, <strong>Pulse</strong> posts a health report to your staff channel — messages, joins, AutoMod activity and warnings, each with a week-over-week trend — and flags the slow-burn patterns humans miss, like a trickle of joins sitting just under your raid threshold. Read-only: it never acts on its own, it just gives your team x-ray vision.</div></details>
  <details class="x"><summary>📩 Fair ban appeals <span class="t">— not a silent door-slam</span></summary><div class="b">On most servers a ban just… happens, with no explanation and no recourse. Server Assistant DMs the banned member <strong>exactly why</strong>, and invites a single reply to appeal. That one reply opens an appeal ticket with one-tap <strong>Unban</strong>, <strong>Deny</strong>, and <strong>Research</strong> — which runs an AI report on the member's last message so you decide with context, not vibes.</div></details>
  <details class="x"><summary>🤔 AutoMod that asks before it over-reacts <span class="t">— AI second-opinion</span></summary><div class="b">Keyword filters punish the innocent — the classic "I love visiting Scunthorpe" problem. Switch on AI review and borderline hits get a confidence check first: clear violations act instantly, anything doubtful is <strong>left up</strong> and handed to staff with one-tap <strong>Delete &amp; warn</strong> or <strong>Allow</strong>. Less collateral damage, less mod drama.</div></details>
  <details class="x"><summary>🧠 AutoMod that learns your team <span class="t">— self-trained</span></summary><div class="b">Off-the-shelf filters are one-size-fits-all. Self-trained AutoMod quietly studies the calls your staff actually make — what they delete, what they report — clusters the patterns, and proposes rules tailored to <em>your</em> community for your approval. Nothing is ever auto-enforced; every rule is a suggestion until you accept it.</div></details>
  <details class="x"><summary>🛡️ A tamper-proof audit trail</summary><div class="b">Every action is recorded — even bans done by hand in Discord — in an <strong>encrypted log staff can't edit or erase</strong>, and the owner is pinged if anyone tries to delete an entry. No other moderation bot ties native-action capture, encryption, and tamper alerts together.</div></details>
  <details class="x"><summary>🕵️ Catches ban-evading alts <span class="t">— alt-guard + Threat Score</span></summary><div class="b"><strong>Repeat-offender detection</strong> fingerprints the people you ban and auto-stops their alt accounts at the door. <strong>Threat Score</strong> turns raw behaviour into an explainable, time-decayed risk level shown to staff — visibility first, with extensive safeguards before any action.</div></details>
</div>

### 📸 What your staff actually sees

<div class="mock-pair">
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
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">📨 Ban appeal</div>
          <div class="dc-desc">"I was out of line and I'm sorry — I've read the rules properly now and won't do it again."</div>
          <div class="dc-fname">Ban reason</div><div class="dc-fval">Repeated harassment after two warnings</div>
          <div class="dc-foot">appeal · review below</div>
          <div class="dc-btns"><span class="dc-btn green">✅ Unban</span><span class="dc-btn red">🚫 Deny</span><span class="dc-btn grey">🔎 Research</span></div>
          <div class="dc-btns"><span class="dc-btn grey">👤 Info</span><span class="dc-btn grey">⚠️ Warnings</span><span class="dc-btn grey">📝 Notes</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mock-pair">
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
        </div>
      </div>
    </div>
  </div>
  <div class="dc">
    <div class="dc-row">
      <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
      <div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">right-click → Message Report</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">📋 Message Report</div>
          <div class="dc-desc">• <strong>Tone:</strong> hostile, escalating<br>• <strong>Likely breaks:</strong> rule 3 — personal attacks<br>• <strong>Pattern:</strong> third flare-up with the same member today<br>• <strong>Suggested:</strong> short timeout + a staff check-in</div>
          <div class="dc-foot">AI summary · reads ~20 messages of context</div>
          <div class="dc-btns"><span class="dc-btn grey">⚠️ Warn</span><span class="dc-btn grey">🔇 Timeout</span><span class="dc-btn red">👢 Kick</span><span class="dc-btn red">🔨 Ban</span></div>
        </div>
      </div>
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
  <details class="x"><summary>💎 Premium toolkit <span class="pp">Premium</span></summary><div class="b">🎭 Reaction roles · ⌨️ custom <code>/commands</code> with live embeds · ❓ AI Q&amp;A from your FAQ · 🌐 translation · 🤝 AI mediator · 💾 backup &amp; restore · 🎨 white-label branding. Most set up from a one-screen wizard.</div></details>
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
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands">➕ Add to Discord</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore every feature</a>
</div>

<p style="text-align: center; color: var(--ink-soft); font-size: .88rem; margin-top: 1.5rem;">
  Server Assistant · <a href="{{ site.url }}{{ site.baseurl }}/features/">Features</a> · <a href="{{ site.url }}{{ site.baseurl }}/compare/">Compare</a> · <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> · <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">Roadmap</a> · <a href="{{ site.url }}{{ site.baseurl }}/support/">Support</a>
</p>
