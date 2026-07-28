# Security Policy

## Supported code

Security maintenance applies to the current `main` branch. Prof-Of-Duty is a
playable but incomplete prototype; historical builds and third-party forks
are not covered.

## Reporting

Use GitHub's **Security** tab to submit a private vulnerability report.
Include the affected feature, reproduction steps, impact, browser/OS, and a
proposed mitigation when available. Do not publish exploit details, private
data, or credentials in a public issue.

## Repository hygiene

- Never commit API keys, cookies, tokens, `.env` files, or private paths.
- The game must not add analytics or remote calls without explicit review.
- Owner review is expected for changes to `LICENSE`, `TRADEMARKS.md`,
  `CODEOWNERS`, and the ownership-integrity workflow.
- Preserve dependency notices and generated-capture provenance.

---

<sub>Prof-Of-Duty™ is a trademark of Profexor. Copyright © 2026 Profexor. Project-owned source and documentation are available under the [MIT License](LICENSE); that license grants no trademark rights. Third-party software and marks retain their respective rights.</sub>
