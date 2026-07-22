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
- **Discord reactions in-game.** When someone reacts to a message in the linked Discord
  channel, it shows up in Minecraft (for example `Alice reacted 👍 to Bob: "gg"`). Toggle it
  in the `/mcdc` wizard. On by default.
- **Live AI translation, both ways** (optional, off by default). See
  [Translation](#translation) below.
- **Who's online at a glance.** **`/online`** lists the players currently in-game, and the
  linked channel's **topic** keeps a live count, for example `🟢 7/40 online`.

## Server health

<span class="cmd-tag free">FREE</span> &nbsp;The bot shows your linked server's **live health**
right in Discord — its **TPS** (ticks per second), **tick time**, **RAM** use and **uptime**
appear under the connection line in the `/mcdc` panel and as a **Server health** field in
`/online`, updated as your server reports in. A typical readout looks like:

```
🟢 TPS 19.8 · ⏱ 42ms · 🧠 2.1/4.0 GB · ⏳ up 3d 4h
```

**Optional health alerts** post a short notice to your **log/staff channel** when the server
**goes offline or comes back**, or when **TPS drops into the red**. They're **on by default**
and you can toggle them from the `/mcdc` panel. Health reporting is **free** on every plan and
needs the companion plugin **v0.4.0** or newer (it updates itself if auto-update is on).

## Ask SAi in-game

<span class="cmd-tag premium">PREMIUM</span> &nbsp;On a bridged server, your players can ask
SAi questions **without leaving Minecraft**. A player types `@sai` (or `!sai` / `!ai`) followed
by a question in chat, and SAi's answer prints straight back **in-game** — no need to switch to
Discord. For example, typing `@sai what's the nether portal ratio?` gets SAi's reply right there
in chat.

It's **off by default** — turn it on with the **Ask SAi** toggle in the `/mcdc` panel. Each
player can ask up to **15 questions every 6 hours**, and answers draw on the **same AI allowance**
as the rest of SAi.

## Moderate from Discord

<span class="cmd-tag free">FREE</span> &nbsp;When the chat scan flags a Minecraft
player, staff see **Kick** and **Ban in-game** buttons on the flag alert and can
action the player **right on your Minecraft server** — no console needed. It's
**off by default**: turn it on with the **Enforcement** toggle in the `/mcdc`
panel. Each button is **permission-gated** — only staff who already have the
matching kick/ban permission can click it. Carrying the action out in-game needs
the companion plugin **v0.5.0** or newer (it updates itself if auto-update is on).

Every MCDC moderation action — a **Kick** or **Ban** taken from an alert, and the
chat-flag alerts themselves — is recorded in your server's **log channel** and **audit
trail**, exactly like native Server Assistant moderation, so there's a full record of
what happened and who acted.

**Players can appeal.** When someone is banned or kicked, the disconnect message
they see includes a **one-time link** to a web appeal form. If they submit it,
their appeal reaches your staff to review — no Discord account required. The link
is single-use and expires.

## In your weekly Pulse

<span class="cmd-tag free">FREE</span> &nbsp;Linked servers get a **Minecraft
section in the weekly [Pulse](pulse.md) digest** — a 7-day rollup of in-game
**chat**, **joins**, **deaths** and **advancements**, right alongside the rest of
your weekly recap. It's **free** and **automatic**: it shows up on its own for any
server with the bridge linked and some in-game activity that week, with nothing to
switch on and no plugin change.

## Link your account

Players can **link their Discord and Minecraft accounts** so they're recognised as
the same person on both sides. It's **opt-in** — nothing links automatically — and
**free**.

Linking is the groundwork for features we're building on top of it — **earning XP
for in-game playtime** and keeping your **Discord roles and in-game ranks in step** —
so linking now means you're ready as those arrive.

To link:

1. In Discord, run **`/link`** to get a one-time code.
2. In Minecraft chat, type `!link <code>` within **15 minutes**.
3. The plugin confirms the link **in-game** — you're connected.

Run **`/unlink`** at any time to disconnect. Only the connection between your
**Discord account and your Minecraft UUID** is stored, never your Minecraft
username.

## Setup

Setup runs once, by the server owner (**Manage Server** permission is needed for the setup
command). You can link the bridge **entirely in-game** — no config file to edit and no
restart:

1. **Add the plugin.** [Download the MCDC plugin `.jar`]({{ '/downloads/mcdc-plugin.jar' | relative_url }}),
   drop it into your Minecraft server's **`plugins/`** folder, and **start the server**.
2. **In Discord, run `/mcdc`** (or open **`/settings → Minecraft`**) to open the wizard,
   then **pick the channel to bridge** from the dropdown, or press **Create a channel for
   me** and let Server Assistant make one. On linking, the panel shows a **ready-to-run
   line** — your `/mcdc link` command with the **token** and **relay URL** already filled
   in — plus the plugin download link.
3. **In Minecraft, run the link command.** As a server **operator** (or from the **server
   console**), run the line the panel gave you:

   ```
   /mcdc link <token> <relay-url>
   ```

   The bridge links **instantly** — the plugin validates the token, confirms which Discord
   channel it linked to, and the linked channel goes live. **No restart needed.**

**Alternative — link via the config file.** Prefer to edit the file? Paste the **relay URL**
and **token** from the wizard into **`plugins/MCDC/config.yml`** (the plugin generates it on
first start) and **restart the server**. This is the same link, just the manual route.

**A setup summary posts to your staff chat.** As soon as the bridge is linked, Server
Assistant posts a short **hierarchy self-report** to your staff channel: which **roles** it
detected, where it **sits in the role hierarchy**, what it will **monitor**, what it can
**manage**, and what it **can't** (for example, roles ranked above its own). It's a quick way
to confirm the bot is set up the way you expect. The **Sync now** button in the `/mcdc`
wizard re-checks Server Assistant's role position and **re-posts that summary on demand** —
handy after you move the bot's role or change its permissions.

> **Requirements.** A **Paper** or **Spigot** server on a recent Minecraft version. The
> plugin targets **1.21.x**, which requires **Java 21**.

> **One server per Discord server.** In this version you can link **one** Minecraft
> server to each Discord server (one active bridge at a time). Reopen the `/mcdc` wizard to
> point the bridge at a different channel.

Download the plugin here — drop the `.jar` into your server's `plugins/` folder:
**[⬇ Download the MCDC plugin ({{ site.mcdc_plugin_version }})]({{ '/downloads/mcdc-plugin.jar' | relative_url }})**.
(the `/mcdc` wizard also gives you this download link.)

## Plugin settings (`config.yml`) {#config}

You don't need to edit the config file to link the bridge — the in-game
**`/mcdc link <token> <relay-url>`** command (see [Setup](#setup)) does that for you. The file is still
there if you'd rather set the **relay URL** and **token** by hand, and it holds the rest of
the plugin's knobs. The plugin generates `plugins/MCDC/config.yml` on first start:

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
  plugin config, and toggle filtering, events, the topic count, reactions and translation,
  rotate the token, or unlink). Owner / **Manage Server** only. Also in `/settings → Minecraft`.
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
- **Your full protection scans in-game chat too.** Bridged Minecraft chat is checked by the
  **same AutoMod as your Discord** — your **word and lexicon filters**, the built-in
  **`scams` pack**, and the **known-bad-domain link blocklist**. A match raises a **staff
  alert** (with the **Kick** and **Ban in-game** buttons from
  [Moderate from Discord](#moderate-from-discord)), so your **scam-link and phishing
  protection already covers Minecraft**, not just Discord. This runs whenever your server's
  **AutoMod is on**.
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
- **Account linking is opt-in.** Linking your Discord and Minecraft accounts is
  **optional** and started by you (`/link`, then `!link <code>`) — until you do, the
  bridge does not connect the two. When you do link, only the **Discord ID ↔
  Minecraft UUID** connection is stored (never your Minecraft username), and you can
  `/unlink` any time. See [Link your account](#link-your-account) and the
  [Privacy Policy]({{ '/privacy/' | relative_url }}).

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

The bridge has grown well past its first version — two-way chat, server health, moderation
from Discord, full chat protection, Ask SAi in-game, account linking and a weekly Pulse
section are all **live today**. Plenty more is still on the drawing board. The ideas below
are **planned or under consideration, not yet available**, and everything here is **subject
to change**, some may arrive later, look different, or not ship at all. No dates yet.

- **Earn XP for playtime.** Now that Discord and Minecraft accounts can be linked (see
  [Link your account](#link-your-account)), the next step is crediting **XP for the time you
  spend in-game** to your account-wide balance, feeding the same balance you already earn in
  Discord. *(Being built.)*
- **Discord roles and ranks in step.** Mirror a Discord role to an in-game group, sync
  nicknames, and let a booster or supporter role unlock an in-game perk. *(Planned.)*
- **ThreatNet in Minecraft.** Extend [ThreatNet]({{ '/wiki/threatnet/' | relative_url }})
  cross-server protection to your Minecraft server, so **known bad actors can be stopped from
  joining** in the first place. *(On the roadmap.)*
- **More of your server in the bridge.** Bridge extra channels (factions, staff, towny),
  show Discord images and attachments as links in-game, and keep message edits and deletes
  in sync across both sides.
- **More moderation sync.** Keep Discord and Minecraft **bans and mutes in step**, broadcast
  mutes both ways, and optionally relay the server console or run server commands from
  Discord. *(Kicking and banning a flagged player from Discord is already live — see
  [Moderate from Discord](#moderate-from-discord).)*
- **More AI in-game.** A "while you were away" recap when you next log in, and a weekly AI
  highlight reel of your community's best moments. *(Asking SAi in-game is already live — see
  [Ask SAi in-game](#ask-sai-in-game).)*
- **SAi *in* your world.** Give SAi an actual in-game presence, a friendly character that can
  greet players, answer questions and show newcomers around, from a helpful guide standing at
  spawn to, further out, a companion that can move through the world alongside you. This one is
  a big, exploratory idea and the furthest from ready.
- **One player history across both sides.** A single activity history that spans a linked
  player's Discord and Minecraft presence.
- **DM offline players.** Send a Discord message to a player who isn't currently online.
- **Richer formatting.** Markdown and emoji carried across both ways, PlaceholderAPI
  support, and more language options.
- **Bigger setups.** Bridge several servers into one channel or one server into several
  channels, support for proxy networks (BungeeCord/Velocity) and cross-server chat, Bedrock
  players via Geyser, and Dynmap web-chat.

## See also

- [SAi (AI assistant)]({{ '/wiki/ai/' | relative_url }}): the AI behind live translation
- [Commands]({{ '/wiki/commands/' | relative_url }}): the full slash-command reference
