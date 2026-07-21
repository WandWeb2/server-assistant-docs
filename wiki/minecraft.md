---
layout: wiki
title: "Minecraft ↔ Discord bridge (MCDC)"
permalink: /wiki/minecraft/
wiki: true
wiki_category: "Features"
summary: Link one Discord channel to your Minecraft (Paper/Spigot) server with a small free plugin for two-way chat, real player identity, relayed server events, an /online list with a live topic count, and optional live AI translation both ways, all with no passwords or remote-console access leaving your machine.
wiki_keywords: [minecraft, mcdc, discord, bridge, chat bridge, paper, spigot, plugin, /mcdc, /mcdc link, /online, translate, translation, server events, join, leave, death, advancement, skin, avatar, config.yml, java 21, 1.21]
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

1. **In Discord, run `/mcdc link`** and pick the channel you want bridged. The command
   hands you a paste-ready config (a **relay URL** and a **token**) and a link to download
   the plugin.
2. **Download the MCDC plugin `.jar`** and drop it into your Minecraft server's
   **`plugins/`** folder.
3. **Start the server once.** The plugin creates its config file at
   **`plugins/MCDC/config.yml`**. Paste the **two lines** from step 1 (the relay URL and
   token) into that file.
4. **Restart the server.** The bridge connects, and the linked channel goes live.

> **Requirements.** A **Paper** or **Spigot** server on a recent Minecraft version. The
> plugin targets **1.21.x**, which requires **Java 21**.

The plugin is distributed via GitHub Releases:
**[MCDC plugin releases](https://github.com/WandWeb2/mcdc-plugin/releases)** — grab the
latest `.jar` from there. (`/mcdc link` in Discord also links you straight to it.)

## Commands

- **`/mcdc link`**: pick the channel to bridge and get your paste-ready config plus the
  plugin download link. Needs **Manage Server**.
- **`/mcdc status`**: show the current link, connection state, and which events and
  translation are enabled.
- **`/mcdc translate <language|off>`**: turn live translation on to a target language, or
  **off**. See [Translation](#translation).
- **`/mcdc unlink`**: disconnect the bridge and stop relaying.
- **`/online`**: list the players currently in-game. Anyone can run it.

## Translation {#translation}

Turn on **live AI translation** and everyone reads **one conversation**, whichever side
they're on. Set **one target language** with `/mcdc translate <language>`, and chat is
translated **both ways**, in-game messages into that language for Discord and Discord
messages into that language for in-game.

- It is **off by default**, switch it on only when you want it.
- Text that is **already in your chosen language is left alone**, no needless re-wording.
- Translation is handled by Server Assistant's AI, the same engine behind the bot's
  existing [`/translate`]({{ '/wiki/ai/' | relative_url }}) feature.

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

## See also

- [SAi (AI assistant)]({{ '/wiki/ai/' | relative_url }}): the AI behind live translation
- [Commands]({{ '/wiki/commands/' | relative_url }}): the full slash-command reference
