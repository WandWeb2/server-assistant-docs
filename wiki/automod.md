---
layout: wiki
title: AutoMod
permalink: /wiki/automod/
wiki: true
wiki_category: "Settings & dashboards"
summary: The /automod dashboard — filter packs, AI review, self-training, custom filters, link blocks, the punishment ladder and spam thresholds. How community-type presets seed it, shown panel by panel as it appears in Discord.
wiki_keywords: [automod, automoderation, auto-moderation, filters, filter packs, ai review, self-train, self-training, custom filters, link blocklist, punishment ladder, spam, slurs, scams, presets, moderation]
description: Server Assistant's AutoMod dashboard, panel by panel — filter packs, AI second-opinion review, self-training, custom filters, link blocks, the punishment ladder and spam thresholds, plus how community-type presets seed it.
---

# 🤖 AutoMod

**AutoMod** is Server Assistant's automatic message filter. It watches your
channels and quietly acts on scams, slurs, spam and dodgy links — so your team
isn't firefighting every bad message by hand. You decide how strict it is, and
nothing acts that you haven't switched on.

When you first set the bot up, AutoMod is **seeded from your community type**: the
[setup wizard]({{ '/wiki/setup/' | relative_url }}) presets the filter packs,
punishment ladder and anti-raid sensitivity to match a Gaming, Creator, Anime,
Crypto, Education, NSFW or General community. This page is where you fine-tune all
of it after the fact.

> **Who can configure:** an **admin** role. Some panels — **AI Review** in
> particular — need <span class="wiki-prem">PREMIUM</span>.

## The `/automod` command

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/automod</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Open the AutoMod dashboard — one panel with every filter, list and threshold. Admins only; everything is done with buttons.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3" style="color:var(--fg-2)">No arguments — the dashboard is fully interactive.</td></tr>
  </table>
  <div class="dc">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🤖 AutoMod Configuration</div>
        <div class="dc-desc">Filters, lists and thresholds — all in one place.</div>
        <div class="dc-fname">Status</div><div class="dc-fval">✅ Enabled</div>
        <div class="dc-fname">Active filter packs</div><div class="dc-fval">scams, slurs_l1, ip_grabbers</div>
        <div class="dc-fname">Custom filters · Link blocks</div><div class="dc-fval">2 · 1</div>
        <div class="dc-fname">Max mentions · Anti-spam</div><div class="dc-fval">6 · ✅</div>
        <div class="dc-fname">AI review (Premium)</div><div class="dc-fval">❌ off</div>
        <div class="dc-btns">
          <span class="dc-btn blurple">🔘 Toggle on/off</span>
          <span class="dc-btn grey">📦 Filter Packs</span>
          <span class="dc-btn grey">✏️ Custom Filters</span>
        </div>
        <div class="dc-btns">
          <span class="dc-btn grey">🔗 Link Blocks</span>
          <span class="dc-btn grey">🪜 Punishment Ladder</span>
          <span class="dc-btn grey">🚦 Spam Settings</span>
        </div>
        <div class="dc-btns">
          <span class="dc-btn grey">🧠 Self-training</span>
          <span class="dc-btn grey">🤔 AI Review</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

The top of the dashboard is a live summary — whether AutoMod is on, which packs
are active, your custom filter and link-block counts, the mention limit, anti-spam
status and AI review. Every button below opens one of the panels you can step
through next.

## Step through every panel

