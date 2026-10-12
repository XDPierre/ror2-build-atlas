# Artificer tier guide

- Method: built-in `image_gen.imagegen`, one generation call; no CLI/API fallback.
- Asset: `assets/tier-guides/artificer.png`, 1024 × 1536 PNG.
- Subject reference: `assets/survivors/artificer.png` (interpretive supplied AI art).
- Style reference: `assets/tier-guides/captain.png`.
- Scope: proposed Flame Bolt + Nano-Bomb fire/burst priorities with DLC enabled. Rankings are editorial suggestions, not verified game data. Low tier means lower priority for this build.

## Sources checked

Wiki.gg search results were available; direct page opens returned HTTP 403. Mechanics below were checked against indexed wiki.gg excerpts on 2026-10-11.

- https://riskofrain2.wiki.gg/wiki/Artificer — current Flame Bolt has Rapid and recharges faster with attack speed; Flame Bolt applies Ignite.
- https://riskofrain2.wiki.gg/wiki/Ignition_Tank — boosts Ignite; does not boost Kjaro's Band or Will-o'-the-wisp damage.
- https://riskofrain2.wiki.gg/wiki/Backup_Mag — adds a secondary charge, does not reduce cooldown.
- https://riskofrain2.wiki.gg/wiki/Kjaro%27s_Band — high-damage eligible hits trigger bands, with cooldown; charged Nano-Bomb burst can qualify.
- https://riskofrain2.wiki.gg/wiki/Crowbar — bonus damage against healthy targets.
- https://riskofrain2.wiki.gg/wiki/Alien — skill cooldown reduction.

## Visual QA and limitations

Inspected saved full-resolution image. All sixteen intended item names, four rows, short notes and three footer statements are legible and present. Title and margins are intact. Current attack-speed benefit is correctly reflected in Soldier's Syringe. Ignition Tank caveat is visible. No official logo or affiliation claim. Icons and character illustration are AI interpretations and are not authoritative game assets. Rankings have not been playtested and depend on loadout, patch, skill and available DLC. No material text error found.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Artificer four-tier item guide for a Risk of Rain 2 fan website, 1024x1536 or similar high resolution portrait. Input image 1 is subject reference (Artificer white masked flame/ice spellcaster); input image 2 is style reference ONLY (Captain tier guide). Replace all Captain subject/content with Artificer content below. Match dark sci-fi painterly illustration, crisp cyan bevel title, yellow/cyan/purple/red tier panels, named item icon cards. Top 23% header with Artificer illustration, remaining space four clearly legible horizontal rows of four equal-width item cards. Art is interpretive fan illustration, do not claim official affiliation. No official logo. Give typography priority and allow all exact text enough room. Illustrative item icons with their exact names immediately below, and short note below name. Every item appears exactly once.

HEADER exact text:
ARTIFICER
Fire Burst • Flame Bolt + Nano-Bomb
Proposed item priorities • DLC enabled
Burn damage, charged burst and cooldown support.

OPTIMAL (yellow):
Ignition Tank — Stronger Flame Bolt burns.
Kjaro's Band — Charged burst triggers fire tornado.
Runald's Band — Charged burst triggers ice blast.
Backup Magazine — Extra secondary skill charge.

BEST (cyan):
Crowbar — Stronger hits on healthy targets.
Alien Head — Reduces skill cooldowns.
Soldier's Syringe — Faster Flame Bolt recharge.
Paul's Goat Hoof — Movement speed for safer positioning.

OKAY (purple):
Lens-Maker's Glasses — General critical-hit chance.
Tougher Times — Chance to block incoming damage.
Hopoo Feather — Extra jump for repositioning.
Gasoline — Spreads burns after kills.

NOT GOOD (red):
Bustling Fungus — Requires standing still to heal.
Squid Polyp — Depends on nearby interactables.
Leeching Seed — Less reward from infrequent hits.
Warbanner — Buff limited to its area.

Footer exact text:
NOT GOOD = lower priority for this build; useful elsewhere.
Ignition Tank does not boost Kjaro's Band damage.
AI-generated fan guide • Proposed rankings, not verified

Constraints: Clear four-tier layout. No invented mechanics, no extra items, no claims of universal best/worst. Footer visible with good contrast, no text cut off. Item names must be spelled exactly, notes verbatim, clean typesetting.
```
