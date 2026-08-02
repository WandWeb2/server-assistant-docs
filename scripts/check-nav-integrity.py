#!/usr/bin/env python3
"""Fail when `_data/nav.yml` no longer describes real pages.

WHY THIS EXISTS. The header nav resolves each entry by SOURCE PATH
(`site.pages | where: "path", ...` in `_includes/header.html`) and takes the
page's `title` front matter as the link text. Both halves of that fail SILENTLY:

  * rename or move a page and the lookup returns nothing, so the nav slot is
    simply absent from the rendered menu. Jekyll does not warn, the build is
    green, and the only symptom is a missing link nobody counts.
  * drop a page's `title` and the same thing happens, because the include skips
    any page that has no title to derive a label from.

The footer had the mirror-image problem: it used to hardcode its own <a> tags,
so a permalink change broke the link with no build error either. Both now read
`_data/nav.yml`, which turns two silent failures into one file that can be
checked. This script is that check.

WHAT IT ASSERTS

  1. Every `path` in nav.yml points at a file that exists.
  2. Every entry marked `header: true` has a `title` in its page front matter,
     because that is what the nav label is derived from.
  3. Every `url` matches that page's own `permalink` front matter, so the
     footer link and the header link cannot drift apart.
  4. Every entry declares somewhere to appear (`header: true` and/or a `group`),
     and every `group` names a real group in the `groups:` list.
  5. `_config.yml` has not regrown `header_pages`, which nothing reads any more.

WHAT IT COSTS, recorded so nobody deletes it as ceremony: moving or renaming a
page now means editing `_data/nav.yml` in the same change, and this script is
what tells you so. That edit is the point.

Run with:  python3 scripts/check-nav-integrity.py
"""

import pathlib
import re
import sys

import yaml

ROOT = pathlib.Path(__file__).resolve().parent.parent
NAV = ROOT / "_data" / "nav.yml"
CONFIG = ROOT / "_config.yml"

FRONT_MATTER = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.S)


def page_front_matter(path: pathlib.Path) -> dict:
    """Front matter of a Jekyll page, or {} if it has none we can parse."""
    text = path.read_text(encoding="utf-8", errors="replace")
    m = FRONT_MATTER.match(text)
    if not m:
        return {}
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        return {}


def main() -> int:
    nav = yaml.safe_load(NAV.read_text(encoding="utf-8"))
    groups = nav.get("groups") or []
    items = nav.get("items") or []
    group_ids = {g["id"] for g in groups}
    problems = []

    if not items:
        problems.append("_data/nav.yml has no items at all")

    for i, item in enumerate(items):
        where = item.get("label") or item.get("path") or f"item[{i}]"
        rel = item.get("path")
        url = item.get("url")

        if not item.get("header") and not item.get("group"):
            problems.append(
                f"{where}: appears nowhere. Set `header: true`, give it a "
                f"`group`, or delete the entry.")

        grp = item.get("group")
        if grp and grp not in group_ids:
            problems.append(
                f"{where}: group '{grp}' is not defined in the `groups:` list "
                f"({', '.join(sorted(group_ids))}). The footer renders groups "
                f"in `groups:` order, so an unknown id means the link is never "
                f"rendered at all.")

        if not rel:
            problems.append(f"{where}: no `path`")
            continue

        page = ROOT / rel
        if not page.exists():
            problems.append(
                f"{where}: path '{rel}' does not exist. The header resolves "
                f"entries by source path, so this slot renders as nothing "
                f"(the data-file fallback keeps the link alive, but the page "
                f"it points at is gone). Update nav.yml or restore the file.")
            continue

        fm = page_front_matter(page)

        if item.get("header") and not fm.get("title"):
            problems.append(
                f"{where}: '{rel}' has no `title` front matter, and the header "
                f"label is derived from it. Add a title or drop `header: true`.")

        permalink = fm.get("permalink")
        if permalink and url and permalink != url:
            problems.append(
                f"{where}: nav.yml says url '{url}' but '{rel}' has permalink "
                f"'{permalink}'. The footer uses the nav.yml url, so these "
                f"disagreeing means the footer link 404s.")

    if re.search(r"^header_pages\s*:", CONFIG.read_text(encoding="utf-8"), re.M):
        problems.append(
            "_config.yml has `header_pages` again. Nothing reads it: the header "
            "include reads `site.data.nav`. Entries added there are silently "
            "ignored. Put the link in _data/nav.yml instead.")

    if problems:
        print("Nav integrity check FAILED:\n", file=sys.stderr)
        for p in problems:
            print(f"  - {p}", file=sys.stderr)
        print("", file=sys.stderr)
        return 1

    header_n = sum(1 for i in items if i.get("header"))
    footer_n = sum(1 for i in items if i.get("group"))
    print(f"Nav integrity OK: {len(items)} entries "
          f"({header_n} in the header, {footer_n} in the footer, "
          f"{len(groups)} footer groups).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
