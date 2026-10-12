# REX tier-guide generation

- Method: built-in `image_gen` generation with two local reference images.
- Destination: `assets/tier-guides/rex.png` (new image; survivor source preserved).
- Subject reference: `assets/survivors/rex.png`, plant-covered robot appearance only.
- Style reference: `assets/tier-guides/captain.png`, panel layout, colors and illustration style only.
- Build context: safe DIRECTIVE: Inject / Drill / Disperse / Harvest loadout. No health-cost skills are selected.
- Rankings are proposed editorial judgments for this loadout, not official or verified tiers. Illustrations are AI approximations, not authenticated game sprites.

## Sources checked

- https://riskofrain2.wiki.gg/wiki/REX — selected DIRECTIVE skills, primary healing, alternative health-cost skills and their distinct interactions.
- https://riskofrain2.wiki.gg/wiki/Proc_Coefficient — DIRECTIVE attack proc coefficients.
- https://riskofrain2.wiki.gg/wiki/Razorwire — damage-triggered retaliation and blocked-hit exception.
- https://riskofrain2.wiki.gg/wiki/Planula — damage-triggered flat heal.
- https://riskofrain2.wiki.gg/wiki/Repulsion_Armor_Plate — flat damage reduction.
- https://riskofrain2.wiki.gg/wiki/Rejuvenation_Rack — healing amplification.
- https://riskofrain2.wiki.gg/wiki/Transcendence — health conversion to shield and loss of ordinary healing value.
- https://riskofrain2.wiki.gg/wiki/Death_Mark — four unique debuffs required.
- https://riskofrain2.wiki.gg/wiki/Module:Items/Data — item names and conventional effects.

Checked on 2026-10-11 (user timezone). The wiki has skill-specific and broad self-damage statements that should not be flattened into one universal rule. This guide deliberately selects safe DIRECTIVE variants, so Medkit and Planula notes refer to enemy damage, and Razorwire's note explicitly states no self-cost trigger in this loadout. It does not assert behavior for every HP-cost skill. Sources support selected mechanics, not the rankings or every illustration. No portal information is included.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Risk of Rain 2 fan item tier guide for REX, 1024x1536 or larger. Image 1 assets/survivors/rex.png is SUBJECT reference only: plant-covered industrial robot with green glow and flowers. Image 2 assets/tier-guides/captain.png is STYLE reference only: dark navy sci-fi panel cyan borders gold OPTIMAL cyan BEST purple OKAY red NOT GOOD rows, item illustrations with legible exact names. Do not copy Captain or official logo. Hero REX upper quarter; FOUR equal tier rows with FOUR item cells each in remaining space. Main title "REX"; subtitle "Safe DIRECTIVE / Ranged on-hit"; loadout line "Inject / Drill / Disperse / Harvest"; intro "No health-cost skills in this loadout. Rankings change with other skills." Every item needs stylized icon, exact name, exact brief note. No extra items.
OPTIMAL — "Damage priorities for this safe ranged loadout"
Soldier's Syringe — "Faster primary attacks."
Lens-Maker's Glasses — "Raises critical strike chance."
Tri-Tip Dagger — "Chance to apply bleed."
AtG Missile Mk. 1 — "Chance for extra missile damage."
BEST — "Damage, healing and mobility support"
Ukulele — "Chance for chain lightning."
Rejuvenation Rack — "Amplifies healing."
Hopoo Feather — "Extra jump for safer movement."
Paul's Goat Hoof — "Faster movement."
OKAY — "Useful with the right inventory or incoming damage"
Medkit — "Delayed heal after enemy damage."
Planula — "Flat heal from enemy damage."
Repulsion Armor Plate — "Flat incoming damage reduction."
Death Mark — "Needs four unique debuffs."
NOT GOOD — "Lower priority for THIS loadout; situational, not useless"
Razorwire — "No self-cost trigger here; enemy hits still trigger it."
Bustling Fungus — "Healing requires standing still."
Focus Crystal — "Bonus damage only within 13 meters."
Transcendence — "Shields do not receive ordinary healing."
Footer exact text "AI-generated fan guide • Proposed rankings, not verified"
Small line "Stylized icons • Community guide • Not officially affiliated"
Constraints: Explicit safe DIRECTIVE loadout. Never claim self-inflicted damage automatically triggers every item. Never imply this ranking covers health-cost loadouts. Do not invent items, numerical bonuses, logos or official affiliation. Make all names and footer highly legible. Polished sci-fi illustrative style.
```

## QA

Visually inspected the final 1024 × 1536 PNG. It has REX subject art, the explicit safe skill loadout, all four ordered tier rows, all 16 expected item names and short notes, contextual lower-priority wording, and a visible AI-generated/proposed/unverified footer. Names match `src/data/tier-guides/rex.json`. The generated art is stylized and some icons are approximate (especially Transcendence). No game runtime testing or exhaustive version-specific audit was performed.
