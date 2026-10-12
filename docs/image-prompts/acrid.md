# Acrid tier guide

Generated with the built-in `image_gen` tool on 2026-10-11, using `assets/survivors/acrid.png` as subject reference and `assets/tier-guides/captain.png` as layout/style reference. Output: `assets/tier-guides/acrid.png`, 1024 × 1536 PNG.

## Sources and scope

- https://riskofrain2.wiki.gg/wiki/Acrid — Poison is nonlethal, Neurotoxin and Epidemic direct hits have proc coefficients, leap distance scales with movement speed.
- https://riskofrain2.wiki.gg/wiki/Gasoline — on-kill burn and explosion cleanup.
- https://riskofrain2.wiki.gg/wiki/Backup_Mag — secondary skill charges, not cooldown reduction.
- https://riskofrain2.wiki.gg/wiki/Module%3AItems/Data — real item names and descriptions.
- https://riskofrain2.wiki.gg/wiki/Death_Mark — damage-over-time effects cannot apply this on-hit mark.

Direct article fetches were blocked by HTTP 403; indexed wiki search results provided article text. These are proposed priority rankings for Poison / Neurotoxin / Epidemic kiting, not an authoritative universal tier list. Tougher Times and Safer Spaces represent alternative inventories because the latter corrupts the former. Item art is AI-generated fan illustration, not verified game icons. No game runtime testing was performed.

## Visual QA

Inspected saved PNG with `view_image`. Acrid subject and all four rows present, five correct named items in each row, no duplicated cards, notes readable, footer visible. Poison nonlethality, no Poison on-hit effects, and context-dependent NOT GOOD wording are explicit. No material text errors observed. Matching structured rankings saved in `src/data/tier-guides/acrid.json`.

## Exact generation prompt

```text
Use case: infographic-diagram
Create a NEW portrait Acrid survivor item tier-guide for the fan website ror2-build-atlas. Reference image 1 assets/survivors/acrid.png is SUBJECT reference: purple bulky quadrupedal poison creature with lime-green acid. Reference image 2 assets/tier-guides/captain.png is STYLE/LAYOUT reference only, never copy Captain or Captain rankings. Match dark sci-fi angular frame, neon cyan outlines, big crisp survivor heading, small survivor illustration occupying upper quarter, and four colorful full-width horizontal tier rows with FIVE item cards per row. Tall portrait approximately 1536x2304. Prioritize readable exact text. Item pictures are fan illustrations, not verified in-game icons. No official logo. Have a dark blue ruined alien background, purple/lime Acrid, gold OPTIMAL, cyan BEST, violet OKAY, red NOT GOOD. Each card has a large recognizable item illustration, exact item name, and the one short note below. Keep all four rows and footer visible, no clipping.

HEADER exact:
ACRID
Poison / Cleanup
Poison • Neurotoxin • Epidemic
Poison cannot kill. Direct hits and item effects finish weakened enemies.
Rankings for a ranged poison-and-kite build.

OPTIMAL — Mobility and crowd cleanup
Gasoline | Burns nearby foes after a kill.
Will-o'-the-wisp | Explosions after a kill.
Paul's Goat Hoof | Faster kiting and longer leaps.
Hopoo Feather | Extra air jump for safety.
Backup Magazine | Extra Neurotoxin charges.

BEST — Reliable support
Ukulele | Direct hits can chain lightning.
AtG Missile Mk. 1 | Direct hits can fire missiles.
Tri-Tip Dagger | Direct hits can apply bleed.
Tougher Times | Chance to block incoming damage.
Safer Spaces | Periodic damage block. Void item.

OKAY — Situational value
Crowbar | Stronger opening hits.
Focus Crystal | Useful when fighting close.
Soldier's Syringe | Faster attacks; less vital for kiting.
Lens-Maker's Glasses | Crit for direct hits, not Poison.
Monster Tooth | Collect healing after kills.

NOT GOOD — Lower priority for this build
Bustling Fungus | Standing still conflicts with kiting.
Squid Polyp | Stationary support on interactions.
Warbanner | Area buff; limited uptime.
Leeching Seed | Modest healing from direct hits.
Predatory Instincts | Crit attack speed favors melee.

BOTTOM NOTE exact:
NOT GOOD means lower priority here, not universally bad.
Poison ticks do not trigger on-hit item effects.
AI-generated fan guide • Proposed rankings, not verified

Use carefully spelled readable typography. No added stats, no invented items, no build claims beyond this exact copy. Do not copy misinformation from reference image. Preserve subject visual identity.
```
