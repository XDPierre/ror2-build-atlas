# Engineer tier-guide generation

- Method: built-in `image_gen`; new raster asset, no survivor original modified.
- Destination: `assets/tier-guides/engineer.png`.
- Reference roles: `assets/survivors/engineer.png` is subject reference only; `assets/tier-guides/captain.png` is style/layout reference only.
- Assumption: stationary TR12 Gauss Auto-Turrets, ordinary on-hit attacks and Bustling Fungus sustain. This is not a mobile TR58, Visions/Purity, or Eclipse-specific ranking.
- Rankings are editorial proposals, not verified game data or official tiers. AI-rendered icons are stylized approximations, not verified game sprites.

## Sources checked

- https://riskofrain2.wiki.gg/wiki/Engineer — TR12 stationary behavior, item inheritance at deployment, redeployment to refresh inventory, healing synergy, and TR58 distinction.
- https://riskofrain2.wiki.gg/wiki/N%27kuhana%27s_Opinion — healing feeds damaging skulls and combines with stationary turret healing.
- https://riskofrain2.wiki.gg/wiki/Hopoo_Feather — extra jumping benefits Engineer; turrets do not jump.
- https://riskofrain2.wiki.gg/wiki/Weeping_Fungus — sprint healing, corruption of Bustling Fungus, and lack of TR12 sprint activation; Survivors of the Void requirement.
- https://riskofrain2.wiki.gg/wiki/Purity — negative luck reduces chance-based effects; alternate Visions builds can use it.
- https://riskofrain2.wiki.gg/wiki/Warbanner — turret inheritance blacklist.
- https://riskofrain2.wiki.gg/wiki/Lepton_Daisy — holdout healing rather than continuous healing; turret inheritance blacklist.
- https://riskofrain2.wiki.gg/wiki/Death_Messages — healing process includes Rejuvenation Rack amplification.
- https://riskofrain2.wiki.gg/wiki/Soldier%27s_Syringe — attack speed increase.
- https://riskofrain2.wiki.gg/wiki/Focus_Crystal — damage bonus within 13 meters.
- https://riskofrain2.wiki.gg/wiki/Backup_Mag — extra secondary charge and Engineer mine capacity.
- https://riskofrain2.wiki.gg/wiki/Leeching_Seed — healing on hits, adjusted by proc coefficient.
- https://riskofrain2.wiki.gg/wiki/Ukelele — chance-based chain lightning.
- https://riskofrain2.wiki.gg/wiki/Paul%27s_Goat_Hoof — movement speed.
- https://riskofrain2.wiki.gg/wiki/Armor-Piercing_Rounds — bonus damage against eligible bosses; does not pierce armor.

Checks support selected mechanics rather than verifying every ranking or patch-version interaction. No portal claim is present. Weeping Fungus is low priority only for this stationary healing build and can heal Engineer while sprinting. Warbanner and Lepton Daisy still provide useful local effects. Movement items are included for player safety.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Risk of Rain 2 fan item tier guide for ENGINEER, approximately 1024x1536 or larger. Reference image 1 assets/survivors/engineer.png is SUBJECT reference only: armored orange engineer with amber visor and two stationary gun turrets. Reference image 2 assets/tier-guides/captain.png is STYLE/layout reference only: dark navy sci-fi panels, cyan borders, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD. Do not copy Captain, his item rankings, official logos or unsupported mechanics. Compact Engineer artwork across top quarter; remaining space FOUR equal rows of FOUR item cells. Each cell contains a stylized item icon, exact name and exact short note. No extra items. Main title "ENGINEER"; subtitle "Stationary TR12 turret sustain / On-hit"; intro "Turrets inherit most items at deployment. Redeploy to refresh." Small loadout note "Assumes TR12 Gauss Auto-Turrets. Mobile TR58 needs different healing."
OPTIMAL — "Core priorities for stationary turret sustain"
Bustling Fungus — "Stationary turrets create healing zones."
Soldier's Syringe — "Faster turret attacks."
AtG Missile Mk. 1 — "Chance for extra missile damage."
Ukulele — "Chance for chain lightning."
BEST — "Strong healing synergies and player mobility"
N'kuhana's Opinion — "Healing fuels damaging skulls."
Rejuvenation Rack — "Amplifies healing received."
Hopoo Feather — "Extra jump for Engineer, not turrets."
Paul's Goat Hoof — "Faster movement for Engineer."
OKAY — "Useful but dependent on inventory and positioning"
Focus Crystal — "Extra damage within 13 meters."
Backup Magazine — "Extra secondary skill charge."
Leeching Seed — "Hits restore small amounts of health."
Armor-Piercing Rounds — "Bonus damage against bosses."
NOT GOOD — "Lower priority for this build; situational, not useless"
Weeping Fungus — "Replaces Fungus; TR12 cannot sprint."
Purity — "Bad luck hurts chance-based procs."
Warbanner — "Local buff; not inherited by turrets."
Lepton Daisy — "Healing mainly during holdout events."
Small note "Weeping Fungus requires Survivors of the Void."
Footer exact text "AI-generated fan guide • Proposed rankings, not verified"
Small footer "Stylized icons • Community guide • Not officially affiliated"
Make all item names and notes legible, correctly spelled and uncropped. No invented items or numerical bonuses. Preserve generous readable text space. The four ordered tiers contain exactly sixteen items.
```

## QA

First 1024 × 1536 render inspected: all sixteen item names and descriptions, four ordered rows, TR12 assumption and AI/proposed ranking footer are legible. Purity was illustrated incorrectly as a teddy bear, so a targeted built-in image edit was requested before final delivery.

Final corrected 1024 × 1536 PNG inspected: Purity now has the intended pointed crystalline polyhedron; all text, sixteen items, TR12 assumption, tiers and visible disclaimer remain intact. The corrected image is saved at the destination. JSON item arrays match the final rows. Icons remain stylized AI approximations. No gameplay testing or exhaustive patch audit was performed.

## Exact correction prompt

```text
Use case: precise-object-edit. Edit this Engineer tier infographic with ONLY ONE change: the Purity item icon in the NOT GOOD row, second cell, currently incorrectly shows a teddy bear. Replace ONLY that bear icon with a stylized white/light-cyan crystalline great stellated dodecahedron (many pointed star polyhedron), recognizable as Purity. Preserve the complete artwork, all sixteen item cells, every word and punctuation, typography, colors, layout, disclaimer, title, Engineer illustration and all other icons exactly. Do not change any text or item placement.
```
