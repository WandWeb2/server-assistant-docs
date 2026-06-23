---
layout: wiki
title: Server Assistant Main Features
permalink: /wiki/features/
wiki: true
wiki_category: Getting started
summary: A tour of Server Assistant's headline features — moderation, AutoMod, join-time protection, ban appeals, Pulse, tickets and AI — with how to use each and where to learn more.
wiki_keywords: [features, overview, automod, pulse, threatnet, altguard, ban appeals, anti-raid, verification, audit log, tickets, ai, moderation, what does it do]
description: A tour of Server Assistant's headline features, what each one does, how to turn it on, and where to read the full guide.
---

<style>
.feat { border: 1px solid var(--border); border-radius: var(--r-md); background: var(--surface); padding: 1.05rem 1.2rem; margin: 1rem 0; }
.feat h3 { margin: 0 0 .35rem; font-size: 1.08rem; color: var(--fg-0); display: flex; align-items: center; flex-wrap: wrap; gap: .5rem; }
.feat p { margin: 0 0 .55rem; color: var(--fg-1); line-height: 1.55; }
.feat .how { margin: 0; color: var(--fg-1); font-size: .9rem; }
.feat .how b { color: var(--fg-0); }
.feat .how code { color: var(--accent); }
.feat .more { display: inline-block; margin-top: .5rem; font-size: .88rem; font-weight: 600; text-decoration: none; color: var(--accent); }
.feat .more:hover { text-decoration: underline; }
.feat-tag { font-size: .6rem; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; padding: .1rem .4rem; border-radius: 5px; border: 1px solid var(--border); }
.feat-tag.free { background: rgba(84,224,142,.12); color: var(--ok); border-color: rgba(84,224,142,.3); }
.feat-tag.premium { background: var(--gold-soft); color: var(--gold); border-color: rgba(245,196,34,.35); }
.feat-lead { color: var(--fg-1); font-size: 1.02rem; line-height: 1.6; max-width: 64ch; }
.umbrella { border-left: 3px solid var(--accent); padding-left: 1rem; margin: 1rem 0 0; }
</style>

# 🌟 Main features

<p class="feat-lead">Server Assistant is a full moderation suite with optional AI on top. This is the quick tour of the headline features — what each one does, how to switch it on, and a link to the full guide. Everything below is <strong>free</strong> unless it's tagged <span class="feat-tag premium">Premium</span>.</p>

## 🛡️ Moderation & AutoMod

<div class="feat">
  <h3>Full moderation toolkit <span class="feat-tag free">Free</span></h3>
  <p>Warnings and private staff notes, timeouts, kicks and bans (incl. temp-ban and soft-ban), channel locks, slowmode, role changes and bulk message clean-up — all usable in any channel.</p>
  <p class="how"><b>How to use:</b> just run the command, e.g. <code>/warn</code>, <code>/mute</code>, <code>/ban</code>, <code>/purge</code>.</p>
  <a class="more" href="{{ '/wiki/moderation/' | relative_url }}">Moderation &amp; safety guide →</a>
</div>

<div class="feat">
  <h3>🤔 AutoMod that asks before it over-reacts <span class="feat-tag free">Free</span></h3>
  <p>Clear violations are actioned instantly; borderline messages get an AI confidence check first (the classic "I love visiting Scunthorpe" problem) and are left up for staff with one-tap <b>Delete &amp; warn</b> or <b>Allow</b> — so the innocent aren't punished by a blunt keyword filter.</p>
  <p class="how"><b>How to use:</b> <code>/automod</code> → <b>AI review</b>. The setup wizard seeds sensible defaults from your community type.</p>
  <a class="more" href="{{ '/wiki/automod/' | relative_url }}">AutoMod guide →</a>
</div>

