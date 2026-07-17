---
layout: wiki
title: "Group rolls (/roll)"
permalink: /wiki/roll/
wiki: true
wiki_category: "Features"
summary: Settle giveaways and loot with /roll, a timed group roll where everyone taps Need, Greed or Pass, each gets a hidden 1 to 100 roll, and (WoW-style) Need beats Greed with the highest roll winning.
wiki_keywords: [roll, /roll, group roll, loot roll, need, greed, pass, need before greed, dice, giveaway, raffle, random, winner, wow, world of warcraft]
description: How Server Assistant's /roll command works, start a timed Need/Greed/Pass group roll for a prize or drop; Need beats Greed, highest roll wins, ties are re-rolled, and results are revealed in the embed.
---

# Group rolls

<span class="cmd-tag free">FREE</span> &nbsp;`/roll` is on every plan.

Need to decide who gets a prize, a giveaway, or the loot? **`/roll`** runs a quick,
timed group roll in the classic *World of Warcraft* **"Need before Greed"** style, 
no spreadsheets, no arguing.

## How it works

1. Anyone runs **`/roll`** (optionally naming what it's for). The bot posts a roll
   with **Need**, **Greed** and **Pass** buttons and a live countdown.
2. Everyone taps their choice. Each person is given a **hidden 1 to 100 roll**, locked
   on their first tap, switching between Need, Greed and Pass keeps your number, so
   there's no re-rolling for a better one.
3. When the timer ends, the winner is revealed in the same message:
   - **Need beats Greed**: *any* Need roll outranks *every* Greed roll.
   - Within the winning tier, the **highest roll wins**.
   - **Ties are re-rolled** automatically between the tied players.
   - **Pass** just sits it out.

Only the running tally (how many chose Need / Greed / Pass) is visible while the
roll is open, everyone's actual numbers stay secret until the reveal.

> **Need vs Greed, the etiquette:** tap **Need** if you genuinely want it, **Greed**
> if you'd take it but don't mind losing. It's on the honour system, exactly like a
> manual raid roll.

## Options

**`/roll [item] [seconds]`**, both optional:

- **`item`**: what you're rolling for (e.g. a prize or drop name). Shown in the title.
- **`seconds`**: how long the roll stays open, **10 to 300** seconds (default **60**).

**Anyone** can start a roll, and **one roll runs per channel** at a time, wait for
the current one to finish before starting another in the same channel.

## See also

- [Emote commands]({{ '/wiki/emotes/' | relative_url }}): post the perfect reaction GIF
- [XP &amp; leveling]({{ '/wiki/leveling/' | relative_url }}): reward your most active members
