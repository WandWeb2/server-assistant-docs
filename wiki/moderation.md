---
layout: wiki
title: Server Assistant Moderation & Safety
permalink: /wiki/moderation/
wiki: true
wiki_category: Moderation & safety
summary: Every moderation and safety command — warnings, notes, mutes, locks, kicks, bans, bulk purge and the anti-raid toolkit — each shown with the exact embed you'll see in Discord.
wiki_keywords: [warn, warnings, note, mute, kick, ban, tempban, softban, purge, lockdown, altguard, slowmode, lock, role, moderation, safety]
description: A full reference for Server Assistant's moderation and safety commands, each shown one state at a time exactly as it appears in Discord.
---

# 🛡️ Moderation &amp; safety

This is the everyday toolkit for keeping your server in order — logging
warnings, timing people out, removing troublemakers, and slamming the doors shut
when a raid hits. Every command here runs as a Discord **slash command**, works
in any channel, and writes to your **log channel** so you always have an audit
trail.

> **Who can run these:** the server **owner**, anyone with a matching **staff
> role**, or anyone holding the equivalent Discord permission. Where a command
> needs a specific capability (like *warn* or *ban*), the bot checks that before
> acting and politely refuses if you're missing it.

Commands are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission &nbsp;·&nbsp;
<span class="cmd-tag ai">AI</span> uses AI tokens

---

## Warnings &amp; notes {#warnings-notes}

Build a paper trail. **Warnings** are on-the-record and the member is told;
**notes** are private staff context the member never sees. Both are numbered so
you can refer back to — or tidy up — individual entries later.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/warn</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Issue a warning to a member. It's logged with a number, the member is notified, and it feeds the punishment ladder and threat signals.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The user to warn.</td></tr>
    <tr><td><code>reason</code> <span class="req">required</span></td><td>text</td><td>Reason for the warning.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/warn</span> <span class="arg">user:</span> @Troublemaker <span class="arg">reason:</span> Spamming in #general</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed amber">
        <div class="dc-title">⚠️ Warning issued</div>
        <div class="dc-desc">@Troublemaker has been warned.</div>
        <div class="dc-fname">Reason</div><div class="dc-fval">Spamming in #general</div>
        <div class="dc-fname">Warning</div><div class="dc-fval">#3 • by @you</div>
        <div class="dc-foot">Logged to #mod-log · the member has been notified</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/warnings</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Look up a member's warning history. The reply is private to you (ephemeral).</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The user to look up.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/warnings</span> <span class="arg">user:</span> @Troublemaker</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed amber">
        <div class="dc-title">⚠️ Warnings for Troublemaker</div>
        <div class="dc-desc">Total: <strong>3</strong></div>
        <div class="dc-fname">#3 • 2026-06-21 • by @you</div><div class="dc-fval">Spamming in #general</div>
        <div class="dc-fname">#2 • 2026-05-30 • by @mod</div><div class="dc-fval">Backseat moderating after a reminder</div>
        <div class="dc-fname">#1 • 2026-05-12 • by @mod</div><div class="dc-fval">Mild rule-break — first heads-up</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/note</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Add a private staff note to a member. Notes are for your team only — the member is never told.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The user the note is about.</td></tr>
    <tr><td><code>text</code> <span class="req">required</span></td><td>text</td><td>The note to record.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/note</span> <span class="arg">user:</span> @NewMember <span class="arg">text:</span> Joined from the partner server — vouched by @friend</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">📝 Note added</div>
        <div class="dc-desc">Saved a private note on @NewMember.</div>
        <div class="dc-foot">Note #1 · staff only — the member can't see this</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/notes</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">View the private staff notes on a member. The reply is private to you.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The user to look up.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/notes</span> <span class="arg">user:</span> @NewMember</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">📝 Notes for NewMember</div>
        <div class="dc-desc">Total: <strong>1</strong></div>
        <div class="dc-fname">#1 • 2026-06-22 • by @you</div><div class="dc-fval">Joined from the partner server — vouched by @friend</div>
      </div>
    </div></div>
  </div>
</div>

