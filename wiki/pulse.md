---
layout: wiki
title: Server Assistant Pulse
permalink: /wiki/pulse/
wiki: true
wiki_category: Feature guides
summary: Pulse is a read-only, whole-server health digest — activity counts, a mod-team recap, a Reception summary and an optional AI narrative. It's always on in the web portal, and each staff member can have it DM'd to them Weekly or Monthly.
wiki_keywords: [pulse, health, insight, digest, report, trends, portal, dm, analytics]
description: How Server Assistant's Pulse digest works — a read-only whole-server health report, always on in the web portal, with an optional per-staff DM on a Weekly or Monthly cadence.
---

# 🩺 Pulse — whole-server health insight

Most bots wait for a rule to break and then react. **Pulse** does the opposite:
it quietly watches the shape of your server and rolls it into a single **health
digest**, so your team spots the slow-burn patterns that never trip a single
filter. A trickle of joins sitting just under your raid threshold. AutoMod hits
creeping up day after day. The kind of thing a human only notices in hindsight.

Pulse lives **always-on in the web portal** as a live card — for every server,
on every plan — and each staff member can also have it **DM'd to them** on their
own cadence. There's no scheduled Discord channel post any more; the digest
comes to the portal continuously, and to your DMs if you ask for it.

> **Pulse is read-only.** It surfaces patterns so your staff can decide what to
> do — it **never acts on its own**. No mutes, no bans, no auto-actions. Just a
> clear picture.

Pulse is tagged like everything else in the wiki so you know what you're looking at:

<span class="cmd-tag free">FREE</span> the health card is on for every server, every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> the optional AI "notable patterns" narrative

---

## What Pulse reports {#what-pulse-reports}

Each Pulse rolls up the last period into one tidy digest. It pulls together four
things:

- **Server activity** — **counts only; no message content is ever stored.** How
  chatty the server was (messages), joins &amp; leaves, your total head-count,
  AutoMod blocks and warnings issued — each with a **week-over-week trend** so
  every number arrives with context rather than sitting there bare.
- **Mod-team recap** — how your staff handled the period: **cases handled**, a
  **by-action breakdown** (warns / timeouts / kicks / bans), your **most-active
  staff**, and an **itemised list** of the most recent actions.
- **Reception** — a one-line summary of join-time protection: how many members
  **arrived**, how many **verified**, and how many were **caught**.
- **Notable patterns** *(Premium, opt-in)* — a short **AI narrative** that calls
  out what's worth a glance: an AutoMod spike well above the average, or a run of
  joins above the recent baseline but *below* your raid threshold (exactly the
  quiet creep a raid alert won't catch). It's added only to a digest that's
  actually delivered, and if nothing stands out it simply says so.

Here's a representative weekly digest — the same content whether you read it on
the portal card or receive it as a DM:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-embed green">
      <div class="dc-title">🩺 Pulse — this week</div>
      <div class="dc-desc">Your server looks healthy. One thing worth a glance. 👇</div>
      <div class="dc-fname">Messages</div><div class="dc-fval">31,540 · ▲ 6% vs avg</div>
      <div class="dc-fname">Joins / Leaves</div><div class="dc-fval">142 joins · 38 leaves</div>
      <div class="dc-fname">Members</div><div class="dc-fval">12,840</div>
      <div class="dc-fname">AutoMod blocks</div><div class="dc-fval">318 · ▲ 18% vs avg</div>
      <div class="dc-fname">Mod team</div><div class="dc-fval">24 cases · 11 warns · 7 timeouts · 4 kicks · 2 bans · busiest: @Rowan (9)</div>
      <div class="dc-fname">Reception</div><div class="dc-fval">142 arrived · 129 verified · 7 caught</div>
      <div class="dc-fname">🚩 Notable patterns</div><div class="dc-fval">📈 <strong>142 joins this week</strong> — above the recent baseline but below the raid threshold. Worth a glance at where they came from.</div>
      <div class="dc-foot">Pulse is read-only — always on in your portal · DM cadence in Settings → Personalization</div>
    </div>
  </div></div>
</div>

When the period is quiet, that last field flips to a calm **“✅ Nothing
notable — no leading indicators tripped.”** Weekly and monthly digests read the
same way, just over a longer window.

---

## Where Pulse lives &amp; getting it DM'd {#where-it-lives}

Pulse needs no setup to exist. The **live card is always on in the web portal** —
for every server, on every plan — so you can open the portal any time and see the
current picture, refreshed continuously. Nothing to toggle, no channel to pick.

If you'd rather have it come to you, **each staff member can opt in to a personal
Pulse DM** on their own schedule:

1. Open the **[web portal]({{ '/portal/' | relative_url }})** and go to
   **Settings → Personalization**.
2. Set your **Pulse DM cadence** — **Off**, **Weekly** or **Monthly**. (Weekly is
   the shortest cadence — there's no daily.)
3. That's it. Server Assistant DMs you the digest on your schedule.

It's **per person**: your cadence is yours alone. Changing it doesn't affect what
any other staffer gets, and it doesn't touch the always-on portal card.

> **Long-time users:** the old Discord `/settings` Pulse wizard — the on/off
> toggle, the "set hour", the destination channel and "Send a sample now", plus
> the scheduled channel post itself — has been **retired**. Pulse now lives in the
> portal, with optional per-staff DMs on a Weekly / Monthly cadence.

---

## Good to know {#good-to-know}

- **Read-only, always.** Pulse only ever *reports*. It will never mute, ban, lock or change anything — every footer says so, and it's true by design.
- **Always on, free on every plan.** The portal health card is part of the free toolkit — there for every server, with no setup and no cadence to pick.
- **Counts only.** Pulse reports numbers, never message content — nothing you say is stored to build it.
- **The AI narrative is a Premium extra.** The "notable patterns" write-up is opt-in on Premium, and only ever added to a digest that's actually delivered.
- **Your DM cadence is personal.** Off / Weekly / Monthly, set in the portal, independent of every other staffer and of the always-on card.

---

## See also

- [The web portal]({{ '/portal/' | relative_url }}) — where the always-on Pulse card lives and where you set your personal DM cadence
- [Settings &amp; configuration]({{ '/wiki/settings/' | relative_url }}) — the full Settings hub
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
