---
layout: default
title: Setup
permalink: /setup/
description: Add Server Assistant to your Discord server in under a minute.
---

# 🚀 Setup Guide

Adding **Server Assistant** to your Discord server takes about 60 seconds. The wizard does most of the work.

> ⚠️ **Important:** only the **Discord-native server owner** can run `/setup`. Co-owners and admins cannot. This is a hard safety check — the bot won't trust anyone else to map your moderation roles.

## Step 1 — Invite the bot

<p align="center">
  <a href="https://discord.com/api/oauth2/authorize?client_id=1278486617375510570&permissions=1376267689287&scope=bot+applications.commands"><strong>➕ Invite Server Assistant to your server</strong></a>
</p>

You'll need **Manage Server** permission on the target guild. The OAuth flow asks Discord for the permissions the bot needs — **don't uncheck any of them**, or features like ban/kick/auto-role will fail later.

*Pre-verification direct invite — once Server Assistant clears Discord verification (75-server threshold) it'll also be available via [Top.gg](https://top.gg), Discord Bots List, and the [Discord App Directory](https://discord.com/application-directory).*

After authorising, the bot appears offline-then-online in your server's member list. Slash commands take **up to 1 hour** to globally propagate the very first time you add the bot — so if `/setup` doesn't show up immediately, give it a few minutes.

---

## Step 2 — Run `/setup`

In any text channel, type `/setup`. Discord shows the command in its autocomplete; press Enter.

If you're not the server owner, you'll see:

> ⛔ Only the server owner can run setup.

Otherwise, the wizard launches. It has **3 short steps**.

### Step 2a — Pick your channels

Two dropdowns appear:

- **Staff Chat** — the channel the bot listens to for natural-language commands (`warn @user`, `mute @user 30 min`, etc.). Should be private/staff-only. Outside this channel, the bot only responds when @-mentioned.
- **Log Channel** — every action the bot takes is logged here as a colour-coded embed. Should also be private — most servers use a dedicated `#mod-log`.

### Step 2b — Pick your roles

Three role dropdowns appear:

- **Owner role** — full bot access. Dangerous actions (delete channel, etc.) execute instantly without approval. The Discord-native server owner always has this implicitly, even if no role is mapped.
- **Admin role** — most actions. Dangerous actions require Owner ✅/❌ approval via reaction (60s timeout, configurable).
- **Moderator role** — basic moderation: warn, mute, kick, ban, info. No channel management.

You can add more custom tiers later via `/settings → Role Tiers → Add Tier`.

### Step 2c — Pick an AI provider (optional)

AI features power `/imagine`, AI-assisted moderation reports, and natural language understanding in staff-chat. Three options:

- **🆓 Use the host's shared key** — convenient, rate-limited (default for the public hosted bot)
- **🔑 Use my own key** — paste your xAI Grok or OpenAI API key. Encrypted in the bot's vault. No shared rate limits.
- **⏭️ Skip AI** — disables `/imagine`, `/report`, AI context menu. Can re-enable later via `/ai-config`.

You can change AI mode anytime by re-running `/ai-config`.

### Step 2d — Click **Finish Setup**

The bot saves your config and posts a confirmation embed. Right after, it auto-posts a **5-message walkthrough** to your staff-chat teaching all 3 ways to use the bot. Tell your staff to read it.

---

## Step 3 — Customise (optional, but recommended)

Run `/settings` to open the **Customisation Hub** — 7 sub-wizards covering:

| Section | What you can change |
|--------|---------------------|
| 🎨 **Branding** | Embed colour, bot nickname, default timezone |
| ⚡ **Quick Presets** | One-click bundles for AutoMod, ladder, onboarding template, anti-raid sensitivity |
| 🛡️ **Behavior** | Owner approval timeout, log verbosity, weekly digest day, mentions toggle |
| 👋 **New Members** | Auto-role on join, welcome reaction emoji |
| 🔐 **Verification Gate** | Optional DM-button verification for raid protection |
| 📍 **Channel Allowlist** | Restrict where the bot responds to @-mentions |
| 🛂 **Role Tiers** | Add custom tiers like "Helper" or "Trial Mod" |

All changes save instantly with no "apply" button.

---

## Recommended next steps

After setup, do these in any order:

1. **`/onboarding`** — set your welcome DM message for new members
2. **`/automod`** → enable the **Scams + slurs (gaming)** preset for sensible auto-moderation
3. **`/timezone`** — set your personal timezone (used by `/schedule` and time-based commands like `purge since 1pm`)
4. **Tell your staff** to type `help` in your staff-chat to see what they can do
5. **Right-click a user** → hover **Apps ▸** to see context-menu commands

---

## Re-running setup

If your channel/role IDs change, or you want to map different roles, just run `/setup` again. The wizard overwrites your previous config — your warnings, notes, and audit log are all preserved.

To **fully reset** (rare), contact the bot operator via the [support server]({{ site.url }}{{ site.baseurl }}/support/).

---

## Common setup issues

**"`/setup` doesn't appear when I type `/`"**
First-time slash-command propagation takes up to 1 hour. Wait, then try again. If still missing after an hour, the bot may need a guild-specific resync — message the support server.

**"⛔ Only the server owner can run setup"**
You're not the Discord-native owner. Server owners can transfer ownership in **Server Settings → Members** if needed.

**"The bot can't ban/kick certain users"**
Discord's role hierarchy: the bot's role must be **higher** than the target user's highest role. Drag the bot's role above the target's roles in **Server Settings → Roles**.

**"AutoMod isn't blocking anything"**
Make sure you ran `/settings → Quick Presets → AutoMod` and picked a non-Off preset, then ran `/automod` and toggled **Enabled** to on.

---

## What's next?

- See the [Commands reference]({{ site.url }}{{ site.baseurl }}/commands/) for every command available
- Browse [Features]({{ site.url }}{{ site.baseurl }}/features/) for deep dives on AutoMod, AI, verification, etc.
- Skim the [FAQ]({{ site.url }}{{ site.baseurl }}/faq/) for common questions
