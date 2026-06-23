---
layout: wiki
title: "Server Assistant Ban Appeals"
permalink: /wiki/ban-appeals/
wiki: true
wiki_category: "Feature guides"
summary: A deep-dive on ban appeals — the ban DM that tells the member exactly why, the single reply that opens a staff appeal ticket, the one-tap Unban / Deny / Research / Info / Warnings / Notes buttons, and the Premium guided multi-round flow. Shown one state at a time exactly as it appears in Discord.
wiki_keywords: [ban, appeal, unban, deny, research, recovery, dm, ban appeal, multi-round, ban appeals]
description: How Server Assistant's ban appeals work end to end — the reason DM, the member's one reply, the staff appeal ticket with its review buttons, the Premium multi-round conversation, and why a ThreatNet auto-ban is the silent exception that's contested via the web portal instead.
---

# 📨 Ban appeals

A ban shouldn't be a silent door-slam. With **ban appeals** switched on, anyone
you ban gets a DM explaining **exactly why** — and an invitation to put their
case in a single reply. That reply opens a tidy **appeal ticket** for your staff,
with one-tap **Unban**, **Deny** and a set of context buttons right there in your
log channel. No digging through audit logs, no per-incident channels, no
“did you get my appeal?” chasing.

This page walks the whole flow, shows the free vs Premium difference, and covers
the one important exception: a **ThreatNet auto-ban**, which is silent by design.

> **It's automatic once it's on.** Ban appeals are controlled from
> [`/settings`]({{ '/wiki/' | relative_url }}) and are **on by default**. There's
> nothing for a banned member to install or learn — they just reply to the DM.

Things on this page are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs a Premium plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires staff with the ban capability

---

## Step through an appeal

Use **Next ›** and **‹ Back** to walk the flow, from the ban DM through the
member's reply, the staff ticket and its buttons, the optional Premium
back-and-forth, and the outcome.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">A ban appeal, end to end</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="1 · The ban DM">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed red">
          <div class="dc-title">You've been banned from The Hangout</div>
          <div class="dc-desc"><strong>Reason:</strong> Posting scam links<br><br>If you'd like to appeal, <strong>reply to this message once</strong> with your appeal. You get <strong>one</strong> reply — so make it count. It'll be sent to the staff team for review, and you'll hear back here if a decision is made.</div>
          <div class="dc-foot">Server Assistant · ban appeal</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The member is told why.</strong> The banned member gets the exact reason and is invited to appeal by <em>replying</em> to the DM — there's <strong>no button to find</strong>, just a reply. If no reason was recorded, the DM reads “No reason was provided.” If their DMs are closed the bot simply can't reach them, and the appeal can't start.</p>
  </div>

  <div class="wiz-step" data-step="2 · They reply with their case">
    <div class="dc">
      <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="The banned member" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Banned member</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">That wasn't me posting links — my account was compromised and I've changed my password since. Really sorry for the trouble, I'd love to come back.</div>
      </div></div>
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">✅ Thanks — your appeal has been sent to the staff team for review.</div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>One reply, submitted.</strong> They reply once and the bot confirms it's gone to the staff team. They can't spam it — a second reply just gets <em>“📩 Your appeal is in with the staff team — you'll get a message here if there's an update.”</em> On the free plan this single reply is the appeal; on Premium the bot can ask a short follow-up first (see step 5).</p>
  </div>

  <div class="wiz-step" data-step="3 · Staff get an appeal ticket">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">📨 Ban appeal</div>
          <div class="dc-desc">That wasn't me posting links — my account was compromised and I've changed my password since…</div>
          <div class="dc-fname">User</div><div class="dc-fval">@FormerMember (<code>123456789012345678</code>)</div>
          <div class="dc-fname">Ban reason</div><div class="dc-fval">Posting scam links</div>
          <div class="dc-btns">
            <span class="dc-btn green">✅ Unban</span>
            <span class="dc-btn red">🚫 Deny</span>
            <span class="dc-btn grey">🔎 Research</span>
            <span class="dc-btn grey">📨 More info</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn grey">👤 Info</span>
            <span class="dc-btn grey">⚠️ Warnings</span>
            <span class="dc-btn grey">📝 Notes</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The ticket.</strong> The appeal lands in your log channel with the member's words, their ID and the original ban reason. <strong>✅ Unban</strong> lifts the ban and DMs the member the good news; <strong>🚫 Deny</strong> closes the appeal and tells them the ban stands. <strong>👤 Info</strong>, <strong>⚠️ Warnings</strong> and <strong>📝 Notes</strong> pull up the member's history right there — privately, just for you — so you decide with full context. <strong>📨 More info</strong> is Premium (step 5). Only staff with the ban capability can press any of them.</p>
  </div>

  <div class="wiz-step" data-step="4 · Research, on demand">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-embed amber">
          <div class="dc-title">🔎 Research — @FormerMember</div>
          <div class="dc-desc">• <strong>Last message:</strong> a shortened link to a “free Nitro” giveaway<br>• <strong>Tone:</strong> bait-style, not conversational<br>• <strong>Read:</strong> consistent with the scam-link ban; the compromised-account claim is plausible but unverifiable here<br>• <strong>Suggested:</strong> check account age and warning history before deciding</div>
          <div class="dc-foot">AI report · runs only when you press Research</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>🔎 Research <span class="cmd-tag ai">AI</span>.</strong> Press <strong>🔎 Research</strong> and the bot writes a short, private assessment of the member's most recent cached message — a few bullets to help you weigh the appeal. It's <strong>opt-in</strong>: it runs (and costs AI only) the moment you press it, never before. If nothing was cached — they hadn't spoken recently, or the bot restarted since the ban — it says so rather than guessing.</p>
  </div>

  <div class="wiz-step" data-step="5 · Ask for more info (Premium)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Ask the member for more info</div>
          <div class="dc-flabel">Your question to the member</div>
          <div class="dc-input ph">e.g. What led up to the messages you were banned for?</div>
          <div class="dc-btns"><span class="dc-btn blurple">Submit</span></div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>📨 More info <span class="cmd-tag premium">PREMIUM</span>.</strong> Not ready to decide? On Premium, <strong>📨 More info</strong> opens this short form. Type a question, the bot DMs it to the member, and the ticket pauses — <em>“this card is paused; a fresh one returns when they reply.”</em> Their follow-up reply doesn't count against the one-reply limit, and a fresh ticket comes back the moment they answer. If their DMs are closed the appeal simply stays open in your channel.</p>
  </div>

  <div class="wiz-step" data-step="6 · A guided conversation (Premium)">
    <div class="dc">
      <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="The banned member" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Banned member</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">It wasn't me — my account was hacked.</div>
      </div></div>
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">💬 Thanks for letting us know. When do you think your account was compromised, and have you since secured it?</div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Multi-round appeals <span class="cmd-tag premium">PREMIUM</span>.</strong> With guided multi-round appeals on, the bot can ask <strong>one or two short follow-up questions</strong> before passing the appeal on — gathering the full picture so a one-line “sorry” becomes something your staff can actually act on. The AI only <em>facilitates</em>: it never decides the outcome. When it concludes, staff get the full back-and-forth plus a short, neutral summary of the member's case.</p>
  </div>

  <div class="wiz-step" data-step="7 · The member hears back">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">✅ Good news — your ban appeal for <strong>The Hangout</strong> was <strong>approved</strong> and you've been unbanned. Please review the rules before rejoining.</div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The outcome.</strong> Whatever staff decide, the member hears back in their DMs — an approval comes with the unban and a nudge to read the rules; a denial says the ban stands. No chasing, no follow-up tickets.</p>
  </div>
