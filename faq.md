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
<p><strong>Yes — free for everyone, no card required.</strong> Server Assistant has a premium tier (run <code>/premium</code> to see what's in it), but <strong>during the beta, premium is free for every server</strong>. The generous free tier (core moderation, AutoMod, anti-raid, Pulse, Self-trained AutoMod, Health Insurance, AI reports) stays free forever regardless.</p>
<p><strong>🎁 Beta perk:</strong> servers added <em>before</em> the paid tier launches lock in <strong>12 months of free premium</strong> automatically — no card, no claim form. Adding the bot now is the cheapest way to get a year of premium for free.</p>
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
About 60 seconds — three steps (channels, roles, AI provider). Then <code>/settings</code> opens nine customisation panels (none required) to fine-tune anything from embed colour to the AutoMod ladder.
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

<details class="faq"><summary>Are AI features free?</summary>
<div class="faq-body">
Yes on the hosted bot's shared rate-limited xAI Grok key. Want unlimited or a different model? Paste your own xAI/OpenAI key during <code>/setup</code> (or <code>/ai-config</code> later).
</div>
</details>

<details class="faq"><summary>What data is sent to the AI provider?</summary>
<div class="faq-body">
Only what's needed for the request. <strong>Report Message</strong> sends ~20 messages of context; <code>/imagine</code> sends just your prompt. <strong>No user metadata, IDs, or persistent identifiers.</strong> Full details in the <a href="{{ site.url }}{{ site.baseurl }}/privacy/">Privacy Policy</a>.
</div>
</details>

<details class="faq"><summary>What models are used?</summary>
<div class="faq-body">
<ul>
<li><strong>xAI Grok:</strong> <code>grok-3-mini</code> (fast, cheap)</li>
<li><strong>OpenAI:</strong> <code>gpt-4o-mini</code> (default)</li>
<li><strong>Image generation:</strong> DALL·E 3 (paid), Stable Diffusion XL (paid), Pollinations.ai (free)</li>
</ul>
</div>
</details>

<details class="faq"><summary>Can I disable AI entirely?</summary>
<div class="faq-body">
Yes. <code>/ai-config → Skip AI</code>. <code>/imagine</code> and Report Message will fail gracefully with a clear message.
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
<li><strong>View Info / View Warnings</strong> = right-click a <strong>user</strong>. <strong>Report Message</strong> = right-click a <strong>message</strong>. Both under <strong>Apps ▸ Server Assistant</strong>.</li>
<li>Hard-refresh Discord (Ctrl+R) — local cache may be stale.</li>
<li>First-time global propagation can take up to 1 hour.</li>
</ul>
</div>
</details>

<details class="faq"><summary>The bot is offline</summary>
<div class="faq-body">
Most outages are transient — auto-reconnects. If it's been down 5+ minutes, open a ticket via <a href="{{ site.url }}{{ site.baseurl }}/support/"><code>/support</code></a> from another server you own that has the bot.
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
Run <code>/support</code> from any server that has the bot. Tap <strong>Create a ticket</strong>, send your question as a DM, and you'll get a reply via DM. <a href="{{ site.url }}{{ site.baseurl }}/support/">Full details here</a>.
</div>
</details>

<details class="faq"><summary>How do I request a feature?</summary>
<div class="faq-body">
Open a ticket via <code>/support</code> and describe the idea — the more concrete the use-case, the better. You can also check the <a href="{{ site.url }}{{ site.baseurl }}/roadmap/">roadmap</a> first to see if it's already planned.
</div>
</details>

<details class="faq"><summary>Is the source code open?</summary>
<div class="faq-body">
No — the bot's source is closed. Documentation (this site, privacy, terms, changelog, roadmap) is public on <a href="https://github.com/WandWeb2/server-assistant-docs">GitHub</a>. Bug reports and feature requests go through <code>/support</code>.
</div>
</details>

<details class="faq"><summary>Can I self-host?</summary>
<div class="faq-body">
No — Server Assistant is a <strong>fully managed, hosted bot</strong>. You invite it and configure everything in Discord; nothing to install or maintain on your end.
</div>
</details>

---

## What's next?

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** if you haven't installed yet
- **[Commands]({{ site.url }}{{ site.baseurl }}/commands/)** for the full reference + permissions
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** for deep dives
- **[Support]({{ site.url }}{{ site.baseurl }}/support/)** if you need help
