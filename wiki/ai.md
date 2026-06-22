---
layout: wiki
title: "AI & intelligence"
permalink: /wiki/ai/
wiki: true
wiki_category: "AI & intelligence"
summary: Server Assistant's AI toolkit — tune the bot in plain English with /sai, generate images with /imagine, translate on the spot, run a neutral /mediate between members, get a weekly mod retrospective, and read your server stats. Each shown exactly as it appears in Discord.
wiki_keywords: [ai, sai, concierge, imagine, img, image generation, translate, translation, mediate, mediation, retro, retrospective, stats, statistics, premium, byok]
description: A full reference for Server Assistant's AI and intelligence commands, each shown one state at a time exactly as it appears in Discord.
---

# 🤖 AI &amp; intelligence

These are the clever bits — the commands that lean on AI to help you run your
server. Ask the bot to tune itself in plain English, conjure up an image from a
prompt, translate a message in a tap, sit two members down for a calm chat, or
get a weekly read-out on how your mod team is doing.

How AI is powered depends on your plan. Every server gets a **free trial
allowance** to try the AI features out of the box. After that you can either
**bring your own key** (BYOK) — paste a provider key during `/setup` or with
`/ai-config`, and your server runs on your own account with no trial limit — or go
**Premium** for the full set without managing a key yourself. The rest is handled
behind the scenes; see the [pricing page]({{ '/pricing/' | relative_url }}) for
what's included on each plan.

> **Who can run these:** most AI commands are **owner- or staff-only** and check
> your role before acting. Where a command is Premium, the bot tells you politely
> if your plan doesn't include it.

Commands are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs a Premium plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission &nbsp;·&nbsp;
<span class="cmd-tag ai">AI</span> uses AI

---

## Tune the bot in plain English {#sai}

`/sai` is your in-server concierge. Ask it anything about how your server is set
up — "why did that message get flagged?", "make AutoMod a bit stricter", "how are
we doing this week?" — and it answers from your server's own activity. If you're
the **owner**, it can also suggest concrete config changes and apply them with a
single tap. Admins get the same insights in a read-only view.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/sai</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Ask the bot about your server in plain English. The owner gets answers plus one-tap suggested changes; admins get the same insights, read-only. The reply is private to you (ephemeral).</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>question</code> <span class="req">required</span></td><td>text</td><td>What you'd like help with — a question or an instruction.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/sai</span> <span class="arg">question:</span> Things feel noisy — can we tighten up spam filtering a bit?</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">💬 SAi — owner · full access</div>
        <div class="dc-desc">You've had a run of repeated-link spam in #general this week. I can raise AutoMod's sensitivity a notch and add a short slowmode — here's what I'd change.</div>
        <div class="dc-fname">📋 Suggested changes</div>
        <div class="dc-fval">• <strong>AutoMod sensitivity</strong> → High <em>(more aggressive spam catching)</em><br>• <strong>#general slowmode</strong> → 5s <em>(slows repeat posters)</em></div>
        <div class="dc-btns">
          <span class="dc-btn green">✅ Apply change(s)</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">
The header tells you which mode you're in — <code>owner · full access</code> or
<code>admin · read-only</code>. As the owner you can press <strong>✅ Apply
change(s)</strong> to put the suggestions live in one tap; admins see the same
analysis without the button. If your question is really one for the team, the bot
notes it's been logged for them.</p>

---

## Generate an image {#imagine}

`/imagine` turns a text prompt into a picture, posted right in the channel. There's
a short cooldown between generations on the free trial; Premium servers skip it.
`/img` is just a shorter alias for the same command.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/imagine</span> &amp; <span class="cmd-name">/img</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Generate an image from a text prompt and post it in the channel. <code>/img</code> is an alias for <code>/imagine</code>. A short cooldown applies on the free trial; Premium removes it.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>prompt</code> <span class="req">required</span></td><td>text</td><td>Describe what you'd like to see (up to 1000 characters).</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/imagine</span> <span class="arg">prompt:</span> a cosy cabin in a snowy pine forest at dusk, warm light in the windows</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🎨 Imagined</div>
        <div class="dc-desc"><strong>Prompt:</strong> a cosy cabin in a snowy pine forest at dusk, warm light in the windows</div>
        <div class="dc-fval" style="margin-top:.4rem;"><em>🖼️ &lt;your generated image appears here&gt;</em></div>
        <div class="dc-foot">via pollinations · requested by @you</div>
      </div>
    </div></div>
  </div>
