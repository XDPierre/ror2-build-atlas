# Asset provenance and licensing

The [MIT License](LICENSE) covers the project's original code and authored documentation to the extent contributors hold the relevant rights. It does **not** cover image files under `assets/`, third-party reference material, fonts, or dependencies. No separate reuse license for the images is granted by this repository.

## Media inventory

| Location                                             | Provenance                                                                                                                                                                                                                           | Licensing treatment                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `assets/survivors/*.png` (20 files)                  | 19 supplied AI-generated survivor infographics and one generated Loader starter replacement; see [its record](docs/image-prompts/loader-starter.md). Individual creator and generation-service terms have not been established here. | Excluded from MIT; no image reuse permission granted here.                                                       |
| `assets/tier-guides/{captain,loader,railgunner}.png` | Three supplied expanded infographics.                                                                                                                                                                                                | Excluded from MIT; original provenance and applicable permissions remain unverified.                             |
| Other `assets/tier-guides/*.png` (17 files)          | Generated with the built-in `image_gen` tool using supplied images as references.                                                                                                                                                    | Excluded from MIT. Generation does not establish rights clearance for depicted game content or reference images. |
| `assets/maps/*.png` (1 file)                         | Supplied conceptual map illustration; its routes are not verified game data.                                                                                                                                                         | Excluded from MIT; original provenance and applicable permissions remain unverified.                             |
| `assets/previews/*` (20 files)                       | Crops derived from the supplied survivor artwork.                                                                                                                                                                                    | Same exclusions and unresolved permissions as their source images.                                               |

The current 20 starter images and 20 tier-guide images are built-in `image_gen` revisions of the sources listed above. The inventory describes their original provenance, not an assertion that those original files remain unchanged. [Coordinated revision records](docs/image-prompts/revisions/README.md) document the updated core selections, headings, rarity colors, and review. The map and preview files were not part of these revisions.

Exact prompts, reference roles, research links, and review notes are in [docs/image-prompts](docs/image-prompts/README.md). Their project-original text is covered by MIT; this does not extend to referenced third-party material or the resulting images.

## Game artwork and names

Risk of Rain 2 characters, names, trademarks, and any recognizable third-party artwork remain subject to their respective owners' rights. The repository does not grant permission on their behalf. Generated item illustrations are not verified official sprites. AI-generated provenance, attribution, and fan-project status do not by themselves establish permission to reuse depicted intellectual property.

This project is not affiliated with or endorsed by Hopoo Games, Gearbox, or 2K.

## Wiki references

The site links to the Risk of Rain 2 Wiki for research and further reading. Item and portal references are recorded in `src/data/references.ts`, `src/data/portals.ts`, the main README, and individual generation records.

The wiki's [copyright notice](https://riskofrain2.wiki.gg/wiki/Risk_of_Rain_2_Wiki:Copyrights) states that content it may lawfully license is offered under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This is not a blanket license for game-owner intellectual property. Its indexed copyright notice was checked October 11, 2026; direct retrieval returned HTTP 403.

Wiki content is not relicensed under MIT. When adding copied or adapted wiki text or media, record the specific source page, creator attribution where available, license, and modifications, and follow that material's applicable terms. A wiki link alone does not document permission for an image.

## Fonts and dependencies

The stylesheet requests Barlow and Barlow Condensed from Google Fonts. They are third-party resources, not covered by this repository's MIT grant. No font files are bundled in `assets/`; retain and check the relevant upstream license if fonts are vendored later. Dependencies retain their own licenses as distributed in their packages.

## Updating this record

For new media, document its filename, original source, creator, license or written permission, required attribution, and any changes. Mark unknown provenance explicitly. Do not label an asset MIT or otherwise reusable until the applicable rights have been established.
