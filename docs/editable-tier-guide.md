# Editable Drifter tier guide

Drifter's detail page renders its approved stack-planning sketch as HTML cards alongside the existing abilities panel. The four priority rows, 16 items, rarity labels, badges, item descriptions, introductory text, and number legend are preserved. Item cards use real game icons bundled locally from a documented wiki-sourced mirror. The header illustration remains a cropped view of the AI-generated PNG. The PNG is unchanged and can still be inspected in the expandable original-image section.

## Edit content

Change `src/data/drifter-guide.json`. No image regeneration is needed for text changes.

- `title`, `subtitle`, `intro`: heading and build introduction.
- `rows`: priority groups with a title, explanation, and accent color.
- `items`: each item's `name`, `badge`, optional `badgeLabel`, and brief `description`.
- `legend`, `notes`, `footer`: number explanation, qualifications, and attribution.

For example, edit an item's `badge` from `"1%"` to `"2%"` to change its displayed proposed ratio. A plain badge such as `"10"` is a conditional acquisition target, not a universal item cap. Retain the legend: `%` means relative copy weight, not a game percentage; weights do not sum to 100. The 1:5 illustration means one copy of one item per five copies of another. Ratios remain proposals, not tested optimal quantities.

The Drifter search and field-note item indexes derive from this same file in `src/data/survivors.ts`. The older `src/data/tier-guides/drifter.json` is retained as the historical PNG index; its values no longer control Drifter's live index. Game rarity colors and names come from `src/data/item-rarities.json`, independently of priority-row accents. Add a rarity entry there if adding an unfamiliar item.

Item icons live in `assets/items/`. Update `src/data/item-icons.json` to map an exact item name to its local asset path and record its source. The manifest pins the mirror revision and records file hashes; see [asset provenance](../ASSET_LICENSES.md). Icons use `object-fit: contain`, so the whole item remains visible. They are 72px high on desktop and 48px on shorter desktop screens, with rarity and ratio badges overlaid. The header's SVG crop uses coordinates on the 1024 × 1536 original image.

## Presentation

- `src/components/EditableTierGuide.tsx`: live headings, item cards, badges, wiki links, legend, and original-image inspector.
- `src/pages/SurvivorPage.tsx`: Drifter uses the HTML guide; other survivors use their existing images.
- `src/styles/global.css`: four cards per row on desktop, two on narrow phones, readable descriptions, rarity borders, and ratio badges.

The abilities panel stays beside the guide on desktop and below it on mobile. Existing survivor navigation resets the panel to the current survivor.

The compact desktop view overlays rarity and ratio badges directly on the artwork. Shorter desktop screens use smaller icons and a condensed header. **How to read the numbers** is a slim strip with its title and attribution on the left and the full legend in compact lines on the right. All item descriptions and legend qualifications remain visible. Phone layouts keep larger text and two card columns; the legend stacks into one column, with normal page scrolling.

This conversion transcribes the approved sketch; it does not introduce new mechanics or validate its rankings. Source and stacking qualifications remain in [the sketch record](image-prompts/drifter-stack-sketch.md).

## Validation

Lint, formatting, TypeScript, and production build checks passed. DOM checks matched all 16 card names, ratios, descriptions, and real-icon references, and verified the four rows, rarity labels, legend, synchronized field notes, survivor navigation, and original-image dialog. The original PNG remains byte-identical to the approved sketch. Headless Chrome confirmed all 16 local icons loaded at desktop, laptop, and phone widths. The larger-icon guide fits within the tested 1514 × 949 and 1366 × 768 desktop/laptop viewports, with no horizontal overflow. Phone cards use two columns and normal scrolling. Screenshots were visually inspected; real touch interaction is not covered by these checks.
