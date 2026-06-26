---
layout: wiki
title: "XP &amp; leveling"
permalink: /wiki/leveling/
wiki: true
wiki_category: "XP & leveling"
summary: How members earn XP just by being part of the conversation, level up over time, and climb the server leaderboard. Covers /rank, /leaderboard, level-up announcements, and how voting for Server Assistant earns extra XP — all shown exactly as they appear in Discord.
wiki_keywords: [xp, levels, leveling, levelling, rank, /rank, leaderboard, /leaderboard, level up, level-up, levelling up, vote, voting, review, /review, review rewards, double xp, rewards, reputation, points, ranks, /leveling]
description: A member-facing reference for Server Assistant's XP and leveling system — earning XP from chat and voting, the /rank card, the leaderboard, and level-up announcements, each shown one state at a time exactly as it appears in Discord.
---

# 🏅 XP &amp; leveling

Server Assistant quietly keeps score of how active your members are. Every message
adds a little **XP**, members climb through **levels** as it adds up, and a
**leaderboard** shows who's been most involved. It's built in, on by default, and
needs nothing to set up — members just chat, and the numbers take care of
themselves.

> **It's always on.** Leveling is part of every plan and runs automatically — there's
> nothing to install or switch on. Members start earning XP the moment they post.
> The only thing you can turn on or off is the **level-up announcement** (more on
> that below).

Commands on this page are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission

---

## How XP is earned {#earning-xp}

There are two ways to earn XP, and both happen on their own.

**By chatting.** Every message a member posts earns a small amount of XP, with a
little extra for putting thought into a longer message. To keep things fair, there's
a gentle limit on how much you can earn in any short burst — so a steady, genuine
contributor is always rewarded ahead of someone spamming one-word messages, and
posting the same line over and over doesn't earn anything. In short: **take part in
the conversation and your XP grows naturally.**

