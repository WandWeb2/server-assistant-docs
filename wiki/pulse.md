---
layout: wiki
title: Server Assistant Pulse
permalink: /wiki/pulse/
wiki: true
wiki_category: Feature guides
summary: Pulse posts a read-only server-health digest to your staff channel on a cadence you choose — messages, joins, AutoMod activity and warnings, each with week-over-week trends and early-warning flags.
wiki_keywords: [pulse, health, insight, digest, report, trends, notifications, analytics]
description: How Server Assistant's Pulse digest works — a read-only daily, weekly or monthly server-health report, shown exactly as it appears in your staff channel.
---

# 🩺 Pulse — whole-server health insight

Most bots wait for a rule to break and then react. **Pulse** does the opposite:
it quietly watches the shape of your server and posts a **health digest** to your
staff channel on a cadence you pick — **daily, weekly or monthly** — so your team
spots the slow-burn patterns that never trip a single filter. A trickle of joins
sitting just under your raid threshold. AutoMod hits creeping up day after day.
The kind of thing a human only notices in hindsight.

> **Pulse is read-only.** It surfaces patterns so your staff can decide what to
> do — it **never acts on its own**. No mutes, no bans, no auto-actions. Just a
> clear picture, on a schedule.

Pulse is tagged like everything else in the wiki so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> configured by the owner or an admin

---

## What Pulse reports {#what-pulse-reports}

Each digest is a single tidy embed posted to your **staff chat** (or any channel
you choose). It rolls up the last period's activity and compares it against the
recent baseline, so every number arrives with a **week-over-week trend** rather
than sitting there without context. Pulse tracks:

- **Messages** — how chatty your server was, and whether that's up or down on its recent average.
- **Joins &amp; leaves** — new members in, members out.
- **Members** — your total head-count.
- **AutoMod blocks** — how much your filters caught, with the trend.
- **Warnings issued** — how busy your moderators were, with the trend.

Then it adds the bit no other number gives you — a short **“worth a look”**
section that calls out **early-warning flags**: an AutoMod spike well above the
daily average, or a run of joins sitting above the recent baseline but *below*
your raid threshold (exactly the kind of quiet creep a raid alert won't catch).
If nothing stands out, it simply says so.

Here's a representative daily digest landing in the staff channel:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">9:00 AM</span></div>
    <div class="dc-embed green">
      <div class="dc-title">🩺 Pulse — daily server-health digest</div>
      <div class="dc-desc">Your server looks healthy. One thing worth a glance. 👇</div>
      <div class="dc-fname">Messages</div><div class="dc-fval">4,812 · ▲ 6% vs avg</div>
      <div class="dc-fname">Joins / Leaves</div><div class="dc-fval">37 joins · 9 leaves</div>
      <div class="dc-fname">Members</div><div class="dc-fval">12,840</div>
      <div class="dc-fname">AutoMod blocks</div><div class="dc-fval">52 · ▲ 18% vs avg</div>
      <div class="dc-fname">Warnings issued</div><div class="dc-fval">6 · flat vs avg</div>
      <div class="dc-fname">🚩 Worth a look</div><div class="dc-fval">📈 <strong>37 joins today</strong> — above the recent baseline (~22 max in the last 7 days) but below the raid threshold. Worth a glance at where they came from.</div>
      <div class="dc-foot">Pulse is read-only — it never auto-actions. Configure in /settings</div>
    </div>
  </div></div>
</div>

When the period is quiet, that last field flips to a calm **“✅ Nothing
notable — no leading indicators tripped today.”** Weekly and monthly digests read
the same way, just over a longer window.

---

## Turning Pulse on &amp; setting the cadence {#turn-on}

Pulse ships **off** — it's opt-in, so nothing posts until you ask for it. You
configure everything from the **Settings hub**: run `/settings`, then open the
**🩺 Pulse** panel.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/settings → 🩺 Pulse</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">The Pulse panel — toggle the digest on or off, set the time of day, and pick which channel it posts to. The cadence (Off / Daily / Weekly / Monthly) also lives under <code>/settings → 🔔 Notifications</code>. Only the owner or an admin can change it.</p>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/settings</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed green">
        <div class="dc-title">🩺 Pulse — daily server-health digest</div>
        <div class="dc-desc"><strong>Pulse never auto-actions.</strong> It surfaces patterns so staff can decide what to do.</div>
        <div class="dc-fname">Status</div><div class="dc-fval">🟢 <strong>Enabled</strong></div>
        <div class="dc-fname">Posts daily at</div><div class="dc-fval"><strong>09:00</strong> server local time</div>
        <div class="dc-fname">Destination</div><div class="dc-fval">#staff-chat</div>
        <div class="dc-select">📍 Pulse destination — defaults to staff chat</div>
        <div class="dc-btns">
          <span class="dc-btn blurple">🔁 Toggle on/off</span>
          <span class="dc-btn grey">🕘 Set hour…</span>
          <span class="dc-btn green">🧪 Send a sample now</span>
          <span class="dc-btn grey">← Back</span>
        </div>
        <div class="dc-foot">Pulse is read-only — it never auto-actions. Configure in /settings</div>
      </div>
    </div></div>
  </div>
</div>

From this one panel you can:

- **🔁 Toggle on/off** — switch the digest on or off in a tap.
- **Cadence** — choose **Off**, **Daily**, **Weekly** or **Monthly**. (The cadence dropdown also appears under **🔔 Notifications**, alongside your other update and digest settings.)
- **🕘 Set hour…** — opens a short modal to pick the **hour of day (0–23, server local time)** the digest posts at. It defaults to **09:00**.
- **📍 Destination** — pick the channel it posts to. Leave it and Pulse posts to your **staff chat** by default.
- **🧪 Send a sample now** — fire off the current digest immediately so you can see exactly what it looks like, without waiting for the next scheduled post.

That's the whole setup. Once it's on, Pulse takes care of itself — a single
embed arrives on your schedule, and you never have to ask for it.

---

## Good to know {#good-to-know}

- **Read-only, always.** Pulse only ever *reports*. It will never mute, ban, lock or change anything — every footer says so, and it's true by design.
- **Free on every plan.** Pulse isn't a premium upsell; it's part of the free toolkit.
- **No double-posts.** Pulse respects your cadence — a daily digest won't post twice in a day, a weekly one waits the full week, and so on — even across a bot restart.
- **It defaults to your staff chat.** If you've run `/setup`, Pulse already knows where your staff channel is, so there's nothing else to configure — just turn it on and pick a cadence.

---

## See also

- [Settings &amp; configuration]({{ '/wiki/settings/' | relative_url }}) — the full Settings hub, including Notifications where the Pulse cadence lives
- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}) — set your staff and log channels so Pulse knows where to post
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
