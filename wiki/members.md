---
layout: wiki
title: "Member experience"
permalink: /wiki/members/
wiki: true
wiki_category: "Features"
summary: What your members and newcomers actually see, the welcome DM, the Reception verification desk, the ban-appeal conversation, self-service role panels, custom commands and the staff profile lookup. Every flow shown exactly as it appears in Discord.
wiki_keywords: [welcome, onboarding, verify, verification, ban appeal, appeal, unban, rolepanel, role panel, self-service roles, customcmd, custom commands, info, member, profile]
description: A member-facing reference for Server Assistant, the welcome DM, the Reception verification desk, the ban-appeal flow, self-service role panels, custom commands and the /info lookup, each shown one state at a time exactly as it appears in Discord.
---

# Member experience

A few parts of Server Assistant land directly in front of your members: the welcome on
the way in, the Reception desk where they verify, and the ban-appeal conversation. This
page covers everything a member sees, plus the two Premium self-service tools (**role
panels** and **custom commands**) and the staff **profile lookup**.

> **Most of this is automatic.** The welcome DM, the Reception desk and the ban-appeal
> flow all fire on their own once switched on in
> [`/settings`]({{ '/wiki/' | relative_url }}), with nothing for a member to install.

Commands on this page are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs a Premium plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> requires a staff role or permission

---

## Welcome &amp; verification {#welcome-verification}

When someone joins, the bot can greet them with a welcome DM and, if you've turned it
on, send them to **Reception**, an in-server desk where they **verify** before getting
full access. Both are optional: the welcome DM is set in the onboarding panel, Reception
in [`/settings → Verification`]({{ '/wiki/settings/' | relative_url }}). Here's what the
*member* sees.

### The welcome DM

If you've written a welcome message, the bot DMs it to each new member. The wording is
yours; the bot fills in placeholders like the member's name and your server's name. A
typical one:

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">Hey @Newcomer, welcome to <strong>The Hangout</strong>! <br><br>Pop into <strong>#introductions</strong> to say hello, grab your colours over in <strong>#roles</strong>, and give the <strong>#rules</strong> a quick read. Glad to have you with us.</div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>It's your message, in your voice.</strong> The welcome DM is plain text you write yourself. If a member has DMs closed, the bot skips it. Leave the message blank and nothing is sent.</p>

### Reception: the verification desk

With verification switched on, newcomers land in your **#reception** channel and see a
branded welcome desk: a pinned banner, a short greeting, and a single **Verify me**
button.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">#reception</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">Welcome to The Hangout</div>
      <div class="dc-desc">Glad to have you with us! Tap <strong>Verify me</strong> below to show you're a real person and unlock the rest of the server.</div>
      <div class="dc-btns">
        <span class="dc-btn green">Verify me</span>
      </div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">Tapping <strong>Verify me</strong> opens a quick human-check, one simple question, like <em>“how many eyes does a spider have?”</em>, answered privately, just for them.</p>

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">Quick check</div>
      <div class="dc-desc">Just one quick question to show you're human:<br><br><strong>How many eyes does a spider have?</strong></div>
      <div class="dc-select">Type your answer…</div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>Pass and you're in.</strong> A correct answer grants the verified role you chose in settings; a wrong answer is a friendly retry, Reception <strong>never bans</strong> someone for fumbling the question. Because the <em>only</em> thing to do at the desk is verify, it doubles as a <strong>honeypot</strong>: an unverified account that posts instead of verifying is removed automatically (brand-new, untrusted accounts are banned outright, and the trap tightens during a raid). <strong>Free</strong> servers get the desk and a greeting you word yourself; <strong>Premium</strong> adds a generated or uploaded <strong>banner image</strong>, a custom <strong>receptionist name and persona</strong>, and a <strong>concierge</strong> (verified members can chat with SAi right at the desk).</p>

### Auto-configure channels for verification

