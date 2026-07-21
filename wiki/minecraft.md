---
layout: wiki
title: "Minecraft ↔ Discord bridge (MCDC)"
permalink: /wiki/minecraft/
wiki: true
wiki_category: "Features"
summary: Link one Discord channel to your Minecraft (Paper/Spigot) server with a small free plugin for two-way chat, real player identity, relayed server events, an /online list with a live topic count, and optional live AI translation both ways, all with no passwords or remote-console access leaving your machine.
wiki_keywords: [minecraft, mcdc, discord, bridge, chat bridge, paper, spigot, plugin, /mcdc, wizard, /settings, /online, translate, translation, server events, join, leave, death, advancement, skin, avatar, config.yml, java 21, 1.21]
description: How Server Assistant's Minecraft to Discord chat bridge (MCDC) works, link a Discord channel to your Paper/Spigot server with a free plugin for two-way chat with real player identity, relayed events, an /online count, and optional live AI translation, with chat relayed in transit and not stored.
---

# Minecraft ↔ Discord bridge

<span class="cmd-tag free">FREE</span> &nbsp;The MCDC bridge is on every plan.

The **Minecraft ↔ Discord bridge** (**MCDC**) joins one Discord channel to your
Minecraft server so in-game chat and Discord chat become a single conversation. It
uses a small **free companion plugin** on your Minecraft server, no game mods and
nothing for your players to install.

Works with **Paper** or **Spigot** servers on a recent Minecraft version. The plugin
targets modern **1.21.x**, which needs **Java 21**.

## What it does

- **Two-way chat.** In-game chat appears in your Discord channel **as the player**,
  their Minecraft name and their **skin-face avatar**, and messages sent in that Discord
  channel appear **in-game**.
- **Relayed server events.** Joins, leaves, deaths, advancements, and server start/stop
  can be posted to Discord. Each event type is a **toggle**, so you show only what you want.
- **Live AI translation, both ways** (optional, off by default). See
  [Translation](#translation) below.
- **Who's online at a glance.** **`/online`** lists the players currently in-game, and the
  linked channel's **topic** keeps a live count, for example `🟢 7/40 online`.

## Setup

Four steps, run once by the server owner (**Manage Server** permission is needed for the
setup command):

1. **In Discord, run `/mcdc`** (or open **`/settings → Minecraft`**) to open the wizard,
   then **pick the channel to bridge** from the dropdown, or press **Create a channel for
   me** and let Server Assistant make one. On linking, the wizard hands you a paste-ready
   config (a **relay URL** and a **token**) and a link to download the plugin.
2. **Download the MCDC plugin `.jar`** and drop it into your Minecraft server's
   **`plugins/`** folder.
3. **Start the server once.** The plugin creates its config file at
   **`plugins/MCDC/config.yml`**. Paste the **two lines** from step 1 (the relay URL and
   token) into that file.
4. **Restart the server.** The bridge connects, and the linked channel goes live.

> **Requirements.** A **Paper** or **Spigot** server on a recent Minecraft version. The
> plugin targets **1.21.x**, which requires **Java 21**.

> **One server per Discord server.** In this version you can link **one** Minecraft
> server to each Discord server (one active bridge at a time). Reopen the `/mcdc` wizard to
> point the bridge at a different channel.

Download the plugin here — drop the `.jar` into your server's `plugins/` folder:
**[⬇ Download the MCDC plugin ({{ site.mcdc_plugin_version }})]({{ '/downloads/mcdc-plugin.jar' | relative_url }})**.
(the `/mcdc` wizard also gives you this download link.)

## Plugin settings (`config.yml`) {#config}

Most people only ever paste the **relay URL** and **token** and leave everything else
alone. The plugin generates `plugins/MCDC/config.yml` on first start, and these are the
knobs it holds:

| Setting | What it does |
|---|---|
| `relay-url` | The relay address from the `/mcdc` wizard. Until it's set to a real value, the plugin stays idle and makes no network calls. |
| `token` | Your link token from the `/mcdc` wizard. Keep it secret — treat it like a password. |
| `join-notice` | Shows each player an in-game notice on join that chat is bridged to Discord. This is a **privacy requirement — please keep it on** (`true`). |
| `join-notice-text` | The wording of that notice. Supports `&` colour codes. |
| `discord-to-mc-format` | How Discord messages look in-game. Placeholders `{author}` and `{text}`, with `&` colour codes — default `&9[Discord] &b{author}&7: &f{text}`. |
| `relay.chat` | Relay in-game chat to Discord. |
| `relay.join` / `relay.leave` | Relay player joins / leaves. |
| `relay.death` | Relay death messages. |
| `relay.advancement` | Relay advancements. |
| `relay.server-start-stop` | Relay server start and stop. |
| `poll-wait-seconds` | How long the plugin waits for Discord messages on each check (default 25). |
| `presence-interval-seconds` | How often the online count and player list are refreshed (default 60). |

Each `relay:` line is an independent **on/off toggle**, so you can post only the events you
want. After editing the file, restart the server (or re-run the bridge) to pick up changes.

## Commands

- **`/mcdc`**: opens the setup & customization wizard (pick/create a channel, get your
  plugin config, and toggle filtering, events, the topic count and translation, rotate the
  token, or unlink). Owner / **Manage Server** only. Also in `/settings → Minecraft`.
- **`/online`**: list who's currently in-game; anyone can run it.

## Translation {#translation}

Turn on **live AI translation** and everyone reads **one conversation**, whichever side
they're on. Set a target language from the **Translation** button in the `/mcdc` wizard (or
turn it off there), and chat is translated **both ways**, in-game messages into that
language for Discord and Discord messages into that language for in-game.

