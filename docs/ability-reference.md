# Survivor ability references

All 20 survivor detail pages pair the tier image with a readable skill reference. Desktop panels are sticky within the tier section and scroll internally when needed. At widths of 800px or less they stack below the guide without an internal scroll area. Navigating between survivors replaces the panel and resets its choices.

## Editing

- `src/data/abilities.ts`: short paraphrased summaries, initial selections, and alternate choices.
- `src/components/AbilityPanel.tsx`: accessible selectors and role cards.
- `src/pages/SurvivorPage.tsx`: guide and panel pairing, keyed to the current survivor.
- `src/styles/global.css`: desktop scrolling and mobile layout.

Initial choices follow specified infographic loadouts, including Huntress's Flurry/Ballista, MUL-T's double nailguns/Power Mode, Engineer's stationary turrets, Mercenary's Focused Assault/Eviscerate, REX's health-safe DIRECTIVE skills, and Railgunner's M99. Other initial choices are reference defaults. Select what is equipped in your run; changing a selection does not modify the infographic or certify its rankings.

MUL-T has independent weapon selectors. Captain has independent beacon selectors. Void Fiend's single form selector switches all four main abilities together, avoiding impossible mixed forms. Heretic's references describe the four Heresy item replacements. Operator's drone-dependent attacks are summarized; exact drone-specific effects are available through the wiki link. Common alternate skills are included, rather than an exhaustive unlock catalog or every empowered sub-skill.

## Sources and limits

Reviewed October 11, 2026 using indexed Risk of Rain 2 Wiki skill entries. Direct wiki retrieval returned HTTP 403, so this is a limited source review. Descriptions omit most exact damage and cooldown values to keep the panel readable; Drifter retains the previously checked base cooldown notes. The wiki remains the reference for unlocks, numerical details, platform differences, and updates. AI-generated images are not evidence for ability mechanics.

Each panel links to its survivor's Skills section:

| Survivor   | Source                                                       |
| ---------- | ------------------------------------------------------------ |
| Commando   | [Skills](https://riskofrain2.wiki.gg/wiki/Commando#Skills)   |
| Huntress   | [Skills](https://riskofrain2.wiki.gg/wiki/Huntress#Skills)   |
| Bandit     | [Skills](https://riskofrain2.wiki.gg/wiki/Bandit#Skills)     |
| MUL-T      | [Skills](https://riskofrain2.wiki.gg/wiki/MUL-T#Skills)      |
| Engineer   | [Skills](https://riskofrain2.wiki.gg/wiki/Engineer#Skills)   |
| Artificer  | [Skills](https://riskofrain2.wiki.gg/wiki/Artificer#Skills)  |
| Mercenary  | [Skills](https://riskofrain2.wiki.gg/wiki/Mercenary#Skills)  |
| REX        | [Skills](https://riskofrain2.wiki.gg/wiki/REX#Skills)        |
| Loader     | [Skills](https://riskofrain2.wiki.gg/wiki/Loader#Skills)     |
| Acrid      | [Skills](https://riskofrain2.wiki.gg/wiki/Acrid#Skills)      |
| Captain    | [Skills](https://riskofrain2.wiki.gg/wiki/Captain#Skills)    |
| Heretic    | [Skills](https://riskofrain2.wiki.gg/wiki/Heretic#Skills)    |
| Railgunner | [Skills](https://riskofrain2.wiki.gg/wiki/Railgunner#Skills) |
| Void Fiend | [Skills](https://riskofrain2.wiki.gg/wiki/Void_Fiend#Skills) |
| Seeker     | [Skills](https://riskofrain2.wiki.gg/wiki/Seeker#Skills)     |
| False Son  | [Skills](https://riskofrain2.wiki.gg/wiki/False_Son#Skills)  |
| CHEF       | [Skills](https://riskofrain2.wiki.gg/wiki/Chef#Skills)       |
| Operator   | [Skills](https://riskofrain2.wiki.gg/wiki/Operator#Skills)   |
| Drifter    | [Skills](https://riskofrain2.wiki.gg/wiki/Drifter#Skills)    |
| Enforcer   | [Skills](https://riskofrain2.wiki.gg/wiki/Enforcer#Skills)   |

The [wiki skill database](https://riskofrain2.wiki.gg/wiki/Module:Skills/Data) provides additional entries for the newer survivors.

## Validation

Lint, formatting, TypeScript checks, and the production build passed. DOM interaction checks passed for all 20 panels, their four main skill roles, 66 alternate choices, coordinated Void Fiend forms, survivor navigation, and selection resets. Existing gallery, filtering, image-dialog, and Pages-path checks also passed. Drifter's tier image still matches the approved sketch byte for byte. Rendered desktop/mobile scrolling and touch behavior still need a browser smoke test.
