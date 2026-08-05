---
layout: wiki
title: Server Assistant Anti-Nuke / Rogue-Admin Guard
permalink: /wiki/anti-nuke/
wiki: true
wiki_category: "Moderation"
summary: The anti-nuke guard watches for catastrophic admin bursts, mass channel/role deletes, mass bans/kicks, permission grabs, and stops a server nuke or a compromised admin account in its tracks. A deep-dive on detection, auto-quarantine with one-tap revert, the exact restore engine, the whitelist, and the two-person rule.
wiki_keywords: [anti-nuke, antinuke, nuke, rogue admin, compromised account, server wipe, mass delete, quarantine, restore, permission grab, security]
description: How Server Assistant's anti-nuke guard detects and stops a server nuke or compromised admin, auto-quarantine with one-tap revert, exact permission restore, the trusted-actor whitelist, and the two-person rule.
---

# Anti-nuke / rogue-admin guard

An admin account goes rogue or gets **compromised**, and in a minute it deletes
your channels, wipes your roles and mass-bans your members. The **anti-nuke
guard** watches for exactly that and acts in seconds.

It runs on the moderation activity Server Assistant already sees, nothing new to
wire up. When **one account** does damage in a tight burst, the guard scores how
likely it's an attack and responds on a ladder: a quiet note, a staff alert, or
**automatically stripping the account's power and putting everything back**.

> **Who it protects, who configures it:** the server **owner is always immune**,
> the guard never acts against you. Configuration is owner / **Manage Server**
> only, under `/settings → Anti-nuke`. It's **on by default**: detection and
> alerts change nothing on their own, and the one action that does,
> auto-quarantine, fires only at high confidence and reverts in one tap.

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> only an admin or the owner can configure it &nbsp;·&nbsp;
<span class="cmd-tag ai">AI</span> incident summaries use AI where it's enabled

---

## What it watches for {#signals}

The guard tracks **dangerous, hard-to-undo actions** and looks for an unusual
**burst from a single actor** in a short window, the actions a nuke is made of:

- **Channel deletions** and **role deletions**: the classic wipe.
- **Mass bans / kicks** and **member prunes**: clearing out your community.
- **Webhook creation floods**: often used to spam a server as it's nuked.
- **Permission grabs**: a role suddenly handed **Administrator**, **Ban**,
  **Manage Server**, **Manage Roles** or **Manage Channels**. A compromised
  account often escalates its own power first; the guard weighs that like a
  deletion.

A few normal admin actions won't trip anything, it takes a genuine **burst**,
several destructive actions faster than a real admin would work.

### Tuned to your community

Sensitivity is **seeded from your server type** (picked during `/setup`): a busy
**gaming** or **general** server gets more headroom; a locked-down or high-stakes
one is stricter. Adjust it under `/settings → Anti-nuke`.

---

## The response ladder {#ladder}

The guard's reaction scales with its confidence that it's seeing an attack:

- **Low confidence → observe.** It quietly records the activity. No action.
- **Medium confidence → step-up alert.** It posts an alert to your staff channel
  describing the burst and asks you to confirm. You can **quarantine the actor**
  or **trust them** right from the alert.
- **High confidence → auto-quarantine.** It acts immediately: **strips the
  offending account of its power** to stop the damage, alerts you and staff, and
  attaches a short plain-language **SAi incident report**. If it got it wrong,
  **one tap puts the account's roles back**.

### What a high-confidence incident looks like

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">just now</span></div>
    <div class="dc-embed red">
      <div class="dc-title">Anti-nuke: actor quarantined</div>
      <div class="dc-fname">Who</div><div class="dc-fval">@compromised-mod (<code>987654321098765432</code>)</div>
      <div class="dc-fname">What</div><div class="dc-fval">7× channel deletions, 4× role deletions, 12× bans</div>
      <div class="dc-fname">Confidence</div><div class="dc-fval">HIGH · 92/100 this is a nuke or compromised account.</div>
      <div class="dc-fname">Action taken</div><div class="dc-fval">Stripped <strong>3</strong> role(s) to stop the damage. If this was legitimate, tap <strong>Undo quarantine</strong> below.</div>
      <div class="dc-fname">SAi incident report</div><div class="dc-fval">A single account deleted multiple channels and roles and banned a dozen members in under 30 seconds, a pattern consistent with a compromised admin or a deliberate nuke. The account has been quarantined. Your most important next step is to confirm whether this person was acting legitimately; if not, restore the server and secure the account.</div>
      <div class="dc-foot">Anti-nuke · local-only · owner is always immune</div>
    </div>
  </div></div>
  <div class="dc-row"><div class="dc-body" style="margin-left:0;">
    <div class="dc-btns">
      <span class="dc-btn green">Undo quarantine (it was safe)</span>
      <span class="dc-btn blurple">Restore server</span>
      <span class="dc-btn grey">Trust this actor (whitelist)</span>
    </div>
  </div></div>
