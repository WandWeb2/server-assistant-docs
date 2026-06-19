---
layout: default
title: Server Assistant Partners
permalink: /partnerships/
description: The people and projects we partner with — tools and communities that share Server Assistant's bar for quality, privacy, and looking after Discord moderators.
image: /assets/banner.jpeg
---

<div align="center">
  <h1>Partners</h1>
  <p class="section-lead">We keep this list short on purpose. A partner is someone we'd happily point our own community toward — tools and communities that share our bar for quality, respect your privacy, and genuinely strive to make Discord better.</p>
</div>

<style>
.section-lead { text-align: center; font-size: 1rem; color: var(--ink-soft); max-width: 720px; margin: .6rem auto 1.6rem; line-height: 1.55; }

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 360px));
  justify-content: center;
  gap: 1.1rem;
  margin: 1.4rem 0 2rem;
}

.partner-card {
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.045);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 1.4rem 1.4rem 1.25rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
}
.partner-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0,0,0,.34);
  border-color: rgba(60,193,240,0.34);
}

.partner-logo {
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: .9rem;
}
.partner-logo img { max-height: 56px; max-width: 100%; box-shadow: none; border-radius: 0; }

.partner-card h3 { margin: 0 0 .15rem; font-size: 1.15rem; }
.partner-tag { margin: 0 0 .7rem; font-size: .82rem; font-weight: 600; color: var(--accent); letter-spacing: .02em; }
.partner-card p.partner-blurb { margin: 0 0 1rem; color: var(--ink-soft); font-size: .92rem; line-height: 1.55; flex: 1; }

.partner-link {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  align-self: flex-start;
  padding: .5rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: .88rem;
  text-decoration: none !important;
  background: var(--accent-soft);
  color: var(--accent) !important;
  border: 1px solid rgba(60,193,240,0.28);
  transition: background .15s ease;
}
.partner-link:hover { background: var(--accent-container); }

.partner-cta {
  text-align: center;
  margin: 2rem auto 0;
  max-width: 640px;
  padding: 1.4rem 1.5rem;
  border-radius: 16px;
  border: 1px dashed var(--glass-border);
  background: rgba(255,255,255,0.03);
}
.partner-cta h2 { margin: 0 0 .4rem; font-size: 1.2rem; }
.partner-cta p { margin: 0 0 .9rem; color: var(--ink-soft); font-size: .92rem; line-height: 1.55; }
.partner-cta a.contact {
  display: inline-block;
  padding: .6rem 1.3rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none !important;
  background: rgba(255,255,255,0.08);
  color: var(--ink) !important;
  border: 1px solid var(--glass-border);
}
.partner-cta a.contact:hover { background: rgba(255,255,255,0.14); }

/* Pending partner — frosted cover with an "In talks" badge, not yet live. */
.partner-card.pending { position: relative; overflow: hidden; }
.partner-card.pending:hover { transform: none; box-shadow: none; border-color: var(--glass-border); }
.partner-cover {
  position: absolute; inset: 0; z-index: 2;
  display: flex; align-items: center; justify-content: center;
  background: rgba(20,15,15,0.42);
  backdrop-filter: blur(7px) saturate(120%);
  -webkit-backdrop-filter: blur(7px) saturate(120%);
  border-radius: inherit;
}
.partner-cover span {
  font-size: .9rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
  color: var(--fg-0);
  padding: .45rem .95rem; border-radius: 999px;
  background: rgba(255,255,255,0.08); border: 1px solid var(--glass-border);
}
</style>

<div class="partners-grid">

  <div class="partner-card pending">
    <div class="partner-logo">
      <img src="{{ '/assets/partners/discordforge.svg' | relative_url }}" alt="DiscordForge logo" width="300" height="70" loading="lazy">
    </div>
    <h3>DiscordForge</h3>
    <p class="partner-tag">Bot &amp; server listing site</p>
    <p class="partner-blurb">DiscordForge is a bot and server listing site built on quality by a small dev team we work closely with. We're aiming at the same goals — helping people find great tools and run healthier communities — so we point our audiences toward each other's best work.</p>
    <a class="partner-link" href="https://discordforge.org" target="_blank" rel="noopener">Visit DiscordForge →</a>
    <div class="partner-cover" aria-hidden="true"><span>In talks</span></div>
  </div>

</div>

<div class="partner-cta">
  <h2>Interested in partnering?</h2>
  <p>If you build something Discord communities rely on and it lines up with how we work — privacy-first, no dark patterns, genuinely useful — we'd like to hear from you.</p>
  <a class="contact" href="{{ site.url }}{{ site.baseurl }}/support/">Get in touch →</a>
</div>
