---
layout: wiki
title: "XP &amp; leveling"
permalink: /wiki/leveling/
wiki: true
wiki_category: "Features"
summary: How members earn XP just by being part of the conversation, level up over time, and climb the server leaderboard. Covers /rank, /leaderboard, level-up announcements, XP for time on a linked Minecraft server, and how voting for Server Assistant earns extra XP, all shown exactly as they appear in Discord.
wiki_keywords: [xp, levels, leveling, levelling, rank, /rank, leaderboard, /leaderboard, level up, level-up, levelling up, vote, voting, review, /review, review rewards, double xp, rewards, reputation, points, ranks, /leveling, minecraft xp, playtime xp]
description: A member-facing reference for Server Assistant's XP and leveling system, earning XP from chat, voice, linked Minecraft playtime and voting, the /rank card, the leaderboard, and level-up announcements, each shown one state at a time exactly as it appears in Discord.
---

# XP &amp; leveling

Every message a member posts adds a little **XP**, members climb through **levels**
as it adds up, and a **leaderboard** shows who's been most involved.

> **It's always on.** Leveling runs automatically on every plan, with nothing to
> install. Members start earning the moment they post. The only thing you control is
> the **level-up announcement** (below).

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission

---

## How XP is earned {#earning-xp}

**By chatting.** Every message earns a small amount, with a little extra for a longer
message. A gentle limit on any short burst keeps it fair, so a steady contributor is
rewarded ahead of a spammer, and posting the same line repeatedly earns nothing.

**By hanging out in voice.** Time spent **actively** in voice earns XP into the same
balance. The busier the channel, the more it's worth per minute. Sitting muted to
listen still counts, but you **won't** earn while parked in the AFK channel, deafened,
or alone, so nobody can farm levels by idling. A gentle hourly limit keeps long
sessions fair.

**By playing on a linked Minecraft server.** If your server runs the
[Minecraft ↔ Discord bridge]({{ '/wiki/minecraft/' | relative_url }}) and you've **linked
your Minecraft and Discord accounts**, the time you spend **connected to the server** earns
XP into the same balance, at the **same base rate as voice**, with its own gentle hourly
limit. Like voice, idling doesn't pay: after about five minutes without activity, XP
pauses until you do something, and resumes instantly when you're back. It's free and
automatic once you've linked, with nothing else to switch on. One
difference: because you're in-game rather than in a channel, a level-up earned in
Minecraft **isn't announced** — the XP still lands.

**By voting for Server Assistant.** Vote on
[**DiscordForge**](https://discordforge.org/bot/1278486617375510570) and you earn
**75 XP**, **doubled to 150 XP** if you're in a server that has Server Assistant. You
can vote again every **8 hours**. The bot DMs you to confirm the XP and nudges you when
you can vote again; if it can't DM you (you're not in an SA server), the
[Crestbound]({{ '/wiki/crestbound/' | relative_url }}) page shows a **live countdown**
to your next vote instead.

<p style="margin:.8rem 0 1rem;"><a class="cmd-btn-link" href="https://discordforge.org/bot/1278486617375510570" target="_blank" rel="noopener" style="display:inline-block;padding:.6rem 1.1rem;border-radius:8px;background:var(--accent);color:#fff;text-decoration:none;font-weight:700;">Vote on DiscordForge →</a></p>

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-desc" style="color:#dbdee1;line-height:1.5;"><strong>Thanks for voting for Server Assistant!</strong> You earned <strong>150 XP</strong>.<br><br>You can vote again in 8 hours, I'll give you a nudge.</div>
  </div></div>
</div>

**By reviewing Server Assistant.** Run **`/review`** to get your **personal code**, add
it anywhere in a review you write on a bot directory (Top.gg, DiscordForge, Discord Bot
List, discord.bots.gg), then run **`/review`** again with the **link** to your published
review. The bot checks your code is on the **live page** (a screenshot can't be faked,
and only *your* review carries *your* code) and grants **500 XP** plus **1 month of
Double XP**. It's **once per platform**, so you can claim again on a different directory,
and each extra month is **added on** to your buff. If a directory hides reviews from
automated checks, your link goes to our team for a quick manual confirmation and you're
rewarded by DM.

**Double-XP events.** When a server's been quiet, the bot may offer its staff a
**48-hour Double-XP event**. While one runs, **every member earns 2× XP for chatting,
voice time and linked Minecraft playtime** (voting rewards stay the same), and staff get a
recap when it ends. Only a server manager can start one.

**Your personal Double-XP buff.** The month of Double XP from a review is **yours**: it
follows you across **every server you share with Server Assistant**, doubling your chat,
voice and Minecraft playtime XP. If a server-wide event is also running, your XP still only
doubles, the boost is **capped at 2×** (never quadruples).

**Your weekly recap.** Once a week, if you earned any XP, the bot DMs you a quick
summary of how much came from **being active** versus **voting**.

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>One wallet, everywhere.</strong> Your XP is tied to <em>you</em>, not to one server: chat and voice XP from every server, playtime on a linked Minecraft server, plus voting rewards, all add up in one account-wide wallet. Everything you earn lifts your <strong>Level</strong> (which only ever goes up); your <strong>XP</strong> is the spendable balance that grows alongside it, the same balance you take into <a href="{{ '/wiki/crestbound/' | relative_url }}">Crestbound</a>.</p>