### Tidying up — `/manage-warnings` &amp; `/manage-notes`

Need to remove an old entry? These open a small private panel with a
**dropdown** of the member's warnings (or notes). Tick the ones to remove and
the list updates instantly — handy when a warning was a mistake or has simply
aged out.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/manage-warnings</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">View and remove a member's warnings from a private dropdown panel. Needs the warning capability.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The user to manage warnings for.</td></tr>
  </table>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/manage-notes</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">View and remove staff notes on a member from a private dropdown panel. Needs the notes capability.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The user to manage notes for.</td></tr>
  </table>
</div>

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">Removing a warning</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="The panel opens">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">⚠️ Warnings for Troublemaker</div>
          <div class="dc-desc">Total: <strong>3</strong></div>
          <div class="dc-fname">#3 • 2026-06-21 • by @you</div><div class="dc-fval">Spamming in #general</div>
          <div class="dc-fname">#2 • 2026-05-30 • by @mod</div><div class="dc-fval">Backseat moderating after a reminder</div>
          <div class="dc-fname">#1 • 2026-05-12 • by @mod</div><div class="dc-fval">Mild rule-break — first heads-up</div>
          <div class="dc-select">Select warnings to remove (multi-select)…</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Pick what to remove.</strong> The dropdown lists each warning with its number, reason and who issued it. It's a multi-select, so you can clear several at once.</p>
  </div>

  <div class="wiz-step" data-step="After removal">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">⚠️ Warnings for Troublemaker</div>
          <div class="dc-desc">Total: <strong>2</strong></div>
          <div class="dc-fname">#2 • 2026-05-30 • by @mod</div><div class="dc-fval">Backseat moderating after a reminder</div>
          <div class="dc-fname">#1 • 2026-05-12 • by @mod</div><div class="dc-fval">Mild rule-break — first heads-up</div>
          <div class="dc-select">Select warnings to remove (multi-select)…</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The list updates in place.</strong> The selected warnings are gone and the total drops. Once a member has no warnings left the dropdown simply shows <code>(no warnings)</code> and goes quiet. <code>/manage-notes</code> works exactly the same way for notes.</p>
  </div>
</div>

---

## Quick actions {#quick-actions}

The fast everyday tools — calm a channel, cool someone down, tweak a nickname or
hand out a role. None of these remove anyone; they're the lighter touch.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/mute</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Time a member out for a set number of minutes — they can't talk or react until it lifts. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>User to mute.</td></tr>
    <tr><td><code>minutes</code> <span class="req">required</span></td><td>number</td><td>Duration in minutes (1–40320, i.e. up to 28 days).</td></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional reason for the log.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/mute</span> <span class="arg">user:</span> @Troublemaker <span class="arg">minutes:</span> 30 <span class="arg">reason:</span> Needs to cool off</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed amber">
        <div class="dc-title">🔇 Member muted</div>
        <div class="dc-desc">@Troublemaker is timed out for <strong>30 minutes</strong>.</div>
        <div class="dc-fname">Reason</div><div class="dc-fval">Needs to cool off</div>
        <div class="dc-foot">Lifts automatically · logged to #mod-log</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/unmute</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Lift a member's timeout early. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>User to unmute.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/unmute</span> <span class="arg">user:</span> @Troublemaker</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed green">
        <div class="dc-title">🔊 Timeout removed</div>
        <div class="dc-desc">@Troublemaker can talk again.</div>
        <div class="dc-foot">Logged to #mod-log</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/slowmode</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Set how long members must wait between messages in a channel — great for slowing a busy chat. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>seconds</code> <span class="req">required</span></td><td>number</td><td>Seconds between messages (0 to disable, max 21600).</td></tr>
    <tr><td><code>channel</code> <span class="opt">optional</span></td><td>channel</td><td>Which channel — defaults to the one you're in.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/slowmode</span> <span class="arg">seconds:</span> 10</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🐌 Slowmode set</div>
        <div class="dc-desc">#general now has a <strong>10-second</strong> wait between messages.</div>
        <div class="dc-foot">Set <code>seconds:</code> to 0 to switch it off</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/lock</span> &amp; <span class="cmd-name">/unlock</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Stop (or restore) <code>@everyone</code> being able to send messages in a single channel. Use it to pause a heated thread, then reopen it. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>channel</code> <span class="opt">optional</span></td><td>channel</td><td>Which channel to lock or unlock — defaults to the one you're in.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/lock</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed red">
        <div class="dc-title">🔒 Channel locked</div>
        <div class="dc-desc">#general is locked — only staff can send messages.</div>
        <div class="dc-foot">Run <code>/unlock</code> here to reopen it</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/nick</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Change a member's nickname — or leave it blank to reset them to their username. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The member to rename.</td></tr>
    <tr><td><code>nickname</code> <span class="opt">optional</span></td><td>text</td><td>The new nickname — leave blank to reset.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/nick</span> <span class="arg">user:</span> @Member <span class="arg">nickname:</span> Hex</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">✏️ Nickname updated</div>
        <div class="dc-desc">@Member is now shown as <strong>Hex</strong>.</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/role</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Add or remove a role from a member. The bot enforces your role hierarchy — it won't touch managed roles, <code>@everyone</code>, or anything above its own (or your) top role.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>action</code> <span class="req">required</span></td><td>choice</td><td><code>add</code> or <code>remove</code>.</td></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The member to update.</td></tr>
    <tr><td><code>role</code> <span class="req">required</span></td><td>role</td><td>The role to add or remove.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/role</span> <span class="arg">action:</span> add <span class="arg">user:</span> @Member <span class="arg">role:</span> @Verified</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed green">
        <div class="dc-title">🎭 Role added</div>
        <div class="dc-desc">@Member now has <strong>@Verified</strong>.</div>
      </div>
    </div></div>
  </div>
