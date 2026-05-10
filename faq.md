---
layout: default
title: FAQ
permalink: /faq/
description: Frequently asked questions about Server Assistant.
---

# ❓ Frequently Asked Questions

## 🚀 Getting started

### Is the bot free?

The current build is **free for everyone**. A future premium tier will lock advanced features behind the Discord App Directory subscription model (~$4.99/mo per server) once the bot is verified by Discord. **All current features will remain free** — premium will only add new ones. Servers that join during the free phase will be grandfathered in.

### How do I add the bot to my server?

You'll need **Manage Server** permission. Click the invite link from the bot's directory listing, pick your server, and authorise the requested permissions. After that, run `/setup` as the server owner.

### Why does only the server owner get to run `/setup`?

`/setup` maps your moderation roles to the bot's permission tiers. Letting an admin do this would let admins escalate themselves to "Owner" tier and bypass the approval workflow. Treating it as owner-only is a hard safety check.

### How long does setup take?

About 60 seconds. The wizard has 3 steps: pick channels, pick roles, pick AI provider. There's a 4-step optional customisation pass (`/settings`) afterwards.

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

You can change the ladder via `/settings → Quick Presets → Punishment Ladder`. Three presets: Gentle (5/10/20), Standard (3/5/10), Strict (2/3/5).

---

## 🤖 AutoMod

### Will AutoMod break legitimate conversation?

The shipped filter packs use **word boundaries** (`\b`) to avoid the [Scunthorpe problem](https://en.wikipedia.org/wiki/Scunthorpe_problem) — words like `assassin`, `classic`, `Scunthorpe` won't trigger an "ass" or other partial filter. The default "Scams + slurs (gaming)" preset specifically **does not** filter casual profanity (fuck/shit/damn/etc.) since gaming culture tolerates them.

Strict mode adds those, with high false-positive risk — only use it for child-friendly servers.

### Can I add my own filters?

Yes. Run `/automod` → **Add Filter** to add custom regex. Each pattern is validated before saving. You can also add link blocklist domains (e.g. known phishing sites).

### Does AutoMod scan staff messages?

**No.** Staff are completely exempt regardless of their role tier. The bot identifies staff by checking if they have any role mapped to a permission tier in `/settings → Role Tiers`.

### What's the difference between an AutoMod warning and a manual warning?

Both go on the user's record, but only AutoMod warnings count toward escalation thresholds. The audit log distinguishes them with an `auto: true` flag.

---

## 🔐 Verification Gate

### How does the verification gate work?

When enabled (`/settings → Verification`), every new joiner receives a DM with a green **Verify** button. Clicking it grants them the configured verified role, which gates access to channels you mark as verified-only via Discord's role permissions.

### What happens if a user has DMs disabled?

The bot logs the failure to your log channel and the user remains unverified. They can still see public channels but not anything gated behind the verified role.

### Can I customise the verification message?

Currently it's a fixed message ("Welcome to {server}! Click Verify to access the rest of the server."). Custom verification copy is on the roadmap.

---

## 🎨 AI features

### Are AI features free?

It depends on the host. The free hosted bot uses a shared rate-limited xAI Grok key. Self-hosters or servers that want unlimited AI usage can paste their own xAI or OpenAI key during `/setup` (encrypted in the bot's vault).

### What data is sent to the AI provider?

Only the data needed for the request. For `/report`, that's about 20 messages of context around the flagged message. For `/imagine`, just your prompt text. **No user metadata, IDs, or persistent identifiers are transmitted.** See the [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/) for the full picture.

### What models are used?

- **xAI Grok:** `grok-3-mini` (fast, cheap)
- **OpenAI:** `gpt-4o-mini` (default)
- **Image generation:** DALL·E 3 (paid), Stable Diffusion XL (paid), Pollinations.ai (free, no auth)

### Can I disable AI entirely?

Yes. Run `/ai-config` and choose **Skip AI**. `/imagine` and AI-assisted reports will fail gracefully with a clear message.

---

## 💾 Data & privacy

### Where is data stored?

All on the bot host's machine, encrypted where applicable. The encryption uses Fernet (AES-128) for credentials. Data is per-guild isolated — your warnings can't leak to other servers.

### What happens to my data when the bot is removed from my server?

Encrypted secrets (BYO API keys) are wiped immediately on `on_guild_remove`. Other data (warnings, notes, audit log) is **retained** in case the bot is re-added — many servers kick and re-invite during testing. To request manual deletion, contact the operator via the support server.

### Is there a public API?

Not yet. A premium-tier REST API for guild data is on the roadmap.

### Can I export my server's data?

Manually, yes — the bot operator can provide a JSON dump on request. A `/export-server-data` command is on the roadmap.

---

## 🛠️ Troubleshooting

### Slash commands don't appear

Discord global slash commands take **up to 1 hour** to propagate after the very first time the bot is added. After that, command updates also take up to an hour for global sync. If they're still missing after 90 minutes, hard-refresh Discord (Ctrl+R) to flush the local cache.

### Right-click context menus don't show "View Info" or "Report Message"

Same as above — global propagation. After waiting, hard-refresh Discord (Ctrl+R). Right-click → **Apps ▸ Server Assistant** is where they live, not at the top level of the right-click menu.

### The bot is offline

Check the bot's status via the support server, or via your tray app if you self-host. The bot is designed to auto-reconnect on transient Discord outages, but a host crash needs manual intervention.

### `/setup` isn't responding

The bot may be globally rate-limited if it's connected to many servers. Wait 60 seconds and try again. If still unresponsive, post in the support server.

### "I understand my bot needs to be online" — what does Top.gg mean?

Top.gg's review process probes the bot during business hours. If the bot is offline during the probe, the listing is rejected. Make sure the bot is up 24/7 during the review window.

---

## 🤝 Community

### Where can I get help?

[Support server]({{ site.url }}{{ site.baseurl }}/support/) — fastest. The maintainer and other operators are usually around.

### How do I request a feature?

Two channels:
- **GitHub Issues:** [Issues page]({{ site.url }}{{ site.baseurl }}/support/) — formal tracking
- **Support server `#bot-feedback` channel** — informal discussion

### Is the source code open?

The main bot code is currently in a **private repository** while the project stabilises. The public-facing docs (this site) and a non-source documentation set are open. A future release will move the source to public open-source under MIT.

### Can I self-host?

Self-hosting requires source access, which currently means contacting the maintainer. Once the source goes public, self-hosting will follow standard "clone, set DISCORD_TOKEN env var, run" deployment.

---

## What's next?

- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you haven't installed yet
- [Commands]({{ site.url }}{{ site.baseurl }}/commands/) for the full reference
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for deep dives
- [Support]({{ site.url }}{{ site.baseurl }}/support/) if you need help
