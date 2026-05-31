# Security Policy

Thanks for helping keep Server Assistant and its communities safe.

## Reporting a vulnerability

**Please do _not_ open a public GitHub issue for security vulnerabilities.** Public disclosure before a fix puts every server using the bot at risk.

Report privately by running the **`/support`** slash command in any Discord server that has Server Assistant installed. Start the message with `[SECURITY]` so the maintainer prioritises it.

Example:

```
/support message: [SECURITY] <short summary>

Affected: <what part of the bot>
Impact:   <what an attacker could do>
Repro:    <minimal steps>
```

The maintainer follows up via DM. Replies, screenshots, and PoCs can all go through that DM thread (see the [support page](https://wandweb2.github.io/server-assistant-docs/support/) for how follow-ups work).

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