Use **Next ›** and **‹ Back** to walk each AutoMod panel, including the forms
that open from them.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">📦 Filter Packs</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="📦 Filter Packs">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">📦 AutoMod Filter Packs</div>
          <div class="dc-desc">Curated rule packs — turn on as many as you like. <strong>Recommended for gaming:</strong> <code>scams</code> + <code>slurs_l1</code> + <code>ip_grabbers</code>.</div>
          <div class="dc-fname">scams</div><div class="dc-fval">Free Nitro, Steam gift, fake giveaways, mass-ping scams, char spam, foreign invites</div>
          <div class="dc-fname">slurs_l1</div><div class="dc-fval">Slurs only — casual profanity not filtered (recommended)</div>
          <div class="dc-fname">slurs_l2 · profanity_l3</div><div class="dc-fval">+ targeted harassment · all profanity (high false-positive risk)</div>
          <div class="dc-fname">ip_grabbers · lexicon</div><div class="dc-fval">IP-logging link blocks · broad community word list</div>
          <div class="dc-select">Pick which packs to enable…</div>
          <div class="dc-btns"><span class="dc-btn grey">← Back</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Filter Packs.</strong> Tick the ready-made packs you want — several can run at once. <code>scams</code> blocks the usual Free-Nitro and gift-card scams; <code>slurs_l1</code> catches slurs while leaving everyday swearing alone; <code>slurs_l2</code> adds targeted harassment; <code>profanity_l3</code> filters all casual swearing (warned as high false-positive); <code>ip_grabbers</code> blocks IP-logging links; and <code>lexicon</code> is a broad community word list, refreshed daily.</p>
  </div>

  <div class="wiz-step" data-step="🤔 AI Review">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">🤔 AutoMod AI second-opinion</div>
          <div class="dc-desc">Borderline word-filter and spam hits get a quick AI confidence check. Hits <strong>at or above</strong> your threshold act automatically; anything <strong>below</strong> is left up and posted to staff for a one-tap decision. High-confidence hits (links, mention spam) always act immediately.</div>
          <div class="dc-fname">Status</div><div class="dc-fval">⚪ Off · ⚠️ needs Premium</div>
          <div class="dc-fname">Auto-action threshold</div><div class="dc-fval">70/100</div>
          <div class="dc-foot">✨ Premium. Only borderline messages are checked, so token use stays low.</div>
          <div class="dc-btns">
            <span class="dc-btn blurple">🔁 Toggle on/off</span>
            <span class="dc-btn grey">🎚️ Set threshold</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>AI Review</strong> <span class="wiki-prem">PREMIUM</span>. A second opinion for the grey-area hits. When a word filter or spam check is unsure, the bot asks the AI for a confidence score: if it lands at or above your threshold it acts automatically; below that, the message stays up and your staff get a <strong>Delete &amp; warn</strong> / <strong>Allow</strong> prompt. Only borderline messages are ever sent for review, so token use stays low.</p>
  </div>

  <div class="wiz-step" data-step="🎚️ Set threshold (modal)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">AI auto-action threshold</div>
          <div class="dc-modal-sub">Hits at or above this score act automatically.</div>
          <div class="dc-flabel">Threshold (0–100)</div>
          <div class="dc-input ph">70</div>
          <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The threshold form.</strong> Opens from <strong>🎚️ Set threshold</strong>. Enter a number from 0 to 100. A higher number means the AI has to be more confident before it acts on its own — anything below the line is handed to your staff to decide.</p>
  </div>

  <div class="wiz-step" data-step="🧠 Self-training">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🧠 Self-trained AutoMod</div>
          <div class="dc-desc">The bot quietly learns from what your staff <strong>delete</strong> or <strong>flag</strong>, then proposes server-specific rules for your approval. <strong>Nothing is ever auto-enforced</strong> — you accept or reject each one.</div>
          <div class="dc-fname">Status</div><div class="dc-fval">🟢 Learning</div>
          <div class="dc-fname">Samples collected</div><div class="dc-fval">34 / 50 needed</div>
          <div class="dc-foot">🔒 Only message text is stored, locally, for 30 days. No author identities.</div>
          <div class="dc-btns">
            <span class="dc-btn blurple">🔁 Toggle learning on/off</span>
            <span class="dc-btn green">✨ Suggest rules now</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn red">🗑️ Clear learning log</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Self-training.</strong> With learning on, the bot remembers the <em>content</em> of messages your team deletes or flags via Message Report, then clusters the patterns and — when you press <strong>✨ Suggest rules now</strong> — proposes custom filters tailored to your server. Only message text is kept (locally, for 30 days, no author identities), and nothing is enforced until you accept it. <strong>🗑️ Clear learning log</strong> wipes the collected samples.</p>
  </div>

  <div class="wiz-step" data-step="🧠 Reviewing a proposal">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🧠 Proposed rule 1 of 3</div>
          <div class="dc-desc">Your staff keep removing repeated invite-link spam. This rule would catch it automatically.</div>
          <div class="dc-fname">Regex pattern</div>
          <div class="dc-code">(discord\.gg|discord\.com/invite)/\w+</div>
          <div class="dc-fname">Would have caught</div>
          <div class="dc-fval">• “join my server discord.gg/xyz”<br>• “discord.com/invite/abc free stuff”</div>
          <div class="dc-foot">Accept to add it to your custom filters, or Skip. Nothing is enforced until you accept.</div>
          <div class="dc-btns">
            <span class="dc-btn green">✅ Accept</span>
            <span class="dc-btn grey">⏭️ Skip</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Reviewing proposals.</strong> Pressing <strong>✨ Suggest rules now</strong> walks you through each proposed rule one at a time — the reason for it, the pattern it would use, and real examples it <em>would have caught</em>. <strong>✅ Accept</strong> adds it to your custom filters (live immediately, just like any custom filter); <strong>⏭️ Skip</strong> discards it. At the end you get a tally of how many were added and skipped.</p>
  </div>

  <div class="wiz-step" data-step="✏️ Custom Filters">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">✏️ Custom Filters</div>
          <div class="dc-desc">Your own patterns, on top of the curated packs.</div>
          <div class="dc-fname">2 custom filter(s)</div>
          <div class="dc-code">\bbadword\b</div>
          <div class="dc-code">spam\s*phrase</div>
          <div class="dc-select">Select filters to remove…</div>
          <div class="dc-btns">
            <span class="dc-btn green">➕ Add filter</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Custom Filters.</strong> Your own word/phrase patterns, on top of the curated packs. <strong>➕ Add filter</strong> opens a form for a regular-expression pattern (up to 200 characters). The bot checks it for you — invalid patterns, or ones that could hang on malicious input, are rejected with an explanation. The dropdown removes any you no longer want.</p>
  </div>

  <div class="wiz-step" data-step="✏️ Add filter (modal)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Add custom regex filter</div>
          <div class="dc-modal-sub">Messages matching this pattern get actioned.</div>
          <div class="dc-flabel">Regex pattern</div>
          <div class="dc-input ph">e.g.  \bbadword\b  or  spam\s*phrase</div>
          <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The custom filter form.</strong> Enter one pattern. If it isn't valid, or looks like it could be slow on crafted input, the bot tells you why and asks you to rewrite it — so a stray pattern can never wedge moderation.</p>
  </div>

  <div class="wiz-step" data-step="🔗 Link Blocks">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🔗 Custom Link Blocks</div>
          <div class="dc-desc">Domains to block on top of the built-in lists.</div>
          <div class="dc-fname">1 custom blocked link(s)</div>
          <div class="dc-fval">badsite.com</div>
          <div class="dc-select">Select links to remove…</div>
          <div class="dc-btns">
            <span class="dc-btn green">➕ Add link block</span>
            <span class="dc-btn grey">← Back</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Link Blocks.</strong> A blocklist of domains you never want posted, on top of the built-in IP-grabber and scam lists. <strong>➕ Add link block</strong> takes a domain (e.g. <code>badsite.com</code>) — paste a full URL and the bot strips it down to the domain for you. The dropdown removes entries.</p>
  </div>

  <div class="wiz-step" data-step="🪜 Punishment Ladder (modal)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Punishment ladder</div>
          <div class="dc-modal-sub">One step per line: count:action[:minutes]</div>
          <div class="dc-flabel">Steps</div>
          <div class="dc-input">3:timeout:10