<div class="feat">
  <h3>🧠 AutoMod that learns your team <span class="feat-tag free">Free</span></h3>
  <p>Self-training watches the calls your mods make and proposes filter and rule refinements tuned to your server — you approve or dismiss each one. It never changes anything on its own.</p>
  <p class="how"><b>How to use:</b> <code>/automod</code> → <b>Self-train</b>, then review proposals.</p>
  <a class="more" href="{{ '/wiki/automod/' | relative_url }}">AutoMod guide →</a>
</div>

<div class="feat">
  <h3>🛡️ A tamper-proof audit trail <span class="feat-tag free">Free</span></h3>
  <p>A clean, reliable log of moderation activity that can't be quietly wiped — so you always have the record of who did what.</p>
  <p class="how"><b>How to use:</b> pick a log channel during <code>/setup</code> (or change it later in <code>/settings</code>).</p>
  <a class="more" href="{{ '/wiki/setup/' | relative_url }}">Setup guide →</a>
</div>

## 🚪 Join-time protection

<p class="feat-lead">Four independent layers that keep known-bad actors out at the door. They're separate systems with <strong>different data sources</strong> — worth understanding so you know exactly what each one checks.</p>

<div class="feat">
  <h3>Verification gate <span class="feat-tag free">Free</span></h3>
  <p>New members confirm themselves before they can participate — a simple speed bump against drive-by spam and bots.</p>
  <p class="how"><b>How to use:</b> <code>/settings</code> → <b>Verification</b>.</p>
  <a class="more" href="{{ '/wiki/settings/' | relative_url }}">Settings hub guide →</a>
</div>

<div class="feat">
  <h3>Anti-raid &amp; lockdown <span class="feat-tag free">Free</span></h3>
  <p>Detects a sudden flood of joins on <em>your</em> server and lets you slam every channel shut in one move while you deal with it.</p>
  <p class="how"><b>How to use:</b> anti-raid sensitivity comes from your community-type preset (tune it in <code>/settings</code>); hit <code>/lockdown</code> to lock or unlock everything at once.</p>
  <a class="more" href="{{ '/wiki/moderation/#bulk-raid' | relative_url }}">Raid response →</a>
</div>

<div class="feat umbrella">
  <h3>🕵️ Alt / ban-evasion detection (altguard) <span class="feat-tag free">Free</span></h3>
  <p>Catches someone <strong>you</strong> banned coming back under a new account. On join it fingerprints against <em>your own server's</em> ban/kick history (reused avatar, similar name, fresh account) and either flags the account for review or auto-bans a strong match. <b>This is local to your server</b> — it never consults the cross-server network.</p>
  <p class="how"><b>How to use:</b> <code>/altguard</code> to enable and set flag-only or auto-ban.</p>
  <a class="more" href="{{ '/wiki/moderation/#bulk-raid' | relative_url }}">Raid response →</a>
</div>

<div class="feat umbrella">
  <h3>🌐 ThreatNet <span class="feat-tag free">Free</span> <span class="feat-tag premium">Premium auto-ban</span></h3>
  <p>The opposite of altguard: it flags accounts carrying a serious, corroborated safety record <strong>on other servers</strong>, before they've done anything on yours. It shares only severity signals across the opt-in network — never offence details or which server acted — and members can opt out in the web portal. Premium can auto-ban the worst matches on join.</p>
  <p class="how"><b>How to use:</b> <code>/threatnet status</code> to check your own status; <code>/threatnet autoban</code> (Premium) to enable join-time auto-ban. How the data and opt-out work lives on the Privacy page.</p>
  <a class="more" href="{{ '/wiki/account/' | relative_url }}">ThreatNet on the Account page →</a>
</div>

