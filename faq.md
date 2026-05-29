---
layout: default
title: FAQ
permalink: /faq/
description: Frequently asked questions about Server Assistant.
---

# ❓ Frequently Asked Questions

## 🚀 Getting started

### Is the bot free?

**Yes — free for everyone, no card required.** A future premium tier will add *new* features on top of what exists today. Everything currently available stays free forever.

**Beta-period perk:** servers that add Server Assistant *before* the premium tier launches receive **12 months of free premium access** from launch day. There's no claim form or signup — if your server is using the bot before premium goes live, you're in automatically. Adding the bot now is the cheapest way to lock in a year of premium for free.

### How do I add the bot to my server?

You'll need **Manage Server** permission. Use the [invite link]({{ site.url }}{{ site.baseurl }}/setup/#step-1--invite-the-bot) or find Server Assistant on [Top.gg](https://top.gg/bot/1278486617375510570) or [discordbotlist.com](https://discordbotlist.com/bots/server-assistant). After authorising, run `/setup` as the server owner.

### Why does only the server owner get to run `/setup`?

`/setup` maps your moderation roles to the bot's permission tiers. If admins could run it, they'd be able to escalate themselves to "Owner" tier and bypass the approval workflow on dangerous actions. Owner-only is a hard safety check.

### How long does setup take?

About 60 seconds. The wizard has 3 steps: pick channels, pick roles, pick AI provider. Afterwards, run `/settings` to fine-tune anything from embed colours to the AutoMod ladder — there are 8 customisation panels but none of them are required.

---

## 🛡️ Moderation

### What happens to existing warnings if I re-run `/setup`?

Nothing — they're preserved. `/setup` only changes channel/role mappings and AI config. Warnings, notes, snippets, and audit logs are untouched.

### Can mods ban higher-ranked users?

No. The bot enforces Discord's role hierarchy: a mod can't action anyone whose role is at or above the mod's own. Owner can action anyone except other Owners.

### Why does the bot say it can't ban someone?

Discord requires the bot's role to be **higher** than the target user's highest role. Drag the bot's role up in **Server Settings → Roles**.

### Can I undo a ban?

Yes, within 24 hours. Run `undo` and the bot reverses your most recent reversible action. Reversible: bans, mutes, channel deletions, nickname changes.

### Are warnings public or private?

Warnings are **private** to staff. The user gets a DM notification when warned, but there's no public-facing list. Use **Notes** for purely internal observations that aren't formal warnings.

### How does the punishment ladder work?

When AutoMod is enabled, repeated violations escalate automatically:

| Auto-warnings | Action (default Standard preset) |
|---------------|------|
| 3 | 10-minute timeout |
| 5 | 1-hour timeout |
| 10 | Ban |

Only **AutoMod-issued** warnings count toward escalation. Manual staff-issued warnings are tracked separately and don't auto-escalate.

Change the ladder via `/settings → Quick Presets → Punishment Ladder`. Three presets: Gentle (5/10/20), Standard (3/5/10), Strict (2/3/5).

---

## 🤖 AutoMod

### Will AutoMod break legitimate conversation?

