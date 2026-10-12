# Editable survivor tier guides

All 20 survivor pages use the same HTML guide and loadout layout. Drifter retains its approved 16-item sketch. The other 19 guides preserve their existing item order and tier placements, with editable descriptions and newly authored proposed copy ratios. These ratios are design suggestions, not verified optimal quantities or values transcribed from the old PNGs.

## Edit content

- Drifter: `src/data/drifter-guide.json`.
- Other survivors: `src/data/editable-guides/<id>.json`.
- Registry and schema: `src/data/editable-guides.ts`.
- Ability choices and summaries: `src/data/abilities.ts`.

Each guide contains `title`, `subtitle`, `intro`, four `rows`, and `legend`, `notes`, and `footer`. Each item has its exact `name`, `badge`, optional `badgeLabel`, and brief `description`. All labels, ratios, and explanations are live text; no image regeneration is needed.

The live guide also controls its survivor's search and field-note index through `src/data/survivors.ts`. Historical arrays in `src/data/tier-guides/` and the original three inline indexes remain as PNG provenance; the live guide takes precedence. Preserve the four tier names: Core Items, Best, Okay, Not Good.

## Proposed ratios

A percentage badge means relative copy weight, not an in-game percentage. `1% : 5%` means one copy of one item for five copies of another; weights do not sum to 100. `0%` means lower targeting priority for this build, not an unusable item.

For the 19 new sketches, selected core commons such as Syringe, Dagger, Glasses, Crowbar, and Engineer's Fungus start at weight 5; Focus Crystal, Gasoline, and Armor-Piercing Rounds start at 3; Goat Hoof starts at 2. Other core items start at 1. Best-row commons start at 2; other Best and Okay items start at 1. Not Good starts at 0. These are editable starting points for each supplied build, not a universal stacking formula. Drifter's approved ratios are preserved.

Respect effect caps and loadout-specific interactions instead of extending a ratio indefinitely. Railgunner converts critical chance into damage, while other survivors must account for their actual total critical chance. Void items replace their normal counterparts. Equipment badges marked `equip` indicate one equipped item, not repeated equipment stacks.

## Icons and artwork

`assets/items/` holds 72 unique locally bundled item icons. `src/data/item-icons.json` records exact names, pinned download URLs, source revision, wiki links, and SHA-256 hashes. Curly apostrophes are normalized when resolving icons and rarities. `src/data/item-rarities.json` controls rarity labels and borders independently of row priority.

Icons are displayed with `object-fit: contain`; rarity and ratio badges stay within their icon frames. The decorative header crops the existing AI-generated tier image. Original survivor and tier PNGs are preserved as source artwork; the original-image inspector has been removed from the live guide. See [asset provenance](../ASSET_LICENSES.md).

Short descriptions are authored summaries. The mirror's item metadata informed the reference review; [Luminous Shot](https://riskofrain2.wiki.gg/wiki/Luminous_Shot) and [Box of Dynamite](https://riskofrain2.wiki.gg/wiki/Box_of_Dynamite) were additionally checked against indexed wiki entries on October 12, 2026. This conversion preserves editorial tier placement and does not certify every recommendation.

## Presentation

`src/components/EditableTierGuide.tsx` renders every survivor's guide. At desktop widths of 1100px and above, the guide and loadout share equal columns across the viewport. Rows keep all four, five, or six items together; denser guides use smaller icons on short screens. Passive and trait cards span both loadout columns, while active skills and Captain's beacon choices form a compact grid. All loadout selectors remain functional, including MUL-T's weapons and Void Fiend's forms.

On phones the panels stack, item rows use two columns, and normal page scrolling preserves readable text. Intermediate widths retain the responsive layout. Layout rules live in `src/styles/global.css`.

## Validation

Production build, content checks, and headless browser checks cover all 20 routes. Content checks compare original tier membership and order, names, ratios, descriptions, field-note indexes, selectors, and all 72 icon hashes. Browser checks cover 1514 x 949, 1366 x 768, 1280 x 720, and 390 x 900 viewports, including alternate loadout selections, loaded icons, containment, equal desktop widths, and horizontal overflow. Desktop and laptop panels fit together when the tier section is brought into view. Mobile pages scroll normally. Screenshots of representative dense and specialized guides were inspected; real touch interaction is outside these checks.
