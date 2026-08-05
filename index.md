---
layout: default
title: "Server Assistant: Discord Moderation & AutoMod Bot"
description: "Free Discord moderation bot: AutoMod, anti-raid, audit logs, ban appeals, a Minecraft to Discord bridge, and AI that watches your server's health and learns your team's judgment. Privacy-first."
image: /assets/SAllay-512.png
---

<link rel="stylesheet" href="{{ '/assets/css/landing.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<div class="sa-progress" aria-hidden="true"></div>

<div class="hero">
  <div class="hero-orbs" aria-hidden="true">
    <span class="hero-orb o1"></span><span class="hero-orb o2"></span><span class="hero-orb o3"></span><span class="hero-orb o4"></span>
  </div>
  <span class="hero-art">
    <img src="{{ '/assets/SAllay-512.png' | relative_url }}" alt="Server Assistant logo, an Allay wearing a knight's helmet" width="220" height="220" fetchpriority="high">
  </span>

  <h1>Server Assistant</h1>

  <p class="hero-pitch">Most Discord mod bots just react to messages.<br>This one understands your whole community.</p>
  <p class="hero-sub">Discord and Minecraft, moderated as one place · AutoMod that learns your team · fair ban appeals · a tamper-proof audit trail.</p>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Server Assistant",
  "applicationCategory": "Discord Bot",
  "operatingSystem": "Discord",
  "description": "A Discord moderation bot with a free two-way Minecraft bridge (MCDC): players chat across both worlds as themselves, live server health lands in Discord, and the same AutoMod covers chat, signs, books and private messages in game. ThreatNet, the cross-server threat network, flags raiders and scammers with corroborated history elsewhere, advisory by default. Reception gives new joiners a branded verification front desk with a free auto-generated banner. SAi, the AI assistant, answers across Discord and Minecraft with cited sources. Plus whole-server health digests, self-trained AutoMod, fair ban appeals, alt detection, anti-nuke, an encrypted tamper-proof audit trail, and honest plain-English AI budgeting with top-up packs.",
  "offers": { "@type": "AggregateOffer", "lowPrice": "0", "highPrice": "7", "priceCurrency": "USD", "offerCount": "3" },
  "url": "https://wandweb2.github.io/server-assistant-docs/",
  "image": "https://wandweb2.github.io/server-assistant-docs/assets/SAllay-512.png",
  "author": { "@type": "Organization", "name": "WandWeb2" }
}
</script>

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands"><svg class="dlogo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0C9.46 4.79 9.25 4.36 9.06 4.03A.07.07 0 0 0 9 4c-1.5.26-2.93.71-4.27 1.33a.06.06 0 0 0-.03.02C1.98 9.42 1.23 13.38 1.6 17.3a.1.1 0 0 0 .03.05c1.8 1.32 3.53 2.12 5.24 2.65a.07.07 0 0 0 .07-.02c.4-.55.76-1.13 1.07-1.74a.07.07 0 0 0-.04-.09 12.9 12.9 0 0 1-1.64-.78.07.07 0 0 1-.01-.11l.33-.25a.07.07 0 0 1 .07-.01c3.44 1.57 7.15 1.57 10.55 0a.07.07 0 0 1 .07.01l.33.26c.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78a.07.07 0 0 0-.04.09c.32.61.68 1.19 1.07 1.74a.07.07 0 0 0 .08.03c1.72-.53 3.45-1.33 5.25-2.65a.07.07 0 0 0 .03-.05c.44-4.53-.73-8.46-3.1-11.95a.05.05 0 0 0-.03-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"/></svg>Add to Discord</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/features/">Explore every feature</a>
</div>

<div class="subcta-row">
  <a class="subcta" href="{{ '/downloads/mcdc-plugin.jar' | relative_url }}" download><span class="si">⛏️</span> Download the MCDC plugin</a>
  <a class="subcta" href="{{ site.url }}{{ site.baseurl }}/crestbound-vision.html"><span class="si">🃏</span> Crestbound</a>
</div>

<p class="fleet-stats" id="fleet-stats" hidden></p>
<p class="fleet-stats threatnet-stat" id="threatnet-stat" hidden></p>

