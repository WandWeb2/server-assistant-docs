---
layout: default
title: Changelog
permalink: /changelog/
description: Release history for Server Assistant — v5.x line.
---

# 📋 Changelog — v5.x

The current release line.

What's new in Server Assistant. Internal-only updates (CI, dependency bumps, host-side tooling) aren't listed here.

---

## v5.5.9 — Per-server command usage logging

### Added
- **Command usage now logs to your server's log channel.** Every slash command, right-click context menu, and natural-language text command appears as a compact entry: *user · command · channel · invocation type*. Owners and staff can see exactly what's being used and by whom, in the same channel they already check. Fire-and-forget — never blocks the command itself.
- **Off-switch:** if your server is chatty, toggle this off in `/settings → Behaviour → Log command usage`. Moderation actions (warn / mute / ban / kick / etc.) keep their existing detailed entries regardless — only the additional "command was invoked" entries are silenced.
- **Skipped by default:** commands that already produce a detailed log entry (warn, mute, kick, ban, softban, tempban, role add/remove, lockdown, purge, nick) don't double-log. Read-only and personal commands (`/info`, `/stats`, `/help`, `/timezone`, `/schedule`) and config commands (`/sai`, `/settings`, `/automod`, etc.) get the compact entry.

---

## v5.5.7 — `/concierge` renamed to `/sai` + admin read-only mode

