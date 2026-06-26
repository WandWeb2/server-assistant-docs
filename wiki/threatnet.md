---
layout: wiki
title: Server Assistant ThreatNet
permalink: /wiki/threatnet/
wiki: true
wiki_category: Feature guides
summary: The cross-server safety network — how it spots accounts with a serious, corroborated record on other servers, what it shares, the advisory band, Premium auto-protect, and how to opt out.
wiki_keywords: [threatnet, cross-server, threat network, safety, raiders, scammers, ban evasion, auto-protect, autoban, opt out, band]
description: How ThreatNet, Server Assistant's cross-server safety network, works — the advisory band, Premium auto-protect, what's shared, and how members opt out.
---

# 🌐 ThreatNet — cross-server safety

**ThreatNet** is Server Assistant's **cross-server threat network**. Protected
servers contribute **minimized, severity-only** abuse signals, so an account
with a serious, corroborated history of scams, raids or ban-evasion **on other
servers** lights up on yours — ideally *before* they cause harm.

It's the cross-server counterpart to
[alt / ban-evasion detection]({{ '/wiki/altguard/' | relative_url }}): altguard
catches someone **you** banned coming back (your server's own records);
ThreatNet flags someone with a bad record **elsewhere**.

> **What ThreatNet records, the lawful basis, and how to opt out** is covered in
> full on the **[Privacy page]({{ '/privacy/' | relative_url }})**. This page
> describes what the feature does; the Privacy page is the source of truth for
> the data and opt-out model.

## What's shared — and what isn't

Servers contribute **pseudonymous, severity-only** signals: a generic severity
level, how many independent servers corroborate it, and recency. ThreatNet
**never** shares the offence type, your staff's reasons, message content, or
**which server acted**.

When [scam-image defense](#scam-image-defense) flags a picture, the only thing
that crosses the network is an **opaque, one-way fingerprint** of that image — a
short string of numbers it can't be turned back into. The picture itself is
**never** shared, and the fingerprint isn't tied to any user. It's covered by the
same opt-out as the rest of ThreatNet.

<div class="dc" style="margin-top:1rem;">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">👤 Info → Threat Network</span></div>
    <div class="dc-embed amber">
      <div class="dc-title">🛡️ Threat Network — @driftwood</div>
      <div class="dc-desc">🟠 <strong>Elevated</strong> · corroborated across <strong>3 servers</strong> — advisory cross-server safety signal.</div>
      <div class="dc-fname">Most recent</div><div class="dc-fval">serious · 6 days ago</div>
      <div class="dc-foot">Severity-only · never which server acted</div>
    </div>
  </div></div>
</div>

## Advisory by default <span class="cmd-tag free">FREE</span>

For every server, the network signal is **advisory** — it does **not** ban,
kick or sanction anyone on its own. It surfaces a risk band (🟢 low · 🟠 elevated
· 🔴 high) to your human staff on user profiles, and they decide what (if
anything) to do. Bands are tuned conservatively to favour false-negatives over
false-positives, and the read is **explainable** (it shows what drove it). The
advisory band is free for every server; Premium adds the richer cross-server
dossier (how many distinct servers corroborate a signal, and recency).

## Scam-image defense <span class="cmd-tag free">FREE</span> {#scam-image-defense}

A lot of scams don't say a word — they're a **picture**. A throwaway account
joins and posts a screenshot: a fake "withdrawal received" or investment-profit
payout, a "you won the giveaway" notice, a staged testimonial. The whole pitch
lives inside the image, so plain text filters never see it.

ThreatNet now reads those attachments. When an image is posted, the bot takes a
**perceptual fingerprint** of it — a compact signature that still matches even if
the picture is cropped, re-saved or lightly edited — and checks it against a
**cross-server scam-image blocklist** built from confirmed reports. A match means
the same scam image has been caught on other servers already.

**It's on by default for every server, on every plan.** When an image matches a
known scam, the default response is to **remove the image and time the poster
out**. Each server can soften that in settings to suit its community:

- **Remove + time-out** *(default)* — the strongest response for a confirmed match.
- **Quarantine** — pull the image and hold it for staff to review, without
  actioning the poster automatically.
- **Advisory (flag only)** — leave the image up and just flag it to staff so a
  human decides.

<div class="dc" style="margin-top:1rem;">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
    <div class="dc-embed amber">
      <div class="dc-title">🖼️ Scam image removed</div>
      <div class="dc-desc">An image @driftwood posted matched a <strong>known scam image</strong> seen on other servers — it's been removed and the poster timed out.</div>
      <div class="dc-fname">Match</div><div class="dc-fval">Cross-server blocklist · "withdrawal received" payout screenshot</div>
      <div class="dc-foot">Only an opaque fingerprint is shared — never the image, never linked to a user</div>
    </div>
  </div></div>
</div>

### Catching never-seen scams <span class="cmd-tag ai">AI</span>

A blocklist only knows the scams it has already seen. On **AI-enabled plans**, an
image from a **brand-new member** that *isn't* on the blocklist gets an extra
**AI vision check** for the tell-tale signs of a never-seen scam. When the same
new pattern is corroborated across several servers, it **teaches the network** —
so the scam that slips past one server is on the blocklist by the time it reaches
the next.

> **Privacy.** Only an irreversible **perceptual fingerprint** of a flagged image
> ever leaves your server — never the image itself, and it isn't linked to any
> user. The same [opt-out](#opting-out) that covers the rest of ThreatNet applies
> here too; the full data model is on the
> [Privacy page]({{ '/privacy/' | relative_url }}).

## Premium auto-protect — close the gate on join <span class="cmd-tag premium">PREMIUM</span>

Premium servers can turn on **auto-protect**: a user who joins meeting a
**cross-server risk threshold you choose** is **banned automatically on join**.
The default is the **highest band** (serious *and* corroborated across two or
more independent servers — the safest); you can set a broader level, which acts
on weaker signals and carries more risk of a mistake.

Turn it on with **`/threatnet autoban on`** (optionally pass a `level`), or from
**`/settings → Security → ThreatNet`** — both set the same per-server control.
It's **off by default**.

Because it's an **automated** action, it ships with safeguards:

- **Opted-out users are never auto-banned.**
- Every auto-ban is written to your **audit log**, clearly attributed to the
  automated system.
- The ban is **silent** — there is **no DM and no in-server appeal ticket**
  (unlike a [normal ban]({{ '/wiki/ban-appeals/' | relative_url }})). The
  automated decision is disclosed in our Privacy Policy and stays
  **contestable via the web portal** — so it is *not* unappealable; the recourse
  simply runs through the portal rather than your server.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/threatnet status</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Check your own ThreatNet status — whether you're opted out — and get the links to manage it from the web portal. The reply is private to you.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/threatnet status</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🟢 Your ThreatNet status</div>
        <div class="dc-desc">You are <strong>not opted out</strong>. To change this, sign in to the web portal.</div>
        <div class="dc-foot">Full detail and opt-out controls live on the Privacy page &amp; web portal</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/threatnet autoban</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Auto-protect: automatically ban users who join carrying a cross-server safety record at or above a trigger level you choose. Needs Premium and Manage Server. Use <code>status</code> to check the current setting, or <code>off</code> to turn it off. A triggered ban is <strong>silent</strong> — no DM and <strong>no in-server appeal ticket</strong>; the automated decision is disclosed in the <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a> and stays contestable via the web portal.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>action</code> <span class="req">required</span></td><td>choice</td><td><code>on</code>, <code>off</code> or <code>status</code>.</td></tr>
    <tr><td><code>level</code> <span class="opt">optional</span></td><td>choice</td><td>Minimum band that triggers a ban: <code>high</code> (safest — serious + corroborated), <code>elevated</code> (broader), or <code>low</code> (widest; higher false-positive risk). Defaults to <code>high</code>.</td></tr>
  </table>
</div>

## Opting out

ThreatNet is a **core, on-by-default** safety feature for every server.
**Individuals** can opt out of profiling from the
[web portal](https://serverassistant.wandweb.co), subject to a published safety
exception. The full opt-out model, what's recorded, retention and the lawful
basis are set out on the **[Privacy page]({{ '/privacy/' | relative_url }})** —
the authoritative source for all of that.

## See also

- [Alt / ban-evasion detection]({{ '/wiki/altguard/' | relative_url }}) — the local (your-server-only) counterpart
- [Ban appeals]({{ '/wiki/ban-appeals/' | relative_url }}) — and why a ThreatNet auto-ban is the exception
- [Account &amp; premium]({{ '/wiki/account/' | relative_url }}) — managing Premium
- [Privacy]({{ '/privacy/' | relative_url }}) — the data &amp; opt-out model
