---
layout: default
title: Features
permalink: /features/
description: Deep dives into Server Assistant's major features.
---

# ✨ Features

Detailed walkthroughs of Server Assistant's flagship features. For the full command list, see [Commands]({{ site.url }}{{ site.baseurl }}/commands/).

---

## 🛡️ Moderation

### Role tiers

The bot ships with three default permission tiers: **Owner** / **Admin** / **Moderator**. You map your existing Discord roles to these during `/setup`.

| Tier | Capabilities | Dangerous actions |
|------|-------------|-------------------|
| **Owner** | All actions including channel/role management | Execute instantly |
| **Admin** | Most moderation + channel locks, slowmode, purge | Require Owner ✅/❌ approval |
| **Moderator** | Warn, mute, kick, ban, info, history | Cannot run dangerous actions |

You can add **custom tiers** via `/settings → Role Tiers → Add Tier` (e.g., "Helper", "Trial Mod", "Senior Mod"). Each new tier inherits from a template (Owner / Admin / Moderator capabilities) which you can refine.

### The dangerous-action approval flow

When a non-Owner staff member runs a dangerous action (like `delete #channel`), the bot:

1. Posts an embed in your staff-chat pinging the Owner
2. Adds ✅ and ❌ reactions
3. Waits up to 60 seconds (configurable via `/settings → Behavior`) for Owner response
4. Executes if ✅, cancels if ❌ or timeout

This puts a brake on impulsive admin actions while still letting genuine work happen.

### Persistent warnings

Every warning is timestamped and attributed to the issuing mod. Users get a DM notification on each warning. Warnings persist forever until manually removed.

```
warn @user posting NSFW
```

The bot DMs the user:

> ⚠️ You received a warning in **MyServer**:
> > posting NSFW
> This is warning #2.

Run `warnings @user` to see their full history. `unwarn @user 3` removes warning #3.

### Private staff notes

Use notes for tracking patterns of behaviour that don't warrant a formal warning. Notes are **invisible to the user** — they only appear when staff explicitly look them up.

```
note @user has been argumentative in #general for 3 days
notes @user
delnote @user 1
```

### Soft-ban

`softban @user` performs a Discord ban + immediate unban. This **clears the user's recent messages** (Discord's bulk-delete-on-ban behaviour) while still letting them rejoin. Useful for sweeping spam without permanently removing the user.

### Bulk operations via role mention

Mention a role to apply an action to every member of that role:

```
mute @TrollRole 1 hour      # mutes every member of TrollRole
ban @SpamRole               # bans every member (requires Owner with >5 targets)
```

Bots are automatically excluded.

### Undo (24h window)

`undo` reverses your most recent reversible action:

| Action | Undo behaviour |
|--------|----------------|
| Ban | Unban the user |
| Mute | Remove timeout |
| Channel delete | Recreate channel with original name, topic, NSFW, slowmode, category, **and all permission overwrites** |
| Nickname change | Restore previous nickname |

⚠️ **Channel undo cannot recover messages or threads** — Discord doesn't preserve them after deletion.

### Time-based purge

`purge` supports both count and time-based modes:

```
purge 50                    # last 50 messages
purge since 1pm             # all messages since 1 PM (your timezone)
purge since 30 minutes ago  # relative time
purge since 3 days ago      # capped at 14 days (Discord API limit)
purge since [discord-link]  # delete everything after a specific message
```

Times use **your personal timezone** (set via `/timezone`). Discord's API only allows bulk-deleting messages newer than 14 days — the bot warns you and adjusts the cutoff automatically.

---

## 🤖 AutoMod Engine

AutoMod runs on every non-staff message and applies your configured filters. Staff are completely exempt.

### Filter packs

Curated regex bundles you can toggle on/off. Run `/settings → Quick Presets → AutoMod` and pick:

| Preset | Includes |
|--------|----------|
| **Off** | No automated filtering |
| **Scams only** | Scam phrases (Free Nitro, Steam gift, Robux), IP-grabber links |
| **Scams + slurs (gaming)** ⭐ | All of the above plus Level-1 hate speech filter. Allows casual profanity |
| **Strict** | Adds slurs L2 (kys, threats) and profanity L3 (all swearing, PG-13 mode) |

The recommended default is **Scams + slurs (gaming)** for gaming communities. Strict mode has high false-positive rates and is for child-friendly servers only.

