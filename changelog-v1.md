---
layout: default
title: Changelog — v1.x
permalink: /changelog/v1/
description: Server Assistant v1.x release history.
---

# 📋 Changelog — v1.x

The v1.x line — initial release.

---

## 2026-04-30 — v1.0

Initial release.

- Role-based moderation (Owner / Admin / Moderator).
- Slash command `/setup` (early version).
- Core ban / kick / mute / warn / info / stats commands.
- Owner approval workflow for dangerous actions.

---

<style>
.changelog-nav { display: flex; gap: 0.4rem; flex-wrap: wrap; margin: 0.6rem 0 1.2rem; padding: 0.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; }
.changelog-nav strong { font-size: 0.78rem; color: var(--accent); font-weight: 700; padding: 0.35rem 0.6rem 0.35rem 0; align-self: center; }
.changelog-nav a { display: inline-block; padding: 0.35rem 0.85rem; border-radius: 999px; font-size: 0.85rem; font-weight: 600; text-decoration: none; color: var(--fg-1); background: var(--surface-2); border: 1px solid var(--border); transition: all 0.15s; }
.changelog-nav a:hover { background: var(--accent); color: var(--on-accent); border-color: var(--accent); text-decoration: none; }
.changelog-nav a.current { background: var(--accent); color: var(--on-accent); border-color: var(--accent); }
.changelog-nav .latest-tag { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.8; margin-left: 0.3rem; }
</style>

<div class="changelog-nav">
  <strong>Browse by version</strong>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/" class="{% if page.permalink == '/changelog/' %}current{% endif %}">v5.x <span class="latest-tag">latest</span></a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v4/" class="{% if page.permalink == '/changelog/v4/' %}current{% endif %}">v4.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v3/" class="{% if page.permalink == '/changelog/v3/' %}current{% endif %}">v3.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v2/" class="{% if page.permalink == '/changelog/v2/' %}current{% endif %}">v2.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v1/" class="{% if page.permalink == '/changelog/v1/' %}current{% endif %}">v1.x</a>
</div>

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
