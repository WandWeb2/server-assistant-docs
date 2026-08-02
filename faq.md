---
layout: default
title: Server Assistant FAQ
permalink: /faq/
description: Frequently asked questions about Server Assistant.
---

# Server Assistant: Frequently Asked Questions

<style>
/* Category headings are real <h2>s so the page has a heading outline and each
   category is linkable from the jump nav above. The `.page-content` prefix is
   load-bearing: glass.css loads after this block and its `.page-content h2`
   rule (margin-top 1.8rem, padding-top .4rem) would otherwise win and reopen
   a gap between each heading and its questions. */
.page-content .faq-cat-heading { margin: 1.6rem 0 0.6rem; padding-top: 0; font-size: 1.15rem; font-weight: 700; color: var(--ink); scroll-margin-top: 80px; }
details.faq { background: rgba(255,255,255,0.04); border: 1px solid var(--glass-border); border-radius: 12px; margin: 0.45rem 0; transition: background .15s; }
details.faq[open] { background: rgba(255,255,255,0.07); }
details.faq > summary { cursor: pointer; padding: .8rem 1.1rem; font-weight: 600; font-size: .98rem; list-style: none; color: var(--ink); }
details.faq > summary::-webkit-details-marker { display: none; }
details.faq > summary::after { content: '⌄'; float: right; color: var(--ink-soft); font-size: 1.15rem; line-height: 1; transition: transform .2s; }
details.faq[open] > summary::after { transform: rotate(180deg); }
details.faq .faq-body { padding: 0 1.1rem 1rem; font-size: .92rem; line-height: 1.55; color: var(--ink-soft); }
details.faq .faq-body code { color: var(--accent); }
details.faq .faq-body p:first-child { margin-top: 0; }
details.faq .faq-body p:last-child, details.faq .faq-body ul:last-child { margin-bottom: 0; }
details.faq .faq-body table { margin: .5rem 0; }
</style>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the bot free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The full moderation toolkit is free forever, no card, no catch. Core moderation, AutoMod, anti-raid, DM verification, audit logs, warnings, the Customisation Hub, and zero-touch /autopilot setup never cost a thing. The AI features (SAi, Message Report, Self-trained AutoMod, Pulse) include a 150,000-token free trial; after that, Premium is $7 USD/month, but you're only charged once your trial tokens run out, so light-use servers may never pay. Premium BYOK (bring your own AI key) is $3 USD/month."
      }
    },
    {
      "@type": "Question",
      "name": "How do I add the bot to my server?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll need the Manage Server permission. Use the invite link, or find Server Assistant on Top.gg or discordbotlist.com. After authorising, the server owner or any admin with Manage Server runs /setup, and whoever invited the bot is DM'd the setup wizard automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Who can run /setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The server owner or any admin with the Manage Server permission can run /setup, the same permission Discord requires to add the bot in the first place, so whoever installed it can finish onboarding without waiting on the owner. The role-to-tier mapping still gates the genuinely dangerous actions, so opening setup to Manage Server admins is safe."
      }
    },
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "About 60 seconds, and you may not even need to run /setup: when the bot joins it DMs the owner the setup wizard, pre-filled, ready to finish in DMs. The bot auto-detects your channels and roles so you mostly just confirm channels, roles, then a server-type + AI step. /autopilot opens the very same wizard with every step already pre-filled, and /settings opens optional panels to fine-tune anything afterwards."
      }
    },
    {
      "@type": "Question",
      "name": "Can mods action higher-ranked users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The bot enforces Discord's role hierarchy: a mod can't action anyone whose role is at or above their own. The owner can action anyone except other owners."
      }
    },
    {
      "@type": "Question",
      "name": "How does the punishment ladder work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repeated AutoMod violations auto-escalate. The Standard preset defaults to a 10-minute timeout at 3 auto-warnings, a 1-hour timeout at 5, and a ban at 10. Only AutoMod-issued warnings count toward escalation; manual staff warnings are tracked separately. Change it via /settings → Quick Presets → Punishment Ladder (Gentle 5/10/20, Standard 3/5/10, Strict 2/3/5)."
      }
    },
    {
      "@type": "Question",
      "name": "Will AutoMod break legitimate conversation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Filter packs use word boundaries to avoid the Scunthorpe problem: words like assassin, classic and Scunthorpe don't trigger. The default 'Scams + slurs (gaming)' preset deliberately allows casual profanity. Strict mode adds it with higher false-positive risk. Use only for child-friendly servers."
      }
    },
    {
      "@type": "Question",
      "name": "Does AutoMod scan staff messages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Staff are completely exempt regardless of tier. Staff means anyone holding a role mapped via /setup or /settings → Role Tiers."
      }
    },
    {
      "@type": "Question",
      "name": "How does verification work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enable it in /settings → Verification. New members are met at Reception, an in-server welcome desk with a banner, a greeting and a Verify me button. Tapping it opens a quick are-you-human check; pass and they're granted the configured verified role a moment later, which gates channels via Discord's role permissions. A wrong answer is a friendly retry, never a ban. To set up the gated channels without editing permissions by hand, use the Auto-configure channels button in the same Verification panel: it proposes which channels stay visible to unverified members (reception, rules, system, announcements), lets you keep extra ones visible, then on Apply hides everything else and opens it to your verified role, with a one-tap Undo. It needs a verified role set and the bot to have Manage Channels and Manage Roles."
      }
    },
    {
      "@type": "Question",
      "name": "Are AI features free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The free tier includes a 150,000-token lifetime allowance, enough to evaluate every AI feature. Core moderation (AutoMod, anti-raid, warnings, slash commands) is always free regardless of token usage. When your trial tokens run out, Premium ($7 USD/month) gives 750K tokens/month, with your card only charged when tokens deplete. Or bring your own Anthropic/xAI/OpenAI key via /ai-config for Premium BYOK at $3/month."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be charged when I subscribe to Premium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not immediately. On subscribing to Premium ($7/month) your card is saved but not charged. Billing starts only when your 150K free tokens are fully used: light-use servers may never hit that limit and never pay despite being subscribed. Premium BYOK ($3/month) is charged immediately on subscribe, since you're paying for feature access rather than tokens."
      }
    },
    {
      "@type": "Question",
      "name": "What data is sent to the AI provider?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only what's needed for the request. Message Report sends about 20 messages of context; SAi sends your question plus your server's settings and a recent event summary; /imagine sends just your text prompt. No user metadata, IDs, or persistent identifiers are transmitted. Full details are in the Privacy Policy."
      }
    },
    {
      "@type": "Question",
      "name": "What AI model powers the bot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The default shared key uses Anthropic Claude (Sonnet) for all AI features: SAi, Message Report, Self-trained AutoMod proposals, and Bot Health Insurance checks. Supply your own key via /ai-config to choose Anthropic, xAI Grok, or OpenAI. Image generation (/imagine) runs on the shared service, with the free trial covering about 30 images and unlimited on Premium."
      }
    },
    {
      "@type": "Question",
      "name": "Can I disable AI entirely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes: /ai-config → Skip AI disables all AI features for your server, and /imagine and Message Report will decline gracefully. You can also use /privacy to disable individual AI features while keeping others active."
      }
    },
    {
      "@type": "Question",
      "name": "Where is data stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On the host's infrastructure, encrypted at rest. Per-server data is isolated. Full details are in the Privacy Policy."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to my data when I remove the bot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your encrypted secrets (your own AI keys etc.) are wiped immediately. Operational data (warnings, notes, audit log) is retained briefly in case you re-add the bot. You can request full manual deletion via /support."
      }
    },
    {
      "@type": "Question",
      "name": "Can I self-host?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Server Assistant is a fully managed, hosted bot. Invite it and configure everything in Discord; there's nothing to install or maintain on your end."
      }
    }
  ]
}
</script>

