Dependency triage report — DevSecRelAI

Summary (2026-08-27):
- Ran targeted dependency updates for: cowboy, cowlib, plug, plug_cowboy, phoenix, phoenix_pubsub, mint, decimal, hpax, jason, floki, earmark, castore, ranch, phoenix_live_view.
- Tests run locally (57 tests) — project compiles and tests pass.

Remaining advisories (need follow-up):
- cowlib: versions still show advisories (cookie/header handling). Track upstream fixes and upgrade when a patched release is available.
- decimal: 2.4.1 still flagged for unbounded exponent; upgrade when patched or add mitigations.
- earmark: retired and vulnerable. Migrate to a maintained Markdown renderer (suggest: MDEx) and update content pipeline.
- phoenix_live_view: low-severity advisory; plan upgrade path to a patched release (may require Phoenix 1.7 migration).

Recommended next steps:
1. Add CodeQL/code-scanning workflow and keep Dependabot active (dependabot.yml added).
2. Create PRs that upgrade or replace retired packages with tests and CI. Start with earmark -> MDEx migration in a small patch.
3. Monitor cowlib/decimal advisories; coordinate with maintainers if needed.
4. Consider a phased upgrade to Phoenix 1.7+ and Phoenix LiveView latest to remove several advisories; test and fix breaking changes.
5. Add runtime mitigations: set multipart limits, connection/request size limits, and hardened default Plug settings.

If approved, proceed to implement CodeQL workflow and start an earmark->MDEx migration PR next.