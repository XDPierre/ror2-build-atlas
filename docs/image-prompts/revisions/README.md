# Coordinated starter and tier-guide revisions

Each survivor receives two built-in `image_gen` edits: align the starter with the tier guide's first row and build context; rename the tier guide's Optimal heading to Core Items and give each individual tile its game rarity color. Exact prompts and review results are recorded in the per-survivor Markdown files in this folder. Original prompts elsewhere are historical records and can contain superseded selections or headings.

The first-row selection is shared by both illustrations and their editable metadata. Recommendation order remains Core Items, Best, Okay, Not Good. These are editorial build priorities, not game rarity categories. Generated icons and rankings remain unverified.

## Rarity verification

Checked October 11, 2026 using indexed wiki entries. Direct page retrieval returned HTTP 403. Item classifications were checked against the [wiki item database](https://riskofrain2.wiki.gg/wiki/Module:Items/Data) and [logbook category ordering](https://riskofrain2.wiki.gg/wiki/Module:Items/LogbookData). Colors follow the [wiki color key](https://riskofrain2.wiki.gg/wiki/Template:Color). The authored lookup is in `src/data/item-rarities.json`; equipment remains distinguished from passive items even when colors overlap.

| Game category   | Tile border and rarity-label color |
| --------------- | ---------------------------------- |
| Common          | White, `#FFFFFF`                   |
| Uncommon        | Green, `#00FF66`                   |
| Legendary       | Red, `#FF0033`                     |
| Boss            | Yellow, `#FFFF00`                  |
| Lunar           | Blue, `#0066FF`                    |
| Void            | Purple, `#C678B4`                  |
| Equipment       | Orange, `#FF6633`                  |
| Lunar Equipment | Blue, `#0066FF`                    |

Specific checks: [Collector's Compulsion](https://riskofrain2.wiki.gg/wiki/Collector%27s_Compulsion) and [Box of Dynamite](https://riskofrain2.wiki.gg/wiki/Box_of_Dynamite) are Uncommon; [Empathy Cores](https://riskofrain2.wiki.gg/wiki/Empathy_Cores), [Shatterspleen](https://riskofrain2.wiki.gg/wiki/Shatterspleen), and [Planula](https://riskofrain2.wiki.gg/wiki/Planula) are Boss items. [Gnarled Woodsprite](https://riskofrain2.wiki.gg/wiki/Gnarled_Woodsprite) and [The Back-up](https://riskofrain2.wiki.gg/wiki/Backup) are Equipment; [Spinel Tonic](https://riskofrain2.wiki.gg/wiki/Spinel_Tonic) is Lunar Equipment. Void items retain a purple category indicator, rather than using the color of their uncorrupted counterpart.

The prior starters used decorative colors that did not consistently encode game rarity. The revised images use a readable category label as well as color. Section frames still distinguish recommendation rows; tile frames distinguish game rarity.

## Consistency and scope

REX is aligned to the tier guide's safe DIRECTIVE loadout. Heretic is aligned to its health-sustain / Shadowfade build without Transcendence. False Son's old starter-only labels are removed rather than silently mapped to other items. These are build-consistency edits, not a universal ranking review.

The original Captain, Loader, and Railgunner tier images are now deliberately revised at the user's request. Previously documented mechanics corrections are applied to their item notes where relevant. Local pre-edit copies are kept in the ignored QA folder for comparison. Image licensing exclusions continue to apply; see [ASSET_LICENSES.md](../../../ASSET_LICENSES.md).
