---
layout: wiki
title: "Account & premium"
permalink: /wiki/account/
wiki: true
wiki_category: "Account & premium"
summary: Manage your plan and AI tokens with /premium, spread the word and gather support, stay up to date, and unlock the Premium extras — white-label branding, server backups and ThreatNet auto-protect.
wiki_keywords: [premium, billing, upgrade, byok, top-up, tokens, invite, portal, vote, review, /review, review rewards, share, help, whatsnew, changelog, brand, white-label, backup, restore, threatnet, account]
description: Every account, billing and premium command in Server Assistant — /premium, /invite, /portal, /vote, /share, /help, /whatsnew, /brand, /backup and /threatnet — each shown exactly as it appears in Discord.
---

# 💎 Account &amp; premium

This is the home for everything to do with your **plan** — checking your AI
token allowance, upgrading or topping up, and unlocking the Premium extras like
white-label branding and server backups. It also gathers the little commands
that help the bot grow: invites, votes, sharing and the web portal.

> **Who can run these:** most are open to anyone in the server. Where a command
> changes billing or a Premium setting, the bot checks you're the **server
> owner** or hold **Manage Server** (or an admin role) first, and says so if
> you're not.

Commands are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs a Premium plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires owner / Manage Server

---

## Premium &amp; billing {#premium-billing}

`/premium` is your plan dashboard. It shows which plan you're on, how many AI
tokens you've used this month, and — if you're not yet Premium — the buttons to
upgrade or grab a one-off token top-up. The reply is private to you.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/premium</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">See your server's plan, AI token usage and upgrade options. Anyone can open it and start a subscription or buy a top-up; managing an <em>existing</em> subscription (card, invoices, cancel) is owner-only.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments — just run <code>/premium</code>.</em></td></tr>
  </table>
</div>

Step through the three things `/premium` does — **check your status**, **upgrade**, and **top up** — below.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">Premium · status, upgrade &amp; top-up</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="Your status &amp; token usage">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">✨ Server Assistant Premium</div>
          <div class="dc-desc"><strong>Plan:</strong> 🆓 <strong>Free trial</strong><br><br><strong>AI tokens:</strong><br><code>█████░░░░░░░░░</code> <strong>52K / 150K</strong> (35% used, lifetime trial)</div>
          <div class="dc-fname">💎 Premium unlocks</div>
          <div class="dc-fval">• 💬 <strong>SAi</strong> — AI tuning chat<br>• 🎨 <strong>White-label branding</strong><br>• 🛡️ Active Threat Score<br>• 🖼️ Unlimited <code>/imagine</code><br>• 750K tokens/month (or bring your own key)<br>• Priority support</div>
          <div class="dc-foot">Premium is per-server · cancel anytime · prices in USD + applicable tax</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Your plan at a glance.</strong> The top line shows your plan and a usage bar for your AI tokens — the free <strong>150K-token trial</strong>, or your monthly allowance on a paid plan. If you're on <strong>BYOK</strong> (your own key) it simply reads "no cap from us". If the allowance is exhausted, AI features pause but core moderation keeps running.</p>
  </div>

  <div class="wiz-step" data-step="Upgrade options">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🚀 Upgrade options</div>
          <div class="dc-desc">💎 <strong>Premium — $7 USD/month</strong><br>Subscribe now · card only charged when your free 150K tokens run out<br><br>🔑 <strong>Premium BYOK — $3 USD/month</strong><br>Bring your own AI key via <code>/ai-config</code> · card charged immediately</div>
          <div class="dc-btns">
            <span class="dc-btn green">🚀 Upgrade Now — $7/mo</span>
            <span class="dc-btn blurple">🔑 BYOK — $3/mo</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Two ways to go Premium.</strong> <strong>🚀 Upgrade Now</strong> ($7/mo) saves your card but only starts billing once your free 150K tokens are used up — if your usage stays light, you may never pay. <strong>🔑 BYOK</strong> ($3/mo) runs AI on your own API key (add it first with <code>/ai-config</code>) and is charged straight away. Both are per-server and cancel anytime. Each button opens a secure checkout link.</p>
  </div>

  <div class="wiz-step" data-step="Token top-ups">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed green">
          <div class="dc-title">🎯 Token top-ups</div>
          <div class="dc-desc">One-shot token packs that <strong>never expire</strong> and stack on any plan — handy for a busy month.</div>
          <div class="dc-fname">Available packs</div>
          <div class="dc-fval">• Splash · • Surge · • Stockpile</div>
          <div class="dc-btns">
            <span class="dc-btn grey">Splash — $3 · 300K</span>
            <span class="dc-btn grey">Surge — $10 · 1.25M</span>
            <span class="dc-btn grey">Stockpile — $25 · 3.4M</span>
          </div>
          <div class="dc-foot">Top-ups appear when they're available — buy one without changing your subscription</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Need more tokens this month?</strong> When top-up packs are available, <code>/premium</code> shows a button for each one. They're one-shot purchases that never expire and stack on top of whatever plan you're on — including an already-active Premium subscription — so you can ride out a busy spell without upgrading. Each button opens a secure checkout link.</p>
  </div>