<nav class="page-toc" aria-label="FAQ categories" markdown="0">
  <span class="page-toc-label">Jump to</span>
  <a href="#faq-getting-started">Getting started</a>
  <a href="#faq-moderation">Moderation</a>
  <a href="#faq-automod">AutoMod</a>
  <a href="#faq-verification">Verification Gate</a>
  <a href="#faq-notifications">Notifications</a>
  <a href="#faq-ai">AI features</a>
  <a href="#faq-privacy">Data &amp; privacy</a>
  <a href="#faq-troubleshooting">Troubleshooting</a>
  <a href="#faq-community">Community</a>
</nav>

<h2 class="faq-cat-heading" id="faq-getting-started">Getting started</h2>

<details class="faq"><summary>Is the bot free?</summary>
<div class="faq-body">
<p><strong>The full moderation toolkit is free forever</strong>, no card, no catch. Core moderation, AutoMod, anti-raid, Reception verification, audit logs, warnings, the Customisation Hub, and <code>/autopilot</code> setup never cost a thing.</p>
<p>The <strong>AI features</strong> (SAi, Message Report, Self-trained AutoMod, Pulse) include a <strong>150,000-token free trial</strong>. After that, <strong>Premium ($7 USD/mo)</strong> keeps them going, but you're only charged once your trial tokens run out, so light-use servers may never pay. Got your own AI key? <strong>Premium BYOK is $3 USD/mo</strong>. See <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> for the full breakdown.</p>
</div>
</details>

