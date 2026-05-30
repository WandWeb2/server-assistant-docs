---
layout: default
title: Support
permalink: /support/
description: How to get help, report bugs, and request features for Server Assistant.
---

# 💬 Get Help

Multiple channels depending on what you need.

---

## ✉️ Submit a support request directly

Skip Discord and go straight to the maintainer. Replies arrive via the bot's DM (if you have the bot in a shared server) or via the email you provide.

<form id="sa-support-form" style="background:rgba(255,255,255,0.55); border:1px solid rgba(31,38,135,0.15); border-radius:14px; padding:1.2rem; margin:1rem 0; box-shadow:0 4px 18px rgba(31,38,135,0.08);">
  <label style="font-size:0.88rem; font-weight:600; color:#2e3340; display:block;">Your contact (Discord username#0 or email)</label>
  <input id="sa-sup-contact" type="text" required maxlength="120" style="width:100%; padding:0.7rem 0.9rem; border-radius:10px; border:1px solid rgba(31,38,135,0.15); margin-top:0.3rem; font-size:0.95rem;">

  <label style="font-size:0.88rem; font-weight:600; color:#2e3340; display:block; margin-top:0.8rem;">Subject (optional)</label>
  <input id="sa-sup-subject" type="text" maxlength="200" style="width:100%; padding:0.7rem 0.9rem; border-radius:10px; border:1px solid rgba(31,38,135,0.15); margin-top:0.3rem; font-size:0.95rem;">

  <label style="font-size:0.88rem; font-weight:600; color:#2e3340; display:block; margin-top:0.8rem;">Your message</label>
  <textarea id="sa-sup-body" required minlength="10" maxlength="4000" rows="6" style="width:100%; padding:0.7rem 0.9rem; border-radius:10px; border:1px solid rgba(31,38,135,0.15); margin-top:0.3rem; font-size:0.95rem; font-family:inherit; resize:vertical;"></textarea>

  <button type="submit" style="margin-top:1rem; background:linear-gradient(135deg, #5865f2, #3498db); color:white; border:0; border-radius:999px; padding:0.7rem 1.5rem; font-weight:700; cursor:pointer; font-size:0.95rem;">Send</button>
  <div id="sa-sup-status" style="margin-top:0.7rem; font-size:0.88rem;"></div>
</form>

<script>
(function() {
  var form = document.getElementById("sa-support-form");
  if (!form) return;
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    var status = document.getElementById("sa-sup-status");
    var contact = document.getElementById("sa-sup-contact").value.trim();
    var subject = document.getElementById("sa-sup-subject").value.trim();
    var body    = document.getElementById("sa-sup-body").value.trim();
    if (!contact || body.length < 10) { status.textContent = "Please fill in both contact and a message (10+ chars)."; status.style.color = "#c0392b"; return; }
    status.textContent = "Sending…"; status.style.color = "#3498db";
    try {
      var res = await fetch("https://sa.wandweb.co/api/tickets/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          web_source: "wandweb-public",
          user_name: contact,
          subject: subject || ("Web form from " + contact),
          body: body,
        }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      var data = await res.json();
      status.textContent = "✓ Sent — your ticket is #" + data.ticket_id + ". We'll reach out at " + contact + ".";
      status.style.color = "#27ae60";
      form.reset();
    } catch (err) {
      status.textContent = "Couldn't send — please try the support server instead.";
      status.style.color = "#c0392b";
    }
  });
})();
</script>

---

## 🆘 Bug reports + general help

**Join the support server:** [https://discord.gg/egzwNJJcKm](https://discord.gg/egzwNJJcKm)

This is the fastest way to get help. The maintainer is usually around. Other operators chat about deployment, feature ideas, and edge cases there too.

When asking for help, please include:

1. **What you tried** — the exact command or interaction
2. **What you expected**
3. **What actually happened**
4. **Any error message** the bot replied with

Redact tokens, API keys, or sensitive user IDs before posting.

---

## 🐛 Filing bug reports formally

Open a [GitHub issue](https://github.com/WandWeb2/server-assistant-docs/issues/new/choose) using the **Bug Report** template. The template prompts you for:

- What happened vs what you expected
- Steps to reproduce
- The command or interaction that triggered it
- Any error message the bot replied with
- The bot version, which you can find by running `/info` or `/help` in your server

Issues filed via GitHub get tracked through the milestone system, so progress is visible.

---

## 💡 Feature requests

Either channel works:

- **GitHub:** [Feature Request issue template](https://github.com/WandWeb2/server-assistant-docs/issues/new/choose) for things you want formally tracked
- **Support server `#bot-feedback`:** for informal discussion or ideas you're not sure about yet

The more concrete the use case, the more likely it is to get built. "As a moderator, I want to..." style descriptions land best.

---

## 🔒 Security vulnerabilities

**Do NOT open a public issue** for security vulnerabilities. Instead:

- **Email or DM** the maintainer directly via the support server
- See the [SECURITY.md](https://github.com/WandWeb2/server-assistant-docs/blob/main/SECURITY.md) for full disclosure policy

In-scope: bypasses of role-based permission, decryption of stored credentials, privilege escalation, injection vulnerabilities, and AutoMod evasion that affects host security.

The maintainer commits to:

- Acknowledgement within **72 hours**
- Initial assessment within **7 days**
- Fix or detailed plan within **30 days** for high-severity issues

---

## 📚 Documentation

- [Setup guide]({{ site.url }}{{ site.baseurl }}/setup/) — first-time install
- [Commands reference]({{ site.url }}{{ site.baseurl }}/commands/) — every command
- [Features]({{ site.url }}{{ site.baseurl }}/features/) — deep dives
- [FAQ]({{ site.url }}{{ site.baseurl }}/faq/) — common questions
- [Privacy Policy]({{ site.url }}{{ site.baseurl }}/privacy/)
- [Terms of Service]({{ site.url }}{{ site.baseurl }}/terms/)

---

## 🛠️ Public project hub

Server Assistant is a **fully managed, hosted bot** — you invite it and configure it in Discord; there's nothing to install or run yourself. The bot's source is closed.

Everything public lives in one place — the **[server-assistant-docs](https://github.com/WandWeb2/server-assistant-docs)** repository:

- **This documentation site**
- **[Issues](https://github.com/WandWeb2/server-assistant-docs/issues)** — bug reports and feature requests
- **[Discussions](https://github.com/WandWeb2/server-assistant-docs/discussions)** — roadmap voting and ideas
- **[Roadmap]({{ site.url }}{{ site.baseurl }}/roadmap/)** and **[Changelog]({{ site.url }}{{ site.baseurl }}/changelog/)**

The most valuable way to shape the bot is **filing detailed bug reports and feature requests** and **voting on the roadmap** — that directly steers what gets built next.

---

## ❓ Anything else?

If your question doesn't fit any of the above, the support server is always the right starting point. Don't worry about asking dumb questions — the docs are imperfect, and "where do I find X" is genuinely useful feedback for improving them.
