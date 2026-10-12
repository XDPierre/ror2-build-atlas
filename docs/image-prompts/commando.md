# Commando tier-guide generation

- Method: built-in `image_gen` with Commando as subject reference and Captain as style reference.
- Destination: `assets/tier-guides/commando.png` (new asset; original survivor image preserved).
- Rankings are proposed for a mobile Double Tap on-hit build; they are editorial judgments, not verified game data or official tiers. Lower-priority items can help other playstyles.
- Stylized icons are AI illustrations, not official sprites.

## Sources checked

- https://riskofrain2.wiki.gg/wiki/Commando — rapid primary attacks and 1.0 Double Tap proc coefficient.
- https://riskofrain2.wiki.gg/wiki/Proc_Coefficient — chance-based effects depend on proc coefficient.
- https://riskofrain2.wiki.gg/wiki/Tri-Tip_Dagger — repeated bleed application and refresh.
- https://riskofrain2.wiki.gg/wiki/Purity — negative luck hurts chance-based procs.
- https://riskofrain2.wiki.gg/wiki/Focus_Crystal — nearby damage applies within 13 meters.
- https://riskofrain2.wiki.gg/wiki/Predatory_Instincts — attack speed from critical hits.

Source checks support selected mechanics; they do not verify the rankings, every illustration, or every game-version interaction. The other short descriptions are conventional item roles, not a complete mechanical audit. No portal information is present.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Risk of Rain 2 fan item tier guide for COMMANDO, approx 1024x1536 or larger. Image 1 assets/survivors/commando.png is SUBJECT reference only: orange/yellow helmeted astronaut with two pistols. Image 2 assets/tier-guides/captain.png is STYLE/layout reference only: dark navy sci-fi panel, cyan borders, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows, illustrated item thumbnails and legible names. Do not copy Captain, his items, inaccurate mechanics or official logo. Use compact Commando hero art across top quarter; devote remaining space to FOUR equal rows with FOUR item cells each. Every cell has stylized recognizable icon, exact item name, and exact short note. No extra items. Main title "COMMANDO"; subtitle "Rapid-fire / On-hit / Bleed"; intro "Double Tap fires rapidly with a 1.0 proc coefficient." Four rows:
OPTIMAL — "Highest priorities for a standard on-hit build"
Tri-Tip Dagger — "Repeated hits stack bleed."
Soldier's Syringe — "Faster primary attacks."
AtG Missile Mk. 1 — "Chance for extra missile damage."
Ukulele — "Chance for chain lightning."
BEST — "Strong damage and mobility support"
Lens-Maker's Glasses — "Raises critical strike chance."
Predatory Instincts — "Crits grant attack speed."
Hopoo Feather — "Extra jump for safer movement."
Paul's Goat Hoof — "Faster movement."
OKAY — "Useful, but depends on inventory and playstyle"
Backup Magazine — "Extra secondary skill charge."
Focus Crystal — "Bonus damage within 13 meters."
Tougher Times — "Chance to block incoming damage."
Armor-Piercing Rounds — "Bonus damage against bosses."
NOT GOOD — "Lower priority for this mobile on-hit build; situational, not useless"
Bustling Fungus — "Healing requires standing still."
Warbanner — "Buff requires its local area."
Squid Polyp — "Turret from interactables."
Purity — "Bad luck hurts chance-based procs."
Footer exact text "AI-generated fan guide • Proposed rankings, not verified"
Small line "Stylized icons • Community guide • Not officially affiliated"
Make exact names legible; don't invent items or numerical bonuses; no official logos. Polished illustrative sci-fi style closely matches source.
```

## QA

Inspected the final 1024 × 1536 PNG: Commando subject, four ordered tier rows, all 16 names and short descriptions, contextual low-priority explanation and visible AI/unverified footer are present and readable. JSON names match the image. Icons are stylized approximations (particularly Purity) and are not verified game sprites. No gameplay testing or exhaustive patch-version audit was performed.
