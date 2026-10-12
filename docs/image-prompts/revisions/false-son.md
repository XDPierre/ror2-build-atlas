# False Son coordinated image revision

Method: built-in image_gen edits. References: existing starter as edit target; existing tier guide as edit target or item reference. Item rarity source: [rarity verification](README.md). Rankings remain proposed, icons remain generated.

## Tier-guide edit prompt

```text
Edit image 1: False Son's existing full tier-guide infographic. Preserve its survivor illustration, portrait layout, build context, item placement, item names, and descriptions except the explicit corrections below. Rename the top recommendation heading "OPTIMAL" to "CORE ITEMS". Keep "BEST", "OKAY", and "NOT GOOD". Keep each row's surrounding section frame/header color, but individual item tiles MUST use their own rarity color.
Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows.
Exact row membership and per-item rarity colors:
CORE ITEMS: Bison Steak [Common; white #FFFFFF]; Infusion [Uncommon; green #00FF66]; Runald's Band [Uncommon; green #00FF66]; Kjaro's Band [Uncommon; green #00FF66]
BEST: AtG Missile Mk. 1 [Uncommon; green #00FF66]; Ukulele [Uncommon; green #00FF66]; Hopoo Feather [Uncommon; green #00FF66]; Paul's Goat Hoof [Common; white #FFFFFF]
OKAY: Medkit [Common; white #FFFFFF]; Leeching Seed [Uncommon; green #00FF66]; Tougher Times [Common; white #FFFFFF]; Stone Flux Pauldron [Lunar; blue #0066FF]
NOT GOOD: Transcendence [Lunar; blue #0066FF]; Shaped Glass [Lunar; blue #0066FF]; Bustling Fungus [Common; white #FFFFFF]; Squid Polyp [Uncommon; green #00FF66]

The small rarity labels must be inside each item tile and not replace item names. Add a small footer key "Tile color = game rarity | Rows = build priority". Preserve the overall original style. Output one portrait image only.
```

## Starter edit prompt

```text
Edit image 1: False Son's existing starter infographic. Image 2 is the reference for the same build's item selection and item appearance. Preserve image1's large survivor illustration, alien background, LOADER-style cyan frame and title "FALSE SON". Keep a starter layout with one CORE ITEMS row and WHY IT WORKS box, not four tiers. Set subtitle exactly "Build Focus: Health scaling / Sustain". Replace the CORE ITEMS row with exactly 4 evenly spaced tiles in this order: Bison Steak [Common; white #FFFFFF]; Infusion [Uncommon; green #00FF66]; Runald's Band [Uncommon; green #00FF66]; Kjaro's Band [Uncommon; green #00FF66]. All and only these items; no previous extra items. Add small rarity labels under each item name; use the correct individual rarity border/glow/name accent. Each INDIVIDUAL ITEM ICON TILE border, subtle background glow, and item-name accent must use its listed GAME RARITY color, independently of the recommendation row. Never paint all tiles gold/cyan/purple/red just because they share a row. Item icon art may retain natural material colors. Add a small readable textual rarity label per tile (Common, Uncommon, Legendary, Boss, Lunar, Void, Equipment, or Lunar Equipment). Names and descriptions remain legible on dark backgrounds. Rarity colors are factual categories, recommendation rows are proposed priorities. Keep footer "UNOFFICIAL FAN GUIDE | AI-GENERATED | PROPOSED BUILD". No official logos. Do not invent, add, omit, duplicate, or move items between rows. Set WHY IT WORKS text exactly: "Prioritize these core items for the build shown in the matching tier guide. Adapt support items to your run.". Remove any old explanation contradicting this build or naming removed items. For Heretic do not include Transcendence or promise a single Slug solves health drain. For REX do not mention self-damage or health-cost synergy. Output one portrait image only.
```

## Review

Visually reviewed both generated PNGs before installation. Starter core selection matches the tier guide and editable metadata. Tier header reads CORE ITEMS; all four priority rows remain present. Each tile has a rarity border and readable category label matching the authored rarity lookup. No missing core tiles or clipped headings found. Illustration colors remain decorative inside the rarity-coded frame; generated icons and rankings are not certified game data.

- tier: `assets/tier-guides/false-son.png`, 1024 × 1536; SHA-256 `94ce25cf979c6de85db4cc80dc6136da00bef2e8e23b9ee9398b3abf8e6bb6cf`.
- starter: `assets/survivors/false-son.png`, 1024 × 1536; SHA-256 `0f789ad7db2527b786645ec9a3158a28ccdec04ee6bcd5147c9970db0e50c820`.