A verification gate only works if unverified members *can't* see your server until they
pass it, which normally means editing channel permissions by hand. The **Auto-configure
channels** button in [`/settings → Verification`]({{ '/wiki/settings/' | relative_url }})
does that for you.

Tap it and the bot proposes a sensible set of channels to keep visible to unverified
members, the **reception channel** plus your **rules, system and announcements**
channels, and lets you add others with a picker. You see the full preview *before*
anything changes. On **Apply**, it hides every other channel **and category** from
unverified members and opens them to your verified role, keeping the bot's own access
intact.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">only you can see this</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">Auto-configure channels, preview</div>
      <div class="dc-desc">Here's what unverified members will see. Everything else gets hidden from them and opened to <strong>@Verified</strong>. Review, tweak, then Apply.</div>
      <div class="dc-fname">Stay visible to unverified</div>
      <div class="dc-fval">#reception · #rules · #announcements · #system</div>
      <div class="dc-select">Keep extra channels visible…</div>
      <div class="dc-btns">
        <span class="dc-btn green">Apply</span>
        <span class="dc-btn grey">← Back</span>
      </div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>Reversible by design.</strong> Before it touches anything, the bot snapshots your current permissions, so the one-tap <strong>Undo</strong> puts every channel and category back exactly as it was. <strong>Prerequisites:</strong> you need a <strong>verified role set</strong> first (the same one the gate hands out), and the bot needs <strong>Manage Channels</strong> and <strong>Manage Roles</strong> to apply the changes.</p>

---

## Ban appeals {#ban-appeals}

Switch on **ban appeals** and anyone you ban gets a DM explaining what happened and
inviting them to put their case, while your staff get a review ticket with one-tap
**Unban**, **Deny** and (on Premium) **More info** buttons. It all happens in DMs and
your log channel. Step through it below.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">A ban appeal, end to end</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="The member is told">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-embed red">
          <div class="dc-title">You've been banned from The Hangout</div>
          <div class="dc-desc"><strong>Reason:</strong> Posting scam links<br><br>If you'd like to appeal, <strong>reply to this message once</strong> with your appeal. You get <strong>one</strong> reply, so make it count. It'll be sent to the staff team for review, and you'll hear back here if a decision is made.</div>
          <div class="dc-foot">Server Assistant · ban appeal</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The ban DM.</strong> The banned member is told why and invited to appeal by <em>replying</em> to the DM. On the free plan they get a single reply; on Premium the bot can ask a follow-up question or two first. If no reason was recorded, it reads "No reason was provided."</p>
  </div>

  <div class="wiz-step" data-step="They reply with their case">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Banned member</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">That wasn't me posting links, my account was compromised and I've changed my password since. Really sorry for the trouble, I'd love to come back.</div>
      </div></div>
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">Your appeal has been submitted to the staff team, that was your one reply. You'll get a message here if there's a decision.</div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The member appeals.</strong> They reply once, and the bot confirms it's gone to the staff team. They can't spam it: a second reply just gets <em>"Your appeal is in with the staff team."</em></p>
  </div>

  <div class="wiz-step" data-step="Staff get a review ticket">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">Ban appeal</div>
          <div class="dc-desc">That wasn't me posting links, my account was compromised and I've changed my password since…</div>
          <div class="dc-fname">User</div><div class="dc-fval">@FormerMember (<code>123456789012345678</code>)</div>
          <div class="dc-fname">Ban reason</div><div class="dc-fval">Posting scam links</div>
          <div class="dc-btns">
            <span class="dc-btn green">Unban</span>
            <span class="dc-btn red">Deny</span>
            <span class="dc-btn grey">More info</span>
          </div>
          <div class="dc-btns">
            <span class="dc-btn grey">Info</span>
            <span class="dc-btn grey">Warnings</span>
            <span class="dc-btn grey">Notes</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The staff ticket.</strong> The appeal lands in your log channel with the member's words, their ID and the original ban reason. <strong>Unban</strong> lifts the ban and tells them; <strong>Deny</strong> closes it and says the ban stands. The <strong>Info</strong>, <strong>Warnings</strong> and <strong>Notes</strong> buttons pull up the member's history so you can decide with full context. Only staff with the ban capability can press any of them.</p>
  </div>

  <div class="wiz-step" data-step="Asking for more info (Premium)">
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
    <p class="wiz-caption"><strong>More info <span class="cmd-tag premium">PREMIUM</span>.</strong> On Premium, <strong>More info</strong> opens this form. Type a question, the bot DMs it to the member, and the ticket pauses; a fresh one returns when they reply. That follow-up doesn't count against their one-reply limit.</p>
  </div>

  <div class="wiz-step" data-step="The member hears back">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
        <div class="dc-desc" style="color:#dbdee1;line-height:1.5;">Good news, your ban appeal for <strong>The Hangout</strong> was <strong>approved</strong> and you've been unbanned. Please review the rules before rejoining.</div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The outcome.</strong> Whatever staff decide, the member is told in their DMs: an approval comes with the unban and a nudge to read the rules; a denial says the ban stands.</p>
  </div>
