# Bandit tier-guide provenance

- Method: built-in `image_gen.imagegen`, one new generation; no CLI/API fallback.
- Final: `assets/tier-guides/bandit.png`, PNG, 1024 × 1536.
- Subject reference: `assets/survivors/bandit.png`; Bandit appearance only.
- Style reference: `assets/tier-guides/captain.png`; portrait four-row framing and palette only.
- Ranking scope: proposed burst/backstab item priorities. NOT GOOD means lower priority for this specific build, not globally useless.
- Original generated output: `C:/Users/pr090/.codex/generated_images/01a12d7a-8e94-7652-a67e-93db43fa98c8/exec-ac6fdf1b-da49-40e9-8f61-fda400d000e6.png`.

## Mechanics sources

Checked 2026-10-11 using wiki.gg search extracts. Direct full-page requests returned HTTP 403, so full-page reading was unavailable.

- https://riskofrain2.wiki.gg/wiki/Bandit — Backstab guarantees critical strikes from behind; Smoke Bomb allows flanking; attack speed affects reloads.
- https://riskofrain2.wiki.gg/wiki/Crowbar — healthy-target damage.
- https://riskofrain2.wiki.gg/wiki/Runald%27s_Band and https://riskofrain2.wiki.gg/wiki/Kjaro%27s_Band — high-damage skill hits trigger elemental effects. Individual shotgun pellets do not reach the threshold; special shots do.
- https://riskofrain2.wiki.gg/wiki/Shatterspleen — critical hits apply bleed.
- https://riskofrain2.wiki.gg/wiki/Laser_Scope — increased critical damage; Survivors of the Void DLC.
- https://riskofrain2.wiki.gg/wiki/Harvester%27s_Scythe — critical-hit healing.
- https://riskofrain2.wiki.gg/wiki/Hopoo_Games — extra jump from Hopoo Feather; movement speed from Paul's Goat Hoof.
- https://riskofrain2.wiki.gg/wiki/Bustling_Fungus — stationary healing.
- https://riskofrain2.wiki.gg/wiki/Warbanner — banner placed at level-up/teleporter event.
- https://riskofrain2.wiki.gg/wiki/Squid_Polyp — temporary interactable-triggered turret.
- https://riskofrain2.wiki.gg/wiki/Fresh_Meat — Bison Steak increases flat maximum health.
- https://riskofrain2.wiki.gg/wiki/Module%3AItems/LogbookData — canonical item names.

## QA and limitations

Visually inspected the saved PNG at full rendered view: Bandit identity, all four labeled tiers, exactly four cards per tier, all 16 item labels and accompanying notes, DLC caveat and AI disclosure are present and legible. No material text error observed; no iteration required. Generated item illustrations are interpretive and are not verified game icons. Mechanics checks do not establish an objective tier ranking; rankings remain editorial proposals and have not been playtested. Search-extract coverage is incomplete; lower-priority judgments are build-specific opinions.

## Exact generation prompt

```text
Use case: infographic-diagram
Asset type: Risk of Rain 2 survivor fan tier guide, portrait 1024x1536 or larger.
Primary request: Create a polished BANDIT four-tier item guide matching the supplied Captain guide's dark sci-fi framed card layout, with readable exact text, 4 equal item columns per tier, generous typography. This is a NEW guide.
Input images: Image 1 assets/survivors/bandit.png is SUBJECT reference only: preserve Bandit's wide-brim cowboy hat, red scarf, blue eye slit, rugged armor and firearms. Image 2 assets/tier-guides/captain.png is STYLE/layout reference only. Do not copy Captain, his text, logo, or rankings.
Composition: Top quarter includes action illustration of Bandit, title "BANDIT", subtitle "Burst / Backstab", tags "REAR CRITS • BURST • MOBILITY". Small premise: "Backstab guarantees rear critical hits. Use Smoke Bomb to flank; special shots trigger bands." Then four horizontal framed tier rows, each with FOUR illustrated item cards, names and short notes below. Gold OPTIMAL, cyan BEST, magenta OKAY, red NOT GOOD. Dark navy background; neon edges; attractive detailed stylized item illustrations are interpretive, not official icons. No official game logo.
Text verbatim, each card:
OPTIMAL — "Proposed core picks for burst and rear critical hits"
Crowbar — "Stronger hits on healthy targets."
Runald's Band — "Special hits trigger ice bursts."
Kjaro's Band — "Special hits trigger flame bursts."
Shatterspleen — "Rear crits apply bleed."
BEST — "Strong support for damage, healing and flanking"
Laser Scope — "More critical damage. SotV DLC."
Harvester's Scythe — "Critical hits restore health."
Hopoo Feather — "Extra jump for positioning."
Paul's Goat Hoof — "Movement speed helps flanking."
OKAY — "Useful supporting picks; priority depends on the run"
Soldier's Syringe — "Faster attacks and reloading."
Backup Magazine — "Extra secondary skill charge."
Lens-Maker's Glasses — "Front-hit crits; rear crits already guaranteed."
Tougher Times — "Chance to block incoming damage."
NOT GOOD — "Lower priority for this build; useful in other situations"
Bustling Fungus — "Standing still conflicts with flanking."
Warbanner — "Position-limited speed support."
Squid Polyp — "Interactable turrets, weak build synergy."
Bison Steak — "Small flat maximum-health boost."
Footer exact: "AI-generated fan guide • Proposed rankings, not verified"
Secondary footer: "Item availability depends on enabled DLC."
Constraints: All exact names spelled correctly; no invented mechanics, no numeric damage claims, no claim that lower-tier items are globally useless. Every tier has exactly four cards; no duplicated items. Only the 16 specified items. Footer visible and comfortably readable.
```