<details class="faq"><summary>How do I add the bot to my server?</summary>
<div class="faq-body">
You'll need <strong>Manage Server</strong> permission. Use the <a href="{{ site.url }}{{ site.baseurl }}/wiki/setup/">invite link</a>, or find Server Assistant on <a href="https://top.gg/bot/1278486617375510570">Top.gg</a> or <a href="https://discordbotlist.com/bots/server-assistant">discordbotlist.com</a>. After authorising, the <strong>server owner or any admin with Manage&nbsp;Server</strong> runs <code>/setup</code>, and whoever invited the bot is DM'd the setup wizard automatically.
</div>
</details>

<details class="faq"><summary>Who can run <code>/setup</code>?</summary>
<div class="faq-body">
The <strong>server owner</strong> or <strong>any admin with the Manage&nbsp;Server permission</strong> can run <code>/setup</code>, the same permission Discord requires to add the bot in the first place, so whoever installed it can finish onboarding without waiting on the owner. <code>/setup</code> maps your roles to permission tiers; the role-to-tier mapping itself still gates the genuinely dangerous actions, so opening setup to Manage&nbsp;Server admins is safe while keeping the bot easy to get running.
</div>
</details>

<details class="faq"><summary>How long does setup take?</summary>
<div class="faq-body">
About 60 seconds, and you may not even need to run <code>/setup</code>: when the bot joins it <strong>DMs the owner the setup wizard</strong>, pre-filled, ready to finish in DMs. However you start it, the bot auto-detects your channels and roles so you mostly just confirm: <strong>channels</strong>, <strong>roles</strong>, then a <strong>server-type + AI</strong> step. The server-type picker tunes AutoMod, the punishment ladder, and anti-raid to your kind of community (Gaming, Creator, Crypto, Education, NSFW, General…). In a hurry, <code>/autopilot</code> does it all in one command. Then <code>/settings</code> opens nine optional panels to fine-tune anything from embed colour to the AutoMod ladder.
</div>
</details>

<h2 class="faq-cat-heading" id="faq-moderation">Moderation</h2>

<details class="faq"><summary>What happens to existing warnings if I re-run <code>/setup</code>?</summary>
<div class="faq-body">
Nothing. They're preserved. <code>/setup</code> only changes channel/role mappings and AI config. Warnings, notes, snippets, and audit logs are untouched.
</div>
</details>

<details class="faq"><summary>Can mods action higher-ranked users?</summary>
<div class="faq-body">
No. The bot enforces Discord's role hierarchy: a mod can't action anyone whose role is at or above their own. The owner can action anyone except other owners.
</div>
</details>

