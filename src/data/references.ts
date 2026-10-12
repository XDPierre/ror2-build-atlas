export const wiki = (page: string) =>
  `https://riskofrain2.wiki.gg/wiki/${encodeURIComponent(page.replaceAll(' ', '_'))}`;
export const uncertainItems = new Set(['Searsteed']);
export const itemWiki = (name: string) =>
  uncertainItems.has(name)
    ? `https://riskofrain2.wiki.gg/wiki/Special:Search?search=${encodeURIComponent(name)}`
    : wiki(name.replaceAll('’', "'"));
export const corrections = [
  {
    title: 'Armor-Piercing Rounds',
    text: 'Bonus damage applies to qualifying bosses. It does not generally increase damage against elites or bypass armor.',
    page: 'Armor-Piercing Rounds',
  },
  {
    title: 'Backup Magazine',
    text: 'Adds a charge to the secondary skill; it is not a general cooldown reduction item.',
    page: 'Backup Magazine',
  },
  {
    title: 'Runald’s & Kjaro’s Bands',
    text: 'Trigger from sufficiently high-damage hits and recharge over time. They are not random on-hit procs.',
    page: "Runald's Band",
  },
  {
    title: 'Will-o’-the-wisp',
    text: 'Triggers an area explosion on kill, rather than firing a homing projectile on hit.',
    page: "Will-o'-the-wisp",
  },
];
