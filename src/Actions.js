import { bsfMonsterLocations } from "./BSFMonsterLocations";

export const listActions = [
    "Essence of the Aetherweaver",
    "Essence of the Breathtaker",
    "Essence of the Guardian",
    "Essence of the Irregular",
    "Essence of the Martialist",
    "Essence of the Ordained",
    "Essence of the Platebearer",
    "Essence of the Profane",
    "Essence of the Savior",
    "Essence of the Skirmisher",
    "Essence of the Veteran",
    "Essence of the Watcher",
    "Lost Arise",
    "Lost Banish III",
    "Lost Bravery",
    "Lost Cure",
    "Lost Cure II",
    "Lost Cure III",
    "Lost Cure IV",
    "Lost Death",
    "Lost Dispel",
    "Lost Focus",
    "Lost Incense",
    "Lost Manawall",
    "Lost Paralyze III",
    "Lost Protect",
    "Lost Reflect",
    "Lost Shell",
    "Lost Slash",
    "Lost Spellforge",
    "Lost Stealth",
    "Lost Steelsting",
    "Lost Stoneskin",
    "Lost Swift",
    "Resistance Ether Kit",
    "Resistance Medikit",
    "Resistance Phoenix",
    "Resistance Potion",
    "Resistance Potion Kit",
    "Resistance Reraiser"
  ]

export const actions = [
  {
    ActionName: "Essence of the Aetherweaver",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Martialist",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Platebearer",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Savior",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Veteran",
    Fragment: "Skill",
  },
  {
    ActionName: "Essence of the Breathtaker",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Guardian",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Irregular",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Ordained",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Profane",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Skirmisher",
    Fragment: "Awakening",
  },
  {
    ActionName: "Essence of the Watcher",
    Fragment: "Awakening",
  },
  {
    ActionName: "Lost Arise",
    Fragment: "Compassion",
  },
  {
    ActionName: "Lost Cure II",
    Fragment: "Compassion",
  },
  {
    ActionName: "Lost Cure IV",
    Fragment: "Compassion",
  },
  {
    ActionName: "Resistance Medikit",
    Fragment: "Compassion",
  },
  {
    ActionName: "Resistance Ether Kit",
    Fragment: "Care",
  },
  {
    ActionName: "Resistance Potion Kit",
    Fragment: "Care",
  },
  {
    ActionName: "Resistance Reraiser",
    Fragment: "Care",
  },
  {
    ActionName: "Lost Cure",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Cure III",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Incense",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Manawall",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Protect",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Shell",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Stealth",
    Fragment: "Caution",
  },
  {
    ActionName: "Lost Bravery",
    Fragment: "Support",
  },
  {
    ActionName: "Lost Reflect",
    Fragment: "Support",
  },
  {
    ActionName: "Lost Stoneskin",
    Fragment: "Support",
  },
  {
    ActionName: "Lost Death",
    Fragment: "Violence",
  },
  {
    ActionName: "Lost Focus",
    Fragment: "Violence",
  },
  {
    ActionName: "Lost Slash",
    Fragment: "Violence",
  },
  {
    ActionName: "Resistance Phoenix",
    Fragment: "Preparation",
  },
  {
    ActionName: "Resistance Potion",
    Fragment: "Preparation",
  },
  {
    ActionName: "Lost Banish III",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Dispel",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Paralyze III",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Spellforge",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Steelsting",
    Fragment: "Ingenuity",
  },
  {
    ActionName: "Lost Swift",
    Fragment: "Ingenuity",
  },
]

const bsfResolveCEs = [];

export const quartermasterCoords = [32.6, 9.653];

export const fragments = {
  Skill: { BSF: [bsfMonsterLocations.Zone1.Normal] },
  Awakening: { BSF: [bsfMonsterLocations.Zone2.Normal] },
  Compassion: { BSF: [bsfMonsterLocations.Zone3.Normal] },
  Care: {
    BSF: [bsfMonsterLocations.Zone2.Ashkin, bsfMonsterLocations.Zone2.Sprites],
  },
  Caution: { Quartermaster: true, BSF: [bsfMonsterLocations.Zone1.Star] },
  Support: { BSF: [bsfMonsterLocations.Zone3.Sprites] },
  Violence: {
    BSF: [bsfMonsterLocations.Zone3.Ashkin, bsfMonsterLocations.Zone3.Star],
  },
  Preparation: {
    BSF: [bsfMonsterLocations.Zone1.Ashkin, bsfMonsterLocations.Zone1.Sprites],
  },
  Ingenuity: { Quartermaster: true, BSF: [bsfMonsterLocations.Zone2.Star] },
  Resolve: { BSF: [bsfResolveCEs] },
};