</div>

---

## Removals {#removals}

When a warning won't cut it. From the gentle nudge of a kick, through temporary
and permanent bans, to a soft-ban that clears recent messages but lets the person
rejoin. Every removal is logged with a one-tap **reversal** where it makes sense.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/kick</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Remove a member from the server. They can rejoin with a fresh invite — it's the lightest removal. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>User to kick.</td></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional reason for the log.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/kick</span> <span class="arg">user:</span> @Troublemaker <span class="arg">reason:</span> Ignoring staff warnings</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed amber">
        <div class="dc-title">👢 Member kicked</div>
        <div class="dc-desc">@Troublemaker has been removed from the server.</div>
        <div class="dc-fname">Reason</div><div class="dc-fval">Ignoring staff warnings</div>
        <div class="dc-foot">They can rejoin with a new invite · logged to #mod-log</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/ban</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Permanently ban a user — and you can optionally wipe their recent messages. Works even on someone who has already left.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>user</td><td>User to ban (works even if they've already left).</td></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional reason for the log.</td></tr>
    <tr><td><code>delete_days</code> <span class="opt">optional</span></td><td>number</td><td>Days of their messages to delete (0–7). Defaults to 0.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/ban</span> <span class="arg">user:</span> @Raider <span class="arg">reason:</span> Posting scam links <span class="arg">delete_days:</span> 1</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed red">
        <div class="dc-title">🔨 Member banned</div>
        <div class="dc-desc">@Raider has been banned.</div>
        <div class="dc-fname">Reason</div><div class="dc-fval">Posting scam links</div>
        <div class="dc-fname">Messages removed</div><div class="dc-fval">Last 1 day</div>
        <div class="dc-foot">Logged to #mod-log · reversible from the log</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/unban</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Lift a ban by the user's ID. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user_id</code> <span class="req">required</span></td><td>text</td><td>The banned user's numeric ID.</td></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional reason for the log.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/unban</span> <span class="arg">user_id:</span> 123456789012345678</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed green">
        <div class="dc-title">♻️ Ban lifted</div>
        <div class="dc-desc">The user is unbanned and can rejoin with a new invite.</div>
        <div class="dc-foot">Logged to #mod-log</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/softban</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Ban then immediately unban — a quick way to clear a member's recent messages and boot them while still letting them rejoin. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>user</td><td>User to soft-ban.</td></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional reason for the log.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/softban</span> <span class="arg">user:</span> @Spammer <span class="arg">reason:</span> Flood of links</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed amber">
        <div class="dc-title">🧽 Member soft-banned</div>
        <div class="dc-desc">@Spammer was removed and their recent messages cleared — they can rejoin with a new invite.</div>
        <div class="dc-fname">Reason</div><div class="dc-fval">Flood of links</div>
        <div class="dc-foot">Logged to #mod-log</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/tempban</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Ban a user for a set time, then auto-unban them. The timer survives a bot restart. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>user</td><td>User to ban.</td></tr>
    <tr><td><code>duration</code> <span class="req">required</span></td><td>text</td><td>How long, e.g. <code>30m</code>, <code>2h</code>, <code>7d</code>, <code>1w</code> (1m–28d).</td></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional reason for the log.</td></tr>
    <tr><td><code>delete_days</code> <span class="opt">optional</span></td><td>number</td><td>Days of their messages to delete (0–7). Defaults to 0.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/tempban</span> <span class="arg">user:</span> @Troublemaker <span class="arg">duration:</span> 7d <span class="arg">reason:</span> Cooling-off period</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed red">
        <div class="dc-title">⏳ Temporary ban set</div>
        <div class="dc-desc">@Troublemaker is banned for <strong>7 days</strong>, then unbanned automatically.</div>
        <div class="dc-fname">Reason</div><div class="dc-fval">Cooling-off period</div>
        <div class="dc-foot">The auto-unban survives restarts · logged to #mod-log</div>
      </div>
    </div></div>
  </div>
