---
layout: default
title: Server Assistant Changelog
permalink: /changelog/
description: Release history for Server Assistant, v6.x line.
# rebuild-trigger: 2026-07-23 (force GitHub Pages redeploy)
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
  <button class="cl-tab" id="tab-mcdc" role="tab" aria-controls="cl-mcdc" aria-selected="false" data-cl="mcdc">MCDC</button>
</div>

<div class="cl-panel" id="cl-bot" role="tabpanel" aria-labelledby="tab-bot" markdown="1">

<details class="doc-sec" markdown="1" open data-kind="fix">
<summary>v6.91.0 &amp; v6.92.0: @sai finds the actual numbers on a wiki page</summary>

Asked "how far can copper golems detect chests", @sai said they don't detect chests from a
distance — while reading the page that says they search a **65×17×65 area**. It had the right
page and was picking the wrong paragraphs out of it.

**Questions asking for a figure now prefer the paragraphs that contain one.** A measurement
like "65×17×65" outranks an unrelated number like "3 seconds", "how far" matches the words a
wiki actually uses (area, radius, within, centered), and those questions get more of the page
to work with.

**And @sai now uses the page's own contents list.** A wiki page's sections — "Behavior",
"Chest interactions and item transportation" — are labelled by a person to say what each part
covers, which beats guessing from the wording of your question. So when you ask "how far can
they detect chests" and the page says "search … in a cubic area", the section heading connects
the two. No extra lookups, so it's no slower.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.90.0: @sai reads the part of the page that answers you</summary>

@sai was only reading each wiki page's **opening summary**. Asked "how far can copper golems
detect chests" it found the right page and had to admit the detail wasn't in what it read —
because the detection range is further down the page, under behaviour, not in the intro.

**It now picks out the paragraphs that match your question.** Ranges, durations, drop
chances, spawn conditions — the specifics that live in the middle of an article — actually
reach the answer now. The page's opening definition is always kept as well, so a figure
arrives with the context that makes sense of it.

**Only when it needs to.** A question the summary already answers behaves exactly as before
and is just as quick. And if the deeper read fails for any reason, @sai falls back to precisely
what it did previously.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.89.0: @sai searches properly now — and finds the right page</summary>

**@sai now uses a real search engine to find the right wiki page.** The wiki's own search
was the weak link: asked "how far can copper golems detect chests" it never returned the
Copper Golem page at all — so @sai had nothing useful to read and fell back to guessing.

**The answer still comes from the Minecraft wiki.** The search engine only decides *which
page* to read, and it's restricted to minecraft.wiki, so the source is unchanged — it's just
far better at finding the right article from a normal question.

**It only searches when it needs to.** If the wiki's own search already found the right page,
nothing extra happens. The search engine is there for the questions that were previously
failing, which also keeps it well within its free allowance.

If the search is ever unavailable, @sai simply falls back to what it did before — nothing
gets worse.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.88.0: @sai's in-game replies finish their sentences</summary>

Asked "what's the thing that sorts my items", @sai gave a long answer that ran past its first
sentence into a second thought and ended in a "…". Replies should end properly.

**@sai now aims much shorter** — one or two complete sentences — and is told plainly that
finishing its sentence matters more than saying everything, so it answers the question and
stops instead of listing every alternative.

**And when a reply does have to be shortened, it now ends properly.** Previously, cutting at
the end of a sentence *removed the full stop and put a "…" in its place* — so an answer that
had finished cleanly still looked cut off. A shortened reply now keeps its full stop, and the
"…" only appears when something genuinely was cut mid-sentence.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.87.0: @sai stops holding on to a wiki page it wasn't sure about</summary>

When @sai looks something up, it remembers which wiki page it used so the next player asking
the same thing gets an instant answer. That was sensible for a page it had **confirmed** —
but it was doing the same for a page it had only **guessed** at, and holding onto a guess for
a whole day meant one wrong lookup kept being wrong all day, on every server that asked the
same way.

**A guess is now forgotten within minutes**, so it gets another go. A confirmed page is still
remembered for a day, because wiki articles don't change that fast.

**And there's now a way to clear it deliberately.** If @sai ever cites a page that's plainly
wrong, switching the wiki lookup off and back on wipes everything it remembered — you no
longer have to wait it out.

To be clear about what was never remembered: **@sai's actual answer**. Only which page it
read. Every player gets a fresh reply.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.86.0: the <code>[wiki]</code> link works in Minecraft too</summary>

The `[wiki]` source on @sai's in-game answers is now a **real clickable link** — click it in
chat and the page opens in your browser; hover it to see the page name and full address.

Previously Minecraft chat could only show the citation as text, because chat lines have no
links. The address now travels alongside the message rather than inside it, which is what
lets the plugin turn it into something you can actually click — and keeps the line short.

Needs **MCDC plugin v0.18.0** on your Minecraft server (`/mcdc update`, or wait for the
automatic update). Until then the citation shows as plain text, exactly as before.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.85.0: @sai stops telling players something isn't in the game</summary>

**A player asked how far copper golems detect chests and was told they "didn't make it into
the game"** — on a server that has them. @sai's Minecraft knowledge comes from training data
with a cutoff, so anything added to the game since then looks fictional to it.

It now works the other way round: if a player names a mob, item or block @sai doesn't
recognise, it **assumes the player is right** and says it isn't familiar with it yet, pointing
them at the wiki or staff. It will no longer tell anyone something was cancelled, lost a mob
vote, or is modded-only.

**It also stops reading changelog pages.** The wiki lookup had handed it *"Bedrock Edition
Preview 1.21.110.24"* — a version changelog, which answers nothing about how anything works.
Those are now filtered out properly. And plurals finally reach the right article: "copper
golems" finds the **Copper Golem** page, which was sitting in the search results the whole
time.

**When it isn't sure it found the right page**, @sai now keeps its "this may have changed in
your version" caution and adds no source link, instead of presenting a guess as fact.

**The `[wiki]` link is shorter too.** In game it shows the page name rather than a long
address (Minecraft chat can't open links anyway); in Discord it's a compact clickable
**[wiki]**.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.84.0: @sai shows you where its Minecraft answers come from</summary>

**Every in-game answer now ends with `[wiki]` and a link** to the minecraft.wiki page @sai
read to answer you. Ask about nautilus and you get the Nautilus page, so you can go and
read the rest yourself instead of taking one line on trust.

**It also makes a bad answer obvious.** @sai picks the best match out of several wiki
search results, and it can occasionally pick the wrong one. Before, there was no way to
tell that from the outside — the answer just looked slightly off. Now you can see the
page it used and know instantly.

In **Discord** the link is clickable, with no large preview card cluttering the channel.
**In game** it's shown as text you can read (Minecraft chat won't open it for you).
Refusals and error notices don't get a source link — only actual advice does, because
"I'm resting for a bit" didn't come from the wiki.

Controlled by the same wiki-lookup switch as the lookup itself, so turning that off
removes the links too. **No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.83.2: What's New is current again — and stops claiming you're up to date</summary>

**`/whatsnew` was twelve releases behind.** Its newest item was v6.71.0 while the bot was
on v6.83.1, so months of work never appeared there. All thirteen missing releases —
v6.72.0 through v6.83.1 — have now been written up.

**Worse, it told you that stale list was current.** Because it marks you as having seen
whatever version you're running, and that version had no entry of its own, it concluded
there was nothing new and showed "✅ You're up to date" above months-old news. It now
compares version numbers, so a gap reports what you actually haven't seen instead of a
false all-clear.

**Long release notes are also trimmed properly** — on a word boundary rather than
mid-sentence.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.83.1: @sai now finds the right wiki page for your question</summary>

v6.82.0 taught @sai to read the Minecraft wiki. It turned out it couldn't reach the wiki
at all — and once that was fixed, it was looking up the *wrong page*.

Asked "what does a nautilus eat", it was searching that whole sentence, and the wiki
answered with a **version changelog page** rather than the article about nautilus. @sai
read that page, found nothing about nautilus in it, and fell back to guessing — which
looked exactly like the original problem.

**It now searches for what you're actually asking about.** The question wording is
stripped down to the thing itself — "how do I craft a hopper" becomes "hopper" — plurals
are matched to the singular article name, and version/snapshot pages are skipped since
they never answer a gameplay question. If one of the results is the thing you named, that
page wins.

Tested against the live wiki across common questions — nautilus, hopper, beacon, creeper,
axolotl, diamond, nether portal, netherite — all now find the right article.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.83.0: AFK players stop earning Minecraft playtime XP</summary>

Server Assistant pays XP for every minute a linked player spends on your Minecraft
server. Until now it couldn't tell the difference between playing and *being logged in* —
so an AFK pool or an auto-fishing rig earned exactly as much as someone actually playing,
all night, without touching the keyboard.

**Idle players now stop earning.** After five minutes with no activity, playtime XP pauses
until they do something. Everything else is unaffected — they stay connected, chat still
works, nothing is kicked or interrupted. Only the XP pauses.

**What counts as being active:** moving from one block to another, breaking or placing a
block, interacting, clicking an inventory, chatting, or running a command. Turning your
head or drifting in an AFK pool deliberately doesn't count — that's the whole point.

**Coming back is instant.** The moment an idle player does anything, they're earning again
on the very next minute — no waiting to be counted again.

**The five minutes is yours to change** in the plugin's `afk-minutes` setting. Raise it if
your server has legitimately slow activities, or AFK farms you *want* to reward.

**Needs MCDC plugin v0.17.0.** Until your server updates, playtime XP behaves exactly as
before — nothing breaks, idle players simply keep earning.

---

**Also fixed: `/whatsnew` wasn't working.** Running it returned "Something went wrong
running that command" — every time, for everyone. One release entry had grown eight
characters past a Discord size limit, and Discord rejects the whole message when any one
section is too long. It works again, and long entries are now trimmed neatly instead of
breaking the command.

You may notice `/whatsnew` is behind on recent releases — the list it reads from stopped
being updated a while back, which the broken command was hiding. We're catching it up.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.82.0: @sai looks the answer up on the Minecraft wiki instead of remembering it</summary>

v6.81.0 stopped @sai giving confident answers about an old version of Minecraft. That fixed
the *wrong* answer — it didn't produce a *right* one. Asked "how do I tame a nautilus", it
went from confidently wrong to honestly unsure, which is better and still no help.

**@sai now reads the Minecraft wiki before answering.** Ask it a game question and it looks
up the relevant page, then answers from that — treating the wiki as more reliable than its
own training data. So it doesn't just stop being wrong about nautilus; it tells you they
can be tamed, saddled and ridden as an underwater mount.

Because it has actually checked, it also drops the "this may have changed in your version"
caveat when the wiki answered the question.

**If the wiki can't be reached** — it's slow, or there's simply no page for what was asked —
@sai falls back to the careful, clearly-hedged answer from v6.81.0. It never fails silently
or leaves a player waiting.

**You can turn it off.** If you'd rather @sai never make an outside lookup, the setting is
there; leaving it on is the default.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.81.0: @sai no longer gives confident answers about an old version of Minecraft</summary>

**The problem.** A player asked @sai how to tame a nautilus and got back "you can't tame a
nautilus — nautilus shells are items you find, not living mobs." On that server's version
of Minecraft, you can. The answer was wrong, stated with total confidence, in public chat.

**Why it happened.** @sai's general Minecraft knowledge comes from training data, which has
a cutoff date. Your server doesn't. Minecraft changes mobs, items and mechanics with every
release, so an answer that was right when the assistant was trained quietly goes wrong the
moment your server updates past that point — and the assistant has no way to know it has.

**What's changed.** @sai is now told which version of Minecraft your server is actually
running, and that its own knowledge might be older than that. It's also no longer allowed
to flatly tell a player something is impossible — "you can't do that", "that isn't in the
game" — from memory alone. That's the kind of answer a new Minecraft release turns into a
wrong one.

Ask it about something it thinks isn't possible and it will now tell you what it knows, say
it may have changed in the version you're running, and point you at your staff or the
in-game recipe book.

**It hasn't become vague.** Crafting recipes, redstone, mob behaviour and command questions
are answered as directly as before. The new caution applies only to claims about whether
something *exists* or is *possible* — the questions where a Minecraft update actually
changes the answer.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.80.0: your Admins and Moderators can do more — and three toggles that never did anything are gone</summary>

**Admin can now shape the server.** Your Admin tier can now be asked to create, rename and
move channels, manage categories, unarchive threads, create invites, issue timeouts and
wipe messages. Several of these were gaps rather than decisions: `archive` was allowed but
`unarchive` wasn't, and `purge` and `prune` were allowed but their synonym `wipe` wasn't.

**Moderator can now issue timeouts.** `timeout` was in neither tier, even though mute and
unmute were in both — so nobody below the server owner could actually ask for a Discord
timeout. Moderators can now.

Admin still **cannot** delete or remove channels, and still cannot run `setup`. Both stay
owner-only on purpose.

**This changes the defaults, not your settings.** If you've already customised your role
capabilities, nothing about your server changes. The wider lists are what newly-configured
roles start with, and what the presets in the editor offer.

**Three capabilities are gone from the editor: `role`, `permission` and `webhook`.** They
appeared as toggles, but there was never a feature behind them — ticking one changed
nothing. Server Assistant will never change anyone's roles or permissions because it was
asked to; that's a standing security rule, not a setting you can switch. A request to do so
is now refused with a clear message pointing at **Server Settings → Roles**, and logged for
your staff.

