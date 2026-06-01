---
layout: default
title: Commands
permalink: /commands/
description: Full reference of every command Server Assistant supports.
---

# 📚 Commands Reference

Server Assistant supports **three interaction modes**. Most commands are available in all three:

1. **Slash commands — anywhere.** Every moderation action (`/warn`, `/mute`, `/kick`, `/ban`, `/purge`, …) works as a slash command in **any channel**, so you never have to switch to staff-chat to act.
2. **Text commands — in staff-chat** (`warn @user`, `purge 50`). A convenience for working inside your staff channel; not available in other channels.
3. **Right-click context menus** on users and messages.

> Commands are role-gated, and some actions may require approval from a higher tier — see **[Permissions & approval](#-permissions--approval)** below. Run `/help` to see what's available to you specifically.

---

## 🛡️ Moderation

Targeting users supports `@mention`, plain-text username (e.g. `mute jen`), or numeric Discord user ID.

| Command | Description | Example |
|---------|-------------|---------|
| `ban @user [reason]` | Ban a user | `ban @spammer raid` |
| `kick @user [reason]` | Kick a user | `kick username spam` |
| `softban @user` | Ban + immediate unban — clears recent messages, lets user rejoin | `softban @user` |
| `mute @user 30 min` | Timeout a user. Supports `min` / `hour` units | `mute @user 2 hr` |
| `unmute @user` | Remove a user's timeout | `unmute @user` |
| `warn @user reason` | Issue a tracked warning. DMs the user. | `warn @user posting NSFW` |
| `warnings @user` | View a user's warning history | `warnings @user` |
| `unwarn @user [id]` | Remove a warning. Without ID, removes the latest | `unwarn @user 3` |
| `nick @user new-name` | Change a user's nickname | `nick @user Helper` |
| `nick reset @user` | Reset a user's nickname | `nick reset @user` |

**Bulk operations:** mention a role to apply the action to everyone in it. Examples: `mute @TrollRole 1 hour`, `ban @SpamRole`. Mod-tier maxes at 5 users; Admin/Owner have higher limits.

---

## 📝 Notes (private staff-only)

Notes are invisible to the user. Used for tracking patterns of behaviour without an official warning.

| Command | Description |
|---------|-------------|
| `note @user text` | Add a private note |
| `notes @user` | View notes on a user |
| `delnote @user 3` | Remove note #3 |

---

## 📊 Information

| Command | Description |
|---------|-------------|
| `info @user` | Profile, roles, joined date, warning + note count |
| `history @user 15` | Last 15 messages from this user across all channels |
| `stats` | Server statistics — members, channels, boosts, etc. |
| `actions 10` | Recent staff actions audit log |
| `report @user` | AI summary of recent activity |
| `report #channel` | AI summary of recent activity in a channel |

---

## 📂 Channel management

| Command | Description |
|---------|-------------|
| `lock #channel` | Block @everyone from sending messages |
| `unlock #channel` | Restore send permission |
| `slowmode 5s` | Set channel slowmode (supports `s`/`m`/`h`) |
| `slowmode off` | Disable slowmode |
| `pin` (reply to a message) | Pin the replied-to message |
| `unpin` (reply to a message) | Unpin the replied-to message |
| `purge 50` | Delete last 50 messages |
| `purge since 1pm` | Time-based — uses your personal timezone |
| `purge 30 minutes ago` | Relative time |
| `purge since [discord-link]` | Delete everything after a specific message |
| `delete #channel` | Delete a channel (Owner instant; Admin needs ✅ approval) |
| `create channel name` | Create a new text channel |
| `rename #old new-name` | Rename a channel |

> Discord only allows **bulk delete of messages newer than 14 days**. The bot warns you and adjusts the cutoff automatically.

---

## 💬 Communication

| Command | Description |
|---------|-------------|
| `say <text>` | Bot speaks in the current channel |
| `dm @user <text>` | Send a private message to a user |
| `send to #channel <text>` | Bot posts in another channel |
| `snippet <name> [@user]` | Post a saved canned response. Placeholders auto-fill if a user is mentioned |
| `snippet add <name> <text>` | Save a new canned response |
| `snippet list` | List all saved snippets |
| `snippet remove <name>` | Delete a saved snippet |

### Placeholders for snippets and onboarding messages

| Token | Replaced with |
|-------|---------------|
| `[user]` | User's tag (e.g. `Coding#0001`) |
| `[userid]` | User ID |
| `[username]` | Username only |
| `[usermention]` | `@mention` of the user |
| `[usercreatedat]` | When their account was created |
| `[userjoinedat]` | When they joined the server |
| `[servername]` | Server name |
| `[membercount]` | Total members |
| `[owner]` | Owner's `@mention` |
| `[ownerid]` | Owner's user ID |

Both `[brackets]` and `{braces}` syntax work, case-insensitive.

---

## 📅 Scheduling

| Command | Description |
|---------|-------------|
| `schedule in 30 min: <task>` | Schedule a one-shot reminder |
| `remind in 2 hours: <task>` | Alias for `schedule` |
| `schedule at 9am: <task>` | Specific local time today (uses your timezone) |
| `schedule tomorrow at 9am: <task>` | Tomorrow's local time |
| `scheduled list` | View your pending tasks |
| `scheduled cancel 3` | Cancel task #3 |

---

## ↩️ Undo (24h window)

The `undo` command reverses your most recent reversible action.

**Reversible:** bans → unban · mutes → remove timeout · channel deletes → recreate with original settings · nickname changes → restore previous

| Command | Description |
|---------|-------------|
| `undo` | Reverse your last reversible action (within 24h) |

> ⚠️ Channel undo recreates the channel with original name, topic, NSFW, slowmode, category, and all permission overwrites — but **messages and threads cannot be recovered**. Discord doesn't preserve them.

---

## ⚙️ Personal settings

| Command | Description |
|---------|-------------|
| `timezone Australia/Sydney` | Set your personal timezone (used by `/schedule` and `purge since 1pm`) |
| `timezone AEST` | Common abbreviations work too |
| `timezone` | View your current timezone |
| `help` | Interactive help |

---

## 🛂 Owner / Admin only

| Command | Description |
|---------|-------------|
| `/setup` | Run the initial setup wizard (owner only) |
| `/settings` | Open the customisation hub (owner / admin) |
| `/automod` | Configure auto-moderation (admin and above) |
| `/onboarding` | Configure new-member welcome DMs |
| `/snippets` | Manage canned responses |
| `/ai-config` | Configure AI provider/key (owner only) |
| `/invite` | Get the bot's invite URL |

---

## 🖱️ Right-click context menus

Right-click any user or message → hover **Apps ▸ Server Assistant**:

### On a user
- 👤 **View Info** — quick profile + warning/note counts
- ⚠️ **View Warnings** — full warning history

### On a message
- 📋 **Report Message** — AI reads ~20 surrounding messages and produces an objective 3–5 bullet summary covering tone, possible rule-breaking, escalation patterns, and recommended action

> 💡 If "Apps ▸" looks empty, hard-refresh Discord (Ctrl+R) to pull the latest commands.

---

## ⚡ Slash command quick reference

Type `/` anywhere to see autocomplete:

| Slash command | What it does |
|--------------|--------------|
| `/setup` | Initial config wizard (owner only) |
| `/settings` | Open customisation hub |
| `/automod` | Configure auto-moderation |
| `/onboarding` | Configure welcome DMs |
| `/snippets` | Manage canned responses |
| `/ai-config` | Configure AI provider |
| `/imagine <prompt>` | AI image generation |
| `/info <user>` | User profile (incl. Threat Score if enabled) |
| `/warn <user> <reason>` | Issue a warning |
| `/mute <user> <minutes> [reason]` | Time out a user |
| `/unmute <user>` | Remove a timeout |
| `/kick <user> [reason]` | Kick a user |
| `/ban <user> [reason] [delete_days]` | Ban a user |
| `/unban <user_id> [reason]` | Unban by ID |
| `/softban <user> [reason]` | Ban + unban to clear messages |
| `/purge <count> [user]` | Bulk-delete messages here *(may need approval)* |
| `/slowmode <seconds> [channel]` | Set channel slowmode |
| `/lock [channel]` / `/unlock [channel]` | Lock / unlock a channel |
| `/nick <user> [nickname]` | Change / reset a nickname |
| `/warnings <user>` | View warnings |
| `/note <user> <text>` | Add note |
| `/notes <user>` | View notes |
| `/manage-warnings <user>` | Multi-select removal wizard |
| `/manage-notes <user>` | Multi-select removal wizard |
| `/stats` | Server statistics |
| `/timezone` | Set personal timezone |
| `/schedule` | Schedule a reminder via modal |
| `/help` | Interactive button-driven help |
| `/premium` | See your server's premium status + what's included |
| `/vote` | Vote for the bot (Top.gg + Discord Bot List) |
| `/invite` | Get the bot's invite URL |

Most slash command responses are **only visible to you** by default for sensitive operations.

---

## 🔑 Permissions & approval

Each role you configure in `/settings → Role Tiers` has **capabilities** (what actions it can use), a **level** (its rank), and **approval authority** (whether it can run *dangerous* actions directly). Defaults out of the box:

| | 🟢 Moderator | 🟠 Admin | 🔴 Owner |
|---|:-:|:-:|:-:|
| **Level** | 25 | 50 | 100 |
| **Approval authority** | — | — | ✅ |

### What each tier can run (defaults)

<style>
.perm-table th, .perm-table td { text-align: center; }
.perm-table td:first-child, .perm-table th:first-child { text-align: left; }
.perm-y { color: #1b8e3a; font-weight: 700; }
.perm-n { color: #b9bcc4; }
.perm-w { color: #c97a17; font-weight: 700; }
</style>

<table class="perm-table">
<thead><tr><th>Command</th><th>🟢 Mod</th><th>🟠 Admin</th><th>🔴 Owner</th></tr></thead>
<tbody>
<tr><td>/warn, /warnings, /manage-warnings</td><td class="perm-y">✓</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/note, /notes</td><td class="perm-y">✓</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/manage-notes</td><td class="perm-n">—</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/info, /stats, /timezone, /help</td><td class="perm-y">✓</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/mute, /unmute</td><td class="perm-y">✓</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/kick, /ban, /softban</td><td class="perm-y">✓</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/unban</td><td class="perm-n">—</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td><strong>/purge</strong> <em>(needs approval)</em></td><td class="perm-n">—</td><td class="perm-w">⚠ approval</td><td class="perm-y">✓ direct</td></tr>
<tr><td>/slowmode, /lock, /unlock, /nick</td><td class="perm-y">✓</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/onboarding, /snippets, /automod, /schedule</td><td class="perm-n">—</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/imagine, /vote, /premium, /invite</td><td class="perm-y">✓</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/settings</td><td class="perm-n">—</td><td class="perm-y">✓</td><td class="perm-y">✓</td></tr>
<tr><td>/setup, /ai-config</td><td class="perm-n">—</td><td class="perm-n">—</td><td class="perm-y">✓</td></tr>
</tbody>
</table>

You can customise any of this in `/settings → Role Tiers` — grant Mods `/unban`, take `/ban` away, give an Admin role approval authority, or create new tiers entirely.

### How approval routes

<style>
.flow { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: stretch; margin: 1rem 0; }
.flow-step { flex: 1 1 200px; min-width: 180px; padding: 0.75rem 1rem; border-radius: 12px; background: rgba(255,255,255,0.6); border: 1px solid rgba(31,38,135,0.15); box-shadow: 0 4px 16px rgba(31,38,135,0.07); font-size: 0.92rem; }
.flow-step.act { background: rgba(37,99,235,0.10); border-color: rgba(37,99,235,0.3); }
.flow-step.approve { background: rgba(241,196,15,0.12); border-color: rgba(201,122,23,0.35); }
.flow-step.ok { background: rgba(46,204,113,0.12); border-color: rgba(27,142,58,0.35); }
.flow-arrow { display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: #6a7280; min-width: 1.6rem; }
@media (max-width: 700px) { .flow { flex-direction: column; } .flow-arrow { transform: rotate(90deg); } }
</style>

<div class="flow">
  <div class="flow-step act">Mod runs <code>/purge</code> in any channel</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">Mod lacks <code>purge</code> capability → <strong>denied</strong></div>
</div>
<div class="flow">
  <div class="flow-step act">Admin runs <code>/purge</code></div>
  <div class="flow-arrow">→</div>
  <div class="flow-step approve">Approval request posted to staff-chat (✅ / ❌)</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step">Only the <strong>Owner</strong> (a tier above) can approve</div>
  <div class="flow-arrow">→</div>
  <div class="flow-step ok">Executes + audit-logged</div>
</div>
<div class="flow">
  <div class="flow-step act">Owner runs <code>/purge</code></div>
  <div class="flow-arrow">→</div>
  <div class="flow-step ok">Executes immediately + audit-logged</div>
</div>

> Approval always goes **up** the hierarchy — a tier can only approve requests from a *strictly lower* tier. Timeout is set in `/settings → Behavior → Approval timeout`. Every action and approver is written to your audit-log channel.

---

## What's next?

- [FAQ]({{ site.url }}{{ site.baseurl }}/faq/) for common questions
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for deep dives on AutoMod, verification gate, AI features
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't run `/setup` yet