<script>
/* Live fleet numbers: fetches the relay's PUBLIC, aggregate-only endpoint and
   shows "Protecting N servers and M members" plus a "captured in ThreatNet"
   figure that links to the ThreatNet card. Both stay hidden (render nothing)
   if JS is off, the fetch fails, or the data is empty/zero: purely additive,
   never a broken or zero line. Aggregate totals only; no per-server detail. */
(function () {
  var box = document.getElementById("fleet-stats");
  var tnBox = document.getElementById("threatnet-stat");
  var API = "https://sa.wandweb.co/api/public/fleet-stats";
  fetch(API)
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (!d) return;
      var g = Number(d.guild_count) || 0;
      var m = Number(d.member_count) || 0;
      if (box && g > 0) {
        var gtxt = g.toLocaleString();
        var mtxt = m.toLocaleString();
        var parts = "Protecting <strong>" + gtxt + "</strong> server" + (g === 1 ? "" : "s");
        if (m > 0) parts += " and <strong>" + mtxt + "</strong> member" + (m === 1 ? "" : "s");
        box.innerHTML = parts;
        box.hidden = false;
      }
      var tn = Number(d.threatnet_captured) || 0;
      if (tnBox && tn > 0) {
        var ttxt = tn.toLocaleString();
        tnBox.innerHTML = '<a href="#threatnet"><strong>' + ttxt + '</strong> account' +
          (tn === 1 ? "" : "s") + ' captured in ThreatNet →</a>';
        tnBox.hidden = false;
      }
    })
    .catch(function () {});
})();
</script>

<p class="free-line">Free to start. The full moderation toolkit is free forever.</p>

---

<div class="partners-band">
  <h2 class="partners-band-title">Trusted by</h2>
  <div class="partners-logos">
    {% comment %} Partnership pending approval: restore this DiscordForge logo once confirmed:
    <a class="partner-logo-link" href="{{ site.url }}{{ site.baseurl }}/partnerships/" aria-label="Discord Forge" data-name="Discord Forge">
      <img src="{{ '/assets/partners/discordforge-icon.svg' | relative_url }}" alt="Discord Forge" width="84" height="84" loading="lazy">
    </a>
    {% endcomment %}
    <a class="partner-placeholder" href="{{ site.url }}{{ site.baseurl }}/partnerships/" aria-label="Partners">+</a>
    <!-- Future partners: add another <a class="partner-logo-link" …> block here. -->
  </div>
</div>

---

## What makes Server Assistant different

<p class="section-lead">Most bots are rule-runners: a message breaks a filter, the bot reacts. Server Assistant runs your whole community, Discord and Minecraft together, with an intelligence layer on top.</p>

