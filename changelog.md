---
layout: default
title: Server Assistant Changelog
permalink: /changelog/
description: Release history for Server Assistant, v6.x line.
---

# Server Assistant Changelog: v6.x

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
/* ── Release-type colour coding — Fix / Feature / Update ──────────────────── */
.doc-sec[data-kind] { border-left-width: 3px; border-left-style: solid; }
.doc-sec[data-kind="fix"]     { border-left-color: #e0913a; }  /* amber */
.doc-sec[data-kind="feature"] { border-left-color: #2ea36b; }  /* green */
.doc-sec[data-kind="update"]  { border-left-color: #3b82c4; }  /* blue  */
.doc-sec > summary { position: relative; }
.doc-sec[data-kind] > summary { padding-right: 5.4rem; }
.doc-sec[data-kind] > summary::after {
  position: absolute; right: .7rem; top: .6rem;
  font-size: .58rem; font-weight: 800; letter-spacing: .07em; text-transform: uppercase;
  padding: .14rem .5rem; border-radius: 999px; color: #fff; line-height: 1.5;
}
.doc-sec[data-kind="fix"]     > summary::after { content: "Fix";     background: #c9781a; }
.doc-sec[data-kind="feature"] > summary::after { content: "Feature"; background: #1e8f5e; }
.doc-sec[data-kind="update"]  > summary::after { content: "Update";  background: #2f74b5; }
/* Tempered cards keep their own identity — never overridden by a type accent. */
.doc-sec.tempered[data-kind] { border-left-width: 1px; }
.doc-sec.tempered[data-kind] > summary { padding-right: .85rem; }
.doc-sec.tempered[data-kind] > summary::after { content: none; }
/* Legend */
.cl-legend { display: flex; gap: .7rem; flex-wrap: wrap; align-items: center; margin: .2rem 0 1.1rem; font-size: .74rem; }
.cl-legend .lbl { font-size: .66rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-soft); }
.cl-key { display: inline-flex; align-items: center; gap: .4rem; color: var(--ink-soft); }
.cl-key::before { content: ""; width: .7rem; height: .7rem; border-radius: 3px; }
.cl-key.fix::before     { background: #c9781a; }
.cl-key.feature::before { background: #1e8f5e; }
.cl-key.update::before  { background: #2f74b5; }
/* ── Product tabs — SA Bot / Portal / Crestbound ─────────────────────────── */
.cl-tabs { display: flex; gap: .35rem; flex-wrap: wrap; margin: .2rem 0 1.2rem; border-bottom: 1px solid var(--glass-border); }
.cl-tab { appearance: none; background: transparent; border: 0; border-bottom: 2px solid transparent; color: var(--ink-soft); font: inherit; font-size: .9rem; font-weight: 600; padding: .5rem .85rem; margin-bottom: -1px; cursor: pointer; border-radius: 8px 8px 0 0; transition: color .15s, border-color .15s, background .15s; }
.cl-tab:hover { color: var(--ink); background: rgba(255,255,255,0.04); }
.cl-tab[aria-selected="true"] { color: var(--ink); border-bottom-color: var(--accent); }
.cl-panel[hidden] { display: none; }
.cl-panel > .cl-intro { color: var(--ink-soft); font-size: .92rem; margin: .1rem 0 1rem; }
/* ── "Superseded by vX" pill — a release whose feature was later replaced ──── */
.cl-super { display: inline-block; font-size: .58rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: #cbd2e0; background: rgba(120,132,158,0.26); border: 1px solid rgba(160,172,196,0.34); padding: .1rem .5rem; border-radius: 999px; margin-left: .5rem; vertical-align: middle; text-decoration: none; white-space: nowrap; }
.cl-super:hover { background: rgba(150,162,186,0.42); color: #fff; text-decoration: none; }
/* A superseded card shows the "Superseded by" pill inline instead of the type pill. */
.doc-sec.superseded[data-kind] > summary { padding-right: .85rem; }
.doc-sec.superseded[data-kind] > summary::after { content: none; }
.doc-sec.superseded { opacity: .82; }
</style>

<p class="cl-legend"><span class="lbl">Release type</span>
  <span class="cl-key fix">Fix</span>
  <span class="cl-key feature">Feature</span>
  <span class="cl-key update">Update</span>
</p>

<div class="cl-tabs" role="tablist" aria-label="Changelogs">
  <button class="cl-tab" id="tab-bot" role="tab" aria-controls="cl-bot" aria-selected="true" data-cl="bot">SA Bot</button>
  <button class="cl-tab" id="tab-portal" role="tab" aria-controls="cl-portal" aria-selected="false" data-cl="portal">Portal</button>
  <button class="cl-tab" id="tab-crestbound" role="tab" aria-controls="cl-crestbound" aria-selected="false" data-cl="crestbound">Crestbound</button>
</div>

<div class="cl-panel" id="cl-bot" role="tabpanel" aria-labelledby="tab-bot" markdown="1">

<details class="doc-sec" markdown="1" open data-kind="update">
<summary>v6.16.0: XP, made clear: your Level is a badge, your XP is what you spend</summary>

**One simple idea, spelled out everywhere.** XP used to mean two things at once, which was
confusing. Now it's clean:

- **Your Level** is a badge you earn over time: it only ever goes **up**, and spending never
  lowers it.
- **Your XP** is your **spendable** balance: earn it just by being active, and spend it on Crests
  in **Crestbound**.

What you'll notice:

- **Level-up messages** now tell you what your XP is *for* ("…spend it on Crests in Crestbound").
- **`/rank`** shows your **Level** and progress to the next one, plus a clear **"XP to spend"** line.
- **`/leaderboard`** ranks by **Level**.
- **Crestbound** says **XP** everywhere (no more stray "Coins"), and its sign-in page now tells
  newcomers what it is and that it runs on the XP you already earn in Discord.

Nothing about *earning* changed: you get XP exactly as before; it's just clearer now.

</details>

<details class="doc-sec" markdown="1" data-kind="fix" id="v6.15.0">
<summary>v6.15.0: Fix: turning off level-up messages now actually works</summary>

**A settings fix.** Some servers switched leveling off in the web portal and still saw level-up
messages, because the portal had **two** leveling switches, and the obvious-looking one didn’t do
anything. We’ve fixed it: there’s now a **single, clear “Level-up messages” toggle** that works.

- **If you’d already turned it off**, we’ve carried that across for you: those servers are quiet
  now, no need to touch anything.
- **XP is unaffected**: members still earn XP toward their wallet (and Crestbound); turning the
  toggle off just stops the celebratory messages.

</details>

<details class="doc-sec" markdown="1" data-kind="update" id="v6.14.0">
<summary>v6.14.0: Setup just got simpler: one guided, pre-filled wizard</summary>

**No more choosing between "auto" and "manual".** Setup now does the smart thing by default: the
moment you run **`/setup`**, Server Assistant scans your server and **pre-fills every step**: your
staff chat, log channel, and staff roles are already picked for you. Agree? Tap straight through.
Want to change something? It's right there to adjust.

- **Auto-pilot is folded in.** What used to be a separate `/autopilot` step is now just how setup
  starts: you get its smart detection *and* the ability to tweak anything, in one flow.
- **`/autopilot` still works**: it simply opens the same guided setup now.

Run **`/setup`** and you'll see your server already half-configured.

</details>

<details class="doc-sec" markdown="1" data-kind="update" id="v6.13.0">
<summary>v6.13.0: Reception is now the front door for verification</summary>

**Following up on Reception.** Now that Reception is here, we've made it the recommended way to
verify new members: the `/settings → Verification` panel leads with it, and the old
**mode** setting is reframed as simply *who gets held* at the door (everyone / only risky
arrivals / no one).

- **One clear path.** We retired the old DM-button verification gate: it only ever ran in the
  "no hold" mode and Reception (plus the Intelligent/On modes) does the job better.
- **Nothing breaks.** If your server was relying on that old gate, we've automatically switched
  you to **Intelligent** so you're never left without a gate. Servers that had no verification
  are left exactly as they were.

Tap **Reception** in `/settings → Verification` to set up your welcome desk.

</details>

<details class="doc-sec" markdown="1" data-kind="feature" id="v6.12.0">
<summary>v6.12.0: Meet Reception: a warm front door that keeps bad actors out</summary>

**Verification just got a friendly face.** Turn on **Reception** and new members arrive at a
branded welcome desk instead of a cold gate: a banner, a greeting, and a one-tap **Verify
me** button. Tap it, answer a quick "are you a real person?" question, and the server opens right
up. Get it wrong? No problem: it's a friendly retry, never a ban.

- **Make it yours.** Every server can customize the **greeting**. On **Premium**, you can also
  generate (or upload) a **banner image** and give your receptionist its own **name and
  personality**.
- **A quiet trap for the bad guys.** The only thing to *do* at Reception is tap Verify, so if a
  brand-new account skips that and starts posting spam, it's shown the door automatically. Real
  members never notice; scammers don't get a second message. During a raid, the desk tightens up
  on its own.
- **Always a real check.** The welcome question works even if other systems are busy. Reception
  never just swings the gate open.
- **Ask the receptionist anything (Premium).** Verified members can chat with SAi right at the
  desk for help with the server or a general question.
- **See it working.** Your weekly **Pulse** now includes a Reception summary: who arrived, who
  verified, who got turned away, and how quickly people get in.
- **A safer internet, shown at the door.** The banner carries a live **Protected by
  ThreatNet** badge: the network's running tally of bad actors and scam images stopped across
  every protected server.

Find it under **`/settings → Verification → Reception`**. It's off until you switch it on.

</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.11.1: Your personal settings now live under Settings → Personalization</summary>

**A tidier home for the settings that are just *yours*.** The web portal's **Settings** tab now opens with a new **Personalization** section at the top (your own preferences, separate from the server-wide settings below it):

- **Call me by DM**: whether SAi nudges *you* when something sits unactioned (~1h).
- **Pulse in my DMs**: your personal Pulse cadence (Off / Weekly / Monthly).
- **Notifications on this device**: turn on push notifications for the browser you're using.

These used to live in the SAi chat panel; they're easier to find in Settings now. And the Insights → Pulse card has a quick link straight to it. (We also removed the "Send me a sample" button: that was only ever a testing tool.)

</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.11.0: One digest to rule them all: Weekly digest folds into Pulse</summary>

**Cleaning up the last bit of overlap.** The old **Weekly digest**, a weekly activity summary the bot posted to your log channel, did the same job Pulse now does (and better: Pulse covers server activity *and* your mod-team recap, lives always-current in your portal, and can DM each staffer on their own schedule). So we've retired the standalone Weekly digest and its `/settings → Behaviour` toggles. Nothing to do: it's all in Pulse now. Your **Digests & health** settings are simpler for it.

</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.10.1: Tidied-up Pulse settings</summary>

**A small follow-up to the Pulse update.** Now that Pulse lives in your web portal (always up to date) and can be DM'd to each staff member on their own schedule, the old **Pulse settings** in Discord `/settings → Notifications`, the "how often to post to a channel" menu and the channel/hour panel, no longer did anything, so we've cleared them away. Nothing you need to do; your Pulse is right where it should be. Set your personal Pulse DM cadence anytime from the SAi panel in the portal.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.10.0: Get your Pulse in your DMs, on your schedule</summary>

**Want your server's Pulse sent straight to you? Now each staff member can opt in, on their own schedule.** In the web portal's SAi panel there's a new **"Pulse in my DMs"** option: choose **weekly** or **monthly** and SAi will DM you the Pulse (server activity **and** your mod‑team recap) at that cadence: just for you, no setup for anyone else.

- **It's per‑person.** Your cadence is yours; a teammate can pick a different one, or none at all. Off by default.
- **The channel post is retired.** Pulse now lives where it's most useful (always live in your portal, and in your DMs if you want it) instead of posting to a server channel.
- **SAi sounds like a person now.** SAi's DMs, the "something needs the team" nudges and your Pulse, are warmer and address you by name, less like a robot ticking a box.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.9.0: Pulse now includes your mod‑team recap</summary>

**Your Daily Pulse and the Weekly mod recap are now one thing: Pulse.** One clean digest that covers both how your *server* is doing and how your *team* is doing: server activity (messages, joins/leaves, AutoMod blocks, warnings, early‑warning flags) **plus** your mod‑team recap (cases handled and the week's trend, a breakdown by action, who's been most active) and a new **itemised list of recent moderation actions** so you can see exactly what happened at a glance.

- **Always in your portal, for every server.** Your Pulse now shows live in the web portal for every server, on any plan, no setup required. Open Insights and it's there, current.
- **Choose how often you're posted to Discord.** The Pulse posted to your server channel is now **weekly or monthly** (whichever you prefer), set in `/settings → Notifications`.
- **The weekly recap is folded in.** No more separate recap: it rides along with Pulse. `/retro` still gives you an on‑demand team view any time.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.8.1: See a sample of SAi's notifications</summary>

**Curious what SAi's DMs look like before one ever fires? Now you can see for yourself.** The SAi panel in the web portal has a new **"Send me a sample"** button: tap it and SAi sends a few example notifications straight to your Discord DMs: the "a decision needs staff" call-up, a Daily Pulse briefing, and an all-clear. Each one is clearly marked as a sample, and it only ever DMs you (if your Discord DMs are closed, the button lets you know). A no-pressure way to see how SAi keeps you in the loop.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.8.0: SAi is your notification hub, with DM call-ups</summary>

**SAi now gathers everything that needs you in one place, and makes sure nothing slips.**

- **One badge for everything that needs you.** In the web portal, the SAi chat bubble shows a red badge with the number of things waiting on you. Open SAi and it greets you and lays them out: approvals a moderator has asked for, ban appeals, AutoMod reviews, raid responses, each with one-tap **Approve / Deny** buttons.
- **Act by chat, too.** Instead of tapping buttons you can just tell SAi in plain English (*"approve both appeals"*, *"deny the purge"*) and it handles them (and updates Discord as well).
- **No more two people doing the same job.** When a staff member starts handling something, everyone else sees it's **being handled by them**, with a **Take over** option. Whoever acts first wins, and the others are told who did it.
- **SAi will call you if something's ignored.** If a decision sits with no one acting for about an hour, SAi starts sending **Discord DMs**, one staff member at a time, ten minutes apart, beginning with whoever's most likely to be around (starting with your moderators, online first) and working up to you, so the whole team isn't pinged at once. Every staff member can turn these DM call-ups off for themselves in the portal (they're on by default).
- **SAi wears your bot's face**: its picture in the portal is now your Server Assistant bot's own Discord avatar.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.7.33: Co-owners can manage staff permissions</summary>

**Co-owners can now manage staff permissions, just like you.** If you've granted someone a co-owner role (full owner-level power), they can now open the "Staff permissions" editor, in Discord and the web portal, to edit, add, and remove staff tiers, and grant or remove co-owners, exactly as the server owner can. Admins and moderators still can't (only owners and co-owners shape the permission structure).
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.7.32: Add or remove staff tiers from the web portal</summary>

**The web portal's "Staff permissions" editor now does everything the Discord one does**, including **adding** a new staff tier (pick a Discord role) and **removing** one, not just editing existing tiers. Owner-only, as before. (This needed the bot to send your server's role list to the portal, so it activates on your next update.)
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.7.31: Fine-tune staff permissions, action by action</summary>

**Owners can now fine-tune exactly what each staff tier can do.** Previously you assigned a role a whole template (Admin / Moderator); now, in **`/settings → Role Tiers → Fine-tune`**, the server owner can grant or revoke **individual** actions (e.g. give Moderators `unban`, or take `ban` off a role), set a tier's level, and toggle whether it can approve dangerous actions. Owner-only, so no one can widen their own access. **The same controls are also in the web portal**: server owners get a "Staff permissions" editor under Settings.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.30: Admins can /purge without owner approval</summary>

**Admins can now run `/purge` directly.** `/purge` was the one moderation command that asked the owner to approve it, even when an admin ran it. Now admins (and the owner) purge directly; every other action already ran immediately for whoever's role allows it.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.29: Ban appeals & tickets: reliability under heavy activity</summary>

**Ban appeals and tickets are now safe when several things happen at once.** Two fixes for busy servers: a ban appeal can no longer lose a reply (or step on another member's appeal) when replies and staff actions arrive together, and two members opening a ticket at the same instant now always get separate ticket numbers instead of colliding. Nothing to configure: it just holds up better under load.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.28: Scam-image "Quarantine" & verification threshold fixes</summary>

**Scam-image "Quarantine" now really skips the timeout.** If you set the scam-image defense to **Quarantine** (remove the image, no timeout; staff review the log), it was still timing the poster out for an hour on a confirmed match, the same as "Delete + timeout." Quarantine now removes the image without the timeout, exactly as described.

**Verification: a hold threshold of `0` now holds every join.** In intelligent mode, setting the hold threshold to `0` (review every join) was being treated as the default instead, so lower-risk joins came straight in. Setting `0` now does what it says, and the same fix applies to the self-serve risk ceiling.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.27: Notices link to the web portal</summary>

**Update and maintenance notices now link to the web portal.** When Server Assistant posts a Dev Update or Service Notice in your staff chat, its header is now a clickable link to the web portal, so you can jump straight from a notice to managing your server on the web.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.26: /stats shows live Online & In-voice counts</summary>

**`/stats` now shows how many members are online and in voice, live.** Run `/stats` and you'll see an Online and In voice count alongside the usual server totals, read at the moment you run it, so they're always current. The web portal's "Online now" and "In voice" cards now refresh about every 5 minutes (up from hourly). Note these are a periodic snapshot, not live to the second, so for an exact live count use `/stats` in Discord.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.25: Fix /setup on servers with lots of channels</summary>

**`/setup` works again on larger servers.** On a server with 25 or more channels, running `/setup` failed with a generic error because the log-channel dropdown ran past Discord's 25-option limit per menu. That's fixed. Nothing for you to do.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.24: Mediation reliability fix</summary>

**Mediations hold up when both people reply at once.** If two members in a `/mediate` session responded at nearly the same moment, one side's reply could previously be lost and the staff summary might not post. Both accounts are now always captured and the summary is generated exactly once. Nothing for you to do.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.23: More "it now actually works" fixes</summary>

**A sweep of fixes so configured features reliably take effect.** Blocked links are now caught even when posted without `https://`; setting up AutoMod through the panel reliably switches it on (even after a previous disable); the `onboarding` / `welcome` command's **set**, **test** and status views work again; snippets named things like "playlist" post correctly instead of showing the list; turning **Pulse** off in the Privacy panel now actually stops the digest; and the Verification panel shows the right status on new servers. Nothing for you to do.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.22: AutoMod & ticket reliability fixes</summary>

**A handful of fixes so configured features always take effect.** Setting up AutoMod through the `/automod` panel now reliably turns it on; adding a filter or blocked link whose text happens to contain words like "off" or "on" no longer misfires; borderline AI-review flags are no longer dropped on servers without a log channel; and a custom ticket **close message** now reaches the person who opened the ticket. Nothing for you to do.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.21: AutoMod custom filters now apply reliably</summary>

**Your custom AutoMod filters now always take effect.** Custom word filters and blocked links you add are now reliably enforced, including any you'd added before. If you'd set up a custom filter that didn't seem to be catching messages, it'll start working automatically. Nothing for you to do.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.7.20: /roll, group loot rolls, WoW-style</summary>

**Settle it with a roll.** The new **`/roll`** command starts a timed group roll, great for giveaways, prizes, or deciding who gets the drop. Everyone taps **Need**, **Greed** or **Pass**, and each person gets a hidden 1-100 roll. When the timer's up, **Need beats Greed** and the highest roll in the winning tier wins (ties are re-rolled), with the results revealed in a little dice-roll flourish. Add an item name and timer if you like: **`/roll [item] [seconds]`** (10-300s, default 60). Anyone can start one; one roll runs per channel at a time.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.19: Manage your log channel in /settings</summary>

**Change or remove your log channel any time.** Open **/settings → Behavior → Log channel** to pick a channel to mirror your moderation actions to, or choose **Portal only** to turn the Discord channel off; your dashboard moderation log stays on either way. Setup also walks all the way through now: we removed the Step-1 “finish now” shortcut, so every server that starts `/setup` completes the quick 3-step wizard and ends up correctly configured.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.18: Your Discord log channel is now optional</summary>

**Skip the Discord log channel if you like.** Setting a Discord mod-log channel is now optional: in `/setup`, pick **Portal only** and carry on. Your permanent moderation log in the web dashboard is always on regardless, so you still have a complete, tamper-proof record of every action. Already have a log channel and want to drop it? Re-run `/setup`: it loads your current setup, so you can switch to **Portal only** in a couple of taps.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.17: Scam-image removals now appear in your dashboard log</summary>

**A permanent record for every scam-image action.** Scam-image removals and timeouts are now saved to your moderation log in the web dashboard, alongside all your other moderation actions: a tamper-proof record that can't be edited or deleted, even by admins. This works even if you haven't set up a Discord log channel (or if a channel entry gets deleted), so a removal is never left without a record. Only the action is recorded: who acted, what they did, when, and the reason; **never** the message content or the image itself.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.13: Scam-image alerts now always reach your staff</summary>

**You'll always see a record when a scam image is removed.** If your server hasn't set a mod-log channel, ThreatNet scam-image actions used to be applied without a visible record. Now, when there's no log channel set, the alert is posted to your **staff chat** instead (with a reminder to set a log channel), so a removal never happens silently. Servers that already have a log channel are unaffected.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.12: Scam-image protection now catches more scammers</summary>

**Scam screenshots get caught even from older accounts.** Server Assistant already fingerprints scam images and blocks them across servers. Now the AI check for brand-new scam images also looks at posts from **members who just joined your server**, not only those on brand-new Discord accounts. Scammers often join on an older account and post their fake "withdrawal received" or crypto-giveaway screenshot straight away, and this closes that gap. Known scam images are still blocked instantly for everyone, and ordinary members posting normal images are unaffected. It's on by default wherever scam-image protection is enabled.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.11: Raid, AutoMod-review & Double-XP buttons keep working too</summary>

**More alert buttons that don't go stale.** Following the anti-nuke fix, the buttons on three more alerts now keep working even if the bot updates or restarts after the alert was posted, so you're never left tapping a dead button on something time-sensitive:

- **Raid alerts**: **Lock down** and **Dismiss**.
- **The Double-XP offer**: **Start the event** and **Not now** (this one can sit for days, so it was the most likely to go stale).
- **AutoMod "needs review" cards**: **Delete & warn** and **Allow**.

As before, tapping one of these on an older message just works now instead of showing "This interaction failed."
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.10: Anti-nuke buttons keep working after an update</summary>

**Your security controls don't go stale.** The buttons on an anti-nuke alert, **Quarantine**, **Undo quarantine**, **Restore server**, **Trust this actor**, now keep working even if the bot updates or restarts after the alert was posted. Previously, tapping one later could show "This interaction failed"; now it just works, so you're never left unable to act during an incident. (The two-person confirmation for undoing a quarantine survives a restart too.)
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.7.9: Expired buttons now say so</summary>

**No more silent "This interaction failed."** If you tap a button on an older message, for example a security alert, after the bot has updated, those buttons are no longer connected. Instead of failing silently, the bot now tells you the button has expired and how to get fresh controls (re-run the command, or act from the web portal, where your controls stay live).
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.5: Every way to set up now lands in the same place</summary>

**However you set up, you get the same result.** The `/setup` wizard, the one-tap **`/autopilot`**, and the **web portal** now all finish identically: your channels and roles configured, a moderation profile matched to your community, and the free AI trial on.

- **`/autopilot` is fixed.** It now fully completes setup and switches your commands on, instead of leaving the server half-configured.
- **If you set up earlier and the bot still acted "not set up,"** that's now corrected automatically: no need to run setup again.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.7.4: Setup in one tap</summary>

**Setup is now as fast as a single tap.** The first screen of `/setup` has a new **Looks good, finish now** button: the bot fills in your channels, a sensible moderation profile for your community type, and your AI: you just confirm. No need to walk every screen unless you want to fine-tune.

- **No AI key to enter.** Your **free 150,000-token AI trial is just on**: there's nothing to set up. Want to run on your own AI key with no trial limit instead? Run **`/ai-config`** any time.
- **Still fully customisable.** Prefer to pick everything yourself? The step-by-step wizard is still there: the one-tap button just skips to the end with smart defaults.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.7.2: Finishing setup just got easier</summary>

**A one-tap way back into setup.** If someone tries a command before your server is set up, the bot now shows a **Run setup** button right there: one tap opens the setup wizard, so you never have to remember the `/setup` command. The button keeps working even if the original welcome message has scrolled away or the bot has restarted since you added it.

- **A quicker nudge if you get stuck.** If setup is left unfinished, the friendly reminder to wrap it up now arrives sooner rather than a day later: it only takes about a minute to finish.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.7.0: Hanging out in voice now earns XP</summary>

**Time spent together in voice chat now counts toward your level.** While you're actively in a voice channel, you earn XP for it, feeding the same balance as chatting. The busier the channel, the more it's worth: a lively call with several people pays more per minute than a quiet two-person chat.

- **It rewards being *present*, not just connected.** You earn while you're actually in the conversation: sitting muted to listen on a movie or study night still counts. You **won't** earn while you're parked in the server's AFK channel, deafened, or alone in a channel, so nobody can farm levels by idling overnight.
- **Double-XP events apply here too.** If your server's running a Double-XP event (or you've got a personal Double-XP buff from leaving a review), your voice time earns at 2× as well.
- **Free for everyone.** Like chat XP, voice XP is on for all servers, no Premium needed.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.6.3: <code>/meme</code> now captions the moment</summary>

**`/meme` now reads like an emote.** Instead of just echoing your search, the bot adds a caption describing what the meme says about you: `/meme this is fine` → **"@User has decided everything is fine"**, `/meme drake` → **"@User has notes"**, `/meme woman yelling at cat` → **"@User is losing an argument to a cat"**.

- **Smart, in-context captions**: on AI-enabled servers (your **AI allowance, free trial included**, not Premium-only) the caption is written to fit the meme *and* the conversation, accurate and a little funny. It's governed by the same **AI theme-pick** toggle as emotes in `/settings → Emotes`.
- **Always works**: when AI isn't available it falls back to a built-in library of well-known memes for a witty caption, and an unrecognised meme just posts the image. No dead ends.

GIFs &amp; memes by KLIPY.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.6.2: New <code>/meme</code> command</summary>

**Drop the perfect meme into chat.** New **`/meme <search>`** posts a meme image matching your search: `/meme distracted boyfriend`, `/meme this is fine`, `/meme success kid`. Memes come from **KLIPY**.

- **Shares your emote controls.** The same `/settings → Emotes` panel governs memes: channel allowlist, per-minute rate limit, and NSFW safe-search all apply, plus a new **Memes** on/off toggle (on by default).

GIFs &amp; memes by KLIPY.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.6.1: Emotes that show the action, with natural captions</summary>

**Emotes now show what you're actually doing.** `/laugh` posts a *laughing* GIF, `/cry` a *crying* one: the search leads with the action and prefers clips whose title or tags match it, so you get a relevant reaction instead of a generic theme image. Add a theme on top (`/cry anime`) and it still applies; if nothing in that theme fits the action, you get a plain matching GIF and a small note saying so.

- **Captions read like a sentence.** Posts now say **`@User is crying`**, **`@User hugs @Target`**, or **`@User waves at @Target`**, instead of just the emote's name.

GIFs by KLIPY.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.6.0: Emote commands: post the perfect reaction GIF</summary>

**React with a GIF in one tap.** New **`/emote`** (and the shortcut **`/e`**), plus **`/cry`**, **`/hug`** and **`/dance`**, drop a fitting GIF straight into chat, with autocomplete over hundreds of emotes (cry, dance, laugh, facepalm, wave… and aliases like `lol`, `ty`, `congrats`).

- **Smart by default.** Just run `/cry` and the bot picks a theme that fits your server and the moment, then grabs a **random** matching GIF, so it's fresh each time. Prefer your own flavour? Add it: `/cry anime`, `/cry wow`, `/cry naruto`.
- **Make it yours.** `/emotestyle anime` sets your personal default theme so your emotes lean your way across every server; `/hug @member` aims a reaction at someone.
- **Powered by your AI allowance, free trial included.** The auto-theme uses your server's AI (the free 150K trial counts); once that's used up it simply falls back to a plain random GIF, so the commands always work. It's **not** Premium-only.
- **Server controls in `/settings → Emotes`.** Turn emotes on/off, limit them to certain channels, set a per-minute rate limit, allow spicier GIFs only in NSFW channels, and toggle an off-by-default "flavor pack." Safe-search is on by default.

GIFs by KLIPY.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.5.3: Reward messages now show your spendable XP</summary>

**The "you now have **X** XP" line in vote and review thank-you messages now matches Crestbound.** Your wallet has two numbers: the **lifetime XP** that ranks you on the leaderboard (it only ever goes up), and your **spendable XP**: the balance you spend on Booster Packs in [Crestbound]({{ '/wiki/crestbound/' | relative_url }}), which drops each time you open a pack. Both go up together when you earn, so they match until you spend.

Those reward messages were showing the lifetime number, so after you'd opened a pack it could read higher than the balance Crestbound actually shows. Since the message is telling you to go spend it, it now quotes your **spendable** balance: the same figure you see in Crestbound. Nothing changed about how much you earn or can spend; only the number in the message.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.5.1: Earn rewards for reviewing Server Assistant</summary>


**Leave us a review, get rewarded.** Run **`/review`** to get your personal code, add it to a review you write on a bot directory, then run `/review` with the link, and you'll earn **500 XP** plus **1 month of Double XP**.

- **Double XP that follows you.** For a month, you earn XP **twice as fast in every server you share with Server Assistant**, then spend it in [Crestbound]({{ '/wiki/crestbound/' | relative_url }}). Earn it again on another directory and the month is **added on**, not wasted.
- **Across the directories**: Top.gg, DiscordForge, Discord Bot List and discord.bots.gg. **One reward per platform.**
- **Verified by your code, not a screenshot.** The bot checks that **your unique code** is present on the **live review page**, so it can't be faked, and only your own review counts. If a site hides reviews from automated checks, your link goes to our team for a quick manual confirmation and you're rewarded by DM.

Thanks for helping more communities find the bot!

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.4.0: ThreatNet cross-server protection is now live</summary>


**ThreatNet is now live.** When a user with a serious, corroborated history of abuse on *other* protected servers joins yours, your staff now see a clear **advisory flag** on them (**free, on every server**) and decide what to do. The flag never bans or sanctions anyone on its own; your team stays in control.

- **Premium servers can go further with ThreatNet auto-protect.** Switch it on and the bot will **automatically ban** a joining user whose account meets a cross-server risk threshold **you choose**, closing the gate before they can act. It's **off by default**; turn it on with **`/threatnet autoban on`**, or in **`/settings → Security → ThreatNet`**. The safest **`high`** threshold (serious *and* corroborated across two or more independent servers) is the default; you can set a broader one, and you choose the level.
- **Privacy-first and severity-only.** Only a minimized, generic **severity** signal is ever shared across servers: **never** the offence type, your staff's reasons, AI summaries, or message content. Individuals can opt out of profiling at any time. Full detail is in our [Privacy Policy]({{ '/privacy/' | relative_url }}).
- **Never acts on opt-outs.** Auto-protect never bans anyone who has opted out of network profiling.

</details>

<details class="doc-sec superseded" markdown="1" data-kind="feature">
<summary>v6.3.2: One-tap verification channel setup<a class="cl-super" href="{{ '/changelog/' | relative_url }}#v6.13.0">Superseded by v6.13.0</a></summary>


**Setting up verification just got a lot easier.** Verification works by hiding your channels from people who haven't been verified yet and revealing them once they pass, but wiring that up by hand, channel by channel, is tedious.

Now there's a **"Auto-configure channels"** button in **`/settings → Members → Verification`**. It proposes which channels stay public (your verify channel, plus rules / announcements), lets you keep any extras visible with a quick picker, and then, in one tap, hides everything else from unverified members and opens it to your verified role.

- **Nothing is guessed blindly**: you see exactly what will change before you confirm.
- **One-tap Undo**: it snapshots your current setup first, so you can revert instantly if it's not what you wanted.
- You'll need a verified role set and the bot's Manage Channels/Roles permission.

**Also:** the **Notifications** settings menu is flatter: it opens straight to your notification options (with Instant alerts and Pulse inside), instead of an extra step.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.3.1: Settings, reorganised into four clear sections</summary>


**`/settings` is tidier.** As Server Assistant has grown, the settings list got long, so it's now grouped into four sections:

- **Settings**: branding, presets, behavior, role tiers, AI, white-label, snippets, custom commands, FAQ
- **Members**: new-member handling, verification, onboarding, role panels
- **Notifications**: event pings and the daily Pulse digest
- **Security**: AutoMod, anti-nuke, scam-image protection, channel allowlist, privacy, backups

Tools that used to only have their own command, like AutoMod, AI config, onboarding, backups and more, can now also be opened straight from the matching section of `/settings`. Their commands still work exactly as before, and nothing about who can use what has changed.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.3.0: ThreatNet now stops scam <em>images</em>, not just scam text</summary>


**Sick of seeing scams like this?** An account joins, posts a screenshot of a fake "withdrawal received" or a too-good-to-be-true trading profit, and vanishes, and because the whole pitch is inside a *picture*, ordinary word filters never see it.

ThreatNet now recognises scam **images**. The moment a scam screenshot is flagged anywhere on the network, **every server is protected from it**: Server Assistant spots the same image and removes it automatically, before your members fall for it.

- **It just works, on by default, for everyone, on every plan.** Nothing to set up. Known scam images are removed the moment they're posted, and the person who posted one is timed out.
- **It catches brand-new scams too.** On AI-enabled servers, images dropped by brand-new members are checked for never-seen-before scams, and once spotted, the whole network learns to block them.
- **You're in control.** Prefer to review instead of auto-remove? Switch it to quarantine or flag-only under **`/settings`**.
- **Privacy-first.** Servers only ever share a small, irreversible *fingerprint* of a flagged scam image: never the image itself, and never anything tied to a person. The same opt-out that covers the rest of ThreatNet covers this too.

It's the biggest upgrade to ThreatNet yet: turning every server that flags a scam into protection for all the others.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>New, the Server Assistant Wiki: every feature &amp; command, with live examples</summary>


**There's now a full wiki for Server Assistant**: a complete, browsable reference that shows a live mock-up of exactly what you'll see in Discord for every command, wizard and flow.

- **Main features**: a guided tour of what the bot does, with deep-dive pages for Pulse, ban appeals, the audit log, alt / ban-evasion detection and ThreatNet.
- **Every command**: grouped by area (moderation, AutoMod, AI, tickets, member experience, account &amp; premium), each shown the way it appears in Discord.
- **Step-through wizards**: walk the `/setup` wizard and other multi-step flows one screen at a time.
- **Search**: find any command or feature in seconds.

Open it from **Main Features** in the top menu, or jump straight in at [the wiki]({{ '/wiki/' | relative_url }}). Setup and the full command reference now live there too.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.2.7: Bring your own Anthropic (Claude) key</summary>


**You can now bring your own Anthropic (Claude) key.** Anthropic has long been listed as a supported bring-your-own-key provider, but the key-entry form only accepted OpenAI and xAI keys, so an `sk-ant-…` key was turned away. That's fixed: in **`/setup`** and **`/ai-config`**, the form now accepts your **Anthropic** key alongside OpenAI and xAI.

Just paste the key: the provider is **auto-detected from it** (`sk-ant-…` → Anthropic, `sk-…` → OpenAI, `xai-…` → xAI), so the provider box stays optional, and you can leave the model blank for a sensible default. As with any BYOK key, your server runs AI on your own account (no trial limit) once you're on **Premium BYOK ($3/month)**.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.2.6: Setup: bringing your own AI key no longer gets stuck</summary>


**A smoother "use my own key" step in `/setup`.** If you chose **Enter my own key** and then closed the form, or typed the provider in a way the bot didn't recognise, the wizard could get stuck: every **Finish** said *"you didn't fill the form"* with no obvious way forward, even when you'd pasted a perfectly good key.

Now the bot **auto-detects the provider from your key** (an `sk-…` key is OpenAI, an `xai-…` key is xAI), so the provider box is optional. If you change your mind or close the form, the included **free trial** (150k tokens) stays selected and **Finish** just works. And if you paste a key the bot can't use here, it tells you plainly: the built-in AI already runs on Claude, so no key is needed for the free trial.
</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.2.5: Setup: the permission-review buttons respond reliably</summary>


**A smoother permission review during `/setup`.** When the wizard asks you to review permission changes, applying them can take a few seconds: a series of role and channel edits. Previously, on a slow apply, the **Approve & Apply**, **Re-check** and **Generate fresh** buttons could appear to do nothing, leaving you to click again.

Those buttons now acknowledge your click straight away and then apply the changes, so the wizard moves on reliably no matter how long the apply takes.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.2.4: Setup-first: commands point you to /setup</summary>


**A clearer first run.** If you add Server Assistant and start using commands before running setup, they used to quietly do nothing, which can look like the bot is broken.

Now, in a server that hasn't been set up yet, commands point you to **`/setup`** so it's obvious what to do first. The getting-started and personal commands still work right away: `/setup`, `/help`, `/invite`, `/portal`, `/whatsnew`, `/support`, `/premium`, plus your account ones like `/rank`, `/vote` and `/leaderboard` (your XP follows *you*, not a single server, so those work everywhere). Everything else unlocks the moment setup is complete.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.2.3: The XP Update: Crestbound, Double-XP & better vote rewards</summary>


**Your members earn XP just by being part of the conversation, and now there's a whole game to spend it on.**

Server Assistant quietly tracks how active your members are: every message earns a little **XP**, members climb through **levels**, and a server **leaderboard** shows who's most involved. It's built in, on by default, and needs nothing to set up: see **[XP &amp; leveling]({{ '/wiki/leveling/' | relative_url }})** for `/rank`, `/leaderboard` and level-up announcements.

**Crestbound: the headline.** The XP you earn is a currency you can spend in **[Crestbound]({{ '/wiki/crestbound/' | relative_url }})**, the Crest-collecting game in the web portal:

- **Open booster packs** with your XP and collect the Crests of the first Chapter, *Embers of the First War*, across four rarities.
- **Discover brand-new Crests.** The first person to open an undiscovered Crest summons its **artwork**: drawn once and then **shared with every player, forever**, with a line of credit to the discoverer.
- **The grand reveal.** When your batch finishes illuminating, one **Unveil the Crests** moment turns them all over at once: the heralds present your Crests, art and all, seen for the very first time.
- **Burn** spare Crests back into XP, and complete your collection.

**Double-XP events.** When a server has gone quiet, the bot offers your staff a one-tap **48-hour Double-XP event**: while it runs, **every member earns 2× XP for chatting**. Only a server manager can start one, and the staff chat gets a recap of the total XP earned when it ends.

**Better vote rewards.** A vote for Server Assistant on **DiscordForge** now earns **75 XP** (**doubled to 150** if you're in a server that has SA) and you can vote again every **8 hours**. The thank-you and reminder DMs got a refresh, and the Crestbound page shows a **live countdown** to your next vote.

**Weekly recap.** Once a week, if you earned any XP, the bot sends you a friendly DM with your total: split into how much came from **being active** versus **voting**.

**A note on fairness:** XP is tied to *you*, not a single server: chat XP from every server you're in, plus your voting rewards, add up into one account-wide total that you spend in Crestbound.
</details>

<details class="doc-sec superseded" markdown="1" data-kind="feature">
<summary>v6.1.0: Smart join verification: hold the risky joins, wave the rest straight through<a class="cl-super" href="{{ '/changelog/' | relative_url }}#v6.13.0">Superseded by v6.13.0</a></summary>


**The second feature you voted for in v6.0 is here: verification that only gets in the way of suspicious joins.**

Server Assistant now scores every new member as they join and decides whether they need a quick check. There are three modes:

- **Intelligent (the new default)**: regular members **walk straight in**. Only **risk-scored joins** (brand-new accounts, no profile picture, or accounts carrying cross-server or ban-evasion signals) are held for a quick check. The right balance of safety and zero friction for real members.
- **On**: everyone completes verification before they get access.
- **Off**: no verification.

When someone is held, what happens next depends on how risky they look:

- **Lower-risk → self-serve.** They get a link to a quick **web page**: sign in with Discord, confirm you're a real person, done: access is granted automatically, no staff needed. They're pointed there from a tidy, read-only **#verify** channel.
- **Higher-risk → your call.** Your staff get a one-tap **Approve / Kick / Ban** card with the reasons, so a human decides. You set where that line sits.

A few things worth knowing:

- **It's tuned to be safe by default.** New servers start on Intelligent. Existing servers are only switched on automatically **if you already had a verified-access role set up**: otherwise it stays off until you choose to turn it on. You'll get a one-time heads-up in your staff channel either way.
- **Everything stays on your server**: verification answers and decisions are never shared anywhere.
- Manage it all under **`/settings → Verification`**: the mode, how sensitive it is, and the self-serve cut-off.

**Also in this release:** an **unban now clears the slate**: if you unban someone (or lift a ban directly in Discord), it no longer counts against them in alt-detection or join risk-scoring. An overturned ban shouldn't follow someone around.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.0.0: Anti-nuke / rogue-admin guard: a smoke alarm for your server</summary>


**One of the three features you voted for in v6.0 is here: protection against a server "nuke" or a compromised admin account.**

Server Assistant now watches for the tell-tale signs of a server nuke: **one account suddenly deleting channels or roles, mass-banning or kicking members, or grabbing dangerous permissions** in a tight burst. When that happens, it works out how likely it is to be an attack and responds straight away:

- **It stops the damage.** At high confidence it **automatically quarantines** the offending account, stripping the roles giving it power, then alerts you and your staff with a short, plain-language summary of what happened. If it was a false alarm, **one tap puts everything back**.
- **You're always safe.** The **server owner is never affected**, and you can add trusted staff, roles or bots to a **whitelist** so their normal admin work is never flagged.
- **Tuned to your community.** Sensitivity is set automatically from your server type (busier servers get more headroom; locked-down servers are stricter), and you can adjust it yourself.
- **Put your server back exactly.** Server Assistant keeps a regular snapshot of your roles' permissions and channel settings, so it can **restore them precisely**, and even **recreate deleted channels**, after an incident.
- **Two-person rule.** Optionally require **two different admins** to undo a quarantine, so a single compromised account can't quietly switch your protection off.

Everything stays **local to your server**: nothing is shared anywhere. It's **on by default** (detection and alerts don't change anything on their own), and you'll get a one-time heads-up in your staff channel before the automatic protection can act. Manage it all under **`/settings → Anti-nuke`**.
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

</div><!-- /cl-bot -->

<div class="cl-panel" id="cl-portal" role="tabpanel" aria-labelledby="tab-portal" markdown="1" hidden>

<p class="cl-intro">What's changed in the <strong>Server Assistant portal</strong>: the web dashboard you sign into with your Discord account.</p>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>A simpler leveling toggle</summary>
- **One "Level-up messages" switch.** The portal's leveling section now has a single **Level-up messages** on/off toggle in place of the old, confusing pair. Turn it off and the celebratory level-up messages stop; members still earn XP exactly as before, they just do it quietly.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Crestbound joins the portal</summary>
- **XP Games on the portal.** The portal home now has an **XP Games** section, with **[Crestbound]({{ '/wiki/crestbound/' | relative_url }})**, the Crest-collecting game, as its first entry. Open it to jump straight into your collection.
- **My Collection.** A new view shows every Crest in the current Chapter: the ones you've found in full and the ones you haven't as placeholders, plus your spendable XP and a collection counter at the top.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>Always up to date</summary>
- **Automatic updates.** The portal now refreshes itself in the background, so you always see the latest version without needing to hard-reload the page.
- **Wiki link in the footer.** A link to the [Server Assistant Wiki]({{ '/wiki/' | relative_url }}) now sits in the portal footer, so the full feature and command reference is always one tap away.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>The customer portal launches</summary>
- **Sign in with Discord.** The customer portal launched as a web dashboard you reach by signing in with your Discord account, a home for the parts of Server Assistant that live on the web rather than in chat.
</details>

</div><!-- /cl-portal -->

<div class="cl-panel" id="cl-crestbound" role="tabpanel" aria-labelledby="tab-crestbound" markdown="1" hidden>

<p class="cl-intro">What's new in <strong>Crestbound</strong>: the Crest-collecting game in the portal, powered by the XP you earn in Discord.</p>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v1.5: The bot rounds out</summary>
- **World-first discovery announcements.** Server admins can pick a channel with `/setup`; when a member makes a genuine world-first discovery, the server hears about it the moment the art comes to light. Announcement only, no reward ever differs by server.
- **`/duel`**: see your active Wardeck and jump straight onto the Battle screen.
- **Battles preload every Crest's art** so nothing pops in mid-duel.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v1.1 to v1.4: A cleaner, calmer Crestbound</summary>
- **Discoverers are branded onto their Crests.** The discoverer's name now reads as a hot brand seared into the card, and you'll see it burn in live the moment a Crest is revealed.
- **Rarity now reads from the cost stamp alone**: the shaped, coloured seal on the art. The old rarity-coloured borders are gone everywhere.
- **A quieter, cleaner interface**: decorative emoji swept out of the game's menus, shop and messages; placeholder battle sounds removed (real, generated audio arrives as it's created); the Starter Decks gallery and the Deck Builder rebuilt to match the rest of the game's look.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v1.0: Crestbound stands alone</summary>
- **The game moved into its own home** at [crestbound.wandweb.co](https://crestbound.wandweb.co): its own sign-in, its own Discord bot, the same game. **Your collection, XP, Cinders, decks and discoveries all came with it**; old links carry you to the new address.
- Everything you know, packs, discovery, Wardecks & battles, quests, the Shop, is unchanged, just faster on its own foundations.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Coming soon: Wardecks & battles</summary>
- **Battle mode is on the way.** A future update will let you assemble a **Wardeck**: a 30-Crest battle group drawn from your collection, and put it to the test. It isn't here yet; for now, Crestbound is all about building your collection.
- **Server Wars, on the far horizon.** A community-versus-community season: your Discord server is your banner, your members' duels bank points for it, and fleet-wide standings crown a champion server each season. Cosmetic glory only, no server or member ever gains a gameplay advantage. Parked until enough communities are battling; watch this page.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Make it yours: Card Backs</summary>
- **Card Backs arrive.** The Shop now has a cosmetics shelf: pick the free **Banked Ember**, one of five **faction backs** (300 XP each), or the prestige **Vault Gilt** (150 Cinders, the same quest currency that unlocks the Ember Vault). Your equipped back is shown everywhere a Crest sits face-down, collection placeholders and deck faces. Purely cosmetic: no card back ever changes how the game plays.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>A fullscreen home and the Shop</summary>
- **Crestbound goes fullscreen.** The game now opens into its own full-screen home: a main menu of illustrated panels, your Collection, the Shop, and the battle features as they arrive, with your XP balance always in view at the top.
- **A proper Shop.** Packs have moved out of the collection page into a dedicated **Shop**: pick one of the five **faction packs** (5 Crests from a single faction, no Mythics there), open the classic **Chapter Booster**, or eye up the **Ember Vault**, a premium pack of guaranteed rares crowned by a Mythic, opened with **Cinders**, a currency earned from quests. Your collection keeps a shortcut straight to the Shop.
- **Hand-illustrated everywhere.** The home screen, its menu panels and every pack in the Shop now carry rich HD artwork in the same style as the Crests themselves, each piece fades in as it's ready.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Tidy your collection: burn spare Crests</summary>
- **Burn spare Crests for XP.** Got duplicates? You can now **burn** a spare Crest to recover some XP, common **5**, uncommon **12**, rare **30**, mythic **75**, and spend it on more packs. There's a confirmation every time, with an extra warning if you're about to burn your only copy of a Crest.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>A more polished collection</summary>
- **Rarest first.** Your collection now sorts with the most prized Crests at the top, mythic, then rare, then uncommon, then common, so the headline pieces are always front and centre.
- **Reveal animations.** Opening a booster pack now plays a short reveal, with the Crests turning over one by one, and rare and mythic Crests catch the light with a subtle sheen.
- **Collection counter.** My Collection now shows how many Crests of the Chapter you've found at a glance.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Crestbound launches</summary>
- **The game arrives.** Crestbound launched in the portal with its first Chapter, **"Chapter I: Embers of the First War"**: a sweeping cast of **450 Crests** to collect across four rarities: common, uncommon, rare and mythic.
- **Booster packs.** Spend **200 XP** to open a booster pack of **5 Crests**, with the last Crest in every pack **guaranteed to be rare or better**.
- **My Collection.** Every Crest in the Chapter shown in one place, the ones you own in full, the ones still out there as placeholders, so you can always see what's left to find.
- **Powered by your XP.** Crestbound runs on the same account-wide XP you earn from chatting, voice time, and from voting for Server Assistant, no separate purchase, no Premium required.
</details>

</div><!-- /cl-crestbound -->

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new

<script>
(function () {
  var tabs = [].slice.call(document.querySelectorAll('.cl-tab'));
  var panels = { bot: 'cl-bot', portal: 'cl-portal', crestbound: 'cl-crestbound' };
  function show(key) {
    if (!panels[key]) key = 'bot';
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.dataset.cl === key ? 'true' : 'false'); });
    Object.keys(panels).forEach(function (k) { var el = document.getElementById(panels[k]); if (el) el.hidden = (k !== key); });
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      show(t.dataset.cl);
      if (history.replaceState) history.replaceState(null, '', '#' + t.dataset.cl);
    });
  });
  show((location.hash || '').replace('#', ''));
})();
</script>
