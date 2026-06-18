---
name: sa-orientation
description: Read this first on any task — you are new to this codebase. How to get your bearings before changing anything: read the README and the module you're touching, establish a green baseline, and confirm scope. Always orient before implementing.
---

# Get your bearings first

You are a capable implementer but **new to this project** — you have no memory
of it between runs. Before you change anything, orient yourself. Rushing in
without this is the most common rookie mistake.

1. **Read the lay of the land.** Read `README.md`, then the entry-point module
   and any file the spec names. Skim neighbouring files to learn the
   conventions actually in use — don't invent your own.
2. **Establish a green baseline.** Run the test suite once *before* editing
   (e.g. `pytest -q`, or `bundle exec jekyll build` for docs) so you know what
   "working" looks like and can tell what your change affected.
3. **Confirm scope.** Re-read the spec's acceptance criteria and the in/out-of
   scope notes. If something is ambiguous or the spec seems to conflict with
   what the code does, ask the foreman **before** writing code — a short
   question now beats a wrong implementation later.
4. **Then implement** — in small, reviewable steps, matching the surrounding
   style.

You are being coached. It is expected that early work comes back with
corrections; fix your own misses honestly rather than hiding them. Read the
other `sa-*` skills (`sa-stay-in-box`, `sa-self-verify`, and this repo's
conventions skill) — they are your standing instructions.