5:timeout:60
10:ban</div>
          <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Punishment Ladder.</strong> Decides what happens as a member racks up warnings. Each line is <code>count:action[:minutes]</code> — for example <code>3:timeout:10</code> times someone out for 10 minutes at 3 warnings, then <code>5:timeout:60</code>, then <code>10:ban</code>. Actions are <code>timeout</code>, <code>kick</code>, <code>ban</code> or <code>warn</code>; the minutes are optional. The default ladder is exactly the one shown.</p>
  </div>

  <div class="wiz-step" data-step="🚦 Spam Settings (modal)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Spam thresholds</div>
          <div class="dc-modal-sub">Mention limits and repeat-message detection.</div>
          <div class="dc-flabel">Max mentions per message</div>
          <div class="dc-input ph">6</div>
          <div class="dc-flabel">Anti-spam (yes/no) — repeat-message detection</div>
          <div class="dc-input ph">yes</div>
          <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Spam Settings.</strong> Two quick controls: the <em>maximum mentions</em> allowed in a single message (anything over the limit is treated as mention spam), and an <em>anti-spam</em> toggle (<code>yes</code>/<code>no</code>) that catches the same message repeated over and over.</p>
  </div>
</div>

## How community-type presets seed AutoMod

You never start from a blank slate. When you run [`/setup`]({{ '/wiki/setup/' | relative_url }})
and pick your **community type**, the bot seeds AutoMod, the punishment ladder
and anti-raid to match — and even pre-guesses the type from your server's name and
description (defaulting to **General** if it's unsure, rather than guessing wrong).

| Community type | Filter packs | Ladder | Anti-raid |
| --- | --- | --- | --- |
| 🌐 General / mixed | Scams + IP-grabbers | Standard | Normal |
| 🎮 Gaming | Scams + IP-grabbers + slurs | Standard | Normal |
| 🎨 Creator / Streamer | Scams + IP-grabbers + slurs | Standard | Strict |
| 🌸 Anime / Fandom | Scams + IP-grabbers + slurs | Gentle | Normal |
| 💰 Crypto / Trading | Scams + IP-grabbers + slurs | Strict | Strict |
| 📚 Education / Study | Scams + IP-grabbers | Gentle | Normal |
| 🔞 NSFW / 18+ | Scams + IP-grabbers + slurs | Standard | Strict |
| 🛠️ Set it up myself | (nothing — tune it here) | — | — |

The three ladders are **Gentle** (5 → 10 → 20 warnings), **Standard**
(3 → 5 → 10) and **Strict** (2 → 3 → 5), each ending in a ban. Whatever the
preset sets, you can override any of it from this dashboard at any time.

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}) — where the community-type preset is chosen
- [Settings hub & configuration]({{ '/wiki/settings/' | relative_url }}) — Quick Presets and every other dashboard
- [Wiki home]({{ '/wiki/' | relative_url }}) — every command and flow
