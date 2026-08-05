---
layout: wiki
title: Server Assistant Pulse
permalink: /wiki/pulse/
wiki: true
wiki_category: "Features"
summary: Pulse is a read-only, whole-server health digest, activity counts, a mod-team recap, a Reception summary and an optional AI narrative. It's always on in the web portal, and each staff member can have it DM'd to them Weekly or Monthly.
wiki_keywords: [pulse, health, insight, digest, report, trends, portal, dm, analytics, minecraft, mcdc, weekly rollup]
description: How Server Assistant's Pulse digest works, a read-only whole-server health report, always on in the web portal, with an optional per-staff DM on a Weekly or Monthly cadence.
---

# Pulse: whole-server health insight

**Pulse** rolls the shape of your server into a single **health digest**, so your
team spots slow-burn patterns that never trip a single filter: a trickle of joins
sitting just under your raid threshold, AutoMod hits creeping up day after day.

Pulse is **always-on in the web portal** as a live card, for every server on every
plan, and each staff member can also have it **DM'd to them** on their own cadence.
There's no scheduled Discord channel post.

> **Pulse is read-only.** It surfaces patterns for your staff to act on. It **never
> mutes, bans, or auto-acts**, just a clear picture.

<span class="cmd-tag free">FREE</span> the health card, every server, every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> the optional AI "notable patterns" narrative

---

## What Pulse reports {#what-pulse-reports}

Each digest rolls up the last period into four sections:

- **Server activity** (counts only; no message content is ever stored): messages,
  joins &amp; leaves, head-count, AutoMod blocks and warnings, each with a
  **week-over-week trend**.
- **Mod-team recap**: **cases handled**, a **by-action breakdown** (warns / timeouts /
  kicks / bans), your **most-active staff**, and an **itemised list** of recent actions.
- **Reception**: how many members **arrived**, **verified**, and were **caught**.
- **Notable patterns** *(Premium, opt-in)*: a short **AI narrative** flagging what's
  worth a glance, such as an AutoMod spike or a run of joins above baseline but below
  your raid threshold. Added only to a digest that's actually delivered; if nothing
  stands out, it says so.

Servers running the [Minecraft ↔ Discord bridge]({{ '/wiki/minecraft/' | relative_url }})
get a fifth:

- **Your Minecraft server, last 7 days**: a rollup of in-game **messages**, **joins**,
  **deaths** and **advancements**. It's **free on every plan** and **automatic** — the
  section appears on its own for any server with the bridge linked, with nothing to switch
  on and no plugin change. A linked-but-quiet week simply doesn't add the block, so it
  never leaves an empty space in your digest.

A representative weekly digest, the same content on the portal card or as a DM:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-embed green">
      <div class="dc-title">Pulse, this week</div>
      <div class="dc-desc">Your server looks healthy. One thing worth a glance. </div>
      <div class="dc-fname">Messages</div><div class="dc-fval">31,540 · ▲ 6% vs avg</div>
      <div class="dc-fname">Joins / Leaves</div><div class="dc-fval">142 joins · 38 leaves</div>
      <div class="dc-fname">Members</div><div class="dc-fval">12,840</div>
      <div class="dc-fname">AutoMod blocks</div><div class="dc-fval">318 · ▲ 18% vs avg</div>
      <div class="dc-fname">Mod team</div><div class="dc-fval">24 cases · 11 warns · 7 timeouts · 4 kicks · 2 bans · busiest: @Rowan (9)</div>
      <div class="dc-fname">Reception</div><div class="dc-fval">142 arrived · 129 verified · 7 caught</div>
      <div class="dc-fname">Notable patterns</div><div class="dc-fval"><strong>142 joins this week</strong>, above the recent baseline but below the raid threshold. Worth a glance at where they came from.</div>
      <div class="dc-foot">Pulse is read-only, always on in your portal · DM cadence in Settings → Personalization</div>
    </div>
  </div></div>
</div>

When the period is quiet, that last field reads **"Nothing notable, no leading
indicators tripped."** Monthly digests read the same way over a longer window.

---

## Where Pulse lives &amp; getting it DM'd {#where-it-lives}

The **live card is always on in the web portal** for every server, refreshed
continuously. Nothing to toggle, no channel to pick.

To have it come to you, **each staff member can opt in to a personal Pulse DM**:

1. Open the **[web portal]({{ '/portal/' | relative_url }})** and go to
   **Settings → Personalization**.
2. Set your **Pulse DM cadence**: **Off**, **Weekly** or **Monthly** (there's no daily).

Your cadence is **yours alone**: it doesn't affect any other staffer or the always-on
portal card.

> **Long-time users:** the old Discord `/settings` Pulse wizard, its on/off toggle,
> "set hour", destination channel, "Send a sample now", and the scheduled channel post
> itself have all been **retired**. Pulse is now the portal card plus optional
> per-staff DMs.

---

## See also

- [The web portal]({{ '/portal/' | relative_url }}): where the always-on Pulse card lives and where you set your DM cadence
- [Settings &amp; configuration]({{ '/wiki/settings/' | relative_url }}): the full Settings hub
- [Minecraft bridge]({{ '/wiki/minecraft/' | relative_url }}): where the Minecraft section of your digest comes from
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
