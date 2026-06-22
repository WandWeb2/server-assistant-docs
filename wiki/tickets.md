---
layout: wiki
title: Tickets & support
permalink: /wiki/tickets/
wiki: true
wiki_category: Tickets & support
summary: Private support tickets end to end — post a panel, members open a ticket, you answer it in its own channel, then close with a saved transcript. Plus the AI FAQ and the right-click Message Report.
wiki_keywords: [tickets, ticket panel, support, intake, transcript, close, faq, message report, report, help, questions, premium]
description: How Server Assistant's ticket system works — posting a panel, the intake modal, the private ticket channel and closing with a transcript — alongside the AI FAQ and the Message Report context menu, each shown exactly as it appears in Discord.
---

# 🎫 Tickets &amp; support

Give your members a tidy way to ask for help in private. You post a **panel**
with a button; a member clicks it, fills in a short **intake form**, and the bot
spins up a **private channel** that only they and your staff can see. When the
matter's resolved, anyone with access closes it and the bot saves a full
**transcript** to your log channel.

This page also covers the **AI FAQ** — answer common questions automatically
from a list you control — and the right-click **Message Report**, which gives
staff a fast, AI-summarised view of a flagged message with action buttons.

> **Who can run these:** the server **owner**, or an admin with **Manage
> Server**, sets up and edits tickets. Any member can open one from the panel.
> Closing a ticket is open to the **opener**, your **support role**, or anyone
> with **Manage Channels**.

Commands are tagged so you know what you're looking at:

<span class="cmd-tag free">FREE</span> available on every plan &nbsp;·&nbsp;
<span class="cmd-tag premium">PREMIUM</span> needs a premium plan &nbsp;·&nbsp;
<span class="cmd-tag perm">ADMIN</span> admins or the owner only &nbsp;·&nbsp;
<span class="cmd-tag ai">AI</span> uses AI tokens

---

## The end-to-end ticket flow {#flow}

Here's the whole journey, one screen at a time — from the panel you post, to the
member opening a ticket, to the private channel where you help them, to the close
and its saved transcript.

