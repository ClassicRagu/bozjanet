import { bsfMonsterLocations } from "./BSFMonsterLocations";
import { zadnorMonsterLocations } from "./ZadnorMonsterLocations";

export const listActions = [
  "Banner of Firm Resolve",
  "Banner of Honed Acuity",
  "Banner of Honored Sacrifice",
  "Banner of Noble Ends",
  "Banner of Solemn Clarity",
  "Banner of Tireless Conviction",
  "Deep Essence of the Aetherweaver",
  "Deep Essence of the Beast",
  "Deep Essence of the Bloodsucker",
  "Deep Essence of the Breathtaker",
  "Deep Essence of the Guardian",
  "Deep Essence of the Irregular",
  "Deep Essence of the Martialist",
  "Deep Essence of the Ordained",
  "Deep Essence of the Platebearer",
  "Deep Essence of the Profane",
  "Deep Essence of the Savior",
  "Deep Essence of the Skirmisher",
  "Deep Essence of the Templar",
  "Deep Essence of the Veteran",
  "Deep Essence of the Watcher",
  "Dynamis Dice",
  "Essence of the Aetherweaver",
  "Essence of the Beast",
  "Essence of the Bloodsucker",
  "Essence of the Breathtaker",
  "Essence of the Guardian",
  "Essence of the Irregular",
  "Essence of the Martialist",
  "Essence of the Ordained",
  "Essence of the Platebearer",
  "Essence of the Profane",
  "Essence of the Savior",
  "Essence of the Skirmisher",
  "Essence of the Templar",
  "Essence of the Veteran",
  "Essence of the Watcher",
  "Light Curtain",
  "Lodestone",
  "Lost Aethershield",
  "Lost Arise",
  "Lost Assassination",
  "Lost Banish III",
  "Lost Blood Rage",
  "Lost Bravery",
  "Lost Bubble",
  "Lost Burst",
  "Lost Chainspell",
  "Lost Cure",
  "Lost Cure II",
  "Lost Cure III",
  "Lost Cure IV",
  "Lost Death",
  "Lost Dervish",
  "Lost Dispel",
  "Lost Excellence",
  "Lost Fair Trade",
  "Lost Focus",
  "Lost Flare Star",
  "Lost Font of Magic",
  "Lost Font of Power",
  "Lost Font of Skill",
  "Lost Full Cure",
  "Lost Incense",
  "Lost Impetus",
  "Lost Manawall",
  "Lost Paralyze III",
  "Lost Perception",
  "Lost Protect",
  "Lost Protect II",
  "Lost Rampage",
  "Lost Reflect",
  "Lost Reraise",
  "Lost Rend Armor",
  "Lost Sacrifice",
  "Lost Seraph Strike",
  "Lost Shell",
  "Lost Shell II",
  "Lost Slash",
  "Lost Spellforge",
  "Lost Stealth",
  "Lost Steelsting",
  "Lost Stoneskin",
  "Lost Stoneskin II",
  "Lost Swift",
  "Mimic",
  "Pure Essence of the Divine",
  "Pure Essence of the Duelist",
  "Pure Essence of the Elder",
  "Pure Essence of the Fiendhunter",
  "Pure Essence of the Gambler",
  "Pure Essence of the Indomitable",
  "Resistance Elixir",
  "Resistance Ether Kit",
  "Resistance Medikit",
  "Resistance Phoenix",
  "Resistance Potion",
  "Resistance Potion Kit",
  "Resistance Reraiser",
];

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
  {
    ActionName: "Banner of Firm Resolve",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Honed Acuity",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Honored Sacrifice",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Noble Ends",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Solemn Clarity",
    Fragment: "Resolve",
  },
  {
    ActionName: "Banner of Tireless Conviction",
    Fragment: "Resolve",
  },
  {
    ActionName: "Deep Essence of the Aetherweaver",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Martialist",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Platebearer",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Savior",
    Fragment: "Mastery",
  },
  {
    ActionName: "Deep Essence of the Veteran",
    Fragment: "Mastery",
  },
  {
    ActionName: "Lost Font of Magic",
    Fragment: "Sagacity",
  },
  {
    ActionName: "Lost Font of Power",
    Fragment: "Sagacity",
  },
  {
    ActionName: "Lost Font of Skill",
    Fragment: "Sagacity",
  },
  {
    ActionName: "Essence of the Beast",
    Fragment: "Superstition",
  },
  {
    ActionName: "Essence of the Bloodsucker",
    Fragment: "Superstition",
  },
  {
    ActionName: "Essence of the Templar",
    Fragment: "Superstition",
  },
  {
    ActionName: "Deep Essence of the Beast",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Bloodsucker",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Templar",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Breathtaker",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Guardian",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Irregular",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Ordained",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Profane",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Skirmisher",
    Fragment: "Becoming",
  },
  {
    ActionName: "Deep Essence of the Watcher",
    Fragment: "Becoming",
  },
  {
    ActionName: "Dynamis Dice",
    Fragment: "Caprice",
  },
  {
    ActionName: "Lost Fair Trade",
    Fragment: "Caprice",
  },
  {
    ActionName: "Mimic",
    Fragment: "Caprice",
  },
  {
    ActionName: "Pure Essence of the Elder",
    Fragment: "Clarity",
  },
  {
    ActionName: "Lost Flare Star",
    Fragment: "Clarity",
  },
  {
    ActionName: "Pure Essence of the Duelist",
    Fragment: "Contention",
  },
  {
    ActionName: "Lost Rend Armor",
    Fragment: "Contention",
  },
  {
    ActionName: "Pure Essence of the Gambler",
    Fragment: "Deception",
  },
  {
    ActionName: "Pure Essence of the Divine",
    Fragment: "Divinity",
  },
  {
    ActionName: "Lost Seraph Strike",
    Fragment: "Divinity",
  },
  {
    ActionName: "Pure Essence of the Fiendhunter",
    Fragment: "Finesse",
  },
  {
    ActionName: "Lost Dervish",
    Fragment: "Finesse",
  },
  {
    ActionName: "Pure Essence of the Indomitable",
    Fragment: "Fortitude",
  },
  {
    ActionName: "Lost Aethershield",
    Fragment: "Fortitude",
  },
  {
    ActionName: "Lost Sacrifice",
    Fragment: "Loss",
  },
  {
    ActionName: "Lost Perception",
    Fragment: "Observation",
  },
  {
    ActionName: "Lost Rereaise",
    Fragment: "Hope",
  },
  {
    ActionName: "Light Curtain",
    Fragment: "Moonlight",
  },
  {
    ActionName: "Lost Stoneskin II",
    Fragment: "Rage",
  },
  {
    ActionName: "Lost Burst",
    Fragment: "Rage",
  },
  {
    ActionName: "Lost Rampage",
    Fragment: "Ferocity",
  },
  {
    ActionName: "Lost Protect II",
    Fragment: "Desperation",
  },
  {
    ActionName: "Lost Shell II",
    Fragment: "Desperation",
  },
  {
    ActionName: "Lost Bubble",
    Fragment: "Tenacity",
  },
  {
    ActionName: "Lodestone",
    Fragment: "History",
  },
  {
    ActionName: "Lost Impetus",
    Fragment: "Inspiration",
  },
  {
    ActionName: "Lost Chainspell",
    Fragment: "Artistry",
  },
  {
    ActionName: "Lost Assassination",
    Fragment: "Artistry",
  },
  {
    ActionName: "Resistance Elixir",
    Fragment: "Heroism",
  },
  {
    ActionName: "Lost Excellence",
    Fragment: "Heroism",
  },
  {
    ActionName: "Lost Blood Rage",
    Fragment: "Cunning",
  },
  {
    ActionName: "Lost Full Cure",
    Fragment: "Revelation",
  },
];

