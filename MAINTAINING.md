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

## Partnerships page

The partners feature spans four files; the acquisition strategy + outreach
templates live separately in **`.omp/partnerships-playbook.md`** (internal).

| Piece | File |
|---|---|
| The page itself (cards, intro, CTA) + its `<style>` | `partnerships.md` |
| Homepage "Trusted by" band | `index.md` (the `.partners-band` block) |
| Footer "Partners" link | `_includes/footer.html` (Product row) |
| Partner logos | `assets/partners/` (`<name>.svg` wordmark + `<name>-icon.svg` square) |

**Pending vs live.** A partnership that isn't confirmed yet is shown but visibly
gated, so we never imply a deal that isn't done:
- *Homepage:* the real logo is wrapped in a `{% comment %}` block and a grey-glass
  `.partner-placeholder` "+" (links to `/partnerships/`) shows instead.
- *Partners page:* the card carries the `pending` class and a `.partner-cover`
  overlay (`<span>In talks</span>`) — frosted glass that also blocks the "Visit"
  link.

**Add a NEW partner (already confirmed/live):**
1. Drop logos in `assets/partners/` — a wordmark `name.svg` (used on the page card)
   and a square `name-icon.svg` (used in the homepage band).
2. `partnerships.md`: copy a `.partner-card` (no `pending` class, no `.partner-cover`)
   inside `.partners-grid`; fill name, tag, blurb, `Visit → ` link.
3. `index.md`: add an `<a class="partner-logo-link" href="…/partnerships/"
   data-name="Name"><img src="…/name-icon.svg"></a>` to `.partners-logos`
   (the comment marks the spot).
4. `.omp/partnerships-playbook.md`: update the status tracker.

**Flip a PENDING partner live:** remove the `{% comment %}`/`{% endcomment %}`
around its homepage logo and delete the `.partner-placeholder`; on the card, drop
the `pending` class and the `.partner-cover` div.

**Add a partner as PENDING:** as "Add a NEW partner", but add the `pending` class +
`.partner-cover` to its card, and keep its homepage logo commented out behind the
`.partner-placeholder`.

> Keep the top header nav (`header_pages`) out of this — partners stay in the footer
> + homepage band until there are enough (3+) to justify a nav slot.

## Conventions that must hold

- **No version numbers** on any page except `roadmap.md` and the changelog pages —
  versioning is a roadmap concept (assigned by community poll), not a marketing one.
- Product **screenshots are hand-built CSS Discord mockups** (`.dc*` classes in
  `assets/css/glass.css`), not image files — keep it that way, and don't reuse the
  same mock on two pages.
- **Dark theme by default**, site-wide. The shared chrome is themed in `assets/css/glass.css`; the roadmap is dark-themed inside its own `<style>` block (dark overrides at the end of it).
- Always `git pull --rebase` before pushing (the repo gets concurrent CI commits).
