import { bsfMonsterLocations } from "./BSFMonsterLocations";

export const listActions = [
  "Essence of the Platebearer",
  "Essence of the Skirmisher",
  "Lost Cure II",
  "Resistance Potion",
  "Resistance Medikit",
  "Lost Slash"
];

export const actions = [
  {
    ActionName: "Essence of the Platebearer",
    Fragment: "Skill"
  },
  {
    ActionName: "Essence of the Skirmisher",
    Fragment: "Awakening"
  },
  {
    ActionName: "Lost Cure II",
    Fragment: "Compassion"
  },
  {
    ActionName: "Resistance Potion",
    Fragment: "Preparation"
  },
  {
    ActionName: "Resistance Medikit",
    Fragment: "Care"
  },
  {
    ActionName: "Lost Slash",
    Fragment: "Violence"
  },
];

const bsfResolveCEs = []

export const fragments = {
  Skill: { Zones: ["BSF"], BSF: [bsfMonsterLocations.Zone1.Normal] },
  Awakening: { Zones: ["BSF"], BSF: [bsfMonsterLocations.Zone2.Normal] },
  Compassion: { Zones: ["BSF"], BSF: [bsfMonsterLocations.Zone3.Normal] },
  Care: { Zones: ["BSF"], BSF: [bsfMonsterLocations.Zone2.Ashkin, bsfMonsterLocations.Zone2.Sprites] },
  Caution: { Zones: ["BSF", "Quartermaster"], BSF: [bsfMonsterLocations.Zone1.Sprites] },
  Support: { Zones: ["BSF"], BSF: [bsfMonsterLocations.Zone3.Sprites] },
  Violence: { Zones: ["BSF"], BSF: [bsfMonsterLocations.Zone3.Ashkin, bsfMonsterLocations.Zone3.Star] },
  Preparation: { Zones: ["BSF"], BSF: [bsfMonsterLocations.Zone1.Ashkin, bsfMonsterLocations.Zone1.Sprites] },
  Ingenuity: { Zones: ["BSF", "Quartermaster"], BSF: [bsfMonsterLocations.Zone2.Star] },
  Resolve: { Zones: ["BSF"], BSF: [bsfResolveCEs] },
};
