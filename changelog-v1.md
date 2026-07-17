---
layout: default
title: Changelog - v1.x
permalink: /changelog/v1/
description: Server Assistant v1.x release history.
---

# Changelog: v1.x

The v1.x line: initial release. **Tap a release to expand it.**

<p class="cl-legend"><span class="lbl">Release type</span><span class="cl-key fix">Fix</span><span class="cl-key feature">Feature</span><span class="cl-key update">Update</span></p>

<details class="doc-sec" markdown="1" data-kind="feature">
<summary>v1.0: Initial release</summary>

2026-04-30

Initial release.

- Role-based moderation (Owner / Admin / Moderator).
- Slash command `/setup` (early version).
- Core ban / kick / mute / warn / info / stats commands.
- Owner approval workflow for dangerous actions.
</details>

<style>
.doc-sec { border: 1px solid var(--glass-border); border-radius: 12px; margin: .5rem 0; background: rgba(255,255,255,0.04); }
.doc-sec > summary { cursor: pointer; font-size: 1.02rem; font-weight: 700; padding: .65rem .85rem; list-style: none; color: var(--ink); }
.doc-sec > summary::-webkit-details-marker { display: none; }
.doc-sec > summary::before { content: "▸"; color: var(--ink-soft); margin-right: .5rem; font-size: .8em; }
.doc-sec[open] > summary::before { content: "▾"; }
.doc-sec[open] { padding: 0 .9rem .6rem; }
.doc-sec[open] > summary { margin: 0 -.9rem .35rem; }
.doc-sec code { color: var(--accent); }
.doc-sec h3 { font-size: 1rem; margin: .7rem 0 .3rem; }
/* "Tempered": named quality release; tempered-glass styling, set apart from numbered cards */
.doc-sec.tempered { background: linear-gradient(135deg, rgba(96,165,250,0.17), rgba(124,155,255,0.07) 55%, rgba(20,25,39,0.45)); border: 1px solid rgba(96,165,250,0.45); box-shadow: inset 0 0 0 1px rgba(158,197,255,0.10), 0 10px 34px rgba(20,40,90,0.40); }
.doc-sec.tempered > summary { color: #cfe0ff; font-size: 1.08rem; }
.doc-sec.tempered > summary::before { color: #60a5fa; }
.doc-sec.tempered .tg-badge { display: inline-block; font-size: .6rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; color: #0a1030; background: linear-gradient(135deg, #bcd6ff, #60a5fa); padding: .1rem .45rem; border-radius: 999px; margin-left: .55rem; vertical-align: middle; }
/* Release-type colour coding: Fix / Feature / Update */
.doc-sec[data-kind] { border-left-width: 3px; border-left-style: solid; }
.doc-sec[data-kind="fix"]     { border-left-color: #e0913a; }  /* amber */
.doc-sec[data-kind="feature"] { border-left-color: #2ea36b; }  /* green */
.doc-sec[data-kind="update"]  { border-left-color: #3b82c4; }  /* blue  */
.doc-sec > summary { position: relative; }
.doc-sec[data-kind] > summary { padding-right: 5.4rem; }
.doc-sec[data-kind] > summary::after {
  position: absolute; right: .7rem; top: .6rem;
  font-size: .58rem; font-weight: 800; letter-spacing: .07em; text-transform: uppercase;
  padding: .14rem .5rem; border-radius: 999px; color: #fff; line-height: 1.5;
}
.doc-sec[data-kind="fix"]     > summary::after { content: "Fix";     background: #c9781a; }
.doc-sec[data-kind="feature"] > summary::after { content: "Feature"; background: #1e8f5e; }
.doc-sec[data-kind="update"]  > summary::after { content: "Update";  background: #2f74b5; }
/* Tempered cards keep their own identity, never overridden by a type accent. */
.doc-sec.tempered[data-kind] { border-left-width: 1px; }
.doc-sec.tempered[data-kind] > summary { padding-right: .85rem; }
.doc-sec.tempered[data-kind] > summary::after { content: none; }
/* Legend */
.cl-legend { display: flex; gap: .7rem; flex-wrap: wrap; align-items: center; margin: .2rem 0 1.1rem; font-size: .74rem; }
.cl-legend .lbl { font-size: .66rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-soft); }
.cl-key { display: inline-flex; align-items: center; gap: .4rem; color: var(--ink-soft); }
.cl-key::before { content: ""; width: .7rem; height: .7rem; border-radius: 3px; }
.cl-key.fix::before     { background: #c9781a; }
.cl-key.feature::before { background: #1e8f5e; }
.cl-key.update::before  { background: #2f74b5; }
/* "Superseded by vX" pill: a release whose feature was later replaced */
.cl-super { display: inline-block; font-size: .58rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; color: #cbd2e0; background: rgba(120,132,158,0.26); border: 1px solid rgba(160,172,196,0.34); padding: .1rem .5rem; border-radius: 999px; margin-left: .5rem; vertical-align: middle; text-decoration: none; white-space: nowrap; }
.cl-super:hover { background: rgba(150,162,186,0.42); color: #fff; text-decoration: none; }
/* A superseded card shows the "Superseded by" pill inline instead of the type pill. */
.doc-sec.superseded[data-kind] > summary { padding-right: .85rem; }
.doc-sec.superseded[data-kind] > summary::after { content: none; }
.doc-sec.superseded { opacity: .82; }
/* Version navigation */
.changelog-nav { display: flex; gap: 0.4rem; flex-wrap: wrap; margin: 0.6rem 0 1.2rem; padding: 0.5rem; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; }
.changelog-nav strong { font-size: 0.78rem; color: var(--accent); font-weight: 700; padding: 0.35rem 0.6rem 0.35rem 0; align-self: center; }
.changelog-nav a { display: inline-block; padding: 0.35rem 0.85rem; border-radius: 999px; font-size: 0.85rem; font-weight: 600; text-decoration: none; color: var(--fg-1); background: var(--surface-2); border: 1px solid var(--border); transition: all 0.15s; }
.changelog-nav a:hover { background: var(--accent); color: var(--on-accent); border-color: var(--accent); text-decoration: none; }
.changelog-nav a.current { background: var(--accent); color: var(--on-accent); border-color: var(--accent); }
.changelog-nav .latest-tag { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.8; margin-left: 0.3rem; }
</style>

<div class="changelog-nav">
  <strong>Browse by version</strong>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/" class="{% if page.permalink == '/changelog/' %}current{% endif %}">v6.x <span class="latest-tag">latest</span></a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v5/" class="{% if page.permalink == '/changelog/v5/' %}current{% endif %}">v5.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v4/" class="{% if page.permalink == '/changelog/v4/' %}current{% endif %}">v4.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v3/" class="{% if page.permalink == '/changelog/v3/' %}current{% endif %}">v3.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v2/" class="{% if page.permalink == '/changelog/v2/' %}current{% endif %}">v2.x</a>
  <a href="{{ site.url }}{{ site.baseurl }}/changelog/v1/" class="{% if page.permalink == '/changelog/v1/' %}current{% endif %}">v1.x</a>
</div>

## What's next?

- [Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/) for what's coming
- [Features]({{ site.url }}{{ site.baseurl }}/features/) for the current capability set
- [Setup]({{ site.url }}{{ site.baseurl }}/setup/) if you're new
