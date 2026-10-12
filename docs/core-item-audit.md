# Starter and tier-guide consistency audit

Reviewed October 11, 2026. All 20 starter PNGs in `assets/survivors/` and their 20 matching PNGs in `assets/tier-guides/` were visually inspected. Tier labels were cross-checked against `src/data/survivors.ts` and `src/data/tier-guides/*.json`. Apostrophe style and tile order were ignored when comparing item sets.

The consistency rule follows the Loader correction: a starter's CORE ITEMS row should summarize the same build and contain the same item set as the tier guide's Core Items row (formerly Optimal). This is an internal content check, not validation that the tier rankings are correct in the game. Lower-priority items can still be useful; their inclusion in the starter is a mismatch against this presentation rule, not proof of a bad build.

## Current revision results

All 20 starter/tier-guide pairs were edited together and visually reviewed after generation. Each starter now summarizes the same Core Items selection as its matching tier guide and metadata. All 20 tier images use CORE ITEMS instead of OPTIMAL. Every item tile has a game-rarity border and category label independent of the surrounding priority-row color. Editable detail-page indexes use the same heading and rarity lookup.

| Survivor   | Shared core selection                                                                              | Starter / tier | Top heading | Rarity review |
| ---------- | -------------------------------------------------------------------------------------------------- | -------------- | ----------- | ------------- |
| Commando   | Tri-Tip Dagger, Soldier's Syringe, AtG Missile Mk. 1, Ukulele                                      | Matched        | Core Items  | Passed        |
| Huntress   | Lens-Maker's Glasses, Soldier's Syringe, Predatory Instincts, AtG Missile Mk. 1                    | Matched        | Core Items  | Passed        |
| Bandit     | Crowbar, Runald's Band, Kjaro's Band, Shatterspleen                                                | Matched        | Core Items  | Passed        |
| MUL-T      | Soldier's Syringe, Tri-Tip Dagger, AtG Missile Mk. 1, Ukulele                                      | Matched        | Core Items  | Passed        |
| Engineer   | Bustling Fungus, Soldier's Syringe, AtG Missile Mk. 1, Ukulele                                     | Matched        | Core Items  | Passed        |
| Artificer  | Ignition Tank, Kjaro's Band, Runald's Band, Backup Magazine                                        | Matched        | Core Items  | Passed        |
| Mercenary  | Focus Crystal, Alien Head, Lysate Cell, Hardlight Afterburner                                      | Matched        | Core Items  | Passed        |
| REX        | Soldier's Syringe, Lens-Maker's Glasses, Tri-Tip Dagger, AtG Missile Mk. 1                         | Matched        | Core Items  | Passed        |
| Loader     | Crowbar, Runald's Band, Kjaro's Band, Focus Crystal, Hardlight Afterburner, Backup Magazine        | Matched        | Core Items  | Passed        |
| Acrid      | Gasoline, Will-o'-the-wisp, Paul's Goat Hoof, Hopoo Feather, Backup Magazine                       | Matched        | Core Items  | Passed        |
| Captain    | Tri-Tip Dagger, AtG Missile Mk. 1, Ukulele, Soldier's Syringe, Lens-Maker's Glasses, Shatterspleen | Matched        | Core Items  | Passed        |
| Heretic    | Alien Head, Hardlight Afterburner, Gnarled Woodsprite, Cautious Slug                               | Matched        | Core Items  | Passed        |
| Railgunner | Crowbar, Runald's Band, Kjaro's Band, Laser Scope, Lens-Maker's Glasses, Armor-Piercing Rounds     | Matched        | Core Items  | Passed        |
| Void Fiend | Lens-Maker's Glasses, Soldier's Syringe, Polylute, Plasma Shrimp                                   | Matched        | Core Items  | Passed        |
| Seeker     | Backup Magazine, Focus Crystal, AtG Missile Mk. 1, Ukulele                                         | Matched        | Core Items  | Passed        |
| False Son  | Bison Steak, Infusion, Runald's Band, Kjaro's Band                                                 | Matched        | Core Items  | Passed        |
| CHEF       | Ignition Tank, Gasoline, Focus Crystal, Backup Magazine, Paul's Goat Hoof                          | Matched        | Core Items  | Passed        |
| Operator   | Spare Drone Parts, Box of Dynamite, Empathy Cores, Paul's Goat Hoof                                | Matched        | Core Items  | Passed        |
| Drifter    | Collector's Compulsion, Soldier's Syringe, Focus Crystal, Kjaro's Band                             | Matched        | Core Items  | Passed        |
| Enforcer   | Soldier's Syringe, AtG Missile Mk. 1, Ukulele, Hopoo Feather                                       | Matched        | Core Items  | Passed        |

REX now consistently uses the safe DIRECTIVE loadout without health-cost skills. Heretic consistently uses health sustain / Shadowfade without Transcendence. Railgunner's sixth core item, Armor-Piercing Rounds, is included. False Son's starter-only labels were removed; its shared core row is Bison Steak, Infusion, Runald's Band, and Kjaro's Band. Quick Fix is a real Meal item in the wiki database, so the historical finding below describes a missing tier-guide entry and transcription issue, not a nonexistent item. Seared Steak was not independently verified.

