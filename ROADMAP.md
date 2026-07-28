# Prof-Of-Duty™ Development Roadmap

Prof-Of-Duty is a **playable, incomplete** technical vertical slice. This
roadmap turns future work into measurable delivery gates under Profexor's
project direction.

## Phase 1 — Foundation hardening

- Correct the viewmodel/world irradiance mismatch without flattening weapon
  material separation.
- Add deterministic boot, movement, firing, reload, AI, and match-flow smoke
  checks to continuous integration.
- Establish performance budgets for p50/p95/p99 frame time, worst frame,
  shader programs, draw calls, triangles, textures, and boot time.
- Add browser-visible quality selection, sensitivity, field-of-view,
  reduced-motion, audio, and accessibility settings.

**Gate:** clean build and tests, no new runtime warnings, stable screenshots,
and no unexplained p99 regression.

## Phase 2 — Combat and 3C quality

- Improve procedural hands and contact poses around every weapon.
- Expand enemy silhouettes, hit reactions, cover transitions, and readable
  tactical intent.
- Tune camera impulse, recoil recovery, movement acceleration, leaning,
  mantling, and slide exits as a unified control-feel system.
- Add gamepad support, remapping, focus management, and readable prompts.

**Gate:** repeatable combat playtests, input-device parity, and no regressions
in deterministic physics or movement probes.

## Phase 3 — World and technical art

- Improve close-range surface hierarchy and material-scale readability.
- Add more enterable structures, occlusion-safe cover, authored objectives,
  and lighting scenarios.
- Evaluate texture-generation caching and geometry LODs to reduce startup and
  high-DPI cost.
- Preserve the no-downloaded-runtime-art constraint unless Profexor changes
  the project's art direction.

**Gate:** signed-off capture set across day, night, interior, combat, weapon,
and effects shots with measured GPU cost.

## Phase 4 — Game structure

- Add objective logic, round/match lifecycle, failure/retry states, pause,
  settings persistence, and local progression.
- Add difficulty/accessibility assists and a deterministic encounter director.
- Define save-data migrations before public playtest builds.

**Gate:** a complete start-to-finish playable loop with recovery paths and
documented browser compatibility.

## Phase 5 — Release engineering

- Produce cacheable static builds, provenance manifests, and reproducible
  release captures.
- Run Chromium, Firefox, and WebKit compatibility checks.
- Perform input, accessibility, memory, performance, and security reviews.

**Gate:** release candidate approved by Profexor with known limitations,
licenses, trademarks, and validation evidence documented.

---

<sub>Prof-Of-Duty™ is a trademark of Profexor. Copyright © 2026 Profexor. Project-owned source and documentation are available under the [MIT License](LICENSE); that license grants no trademark rights. Third-party software and marks retain their respective rights.</sub>
