// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Effect = {
  effect: string;
  value: number;
};

export const effects = [
  {
    effect: "Invisibility",
    value: 357,
  },
  {
    effect: "Paralysis",
    value: 337,
  },
  {
    effect: "Damage Magicka Regen",
    value: 304,
  },
  {
    effect: "Slow",
    value: 284,
  },
  {
    effect: "Fortify Carry Weight",
    value: 238,
  },
  {
    effect: "Regenerate Health",
    value: 203,
  },
  {
    effect: "Regenerate Magicka",
    value: 203,
  },
  {
    effect: "Regenerate Stamina",
    value: 203,
  },
  {
    effect: "Fortify Block",
    value: 195,
  },
  {
    effect: "Damage Stamina Regen",
    value: 182,
  },
  {
    effect: "Fortify Destruction",
    value: 173,
  },
  {
    effect: "Fear",
    value: 142,
  },
  {
    effect: "Fortify Marksman",
    value: 134,
  },
  {
    effect: "Fortify One-Handed",
    value: 134,
  },
  {
    effect: "Fortify Pickpocket",
    value: 134,
  },
  {
    effect: "Fortify Restoration",
    value: 134,
  },
  {
    effect: "Fortify Sneak",
    value: 134,
  },
  {
    effect: "Fortify Two-handed",
    value: 134,
  },
  {
    effect: "Resist Poison",
    value: 134,
  },
  {
    effect: "Frenzy",
    value: 127,
  },
  {
    effect: "Waterbreathing",
    value: 115,
  },
  {
    effect: "Fortify Illusion",
    value: 107,
  },
  {
    effect: "Lingering Damage Health",
    value: 102,
  },
  {
    effect: "Resist Fire",
    value: 96,
  },
  {
    effect: "Resist Frost",
    value: 96,
  },
  {
    effect: "Resist Shock",
    value: 96,
  },
  {
    effect: "Fortify Health",
    value: 94,
  },
  {
    effect: "Fortify Smithing",
    value: 94,
  },
  {
    effect: "Fortify Conjuration",
    value: 86,
  },
  {
    effect: "Lingering Damage Magicka",
    value: 85,
  },
  {
    effect: "Fortify Magicka",
    value: 80,
  },
  {
    effect: "Fortify Stamina",
    value: 80,
  },
  {
    effect: "Weakness to Shock",
    value: 63,
  },
  {
    effect: "Resist Magic",
    value: 61,
  },
  {
    effect: "Fortify Heavy Armor",
    value: 60,
  },
  {
    effect: "Fortify Light Armor",
    value: 60,
  },
  {
    effect: "Damage Magicka",
    value: 59,
  },
  {
    effect: "Ravage Stamina",
    value: 57,
  },
  {
    effect: "Fortify Barter",
    value: 56,
  },
  {
    effect: "Weakness to Magic",
    value: 56,
  },
  {
    effect: "Weakness to Poison",
    value: 56,
  },
  {
    effect: "Weakness to Fire",
    value: 54,
  },
  {
    effect: "Fortify Alteration",
    value: 53,
  },
  {
    effect: "Damage Stamina",
    value: 48,
  },
  {
    effect: "Weakness to Frost",
    value: 45,
  },
  {
    effect: "Ravage Health",
    value: 35,
  },
  {
    effect: "Restore Magicka",
    value: 29,
  },
  {
    effect: "Restore Stamina",
    value: 29,
  },
  {
    effect: "Fortify Lockpicking",
    value: 28,
  },
  {
    effect: "Restore Health",
    value: 25,
  },
  {
    effect: "Cure Disease",
    value: 24,
  },
  {
    effect: "Fortify Enchanting",
    value: 17,
  },
  {
    effect: "Ravage Magicka",
    value: 16,
  },
  {
    effect: "Lingering Damage Stamina",
    value: 15,
  },
  {
    effect: "Damage Health",
    value: 6,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Effect[]>
) {
  res.status(200).json(effects);
}
