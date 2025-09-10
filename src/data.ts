import { player } from "./types";
import { match } from "./types";
import { team } from "./types";

export const player_data: player[] = [
  {
    ign: "Boaster",
    team: "Fnatic",
    country: "UK",
    matches: [
      {
        team1: "Fnatic",
        team2: "G2",
      },
    ],
  },
  {
    ign: "Alfajer",
    team: "Fnatic",
    country: "0x184910",
    matches: [
      {
        team1: "Fnatic",
        team2: "G2",
      },
    ],
  },
];

export const team_data: team[] = [
  {
    name: "Sentinels",
    region: "Americas",
    players: ["bang", "johnqt", "n4rrate", "zekkn", "zellsis"],
  },
  {
    name: "BLG",
    region: "China",
    players: ["knight", "levius", "nephh", "rushia", "whzy"],
  },
  {
    name: "DRG",
    region: "China",
    players: ["akeman", "flex1n", "nicc", "spiritz1", "vo0kashu"],
  },
  {
    name: "DRX",
    region: "Pacific",
    players: ["estrella", "flashback", "free1ng", "hyumin", "MaKo"],
  },
  {
    name: "EDG",
    region: "China",
    players: ["chichoo", "jieni7", "nobody", "smoggy", "zmjkk"],
  },
  {
    name: "FNC",
    region: "EMEA",
    players: ["alfajer", "boaster", "chronicle", "crashies", "kaajak"],
  },
  {
    name: "G2",
    region: "Americas",
    players: ["Jawgemo", "JonahP", "Leaf", "Trent", "Valyn"],
  },
  {
    name: "GIANTX",
    region: "EMEA",
    players: ["ara", "cloud", "flickless", "grubinho", "westside"],
  },
  {
    name: "MIBR",
    region: "Americas",
    players: ["Artzin", "aspas", "cortezia", "verno", "xenom"],
  },
  {
    name: "NRG",
    region: "Americas",
    players: ["Brawk", "Ethan", "Mada", "s0m", "skuba"],
  },
  {
    name: "PRX",
    region: "Pacific",
    players: ["d4v41", "f0rsaken", "jinggg", "patmen", "something"],
  },
  {
    name: "RRQ",
    region: "Pacific",
    players: ["crazyguy", "jemkin", "kushy", "monyet", "xffero"],
  },
  {
    name: "T1",
    region: "Pacific",
    players: ["BuZz", "DH", "iZu", "meteor", "stax"],
  },
  {
    name: "TH",
    region: "EMEA",
    players: ["ara", "cloud", "flickless", "grubinho", "westside"],
  },
  {
    name: "TL",
    region: "EMEA",
    players: ["kamo", "keiko", "nAts", "paTiTek", "trexx"],
  },
  {
    name: "XLG",
    region: "China",
    players: ["coconut", "happywei", "NoMan", "rarga", "Viva"],
  },
];
