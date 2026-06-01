---
layout: default
title: Pricing
permalink: /pricing/
description: Server Assistant pricing — generous free tier, $7/mo USD Premium with trial-then-bill, and $3/mo BYOK for those with their own AI key.
---

# 💸 Pricing

**Core moderation is free forever.** AI features cost real money to run, so they're metered — you subscribe when you want them, and we only start billing when you've actually used your free tokens.

All prices in **USD**. Tax is calculated at checkout based on your billing region (Stripe and Discord handle this automatically).

---

## What's always free

These never count against any token allowance:

- **Slash + text commands** — `/warn`, `/mute`, `/kick`, `/ban`, `/purge`, and all moderation tools
- **AutoMod** — filter packs, custom regex, punishment ladder, link blocklist, anti-spam
- **Anti-raid** — mass-join detection, alerts, auto-suspend
- **DM Verification Gate** — button-based new-member verification
- **Warning + notes system** — full per-guild history
- **Audit logging** — every action embed-logged to your log channel
- **24-hour undo** — bans, mutes, channel deletions, nickname changes
- **`/setup` and `/settings`** — 60-second onboarding + 9-panel Customisation Hub
- **Auto-pilot bootstrap** — zero-touch setup via `/autopilot`
- **Privacy panel** — `/privacy` to control exactly what the bot reads
- **Snippets + scheduled reminders**
- **`/imagine`** via free Pollinations.ai fallback

---

## What uses AI tokens

These read messages or generate content:

| Feature | Roughly |
|---|---|
| **🩺 Pulse** daily digest | ~3K tokens per day |
| **🧠 Self-trained AutoMod** rule proposal | ~12K tokens per learning round |
| **📋 Report Message** AI summary | ~5K tokens per right-click |
| **🩹 Bot Health Insurance** check-in | ~3K every 14 days |
| **💬 Concierge chat** *(Premium)* | ~30–50K per conversation |
| **🖼️ `/imagine`** with AI provider | ~2K per image |

---

## Plans

| | **Free** | **Premium BYOK** | **Premium** |
|---|---|---|---|
| **Price** | $0 | **$3 USD/month** | **$7 USD/month** |
| **AI tokens** | 150K lifetime *(our key)* | **You supply your own key** | 750K/month *(our key)* |
| **How billing works** | Use freely, no card | Card charged immediately | **Card captured at subscribe — billing starts only when your 150K trial runs out** |
| **Concierge chat** | — | ✅ | ✅ |
| **Active Threat Score** | — | ✅ | ✅ |
| **Unlimited `/imagine`** | — | ✅ | ✅ |
| **All free features** | ✅ | ✅ | ✅ |

### How Premium trial billing works

When you subscribe to Premium ($7/mo), your card is saved but **you are not charged today**. We give you **150,000 free tokens** first — the same as the free trial. Billing starts the moment those tokens run out. Small or light-use servers may never deplete 150K tokens, meaning they never pay a cent despite being subscribed.

**BYOK** = Bring Your Own Key. Paste your Anthropic, xAI, or OpenAI key via `/ai-config` — you pay your provider directly for token usage, and pay us just $3/mo for the software and infrastructure.

---

## Top-up packs

Need extra headroom without changing your plan? **$3 USD buys 300,000 extra tokens** — they don't expire and work on any tier.

---

## 🎁 Beta-period perk

Servers active before the v5.0 launch are grandfathered — 12 months of free Premium locked in automatically. No card, no claim form.

---

## Payment

- **Stripe** — credit/debit card, available now
- **Discord App Subscriptions** — pay directly through Discord *(available when Server Assistant reaches 75 server installs)*

Premium is per-server. Cancel anytime — no charge if you cancel before your 150K trial runs out.

---

## FAQ

<details><summary>Will I be charged when I subscribe to Premium?</summary>
No — not immediately. We capture your card at signup but only charge it when your 150K free tokens are fully used. If your server never hits that limit, you're never billed.
</details>

<details><summary>What happens when I run out of free tokens?</summary>
AI features pause. Core moderation (AutoMod, anti-raid, warnings, slash commands, audit log) keeps working with no change. You'll get a DM — if you're subscribed to Premium, billing starts automatically. If you're on the free tier, you can subscribe or buy a top-up to continue.
</details>

<details><summary>What if a single user spams Concierge or Report Message?</summary>
Each high-variance feature has an invisible 6-hour rolling cap per user — generous enough that normal use never hits it, tight enough to prevent abuse from draining your allowance.
</details>

<details><summary>Can I bring my own AI key?</summary>
Yes — `/ai-config` lets you paste your own Anthropic, xAI, or OpenAI key. BYOK calls don't count against any allowance. Premium BYOK ($3/mo) gives you all Premium features while you supply the tokens.
</details>

<details><summary>What if I cancel Premium?</summary>
You drop to the free tier. If your 150K lifetime trial was already used, AI features pause until you re-subscribe or buy a top-up. Core moderation never stops.
</details>

<details><summary>Do prices include tax?</summary>
No — applicable VAT, GST, or sales tax is added at checkout based on your billing region. Stripe and Discord calculate and collect this automatically.
</details>

---

## Next steps

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — invite the bot, done in 60 seconds
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** — every feature with tier badges
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