The shipped filter packs use **word boundaries** to avoid the [Scunthorpe problem](https://en.wikipedia.org/wiki/Scunthorpe_problem) — words like `assassin`, `classic`, `Scunthorpe` won't trigger an "ass" or other partial filter. The default "Scams + slurs (gaming)" preset specifically **does not** filter casual profanity (fuck/shit/damn/etc.) since gaming culture tolerates them.

Strict mode adds those, with higher false-positive risk — only use it for child-friendly servers.

### Can I add my own filters?

Yes. Run `/automod` → **Add Filter** to add custom regex. Each pattern is validated before saving, and obviously-risky patterns (catastrophic-backtracking constructs) are rejected automatically. You can also add link blocklist domains for known phishing sites.

### Does AutoMod scan staff messages?

**No.** Staff are completely exempt regardless of their role tier. The bot identifies staff by whether they hold any role mapped to a permission tier via `/setup` or `/settings → Role Tiers`.

### What's the difference between an AutoMod warning and a manual warning?

Both go on the user's record. Only **AutoMod warnings count toward escalation thresholds** (the punishment ladder). The audit log distinguishes them so you can tell the source at a glance.

### Does the bot tell the user when AutoMod removes their message?

Yes — the user gets a DM explaining which rule fired and how their warning count is tracking toward escalation. If the user has DMs from server members disabled, the bot logs the skip but the message removal and warning still go through.

---

## 🔐 Verification Gate

### How does the verification gate work?

When enabled (`/settings → Verification`), every new joiner receives a DM with a green **Verify** button. Clicking it grants them the configured verified role, which gates access to channels you mark as verified-only via Discord's role permissions.

### What happens if a user has DMs disabled?

The bot logs the failure to your log channel and the user remains unverified. They can still see public channels but not anything gated behind the verified role.

### Can I customise the verification message?

Currently it's a fixed message ("Welcome to {server}! Click Verify to access the rest of the server."). Custom verification copy is on the roadmap.

---

## 🔔 Notifications

### How do I get pinged when AutoMod or anti-raid fires?

Run `/settings → 🔔 Notifications` and pick which staff roles should be @-pinged for each event type:

- **Anti-raid alerts** — fires when mass-join detection trips
- **Dangerous-action approval requests** — fires when a non-Owner staff member needs sign-off
- **AutoMod escalations** — fires when a user crosses a punishment threshold (timeout / kick / ban)

Up to 10 roles per event. Empty = silent. Routine AutoMod single-message blocks don't ping; only escalations do, so the log channel doesn't get spammy.

---

## 🎨 AI features

### Are AI features free?

Yes for the hosted bot using its shared rate-limited xAI Grok key. If you want unlimited AI usage or your own model preference, paste your own xAI or OpenAI key during `/setup` (`/ai-config` later to change).

### What data is sent to the AI provider?

Only the data needed for the request. For the right-click **Report Message** context menu, that's ~20 messages of context around the flagged message. For `/imagine`, just your prompt text. **No user metadata, IDs, or persistent identifiers are transmitted.** See the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) for details.

### What models are used?

- **xAI Grok:** `grok-3-mini` (fast, cheap)
- **OpenAI:** `gpt-4o-mini` (default)
- **Image generation:** DALL·E 3 (paid), Stable Diffusion XL (paid), Pollinations.ai (free, no auth)

### Can I disable AI entirely?

Yes. Run `/ai-config` and choose **Skip AI**. `/imagine` and AI-assisted reports will fail gracefully with a clear message.

---

## 💾 Data & privacy

### Where is data stored?

On the host's infrastructure, encrypted at rest. Your server's data is isolated from every other server's data. Full details in the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/).

### What happens to my data when the bot is removed from my server?

Sensitive credentials you provided (like your own AI keys) are wiped immediately when the bot leaves the server. Operational data (warnings, notes, audit log) is retained briefly in case the bot is re-added — many servers kick and re-invite during testing. To request full manual deletion, contact the support team via the [support server]({{ site.url }}{{ site.baseurl }}/support/).

### Is there a public API?

Not yet. A premium-tier read-only API for your own server's data is on the roadmap.

### Can I export my server's data?

A one-shot export is available on request via the support server. A `/export-server-data` slash command is on the roadmap.

---

## 🛠️ Troubleshooting

### Slash commands don't appear

Discord propagates slash commands within seconds of an update for most use cases, but the very first time a bot is added to a server it can take **up to 1 hour** before commands show up. If they're still missing after that, hard-refresh Discord (Ctrl+R) to flush the local cache.

### Right-click context menus aren't showing what I expect

Three things to check:

1. **You're right-clicking the right thing.** **View Info** and **View Warnings** appear when you right-click a **user** (their name in the member list, their avatar, or their message author name). **Report Message** appears when you right-click a **message body**. They live under **Apps ▸ Server Assistant** in the right-click menu.
2. **Discord's local cache may be stale** — hard-refresh with Ctrl+R.
3. **The bot only just joined** — first-time global propagation can take up to 1 hour.

### The bot is offline

Most outages are transient — the bot auto-reconnects on its own. If it's been offline for more than 5 minutes, post in the [support server]({{ site.url }}{{ site.baseurl }}/support/).

### `/setup` isn't responding

If Discord is having a bad day the bot may be globally rate-limited. Wait 60 seconds and try again. If still unresponsive, post in the support server.

---

## 🤝 Community

### Where can I get help?

[Support server]({{ site.url }}{{ site.baseurl }}/support/) — fastest path to a real person.

### How do I request a feature?

Two channels:

- **Support server `#bot-feedback`** — informal discussion, real-time chat
- **GitHub Issues** — formal tracking on the [docs repo](https://github.com/WandWeb2/server-assistant-docs/issues/new/choose); see the [Support page]({{ site.url }}{{ site.baseurl }}/support/)

### Is the source code open?

No — the bot's source is closed. What *is* public lives in the [documentation repository](https://github.com/WandWeb2/server-assistant-docs): the docs site, privacy policy, terms, changelog, roadmap, and the issues/discussions where you can report bugs and request features.

### Can I self-host?

No — Server Assistant is a **fully managed, hosted bot**. You invite it and configure everything in Discord; there's nothing to install, host, or maintain on your end.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't installed yet
- [Commands]({{ site.url }}{{ site.baseurl }}/commands/) for the full reference
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for deep dives
- [Support]({{ site.url }}{{ site.baseurl }}/support/) if you need help
