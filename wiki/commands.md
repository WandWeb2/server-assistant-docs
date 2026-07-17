---
layout: wiki
title: "All commands"
permalink: /wiki/commands/
wiki: true
wiki_category: "Getting Started"
summary: The full list of Server Assistant commands, every slash command grouped by area (setup, moderation, channels, community & fun, AI & Premium, info & account) plus the right-click menus.
wiki_keywords: [commands, command list, all commands, command reference, slash commands, /commands, help, cheat sheet, roll, ban, kick, mute, warn, purge, setup, settings, emote, imagine, sai, translate]
description: A complete reference of every Server Assistant slash command and right-click menu, grouped by area, with a short description of each.
---

# All commands

Every Server Assistant command, grouped by area. Type **`/`** in any channel to see
them with autocomplete, or open **`/help`** for a role-aware view of what you can use.

> Most commands run **anywhere**, the bot needn't be in a specific channel.
> Moderation commands respect your staff roles.

## Setup & configuration

| Command | What it does |
|---|---|
| **`/setup`** | Configure the bot for this server (owner or Manage Server admins) |
| **`/autopilot`** | Opens the same `/setup` wizard with every step pre-filled from your detected channels and roles |
| **`/settings`** | Open the settings hub (owner/admin) |
| **`/automod`** | Configure auto-moderation (admins) |
| **`/onboarding`** | Configure the new-member welcome DM |
| **`/leveling`** | Level-up announcements & XP status (admin) |
| **`/ai-config`** | Set the AI provider and API key for this server (owner) |
| **`/privacy`** | Manage what the bot is allowed to read |
| **`/snippets`** | Manage canned response snippets |

## Moderation

| Command | What it does |
|---|---|
| **`/ban`** · **`/unban`** | Ban a user / unban by ID |
| **`/kick`** | Kick a user |
| **`/mute`** · **`/unmute`** | Time out a user for N minutes / remove a timeout |
| **`/tempban`** | Ban for a set time, then auto-unban |
| **`/softban`** | Ban then immediately unban to clear a user's recent messages |
| **`/warn`** · **`/warnings`** · **`/manage-warnings`** | Issue a warning / view a user's warnings / view & remove them |
| **`/note`** · **`/notes`** · **`/manage-notes`** | Add a private staff note / view / view & remove |
| **`/purge`** | Bulk-delete recent messages, or Smart AI cleanup |
| **`/info`** | Show profile info for a user |
| **`/altguard`** | Repeat-offender detection, flag/auto-ban likely ban-evading alts on join |
| **`/role`** | Add or remove a role from a member |
| **`/nick`** | Change a user's nickname (blank to reset) |

## Channels & raid response

| Command | What it does |
|---|---|
| **`/lock`** · **`/unlock`** | Lock / unlock a channel (stop or restore @everyone sending) |
| **`/lockdown`** | Lock or unlock **every** channel at once, fast raid response |
| **`/slowmode`** | Set slowmode on a channel |

## Community & fun

| Command | What it does |
|---|---|
| **`/roll`** | Start a group loot roll, Need / Greed / Pass ([guide]({{ '/wiki/roll/' | relative_url }})) |
| **`/emote`** · **`/e`** · **`/cry`** · **`/hug`** · **`/dance`** | Post a themed GIF emote ([guide]({{ '/wiki/emotes/' | relative_url }})) |
| **`/emotestyle`** | Set your personal default GIF theme |
| **`/meme`** | Post a meme matching your search |
| **`/imagine`** · **`/img`** | Generate an image from a text prompt (uses your AI allowance) |
| **`/leaderboard`** | Top members by XP |
| **`/rank`** | Show your level and XP (or another member's) |

## AI & Premium tools

| Command | What it does |
|---|---|
| **`/faq`** | Ask the FAQ, or leave blank to manage it (staff) |
| **`/sai`** | Chat with Server Assistant's intelligence to tune your bot |
| **`/translate`** | Translate text into another language |
| **`/mediate`** | Start AI-facilitated mediation between two members |
| **`/backup`** | Snapshot & restore your server's structure |
| **`/brand`** | White-label the bot for your server |
| **`/customcmd`** | Create your own `/commands` with live embeds |
| **`/rolepanel`** | Build a self-service role-button panel |

## Info, help & account

| Command | What it does |
|---|---|
| **`/help`** | Show available commands and capabilities |
| **`/whatsnew`** | See what's new in Server Assistant |
| **`/stats`** | Show server statistics |
| **`/premium`** | Premium status, AI token usage, and upgrade options |
| **`/portal`** | Open the web portal to manage this server |
| **`/invite`** · **`/share`** | Get the bot's invite link |
| **`/vote`** · **`/review`** | Vote on DiscordForge / leave a review, both earn XP |
| **`/support`** · **`/feedback`** | Get help from the bot's developer (opens a ticket via DM) |
| **`/schedule`** | Schedule a reminder or task |
| **`/timezone`** | Set your personal timezone (used for time-based commands) |
| **`/retro`** | Generate this week's mod-team retrospective now |

## Right-click menus

Right-click a user or message → **Apps ▸**:

| Menu | On | What it does |
|---|---|---|
| **View Info** | User | Profile, roles, joined date, warning + note counts |
| **View Warnings** | User | Full warning history |
| **Message Report** | Message | Report a message to staff |
| **Translate** | Message | Translate the message |

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}), get configured in about a minute
- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}), the moderation commands in depth
- [Pricing]({{ '/pricing/' | relative_url }}), what's included free vs. Premium