<div class="sf-grid" data-stagger markdown="0">

  <div class="sf-card wide mcdc">
    <div class="mcdc-cols">
      <div>
        <div class="sf-ico">⛏️</div>
        <h3>Minecraft + Discord, one community <span class="sf-tag free">Free on every plan</span></h3>
        <p><strong>MCDC</strong> bridges your Minecraft server and Discord into a single place: players chat across both worlds <strong>as themselves</strong>, with their real name and skin avatar, and your moderation follows them everywhere.</p>
        <ul class="sf-bullets">
          <li><strong>Two-way chat</strong>, plus live server health in Discord: TPS, RAM, uptime, and who's online.</li>
          <li><strong>Playtime earns XP</strong> into the same balance as Discord activity.</li>
          <li><strong>Moderation on every surface players write on</strong>: chat, signs, books, anvils, name tags, private messages.</li>
          <li><strong>Web ban appeals</strong>, even for bans Server Assistant didn't issue.</li>
          <li><strong>One-click account linking</strong> and a self-updating plugin.</li>
        </ul>
        <p style="font-size:.84rem; margin-bottom:0;"><strong>Locked down by design:</strong> outbound HTTPS only, no RCON, no open ports, and no admin credentials ever leave your server.</p>
        <div class="sf-cta-row">
          <a class="sf-cta solid" href="{{ '/downloads/mcdc-plugin.jar' | relative_url }}" download>⬇ Download the plugin ({{ site.mcdc_plugin_version }})</a>
          <a class="sf-cta ghost" href="{{ '/wiki/minecraft/' | relative_url }}">Read the bridge guide →</a>
        </div>
      </div>
      <div>
        <div class="dc">
          <div class="dc-row"><div class="dc-av" style="background:linear-gradient(180deg,#7a5a3f 0 42%,#2ea44f 42% 100%); image-rendering:pixelated;" aria-hidden="true"></div><div class="dc-body">
            <div class="dc-head"><span class="dc-name">FernGully</span><span class="dc-time">#minecraft · from the server</span></div>
            <div class="dc-desc">anyone up for the nether run tonight?</div>
          </div></div>
        </div>
        <div class="dc">
          <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
            <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#minecraft</span></div>
            <div class="dc-embed green">
              <div class="dc-title">🟢 Server health</div>
              <div class="dc-fname">Online</div><div class="dc-fval">7 players · FernGully, Pixel_Petra, +5</div>
              <div class="dc-fname">Performance</div><div class="dc-fval">20.0 TPS · RAM 48% · up 6d 4h</div>
              <div class="dc-foot">Two-way bridge · shared XP · every surface moderated</div>
            </div>
          </div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="sf-card" id="threatnet">
    <div class="sf-ico">🛡️</div>
    <h3>ThreatNet <span class="sf-tag free">Free tier on by default</span></h3>
    <p>Our <strong>cross-server threat network</strong>: a raider or scammer with a serious, corroborated history on other protected servers lights up on yours <strong>before</strong> they strike. Advisory by default, and severity-only: never the offence, the reasons, or which server acted.</p>
    <details class="sf-more"><summary>How it works</summary><div class="sf-body">Servers contribute minimized, pseudonymous signals: counts, recency, and a generic severity level. The advisory band is free for every server; Premium adds the richer cross-server view and opt-in auto-protect at a threshold you choose. Individuals can opt out of profiling in the web portal, subject to a published safety exception; a Premium auto-protect ban is silent and stays contestable via the portal.</div></details>
  </div>

  <div class="sf-card">
    <div class="sf-ico">🛎️</div>
    <h3>Reception <span class="sf-tag free">Free</span></h3>
    <p>A <strong>branded verification front desk</strong> for new joiners, with a free auto-generated banner in your server's colours, a quick are-you-human check, and a <strong>self-healing honeypot</strong> that catches bots which post instead of verifying.</p>
    <details class="sf-more"><summary>How it works</summary><div class="sf-body">New members land at the Reception desk and tap <strong>Verify me</strong>; passing grants the verified role, and most automated raid bots never make it past the door. Premium adds an <strong>AI concierge</strong> that greets and helps newcomers at the desk.</div></details>
  </div>

  <div class="sf-card">
    <div class="sf-ico">✨</div>
    <h3>SAi, your AI assistant <span class="sf-tag premium">In-game: Premium</span></h3>
    <p>The same assistant across <strong>Discord and Minecraft</strong>. In game, <strong>@sai</strong> answers grounded in the real Minecraft wiki, with clickable citations, and a <strong>personal Allay companion</strong> answers privately at your side.</p>
    <details class="sf-more"><summary>How it works</summary><div class="sf-body">In the web portal, SAi reads your server's setup and applies improvements in one tap. In game (Premium), answers cite their minecraft.wiki sources so players can check them, and each server can give SAi its own persona: name, tone, attitude.</div></details>
  </div>

  <div class="sf-card">
    <div class="sf-ico">🔏</div>
    <h3>A mod toolkit that can't be tampered with <span class="sf-tag free">Free</span></h3>
    <p>Every action, even hand-made bans, lands in an <strong>encrypted audit log staff can't edit or erase</strong>, with the owner alerted if anyone tries. <strong>Anti-nuke</strong> guards the server itself, and the full moderation toolkit is free forever.</p>
    <details class="sf-more"><summary>What's in the box</summary><div class="sf-body">Warn / mute / kick / ban / tempban with tiered approval and 24-hour undo, AutoMod with an AI second-opinion that <strong>learns your team's judgment</strong>, anti-raid and lockdown, fair ban appeals with one-tap staff decisions, alt detection, and whole-server health digests. See <a href="{{ site.url }}{{ site.baseurl }}/features/">every feature</a>.</div></details>
  </div>

  <div class="sf-card">
    <div class="sf-ico">🧾</div>
    <h3>Honest AI budgeting <span class="sf-tag free">No surprises</span></h3>
    <p>A <strong>clear AI allowance</strong>, a <strong>plain-English usage breakdown</strong> of where every token went, and simple <strong>top-up packs</strong> when you want more. No meters you can't read, no invisible burn.</p>
    <details class="sf-more"><summary>How it works</summary><div class="sf-body">Check your balance any time, see usage split by feature in plain words, and top up only if you choose to. Word-filter AI checks run on a free moderation endpoint and never touch your allowance. Details on <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a>.</div></details>
  </div>

