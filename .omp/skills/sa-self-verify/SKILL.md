---
name: sa-self-verify
description: Use after implementing any change and before yielding back to the orchestrator. Runs the repo's tests and linters, re-reads the diff against the spec's acceptance criteria, and reports pass/fail with residual risks. Always run before considering an implementation task complete.
---

# Self-verify before yielding

You are the implementer in a two-agent pipeline. The orchestrating Claude
session handed you a spec with explicit **acceptance criteria** and owns review
and merge. Your job is to hand back work that is already green.

Before you yield:

1. **Run the checks the spec named.** If it listed exact tests/commands, run
   those. Otherwise discover and run the repo's suite:
   - Python repos: `pytest -q` (plus any `requirements-dev.txt` tooling such as
     `ruff` / `flake8` / `black --check` if the repo configures it).
   - Jekyll docs: `bundle exec jekyll build` if a `Gemfile` is present;
     otherwise validate front matter and internal links.
2. **Re-read your own diff** (`git diff`) against every acceptance criterion.
   Confirm each is met and that nothing out of scope was touched.
3. **Report, don't guess.** End with a short summary:
   - what changed (files + why),
   - the exact check commands you ran and their results,
   - any criterion you could NOT satisfy, and why,
   - residual risks the reviewer should look at.

Never claim success on a check you did not actually run. If a check fails and
you cannot fix it within scope, stop and report the failure verbatim — do not
paper over it.