</div>

> **"Why was I actioned?"** On Premium, the DM a member gets for a *warning or other
> action* carries a **Why was I actioned?** button. One tap and the bot writes a short,
> plain-English explanation, heading off confused replies to your staff.

---

## Self-service roles {#self-service-roles}

Let members pick their own roles (pronouns, colours, game pings, notification opt-ins)
from a panel of buttons, instead of asking a moderator. Build it once with `/rolepanel`
and the panel does the rest.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/rolepanel</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Build a self-service role-button panel members can use to add or remove roles themselves. Opens a private builder where you pick the roles, set a title and intro, and post it to a channel. Needs <strong>Manage Server</strong> (or an admin role), and the bot needs <strong>Manage Roles</strong>.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3">No arguments, running <code>/rolepanel</code> opens the builder.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/rolepanel</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">Role panel builder</div>
        <div class="dc-desc"><strong>Title:</strong> Pick your colours<br><strong>Body text:</strong> Tap a button to grab a colour role.<br><strong>Posting to:</strong> #roles</div>
        <div class="dc-select">Pick the roles members can self-assign…</div>
        <div class="dc-fname">Roles on this panel</div><div class="dc-fval">• @Red · @Blue · @Green · @Purple</div>
        <div class="dc-btns">
          <span class="dc-btn grey">Edit Text</span>
          <span class="dc-btn green">Post panel</span>
          <span class="dc-btn grey">Cancel</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">In the builder you choose the roles from a dropdown (up to <strong>24</strong>), give the panel a <strong>Title</strong> and optional <strong>intro</strong> with <strong>Edit Text</strong>, then <strong>Post panel</strong>. The bot only offers roles it can manage: anything above its own top role, or a managed/integration role, is skipped. Re-open the builder later to edit or delete a panel.</p>

### What members see

The posted panel is a row of role buttons plus a **My roles** button. Tapping a role
button toggles it instantly; **My roles** opens a private checklist where a tick (`✓`)
shows the roles you already have.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">Pick your colours</div>
      <div class="dc-desc">Tap a button to grab a colour role.</div>
      <div class="dc-btns">
        <span class="dc-btn grey">Red</span>
        <span class="dc-btn grey">Blue</span>
        <span class="dc-btn grey">Green</span>
        <span class="dc-btn grey">Purple</span>
        <span class="dc-btn blurple">My roles</span>
      </div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>Self-service, no staff needed.</strong> A member taps <strong>Blue</strong> and gets a quiet <em>"Added Blue."</em>; tap again for <em>"Removed Blue."</em> <strong>My roles</strong> shows every role on the panel as a toggle, with a green <strong>✓</strong> next to the ones they hold. The buttons keep working after a bot restart.</p>

---

## Custom commands {#custom-commands}

