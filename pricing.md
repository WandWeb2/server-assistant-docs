---
layout: default
title: Pricing
permalink: /pricing/
description: Server Assistant pricing — generous free tier, $7/mo Premium for unlimited AI features and 750K tokens.
---

# 💸 Pricing

The honest split: **core moderation stays free forever for every server.** AI features have real per-call costs, so they're metered. Premium unlocks more headroom and the Concierge chat.

---

## What's always free

These never count against any token allowance:

- **Slash + text commands** — `/warn`, `/mute`, `/kick`, `/ban`, `/purge`, all the moderation tools
- **AutoMod** — filter packs, custom regex, punishment ladder, link blocklist
- **Anti-raid** — mass-join detection, alerts, auto-suspend
- **DM Verification Gate** — button-based new-member verification
- **Warning + notes system** — full per-guild history
- **Audit logging** — every action embed-logged to your log channel
- **24-hour undo** — bans, mutes, channel deletions, nickname changes
- **`/setup` and `/settings`** — 60-second onboarding + customisation hub
- **Auto-pilot bootstrap** — zero-touch setup for owners who don't want to configure
- **Privacy panel** — opt in to AI features only when you want them

---

## What uses AI tokens

These read messages or generate content and bill against your server's token allowance:

| Feature | Roughly |
|---|---|
| **🩺 Pulse** daily digest | ~3K tokens per day |
| **🧠 Self-trained AutoMod** rule proposal | ~12K tokens per learning round |
| **📋 Report Message** AI summary | ~5K tokens per right-click |
| **🩹 Bot Health Insurance** check-in | ~3K every 14 days |
| **💬 Concierge chat** *(Premium)* | ~30-50K per conversation |
| **🖼️ `/imagine`** image generation | counts separately as 1 image |

---

## Plans

| | **Free trial** | **Premium BYOK** | **Premium** |
|---|---|---|---|
| **Price** | $0 | **$3/month** | **$7/month** |
| **Tokens** | 150K lifetime *(our key)* | **You supply your own** | 750K/month *(our key)* |
| **Concierge chat** | — | ✅ | ✅ |
| **Active Threat Score** | — | ✅ | ✅ |
| **`/imagine`** | rate-limited | unlimited | unlimited |
| **All free features** | ✅ | ✅ | ✅ |

**BYOK** = *Bring Your Own Key*. If you already have an Anthropic, xAI, or OpenAI account, paste your API key via `/ai-config` and pay the lower **$3/month** Premium tier — you cover the tokens, we cover the features and infrastructure.

When the free trial's 150K tokens run out, AI features pause but **core moderation keeps working**. You'll see a one-time DM with the upgrade path.

---

## Top-up packs

Need more headroom this month without committing to Premium? **$3 buys you 300,000 extra tokens** — they don't expire. Available to both tiers.

---

## 🎁 Beta-period perk

Servers that add Server Assistant **before the premium tier launches** automatically lock in **12 months of free Premium access** from launch day. No card, no claim form — just be on the bot before launch.

---

## Payment

We support two payment rails:

- **Discord App Subscriptions** *(preferred)* — pay directly through Discord
- **Stripe** — for users who prefer credit card / direct billing

Either way, your Premium is tied to your server. Cancel anytime.

---

## FAQ

<details><summary>What happens at 0 tokens on the free trial?</summary>
AI features pause with a friendly notice. Core moderation (AutoMod, anti-raid, warnings, slash commands, audit log) keeps working with no change. Upgrade to Premium or buy a top-up to re-enable AI features.
</details>

<details><summary>What if a single user spams Concierge or Report Message?</summary>
Each high-variance feature has an invisible 6-hour rolling cap per user — generous enough that normal use never hits it, tight enough that abuse can't drain your allowance.
</details>

<details><summary>Why is there a token limit at all?</summary>
Each AI call has a real cost to us. The free trial lets you fully evaluate every feature. After that, Premium covers genuine ongoing AI use with healthy headroom.
</details>

<details><summary>Can I bring my own AI key?</summary>
Yes — `/ai-config` lets you paste your own Anthropic, xAI, or OpenAI key. BYOK calls don't count against any allowance.
</details>

<details><summary>What if I cancel Premium?</summary>
You drop to the free trial state. If you've already used your 150K lifetime trial, AI features pause until you re-subscribe or top up. Core moderation never stops.
</details>

---

## Next steps

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — invite the bot, run `/setup`, you're done
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** — every feature with tier badges
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