<div class="wiz" data-wiz>
  <div class="wiz-bar">
    <span class="wiz-label">From panel to closed ticket</span>
    <span class="wiz-counter"></span>
    <div class="wiz-dots"></div>
    <button class="wiz-btn wiz-prev" type="button">‹ Back</button>
    <button class="wiz-btn wiz-next" type="button">Next ›</button>
  </div>

  <div class="wiz-step on" data-step="1 · You post the panel">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">🎫 Need help? Open a ticket</div>
          <div class="dc-desc">Click the button below to open a private support ticket. Only you and the staff team will be able to see it.</div>
          <div class="dc-btns">
            <span class="dc-btn blurple">🎫 Create Ticket</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The panel.</strong> Run <code>/tickets setup</code> once and the bot drops this into a channel of your choice. It's a single persistent <strong>🎫 Create Ticket</strong> button — it keeps working after restarts and for as long as the panel sits there.</p>
  </div>

  <div class="wiz-step" data-step="2 · A member clicks &amp; fills the form">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
        <div class="dc-modal">
          <div class="dc-modal-title">Open a ticket</div>
          <div class="dc-modal-sub">Tell us what's up and we'll open a private channel for you.</div>
          <div class="dc-flabel">How can we help you?</div>
          <div class="dc-input ph">Describe your issue in as much detail as you can…</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>The intake form.</strong> Clicking the button opens this short pop-up. On the free tier it's a single question (<em>“How can we help you?”</em>); Premium servers can ask up to <strong>four</strong>. The first question is always required. One open ticket per member at a time — click again while one's open and the bot just points you to it.</p>
  </div>

  <div class="wiz-step" data-step="3 · The private ticket channel opens">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
        <div class="dc-embed blue">
          <div class="dc-title">Ticket #0007</div>
          <div class="dc-desc">Thanks for reaching out — a staff member will be with you shortly. Please describe your issue in as much detail as you can.</div>
          <div class="dc-fname">Opened by</div><div class="dc-fval">@Member</div>
          <div class="dc-fname">How can we help you?</div><div class="dc-fval">I bought a role but it didn't apply.</div>
          <div class="dc-foot">Staff: use the button below or /tickets close to close this ticket.</div>
          <div class="dc-btns">
            <span class="dc-btn red">🔒 Close Ticket</span>
          </div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>A channel just for this.</strong> The bot creates a numbered, private channel (<code>#ticket-0007-member</code>) that only the opener, your support role and staff with Manage Channels can see. It pings the support role, posts the member's answers, and pins a <strong>🔒 Close Ticket</strong> button. Talk to the member right there.</p>
  </div>

  <div class="wiz-step" data-step="4 · Close &amp; save a transcript">
    <div class="dc">
      <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
        <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
        <div class="dc-embed">
          <div class="dc-title">🎫 Ticket #0007 closed</div>
          <div class="dc-fname">Opened by</div><div class="dc-fval">@Member</div>
          <div class="dc-fname">Closed by</div><div class="dc-fval">@you</div>
          <div class="dc-fname">Reason</div><div class="dc-fval">Resolved — role re-applied</div>
          <div class="dc-foot">📎 ticket-0007.txt · full transcript attached</div>
        </div>
      </div></div>
    </div>
    <p class="wiz-caption"><strong>Closed, with a paper trail.</strong> Pressing <strong>🔒 Close Ticket</strong> (or running <code>/tickets close</code>) saves the whole conversation as a <code>.txt</code> transcript to your log channel, then deletes the ticket channel. Nothing is lost — you keep the record, the clutter goes.</p>
  </div>
</div>

---

## Setting up &amp; managing tickets {#manage}

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/tickets setup</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Post the ticket panel. Use it in an existing channel, or have the bot create a fresh locked channel where everyone can see and click the panel but only staff can type. Set a <strong>support role</strong> so your mod team can see and answer tickets.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>channel</code> <span class="opt">optional</span></td><td>channel</td><td>Existing channel to post the panel in — defaults to where you run it.</td></tr>
    <tr><td><code>support_role</code> <span class="opt">optional</span></td><td>role</td><td>The role that can see and answer tickets. <strong>Strongly recommended</strong> — without it, only admins see tickets.</td></tr>
    <tr><td><code>create_channel</code> <span class="opt">optional</span></td><td>text</td><td>Create a brand-new locked channel with this name and post the panel there instead.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/tickets setup</span> <span class="arg">support_role:</span> @Support <span class="arg">create_channel:</span> get-help</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed green">
        <div class="dc-title">✅ Ticket panel posted</div>
        <div class="dc-desc">Created a locked channel and posted the panel in #get-help.</div>
        <div class="dc-foot">Support role: @Support — your mod team can now see every ticket.</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/tickets close</span>
    <span class="cmd-tag free">FREE</span>
  </div>
  <p class="cmd-desc">Close the ticket channel you're in. Saves a full transcript to your log channel, then removes the channel. The opener, your support role, and anyone with Manage Channels can close.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>reason</code> <span class="opt">optional</span></td><td>text</td><td>Optional close reason — saved into the transcript and the close summary.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/tickets close</span> <span class="arg">reason:</span> Resolved — role re-applied</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-embed blue">
        <div class="dc-title">📑 Closing this ticket…</div>
        <div class="dc-desc">Saving a transcript to your log channel, then removing the channel.</div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/tickets panel</span>
    <span class="cmd-tag free">FREE</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Edit the panel's title and description from a quick form — and on Premium, set custom in-ticket <strong>welcome</strong> and <strong>close</strong> messages too. If the live panel message still exists, the bot updates it in place.</p>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-modal">
        <div class="dc-modal-title">Edit ticket panel</div>
        <div class="dc-flabel">Panel title</div>
        <div class="dc-input">🎫 Need help? Open a ticket</div>
        <div class="dc-flabel">Panel description</div>
        <div class="dc-input">Click the button below to open a private support ticket.</div>
        <div class="dc-flabel">In-ticket welcome (Premium)</div>
        <div class="dc-input ph">Thanks for reaching out — a staff member will be with you shortly…</div>
        <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/tickets questions</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag perm">ADMIN</span>
  </div>
  <p class="cmd-desc">Set up to <strong>four</strong> custom intake questions that members answer when they open a ticket. The free tier always includes the single default question; this lets Premium servers gather exactly the detail they need up front.</p>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
      <div class="dc-modal">
        <div class="dc-modal-title">Ticket intake questions</div>
        <div class="dc-flabel">Question 1</div>
        <div class="dc-input">How can we help you?</div>
        <div class="dc-flabel">Question 2 (optional)</div>
        <div class="dc-input">What's your in-game / account name?</div>
        <div class="dc-flabel">Question 3 (optional)</div>
        <div class="dc-input ph">Add another question…</div>
        <div class="dc-btns"><span class="dc-btn blurple">Save</span></div>
      </div>
    </div></div>
  </div>
</div>

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/tickets add</span>
    <span class="cmd-tag premium">PREMIUM</span>
  </div>
  <p class="cmd-desc">Pull another member into the ticket you're in — handy when a question needs a specialist or a second moderator. Open to staff or the ticket opener. Run it from inside the ticket channel.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>user</code> <span class="req">required</span></td><td>member</td><td>The user to add to this ticket.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">You</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/tickets add</span> <span class="arg">user:</span> @Specialist</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed green">
        <div class="dc-title">✅ Added to ticket</div>
        <div class="dc-desc">@Specialist can now see and reply in this ticket.</div>
      </div>
    </div></div>
  </div>
</div>

---

## The AI FAQ {#faq}

Answer your most-asked questions automatically. You build a short list of
question-and-answer entries; members run **`/faq`** with their question and the
AI replies — using **only** your entries, never made-up policy. Leave the
question blank as staff and you get a one-screen builder to add, edit and remove
entries.

<div class="cmd-card">
  <div class="cmd-head">
    <span class="cmd-name">/faq</span>
    <span class="cmd-tag premium">PREMIUM</span>
    <span class="cmd-tag ai">AI</span>
  </div>
  <p class="cmd-desc">Ask the FAQ — or leave the question blank to open the FAQ builder (staff only). Answers come strictly from the entries you've added; if your FAQ doesn't cover something, the bot says so and points the member to your staff team rather than guessing.</p>
  <table class="cmd-args">
    <tr><th>Argument</th><th>Type</th><th>Notes</th></tr>
    <tr><td><code>question</code> <span class="opt">optional</span></td><td>text</td><td>The member's question. Leave it blank (as staff) to manage the FAQ.</td></tr>
  </table>
  <div class="dc" style="margin-top:1rem;">
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Member</span><span class="dc-time">today</span></div>
      <div class="dc-slash"><span class="cmd">/faq</span> <span class="arg">question:</span> how do I get roles</div>
    </div></div>
    <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
      <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">today</span></div>
      <div class="dc-embed blue">
        <div class="dc-desc">💬 Head to <strong>#roles</strong> and react to the message there — each emoji grants a self-assign role. Staff can hand out special roles on request.</div>
      </div>
    </div></div>
  </div>
</div>

### Managing the FAQ — the builder

Run `/faq` with no question and (if you can manage the server) you get a private
**FAQ builder**: a numbered list of entries, a dropdown to **edit**, a dropdown
to **delete**, and an **➕ Add entry** button that opens a small form. Changes
save instantly and the list refreshes in place.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
    <div class="dc-embed blue">
      <div class="dc-title">❓ FAQ builder</div>
      <div class="dc-desc">Members run <strong>/faq ask</strong> and the bot answers <strong>only</strong> from these entries:<br><br><strong>1.</strong> How do I get roles?<br><strong>2.</strong> How do I report a player?<br><strong>3.</strong> When are events?</div>
      <div class="dc-select">✏️ Edit an entry…</div>
      <div class="dc-select">🗑️ Delete an entry…</div>
      <div class="dc-btns">
        <span class="dc-btn green">➕ Add entry</span>
        <span class="dc-btn grey">Done</span>
      </div>
    </div>
  </div></div>
</div>

---

## Right-click → Message Report {#message-report}

Tickets are for members coming to you. **Message Report** is the reverse — a
fast, AI-assisted way for *staff* to deal with a single message. Right-click (or
long-press) any message → **Apps → Message Report**. The bot reads the message
plus the surrounding conversation, writes a short objective summary, and gives
you action buttons — all privately, only you can see it.

<div class="dc">
  <div class="dc-row"><img class="dc-av" src="{{ '/assets/logo.png' | relative_url }}" alt="Server Assistant" loading="lazy"><div class="dc-body">
    <div class="dc-head"><span class="dc-name">Server Assistant</span><span class="dc-bot">App</span><span class="dc-time">Only you can see this</span></div>
    <div class="dc-embed amber">
      <div class="dc-title">📋 Message Report</div>
      <div class="dc-desc">• Tone: hostile, escalating toward another member.<br>• Possible rule-break: targeted harassment.<br>• Pattern: third flagged message from this user today.<br>• Recommended: a timeout to cool things down.</div>
      <div class="dc-fname">Reported user</div><div class="dc-fval">@Troublemaker</div>
      <div class="dc-fname">Channel</div><div class="dc-fval">#general</div>
      <div class="dc-fname">Original message</div><div class="dc-fval">Jump to message</div>
      <div class="dc-btns">
        <span class="dc-btn grey">⚠️ Warn</span>
        <span class="dc-btn grey">🔇 Timeout 10m</span>
        <span class="dc-btn grey">🗑️ Delete msg</span>
      </div>
      <div class="dc-btns">
        <span class="dc-btn red">👢 Kick</span>
        <span class="dc-btn red">🔨 Ban</span>
      </div>
    </div>
  </div></div>
</div>

<p style="color:var(--fg-1);font-size:.9rem;line-height:1.55;">
<strong>How it works.</strong> The report is private and lasts about 15 minutes.
Each button respects <em>your</em> role — you'll only be able to take an action
your staff role allows, and the bot won't act on the owner or on other bots.
Whatever you choose is written to your log channel with the AI summary attached,
so the decision and its reasoning are on the record. Because it reads the
message with AI, Message Report uses AI tokens and can be switched off per server
from the <code>/privacy</code> panel (toggle <strong>Right-click Message
Report</strong>).</p>

> **Need to reach the bot's developer instead?** That's a different door:
> <code>/support</code> (and its alias <code>/feedback</code>) opens a private
> DM-based ticket with the maintainer for bug reports, feature ideas, setup
> questions, or data requests — separate from your server's own member tickets
> above.

---

## See also

- [Moderation &amp; safety]({{ '/wiki/moderation/' | relative_url }}) — warnings, timeouts, removals and the raid toolkit that pair with Message Report
- [Back to the Wiki hub]({{ '/wiki/' | relative_url }})
- [Contact &amp; support]({{ '/support/' | relative_url }}) — reach the team directly
