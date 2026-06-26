---
layout: wiki
title: "Emote commands"
permalink: /wiki/emotes/
wiki: true
wiki_category: "Engagement"
summary: Post the perfect reaction GIF with /emote, /e, /cry, /hug, /dance and more — hundreds of emotes with autocomplete, an AI-picked theme that fits your server, a personal default theme via /emotestyle, @member targeting, and server controls in /settings.
wiki_keywords: [emote, emotes, /emote, /e, /cry, /hug, /dance, /meme, meme, memes, gif, gifs, reaction, react, klipy, emotestyle, theme, flavor pack, /settings emotes]
description: How Server Assistant's emote commands work — /emote and its shortcuts post a themed GIF, the AI picks a fitting theme for bare emotes (using your AI allowance, free trial included), /emotestyle sets your personal default, and owners tune it all in /settings.
---

# 😄 Emote commands

React with the perfect GIF in one tap. Server Assistant ships hundreds of emotes —
baselined on the classic MMO emote sets (WoW and friends) — posted as GIFs sourced
from **KLIPY**.

## The commands

- **`/emote <name> [genre] [member]`** — post any emote. The `name` field has
  **autocomplete**, so start typing (`cry`, `dance`, `facepalm`, `wave`…) and pick from
  the list. Common aliases work too (`lol` → laugh, `ty` → thank).
- **`/e …`** — a shorthand alias for `/emote`, same options.
- **`/cry`**, **`/hug`**, **`/dance`** — quick shortcuts for the most-used ones.
- **`/emotestyle <subject>`** — set your **personal default theme** (see below).

## How the theme is chosen

- **Bare emote** (`/cry`): the bot **picks a theme automatically** that fits your
  server and the moment, then grabs a **random** matching GIF — so it's fresh each time.
- **Your own genre** (`/cry anime`, `/cry wow`, `/cry naruto`): anything goes — the genre
  is a live GIF search, so any subject works.
- **Your personal default** (`/emotestyle anime`): your bare emotes lean your way by
  default, across **every server** you share with Server Assistant. `/emotestyle clear`
  removes it; `/emotestyle` on its own shows your current one.

The automatic theme uses your server's **AI allowance — the free 150K trial counts** —
and it's **not** Premium-only. When that allowance is used up, emotes simply fall back
to a plain random GIF, so the commands always work.

## Aiming an emote at someone

Social emotes support an optional member: **`/hug @member`**, `/pat @member`,
`/wave @member`, and so on. The post mentions the person you're reacting to.

## Memes — `/meme <search>`

**`/meme <search>`** posts a meme image matching what you type — `/meme distracted
boyfriend`, `/meme this is fine`, `/meme success kid`. Memes are sourced from **KLIPY**.
They share the emote feature's server controls (channel allowlist, rate limit and
NSFW safe-search) and have their own on/off toggle in `/settings → Emotes`.

## Server controls — `/settings → ⚙️ Settings → Emotes`

Owners and admins can:

- **Turn emotes on or off** for the server.
- **Restrict them to specific channels** (default: all channels).
- **Set a rate limit** (per member, per channel) to keep chat tidy.
- **Toggle the AI theme-pick.**
- **Allow spicier GIFs in NSFW channels** — off by default; safe-search is always on
  outside of NSFW channels.
- **Enable the “flavor pack”** — a handful of cheekier emotes (off by default).

## See also

- [XP &amp; leveling]({{ '/wiki/leveling/' | relative_url }})
- [Member experience]({{ '/wiki/members/' | relative_url }})
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
