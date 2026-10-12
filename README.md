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

## Publish free on GitHub Pages

Nothing has been committed, pushed, or deployed by Codex. Review before publishing.

1. Create a public repository named ror2-build-atlas on your GitHub account. GitHub Free supports Pages for public repositories.
2. After approving publication, commit and push this project. Verify any existing remote with git remote -v before changing it. Keep package-lock.json tracked.
3. In Settings → Pages → Build and deployment choose GitHub Actions.
4. Use GitHub's static HTML Pages workflow template. Add actions/setup-node@v4 with node-version: '22' and cache: npm after checkout, then npm ci and npm run build. Change the upload-pages-artifact path from '.' to dist. Keep configure-pages@v5, upload-pages-artifact@v4, deploy-pages@v4, the github-pages environment, and pages: write / id-token: write permissions. Match the workflow trigger to your default branch.
5. Pushing the workflow may publish immediately. Add it only when you are ready to deploy.

Full instructions: [GitHub custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

The site URL is https://XDPierre.github.io/ror2-build-atlas/; account ownership is not assumed. If the repository name changes, update base in vite.config.ts. For a root/user site use base: '/'. Hash routes such as #survivor/railgunner need no server rewrites. Vite imports produce subpath-safe hashed asset URLs.

## Project structure

```text
ror2-build-atlas/
├── assets/
│   ├── survivors/          Original survivor infographics
│   ├── tier-guides/        Optional expanded guides, matched by survivor filename
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
│   │   └── ExternalLink.tsx Accessible links that open in a new tab
│   ├── data/
│   │   ├── assets.ts        Vite image imports and map discovery
│   │   ├── survivors.ts     Survivor metadata, DLC grouping, and supplied tier indexes
│   │   ├── tier-guides/     Generated tier indexes, one JSON per survivor
│   │   ├── portals.ts       Portal route metadata
│   │   └── references.ts    Wiki URLs, uncertain names, and mechanics corrections
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

## Code ownership and reviews

[`.github/CODEOWNERS`](.github/CODEOWNERS) assigns `@XDPierre` as code owner for every file, including assets, documentation, configuration, and the ownership file itself. GitHub automatically requests your review on non-draft pull requests targeting a branch that contains this file. Draft pull requests request review when marked ready. This routes review requests without changing commit authorship or preventing other people from reviewing.

To make code-owner approval mandatory before merging, enable **Require review from Code Owners** in the branch protection rule or ruleset for the default branch. Repository settings have not been changed. The ownership rule becomes active after this file is published to the pull request's base branch; nothing has been pushed by Codex. See [GitHub's code owners documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

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
- Add survivor artwork to `assets/survivors/<id>.png`; use the same filename in `assets/tier-guides/` for an optional guide. Both display separately on the survivor page.
- Add a PNG to `assets/maps/` to include it on the main page automatically.
- Edit portal routes in `src/data/portals.ts`; edit source URLs and corrections in `src/data/references.ts`.
- Change layouts in `src/pages/` and reusable UI in `src/components/`.
- Adjust colors, spacing, and responsive styling in `src/styles/global.css`.

Acolyte is a coming-soon block separate from the 20 supplied cards. Playstyle tags describe the supplied build proposal. DLC filters describe survivor ownership, not the DLC requirements of recommended items. Google Fonts are optional with local fallbacks. No analytics or login is included.

## Generated tier-guide collection

The 17 survivors missing tier-guide images were assigned to separate agents, with up to three agents working concurrently. The original Captain, Loader, and Railgunner guides are preserved. Every supplied survivor now has a matching PNG in `assets/tier-guides/`, shown separately from its original survivor infographic.

New images were made with the built-in `image_gen` tool, using the corresponding survivor image as subject reference and the Captain guide as a layout reference. Each includes four rows (Optimal, Best, Okay, Not Good), a specific build/loadout scope, and an AI-generated/proposed-rankings disclaimer. Mechanics and names were researched; tier placement and generated iconography remain unverified editorial proposals. “Not Good” means lower priority for that particular build.

Each new guide has editable arrays in `src/data/tier-guides/<id>.json`. The site loads these automatically; the original three indexes stay in `src/data/survivors.ts`. [Generation records](docs/image-prompts/README.md) preserve every exact prompt, input roles, wiki sources, method, visual review, and limitations. Targeted image edits corrected the Engineer Purity icon and Heretic Armor Plate wording.

## Accuracy and sources

Supplied artwork is AI-generated, not official item sprites or verified tier lists. The item indexes are transcriptions rather than endorsements. Some item names, icons, and recommendations may be inaccurate. The original Searsteed label remains unverified. Collector’s Compulsion was confirmed during Drifter research; its item-name warning has been removed. The image text is preserved; corrections appear separately.

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
