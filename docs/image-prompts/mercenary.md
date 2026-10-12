# Mercenary tier-guide generation

- Method: built-in `image_gen` with two explicit reference roles.
- Output: `assets/tier-guides/mercenary.png`, new 1024 × 1536 PNG. Original survivor artwork preserved.
- Subject reference: `assets/survivors/mercenary.png`.
- Style/layout reference: `assets/tier-guides/captain.png`.
- Proposed loadout: Laser Sword / Whirlwind / Focused Assault / Eviscerate; melee damage, cooldown cycling, and mobility.
- Tier placements are editorial recommendations, not verified rankings. Icons are AI approximations, not official sprites.
- Metadata: `src/data/tier-guides/mercenary.json`, four arrays matching the image.

## Sources checked

Checked 2026-10-11 with wiki.gg search extracts. Direct full-page fetch for Mercenary returned HTTP 403; search extracts provided skill descriptions and cooldown information.

- https://riskofrain2.wiki.gg/wiki/Mercenary — Focused Assault deals 700% and applies Expose; Eviscerate has a 6-second base cooldown, attacks repeatedly, and protects during the skill. The image avoids numerical invulnerability promises.
- https://riskofrain2.wiki.gg/wiki/Focus_Crystal — damage bonus within 13 meters.
- https://riskofrain2.wiki.gg/wiki/Alien_Head — reduces skill cooldowns.
- https://riskofrain2.wiki.gg/wiki/Lysate_Cell — extra Special charge and faster Special recharge; requires Survivors of the Void; corrupts Fuel Cells.
- https://riskofrain2.wiki.gg/wiki/Hardlight_Afterburner — extra Utility charges and faster Utility recharge.
- https://riskofrain2.wiki.gg/wiki/Backup_Magazine — extra Secondary charge, therefore Whirlwind in this loadout.
- https://riskofrain2.wiki.gg/wiki/Soldier%27s_Syringe — attack speed.
- https://riskofrain2.wiki.gg/wiki/Paul%27s_Goat_Hoof — movement speed.
- https://riskofrain2.wiki.gg/wiki/Bandolier — chance on kill for ammo packs that reset skill cooldowns; no guaranteed drop claimed.
- https://riskofrain2.wiki.gg/wiki/Runald%27s_Band — high-damage hit activation, met by Focused Assault.
- https://riskofrain2.wiki.gg/wiki/Ukulele — chance-based chain lightning.
- https://riskofrain2.wiki.gg/wiki/Tougher_Times — chance to block damage.
- https://riskofrain2.wiki.gg/wiki/Hopoo_Feather — additional jump, including on Mercenary.
- https://riskofrain2.wiki.gg/wiki/Bustling_Fungus — standing-still healing.
- https://riskofrain2.wiki.gg/wiki/Squid_Polyp — interactable activation summons stationary turrets.
- https://riskofrain2.wiki.gg/wiki/Bison_Steak — flat maximum-health gain, not its obsolete healing-on-kill effect.
- https://riskofrain2.wiki.gg/wiki/Light_Flux_Pauldron — shorter cooldowns with attack-speed penalty. Low placement is contextual to this melee/Eviscerate build; it can be useful for other cooldown strategies.
- https://riskofrain2.wiki.gg/wiki/Purity — cooldown reduction with negative luck; researched but intentionally excluded from this non-lunar core recommendation.

These sources support concise mechanics notes, not universal tier ordering or icon accuracy. No portal information included. No gameplay test or exhaustive patch audit performed.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Risk of Rain 2 fan item tier guide for MERCENARY, 1024x1536 or larger. Reference image 1 assets/survivors/mercenary.png is SUBJECT only: white armored agile swordsman with glowing cyan visor, blue scarf, luminous blue sword. Reference image 2 assets/tier-guides/captain.png is STYLE/layout only: polished dark navy sci-fi panels, neon cyan borders, illustrated item thumbnails, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows. Do not copy Captain or official logo. Compact Mercenary hero art top quarter. Remaining space has FOUR clear rows of FOUR item cells each. Each cell includes exact name and exact short note below a stylized item icon. No extra items.
Title "MERCENARY"
Subtitle "Melee / Cooldown / Eviscerate"
Loadout "Laser Sword • Whirlwind • Focused Assault • Eviscerate"
Intro "Cycle melee skills and stay mobile."
OPTIMAL — "Core cooldown and close-range priorities"
Focus Crystal — "Bonus damage within 13m."
Alien Head — "Reduces skill cooldowns."
Lysate Cell — "Extra Special charge; faster recharge."
Hardlight Afterburner — "Extra Utility charges; faster recharge."
BEST — "Strong skill cycling and mobility support"
Soldier's Syringe — "Faster attacks."
Backup Magazine — "Extra Whirlwind charge."
Paul's Goat Hoof — "Faster movement."
Bandolier — "Ammo packs on kill reset skills."
OKAY — "Useful; priority depends on inventory"
Runald's Band — "Focused Assault can trigger ice blasts."
Ukulele — "Chance for chain lightning."
Tougher Times — "Chance to block damage."
Hopoo Feather — "Adds another jump."
NOT GOOD — "Lower priority here; situational, not useless"
Bustling Fungus — "Healing requires standing still."
Squid Polyp — "Interactables summon stationary turrets."
Bison Steak — "Small flat max-health gain."
Light Flux Pauldron — "Faster cooldowns, but slower attacks."
Bottom note "Lysate Cell requires Survivors of the Void and corrupts Fuel Cells."
Footer EXACT "AI-generated fan guide • Proposed rankings, not verified"
Small final line "Stylized icons • Community guide • Not officially affiliated"
Ensure all item names and notes are legible and spelled exactly. No invented bonuses, no official logo. The colored tiers are editorial priorities for the stated loadout, not universal rankings.
```

## QA

Inspected the saved 1024 × 1536 PNG. All four tiers contain four items each, in matching JSON order. All names, notes, loadout, and AI-generated / proposed rankings footer are readable. Focus Crystal's range condition, separate Special/Utility charges, Lysate Cell DLC/corruption caveat, Focused Assault band interaction, and contextual low-tier wording are present. Artwork follows Mercenary subject and Captain panel style without the official logo. The Lysate/Syringe icon resemblance and other stylized artwork are unverified; names and sourced notes are the information reference.
