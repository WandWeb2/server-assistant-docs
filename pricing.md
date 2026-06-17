---
layout: default
title: Server Assistant Pricing
permalink: /pricing/
description: Server Assistant pricing — generous free tier, $7/mo USD Premium with trial-then-bill, and $3/mo BYOK for those with their own AI key.
---

# 💸 Pricing

**Core moderation is free forever.** AI features cost real money to run, so they're metered — subscribe when you want them, and billing only starts once you've used your free tokens.

<style>
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0 1rem; align-items: start; }
.plan { border-radius: 14px; border: 1px solid var(--glass-border); padding: 1.1rem 1.1rem 1.2rem; backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px); position: relative; }
.plan.free { background: rgba(52,130,225,0.10); border-color: rgba(52,130,225,0.32); }
.plan.byok { background: rgba(255,255,255,0.05); }
.plan.prem { background: var(--gold-soft); border-color: rgba(245,196,34,0.42); }
.plan-name { font-size: 1.1rem; font-weight: 800; color: var(--ink); }
.plan-price { font-size: 1.85rem; font-weight: 800; color: var(--ink); margin: .15rem 0 .1rem; }
.plan-price small { font-size: .82rem; font-weight: 600; color: var(--ink-soft); }
.plan-pitch { font-size: .83rem; color: var(--ink-soft); line-height: 1.45; min-height: 3.4em; margin-bottom: .5rem; padding-bottom: .5rem; border-bottom: 1px solid var(--glass-border); }
.plan ul { list-style: none; padding: 0; margin: 0; font-size: .84rem; }
.plan li { padding: .22rem 0 .22rem 1.35rem; position: relative; line-height: 1.4; color: var(--ink); }
.plan li::before { content: "✓"; position: absolute; left: 0; color: #2ecc71; font-weight: 800; }
.plan li.no { color: var(--ink-soft); opacity: .6; }
.plan li.no::before { content: "✕"; color: var(--ink-soft); }
.plan-badge { position: absolute; top: -.55rem; left: 50%; transform: translateX(-50%); background: var(--gold); color: #3a2e00; font-size: .58rem; font-weight: 800; letter-spacing: .05em; padding: .18rem .6rem; border-radius: 999px; text-transform: uppercase; white-space: nowrap; }
.pcta { display: block; text-align: center; margin-top: .9rem; padding: .5rem; border-radius: 999px; font-weight: 700; font-size: .86rem; text-decoration: none !important; background: rgba(255,255,255,0.1); color: var(--ink) !important; border: 1px solid var(--glass-border); }
.pcta:hover { filter: brightness(1.15); background: rgba(255,255,255,0.16); }
.add-cta { display: inline-flex; align-items: center; justify-content: center; gap: .6rem; box-sizing: border-box; text-align: center; padding: .85rem 1.7rem; border-radius: 8px; font-weight: 600; font-size: 1.05rem; text-decoration: none !important; background: #5865F2; color: #fff !important; box-shadow: 0 8px 22px rgba(88,101,242,.4); }
.add-cta:hover { background: #4752c4; transform: translateY(-1px); box-shadow: 0 12px 30px rgba(88,101,242,.5); }
.add-cta .dlogo { width: 22px; height: 22px; flex: none; }

.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: .55rem 0; background: rgba(255,255,255,0.03); }
.doc-sec > summary { cursor: pointer; font-size: 1.0rem; font-weight: 700; padding: .6rem .85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] { padding: 0 .9rem .6rem; }
.doc-sec[open] > summary { margin: 0 -.9rem .35rem; }
.doc-sec table { width: 100%; border-collapse: collapse; }
.doc-sec th, .doc-sec td { word-break: break-word; }
.free-cols { columns: 2; column-gap: 1.5rem; }
.free-cols ul { margin: .2rem 0; padding-left: 1.1rem; }
.free-cols li { break-inside: avoid; margin-bottom: .4rem; font-size: .88rem; line-height: 1.4; }
@media (max-width: 760px) { .plans { grid-template-columns: 1fr; } .free-cols { columns: 1; } }
</style>

<div class="plans" markdown="0">
  <div class="plan free">
    <div class="plan-name">🆓 Free</div>
    <div class="plan-price">$0 <small>forever</small></div>
    <div class="plan-pitch">Everything to run a safe, well-moderated server — no card needed.</div>
    <ul>
      <li>Full mod toolkit, AutoMod &amp; anti-raid</li>
      <li>Encrypted tamper-proof audit log</li>
      <li>Ban appeals + alt-guard detection</li>
      <li>Ticket Panels (core) + Web Portal</li>
      <li>150K lifetime AI trial tokens</li>
      <li>~30 <code>/imagine</code> images</li>
    </ul>
    <a class="pcta" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore features</a>
  </div>
  <div class="plan byok">
    <div class="plan-name">🔑 Premium BYOK</div>
    <div class="plan-price">$3 <small>USD/month</small></div>
    <div class="plan-pitch">All the Premium AI features, powered by your own API key.</div>
    <ul>
      <li>Everything in Free</li>
      <li>SAi chat, FAQ Q&amp;A, translation, mediator</li>
      <li>AutoMod AI second-opinion + active Threat Score</li>
      <li>Decision explainer &amp; guided appeals</li>
      <li>Reaction roles · unlimited <code>/imagine</code></li>
      <li>You supply the key (Anthropic / xAI / OpenAI)</li>
      <li class="no">Custom commands, backup, white-label</li>
    </ul>
    <a class="pcta" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore features</a>
  </div>
  <div class="plan prem">
    <div class="plan-badge">Most popular</div>
    <div class="plan-name">💎 Premium</div>
    <div class="plan-price">$7 <small>USD/month</small></div>
    <div class="plan-pitch">The complete toolkit + 750K tokens a month — and billing only starts when your trial runs out.</div>
    <ul>
      <li>Everything in BYOK, plus:</li>
      <li>⌨️ Custom slash commands</li>
      <li>💾 Server backup &amp; restore</li>
      <li>🎨 White-label branding</li>
      <li>750K tokens / month (our key)</li>
      <li>Trial-then-bill — see below</li>
    </ul>
    <a class="pcta" href="{{ site.url }}{{ site.baseurl }}/features/">✨ Explore features</a>
  </div>
</div>

<div style="text-align:center; margin:.2rem 0 .6rem;">
  <a class="add-cta" href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=8&scope=bot+applications.commands"><svg class="dlogo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0C9.46 4.79 9.25 4.36 9.06 4.03A.07.07 0 0 0 9 4c-1.5.26-2.93.71-4.27 1.33a.06.06 0 0 0-.03.02C1.98 9.42 1.23 13.38 1.6 17.3a.1.1 0 0 0 .03.05c1.8 1.32 3.53 2.12 5.24 2.65a.07.07 0 0 0 .07-.02c.4-.55.76-1.13 1.07-1.74a.07.07 0 0 0-.04-.09 12.9 12.9 0 0 1-1.64-.78.07.07 0 0 1-.01-.11l.33-.25a.07.07 0 0 1 .07-.01c3.44 1.57 7.15 1.57 10.55 0a.07.07 0 0 1 .07.01l.33.26c.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78a.07.07 0 0 0-.04.09c.32.61.68 1.19 1.07 1.74a.07.07 0 0 0 .08.03c1.72-.53 3.45-1.33 5.25-2.65a.07.07 0 0 0 .03-.05c.44-4.53-.73-8.46-3.1-11.95a.05.05 0 0 0-.03-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.91.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12Z"/></svg>Add to Discord</a>
</div>

<p style="font-size:.8rem;color:var(--ink-soft);text-align:center;margin:.2rem 0 1rem;">All prices in USD · tax added at checkout by region · Premium is per-server · cancel anytime.</p>

### Most subscribers don't pay on day one

<div class="dc" style="max-width:560px;margin:1rem 0 1.3rem;">
  <div class="dc-row">
    <img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy">
    <div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
      <div class="dc-embed green">
        <div class="dc-title">🎉 Premium is active — and you haven't been charged</div>
        <div class="dc-desc">Your card is saved, not billed. You've got <strong>150,000 free tokens</strong> first — billing only starts if they run out.</div>
        <div class="dc-fname">Tokens remaining</div><div class="dc-fval">150,000 / 150,000</div>
        <div class="dc-fname">First charge</div><div class="dc-fval">Only when the trial depletes · then $7/mo</div>
        <div class="dc-foot">Light-use servers may never pay a cent · cancel anytime</div>
      </div>
    </div>
  </div>
</div>

Subscribe to Premium and your card is **saved but not charged today**. You get **150,000 free tokens** first — the same as the free trial — and billing starts the moment they run out. Small or light-use servers may never deplete 150K, so they never pay despite being subscribed. **BYOK** ($3/mo) skips tokens entirely: paste your own key via `/ai-config`, pay your provider directly, and pay us only for the software.

---

## 🪣 Top-up packs

Need extra headroom without changing plans? Top-ups never expire and stack on any tier.

| Pack | Price | Tokens | $ per 100K |
|---|---|---|---|
| 🪣 **Splash** | $3 USD | 300K | $1.00 |
| 🛢️ **Surge** | $10 USD | 1.25M | $0.80 |
| 🏭 **Stockpile** | $25 USD | 3.4M | $0.74 |

> 💡 **Using AI most months?** Premium ($7/mo for 750K monthly tokens) is the cheapest steady-state rate. Top-ups are for **bursts and overflow** — Surge and Stockpile give better per-token value because you pay upfront with no subscription.

---

## The detail

<details class="doc-sec" markdown="1">
<summary>🆓 Everything in the free tier (never counts against tokens)</summary>

<div class="free-cols" markdown="1">

- **Slash + text commands** — `/warn`, `/mute`, `/kick`, `/ban`, `/purge`, all moderation tools
- **Admin essentials** — `/role`, `/tempban` (persists across restarts), `/lockdown` (exact-prior-perm restore)
- **AutoMod** — filter packs, custom regex, punishment ladder, link blocklist, anti-spam
- **Anti-raid** — mass-join detection, alerts, auto-suspend
- **DM Verification Gate** — button-based new-member verification
- **🕵️ Alt-guard** (`/altguard`) — fingerprints banned/kicked users, auto-bans confident ban-evaders
- **📩 Ban reasons + one-reply appeals** — DM + reply use no AI tokens; **Research** is metered only if you press it
- **Warnings + notes** — full per-guild history
- **🛡️ Encrypted tamper-proof audit log** — native-action logging, tamper alerts, owner ping on deletion
- **24-hour undo** — bans, mutes, channel deletions, nickname changes
- **`/setup` + `/settings`** — 60-second onboarding + 9-panel Customisation Hub
- **Auto-pilot bootstrap** (`/autopilot`)
- **Privacy panel** (`/privacy`)
- **Snippets + scheduled reminders**
- **`/imagine`** — ~30 images on the free trial; unlimited on Premium
- **Ticket Panels (core)** — panel embed, private channels, one intake question, `.txt` transcripts

</div>
</details>

<details class="doc-sec" markdown="1">
<summary>🤖 What uses AI tokens (rough costs)</summary>

| Feature | Roughly |
|---|---|
| **🩺 Pulse** daily digest | ~3K tokens per day |
| **🧠 Self-trained AutoMod** rule proposal | ~12K per learning round |
| **📋 Message Report** AI summary | ~5K per right-click |
| **🤔 AutoMod AI second-opinion** *(Premium, opt-in)* | ~1K per borderline hit (only when uncertain) |
| **🩹 Bot Health Insurance** check-in | ~3K every 14 days |
| **💬 SAi chat** (`/sai`) *(Premium)* | ~30–50K per conversation |
| **❓ FAQ answer** (`/faq`) *(Premium)* | ~2–6K per question |
| **🌐 Translation** (`/translate`) *(Premium)* | ~1–3K per message |
| **🤝 Mediator** (`/mediate`) *(Premium)* | ~3–6K per mediation |
| **🖼️ `/imagine`** | ~5K per image (free trial; unlimited on Premium) |

</details>

<details class="doc-sec" markdown="1">
<summary>📊 Full plan comparison</summary>

| | **Free** | **Premium BYOK** | **Premium** |
|---|---|---|---|
| **Price** | $0 | **$3/mo** | **$7/mo** |
| **AI tokens** | 150K lifetime *(our key)* | **your own key** | 750K/month *(our key)* |
| **Billing** | no card | charged immediately | trial-then-bill (starts at 150K used) |
| **SAi chat** (`/sai`) | — | ✅ | ✅ |
| **🩺 Pulse** daily health report | — | ✅ | ✅ |
| **🧠 Self-trained AutoMod** | — | ✅ | ✅ |
| **🩹 Bot Health Insurance** | — | ✅ | ✅ |
| **📋 Message Report** (right-click AI context) | — | ✅ | ✅ |
| **AutoMod AI second-opinion** | — | ✅ | ✅ |
| **Active Threat Score** | — | ✅ | ✅ |
| **🌟 Decision explainer & guided appeals** | — | ✅ | ✅ |
| **🎭 Reaction roles** (`/rolepanel`) | — | ✅ | ✅ |
| **❓ AI Q&A from your FAQ** (`/faq`) | — | ✅ | ✅ |
| **🌐 Translation** (`/translate`) | — | ✅ | ✅ |
| **🤝 Mediator** (`/mediate`) | — | ✅ | ✅ |
| **⌨️ Custom slash commands** (`/customcmd`) | — | — | ✅ |
| **💾 Server backup & restore** (`/backup`) | — | — | ✅ |
| **🎨 White-label branding** (`/brand`) | — | — | ✅ |
| **Unlimited `/imagine`** | — | ✅ | ✅ |
| **Ticket Panels — premium features** | — | ✅ | ✅ |
| **All free features** | ✅ | ✅ | ✅ |

**Ticket Panels — premium features:** up to 4 custom intake questions, custom welcome + close messages, and `/tickets add @user` for mid-ticket access.

> **Threat Score:** the **advisory** view (a per-user risk pill in profiles) is free for every server — it's just visibility. The Premium **active** version drives actions, with all the safeguards on the [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/).

</details>

<details class="doc-sec" markdown="1">
<summary>🎁 Founding servers, payment &amp; cancellation</summary>

**🎁 Founding servers** — servers that joined during the beta are grandfathered with **12 months of free Premium**, applied automatically. This window has closed for new servers, but the free tier and 150K trial are open to everyone.

**💳 Payment**
- **Stripe** — credit/debit card, available now.
- **Discord App Subscriptions** — pay through Discord *(available when Server Assistant reaches 75 server installs)*.

Premium is per-server. Cancel anytime — no charge if you cancel before your 150K trial runs out.

</details>

---

## FAQ

<details class="doc-sec"><summary>Will I be charged when I subscribe to Premium?</summary>
Not immediately. We capture your card at signup but only charge it once your 150K free tokens are fully used. If your server never hits that limit, you're never billed.
</details>

<details class="doc-sec"><summary>What happens when I run out of free tokens?</summary>
<p>AI features pause. <strong>Everything that doesn't use AI keeps working with no change</strong> — AutoMod, anti-raid, warnings, slash commands, the encrypted audit log, Ticket Panels, <code>/lockdown</code>, <code>/tempban</code>, alt-guard, and ban-reason DMs + the one-reply appeal flow (only the <strong>Research</strong> button consumes AI tokens, and only if you press it). You'll get a DM — if you're subscribed to Premium, billing starts automatically; on the free tier, subscribe or buy a top-up to continue.</p>
</details>

<details class="doc-sec"><summary>What if a single user spams SAi or Message Report?</summary>
Each high-variance feature has an invisible 6-hour rolling cap per user — generous enough that normal use never hits it, tight enough to stop abuse from draining your allowance.
</details>

<details class="doc-sec"><summary>Can I bring my own AI key?</summary>
Yes — `/ai-config` lets you paste your own Anthropic, xAI, or OpenAI key. BYOK calls don't count against any allowance. Premium BYOK ($3/mo) gives you the Premium AI features while you supply the tokens.
</details>

<details class="doc-sec"><summary>What if I cancel Premium?</summary>
You drop to the free tier. If your 150K lifetime trial was already used, AI features pause until you re-subscribe or buy a top-up. Core moderation and basic Ticket Panels never stop.
</details>

<details class="doc-sec"><summary>Do prices include tax?</summary>
No — applicable VAT, GST, or sales tax is added at checkout based on your billing region. Stripe and Discord calculate and collect it automatically.
</details>

---

## Next steps

- **[Setup]({{ site.url }}{{ site.baseurl }}/setup/)** — invite the bot, done in 60 seconds
- **[Features]({{ site.url }}{{ site.baseurl }}/features/)** — every feature, free vs premium
- **[FAQ]({{ site.url }}{{ site.baseurl }}/faq/)** — common questions
