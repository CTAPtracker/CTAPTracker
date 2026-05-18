# NPT entries carry a structured `kind`, with the tile as canonical source

NPT entries store a structured `kind` field (one of `wait_work`, `ev_charge`, `bybox`, `merchant_parts`, `assist`, `meeting`, `early_finish`, `other`) in addition to the existing `name` (display text) and `mins`. The tile that logged the entry is the canonical source of `kind` — typed-by-convention via `name` string-matching (the prior approach) was fragile: renaming a tile's label would break historical analytics, and free-form `npt_quick` entries would never aggregate cleanly with each other.

Status: decided in CONTEXT grilling, not yet implemented. The migration is non-destructive — existing entries simply get `kind: 'other'` until backfilled. The schema's `deductions_json` is jsonb, so no schema migration is needed.
