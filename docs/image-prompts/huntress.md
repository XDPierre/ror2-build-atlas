# Huntress tier-guide generation

- Method: built-in `image_gen`; Huntress supplied as subject reference and Captain supplied as style/layout reference.
- Output: `assets/tier-guides/huntress.png`, new 1024 × 1536 PNG. Original survivor artwork preserved.
- Proposed build: Flurry / Laser Glaive / Phase Blink / Ballista; crit and on-hit priorities for a mobile ranged playstyle.
- Tier placements are editorial recommendations, not verified rankings. Item illustrations are AI approximations, not official sprites.

## Sources checked

Checked 2026-10-11 using wiki.gg search extracts.

- https://riskofrain2.wiki.gg/wiki/Huntress — Flurry uses 3 arrows normally and 6 on a critical strike; skills can be used while sprinting; Ballista's large individual hits meet band activation requirements.
- https://riskofrain2.wiki.gg/wiki/Lens-Maker%27s_Glasses — raises critical strike chance; chance eventually caps, so do not stack indefinitely.
- https://riskofrain2.wiki.gg/wiki/Predatory_Instincts — critical hits grant attack speed.
- https://riskofrain2.wiki.gg/wiki/AtG_Missile_Mk._1 — missile chance scales with proc coefficient, not a guaranteed trigger.
- https://riskofrain2.wiki.gg/wiki/Shatterspleen — critical hits apply bleed.
- https://riskofrain2.wiki.gg/wiki/Runald%27s_Band — high-damage hit activation; Ballista qualifies.
- https://riskofrain2.wiki.gg/wiki/Focus_Crystal — bonus damage within 13 meters.
- https://riskofrain2.wiki.gg/wiki/Purity — negative luck reduces chance-based effects; capped crit chance is unaffected.
- https://riskofrain2.wiki.gg/wiki/Light_Flux_Pauldron — attack speed penalty slows Huntress primary attacks and Laser Glaive.
- https://riskofrain2.wiki.gg/wiki/Category%3ATechnology_Items — Backup Magazine adds secondary charges.

Mechanics checks support these short descriptions; they do not validate every artwork detail, every tier placement, or every version interaction. Ordinary item roles for movement, sprint armor, lightning, healing, attack speed, and blocking are summarized without numeric bonuses. No portal content included.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Risk of Rain 2 fan item tier guide for HUNTRESS, approximately 1024x1536 or larger. Reference image 1 assets/survivors/huntress.png is SUBJECT only: agile red hooded armored archer with glowing cyan visor and energy bow. Reference image 2 assets/tier-guides/captain.png is STYLE/layout only: polished dark navy sci-fi panels, neon cyan borders, illustrated item thumbnails, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows. Do not copy Captain or official logo. Compact Huntress hero art top quarter. Remaining space has FOUR equally clear rows of FOUR item cells each. Each cell includes exact name and exact short note below a stylized recognizable item icon. No extra items.
Title "HUNTRESS"
Subtitle "Flurry / Crit / On-hit"
Loadout text "Flurry • Laser Glaive • Phase Blink • Ballista"
Intro "Flurry fires 3 arrows, or 6 on a critical strike."
OPTIMAL — "Core priorities for this Flurry crit build"
Lens-Maker's Glasses — "Raises crit chance for Flurry."
Soldier's Syringe — "Faster primary attacks."
Predatory Instincts — "Crits grant attack speed."
AtG Missile Mk. 1 — "Chance for extra missile damage."
BEST — "Strong damage and mobility support"
Ukulele — "Chance for chain lightning."
Shatterspleen — "Critical hits inflict bleed."
Paul's Goat Hoof — "Faster movement."
Hopoo Feather — "Extra jump for safer movement."
OKAY — "Useful; priority depends on inventory"
Backup Magazine — "Extra Laser Glaive charge."
Rose Buckler — "Armor while sprinting."
Tougher Times — "Chance to block damage."
Runald's Band — "Ballista can trigger ice blasts."
NOT GOOD — "Lower priority for this ranged build; situational, not useless"
Bustling Fungus — "Healing requires standing still."
Focus Crystal — "Damage bonus only within 13m."
Purity — "Bad luck hurts chance-based procs."
Light Flux Pauldron — "Attack-speed penalty slows Flurry."
Footer EXACT "AI-generated fan guide • Proposed rankings, not verified"
Small final line "Stylized icons • Community guide • Not officially affiliated"
Ensure all text and item names are legible and spelled exactly. No numerical bonus inventions, no official logo. Show red hooded Huntress bow hero art, not Captain.
```

## QA

Inspected final 1024 × 1536 image. Huntress subject and chosen loadout are present; all four tiers have four items each, in the same order as JSON. All sixteen item names, short notes, and the visible AI-generated / proposed rankings footer are readable. Flurry's crit arrow count is correctly shown as 3 / 6. Ballista band synergy, the 13m Focus Crystal condition, the Light Flux attack-speed penalty, and conditional low-priority wording are preserved. Icons remain stylized and unverified; no gameplay testing or exhaustive patch audit was performed.
