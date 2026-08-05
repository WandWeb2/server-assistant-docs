---
layout: wiki
title: "Minecraft ↔ Discord bridge (MCDC)"
permalink: /wiki/minecraft/
wiki: true
wiki_category: "Features"
summary: Link one Discord channel to your Minecraft (Paper/Spigot) server with a small free plugin for two-way chat, real player identity, relayed server events, an /online list with a live topic count, XP for in-game playtime, an optional one-way Discord-role to Minecraft-rank mirror, a configurable in-game @sai assistant with an in-world companion, and optional live AI translation both ways, all with no passwords or remote-console access leaving your machine.
wiki_keywords: [minecraft, mcdc, discord, bridge, chat bridge, paper, spigot, plugin, /mcdc, wizard, /settings, /online, /link, /unlink, /saportal, translate, translation, server events, join, leave, death, advancement, skin, avatar, config.yml, java 21, 1.21, playtime xp, minecraft xp, rank sync, luckperms, roles and ranks, sai studio, companion, npc, in-game ai]
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
  linked channel's **topic** keeps a live count, for example `🟢 7/40 online`. Anyone can
  run it, **in the bridged channel** — run elsewhere it just points you at the right one.
- **XP for in-game time.** Players who've linked their accounts earn XP for the time they
  spend in-game, into the same account-wide balance they earn in Discord. Free and
  automatic. See [Earn XP for playtime](#playtime-xp).
- **Discord roles → Minecraft ranks.** An optional **one-way mirror** that keeps a linked
  player's in-game rank matching the Discord role your staff already gave them. Off until
  you switch it on. See [Roles and ranks in step](#rank-sync).

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

## Ask SAi in-game {#ask-sai-in-game}

<span class="cmd-tag premium">PREMIUM</span> &nbsp;On a bridged server, your players can ask
SAi questions **without leaving Minecraft**. A player types `@sai` (or `!sai` / `!ai`) followed
by a question in chat, and SAi's answer prints straight back **in-game** — no need to switch to
Discord. For example, typing `@sai what's the nether portal ratio?` gets SAi's reply right there
in chat.

It's **off by default**, and you don't just switch it on — you choose **who may ask**. The
control is a four-way **access** setting in the `/mcdc` panel (main page, or **🤖 @sai
Studio → Access**):

| Access | Who can ask `@sai` in-game |
|---|---|
| **Off — nobody** | @sai never answers in game chat. **The default.** |
| **Everyone in chat** | Any player on your server. |
| **Linked members only** | Only players who've [linked](#link-your-account) their Minecraft and Discord accounts. |
| **Staff only** | Only linked players whose Discord account holds a staff role. |

If it can't work out whether someone qualifies, the answer is **no** — it fails closed.

Each player can ask up to **15 questions every 6 hours**, and answers draw on the **same AI
allowance** as the rest of SAi.

## @sai Studio {#sai-studio}

<span class="cmd-tag premium">PREMIUM</span> &nbsp;**@sai Studio** is where you make the
in-game assistant *yours* — its name, how it talks, what it knows about your server, and
who it talks to. Open it from **`/mcdc` → 🤖 @sai Studio** (owner / **Manage Server** only).
The settings **save on any plan**; @sai only *answers players* on Premium.

- **Give it a name.** Up to **32 characters** — the default is `SAi`. Players address it by
  the same `@sai` / `!sai` / `!ai` prefixes either way; the name is what it answers *as*.
  **Rename it and it becomes fully white-labelled**: it will never name Server Assistant,
  even if a player asks it directly.
- **Set a greeting.** An optional opening line for a first reply, up to **200 characters**.
  Leave it blank for none.
- **Pick a tone.** **Concise** (terse & factual), **Friendly** (warm & plain — the default),
  or **In-character** (playful, on-theme).
- **Teach it your server.** The **server knowledge pack** is up to **2,000 characters** of
  authoritative notes about *your* server — its rules, ranks, shops, commands, events, lore.
  @sai answers server-specific questions from your pack **first**, falls back to its general
  Minecraft knowledge (crafting, redstone, mobs, vanilla commands) for everything else, and
  when neither covers it, it says so and points the player at your staff. It never guesses.
- **Choose the audience.** The same four-way **access** setting as
  [Ask SAi in-game](#ask-sai-in-game) above.

> **@sai can never change permissions, roles or ranks** — and it will never claim it can.
> That safeguard is fixed in every tone, name and knowledge pack you can configure; nothing
> you write in the Studio can unlock it.

## SAi in your world: the companion {#companion}

<span class="cmd-tag premium">PREMIUM</span> &nbsp;Beyond answering in public chat, SAi can
have an **in-world presence**: a **companion** a player can summon in-game and ask
questions **privately**. The reply goes to **that player only** — it is *not* echoed into
your linked Discord channel, so a quiet "how do I get to spawn?" stays between the player
and the assistant.

- **Off by default.** Turn it on at **`/mcdc` → 🤖 @sai Studio → 🧚 SAi Companion**.
- **Auto-spawn for newcomers** is a separate toggle, so a first-time joiner can be met by
  the companion without knowing to summon one.
- It's **the same assistant**: your Studio **name, tone, greeting and knowledge pack** all
  carry over, and it obeys the same **access** setting and per-player rules — a
  *Linked members only* server doesn't get a companion loophole.
- It shares the **same 15 questions per 6 hours** budget as asking in chat.
- Summoning happens **in game**, and the companion is served by the plugin, so keep the
  plugin **up to date** (it updates itself if auto-update is on).

## Moderate from Discord {#moderate-from-discord}

<span class="cmd-tag free">FREE</span> &nbsp;When the filter flags a Minecraft
player (in chat or on any of the other surfaces in
[Keeping in-game text clean & safe](#safety)), staff see **Kick &amp; Warn** and
**Ban in-game** buttons on the flag alert and can
action the player **right on your Minecraft server**, no console needed. It's
**off by default**: turn it on with the **Enforcement** toggle in the `/mcdc`
panel. Each button is **permission-gated**: only staff who already have the
matching kick/ban permission can click it. Carrying the action out in-game needs
the companion plugin **v0.5.0** or newer (it updates itself if auto-update is on).

**You can also act on a player who was never flagged.** **`/mcban <player> <reason>`**
and **`/mckick <player> <reason>`** kick or ban **by player name**, for the griefer
who never tripped a filter and isn't in your Discord. Same opt-in, same permission
gates, and the action goes on the same record as the buttons.

**Punishments announce in game.** When Server Assistant kicks or bans someone
in-game, one line is broadcast to game chat, for example `Griefer was banned by
Staff.` It names the **player and the action only**: never the reason (which often
quotes the offending text) and never the individual moderator (who is already on your
audit trail). Only punishments Server Assistant itself issues are announced; a ban
from your console or another plugin is left to that tool's own messaging.

Every MCDC moderation action (a **Kick &amp; Warn** or **Ban** taken from an alert,
the `/mcban` and `/mckick` commands, and the flag alerts themselves) is recorded in
your server's **log channel** and **audit trail**, exactly like native Server
Assistant moderation, so there's a full record of what happened and who acted. A kick
also puts a **warning on the player's record**, so repeat behaviour is visible. And a
ban or kick Server Assistant **didn't** issue (from your console or another plugin) is
captured and surfaced to staff too, so it's never invisible.

**Players can appeal a ban.** A banned player sees a **link to a web appeal form** on
the disconnect screen, and again on the ban screen **every time they try to
rejoin**, so closing the game doesn't lose it. That includes bans Server Assistant
didn't issue. If they submit it, their appeal reaches your staff to review, no
Discord account required. Staff can approve, approve **with a warning** on the
record, or deny.

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

Linking is what unlocks the features that need to know you're the same person on both
sides: your in-game time **earns XP** (see [Earn XP for playtime](#playtime-xp)) and, if
your server turns it on, your **Discord roles keep your in-game rank in step** (see
[Roles and ranks in step](#rank-sync)).

**The one-click way.** If your server shows a **Discord invite on its join notice**,
clicking it does both jobs at once: you sign in with Discord (Discord's own consent
screen is what authorises it), your accounts are linked, and you land in the server's
Discord. No code to type.

**Or link with a code:**

1. In Discord, run **`/link`** to get a one-time code.
2. In Minecraft chat, type `!link <code>` within **15 minutes**.
3. The plugin confirms the link **in-game**: you're connected.

Run **`/unlink`** at any time to disconnect. Only the connection between your
**Discord account and your Minecraft UUID** is stored, never your Minecraft
username.

## Earn XP for playtime {#playtime-xp}

<span class="cmd-tag free">FREE</span> &nbsp;Once you've [linked your account](#link-your-account),
**the time you spend on the bridged Minecraft server earns XP** — into the *same*
account-wide balance you already build up by chatting and sitting in voice on Discord.
There's no separate Minecraft score and nothing to switch on.

- **The rate matches voice.** Each minute in-game is worth the same base XP as a minute in
  a voice channel.
- **It counts active time, not AFK time.** XP accrues while you're connected and doing
  something. After about **five minutes with no activity** (an AFK pool, an auto-fishing
  rig), XP pauses until you're active again. Nothing is kicked or interrupted, only the
  earning stops, and coming back resumes it instantly. Your server's operator can adjust
  the idle window in the plugin config (`afk-minutes`).
- **Double XP counts.** A server-wide **Double-XP event** or your own **personal Double-XP
  buff** doubles your in-game earnings exactly as it doubles chat and voice XP — and, as
  everywhere else, the boost is **capped at 2×** even if both are running.
- **There's an hourly ceiling.** A rolling **hourly cap** applies to Minecraft XP, the same
  way one applies to voice, so a very long session can't run away with the leaderboard.
- **Linked players only.** Unlinked players earn nothing — the bot has no way to know whose
  balance to credit, and it never guesses. Linking is opt-in and reversible.
- **No plan requirement.** The server just needs Server Assistant set up and the bridge
  linked — playtime XP is free on every plan.

Your Minecraft XP shows up in `/rank`, on `/leaderboard` and in your
[Crestbound]({{ '/wiki/crestbound/' | relative_url }}) balance like any other XP, because
it *is* the same XP. One thing to note: because you're in-game rather than in a Discord
channel, **level-ups earned in Minecraft aren't announced** in your level-up channel — the
XP still lands, you just won't get a fanfare for it.

See the [XP &amp; leveling guide]({{ '/wiki/leveling/' | relative_url }}) for the full
picture.

## Roles and ranks in step {#rank-sync}

<span class="cmd-tag free">FREE</span> &nbsp;**Rank sync** keeps a linked player's
**in-game rank** matching the **Discord role** your staff already gave them. Set it up in
**`/mcdc` → 🏅 Rank sync**: pick a Discord role, name the in-game rank (your **LuckPerms**
group, e.g. `vip`), and flip the master switch on. A role change made in Discord reaches
the game server within seconds.

> **It is a one-way mirror, and only that.** Server Assistant copies **Discord →
> Minecraft**, never the other way, and only for the roles *you* listed. It **never changes
> anyone's Discord roles**, and there is **no command, chat message or `@sai` request that
> can get anyone a rank** — not from a player, not from staff, not from anyone. Rank changes
> only ever start with an authorised person acting in Discord's own controls. Asking the bot
> for a rank does not work and never will.

It is **off by default** and touches nothing until you both switch it on *and* map at least
one role.

**Roles it refuses to map.** These are rejected when you add the mapping **and** re-checked
on every sync (a role can be moved after you map it):

| Refused | Why |
|---|---|
| Any role **at or above** Server Assistant's own top role | It's above the bot in your hierarchy — that's your Operations / Executive Operator tier, out of reach **by position**, not by name. |
| Any role carrying **Administrator** | Admin-level roles are never mirrored to a game rank. |
| **`@everyone`** | That's every member in the server, not a rank. |
| Bot / integration-managed roles | Discord owns those; the bot won't mirror them. |

**How it behaves day to day:**

- **Several mapped roles?** The player gets the rank of their **highest-positioned** Discord
  role.
- **No mapped role any more?** The managed ranks are **removed** in-game — that's how a
  demotion travels across.
- **Linked players only.** Anyone who hasn't linked, or who the bot can't confidently
  resolve, is **left alone** rather than guessed at.
- **Only the ranks you named.** The bot only ever touches the rank names in your mapping.
- **Bursts are batched.** Granting a role to two hundred members results in **one** sync,
  and the bridge's ordinary refresh pass picks up anything missed within about a minute.
- **All-or-nothing.** If anything can't be resolved safely, **no rank data is sent at all**
  — never a half-applied sync.
- **🔄 Sync now** in the `/mcdc` wizard re-runs the mirror on demand.

Needs the companion plugin **v0.15.0** or newer and **LuckPerms** on your Minecraft server.

## Setup {#setup}

Setup runs once, by the server owner (**Manage Server** permission is needed for the setup
command). You can link the bridge with **one console command**: no config file to edit and
no restart.

1. **Add the plugin.** [Download the MCDC plugin `.jar`]({{ '/downloads/mcdc-plugin.jar' | relative_url }}),
   drop it into your Minecraft server's **`plugins/`** folder, and **start the server**.
2. **In Discord, run `/mcdc`** (or open **`/settings → Minecraft`**) to open the wizard,
   then **pick the channel to bridge** from the dropdown, or press **Create a channel for
   me** and let Server Assistant make one. On linking, the panel shows a **ready-to-run
   line** — your `/mcdc link` command with the **token** and **relay URL** already filled
   in — plus the plugin download link.
3. **At your server console, run the link command.** From the **server console** (not
   typed in game chat: a command typed in chat is readable by other plugins and written
   to your server log), run the line the panel gave you:

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

You don't need to edit the config file to link the bridge — the console
**`/mcdc link <token> <relay-url>`** command (see [Setup](#setup)) does that for you. The file is still
there if you'd rather set the **relay URL** and **token** by hand, and it holds the rest of
the plugin's knobs. The plugin generates `plugins/MCDC/config.yml` on first start:

| Setting | What it does |
|---|---|
| `relay-url` | The relay address from the `/mcdc` wizard. Until it's set to a real value, the plugin stays idle and makes no network calls. |
| `token` | Your link token from the `/mcdc` wizard. Keep it secret — treat it like a password. |
| `join-notice` | Shows each player the **bridge** notice on join (*"Chat here is bridged to Discord"*). Yours to reword via `join-notice-text` or switch off. **Please keep it on.** Note this key does **not** control the mandatory **privacy** notice about private-message filtering, which always sends and has no setting; see [Privacy](#privacy). |
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

### In Discord

- **`/mcdc`**: opens the setup & customization wizard (pick/create a channel, get your
  plugin config, and toggle events, the topic count, reactions and translation, open
  **@sai Studio** and **Rank sync**, rotate the token, or unlink). Owner / **Manage
  Server** only. Also in `/settings → Minecraft`.
- **`/online`**: list who's currently in-game. **Anyone can run it**, and the reply is
  private to you — but it's **scoped to your bridged channel**. Run it somewhere else and
  it doesn't answer, it points you at the right channel instead
  (*"Try `/online` in #minecraft — that's this server's Minecraft chat channel."*).
- **`/mcban <player> <reason>`** · **`/mckick <player> <reason>`**: ban or kick a player
  on your Minecraft server **by name**, even if they were never flagged. Staff only
  (the usual ban/kick permission gates), and only when the **Enforcement** toggle is on.
  See [Moderate from Discord](#moderate-from-discord).
- **`/link`** · **`/unlink`**: connect or disconnect your own Minecraft account. Anyone can
  run them, on themselves only. See [Link your account](#link-your-account).

### In Minecraft {#in-game-commands}

The bridge adds a small number of things you can type **in the game**, and it's worth
knowing which are commands and which are just chat:

| In-game | What it does | Who |
|---|---|---|
| **`/mcdc link <token> <relay-url>`** | Links the bridge to your Discord channel, instantly and with no restart. You only run this **once**, during [Setup](#setup) — the `/mcdc` wizard hands you the whole line pre-filled. **From plugin v0.24.0 this must be run at the server console, not typed in game.** A command typed in chat is readable by every other plugin on your server and is written to your server log, so a token pasted there should be treated as exposed. If you would rather not use the console, paste the `relay-url` and `token` block from the `/mcdc` wizard straight into `config.yml` instead — that never puts the token through a command at all. | The server **console** only |
| **`/saportal`** | Prints your **customer portal** address into chat as a clickable link, so a player can reach their account without hunting for the URL. The address is served by Server Assistant, so it stays correct without a plugin update. | Players |
| **`!link <code>`** | Not a command — a **chat message**. Redeems the one-time code `/link` gave you in Discord, within **15 minutes**. See [Link your account](#link-your-account). | Any player |
| **`@sai …`** · **`!sai …`** · **`!ai …`** | Also chat, not commands. Ask the assistant a question in-game. Subject to your **access** setting. See [Ask SAi in-game](#ask-sai-in-game). | Depends on access |

> **There is no in-game `/sai` command** and no in-game `/link` — asking SAi is done with
> the chat prefixes above, and `/link` is a **Discord** command that mints the code you
> redeem in-game with `!link`.

**The plugin keeps itself up to date.** It checks with Server Assistant for a newer build,
and only installs one whose **checksum matches** what we published — a mismatch blocks the
update rather than installing anything, and the new build is staged for your next restart.
When it does update, the bot posts a short note to your log channel
(*"⛏️ Your Minecraft bridge plugin updated to **vX.Y.Z**."*).

## Translation {#translation}

Turn on **live AI translation** and everyone reads **one conversation**, whichever side
they're on. Set a target language from the **Translation** button in the `/mcdc` wizard (or
turn it off there), and chat is translated **both ways**, in-game messages into that
language for Discord and Discord messages into that language for in-game.

- It is **off by default**, switch it on only when you want it.
- Text that is **already in your chosen language is left alone**, no needless re-wording.
- Translation is handled by Server Assistant's AI, the same engine behind the bot's
  existing [`/translate`]({{ '/wiki/ai/' | relative_url }}) feature.

## Keeping in-game text clean & safe {#safety}

The bridge respects your server's own moderation, in **both** directions — and it's
governed by a **single control: your server's AutoMod switch**.

- **Filtering &amp; monitoring follow your AutoMod switch.** There's nothing separate to
  turn on for the bridge. **When AutoMod is on**, in-game text is automatically **masked and
  monitored**, and bridged chat in both directions with it; **when it's off**, the bridge
  isn't filtered. The `/mcdc` wizard shows a single **Filter & monitor** status that reflects
  AutoMod — no bridge-only toggles that can read "on" while doing nothing.
- **Chat is not the only place a player writes, so it's not the only place we check.**
  Anyone who wants to route around a chat filter can use a **sign**, a **book**, an
  **item name** (an anvil rename), a **mob name tag** or a **`/me` emote** — or aim it at
  one person with **`/msg`**, or just **join under a name** that says it for them. All of
  those are covered, on the same single switch.
- **Checked isn't the same as bridged.** Chat is the only thing mirrored into your Discord
  channel. Signs, books, item names, name tags, emotes and private messages are **checked and
  flagged, never posted to Discord** — a sign isn't conversation, and echoing every sign
  someone places would be noise nobody asked for.
- **Your AutoMod filter applies to all of it.** With AutoMod on, in-game text is run through
  your server's existing **AutoMod word list (lexicon)** and enabled **word packs**, and any
  matched words are masked to `***` — in the copy delivered to Discord for chat, and
  **in-game** for a sign, book, item name, name tag or emote, so other players don't see them
  either. A word you already block in Discord stays blocked when it comes from Minecraft, and
  vice versa. A **username** is the one thing that's flagged but never rewritten: a name is an
  identity your server, Discord and LuckPerms all key off, so staff are told and staff decide.
- **Your full protection scans in-game text too.** It's checked by the **same AutoMod as your
  Discord** — your **word and lexicon filters**, the built-in **`scams` pack**, and the
  **known-bad-domain link blocklist**. A match raises a **staff alert** (with the **Kick** and
  **Ban in-game** buttons from [Moderate from Discord](#moderate-from-discord)), carrying the
  world position for the surfaces that have one so staff can find the sign rather than hunt
  for it. Your **scam-link and phishing protection already covers Minecraft**, not just
  Discord.
- **No surprise pings from in-game.** A player typing `@everyone` (or any other mention) in
  Minecraft **cannot** ping your Discord. Mentions in bridged messages are handled safely and
  show as plain text, so nobody can mass-ping the server through the game.

## Privacy {#privacy}

The bridge is built to keep your server's secrets on your server:

- **No passwords, no remote console.** The plugin never exposes RCON and no admin
  passwords ever leave your machine. It only makes **outbound HTTPS** connections.
- **Chat: relayed in transit, not stored.** In-game chat and player usernames are passed
  between Minecraft and Discord to deliver the message, **and not stored**. When
  translation is on, that chat is processed by Server Assistant's AI translation (the same
  as `/translate`) to produce the translated text.
- **The other surfaces: read, but not relayed.** Signs, books, item names, name tags and
  `/me` emotes are **checked, never posted to your Discord channel** — the bridge mirrors
  chat, and only chat. Their text is passed to us to run your AutoMod against and is not
  kept as a record of what was written.
- **Private messages are checked too — all of them, by software, read by nobody.** A `/msg`
  between two players is sent to us and run through your filter. If it matches nothing, **no
  person ever sees it**: it's deleted from the queue we check it from within about a day and
  no record of it is kept anywhere. Only a message that actually trips your filter reaches a
  human, and then only your staff. No AI provider is involved at any point, and nothing is
  sent to any third party.
- **Masking and flagging don't use the same filter.** Flagging runs here against your **full**
  AutoMod, lexicon included. Masking runs in-game, and the plugin only holds part of your
  filter — your word packs, custom filters, disguised-slur check and blocked-link list. The
  large **community lexicon is too big to ship to a game server**, so a word only *it* knows
  about will be **reported to you but won't have been masked**: the recipient saw it in full.
  Masking is best-effort; the staff alert is the reliable part.
- **A flagged piece of text is the exception.** If anything a player writes trips your
  AutoMod, the 180-day moderation-actions record keeps only the player name, UUID and which
  rule matched — **never the text itself**. A short extract (up to ~500 characters) is kept
  with the staff decision card so your staff can see what they're deciding about, and that is
  deleted 90 days after the decision is closed. The filter check itself is plain
  pattern-matching — **no AI provider sees it**. Full detail in the
  [Privacy Policy]({{ '/privacy/' | relative_url }}).
- **Ask SAi in-game sends your operator's server notes.** When `@sai` is on, a player's
  question goes to the AI along with the server-information text you wrote for it (up to
  2,000 characters). No player names or UUIDs are sent.
- **Players are told, in-game — and one of those notices you can't switch off.** Joining
  players see **two** separate lines. The **bridge notice** (*"Chat here is bridged to
  Discord"*) is **yours**: `join-notice` / `join-notice-text`, reword it or turn it off as you
  like — how your server is wired up is yours to explain. The **privacy notice** (*"Private
  messages here are checked for abuse"*) is **mandatory and not configurable**: there's no key
  for it, it ignores the relay override, and it sends to every player whenever chat relaying
  is on. That's deliberate — message filtering has no opt-in moment, and this is the only
  notice that reaches a player who never joins your Discord. You should **also** say it in
  your server rules; the [Terms]({{ '/terms/' | relative_url }}) make telling your players
  your responsibility.
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
from Discord, full chat protection, Ask SAi in-game, **@sai Studio**, the **in-world
companion**, account linking, **XP for playtime**, **role → rank sync** and a weekly Pulse
section are all **live today**. Plenty more is still on the drawing board. The ideas below
are **planned or under consideration, not yet available**, and everything here is **subject
to change**, some may arrive later, look different, or not ship at all. No dates yet.

- **More ways roles and ranks connect.** Rank sync is live as a one-way mirror (see
  [Roles and ranks in step](#rank-sync)); still on the drawing board are syncing
  **nicknames** and letting a booster or supporter role unlock an **in-game perk**.
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
- **More of SAi *in* your world.** The summonable [companion](#companion) is live — what's
  still exploratory is a **persistent NPC** with a fixed home, a greeter standing at spawn
  who shows newcomers around, and a character that moves through the world alongside you.
- **One player history across both sides.** A single activity history that spans a linked
  player's Discord and Minecraft presence.
- **DM offline players.** Send a Discord message to a player who isn't currently online.
- **Richer formatting.** Markdown and emoji carried across both ways, PlaceholderAPI
  support, and more language options.
- **Bigger setups.** Bridge several servers into one channel or one server into several
  channels, support for proxy networks (BungeeCord/Velocity) and cross-server chat, Bedrock
  players via Geyser, and Dynmap web-chat.

## See also

- [SAi (AI assistant)]({{ '/wiki/ai/' | relative_url }}): the AI behind live translation and `@sai`
- [XP &amp; leveling]({{ '/wiki/leveling/' | relative_url }}): where your in-game playtime XP lands
- [Pulse]({{ '/wiki/pulse/' | relative_url }}): the weekly digest your Minecraft section appears in
- [Commands]({{ '/wiki/commands/' | relative_url }}): the full slash-command reference
