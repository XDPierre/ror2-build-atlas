# CHEF tier-guide generation

- Method: built-in image_gen.imagegen, infographic-diagram, reference-assisted new generation.
- Output: assets/tier-guides/chef.png, 1024 x 1536 PNG.
- Ranking data: src/data/tier-guides/chef.json.
- Reference 1: assets/survivors/chef.png — subject/visual inspiration only; its recommendations were not used as evidence.
- Reference 2: assets/tier-guides/captain.png — portrait four-tier layout, dark sci-fi palette and illustration style only.
- Context: Sear / Glaze close-range burn loadout; proposed priorities, not objective or verified rankings.
- Generated source: C:/Users/pr090/.codex/generated_images/01a12d7c-904b-72b2-8175-4c51ed2825d0/exec-f14c4cec-dae3-488a-83b6-d060e94a2fc2.png

## Sources checked on 2026-10-11

Direct wiki page opens returned HTTP 403. Search-indexed wiki.gg extracts supplied the mechanics evidence, with current crawls; these are not a complete independently verified game-data audit.

- https://riskofrain2.wiki.gg/wiki/Chef — Sear applies ignite; Sear/Glaze burn-oriented context.
- https://riskofrain2.wiki.gg/wiki/Ignition_Tank — increases ignite damage; also provides linked item descriptions for Gasoline, Bandolier, Hopoo Feather, and AtG Missile Mk. 1.
- https://riskofrain2.wiki.gg/wiki/Backup_Mag — additional secondary charge, not a cooldown reduction.
- https://riskofrain2.wiki.gg/wiki/Crit — indexed Focus Crystal description confirms nearby-enemy bonus.
- https://riskofrain2.wiki.gg/wiki/Module:Items/Data — indexed item-name/effect definitions; requested Items searches resolved to this module.
- https://riskofrain2.wiki.gg/wiki/Squid_Polyp — interactable-triggered effect.

## Exact generation prompt

```text
Use case: infographic-diagram.
Create a new portrait CHEF item tier guide for the ror2-build-atlas fan website.
Input image 1 (assets/survivors/chef.png) is subject/visual inspiration only: cooking robot, chef hat, mechanical body, fire. Its existing item recommendations are not authoritative. Input image 2 (assets/tier-guides/captain.png) is layout and dark sci-fi style reference only; replace its character and all tier content.
Polished tall portrait poster, dark navy background, cyan geometric borders, compact upper quarter CHEF illustration and large CHEF title. Then four equal horizontal rows with five item cards each, large legible item names and brief notes. Tier colors gold OPTIMAL, cyan BEST, magenta OKAY, red NOT GOOD. Item illustrations are stylized fan depictions; exact readable item names matter more than resemblance. No official logo.
Exact title: "CHEF"
Exact subtitle: "Sear / Glaze • Close-range burn build"
Small introduction: "Proposed priorities for a Sear loadout. Items and DLC availability vary by run."
Render these four rows, exactly five items each and exactly these short explanations:
OPTIMAL
Ignition Tank — "Stronger ignite damage."
Gasoline — "Kills spread burning."
Focus Crystal — "Bonus damage nearby."
Backup Magazine — "Extra Sear charges."
Paul's Goat Hoof — "Reposition faster."
BEST
Hopoo Feather — "Extra jump for safety."
Soldier's Syringe — "Faster attack speed."
Tougher Times — "Chance to block hits."
Ukulele — "Chance for chain lightning."
AtG Missile Mk. 1 — "Chance for missile damage."
OKAY
Crowbar — "Damage to healthy targets."
Lens-Maker's Glasses — "More critical hits."
Monster Tooth — "Healing orbs on kills."
Armor-Piercing Rounds — "Bonus boss damage."
Bandolier — "Kills may reset skills."
NOT GOOD
Bustling Fungus — "Requires standing still."
Squid Polyp — "Depends on interactables."
Warbanner — "Buff zone is situational."
Bison Steak — "Flat health; low scaling."
Leeching Seed — "Small healing per hit."
Immediately under NOT GOOD include: "Low priority for this build, not useless."
Exact clearly visible footer: "AI-generated fan guide • Proposed rankings, not verified"
Second footer: "Item art is illustrative • Unofficial • Not affiliated with the game creators"
No numerical stats, no invented effects, no additional items, no skill icons masquerading as items. Preserve all exact names and notes. Do not copy Captain text or title.
```

## Visual QA and limitations

Inspected source references and final image with view_image. Final image has CHEF subject, four tier rows, five items per row, all 20 matching JSON item names, legible brief notes and visible AI-generated/proposed-ranking footer. No material text or mechanic errors observed. NOT GOOD means low priority in this chosen build, not universally bad items. Item/character artwork is AI illustration, not verified game artwork. Rankings are proposed and not supported by quantitative playtesting, patch-specific benchmarking, or an exhaustive item comparison. Numerical claims were intentionally omitted. No source image was overwritten.
