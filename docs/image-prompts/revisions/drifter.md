# Drifter coordinated image revision

Method: built-in image_gen edits. References: existing starter as edit target; existing tier guide as edit target or item reference. Item rarity source: [rarity verification](README.md). Rankings remain proposed, icons remain generated.

## Tier-guide edit prompt

```text
Edit image 1: Drifter's existing full tier-guide infographic. Preserve its survivor illustration, portrait layout, build context, item placement, item names, and descriptions except the explicit corrections below. Rename the top recommendation heading "OPTIMAL" to "CORE ITEMS". Keep "BEST", "OKAY", and "NOT GOOD". Keep each row's surrounding section frame/header color, but individual item tiles MUST use their own rarity color.
Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows.
Exact row membership and per-item rarity colors:
CORE ITEMS: Collector's Compulsion [Uncommon; green #00FF66]; Soldier's Syringe [Common; white #FFFFFF]; Focus Crystal [Common; white #FFFFFF]; Kjaro's Band [Uncommon; green #00FF66]
BEST: Runald's Band [Uncommon; green #00FF66]; Paul's Goat Hoof [Common; white #FFFFFF]; Hopoo Feather [Uncommon; green #00FF66]; AtG Missile Mk. 1 [Uncommon; green #00FF66]
OKAY: Lens-Maker's Glasses [Common; white #FFFFFF]; Tougher Times [Common; white #FFFFFF]; Backup Magazine [Common; white #FFFFFF]; Regenerating Scrap [Uncommon; green #00FF66]
NOT GOOD: Bustling Fungus [Common; white #FFFFFF]; Squid Polyp [Uncommon; green #00FF66]; Bison Steak [Common; white #FFFFFF]; Warbanner [Common; white #FFFFFF]

The small rarity labels must be inside each item tile and not replace item names. Add a small footer key "Tile color = game rarity | Rows = build priority". Preserve the overall original style. Output one portrait image only.
```

## Starter edit prompt

```text
Edit image 1: Drifter's existing starter infographic. Image 2 is the reference for the same build's item selection and item appearance. Preserve image1's large survivor illustration, alien background, LOADER-style cyan frame and title "DRIFTER". Keep a starter layout with one CORE ITEMS row and WHY IT WORKS box, not four tiers. Set subtitle exactly "Build Focus: Junk generation / Mobility". Replace the CORE ITEMS row with exactly 4 evenly spaced tiles in this order: Collector's Compulsion [Uncommon; green #00FF66]; Soldier's Syringe [Common; white #FFFFFF]; Focus Crystal [Common; white #FFFFFF]; Kjaro's Band [Uncommon; green #00FF66]. All and only these items; no previous extra items. Add small rarity labels under each item name; use the correct individual rarity border/glow/name accent. Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows. Set WHY IT WORKS text exactly: "Prioritize these core items for the build shown in the matching tier guide. Adapt support items to your run.". Remove any old explanation contradicting this build or naming removed items. For Heretic do not include Transcendence or promise a single Slug solves health drain. For REX do not mention self-damage or health-cost synergy. Output one portrait image only.
```

## Review

Visually reviewed both generated PNGs before installation. Starter core selection matches the tier guide and editable metadata. Tier header reads CORE ITEMS; all four priority rows remain present. Each tile has a rarity border and readable category label matching the authored rarity lookup. No missing core tiles or clipped headings found. Illustration colors remain decorative inside the rarity-coded frame; generated icons and rankings are not certified game data.

- tier: `assets/tier-guides/drifter.png`, 1024 × 1536; SHA-256 `7ead12dded67db8bc81ab4aa8f2da3c74bc6b626befecb6865db58deadb8132d`.
- starter: `assets/survivors/drifter.png`, 1024 × 1536; SHA-256 `9886fa2c22fbfed5d315f40b9fc5b032383a4592bdffb0e9c0582563bf1c2e71`.