</div>

### Choosing where images come from

By default `/imagine` uses a **free image service** (Pollinations), so it works
with no setup. If you'd rather use your own provider — for higher-quality results
or your own billing — the server owner can set one up under `/ai-config`. That
opens this short form:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
    <div class="dc-modal">
      <div class="dc-modal-title">Image generation provider</div>
      <div class="dc-modal-sub">Pick a provider and, if it needs one, paste your key.</div>
      <div class="dc-flabel">Provider</div>
      <div class="dc-input ph">openai / stability / pollinations (free)</div>
      <div class="dc-flabel">API key</div>
      <div class="dc-input ph">leave blank for free Pollinations</div>
      <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">
Choose <code>openai</code>, <code>stability</code> or <code>pollinations</code>.
The free Pollinations option needs no key at all — just leave the key field blank.
The image's footer always shows which provider produced it.</p>

---

## Translate {#translate}

`/translate` renders any text into the language you want, replied privately so it
doesn't clutter the channel. Leave the language out and it uses your own Discord
language.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/translate</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Translate text into a target language. The reply is private to you (ephemeral).</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>text</code> <span class="req">required</span></td><td>text</td><td>The text to translate (up to 1500 characters).</td></tr>
    <tr><td><code>language</code> <span class="opt">optional</span></td><td>text</td><td>Target language, e.g. Spanish, Japanese. Defaults to your own Discord language.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/translate</span> <span class="arg">text:</span> Where is the nearest station? <span class="arg">language:</span> Japanese</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-body" style="padding:0;">🌐 <strong>Japanese:</strong><br>一番近い駅はどこですか？</div>
    </div></div>
  </div>
</div>

### The “Translate” right-click shortcut

You don't even need to retype a message to translate it. Right-click (or
long-press) any message, open **Apps → Translate**, and the bot translates it into
*your* Discord language, replied privately. Same Premium feature, no typing.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
    <div class="dc-body" style="padding:0;">🌐 <strong>English:</strong><br>Where is the nearest station?</div>
  </div></div>
</div>

---

## Mediate a dispute {#mediate}

When two members are at odds, `/mediate` steps in as a calm, neutral go-between. It
DMs each person separately to hear their side, then posts a **neutral summary** to
the channel for your team. It never takes sides, assigns blame, or recommends a
punishment — it just helps everyone see the disagreement clearly.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/mediate</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Open a guided mediation between two members. Pick the two people, optionally add a topic, and the bot collects each side privately before posting a neutral staff summary.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3">No typed arguments — you choose the two members from dropdowns in the panel that opens.</td></tr>
  </table>
</div>

Running `/mediate` opens a small private panel. Step through it below.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">Setting up a mediation</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="Pick the two members">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed" style="border-left-color:#9b59b6;">
          <div class="dc-title">🤝 Mediation</div>
          <div class="dc-desc">Choose the two members. The bot will DM each one, collect their side privately, and post a <strong>neutral summary</strong> here. It never takes sides or recommends punishment.</div>
          <div class="dc-select">First member…</div>
          <div class="dc-select">Second member…</div>
          <div class="dc-btns">
            <span class="dc-btn grey">📝 Topic</span>
            <span class="dc-btn green">▶️ Start mediation</span>
            <span class="dc-btn grey">Cancel</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Who's involved.</strong> Two member dropdowns — pick one person in each. They must be two different, real members of your server (not bots).</p>
  </div>

  <div class="wiz-step" data-step="Add a topic (optional)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Mediation topic</div>
          <div class="dc-modal-sub">A line of context helps the bot frame things — entirely optional.</div>
          <div class="dc-flabel">What's it about? (optional)</div>
          <div class="dc-input ph">e.g. a disagreement over event scheduling in #events</div>
          <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Optional context.</strong> Tapping <strong>📝 Topic</strong> opens this short form. Add a sentence about what the dispute is over (up to 300 characters) or skip it — the mediation works either way.</p>
  </div>

  <div class="wiz-step" data-step="The bot collects each side">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed" style="border-left-color:#9b59b6;">
          <div class="dc-title">🤝 A quick, private chat</div>
          <div class="dc-desc">A member of staff has asked me to help sort out a disagreement. In your own words, what happened from your side? Nothing you say here is shared word-for-word — I'll only summarise it neutrally for the team.</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Each side, in private.</strong> After you press <strong>▶️ Start mediation</strong>, the bot DMs both members and asks each for their version, privately. Neither sees the other's reply.</p>
  </div>

  <div class="wiz-step" data-step="The neutral summary">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
        <div class="dc-embed" style="border-left-color:#9b59b6;">
          <div class="dc-title">🤝 Mediation summary</div>
          <div class="dc-desc">Both members have shared their side. Here's a neutral read for the team — no blame, no recommended action.</div>
          <div class="dc-fname">The core disagreement</div><div class="dc-fval">A mix-up over who agreed to host this week's event.</div>
          <div class="dc-fname">Each side</div><div class="dc-fval">One felt the slot was already theirs; the other thought it was still open.</div>
          <div class="dc-fname">Common ground</div><div class="dc-fval">Both want the event to run and are happy to share hosting.</div>
          <div class="dc-fname">Ways to de-escalate</div><div class="dc-fval">• Agree a clear sign-up for future slots.<br>• Co-host this one as a one-off.</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>A read for the team.</strong> Once both have replied, the bot posts this summary in the channel: the core disagreement, each side's position, any common ground, and a couple of gentle de-escalation options. It stays strictly neutral — the next step is always yours.</p>
  </div>
