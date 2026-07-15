---
layout: default
title: Privileged-Intent Review Evidence — Server Assistant
permalink: /intent-evidence/
sitemap: false
description: Screenshot evidence supporting Server Assistant's Discord privileged-intent application.
---
{::options parse_block_html="true" /}

# Privileged-Intent Review — Evidence

This page collects the screenshot evidence for **Server Assistant's** Discord
privileged-gateway-intent application (Server Members, Presence, Message
Content). It is unlisted — not linked from the site navigation, search, or
sitemap — and exists so the reviewer can view each screenshot in context.

Each screenshot below demonstrates a specific declared use of the intent.

---

## Server Members intent

**1. Member-join handling** — the bot acts on the `GUILD_MEMBER_ADD` gateway
event the moment a member joins (join screening / welcome / anti-raid).

![Member join handling]({{ '/assets/intent-evidence/server-members-1-join.png' | relative_url }})

**2. Role → permission-tier mapping** — `/setup` (and the web portal) resolve a
server's Discord roles into Moderator / Admin / Owner tiers, so the bot and
portal enforce access correctly. This requires the member/role list.

![Role to tier mapping]({{ '/assets/intent-evidence/server-members-2-role-tiers.png' | relative_url }})

---

## Presence intent

**3. Aggregate live-activity counts** — `/stats` (and the web dashboard) read
presence live only to display a **running total** of members online and in
voice (e.g. "🟢 Online · 🔊 In voice"). No per-member presence is stored or
profiled — only the aggregate count is shown.

![Live online and in-voice counts]({{ '/assets/intent-evidence/presence-stats.png' | relative_url }})

---

## Message Content intent

**4. AutoMod removing a filtered message** — core moderation scans message
content against the server's configured filters and removes matches.

![AutoMod removing a message]({{ '/assets/intent-evidence/message-content-1-automod-removal.png' | relative_url }})

**5. Message Report (staff-invoked)** — a moderator right-clicks a message and
the bot summarises the surrounding context to help them judge it.

![Message Report summary]({{ '/assets/intent-evidence/message-content-2-message-report.png' | relative_url }})

---

<small>Server Assistant · <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a></small>