### Custom filters

Add your own regex patterns via `/automod → Add Filter`. Each pattern is validated before saving:

- `(?i)\bbad-word\b` — match a specific word, case-insensitive, with word boundaries
- `(?i)example\.com/[a-z]+` — block specific URL patterns
- `(.)\\1{15,}` — catch character spam (16+ repeated chars)

### Link blocklist

`/automod → Add Link` adds domains to a blocklist. Any message containing a URL with that domain gets actioned. Defaults include all known IP-grabber services (grabify, iplogger, blasze, etc.).

### Punishment ladder

Configurable escalation when a non-staff user accumulates auto-warnings. Defaults are 3 → 10m timeout, 5 → 1h timeout, 10 → ban. Tweak via `/settings → Quick Presets → Punishment Ladder`.

| Preset | Thresholds |
|--------|-----------|
| **Gentle** | 5/10/20 |
| **Standard** | 3/5/10 |
| **Strict** | 2/3/5 |

### Anti-spam

Built-in detection for **5+ duplicate messages within 5 seconds**. Triggers a delete + auto-warning. No configuration needed — always on when AutoMod is enabled.

### User gets a DM

When AutoMod removes a message, the user is DMed with which rule fired, their current warning count, and a heads-up about escalation. If their DMs are closed, the bot logs the skip but the message removal and warning still go through. Staff always have the full picture via the log-channel embed.

---

## 🚨 Anti-Raid Detection

Tracks join rate per guild. If the configured threshold is exceeded:

