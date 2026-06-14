---
layout: default
title: FAQ
permalink: /faq/
description: Frequently asked questions about Server Assistant.
---

# ❓ Frequently Asked Questions

<style>
.faq-cat-heading { margin: 1.6rem 0 0.6rem; font-size: 1.15rem; font-weight: 700; }
details.faq { background: rgba(255,255,255,0.55); border: 1px solid rgba(31,38,135,0.12); border-radius: 12px; margin: 0.45rem 0; transition: background .15s, box-shadow .15s; }
details.faq[open] { background: rgba(255,255,255,0.72); box-shadow: 0 4px 14px rgba(31,38,135,0.08); }
details.faq > summary { cursor: pointer; padding: .8rem 1.1rem; font-weight: 600; font-size: .98rem; list-style: none; color: #1e2430; }
details.faq > summary::-webkit-details-marker { display: none; }
details.faq > summary::after { content: '⌄'; float: right; color: #6a7280; font-size: 1.15rem; line-height: 1; transition: transform .2s; }
details.faq[open] > summary::after { transform: rotate(180deg); }
details.faq .faq-body { padding: 0 1.1rem 1rem; font-size: .92rem; line-height: 1.55; color: #2e3340; }
details.faq .faq-body p:first-child { margin-top: 0; }
details.faq .faq-body p:last-child, details.faq .faq-body ul:last-child { margin-bottom: 0; }
details.faq .faq-body table { margin: .5rem 0; }
</style>

<div class="faq-cat-heading">🚀 Getting started</div>

<details class="faq"><summary>Is the bot free?</summary>
<div class="faq-body">
<p><strong>The full moderation toolkit is free forever</strong> — no card, no catch. Core moderation, AutoMod, anti-raid, DM verification, audit logs, warnings, the Customisation Hub, and zero-touch <code>/autopilot</code> setup never cost a thing.</p>
<p>The <strong>AI features</strong> (SAi, Message Report, Self-trained AutoMod, Pulse) include a <strong>150,000-token free trial</strong>. After that, <strong>Premium ($7 USD/mo)</strong> keeps them going — but you're only charged once your trial tokens run out, so light-use servers may never pay. Got your own AI key? <strong>Premium BYOK is $3 USD/mo</strong>. See <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> for the full breakdown.</p>
</div>
</details>

<details class="faq"><summary>How do I add the bot to my server?</summary>
<div class="faq-body">
You'll need <strong>Manage Server</strong> permission. Use the <a href="{{ site.url }}{{ site.baseurl }}/setup/#step-1--invite-the-bot">invite link</a>, or find Server Assistant on <a href="https://top.gg/bot/1278486617375510570">Top.gg</a> or <a href="https://discordbotlist.com/bots/server-assistant">discordbotlist.com</a>. After authorising, the owner runs <code>/setup</code>.
</div>
</details>

<details class="faq"><summary>Why does only the server owner get to run <code>/setup</code>?</summary>
<div class="faq-body">
<code>/setup</code> maps your roles to permission tiers. If admins could run it, they could escalate themselves to Owner-tier and bypass approvals on dangerous actions. Owner-only is a hard safety check.
</div>
</details>

<details class="faq"><summary>How long does setup take?</summary>
<div class="faq-body">
About 60 seconds — and you may not even need to run <code>/setup</code>: when the bot joins it <strong>DMs the owner the setup wizard</strong>, pre-filled, ready to finish in DMs. However you start it, the bot auto-detects your channels and roles so you mostly just confirm: <strong>channels</strong>, <strong>roles</strong>, then a <strong>server-type + AI</strong> step — the server-type picker tunes AutoMod, the punishment ladder, and anti-raid to your kind of community (Gaming, Creator, Crypto, Education, NSFW, General…). In a hurry, <code>/autopilot</code> does it all in one command. Then <code>/settings</code> opens nine optional panels to fine-tune anything from embed colour to the AutoMod ladder.
</div>
</details>

<div class="faq-cat-heading">🛡️ Moderation</div>

<details class="faq"><summary>What happens to existing warnings if I re-run <code>/setup</code>?</summary>
<div class="faq-body">
Nothing — they're preserved. <code>/setup</code> only changes channel/role mappings and AI config. Warnings, notes, snippets, and audit logs are untouched.
</div>
</details>

<details class="faq"><summary>Can mods action higher-ranked users?</summary>
<div class="faq-body">
No — the bot enforces Discord's role hierarchy: a mod can't action anyone whose role is at or above their own. The owner can action anyone except other owners.
</div>
</details>

<details class="faq"><summary>Why does the bot say it can't ban someone?</summary>
<div class="faq-body">
Discord requires the <strong>bot's</strong> role to be higher than the target's highest role. Drag the bot's role up in <strong>Server Settings → Roles</strong>.
</div>
</details>

<details class="faq"><summary>Can I undo a ban?</summary>
<div class="faq-body">
Yes, within 24 hours. <code>undo</code> reverses your most recent reversible action — bans, mutes, channel deletions, nickname changes.
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

<div class="faq-cat-heading">🤖 AutoMod</div>

<details class="faq"><summary>Will AutoMod break legitimate conversation?</summary>
<div class="faq-body">
Filter packs use word boundaries to avoid the <a href="https://en.wikipedia.org/wiki/Scunthorpe_problem">Scunthorpe problem</a> — <em>assassin</em>, <em>classic</em>, <em>Scunthorpe</em> don't trigger. The default "Scams + slurs (gaming)" preset deliberately allows casual profanity. Strict mode adds it with higher false-positive risk — use only for child-friendly servers.
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
Yes — DM explaining which rule fired and their warning count. If their DMs are closed, the skip is logged but removal + warning still go through.
</div>
</details>

<div class="faq-cat-heading">🔐 Verification Gate</div>

<details class="faq"><summary>How does the verification gate work?</summary>
<div class="faq-body">
Enable in <code>/settings → Verification</code>. New joiners get a DM with a green <strong>Verify</strong> button. Clicking it grants the configured verified role, which gates channels via Discord's role permissions.
</div>
</details>

<details class="faq"><summary>What happens if a user has DMs disabled?</summary>
<div class="faq-body">
The failure is logged; the user stays unverified. They can see <code>@everyone</code> channels but not gated ones.
</div>
</details>

<details class="faq"><summary>Can I customise the verification message?</summary>
<div class="faq-body">
Currently it's fixed wording. Custom verification copy is on the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">roadmap</a>.
</div>
</details>

<div class="faq-cat-heading">🔔 Notifications</div>

<details class="faq"><summary>How do I get pinged when AutoMod or anti-raid fires?</summary>
<div class="faq-body">
<p><code>/settings → 🔔 Notifications</code> picks which staff roles are @-pinged per event:</p>
<ul>
<li><strong>Anti-raid alerts</strong> — mass-join detection trips</li>
<li><strong>Dangerous-action approval requests</strong> — non-Owner needs sign-off</li>
<li><strong>AutoMod escalations</strong> — user crosses a punishment threshold (timeout / kick / ban)</li>
</ul>
<p>Up to 10 roles per event; empty = silent. Routine single-message blocks don't ping (only escalations do).</p>
</div>
</details>

<div class="faq-cat-heading">🎨 AI features</div>

<details class="faq"><summary>Does the bot use AI tokens just to <em>read</em> staff-chat messages?</summary>
<div class="faq-body">
<p><strong>No.</strong> Monitoring staff-chat is free. The bot runs <strong>pattern matching</strong> (regex + keyword lookup) on every message at zero token cost. AI tokens are only spent when staff write a genuinely fuzzy request the pattern matcher can't resolve.</p>

<p><strong>The decision chain on every staff-chat message:</strong></p>

<pre style="background:rgba(0,0,0,0.04); padding:0.85rem 1rem; border-radius:8px; font-size:0.78rem; line-height:1.45; overflow-x:auto;"><code>Every staff-chat message
        │
        ▼
[is_bot_addressed]      ← pure string check (mentions, bot name, prefixes)
[has_actionable_command] ← regex vs FORBIDDEN/DANGEROUS/SAFE keyword sets
[looks_like_command]    ← imperative-verb match (make, show, find, run...)
        │
        ├── No gate matches
        │   → 💸 0 tokens. Silently ignored.
        │
        ├── Action keyword matched (warn / mute / kick / ban / purge / etc.)
        │   → 💸 0 tokens. Direct structured handler executes.
        │
        └── Bot addressed AND no clear action keyword
            → AI interprets intent
            → ~400–500 tokens per call (billed to your guild's allowance)
</code></pre>

<p><strong>Examples that cost zero tokens:</strong></p>
<table style="font-size:0.88rem; border-collapse:collapse; width:100%;">
<thead><tr style="background:rgba(0,0,0,0.04);"><th style="padding:.4rem .6rem; text-align:left;">Message</th><th style="padding:.4rem .6rem; text-align:left;">Why free</th></tr></thead>
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
<thead><tr style="background:rgba(0,0,0,0.04);"><th style="padding:.4rem .6rem; text-align:left;">Message</th><th style="padding:.4rem .6rem; text-align:left;">Why AI is called</th></tr></thead>
<tbody>
<tr><td style="padding:.4rem .6rem;"><em>"@bot can you tell me who's been most active this week?"</em></td><td style="padding:.4rem .6rem;">No keyword + bot addressed → AI interprets</td></tr>
<tr><td style="padding:.4rem .6rem;"><em>"bot, find me someone who joined yesterday and posted"</em></td><td style="padding:.4rem .6rem;">No keyword + bot addressed → AI interprets</td></tr>
<tr><td style="padding:.4rem .6rem;"><em>"make me a summary of last night's drama"</em></td><td style="padding:.4rem .6rem;">Imperative verb (<code>make</code>) + no action keyword → AI interprets</td></tr>
</tbody>
</table>

<p style="margin-top:0.7rem;"><strong>Cost per fuzzy call:</strong> ~400–500 tokens (~$0.003 at Sonnet rates), <strong>billed to your server's AI allowance</strong> with a feature tag (<code>nl_intent</code>, <code>nl_chat</code>, <code>nl_extract</code>) so you can see exactly which interactions ate which tokens in <code>/premium</code>.</p>

<p><strong>To drive NL spend to truly zero:</strong> the owner runs <code>/privacy</code> and toggles off <strong>"Natural-language commands in staff-chat"</strong>. The bot then responds only to slash commands and explicit <code>@mention</code>s — no fuzzy AI parsing at all. Pattern-match action keywords still work via <code>@bot warn @user</code> style invocations.</p>

<p><strong>Design philosophy:</strong> structured commands are free; the AI is an opt-in fallback for when you can't be bothered to remember the exact syntax. Most servers stay close to zero NL spend in normal use.</p>
</div>
</details>

<details class="faq"><summary>How does the bot know when it's being addressed?</summary>
<div class="faq-body">
<p>The address check is <strong>multi-tenant aware</strong> — it resolves the bot's actual nickname in <em>your</em> server at runtime, not a hardcoded name. So if you renamed the bot to "Pepper" or "Watchdog", any of these patterns trigger it:</p>
<ul>
<li><strong>@mention</strong> — <code>@Pepper mute @user spam</code></li>
<li><strong>Reply to a bot message</strong> — quoting/replying to me</li>
<li><strong>Command prefix</strong> — <code>!warn @user</code> or <code>/info @user</code></li>
<li><strong>Bot's nickname in this guild</strong> — <code>Pepper, mute @user</code> or <code>Watchdog: warn @user</code></li>
<li><strong>Bot's base username</strong> — <code>ServerAssistant, ban @user</code></li>
<li><strong>Generic fallbacks</strong> — <code>bot, mute @user</code> or <code>assistant, show stats</code></li>
<li><strong>Action keyword at the start of the message</strong> — <code>warn @user spam</code> (the action word leads, optionally behind one interjection like <code>ok</code>/<code>yes</code> or a vocative like <code>bot,</code>)</li>
</ul>
<p><strong>Why the start?</strong> Requiring the action keyword to lead matches how shorthand actually gets typed (<code>warn @user</code>, <code>bot, ban @user</code>, <code>ok mute @user 1h</code>), so casual chat like <em>"can you help me move grass this weekend?"</em> doesn't pick up <code>move</code> and respond. <strong>Need to address the bot mid-sentence? Just @mention it.</strong></p>
<p>The "fuzzy logic" lives on the <em>execution</em> side (AI interprets what action you wanted), not addressing. Addressing is intentionally strict — match-by-name, @mention, or action-word-at-start — so the bot doesn't burn tokens whenever someone casually mentions an action word.</p>
</div>
</details>

<details class="faq"><summary>Are AI features free?</summary>
<div class="faq-body">
<p>The free tier includes a <strong>150,000 token lifetime allowance</strong> — enough to evaluate every AI feature. Core moderation (AutoMod, anti-raid, warnings, slash commands) is always free regardless of token usage.</p>
<p>When your trial tokens run out, subscribe to <strong>Premium ($7 USD/month)</strong> for 750K tokens/month — card only charged when tokens deplete. Or bring your own Anthropic/xAI/OpenAI key via <code>/ai-config</code> for <strong>Premium BYOK at $3/month</strong>. See <a href="{{ site.url }}{{ site.baseurl }}/pricing/">Pricing</a> for full details.</p>
</div>
</details>

<details class="faq"><summary>Will I be charged when I subscribe to Premium?</summary>
<div class="faq-body">
<p><strong>Not immediately.</strong> On subscribing to Premium ($7/mo), your card is saved but not charged. Billing starts only when your 150K free tokens are fully used — light-use servers may never hit that limit and never pay a cent despite being subscribed.</p>
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
<p>The default shared key uses <strong>Anthropic Claude</strong> (Sonnet) for all AI features — SAi, Message Report, Self-trained AutoMod proposals, and Bot Health Insurance checks.</p>
<p>Supply your own key via <code>/ai-config</code> to choose Anthropic, xAI Grok, or OpenAI. Image generation (<code>/imagine</code>) runs on the shared service — the free trial covers ~30 images, unlimited on Premium — or add your own DALL·E 3 / Stable Diffusion key via <code>/ai-config</code> for unmetered generation.</p>
</div>
</details>

<details class="faq"><summary>Can I disable AI entirely?</summary>
<div class="faq-body">
Yes — <code>/ai-config → Skip AI</code> disables all AI features for your server. <code>/imagine</code> and Message Report will decline gracefully. You can also use <code>/privacy</code> to disable individual AI features while keeping others active.
</div>
</details>

<div class="faq-cat-heading">💾 Data & privacy</div>

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

<div class="faq-cat-heading">🛠️ Troubleshooting</div>

<details class="faq"><summary>Slash commands don't appear</summary>
<div class="faq-body">
First-time global propagation can take <strong>up to 1 hour</strong>. If they're still missing after that, hard-refresh Discord (Ctrl+R).
</div>
</details>

<details class="faq"><summary>Right-click context menus aren't showing what I expect</summary>
<div class="faq-body">
<ul>
<li><strong>View Info / View Warnings</strong> = right-click a <strong>user</strong>. <strong>Message Report</strong> = right-click a <strong>message</strong>. Both under <strong>Apps ▸ Server Assistant</strong>.</li>
<li>Hard-refresh Discord (Ctrl+R) — local cache may be stale.</li>
<li>First-time global propagation can take up to 1 hour.</li>
</ul>
</div>
</details>

<details class="faq"><summary>The bot is offline</summary>
<div class="faq-body">
Most outages are transient — the bot auto-reconnects. If it's been down 5+ minutes, open a ticket via <a href="{{ site.url }}{{ site.baseurl }}/support/"><code>/support</code></a> from another server you own that has the bot.
</div>
</details>

<details class="faq"><summary><code>/setup</code> isn't responding</summary>
<div class="faq-body">
Discord may be rate-limited. Wait 60 seconds and try again. If still unresponsive, open a ticket via <code>/support</code>.
</div>
</details>

<div class="faq-cat-heading">🤝 Community</div>

<details class="faq"><summary>Where can I get help?</summary>
<div class="faq-body">
Run <code>/support</code> from any server that has the bot, tap <strong>Create a ticket</strong>, and send your question as a DM — you'll get a reply via DM. <a href="{{ site.url }}{{ site.baseurl }}/support/">Full details here</a>.
</div>
</details>

<details class="faq"><summary>How do I request a feature?</summary>
<div class="faq-body">
Open a ticket via <code>/support</code> and describe the idea — the more concrete the use-case, the better. Check the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">roadmap</a> first to see if it's already planned.
</div>
</details>

<details class="faq"><summary>Is the source code open?</summary>
<div class="faq-body">
No — the bot's source is closed. Documentation (this site, privacy, terms, changelog, roadmap) is public on <a href="https://github.com/WandWeb2/server-assistant-docs">GitHub</a>. Bug reports and feature requests go through <code>/support</code>.
</div>
</details>

<details class="faq"><summary>Can I self-host?</summary>
<div class="faq-body">
No — Server Assistant is a <strong>fully managed, hosted bot</strong>. Invite it and configure everything in Discord; nothing to install or maintain on your end.
</div>
</details>

---

## What's next?

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** if you haven't installed yet
- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** for the full reference + permissions
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** for deep dives
- **[Support]({{ site.url }}{{ site.baseurl }}/support/)** if you need help
