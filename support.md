---
layout: default
title: Support
permalink: /support/
description: How to get help with Server Assistant — use the /support slash command.
---

# 💬 Get Help

The only support channel is the **`/support`** slash command, run from any server that has Server Assistant installed.

---

## How to open a ticket

In any Discord channel where you can send messages, type:

```
/support message: <describe what's going on>
```

Hit Enter. You'll get a private (ephemeral) confirmation back from the bot with your ticket number.

The maintainer is notified instantly. Replies come back via a **DM from the bot**.

---

## What to include

Give us enough to actually help on the first reply:

1. **What you tried** — the exact command or interaction (e.g. `/warn @user reason: …`)
2. **What you expected**
3. **What actually happened**
4. **Any error message** the bot showed you
5. **The bot version** — run `/info` in your server to find it

Redact tokens, API keys, or sensitive user IDs before posting.

---

## After you open a ticket

- You'll get a **DM from Server Assistant** when the maintainer replies.
- **Reply to that DM** in Discord to add a follow-up — your reply lands in the same ticket automatically. The bot will react with ✅ to confirm receipt.
- **Send screenshots** the same way — DM the bot with the image attached. PNG, JPG, GIF, and WEBP are supported.
- The ticket stays open until the maintainer marks it resolved. If the issue comes back later, **open a new ticket** with `/support`.

---

## Don't have the bot in any server yet?

[Invite Server Assistant]({{ site.url }}{{ site.baseurl }}/setup/) to a server you own (or have **Manage Server** on), then run `/support` from there. Even a fresh server with just you and the bot works fine for support.

---

## 🔒 Security vulnerabilities

For security issues, see the [SECURITY policy](https://github.com/WandWeb2/server-assistant-docs/blob/main/SECURITY.md).

**Do not** report vulnerabilities via `/support` (it routes through Discord). Use the disclosure email in SECURITY.md.

In-scope: bypasses of role-based permission, decryption of stored credentials, privilege escalation, injection vulnerabilities, and AutoMod evasion that affects host security.

The maintainer commits to:

- Acknowledgement within **72 hours**
- Initial assessment within **7 days**
- Fix or detailed plan within **30 days** for high-severity issues

---

## 📚 Before asking — check the docs

A lot of questions are already answered:

- [Setup guide]({{ site.url }}{{ site.baseurl }}/setup/) — first-time install
- [Commands reference]({{ site.url }}{{ site.baseurl }}/commands/) — every command
- [Features]({{ site.url }}{{ site.baseurl }}/features/) — deep dives
- [FAQ]({{ site.url }}{{ site.baseurl }}/faq/) — common questions
- [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/)
- [Terms of Service]({{ site.url }}{{ site.baseurl }}/terms/)

If something in the docs is wrong, unclear, or missing — say so in your `/support` message. The docs are imperfect and your feedback is what improves them.