Exact prompts, per-image hashes, visual-review notes, and rarity sources are in the [revision records](image-prompts/revisions/README.md). Rarity verification used indexed wiki pages because direct retrieval returned HTTP 403. AI-generated iconography and proposed rankings remain unverified; this audit verifies presentation consistency rather than universal gameplay quality.

## Verification after revisions

Drifter's tier guide was subsequently replaced with the approved [stack-planning sketch](image-prompts/drifter-stack-sketch.md), retaining the same row membership and rarity categories. Its starter was not changed. The companion abilities panel has now been extended to all 20 survivors; selectors affect only the displayed skill reference, not infographic rankings or the sketch's proposed item ratios. See the [ability reference notes](ability-reference.md).

Lint, formatting checks, TypeScript, and the production Vite build passed. Local DOM checks passed for all 20 detail routes, the Core Items heading, a colored rarity label for every indexed item, current starter/tier image references, gallery filters, image dialogs, and GitHub Pages asset paths. File checks confirmed all 40 revised PNG hashes and dimensions, rarity lookup coverage, and matching starter core arrays. Native browser layout and touch interaction remain outside this DOM check.

## Original findings (before coordinated edits)

- Loader: exact match after correction.
- Railgunner: every starter item is Optimal, but Armor-Piercing Rounds is omitted. This is an incomplete summary rather than a conflicting recommendation.
- The other 18 survivors: at least one starter item is below Optimal or absent from the tier guide. Some also omit Optimal items.

In the table, Best, Okay, and Not Good refer to the existing tier guide. **Absent** means the name does not appear anywhere in that guide; it does not establish whether the item exists in the game. Item names below come from the actual images, including uncertain labels.

| Survivor   | Starter items outside Optimal                                                      | Optimal items omitted from starter                                         |
| ---------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Commando   | Lens-Maker's Glasses (Best)                                                        | None                                                                       |
| Huntress   | Ukulele, Hopoo Feather (Best)                                                      | Predatory Instincts                                                        |
| Bandit     | Backup Magazine (Okay)                                                             | None                                                                       |
| MUL-T      | Plasma Shrimp (absent)                                                             | None                                                                       |
| Engineer   | N'kuhana's Opinion, Rejuvenation Rack (Best); Aegis (absent)                       | Soldier's Syringe, Ukulele                                                 |
| Artificer  | Crowbar (Best)                                                                     | None                                                                       |
| Mercenary  | Backup Magazine (Best)                                                             | None                                                                       |
| REX        | Razorwire (Not Good); Medkit, Planula, Death Mark (Okay); Rejuvenation Rack (Best) | Soldier's Syringe, Lens-Maker's Glasses, Tri-Tip Dagger, AtG Missile Mk. 1 |
| Loader     | None                                                                               | None                                                                       |
| Acrid      | Ukulele (Best)                                                                     | Hopoo Feather                                                              |
| Captain    | Crowbar (Best)                                                                     | Lens-Maker's Glasses, Shatterspleen                                        |
| Heretic    | Transcendence (absent); Ukulele (Best)                                             | Hardlight Afterburner                                                      |
| Railgunner | None                                                                               | Armor-Piercing Rounds                                                      |
| Void Fiend | Safer Spaces, Cautious Slug (Best)                                                 | Soldier's Syringe                                                          |
| Seeker     | Rejuvenation Rack (Okay)                                                           | None                                                                       |
| False Son  | Seared Steak, Quick Fix (both absent; uncertain labels)                            | Kjaro's Band                                                               |
| CHEF       | Ukulele, AtG Missile Mk. 1 (Best)                                                  | Focus Crystal, Paul's Goat Hoof                                            |
| Operator   | AtG Missile Mk. 1, Ukulele, Lens-Maker's Glasses (Okay); Mocha (absent)            | Box of Dynamite, Empathy Cores, Paul's Goat Hoof                           |
| Drifter    | Lens-Maker's Glasses, Backup Magazine (Okay); Mocha (absent)                       | Focus Crystal, Kjaro's Band                                                |
| Enforcer   | Mocha (absent)                                                                     | None                                                                       |

## Build-context differences

REX's starter says Self-Sustain / Debuff and describes self-damage abilities. Its tier guide explicitly uses a Safe DIRECTIVE / Ranged on-hit loadout without health-cost skills. This is a different build, not just a row-selection discrepancy. Aligning them requires updating the starter's subtitle and explanation as well as its items, or clearly presenting two distinct builds.

Heretic's starter includes Transcendence and describes that approach. Its tier guide deliberately uses a health-sustain / Shadowfade build without Transcendence, as recorded in [the generation notes](image-prompts/heretic.md). These also need a consistent build context or explicit alternative-build labeling.

## Additional transcription finding

False Son's starter visibly labels the third and fourth tiles **Seared Steak** and **Quick Fix**. The original row in `src/data/survivors.ts` instead lists **Searsteed** and **Cautious Slug**. That original array is currently superseded for search by the generated tier index, but it is still an inaccurate transcription of the starter. Neither uncertain image label should be silently mapped to a verified item.

## Original follow-up scope

The initial audit made no image, ranking, or metadata changes. The subsequent coordinated revisions described above resolve this follow-up scope. To apply the Loader consistency rule collection-wide, edit the 18 conflicting starters, add the missing sixth item to Railgunner, and align REX and Heretic's explanatory text with the chosen build. Preserve each full tier guide and record exact edit prompts and visual checks. The resulting consistency would not certify gameplay accuracy or official iconography.