> **Altguard vs ThreatNet at a glance:** altguard = *"the person I banned is back"* (your server's records, free). ThreatNet = *"this person is trouble elsewhere"* (cross-server network, opt-out, Premium auto-ban). A ThreatNet alert may also note when an account matches a local known-offender fingerprint, but the two systems stay separate.

## 📣 Member experience & team ops

<div class="feat">
  <h3>📩 Fair ban appeals <span class="feat-tag free">Free</span></h3>
  <p>A ban isn't a silent door-slam. The member is DM'd <strong>exactly why</strong>, and one reply opens a staff appeal ticket with one-tap <b>Unban</b>, <b>Deny</b> and <b>Research</b> (an AI report on their recent messages — no tokens spent unless you press it).</p>
  <p class="how"><b>How to use:</b> on by default once a log/staff channel is set; tune it in <code>/settings</code>.</p>
  <a class="more" href="{{ '/wiki/members/' | relative_url }}">Member experience guide →</a>
</div>

<div class="feat">
  <h3>🩺 Pulse — whole-server health insight <span class="feat-tag free">Free</span></h3>
  <p>Instead of waiting for a rule to break, Pulse posts a health report to your staff channel — daily, weekly or monthly — surfacing slow-burn trends humans miss, like a trickle of joins sitting just under your raid threshold. Read-only: it never acts on its own.</p>
  <p class="how"><b>How to use:</b> <code>/settings</code> → <b>🔔 Notifications / Pulse</b> to set the cadence (or turn it off).</p>
  <a class="more" href="{{ '/wiki/settings/' | relative_url }}">Settings hub guide →</a>
</div>

<div class="feat">
  <h3>🎫 Support tickets <span class="feat-tag free">Free</span></h3>
  <p>A button panel members use to open a private ticket channel with your staff; close it and a transcript is saved to your log. Premium adds custom intake questions and adding users to a ticket.</p>
  <p class="how"><b>How to use:</b> <code>/tickets setup</code> to post the panel.</p>
  <a class="more" href="{{ '/wiki/tickets/' | relative_url }}">Tickets &amp; support guide →</a>
</div>

<div class="feat">
  <h3>Welcome &amp; onboarding <span class="feat-tag free">Free</span></h3>
  <p>Greet new members with a configurable welcome DM and guide them in — part of the flows new members see.</p>
  <p class="how"><b>How to use:</b> <code>/onboarding</code> to set the welcome message.</p>
  <a class="more" href="{{ '/wiki/members/' | relative_url }}">Member experience guide →</a>
</div>

## 🤖 AI features <span class="feat-tag premium">Premium</span>

<div class="feat">
  <h3>The AI suite <span class="feat-tag premium">Premium</span></h3>
  <p>SAi — a concierge that reads your server and proposes specific improvements — plus image generation, translation and AI-facilitated mediation between members. A free 150k-token trial lets you try it, or bring your own provider key.</p>
  <p class="how"><b>How to use:</b> <code>/sai</code>, <code>/imagine</code>, <code>/translate</code>, <code>/mediate</code>. Set AI up in <code>/setup</code> or <code>/ai-config</code>.</p>
  <a class="more" href="{{ '/wiki/ai/' | relative_url }}">AI &amp; intelligence guide →</a>
</div>

## ⚙️ Setup & control

<div class="feat">
  <h3>Guided setup, Settings hub &amp; autopilot <span class="feat-tag free">Free</span></h3>
  <p>A one-minute guided wizard gets you configured (the bot detects sensible defaults and you just confirm); the Settings hub gives per-feature control afterwards; and autopilot can detect and apply a full config for you.</p>
  <p class="how"><b>How to use:</b> <code>/setup</code> to start, <code>/settings</code> to fine-tune, <code>/autopilot</code> to auto-configure.</p>
  <a class="more" href="{{ '/wiki/setup/' | relative_url }}">Setup wizard guide →</a>
</div>

## Three ways to use every command

You're never forced into one input style:

- **⌨️ Slash commands — anywhere.** Type `/` in any channel and pick a command.
- **💬 Plain text — in staff-chat.** Talk to the bot in your staff channel in natural language.
- **🖱️ Right-click menus.** Right-click a message or user → **Apps** for quick actions like Translate, View info, View warnings and Message report.

## Where next

Browse any area in the sidebar, or jump to the [full command reference]({{ '/wiki/' | relative_url }}). New to the bot? Start with the [setup wizard]({{ '/wiki/setup/' | relative_url }}).
