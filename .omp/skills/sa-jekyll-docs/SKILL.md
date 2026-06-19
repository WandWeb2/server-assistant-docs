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
- **Navigation**: the top nav is the curated `header_pages` list in
  `_config.yml`; deeper pages are reached via the footer. Don't add a page to
  `header_pages` unless the task says to.
- **Language**: British English (`lang: en-GB`) — "organise", "behaviour",
  "licence" (the noun). Keep marketing claims consistent with `features.md` and
  `pricing.md`.
- **Build**: if a `Gemfile` is present, validate with `bundle exec jekyll
  build`. Keep internal links relative and working; don't hardcode the
  production domain.
- **Don't publish noise**: non-page files (`scripts/`, `.omp/`) are
  excluded in `_config.yml` — keep them excluded so they never render as pages.
