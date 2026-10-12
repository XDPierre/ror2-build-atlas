import { asset } from './assets';
export const dlcs = [
  'Base game',
  'Survivors of the Void',
  'Seekers of the Storm',
  'Alloyed Collective',
  'Hallowed Concepts',
] as const;
export type Tier = 'Core Items' | 'Best' | 'Okay' | 'Not Good';
export type Survivor = {
  id: string;
  name: string;
  dlc: (typeof dlcs)[number];
  style: string;
  tags: string[];
  items: string[];
  tiers?: Record<Tier, string[]>;
  image: string;
  tierImage?: string;
};
const rows: [string, string, number, string, string[], string[]][] = [
  [
    'commando',
    'Commando',
    0,
    'On-hit / Bleed',
    ['Ranged', 'On-hit'],
    ['Tri-Tip Dagger', "Soldier's Syringe", 'AtG Missile Mk. 1', 'Ukulele'],
  ],
  [
    'huntress',
    'Huntress',
    0,
    'Crit / On-hit',
    ['Ranged', 'On-hit', 'Mobility'],
    ["Lens-Maker's Glasses", "Soldier's Syringe", 'Predatory Instincts', 'AtG Missile Mk. 1'],
  ],
  [
    'bandit',
    'Bandit',
    0,
    'Burst / Backstab',
    ['Ranged', 'Burst'],
    ['Crowbar', "Runald's Band", "Kjaro's Band", 'Shatterspleen'],
  ],
  [
    'mul-t',
    'MUL-T',
    0,
    'Nailgun / On-hit',
    ['Ranged', 'On-hit'],
    ["Soldier's Syringe", 'Tri-Tip Dagger', 'AtG Missile Mk. 1', 'Ukulele'],
  ],
  [
    'engineer',
    'Engineer',
    0,
    'Turret sustain',
    ['Utility', 'Sustain'],
    ['Bustling Fungus', "Soldier's Syringe", 'AtG Missile Mk. 1', 'Ukulele'],
  ],
  [
    'artificer',
    'Artificer',
    0,
    'Fire burst',
    ['Ranged', 'Burst'],
    ['Ignition Tank', "Kjaro's Band", "Runald's Band", 'Backup Magazine'],
  ],
  [
    'mercenary',
    'Mercenary',
    0,
    'Melee / Cooldown',
    ['Melee', 'Mobility'],
    ['Focus Crystal', 'Alien Head', 'Lysate Cell', 'Hardlight Afterburner'],
  ],
  [
    'rex',
    'REX',
    0,
    'Safe DIRECTIVE / Ranged on-hit',
    ['Ranged', 'On-hit'],
    ["Soldier's Syringe", "Lens-Maker's Glasses", 'Tri-Tip Dagger', 'AtG Missile Mk. 1'],
  ],
  [
    'loader',
    'Loader',
    0,
    'Punch burst',
    ['Melee', 'Burst', 'Mobility'],
    [
      'Crowbar',
      "Runald's Band",
      "Kjaro's Band",
      'Focus Crystal',
      'Hardlight Afterburner',
      'Backup Magazine',
    ],
  ],
  [
    'acrid',
    'Acrid',
    0,
    'Poison / Cleanup',
    ['Melee', 'Damage over time'],
    ['Gasoline', "Will-o'-the-wisp", "Paul's Goat Hoof", 'Hopoo Feather', 'Backup Magazine'],
  ],
  [
    'captain',
    'Captain',
    0,
    'Sustained damage / On-hit',
    ['Ranged', 'On-hit', 'Utility'],
    [
      'Tri-Tip Dagger',
      'AtG Missile Mk. 1',
      'Ukulele',
      "Soldier's Syringe",
      "Lens-Maker's Glasses",
      'Shatterspleen',
    ],
  ],
  [
    'heretic',
    'Heretic',
    0,
    'Health sustain / Shadowfade / Cooldowns',
    ['Ranged', 'Sustain'],
    ['Alien Head', 'Hardlight Afterburner', 'Gnarled Woodsprite', 'Cautious Slug'],
  ],
  [
    'railgunner',
    'Railgunner',
    1,
    'Precision / Burst',
    ['Ranged', 'Burst', 'Crit'],
    [
      'Crowbar',
      "Runald's Band",
      "Kjaro's Band",
      'Laser Scope',
      "Lens-Maker's Glasses",
      'Armor-Piercing Rounds',
    ],
  ],
  [
    'void-fiend',
    'Void Fiend',
    1,
    'Corruption / On-hit',
    ['Ranged', 'On-hit'],
    ["Lens-Maker's Glasses", "Soldier's Syringe", 'Polylute', 'Plasma Shrimp'],
  ],
  [
    'seeker',
    'Seeker',
    2,
    'Sustained damage / Barrier',
    ['Sustain', 'Utility'],
    ['Backup Magazine', 'Focus Crystal', 'AtG Missile Mk. 1', 'Ukulele'],
  ],
  [
    'false-son',
    'False Son',
    2,
    'Health scaling / Sustain',
    ['Melee', 'Sustain'],
    ['Bison Steak', 'Infusion', "Runald's Band", "Kjaro's Band"],
  ],
  [
    'chef',
    'CHEF',
    2,
    'Burn / Close range',
    ['Melee', 'Damage over time'],
    ['Ignition Tank', 'Gasoline', 'Focus Crystal', 'Backup Magazine', "Paul's Goat Hoof"],
  ],
  [
    'operator',
    'Operator',
    3,
    'Drone support / Utility',
    ['Ranged', 'Utility'],
    ['Spare Drone Parts', 'Box of Dynamite', 'Empathy Cores', "Paul's Goat Hoof"],
  ],
  [
    'drifter',
    'Drifter',
    3,
    'Junk generation / Mobility',
    ['Utility', 'Mobility'],
    ["Collector's Compulsion", "Soldier's Syringe", 'Focus Crystal', "Kjaro's Band"],
  ],
  [
    'enforcer',
    'Enforcer',
    4,
    'Defense / Sustained damage',
    ['Ranged', 'Sustain'],
    ["Soldier's Syringe", 'AtG Missile Mk. 1', 'Ukulele', 'Hopoo Feather'],
  ],
];
const tiers: Record<string, Record<Tier, string[]>> = {
  railgunner: {
    'Core Items': [
      'Crowbar',
      'Runald’s Band',
      'Kjaro’s Band',
      'Laser Scope',
      'Lens-Maker’s Glasses',
      'Armor-Piercing Rounds',
    ],
    Best: [
      'AtG Missile Mk. 1',
      'Will-o’-the-wisp',
      'Shatterspleen',
      'Hopoo Feather',
      'Paul’s Goat Hoof',
      'Energy Drink',
    ],
    Okay: [
      'Soldier’s Syringe',
      'Predatory Instincts',
      'Backup Magazine',
      'Ukulele',
      'Tougher Times',
      'Luminous Shot',
    ],
    'Not Good': [
      'Bustling Fungus',
      'Leeching Seed',
      'Focus Crystal',
      'Hooks of Heresy',
      'Essence of Heresy',
      'Warbanner',
    ],
  },
  loader: {
    'Core Items': [
      'Crowbar',
      'Runald’s Band',
      'Kjaro’s Band',
      'Focus Crystal',
      'Hardlight Afterburner',
      'Backup Magazine',
    ],
    Best: [
      'Hopoo Feather',
      'Paul’s Goat Hoof',
      'Wax Quail',
      'Energy Drink',
      'AtG Missile Mk. 1',
      'Shattering Justice',
    ],
    Okay: [
      'Tougher Times',
      'Safer Spaces',
      'Predatory Instincts',
      'Ukulele',
      'Armor-Piercing Rounds',
      'Mocha',
    ],
    'Not Good': [
      'Bustling Fungus',
      'Leeching Seed',
      'Warbanner',
      'Squid Polyp',
      'Soldier’s Syringe',
      'Focused Convergence',
    ],
  },
  captain: {
    'Core Items': [
      'Tri-Tip Dagger',
      'AtG Missile Mk. 1',
      'Ukulele',
      'Soldier’s Syringe',
      'Lens-Maker’s Glasses',
      'Shatterspleen',
    ],
    Best: [
      'Crowbar',
      'Predatory Instincts',
      'Plasma Shrimp',
      'Hopoo Feather',
      'Paul’s Goat Hoof',
      '57 Leaf Clover',
    ],
    Okay: [
      'Backup Magazine',
      'Will-o’-the-wisp',
      'Tougher Times',
      'Energy Drink',
      'Mocha',
      'Armor-Piercing Rounds',
    ],
    'Not Good': [
      'Bustling Fungus',
      'Focus Crystal',
      'Leeching Seed',
      'Warbanner',
      'Squid Polyp',
      'Essence of Heresy',
    ],
  },
};
// Each generated guide has its own editable index; existing supplied indexes take precedence.
const generatedTierFiles = import.meta.glob('./tier-guides/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Record<Tier, string[]>>;
for (const [path, guide] of Object.entries(generatedTierFiles)) {
  const id = path.split('/').pop()!.replace('.json', '');
  if (!tiers[id]) tiers[id] = guide;
}
export const survivors: Survivor[] = rows.map(([id, name, group, style, tags, items]) => ({
  id,
  name,
  dlc: dlcs[group],
  style,
  tags,
  items: tiers[id] ? Object.values(tiers[id]).flat() : items,
  tiers: tiers[id],
  image: asset(`survivors/${id}.png`),
  tierImage: asset(`tier-guides/${id}.png`),
}));
