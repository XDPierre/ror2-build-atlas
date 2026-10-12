import itemRarities from './item-rarities.json';

type ItemRarity = { rarity: string; color: string };
const rarityIndex: Record<string, ItemRarity> = itemRarities;

export const itemRarity = (name: string) => rarityIndex[name.replaceAll('’', "'")];