<details class="faq"><summary>Why does the bot say it can't ban someone?</summary>
<div class="faq-body">
Discord requires the <strong>bot's</strong> role to be higher than the target's highest role. Drag the bot's role up in <strong>Server Settings → Roles</strong>.
</div>
</details>

<details class="faq"><summary>Can I undo a ban?</summary>
<div class="faq-body">
Yes, within 24 hours. Press the <strong>Undo</strong> button on the action's confirmation message to reverse your most recent reversible action: bans, mutes, channel deletions, nickname changes.
</div>
</details>

<details class="faq"><summary>Are warnings public or private?</summary>
<div class="faq-body">
<strong>Private to staff.</strong> The user gets a DM when warned, but there's no public-facing list. Use <strong>notes</strong> for purely internal observations that aren't formal warnings.
</div>
</details>

<details class="faq"><summary>How does the punishment ladder work?</summary>
<div class="faq-body">
<p>Repeated AutoMod violations auto-escalate. Defaults (Standard preset):</p>
<table><thead><tr><th>Auto-warnings</th><th>Action</th></tr></thead>
<tbody><tr><td>3</td><td>10-minute timeout</td></tr><tr><td>5</td><td>1-hour timeout</td></tr><tr><td>10</td><td>Ban</td></tr></tbody></table>
<p>Only <strong>AutoMod-issued</strong> warnings count toward escalation; manual staff warnings are tracked separately. Change via <code>/settings → Quick Presets → Punishment Ladder</code> (Gentle 5/10/20 · Standard 3/5/10 · Strict 2/3/5).</p>
</div>
</details>

<h2 class="faq-cat-heading" id="faq-automod">AutoMod</h2>

<details class="faq"><summary>Will AutoMod break legitimate conversation?</summary>
<div class="faq-body">
Filter packs use word boundaries to avoid the <a href="https://en.wikipedia.org/wiki/Scunthorpe_problem">Scunthorpe problem</a>: <em>assassin</em>, <em>classic</em>, <em>Scunthorpe</em> don't trigger. The default "Scams + slurs (gaming)" preset deliberately allows casual profanity. Strict mode adds it with higher false-positive risk. Use only for child-friendly servers.
</div>
</details>

<details class="faq"><summary>Can I add my own filters?</summary>
<div class="faq-body">
Yes. <code>/automod → Add Filter</code> for custom regex (validated; catastrophic-backtracking patterns auto-rejected). Add domains to the link blocklist for phishing sites.
</div>
</details>

<details class="faq"><summary>Does AutoMod scan staff messages?</summary>
<div class="faq-body">
<strong>No.</strong> Staff are completely exempt regardless of tier. Staff = anyone holding a role mapped via <code>/setup</code> or <code>/settings → Role Tiers</code>.
</div>
</details>

<details class="faq"><summary>What's the difference between an AutoMod warning and a manual warning?</summary>
<div class="faq-body">
Both go on the record. Only <strong>AutoMod warnings</strong> count toward escalation thresholds (the punishment ladder). The audit log distinguishes the source.
</div>
</details>

<details class="faq"><summary>Does the bot tell the user when AutoMod removes their message?</summary>
<div class="faq-body">
Yes: DM explaining which rule fired and their warning count. If their DMs are closed, the skip is logged but removal + warning still go through.
</div>
</details>

<h2 class="faq-cat-heading" id="faq-verification">Verification Gate</h2>

<details class="faq"><summary>How does verification work?</summary>
<div class="faq-body">
<p>Enable in <code>/settings → Verification</code>. New members are met at <strong>Reception</strong>, an in-server welcome desk with a banner, a greeting and a <strong>Verify me</strong> button. Tapping it opens a quick are-you-human check; pass and they're granted the configured verified role a moment later, which gates channels via Discord's role permissions. A wrong answer is just a friendly retry, never a ban.</p>
<p>To set up those gated channels without editing permissions by hand, use the <strong>Auto-configure channels</strong> button in the same Verification panel: it proposes which channels stay visible to unverified members (your reception, rules, system and announcements channels), lets you keep extra ones visible, then on Apply hides everything else and opens it to your verified role. There's a one-tap <strong>Undo</strong>. It needs a verified role set and the bot to have <strong>Manage Channels</strong> + <strong>Manage Roles</strong>.</p>
</div>
</details>

