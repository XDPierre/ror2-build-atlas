# Drifter tier-guide provenance

- Method: built-in `image_gen.imagegen`, new image generation, no CLI/API fallback.
- Final path: `assets/tier-guides/drifter.png`, PNG, 1024 x 1536.
- Original output: `C:/Users/pr090/.codex/generated_images/01a12d7d-f2fc-71a0-96de-5d8fec801a46/exec-f726bb29-6c8e-40cb-8288-92ff44c83233.png`; copied into the project, original preserved.
- Subject reference: `assets/survivors/drifter.png`, supplied illustrative fan appearance only. Its cowboy-like appearance and firearms are not verified canonical Drifter identity. New guide requests bag-based melee action and accurate Junk mechanics.
- Style reference: `assets/tier-guides/captain.png`, portrait four-row layout and dark neon palette only.
- Ranking scope: proposed melee/Junk/Salvage priorities; not playtested, authoritative or objectively verified. NOT GOOD means lower priority in this proposed build.

## Sources and accuracy

Checked 2026-10-11 through wiki.gg search extracts. Direct opening of Drifter and Collector's Compulsion returned HTTP 403; full-page access was unavailable. Names and mechanics were checked through indexed wiki excerpts, which can be incomplete.

- https://riskofrain2.wiki.gg/wiki/Drifter — Blunt Force melee hits can create Junk; Salvage spends Junk to spawn temporary items. Junk Cube explosions and Tornado Slam's ending hit can activate elemental bands; do not assume the ordinary 170% or 350% primary hit meets the greater-than-400% threshold.
- https://riskofrain2.wiki.gg/wiki/Collector%27s_Compulsion — **Confirmed real item**, added by Alloyed Collective, uncommon. Its listed effect gives a temporary stacking all-stat bonus when picking up items or collectibles. The valid-pickup list includes Drifter Junk, and the Tips explicitly recommend it for Drifter because Junk and Salvage temporary-item pickups give the buffs. Thus the old card's name is not fabricated; the original item's stylized illustration remains unverified. The guide deliberately avoids exact numerical claims.
- https://riskofrain2.wiki.gg/wiki/Soldier%27s_Syringe — raises attack speed, not cooldown reduction.
- https://riskofrain2.wiki.gg/wiki/Focus_Crystal — increases damage to nearby enemies, useful for melee.
- https://riskofrain2.wiki.gg/wiki/Missile — AtG missile chance on hits; also documents both bands' greater-than-400% trigger and elemental effects.
- https://riskofrain2.wiki.gg/wiki/Paul%27s_Goat_Hoof — movement speed.
- https://riskofrain2.wiki.gg/wiki/Lunar_Items — item table confirms Hopoo Feather extra jump and Runald's Band trigger/effect.
- https://riskofrain2.wiki.gg/wiki/Glasses — Lens-Maker's Glasses critical chance.
- https://riskofrain2.wiki.gg/wiki/Tougher_Times — chance to block incoming damage, not guaranteed protection.
- https://riskofrain2.wiki.gg/wiki/Backup_Mag — extra secondary skill charge; Junk cooldown bypass reduces its priority in this build.
- https://riskofrain2.wiki.gg/wiki/Regenerating_Scrap — SotV item; Drifter's passive counts held Regenerating Scrap as green scrap, granting health regeneration. Consumed scrap returns at the next stage.
- https://riskofrain2.wiki.gg/wiki/Fresh_Meat — Bison Steak gives flat maximum health; same extract includes Bustling Fungus stationary healing.
- https://riskofrain2.wiki.gg/wiki/Squid_Polyp — interactable-triggered temporary turret.
- https://riskofrain2.wiki.gg/wiki/Warbanner — level-up or teleporter-start banner; fixed-area buffs.
- https://riskofrain2.wiki.gg/wiki/Module%3AItems/LogbookData — canonical listed item names.

Mechanics checking does not verify the proposed tier placement. Art is AI-generated interpretation, not official item sprites or a verified canonical character depiction. Build priorities vary by loadout, enabled DLC and run.

## Exact generation prompt

```text
Use case: infographic-diagram
Asset type: portrait Risk of Rain 2 fan survivor item tier infographic, 1024x1536 or larger.
Primary request: Generate a new DRIFTER tier guide with readable typography and 16 item cards in exactly FOUR horizontal tiers with FOUR columns each.
Input images: Image 1 assets/survivors/drifter.png is an illustrative SUBJECT reference only: preserve the supplied fan-art armored scavenger, hat, red scarf, backpack, with a large bag swung as a melee weapon. This reference is not verified canonical appearance or mechanics. Image 2 assets/tier-guides/captain.png is a STYLE/layout reference only: dark navy sci-fi, cyan frames, dramatic upper character panel and tier rows. Do not copy Captain, original logo, rankings or text.
Composition: upper quarter title "DRIFTER", subtitle "Melee / Junk / Salvage", stylish backpack melee action illustration against alien ruins. Brief premise "Melee hits generate Junk. Salvage turns Junk into temporary items." Below, four generous tier rows, gold OPTIMAL, cyan BEST, magenta OKAY, red NOT GOOD. Every card has a stylized interpretive item illustration, exact label and short note. No official sprites or logo. All text legible, no truncation.
Exact tier text and four cards per row:
OPTIMAL — "Proposed core priorities for melee and Junk"
Collector's Compulsion — "Junk pickups refresh stat buffs."
Soldier's Syringe — "Faster melee attacks."
Focus Crystal — "More damage to nearby enemies."
Kjaro's Band — "Heavy skill hits trigger flame bursts."
BEST — "Strong damage and mobility support"
Runald's Band — "Heavy skill hits trigger ice bursts."
Paul's Goat Hoof — "Movement speed for positioning."
Hopoo Feather — "Extra jump for safer movement."
AtG Missile Mk. 1 — "Chance for missiles on hits."
OKAY — "Useful support; value depends on the run"
Lens-Maker's Glasses — "More critical hits."
Tougher Times — "Chance to block damage."
Backup Magazine — "Extra secondary charge."
Regenerating Scrap — "Held scrap grants regen. SotV DLC."
NOT GOOD — "Lower priority for this build; useful in other situations"
Bustling Fungus — "Stationary healing limits mobility."
Squid Polyp — "Interactable-triggered turret."
Bison Steak — "Small flat health increase."
Warbanner — "Speed buffs in a fixed area."
Footer exact, readable: "AI-generated fan guide • Proposed rankings, not verified"
Secondary footer: "Item availability depends on enabled DLC. Illustrations are interpretive."
Constraints: Four tiers, exactly four cards each, no duplicates, only these sixteen real item names. No invented abilities, no firearms-mechanics claims, no claim that poor-tier items are globally useless. Accurate spelling, no official affiliation. New asset, not an edit.
```

## QA

Visually inspected the final saved PNG. All four tier headings, exactly four cards per tier, all 16 exact item labels and short notes, lower-priority caveat, DLC caveat, and visible AI/proposed-ranking disclosure are present and legible. Bag melee action replaces the original firearm emphasis. No material spelling or layout error observed; no regeneration needed. Supplied cowboy-like subject remains interpretive rather than verified canonical Drifter appearance. Parsed the companion JSON successfully and confirmed its tier membership matches the image.
