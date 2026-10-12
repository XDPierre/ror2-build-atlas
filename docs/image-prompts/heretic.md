# Heretic tier-guide generation

- Method: built-in `image_gen` (infographic-diagram).
- Destination: `assets/tier-guides/heretic.png`, new asset.
- Subject reference: `assets/survivors/heretic.png`, subject/mood only; illustration is not verified game art.
- Style reference: `assets/tier-guides/captain.png`, panel/row layout only, not its recommendations.
- Assumption: retain Visions, Hooks, Strides and Essence of Heresy, using Hungering Gaze, Slicing Maelstrom, Shadowfade and Ruin; health-sustain build without Transcendence. Woodsprite occupies the equipment slot.
- Rankings are editorial proposals; they are not official or verified tier placements. Icons are AI approximations, not verified game sprites.
- Low tier is contextual: Repulsion Armor Plate and Razorwire still help with actual enemy hits but do not address natural health drain. Slug stacks and Woodsprite effectiveness depend on level, difficulty and conditions. A single Slug is not promised to solve drain.
- Transcendence is a distinct valid alternative that removes negative regeneration but converts health to shields; it was deliberately omitted from this health-healing build rather than mislabeled as weak.
- No portals are discussed.

## Sources checked

Checked 2026-10-11:

- https://riskofrain2.wiki.gg/wiki/Heretic — four required Heresy items/skills, negative health regeneration, triple jump, sustain notes and Glass/Tonic warnings; health degeneration does not trigger Razorwire or receive reduction from Repulsion Armor Plate.
- https://riskofrain2.wiki.gg/wiki/Transcendence — zeroes negative regeneration and requires shield regeneration, making ordinary healing mostly redundant.
- https://riskofrain2.wiki.gg/wiki/Alien_Head — skill cooldown reduction.
- https://riskofrain2.wiki.gg/wiki/Hardlight_Afterburner — additional utility charges and reduced cooldown, including Shadowfade.
- https://riskofrain2.wiki.gg/wiki/Gnarled_Woodsprite — equipment; ongoing healing while accompanying its holder.

Sources support selected mechanics, not every proposed ranking or illustration. Generic notes describe conventional item roles; this is not an exhaustive patch audit or gameplay test.

## Exact final prompt

```text
Use case: infographic-diagram. Create NEW portrait Risk of Rain 2 fan item tier guide for HERETIC, approximately 1024x1536. Image 1 assets/survivors/heretic.png is SUBJECT reference only: dark purple avian mystical armored alien with glowing void energy. Image 2 assets/tier-guides/captain.png is STYLE/layout reference only: dark navy sci-fi panels, cyan borders, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows. Do NOT copy source item list or official logo. Compact hero illustration in top quarter; four equal rows below with FOUR item cells per row. Each cell has stylized item icon, exact name and exact short note. Prioritize clear large text.
Title "HERETIC"
Subtitle "Health sustain / Shadowfade / Cooldowns"
Intro "Keep all four Heresy items. Use Shadowfade to manage health drain."
OPTIMAL — "Priorities for this health-sustain build"
Alien Head — "Shorter skill cooldowns."
Hardlight Afterburner — "More Shadowfade charges."
Gnarled Woodsprite — "Equipment: ongoing healing."
Cautious Slug — "Stack for out-of-danger regen."
BEST — "Strong damage and movement support"
AtG Missile Mk. 1 — "Chance for missile damage."
Ukulele — "Chance for chain lightning."
Lens-Maker's Glasses — "More critical-hit chance."
Paul's Goat Hoof — "Faster movement."
OKAY — "Useful support; inventory and playstyle matter"
Hopoo Feather — "Extra jump beyond triple jump."
Leeching Seed — "Damage dealt provides healing."
Medkit — "Delayed heal after a hit."
Tougher Times — "Chance to block enemy damage."
NOT GOOD — "Low priority here; contextual, not universally useless"
Spinel Tonic — "Can worsen negative regen."
Shaped Glass — "Lower health makes drain riskier."
Razorwire — "Drain does not trigger retaliation."
Repulsion Armor Plate — "Blocks hits, not health drain."
Footer "AI-generated fan guide • Proposed rankings, not verified"
Small line "Stylized icons • Not officially affiliated"
Constraints: No invented items or numerical bonuses. No claim that Cautious Slug guarantees stopping drain with one item. Gnarled Woodsprite is equipment not a passive item; notes explicitly label this. Heresy items are essential and must not be listed as bad replacements. Avoid shield/healing conflation. The lowest row assesses this specific survival problem while acknowledging contextual utility. Exact names and short notes.
```

## QA

Initial 1024 × 1536 PNG inspected: four ordered tiers contain all 16 item names, matching the JSON; readable AI/unverified footer and contextual low-tier heading; essential four Heresy items retained. Repulsion Armor Plate wording "Blocks hits" was identified as potentially misleading because it reduces damage rather than blocking whole attacks, prompting the targeted edit below. The final 1024 × 1536 PNG was inspected again: its corrected note reads "Reduces hit damage, not drain." All other text, item ordering, art, labels and footer remain intact and legible. JSON matches final item names and tier order. No gameplay test or exhaustive patch audit was performed.

## Targeted correction prompt

Input/edit target: the newly generated `assets/tier-guides/heretic.png`.

```text
Edit only the bottom-right Repulsion Armor Plate description text in this completed Heretic tier guide. Replace 'Blocks hits, not health drain.' with EXACT 'Reduces hit damage, not drain.' Preserve every other label, name, item ordering, all 16 icons, hero art, colors, four rows and footer, image dimensions and composition unchanged. Do not change any other text.
```
