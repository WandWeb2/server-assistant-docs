---
layout: default
title: Pricing
permalink: /pricing/
description: Server Assistant pricing — generous free tier, $7/mo USD Premium with trial-then-bill, and $3/mo BYOK for those with their own AI key.
---

# 💸 Pricing

**Core moderation is free forever.** AI features cost real money to run, so they're metered — you subscribe when you want them, and we only start billing when you've actually used your free tokens.

All prices in **USD**. Tax is calculated at checkout based on your billing region (Stripe and Discord handle this automatically).

> 🩺 **Why Server Assistant?** The free tier alone gives you four things almost no other mod bot does — daily health insight (Pulse), fair one-reply ban appeals, an encrypted tamper-proof audit trail, and repeat-offender / ban-evasion detection. AI features build on top of that, not in place of it. [See the differentiators →]({{ site.url }}{{ site.baseurl }}/)

---

## What's always free

These never count against any token allowance:

- **Slash + text commands** — `/warn`, `/mute`, `/kick`, `/ban`, `/purge`, and all moderation tools
- **Baseline admin essentials** — `/role add` / `/role remove`, `/tempban` (timed bans, persists across restarts), `/lockdown start` / `/lockdown end` (server-wide channel lock with exact-prior-perm restore)
- **AutoMod** — filter packs, custom regex, punishment ladder, link blocklist, anti-spam
- **Anti-raid** — mass-join detection, alerts, auto-suspend
- **DM Verification Gate** — button-based new-member verification
- **🕵️ Repeat-offender / alt-guard detection** (`/altguard`) — fingerprints banned & kicked users, auto-bans confident ban-evading matches on join
- **📩 Ban reasons + one-reply appeals** — every ban DMs the user *why*, one reply opens a staff appeal ticket with Unban / Deny / Research buttons (no AI tokens used for the DM or reply; **Research** invokes Message Report which is metered if you ask for it)
- **Warning + notes system** — full per-guild history
- **🛡️ Encrypted tamper-proof audit log** — native-action logging, tamper alerts, owner ping if anyone deletes an entry
- **24-hour undo** — bans, mutes, channel deletions, nickname changes
- **`/setup` and `/settings`** — 60-second onboarding + 9-panel Customisation Hub
- **Auto-pilot bootstrap** — zero-touch setup via `/autopilot`
- **Privacy panel** — `/privacy` to control exactly what the bot reads
- **Snippets + scheduled reminders**
- **`/imagine`** AI image generation — the free trial covers ~30 images (30s/guild cooldown); **unlimited on Premium** (no cooldown), or bring your own image key
- **Ticket Panels (core)** — panel embed, private ticket channels, one intake question, `.txt` transcripts on close, `/tickets close`

---

## What uses AI tokens

These read messages or generate content:

| Feature | Roughly |
|---|---|
| **🩺 Pulse** daily digest | ~3K tokens per day |
| **🧠 Self-trained AutoMod** rule proposal | ~12K tokens per learning round |
| **📋 Message Report** AI summary | ~5K tokens per right-click |
| **🤔 AutoMod AI second-opinion** *(Premium, opt-in)* | ~1K per borderline filter hit (only when AutoMod is uncertain — confident hits + clear-misses are never sent) |
| **🩹 Bot Health Insurance** check-in | ~3K every 14 days |
| **💬 Concierge chat** *(Premium)* | ~30–50K per conversation |
| **🖼️ `/imagine`** image generation | ~5K per image (free trial; unlimited on Premium) |

---

## Plans

| | **Free** | **Premium BYOK** | **Premium** |
|---|---|---|---|
| **Price** | $0 | **$3 USD/month** | **$7 USD/month** |
| **AI tokens** | 150K lifetime *(our key)* | **You supply your own key** | 750K/month *(our key)* |
| **How billing works** | Use freely, no card | Card charged immediately | **Card captured at subscribe — billing starts only when your 150K trial runs out** |
| **Concierge chat** | — | ✅ | ✅ |
| **AutoMod AI second-opinion** | — | ✅ | ✅ |
| **Active Threat Score** *(score-driven actions)* | — | ✅ | ✅ |
| **Unlimited `/imagine`** *(no 30s cooldown)* | — | ✅ | ✅ |
| **Ticket Panels — premium features** | — | ✅ | ✅ |
| **All free features** | ✅ | ✅ | ✅ |

