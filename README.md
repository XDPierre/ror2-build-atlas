# ROR2 Build Atlas

An unofficial, responsive Risk of Rain 2 infographic collection built with Vite, React, and TypeScript. Includes all 20 supplied survivor guides, DLC and playstyle filters, survivor/item search, shareable detail views, full-resolution zoom, tier indexes for every supplied survivor, wiki links, and partial portal references. No backend or paid service is required.

## Preview locally

Install Node.js 22.12+ or Node 24 LTS. From this folder run:

```sh
npm ci
npm run dev
```

Open Vite's printed URL including /ror2-build-atlas/. For a production preview:

```sh
npm run build
npm run preview
```

## Run with Docker

### Development with hot reload

```sh
docker compose up
```

Open <http://localhost:5173/ror2-build-atlas/>. Edits to source, styles, data, and
artwork are mounted into the container and picked up by Vite automatically. No
image rebuild or container restart is needed for these edits. Polling enables
file-change detection with Docker Desktop on Windows. Dependencies are kept in
a Docker volume, separate from the host's `node_modules`.

After changing `package.json` or `package-lock.json`, run
`docker compose restart frontend` to reinstall dependencies. Stop development
with Ctrl+C; use `docker compose down` to remove its container and network.

### Production image

With Docker running in Linux container mode, build and start the production site:

```sh
docker build -t ror2-build-atlas .
docker run --rm -p 8080:80 --name ror2-build-atlas ror2-build-atlas
```

Open <http://localhost:8080/ror2-build-atlas/>. Opening <http://localhost:8080/>
redirects to that path. Stop the container with Ctrl+C, or run
`docker stop ror2-build-atlas` from another terminal.

The multi-stage Dockerfile runs `npm ci` and `npm run build` with Node 24, then
serves only the generated static files with Nginx on port 80. Node.js is not
required on the host. The image preserves the GitHub Pages base path configured
in `vite.config.ts`; survivor and portal links continue to use hash routing.
The `.dockerignore` file limits the build context to the required source,
artwork, and configuration, excluding local dependencies and generated output.

## Project structure

```text
ror2-build-atlas/
├── assets/
│   ├── survivors/          Revised survivor starter infographics
│   ├── tier-guides/        Expanded guides, matched by survivor filename
│   ├── maps/               PNG maps shown on the home page
│   └── previews/           Derived artwork used by the featured hero
├── src/
│   ├── main.tsx            Mounts React and loads the stylesheet
│   ├── App.tsx             Site header/footer and hash-based page routing
│   ├── pages/
│   │   ├── HomePage.tsx     Search, filters, survivor gallery, and maps
│   │   ├── SurvivorPage.tsx Survivor infographic and available tier guide
│   │   └── PortalPage.tsx   Sourced portal references
│   ├── components/
│   │   ├── ImageViewer.tsx  Shared full-resolution dialog and zoom controls
│   │   ├── AbilityPanel.tsx Survivor skill selectors and summaries
│   │   └── ExternalLink.tsx Accessible links that open in a new tab
│   ├── data/
│   │   ├── assets.ts        Vite image imports and map discovery
│   │   ├── survivors.ts     Survivor metadata, DLC grouping, and supplied tier indexes
│   │   ├── abilities.ts     Survivor loadouts, skill summaries, and alternate choices
│   │   ├── tier-guides/     Generated tier indexes, one JSON per survivor
│   │   ├── portals.ts       Portal route metadata
│   │   └── references.ts    Wiki URLs and mechanics corrections
│   └── styles/
│       └── global.css      Shared design and responsive layouts
├── docs/image-prompts/     Exact generation prompts, wiki sources, and QA notes
├── index.html              HTML entry point
├── vite.config.ts          GitHub Pages base path
├── tsconfig.json           TypeScript checks
├── eslint.config.js        JavaScript, TypeScript, and React lint rules
├── .prettierrc.json         Formatting rules
├── .prettierignore          Files excluded from formatting
├── .editorconfig           Editor defaults
├── package.json            Commands and dependencies
├── package-lock.json       Reproducible dependency versions
├── LICENSE                 MIT license for original code and documentation
├── ASSET_LICENSES.md        Media provenance and third-party rights
└── README.md               Setup, architecture, and publishing guide
```

