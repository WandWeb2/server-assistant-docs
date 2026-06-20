# Partnerships playbook

Internal strategy + outreach reference for Server Assistant partnerships. Lives
under `.omp/` so it's **excluded from the published site**. The *mechanics* of the
partners page (how to add / flip a partner) live in `MAINTAINING.md → Partnerships
page`; this file is the *who and how* of acquisition.

Canonical public page: <https://wandweb2.github.io/server-assistant-docs/partnerships/>

## Partner types — absorb / distribute / recommend

Sort every prospect by **what the user has to do**. Weight the pipeline toward the
first two; treat the third as the rare exception.

1. **Absorb (intelligence)** — we ingest their data/API; **the user installs nothing**
   and SA just gets better. *(FishFish, PhishDestroy, scam-links, Beemo's raid logs.)*
   The best kind: a capability gain disguised as a partnership.
2. **Distribute (discovery)** — mutual promotion that doesn't touch the product.
   *(DiscordForge, listing sites.)* Safe and additive.
3. **Recommend (a bot)** — "run both." *(Tatsu, music, giveaways.)* **Use sparingly,
   and NEVER in our own lane (moderation/safety)** — it invites "why doesn't Server
   Assistant just do this?" A partners page that's mostly type-3 reads as a link farm.

Rule of thumb: a type-1 source is worth it only if it also passes a **value test**
(broad enough audience, not redundant with what we already absorb, worth the runtime
dependency). Technically-integrable ≠ worth integrating.

## Bar for a partner

Per the page's own copy: *someone we'd happily point our own community toward* —
shares our quality bar, respects privacy, no dark patterns. Quality over quantity;
a short list reads as curated, a long one reads as SEO spray.

## Priority lanes (highest strategic value first)

1. **Trust & safety / ban networks** — deepens the product (threat-score,
   alt-detection, scam filters), not just the funnel. Hardest for competitors to copy.
2. **Discovery / listing sites** — direct installs. **DiscordForge is our anchor /
   primary listings partner**; diversify around it but stay selective.
3. **Complementary single-purpose bots** — cross-promotion, zero overlap.
4. **Educators / agencies / creators** — referral pipeline to server owners.

## Verified shortlist (June 2026)

Confidence: ✅ ready · 🟡 re-vet URL/entity · 🟠 lower (no canonical homepage).

### 1. Trust & safety / ban networks — outreach Template A
| Partner | Link | Why | Conf. |
|---|---|---|---|
| Beemo | https://beemo.gg | Passive anti-raid, 100k+ servers — pairs with anti-raid + threat-score | ✅ |
| Discord-AntiScam (scam-links) | https://github.com/Discord-AntiScam/scam-links | 24k+ phishing domains; ingestible feed for the scam filter | ✅ (data) |
| AntiScamBot | https://github.com/SocksTheWolf/AntiScamBot | Cross-server scammer ban-list sharing, actively maintained | ✅ |
| DiscordScammers.com | https://www.discordscammers.com | Human-verified known-malicious-actor registry | 🟡 |
| Agent Black / BanSync | App-Directory only (no homepage) | Cross-server ban sync | 🟠 |

### 2. Discovery / listing sites — outreach Template C
| Partner | Link | Conf. |
|---|---|---|
| **DiscordForge** | https://discordforge.org | 🤝 **anchor & primary listings partner** (in talks) — bot & server listing site |
| top.gg | https://top.gg | ✅ largest reach / biggest install funnel |
| Discord Bot List | https://discordbotlist.com | ✅ |
| Discadia | https://discadia.com | ✅ (~2.3M visits/mo) |
| Discords.com | https://discords.com | ✅ |
| Infinity Bot List | https://infinitybots.gg | 🟡 |

### 3. Complementary bots (no mod overlap) — outreach Template B
| Partner | Link | Lane |
|---|---|---|
| Tatsu | https://tatsu.gg | Leveling/economy |
| Jockie Music | https://www.jockiemusic.com | Music (9M+ servers) |
| GiveawayBot | https://giveawaybot.party | Giveaways |
| Starboard | https://docs.starboard.best | Starboard |

**⚠️ Do NOT approach — they ship moderation and compete with us:** Arcane,
UnbelievaBoat, Sapphire, MEE6, ProBot. RestoreCord overlaps our verification gate.

### 4. Educators / agencies / referral — outreach Template D
| Partner | Link | Conf. |
|---|---|---|
| Discord Safety Library (official) | https://discord.com/safety-library | ✅ citation, not a paid partner |
| Moderators United | https://www.moderatorsunited.com | ✅ agency referral |
| ays.gg | https://blog.ays.gg | 🟡 |

## Recommended first wave (4 sends)

1. **Beemo** (A) — strongest strategic fit, reputable.
2. **scam-links feed** (A) — concrete, low-friction data integration.
3. **top.gg** (C) — biggest install funnel.
4. **Tatsu** (B) — clean, high-reach cross-promo.

## Outreach templates

Keep the first email < ~120 words. Personalise the opening line genuinely. Always
offer reciprocity up front — the partners-page slot is the cheapest, most credible
chip. `[link]` = <https://wandweb2.github.io/server-assistant-docs/partnerships/>

### A. Trust & safety / ban network (integration partner)
> **Subject:** Server Assistant × [Their Name] — sharing the load on Discord safety
>
> Hi [name],
>
> I run **Server Assistant**, a privacy-first Discord moderation bot — AutoMod,
> anti-raid, ban-evasion/alt detection, and a Threat Score that gives mods an
> explainable risk read on a member. We're used by [N] servers.
>
> The reason I'm reaching out: [Their Name] is solving the cross-server half of the
> same problem we are. Our alt-detection and scam filters are only as good as the
> signals behind them, and a [shared blocklist / scammer-reporting] integration
> would make both products meaningfully stronger — your network gets more reach,
> our moderators get better intelligence.
>
> I'd love to explore a lightweight integration and a mutual mention on our partners
> pages. Worth a 20-minute call?
>
> — [you], Server Assistant · [link]

### B. Complementary bot (cross-promotion, no overlap)
> **Subject:** Cross-promo? You make servers better, we keep them safe
>
> Hi [name],
>
> Big fan of [Their Bot] — it does [leveling / music / economy] better than anyone.
> I build **Server Assistant**, a moderation bot, and we deliberately *don't* touch
> [their area].
>
> That makes us natural companions rather than competitors: "[Their Bot] for [X],
> Server Assistant for safety." I'd like to list you on our partners page and have
> you do the same — plus, if it ever makes sense, a "recommended companion" nudge in
> our respective setup flows.
>
> No catch, no money changing hands — just two quality bots pointing servers at each
> other. Interested?
>
> — [you] · [link]

### C. Listing / discovery site (lighter touch)
> **Subject:** Partner feature for Server Assistant on [Their Site]?
>
> Hi [name],
>
> We're a privacy-first Discord moderation bot ([link]) and a fan of how [Their Site]
> curates for quality rather than volume. We'd love to be featured and to feature
> [Their Site] back on our partners page. Happy to provide assets, a writeup, or a
> promo for your audience — whatever's most useful. Open to it?
>
> — [you]

### D. Agency / creator (referral channel)
> **Subject:** A moderation bot worth recommending to the servers you build
>
> Hi [name],
>
> You help people run great Discord communities — which is exactly who we build for.
> **Server Assistant** is a privacy-first moderation bot (free full mod toolkit;
> optional AI). I'd like to explore a partnership: a referral arrangement, a
> co-branded setup guide, or simply being on your recommended-tools list, with a
> feature for you on our partners page in return.
>
> Could I show you around it for 15 minutes?
>
> — [you] · [link]

## Beemo — integration notes (recon, June 2026)

Contact **hello@beemo.gg** · small team (3) · org: github.com/beemobot.

- **No public API / SDK / feed / downloadable blocklist.** Detection engine ("Tea")
  is closed-source. The plumbing (`cafe` monorepo) is open-ish **but has no LICENSE
  → all-rights-reserved; do NOT reuse their code.**
- Only public endpoint: `GET logs.beemo.gg/antispam/:id` — plain text, **one raid at
  a time**, opaque id, no index/list/feed. Their "Milk" service DB *does* store the
  per-raid raiding user IDs (so the data you'd want exists; it's just not exposed).
- **Integration tiers:**
  - **Path A — coexist/defer** (no dependency): detect Beemo in-guild, stand down
    SA's own join-raid escalation. Scoped in `bot.py` `on_member_join` (~L6699).
    Audit already captures Beemo's bans, attributed correctly — no change. ✅ do regardless.
  - **Path A.5 — ingest Beemo's Discord raid logs** (no Beemo cooperation needed):
    read the antispam-log embeds (as the 3rd-party BeemoHelper does) → feed banned
    IDs into Threat Score / alt-detection. Tradeoff: brittle (their format changes).
  - **Path B — real raid-signal feed:** only if Beemo builds an endpoint on Milk.
    Needs their buy-in — this is the ask in the outreach.

## Phishing-feed landscape & chosen approach (June 2026)

Decided after comparing the live Discord anti-phishing sources. **Verdict: an
API/websocket feed beats a static list — freshness is what matters for phishing
(domains burn in hours) — and DAS scam-links drops to tertiary (no license, aging).**

**Chosen architecture — layered, feeding ONE in-memory `_PHISHING_HOSTS` set,
matched by host membership (+ parent domains), NOT substring:**

1. **Primary — FishFish** (`api.fishfish.gg`, akac's project, confirmed live 2026):
   pull `GET /domains` on startup, stay current via `wss://api.fishfish.gg/v1/stream`.
   Discord-tuned; MIT client tooling.
2. **MIT static backstop — PhishDestroy** (`api.destroy.tools`, MIT, no auth, ~130k+
   curated) merged in, so no single volunteer feed going dark can blind the bot.
3. **Bridge/alt — Sinking Yachts** (`phish.sinking.yachts`, live ~42.7k, `wss://…/feed`,
   needs `X-Identity`) — works today but **officially deprecated → migrating to
   FishFish**; use only if FishFish onboarding stalls.
4. **Tertiary — DAS scam-links** (~30k, no license, last push Jan 2026) — optional
   Discord-gap merge only.
- **Don't use:** Spheal (dead); Discord's own (no public feed); `anti-fish.com`
  (NXDOMAIN — real host `anti-fish.bitflow.dev` is per-message lookup only, no local set).

**FishFish access (self-serve token):** join Discord **https://fishfish.gg/discord/**
→ run **`/key`** → main token → exchange for hourly session tokens via
`POST /users/@me/tokens`. Contact **admin@fishfish.gg**; maintainer **akac**
(akacdev@proton.me · X @cz_aka — also runs DAS scam-links). Writes (`POST /domains`,
to contribute detected domains back) need granted permissions — that's the outreach ask.

**Integration in `bot.py`:** inline ~30-line REST+WS client (single-file deploy — no
pip sibling); populate `_PHISHING_HOSTS`; in `run_automod` (~L8330) check the
normalized host via set membership, **separate from** the existing ~15-entry substring
loop; gate behind the `scams` AutoMod pack; refresh the static backstop via `@tasks.loop`.

## Type-1 intelligence sources — research matrix (June 2026)

Deep scout across the four signal-surfaces a Discord mod bot can act on (links,
user accounts, text, images). **Recurring filter: commercial-use license + privacy
(does user data leave the box) eliminate most options — live/large ≠ usable.** Clean
winners are either local MIT/CC data or a free API with clean data-handling.

**Links (malicious URLs/domains):** keep **FishFish + PhishDestroy** (already chosen —
the only cleanly-free-for-commercial, Discord-tuned feeds). Optional *paid* malware/C2
add-ons: **Maltiverse (Lumu)** or **Cisco Umbrella Investigate**. Avoid free tiers of
OpenPhish (non-commercial + no-redistribute), abuse.ch URLhaus/ThreatFox (dropped CC0 →
paid for commercial), Spamhaus DBL, VirusTotal public, AlienVault/OTX. PhishTank = only
flatly-commercial-free but stagnant (registration closed since 2020).

**User reputation: SKIP — add no third party.** No clean/broad/licensed/privacy-tolerable
trust-score API exists: KSoft (dead), DiscordScammers (offline, no license),
CordCat/discord.bio (PII/“likes”, sends IDs out unhashed), Discord `SPAMMER` flag
(undocumented, buggy, "no use for bots"), Ravy (winding down + ToS forbids storage +
plaintext ID leak). → Rely on SA's **own Threat Score**; it's also the privacy-clean choice.

**Text toxicity (clearest new win):**
- Fast local AutoMod: **LDNOOBW (CC-BY-4.0)** + **dsojevic/profanity-list (MIT, built-in
  `exceptions` allowlist)**, matched with **word-boundary regex** (Scunthorpe defense). 100% local.
- AI second-opinion: **OpenAI `omni-moderation-latest`** (free, 13 categories, multilingual) —
  send only borderline/flagged messages, disclose the hop in the privacy policy. Mistral = EU alt.
- Avoid: Perspective API (EOL 2026-12-31), HurtLex (non-commercial), HateBase (dead),
  Detoxify (drags in torch → breaks single-file deploy).

**Images — route to Discord by default.** Discord already scans every upload for CSAM and
runs platform-wide sensitive-media (NSFW) filters, so we don't duplicate that.
- NSFW *active removal* (the one cheap better-than-Discord option): **local NudeNet** (ONNX
  ~10 MB, $0, images never leave the box) — only if a server wants offending images actually
  **deleted** (Discord merely blurs/age-gates). Offload inference off the event loop.
- CSAM → **never build.** Discord handles it platform-wide; a third party doing it is a legal
  minefield (can't obtain the hashes, possession/preservation liability). Flag-in-place → Discord.

**Build priority:** (1) AutoMod text upgrade (local lexicons + OpenAI review), (2) Threat Score
dossier upgrade, (3) website live stats, (4) FishFish links, (5) images → Discord (NudeNet only
if a server wants active NSFW removal), (6) skip user-rep & CSAM. Full sequence: `action-plan.md`.

## Status tracker

Update as outreach progresses.

| Partner | Lane | Status | Notes |
|---|---|---|---|
| DiscordForge | Listing | In talks | Live on site as pending (`+` placeholder + "In talks" cover) |
| Beemo | Trust & safety | Outreach sent (2026-06-20) | Emailed hello@beemo.gg — cross-promo + Path A defer + asked re: raid-signal feed. Awaiting reply. |
| FishFish | Trust & safety (phishing feed) | Chosen primary — outreach sent (2026-06-20) | Emailed (admin@fishfish.gg / akac) — token request + partner mention + write perms to contribute back. Awaiting reply. Token also self-serve via `/key` if the Discord/bot is reachable. |
| Discord-AntiScam (scam-links) | Trust & safety | Superseded → tertiary | No license + aging; FishFish chosen instead. Optional Discord-gap merge only. |
| AntiScamBot / ScamGuard | Trust & safety | Evaluated → parked | Per-user lookup API only (api.scamguard.app, key-gated) — no bulk list; niche (art-commission scammers); redundant with FishFish. Revisit only if we target art/creator communities — then on-demand lookup in Research / Threat-Score, never a blocklist or bot-rec. |