### Renamed
- **`/concierge` → `/sai`.** Same Server Assistant intelligence chat, shorter name. Owners get full access (read insights + propose config changes); **admins now get read-only access** (can ask questions, get insights, but can't enroll proposed changes — must ask the owner to apply). Embed shows the caller's role tag (`owner · full access` or `admin · read-only`) so it's obvious which mode the answer came from.

### Deprecated
- **`/concierge`** kept as a stub for ~30 days. Running it returns a short nudge: *"renamed to `/sai`, use that instead."* `/sai` remains the easiest way for owners to update the bot's settings. Stub removed in v5.7.

---

## v5.5.6 — Multi-tenant address detection + per-feature NL billing

### Fixed
- **Multi-tenant address check.** The bot now recognises its actual per-server nickname when staff write things like "Pepper, mute @user" or "Watchdog: ban that user" — previously it only matched a hardcoded set of legacy names, so servers that renamed the bot didn't get the by-name addressing path. The bot's nickname, base username, and generic fallbacks `bot,` / `assistant,` all trigger the same path now.

### Changed
- **Every AI call is now properly tagged in your token usage breakdown.** Five natural-language AI features (fuzzy-intent interpretation, conversational fallback, channel-create extraction, message-send extraction, report context summarisation, self-trained AutoMod analysis) previously charged your allowance under a catch-all `general` tag. They now use distinct labels (`nl_intent`, `nl_chat`, `nl_extract`, `report_command`, `self_trained`) so you can see exactly which features ate which tokens in `/premium`.

---

## v5.5.5 — Refreshed staff onboarding + Dev Updates default ON

### Changed
- **Staff onboarding overhauled.** The welcome message posted after `/setup` is now a 4-embed sequence (was 3): Text · Slash · Right-click · Decision cards walkthrough. First message **@mentions every configured staff role** so your team actually sees it. Slash command list grouped into Core moderation / Raid response / Config / Personal categories with all the v5.5.x additions (`/tempban`, `/role add/remove`, `/lockdown`, `/altguard`, `/tickets`, `/premium`). Final embed links to the docs site for the deeper dive.
- **Dev Updates default to ON in setup.** Owners almost always want release notes for the bot powering their server, so the `/setup` wizard's Dev Updates toggle now starts enabled. Toggle off in the wizard or via `/settings → Behaviour` any time.

---

## v5.5.4 — Docs reconciliation + Premium `/imagine` cooldown removed

A coordinated sweep across the docs site, pricing page, privacy policy, roadmap, and listing copy — plus one small but long-promised bot fix. No moderation behaviour changes; this is mostly visibility, accuracy, and surface-level polish.

### Added
- **Premium servers now get unlimited `/imagine`.** The 30-second per-guild cooldown is gone for Premium guilds — matches what the pricing page has always said. Free servers keep the cooldown (and the free Pollinations.ai fallback).
- **Pricing → "What uses AI tokens":** added **🤔 AutoMod AI second-opinion** (~1K tokens per borderline filter hit). It was billable since v5.4 and should never have been missing from this table.
- **Pricing → "What's always free":** expanded to list the v5.3–v5.5 baseline-admin shipped capabilities — `/role`, `/lockdown`, `/tempban`, `/altguard`, ban-reason DMs + one-reply appeals, and the encrypted tamper-proof audit log — so the free-tier picture is current.
- **Privacy policy:** added entries for AutoMod AI second-opinion (what's sent, only when borderline), alt-guard fingerprinting (**local-only**, nothing leaves your host), and the ban-reason DM + appeal flow (no AI tokens unless **Research** is pressed).
- **Features page** now has a dedicated **📩 Ban reasons & one-reply appeals** section with the full Unban / Deny / Research breakdown.
- **Features page** gained a top-of-page "Why Server Assistant?" callout linking back to the four homepage differentiators, so the narrative carries through the funnel instead of opening on token math.
- **Commands page** gained a **🚨 Raid response & escalation** cluster grouping `/lockdown`, `/altguard`, `/tempban`, `/slowmode`, and per-channel locks into one runbook — plus a suggested raid playbook.
- **Commands page → Moderation table:** `/role add` · `/role remove` · `/tempban` are now in the main section, not buried at the bottom of the slash-command quick reference.
- **Homepage:** added a **🚀 Shipped this fortnight** strip (v5.2 → v5.5.4) and a small **🟢 Coming up next** strip (v5.6 items), so visitors see velocity *and* direction without scrolling the full roadmap.
- **Top-up packs — three-tier ladder.** The single $3/300K pack has grown into 🪣 **Splash** ($3 / 300K · $1.00 per 100K), 🛢️ **Surge** ($10 / 1.25M · $0.80 per 100K), and 🏭 **Stockpile** ($25 / 3.4M · $0.74 per 100K). Tokens never expire; stacks on any tier. Premium remains the cheapest steady-state rate — top-ups reward upfront commit for bursts and overflow. Buy directly from `/premium` in your server.
- **Investigate-the-user buttons on every decision card.** Ban-appeal tickets, Message Reports, and borderline AutoMod review cards all gained a row of **👤 Info · ⚠️ Warnings · 📝 Notes** buttons. So before you Unban, Deny, Warn, Timeout, Delete, Kick, Ban, or **Allow**, you can pull the same info you'd get from `/info`, `/warnings`, or `/notes` — right from the card, ephemerally to you, without leaving the decision context. Works on banned users too (you can still review the warning history of someone who's no longer in your server). Every reply is staff-only and ephemeral; pulling info doesn't ping the subject and doesn't broadcast.

### Changed
- **Threat Score wording is now consistent everywhere.** Pricing, features, and roadmap all explicitly state: **advisory view is free for every server, active (score-driven action) is Premium**.
- **Roadmap → Coming up (v5.6):** moved **Native-action coaching** out of "Future" — the logging half shipped in v5.1, what's left is the coaching nudge, and sitting in "Future" misrepresented that. Now grouped with AI rule explainer and Smart purge.
- **Roadmap → Tier A:** the **Decision explainer + appeals** card was double-covering shipped work. Sharpened to **multi-round appeals beyond the v5.5 one-reply flow** plus on-demand "why was I actioned?" DM Q&A for warnings/mutes. **Mediator** clarified as the pre-action sibling to ban appeals.
- **Roadmap header now reads v5.5.4**, not v5.5.
- **Pricing FAQ** clarified that ban-reason DMs + one-reply appeals keep working when AI tokens run out — only **Research** consumes AI, and only if you press it.
- **Roadmap → Threat Score shipped card** spells out: advisory shipped free in v3.8; the active phase is the Premium gate.

### Fixed
- **`/imagine` cooldown vs Premium copy mismatch.** Pricing page claimed "Unlimited `/imagine`" on Premium, while the roadmap had "Unlimited `/imagine` — removes the 30s rate limit" listed as planned Tier D. The pricing page was right about the intent and the roadmap card has been retired — Premium really is unlimited now.

### Notes
- No breaking changes; no migration required.

---

## v5.5.3 — Pulse on your clock

### Fixed
- **Pulse (and the weekly digest) now fire at the configured hour in *your server's* timezone.** They were comparing the target hour against the host's UTC clock, so "Pulse at 9am" actually went out at 9am UTC regardless of your server's timezone. Set your timezone in `/settings → Default timezone` and the digest hour now means *your* local time.

---

## v5.5.2 — Reports on the record

### Changed
- **Actions taken from a Message Report now log the report itself.** When a staff member uses a report's Warn / Timeout / Delete / Kick / Ban button, the full AI report is written into your **encrypted audit trail** and shown on the **log-channel entry** — so every action carries the reasoning that led to it. The log footer now reads **"via Message Report"** (rather than "via slash command").

---

## v5.5.1 — Actionable Message Reports

### Changed
- **Message Report now has action buttons.** After the right-click AI summary, staff can act in one tap — **⚠️ Warn** (with a reason), **🔇 Timeout 10m**, **🗑️ Delete message**, **👢 Kick**, **🔨 Ban** — without leaving the report or typing a command. Each button respects the staff member's role permissions, and a ban from here still sends the member their reason + appeal.

---

## v5.5 — Ban reasons & one-reply appeals

Bans are no longer a silent door slam — and an appeal is one reply away.

### Added
- **📩 Ban-reason DMs + appeals.** When anyone is banned — manually, by `/tempban`, by AutoMod, or by a native Discord ban — Server Assistant DMs them **why**, and invites them to send **one reply** to appeal. (Soft-bans are excluded, since they're meant to let people rejoin.)
- **One-reply appeal tickets.** The user's single reply opens an **appeal ticket** in your log/staff channel with three buttons: **✅ Unban** (lifts the ban and DMs the user), **🚫 Deny** (DMs the user the decision), and **🔎 Research** — which runs **Message Report** on the user's last message so you can judge the context before deciding. Buttons survive restarts.
- On by default; turn it off any time if your server doesn't want appeals.

### Changed
- **Report Message is now "Message Report."** Same right-click AI context summary — clearer name. It also powers the new appeal **Research** button.


---

## v5.4 — Smarter AutoMod & ban-evasion defence

Two safety upgrades — one that cuts false positives, one that catches returning troublemakers.

### Added
- **🤔 AutoMod AI second-opinion** *(Premium, opt-in)*. Turn it on in `/automod → AI Review`. Borderline AutoMod hits (word filters & spam) get a quick AI confidence check before anything happens. Hits at or above your threshold are actioned automatically; anything below is **left up** and posted to staff as a review card with one-tap **Delete & warn** / **Allow** buttons. High-confidence hits (blocked links, mention spam) still act instantly. AI usage counts toward your server's token allowance, and only borderline messages are checked — so the cost stays low.
- **🕵️ Repeat-offender detection** *(free, opt-in)*. Enable with `/altguard on`. Server Assistant fingerprints the users you ban or kick (reused custom avatar, name, account age), then checks every new joiner against them. A **confident** match — like a fresh account reusing a banned user's avatar or near-identical name — is **auto-banned and reported to staff**; weaker matches are flagged for review only. Soft-bans are excluded (they're meant to let people rejoin).

---

## v5.3 — Baseline admin essentials

Three plug-and-play admin commands that close common gaps — all permission-gated and written to your audit trail.

### Added
- **🎭 `/role add` / `/role remove`.** Add or remove a role from a member in one command, instead of digging through Discord's role menus. Guarded against privilege escalation: you can only assign roles **below** your own highest role, and `@everyone` / integration-managed roles are off-limits. Usable by anyone with **Manage Roles** (or a role tier that grants it).
- **🚨 `/lockdown start` / `/lockdown end`.** Lock **every text and forum channel** at once for raid response — including their threads and posts, so a raid can't just move into a thread — then restore each channel's **exact** prior permissions on `end`, not a best guess. Reuses your existing channel-lock permission, so there's nothing new to configure.
- **⏲️ `/tempban <user> <duration>`.** Timed bans that **un-ban automatically** — `30m`, `2h`, `7d`, `1w`, even `1d12h` (1 minute to 28 days). The timer is persisted and survives restarts; when it expires the bot un-bans, logs it to your audit trail, and DMs the staff member who set it.

---

## v5.2 — Ticket Panels

Private in-server support tickets — no DMs, no leaving your server, no messy threads.

### Added
- **🎫 Ticket Panels.** Admins run `/tickets setup` to post a panel embed with a **Create Ticket** button in any channel — or pass `create_channel` to have the bot make a properly-locked channel for you (members can see the panel and click, but not chat). Members click it to fill a short intake form; the bot creates a private `ticket-NNNN-username` channel, notifies the support role, and drops in a **Close Ticket** button. On close, a full `.txt` transcript is posted to the configured channel and the ticket channel is deleted.
- **Free tier:** one-question intake form, private ticket channels, transcript on close, editable panel text.
- **Premium tier:** up to 4 custom intake form questions (`/tickets questions`), custom welcome and close messages (`/tickets panel`), and the ability to add users to an open ticket mid-conversation (`/tickets add @user`).
- **Persistent panels** — the Create Ticket button survives bot restarts.
- **Per-ticket privacy** — each ticket channel is visible only to the opener, the configured support role, and admins.
- **Storage** in `tickets.json` alongside the other per-guild JSON stores; no extra setup required.

---

## v5.1 — Complete audit trail & tamper protection

Oversight you can trust. Server Assistant now records **every** moderation action — not just the ones run through the bot — and keeps them somewhere staff can't touch.

### Added
- **🛡️ Native-action logging.** Moderation done **directly in Discord** — a right-click ban, kick, or timeout — is now captured and logged just like actions taken through the bot. Nothing slips past your audit log anymore.
- **🔐 Encrypted audit trail.** Every action is written to a separate record that's **encrypted at rest**. Your staff can't read, edit, or erase it — only Server Assistant can. It's the tamper-proof source of truth behind your visible log channel.
- **⚠️ Tamper alerts.** If anyone deletes an entry from your log channel, the server owner is **automatically notified** — and the encrypted record stays intact regardless.
- **💡 Native-action coaching.** When a staff member moderates outside the bot, the log entry includes a friendly tip on doing it through Server Assistant next time (so it's reversible and consistent with your ladder).
- **🔒 Optional secure log channel.** During `/autopilot` or `/setup`, you can have Server Assistant create a locked `#server-assistant-log` channel that only it can post to — entries can't be deleted. Totally optional; your existing log works fine and is monitored either way.

### Fixed
- **`/autopilot` role detection.** Now recognises staff roles by **name** (e.g. "Moderators", "Admin", "Staff"), not just by permissions — so a correctly-named role is detected even if its powers come from channel overrides. It also suggests the standard staff permissions if a detected role is missing them.

---

## v5.0 — Premium tier, Concierge, Auto-pilot, Privacy panel

The biggest release yet. Premium ships with an honest billing model — subscribe when you want AI features, pay only when you've actually used your free tokens.

### Added
- **💸 Premium — $7 USD/month.** Subscribe now, card charged only when your 150K free tokens run out. Small servers may never pay. Includes Concierge chat, active Threat Score, unlimited `/imagine`, 750K tokens/month, and top-up packs ($3 USD / +300K extra). See [pricing]({{ site.url }}{{ site.baseurl }}/pricing/).
- **🔑 Premium BYOK — $3 USD/month.** Bring your own Anthropic/xAI/OpenAI key, pay us just $3/mo for the features and infrastructure. Card charged immediately on subscribe.
- **🎯 Free tier — 150K tokens lifetime** to evaluate every AI feature. Core moderation is always free, period.
- **🪄 Auto-pilot bootstrap.** Run `/autopilot` — the bot scans your server, detects staff chat, log channel, and staff roles, and proposes a full config. One tap applies it. Zero configuration required.
- **💬 Concierge (Premium).** `/concierge` is an AI assistant that reads your server's actual settings and recent moderation events, then gives specific advice and proposes concrete changes. Grounded in your data, not generic tips.
- **🔒 Privacy panel.** `/privacy` gives per-feature toggles for what the bot is allowed to read. New servers start privacy-first; existing servers keep their current behaviour.
- **📊 Budget warnings.** DM to the owner at 80% and 100% of token allowance. Core moderation never pauses regardless of usage.
- **🎁 Beta-period perk.** Servers active before launch: 12 months of free Premium locked in automatically. No card, no claim form.

### Changed
- All AI features now route through Anthropic Claude with prompt caching and per-guild token accounting. BYOK preserved for users with their own keys.
- 6-hour rolling caps on high-variance features (Concierge, Message Report, `/imagine`, Self-trained rounds) — invisible to normal use, prevents any single user from draining the server's allowance.
- Bot framing updated to reflect what it actually is: **privacy-first moderation with optional AI enhancement.**

### Coming next
- In-bot Stripe Checkout subscribe flow
- Discord App Subscriptions (when Server Assistant reaches 75 server installs)
- Premium Plus tier ($14 USD/mo, 2M tokens, multi-server bundle)

---


---

<style>
.changelog-nav { display: flex; gap: 0.4rem; flex-wrap: wrap; margin: 0.6rem 0 1.2rem; padding: 0.5rem; background: rgba(46,204,113,0.06); border: 1px solid rgba(46,204,113,0.20); border-radius: 10px; }
.changelog-nav strong { font-size: 0.78rem; color: #2c7ad6; font-weight: 700; padding: 0.35rem 0.6rem 0.35rem 0; align-self: center; }
.changelog-nav a { display: inline-block; padding: 0.35rem 0.85rem; border-radius: 999px; font-size: 0.85rem; font-weight: 600; text-decoration: none; color: #2c3e50; background: rgba(255,255,255,0.7); border: 1px solid rgba(31,38,135,0.12); transition: all 0.15s; }
.changelog-nav a:hover { background: #2c7ad6; color: white; border-color: #2c7ad6; text-decoration: none; }
.changelog-nav a.current { background: #2c7ad6; color: white; border-color: #2c7ad6; }
.changelog-nav .latest-tag { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.8; margin-left: 0.3rem; }
</style>

<div class="changelog-nav">
  <strong>Browse by version</strong>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/" class="{% if page.permalink == '/changelog/' %}current{% endif %}">v5.x <span class="latest-tag">latest</span></a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v4/" class="{% if page.permalink == '/changelog/v4/' %}current{% endif %}">v4.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v3/" class="{% if page.permalink == '/changelog/v3/' %}current{% endif %}">v3.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v2/" class="{% if page.permalink == '/changelog/v2/' %}current{% endif %}">v2.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v1/" class="{% if page.permalink == '/changelog/v1/' %}current{% endif %}">v1.x</a>
</div>

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