</div>

---

## What your staff actually sees

<p class="section-lead">The same intelligence, in the moments it matters. Each panel is a to-scale mock of a real message: the situation on one side, what the bot does on the other.</p>

<div class="frow c-amber">
  <div class="ftext">
    <h3>A regular suddenly turns hostile in #general</h3>
    <p>Third flare-up with the same member today. Instead of guessing, a moderator right-clicks the message → <strong>Message Report</strong>.</p>
    <details class="fmore"><summary>What the feature does</summary><div class="fbody"><strong>Message Report</strong> reads ~20 surrounding messages and returns a 3 to 5 bullet AI summary (tone, likely rule broken, escalation pattern, suggested action) with one-tap Warn / Timeout / Kick / Ban. The bot never auto-acts; staff always decide, and the action is logged with the report attached.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">right-click → Message Report</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">Message Report</div>
          <div class="dc-desc">• <strong>Tone:</strong> hostile, escalating<br>• <strong>Likely breaks:</strong> rule 3, personal attacks<br>• <strong>Pattern:</strong> third flare-up with the same member today<br>• <strong>Suggested:</strong> short timeout + a staff check-in</div>
          <div class="dc-foot">AI summary · reads ~20 messages of context</div>
          <div class="dc-btns"><span class="dc-btn grey">Warn</span><span class="dc-btn grey">Timeout</span><span class="dc-btn red">Kick</span><span class="dc-btn red">Ban</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow flip c-red">
  <div class="ftext">
    <h3>A day-old account drops a "free Nitro" link</h3>
    <p>Classic scam, posted while your team is asleep. AutoMod handles it before anyone sees it, and tells the user why.</p>
    <details class="fmore"><summary>What the feature does</summary><div class="fbody">Filter packs catch scams / slurs (IP-grabber domains preloaded); the message is removed and the user DM'd which rule fired plus their warning count. Staff are completely exempt, and repeat hits auto-escalate up your punishment ladder.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed red">
          <div class="dc-title">AutoMod · scam_link</div>
          <div class="dc-fname">User</div><div class="dc-fval">@newbie_4821 · account 19h old</div>
          <div class="dc-fname">Action</div><div class="dc-fval">Message deleted · auto-warning #1 · user DM'd</div>
          <div class="dc-code">join for free nitro discord-gift[.]ru/x</div>
          <div class="dc-foot">Logged · staff exempt · IP-grabbers preloaded</div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="frow c-blue">
  <div class="ftext">
    <h3>A mod tries to purge 200 messages</h3>
    <p>Powerful, irreversible, so it doesn't just run. The action routes <em>up</em> the chain for sign-off, and everything is logged.</p>
    <details class="fmore"><summary>What the feature does</summary><div class="fbody"><strong>Tiered approval</strong>: dangerous actions (like <code>/purge</code>) post an approval card to a higher tier. Only the Owner can approve an Admin's request. Once approved it executes and is written to your audit trail with the approver recorded. No rogue purges, no silent mass-deletes.</div></details>
  </div>
  <div class="fshot">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#staff-log</span></div>
        <div class="dc-embed">
          <div class="dc-title">Approval needed: /purge 200</div>
          <div class="dc-desc">@admin-jess wants to purge 200 messages in #general. This routes up a tier for sign-off.</div>
          <div class="dc-fname">Requested by</div><div class="dc-fval">@admin-jess (Admin)</div>
          <div class="dc-fname">Approver</div><div class="dc-fval">Owner only</div>
          <div class="dc-btns"><span class="dc-btn green">Approve</span><span class="dc-btn red">Deny</span></div>
        </div>
      </div></div>
    </div>
  </div>