</div>

---

## Bulk &amp; raid response {#bulk-raid}

The heavy machinery — clear a flood of messages, slam every channel shut at once,
and shut the door on ban-evading alts. Plus the alert the bot raises on its own
when it spots a raid in progress.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/purge</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Bulk-delete recent messages. In <strong>Smart</strong> mode the AI reads the messages and removes only the problematic ones, after showing you a preview to confirm. Works in any channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>count</code> <span class="req">required</span></td><td>number</td><td>How many recent messages to scan or delete (1–200).</td></tr>
    <tr><td><code>user</code> <span class="opt">optional</span></td><td>member</td><td>Only delete this member's messages.</td></tr>
    <tr><td><code>mode</code> <span class="opt">optional</span></td><td>choice</td><td><strong>All recent messages</strong> (default) or <strong>Smart</strong> — AI removes only the problematic ones. The <span class="cmd-tag ai">AI</span> tag applies to Smart mode only.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/purge</span> <span class="arg">count:</span> 50</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed green">
        <div class="dc-title">🧹 Messages purged</div>
        <div class="dc-desc">Deleted <strong>50</strong> recent messages from #general.</div>
      </div>
    </div></div>
  </div>
</div>

### Smart purge — preview before anything is deleted

Run `/purge` with **mode: Smart** and the AI reads the recent messages, decides
which to keep and which to remove, and shows you a **preview first**. Nothing is
deleted until you press the button — and removed messages are archived to your
log channel for review.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">Smart purge — AI cleanup</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="You ask for a Smart purge">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
        <div class="dc-slash"><span class="cmd">/purge</span> <span class="arg">count:</span> 50 <span class="arg">mode:</span> Smart — AI removes only the problematic ones</div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Smart mode.</strong> The AI scans the last 50 messages and classifies each as keep or remove — it never deletes blindly.</p>
  </div>

  <div class="wiz-step" data-step="The preview">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">🧹 Smart purge — preview</div>
          <div class="dc-desc">Out of <strong>50</strong> scanned, I'd remove <strong>6</strong> and keep <strong>44</strong>.</div>
          <div class="dc-fname">Would remove</div>
          <div class="dc-fval">• <strong>Raider</strong> — free nitro click here lol… <em>(scam link)</em><br>• <strong>Raider</strong> — join my server everyone… <em>(spam advertising)</em><br>• <strong>Spammer</strong> — aaaaaaaaaaaaaaaaaa… <em>(flood)</em><br>… and 3 more.</div>
          <div class="dc-foot">Kept messages stay in place; removed ones are archived to your log channel. Nothing is deleted until you confirm.</div>
          <div class="dc-btns">
            <span class="dc-btn red">🧹 Delete flagged messages</span>
            <span class="dc-btn grey">Cancel</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Review, then choose.</strong> The preview lists who'd be removed and why. Only the person who ran the command can confirm. <strong>Cancel</strong> leaves everything untouched.</p>
  </div>

  <div class="wiz-step" data-step="Confirmed">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed green">
          <div class="dc-title">✅ Smart purge complete</div>
          <div class="dc-desc">Removed <strong>6</strong> flagged messages, kept <strong>44</strong>.</div>
          <div class="dc-foot">Removed messages archived to #mod-log for review</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Done.</strong> The flagged messages are gone, the rest are untouched, and a copy of everything removed is saved to your log channel so you can double-check the AI's call.</p>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/lockdown</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Lock or unlock <strong>every channel at once</strong> — your fastest raid response. <code>start</code> shuts everything and remembers the prior permissions; <code>end</code> restores them exactly.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>action</code> <span class="req">required</span></td><td>choice</td><td><code>start</code> = lock all channels, <code>end</code> = restore prior permissions.</td></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional reason for the log.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/lockdown</span> <span class="arg">action:</span> start <span class="arg">reason:</span> Raid in progress</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed red">
        <div class="dc-title">🔒 Server locked down</div>
        <div class="dc-desc">Locked <strong>18</strong> channels. Members can't send messages until you lift it.</div>
        <div class="dc-fname">Reason</div><div class="dc-fval">Raid in progress</div>
        <div class="dc-foot">Run <code>/lockdown end</code> to restore the previous permissions</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/altguard</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Repeat-offender detection. When it's on, likely ban-evading alts are flagged — or auto-banned when the match is confident — the moment they join. Only an admin or the owner can change this.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>mode</code> <span class="req">required</span></td><td>choice</td><td><code>on</code>, <code>off</code> or <code>status</code>.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/altguard</span> <span class="arg">mode:</span> on</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed green">
        <div class="dc-title">🛡️ Altguard on</div>
        <div class="dc-desc">I'll watch new joins for likely ban-evading alts — confident matches are auto-banned, weaker ones flagged for you to review.</div>
        <div class="dc-foot">Use <code>/altguard mode: status</code> any time to check</div>
      </div>
    </div></div>
  </div>