<details class="faq"><summary>What if someone posts instead of verifying?</summary>
<div class="faq-body">
Reception doubles as a honeypot: verifying is the only thing to do there. An unverified account that posts instead is removed automatically; brand-new, untrusted accounts are banned outright, and the trap tightens during a raid.
</div>
</details>

<details class="faq"><summary>Can I customise the Reception desk?</summary>
<div class="faq-body">
Yes. On every plan you can word the greeting yourself. <strong>Premium</strong> adds a generated or uploaded banner image and a custom receptionist name and persona, plus a concierge verified members can chat with at the desk.
</div>
</details>

<h2 class="faq-cat-heading" id="faq-notifications">Notifications</h2>

<details class="faq"><summary>How do I get pinged when AutoMod or anti-raid fires?</summary>
<div class="faq-body">
<p><code>/settings → Notifications</code> picks which staff roles are @-pinged per event:</p>
<ul>
<li><strong>Anti-raid alerts</strong>: mass-join detection trips</li>
<li><strong>Dangerous-action approval requests</strong>: non-Owner needs sign-off</li>
<li><strong>AutoMod escalations</strong>: user crosses a punishment threshold (timeout / kick / ban)</li>
</ul>
<p>Up to 10 roles per event; empty = silent. Routine single-message blocks don't ping (only escalations do).</p>
<p>These live under <strong>Instant alerts</strong> in the hub. The other half, <strong>Updates &amp; digests</strong>, is where you toggle <strong>Milestones</strong> and <strong>Announcements</strong> on or off. (Pulse itself now lives in the web portal, see below.)</p>
</div>
</details>

<details class="faq"><summary>How often does Pulse arrive, and can I change it?</summary>
<div class="faq-body">
<p>Pulse is now <strong>always on in the <a href="{{ site.url }}{{ site.baseurl }}/portal/">web portal</a></strong>, so it's there whenever you want to look. If you'd like it delivered too, each staff member can set their own DM cadence (<strong>Off / Weekly / Monthly</strong>) from the portal. It's no longer set from Discord <code>/settings</code>.</p>
</div>
</details>

<details class="faq"><summary>What are Milestones?</summary>
<div class="faq-body">
<p>Server Assistant celebrates your community's wins in staff chat with a warm card: member-count landmarks (100, 500, 1k…), server anniversaries, and moderation milestones, framed as <em>your</em> achievement. Capped to at most one a day, and fully toggleable in <code>/settings → Notifications</code>.</p>
</div>
</details>

<h2 class="faq-cat-heading" id="faq-ai">AI features</h2>

<details class="faq"><summary>Does the bot use AI tokens just to <em>read</em> staff-chat messages?</summary>
<div class="faq-body">
<p><strong>No.</strong> Monitoring staff-chat is free. The bot runs <strong>pattern matching</strong> (regex + keyword lookup) on every message at zero token cost. AI tokens are only spent when staff write a genuinely fuzzy request the pattern matcher can't resolve.</p>

<p><strong>The decision chain on every staff-chat message:</strong></p>

<pre style="background:rgba(255,255,255,0.06); padding:0.85rem 1rem; border-radius:8px; font-size:0.78rem; line-height:1.45; overflow-x:auto;"><code>Every staff-chat message
        │
        ▼