</div>

<div class="shipped-strip">
  <strong class="lbl">Recently shipped</strong> &nbsp;·&nbsp;
  <span id="recently-shipped">New features ship continuously, see the changelog for the latest</span> &nbsp;·&nbsp;
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/">full changelog →</a>
</div>

<script>
/* ══════════════════════════════════════════════════════════════════════════
   CONSUMER of roadmap.md's Shipped band. See the matching warning next to
   `<details class="band-shipped" id="band-shipped">` in roadmap.md.

   This strip scrapes the LIVE /roadmap/ page at runtime, so it is coupled to
   that page's DOM across a repo-wide distance with nothing checking the join.
   The contract it depends on, and only this much:

     .band-shipped            the Shipped band, anywhere on the page
       .shipped-scroll        its scroll container, at any depth inside
         details.card         each shipped entry, at any depth inside that,
                              but NOT nested inside another details.card
           > summary          the entry's title
             .shipped-pill    the "Shipped vX.Y" chip, stripped from the label

   RENAME OR REMOVE ANY OF THOSE FOUR CLASS NAMES AND THIS SILENTLY REVERTS
   to the evergreen fallback text in #recently-shipped. There is no error, the
   fetch still succeeds, the home page just quietly stops showing what shipped.
   If you change roadmap.md's Shipped markup, change this selector in the same
   commit and load the home page to confirm the strip still populates.

   Structural tolerance: the descendant walk below is deliberate. The previous
   version used `.shipped-scroll > details.card`, a DIRECT-child combinator, so
   wrapping the cards in one <div> for layout would have broken it. Now any
   depth works, with an explicit guard so nested cards are not counted as
   top-level entries (which is what the direct-child version bought us).

   Same-origin fetch; degrades to the fallback text if JS is off or it fails. */
