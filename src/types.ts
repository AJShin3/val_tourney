export type player = {
  ign: string;
  team: string;
  role: string;
  acs: number;
  kd: number;
  cl: string;
  adr: number;
  fk: number;
};

export type team = {
  name: string;
  players: string[];
  region: string;
};
