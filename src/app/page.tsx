"use client";
import SiteHeader from "@/components/ui/site_header";
import LegalAndCreds from "@/components/ui/legal_and_creds";
import TeamGraphic from "@/components/ui/team_graphic";
import { team_data } from "@/data";
import PlayerStat from "@/components/ui/player_stat";
import { useState } from "react";

export default function Home() {
  const [currPlayer, setCurrPlayer] = useState<string | null>(null);
  const handleAvatarClick = (player: string) => {
    setCurrPlayer(player);
  };

  const handleAvatarClose = () => {
    setCurrPlayer(null);
  };

  return (
    <div className="relative flex flex-col gap-y-4 w-full max-w-5xl mx-auto p-4 my-10">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <SiteHeader />
        <LegalAndCreds />
      </div>
      <div className="my-10"></div>
      {team_data.map((team) => (
        <TeamGraphic
          key={team.name}
          team={team}
          handleAvatarClick={handleAvatarClick}
        />
      ))}
      {currPlayer && (
        <PlayerStat
          currPlayer={currPlayer}
          handleAvatarClose={handleAvatarClose}
        />
      )}
    </div>
  );
}