- Pings the Owner — and any staff roles configured via `/settings → 🔔 Notifications` — with a raid alert
- Suspends onboarding DMs (so raiders don't get a custom welcome)
- Logs the event to your log channel

Three sensitivity presets via `/settings → Quick Presets → Anti-raid`:

| Preset | Threshold |
|--------|-----------|
| **Off** | Detection disabled |
| **Normal** | 5 joins in 30 seconds |
| **Strict** | 3 joins in 15 seconds |

---

## 🔐 DM Verification Gate

Optional protection against automated raids. Enable via `/settings → Verification`.

When a new member joins:

1. Bot DMs them with a green **Verify** button
2. They must click it before getting access to gated channels
3. Click → they receive the configured "verified" role
4. The role's permissions in your channels determine what they can see

If the user has DMs disabled, the failure is logged but the user remains unverified — they only see channels open to `@everyone`.

This stops most automated raid bots cold. Manual raids still get through but are slowed down.

---

## 🎨 AI Image Generation

Run `/imagine <prompt>` in any channel. The bot returns a 1024×1024 image as an embed.

### Provider resolution order

1. Per-guild dedicated image key (set via `/ai-config → Set image-gen key`)
2. Reused chat key if guild's BYO is OpenAI (DALL·E uses OpenAI)
3. Host's shared OpenAI key
4. **Pollinations.ai** — free, no auth required (Flux model)

### Rate limit

30 seconds per guild between requests.

### Costs (for BYO providers)

| Provider | Model | Approx cost |
|----------|-------|-------------|
| OpenAI | DALL·E 3 (1024×1024) | $0.04 / image |
| Stability AI | SDXL | $0.02 / image |
| Pollinations.ai | Flux | Free, public service |

---

## 🧠 AI-Assisted Moderation Reports

The most-loved feature once people discover it. **Right-click any message → Apps ▸ Report Message**.

The bot:

1. Fetches the 20 messages around the flagged one
2. Sends them to the configured AI provider as context
3. Asks for an objective 3–5 bullet summary covering:
   - Overall tone of the conversation
   - Possible rule-breaking
   - Escalation patterns (if any)
   - Recommended action

The summary appears as an ephemeral embed (only the staff member who clicked it can see it).

### When to use it

- A user reports another user — instead of scrolling through 50 messages of back-and-forth, hit **Report Message** and get the gist in 10 seconds
- You walk into a heated conversation and want to know what happened before you joined
- You want a paper-trail summary for a punishment escalation

### What's NOT done

- The bot doesn't act on the report — it only summarises. Final decisions are always staff-driven.
- The report doesn't see content outside the channel where you clicked.
- Costs ~$0.001 per call on `gpt-4o-mini`.

---

## 👋 New-Member Experience

### Auto-onboarding DMs

`/onboarding` lets you configure a welcome DM that's sent to every new member. Supports placeholders:

```
Welcome to [servername], [usermention]! 🎮

You're our [membercount]th member. Need help?
Ping [owner] or any staff member.

Account created: [usercreatedat]
```

Built-in templates: **Friendly**, **Gaming**, **Professional**, **Minimal**, or **Custom** (write your own).

### Auto-role on join

`/settings → New Members → Auto-role` picks a role to auto-assign. Common uses: a "Member" role gating access to channels, or an "Initiate" role for community onboarding flows.

### Welcome reaction emoji

`/settings → New Members → Welcome reaction emoji` makes the bot react to Discord's system-generated "X joined the server" messages with a configurable emoji. Adds a low-effort welcoming touch.

---

## 📋 Custom Canned Responses

Save reusable replies for common questions:

```
snippet add rules-link Please re-read the rules at #rules. Specifically rule [3].
snippet rules-link
snippet list
snippet remove rules-link
```

Snippets support the same placeholders as onboarding messages. If you mention a user when invoking, placeholders fill with that user:

```
snippet welcome @NewUser
```

posts the `welcome` snippet with `[user]` / `[usermention]` etc. set to NewUser.

---

## 📅 Scheduled Reminders

`/schedule` (or `schedule in 30 min: <task>`) creates a one-shot reminder. Times are interpreted in your personal timezone.

Examples:

```
schedule in 2 hours: post welcome message
schedule in 30 min: check the new mod application
schedule at 9am: post daily update
schedule tomorrow at 3pm: review weekly stats
remind in 1 day: top.gg approval status
```

The reminder fires in the channel where you scheduled it, pinging you. View pending tasks with `scheduled list`. Cancel with `scheduled cancel 3`.

---

## 📊 Audit Logging & Activity Digest

### Real-time audit log

Every action gets posted to your configured log channel as a colour-coded embed:

| Status | Colour |
|--------|--------|
| `EXECUTING / SUCCESS` | 🟢 Green |
| `OWNER_BYPASS` | 🔵 Blue |
| `PENDING_APPROVAL` | 🟡 Yellow |
| `APPROVED_BY_OWNER` | 🟢 Green |
| `FORBIDDEN / DENIED_BY_OWNER` | 🔴 Red |
| `PERMISSION_DENIED` | 🟠 Orange |

Verbosity is configurable via `/settings → Behavior → Log verbosity`:

- **All actions** — default; logs everything
- **Dangerous only** — quieter; only dangerous actions and errors
- **Errors only** — minimal; only denials and failures

### Weekly digest

Every Monday at 9am (configurable day via `/settings → Behavior`), a digest posts to your log channel:

- Total actions taken this week
- Warnings issued
- Top action types
- Most active staff
- Member count

---

## 🎨 Customisation Hub (`/settings`)

Eight sub-wizards. All changes save instantly.

| Section | What it covers |
|--------|---------------|
| 🎨 **Branding** | Embed colour (12 presets + custom hex), bot nickname, default timezone |
| ⚡ **Quick Presets** | One-click bundles for AutoMod, ladder, onboarding template, anti-raid sensitivity |
| 🛡️ **Behavior** | Owner approval timeout (30–300s), log verbosity, weekly digest day, mentions toggle |
| 👋 **New Members** | Auto-role on join, welcome reaction emoji |
| 🔐 **Verification Gate** | Toggle on/off, set verified role |
| 📍 **Channel Allowlist** | Restrict where the bot responds to mentions |
| 🛂 **Role Tiers** | Add custom tiers beyond Owner/Admin/Moderator |
| 🔔 **Notifications** | Pick staff roles to @-ping on anti-raid alerts, dangerous-action approval requests, and AutoMod escalations |

---

## 🔐 Privacy & Security

All credentials (your bot's Discord token, any AI keys you bring) are **encrypted at rest** using strong symmetric encryption (Fernet / AES-128). Your server's data is fully isolated from every other server's data.

When the bot is **removed from your server**, your guild's encrypted secrets are wiped immediately. Operational data (warnings, notes, audit log) is retained briefly in case you re-add the bot — see the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) for retention specifics.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) — get the bot running
- [Commands]({{ site.url }}{{ site.baseurl }}/commands/) — full command list
- [FAQ]({{ site.url }}{{ site.baseurl }}/faq/) — common questions
- [Support]({{ site.url }}{{ site.baseurl }}/support/) — get help