const bsfResolveCEs = [
  {
    Monster: "Trampled under Hoof",
    Level: "Critical Engagement",
    Location: [33.05, 9.51],
    radius: 3500,
  },
  {
    Monster: "Where Strode the Behemoth",
    Level: "Critical Engagement",
    Location: [33.32, 10.09],
    radius: 3500,
  },
  {
    Monster: "Metal Fox Chaos",
    Level: "Critical Engagement",
    Location: [33.145, 9.645],
    radius: 3500,
  },
];

const zadnorTenacityCEs = [
  {
    Monster: "Feeling the Burn",
    Level: "Critical Engagement",
    Location: [33.22, 9.77],
    radius: 3500,
  },
  {
    Monster: "Lean, Mean, Magitek Machines",
    Level: "Critical Engagement",
    Location: [33.42, 9.7],
    radius: 3500,
  },
  {
    Monster: "Looks to Die For",
    Level: "Critical Engagement",
    Location: [33.57, 9.8],
    radius: 3500,
  },
  {
    Monster: "Worn to a Shadow",
    Level: "Critical Engagement",
    Location: [33.675, 9.525],
    radius: 3500,
  },
];

export const quartermasterCoords = [32.6, 9.653];

export const fragmentList = [
  "Artistry",
    "Awakening",
    "Becoming",
    "Caprice",
    "Care",
    "Caution",
    "Clarity",
    "Compassion",
    "Contention",
    "Cunning",
    "Deception",
    "Desperation",
    "Divinity",
    "Ferocity",
    "Finesse",
    "Fortitude",
    "Heroism",
    "Hope",
    "History",
    "Ingenuity",
    "Inspiration",
    "Loss",
    "Mastery",
    "Moonlight",
    "Observation",
    "Preparation",
    "Rage",
    "Resolve",
    "Revelation",
    "Sagacity",
    "Skill",
    "Superstition",
    "Support",
    "Tenacity",
    "Transcendence",
    "Violence"
  ]

