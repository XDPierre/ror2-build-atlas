# Void Fiend tier-guide generation

- Method: built-in `image_gen` with both local image references.
- Subject reference: `assets/survivors/void-fiend.png`, for character and purple void art.
- Layout/style reference: `assets/tier-guides/captain.png`, for four colored rows and illustrated item cards.
- Destination: `assets/tier-guides/void-fiend.png`; supplied survivor image preserved.
- Build: corruption-focused primary/on-hit damage, with shield upkeep needed for Plasma Shrimp.
- Rankings are proposed editorial judgments, not verified game data or official tiers. Healing items can support uncorrupted playstyles; this guide ranks them lower specifically for corruption focus. Item illustrations are stylized AI approximations.

## Sources checked

- https://riskofrain2.wiki.gg/wiki/Void_Fiend — critical hits increase corruption; direct healing drains corruption; Cautious Slug regeneration does not lower it.
- https://riskofrain2.wiki.gg/wiki/Polylute — repeatedly strikes one enemy, replacing Ukulele.
- https://riskofrain2.wiki.gg/wiki/Plasma_Shrimp — missiles require an active shield; replaces AtG Missile Mk. 1.
- https://riskofrain2.wiki.gg/wiki/Weeping_Fungus — sprint healing can impede corrupted form.
- https://riskofrain2.wiki.gg/wiki/Leeching_Seed — on-hit healing.
- https://riskofrain2.wiki.gg/wiki/Purity — negative luck hurts chance-based effects.
- https://riskofrain2.wiki.gg/wiki/Safer_Spaces — blocks damage then recharges.

Checked through indexed wiki.gg search results on 2026-10-11; direct page fetches returned 403. Selected mechanics are supported by those results; rankings, illustrations, every short conventional item role and all patch-version interactions are not exhaustively verified. No portal information is included.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Risk of Rain 2 fan item tier guide for VOID FIEND, approx 1024x1536 or larger. Image 1 assets/survivors/void-fiend.png is SUBJECT reference only: eldritch dark humanoid with luminous purple void corruption. Image 2 assets/tier-guides/captain.png is STYLE/layout reference only: dark navy sci-fi panel, cyan borders, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows, illustrated item thumbnails and legible names. Do not copy Captain, his items, inaccurate mechanics or official logo. Use compact Void Fiend hero art across top quarter; devote remaining space to FOUR equal rows with FOUR item cells each. Every cell has stylized recognizable icon, exact item name, and exact short note. No extra items. Main title "VOID FIEND"; subtitle "Corruption / On-hit"; intro "Crits fuel corruption. Direct healing drains it; regeneration does not." Four rows:
OPTIMAL — "Core damage for this corruption-focused build"
Lens-Maker's Glasses — "Crit chance helps fuel corruption."
Soldier's Syringe — "Faster primary attacks."
Polylute — "Repeated lightning on one target."
Plasma Shrimp — "Hit missiles while shield remains."
BEST — "Strong defense, mobility and support"
Safer Spaces — "Periodically blocks a hit."
Cautious Slug — "Out-of-danger regeneration."
Predatory Instincts — "Crits grant attack speed."
Hopoo Feather — "Extra jump for safer movement."
OKAY — "Useful, but depends on inventory and range"
Backup Magazine — "Extra secondary skill charge."
Focus Crystal — "Bonus damage within 13 meters."
Armor-Piercing Rounds — "Bonus damage against bosses."
Topaz Brooch — "Barrier after kills."
NOT GOOD — "Lower priority for corruption focus; useful in other builds"
Weeping Fungus — "Sprint healing drains corruption."
Leeching Seed — "On-hit healing drains corruption."
Bustling Fungus — "Stationary healing drains corruption."
Purity — "Bad luck hurts chance-based procs."
Footer exact text "AI-generated fan guide • Proposed rankings, not verified"
Small line "Stylized icons • Community guide • Not officially affiliated"
Make exact names legible; don't invent items or numerical bonuses; do not label low-tier items useless. No official logos. Polished illustrative sci-fi style closely matches source. Plasma Shrimp may be illustrated as pink luminous shrimp; Polylute as purple void ukulele; Safer Spaces as purple void teddy; Cautious Slug as green slug.
```

## QA

Inspected the final 1024 × 1536 PNG: Void Fiend hero art, all four ordered colored tiers, all 16 exact item names, descriptions, contextual lower-priority wording and visible AI/unverified footer are present and readable. The crucial healing/regeneration distinction is explicitly present. Plasma Shrimp correctly requires shield; Polylute correctly targets one enemy. JSON matches image names. No material text errors found; stylized icons are not verified sprites. No game testing or exhaustive current-version audit performed.