</div>

---

## Weekly mod-team retrospective {#retro}

`/retro` pulls together the last seven days of moderation activity into a single
read-out for your team — how many cases were handled, the trend versus last week,
who was busiest, and (if AI is on) a short note on patterns worth discussing. Handy
for a weekly staff catch-up.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/retro</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Post a retrospective of the last 7 days of moderation to your staff chat. Staff-only. The AI narrative is added when AI is enabled; without it you still get the figures.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3">No arguments — covers the last 7 days automatically.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/retro</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed" style="border-left-color:#9b59b6;">
        <div class="dc-title">🧭 Mod Team Retrospective</div>
        <div class="dc-desc">My Server — last 7 days (2026-06-15 → 2026-06-22)</div>
        <div class="dc-fname">Cases handled</div><div class="dc-fval">23 &nbsp;<span style="color:#949ba4">▲ +5 vs last week</span></div>
        <div class="dc-fname">New warnings</div><div class="dc-fval">9</div>
        <div class="dc-fname">By action</div><div class="dc-fval">warn ×9 · mute ×7 · kick ×4 · ban ×3</div>
        <div class="dc-fname">Most active</div><div class="dc-fval">@mod · @helper · @you</div>
        <div class="dc-fname">🔎 Retro</div><div class="dc-fval"><strong>Notable patterns</strong> — spam links spiked midweek in #general.<br><strong>Worth discussing</strong> — whether to add a short slowmode there.</div>
        <div class="dc-foot">Weekly mod retro · toggle in /settings → Behaviour</div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">
The retro lands in your staff chat if one's set up, otherwise it replies privately
to you. A quiet week with no logged actions simply says so. You can turn the weekly
retro on or off under <code>/settings → Behaviour</code>.</p>

---

## Server statistics {#stats}

A quick snapshot of your server — members, channels, roles, boosts and more — at a
glance. No AI, no plan needed.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/stats</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Show a snapshot of your server's key numbers. Staff-only. The reply is private to you (ephemeral).</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3">No arguments — reports on the current server.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/stats</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed green">
        <div class="dc-title">Server Stats: My Server</div>
        <div class="dc-fname">Members</div><div class="dc-fval">1,284</div>
        <div class="dc-fname">Channels</div><div class="dc-fval">42</div>
        <div class="dc-fname">Roles</div><div class="dc-fval">18</div>
        <div class="dc-fname">Boosts</div><div class="dc-fval">7</div>
        <div class="dc-fname">Owner</div><div class="dc-fval">@owner</div>
        <div class="dc-fname">Created</div><div class="dc-fval">2021-03-08</div>
      </div>
    </div></div>
  </div>
</div>

---

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}) — choose your AI path (free trial, your own key, or skip) in about a minute
- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}) — including Smart purge, which uses AI to clean up only the problematic messages
- [Pricing]({{ '/pricing/' | relative_url }}) — what's included on the free trial, BYOK and Premium
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