---

## Check your rank: `/rank` {#rank}

`/rank` shows your **Level**, progress to the next Level, your spendable **XP**, and
your place on the server leaderboard. Run it alone for yourself, or add a member to see
theirs. The reply is private to you.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/rank</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Show a member's Level, progress to the next Level, spendable XP, and their place on the server leaderboard. The reply is private to you (ephemeral).</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="opt">optional</span></td><td>member</td><td>Whose rank to show. Leave it out to see your own.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/rank</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">You</div>
        <div class="dc-fname">Level</div><div class="dc-fval">7</div>
        <div class="dc-fname">Rank</div><div class="dc-fval">#5 / 47</div>
        <div class="dc-fname">Messages</div><div class="dc-fval">1,842</div>
        <div class="dc-fname">Progress to level 8</div><div class="dc-fval">████████░░░░ <span style="color:#949ba4">(320/590)</span></div>
        <div class="dc-fname">XP to spend</div><div class="dc-fval">245</div>
        <div class="dc-foot">Your Level only ever goes up · XP is your spendable balance</div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>Reading the card.</strong> <strong>Level</strong> is the tier you've climbed to; it only ever goes up, and spending never lowers it. <strong>Rank</strong> is your position among this server's members, and <strong>Messages</strong> is how much you've posted here. <strong>Progress to level 8</strong> is a bar to your next Level, and each Level needs a little more XP than the last. <strong>XP to spend</strong> is your account-wide spendable balance, the XP you take into <a href="{{ '/wiki/crestbound/' | relative_url }}">Crestbound</a>.</p>

---

## The leaderboard: `/leaderboard` {#leaderboard}

`/leaderboard` posts the server's top members, ranked by Level, right in the channel
for everyone to see.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/leaderboard</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Show the server's most active members, ranked by Level. Posted publicly in the channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3">No arguments, shows the top members of the current server.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/leaderboard</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">The Hangout, leaderboard</div>
        <div class="dc-desc"><strong>1.</strong> @Ada, level 14<br><strong>2.</strong> @Ben, level 12<br><strong>3.</strong> @Cleo, level 11<br>▫ <strong>4.</strong> @Dane, level 9<br>▫ <strong>5.</strong> @You, level 7</div>
        <div class="dc-foot">Ranked by Level (earned from chat + votes)</div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">The top three get gold, silver and bronze medals; everyone else lines up below. If nobody's earned any XP yet, the bot says <em>"No XP yet, get chatting (or vote for Server Assistant)!"</em></p>

---

## Level-up announcements: `/leveling` {#announcements}

When a member crosses into a new level, the bot can post a little celebration. This is
the one part of leveling you control: staff switch the announcement on or off with
`/leveling` (pick the mode from the dropdown). **The XP itself always keeps running;
this only changes whether level-ups are announced.**

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/leveling</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Turn level-up announcements on or off, or check the current state. Staff-only. XP and ranks keep running either way, this only affects the celebratory post. The reply is private to you (ephemeral). Pick what you want from the <code>mode</code> dropdown when you run the command.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>mode</code></td><td>choice</td><td>Choose one: <code>announcements-on</code> (post on level-up), <code>announcements-off</code> (keep level-ups quiet, XP still counts), or <code>status</code> (see whether announcements are on).</td></tr>
  </table>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">With announcements on, the bot posts a short note when someone levels up, in your chosen level-up channel if you've set one, otherwise in the channel where it happened. Set it in the <a href="https://serverassistant.wandweb.co">web portal</a> under <strong>Settings, Leveling, Level-up channel</strong>; leave it blank to keep level-ups where they happen:</p>

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
    <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">@Member reached <strong>level 8</strong>!</div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">Mode <code>status</code> tells you how many members are tracked and whether announcements are on; <code>announcements-off</code> keeps the channel tidy while members keep earning XP behind the scenes.</p>

---

## Turning XP into rewards {#rewards}

Your **XP** is the spendable balance in your account-wide wallet, and it's the currency
for **[Crestbound]({{ '/wiki/crestbound/' | relative_url }})**, the Crest-collecting
game in the customer portal. Opening a booster pack spends XP; collecting and trading
Crests gives that balance something to do beyond the leaderboard. Spending never touches
your **Level**, which only ever goes up.

<div style="margin:1.4rem 0;">
  <a class="cmd-btn-link" href="{{ '/wiki/crestbound/' | relative_url }}" style="display:inline-block;padding:.6rem 1rem;border-radius:8px;background:var(--accent);color:#fff;text-decoration:none;font-weight:600;">Explore Crestbound →</a>
</div>

---

## See also

- [Crestbound]({{ '/wiki/crestbound/' | relative_url }}): spend your XP collecting Crests in the portal
- [Emote commands]({{ '/wiki/emotes/' | relative_url }}): react with the perfect GIF (and `/meme`)
- [Member experience]({{ '/wiki/members/' | relative_url }}): what your members see day to day
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
