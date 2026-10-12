export type Ability = { name: string; summary: string; cooldown?: string; note?: string };
export type AbilitySlot = { role: string; choices: Ability[]; formDependent?: boolean };
export type SurvivorLoadout = { context: string; slots: AbilitySlot[]; forms?: string[] };

const skill = (name: string, summary: string): Ability => ({ name, summary });
const slot = (role: string, ...choices: Ability[]): AbilitySlot => ({ role, choices });
const nailguns = [
  skill('Auto-Nailgun', 'Rapid nail fire followed by a final burst when released.'),
  skill('Rebar Puncher', 'Fire a heavy piercing projectile.'),
  skill('Scrap Launcher', 'Launch explosive scrap with a limited stock of shots.'),
  skill('Power-Saw', 'Hold a saw against nearby enemies for repeated melee hits.'),
];
const beacons = [
  skill('Beacon: Hacking', 'Gradually removes the gold cost of nearby purchasables.'),
  skill('Beacon: Healing', 'Continuously heals allies inside its area.'),
  skill('Beacon: Shocking', 'Repeatedly shocks nearby enemies.'),
  skill('Beacon: Resupply', 'Recharge equipment by interacting with the beacon; three uses.'),
];

export const survivorLoadouts: Record<string, SurvivorLoadout> = {
  commando: {
    context: 'On-hit / Bleed. Choose the variants equipped in your run.',
    slots: [
      slot('Primary', skill('Double Tap', 'Fire rapid pistol shots.')),
      slot(
        'Secondary',
        skill('Phase Round', 'A piercing bullet grows stronger as it passes through enemies.'),
        skill('Phase Blast', 'Two close-range shotgun blasts.'),
      ),
      slot(
        'Utility',
        skill('Tactical Dive', 'Roll to reposition.'),
        skill('Tactical Slide', 'Slide along the ground while continuing to fire.'),
      ),
      slot(
        'Special',
        skill('Suppressive Fire', 'Fire a stunning barrage.'),
        skill('Frag Grenade', 'Throw a bouncing explosive grenade.'),
        skill('Sabotage', 'Attach explosives, then shoot them to trigger a burst.'),
      ),
    ],
  },
  huntress: {
    context: 'Crit / On-hit. Starts with the Flurry and Ballista setup shown in the guide.',
    slots: [
      slot(
        'Primary',
        skill('Flurry', 'Fire three seeking arrows; critical attacks fire six.'),
        skill('Strafe', 'Fire a seeking arrow while moving or sprinting.'),
      ),
      slot(
        'Secondary',
        skill('Laser Glaive', 'Throw a bouncing glaive that gains damage with each bounce.'),
      ),
      slot(
        'Utility',
        skill('Phase Blink', 'Use short teleports with multiple charges.'),
        skill('Blink', 'Teleport a longer distance in your movement direction.'),
      ),
      slot(
        'Special',
        skill('Ballista', 'Leap upward and aim three powerful bolts.'),
        skill('Arrow Rain', 'Leap upward and mark an area with slowing arrow strikes.'),
      ),
    ],
  },
  bandit: {
    context: 'Burst / Backstab. Rear attacks and finishing blows reward positioning.',
    slots: [
      slot('Passive', skill('Backstab', 'Attacks from behind always critically strike.')),
      slot(
        'Primary',
        skill('Burst', 'Fire a shotgun shell; reload after spending your ammunition.'),
        skill('Blast', 'Fire a precise rifle shot instead of a shotgun spread.'),
      ),
      slot(
        'Secondary',
        skill('Serrated Dagger', 'Slash nearby enemies; critical hits inflict Hemorrhage.'),
        skill('Serrated Shiv', 'Throw a blade; critical hits inflict Hemorrhage.'),
      ),
      slot(
        'Utility',
        skill(
          'Smoke Bomb',
          'Become invisible, damaging and stunning enemies when entering and leaving stealth.',
        ),
      ),
      slot(
        'Special',
        skill('Lights Out', 'A finishing shot resets skill cooldowns on a kill.'),
        skill(
          'Desperado',
          'Kills grant stacking damage tokens for this skill until the next stage.',
        ),
      ),
    ],
  },
  'mul-t': {
    context: 'Double Nailgun / Power Mode. Both weapon slots are independently selectable.',
    slots: [
      slot('Primary', ...nailguns),
      slot('Second weapon', ...nailguns),
      slot(
        'Secondary',
        skill('Blast Canister', 'A stunning canister breaks into smaller explosives.'),
      ),
      slot(
        'Utility',
        skill('Transport Mode', 'Rush forward with armor, striking enemies in your path.'),
      ),
      slot(
        'Special',
        skill('Power Mode', 'Use both weapons together with extra armor and reduced movement.'),
        skill('Retool', 'Swap the active weapon and equipment slot.'),
      ),
    ],
  },
  engineer: {
    context: 'Stationary turret sustain. Mobile turrets change how stationary healing items work.',
    slots: [
      slot(
        'Primary',
        skill('Bouncing Grenades', 'Charge and release a volley of bouncing grenades.'),
        skill(
          'Laser Cutter',
          'Sustain a charging beam; it damages enemies and heals allied turrets and drones.',
        ),
      ),
      slot(
        'Secondary',
        skill('Pressure Mines', 'Place mines that grow stronger while arming.'),
        skill('Spider Mines', 'Place mines that seek nearby enemies after arming.'),
      ),
      slot(
        'Utility',
        skill(
          'Bubble Shield',
          'Deploy a dome that blocks shots coming from outside; enemies can enter.',
        ),
        skill('Thermal Harpoons', 'Paint targets to launch seeking harpoons.'),
      ),
      slot(
        'Special',
        skill('TR12 Gauss Auto-Turret', 'Place stationary cannon turrets that inherit your items.'),
        skill(
          'TR58 Carbonizer Turret',
          'Place mobile laser turrets that inherit your items and slow enemies.',
        ),
      ),
    ],
  },
  artificer: {
    context: 'Fire burst. Starts with Flame Bolt and Charged Nano-Bomb.',
    slots: [
      slot('Passive', skill('ENV Suit', 'Hold jump while airborne to hover.')),
      slot(
        'Primary',
        skill('Flame Bolt', 'Launch fire bolts that ignite enemies.'),
        skill('Plasma Bolt', 'Launch plasma bolts that explode on impact.'),
      ),
      slot(
        'Secondary',
        skill('Charged Nano-Bomb', 'Charge an explosive bomb with electrical sparks.'),
        skill('Cast Nano-Spear', 'Charge a piercing spear that freezes enemies.'),
      ),
      slot('Utility', skill('Snapfreeze', 'Raise an ice wall that freezes enemies it touches.')),
      slot(
        'Special',
        skill('Flamethrower', 'Channel a close-range stream of fire.'),
        skill('Ion Surge', 'Blast upward, damaging and stunning nearby enemies.'),
      ),
    ],
  },
  mercenary: {
    context: 'Melee / Cooldowns. Focused Assault and Eviscerate match the guide setup.',
    slots: [
      slot('Passive', skill('Cybernetic Enhancements', 'Jump again while airborne.')),
      slot('Primary', skill('Laser Sword', 'A melee combo whose third strike applies Expose.')),
      slot(
        'Secondary',
        skill('Whirlwind', 'Spin twice; the attack changes direction in the air.'),
        skill('Rising Thunder', 'Launch upward with an uppercut.'),
      ),
      slot(
        'Utility',
        skill('Focused Assault', 'Dash through enemies, then apply a delayed hit and Expose.'),
        skill('Blinding Assault', 'A stunning dash can be repeated when it hits an enemy.'),
      ),
      slot(
        'Special',
        skill('Eviscerate', 'Repeatedly slash a nearby target while invulnerable.'),
        skill('Slicing Winds', 'Send ranged slashes that hit several enemies and apply Expose.'),
      ),
    ],
  },
  rex: {
    context: 'Safe DIRECTIVE / Ranged on-hit. Initial selections avoid health-cost skills.',
    slots: [
      slot(
        'Passive',
        skill(
          'Natural Toxins',
          'Certain attacks apply Weaken, reducing enemy movement, armor, and damage.',
        ),
      ),
      slot(
        'Primary',
        skill(
          'DIRECTIVE: Inject',
          'Fire a syringe burst; the final syringe weakens and returns healing.',
        ),
      ),
      slot(
        'Secondary',
        skill('DIRECTIVE: Drill', 'Rain seed bullets on a targeted area without spending health.'),
        skill('Seed Barrage', 'Spend health to launch an explosive mortar.'),
      ),
      slot(
        'Utility',
        skill('DIRECTIVE: Disperse', 'Push and weaken nearby enemies without spending health.'),
        skill('Bramble Volley', 'Spend health on a knockback blast; hitting enemies heals you.'),
      ),
      slot(
        'Special',
        skill('DIRECTIVE: Harvest', 'Mark an enemy that drops healing fruit when killed.'),
        skill(
          'Tangling Growth',
          'Spend health to root enemies in a growing area and drain healing from them.',
        ),
      ),
    ],
  },
  loader: {
    context: 'Punch burst. Build momentum before landing a charged gauntlet hit.',
    slots: [
      slot(
        'Passive',
        skill('Scrap Barrier', 'Gauntlet hits grant barrier; falling does not deal damage.'),
      ),
      slot('Primary', skill('Knuckleboom', 'Punch nearby enemies with your gauntlets.')),
      slot(
        'Secondary',
        skill('Grapple Fist', 'Attach a grappling hook to pull yourself toward its target.'),
        skill('Spiked Fist', 'A damaging grapple stuns; small enemies are pulled toward you.'),
      ),
      slot(
        'Utility',
        skill('Charged Gauntlet', 'Charge a piercing punch; movement speed increases its damage.'),
        skill('Thunder Gauntlet', 'Charge a shorter punch that releases a lightning cone.'),
      ),
      slot(
        'Special',
        skill('M551 Pylon', 'Throw a floating pylon that shocks enemies and can be grappled.'),
        skill('Thunderslam', 'Slam downward with a lightning blast.'),
      ),
    ],
  },
  acrid: {
    context: 'Poison / Cleanup. Starts with ranged poison application.',
    slots: [
      slot(
        'Passive',
        skill('Poison', 'Apply a damage-over-time effect that cannot deliver the killing blow.'),
        skill('Blight', 'Replace Poison with a stacking damage-over-time effect.'),
      ),
      slot(
        'Primary',
        skill('Vicious Wounds', 'Slash in a three-hit combo; the final hit heals you.'),
      ),
      slot(
        'Secondary',
        skill('Neurotoxin', 'Spit a projectile that applies your selected toxin.'),
        skill('Ravenous Bite', 'Bite to heal yourself; weakened targets take extra damage.'),
      ),
      slot(
        'Utility',
        skill('Caustic Leap', 'Leap and leave a toxic pool when landing.'),
        skill('Frenzied Leap', 'A stunning leap recharges faster when it hits enemies.'),
      ),
      slot(
        'Special',
        skill('Epidemic', 'Release a disease that spreads between enemies.'),
        skill('Cloying Breath', 'Exhale a lingering toxic cloud.'),
      ),
    ],
  },
  captain: {
    context: 'Sustained damage / On-hit. Select both beacons to match your loadout.',
    slots: [
      slot(
        'Passive',
        skill('Defensive Microbots', 'Microbots intercept nearby hostile projectiles.'),
      ),
      slot('Primary', skill('Vulcan Shotgun', 'Charge the shotgun to tighten its spread.')),
      slot('Secondary', skill('Power Tazer', 'Fire a shocking projectile that can bounce.')),
      slot(
        'Utility',
        skill('Orbital Probe', 'Call targeted orbital strikes.'),
        skill(
          "OGM-72 'DIABLO' Strike",
          'Call an enormous delayed strike; it can damage allies as well as enemies.',
        ),
      ),
      slot(
        'Special',
        skill(
          'Orbital Supply Beacon',
          'Deploy two permanent supply beacons per stage. Their functions are chosen before the run.',
        ),
      ),
      slot('First beacon', ...beacons),
      slot('Second beacon', ...beacons),
    ],
  },
  heretic: {
    context:
      'Health sustain / Shadowfade. Heresy items replace skills rather than unlock variants.',
    slots: [
      slot(
        'Traits',
        skill(
          'Heretic physiology',
          'Triple jump and continual health loss make healing and positioning essential.',
        ),
      ),
      slot(
        'Primary',
        skill(
          'Hungering Gaze',
          'Fire tracking shards that detonate after a delay. Granted by Visions of Heresy.',
        ),
      ),
      slot(
        'Secondary',
        skill(
          'Slicing Maelstrom',
          'Charge a projectile that damages an area before exploding and rooting enemies. Granted by Hooks of Heresy.',
        ),
      ),
      slot(
        'Utility',
        skill('Shadowfade', 'Become invulnerable, fly, and heal. Granted by Strides of Heresy.'),
      ),
      slot(
        'Special',
        skill(
          'Ruin',
          'Hits accumulate Ruin stacks; activate to detonate them. Granted by Essence of Heresy.',
        ),
      ),
    ],
  },
  railgunner: {
    context: 'Precision / Burst. Starts with the M99 weak-point sniper setup.',
    slots: [
      slot(
        'Passive',
        skill(
          'Magnetic Accelerator',
          'Weak-point hits critically strike; critical chance is converted into critical damage.',
        ),
      ),
      slot('Primary', skill('XQR Smart Round System', 'Fire tracking rounds while unscoped.')),
      slot(
        'Secondary',
        skill(
          'M99 Sniper',
          'Scope for a piercing weak-point shot; active reload strengthens the next shot.',
        ),
        skill('HH44 Marksman', 'Use a shorter-range scope with faster follow-up shots.'),
      ),
      slot(
        'Utility',
        skill('Concussion Device', 'Place a device whose blast pushes characters, including you.'),
        skill('Polar Field Device', 'Place a field that slows nearby enemies.'),
      ),
      slot(
        'Special',
        skill('Supercharge', 'Prepare a powerful piercing shot, followed by a weapon lockout.'),
        skill('Cryocharge', 'Prepare a freezing shot without the same lockout.'),
      ),
    ],
  },
  'void-fiend': {
    context: 'Corruption / On-hit. Switch form to view all four transformed skills together.',
    forms: ['Normal', 'Corrupted'],
    slots: [
      slot(
        'Passive',
        skill(
          'Void Corruption',
          'Corruption transforms your skills. Damage and critical hits build it; healing lowers it.',
        ),
      ),
      {
        ...slot(
          'Primary',
          skill('Drown', 'Aim a precise, long-range slowing beam.'),
          skill('Corrupted Drown', 'Fire a rapid, short-range beam.'),
        ),
        formDependent: true,
      },
      {
        ...slot(
          'Secondary',
          skill('Flood', 'Charge an explosive plasma projectile.'),
          skill('Corrupted Flood', 'Immediately fire an explosive projectile.'),
        ),
        formDependent: true,
      },
      {
        ...slot(
          'Utility',
          skill('Trespass', 'Cleanse debuffs and travel upward.'),
          skill('Corrupted Trespass', 'Cleanse debuffs and travel forward a longer distance.'),
        ),
        formDependent: true,
      },
      {
        ...slot(
          'Special',
          skill('Suppress', 'Consume Corruption to restore health.'),
          skill('Corrupted Suppress', 'Spend health to gain Corruption and extend this form.'),
        ),
        formDependent: true,
      },
    ],
  },
  seeker: {
    context: 'Sustained damage / Barrier. Starts with Soul Spiral and Meditate.',
    slots: [
      slot('Primary', skill('Spirit Punch', 'Launch piercing fists; every third hit explodes.')),
      slot(
        'Secondary',
        skill('Soul Spiral', 'Orbiting orbs hit nearby enemies and grant barrier.'),
        skill('Unseen Hand', 'Launch a stunning, piercing hand that heals from damage dealt.'),
      ),
      slot(
        'Utility',
        skill('Sojourn', 'Take flight and explode; spending health increases the blast.'),
        skill(
          'Reprieve',
          'Take flight with barrier; impact or losing that barrier creates a healing cyclone.',
        ),
      ),
      slot(
        'Special',
        skill(
          'Meditate',
          'Complete timed inputs to heal, blast enemies, and gain Tranquility. Reaching the maximum can revive allies and grant Saving Grace.',
        ),
        skill('Palm Blast', 'Charge a piercing palm attack that heals and builds Tranquility.'),
      ),
    ],
  },
  'false-son': {
    context: 'Health scaling / Sustain. Growth comes from bonus health, not leveling alone.',
    slots: [
      slot(
        'Passive',
        skill(
          'Lunar Tampering',
          'Unused spikes grant attack speed and armor; spent spikes grant movement speed and regeneration. Growth enhances skills.',
        ),
      ),
      slot(
        'Primary',
        skill(
          'Club of the Forsaken',
          'Swing the club. Hold primary and secondary together to charge a slam.',
        ),
      ),
      slot(
        'Secondary',
        skill('Lunar Spikes', 'Fire spikes that apply Lunar Ruin.'),
        skill(
          'Lunar Stakes',
          'Fire piercing stakes that call delayed lightning onto enemies they pass through.',
        ),
      ),
      slot(
        'Utility',
        skill('Step of the Brothers', 'Dash and generate explosions when striking enemies.'),
        skill(
          "Meridian's Will",
          'Teleport, pull enemies, and temporarily amplify Lunar Tampering.',
        ),
      ),
      slot(
        'Special',
        skill('Laser of the Father', 'Charge and sustain a laser; Growth increases its duration.'),
        skill('Laser Burst', 'Fire an immediate piercing laser; Growth adds charges.'),
      ),
    ],
  },
  chef: {
    context: 'Burn / Close range. Starts with Sear and Glaze.',
    slots: [
      slot(
        'Passive',
        skill(
          "CHEF's Kiss",
          'Enemies hit by multiple different skills drop healing food when killed.',
        ),
      ),
      slot('Primary', skill('Dice', 'Throw cleavers and recall them for another hit.')),
      slot(
        'Secondary',
        skill('Sear', 'Burn nearby enemies with a stream of flame.'),
        skill('Ice Box', 'Launch freezing ice cubes.'),
      ),
      slot(
        'Utility',
        skill('Roll', 'Charge a rolling rush through enemies.'),
        skill('Oil Spill', 'Leap and slam, leaving oil; repeat the maneuver several times.'),
      ),
      slot(
        'Special',
        skill('Glaze', 'Coat enemies in oil to strengthen fire attacks.'),
        skill('Yes, CHEF!', 'Empower the next skill you use.'),
      ),
    ],
  },
  operator: {
    context:
      'Drone support / Utility. Drone types change ADMIN-OVERRIDE effects; see the full wiki reference.',
    slots: [
      slot(
        'Passive',
        skill(
          'Drone Tech',
          'Start each stage with two drone companions that automatically repair themselves when downed.',
        ),
      ),
      slot(
        'Primary',
        skill('H3-11 OCR Custom', 'Charge a pistol shot; kills can ricochet it to another target.'),
      ),
      slot(
        'Secondary',
        skill(
          'ADMIN-OVERRIDE',
          'Command drone-specific special attacks, using each drone’s charge.',
        ),
        skill('CMD-SWARM', 'Mark a target for critical, igniting drone rams.'),
      ),
      slot(
        'Utility',
        skill(
          'Ascent Protocol',
          'Ride a drone for aerial movement; reactivate to jump to another.',
        ),
        skill('FIREWALL', 'Charge a protective shield, then release it forward.'),
      ),
      slot(
        'Special',
        skill('Ejection Core', 'Launch a drone to knock enemies airborne and apply NanoBugged.'),
        skill('Amp Core', 'Use a damage-absorbing drone explosion.'),
      ),
    ],
  },
  enforcer: {
    context: 'Defense / Sustained damage. Steel Protection changes how your primary fires.',
    slots: [
      slot(
        'Passive',
        skill('Big Man', 'Resist knockback and damage enemies through fast ground impacts.'),
      ),
      slot(
        'Primary',
        skill('Trenchbroom', 'Fire a slug; Defensive Stance changes it to rapid piercing shells.'),
        skill(
          'Shrapnel Grenade',
          'Launch an arcing grenade; Defensive Stance changes its explosive pattern.',
        ),
      ),
      slot(
        'Secondary',
        skill('Steel Protection', 'Enter Defensive Stance. Reactivate to exit with a shield bash.'),
        skill('Surge Protection', 'Enter a temporary expanded stance that ends in an explosion.'),
      ),
      slot(
        'Utility',
        skill(
          'Shield Tackle',
          'Charge forward, knocking enemies back; hold to spend more charges.',
        ),
        skill('Ripcord', 'Throw a remote grenade, then reactivate to pull and taunt enemies.'),
      ),
      slot(
        'Special',
        skill(
          'Rally Point',
          'Deploy a rally beacon; kills grant barrier and stationary minions can be repositioned.',
        ),
        skill('Crash Point', 'Leap high, then crash into the ground.'),
      ),
    ],
  },
  drifter: {
    context: 'Melee / Junk / Salvage. Match these selections to your in-game loadout.',
    slots: [
      {
        role: 'Passive',
        choices: [
          {
            name: 'Trash to Treasure',
            summary:
              'Carried scrap grants buffs: white boosts movement, green adds regeneration, red boosts attack speed, and yellow reduces skill cooldowns.',
            note: 'Regenerating Scrap also counts as green scrap.',
          },
        ],
      },
      {
        role: 'Primary',
        choices: [
          {
            name: 'Blunt Force',
            summary:
              'A three-hit melee combo. The final strike hits harder and stuns; attacks can generate Junk.',
            cooldown: 'No base cooldown',
            note: 'While carrying a bagged object, your primary becomes Bludgeon.',
          },
        ],
      },
      {
        role: 'Secondary',
        choices: [
          {
            name: 'Cleanup',
            summary:
              'Throw debris and the object in your bag. Spend 2 Junk to bypass the cooldown.',
            cooldown: '6 s base cooldown',
          },
          {
            name: 'Junk Cube',
            summary:
              'Create a cube, then hit it to launch it at enemies. Spend 4 Junk to bypass the cooldown.',
            cooldown: '8 s base cooldown',
          },
        ],
      },
      {
        role: 'Utility',
        choices: [
          {
            name: 'Repossess',
            summary:
              'Leap and bag a creature or interactable. Reactivate to throw it with Discard.',
            cooldown: '7 s base cooldown',
            note: 'Bagged objects change your primary attack; bosses cannot be bagged.',
          },
          {
            name: 'Tornado Slam',
            summary:
              'Spin through enemies, generating Junk, then finish with a slam. Cancel with primary or a jump.',
          },
        ],
      },
      {
        role: 'Special',
        choices: [
          {
            name: 'Salvage',
            summary: 'Spend 8 Junk to create four temporary items.',
            cooldown: '30 s base cooldown',
          },
          {
            name: 'Tinker',
            summary:
              'Spend 8 Junk on a stunning shockwave and a random debuff. It also alters item pickups or item-holding interactables.',
            cooldown: '30 s base cooldown',
          },
        ],
      },
    ],
  },
};
