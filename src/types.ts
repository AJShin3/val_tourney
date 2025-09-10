export type match = {
  team1: string;
  team2: string;
};

export type player = {
  ign: string;
  team: string;
  country: string;
  matches: match[];
};

export type team = {
  name: string;
  players: player;
  region: string;
};
