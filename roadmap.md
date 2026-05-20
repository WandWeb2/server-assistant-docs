---
layout: default
title: Roadmap
permalink: /roadmap/
description: What's coming next for Server Assistant, what's under consideration, and how the future premium tier will work.
---

# 🗺️ Roadmap

A high-level look at where Server Assistant is headed. Items move up the list as the project grows, and priorities shift based on what server owners actually ask for — so [join the support server]({{ site.url }}{{ site.baseurl }}/support/) if you want to weigh in.

> Dates are deliberately omitted. Things land when they're ready.

---

## 🟢 Now (currently being worked on)

**Reaction-role and poll panels** — a `/panel` builder that creates either a button-based reaction-role assignment panel or an anonymous-vote poll. Same UI, different output. Reaction roles support multi-select and mutually-exclusive groups; polls support role-restricted voting, scheduled close, and exportable results.

---

## 🟡 Soon (next 1–2 releases)

**Multi-language support** — per-server language preference covering the major Discord locales (French, Spanish, Portuguese-BR, German, Japanese, more). A passable experience in any language from day one, with AI fallback translation for strings the static catalogue doesn't yet cover.

**Branded welcome cards** — auto-generated PNG welcome images posted in your welcome channel for every new member. Shows the joiner's avatar, server icon, member number, and your configured accent colour. Sits alongside the existing onboarding DM, not instead of it.

**Custom verification message** — replace the default DM text on the verification gate with your own copy + branding.

**Server-data export** — a `/export-server-data` command that bundles your guild's warnings, notes, snippets, AutoMod rules, and audit log into a downloadable archive. Right-to-data-portability baked in.

---

## 🔵 Later (planned for the medium term)

**AI moderation history Q&A** — ask the bot questions about your own server's moderation patterns ("show me users who've been warned 3+ times this month", "what's our most-actioned channel?"). Uses the same AI provider you've already configured.

**Daily / weekly AI channel summaries** — bot-generated digest of activity in a chosen channel, posted on a schedule. Great for catching up after time away.

**Leveling / XP system** — server-wide XP with level-up roles and a leaderboard. Opt-in per server, opt-out per user.

**Welcome video embeds** — short auto-generated video clips (~3s) as an alternative to welcome cards. AI-driven, no manual editing.

**Embed builder** — interactive wizard for crafting rich announcements with buttons, fields, and images. Save reusable templates.

---

## 🟣 Premium tier (post-verification)

Once Server Assistant clears Discord's bot verification (75-server threshold) and lists on the Discord App Directory, a premium tier will launch at a modest per-server price.

**Important commitments:**

- **Everything currently free stays free.** Premium adds *new* features on top.
- **Servers that joined before launch are grandfathered.** If you're using the bot today, you keep premium access free forever.
- **Refunds via Discord's standard policy.** Subscription managed through the App Directory's native billing, not a third-party processor.

Likely premium-tier additions (subject to change):

- White-label branding (fully replace the bot's identity with your own)
- Unlimited `/imagine` quota (free tier has a 30-second per-guild rate limit)
- REST API for your server's bot data
- Auto-translate messages on demand or automatically
- Birthday tracker with auto-DM and channel posts
- AI Q&A trained on your server's FAQ snippets

---

## 🤔 Under consideration (not yet committed)

These have been raised but haven't earned a slot yet. If any of these matter to you, tell us:

- Voice-channel moderation (mute-on-join, voice-spam detection)
- Custom slash commands defined per-server (`/foo` that returns a configured embed)
- Modmail (DM-to-channel ticketing for user reports)
- Auto-thread creation on certain channels
- Cross-server warning sharing (opt-in, for federated communities)
- Vote-reward integration (perks for users who vote on Top.gg)

---

## 📣 How to influence the roadmap

The fastest way to move something up:

1. **Post in [`#bot-feedback`]({{ site.url }}{{ site.baseurl }}/support/)** describing the use case (not just "add feature X" — explain *what you'd do with it*).
2. **File a feature request issue** on GitHub if you want formal tracking.
3. **+1 existing issues** so we can see which ideas have multiple supporters.

What ships is what gets requested most clearly. Vague "add more features" feedback is unactionable; "I run a 2,000-member RP server and we need X because Y" gets prioritised.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't installed yet
- [Changelog]({{ site.url }}{{ site.baseurl }}/changelog/) for what's already shipped
- [Support]({{ site.url }}{{ site.baseurl }}/support/) to ask questions or request features
