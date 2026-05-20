---
layout: default
title: Roadmap
permalink: /roadmap/
description: What Server Assistant is building next — the AI-moderation update, premium-tier features, and longer-term explorations.
---

# 🗺️ Roadmap

Where Server Assistant is headed. Priorities shift based on what server owners actually ask for — [join the support server]({{ site.url }}{{ site.baseurl }}/support/) if you want to weigh in.

> Dates are deliberately omitted. Things land when they're ready.
>
> **Every current feature stays free forever.** The premium-tier items below add *new* capabilities. Servers that joined during the free phase are grandfathered into premium access at no cost.

---

## 🟢 In active development — v4.0, the AI-moderation update

The next major release is a deliberate swing at category-defining moderation tooling. Three deeply-coupled features ship together:

### Pulse — AI server-health analyst

An opt-in background pass that reads recent activity and produces daily staff digests with **insight**, not just counts: which conversations are heating up, which users are showing leading indicators of escalation, which channels are shifting in tone, where moderator attention would land best. Never auto-actions; only informs. Per-guild opt-in, AI provider already configured, no user IDs ever leave your guild's data scope.

### Self-trained AutoMod

The bot watches what your moderators actually warn / delete / ban over a 2–4 week window, clusters the patterns, then **proposes server-specific AutoMod rules** for the Owner to approve. Instead of generic regex packs that don't fit your community, the filter set adapts to *your* server's norms. Refines over time as staff accept or reject suggestions.

### Threat Score — risk-based moderation

Replaces fixed punishment ladders with a per-infraction risk score that weighs context: account age, posting velocity, content sentiment, message similarity to past offenders, time-of-day clustering, prior history. Actions fit the actual threat instead of the warning count.

**Built-in safeguards** — because punishment systems that don't account for false positives become reputation killers. Every safeguard below is on by default:

- **Sentiment + content paired with velocity.** High velocity alone isn't a flag — high velocity *with* hostile or raid-style content is. An excited new member posting 12 messages/min about how cool the server is gets scored down, not up.
- **First-week grace period.** Score weights are reduced for users in their first week. New, eager joiners aren't punished for engagement.
- **Soft-touch first response.** Moderate scores trigger a friendly DM check-in ("hey, just confirming — are you new to Discord?"), not an action. Real raiders ignore it; legitimate users validate. The DM is the filter.
- **Score decay over good behaviour.** Sustained positive activity reduces a user's score automatically. A single bad day doesn't follow you forever.
- **No silent kicks or bans.** Above a configurable threshold, high-score events ping staff for human review rather than auto-actioning. Owner always retains the final call.
- **Full transparency.** Every score-based action shows the user (in DM) and staff (in the audit log) exactly *why* it fired: "Score 65 because: account 2 days old (+25), 12 messages/min (+30), prior warning (+10)." Appealable, never opaque.
- **Server-defined thresholds.** Each community sets its own score boundaries — what's "high risk" in a public RP server is normal traffic in a brand-new gaming community.
- **Fallback to ladder mode.** Server owners who prefer the existing fixed-ladder behaviour can keep it. Threat Score is opt-in.

---

## 🟡 Premium-tier feature backlog

Slotted in after the v4.0 AI-moderation update lands, with priority based on community demand.

### Tier A — high impact, ship first

- **Reaction roles.** Button-based self-service role panels in any channel.
- **Custom server-defined slash commands.** Server owners define their own `/foo` that returns a configured embed or text snippet.
- **Daily AI channel summaries.** Once-a-day digest of activity in a chosen channel, posted to a configured destination.

### Tier B — solid additions

- **Leveling / XP system.** Server-wide XP with level-up roles and a leaderboard. Opt-in per server, opt-out per user.
- **Polls.** `/poll` with button-based voting and live tally.
- **Embed builder.** Interactive wizard for crafting rich announcements with fields, images, and buttons.

### Tier C — nice-to-have

- **Birthday tracker.** Opt-in birthdays with auto-DM and channel post on the day.
- **Welcome card images.** Graphical welcome PNG generated for each new joiner.
- **AI Q&A from server FAQ.** Bot answers questions based on FAQ snippets the server owner has provided.
- **Auto-translate.** Message translation on demand or automatically for configured channels.

### Tier D — power users

- **REST / webhook API.** Read-only endpoints for your guild's bot data.
- **White-label branding.** Fully replace the bot's identity per-server.
- **Unlimited `/imagine` quota.** Free tier has a 30-second per-guild rate limit; premium removes it.

---

## 🔮 Longer-term explorations

Bigger conceptual swings — interesting if v4.0 validates the AI-moderation direction.

**Federated moderation network.** Opt-in cross-server ban / warn data sharing for trusted communities. *"This user was banned in 5 partner servers for the same behaviour."* Solves cross-server raid coordination. Trust and governance model needs careful design.

**AI-drafted server policy.** Bot reads your channels for two weeks, drafts a rules document tailored to your community's actual norms, posts it for owner approval. Useful for new servers that don't know which rules they need until something goes wrong.

**Conversational onboarding agent.** Replace the static welcome DM with a short AI conversation that asks new joiners what brought them and auto-assigns roles based on the answers. Filters bad-faith joiners *before* their first message.

---

## 📣 How to influence the roadmap

The fastest way to move something up the list:

1. **Post in `#bot-feedback`** on the [support server]({{ site.url }}{{ site.baseurl }}/support/) describing the use case — not just "add feature X" but *what you'd do with it*.
2. **File a feature request issue** on GitHub if you want formal tracking.
3. **+1 existing issues** so we can see which ideas have multiple supporters.

What ships is what gets requested most clearly. Vague "add more features" feedback is unactionable; "I run a 2,000-member RP server and we need X because Y" gets prioritised.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't installed yet
- [Changelog]({{ site.url }}{{ site.baseurl }}/changelog/) for what's already shipped
- [Support]({{ site.url }}{{ site.baseurl }}/support/) to ask questions or request features