**By voting for Server Assistant.** Give the bot a vote on
[**DiscordForge**](https://discordforge.org/bot/1278486617375510570) and you earn
**75 XP** as a thank-you — **doubled to 150 XP** if you're in a server that has Server
Assistant. You can vote again every **8 hours**. The bot DMs you to confirm the XP and
nudges you when you can vote again; if you're not in a server with SA (so it can't DM
you), the [Crestbound](https://wandweb2.github.io/server-assistant-docs/wiki/crestbound/)
page shows a **live countdown** to your next vote instead.

<p style="margin:.8rem 0 1rem;"><a class="cmd-btn-link" href="https://discordforge.org/bot/1278486617375510570" target="_blank" rel="noopener" style="display:inline-block;padding:.6rem 1.1rem;border-radius:8px;background:var(--accent);color:#fff;text-decoration:none;font-weight:700;">🗳️ Vote on DiscordForge →</a></p>

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">🗳️ <strong>Thanks for voting for Server Assistant!</strong> You earned <strong>150 XP</strong>.<br><br>You can vote again in 8 hours — I'll give you a nudge.</div>
  </div></div>
</div>

**By reviewing Server Assistant.** Leave an honest review on any bot directory
(Top.gg, DiscordForge, Discord Bot List, Trustpilot, G2…), then run **`/review`** with
the **link** to your review. The bot **verifies your live review on the real directory
page** (not a screenshot — that can't be faked) and grants **500 XP** plus **1 month of
Double XP**. It's **once per platform**, so you can claim it again on a different
directory — and each extra month is **added on** to your buff, not wasted. If a
directory hides reviews from automated checks, your link is sent to our team for a quick
manual confirmation and you're rewarded by DM.

**Double-XP events.** When a server's been quiet, the bot may offer its staff a
**48-hour Double-XP event**. While one is running, **every member earns 2× XP for
chatting** (voting rewards stay the same), and the staff get a recap of the total XP
earned when it ends. Only a server manager can start one — there's no way for a server
to grant itself double XP otherwise.

**Your personal Double-XP buff.** The month of Double XP from a review is **yours** — it
follows you across **every server you share with Server Assistant**, doubling the XP you
earn from chatting. If a server-wide Double-XP event is also running, your XP still
doubles (never quadruples) — the boost is capped at 2×.

**Your weekly recap.** Once a week, if you earned any XP, the bot DMs you a quick summary
— how much came from **being active** versus **voting** — so you can see your progress at
a glance (and grab a vote link for more).

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>One wallet, everywhere.</strong> Your XP is tied to <em>you</em>, not to a single server — chat XP from every server you're in, plus your voting rewards, all add up into one account-wide total. That same total is what you spend in <a href="{{ '/wiki/crestbound/' | relative_url }}">Crestbound</a>, the Crest-collecting game in the portal.</p>

---

## Check your rank — `/rank` {#rank}

`/rank` shows your level, your total XP, how far you are through your current level,
and where you sit on the server leaderboard. Run it on its own to see yourself, or
add a member to peek at theirs. The reply is private to you.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/rank</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Show a member's level, XP, progress to the next level and their place on the server leaderboard. The reply is private to you (ephemeral).</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="opt">optional</span></td><td>member</td><td>Whose rank to show. Leave it out to see your own.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/rank</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🏅 You</div>
        <div class="dc-fname">Level</div><div class="dc-fval">7</div>
        <div class="dc-fname">Rank</div><div class="dc-fval">#5 / 47</div>
        <div class="dc-fname">Messages</div><div class="dc-fval">1,842</div>
        <div class="dc-fname">XP — 320/590 to level 8</div><div class="dc-fval">████████░░░░ <span style="color:#949ba4">(4,210 total)</span></div>
        <div class="dc-foot">XP is your account-wide total (chat + votes)</div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>Reading the card.</strong> <strong>Level</strong> is how far you've climbed; <strong>Rank</strong> is your position among members in this server. <strong>Messages</strong> is how much you've posted here. The <strong>XP</strong> line shows a progress bar towards your next level, with your account-wide total in brackets — each level needs a little more XP than the last, so the higher you go, the more chatting (or voting) it takes to advance.</p>

---

## The leaderboard — `/leaderboard` {#leaderboard}

`/leaderboard` posts the server's top members, ranked by XP, right in the channel for
everyone to see. A friendly bit of bragging rights for your most active regulars.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/leaderboard</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Show the server's most active members, ranked by account-wide XP. Posted publicly in the channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3">No arguments — shows the top members of the current server.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/leaderboard</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🏆 The Hangout — leaderboard</div>
        <div class="dc-desc">🥇 <strong>1.</strong> @Ada — level 14 · 18,940 XP<br>🥈 <strong>2.</strong> @Ben — level 12 · 14,205 XP<br>🥉 <strong>3.</strong> @Cleo — level 11 · 12,880 XP<br>▫️ <strong>4.</strong> @Dane — level 9 · 7,510 XP<br>▫️ <strong>5.</strong> @You — level 7 · 4,210 XP</div>
        <div class="dc-foot">Ranked by account-wide XP (chat + votes)</div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">The top three get 🥇🥈🥉; everyone else lines up below. If nobody's earned any XP yet, the bot simply says <em>“No XP yet — get chatting (or vote for Server Assistant)!”</em></p>

---

## Level-up announcements — `/leveling` {#announcements}

When a member crosses into a new level, the bot can post a little celebration so the
whole server sees it. This is the one part of leveling you control — staff can switch
the announcement on or off with `/leveling` (pick the mode from the dropdown). **The XP itself always keeps running;
this only changes whether level-ups are announced.**

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/leveling</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Turn level-up announcements on or off, or check the current state. Staff-only. XP and ranks keep running either way — this only affects the celebratory post. The reply is private to you (ephemeral). Pick what you want from the <code>mode</code> dropdown when you run the command.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>mode</code></td><td>choice</td><td>Choose one: <code>announcements-on</code> (post on level-up), <code>announcements-off</code> (keep level-ups quiet — XP still counts), or <code>status</code> (see whether announcements are on).</td></tr>
  </table>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">With announcements on, the bot posts a short note when someone levels up — in your chosen level-up channel if you've set one, otherwise in the channel where it happened:</p>

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
    <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">🎉 @Member reached <strong>level 8</strong>!</div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">Running <code>/leveling</code> with mode <code>status</code> tells you how many members are being tracked and whether announcements are on; the <code>announcements-off</code> mode keeps the channel tidy while members keep earning XP behind the scenes.</p>

---

## Turning XP into rewards {#rewards}

XP isn't just for show — your members can **spend** it. The same account-wide total
that climbs as they chat is the currency for **[Crestbound]({{ '/wiki/crestbound/' | relative_url }})**,
the Crest-collecting game in the customer portal. Opening a booster pack spends XP;
collecting and trading Crests gives that score something to do beyond the
leaderboard.

<div style="margin:1.4rem 0;">
  <a class="cmd-btn-link" href="{{ '/wiki/crestbound/' | relative_url }}" style="display:inline-block;padding:.6rem 1rem;border-radius:8px;background:var(--accent);color:#fff;text-decoration:none;font-weight:600;">🛡️ Explore Crestbound →</a>
</div>

---

## See also

- [Crestbound]({{ '/wiki/crestbound/' | relative_url }}) — spend your XP collecting Crests in the portal
- [Member experience]({{ '/wiki/members/' | relative_url }}) — what your members see day to day
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
