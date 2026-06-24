---
layout: default
title: Server Assistant Changelog
permalink: /changelog/
description: Release history for Server Assistant — v6.x line.
---

# 📋 Server Assistant Changelog — v6.x

The current release line. Earlier releases are archived by version at the foot of the page.

What's new in Server Assistant. Internal-only updates (CI, dependency bumps, host-side tooling) aren't listed here. **Tap a release to expand it.**

<style>
.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: .5rem 0; background: rgba(255,255,255,0.04); }
.doc-sec > summary { cursor: pointer; font-size: 1.02rem; font-weight: 700; padding: .65rem .85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] { padding: 0 .9rem .6rem; }
.doc-sec[open] > summary { margin: 0 -.9rem .35rem; }
.doc-sec code { color: var(--accent); }
.doc-sec h3 { font-size: 1rem; margin: .7rem 0 .3rem; }
.changelog-nav { display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: baseline; margin: 1.6rem 0 0.4rem; padding-top: 0.85rem; border-top: 1px solid var(--glass-border); font-size: 0.8rem; opacity: 0.7; }
.changelog-nav strong { font-size: 0.68rem; font-weight: 600; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.05em; }
.changelog-nav a { color: var(--ink-soft); text-decoration: none; border-bottom: 1px dotted var(--ink-soft); padding-bottom: 1px; transition: color 0.15s, border-color 0.15s; }
.changelog-nav a:hover { color: var(--accent); border-bottom-color: var(--accent); text-decoration: none; }
.changelog-nav a.current { color: var(--ink); border-bottom-style: solid; }
.changelog-nav .latest-tag { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.7; margin-left: 0.25rem; }
/* "Tempered" — named quality release; tempered-glass styling, set apart from numbered cards */
.doc-sec.tempered { background: linear-gradient(135deg, rgba(96,165,250,0.17), rgba(124,155,255,0.07) 55%, rgba(20,25,39,0.45)); border: 1px solid rgba(96,165,250,0.45); box-shadow: inset 0 0 0 1px rgba(158,197,255,0.10), 0 10px 34px rgba(20,40,90,0.40); }
.doc-sec.tempered > summary { color: #cfe0ff; font-size: 1.08rem; }
.doc-sec.tempered > summary::before { color: #60a5fa; }
.doc-sec.tempered .tg-badge { display: inline-block; font-size: .6rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #0a1030; background: linear-gradient(135deg, #bcd6ff, #60a5fa); padding: .1rem .45rem; border-radius: 999px; margin-left: .55rem; vertical-align: middle; }
</style>

<details class="doc-sec" markdown="1" open>
<summary>📖 New — the Server Assistant Wiki: every feature &amp; command, with live examples</summary>


**There's now a full wiki for Server Assistant** — a complete, browsable reference that shows a live mock-up of exactly what you'll see in Discord for every command, wizard and flow.

- **Main features** — a guided tour of what the bot does, with deep-dive pages for Pulse, ban appeals, the audit log, alt / ban-evasion detection and ThreatNet.
- **Every command** — grouped by area (moderation, AutoMod, AI, tickets, member experience, account &amp; premium), each shown the way it appears in Discord.
- **Step-through wizards** — walk the `/setup` wizard and other multi-step flows one screen at a time.
- **Search** — find any command or feature in seconds.

Open it from **Main Features** in the top menu, or jump straight in at [the wiki]({{ '/wiki/' | relative_url }}). Setup and the full command reference now live there too.
</details>

<details class="doc-sec" markdown="1" open>
<summary>v6.1.0 — Smart join verification: hold the risky joins, wave the rest straight through</summary>


**The second feature you voted for in v6.0 is here — verification that only gets in the way of suspicious joins.**

Server Assistant now scores every new member as they join and decides whether they need a quick check. There are three modes:

- **Intelligent (the new default)** — regular members **walk straight in**. Only **risk-scored joins** — brand-new accounts, no profile picture, or accounts carrying cross-server or ban-evasion signals — are held for a quick check. The right balance of safety and zero friction for real members.
- **On** — everyone completes verification before they get access.
- **Off** — no verification.

When someone is held, what happens next depends on how risky they look:

- **Lower-risk → self-serve.** They get a link to a quick **web page**: sign in with Discord, confirm you're a real person, done — access is granted automatically, no staff needed. They're pointed there from a tidy, read-only **#verify** channel.
- **Higher-risk → your call.** Your staff get a one-tap **Approve / Kick / Ban** card with the reasons, so a human decides. You set where that line sits.

A few things worth knowing:

- **It's tuned to be safe by default.** New servers start on Intelligent. Existing servers are only switched on automatically **if you already had a verified-access role set up** — otherwise it stays off until you choose to turn it on. You'll get a one-time heads-up in your staff channel either way.
- **Everything stays on your server** — verification answers and decisions are never shared anywhere.
- Manage it all under **`/settings → Verification`** — the mode, how sensitive it is, and the self-serve cut-off.

**Also in this release:** an **unban now clears the slate** — if you unban someone (or lift a ban directly in Discord), it no longer counts against them in alt-detection or join risk-scoring. An overturned ban shouldn't follow someone around.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.0.0 — Anti-nuke / rogue-admin guard: a smoke alarm for your server</summary>


**One of the three features you voted for in v6.0 is here — protection against a server "nuke" or a compromised admin account.**

Server Assistant now watches for the tell-tale signs of a server nuke: **one account suddenly deleting channels or roles, mass-banning or kicking members, or grabbing dangerous permissions** in a tight burst. When that happens, it works out how likely it is to be an attack and responds straight away:

- **It stops the damage.** At high confidence it **automatically quarantines** the offending account — stripping the roles giving it power — then alerts you and your staff with a short, plain-language summary of what happened. If it was a false alarm, **one tap puts everything back**.
- **You're always safe.** The **server owner is never affected**, and you can add trusted staff, roles or bots to a **whitelist** so their normal admin work is never flagged.
- **Tuned to your community.** Sensitivity is set automatically from your server type (busier servers get more headroom; locked-down servers are stricter), and you can adjust it yourself.
- **Put your server back exactly.** Server Assistant keeps a regular snapshot of your roles' permissions and channel settings, so it can **restore them precisely** — and even **recreate deleted channels** — after an incident.
- **Two-person rule.** Optionally require **two different admins** to undo a quarantine, so a single compromised account can't quietly switch your protection off.

Everything stays **local to your server** — nothing is shared anywhere. It's **on by default** (detection and alerts don't change anything on their own), and you'll get a one-time heads-up in your staff channel before the automatic protection can act. Manage it all under **`/settings → Anti-nuke`**.
</details>

<div class="changelog-nav">
  <strong>Browse by version</strong>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/" class="{% if page.permalink == '/changelog/' %}current{% endif %}">v6.x <span class="latest-tag">latest</span></a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v5/" class="{% if page.permalink == '/changelog/v5/' %}current{% endif %}">v5.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v4/" class="{% if page.permalink == '/changelog/v4/' %}current{% endif %}">v4.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v3/" class="{% if page.permalink == '/changelog/v3/' %}current{% endif %}">v3.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v2/" class="{% if page.permalink == '/changelog/v2/' %}current{% endif %}">v2.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v1/" class="{% if page.permalink == '/changelog/v1/' %}current{% endif %}">v1.x</a>
</div>

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
