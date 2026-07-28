# Contributing to Prof-Of-Duty™

Prof-Of-Duty is created, directed, engineered, and maintained by
**Profexor**. Focused gameplay fixes, technical-art improvements,
accessibility work, tests, and measured performance changes are welcome for
review.

## Development workflow

1. Create a focused branch and explain the player-facing outcome.
2. Install deterministically with `npm ci`.
3. Run `npm run verify:ownership`, `npm test`, and `npm run build`.
4. Use the deterministic capture harness for visual changes.
5. Record frame-time distribution, hitch behavior, draw calls, and memory
   impact where relevant.

## Engineering constraints

- Use `ctx.get()` and the event vocabulary for cross-subsystem communication.
- Preserve deterministic RNG, fixed-step simulation, bounded pools, and
  explicit disposal.
- Avoid per-frame allocation and new runtime package dependencies.
- Keep runtime art and audio procedural and offline-capable.
- Store GitHub-facing captures under `docs/images/` with relative links.
- Do not remove Profexor ownership, license, trademark, or CODEOWNERS records.
- Never commit credentials, private paths, capture caches, or build output.

By contributing project-owned code or documentation, you agree that it may be
distributed under this repository's [MIT License](LICENSE). Dependency
licenses remain unchanged.

---

<sub>Prof-Of-Duty™ is a trademark of Profexor. Copyright © 2026 Profexor. Project-owned source and documentation are available under the [MIT License](LICENSE); that license grants no trademark rights. Third-party software and marks retain their respective rights.</sub>
