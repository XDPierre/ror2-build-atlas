# Operator tier-guide generation

- Method: built-in `image_gen`, new raster infographic.
- Destination: `assets/tier-guides/operator.png`.
- References: `assets/survivors/operator.png` for character/mood; `assets/tier-guides/captain.png` for layout/palette.
- Assumption: Alloyed Collective Operator using ADMIN-OVERRIDE, a mobile active drone squad, and optional Survivors of the Void items. The Back-up is equipment, not a passive item.
- Rankings are editorial proposals, not verified tiers. Stylized AI icons are not official sprites. No portal claims.
- Important distinction: player AtG, Ukulele, Syringe, and Glasses are player-offense suggestions; they are not claimed to transfer to every drone. Operator's starting drone descriptions differ between the wiki introduction and passive text, so no fixed drone count is asserted.

## Sources checked

Research date: 2026-10-11. Community wiki search excerpts used; direct page opens returned HTTP 403, so this is a mechanics check rather than an exhaustive patch audit.

- https://riskofrain2.wiki.gg/wiki/Operator — drone command kit, mobility, self-repairing companions and ADMIN-OVERRIDE.
- https://riskofrain2.wiki.gg/wiki/Drones — drone behavior and item-specific buffs.
- https://riskofrain2.wiki.gg/wiki/Droneman — Spare Drone Parts weapons, faster firing and Alloyed Collective nerf; avoided obsolete numeric bonuses.
- https://riskofrain2.wiki.gg/wiki/Category%3ASimulacrumBlacklist_Items — Box of Dynamite effects.
- https://riskofrain2.wiki.gg/wiki/Empathy_Cores — probes scale with allied drones.
- https://riskofrain2.wiki.gg/wiki/Backup — The Back-up equipment, temporary drones and Operator secondary charges.
- https://riskofrain2.wiki.gg/wiki/Hardlight_Afterburner — utility charges and cooldown.
- https://riskofrain2.wiki.gg/wiki/Module%3AItems/Data — Fuel Cell equipment charges and cooldown.
- https://riskofrain2.wiki.gg/wiki/Bustling_Fungus — stationary healing can benefit nearby drones; low tier is contextual to mobility, not uselessness.
- https://riskofrain2.wiki.gg/wiki/Focus_Crystal — proximity requirement.
- https://riskofrain2.wiki.gg/wiki/Lepton_Daisy — holdout event healing.
- https://riskofrain2.wiki.gg/wiki/Warbanner — local conditional buffs.
- https://riskofrain2.wiki.gg/wiki/AtG_Missile_Mk._1 — player chance-based missiles.
- https://riskofrain2.wiki.gg/wiki/Ukelele — chain lightning.
- https://riskofrain2.wiki.gg/wiki/Soldier%27s_Syringe — attack speed.
- https://riskofrain2.wiki.gg/wiki/Lens-Maker%27s_Glasses — critical chance.
- https://riskofrain2.wiki.gg/wiki/Paul%27s_Goat_Hoof — movement speed.
- https://riskofrain2.wiki.gg/wiki/Hopoo_Feather — additional jump.

## Exact generation prompt

```text
Use case: infographic-diagram.
Create a new portrait 1024x1536 polished dark sci-fi Risk of Rain 2 fan build infographic. Input image 1 (Operator original) is character/mood reference only; input image 2 (Captain guide) is four-row layout and neon palette reference only. Do not copy either image's gameplay claims or logo. Operator in futuristic white/dark suit commanding blue-lit drones fills upper 25%; four equal rows of FOUR item cells fill lower 70%. Keep ample legible text room. Each cell has one stylized item icon, exact name, exact short note. Render exactly these sixteen items, no duplicates.
Title "OPERATOR"
Subtitle "Drone support / Mobile commander"
Intro "Assumes ADMIN-OVERRIDE and an active drone squad."
Small header note "Drone buffs and player attacks are separate priorities."
OPTIMAL — "Drone synergy and survival priorities"
Spare Drone Parts — "Adds drone weapons and faster firing."
Box of Dynamite — "Drones drop stunning explosives."
Empathy Cores — "Probes gain damage from more allies."
Paul's Goat Hoof — "Faster movement keeps you safer."
BEST — "Strong utility and equipment options"
The Back-up — "Equipment: temporary drones add commands."
Fuel Cell — "More uses of your held equipment."
Hardlight Afterburner — "More utility charges; shorter cooldown."
Hopoo Feather — "Extra jump for safer positioning."
OKAY — "Player offense; not general drone inheritance"
AtG Missile Mk. 1 — "Your hits can launch missiles."
Ukulele — "Your hits can chain lightning."
Soldier's Syringe — "Raises your attack speed."
Lens-Maker's Glasses — "Raises your critical chance."
NOT GOOD — "Lower priority here; useful in other situations"
Bustling Fungus — "Standing still conflicts with mobility."
Focus Crystal — "Needs enemies within 13 meters."
Warbanner — "Local buff with limited uptime."
Lepton Daisy — "Healing limited to holdout events."
Small note "The Back-up is equipment. Spare Drone Parts needs Survivors of the Void."
Footer exact "AI-generated fan guide • Proposed rankings, not verified"
Second small footer "Stylized icons • Community guide • Not officially affiliated"
Gold OPTIMAL, cyan BEST, purple OKAY, red NOT GOOD. Futuristic framing, dark navy background, luminous icons but clear text. No official logo. No numerical bonuses except stated 13 meters. No claim all drones inherit player items. Item visual guidance: Spare Drone Parts mechanical gun components; Box of Dynamite an open wooden crate with red sticks; Empathy Cores two spherical mechanical cores; hoof pale green hoof; Back-up black radio; Fuel Cell cyan battery; Hardlight Afterburner mechanical cylinder cyan exhaust; Hopoo Feather blue feather; AtG missile; Ukulele small guitar; Syringe green syringe; Glasses round spectacles; Fungus green mushrooms; Focus Crystal red crystal; Warbanner red flag; Lepton Daisy pale flower. Names and notes must be correctly spelled, uncropped, readable.
```

## QA

Final PNG visually inspected at 1024 × 1536: four ordered tier rows, sixteen matching item names and accurate short notes, ADMIN-OVERRIDE assumption, equipment distinction, Survivors of the Void requirement, visible AI/proposed ranking disclaimer, no official logo, and no cropped text. JSON item arrays match the image. Illustrations remain stylized approximations. No gameplay testing or exhaustive verification of rankings was performed.
