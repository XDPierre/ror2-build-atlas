# Captain coordinated image revision

Method: built-in image_gen edits. References: existing starter as edit target; existing tier guide as edit target or item reference. Item rarity source: [rarity verification](README.md). Rankings remain proposed, icons remain generated.

## Tier-guide edit prompt

```text
Edit image 1: Captain's existing full tier-guide infographic. Preserve its survivor illustration, portrait layout, build context, item placement, item names, and descriptions except the explicit corrections below. Rename the top recommendation heading "OPTIMAL" to "CORE ITEMS". Keep "BEST", "OKAY", and "NOT GOOD". Keep each row's surrounding section frame/header color, but individual item tiles MUST use their own rarity color.
Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows.
Exact row membership and per-item rarity colors:
CORE ITEMS: Tri-Tip Dagger [Common; white #FFFFFF]; AtG Missile Mk. 1 [Uncommon; green #00FF66]; Ukulele [Uncommon; green #00FF66]; Soldier's Syringe [Common; white #FFFFFF]; Lens-Maker's Glasses [Common; white #FFFFFF]; Shatterspleen [Boss; yellow #FFFF00]
BEST: Crowbar [Common; white #FFFFFF]; Predatory Instincts [Uncommon; green #00FF66]; Plasma Shrimp [Void; purple #C678B4]; Hopoo Feather [Uncommon; green #00FF66]; Paul's Goat Hoof [Common; white #FFFFFF]; 57 Leaf Clover [Legendary; red #FF0033]
OKAY: Backup Magazine [Common; white #FFFFFF]; Will-o'-the-wisp [Uncommon; green #00FF66]; Tougher Times [Common; white #FFFFFF]; Energy Drink [Common; white #FFFFFF]; Mocha [Common; white #FFFFFF]; Armor-Piercing Rounds [Common; white #FFFFFF]
NOT GOOD: Bustling Fungus [Common; white #FFFFFF]; Focus Crystal [Common; white #FFFFFF]; Leeching Seed [Uncommon; green #00FF66]; Warbanner [Common; white #FFFFFF]; Squid Polyp [Uncommon; green #00FF66]; Essence of Heresy [Lunar; blue #0066FF]
For existing inaccurate descriptions, use these corrected notes if the item appears: Armor-Piercing Rounds: "Bonus damage against bosses." Runald's Band: "High-damage hits trigger ice; cooldown applies." Kjaro's Band: "High-damage hits trigger fire; cooldown applies." Will-o'-the-wisp: "Explosion after a kill." Backup Magazine: "Extra secondary skill charge." Do not mention armor bypass, elite-specific bonus, random band chance, homing wisps, or general cooldown reduction from Backup Magazine.
The small rarity labels must be inside each item tile and not replace item names. Add a small footer key "Tile color = game rarity | Rows = build priority". Preserve the overall original style. Output one portrait image only.
```

## Starter edit prompt

```text
Edit image 1: Captain's existing starter infographic. Image 2 is the reference for the same build's item selection and item appearance. Preserve image1's large survivor illustration, alien background, LOADER-style cyan frame and title "CAPTAIN". Keep a starter layout with one CORE ITEMS row and WHY IT WORKS box, not four tiers. Set subtitle exactly "Build Focus: Sustained damage / On-hit". Replace the CORE ITEMS row with exactly 6 evenly spaced tiles in this order: Tri-Tip Dagger [Common; white #FFFFFF]; AtG Missile Mk. 1 [Uncommon; green #00FF66]; Ukulele [Uncommon; green #00FF66]; Soldier's Syringe [Common; white #FFFFFF]; Lens-Maker's Glasses [Common; white #FFFFFF]; Shatterspleen [Boss; yellow #FFFF00]. All and only these items; no previous extra items. Add small rarity labels under each item name; use the correct individual rarity border/glow/name accent. Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows. Set WHY IT WORKS text exactly: "Prioritize these core items for the build shown in the matching tier guide. Adapt support items to your run.". Remove any old explanation contradicting this build or naming removed items. For Heretic do not include Transcendence or promise a single Slug solves health drain. For REX do not mention self-damage or health-cost synergy. Output one portrait image only.
```

## Review

Visually reviewed both generated PNGs before installation. Starter core selection matches the tier guide and editable metadata. Tier header reads CORE ITEMS; all four priority rows remain present. Each tile has a rarity border and readable category label matching the authored rarity lookup. No missing core tiles or clipped headings found. Illustration colors remain decorative inside the rarity-coded frame; generated icons and rankings are not certified game data.

- tier: `assets/tier-guides/captain.png`, 1024 × 1536; SHA-256 `17b41b42f6c6555bfc00234635303258178811bd289fb00083b5954b903637e6`.
- starter: `assets/survivors/captain.png`, 1024 × 1536; SHA-256 `f4a2ce2a4b2012db05cb4b195270c87735972c7da4eb9e7fc6b987bd49a85785`.
