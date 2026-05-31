# Security Policy

Thanks for helping keep Server Assistant and its communities safe.

## Reporting a vulnerability

**Please do _not_ open a public GitHub issue for security vulnerabilities.** Public disclosure before a fix puts every server using the bot at risk.

Instead, report privately using GitHub's **[private vulnerability reporting](https://github.com/WandWeb2/server-assistant-docs/security/advisories/new)** on this repository.

Do **not** use the in-bot `/support` command for vulnerabilities — that channel routes through Discord and the relay, which is the same attack surface you're reporting on. Out-of-band reporting via GitHub's encrypted disclosure pipeline is the only safe path.

Please include, where you can:

- A description of the vulnerability and its impact
- Steps to reproduce (a proof-of-concept helps)
- Any affected versions or conditions

## In scope

- Bypasses of role-based permission checks
- Decryption or exposure of stored credentials
- Privilege escalation (e.g. a non-staff user invoking staff actions)
- Injection vulnerabilities
- AutoMod evasion that affects host or server security

## Our commitment

- **Acknowledgement within 72 hours**
- **Initial assessment within 7 days**
- **A fix or detailed remediation plan within 30 days** for high-severity issues

We'll keep you updated through the process and credit you (if you'd like) once a fix ships.

## Note

Server Assistant is a managed, hosted bot — its source is closed. This policy covers the live hosted service and anything in this public documentation repository.