Turn your most-repeated answers into real slash commands. Build a `/rules`, `/socials`
or `/serverinfo` once and members can call it any time, as plain text or a styled embed,
with optional **live updates** that edit every posted copy when you change the wording.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/customcmd</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Create and manage your own <code>/commands</code>, each replies with text or an embed you've written. Opens a private manager to add, edit or delete them. On the full <strong>Premium</strong> plan; needs <strong>Manage Server</strong> (or an admin role). Up to 25 custom commands per server.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td colspan="3">No arguments, running <code>/customcmd</code> opens the manager.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/customcmd</span></div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">Custom commands</div>
        <div class="dc-desc">• <strong>/rules</strong>, text<br>• <strong>/socials</strong>, embed · live</div>
        <div class="dc-btns">
          <span class="dc-btn green">New text</span>
          <span class="dc-btn blurple">New embed</span>
          <span class="dc-btn grey">Done</span>
        </div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>New text</strong> or <strong>New embed</strong> opens a form: pick a name (lowercase, no slash), write the reply, and for embeds add a title and optionally switch on <strong>live updates</strong>. The new <code>/command</code> goes live within about a minute. Names must be unique and can't clash with the bot's built-in commands.</p>

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Direct Message</span></div>
    <div class="dc-modal">
      <div class="dc-modal-title">New embed command</div>
      <div class="dc-flabel">Command name (no slash, lowercase)</div>
      <div class="dc-input">socials</div>
      <div class="dc-flabel">Embed title</div>
      <div class="dc-input">Find us elsewhere</div>
      <div class="dc-flabel">Reply text</div>
      <div class="dc-input">YouTube, TikTok and our newsletter, all the links live here.</div>
      <div class="dc-flabel">Live updates? (yes/no)</div>
      <div class="dc-input ph">yes = edits update every posted copy</div>
      <div class="dc-btns"><span class="dc-btn blurple">Create</span></div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>Live updates.</strong> Switch them on for an embed command and every copy already posted in your server updates automatically when you edit the wording, ideal for a <code>/rules</code> or <code>/socials</code> kept current in one place. Edit or remove any command later from the same <code>/customcmd</code> manager.</p>

---

## Member info {#member-info}

A quick, private look-up of a member's profile: account age, join date, roles and their
record at a glance. The fastest way to size someone up before you act, and the reply is
only ever visible to you.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/info</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Show profile info for a member, their ID, when the account was created, when they joined, their roles, and how many warnings and notes they have on file. The reply is private to you (ephemeral).</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The member to inspect.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av you" src="{{ '/assets/avatar-you.jpg' | relative_url }}" alt="You" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/info</span> <span class="arg">user:</span> @Member</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">User Info: Member</div>
        <div class="dc-fname">ID</div><div class="dc-fval">123456789012345678</div>
        <div class="dc-fname">Created</div><div class="dc-fval">2022-03-14</div>
        <div class="dc-fname">Joined</div><div class="dc-fval">2026-05-12</div>
        <div class="dc-fname">Roles</div><div class="dc-fval">@Verified, @Blue, @Gamer</div>
        <div class="dc-fname">Warnings</div><div class="dc-fval">1</div>
        <div class="dc-fname">Notes</div><div class="dc-fval">0</div>
      </div>
    </div></div>
  </div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;"><strong>Context at a glance.</strong> A young account that joined minutes ago with a warning on file reads very differently from a long-standing member; <code>/info</code> puts that side by side in one private embed. If the person has left or been banned it says so, and warning and note counts are always shown. The same profile card sits behind the <strong>Info</strong> button on a ban-appeal ticket.</p>

---

## See also

- [The `/setup` wizard]({{ '/wiki/setup/' | relative_url }}): configure channels, staff roles, onboarding and verification
- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}): warnings, notes, bans and the tools behind a ban appeal
- [Emote commands]({{ '/wiki/emotes/' | relative_url }}): react with the perfect GIF (and `/meme`)
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
