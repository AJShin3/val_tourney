"use client";
import { team } from "@/types";
import Image from "next/image";
import TeamName from "./team_name";
import { AvatarCircles } from "../magicui/avatar-circles";

type TeamGraphicProps = {
  team: team;
  handleAvatarClick: (player: string) => void;
};

export default function TeamGraphic({
  team,
  handleAvatarClick,
}: TeamGraphicProps) {
  const avatars = team.players
    .filter((player) => player)
    .map((player) => ({
      imageUrl: `/avatars/${team.short_name}/${player.toLowerCase()}.png`,
      profileUrl: player,
    }));

  return (
    <div className="flex flex-row items-center relative w-full h-32 md:h-48 border-white border overflow-hidden">
      <Image
        src={`/team_logos/${team.short_name.toLowerCase()}.png`}
        height={48}
        width={48}
        alt={`${team.name} logo`}
        className="absolute -left-12 md:-left-12 -top5 object-contain w-32 md:w-38 h-32 md:h-48"
      />
      <TeamName team={team} />
      <div className="absolute right-42 bottom-4 sm:right-94 md:right-48 md:bottom-auto">
        <AvatarCircles
          numPeople={0}
          avatarUrls={avatars}
          onClick={handleAvatarClick}
        />
      </div>
      <div className="absolute right-16 sm:right-32 md:right-16 text-xl sm:text-3xl md:text-6xl font-bold md:bottom-auto text-white">
        <h3>#{team.rank}</h3>
      </div>
    </div>
  );
}
