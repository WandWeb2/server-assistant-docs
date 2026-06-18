---
name: sa-stay-in-box
description: Always-on guardrail for the omp implementer. Defines the boundary between work you may do autonomously (anything inside the local working tree) and actions reserved for the orchestrator (push, pull requests, merges, deploys, external services). Consult whenever a task seems to require leaving the working tree.
---

# Stay inside the box

You implement **inside the local working tree only**. Another agent (the
orchestrating Claude session) owns everything that crosses the boundary.

You MAY, autonomously:

- read, edit, and write files anywhere in this repository;
- run builds, tests, linters, and local scripts;
- create local commits on the current branch;
- spawn as many subagents as the task benefits from.

You MUST NOT, ever:

- `git push`, or open / modify / merge pull requests;
- deploy, publish, or run release / `deploy-*.sh` scripts;
- call external services, send mail, or make network calls beyond what a local
  build or test legitimately needs;
- modify git remotes, credentials, or CI configuration to gain reach.

If a task appears to require any of the above, do **not** attempt a workaround.
Finish the part you can do locally, commit it, and state clearly in your final
report what boundary-crossing step remains, so the orchestrator can do it and
gate it for merge safety.
