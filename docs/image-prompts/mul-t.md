# MUL-T tier-guide generation

- Method: built-in `image_gen`; new portrait infographic.
- Subject reference: `assets/survivors/mul-t.png`, inspected before generation.
- Style/layout reference: `assets/tier-guides/captain.png`, inspected before generation.
- Output: `assets/tier-guides/mul-t.png`, 1024 x 1536 PNG; source artwork preserved.
- Build: two Auto-Nailguns plus Power Mode. Rankings are proposed editorial priorities, not verified game data. Illustrations approximate item appearances and are not official sprites.

## Sources checked

Checked 2026-10-11 through wiki.gg search extracts:

- https://riskofrain2.wiki.gg/wiki/MUL-T — two nailguns generate repeated hits, Power Mode reduces movement, Crowbar particularly favors Rebar.
- https://riskofrain2.wiki.gg/wiki/Proc_Coefficient — nailgun proc scaling affects trigger probability; no guaranteed procs claimed.
- https://riskofrain2.wiki.gg/wiki/Tri-Tip_Dagger — chance-based bleed on hit.
- https://riskofrain2.wiki.gg/wiki/Syringe — increased attack speed.
- https://riskofrain2.wiki.gg/wiki/Missile — chance-based missile damage.
- https://riskofrain2.wiki.gg/wiki/57_Leaf_Clover — improves beneficial random rolls, includes crit and on-hit effects but not Tougher Times.
- https://riskofrain2.wiki.gg/wiki/Module%3AItems/Data — ordinary item names and effects.
- https://riskofrain2.wiki.gg/wiki/Stone_Flux_Pauldron — health versus movement tradeoff. MUL-T can use this in tank-oriented setups; low priority here is a mobility preference, not a universal ranking.
- https://riskofrain2.wiki.gg/wiki/Bustling_Fungus — standing-still healing.
- https://riskofrain2.wiki.gg/wiki/Purity — negative luck reduces chance-based procs; guaranteed effects are unaffected.
- https://riskofrain2.wiki.gg/wiki/Leeching_Seed — healing scales with the hit proc coefficient; no fixed healing number is claimed.
- https://riskofrain2.wiki.gg/wiki/Armor-Piercing_Rounds — boss damage bonus.
- https://riskofrain2.wiki.gg/wiki/Gasoline — kills ignite nearby enemies.

No portal claims. Sources support mechanics; they do not validate the editorial tiers, AI artwork, or every patch interaction.

## Exact final prompt

```text
Use case: infographic-diagram. Create a NEW portrait Risk of Rain 2 fan item tier guide for MUL-T, approximately 1024x1536 or larger. Reference image 1 assets/survivors/mul-t.png is SUBJECT only: bulky yellow industrial robot with a cyan monocular eye, two nailguns and rugged armor. Reference image 2 assets/tier-guides/captain.png is STYLE/layout only: polished dark navy sci-fi panels, neon cyan borders, illustrated item thumbnails, gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD rows. Do not copy Captain or official logo. Compact MUL-T hero art top quarter. Remaining space has FOUR equally clear rows of FOUR item cells each. Each cell includes exact name and exact short note below a stylized recognizable item icon. No extra items.
Title "MUL-T"
Subtitle "Double Nailgun / On-hit"
Loadout text "Two Auto-Nailguns + Power Mode"
Intro "Many small hits; movement matters in Power Mode."
OPTIMAL — "Core priorities for this double-nailgun build"
Soldier's Syringe — "Faster nailgun attacks."
Tri-Tip Dagger — "Repeated hits stack bleed."
AtG Missile Mk. 1 — "Chance for extra missile damage."
Ukulele — "Chance for chain lightning."
BEST — "Strong damage and mobility support"
Lens-Maker's Glasses — "Raises critical strike chance."
Paul's Goat Hoof — "Faster movement."
Hopoo Feather — "Extra jump for safer movement."
57 Leaf Clover — "Improves chance-based procs."
OKAY — "Useful; priority depends on inventory"
Leeching Seed — "Small on-hit healing."
Tougher Times — "Chance to block damage."
Armor-Piercing Rounds — "Extra damage against bosses."
Gasoline — "Kills ignite nearby enemies."
NOT GOOD — "Lower priority for this loadout; situational, not useless"
Bustling Fungus — "Healing requires standing still."
Crowbar — "Opening hits; better with Rebar."
Purity — "Bad luck hurts chance-based procs."
Stone Flux Pauldron — "More health, but slower movement."
Footer EXACT "AI-generated fan guide • Proposed rankings, not verified"
Small final line "Stylized icons • Community guide • Not officially affiliated"
Ensure all text and item names are legible and spelled exactly. No numerical bonus inventions, no official logo. Show yellow MUL-T robot hero art, not Captain.
```

## QA

Inspected final 1024 x 1536 PNG. Yellow MUL-T subject and two-nailgun Power Mode loadout are present. All four rows contain four items in the JSON order. All sixteen item names and short notes are legible; chance-based effects are not presented as guaranteed. Low-tier wording preserves loadout context, particularly Rebar's Crowbar synergy and Stone Flux's health/movement tradeoff. The AI-generated fan guide and proposed-rankings footer is visible. Icons remain stylized approximations, not verified sprites. No gameplay testing or exhaustive patch audit performed.