[is_bot_addressed]      ← pure string check (mentions, bot name, prefixes)
[has_actionable_command] ← regex vs FORBIDDEN/DANGEROUS/SAFE keyword sets
[looks_like_command]    ← imperative-verb match (make, show, find, run...)
        │
        ├── No gate matches
        │   → 0 tokens. Silently ignored.
        │
        ├── Action keyword matched (warn / mute / kick / ban / purge / etc.)
        │   → 0 tokens. Direct structured handler executes.
        │
        └── Bot addressed AND no clear action keyword
            → AI interprets intent
            → ~400–500 tokens per call (billed to your guild's allowance)
</code></pre>

<p><strong>Examples that cost zero tokens:</strong></p>
<table style="font-size:0.88rem; border-collapse:collapse; width:100%;">
<thead><tr style="background:rgba(255,255,255,0.06);"><th style="padding:.4rem .6rem; text-align:left;">Message</th><th style="padding:.4rem .6rem; text-align:left;">Why free</th></tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;"><em>"brb getting coffee"</em></td><td style="padding:.4rem .6rem;">No gate matches → silently ignored</td></tr>
<tr><td style="padding:.4rem .6rem;"><code>warn @user spam</code></td><td style="padding:.4rem .6rem;">Action keyword <code>warn</code> → structured handler</td></tr>
<tr><td style="padding:.4rem .6rem;"><code>mute jen 1h</code></td><td style="padding:.4rem .6rem;">Action keyword <code>mute</code> → pure-code username resolver</td></tr>
<tr><td style="padding:.4rem .6rem;"><code>purge since 1pm</code></td><td style="padding:.4rem .6rem;">Action keyword <code>purge</code> → time parser</td></tr>
<tr><td style="padding:.4rem .6rem;"><code>info @user</code> · <code>stats</code> · <code>help</code></td><td style="padding:.4rem .6rem;">Keyword matches → direct handlers</td></tr>
</tbody>
</table>

<p style="margin-top:0.7rem;"><strong>That covers ~90%+ of routine moderation in staff-chat.</strong></p>

<p><strong>Examples that DO use AI tokens:</strong></p>
<table style="font-size:0.88rem; border-collapse:collapse; width:100%;">
<thead><tr style="background:rgba(255,255,255,0.06);"><th style="padding:.4rem .6rem; text-align:left;">Message</th><th style="padding:.4rem .6rem; text-align:left;">Why AI is called</th></tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;"><em>"@bot can you tell me who's been most active this week?"</em></td><td style="padding:.4rem .6rem;">No keyword + bot addressed → AI interprets</td></tr>
<tr><td style="padding:.4rem .6rem;"><em>"bot, find me someone who joined yesterday and posted"</em></td><td style="padding:.4rem .6rem;">No keyword + bot addressed → AI interprets</td></tr>
<tr><td style="padding:.4rem .6rem;"><em>"make me a summary of last night's drama"</em></td><td style="padding:.4rem .6rem;">Imperative verb (<code>make</code>) + no action keyword → AI interprets</td></tr>
</tbody>
</table>

<p style="margin-top:0.7rem;"><strong>Cost per fuzzy call:</strong> ~400 to 500 tokens (~$0.003 at Sonnet rates), <strong>billed to your server's AI allowance</strong> with a feature tag (<code>nl_intent</code>, <code>nl_chat</code>, <code>nl_extract</code>) so you can see exactly which interactions ate which tokens in <code>/premium</code>.</p>

<p><strong>To drive NL spend to truly zero:</strong> the owner runs <code>/privacy</code> and toggles off <strong>"Natural-language commands in staff-chat"</strong>. The bot then responds only to slash commands and explicit <code>@mention</code>s, no fuzzy AI parsing at all. Pattern-match action keywords still work via <code>@bot warn @user</code> style invocations.</p>

<p><strong>Design philosophy:</strong> structured commands are free; the AI is an opt-in fallback for when you can't be bothered to remember the exact syntax. Most servers stay close to zero NL spend in normal use.</p>
</div>
</details>

<details class="faq"><summary>How does the bot know when it's being addressed?</summary>
<div class="faq-body">
<p>The address check is <strong>multi-tenant aware</strong>: it resolves the bot's actual nickname in <em>your</em> server at runtime, not a hardcoded name. So if you renamed the bot to "Pepper" or "Watchdog", any of these patterns trigger it:</p>
<ul>
<li><strong>@mention</strong>: <code>@Pepper mute @user spam</code></li>
<li><strong>Reply to a bot message</strong>: quoting/replying to me</li>
<li><strong>Command prefix</strong>: <code>!warn @user</code> or <code>/info @user</code></li>
<li><strong>Bot's nickname in this guild</strong>: <code>Pepper, mute @user</code> or <code>Watchdog: warn @user</code></li>
<li><strong>Bot's base username</strong>: <code>ServerAssistant, ban @user</code></li>
<li><strong>Generic fallbacks</strong>: <code>bot, mute @user</code> or <code>assistant, show stats</code></li>
<li><strong>Action keyword at the start of the message</strong>: <code>warn @user spam</code> (the action word leads, optionally behind one interjection like <code>ok</code>/<code>yes</code> or a vocative like <code>bot,</code>)</li>
</ul>
<p><strong>Why the start?</strong> Requiring the action keyword to lead matches how shorthand actually gets typed (<code>warn @user</code>, <code>bot, ban @user</code>, <code>ok mute @user 1h</code>), so casual chat like <em>"can you help me move grass this weekend?"</em> doesn't pick up <code>move</code> and respond. <strong>Need to address the bot mid-sentence? Just @mention it.</strong></p>
<p>The "fuzzy logic" lives on the <em>execution</em> side (AI interprets what action you wanted), not addressing. Addressing is intentionally strict (match-by-name, @mention, or action-word-at-start) so the bot doesn't burn tokens whenever someone casually mentions an action word.</p>
</div>
</details>

<details class="faq"><summary>Are AI features free?</summary>
<div class="faq-body">
<p>The free tier includes a <strong>150,000 token lifetime allowance</strong>, enough to evaluate every AI feature. Core moderation (AutoMod, anti-raid, warnings, slash commands) is always free regardless of token usage.</p>
<p>When your trial tokens run out, subscribe to <strong>Premium ($7 USD/month)</strong> for 750K tokens/month, card only charged when tokens deplete. Or bring your own Anthropic/xAI/OpenAI key via <code>/ai-config</code> for <strong>Premium BYOK at $3/month</strong>. See <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> for full details.</p>
</div>
</details>

<details class="faq"><summary>Will I be charged when I subscribe to Premium?</summary>
<div class="faq-body">
<p><strong>Not immediately.</strong> On subscribing to Premium ($7/mo), your card is saved but not charged. Billing starts only when your 150K free tokens are fully used: light-use servers may never hit that limit and never pay a cent despite being subscribed.</p>
<p>Premium BYOK ($3/mo) is charged immediately on subscribe, since you're paying for feature access rather than tokens.</p>
</div>
</details>

<details class="faq"><summary>What data is sent to the AI provider?</summary>
<div class="faq-body">
Only what's needed for the request. <strong>Message Report</strong> sends ~20 messages of context; <strong>SAi</strong> sends your question plus your server's settings and recent event summary; <code>/imagine</code> sends just your text prompt. <strong>No user metadata, IDs, or persistent identifiers are transmitted.</strong> Full details in the <a href="{{ site.url }}{{ site.baseurl }}/privacy/">Privacy Policy</a>.
</div>
</details>

<details class="faq"><summary>What AI model powers the bot?</summary>
<div class="faq-body">
<p>The default shared key uses <strong>Anthropic Claude</strong> (Sonnet) for all AI features: SAi, Message Report, Self-trained AutoMod proposals, and Bot Health Insurance checks.</p>
<p>Supply your own key via <code>/ai-config</code> to choose Anthropic, xAI Grok, or OpenAI. Image generation (<code>/imagine</code>) runs on the shared service (the free trial covers ~30 images, unlimited on Premium) or add your own DALL·E 3 / Stable Diffusion key via <code>/ai-config</code> for unmetered generation.</p>
</div>
</details>

<details class="faq"><summary>Can I disable AI entirely?</summary>
<div class="faq-body">
Yes: <code>/ai-config → Skip AI</code> disables all AI features for your server. <code>/imagine</code> and Message Report will decline gracefully. You can also use <code>/privacy</code> to disable individual AI features while keeping others active.
</div>
</details>

<h2 class="faq-cat-heading" id="faq-privacy">Data & privacy</h2>

<details class="faq"><summary>Where is data stored?</summary>
<div class="faq-body">
On the host's infrastructure, encrypted at rest. Per-server data is isolated. Full details in the <a href="{{ site.url }}{{ site.baseurl }}/privacy/">Privacy Policy</a>.
</div>
</details>

<details class="faq"><summary>What happens to my data when I remove the bot?</summary>
<div class="faq-body">
Your encrypted secrets (your own AI keys etc.) are wiped immediately. Operational data (warnings, notes, audit log) is retained briefly in case you re-add the bot. Request full manual deletion via <a href="{{ site.url }}{{ site.baseurl }}/support/"><code>/support</code></a>.
</div>
</details>

<details class="faq"><summary>Is there a public API?</summary>
<div class="faq-body">
Not yet. A premium-tier read-only API for your own server's data is on the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">roadmap</a>.
</div>
</details>

<details class="faq"><summary>Can I export my server's data?</summary>
<div class="faq-body">
One-shot export available on request via <code>/support</code>. A <code>/export-server-data</code> slash command is on the roadmap.
</div>
</details>

<h2 class="faq-cat-heading" id="faq-troubleshooting">Troubleshooting</h2>

<details class="faq"><summary>Slash commands don't appear</summary>
<div class="faq-body">
First-time global propagation can take <strong>up to 1 hour</strong>. If they're still missing after that, hard-refresh Discord (Ctrl+R).
</div>
</details>

<details class="faq"><summary>Right-click context menus aren't showing what I expect</summary>
<div class="faq-body">
<ul>
<li><strong>View Info / View Warnings</strong> = right-click a <strong>user</strong>. <strong>Message Report</strong> = right-click a <strong>message</strong>. Both under <strong>Apps ▸ Server Assistant</strong>.</li>
<li>Hard-refresh Discord (Ctrl+R); local cache may be stale.</li>
<li>First-time global propagation can take up to 1 hour.</li>
</ul>
</div>
</details>

<details class="faq"><summary>The bot is offline</summary>
<div class="faq-body">
Most outages are transient; the bot auto-reconnects. If it's been down 5+ minutes, open a ticket via <a href="{{ site.url }}{{ site.baseurl }}/support/"><code>/support</code></a> from another server you own that has the bot.
</div>
</details>

<details class="faq"><summary><code>/setup</code> isn't responding</summary>
<div class="faq-body">
Discord may be rate-limited. Wait 60 seconds and try again. If still unresponsive, open a ticket via <code>/support</code>.
</div>
</details>

<h2 class="faq-cat-heading" id="faq-community">Community</h2>

<details class="faq"><summary>Where can I get help?</summary>
<div class="faq-body">
Run <code>/support</code> from any server that has the bot, tap <strong>Create a ticket</strong>, and send your question as a DM. You'll get a reply via DM. <a href="{{ site.url }}{{ site.baseurl }}/support/">Full details here</a>.
</div>
</details>

<details class="faq"><summary>How do I request a feature?</summary>
<div class="faq-body">
Open a ticket via <code>/support</code> and describe the idea: the more concrete the use-case, the better. Check the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">roadmap</a> first to see if it's already planned.
</div>
</details>

<details class="faq"><summary>Is the source code open?</summary>
<div class="faq-body">
No, the bot's source is closed. Documentation (this site, privacy, terms, changelog, roadmap) is public on <a href="https://github.com/WandWeb2/server-assistant-docs">GitHub</a>. Bug reports and feature requests go through <code>/support</code>.
</div>
</details>

<details class="faq"><summary>Can I self-host?</summary>
<div class="faq-body">
No. Server Assistant is a <strong>fully managed, hosted bot</strong>. Invite it and configure everything in Discord; nothing to install or maintain on your end.
</div>
</details>

---

## What's next?

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** if you haven't installed yet
- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** for the full reference + permissions
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** for deep dives
- **[Support]({{ site.url }}{{ site.baseurl }}/support/)** if you need help
