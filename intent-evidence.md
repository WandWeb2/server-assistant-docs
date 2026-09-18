---
layout: default
title: Privileged-Intent Review Evidence, Server Assistant
permalink: /intent-evidence/
sitemap: false
description: Screenshot evidence supporting Server Assistant's Discord privileged-intent application.
---

# Privileged-Intent Review: Evidence

This page collects the screenshot evidence for **Server Assistant's** Discord
privileged-gateway-intent application (Server Members and Message Content). It
is unlisted (not linked from the site navigation, search, or sitemap) and exists
so the reviewer can view each screenshot in context.

Each screenshot demonstrates a specific declared use of the intent.

**On the Presence intent, which is no longer requested.** An earlier application
asked for it, to show an aggregate count of members online and in voice. That
count now reads `approximate_presence_count` from
`GET /guilds/{guild.id}?with_counts=true`, which requires no privileged intent,
so the feature works without it and the request has been withdrawn.

---

## Server Members intent

**Member-join handling:** the bot acts on the member-join gateway event the
moment someone joins (here, sending the configured welcome DM; the same event
drives anti-raid and new-joiner screening).

![Welcome DM on member join]({{ '/assets/intent-evidence/WELCOME%20DM.png' | relative_url }})

**Role → permission-tier mapping:** `/setup` (and the web portal) resolve the
server's Discord roles into Moderator / Admin / Owner tiers, so the bot and
portal enforce staff access correctly. This requires the member/role list.

![Staff role to tier selection]({{ '/assets/intent-evidence/STAFF%20ROLE%20TIER%20SELECTION.png' | relative_url }})

---

## Message Content intent

**AutoMod removing a filtered message:** core moderation scans message content
against the server's configured filters; a match is removed and the poster
timed out.

![AutoMod removed the offending post and applied a timeout]({{ '/assets/intent-evidence/AUTOMOD%20WORD%20FILTER%20-%20OFFENDER%20POST%20REMOVED%20%26%20TIMEOUT%20APPLIED.png' | relative_url }})

**Notice to the offender:** the member is told their message was removed.

![Message to the offender]({{ '/assets/intent-evidence/AUTOMOD%20WORD%20FILTER%20-%20MSG%20TO%20OFFENDER.png' | relative_url }})

**Audit-log entry:** the action is recorded to the server's log channel.

![AutoMod action logged to the log channel]({{ '/assets/intent-evidence/AUTOMOD%20WORD%20FILTER%20-%20LOG%20CHANNEL%20POST.png' | relative_url }})

**AutoMod AI second-opinion (opt-in):** a borderline word-filter hit is scored
by AI and, when low-confidence, routed to staff for a decision instead of
auto-actioning. Reads only the single flagged message.

![AutoMod AI review card]({{ '/assets/intent-evidence/AI%20REVIEW.png' | relative_url }})

**Message Report (staff-invoked):** a moderator right-clicks a message and the
bot summarises it and its surrounding context to help them judge it.

![Message Report moderation summary]({{ '/assets/intent-evidence/MESSAGE%20REPORT%20-%20RIGHT%20CLICK%20MENU%20ITEM.png' | relative_url }})

---

<small>Server Assistant · <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a></small>
