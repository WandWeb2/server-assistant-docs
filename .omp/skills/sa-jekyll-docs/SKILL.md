---
name: sa-jekyll-docs
description: Conventions for the Server Assistant documentation site (Jekyll + Minima on GitHub Pages). Use when editing or adding pages, front matter, navigation, or copy in the docs repo.
---

# Jekyll docs conventions

This is a Jekyll site on the Minima theme, published to GitHub Pages. Content is
kramdown Markdown; most pages are plain `.md` files at the repo root with pretty
permalinks (`/:title/`).

- **Front matter**: pages inherit `layout: default` and a default share image
  via `_config.yml` defaults — you usually only need `title:` (plus any
  page-specific keys a neighbouring page already uses). Match nearby pages.
- **Navigation**: `_data/nav.yml` is the SINGLE source for the top nav and the
  footer link groups. `_includes/header.html` takes the entries marked
  `header: true`, in list order; `_includes/footer.html` groups the rest by
  `group:`. `header_pages` in `_config.yml` is gone and nothing reads it, so an
  entry added back there is silently ignored. The top nav stays the curated
  marketing funnel: don't set `header: true` on a page unless the task says to,
  deeper pages are reached from the footer.
  - The header resolves each entry **by source path** and takes the page's
    `title` front matter as the label (minus the `Server Assistant ` prefix), so
    a moved page or a missing `title` would empty that nav slot with no build
    error. `scripts/check-nav-integrity.py` is what catches it. Run it after any
    rename, move, or permalink change.
  - A **third** copy of these links lives in `sa-relay/relay.py`
    (`PUBLIC_FOOTER_HTML`) and cannot be derived from here. If you change a
    permalink or a footer label, expect
    `sa-relay/tests/test_public_footer_nav_drift.py` to fail until the relay copy
    is updated too (which means a `RELAY_VERSION` bump and a CHANGELOG heading).
- **Cross-repo couplings that fail silently**, so check them before restructuring:
  - `index.md`'s "Recently shipped" strip **fetches the live `/roadmap/` page**
    and parses `.band-shipped` → `.shipped-scroll` → `details.card > summary` →
    `.shipped-pill`. Rename any of those and the home page quietly reverts to its
    evergreen fallback. Both ends carry a warning comment naming the other file.
  - `sai-knowledge.md` is fetched raw at runtime and **truncated to 16,000
    characters** by both `bot.py` and `relay.py`, with no error. Keep it under
    that: `scripts/check-sai-knowledge-size.py` fails at 90% of the cap.
  - `pricing.md` handles `?subscribed=1` (plus `&guild=` / `&topup=`), which the
    relay's `STRIPE_SUCCESS_URL` sends after Stripe Checkout. Change the params in
    one repo and the acknowledgement banner stops appearing in the other.
- **Language**: British English (`lang: en-GB`) — "organise", "behaviour",
  "licence" (the noun). Keep marketing claims consistent with `features.md` and
  `pricing.md`.
- **Build**: if a `Gemfile` is present, validate with `bundle exec jekyll
  build`. Keep internal links relative and working; don't hardcode the
  production domain.
- **Checks**: `.github/workflows/checks.yml` runs `scripts/check-nav-integrity.py`
  and `scripts/check-sai-knowledge-size.py` on PRs and pushes to `main`. The Pages
  build itself is not a gate: it renders whatever it is given and goes green, which
  is exactly why both of those failure modes were invisible.
- **Don't publish noise**: non-page files (`scripts/`, `.omp/`) are
  excluded in `_config.yml` — keep them excluded so they never render as pages.
