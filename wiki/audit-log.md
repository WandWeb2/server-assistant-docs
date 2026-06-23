---
layout: wiki
title: Server Assistant Audit Log
permalink: /wiki/audit-log/
wiki: true
wiki_category: Feature guides
summary: How Server Assistant keeps a reliable, tamper-proof record of every moderation action — written to your log channel and backed by a separate encrypted record staff can't quietly wipe.
wiki_keywords: [audit, audit log, audit trail, log, logging, log channel, mod-log, moderation history, accountability, tamper-proof, native actions, command usage]
description: A deep dive into Server Assistant's tamper-proof audit log — what gets recorded, why it can't be quietly wiped, and how to set your log channel.
---

# 📜 The audit log

Every time a moderator acts in your server, Server Assistant writes it down. That
record — your **audit trail** — is how you answer the questions that come up after
the fact: *who* removed that member, *when* the channel was locked, *why* someone
was banned. It runs on every plan, with nothing to switch on.

<span class="cmd-tag free">FREE</span> &nbsp;The audit log is part of every plan.

There are two halves to it, working together:

- A **visible log channel** in your own server (you choose it during `/setup`),
  where each action lands as a tidy embed your whole team can read.
- A **separate, encrypted record** kept off to one side that **staff cannot read,
  edit, or erase** — so even if someone tidies up the visible channel, the real
  history is still there.

> **In short:** the log channel is the window your team looks through; the
> encrypted record is the safe behind the glass. You can break the window — you
> can't open the safe.

## What gets logged

Server Assistant records the things that actually matter for accountability:

- **Moderation actions** — warnings, notes, mutes, kicks, bans, soft-bans,
  temp-bans, locks, lockdowns and the rest. Each one is logged with **who** did
  it, **what** they did, **to whom**, and the **reason** they gave.
- **Actions taken directly in Discord** — if a moderator bans or kicks someone
  using Discord's own menus (not a Server Assistant command), the bot notices and
  logs it for you anyway, clearly marked as a **native action**.
- **Command usage** — a compact, one-line entry each time a command is run, so
  you can see who's been driving the bot even when a command doesn't change
  anything.

### A moderation action in the log

When a command like `/ban` runs, the action lands in your log channel as a full
embed — the same one the command author sees, mirrored to the team:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
    <div class="dc-embed red">
      <div class="dc-title">🔨 Member banned</div>
      <div class="dc-desc">@Raider has been banned.</div>
      <div class="dc-fname">Reason</div><div class="dc-fval">Posting scam links</div>
      <div class="dc-fname">By</div><div class="dc-fval">@you</div>
      <div class="dc-foot">Logged to #mod-log · reversible from the log</div>
    </div>
  </div></div>
</div>

### An action taken directly in Discord

Moderate with Discord's built-in tools and Server Assistant still keeps your trail
complete. It mirrors the action into the log channel, marked so you can tell it
apart at a glance — with a friendly nudge towards doing it through the bot next
time (which keeps the one-tap undo):

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed amber">
      <div class="dc-title">🔨 Ban — done directly in Discord</div>
      <div class="dc-desc"><strong>Who:</strong> @mod<br><strong>Target:</strong> @Raider<br><strong>Reason:</strong> Posting scam links</div>
      <div class="dc-fname">💡 Tip for the team</div><div class="dc-fval">Run <code>/ban</code> next time and you'll get a one-tap undo on the log entry.</div>
      <div class="dc-foot">⚡ Native action · taken outside Server Assistant but logged for you</div>
    </div>
  </div></div>
</div>

Native bans, unbans, kicks, timeouts, role changes and channel deletions are all
picked up this way.

### A command-usage entry

Every command leaves a light footprint too — a single grey line naming who ran
what, and where. Commands that already produce a detailed entry (like the ban
above) are skipped, so you never see the same thing twice:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
    <div class="dc-embed">
      <div class="dc-desc">⌘ @you ran <code>/warnings</code> in #staff-chat</div>
      <div class="dc-foot">command · slash</div>
    </div>
  </div></div>
</div>

You can turn these compact command-usage lines on or off in `/settings` →
**Behaviour** — the detailed moderation entries above always log regardless.

## Why it's tamper-proof

The whole point of an audit trail is that it stays trustworthy even when someone
would rather it didn't. Server Assistant is built so the record **can't be quietly
wiped**:

- **A separate, encrypted record.** Alongside the visible channel, the bot keeps
  its own **encrypted** log of every moderation action. It lives outside Discord,
  and **staff cannot read, edit or erase it** — there's no command, button or
  permission that lets a moderator reach in and change history.
- **Deleting log messages doesn't delete the truth.** Someone *can* delete a
  message from the visible log channel — but doing so changes only the window,
  not the safe. The underlying encrypted record is untouched.
- **And you'll know if they try.** If a message is deleted from your log channel,
  Server Assistant spots it and raises an alert — to your log channel and to the
  server owner — naming who did it:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed red">
      <div class="dc-title">⚠️ Audit-log tampering detected</div>
      <div class="dc-desc">A message was just <strong>deleted from your audit-log channel</strong> by @mod.<br><br><strong>Don't worry — nothing is actually lost.</strong> Server Assistant keeps a separate, <strong>encrypted</strong> record of every moderation action that staff cannot read, edit, or erase. This is just so you're aware someone removed an entry from the visible log.</div>
      <div class="dc-foot">Server Assistant · log integrity monitor</div>
    </div>
  </div></div>
</div>

If the log channel itself is deleted, the bot simply notices it's gone and clears
the setting so you can pick a fresh one — and, again, the encrypted record carries
on untouched the whole time.

## Setting your log channel

Your log channel is chosen during the **`/setup`** wizard, on the **Channels**
step. The bot detects a likely candidate (often `#mod-log`) and fills it in for
you — accept it, pick a different channel from the dropdown, or have the bot
**🆕 Create for me** a fresh, locked-down one that only it can write to.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">🧭 Welcome — let's get you set up</div>
      <div class="dc-desc">I've filled in your channels and roles. <strong>Step 1 of 3</strong> — looks right?</div>
      <div class="dc-fname">Staff chat <span style="color:#949ba4;font-weight:400">(where I listen for commands)</span></div><div class="dc-fval">#staff-chat ✓ <span style="color:#949ba4">(detected)</span></div>
      <div class="dc-fname">Log channel <span style="color:#949ba4;font-weight:400">(your audit trail)</span></div><div class="dc-fval">#mod-log ✓ <span style="color:#949ba4">(detected)</span></div>
      <div class="dc-foot">Pick a different channel from the dropdown, or create a fresh one</div>
    </div>
  </div></div>
</div>

Want to change it later? Re-run **`/setup`** any time — it loads your current
configuration, so you can swap the log channel without starting over. For the
finer controls — how chatty the log is, and whether those compact command-usage
lines appear — open **`/settings`** and look under **Behaviour**.

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}) — choose your log channel and staff roles in about a minute
- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}) — every command that writes to your audit trail