</div>

### When the bot spots a raid

You don't have to be watching. If a burst of accounts joins in a short window,
Server Assistant raises a **raid alert** in your log channel, pings the owner, and
hands you two buttons — lock everything down on the spot, or dismiss it as a false
alarm.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed red">
      <div class="dc-title">🚨 Possible Raid Detected</div>
      <div class="dc-desc"><strong>7 accounts joined in 30 seconds.</strong><br>Owner: @owner — review recent joins immediately.</div>
      <div class="dc-fname">Latest account</div><div class="dc-fval">@newjoin42 • created 14 minutes ago</div>
      <div class="dc-btns">
        <span class="dc-btn red">🔒 Lock down</span>
        <span class="dc-btn grey">Dismiss</span>
      </div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">
<strong>🔒 Lock down</strong> runs a full <code>/lockdown</code> on the spot — every
channel shut, prior permissions saved — and tells you how many channels were
locked. Lift it later with <code>/lockdown end</code>. <strong>Dismiss</strong>
clears the alert if it was a false alarm. Either button only works for staff with
the lock capability or the Manage Channels permission. The join threshold and
time window are configurable per server.</p>

---

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}) — configure channels, staff roles and anti-raid in about a minute
- [Settings &amp; dashboards]({{ '/wiki/' | relative_url }}) — AutoMod, the punishment ladder and per-feature panels *(coming soon)*
- [AI &amp; intelligence]({{ '/wiki/' | relative_url }}) — how AI features like Smart purge are tiered and metered *(coming soon)*
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
