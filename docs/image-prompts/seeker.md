# Seeker tier-guide generation

- Method: built-in `image_gen`, new asset generation.
- Destination: `assets/tier-guides/seeker.png`.
- Subject reference: `assets/survivors/seeker.png`; stylized masked warrior only, not mechanics authority.
- Style/layout reference: `assets/tier-guides/captain.png`; four colored tier rows only, no copied rankings or official logo.
- Explicit loadout: Spirit Punch, Soul Spiral, Sojourn, Meditate. Rankings prioritize close-range Soul Spiral/on-hit play.
- Rankings are editorial proposals, not verified game data, official tiers, or gameplay-tested recommendations. All item icons are AI approximations.
- Soul Spiral grants temporary barrier on hits. Healing is distinct from barrier; Rejuvenation Rack does not inherently boost Soul Spiral barrier. Hooks of Heresy and Essence of Heresy replace this build's secondary and special.

## Sources checked

Checked 2026-10-11:

- https://riskofrain2.wiki.gg/wiki/Seeker — Soul Spiral, Sojourn and Meditate roles, Tranquility; skill descriptions and recent changes.
- https://riskofrain2.wiki.gg/wiki/Module%3ASkills/Data — Seeker skill descriptions.
- https://riskofrain2.wiki.gg/wiki/Proc_Coefficient — Soul Spiral and Spirit Punch support on-hit effects.
- https://riskofrain2.wiki.gg/wiki/Focus_Crystal — damage bonus within 13m.
- https://riskofrain2.wiki.gg/wiki/Rejuvenation_Rack — healing increase, not direct barrier multiplier.
- https://riskofrain2.wiki.gg/wiki/Hooks_of_Heresy — replaces secondary.
- https://riskofrain2.wiki.gg/wiki/Heretic — Essence of Heresy replaces special.
- https://riskofrain2.wiki.gg/wiki/Module%3AItems/Data — item names and descriptions.
- https://riskofrain2.wiki.gg/wiki/Uncommon_item — Topaz Brooch, Syringe and damage/healing/block item roles.
- https://riskofrain2.wiki.gg/wiki/Category%3AUtility_Items — Backup Magazine secondary stocks.
- https://riskofrain2.wiki.gg/wiki/57_Leaf_Clover — favorable chance rerolls; does not affect all random systems.
- https://riskofrain2.wiki.gg/wiki/Hopoo_Feather — additional jump.
- https://riskofrain2.wiki.gg/wiki/Glasses — critical strike chance.

Sources support mechanics, not tier ordering or illustration fidelity. No portal claims are made.

## Exact generation prompt

```text
Use case: infographic-diagram. Create NEW portrait Risk of Rain 2 fan item tier guide for SEEKER, approximately 1024x1536. Image 1 assets/survivors/seeker.png is SUBJECT reference only: masked black-and-gold mystical warrior with glowing golden hands. Image 2 assets/tier-guides/captain.png is STYLE/layout reference only: dark navy sci-fi panels with cyan borders, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows. Do NOT copy source item choices or official logo. Compact hero art in top quarter; four equal rows below with FOUR item cells per row. Each cell has stylized item icon, exact name and exact short note. Clear large readable text.
Title "SEEKER"
Subtitle "Close-range Soul Spiral / Barrier / On-hit"
Build assumption "Spirit Punch + Soul Spiral + Sojourn + Meditate"
Intro "Soul Spiral hits grant temporary barrier. Meditate builds Tranquility."
OPTIMAL — "Priorities for this close-range build"
Backup Magazine — "Extra Soul Spiral charges."
Focus Crystal — "Bonus damage within 13m."
AtG Missile Mk. 1 — "Chance for extra missile damage."
Ukulele — "Chance for chain lightning."
BEST — "Strong damage and movement support"
Soldier's Syringe — "Faster Spirit Punch attacks."
Lens-Maker's Glasses — "Higher critical strike chance."
Hopoo Feather — "Extra jump for safer movement."
57 Leaf Clover — "Improves chance-based procs."
OKAY — "Useful, depending on inventory and playstyle"
Topaz Brooch — "Barrier on kills."
Rejuvenation Rack — "Stronger healing, not barrier."
Tougher Times — "Chance to block incoming damage."
Medkit — "Delayed healing after damage."
NOT GOOD — "Low priority for this loadout; situational, not useless"
Bustling Fungus — "Healing requires standing still."
Squid Polyp — "Turret from interactables."
Hooks of Heresy — "Replaces Soul Spiral."
Essence of Heresy — "Replaces Meditate."
Footer "AI-generated fan guide • Proposed rankings, not verified"
Small line "Stylized icons • Community guide • Not officially affiliated"
Keep exact item names, no invented items, no invented numerical bonuses. Healing and temporary barrier are different. Do not imply Rejuvenation Rack increases Soul Spiral's barrier. All rankings are editorial proposals rather than verified or official tiers.
```

## QA

Inspected final 1024 × 1536 PNG. All four tier rows contain the 16 intended item names and notes, matching the JSON. The four skills, close-range assumption, Soul Spiral barrier role, Meditate/Tranquility role, healing-versus-barrier distinction, contextual low-tier heading, and AI/unverified footer are readable. No material text errors detected. Item and survivor depictions remain stylized AI art, not validated game sprites. No gameplay test or exhaustive patch audit was performed.
