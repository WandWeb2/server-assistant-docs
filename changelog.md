---
layout: default
title: Changelog
permalink: /changelog/
description: Release history for Server Assistant — major features, fixes, and announcements.
---

# 📋 Changelog

What's new in Server Assistant. Internal-only updates (CI, dependency bumps, host-side tooling) aren't listed here.

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

## Older releases

See the **[Changelog archive →]({{ site.url }}{{ site.baseurl }}/changelog/archive/)** for **v5.4** and earlier (AutoMod AI second-opinion, alt-guard, baseline admin essentials, Ticket Panels, the v5.0 Premium launch, the v4.0 AI-Moderation Update, and the full v3.x / v2.x / v1.x history).

---

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