export const fragments = {
  Skill: { BSF: [bsfMonsterLocations.Zone1.Normal] },
  Awakening: { BSF: [bsfMonsterLocations.Zone2.Normal] },
  Compassion: { BSF: [bsfMonsterLocations.Zone3.Normal], Zadnor: [zadnorMonsterLocations.Zone3.Normal5] },
  Care: {
    BSF: [bsfMonsterLocations.Zone2.Ashkin, bsfMonsterLocations.Zone2.Sprites],
    Zadnor: [zadnorMonsterLocations.Zone2.Ashkin]
  },
  Caution: { Quartermaster: true, BSF: [bsfMonsterLocations.Zone1.Star] },
  Support: { BSF: [bsfMonsterLocations.Zone3.Sprites], Zadnor: [zadnorMonsterLocations.Zone3.Sprites] },
  Violence: {
    BSF: [bsfMonsterLocations.Zone3.Ashkin, bsfMonsterLocations.Zone3.Star],
  },
  Preparation: {
    BSF: [bsfMonsterLocations.Zone1.Ashkin, bsfMonsterLocations.Zone1.Sprites],
    Zadnor: [zadnorMonsterLocations.Zone1.Ashkin]
  },
  Ingenuity: { Quartermaster: true, BSF: [bsfMonsterLocations.Zone2.Star] },
  Resolve: { BSF: [bsfResolveCEs] },
  Mastery: { CLL: true },
  Sagacity: { CLL: true },
  Superstition: { CLL: true },
  Transcendence: { CLL: true },
  Becoming: { CLL: true },
  Caprice: { CLL: true },
  Clarity: {DR: true, Quartermaster: true},
  Contention: {DR: true, Quartermaster: true},
  Deception: {DRS: true},
  Divinity: {DR: true, Quartermaster: true},
  Finesse: {DR: true, Quartermaster: true},
  Fortitude: {DR: true, Quartermaster: true},
  Loss: {DR: true},
  Observation: {DR: true, Quartermaster: true},
  Hope: {Quartermaster: true},
  Moonlight: {Zadnor: [zadnorMonsterLocations.Zone2.Normal]},
  Rage: {Zadnor: [zadnorMonsterLocations.Zone1.NormalRage, zadnorMonsterLocations.Zone1.NormalBoth]},
  Ferocity: {Zadnor: [zadnorMonsterLocations.Zone1.NormalFerocity, zadnorMonsterLocations.Zone1.NormalBoth] },
  Desperation: {Zadnor: [zadnorMonsterLocations.Zone3.Normal]},
  Tenacity: {Zadnor: [zadnorTenacityCEs]},
  History: {Zadnor: [zadnorMonsterLocations.Zone1.Sprites, zadnorMonsterLocations.Zone1.Star]},
  Inspiration: {Zadnor: [zadnorMonsterLocations.Zone3.Ashkin, zadnorMonsterLocations.Zone3.Star]},
  Artistry: {Zadnor: [zadnorMonsterLocations.Zone2.Sprites, zadnorMonsterLocations.Zone2.Star]},
  Heroism: {Dal: true},
  Cunning: {Dal: true},
  Revelation: {Dal: true}
};
