# Void Fiend coordinated image revision

Method: built-in image_gen edits. References: existing starter as edit target; existing tier guide as edit target or item reference. Item rarity source: [rarity verification](README.md). Rankings remain proposed, icons remain generated.

## Tier-guide edit prompt

```text
Edit image 1: Void Fiend's existing full tier-guide infographic. Preserve its survivor illustration, portrait layout, build context, item placement, item names, and descriptions except the explicit corrections below. Rename the top recommendation heading "OPTIMAL" to "CORE ITEMS". Keep "BEST", "OKAY", and "NOT GOOD". Keep each row's surrounding section frame/header color, but individual item tiles MUST use their own rarity color.
Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows.
Exact row membership and per-item rarity colors:
CORE ITEMS: Lens-Maker's Glasses [Common; white #FFFFFF]; Soldier's Syringe [Common; white #FFFFFF]; Polylute [Void; purple #C678B4]; Plasma Shrimp [Void; purple #C678B4]
BEST: Safer Spaces [Void; purple #C678B4]; Cautious Slug [Common; white #FFFFFF]; Predatory Instincts [Uncommon; green #00FF66]; Hopoo Feather [Uncommon; green #00FF66]
OKAY: Backup Magazine [Common; white #FFFFFF]; Focus Crystal [Common; white #FFFFFF]; Armor-Piercing Rounds [Common; white #FFFFFF]; Topaz Brooch [Common; white #FFFFFF]
NOT GOOD: Weeping Fungus [Void; purple #C678B4]; Leeching Seed [Uncommon; green #00FF66]; Bustling Fungus [Common; white #FFFFFF]; Purity [Lunar; blue #0066FF]

The small rarity labels must be inside each item tile and not replace item names. Add a small footer key "Tile color = game rarity | Rows = build priority". Preserve the overall original style. Output one portrait image only.
```

## Starter edit prompt

```text
Edit image 1: Void Fiend's existing starter infographic. Image 2 is the reference for the same build's item selection and item appearance. Preserve image1's large survivor illustration, alien background, LOADER-style cyan frame and title "VOID FIEND". Keep a starter layout with one CORE ITEMS row and WHY IT WORKS box, not four tiers. Set subtitle exactly "Build Focus: Corruption / On-hit". Replace the CORE ITEMS row with exactly 4 evenly spaced tiles in this order: Lens-Maker's Glasses [Common; white #FFFFFF]; Soldier's Syringe [Common; white #FFFFFF]; Polylute [Void; purple #C678B4]; Plasma Shrimp [Void; purple #C678B4]. All and only these items; no previous extra items. Add small rarity labels under each item name; use the correct individual rarity border/glow/name accent. Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows. Set WHY IT WORKS text exactly: "Prioritize these core items for the build shown in the matching tier guide. Adapt support items to your run.". Remove any old explanation contradicting this build or naming removed items. For Heretic do not include Transcendence or promise a single Slug solves health drain. For REX do not mention self-damage or health-cost synergy. Output one portrait image only.
```

## Review

Visually reviewed both generated PNGs before installation. Starter core selection matches the tier guide and editable metadata. Tier header reads CORE ITEMS; all four priority rows remain present. Each tile has a rarity border and readable category label matching the authored rarity lookup. No missing core tiles or clipped headings found. Illustration colors remain decorative inside the rarity-coded frame; generated icons and rankings are not certified game data.

- tier: `assets/tier-guides/void-fiend.png`, 1024 × 1536; SHA-256 `8f6026d48a5979559456401643735d575d0abb1884d660cf67903706e6826f48`.
- starter: `assets/survivors/void-fiend.png`, 1024 × 1536; SHA-256 `633d28c13caff9b4dd6c8a782bab3906f6dbd95643ccf11f404220dcfd0b6bed`.
