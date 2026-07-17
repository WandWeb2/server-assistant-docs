---
layout: wiki
title: Server Assistant Audit Log
permalink: /wiki/audit-log/
wiki: true
wiki_category: "Moderation"
summary: How Server Assistant keeps a reliable, tamper-proof record of every moderation action, an always-on log in your web dashboard, an optional Discord log channel, and a separate encrypted record staff can't quietly wipe.
wiki_keywords: [audit, audit log, audit trail, log, logging, log channel, mod-log, moderation history, accountability, tamper-proof, native actions, command usage]
description: A deep dive into Server Assistant's tamper-proof audit log, what gets recorded, why it can't be quietly wiped, and how to set your log channel.
---

# The audit log

Every time a moderator acts, Server Assistant writes it down. That **audit trail**
answers the questions that come up later: *who* removed that member, *when* the
channel was locked, *why* someone was banned. It runs on every plan, nothing to
switch on.

<span class="cmd-tag free">FREE</span> &nbsp;The audit log is part of every plan.

Three parts work together:

- A **permanent moderation log in your web dashboard**: always on, every plan. It
  records every action on our servers, so it **can't be edited or deleted from
  within Discord**; admins read it by signing in. It's there even if you never set
  up a Discord log channel.
- A **visible log channel** in your server (optional, pick one during `/setup`),
  where each action *also* lands as a tidy embed your team can read at a glance.
- A **separate, encrypted record** that **staff cannot read, edit, or erase**, so
  the underlying trail survives whatever happens to the visible channel.

> **In short:** the log channel is the window; the dashboard log and encrypted
> record are the safe behind the glass. You can break the window, you can't open
> the safe.

## What gets logged

Server Assistant records what matters for accountability:

- **Moderation actions**: warnings, notes, mutes, kicks, bans, soft-bans,
  temp-bans, locks, lockdowns and the rest, each logged with **who** did it,
  **what** they did, **to whom**, and the **reason**.
- **Actions taken directly in Discord**: ban or kick someone via Discord's own
  menus (not a Server Assistant command) and the bot logs it anyway, marked as a
  **native action**.
- **Command usage**: a compact one-line entry each time a command is run, so you
  can see who's driving the bot even when nothing changes.

### A moderation action in the log

When a command like `/ban` runs, the action lands in your log channel as a full
embed, the same one the command author sees, mirrored to the team:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
    <div class="dc-embed red">
      <div class="dc-title">Member banned</div>
      <div class="dc-desc">@Raider has been banned.</div>
      <div class="dc-fname">Reason</div><div class="dc-fval">Posting scam links</div>
      <div class="dc-fname">By</div><div class="dc-fval">@you</div>
      <div class="dc-foot">Logged to #mod-log · reversible from the log</div>
    </div>
  </div></div>
</div>

### An action taken directly in Discord

Moderate with Discord's built-in tools and the trail stays complete: the bot
mirrors the action into the log channel, marked so you can tell it apart, with a
nudge to use the bot next time (which keeps the one-tap undo):

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed amber">
      <div class="dc-title">Ban, done directly in Discord</div>
      <div class="dc-desc"><strong>Who:</strong> @mod<br><strong>Target:</strong> @Raider<br><strong>Reason:</strong> Posting scam links</div>
      <div class="dc-fname">Tip for the team</div><div class="dc-fval">Run <code>/ban</code> next time and you'll get a one-tap undo on the log entry.</div>
      <div class="dc-foot">Native action · taken outside Server Assistant but logged for you</div>
    </div>
  </div></div>
</div>

Native bans, unbans, kicks, timeouts, role changes and channel deletions are all
picked up this way.

### A command-usage entry

Every command leaves a light footprint too, a single grey line naming who ran
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
**Behaviour**: the detailed moderation entries above always log regardless.

## What's recorded, and what isn't

The dashboard moderation log is deliberately minimal. Each entry keeps **only**:

- The affected member's Discord user ID
- The **action type** (ban, kick, timeout, delete, flag, …)
- **Who did it**: a staff member, or an automated system such as **ThreatNet** (for
  an automatic scam-image removal)
- A **timestamp** and a short **reason**

It does **not** store the message content, or any image that triggered the action,
only the fields above. Entries are automatically removed after **180 days**. (The
full detail lives in our [Privacy Policy]({{ '/privacy/' | relative_url }}).)

## Why it's tamper-proof

An audit trail has to stay trustworthy even when someone would rather it didn't,
so the record **can't be quietly wiped**:

- **A separate, encrypted record.** Alongside the visible channel, the bot keeps
  its own **encrypted** log of every action, outside Discord. **Staff cannot read,
  edit or erase it**, there's no command, button or permission that reaches in.
- **Deleting log messages doesn't delete the truth.** Someone *can* delete a
  message from the visible log channel, but that changes only the window, not the
  safe. The encrypted record is untouched.
- **And you'll know if they try.** If a message is deleted from your log channel,
  Server Assistant spots it and alerts your log channel and the server owner,
  naming who did it:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed red">
      <div class="dc-title">Audit-log tampering detected</div>
      <div class="dc-desc">A message was just <strong>deleted from your audit-log channel</strong> by @mod.<br><br><strong>Don't worry, nothing is actually lost.</strong> Server Assistant keeps a separate, <strong>encrypted</strong> record of every moderation action that staff cannot read, edit, or erase. This is just so you're aware someone removed an entry from the visible log.</div>
      <div class="dc-foot">Server Assistant · log integrity monitor</div>
    </div>
  </div></div>
</div>

If the log channel itself is deleted, the bot notices, clears the setting so you
can pick a fresh one, and the encrypted record carries on untouched.

## Setting your log channel

A Discord log channel is **optional**, the dashboard log is always on either way.
For the Discord mirror too, choose it during the **`/setup`** wizard on the
**Channels** step: the bot detects a likely candidate (often `#mod-log`), or you
can pick another from the dropdown, have it **Create for me** a fresh locked-down
one, or choose **Portal only** to skip the Discord channel entirely.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">Welcome, let's get you set up</div>
      <div class="dc-desc">I've filled in your channels and roles. <strong>Step 1 of 3</strong>, looks right?</div>
      <div class="dc-fname">Staff chat <span style="color:#949ba4;font-weight:400">(where I listen for commands)</span></div><div class="dc-fval">#staff-chat <span style="color:#949ba4">(detected)</span></div>
      <div class="dc-fname">Log channel <span style="color:#949ba4;font-weight:400">(optional, dashboard log is always on)</span></div><div class="dc-fval">#mod-log <span style="color:#949ba4">(detected)</span></div>
      <div class="dc-foot">Pick a different channel, create a fresh one, or choose Portal only</div>
    </div>
  </div></div>
</div>

To change it later, open **`/settings` → Behaviour → Log channel** to pick a
different channel or switch to **Portal only** (your dashboard log stays on).
Re-running **`/setup`** works too. The same **`/settings` → Behaviour** section
holds the finer controls: how chatty the log is, and whether the compact
command-usage lines appear.

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}), choose your log channel and staff roles in about a minute
- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}), every command that writes to your audit trail
