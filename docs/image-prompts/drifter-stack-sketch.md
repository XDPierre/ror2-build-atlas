# Drifter stack-planning sketch

This visual proposal was approved and installed as `assets/tier-guides/drifter.png`. The retained sketch is `../mockups/drifter-stack-sketch.png`. Only Drifter's tier guide was replaced; its starter remains unchanged. Method: built-in `image_gen`, using the previous `assets/tier-guides/drifter.png` as the edit reference. Stack ratios remain illustrative despite adoption of the layout.

## Number notation

The requested `%` symbol is a custom ratio marker. It is not a literal share of inventory, an item effect, or a proc chance. A `1%` tile and a `5%` tile propose one copy of the first item for every five copies of the second. The weights do not need to sum to 100. Multiplying both counts preserves the ratio: 2:10, 3:15, etc. All ratio values below are illustrative design choices, not researched optimal stack counts. Common and uncommon items come from different pools; availability and the current run take precedence.

A plain number indicates an absolute target tied to a stated condition. It must not imply that an uncapped item stops stacking. `0%` means no deliberate acquisition target, not that the item is useless or should always be scrapped.

| Row        | Item                   | Badge | Meaning                                                                   |
| ---------- | ---------------------- | ----- | ------------------------------------------------------------------------- |
| Core Items | Collector's Compulsion | 1%    | Example ratio weight                                                      |
| Core Items | Soldier's Syringe      | 5%    | Example ratio weight                                                      |
| Core Items | Focus Crystal          | 3%    | Example ratio weight                                                      |
| Core Items | Kjaro's Band           | 1%    | Example ratio weight                                                      |
| Best       | Runald's Band          | 1%    | Example ratio weight                                                      |
| Best       | Paul's Goat Hoof       | 3%    | Example ratio weight                                                      |
| Best       | Hopoo Feather          | 1%    | Example ratio weight                                                      |
| Best       | AtG Missile Mk. 1      | 2%    | Example ratio weight                                                      |
| Okay       | Lens-Maker's Glasses   | 10    | Baseline crit target without other crit bonuses; fewer copies may suffice |
| Okay       | Tougher Times          | 2%    | Example ratio weight; diminishing returns, not a fixed cap                |
| Okay       | Backup Magazine        | 1%    | Example ratio weight                                                      |
| Okay       | Regenerating Scrap     | 1%    | Example ratio weight                                                      |
| Not Good   | Bustling Fungus        | 0%    | Do not actively target in this proposal                                   |
| Not Good   | Squid Polyp            | 0%    | Do not actively target in this proposal                                   |
| Not Good   | Bison Steak            | 0%    | Do not actively target in this proposal                                   |
| Not Good   | Warbanner              | 0%    | Do not actively target in this proposal                                   |

## Checked mechanics

Checked October 11, 2026 using indexed wiki entries. These checks support stacking distinctions; they do not validate the proposed ratios.

- [Crit and proc coefficient](https://riskofrain2.wiki.gg/wiki/Proc_Coefficient): attacks are guaranteed critical strikes at 100% crit; ten Glasses are a baseline way to reach this. Other crit sources, including temporary buffs, can reduce the needed copies. The target is total crit, not a universal ten-copy requirement.
- [Collector's Compulsion](https://riskofrain2.wiki.gg/wiki/Collector%27s_Compulsion): temporary pickup buffs have a limit of three at one copy, increasing by two for each additional copy. This is a buff-stack limit, not a three-copy item cap.
- [Soldier's Syringe](https://riskofrain2.wiki.gg/wiki/Soldier%27s_Syringe) stacks attack-speed bonuses linearly. No fixed item cap is asserted here.
- [Tougher Times](https://riskofrain2.wiki.gg/wiki/Tougher_Times) uses hyperbolic stacking. Diminishing returns do not justify a finite hard cap.
- [Regenerating Scrap](https://riskofrain2.wiki.gg/wiki/Regenerating_Scrap) counts as green scrap for Drifter's passive and has printer utility; its proposed ratio is not a game limit.

## Review

Visually reviewed the generated sketch: all 16 items and four rows remain present; each top-right badge matches the table above. Rarity labels stay separate at the top left. The Glasses count includes the conditional crit target; Collector's Compulsion is not mislabeled with a fixed three-copy cap. The bottom legend explains ratios, fixed targets, zero targets, rarity, and the illustrative status. No clipped headings or missing cards were found.

This PNG follows the same image licensing exclusions as the other generated artwork; the project's MIT license covers this authored Markdown, not the sketch image or game intellectual property.

## Exact edit prompt

```text
Edit the referenced Drifter tier-guide into a polished portrait STACK-PLANNING SKETCH. Preserve Drifter illustration and all sixteen item names, icons, rarity border colors and the four rows CORE ITEMS, BEST, OKAY, NOT GOOD. Preserve row memberships. Add a compact badge at the TOP RIGHT of EACH individual item icon tile, distinct from the small rarity label at TOP LEFT. Badges have a dark navy background and bright white text; readable and identical size across all tiles. These badges represent suggested item-copy ratios, never in-game bonuses. Use exactly these badge texts:
CORE ITEMS: Collector's Compulsion "1%"; Soldier's Syringe "5%"; Focus Crystal "3%"; Kjaro's Band "1%".
BEST: Runald's Band "1%"; Paul's Goat Hoof "3%"; Hopoo Feather "1%"; AtG Missile Mk. 1 "2%".
OKAY: Lens-Maker's Glasses "10" with tiny "CRIT TARGET" text immediately below the number; Tougher Times "2%"; Backup Magazine "1%"; Regenerating Scrap "1%".
NOT GOOD: Bustling Fungus "0%"; Squid Polyp "0%"; Bison Steak "0%"; Warbanner "0%".
Do not invent additional fixed caps. In the glasses description replace existing text with "Aim for 100% total crit. 10 copies without other crit bonuses; fewer with other sources." In Collector's description use "Pickup buffs; buff limit grows with item copies." Other descriptions can be kept or shortened to allow room, without new gameplay claims.
Add "STACK PLANNING / PROPOSED RATIOS" beneath the DRIFTER title. Expand the bottom legend panel if needed; extend canvas height rather than crowding, cropping or omitting tiles. Bottom legend exact text in clearly separated lines:
"HOW TO READ THE NUMBERS"
"% = relative stack weight, NOT an in-game percentage."
"1% : 5% = 1 copy : 5 copies. Scale the ratio as your run grows."
"Plain number = fixed target; Glasses: stop at 100% total crit."
"0% = do not actively target; still usable if found."
"Ratios are illustrative, not tested optimal quantities."
"Tile color = game rarity | Rows = build priority"
Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | DESIGN SKETCH". This is a legible visual proposal, not a production certified build. All sixteen cards, four rows, exact badge assignments, no official logos. Favor larger clear badge numerals and a spacious bottom explanation. Output one portrait infographic.
```
