---
layout: default
title: Support
permalink: /support/
description: How to get help with Server Assistant — use the /support slash command.
---

# 💬 Get Help

The only support channel is the **`/support`** slash command — alias **`/feedback`** — run from any server that has Server Assistant installed.

<style>
.sup-cta { display: flex; gap: 1rem; align-items: center; margin: 1.3rem 0; padding: 1.1rem 1.3rem; background: rgba(60,193,240,0.10); border: 1px solid rgba(60,193,240,0.3); border-radius: 12px; font-size: .95rem; line-height: 1.5; }
.sup-cta .ico { font-size: 1.8rem; flex-shrink: 0; }
.sup-cta code { color: var(--accent); }
.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: .5rem 0; background: rgba(255,255,255,0.04); }
.doc-sec > summary { cursor: pointer; font-size: 1rem; font-weight: 700; padding: .65rem .85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] { padding: 0 .9rem .6rem; }
.doc-sec[open] > summary { margin: 0 -.9rem .35rem; }
.doc-sec code { color: var(--accent); }
</style>

<div class="sup-cta">
  <div class="ico">🎫</div>
  <div>Run <code>/support</code> (or <code>/feedback</code>) from any server with the bot, tap <strong>Create a ticket</strong>, and DM your question — replies come straight back to your DMs.</div>
</div>

## How it works

- **🎫 Create a ticket** — the bot DMs you and waits. Your next DM (within 15 minutes) becomes the ticket — text, screenshots, or both.
- **✋ Never mind** — closes the prompt; no ticket created.

The maintainer is notified the moment your first DM lands. Replies come back as a **DM from the bot** — reply to that DM to follow up (it reacts ✅ to confirm), and the ticket stays open until it's marked resolved.

<details class="doc-sec" markdown="1">
<summary>📋 What to include</summary>

Give us enough to help on the first reply:

1. **What you tried** — the exact command (e.g. `/warn @user reason: …`)
2. **What you expected**, and **what actually happened**
3. **Any error message** the bot showed
4. **The bot version** — run `/info` in your server

Redact tokens, API keys, or sensitive user IDs before posting.

</details>

<details class="doc-sec" markdown="1">
<summary>🔒 Reporting a security vulnerability</summary>

Use `/support`, but **prefix your first DM with `[SECURITY]`** so it's prioritised. Full policy: [SECURITY.md](https://github.com/WandWeb2/server-assistant-docs/blob/main/SECURITY.md). **Don't** open a public GitHub issue — disclosure before a fix puts every server at risk.

In scope: permission-bypass, decryption of stored credentials, privilege escalation, injection, and AutoMod evasion affecting host security. The maintainer commits to: acknowledgement within **72 hours**, initial assessment within **7 days**, and a fix or plan within **30 days** for high-severity issues.

</details>

## Don't have the bot yet?

[Invite Server Assistant]({{ site.url }}{{ site.baseurl }}/setup/) to a server you own (or have **Manage Server** on), then run `/support`. Even a fresh server with just you and the bot works fine.

---

**Before asking, the docs may already answer it:** [Setup]({{ site.url }}{{ site.baseurl }}/setup/) · [Commands]({{ site.url }}{{ site.baseurl }}/commands/) · [Features]({{ site.url }}{{ site.baseurl }}/features/) · [FAQ]({{ site.url }}{{ site.baseurl }}/faq/) · [Privacy]({{ site.url }}{{ site.baseurl }}/privacy/) · [Terms]({{ site.url }}{{ site.baseurl }}/terms/)

If something in the docs is wrong or unclear, say so in your `/support` message — that feedback is what improves them.
