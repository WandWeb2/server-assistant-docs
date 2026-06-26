---
layout: default
title: Server Assistant Changelog
permalink: /changelog/
description: Release history for Server Assistant — v6.x line.
---

# 📋 Server Assistant Changelog — v6.x

The current release line. Earlier releases are archived by version at the foot of the page.

What's new in Server Assistant. Internal-only updates (CI, dependency bumps, host-side tooling) aren't listed here. **Tap a release to expand it.**

<style>
.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: .5rem 0; background: rgba(255,255,255,0.04); }
.doc-sec > summary { cursor: pointer; font-size: 1.02rem; font-weight: 700; padding: .65rem .85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] { padding: 0 .9rem .6rem; }
.doc-sec[open] > summary { margin: 0 -.9rem .35rem; }
.doc-sec code { color: var(--accent); }
.doc-sec h3 { font-size: 1rem; margin: .7rem 0 .3rem; }
.changelog-nav { display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: baseline; margin: 1.6rem 0 0.4rem; padding-top: 0.85rem; border-top: 1px solid var(--glass-border); font-size: 0.8rem; opacity: 0.7; }
.changelog-nav strong { font-size: 0.68rem; font-weight: 600; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.05em; }
.changelog-nav a { color: var(--ink-soft); text-decoration: none; border-bottom: 1px dotted var(--ink-soft); padding-bottom: 1px; transition: color 0.15s, border-color 0.15s; }
.changelog-nav a:hover { color: var(--accent); border-bottom-color: var(--accent); text-decoration: none; }
.changelog-nav a.current { color: var(--ink); border-bottom-style: solid; }
.changelog-nav .latest-tag { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.7; margin-left: 0.25rem; }
/* "Tempered" — named quality release; tempered-glass styling, set apart from numbered cards */
.doc-sec.tempered { background: linear-gradient(135deg, rgba(96,165,250,0.17), rgba(124,155,255,0.07) 55%, rgba(20,25,39,0.45)); border: 1px solid rgba(96,165,250,0.45); box-shadow: inset 0 0 0 1px rgba(158,197,255,0.10), 0 10px 34px rgba(20,40,90,0.40); }
.doc-sec.tempered > summary { color: #cfe0ff; font-size: 1.08rem; }
.doc-sec.tempered > summary::before { color: #60a5fa; }
.doc-sec.tempered .tg-badge { display: inline-block; font-size: .6rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #0a1030; background: linear-gradient(135deg, #bcd6ff, #60a5fa); padding: .1rem .45rem; border-radius: 999px; margin-left: .55rem; vertical-align: middle; }
</style>

<details class="doc-sec" markdown="1" open>
<summary>v6.5.1 — Earn rewards for reviewing Server Assistant</summary>


**Leave us a review, get rewarded.** Run **`/review`** to get your personal code, add it to a review you write on a bot directory, then run `/review` with the link — and you'll earn **500 XP** plus **1 month of Double XP**.

- **Double XP that follows you.** For a month, you earn XP **twice as fast in every server you share with Server Assistant** — then spend it in [Crestbound]({{ '/wiki/crestbound/' | relative_url }}). Earn it again on another directory and the month is **added on**, not wasted.
- **Across the directories** — Top.gg, DiscordForge, Discord Bot List and discord.bots.gg. **One reward per platform.**
- **Verified by your code, not a screenshot.** The bot checks that **your unique code** is present on the **live review page** — so it can't be faked, and only your own review counts. If a site hides reviews from automated checks, your link goes to our team for a quick manual confirmation and you're rewarded by DM.

Thanks for helping more communities find the bot! 💚

</details>

<details class="doc-sec" markdown="1">
<summary>v6.4.0 — ThreatNet cross-server protection is now live</summary>


**ThreatNet is now live.** When a user with a serious, corroborated history of abuse on *other* protected servers joins yours, your staff now see a clear **advisory flag** on them — **free, on every server** — and decide what to do. The flag never bans or sanctions anyone on its own; your team stays in control.

- **Premium servers can go further with ThreatNet auto-protect.** Switch it on and the bot will **automatically ban** a joining user whose account meets a cross-server risk threshold **you choose** — closing the gate before they can act. It's **off by default**; turn it on with **`/threatnet autoban on`**, or in **`/settings → Security → ThreatNet`**. The safest **`high`** threshold (serious *and* corroborated across two or more independent servers) is the default; you can set a broader one, and you choose the level.
- **Privacy-first and severity-only.** Only a minimized, generic **severity** signal is ever shared across servers — **never** the offence type, your staff's reasons, AI summaries, or message content. Individuals can opt out of profiling at any time. Full detail is in our [Privacy Policy]({{ '/privacy/' | relative_url }}).
- **Never acts on opt-outs.** Auto-protect never bans anyone who has opted out of network profiling.

</details>

<details class="doc-sec" markdown="1">
<summary>v6.3.2 — One-tap verification channel setup</summary>


**Setting up verification just got a lot easier.** Verification works by hiding your channels from people who haven't been verified yet and revealing them once they pass — but wiring that up by hand, channel by channel, is tedious.

Now there's a **"Auto-configure channels"** button in **`/settings → Members → Verification`**. It proposes which channels stay public (your verify channel, plus rules / announcements), lets you keep any extras visible with a quick picker, and then — in one tap — hides everything else from unverified members and opens it to your verified role.

- **Nothing is guessed blindly** — you see exactly what will change before you confirm.
- **One-tap Undo** — it snapshots your current setup first, so you can revert instantly if it's not what you wanted.
- You'll need a verified role set and the bot's Manage Channels/Roles permission.

**Also:** the **Notifications** settings menu is flatter — it opens straight to your notification options (with Instant alerts and Pulse inside), instead of an extra step.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.3.1 — Settings, reorganised into four clear sections</summary>


**`/settings` is tidier.** As Server Assistant has grown, the settings list got long — so it's now grouped into four sections:

- **⚙️ Settings** — branding, presets, behavior, role tiers, AI, white-label, snippets, custom commands, FAQ
- **👥 Members** — new-member handling, verification, onboarding, role panels
- **🔔 Notifications** — event pings and the daily Pulse digest
- **🛡️ Security** — AutoMod, anti-nuke, scam-image protection, channel allowlist, privacy, backups

Tools that used to only have their own command — like AutoMod, AI config, onboarding, backups and more — can now also be opened straight from the matching section of `/settings`. Their commands still work exactly as before, and nothing about who can use what has changed.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.3.0 — ThreatNet now stops scam <em>images</em>, not just scam text</summary>


**Sick of seeing scams like this?** An account joins, posts a screenshot of a fake "withdrawal received" or a too-good-to-be-true trading profit, and vanishes — and because the whole pitch is inside a *picture*, ordinary word filters never see it.

ThreatNet now recognises scam **images**. The moment a scam screenshot is flagged anywhere on the network, **every server is protected from it** — Server Assistant spots the same image and removes it automatically, before your members fall for it.

- **It just works — on by default, for everyone, on every plan.** Nothing to set up. Known scam images are removed the moment they're posted, and the person who posted one is timed out.
- **It catches brand-new scams too.** On AI-enabled servers, images dropped by brand-new members are checked for never-seen-before scams — and once spotted, the whole network learns to block them.
- **You're in control.** Prefer to review instead of auto-remove? Switch it to quarantine or flag-only under **`/settings`**.
- **Privacy-first.** Servers only ever share a small, irreversible *fingerprint* of a flagged scam image — never the image itself, and never anything tied to a person. The same opt-out that covers the rest of ThreatNet covers this too.

It's the biggest upgrade to ThreatNet yet — turning every server that flags a scam into protection for all the others.
</details>

<details class="doc-sec" markdown="1">
<summary>📖 New — the Server Assistant Wiki: every feature &amp; command, with live examples</summary>


**There's now a full wiki for Server Assistant** — a complete, browsable reference that shows a live mock-up of exactly what you'll see in Discord for every command, wizard and flow.

- **Main features** — a guided tour of what the bot does, with deep-dive pages for Pulse, ban appeals, the audit log, alt / ban-evasion detection and ThreatNet.
- **Every command** — grouped by area (moderation, AutoMod, AI, tickets, member experience, account &amp; premium), each shown the way it appears in Discord.
- **Step-through wizards** — walk the `/setup` wizard and other multi-step flows one screen at a time.
- **Search** — find any command or feature in seconds.

Open it from **Main Features** in the top menu, or jump straight in at [the wiki]({{ '/wiki/' | relative_url }}). Setup and the full command reference now live there too.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.2.7 — Bring your own Anthropic (Claude) key</summary>


**You can now bring your own Anthropic (Claude) key.** Anthropic has long been listed as a supported bring-your-own-key provider, but the key-entry form only accepted OpenAI and xAI keys — so an `sk-ant-…` key was turned away. That's fixed: in **`/setup`** and **`/ai-config`**, the form now accepts your **Anthropic** key alongside OpenAI and xAI.

Just paste the key — the provider is **auto-detected from it** (`sk-ant-…` → Anthropic, `sk-…` → OpenAI, `xai-…` → xAI), so the provider box stays optional, and you can leave the model blank for a sensible default. As with any BYOK key, your server runs AI on your own account (no trial limit) once you're on **Premium BYOK ($3/month)**.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.2.6 — Setup: bringing your own AI key no longer gets stuck</summary>


**A smoother "use my own key" step in `/setup`.** If you chose **🔑 Enter my own key** and then closed the form, or typed the provider in a way the bot didn't recognise, the wizard could get stuck — every **Finish** said *"you didn't fill the form"* with no obvious way forward, even when you'd pasted a perfectly good key.

Now the bot **auto-detects the provider from your key** (an `sk-…` key is OpenAI, an `xai-…` key is xAI), so the provider box is optional. If you change your mind or close the form, the included **free trial** (150k tokens) stays selected and **Finish** just works. And if you paste a key the bot can't use here, it tells you plainly — the built-in AI already runs on Claude, so no key is needed for the free trial.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.2.5 — Setup: the permission-review buttons respond reliably</summary>


**A smoother permission review during `/setup`.** When the wizard asks you to review permission changes, applying them can take a few seconds — a series of role and channel edits. Previously, on a slow apply, the **Approve & Apply**, **Re-check** and **Generate fresh** buttons could appear to do nothing, leaving you to click again.

Those buttons now acknowledge your click straight away and then apply the changes, so the wizard moves on reliably no matter how long the apply takes.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.2.4 — Setup-first: commands point you to /setup</summary>


**A clearer first run.** If you add Server Assistant and start using commands before running setup, they used to quietly do nothing — which can look like the bot is broken.

Now, in a server that hasn't been set up yet, commands point you to **`/setup`** so it's obvious what to do first. The getting-started and personal commands still work right away — `/setup`, `/help`, `/invite`, `/portal`, `/whatsnew`, `/support`, `/premium`, plus your account ones like `/rank`, `/vote` and `/leaderboard` (your XP follows *you*, not a single server, so those work everywhere). Everything else unlocks the moment setup is complete.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.2.3 — The XP Update: Crestbound, Double-XP & better vote rewards</summary>


**Your members earn XP just by being part of the conversation — and now there's a whole game to spend it on.**

Server Assistant quietly tracks how active your members are: every message earns a little **XP**, members climb through **levels**, and a server **leaderboard** shows who's most involved. It's built in, on by default, and needs nothing to set up — see **[XP &amp; leveling]({{ '/wiki/leveling/' | relative_url }})** for `/rank`, `/leaderboard` and level-up announcements.

🎴 **Crestbound — the headline.** The XP you earn is a currency you can spend in **[Crestbound]({{ '/wiki/crestbound/' | relative_url }})**, the Crest-collecting game in the web portal:

- **Open booster packs** with your XP and collect the Crests of the first Chapter, *Embers of the First War*, across four rarities.
- **Discover brand-new Crests.** The first person to open an undiscovered Crest summons its **artwork** — drawn once and then **shared with every player, forever**, with a line of credit to the discoverer.
- **The grand reveal.** When your batch finishes illuminating, one **✦ Unveil the Crests** moment turns them all over at once — the heralds present your Crests, art and all, seen for the very first time.
- **Burn** spare Crests back into XP, and complete your collection.

⚡ **Double-XP events.** When a server has gone quiet, the bot offers your staff a one-tap **48-hour Double-XP event** — while it runs, **every member earns 2× XP for chatting**. Only a server manager can start one, and the staff chat gets a recap of the total XP earned when it ends.

🗳️ **Better vote rewards.** A vote for Server Assistant on **DiscordForge** now earns **75 XP** — **doubled to 150** if you're in a server that has SA — and you can vote again every **8 hours**. The thank-you and reminder DMs got a refresh, and the Crestbound page shows a **live countdown** to your next vote.

📊 **Weekly recap.** Once a week, if you earned any XP, the bot sends you a friendly DM with your total — split into how much came from **being active** versus **voting**.

**A note on fairness:** XP is tied to *you*, not a single server — chat XP from every server you're in, plus your voting rewards, add up into one account-wide total that you spend in Crestbound.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.1.0 — Smart join verification: hold the risky joins, wave the rest straight through</summary>


**The second feature you voted for in v6.0 is here — verification that only gets in the way of suspicious joins.**

Server Assistant now scores every new member as they join and decides whether they need a quick check. There are three modes:

- **Intelligent (the new default)** — regular members **walk straight in**. Only **risk-scored joins** — brand-new accounts, no profile picture, or accounts carrying cross-server or ban-evasion signals — are held for a quick check. The right balance of safety and zero friction for real members.
- **On** — everyone completes verification before they get access.
- **Off** — no verification.

When someone is held, what happens next depends on how risky they look:

- **Lower-risk → self-serve.** They get a link to a quick **web page**: sign in with Discord, confirm you're a real person, done — access is granted automatically, no staff needed. They're pointed there from a tidy, read-only **#verify** channel.
- **Higher-risk → your call.** Your staff get a one-tap **Approve / Kick / Ban** card with the reasons, so a human decides. You set where that line sits.

A few things worth knowing:

- **It's tuned to be safe by default.** New servers start on Intelligent. Existing servers are only switched on automatically **if you already had a verified-access role set up** — otherwise it stays off until you choose to turn it on. You'll get a one-time heads-up in your staff channel either way.
- **Everything stays on your server** — verification answers and decisions are never shared anywhere.
- Manage it all under **`/settings → Verification`** — the mode, how sensitive it is, and the self-serve cut-off.

**Also in this release:** an **unban now clears the slate** — if you unban someone (or lift a ban directly in Discord), it no longer counts against them in alt-detection or join risk-scoring. An overturned ban shouldn't follow someone around.
</details>

<details class="doc-sec" markdown="1">
<summary>v6.0.0 — Anti-nuke / rogue-admin guard: a smoke alarm for your server</summary>


**One of the three features you voted for in v6.0 is here — protection against a server "nuke" or a compromised admin account.**

Server Assistant now watches for the tell-tale signs of a server nuke: **one account suddenly deleting channels or roles, mass-banning or kicking members, or grabbing dangerous permissions** in a tight burst. When that happens, it works out how likely it is to be an attack and responds straight away:

- **It stops the damage.** At high confidence it **automatically quarantines** the offending account — stripping the roles giving it power — then alerts you and your staff with a short, plain-language summary of what happened. If it was a false alarm, **one tap puts everything back**.
- **You're always safe.** The **server owner is never affected**, and you can add trusted staff, roles or bots to a **whitelist** so their normal admin work is never flagged.
- **Tuned to your community.** Sensitivity is set automatically from your server type (busier servers get more headroom; locked-down servers are stricter), and you can adjust it yourself.
- **Put your server back exactly.** Server Assistant keeps a regular snapshot of your roles' permissions and channel settings, so it can **restore them precisely** — and even **recreate deleted channels** — after an incident.
- **Two-person rule.** Optionally require **two different admins** to undo a quarantine, so a single compromised account can't quietly switch your protection off.

Everything stays **local to your server** — nothing is shared anywhere. It's **on by default** (detection and alerts don't change anything on their own), and you'll get a one-time heads-up in your staff channel before the automatic protection can act. Manage it all under **`/settings → Anti-nuke`**.
</details>

<div class="changelog-nav">
  <strong>Browse by version</strong>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/" class="{% if page.permalink == '/changelog/' %}current{% endif %}">v6.x <span class="latest-tag">latest</span></a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v5/" class="{% if page.permalink == '/changelog/v5/' %}current{% endif %}">v5.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v4/" class="{% if page.permalink == '/changelog/v4/' %}current{% endif %}">v4.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v3/" class="{% if page.permalink == '/changelog/v3/' %}current{% endif %}">v3.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v2/" class="{% if page.permalink == '/changelog/v2/' %}current{% endif %}">v2.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v1/" class="{% if page.permalink == '/changelog/v1/' %}current{% endif %}">v1.x</a>
</div>

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