> **A note on Threat Score:** the **advisory** view (a per-user risk pill in profiles) is free for every server — it's just visibility. The Premium **active** version is what uses the score to drive actions, with all the safeguards documented on the [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/).

**Ticket Panels — premium features** include: up to 4 custom intake form questions, custom welcome and close messages, and `/tickets add @user` to grant mid-ticket access.

### How Premium trial billing works

When you subscribe to Premium ($7/mo), your card is saved but **you are not charged today**. We give you **150,000 free tokens** first — the same as the free trial. Billing starts the moment those tokens run out. Small or light-use servers may never deplete 150K tokens, meaning they never pay a cent despite being subscribed.

**BYOK** = Bring Your Own Key. Paste your Anthropic, xAI, or OpenAI key via `/ai-config` — you pay your provider directly for token usage, and pay us just $3/mo for the software and infrastructure.

---

## Top-up packs

Need extra headroom without changing your plan? Three sizes — **Splash** for a light overflow, **Surge** for a busy month, **Stockpile** for heavy use. Top-ups never expire and stack on any tier.

| Pack            | Price       | Tokens      | $ per 100K |
|-----------------|-------------|-------------|------------|
| 🪣 **Splash**     | $3 USD      | 300K        | $1.00      |
| 🛢️ **Surge**      | $10 USD     | 1.25M       | $0.80      |
| 🏭 **Stockpile**  | $25 USD     | 3.4M        | $0.74      |

> 💡 **Using AI most months?** Premium ($7/mo for 750K monthly tokens) is the cheapest steady-state rate. Top-ups are designed for **bursts and overflow** — Surge and Stockpile give better per-token value because you're paying upfront with no subscription.

---

## 🎁 Founding servers

Servers that joined during the beta (before our v5.0 launch) are grandfathered with **12 months of free Premium**, applied automatically — our thanks for being early. This window has now closed for new servers, but the generous free tier and 150K trial above are available to everyone.

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
<p>AI features pause. <strong>Everything that doesn't use AI keeps working with no change</strong> — AutoMod, anti-raid, warnings, slash commands, the encrypted audit log, Ticket Panels, <code>/lockdown</code>, <code>/tempban</code>, alt-guard, and ban-reason DMs + the one-reply appeal flow (the DM and the appeal ticket don't consume AI tokens; only the <strong>Research</strong> button on an appeal does, and you only spend if you press it). You'll get a DM — if you're subscribed to Premium, billing starts automatically. If you're on the free tier, you can subscribe or buy a top-up to continue.</p>
</details>

<details><summary>What if a single user spams Concierge or Message Report?</summary>
Each high-variance feature has an invisible 6-hour rolling cap per user — generous enough that normal use never hits it, tight enough to prevent abuse from draining your allowance.
</details>

<details><summary>Can I bring my own AI key?</summary>
Yes — `/ai-config` lets you paste your own Anthropic, xAI, or OpenAI key. BYOK calls don't count against any allowance. Premium BYOK ($3/mo) gives you all Premium features while you supply the tokens.
</details>

<details><summary>What if I cancel Premium?</summary>
You drop to the free tier. If your 150K lifetime trial was already used, AI features pause until you re-subscribe or buy a top-up. Core moderation and basic Ticket Panels never stop.
</details>

<details><summary>Do prices include tax?</summary>
No — applicable VAT, GST, or sales tax is added at checkout based on your billing region. Stripe and Discord calculate and collect this automatically.
</details>

---

## Next steps

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — invite the bot, done in 60 seconds
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** — every feature with tier badges
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
