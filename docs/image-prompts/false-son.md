# False Son tier-guide generation

- Method: built-in `image_gen`; False Son source as subject reference, Captain guide as layout/style reference.
- Destination: `assets/tier-guides/false-son.png` (new asset).
- Assumption: bonus-health Growth build with Club of the Forsaken charged slam, Lunar Spikes, and Laser of the Father. Bands prioritize the heavy club hits; the laser alone is not assumed to activate them.
- Rankings are editorial proposals, not verified game data or official tiers. Stone Flux is contextual because its speed penalty is substantial. Low-tier choices may benefit other builds.
- Source art is stylistic inspiration only. Its Seared Steak and Quick Fix labels were not reused. All icons are AI approximations, not verified game sprites.

## Sources checked

Checked 2026-10-11:

- https://riskofrain2.wiki.gg/wiki/False_Son — bonus health from items contributes to Growth; leveling and shields do not. Growth increases secondary stocks and laser duration.
- https://riskofrain2.wiki.gg/wiki/Runald%27s_Band — heavy hits activate ice; the counterpart Kjaro's Band provides flame damage.
- https://riskofrain2.wiki.gg/wiki/Infusion — kills build bonus health.
- https://riskofrain2.wiki.gg/wiki/Bison_Steak — flat bonus maximum health.
- https://riskofrain2.wiki.gg/wiki/Stone_Flux_Pauldron — health increase comes with a substantial movement penalty.
- https://riskofrain2.wiki.gg/wiki/Transcendence — health-to-shield conversion conflicts with Growth.
- https://riskofrain2.wiki.gg/wiki/Shaped_Glass — increased damage sacrifices health.

Sources support selected mechanics, not the proposed tier placements, every illustration, or every patch interaction. Other short notes describe conventional item roles, not an exhaustive mechanical audit. No portals are discussed.

## Exact final prompt

```text
Use case: infographic-diagram. Create NEW portrait Risk of Rain 2 fan item tier guide for FALSE SON, approximately 1024x1536. Image 1 assets/survivors/false-son.png is SUBJECT reference only: imposing red glowing stone warrior with pale mask and huge club. Image 2 assets/tier-guides/captain.png is STYLE/layout only: dark navy sci-fi panel, cyan borders, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows. Do NOT copy inaccurate source items or official logo. Compact hero art in top quarter; four equal rows below with FOUR item cells per row. Each cell has stylized item icon, exact name and exact short note. All text clear and large.
Title "FALSE SON"
Subtitle "Bonus-health Growth / Charged slam / Laser"
Build assumption "Club slam + Lunar Spikes + Laser of the Father."
Intro "Bonus item health grants Growth; shields and leveling do not."
OPTIMAL — "Growth and heavy-hit damage priorities"
Bison Steak — "Bonus health supports Growth."
Infusion — "Kills build bonus max health."
Runald's Band — "Heavy hits trigger ice damage."
Kjaro's Band — "Heavy hits trigger flame damage."
BEST — "Strong damage and movement support"
AtG Missile Mk. 1 — "Chance for extra missile damage."
Ukulele — "Chance for chain lightning."
Hopoo Feather — "Extra jump for safer movement."
Paul's Goat Hoof — "Faster movement."
OKAY — "Useful, depending on inventory and playstyle"
Medkit — "Delayed healing after damage."
Leeching Seed — "Damage dealt provides healing."
Tougher Times — "Chance to block incoming damage."
Stone Flux Pauldron — "More health, but much slower."
NOT GOOD — "Low priority for this health build; situational, not useless"
Transcendence — "Shield conversion removes Growth."
Shaped Glass — "Damage gain sacrifices health."
Bustling Fungus — "Healing requires standing still."
Squid Polyp — "Turret from interactables."
Footer "AI-generated fan guide • Proposed rankings, not verified"
Small line "Stylized icons • Community guide • Not officially affiliated"
Keep names exact, no invented items or numerical bonuses. This is a proposed editorial ranking, not an official tier list. Do not imply bonus health directly increases all damage. Polish and readability matter.
```

## QA

Inspected final 1024 × 1536 PNG. Four ordered rows contain all 16 exact item names and matching notes. Growth limitation, movement tradeoff, contextual low-tier heading and AI/unverified footer are readable. The header conveys the bonus-health / charged-slam / laser assumption; the requested full loadout sentence was omitted by the generator, so the precise loadout is recorded above. JSON matches the image. Illustrations remain stylized, including the survivor depiction inherited from supplied source art. No gameplay test or exhaustive patch audit was performed.
