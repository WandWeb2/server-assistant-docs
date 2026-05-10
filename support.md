---
layout: default
title: Support
permalink: /support/
description: How to get help, report bugs, and request features for Server Assistant.
---

# 💬 Get Help

Multiple channels depending on what you need.

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

Open a [GitHub issue](https://github.com/WandWeb2/server-assistant/issues/new/choose) using the **Bug Report** template. The template prompts you for:

- What happened vs what you expected
- Steps to reproduce
- Bot version (from startup logs or the tray icon)
- Hosting context (Windows / Linux VPS / Docker)
- Relevant log output

Issues filed via GitHub get tracked through the milestone system, so progress is visible.

---

## 💡 Feature requests

Either channel works:

- **GitHub:** [Feature Request issue template](https://github.com/WandWeb2/server-assistant/issues/new/choose) for things you want formally tracked
- **Support server `#bot-feedback`:** for informal discussion or ideas you're not sure about yet

The more concrete the use case, the more likely it is to get built. "As a moderator, I want to..." style descriptions land best.

---

## 🔒 Security vulnerabilities

**Do NOT open a public issue** for security vulnerabilities. Instead:

- **Email or DM** the maintainer directly via the support server
- See the [SECURITY.md](https://github.com/WandWeb2/server-assistant/blob/main/SECURITY.md) for full disclosure policy

In-scope: bypasses of role-based permission, vault decryption defects, privilege escalation, injection vulnerabilities, AutoMod evasion that affects host security.

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

## 🛠️ Self-hosting / development

The main bot source code is currently in a private repository while the project stabilises. Public assets:

- This documentation site: [WandWeb2/server-assistant-docs](https://github.com/WandWeb2/server-assistant-docs)
- Issues, releases, and roadmap: [main repo issues](https://github.com/WandWeb2/server-assistant/issues)

A future release will move the source to public open-source under MIT. If you want self-hosting access in the meantime, contact the maintainer via the support server with a brief explanation of your use case.

---

## 🤝 Contributing

Once the source is public:

1. Fork the repo
2. Create a feature branch
3. Open a PR using the template
4. CI runs syntax + smoke import checks
5. Maintainer reviews

For now, the highest-leverage contribution is **filing detailed bug reports and feature requests** — that directly shapes what gets built next.

---

## ❓ Anything else?

If your question doesn't fit any of the above, the support server is always the right starting point. Don't worry about asking dumb questions — the docs are imperfect, and "where do I find X" is genuinely useful feedback for improving them.