</div>

For active subscribers, `/premium` instead shows a **💳 Manage billing** button
(owner-only) that opens the billing portal to update your card, view invoices or
cancel — plus the top-up buttons if you need extra tokens for a busy month.

---

## Get involved {#get-involved}

Small commands that help your community — and help the bot reach more
communities. None of these change anything in your server.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/invite</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Get the bot's invite link to add it to a server. After inviting, the owner or a Manage Server admin runs <code>/setup</code> to configure it. The reply is private to you.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/invite</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🔗 Add the bot to your server</div>
        <div class="dc-desc"><a href="#">Click here to invite</a><br><br>After inviting, the owner or any Manage Server admin runs <code>/setup</code> to configure the bot.</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/portal</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Open the web portal to manage this server from your browser — settings, moderation, insights, support tickets and your AI assistant <strong>SAi</strong>, all in one place. Sign in with the Discord account that owns or admins the server.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/portal</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🌐 Server Assistant — Web Portal</div>
        <div class="dc-desc">Manage this server from your browser — <strong>settings, moderation, insights, support tickets</strong>, and your AI assistant <strong>SAi</strong>, all in one place.</div>
        <div class="dc-foot">Only owners &amp; admins can sign in — your session is scoped to your own servers</div>
        <div class="dc-btns">
          <span class="dc-btn blurple">🌐 Open portal</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/vote</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Vote for the bot on <strong>DiscordForge</strong> to earn <strong>75 XP</strong> (150 if you're in a server with SA) and help it rank higher. Takes a few seconds, and you can vote again every 8 hours.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/vote</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed green">
        <div class="dc-title">⬆️ Vote for Server Assistant</div>
        <div class="dc-desc">Vote on <strong>DiscordForge</strong> to earn <strong>75 XP</strong> — doubled to <strong>150</strong> if you're in a server that has SA — and help the bot rank higher. Takes 5 seconds; you can vote again every 8 hours.<br><br>Thanks for the support! 💚</div>
        <div class="dc-btns">
          <span class="dc-btn blurple">🗳️ Vote on DiscordForge (+75/150 XP)</span>
          <span class="dc-btn blurple">⬆️ Top.gg</span>
          <span class="dc-btn blurple">⬆️ Discord Bot List</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/review</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Run <code>/review</code> to get your <strong>personal code</strong>, add it to a review you write on a bot directory (Top.gg, DiscordForge, Discord Bot List, discord.bots.gg), then run <code>/review</code> with the <strong>link</strong> to your published review. The bot checks your code is on the <strong>live page</strong> (not a screenshot — that can't be faked) and grants <strong>500 XP</strong> plus <strong>1 month of Double XP</strong> across every server you share with SA. <strong>Once per platform.</strong> Run it with no options to get your code and see where to review us.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td>link</td><td>text</td><td>A direct link to your published review (after you've added your code to it).</td></tr>
  </table>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/share</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Grab a link to add Server Assistant to another server — a quick way to recommend it to a community that could use a hand. (Premium and white-label servers see a friendly thank-you instead, since the card is just for free servers spreading the word.)</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/share</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🤝 Share Server Assistant</div>
        <div class="dc-desc">Know another community that could use a hand? Bring Server Assistant along — moderation, AutoMod, anti-raid, a daily health digest, and more, free to start.<br><br><strong>➕ Add it to another server</strong><br><br>Thank you for spreading the word — word of mouth is how the best communities find us. 💛</div>
      </div>
    </div></div>
  </div>
</div>

---

## Help &amp; updates {#help-updates}

Two quick references — what you can do, and what's changed lately. Both replies
are private to you.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/help</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Show the commands and capabilities available <em>to you</em>, grouped by category. Pick a category to drill in, or open the 🖱️ page to see Discord's right-click context-menu shortcuts.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/help</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🛡️ Server Assistant — Help</div>
        <div class="dc-desc">Pick a category below to see commands you can use.<br><br>💡 <strong>Three ways to use me:</strong><br>1. <strong>Type commands</strong> in your staff-chat channel<br>2. <strong>Slash commands</strong> — type <code>/</code> to see options<br>3. <strong>Right-click context menus</strong> — see the 🖱️ button</div>
        <div class="dc-fname">Your role level</div><div class="dc-fval">Moderator</div>
        <div class="dc-fname">Available actions</div><div class="dc-fval">12</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/whatsnew</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">See what's changed recently. It flags how many updates have landed since you last looked and links the full changelog.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/whatsnew</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">📣 What's New in Server Assistant</div>
        <div class="dc-desc">🆕 <strong>2 updates since you last checked.</strong></div>
        <div class="dc-fname">v5.6 — Account &amp; premium polish 🆕</div><div class="dc-fval">• Clearer token-usage bar in <code>/premium</code><br>• One-shot token top-ups</div>
        <div class="dc-fname">v5.5 — Smarter anti-raid 🆕</div><div class="dc-fval">• Faster raid detection<br>• Tunable join thresholds</div>
        <div class="dc-foot">You're up to date · Full changelog linked in the embed</div>
      </div>
    </div></div>
  </div>
</div>

---

## White-label {#white-label}

`/brand` <span class="wiki-prem">PREMIUM</span> rebrands the bot for **your**
server. Discord only allows one global bot identity, so white-label changes what
*can* be changed per server: the bot's **nickname** and the **name + icon +
colour** on the embeds your members see. It's a small panel with a live sample
so you can see the result as you go.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/brand</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">White-label the bot for your server — set a brand name, icon and embed colour, and toggle it on. Needs full Premium (not Premium BYOK) and Manage Server. Optionally attach an icon file when you run it.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>icon</code> <span class="opt">optional</span></td><td>file</td><td>Upload a custom brand icon (PNG/JPG/GIF/WebP, under 12 MB) — or paste a URL in the panel instead.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/brand</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🎨 White-label branding</div>
        <div class="dc-desc"><strong>Status:</strong> ⚪ Off<br><strong>Brand name:</strong> <em>not set</em><br><strong>Icon:</strong> <em>none</em><br><strong>Colour:</strong> #3498DB<br><br>When <strong>On</strong>, the bot's nickname becomes your brand name and member-facing embeds carry your name + icon.</div>
        <div class="dc-foot">Discord can't change a bot's real username/avatar per server — this rebrands the nickname and embeds, not the account itself</div>
        <div class="dc-btns">
          <span class="dc-btn green">🟢 Turn on</span>
          <span class="dc-btn blurple">✏️ Name, icon &amp; colour</span>
          <span class="dc-btn grey">Done</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

Press **✏️ Name, icon &amp; colour** and a short form pops up to set all three at
once:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
    <div class="dc-modal">
      <div class="dc-modal-title">Branding</div>
      <div class="dc-modal-sub">Set how the bot appears to your members.</div>
      <div class="dc-flabel">Brand name</div>
      <div class="dc-input ph">e.g. CoolServer Bot</div>
      <div class="dc-flabel">Icon URL — or upload via /brand icon:</div>
      <div class="dc-input ph">https://…/icon.png</div>
      <div class="dc-flabel">Colour hex (optional)</div>
      <div class="dc-input ph">#5865F2</div>
      <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
    </div>
  </div></div>
</div>

---

## Backup &amp; restore {#backup-restore}

`/backup` <span class="wiki-prem">PREMIUM</span> snapshots your server's
**structure** — roles, channels, categories and permission overwrites — so you
can recreate anything that goes missing. Restores are **additive**: they recreate
what's gone and reapply overwrites, but **never delete** anything.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/backup</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Open the backup manager — create snapshots of your roles, channels and permission overwrites, then restore or delete them. Needs full Premium (not Premium BYOK) and Manage Server. <strong>Restore is owner-only.</strong></p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments — the manager opens with all controls.</em></td></tr>
  </table>
</div>

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">Backup &amp; restore</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="The backup manager">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">💾 Server backups</div>
          <div class="dc-desc">Snapshots of your roles, channels &amp; permission overwrites.<br><br>▶ <strong>Backup 2</strong> — 2026-06-22 · 14R / 6C / 31ch<br>• <strong>Backup 1</strong> — 2026-06-01 · 12R / 5C / 28ch</div>
          <div class="dc-select">Select a backup…</div>
          <div class="dc-btns">
            <span class="dc-btn green">📸 Create backup</span>
            <span class="dc-btn red">♻️ Restore</span>
            <span class="dc-btn grey">🗑️ Delete</span>
            <span class="dc-btn grey">Done</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>One screen for everything.</strong> Each saved backup shows its date and a count of roles (R), categories (C) and channels (ch). <strong>📸 Create backup</strong> takes a fresh snapshot; pick one from the dropdown to <strong>♻️ Restore</strong> or <strong>🗑️ Delete</strong> it. Restore is owner-only.</p>
  </div>

  <div class="wiz-step" data-step="Confirm a restore">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">♻️ Restore “Backup 2”?</div>
          <div class="dc-desc">Recreates anything <strong>missing</strong> — up to 14 role(s), 6 category(ies), 31 channel(s) — and reapplies overwrites. <strong>Nothing is deleted.</strong></div>
          <div class="dc-btns">
            <span class="dc-btn red">✅ Restore (additive)</span>
            <span class="dc-btn grey">Cancel</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Additive only — nothing is removed.</strong> Only the server owner can confirm a restore. It recreates missing roles, categories and channels and reapplies permission overwrites; anything already present is left exactly as it is.</p>
  </div>

  <div class="wiz-step" data-step="Restore complete">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed green">
          <div class="dc-title">✅ Restore complete</div>
          <div class="dc-desc">Created <strong>3</strong> role(s), <strong>1</strong> category(ies), <strong>5</strong> channel(s).<br>Nothing was deleted.</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Done.</strong> The bot reports exactly what it recreated. If a handful of items couldn't be rebuilt (for example, because of role hierarchy), it tells you the count so you can finish those by hand.</p>
  </div>
</div>

---

## Cross-server safety {#cross-server-safety}

ThreatNet is Server Assistant's **cross-server safety network**. The two
commands below let you **check your own status** and — on Premium —
**auto-protect** your server against users who join carrying a cross-server
safety record.

> **How ThreatNet works, what it records, and how to opt out** is covered in
> full on the **[Privacy page]({{ '/privacy/' | relative_url }})**. This page
> only describes what the two commands do.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/threatnet status</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Check your own ThreatNet status — whether you're opted out — and get the links to manage it from the web portal. The reply is private to you.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3"><em>No arguments.</em></td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/threatnet status</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">🟢 Your ThreatNet status</div>
        <div class="dc-desc">You are <strong>not opted out</strong>. To change this, sign in to the web portal.</div>
        <div class="dc-foot">Full detail and opt-out controls live on the Privacy page &amp; web portal</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/threatnet autoban</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Auto-protect: automatically ban users who join your server carrying a cross-server safety record at or above a trigger level you choose. Needs Premium and Manage Server. Use <code>status</code> to check the current setting, or <code>off</code> to turn it off. A triggered ban is <strong>silent</strong> — no DM and <strong>no in-server appeal ticket</strong> (unlike a normal ban); the automated decision is disclosed in the <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a> and stays contestable via the web portal.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>action</code> <span class="req">required</span></td><td>choice</td><td><code>on</code>, <code>off</code> or <code>status</code>.</td></tr>
    <tr><td><code>level</code> <span class="opt">optional</span></td><td>choice</td><td>Minimum band that triggers a ban: <code>high</code> (safest — serious + corroborated), <code>elevated</code> (broader), or <code>low</code> (widest; higher false-positive risk). Defaults to <code>high</code>.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/threatnet autoban</span> <span class="arg">action:</span> on <span class="arg">level:</span> high</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed green">
        <div class="dc-title">🛡️ ThreatNet auto-protect is now ON</div>
        <div class="dc-desc"><strong>Trigger level:</strong> 🔴 High (serious + corroborated across 2+ servers)<br>Users who join <strong>at or above</strong> this level are banned automatically on join.</div>
        <div class="dc-foot">Opted-out users are never auto-banned · each auto-ban is logged and appealable via the web portal · turn it off any time with /threatnet autoban off</div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">
Choosing a level <strong>below High</strong> casts a wider net on weaker
signals, which raises the chance of banning someone by mistake — the bot warns
you when you pick one. <strong>High</strong> (serious and corroborated across two
or more servers) is the safest default. For how the network decides records, what
it keeps, and how to opt out, see the
<a href="{{ '/privacy/' | relative_url }}">Privacy page</a>.</p>

---

## See also

- [Pricing]({{ '/pricing/' | relative_url }}) — what's free, what's Premium, and the plan comparison
- [Privacy]({{ '/privacy/' | relative_url }}) — how ThreatNet works, what's collected, and how to opt out
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
</content>
</invoke>