The flow is `main.tsx → App.tsx → pages → components + data`. Pages own the screen layout and local interactions. Shared UI lives in components; editable content lives in data. Assets stay in the supplied folders. There is no API, database, or state-management framework.

## Quality checks

```sh
npm run lint          # ESLint checks plus formatting checks; does not modify files
npm run lint:fix      # Apply available lint fixes and format project files
npm run typecheck     # TypeScript validation
npm run check         # Lint, typecheck, and production build
```

ESLint uses the [recommended typescript-eslint configuration](https://typescript-eslint.io/docs/) and React Hooks/Fast Refresh rules. [Prettier](https://prettier.io/docs/cli) checks readable formatting for TS/TSX/JS, CSS, HTML, JSON, and Markdown. CSS and documentation receive formatting checks rather than semantic lint rules. Generated output, dependencies, temporary tools/QA, images, lockfiles, and the supplied handoff document are excluded where appropriate. Run `npm run format` to format files or `npm run format:check` to check formatting alone.

## Where to edit

- Add or update a survivor and its item tiers in `src/data/survivors.ts`.
- Edit Drifter's live HTML tier guide in `src/data/drifter-guide.json` (names, badges, descriptions, row headings, and legend). Its field-note index and search items follow this file automatically.
- Add survivor artwork to `assets/survivors/<id>.png`; use the same filename in `assets/tier-guides/` for an optional guide. Both display separately on the survivor page.
- Add a PNG to `assets/maps/` to include it on the main page automatically.
- Edit portal routes in `src/data/portals.ts`; edit source URLs and corrections in `src/data/references.ts`.
- Change layouts in `src/pages/` and reusable UI in `src/components/`.
- Adjust colors, spacing, and responsive styling in `src/styles/global.css`.

Acolyte is a coming-soon block separate from the 20 supplied cards. Playstyle tags describe the supplied build proposal. DLC filters describe survivor ownership, not the DLC requirements of recommended items. Google Fonts are optional with local fallbacks. No analytics or login is included.

## Generated tier-guide collection

The 17 survivors missing tier-guide images were initially assigned to separate agents, with up to three agents working concurrently. Every supplied survivor has a matching PNG in `assets/tier-guides/`, shown separately from its starter infographic. Subsequent coordinated edits cover all 20 pairs, including Captain, Loader, and Railgunner.

Images were made and revised with the built-in `image_gen` tool. Each tier guide includes four rows (Core Items, Best, Okay, Not Good), a specific build/loadout scope, and an AI-generated/proposed-build disclaimer. The starter summarizes the same Core Items selection. Individual tile borders and category labels indicate game rarity independently of row priority; the editable lookup is `src/data/item-rarities.json`. Mechanics and names were researched; tier placement and generated iconography remain editorial proposals. “Not Good” means lower priority for that particular build.

Each generated guide has editable arrays in `src/data/tier-guides/<id>.json`. The site loads these automatically; the original three indexes stay in `src/data/survivors.ts`. [Generation records](docs/image-prompts/README.md) preserve exact prompts, references, sources, reviews, and limitations. [Coordinated revision records](docs/image-prompts/revisions/README.md) document the heading, rarity, and starter-consistency corrections; the [audit report](docs/core-item-audit.md) tracks their results. Historical prompts retain superseded wording for provenance.

## Accuracy and sources

### Survivor abilities

Drifter's tier guide is now editable HTML rather than flattened image text. All 16 item cards preserve the approved sketch's names, rarity labels, ratio badges, descriptions, and number legend. Four-column desktop rows become two-column rows on phones. Item cards use locally bundled game icons from a documented wiki-sourced mirror; the header remains AI-generated. Numbers and text are editable separately. The original PNG remains available under **Inspect original infographic**. Other survivors retain their image guides. See [editing instructions](docs/editable-tier-guide.md).

All 20 survivors have a companion abilities panel beside their tier guide. On desktop it follows scrolling within its guide section; on smaller screens it stacks below the image. Role labels and short summaries make the skills easy to scan. Selectors show common alternate skills; MUL-T has two weapon selections, Captain has two beacon selections, and Void Fiend has a form selector that updates all four transformed skills together. Navigating to another survivor loads that survivor's panel and resets selections.

Edit loadouts in `src/data/abilities.ts`; presentation lives in `src/components/AbilityPanel.tsx`. Initial selections follow the illustrated build where its scope specifies skills; otherwise they are reference defaults. Match them to your actual in-game loadout. Selections change the reference, not the image or item rankings. The [ability reference notes](docs/ability-reference.md) document sources and scope. Summaries were checked October 11, 2026 using indexed wiki entries and paraphrased; each panel links to full numbers and unlock conditions. Drifter retains the approved numbered sketch and its proposed ratios.

Artwork is AI-generated, not official item sprites or verified tier lists. The item indexes are transcriptions rather than endorsements. Some icons, mechanics, and recommendations may still be inaccurate. The old False Son starter-only labels were removed during consistency edits; they were not mapped to other items. Collector’s Compulsion was confirmed during Drifter research. Previously identified mechanics corrections appear in the site, and were applied to the revised original three tier guides where relevant.

Wiki search excerpts were reviewed October 11, 2026; direct wiki page retrieval returned HTTP 403. This limited mechanics review does not certify all item recommendations or rankings.

Corrections documented in the site:

- [Armor-Piercing Rounds](https://riskofrain2.wiki.gg/wiki/Armor-Piercing_Rounds) target qualifying bosses, not elites generally, and do not bypass armor.
- [Backup Magazine](https://riskofrain2.wiki.gg/wiki/Backup_Magazine) adds secondary charges rather than generally reducing cooldowns.
- [Runald's Band](https://riskofrain2.wiki.gg/wiki/Runald%27s_Band) and Kjaro's Band use a damage threshold and cooldown, not random chance.
- [Will-o'-the-wisp](https://riskofrain2.wiki.gg/wiki/Will-o%27-the-wisp) causes an on-kill explosion, not a homing projectile on hit.

Portal references:

- [Bazaar Between Time](https://riskofrain2.wiki.gg/wiki/Bazaar_Between_Time): Blue Portal destination; Null Portal below the Bazaar leads to Void Fields.
- [Gilded Coast](https://riskofrain2.wiki.gg/wiki/Gilded_Coast): Altar of Gold and completed teleporter event; Halcyon Shrine conditions are more nuanced than the image.
- [A Moment, Fractured](https://riskofrain2.wiki.gg/wiki/A_Moment%2C_Fractured) and [A Moment, Whole](https://riskofrain2.wiki.gg/wiki/A_Moment%2C_Whole): obliteration with Beads of Fealty leads to A Moment, Whole, not Commencement as the map implies.

Other map arrows remain unverified. The HTML routes are a partial reference and omit newer expansion routes. Expansion grouping sources: [Alloyed Collective update](https://riskofrain2.wiki.gg/wiki/Alloyed_Collective_Update), [Hallowed Concepts](https://riskofrain2.wiki.gg/wiki/Hallowed_Concepts).

Risk of Rain 2 belongs to its respective owners. This fan project is not affiliated with or endorsed by Hopoo Games, Gearbox, or 2K.

## License

The project's original source code, configuration, authored metadata, and documentation (including generation prompts) are licensed under the [MIT License](LICENSE), to the extent the project contributors hold the relevant rights. MIT permits reuse, modification, redistribution, and commercial use while requiring preservation of the copyright and license notices. It provides no warranty. This is a permissive license, not a requirement that forks remain open source. See the [MIT summary](https://choosealicense.com/licenses/mit/).

Image files under `assets/` are excluded from this MIT grant; see [ASSET_LICENSES.md](ASSET_LICENSES.md) for the media inventory, provenance, and rights notices. Risk of Rain 2 characters, names, logos, and other third-party material remain subject to their owners' rights. The license does not grant trademark rights or permission from the game owners. Dependencies and fonts retain their own licenses. Linked or quoted wiki material is not relicensed by this project.

MIT makes sense for this site's code and associated documentation. A blanket MIT label for the illustrated game assets would imply rights the project has not established. AI-generated provenance and fan-made attribution do not establish rights clearance.

## Validation

Production TypeScript/Vite build passed. DOM interaction checks passed for all 20 detail routes, DLC and playstyle filters, item search, empty/reset state, all tier indexes, dialog zoom/close, portal references, and unknown-route fallback. HTTP checks passed for the production HTML, JavaScript, and CSS under the Pages subpath. Dependency audit reported zero vulnerabilities. No browser surface was available in the build session, so rendered desktop/mobile layout, native dialog Escape behavior, and real touch interaction still need a browser smoke test before publication. Temporary tools and QA files are ignored.
