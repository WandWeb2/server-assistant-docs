# Action plan — build checklist (work top to bottom)

Living checklist for the Server Assistant build queue. Status: ☐ todo · ◐ in progress ·
☑ done · ☒ deliberately not doing. Cross-repo: **bot** = `server-assistant` (bot.py, single-file
deploy), **relay** = `sa-relay`, **docs** = `server-assistant-docs`. Full source-of-truth for the
data-source decisions: `partnerships-playbook.md → Type-1 intelligence research matrix`.

## NOW

1. ◐ **AutoMod text upgrade** (bot) — *greenlit, active.*
   - Local lexicons, fast path, **no text leaves the box**: **LDNOOBW** (CC-BY-4.0, multilingual)
     + **dsojevic/profanity-list** (MIT, has an `exceptions` allowlist). Runtime-fetch + cache
     into per-language sets (single-file safe — no bundled data). Match with **word-boundary
     regex** + the exceptions allowlist (Scunthorpe defense). Gate behind the existing word-filter
     AutoMod pack.
   - AI second-opinion: **OpenAI `omni-moderation-latest`** (free, 13 cats) on **borderline hits
     only** — send only the flagged message, never all traffic.
   - Release: bump `BOT_VERSION`, internal `CHANGELOG.md`, public docs changelog; **update the
     privacy policy** to disclose the OpenAI moderation hop.

2. ◐ **Threat Score dossier upgrade** (bot) — *spec in progress (research running).*
   - Create a per-user record on first sight. Store **user ID + numeric stats only** + a
     **PII-scrubbed AI summary per mod action**. No names / message text / sensitive data at rest.
   - **Per-server scope** (no cross-server sharing — that's the Discord-ToS/privacy minefield).
   - Time-decay + retention cap; a **data-deletion path** (Discord Developer Policy requires it).
   - **Premium-gated** detailed viewing; free servers keep the numeric score.
   - Privacy-policy update. *Open decisions: confirm per-server scope, retention window, fields.*

3. ☐ **Website live stats** (relay + docs) — new **public aggregate endpoint** on the relay
   (cached, rate-limited, **counts only, no PII**); home-page widget. Metrics: users scanned,
   messages scanned, AutoMod actions (+ servers protected / threats blocked — finalise set).

## NEXT (unblocks as inputs arrive)

4. ☐ **FishFish link integration** (bot) — once a `/key` token is obtained: inline REST + WebSocket
   client → `_PHISHING_HOSTS`; **PhishDestroy (MIT)** merged as the always-on backstop;
   host-membership match (not substring). Links stay FishFish + PhishDestroy.

5. ☐ **Beemo coexistence** (bot) — once Beemo's bot ID is known: Path A (detect Beemo → stand down
   our own join-raid escalation); optional Path A.5 (ingest Beemo's antispam-log embeds → Threat
   Score). Audit already captures Beemo's bans, attributed correctly.

6. ☐ **Image moderation** — **route to Discord by default**; **NudeNet** local only as the cheap
   option for servers that want active NSFW *removal*; **never** CSAM.

## PARTNERSHIPS / OPS

7. ☐ **Partner conversions** — flip DiscordForge "In talks" → live on confirmation; handle
   Beemo / FishFish replies; keep the playbook status tracker current.

8. ☐ **Domain migration** (`serverassistant.app`) — register + DNS + custom domain → flip
   `_config.yml` (`url` + empty `baseurl`); `/invite` already shipped. **First check the
   deploy-gate changelog URL** in bot + relay so the domain move can't block autonomous deploys.

## DELIBERATELY NOT DOING

- ☒ Third-party **user-reputation** feeds — every candidate failed on liveness/license/privacy;
  rely on our own Threat Score.
- ☒ **CSAM** detection — defer to Discord (legal minefield).
- ☒ **AntiScamBot / ScamGuard** — parked (niche art-commission scope, lookup-only, redundant
  with FishFish). Revisit only for art/creator audiences.
