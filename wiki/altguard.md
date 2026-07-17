---
layout: wiki
title: Server Assistant Alt / Ban-Evasion Detection
permalink: /wiki/altguard/
wiki: true
wiki_category: "Moderation"
summary: Altguard watches new joins for ban-evading alts of people YOUR server has already kicked or banned, auto-banning confident matches and flagging weaker ones. A deep-dive on the signals it uses, the /altguard command, and why it's strictly local to your server.
wiki_keywords: [altguard, alt, alt account, ban evasion, repeat offender, fingerprint, rejoin, ban-evading, evasion detection, local moderation]
description: How Server Assistant's altguard catches ban-evading alts using your own server's ban and kick history, the matching signals, the /altguard command, and how it differs from the cross-server ThreatNet.
---

# Alt / ban-evasion detection (altguard)

You ban someone, and ten minutes later a fresh account with the same avatar
walks back in. **Altguard** notices. When it's on, every new member is checked
against the people *your* server has already kicked or banned, and a confident
match is banned again before they can settle in.

It runs entirely on **your own server's moderation history**, never a shared list
or cross-server network. That local-only design is the point, spelled out
[further down](#local-only).

> **Who can switch it on:** the server **owner**, or an admin with **Manage
> Server**. It's **off by default**: turn it on with `/altguard mode: on`.

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> only an admin or the owner can toggle it

---

## How the detection works {#how-it-works}

When someone joins, altguard compares them against each prior offender on file
and builds a **match score out of 100**. Signals stack:

- **Reused custom avatar, the strongest signal.** A joiner's custom avatar that's
  byte-for-byte the same image as a banned or kicked member's is a heavy hit,
  people change usernames far more readily than profile pictures.
- **Name similarity.** A near-identical username or display name counts strongly;
  a loosely similar one counts a little. `Toxic_Mike` rejoining as `ToxicMike2`
  won't slip past on a name tweak alone.
- **Brand-new account.** An account **created within the last 7 days** adds to the
  score, throwaway alts are usually freshly minted.
- **Recent offence.** If the original ban or kick was **within the last month**,
  the match weighs more heavily.

One weak coincidence won't trigger anything, it takes a convincing combination.

### Two outcomes: auto-ban or flag

- **Confident match → auto-banned.** Strong evidence (a reused avatar, or a
  near-identical name on a new account, at a high score) **bans the alt
  automatically** and posts a notice to your log channel.
- **Weaker match → flagged for review.** Suggestive but not conclusive signals
  take **no action**, altguard flags the join with its reasons and leaves the
  call to you.

An auto-ban needs the **Ban Members** permission and a role above the member.
If altguard spots a confident match but can't act, it says so and asks you to
review manually.

---

## The `/altguard` command {#command}

One command, three modes, turn detection on, off, or check where it stands.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/altguard</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Switch repeat-offender detection on or off, or check its status. When it's on, new members are checked against your server's own banned and kicked members, confident alt matches are auto-banned and posted to your log channel, weaker matches are flagged for you to review. Only an admin or the owner can change it.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>mode</code> <span class="req">required</span></td><td>choice</td><td><code>on</code> = start checking new joins, <code>off</code> = stop, <code>status</code> = show the current state and how many offender fingerprints are on file.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/altguard</span> <span class="arg">mode:</span> on</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed green">
        <div class="dc-title">Altguard on</div>
        <div class="dc-desc">New members are now checked against your server's banned and kicked fingerprints, confident alt matches are auto-banned <strong>and</strong> posted to your log channel, weaker matches are flagged for review.</div>
        <div class="dc-foot">Make sure I have <strong>Ban Members</strong> and a high enough role · check any time with <code>/altguard mode: status</code></div>
      </div>
    </div></div>
  </div>
</div>

### Checking the status

`/altguard mode: status` tells you whether detection is on and how many prior
offenders your server has on file.

<div class="dc">
  <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
    <div class="dc-slash"><span class="cmd">/altguard</span> <span class="arg">mode:</span> status</div>
  </div></div>
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">Repeat-offender detection is ON</div>
      <div class="dc-desc">Tracking <strong>42</strong> prior offender fingerprints from your own bans and kicks.</div>
      <div class="dc-foot">A confident match, a reused custom avatar, or a near-identical name on a fresh account, is auto-banned and staff are alerted; weaker matches are flagged for review only.</div>
    </div>
  </div></div>
</div>

---

## What a match looks like {#notice}

When altguard catches something, it posts to your **log channel** (or staff chat
if none is set). The notice shows the join, the match score, which prior offender
it matches, the signals that fired, and the outcome, **red** for an auto-ban,
**amber** for a flag to review.

### A confident match, auto-banned

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed red">
      <div class="dc-title">Repeat-offender detected</div>
      <div class="dc-fname">Member</div><div class="dc-fval">@ToxicMike2 (<code>987654321098765432</code>)</div>
      <div class="dc-fname">Match score</div><div class="dc-fval">85/100</div>
      <div class="dc-fname">Matches prior offender</div><div class="dc-fval"><code>Toxic_Mike</code> (ban)</div>
      <div class="dc-fname">Signals</div><div class="dc-fval">identical avatar, name match 88%, new account (2d)</div>
      <div class="dc-fname">Outcome</div><div class="dc-fval"><strong>Auto-banned</strong> as a likely ban-evading alt.</div>
      <div class="dc-foot">Repeat-offender detection · toggle with /altguard</div>
    </div>
  </div></div>
</div>

### A weaker match, flagged for review

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed amber">
      <div class="dc-title">Repeat-offender detected</div>
      <div class="dc-fname">Member</div><div class="dc-fval">@mike_returns (<code>112233445566778899</code>)</div>
      <div class="dc-fname">Match score</div><div class="dc-fval">55/100</div>
      <div class="dc-fname">Matches prior offender</div><div class="dc-fval"><code>Toxic_Mike</code> (kick)</div>
      <div class="dc-fname">Signals</div><div class="dc-fval">name similarity 74%, new account (5d)</div>
      <div class="dc-fname">Outcome</div><div class="dc-fval">Flagged as a <strong>suspected</strong> alt, no automatic action taken; please review.</div>
      <div class="dc-foot">Repeat-offender detection · toggle with /altguard</div>
    </div>
  </div></div>
</div>

If you decide a flag is a genuine alt, removing them is a normal
[`/ban`]({{ '/wiki/moderation/#removals' | relative_url }}) or
[`/kick`]({{ '/wiki/moderation/#removals' | relative_url }}) away, and that
removal becomes part of the same local history altguard checks against next time.

---

## Local to your server, and only your server {#local-only}

**Altguard only ever looks at the bans and kicks made on *your own* server.** It
fingerprints the members *you* removed and checks new joiners against *that* list
and nothing else, never a cross-server list, central database or shared threat
network. An alt banned on someone else's server but never on yours is invisible
to altguard.

Two things follow:

- **It builds from the moment you turn it on.** A brand-new server with no ban or
  kick history has nothing to compare against yet; the list grows as you moderate.
- **Soft-bans are excluded.** A [`/softban`]({{ '/wiki/moderation/#removals' | relative_url }})
  is *meant* to let someone rejoin, so soft-banned members are **not** recorded as
  offenders and altguard won't flag them when they come back.

Want protection that *does* span servers? That's the cross-server, opt-in
**[ThreatNet]({{ '/wiki/threatnet/' | relative_url }})**. Altguard is its local
counterpart; the two are independent and you can run either, both, or neither.

---

## See also

- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}), bans, kicks, soft-bans and the rest of the removal toolkit that feeds altguard's local history
- [ThreatNet]({{ '/wiki/threatnet/' | relative_url }}), the cross-server counterpart to altguard's local-only checks
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