</div>

Every incident is also recorded in your **web portal**'s activity feed, so you
have a record even if you weren't in Discord at the time.

---

## Putting your server back: the restore engine {#restore}

Catching the attack is only half the job, you also need your server *back*. The
guard keeps a regular, automatic **snapshot** of your configuration: every role's
exact permissions and every channel's permission settings.

When you tap **Restore server** on an incident (with a preview and confirm
first), the guard:

- **Re-applies exact permissions.** Every role's permissions and every channel's
  overwrites are set back **precisely** to the snapshot, not a best-guess.
- **Recreates deleted channels.** Channels the attacker deleted are **rebuilt**
  from the snapshot, best-effort, with their settings restored.

Restore is **throttled** to stay within Discord's limits, and you can take a fresh
snapshot any time with **Snapshot now** under `/settings → Anti-nuke`.

> Restore re-applies the *saved* snapshot taken before the attack, so anything
> changed legitimately since then is rolled back too. That's why the guard shows
> the snapshot's timestamp and asks you to confirm first.

---

## Trusted actors: the whitelist {#whitelist}

Some accounts *should* make sweeping changes, a senior admin doing a planned
restructure, or a management bot that creates channels in bulk. Add them to the
**whitelist** and the guard won't score their actions at all.

You can whitelist **users, bots and roles** from `/settings → Anti-nuke` using
the pickers, no IDs to copy. The **owner is always immune** regardless, and you
can clear the whole list in one tap.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/settings → Anti-nuke</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">The anti-nuke control panel: switch the guard on or off, choose whether high-confidence incidents auto-quarantine (or just alert), turn the two-person rule and channel auto-restore on or off, see your community-tuned sensitivity, and manage the trusted-actor whitelist. Take a fresh restore snapshot any time.</p>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/SAllay-64.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">Anti-nuke / rogue-admin guard</div>
        <div class="dc-fname">Guard</div><div class="dc-fval">on</div>
        <div class="dc-fname">Auto-quarantine (high confidence)</div><div class="dc-fval">on, strips powers, one-tap revert</div>
        <div class="dc-fname">Two-person rule</div><div class="dc-fval">revert needs 2 admins</div>
        <div class="dc-fname">Auto-restore deleted channels</div><div class="dc-fval">on</div>
        <div class="dc-fname">Sensitivity</div><div class="dc-fval"><code>gaming</code> preset · e.g. 4 channel-deletes / 30s</div>
        <div class="dc-fname">Trusted (whitelist)</div><div class="dc-fval">2 user(s), 1 role(s), 1 bot(s)</div>
        <div class="dc-foot">Whitelisted actors are never scored. The owner is always immune.</div>
      </div>
    </div></div>
  </div>
</div>

---

## The two-person rule {#two-person}

What if the *compromised* account is the one that tries to switch protection off?
The **two-person rule** closes that door: when it's on, **undoing a quarantine
during a live incident requires two different admins** to confirm, so a single
hijacked account can't revert its own quarantine and carry on. On by default,
toggled under `/settings → Anti-nuke`.

---

## Local to your server {#local-only}

The anti-nuke guard works **entirely within your own server**: it watches *your*
admin activity, keeps *your* snapshot, and acts on *your* server. It does **not**
read from, contribute to, or consult any cross-server list or shared network, and
is deliberately **not** a [ThreatNet]({{ '/wiki/threatnet/' | relative_url }})
signal. An incident on your server stays on your server.

---

## See also

- [Audit log]({{ '/wiki/audit-log/' | relative_url }}), the tamper-evident record the guard builds on, and how to set your log channel
- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}), lockdown, bans and the rest of the response toolkit
- [Settings hub]({{ '/wiki/settings/' | relative_url }}), where the Anti-nuke panel lives
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
