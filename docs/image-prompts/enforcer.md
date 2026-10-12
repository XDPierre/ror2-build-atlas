# Enforcer tier-guide provenance

- Method: built-in `image_gen.imagegen`; new generation, no CLI/API fallback.
- Final image: `assets/tier-guides/enforcer.png`, PNG, 1024 × 1536.
- Original generated file: `C:/Users/pr090/.codex/generated_images/01a12d7f-d8d6-7e03-811d-5bda3a19c123/exec-5135cca3-923f-4b6d-b3ee-68533e2e8bfd.png`.
- Reference 1: `assets/survivors/enforcer.png`, visual character appearance only; supplied fan artwork is not mechanical evidence.
- Reference 2: `assets/tier-guides/captain.png`, framing, palette and four-tier layout only; its rankings and claims were not copied.
- Scope: proposed default Trenchbroom / Steel Protection defensive-stance on-hit build. NOT GOOD means lower priority for this build, not globally useless.
- Rankings are editorial inference from item descriptions, not verified gameplay testing or a cited community consensus.

## Sources

Checked 2026-10-11 through wiki.gg search excerpts. Current wiki coverage of Hallowed Concepts is under construction; direct skill/item data extracts were used to avoid mixing official Enforcer with mods or Risk of Rain 1. No exact stats or proc coefficients are asserted in the artwork.

- https://riskofrain2.wiki.gg/wiki/Hallowed_Concepts — official DLC Enforcer identity; new expansion coverage is incomplete.
- https://riskofrain2.wiki.gg/wiki/Module:Skills/Data — Trenchbroom switches from slug to rapid piercing shells in Defensive Stance; Steel Protection enters stance and exits with a parry attack. Surge Protection is an alternate skill with extra-health mechanics and is outside this default guide.
- https://riskofrain2.wiki.gg/wiki/Enforcer:_Burning_Lead — confirms Trenchbroom Defensive Stance shots and alternate Shrapnel Grenade distinction.
- https://riskofrain2.wiki.gg/wiki/Module:Items/Data — item effects and real item names.
- https://riskofrain2.wiki.gg/wiki/Category:Damage_Items — attack speed, missile, bleed and lightning effects.
- https://riskofrain2.wiki.gg/wiki/Attack_Speed — Soldier's Syringe attack speed; missile and lightning proc descriptions.
- https://riskofrain2.wiki.gg/wiki/Armor-Piercing_Rounds — bonus specifically against bosses, not generic armor penetration.
- https://riskofrain2.wiki.gg/wiki/Template:ItemLink — extra jump from Hopoo Feather.
- https://riskofrain2.wiki.gg/wiki/Items — movement, critical chance, blocking, nearby damage, danger-free recovery, interactable and holdout-zone effects.
- https://riskofrain2.wiki.gg/wiki/Red_Whip — movement boost while not using offensive skills; taking damage does not remove it.
- https://riskofrain2.wiki.gg/wiki/Bundle_of_Fireworks — activating interactables launches fireworks.
- https://riskofrain2.wiki.gg/wiki/Category:InteractableRelated_Items — Squid Polyp turret is temporary and interactable-triggered.
- https://riskofrain2.wiki.gg/wiki/Lepton_Daisy — healing applies in holdout zones, not only teleporter events.

All ranked items are base-game items; Hallowed Concepts is required for the official survivor. This is not a catalog of all newly added DLC items.

## Final prompt

```text
Use case: infographic-diagram. Create a new high-resolution portrait Risk of Rain 2 fan item-priority infographic for ENFORCER, preferably 1024x1536 or larger portrait. Reference image 1 assets/survivors/enforcer.png is ONLY a visual reference for the supplied fan Enforcer shield-armored character. Reference image 2 assets/tier-guides/captain.png is ONLY a layout/palette reference: dark navy space background, cyan angular sci-fi frame, portrait hero header, four ranked rows with gold/cyan/purple/red borders. Do not copy Captain text or item rankings. These illustrations are not verified game data. No official game logo.

Header occupying about 25 percent: large readable title "ENFORCER", subtitle "Defensive Stance / On-Hit", smaller line "Trenchbroom + Steel Protection". Show the armored shield-bearing Enforcer upper body dramatically, without obscuring text. Short description exactly: "Rapid piercing shells in Defensive Stance support sustained damage. Reposition between fights."

Main body has EXACTLY FOUR full-width horizontal rows, each with FOUR equally sized item cards. Each card has a clear small stylized illustration of the named real item, its exact readable name, then one short reason. No additional items.
Gold row heading "OPTIMAL", cards:
"Soldier's Syringe" — "More attack speed."
"AtG Missile Mk. 1" — "Chance to launch missiles."
"Ukulele" — "On-hit chain lightning."
"Hopoo Feather" — "Extra jump for repositioning."

Cyan row heading "BEST", cards:
"Paul's Goat Hoof" — "Faster movement."
"Lens-Maker's Glasses" — "More critical hits."
"Tri-Tip Dagger" — "Chance to apply bleed."
"57 Leaf Clover" — "Improves chance-based effects."

Purple row heading "OKAY", cards:
"Focus Crystal" — "Bonus damage nearby."
"Tougher Times" — "Chance to block damage."
"Armor-Piercing Rounds" — "Extra boss damage."
"Cautious Slug" — "Recover outside danger."

Red row heading "NOT GOOD". Under heading readable line "Lower priority for this build; useful in other situations."
Cards:
"Red Whip" — "Speed only out of combat."
"Bundle of Fireworks" — "Requires interactables."
"Squid Polyp" — "Temporary interactable turret."
"Lepton Daisy" — "Healing in holdout zones."

Footer must be legible and exactly read: "AI-generated fan guide • Proposed rankings, not verified". Small final note: "Default on-hit build. Alternate skills may change priorities." These are proposed build priorities, NOT a verified universal tier list. Never claim permanent full invulnerability, guaranteed bleed, blocked hits activating damage-taken effects, exact proc coefficients, or mod/Risk of Rain 1 mechanics. Keep clear typography and ample card text spacing. Illustrated item icons are approximate fan depictions, not authoritative inventory art. Avoid extra logos, repeated rows, missing cards, invented item names and illegible small print.
```

## QA limitations

Final image inspected at full portrait size: four rows, four cards per row, all sixteen item names and tier assignments match the JSON; descriptions are readable and the footer explicitly says the guide is AI-generated and rankings are not verified. No material text or layout errors found. Character and item icon depictions remain AI-generated approximations. Visual inspection does not prove gameplay balance. No device or game-session validation is claimed.
