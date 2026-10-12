export type Ability = { name: string; summary: string; cooldown?: string; note?: string };
export type AbilitySlot = { role: string; choices: Ability[] };
export type SurvivorLoadout = { context: string; slots: AbilitySlot[] };

export const survivorLoadouts: Record<string, SurvivorLoadout> = {
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