**And when a capability really is missing, the refusal now tells you where to fix it.** The
"your role isn't cleared to have me run that" message now names the path — `/settings` →
**Role Tiers** → **Fine-tune** → pick the role → add the action — and says plainly that
changing someone's *Discord* permissions won't grant a Server Assistant capability. They're
separate systems, so handing a role Discord Administrator won't help.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.79.0: @sai's answers now reach Minecraft, and answer to your own name</summary>

Two fixes for servers using the Minecraft bridge.

**@sai's answers now cross into the game.** If someone asked @sai a question in your
bridged Discord channel, players in Minecraft saw the *question* arrive but never the
answer. Now the answer follows it across — shown under your assistant's own name, so a
renamed assistant stays renamed in game.

**Your assistant answers to its own name in game.** If you've renamed it in
**@sai Studio**, players can now summon it with `@YourName` in Minecraft chat instead of
having to type `@sai`. `@sai`, `!sai` and `!ai` all keep working, so nothing you've
already told your players stops being true.

One thing to bear in mind: if you name your assistant a common word, `@that word` will
start summoning it in chat.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.78.0: auto-protect and Active Threat Score are now full-Premium features</summary>

**ThreatNet auto-protect** and **Active Threat Score** have moved to the **full Premium**
plan. They are no longer included with **BYOK**, which covers bringing your own AI key.

If your server is on BYOK and had either switched on, we've **turned it off and posted a
notice in your staff chat** saying exactly what changed — rather than letting it stop
working quietly. If you had auto-protect on, that notice says plainly that **joins are no
longer auto-banned**, so nobody carries on assuming they're screened.

**The advisory ThreatNet flag stays free for every server**, on every plan. Your staff
still see the cross-server risk band on member profiles — it simply doesn't act on its
own unless you're on full Premium.

Everything else on BYOK is unchanged, including unlimited `/imagine` with your own key.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.77.0: staff get told when their rank is waiting on an account link</summary>

If you use **rank sync**, giving someone a synced Discord role used to be silent to
them — their in-game rank simply never appeared, which looks like something is broken.

Now they get a **DM naming the rank that's waiting**, with the two steps to claim it:
run `/link` in Discord, then `!link <code>` in game.

If their DMs are closed, we say so **in your staff chat** and mention them, so someone
can pass the message on rather than it vanishing.

A few deliberate limits: only *gaining* a role triggers it (never losing one), only
people who haven't linked get it, and it's **one message per person per day** — so
adding and removing a role can't spam anyone.

**Also fixed:** `/link` and `/unlink` sometimes failed with an "Unknown interaction"
error when the server was busy. Both now respond straight away.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.76.1: @sai no longer refuses your leaderboard page</summary>

`@sai` refuses to read pages anyone can post to — forums, wikis, comment threads. That
check was too blunt: it turned down ordinary pages whose names merely *contain* one of the
words it watches for.

**`/leaderboard` was refused**, because "board" ends the word — while `/leaderboards` was
accepted, because the plural breaks the match. `/scoreboard`, `/dashboard` and
`/postal-address` were turned down for the same reason.

Those pages are accepted now. Nothing else changed: forums, wikis, comment threads, boards
and user profiles are still refused, still with no override. If a page you trust is turned
down, that's still the answer — give `@sai` a different page.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.76.0: @sai can answer from your server's website</summary>

Players ask `@sai` the same handful of questions — how do I rank up, what's on the store,
when's the next event — and the answers are usually already written down on your website.
`@sai` can now read that page and answer from it.

In `/mcdc` → **🤖 @sai Studio** → **🌐 Website**, paste your server's address. `@sai` reads
that one page, answers players' questions from it, and gives them the address when the
address is the answer. It re-reads the page about once a day, and there's a **🔄 Refresh
now** button for when you've just changed something.

The panel shows you exactly what was read — "**1,842 characters** from *Nightfall SMP —
Home*", plus the sections it found — so you can see what `@sai` actually learned, rather
than just that the feature is switched on.

- **Premium, opt-in, off by default.** Nothing changes for a server that doesn't turn it on,
  and no existing server has been opted in.
- **One page.** The address you give, and nothing else on the site. `@sai` will never read a
  web address someone types into a question.
- **Pages anyone can post to are refused.** An address that looks like a forum, wiki, comment
  thread, board or user profile is turned down with an explanation — a page strangers can
  write to would let them write what `@sai` tells your players. There is no override for
  this, and it deliberately errs towards refusing: if a page you consider legitimate is
  turned down, point `@sai` at a different one.
- **`robots.txt` is honoured** on every site we read.
- **Your text, your call.** Only the extracted words are kept — never the page itself —
  overwritten on each re-read, and deleted the moment you switch the toggle off, change the
  address, or remove the bot. What we send to AI providers is set out in the
  [privacy policy]({{ site.baseurl }}/privacy/).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.75.0: Changes to the assistant now appear in your audit log</summary>

Your audit log has always recorded what your staff *do* — a ban, a warning, a dismissed
flag. It didn't record changes to **the assistant itself**: who turned it on, who changed
who's allowed to talk to it, who rewrote what it knows about your server. Those were the
one set of changes that left no trace. They do now.

**On a bridged Minecraft server** (`/mcdc` → **@sai Studio**) that covers who may ask
`@sai`, the reply tone, the assistant's name and greeting, your server knowledge pack, and
both SAi Companion switches — the companion itself, and whether new players get one
automatically. The **Ask @sai** on/off button on the bridge's main page is covered too.

**On the Discord side** it covers the AI mode, provider and model you pick in `/ai-config`
or during `/setup`, the image-generation provider, and your Reception assistant's persona
and greeting.

**Entries record the change, not the content.** A switch reads `companion: off → on`; an
access change reads `access: staff → everyone`. **Anything you wrote yourself is recorded
only by its shape** — your knowledge pack, the assistant's identity, its greeting, its
persona. The log will say `knowledge updated (412 → 980 chars)`, never a word of what it
says. So you can see that your rules were rewritten, and by whom, without your own text
sitting in a second place.

**Opening a form and closing it again writes nothing.** Only real changes are recorded, so
your log doesn't fill up with people having a look around.

**Nothing to turn on** — it applies from this release, wherever you can already configure
the assistant. Existing entries are untouched, and these records use the same fields your
audit log already keeps for every staff action.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.74.0: The assistant can now point players to your customer portal</summary>

Ask the assistant how to reach the portal — *"where's the website?"*, *"how do I get to my
account?"* — and it now gives you the portal's address instead of leaving you to hunt for
it. That works wherever the assistant answers, including **in-game** on a bridged Minecraft
server (`@sai`), on servers that have the assistant switched on.

It gives out the address and nothing else — the portal's own page carries the Privacy and
Terms links in its footer.

**Minecraft players get a second, simpler route in the same release:** the companion plugin
now has a **`/saportal`** command that prints a clickable link, with no assistant and no
Discord account needed. See the **MCDC** tab for that — it needs **plugin v0.16.0**.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.73.0: The auto-close safety net for forgotten staff decisions now actually runs</summary>

**v6.72.0 added a safety net that wasn't doing anything.** Items waiting on a staff decision
were supposed to warn you and then close themselves if nobody ever acted — but they were
never given a closing date in the first place, so nothing ever reached the warning stage.
This release gives them one, so that feature now genuinely works.

**How long an item waits** now depends on what it is, because they aren't all alike:

- **AutoMod reviews and Minecraft chat flags — about two weeks.** These carry an extract of
  the flagged message, so they shouldn't sit around.
- **Ban appeals, raid alerts and verification items — about a month.**
- **Owner approvals — no closing date at all.** They wait until you answer them.

After that, the behaviour is exactly what v6.72.0 described: **a warning first** — a notice
in the portal, a push notification and a DM to the staff who can act — then **24 hours** to
act on the item or dismiss it, and only then does it close itself. Closing records that
nobody acted; it is not an approval or a denial. The record is cleared **90 days** after
closing.

**One thing you will now start to see:** once an item is past its date, it also drops off
the portal's **Needs input** list. That isn't new — it is how the list has always worked —
but since nothing ever reached a date before, nobody had seen it happen. It doesn't skip
anything: the item is still warned about, still gets its full 24 hours to be acted on or
dismissed, and is **not deleted** at that point.

**Nothing already in your queue changes today.** Items raised before this update don't have
a closing date, so none of this applies to them — they stay exactly where they are.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.72.0: Forgotten staff decisions now close themselves — after warning you first</summary>

When something needs a staff decision — a ban appeal, an AutoMod review, an owner
approval — it lands in the portal's **Needs input** list and SA nudges your staff about
it. Until now, an item nobody ever acted on simply sat there forever.

Those items now eventually close themselves. But **never silently**:

- **You get a warning first.** Before anything closes itself, SA tells you: a notice in
  the portal activity feed, a push notification, **and a DM** to the staff who can act on
  it. The warning says what the item is, how long it has been waiting, and exactly when
  it will close.
- **A full day to act.** After that warning there is a **24-hour** grace period. Act on
  the item — or dismiss it — at any point in that window and it never closes itself. A
  warning that arrives at 3am is still there to be handled by whoever is on shift next.
- **Closing is a tidy-up, not a decision.** SA closing an item does **not** record it as
  approved or denied. It records that nobody acted.
- **Items with no deadline are never touched.** If something was raised without an
  expiry, it stays in your queue indefinitely, exactly as before.

**Why this exists:** closed items are now cleared out after **90 days**, so the details of
an old decision — including any message text involved — don't sit on file forever. An item
that never closed was never cleared.

**Your existing "needs your input" nudges are unchanged.** This adds a final warning
before an item lapses; it does not replace the reminders you already get.

One note: anyone who has turned off DMs from SA won't receive the DM version of the
warning. The portal notice still reaches them.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.71.0: Flagged Minecraft messages are no longer kept in the activity log</summary>

This is a privacy fix, and it is worth being plain about it.

Our privacy policy says the **moderation-actions log does not store message content**. For
AutoMod flags on **bridged Minecraft chat**, that wasn't true: a short extract of the
flagged message was being written into the durable record — the same record you can read
and **search** in the portal activity log. Two paths did it: the automatic flag itself, and
the reason pre-filled for your staff when they kicked or banned straight from the flag card.

The durable record now keeps **who** and **which filter matched** — and no longer the
message text.

**What has _not_ changed** — your moderators lose nothing they need to judge a message:

- **The staff alert in Discord still quotes the message in full.** Your moderators still
  see exactly what was said, in full context, before they decide anything.
- **The server log channel embed still shows the full reason.**
- **The kick or ban message the player sees in-game is unchanged.**
- **Discord-side moderation is entirely unaffected.**

Only the durable, searchable activity record is redacted — bringing it into line with what
the privacy policy already promised.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.70.0: The assistant no longer fills gaps with guesses</summary>

Asked *"what are the rules on this server?"* on a server with no rules configured, the
assistant used to answer anyway. It would say staff set those up, suggest checking "a rules
channel **if there is one**", and add that they "**might have also** set up a `/rules`
command **or something similar**". None of that was known to be true — it was
plausible-sounding filler, and it sent people looking for things that may not exist.

It now **never names a command, channel, role, rank or feature it hasn't been told exists.**
When it doesn't know something, it says so in one short sentence and points at the one thing
that is always true — **ask the server's staff** — instead of padding the answer with
guesses.

This applies everywhere it answers: **in-game**, **in Discord**, the **welcome assistant**,
and **`/faq`**.

**It still answers plainly what it does know.** If your server's knowledge pack says "no
griefing", it says "no griefing". The change targets invention, not confidence — a
well-filled-in server gets the same direct answers as before.

**A tip for operators:** fill in your server knowledge pack — `/mcdc` → **@sai Studio** —
and the assistant can answer these questions properly instead of pointing people at staff.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.69.0: /online rebuilt — a truthful, instant look at who's on your Minecraft server</summary>

Run **`/online`** in your linked Minecraft channel to see who's on the game server right
now. The command already existed, but it was thin — and worse, it could tell you things
that weren't true. This release rebuilds it.

- **A stopped server used to show as online.** When a server went down, `/online` kept
  reporting the last thing it had heard, listing whoever happened to be playing at that
  moment. It now recognises that the information has gone stale, says the server
  **appears to be offline**, and **withholds the old player list** rather than showing
  you a roster that isn't really there.
- **A connection problem used to read as "no Minecraft server linked"** — a confusing
  answer when one plainly was. Trouble reaching your server is now reported as exactly
  that.
- **Long player lists no longer cut a name in half.** Busy servers get a tidy
  **"+N more"** instead of a name chopped mid-word.
- **Replies are instant.** `/online` now reads the presence information your bridge
  already keeps up to date — refreshed about once a minute — instead of going and asking
  all over again on every use. Run it twice in a row and the second answer comes back
  immediately.
- **Server health at a glance.** The same 🟢 / 🟡 (running slow) / 🔴 (offline) marker
  you already see on the channel topic, so the two can never disagree.
- **You can see how fresh the list is.** It tells you when the information was last
  refreshed, so a minute-old list is never mistaken for live truth.
- **Run it in the wrong place and it helps.** In another channel it points you at the
  right one; in a server with no Minecraft link at all, it tells you how to set one up.

**It shows Minecraft names only — never which Discord account a player is linked to**,
even for players who have linked one. Answers are visible only to the person who ran the
command, so `/online` never clutters your chat channel.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.68.0: AI Review can now tell "venting at the game" from "aimed at a person"</summary>

**AI Review** — the optional second opinion on a flagged message — used to answer only one
question: *did the filter really match something?* It was told to be lenient about ordinary
swearing, so it was good at calming down false alarms, but it couldn't tell an insult
pointed at another member from someone cursing at a boss fight.

It now judges **who a message is aimed at** as a separate question from whether the filter
matched:

- **Casual** — venting, banter, swearing at the game. Still calmed down, exactly as before.
- **Directed** — aimed at a person: insults, harassment, putting someone down.
- **Identity-based hate** — targeting who someone is. Flagged **whatever the tone**; said
  with a smile, it's still hate.

**Your staff can see that judgement.** It appears on the review card and in the automod log,
so a moderator can see *why* something was flagged instead of only that it was.

- **Nothing is punished more harshly.** This changes what your staff *see*, and whether a
  flag gets quietened — it never moves anyone further along the punishment ladder, and it
  never acts on something that wouldn't have been actioned before.
- **Still Premium, still opt-in, still off by default.** Turn it on in `/automod` →
  **AI Review**. If you haven't enabled it, nothing changes for you and no AI calls are made.
- **Nothing new is sent.** Same as always: one borderline message plus which filter matched.
  No usernames, no IDs.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.67.0: Targeted-harassment filtering now reaches servers set up before it existed</summary>

An earlier release added **targeted-harassment filtering** — the **Level 2** pack, which
catches "kys", "kill/hang/neck yourself", "go die" and the like — to every setup preset
that already included slur filtering. But choosing a preset copies its filter packs to
your server at that moment, so in practice **only servers set up after that release
actually got it**. Servers set up earlier kept the packs they'd been given and never
picked it up.

We've now applied it to those servers directly, so we should be upfront about what
changed on your side:

- **Only servers that already had the Level 1 slur filter switched on.** If you'd
  deliberately left slur filtering off, **nothing has changed for you** — we haven't
  turned filtering on anywhere it wasn't already running.
- **You can turn it off, and it stays off.** Untick **Level 2** in `/automod` →
  **Filter Packs**. It won't be quietly re-added later.
- **You'll see it in your own logs.** Affected servers get a single line in their server
  log channel when this switches on, so it isn't a silent change to your moderation
  settings.

Nothing else about your automod setup was touched.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.66.0: Give your Minecraft ranks a Discord role to follow</summary>

The setup side of **rank sync** is here. Point a Discord role at an in-game rank and
Server Assistant keeps the two in step for you — no manual LuckPerms edit every time
someone is promoted.

- **Map your roles in `/mcdc` → 🏅 Rank sync.** Pick a Discord role, name the in-game
  rank it should grant (your LuckPerms group), and turn the master switch on. From
  then on, when someone's Discord role changes their in-game rank follows **within
  about a minute**.
- **Several roles? Highest one wins.** A member who holds more than one mapped role
  gets the rank of their **highest-positioned Discord role**, so your hierarchy in
  Discord is the hierarchy in-game.
- **It only mirrors — it never takes instructions.** Nothing a player types, in
  Discord or in Minecraft or to the assistant, can *request* a rank change. Ranks only
  ever change because an authorised staff member changed a Discord role, or edited
  LuckPerms directly.
- **Some roles are protected, and SA tells you why.** When you pick a role that
  shouldn't be mirrored, SA declines it on the spot and explains: `@everyone`,
  bot- and integration-managed roles, roles carrying Administrator, and any role at or
  above Server Assistant's own position (your Operations / Executive Operator tier).
  Your top of house stays a human decision.
- **Only mapped ranks are ever touched.** Ranks you set by hand in LuckPerms, and your
  staff and admin ranks, are never modified. If a member isn't in your mapping, they
  are left completely alone.
- **Removing a mapping demotes cleanly.** Take a pairing out and SA withdraws the rank
  it granted, rather than leaving people stranded on a rank nobody is maintaining.

Needs the **MCDC plugin v0.15.0 or newer** and LuckPerms on the game server. Off until
you turn it on.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.65.0: Stronger hate-speech filtering — sexism, transphobia, homophobia, ableism</summary>

The slur filter behind most of our setup presets now covers **much more of what you'd
expect it to**. It already caught racial, ethnic and religious slurs, but had **no
coverage of misogyny or sexism at all** and barely any of anti-trans hate. That gap is
closed.

- **Wider coverage, applied automatically.** Misogyny and sexism, transphobia,
  homophobia and ableism now sit alongside the racial, ethnic and religious coverage
  the filter already had. If your server is on a preset that includes the **Level 1
  slur filter** (`slurs_l1` — Gaming, Creator, Anime, Crypto and NSFW all use it), you
  have this already, with **no settings change needed**.
- **Casual swearing is still not filtered.** That's deliberate and unchanged — venting
  at a hard boss fight won't trip anything. Ordinary profanity is only filtered by the
  **Strict** preset (`profanity_l3`).
- **Targeted harassment now comes with the pack.** Presets that switch on slur
  filtering now include the **Level 2** pack too ("kys" and similar). Servers set up
  before this update keep exactly the packs you already chose — to turn it on, either
  pick your community-type preset again in `/setup`, or enable **`slurs_l2`** in
  `/automod` → **Filter Packs**.
- **Minecraft bridge fix.** A slur deliberately typed with characters between the
  letters was hidden in-game but appeared **in full** in the linked Discord channel.
  It's now masked on both sides.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.64.0: Rename your in-game assistant and it's fully yours</summary>

Polish for the in-game assistant, especially on servers that have **given it their own
name**.

- **A renamed assistant is properly yours.** Give it a custom name in `/mcdc` →
  **@sai Studio** and, in-game, that's simply who it is — it introduces itself by your
  name and doesn't bring up the software behind it. It still answers your players'
  questions exactly as well.
- **Replies read cleanly in chat.** Answers are now plain text — no stray `**` or
  backticks from formatting that Minecraft can't display.
- **No more sentences cut in half.** Long answers now finish their sentence and trim
  neatly instead of stopping mid-word.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.63.0: SAi now follows the conversation in Discord</summary>

Ask SAi something in Discord and it now **remembers the thread** instead of treating
every message as a fresh start.