- It is **off by default**, switch it on only when you want it.
- Text that is **already in your chosen language is left alone**, no needless re-wording.
- Translation is handled by Server Assistant's AI, the same engine behind the bot's
  existing [`/translate`]({{ '/wiki/ai/' | relative_url }}) feature.

## Keeping chat clean & safe {#safety}

The bridge respects your server's own moderation, in **both** directions:

- **Your AutoMod filter applies to bridged chat.** Messages crossing the bridge are run
  through your server's existing **AutoMod word list (lexicon)**, and any matched words are
  masked to `***` in the copy that's delivered — so a word you already block in Discord
  stays blocked when it comes from Minecraft, and vice versa. **Filtering is optional** — a
  toggle in the `/mcdc` wizard, on by default, that you can turn off to relay chat verbatim.
- **No surprise pings from in-game.** A player typing `@everyone` (or any other mention) in
  Minecraft **cannot** ping your Discord. Mentions in bridged messages are handled safely and
  show as plain text, so nobody can mass-ping the server through the game.

## Privacy

The bridge is built to keep your server's secrets on your server:

- **No passwords, no remote console.** The plugin never exposes RCON and no admin
  passwords ever leave your machine. It only makes **outbound HTTPS** connections.
- **Relayed in transit, not stored.** In-game chat and player usernames are passed
  between Minecraft and Discord to deliver the message, **and not stored**. When
  translation is on, that chat is processed by Server Assistant's AI translation (the same
  as `/translate`) to produce the translated text.
- **Players are told, in-game.** When a player joins, the plugin posts an in-game notice
  letting them know chat is bridged to Discord. As the server owner, you should also
  **inform your players** that the bridge is active.
- **No account linking.** This first version does **not** link Discord and Minecraft
  accounts.

## Troubleshooting {#troubleshooting}

- **The bridge won't connect.** Double-check the **relay URL** and **token** were pasted
  in exactly as the `/mcdc` wizard gave them, make sure your Minecraft server can reach the
  internet (the plugin needs **outbound HTTPS**), then check the `/mcdc` wizard (it shows
  the connection state). The bridge also reconnects on its own if the link drops.
- **The plugin won't load.** MCDC needs **Java 21** and a **Paper** or **Spigot** server on
  **1.21.x**. An older Java or server version will stop the plugin loading.
- **Chat shows as a plain bot message, not the player.** In-game chat is posted through a
  channel **webhook** so it can show the player's name and skin-face avatar. If the bot
  can't manage that webhook it falls back to a plain message — give the bot the **Manage
  Webhooks** permission in the linked channel.
- **The online count in the topic looks stale.** The channel **topic** count updates about
  once a minute and is rate-limited, so a change can take a few minutes to appear. The bot
  also needs the **Manage Channel** permission to edit the topic.
- **`/online` says nothing's linked.** The plugin isn't running or hasn't connected yet.
  Start your Minecraft server and check the `/mcdc` wizard (it shows the connection state)
  to confirm the bridge is live.

## Coming soon

This first version keeps things focused: two-way chat, real player identity, relayed
events, an `/online` count, and optional translation. Plenty more is on the drawing board
for future updates. The ideas below are **planned or under consideration, not yet
available**, and everything here is **subject to change**, some may arrive later, look
different, or not ship at all. No dates yet.

- **Link Discord and Minecraft accounts.** Connect the two so a player is recognised as the
  same person on both sides, the foundation for the role, rank and trust features below.
- **Discord roles and ranks in-game.** Mirror a Discord role to an in-game group, sync
  nicknames, and let a booster or supporter role unlock an in-game perk.
- **More of your server in the bridge.** Bridge extra channels (factions, staff, towny),
  show Discord images and attachments as links in-game, and keep message edits and deletes
  in sync across both sides.
- **Server health at a glance.** Live performance stats (TPS, memory, lag) with alerts, and
  a clear online/offline indicator for your server.
- **Moderate from either side.** Broadcast kicks, bans and mutes, keep Discord and Minecraft
  bans and mutes in sync, and run moderation commands (kick, ban, whitelist) from Discord
  with per-role permissions, plus an optional console relay and running server commands from
  Discord.
- **Server Assistant's protection, in Minecraft.** Bring the bot's AutoMod, ThreatNet
  cross-server protection, and scam link and image guard to your in-game chat.
- **AI helpers in-game.** Ask SAi questions right in Minecraft chat, get a "while you were
  away" recap when you next log in, and a weekly AI highlight reel of your community's best
  moments.
- **SAi *in* your world.** Give SAi an actual in-game presence, a friendly character that can
  greet players, answer questions and show newcomers around, from a helpful guide standing at
  spawn to, further out, a companion that can move through the world alongside you. This one is
  a big, exploratory idea and the furthest from ready.
- **Minecraft in your Pulse.** A Minecraft section in your weekly Pulse digest, and a single
  player history that spans both Discord and Minecraft.
- **Reward time played.** Turn playtime on your Minecraft server into XP, feeding the same
  balance you already earn in Discord.
- **DM offline players.** Send a Discord message to a player who isn't currently online.
- **Richer formatting.** Markdown and emoji carried across both ways, PlaceholderAPI
  support, and more language options.
- **Bigger setups.** Bridge several servers into one channel or one server into several
  channels, support for proxy networks (BungeeCord/Velocity) and cross-server chat, Bedrock
  players via Geyser, and Dynmap web-chat.

## See also

- [SAi (AI assistant)]({{ '/wiki/ai/' | relative_url }}): the AI behind live translation
- [Commands]({{ '/wiki/commands/' | relative_url }}): the full slash-command reference