(function () {
  var box = document.getElementById("recently-shipped");
  if (!box) return;
  fetch("{{ site.url }}{{ site.baseurl }}/roadmap/")
    .then(function (r) { return r.ok ? r.text() : null; })
    .then(function (html) {
      if (!html) return;
      var doc = new DOMParser().parseFromString(html, "text/html");
      var scroll = doc.querySelector(".band-shipped .shipped-scroll");
      if (!scroll) return;                       // contract broken, keep fallback
      var cards = scroll.querySelectorAll("details.card > summary");
      var names = [];
      for (var i = 0; i < cards.length && names.length < 5; i++) {
        var card = cards[i].parentNode;
        // Only top-level entries. A card nested inside another card is detail,
        // not a release, and the old direct-child selector excluded it too.
        if (card.parentElement && card.parentElement.closest("details.card")) continue;
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

## The complete toolkit

<p class="section-lead">Everything below is in the box. The free tier is a <em>complete</em> moderation suite; Premium adds your server's own power tools.</p>

<div class="xgrid" data-stagger markdown="0">
  <details class="x"><summary>Full mod toolkit</summary><div class="b">warn · mute · kick · ban · softban · <code>/tempban</code> (timed, auto-unban) · one-command <code>/role</code> · <strong>tiered approval</strong> (dangerous actions route up the chain) · <strong>24-hour undo</strong>.</div></details>
  <details class="x"><summary>AutoMod engine</summary><div class="b">Filter packs (scams / slurs), <strong>custom regex</strong> with a safety check, link blocklist, anti-spam, and an auto-escalating punishment ladder. Staff are completely exempt.</div></details>
  <details class="x"><summary>Anti-raid &amp; lockdown</summary><div class="b">Always-on mass-join detection with staff alerts. <code>/lockdown</code> locks every channel in one command and restores the <strong>exact prior permissions</strong> when lifted.</div></details>
  <details class="x"><summary>Reception verification</summary><div class="b">An in-server Reception welcome desk with a Verify-me button and a quick human check, stopping most automated raid bots cold before they reach your channels.</div></details>
  <details class="x"><summary>Ticket Panels</summary><div class="b">Private in-server support tickets: a panel button opens a private channel with an intake form; a <code>.txt</code> transcript is saved on close. The bot can even create the channel for you.</div></details>
  <details class="x"><summary>AI extras</summary><div class="b"><code>/imagine</code> image generation · <code>/translate</code> · <code>/faq</code> Q&amp;A · right-click <strong>Message Report</strong> &amp; <strong>Translate</strong>. Use the host's key or bring your own.</div></details>
  <details class="x"><summary>Customisation Hub</summary><div class="b">Sub-wizards in <code>/settings</code>: branding, role tiers, punishment ladders, notifications and more. Everything saves instantly, no code. (Pulse lives in the web portal, not here.)</div></details>
  <details class="x"><summary>Premium toolkit</summary><div class="b">Reaction roles · custom <code>/commands</code> with live embeds · AI Q&amp;A from your FAQ · translation · AI mediator · backup &amp; restore · white-label branding. Most set up from a one-screen wizard.</div></details>
</div>

---

## Three ways to use it

<div class="ways-grid" data-stagger>
  <div class="way">
    <h3>Slash commands, anywhere</h3>
    <p>Every action works as a <code>/</code> command in any channel: <code>/warn</code>, <code>/mute</code>, <code>/ban</code>, <code>/tempban</code>, <code>/lockdown</code>, <code>/purge</code>…</p>
  </div>
  <div class="way">
    <h3>Text, in staff-chat</h3>
    <p>Natural-language shorthand: <code>warn @user</code>, <code>mute @user 30 min</code>, <code>purge since 1pm</code>.</p>
  </div>
  <div class="way">
    <h3>Right-click menus</h3>
    <p>Apps ▸ <strong>View Info</strong> / <strong>View Warnings</strong> on a user, or <strong>Message Report</strong> on a message for an AI summary.</p>
  </div>
</div>

<div class="upcoming-strip">
  <strong class="lbl">Coming up next</strong> &nbsp;·&nbsp;
  Your votes decide: feature polls land in your staff chat and the top picks ship first &nbsp;·&nbsp;
  <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">see the live roadmap →</a>
</div>

<div class="cta-row">
  <a class="cta cta-primary" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands"><svg class="dlogo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0C9.46 4.79 9.25 4.36 9.06 4.03A.07.07 0 0 0 9 4c-1.5.26-2.93.71-4.27 1.33a.06.06 0 0 0-.03.02C1.98 9.42 1.23 13.38 1.6 17.3a.1.1 0 0 0 .03.05c1.8 1.32 3.53 2.12 5.24 2.65a.07.07 0 0 0 .07-.02c.4-.55.76-1.13 1.07-1.74a.07.07 0 0 0-.04-.09 12.9 12.9 0 0 1-1.64-.78.07.07 0 0 1-.01-.11l.33-.25a.07.07 0 0 1 .07-.01c3.44 1.57 7.15 1.57 10.55 0a.07.07 0 0 1 .07.01l.33.26c.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78a.07.07 0 0 0-.04.09c.32.61.68 1.19 1.07 1.74a.07.07 0 0 0 .08.03c1.72-.53 3.45-1.33 5.25-2.65a.07.07 0 0 0 .03-.05c.44-4.53-.73-8.46-3.1-11.95a.05.05 0 0 0-.03-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"/></svg>Add to Discord</a>
  <a class="cta cta-secondary" href="{{ site.url }}{{ site.baseurl }}/features/">Explore every feature</a>
</div>

<p style="text-align: center; color: var(--ink-soft); font-size: .88rem; margin-top: 1.5rem;">
  Server Assistant · <a href="{{ site.url }}{{ site.baseurl }}/features/">Features</a> · <a href="{{ site.url }}{{ site.baseurl }}/crestbound-vision.html">Crestbound&nbsp;Vision</a> · <a href="{{ site.url }}{{ site.baseurl }}/compare/">Compare</a> · <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> · <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">Roadmap</a> · <a href="{{ site.url }}{{ site.baseurl }}/support/">Support</a>
</p>

<script src="{{ '/assets/js/landing.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