</div>

---

## Free vs Premium {#free-vs-premium}

Ban appeals are **free on every plan** — the reason DM, the single-reply appeal,
the staff ticket and its **Unban / Deny / Research / Info / Warnings / Notes**
buttons are all included. Premium adds the guided, conversational layer.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">Ban appeals</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">On by default. A banned member is DM'd the exact reason and invited to send <strong>one</strong> reply, which opens a staff appeal ticket in your log channel. Staff get one-tap <strong>✅ Unban</strong> and <strong>🚫 Deny</strong>, the <strong>🔎 Research</strong> AI report (opt-in — costs nothing unless pressed), and <strong>👤 Info</strong>, <strong>⚠️ Warnings</strong> and <strong>📝 Notes</strong> for context. Only staff with the ban capability can act on it.</p>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">Multi-round appeals</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Adds a short, AI-facilitated back-and-forth: instead of taking a single reply, the bot can ask one or two clarifying follow-up questions to gather the full picture, then hands staff the whole conversation with a neutral summary. The AI only facilitates — it never decides the outcome. Premium also unlocks the <strong>📨 More info</strong> button, so staff can ask the member a question mid-appeal without spending the member's one reply.</p>
</div>

> **“Why was I actioned?”** Separately, on Premium, the DM a member gets for a
> *warning or other action* (not a ban) carries a **❓ Why was I actioned?**
> button. One tap and the bot writes them a short, plain-English explanation of
> what the action was for — heading off a lot of confused replies to your staff.

---

## The exception: a ThreatNet auto-ban {#threatnet-exception}

There's one ban that does **not** trigger any of the above. When **ThreatNet**
auto-protect (a Premium safety net) bans an account on join because it has a
serious, corroborated abuse history across other protected servers, that ban is
**silent**:

- the member is **not** DM'd a reason, and
- **no appeal ticket** is opened in your log channel.

This is deliberate, and it's disclosed in our
[Privacy Policy]({{ '/privacy/' | relative_url }}). A ThreatNet auto-ban is an
automated, cross-server decision — so it is **not** appealed through the
in-server flow on this page. Instead, it remains **contestable via the web
portal**, where the affected person can challenge the automated decision and
manage their profiling preferences.

> **It's contestable, not unappealable.** A ThreatNet auto-ban can always be
> challenged — just through the [web portal]({{ '/portal/' | relative_url }})
> rather than a ban-appeal DM. See [ThreatNet]({{ '/wiki/threatnet/' | relative_url }})
> for how the cross-server signal works and what it does (and doesn't) share.

---

## See also

- [Member experience]({{ '/wiki/members/' | relative_url }}) — the welcome DM, verification and every other flow a member sees
- [ThreatNet]({{ '/wiki/threatnet/' | relative_url }}) — the cross-server threat network and its silent auto-ban
- [Privacy Policy]({{ '/privacy/' | relative_url }}) — what's collected, kept and shared, and how an automated decision is contested