- **Follow-ups just work.** If SAi asks a clarifying question ("in a game or real
  life?") and you answer with a fragment ("in mc"), it now applies that to your
  **original** question rather than answering something unrelated.
- **Replies are always picked up.** Replying to one of SAi's messages continues the
  conversation — even if you turn the reply-ping off.
- **Answers on the merits.** A genuine question — including general game questions
  like a Minecraft crafting recipe — gets a real answer, instead of being steered
  back to bot settings.

Only recent messages from that same channel are used, and quoted chat is treated as
context to read, never as instructions to act on.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.62.0: @sai in-game — smarter answers, clearer linking, staff-only enforced</summary>

A polish pass on the in-game **@sai** assistant, from live testing.

- **Answers more.** @sai now helps with general Minecraft questions (crafting,
  mechanics, mobs) as well as your server's own info — and it **never goes silent**:
  if it can't answer, it says so instead of ignoring you.
- **Clearer account linking.** When a player needs to link, the message now says to
  run **`/link` in Discord** (it's a Discord command that gives you a code to redeem
  in-game) — no more confusion about typing it in Minecraft.
- **Staff-only really means staff-only.** If you restrict @sai to staff (or linked
  members), players who don't qualify can no longer summon or use the in-game
  companion at all — not just get refused after asking.
- As always, @sai only explains and guides — it **never** changes settings, roles or
  permissions.

Pairs with **MCDC plugin v0.14.0** (see the MCDC tab) — auto-updates.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.61.0: 🧚 Summon your own SAi companion in-game</summary>

Players on **Premium** can now **summon a personal SAi companion** right inside
Minecraft and ask **@sai a question privately** — the answer comes back to just
that player, not the whole chat.

- **A private answer, just for you.** Ask @sai something and the reply is sent to
  you alone, so you can get help without filling up the chat.
- **The same SAi your server already set up.** It's the very same SAi — its name,
  tone and server-knowledge all carry over.
- **It still only explains, guides and reports.** The companion never changes
  settings, roles or permissions.
- **A friendly first hello (optional).** Servers can have a companion greet
  first-time players automatically.

Turn it on in `/mcdc` → **🤖 @sai Studio** → **🧚 SAi Companion**. Premium, opt-in.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.60.0: Make the in-game @sai assistant your own</summary>

You can now **customise the @sai assistant** on your linked Minecraft server —
its name, its manner, what it knows, and who's allowed to use it — all from a new
**@sai Studio** page in the `/mcdc` wizard.

- **Give it your own name, tone and greeting.** Rename @sai, pick how it speaks
  (concise, friendly, or in-character), and write the line players see when they
  first talk to it.
- **Teach it your server.** Add a **knowledge pack** of your own details — rules,
  ranks, how to claim land, upcoming events — so @sai can answer players' "how do
  I…" questions with your real information. When something isn't in the pack, it
  says so and points players to staff rather than making an answer up.
- **Choose who can use it.** Open it to everyone, to linked members only, to staff
  only, or turn it off entirely.
- **It still only explains and guides.** @sai never changes anyone's roles or
  permissions — a request to do that is refused, exactly as before.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.59.0: Earn XP for time spent on your linked Minecraft server</summary>

You now earn XP just for **playing on your linked Minecraft server** — the same
way time in voice channels earns XP.

- **Same rate as voice XP.** Time on the server earns at the same rate as time in
  a voice channel, and your **2× events and buffs apply** to it just like everywhere
  else.
- **A fair hourly cap** keeps it balanced with the rest of the server.
- **Link your account to start earning.** Use `/link` in-game or the `/mcdc` wizard
  to connect your Minecraft account to Discord — playtime XP is credited to linked
  players only.

Needs the companion plugin at **v0.11.0** (auto-updates as usual).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.58.0: Minecraft channel topic now shows your server's health</summary>

The status dot on the linked Minecraft channel's **topic** now reflects your
**server's health** rather than how many players are on — so an online but empty
server no longer sits behind a grey dot.

- **The dot tells you how the server is doing.** 🟢 means online and healthy,
  🟡 means online but running slow, and 🔴 means offline or in trouble.
- **Empty no longer looks down.** An online server with nobody on it now correctly
  shows green instead of a grey dot.

Follows v6.57.0, which made the topic show offline when the server is down. This is
a bot-side change — **no plugin update needed**.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.57.0: Minecraft channel topic now shows offline correctly</summary>

The linked Minecraft channel's **topic** used to get stuck showing "🟢 online" with a
player count even after the Minecraft server had stopped. It now correctly shows
**🔴 Server offline** when the server goes down or stops responding.

- **The topic tells the truth.** When your server stops or stops responding, the channel
  topic flips to **🔴 Server offline** instead of leaving a stale online count sitting there.
- **It flips back on its own.** When the server comes back, the topic returns to the live
  player count and stats automatically — nothing to run.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.56.0: Updates to AutoMod</summary>

Behind-the-scenes improvements and refinements to AutoMod.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.55.0: Updates to AutoMod</summary>

Behind-the-scenes improvements and refinements to AutoMod.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.54.0: Minecraft chat flags — Dismiss + a reason prompt</summary>

The Minecraft chat-flag alert is now a proper action card, and it also shows in the
operator portal's **Needs input** list so nothing slips through.

- **Dismiss button** on every flag — and your audit log records **who** dismissed it.
- **Kick / Ban open a reason box** pre-filled from the offence (the rule + the flagged
  text) that staff can edit before confirming — the reason the player sees on disconnect.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.52.0: Minecraft chat-flag alerts go to your staff chat</summary>

When a bridged Minecraft message trips AutoMod, the flag notice — with its **Kick** /
**Ban in-game** buttons — now posts to your **staff-chat channel** instead of your
server-log channel, so it lands where your team is watching.

- Falls back to your usual alert channel if no staff chat is configured. The full audit
  trail still records every flag as before.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.51.0: Blocked links are masked in Minecraft chat</summary>

A link your AutoMod blocks (IP-grabbers, or any domain on your link blocklist) is now
**masked to `***` in bridged Minecraft chat** — in the Discord copy and the in-game
broadcast — instead of only raising a staff flag.

- **The bad link doesn't reach the room, but your staff still see it.** The masked
  copy is what players see; your staff alert and server log keep the **real link** for
  evidence. Works both directions and follows your AutoMod switch, same as the rest of
  the bridge filter.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.50.0: Ask-SAi answers now show in Discord too</summary>

When a player asks **SAi** in-game (`@sai …`), SAi's reply now also appears in your
linked Discord channel — not just in Minecraft.

- **The bridged conversation reads the same on both sides.** The player's question
  already crossed to Discord; now SAi's answer sits right below it in `#minecraft`,
  so staff watching from Discord can follow the whole exchange instead of seeing a
  question with no reply.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.49.0: SAi now knows Server Assistant inside out</summary>

Ask **SAi** how something works or where a setting lives, and it now answers from
Server Assistant's own documentation instead of guessing.

- **"How do I…" questions actually get answered.** In-game (`@sai`) or at the
  reception desk, SAi can now explain your features, plans, the Minecraft bridge,
  privacy, and **where each setting lives** — and it points you to the right command
  or panel. If something isn't covered, it says so plainly rather than making it up.
- **It still only explains — never changes.** SAi never edits settings, roles, or
  permissions; those are done by staff in Discord. A request to change someone's
  permissions or roles is refused and flagged, as always.
- **Kept current automatically.** SAi's knowledge is pulled from the live docs, so it
  stays in step with new releases without anything to configure.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.48.0: Bad language is now masked in Minecraft chat too</summary>

When your **AutoMod** catches a word in **in-game Minecraft chat**, that word is now
**masked to `***` in the game broadcast** other players see — not just in the Discord
copy. Your staff still get the **real wording** in the server log and the flag alert,
so nothing is lost for evidence.

- **Players see it censored; your log keeps the truth.** A flagged word shows as `***`
  to everyone in-game, while the original text still reaches Discord and your server
  log untouched. The message isn't dropped — just cleaned up for the room.
- **Follows your AutoMod switch, automatically.** The in-game mask uses the exact same
  word packs as the rest of your AutoMod and turns on/off with it — nothing extra to
  configure. Requires the latest bridge plugin (**v0.7.0**), which your server updates
  to on its own.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.47.0: Minecraft chat filtering now follows your AutoMod switch</summary>

Filtering and monitoring of your bridged **Minecraft chat** is now tied to **one
control — your server's AutoMod switch** — so it can never look "on" while quietly
doing nothing.

- **One switch, not two.** The separate **Chat filtering** and **Monitoring** toggles
  in the `/mcdc` wizard have been replaced by a single **Filter &amp; monitor** status
  that simply follows AutoMod. When **AutoMod is on**, bridged Minecraft chat is
  masked and monitored automatically — **both directions**, using the word packs
  you've already set up. When AutoMod is off, the bridge isn't filtered.
- **Fixes chat slipping through.** Before, those two toggles could each read "on"
  yet still do nothing whenever the AutoMod master switch happened to be off — which
  once let a slur (covered by the gaming slur pack) through unmasked and unflagged.
  Now the single control makes the real state clear, so what you see is what you get.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.42.0: Appeal a Minecraft ban or kick from the ban screen</summary>

If you're banned or kicked on a Minecraft server running our bridge, the
disconnect message now shows a **one-time link** to a web appeal form. Open it,
write your side of the story, and your appeal goes straight to that server's
staff to review — no Discord account needed.

- **One link, one use.** The link on your ban screen is **single-use and
  expires**, so keep the tab open if you want to appeal.
- **It reaches the right people.** Your appeal lands with the server's staff
  alongside the ban details, so they have the context to make a call.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.37.0: Link your Minecraft & Discord accounts</summary>

Players on a bridged Minecraft server can now **connect their Discord and
Minecraft accounts** — it's **opt-in** and **free**. Run **`/link`** in Discord to
get a code, then type `!link <code>` in Minecraft chat, and the two accounts are
joined.

- **You're in control.** It's entirely your choice — nothing links automatically —
  and you can run **`/unlink`** any time to disconnect. Only the connection between
  your Discord account and your Minecraft UUID is stored, never your Minecraft
  username.
- **The foundation for what's next.** Linking is the groundwork for two features
  we're building on top of it: **earning XP for your in-game playtime**, and keeping
  your **Discord roles and in-game ranks in step**. Link now and you'll be ready as
  they roll out.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.36.0: Kick or ban a flagged Minecraft player in-game</summary>

When a Minecraft player trips your AutoMod, staff can now Kick or Ban them
in-game with one click on the flag alert. Off by default — enable
**Enforcement** in the `/mcdc` panel; only staff with kick/ban permission can
use the buttons.

- **Act straight from the alert.** When your AutoMod flags a Minecraft player's
  chat, the Discord alert now carries **Kick** and **Ban in-game** buttons —
  press one and the action runs on your Minecraft server, no console needed.
- **Off until you turn it on.** Enforcement stays off until you enable it in the
  `/mcdc` panel, so nothing changes for servers that don't want it.
- **Permission-gated.** Each button only works for staff who already have the
  matching kick/ban permission — everyone else is turned away.
- **Needs the companion plugin.** The action is carried out in-game by the MCDC
  plugin **v0.5.0** (it updates itself if auto-update is on).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.35.0: Minecraft in your weekly Pulse</summary>

If you run the Minecraft bridge, your **weekly Pulse now includes a Minecraft
section** — a 7-day recap of in-game chat, joins, deaths and advancements. It's
**free**, and it shows up **automatically** for linked servers that had activity —
nothing to switch on.

- **A Minecraft rollup in the digest.** Alongside the rest of your weekly Pulse,
  linked servers get a Minecraft section summarising the last 7 days in-game:
  chat volume, player joins, deaths and advancements.
- **Free and automatic.** It appears on its own for any server with the bridge
  linked and some in-game activity that week — there's nothing to enable, and no
  plugin change needed.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.34.0: Ask SAi right inside Minecraft</summary>

Premium: let your players ask SAi questions without leaving the game. Type
`@sai <question>` in Minecraft chat and the answer prints back in-game.

- **Ask in-game, get an in-game answer.** On a bridged Minecraft server, a player
  can type `@sai` (or `!sai` / `!ai`) followed by a question in chat, and SAi's
  reply appears right there in Minecraft — no need to switch to Discord.
- **Off by default, opt-in per server.** It stays off until you switch it on with
  the **Ask SAi** toggle in the `/mcdc` panel.
- **Fair-use limited, and it uses your AI allowance.** Each player can ask up to
  15 questions every 6 hours, and answers count toward the same AI allowance as
  the rest of SAi.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.33.0: Server health at a glance</summary>

See your Minecraft server's health right in Discord — live TPS, tick time, RAM and uptime
show in the `/mcdc` panel and `/online`. Optional health alerts ping your staff/log channel
if the server goes offline or starts lagging. Free.

- **Live health in the `/mcdc` panel and `/online`.** Under the connection line you'll see a
  readout like `🟢 TPS 19.8 · ⏱ 42ms · 🧠 2.1/4.0 GB · ⏳ up 3d 4h` — your server's ticks-per-second,
  tick time, memory use, and uptime, updated as it reports in.
- **Optional health alerts.** A short notice posts to your log/staff channel when the server
  goes **offline or back online**, or when **TPS drops into the red**. It's on by default
  (`mcdc_health_alerts`); toggle it in the `/mcdc` panel.
- **Free, needs the companion plugin.** Health reporting is free on every plan and needs the
  MCDC plugin **v0.4.0** (it updates itself if auto-update is on).

</details>

<details class="doc-sec" markdown="1" data-kind="improvement">
<summary>v6.32.0: Clearer AutoMod status &amp; branding</summary>

Two clarity fixes so the panels tell you what's really happening.

- **AutoMod status now counts your packs.** The `automod` status card used to show
  "Filters: 0" even when a filter pack (like the gaming slurs pack) was switched on —
  which looked like nothing was being filtered. It now shows the real number of active
  rules, notes when the community word-list is on, and lists your enabled packs by name.
- **Branding makes the icon's scope clear.** `/brand` now spells out that your brand icon
  appears on the bot's **messages/embeds**, not its profile picture. Discord only allows a
  bot one avatar across every server, so branding changes the bot's **nickname and embeds**
  here — not the picture in the member list.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.31.0: Server Assistant now monitors Minecraft chat</summary>

Your **Minecraft chat is now watched the same way your Discord chat is** — so bad language
and blocked links from in-game players don't slip past moderation.

- **AutoMod scans bridged Minecraft chat.** Every message a player sends in-game is checked
  against your server's AutoMod word filters and blocked-link list, and counted in your
  "messages scanned" stats.
- **Staff get a heads-up when something trips a rule.** If a Minecraft player's message is
  flagged, Server Assistant posts a note to your log/staff channel — who said it, the message,
  and which rule — so your team can handle it in-game. (It's a heads-up only: Server Assistant
  can't mute or ban Minecraft players itself.)
- **Toggle it from `/mcdc`.** "Monitoring" is on by default; switch it off any time in the
  `/mcdc` panel.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.30.0: Set up the Minecraft bridge entirely in-game</summary>

Set up the **Minecraft ↔ Discord bridge** entirely **in-game** — no config file to edit, no
server restart.

- **Drop the plugin, then link in one line.** After adding the companion plugin to your
  server, run **`/mcdc link <token>`** in Minecraft to link the bridge instantly. The token
  is shown in Server Assistant's **`/mcdc` setup panel**.
- **The panel shows the exact command.** The `/mcdc` setup panel now prints the ready-to-run
  line for you to copy, so there's nothing to type out by hand.
- **No config-file editing, no restart.** The bridge links there and then — editing
  `plugins/MCDC/config.yml` and restarting the server is now just an alternative, not the
  only way.

Needs the companion plugin **v0.3.0** (it updates itself if auto-update is on).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.29.0: A friendlier staff welcome</summary>

When you finish setup, Server Assistant now greets your staff team with **one short, friendly
message** instead of a wall of onboarding cards.

- **Just a hello + the essentials.** Run `/help` to see everything, or **@mention Server
  Assistant** and ask in plain English — no commands to memorise.
- **A quick note on natural language.** It explains that in staff chat you can just ask for
  things the way you'd ask a teammate ("warn @jen for spam", "mute @user 30 min"), and that SA
  confirms before anything major.
- **Reply to keep going.** It points out that replying to SA's messages continues the
  conversation, so you can refine on the fly.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.28.0: Control the Minecraft join message from Discord</summary>

The in-game notice players see when they join your Minecraft server — the one telling them
chat is bridged to Discord — can now be **edited and toggled straight from the `/mcdc`
wizard**, instead of editing the plugin's config file on the server.

- **Reword it or turn it off.** In the `/mcdc` wizard there's a **Join notice** toggle and an
  **✏️ Join text** editor. Change the wording, or switch the notice off entirely — your call.
- **Applies itself.** Your change reaches the server automatically within about a minute — no
  restart, no config file editing.
- **On by default.** New and existing servers keep the notice on unless you turn it off; if
  you do disable it, remember your players won't be told in-game that chat is bridged.

Needs the companion plugin **v0.2.3** (it updates itself if auto-update is on).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.27.0: Just ask SA to change a setting</summary>

Ask Server Assistant in chat to turn something on or off — like level-up announcements or
the Minecraft reaction relay — and it will make the change for you, not just point you to
where it lives.

- **Ask, confirm, done.** Say something like "turn off level-up messages" or "enable the
  Minecraft reaction relay" and SA shows a quick **Confirm / Cancel** prompt. Confirm and it
  flips the setting there and then — no digging through menus.
- **Safe toggles only, admins only.** This covers a curated set of everyday on/off switches
  (level-up announcements, the Minecraft-bridge toggles, emote and meme commands, notification
  and logging options). Security, privacy and verification settings are **not** included — SA
  politely declines those. Only staff with **Manage Server** can make a change, and every
  change is confirmed, logged and reversible.
- **Fewer one-time setup notices.** SA no longer posts a "New: …" note to your staff chat when
  a feature is added, so your staff channel stays quieter.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.26.0: Level-up messages now off by default on new servers</summary>

Newly-added servers now start with **level-up messages switched off**, so Server Assistant
won't post them until you decide you want them.

- **New servers start quiet.** When you add Server Assistant to a server, level-up messages
  begin **off**. Servers you already have are **unchanged** — nothing switches on or off for them.
- **Flip it whenever you like.** Turn level-up messages on or off any time in **`/leveling`** or
  the dashboard's **"Level-up messages"** setting.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.25.0: Discord reactions show up in Minecraft</summary>

React to a message in your bridged Discord channel and everyone in-game sees it too, so a
quick 👍 or 😂 carries across the bridge instead of getting lost.

- **Reactions cross the bridge.** When someone reacts to a message in the linked Discord
  channel, it appears in Minecraft, for example `Alice reacted 👍 to Bob: "gg"`.
- **On by default, and easy to turn off.** Reactions are a **toggle** in the `/mcdc` wizard,
  on out of the box, so switch them off there any time you'd rather keep in-game chat quieter.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.24.0: Set up the Minecraft bridge in one command</summary>

Setting up and tuning the **Minecraft ↔ Discord bridge** is now a single guided wizard,
so there are no subcommands to remember.

- **One command, one wizard.** Run **`/mcdc`** (or open it from **`/settings → Minecraft`**)
  and everything happens in one panel: pick a channel to bridge, or let Server Assistant
  **create one for you**. When you link, it hands you the paste-ready plugin config and the
  download link, once.
- **One-click toggles once you're linked.** Turn server events (joins, leaves, deaths,
  advancements, start/stop), the live topic online-count, and live translation on or off
  from the wizard, rotate your token, or unlink, all in a couple of taps.
- **Chat filtering is now optional.** Masking bridged chat against your AutoMod word list is
  a toggle in the wizard, on by default, that you can switch off to relay chat exactly as
  typed.
- **It won't clash with your other channels.** The wizard won't let you bridge a channel
  that's already your reception/verification, staff-chat, or mod-log channel.

The subcommands (`/mcdc link`, `/mcdc status`, `/mcdc translate`, `/mcdc unlink`) are gone,
folded into the wizard. `/online` is unchanged.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.23.0: Bridge your Minecraft server to Discord</summary>

Link one Discord channel to your Minecraft (Paper/Spigot) server with a small free
plugin, and your in-game and Discord chat become one conversation.

- **Two-way chat with real player identity.** In-game chat lands in your Discord channel
  as the player, their Minecraft name and skin-face avatar, and anything typed in that
  Discord channel shows up in-game. Server events, joins, leaves, deaths, advancements,
  and server start/stop, can be relayed too, each toggleable.
- **Optional AI translation, both ways.** Turn on one target language and everyone reads
  a single conversation, in-game and in Discord, with messages translated live. It is off
  by default, and text already in your chosen language is left untouched.
- **See who's on at a glance.** `/online` lists the players currently in-game, and the
  linked channel's topic keeps a live count, for example "🟢 7/40 online".
- **Set it up with one command.** Run `/mcdc link`, drop the free companion plugin into
  your server's `plugins/` folder, paste in the two lines it gives you, and restart.
  Manage it any time with `/mcdc status`, `/mcdc translate`, and `/mcdc unlink`.
- **Privacy stays front and centre.** No server passwords or remote-console access ever
  leave your machine. Chat and player names are relayed in transit and **not stored**, and
  the plugin posts an in-game notice so players know chat is bridged. There's no
  Discord-to-Minecraft account linking in this first version.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.22.0: A weekly Pulse in your staff chat</summary>

Server Assistant now drops a short weekly summary straight into your staff chat, so you can
see how the week went without opening the portal.

- **Weekly Pulse to your staff chat.** Once a week you get a single digest: server activity
  (messages, active voice time, members), a mod-team recap, reception stats, and a **ThreatNet**
  section — scam images blocked, spam bots caught, and auto-protect bans on your server that
  week, plus the network-wide "flagged actors / scam images blocked" totals. It is **on by
  default**; turn it on or off under **/settings → Notifications**.
- **The old "Auto-pilot weekly report" is gone.** The weekly Pulse replaces it — same idea, more
  useful, and with a real on/off switch (the old report couldn't actually be turned off).
- Pulse is still always live in your web portal, and each staffer can still opt into their own
  Pulse DMs.

</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.21.0: A tidier Settings panel</summary>

Everything in /settings now happens inside one panel. No more popups appearing over the top
of it.

- **One panel, no popups.** Opening a section, saving a change, or hitting a limit no longer
  opens a separate popup message. The settings panel updates in place and shows a short status
  line right where you are looking.
- **A Back button everywhere.** Every menu and built-in tool (AutoMod, Onboarding, verification,
  backups, and the rest) now has a Back button, so you can move around Settings without losing
  your place.

</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.20.0: A wider welcome banner you can refresh</summary>

The Reception welcome banner is now a proper wide landscape image, and every server, free
included, can regenerate it whenever they like.

- **Landscape, not square.** The auto-created welcome banner now renders as a wide banner that
  fits the top of your reception channel properly.
- **Regenerate any time, free.** Not happy with the first banner? Open Settings, Reception, and
  use the Banner button to have Server Assistant paint a fresh one from its read of your
  community. It is free and does not use any of your AI allowance. (Premium can still supply a
  custom prompt for a bespoke banner.)

</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v6.19.3: A quieter log channel</summary>

Your log channel no longer fills up with a line every time Server Assistant sends a member a
direct message (verification notes, AutoMod warnings, and the like). These "sent a DM" notices
are now off by default.

- **Off by default, on when you want it.** Turn the notices back on any time under
  Settings, Behavior, "Log 'sent a DM' notices" in the web portal.
- **Nothing stops being recorded.** These were only ever a convenience line in your Discord
  log channel. Your full activity history in the operator portal is unchanged and still tracks
  everything.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.19.1: A one-tap fix when Onboarding fights your gate</summary>

When you turn on Reception, if your server's Discord Onboarding could hand out the verified
role on its own (which would let people skip the gate), Server Assistant now offers to fix it
right there in setup instead of just warning you.

- **Fix it in one tap.** If Onboarding would auto-grant your verified role, setup now shows
  two buttons: let Server Assistant remove that role from Onboarding for you, or create a
  fresh verified role that Onboarding does not touch.
- **No more hunting through settings.** The old warning told you to dig through Server
  Settings yourself; now it is handled in place, in the same setup screen, so there are not
  two things competing for your attention.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.19.0: A warmer Reception, now free for every server</summary>

**Reception now greets every server with its own banner, keeps itself in shape, and stays
clear for new arrivals.** The welcome desk has four upgrades this release, and its signature
banner is now free on every plan.

- **A free Reception banner for every server.** Every server now gets its own custom
  welcome-desk banner, created once automatically from Server Assistant's read of your
  community. It used to be a Premium-only touch; now it's free for all.
- **A self-healing honeypot.** The Reception channel stays locked as a spam trap. If its
  settings ever drift, Server Assistant restores them on its own, so the trap keeps working.
- **Stray posts are tidied away.** Reception is for new-member verification only, so if
  someone posts there, Server Assistant removes the message and lets them know why. (On
  Premium, that becomes a concierge hand-off instead, see below.)
- **A Premium SAi concierge in Reception.** On Premium servers, a member who reaches out in
  Reception is moved into their own private ticket where SAi helps them one-to-one, keeping
  Reception clear for the next new arrival.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.18.0: Reception, set up from anywhere and it just works</summary>

**Reception now sets up from the web portal too, and holds the gate more tightly.**
The portal's setup wizard has gained the same **Welcome desk** step as `/setup`, so you
can stand Reception up in a browser, not just in Discord.

- **Set up Reception from the portal.** The web setup wizard now has a Welcome desk step:
  pick or create your **verified role**, write a free **greeting**, and switch Reception
  on, all without leaving the portal.
- **#reception sits at the top.** When Reception creates your **#reception** channel, it
  now pins it to the **top of your channel list**, so new members see it first.
- **The gate actually holds.** Reception now checks that nothing else is quietly handing
  out your **verified role** (Discord Onboarding, another bot, and the like) and warns you
  if it finds one. And if an unverified member is given the role some other way, Reception
  takes it back until they've passed the desk, so the gate can't be side-stepped.
- **Finishing setup links you to your portal**, so your dashboard is one tap away.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.17.0: Set up your Welcome desk right in /setup</summary>

**Reception now has a home in setup.** `/setup` has a new **Welcome desk** step, so you can
stand up your Reception welcome desk as part of getting started, with no separate trip to
`/settings`.

- **Pick or create your verified role.** Choose an existing role for verified members, or create
  a fresh **Verified** role in one tap.
- **Turn Reception on, live.** Left on (it's recommended, on by default, and skippable), the step
  goes to work right away: it creates your branded **reception** channel, pins the greeting, and
  sets the verification gate to intelligent.
- **Free to make it yours.** Write your own **greeting** right in the step, at no cost. Deeper
  branding, a named receptionist persona, a banner image, and the concierge, stays on **Premium**
  in `/settings`.

The wizard now runs Channels, Roles, Welcome desk, then Moderation & AI.

</details>

<details class="doc-sec" markdown="1" data-kind="update">
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

<details class="doc-sec" markdown="1" open data-kind="fix">
<summary>v1.3: A simpler leveling toggle</summary>
- **One "Level-up messages" switch.** The portal's leveling section now has a single **Level-up messages** on/off toggle in place of the old, confusing pair. Turn it off and the celebratory level-up messages stop; members still earn XP exactly as before, they just do it quietly.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v1.2: Crestbound joins the portal</summary>
- **XP Games on the portal.** The portal home now has an **XP Games** section, with **[Crestbound]({{ '/wiki/crestbound/' | relative_url }})**, the Crest-collecting game, as its first entry. Open it to jump straight into your collection.
- **My Collection.** A new view shows every Crest in the current Chapter: the ones you've found in full and the ones you haven't as placeholders, plus your spendable XP and a collection counter at the top.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v1.1: Always up to date</summary>
- **Automatic updates.** The portal now refreshes itself in the background, so you always see the latest version without needing to hard-reload the page.
- **Wiki link in the footer.** A link to the [Server Assistant Wiki]({{ '/wiki/' | relative_url }}) now sits in the portal footer, so the full feature and command reference is always one tap away.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v1.0: The customer portal launches</summary>
- **Sign in with Discord.** The customer portal launched as a web dashboard you reach by signing in with your Discord account, a home for the parts of Server Assistant that live on the web rather than in chat.
</details>

</div><!-- /cl-portal -->

<div class="cl-panel" id="cl-crestbound" role="tabpanel" aria-labelledby="tab-crestbound" markdown="1" hidden>

<p class="cl-intro">What's new in <strong>Crestbound</strong>: the Crest-collecting game in the portal, powered by the XP you earn in Discord.</p>

<details class="doc-sec" markdown="1" open data-kind="feature" id="v1.5">
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

<details class="doc-sec superseded" markdown="1" data-kind="feature">
<summary>Coming soon: Wardecks & battles<a class="cl-super" href="{{ '/changelog/' | relative_url }}#v1.5">Superseded by v1.5</a></summary>
- **Battle mode has since arrived.** Assemble a **Wardeck** — a 30-Crest battle group drawn from your collection — and put it to the test with `/duel`. See the v1.5 entry above.
- **Server Wars, on the far horizon.** A community-versus-community season: your Discord server is your banner, your members' duels bank points for it, and fleet-wide standings crown a champion server each season. Cosmetic glory only, no server or member ever gains a gameplay advantage. Parked until enough communities are battling; watch this page.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v0.5: Make it yours: Card Backs</summary>
- **Card Backs arrive.** The Shop now has a cosmetics shelf: pick the free **Banked Ember**, one of five **faction backs** (300 XP each), or the prestige **Vault Gilt** (150 Cinders, the same quest currency that unlocks the Ember Vault). Your equipped back is shown everywhere a Crest sits face-down, collection placeholders and deck faces. Purely cosmetic: no card back ever changes how the game plays.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v0.4: A fullscreen home and the Shop</summary>
- **Crestbound goes fullscreen.** The game now opens into its own full-screen home: a main menu of illustrated panels, your Collection, the Shop, and the battle features as they arrive, with your XP balance always in view at the top.
- **A proper Shop.** Packs have moved out of the collection page into a dedicated **Shop**: pick one of the five **faction packs** (5 Crests from a single faction, no Mythics there), open the classic **Chapter Booster**, or eye up the **Ember Vault**, a premium pack of guaranteed rares crowned by a Mythic, opened with **Cinders**, a currency earned from quests. Your collection keeps a shortcut straight to the Shop.
- **Hand-illustrated everywhere.** The home screen, its menu panels and every pack in the Shop now carry rich HD artwork in the same style as the Crests themselves, each piece fades in as it's ready.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v0.3: Tidy your collection: burn spare Crests</summary>
- **Burn spare Crests for XP.** Got duplicates? You can now **burn** a spare Crest to recover some XP, common **5**, uncommon **12**, rare **30**, mythic **75**, and spend it on more packs. There's a confirmation every time, with an extra warning if you're about to burn your only copy of a Crest.
</details>

<details class="doc-sec" markdown="1" data-kind="update">
<summary>v0.2: A more polished collection</summary>
- **Rarest first.** Your collection now sorts with the most prized Crests at the top, mythic, then rare, then uncommon, then common, so the headline pieces are always front and centre.
- **Reveal animations.** Opening a booster pack now plays a short reveal, with the Crests turning over one by one, and rare and mythic Crests catch the light with a subtle sheen.
- **Collection counter.** My Collection now shows how many Crests of the Chapter you've found at a glance.
</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v0.1: Crestbound launches</summary>
- **The game arrives.** Crestbound launched in the portal with its first Chapter, **"Chapter I: Embers of the First War"**: a sweeping cast of **450 Crests** to collect across four rarities: common, uncommon, rare and mythic.
- **Booster packs.** Spend **200 XP** to open a booster pack of **5 Crests**, with the last Crest in every pack **guaranteed to be rare or better**.
- **My Collection.** Every Crest in the Chapter shown in one place, the ones you own in full, the ones still out there as placeholders, so you can always see what's left to find.
- **Powered by your XP.** Crestbound runs on the same account-wide XP you earn from chatting, voice time, and from voting for Server Assistant, no separate purchase, no Premium required.
</details>

</div><!-- /cl-crestbound -->

<div class="cl-panel" id="cl-mcdc" role="tabpanel" aria-labelledby="tab-mcdc" markdown="1" hidden>

<p class="cl-intro">What's new in the <strong>Minecraft ↔ Discord bridge (MCDC)</strong>: the bot side that links a Discord channel to your Minecraft server, and the free companion plugin that runs on the server. The <strong>plugin</strong> has its own version (currently <strong>v0.18.0</strong>); most bridge improvements are made on Server Assistant's side and need <strong>no plugin update</strong>.</p>

<details class="doc-sec" markdown="1" open data-kind="fix">
<summary>v6.91.0 &amp; v6.92.0: @sai finds the actual numbers on a wiki page</summary>

Asked "how far can copper golems detect chests", @sai said they don't detect chests from a
distance — while reading the page that says they search a **65×17×65 area**. It had the right
page and was picking the wrong paragraphs out of it.

**Questions asking for a figure now prefer the paragraphs that contain one.** A measurement
like "65×17×65" outranks an unrelated number like "3 seconds", "how far" matches the words a
wiki actually uses (area, radius, within, centered), and those questions get more of the page
to work with.

**And @sai now uses the page's own contents list.** A wiki page's sections — "Behavior",
"Chest interactions and item transportation" — are labelled by a person to say what each part
covers, which beats guessing from the wording of your question. So when you ask "how far can
they detect chests" and the page says "search … in a cubic area", the section heading connects
the two. No extra lookups, so it's no slower.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.90.0: @sai reads the part of the page that answers you</summary>

@sai was only reading each wiki page's **opening summary**. Asked "how far can copper golems
detect chests" it found the right page and had to admit the detail wasn't in what it read —
because the detection range is further down the page, under behaviour, not in the intro.

**It now picks out the paragraphs that match your question.** Ranges, durations, drop
chances, spawn conditions — the specifics that live in the middle of an article — actually
reach the answer now. The page's opening definition is always kept as well, so a figure
arrives with the context that makes sense of it.

**Only when it needs to.** A question the summary already answers behaves exactly as before
and is just as quick. And if the deeper read fails for any reason, @sai falls back to precisely
what it did previously.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.89.0: @sai searches properly now — and finds the right page</summary>

**@sai now uses a real search engine to find the right wiki page.** The wiki's own search
was the weak link: asked "how far can copper golems detect chests" it never returned the
Copper Golem page at all — so @sai had nothing useful to read and fell back to guessing.

**The answer still comes from the Minecraft wiki.** The search engine only decides *which
page* to read, and it's restricted to minecraft.wiki, so the source is unchanged — it's just
far better at finding the right article from a normal question.

**It only searches when it needs to.** If the wiki's own search already found the right page,
nothing extra happens. The search engine is there for the questions that were previously
failing, which also keeps it well within its free allowance.

If the search is ever unavailable, @sai simply falls back to what it did before — nothing
gets worse.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.88.0: @sai's in-game replies finish their sentences</summary>

Asked "what's the thing that sorts my items", @sai gave a long answer that ran past its first
sentence into a second thought and ended in a "…". Replies should end properly.

**@sai now aims much shorter** — one or two complete sentences — and is told plainly that
finishing its sentence matters more than saying everything, so it answers the question and
stops instead of listing every alternative.

**And when a reply does have to be shortened, it now ends properly.** Previously, cutting at
the end of a sentence *removed the full stop and put a "…" in its place* — so an answer that
had finished cleanly still looked cut off. A shortened reply now keeps its full stop, and the
"…" only appears when something genuinely was cut mid-sentence.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.87.0: a guessed wiki page is no longer remembered for a day</summary>

When @sai looks something up, it remembers which wiki page it used so the next player asking
the same thing gets an instant answer. That was sensible for a page it had **confirmed** —
but it was doing the same for a page it had only **guessed** at, and holding onto a guess for
a whole day meant one wrong lookup kept being wrong all day, on every server that asked the
same way.

**A guess is now forgotten within minutes**, so it gets another go. A confirmed page is still
remembered for a day, because wiki articles don't change that fast.

**And there's now a way to clear it deliberately.** If @sai ever cites a page that's plainly
wrong, switching the wiki lookup off and back on wipes everything it remembered — you no
longer have to wait it out.

To be clear about what was never remembered: **@sai's actual answer**. Only which page it
read. Every player gets a fresh reply.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v0.18.0: the <code>[wiki]</code> source on an @sai answer is now clickable in game</summary>

@sai's in-game answers end with a `[wiki]` citation naming the page the answer came from.
Until now that was **text only** — Minecraft chat has no links, so there was nothing to
click.

**Now `[wiki]` is a real link.** Click it and the wiki page opens in your browser. Hover it
and you get the page name and the full address, so you can still read or copy it without
the long URL cluttering chat.

Requires **plugin v0.18.0** — run `/mcdc update` in game, or wait for the automatic update.
Until your server updates, the citation still appears as plain text exactly as before, so
nothing is lost by updating late.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.85.0: @sai no longer denies that new mobs exist</summary>

Reported in game: *"how far can copper golems detect chests?"* → @sai replied that copper
golems "were a mob vote concept that didn't make it into the game", on a server running a
version that has them.

Three things were wrong and all three are fixed:

- **@sai treated its own training data as the last word on what exists.** It now assumes
  anything a player names by name **is** in the game and was added after its cutoff — it says
  it isn't familiar with it yet rather than denying it.
- **The wiki lookup was serving changelog pages.** *"Bedrock Edition Preview 1.21.110.24"*
  slipped past the filter that exists to block exactly that. Preview, snapshot, beta and
  release-candidate pages are all excluded now.
- **Plurals missed the right article.** "copper golems" didn't match the **Copper Golem**
  page, so a changelog outranked it. Plural questions now find the singular article.

Plus: when the lookup isn't confident it found the right page, @sai keeps its "may have
changed" caution and shows no source link — and the `[wiki]` link itself is now short (the
page name in game, a compact clickable **[wiki]** in Discord).

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.84.0: @sai cites the wiki page behind each in-game answer</summary>

**In-game answers now end with `[wiki]` and a link** to the minecraft.wiki page @sai read.
Ask "how do I tame a nautilus" and the reply points at the Nautilus article, so a player
can go and read the detail a single chat line can't hold.

It also makes a wrong answer visible. @sai picks the best of several wiki search results
and can occasionally pick the wrong page; until now that just looked like a slightly odd
answer. Now the source is right there in the line.

In **Discord** the link is clickable, without a big preview card under every bridged
answer. **In game** it prints as readable text — Minecraft chat won't open it for you.
Refusals and error notices are never given a source link; only real advice is.

Uses the same wiki-lookup switch, so turning the lookup off removes the citations too.
**No plugin update needed** — this is a Server Assistant-side change.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.83.1: @sai now finds the right wiki page for your question</summary>

v6.82.0 taught @sai to read the Minecraft wiki before answering in-game questions. It
turned out it couldn't reach the wiki at all — and once that was fixed, it was looking up
the *wrong page*.

Asked "what does a nautilus eat", it was searching that whole sentence, and the wiki
answered with a **version changelog page** rather than the article about nautilus. @sai
read that page, found nothing about nautilus in it, and fell back to guessing — which
looked exactly like the original problem.

**It now searches for what you're actually asking about.** The question wording is
stripped down to the thing itself — "how do I craft a hopper" becomes "hopper" — plurals
are matched to the singular article name, and version/snapshot pages are skipped since
they never answer a gameplay question. If one of the results is the thing you named, that
page wins.

Tested against the live wiki across common questions — nautilus, hopper, beacon, creeper,
axolotl, diamond, nether portal, netherite — all now find the right article.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v0.17.0: the bridge now reports who's AFK, so idle players stop earning XP</summary>

Server Assistant pays XP per minute of Minecraft playtime, and it had no way to tell
playing apart from *being logged in*. An AFK pool earned as much as a player actually
online and doing things.

**The plugin now tracks activity and reports idle players to Server Assistant**, which
withholds playtime XP from them until they do something. The plugin only reports the
fact — the bot decides what it means — so the two halves can update independently.

**A player counts as active** when they change block position, break or place a block,
interact, click an inventory, chat, or run a command. Turning your head or drifting in an
AFK pool is deliberately *not* activity, since that's exactly the case this addresses.

**`afk-minutes` in your config sets the threshold** (default 5, range 1–120). Raise it if
your server has slow legitimate activities or AFK farms you want to keep rewarding.

**Performance was the main design constraint.** Movement fires up to 20 times a second per
player, so the check compares block coordinates rather than exact positions and does no
work at all when a player hasn't moved between blocks.

**Nothing else changes** — no kicks, no interruptions, no messages to your players. Only
XP pauses, and it resumes the moment they move.

**Pairs with bot v6.83.0.** An older bot ignores the new flag; an older plugin doesn't send
it and the bot treats everyone as active. Either way playtime XP keeps working.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.82.0: @sai looks the answer up on the Minecraft wiki instead of remembering it</summary>

v6.81.0 stopped @sai giving confident answers about an old version of Minecraft. That fixed
the *wrong* answer — it didn't produce a *right* one. A player asking "how do I tame a
nautilus" in game went from a confidently wrong reply to an honestly unsure one, which is
better and still no help to them.

**@sai now reads the Minecraft wiki before answering an in-game question.** It looks up the
page for what was asked and answers from that, treating the wiki as more reliable than its
own training data. Ask about nautilus now and it tells you they can be tamed, saddled and
ridden as an underwater mount.

Because it has actually checked, it drops the "this may have changed in your version"
caveat when the wiki answered the question.

**It stays fast and fails gracefully.** The lookup is a single request, and answers are
remembered for a day, so a question your players ask repeatedly is only fetched once. If
the wiki is slow or has no page for what was asked, @sai falls back to the careful hedged
answer from v6.81.0 rather than leaving anyone waiting.

**You can turn it off** if you'd rather @sai never make an outside lookup. On is the default.

**No plugin update needed** — this is entirely on Server Assistant's side.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.81.0: @sai no longer gives confident answers about an old version of Minecraft</summary>

**The problem.** A player asked @sai in game how to tame a nautilus and got back "you can't
tame a nautilus — nautilus shells are items you find, not living mobs." On that server's
version of Minecraft, you can. The answer was wrong, stated with total confidence, in front
of everyone in chat.

**Why it happened.** @sai's general Minecraft knowledge comes from training data, which has
a cutoff date. Your server doesn't. Minecraft changes mobs, items and mechanics with every
release, so an answer that was right when the assistant was trained quietly goes wrong the
moment your server updates past that point — and the assistant has no way to know it has.

**What's changed.** Your Minecraft server already tells Server Assistant which version it's
running, on every check-in. @sai is now given that version, and told its own knowledge may
be older. It's also no longer allowed to flatly tell a player something is impossible —
"you can't do that", "that isn't in the game" — from memory alone.

Ask it about something it thinks isn't possible and it will now tell you what it knows, say
it may have changed in the version you're running, and point you at your staff or the
in-game recipe book.

**It hasn't become vague.** Crafting recipes, redstone, mob behaviour and command questions
are answered as directly as before. The new caution applies only to claims about whether
something *exists* or is *possible* — the questions where a Minecraft update actually
changes the answer.

**No plugin update needed** — this is entirely on Server Assistant's side.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.79.0: @sai's answers now reach Minecraft, and answer to your own name</summary>

**Answers from Discord now cross into the game.** When someone asked @sai a question in
the bridged channel, your players saw the *question* mirror into Minecraft and then
nothing — the answer stopped at Discord. It now follows across, posted under your
assistant's own name.

**Your assistant answers to its own name in game.** Renamed it in **@sai Studio**?
Players can now use `@YourName` in Minecraft chat. `@sai`, `!sai` and `!ai` still work,
so existing habits and anything you've written in your server rules stay valid.

Worth knowing: naming your assistant a common word means `@that word` starts summoning
it in chat.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.77.0: staff get told when their rank is waiting on an account link</summary>

Rank sync only applies to players who've **linked** their Minecraft and Discord
accounts. Until now, giving someone a synced role while they were unlinked did nothing
visible — the rank never arrived and nothing explained why.

Now they get a DM naming the rank waiting for them, plus the two steps: `/link` in
Discord, then `!link <code>` in game. DMs closed? We tell your **staff chat** instead
and mention them.

**Worth knowing about ordering.** Assign the Discord role *before* someone links. A
player who links while holding no matching Discord role is treated as having no rank,
and the mirror will remove the one they had in game — that's the mirror working
correctly, but it surprises people.

**Also fixed:** `/link` and `/unlink` sometimes failed with an "Unknown interaction"
error when the server was busy. Both now respond straight away.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.76.1: @sai no longer refuses your leaderboard page</summary>

The check that stops `@sai` reading pages anyone can post to was too blunt — it turned down
ordinary pages whose names merely *contain* one of the words it watches for.

**`/leaderboard` was refused**, because "board" ends the word, while `/leaderboards` was
accepted, because the plural breaks the match. `/scoreboard`, `/dashboard` and
`/postal-address` were turned down the same way.

Those pages work now. The wall is otherwise unchanged: forums, wikis, comment threads,
boards and user profiles are still refused, with no override. If a page you trust is still
turned down, give `@sai` a different one — that remains the intended answer.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.76.0: @sai can answer from your server's website</summary>

Most of what players ask `@sai` in-game — how do I rank up, what's on the store, when's the
next event — is already written down on your server's website. `@sai` can now read that page
and answer from it, instead of you copying it all into the knowledge pack by hand.

Open `/mcdc` → **🤖 @sai Studio** → **🌐 Website** and paste your server's address. From then
on `@sai` answers players from that page, and hands out the address when the address is what
they wanted. It re-reads about once a day; **🔄 Refresh now** picks up a change immediately.

The panel reports what it actually read — the character count, the page title and the
sections it found — so you can confirm `@sai` learned the right thing.

- **Premium, opt-in, off by default.** No existing server has been opted in.
- **One page only** — the address you give. `@sai` will never follow a web address a player
  types into a question.
- **Pages anyone can post to are refused**, with an explanation and no override: a forum,
  wiki, comment thread, board or user profile is somewhere a stranger could write what `@sai`
  tells your players. It errs towards refusing, so if a page you trust is turned down, give
  it a different one.
- **`robots.txt` is honoured.**
- **Only the extracted text is kept** — never the page — overwritten each re-read and deleted
  when you switch it off, change the address, or remove the bot.

This is a **Server Assistant-side change — no plugin update is needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.75.0: @sai Studio changes now appear in your audit log</summary>

**@sai Studio** — `/mcdc` → **@sai Studio** — is where you decide what the in-game assistant
is: who's allowed to talk to it, how it sounds, what it's called, and what it knows about
your server. Until now, changing any of that left no trace. A knowledge pack could be
rewritten, or `@sai` opened up from staff to everyone, and there was nothing afterwards to
say who did it.

**Every one of those changes is now written to your audit log**, alongside your kicks, bans
and AutoMod actions:

- **Who may ask `@sai`** — staff only, or everyone.
- **The reply tone**, and the assistant's **name and greeting**.
- **Your server knowledge pack** — the rules, the how-to-play, the answers it gives out.
- **Both SAi Companion switches** — the companion itself, and whether new players get one
  automatically.
- **The Ask @sai on/off button** on the bridge wizard's main page.

**Entries record the change, not the content.** A switch reads `companion: off → on`; an
access change reads `access: staff → everyone`. **Anything you wrote yourself is recorded
only by its shape** — the knowledge pack, the assistant's identity and greeting. The log
will say `knowledge updated (412 → 980 chars)`, never a word of what it says. So you can see
that your in-game rules were rewritten, and by whom, without a copy of your text living in
a second place.

**Opening the Studio and closing it again writes nothing.** Only real changes are recorded.

**The Discord-side assistant is covered in the same release** — the AI mode, provider and
model, the image-generation provider, and the Reception persona and greeting. See the **SA
Bot** tab.

**Nothing to turn on, and no plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.74.0 + Plugin v0.16.0: Reach your customer portal from in-game</summary>

Players had no way to get to the Server Assistant **customer portal** from inside Minecraft —
they had to go and find the address somewhere else. Two ways now, and they work for everyone
on the server.

- **`/saportal`** — type it in chat and the plugin prints a **clickable** link to the portal.
  Click it and your launcher opens it in your browser.
- **Ask the assistant.** On servers with the assistant switched on, asking `@sai` where the
  portal or website is now gets the same link back in chat.

**No permission, no rank, no linked Discord account.** `/saportal` is available to every
player who can type in chat — the portal is a public web address, so there is nothing to
gate. You don't need to have run `/link` to use it. Both routes give out the address only;
the portal page itself carries the Privacy and Terms links in its footer.

The command also answers to the shorter **`/portal`**. If your server already runs a warp or
teleport plugin that claims `/portal`, that plugin keeps it — **`/saportal` always works.**

**This one needs a plugin update to v0.16.0.** Servers with auto-update on will pick it up
by themselves; otherwise run `/mcdc update` in-game, or download the new jar from the
[Minecraft wiki page]({{ '/wiki/minecraft/' | relative_url }}).

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.73.0: Minecraft chat flags now expire — the auto-close safety net actually runs</summary>

When AutoMod flags a message in bridged Minecraft chat, it lands in the portal's **Needs
input** list waiting for a staff decision. v6.72.0 added a safety net for items nobody ever
acts on: warn your staff, give them a day, then close the item. **It wasn't doing
anything** — flags were never given a closing date in the first place, so nothing ever
reached the warning stage. This release gives them one, so that safety net now genuinely
works.

**Minecraft chat flags close after about two weeks** — the same as Discord-side AutoMod
reviews, and deliberately shorter than the roughly one month given to ban appeals, raid
alerts and verification items. Chat flags carry an extract of the flagged message, so they
shouldn't sit around. (Owner approvals still have no closing date and wait until answered.)

Then the behaviour is as v6.72.0 described: **a warning first** — a notice in the portal, a
push notification and a DM to the staff who can act — then **24 hours** to act on the flag
or dismiss it, and only then does it close itself. Closing records that nobody acted; it is
not a decision either way. The record is cleared **90 days** after closing.

**One thing you will now start to see:** once a flag is past its date, it also drops off the
portal's **Needs input** list. That isn't new — it is how the list has always worked — but
since nothing ever reached a date before, nobody had seen it happen. It doesn't skip
anything: the flag is still warned about, still gets its full 24 hours to be acted on or
dismissed, and is **not deleted** at that point.

**Flags raised before this update don't have a closing date**, so they aren't affected —
they stay in your queue as they are.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.71.0: Flagged Minecraft messages are no longer kept in the activity log</summary>

This is a privacy fix, and it is worth being plain about it.

Our privacy policy says the **moderation-actions log does not store message content**. For
AutoMod flags raised on **bridged Minecraft chat**, that wasn't true: a short extract of the
flagged message was being written into the durable record — the same record you can read and
**search** in the portal activity log. Two paths did it: the automatic flag itself, and the
reason pre-filled for your staff when they kicked or banned a player straight from the flag
card.

The durable record now keeps **who** and **which filter matched** — and no longer the
message text.

**What has _not_ changed** — your moderators lose nothing they need to judge a message:

- **The staff alert in Discord still quotes the message in full.** Your moderators still see
  exactly what was said in chat, in full, before they decide anything.
- **The server log channel embed still shows the full reason.**
- **The kick or ban message the player sees in-game is unchanged.**
- **Discord-side moderation is entirely unaffected.**

Only the durable, searchable activity record is redacted — bringing it into line with what
the privacy policy already promised.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.70.0: The assistant no longer fills gaps with guesses</summary>

A player asking the assistant in-game *"what are the rules on this server?"* — on a server
with no rules configured — used to get an answer anyway. It would say staff set those up,
suggest checking "a rules channel **if there is one**", and add that they "**might have
also** set up a `/rules` command **or something similar**". None of that was known to be
true; it was plausible-sounding filler, and it sent players looking for things that may not
exist.

It now **never names a command, channel, role, rank or feature it hasn't been told exists.**
When it doesn't know something, it says so in one short sentence and points at the one thing
that is always true — **ask the server's staff** — instead of padding the answer with
guesses.

This applies everywhere it answers: **in-game**, **in Discord**, the **welcome assistant**,
and **`/faq`**.

**It still answers plainly what it does know.** If your server's knowledge pack says "no
griefing", it says "no griefing". The change targets invention, not confidence — a
well-filled-in server gets the same direct answers as before.

**A tip for operators:** fill in your server knowledge pack — `/mcdc` → **@sai Studio** —
and the assistant can answer these questions properly instead of pointing players at staff.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.69.0: /online rebuilt — who's on the game server, answered truthfully and instantly</summary>

**`/online`**, run in your linked Minecraft channel, shows who's on the game server right
now. It already existed, but it was thin — and it could tell you things that weren't true.
This release rebuilds it.

- **A stopped server used to show as online.** With the server down, `/online` kept
  reporting the last thing the bridge had heard, listing whoever was playing at that
  moment. It now recognises that the information has gone stale, says the server
  **appears to be offline**, and **withholds the old player list** instead of showing a
  roster that isn't really there.
- **A connection problem used to read as "no Minecraft server linked"** — confusing, when
  one plainly was. Trouble reaching your server is now reported as exactly that.
- **Long player lists no longer cut a name in half.** Busy servers get a tidy
  **"+N more"**.
- **Replies are instant.** It reads the presence information the bridge already refreshes
  about once a minute, rather than asking your server again on every use — so running it
  repeatedly is immediate.
- **The same health marker as your channel topic** — 🟢 / 🟡 (running slow) / 🔴
  (offline) — so the command and the topic can never disagree.
- **It tells you when the list was last refreshed**, so a minute-old list is never
  mistaken for live truth.
- **Wrong channel? It points you at the right one.** And in a server with no Minecraft
  link at all, it tells you how to set one up.

**It shows Minecraft names only — never which Discord account a player is linked to**,
even for players who have linked one. Answers are visible only to the person who ran the
command, so it never clutters your chat channel.

**No plugin update needed.**

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.66.0: Set up rank sync in /mcdc — map a Discord role to an in-game rank</summary>

The plugin brought rank sync to your server; this release brings you the **controls**.
Everything is set up in Discord, in `/mcdc` → **🏅 Rank sync**.

- **Map a role to a rank.** Pick the Discord role, name the in-game rank it should
  grant (your LuckPerms group), and flip the master switch on. When someone's Discord
  role changes, their in-game rank follows **within about a minute**.
- **Several roles? Highest one wins.** A member holding more than one mapped role gets
  the rank of their **highest-positioned Discord role** — your Discord hierarchy is
  your in-game hierarchy.
- **It only mirrors — it never takes instructions.** Nothing a player types, in
  Discord or in Minecraft or to the assistant, can *request* a rank change. Ranks only
  ever change because an authorised staff member changed a Discord role, or edited
  LuckPerms directly.
- **Some roles are protected, and SA tells you why.** Pick a role that shouldn't be
  mirrored and SA declines it with the reason: `@everyone`, bot- and
  integration-managed roles, roles carrying Administrator, and any role at or above
  Server Assistant's own position (your Operations / Executive Operator tier).
- **Only mapped ranks are ever touched.** Ranks you set by hand in LuckPerms, and your
  staff and admin ranks, are never modified. Anyone outside your mapping is left
  completely alone.
- **Removing a mapping demotes cleanly.** Take a pairing out and SA withdraws the rank
  it granted, instead of leaving it stranded.

Needs the **MCDC plugin v0.15.0 or newer** and LuckPerms on the game server. Off until
you turn it on. **No plugin update needed** for this release.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.15.0: Keep Minecraft ranks in step with Discord roles</summary>

Your Minecraft ranks can now **follow your Discord roles automatically**. Give someone
a role in Discord and their in-game rank updates on its own — no manual LuckPerms
edit, no waiting for a staff member to be online.

- **Map the roles you want mirrored.** In `/mcdc`, pair each Discord role with the
  in-game rank it should grant. When a linked member's Discord roles change, their
  in-game rank follows **within about a minute**.
- **It only mirrors — it never takes instructions.** There is no in-game command and
  no chat message that can *request* a rank, and asking the in-game assistant for one
  does nothing at all. Ranks are only ever changed by an authorised staff member
  acting in Discord or directly in LuckPerms; the plugin simply reflects the result.
- **Only the ranks you map can be touched.** Anything outside your mapping is off
  limits — ranks you set by hand in LuckPerms, and your **staff and admin ranks**, are
  never modified. If a player isn't in the mapping, they're left completely alone.
- **Needs LuckPerms; off until you turn it on.** Rank sync is disabled by default. On
  a server without LuckPerms it simply stays unavailable — your chat bridge is
  completely unaffected either way.

Update the plugin with `/mcdc update` in-game, or let auto-update pick it up.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.65.0: Obfuscated slurs are now masked in Discord too</summary>

A slur deliberately typed with characters between the letters was **hidden in-game**
but printed **in full** in the linked Discord channel — so the bridge undid the
masking players were protected by. Both sides now mask it identically, and only the
slur itself is replaced: the rest of the message keeps its wording and casing.

This applies wherever AutoMod is on with a slur filter pack enabled — the same
condition as the in-game masking. **No plugin update needed.**

The same release also widened the slur filter itself to cover misogyny and sexism,
transphobia, homophobia and ableism — see the **SA Bot** tab for the full note.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>Plugin v0.14.1: Summon your companion straight from your hand</summary>

The @sai companion item now works when you **right-click it in the air** — you no
longer have to aim at a block to summon your companion. (It still never spawns a
stray Allay.)

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.62.0 + Plugin v0.14.0: @sai companion polish + staff-only enforced in-game</summary>

A big polish pass on the in-game **@sai companion**, from your testing feedback.

- **A friendlier companion item.** The hotbar item is now a **glinting Allay spawn
  egg** (was a player head) — right-click it to **summon** your companion; it never
  places or spawns a stray mob.
- **He sticks close.** Your companion now prefers to **settle and stand near you**,
  only flying to catch up when you get ahead — no more constant flitting.
- **You see your own question.** When you ask @sai, your question is echoed back
  **privately to you** (still hidden from public and Discord chat) so you can see what
  you asked.
- **Smarter, never silent.** @sai now answers general Minecraft questions too, and
  always replies — even if just to say it didn't catch that.
- **Clearer linking.** Prompts now say to run **`/link` in Discord** (not in-game).
- **Staff-only is enforced in-game (security).** If @sai is restricted to staff or
  linked members, everyone else is blocked from the `/sai` command and the companion
  entirely — not just refused after asking. The companion stays **fairness-neutral**
  (no items, no combat, no advantage), and @sai still never changes roles or perms.

Needs the companion plugin at **v0.14.0** (auto-updates as usual).

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>Plugin v0.13.1: Startup log now names the auto-restart state</summary>

A small polish: the server startup log now shows whether **`/mcdc update`
auto-restart** is on, alongside auto-update — so an operator can confirm both at a
glance on boot. No change to how updates or restarts work.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.13.0: One-command plugin updates — <code>/mcdc update</code> now restarts to apply</summary>

Updating the MCDC plugin is now a **single command**. Previously `/mcdc update`
downloaded the new build but you had to restart the server yourself to load it —
now it can finish the job for you.

- **`/mcdc update` → done.** It downloads, verifies, installs, and then
  **restarts the server** to apply the new build — no second step.
- **A heads-up before it goes down.** Online players get a short (~10-second)
  in-game countdown first, so nobody's caught off guard.
- **Changed your mind?** Run **`/mcdc update cancel`** during the countdown to
  abort — the update still applies on your next manual restart.
- **You're in control.** Set `update-auto-restart: false` in the plugin config to
  keep the old "download now, restart later" behaviour. The automatic on-startup
  update check **never** restarts on its own — only the `/mcdc update` command does.

Requires your host to relaunch the server when it stops (most panels — Pterodactyl,
systemd, a restart script — do this automatically).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.61.0: 🧚 Summon your own SAi companion in-game</summary>

Players on **Premium** can now **summon a personal SAi companion** right inside
Minecraft and ask **@sai a question privately** — the answer comes back to just
that player, not the whole chat.

- **A private answer, just for you.** Ask @sai something and the reply is sent to
  you alone, so you can get help without filling up the chat.
- **The same SAi your server already set up.** It's the very same SAi — its name,
  tone and server-knowledge all carry over.
- **It still only explains, guides and reports.** The companion never changes
  settings, roles or permissions.
- **A friendly first hello (optional).** Servers can have a companion greet
  first-time players automatically.

Turn it on in `/mcdc` → **🤖 @sai Studio** → **🧚 SAi Companion**. Premium, opt-in.

Needs the companion plugin at **v0.12.0** (auto-updates as usual).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.60.0: Make the in-game @sai assistant your own</summary>

You can now **customise the @sai assistant** on your linked Minecraft server —
its name, its manner, what it knows, and who's allowed to use it — all from a new
**@sai Studio** page in the `/mcdc` wizard.

- **Give it your own name, tone and greeting.** Rename @sai, pick how it speaks
  (concise, friendly, or in-character), and write the line players see when they
  first talk to it.
- **Teach it your server.** Add a **knowledge pack** of your own details — rules,
  ranks, how to claim land, upcoming events — so @sai can answer players' "how do
  I…" questions with your real information. When something isn't in the pack, it
  says so and points players to staff rather than making an answer up.
- **Choose who can use it.** Open it to everyone, to linked members only, to staff
  only, or turn it off entirely.
- **It still only explains and guides.** @sai never changes anyone's roles or
  permissions — a request to do that is refused, exactly as before.

This is a bot-side change — **no plugin update needed**.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.59.0: Earn XP for time spent on your linked Minecraft server</summary>

You now earn XP just for **playing on your linked Minecraft server** — the same
way time in voice channels earns XP.

- **Same rate as voice XP.** Time on the server earns at the same rate as time in
  a voice channel, and your **2× events and buffs apply** to it just like everywhere
  else.
- **A fair hourly cap** keeps it balanced with the rest of the server.
- **Link your account to start earning.** Use `/link` in-game or the `/mcdc` wizard
  to connect your Minecraft account to Discord — playtime XP is credited to linked
  players only.

Needs the companion plugin at **v0.11.0** (auto-updates as usual).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.58.0: Channel topic status dot now shows server health</summary>

The status dot on the linked channel's **topic** now reflects your **server's
health** instead of the player count, so an online but empty server no longer
shows a grey dot.

- **The dot tells you how the server is doing.** 🟢 means online and healthy,
  🟡 means online but running slow, and 🔴 means offline or in trouble.
- **Empty no longer looks down.** An online server with nobody on it now correctly
  shows green instead of a grey dot.

Follows v6.57.0, which made the topic show offline when the server is down. This is
a bot-side change — **no plugin update needed**.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.57.0: Channel topic now shows offline correctly</summary>

The linked Discord channel's **topic** used to get stuck showing "🟢 online" with a
player count even after the Minecraft server had stopped. It now correctly shows
**🔴 Server offline** when the server goes down or stops responding.

- **The topic tells the truth.** When your server stops or stops responding, the channel
  topic flips to **🔴 Server offline** instead of leaving a stale online count sitting there.
- **It flips back on its own.** When the server comes back, the topic returns to the live
  player count and stats automatically — nothing to run.

This is a bot-side fix — **no plugin update needed**.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.10.0: Updates to AutoMod</summary>

Behind-the-scenes improvements and refinements to AutoMod. Needs plugin **v0.10.0**
(auto-updates as usual).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.55.0: Updates to AutoMod</summary>

Behind-the-scenes improvements and refinements to AutoMod.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.54.0: Minecraft chat flags — Dismiss + a reason prompt</summary>

The Minecraft chat-flag alert is now a proper action card, and it also shows in the
operator portal's **Needs input** list so nothing slips through.

- **Dismiss button** on every flag — and your audit log records **who** dismissed it.
- **Kick / Ban open a reason box** pre-filled from the offence (the rule + the flagged
  text) that staff can edit before confirming — the reason the player sees on disconnect.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.53.0: Live server stats in the channel topic</summary>

The linked Discord channel's **topic** now shows your Minecraft server's live status at a
glance, for example `🟢 1/7 online · TPS 20.0 · 4ms · 2.3GB`.

- **Online count, TPS, tick time, and RAM, right in the topic.** No need to run a command —
  the numbers sit at the top of the bridged channel.
- **Refreshes about every 5 minutes.** Discord rate-limits topic edits, so this updates
  periodically rather than second-by-second. No plugin update needed.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.9.0: One-restart updates, instant settings, no kick appeal</summary>

The companion plugin now updates and configures itself more smoothly. Auto-updates as usual.

- **Updates apply in a single restart** (it used to take two).
- **Your server-side settings apply instantly on start** — things like your custom join
  text take effect right away instead of about a minute later.
- **New `/mcdc update` command** to check for and stage an update on demand.
- **No appeal line on kicks.** A kick is temporary, so the disconnect screen no longer shows
  an appeal link for kicks (bans still do).

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.8.0: Clickable appeal link on the kick/ban screen</summary>

The appeal URL shown on a player's disconnect screen is now a **clickable link**, not just
text. Auto-updates as usual.

- **One click to open the appeal.** Whether the click actually opens a browser depends on the
  player's Minecraft client, but the URL is always readable and copyable either way.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.52.0: Minecraft chat-flag alerts go to your staff chat</summary>

When a bridged Minecraft message trips AutoMod, the flag notice — with its **Kick** /
**Ban in-game** buttons — now posts to your **staff-chat channel** instead of your
server-log channel, so it lands where your team is watching. No plugin update needed.

- Falls back to your usual alert channel if no staff chat is configured. The full audit
  trail still records every flag as before.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.51.0: Blocked links are masked in bridged chat</summary>

A link your AutoMod blocks (IP-grabbers, or any domain on your link blocklist) is now
**masked to `***`** in bridged chat — in the Discord copy and the in-game broadcast —
instead of only raising a staff flag. No plugin update needed.

- **The bad link doesn't reach the room, but your staff still see it.** The masked copy is
  what players see; your staff alert and server log keep the **real link** for evidence.

</details>

<details class="doc-sec" markdown="1" data-kind="fix">
<summary>v6.50.0: Ask-SAi answers now show in Discord too</summary>

When a player asks **SAi** in-game (`@sai …`), SAi's reply now also appears in your linked
Discord channel — not just in Minecraft. No plugin update needed.

- **The bridged conversation reads the same on both sides.** Staff watching from Discord
  can follow the whole exchange instead of seeing a question with no reply.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.48.0 / Plugin v0.7.0: Flagged words masked in the in-game broadcast</summary>

Words your AutoMod catches are now **masked to `***` in the in-game Minecraft chat**, while
the true wording still reaches Discord and your server log for your records.

- **Players see the clean version, staff see the real one.** The in-game broadcast is masked;
  your staff alert and server log keep the original wording.
- **Needs plugin v0.7.0+.** If auto-update is on, this applies on your next server restart —
  nothing to download by hand.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v6.47.0: One AutoMod switch covers Discord and Minecraft</summary>

Bridge filtering and monitoring now follow your **single AutoMod switch** — the old separate
MCDC toggles have been removed. No plugin update needed.

- **One place to control it.** Turn AutoMod on and it protects your Discord and your bridged
  Minecraft chat together; there's no longer a second bridge-only toggle to keep in sync.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Bans-only appeals and short appeal links</summary>

Appeals are now cleaner to offer and easier to type. No plugin update needed for these
changes on Server Assistant's side.

- **Only bans offer an appeal now.** A kick is temporary, so kicked players no longer get an
  appeal prompt — only banned players do.
- **Short, hand-typeable links.** A ban-appeal link is now `https://sa.wandweb.co/a/<code>`,
  instead of the old long `/mc-appeal?token=…` URL.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.6.0: Appeal a ban/kick from the web, and in-game unban</summary>

Banned or kicked players now get a **one-time web appeal link** on their disconnect screen,
and approving an appeal **unbans them in-game** automatically. Auto-updates as usual.

- **A way back in from the disconnect screen.** The player sees a link they can use once to
  appeal, so they aren't left with no path forward.
- **Approve once, they're back.** When you approve an appeal, the plugin lifts the ban on
  your Minecraft server for you.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.5.0: Carries out staff kick/ban actions in-game</summary>

Carries out staff kick/ban actions in-game when triggered from Discord.
Auto-updates as usual.

- **Runs enforcement on your server.** When staff press **Kick** or **Ban
  in-game** on an AutoMod flag alert in Discord, this plugin carries the action
  out on your Minecraft server.
- **Auto-updates as usual.** If auto-update is on, this version applies on your
  next server restart — nothing to download by hand.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.4.0: Reports your server's health to Server Assistant</summary>

Reports live server health (TPS, tick time, RAM, uptime) to Server Assistant so it can show
your server's status in Discord. Auto-updates as usual.

- **Live health on every check-in.** The plugin now includes your server's ticks-per-second,
  tick time, memory use, and uptime when it reports in, so Server Assistant can show them in
  the `/mcdc` panel and `/online` and raise optional health alerts.
- **Auto-updates as usual.** If auto-update is on, this version applies on your next server
  restart — nothing to download by hand.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.3.0: In-game setup — link the bridge without editing config.yml</summary>

You can now link the bridge **entirely in-game**, with no config file to edit and no restart.

- **Link from Minecraft or the console.** As a server operator (or from the server console),
  run **`/mcdc link <token> <relay-url>`** — the same token and relay URL shown in Server
  Assistant's `/mcdc` setup panel — and the bridge links straight away.
- **It confirms the link for you.** The plugin validates the token and tells you which Discord
  channel it linked to, so you know it worked without leaving the game.
- **No config.yml, no restart.** Pasting `relay-url` and `token` into `plugins/MCDC/config.yml`
  and restarting still works, but it's now the alternative — not the only way.
- **Auto-updates as usual.** Install this version once and later plugin releases apply
  automatically on your next server restart.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.2.4: Automatic updates, clearer console, join-notice control</summary>

The companion plugin now keeps itself up to date. Install this version **once**, and
from here on new plugin releases apply **automatically on your next server restart** —
no more downloading a new `.jar` by hand.

- **Install once, then hands-off.** On startup the plugin checks Server Assistant for a
  newer build; if there is one it downloads it, checks it, and stages it so your server
  picks it up the next time it restarts.
- **Verified downloads only.** Each update is checked against a checksum before it's
  staged, over HTTPS — the plugin never applies a jar that doesn't match.
- **You stay in control.** It never restarts your server for you, and you can pin your
  current version any time by setting `auto-update: false` in the plugin's `config.yml`.
- **No more backlog on restart.** When your server (or the plugin) loads, in-game chat no
  longer replays the recent Discord history all at once — it picks up cleanly from the
  moment it comes online.
- **You can see it working.** The server console now prints the plugin version on start and
  reports the update check plainly — "up to date", or "update available: vX → vY — downloading…"
  then "staged, applies on the next restart". `/mcdc status` shows the version and whether
  auto-update is on.
- **Join notice, controlled from Discord.** The in-game "chat is bridged" notice players see
  on join can now be edited and toggled from the `/mcdc` wizard (see the bot entry) — the
  plugin picks up your choice automatically, no config file or restart needed.
- **`/mcdc version` in-game.** Run it on your server to see the version you're running and
  whether you're on the latest — "you're on the latest (vX)" or "update available: vY".

Grab this one update from the [download link](/wiki/minecraft/#config) and drop it in as
usual — it's the last manual install you'll need.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Discord reactions in Minecraft</summary>

Reactions on the Discord side now carry into your linked Minecraft channel, so a thumbs-up
or a laugh reaction is visible to players in-game, not just in Discord.

- **Reactions appear in-game.** React to a message in the bridged Discord channel and it
  shows up in Minecraft, for example `Alice reacted 👍 to Bob: "gg"`.
- **A Reactions toggle in the wizard.** It's controlled from the `/mcdc` wizard and is on by
  default, so turn it off there if you'd prefer not to relay reactions.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>One-command setup wizard</summary>

Linking and customising the bridge is now a single **`/mcdc`** wizard (also reachable from
**`/settings → Minecraft`**), replacing the old `/mcdc link`, `/mcdc status`,
`/mcdc translate` and `/mcdc unlink` subcommands.

- **Pick or create a channel.** Open the wizard and choose a channel to bridge from a
  dropdown, or press **Create a channel for me** and Server Assistant makes one. On linking
  it shows the paste-ready plugin config and download link, once.
- **One-click toggles once linked.** Flip server events (joins, leaves, deaths,
  advancements, start/stop), the topic online-count, and translation on or off from the
  wizard, rotate your token, or unlink, in a couple of taps.
- **Chat filtering is now optional.** AutoMod masking of bridged chat is a toggle, on by
  default, that you can switch off to relay chat exactly as typed.
- **No channel clashes.** The wizard won't bridge a channel already used as your
  reception/verification, staff-chat, or mod-log channel. `/online` is unchanged.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>Plugin v0.1.0: The MCDC companion plugin goes public</summary>

The first public release of the **MCDC companion plugin**, the small, free add-on that runs
on your Minecraft server and does the talking to Discord. Drop the `.jar` into your server's
`plugins/` folder, paste in the two lines `/mcdc link` gives you, and restart.

- **Built for modern servers.** Targets **Paper/Spigot 1.21.x** and needs **Java 21**.
- **Relays what happens in-game.** In-game chat, plus joins, leaves, deaths and
  advancements, are sent through to your linked Discord channel, each one a toggle you
  control.
- **A live online-player count.** The plugin keeps Discord updated with how many players
  are currently on your server.
- **Outbound-only, no console access.** The plugin makes **outbound HTTPS** connections
  only, with no RCON and no ports to open, so no server passwords ever leave your machine.

</details>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>The Minecraft ↔ Discord bridge goes live</summary>

The bot side of the bridge arrived: link one Discord channel to your Minecraft
(Paper/Spigot) server with the free companion plugin, and your in-game and Discord chat
become a single conversation.

- **Two-way chat with real player identity.** In-game chat lands in your Discord channel as
  the player, their Minecraft name and skin-face avatar, and anything typed in that Discord
  channel shows up in-game.
- **Optional AI translation, both ways.** Turn on one target language and everyone reads a
  single conversation, in-game and in Discord, with messages translated live. It is off by
  default, and text already in your chosen language is left untouched.
- **See who's on at a glance.** `/online` lists the players currently in-game, and the
  linked channel's topic keeps a live count, for example "🟢 7/40 online".
- **Set it up with one command.** Run `/mcdc link`, drop the free companion plugin into
  your server's `plugins/` folder, paste in the two lines it gives you, and restart. Manage
  it any time with `/mcdc status`, `/mcdc translate`, and `/mcdc unlink`.

</details>

</div><!-- /cl-mcdc -->

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new

<script>
(function () {
  var tabs = [].slice.call(document.querySelectorAll('.cl-tab'));
  var panels = { bot: 'cl-bot', portal: 'cl-portal', crestbound: 'cl-crestbound', mcdc: 'cl-mcdc' };
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
