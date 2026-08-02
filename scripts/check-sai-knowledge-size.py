#!/usr/bin/env python3
"""Fail before `sai-knowledge.md` outgrows the cap that silently truncates it.

WHY THIS EXISTS. `sai-knowledge.md` is not a published page. It is fetched RAW
at runtime (from `main`, hourly) and injected into SAi's system prompts by BOTH
services, and both of them cut it to 16,000 characters:

    server-assistant/bot.py   _SAI_KNOWLEDGE_MAX       = 16000
    sa-relay/relay.py         _SAI_KNOWLEDGE_MAX_CHARS = 16000

The cut is `text[:16000]`. There is no error, no log line, no truncation marker:
past the cap the tail of the file just stops existing as far as SAi is
concerned. The failure mode is the worst kind, because the newest facts are the
ones most likely to be at the bottom of a document that grows by appending, and
the symptom is SAi confidently not knowing something the docs say. Nothing in
either service can detect it, because a truncated string is a perfectly valid
string.

So the alarm has to be here, where the file is edited, and it has to fire while
there is still room to act.

THRESHOLDS. The cap is 16,000. This script warns at 80% and FAILS at 90%,
leaving 1,600 characters of runway between "red build" and "content silently
disappears". The gap is deliberate: a failing check that leaves you no room is
just an outage with extra steps.

MEASURED IN CHARACTERS, NOT BYTES, and after `.strip()`, because that is exactly
what the consumers do (`text = (text or "").strip()` then `text[:MAX]`). Byte
length is larger than character length for this file (it has em-dashes and box
characters in it), so measuring bytes would fire early and teach people the
number is fake.

IF THIS FAILS. Do not raise the cap on a hunch: the cap is there because the
block is pasted into every SAi system prompt on every call, so it is paid for on
every request in both token cost and latency. Prefer trimming the fact sheet.
Raising it means editing BOTH constants above, in two repos, and re-checking
this script's `CAP`.

Run with:  python3 scripts/check-sai-knowledge-size.py
"""

import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOC = ROOT / "sai-knowledge.md"

# Must match _SAI_KNOWLEDGE_MAX (bot.py) and _SAI_KNOWLEDGE_MAX_CHARS (relay.py).
CAP = 16000
FAIL_AT = int(CAP * 0.90)   # 14400
WARN_AT = int(CAP * 0.80)   # 12800


def main() -> int:
    if not DOC.exists():
        print(f"{DOC} is missing. Both bot.py and relay.py fetch it by raw URL; "
              f"deleting it empties SAi's product knowledge.", file=sys.stderr)
        return 1

    # Same normalisation the consumers apply before truncating.
    n = len(DOC.read_text(encoding="utf-8").strip())
    pct = 100.0 * n / CAP

    if n > FAIL_AT:
        print(
            f"sai-knowledge.md is {n:,} characters, {pct:.0f}% of the {CAP:,} "
            f"cap that bot.py and relay.py truncate it to.\n"
            f"Past {CAP:,} the tail is dropped from every SAi system prompt "
            f"with no error anywhere, so trim the file back under "
            f"{FAIL_AT:,} characters.\n"
            f"Raising the cap instead means editing _SAI_KNOWLEDGE_MAX in "
            f"server-assistant/bot.py AND _SAI_KNOWLEDGE_MAX_CHARS in "
            f"sa-relay/relay.py AND CAP here, and it costs tokens on every "
            f"single SAi call.",
            file=sys.stderr)
        return 1

    if n > WARN_AT:
        print(f"WARNING: sai-knowledge.md is {n:,} characters, {pct:.0f}% of the "
              f"{CAP:,} truncation cap. Start trimming: the build fails at "
              f"{FAIL_AT:,} and content silently disappears at {CAP:,}.")
        return 0

    print(f"sai-knowledge.md OK: {n:,} characters, {pct:.0f}% of the {CAP:,} cap "
          f"({CAP - n:,} to spare).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
