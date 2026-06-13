# Keeping the docs in sync with the bot

This site is **marketing/reference documentation for the live bot**. It must
describe what the bot *actually does today* — stale docs erode trust faster than
missing docs. This file is the checklist for keeping them aligned, now and going
forward. (It's excluded from the published site via `_config.yml`.)

## Sources of truth

| Question | Authoritative source |
|---|---|
| *What changed?* | `sa-dev/CHANGELOG.md` — the `[Unreleased]` section + shipped versions |
| *What slash commands exist?* | `sa-dev/bot.py` → `grep -E '@bot.tree.command\(name=' bot.py` **plus** command groups (`bot.tree.add_command(...)`, e.g. `/tickets`) and context menus (`@bot.tree.context_menu`) |
| *What does setup do?* | `bot.py` → `slash_setup`, `SetupPreflightView`, `SetupChannelsView`, `SetupRolesView`, the community-type step, `autopilot_propose` |
| *Pricing / tiers / token costs* | `bot.py` constants (plan caps, `IMAGE_CREDIT_COST_TOKENS`, trial size) |

## The rule

**Whenever the bot ships a behaviour, command, pricing, or setup change, update the
matching evergreen page(s) in the same pass — not just the changelog.** The
changelog records history; the evergreen pages are what prospective users read.

## Change → page map

| If you changed… | Update |
|---|---|
| Setup / onboarding / autopilot / community-type picker | `setup.md`, `faq.md` (setup Q&A), `index.md` (any setup claims) |
| A slash command added / renamed / removed | `commands.md` (command list **and** the per-tier permissions table) |
| A new capability / feature behaviour | `features.md` (+ `index.md` if it's a headline differentiator) |
| Pricing, plan caps, token costs, trial size, top-ups | `pricing.md`, `faq.md` (pricing Q&A) |
| What data the bot reads / stores | `privacy.md` |
| Positioning vs competitors | `compare.md` |
| Anything shipped | `changelog.md` (mirror of `sa-dev/CHANGELOG.md`) |
| Roadmap status / versioning | `roadmap.md` — poll-driven; follow the maintainer comment at the top of that file |

## Fast drift checks

```sh
# Commands page vs reality — every live slash command should appear in commands.md
comm -13 \
  <(grep -oE '@bot.tree.command\(name="[^"]+"' ../sa-dev/bot.py | grep -oE '"[^"]+"' | tr -d '"' | sort -u) \
  <(grep -oE '/[a-z-]+' commands.md | tr -d '/' | sort -u)

# No version numbers anywhere except the roadmap + changelog
grep -rnE 'v[0-9]+\.[0-9]' --include='*.md' . | grep -vE 'roadmap.md|changelog'
```

## Conventions that must hold

- **No version numbers** on any page except `roadmap.md` and the changelog pages —
  versioning is a roadmap concept (assigned by community poll), not a marketing one.
- Product **screenshots are hand-built CSS Discord mockups** (`.dc*` classes in
  `assets/css/glass.css`), not image files — keep it that way, and don't reuse the
  same mock on two pages.
- **Dark theme by default**, site-wide. The shared chrome is themed in `assets/css/glass.css`; the roadmap is dark-themed inside its own `<style>` block (dark overrides at the end of it).
- Always `git pull --rebase` before pushing (the repo gets concurrent CI commits).
