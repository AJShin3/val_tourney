import { ArrowLeftIcon } from "@phosphor-icons/react";
import { players, team_data } from "@/data";
import Image from "next/image";
import { Rajdhani_Font } from "@/app/fonts";

type PlayerStatProps = {
  currPlayer: string;
  handleAvatarClose: () => void;
};

export default function PlayerStat(playerProps: PlayerStatProps) {
  const playerData = players.find((p) => p.ign === playerProps.currPlayer);

  const teamInfo = team_data.find(
    (t) => t.name.toLowerCase() === playerData?.team.toLowerCase()
  );

  return (
    <div className="fixed inset-0 max-w-5xl mx-auto p-4 z-50 flex justify-center text-white text-3xl font-bold bg-gradient-to-b from-val-black/92 via-val-black/97 to-val-black">
      <button
        onClick={playerProps.handleAvatarClose}
        className="hover:cursor-pointer flex items-center justify-center h-10 w-10 absolute top-6 left-6 text-val-white hover:text-val-white/50 rounded-full border border-white hover:border-val-white/50 transition duration-150"
      >
        <ArrowLeftIcon size={16} weight="bold" />
      </button>
      <div className="w-full h-fit mt-20 md:mt-32">
        {playerData && teamInfo && (
          <div className="relative flex flex-row px-4">
            <Image
              src={`/team_logos/${teamInfo.short_name.toLowerCase()}.png`}
              alt={`${playerData.team} logo`}
              width={350}
              height={350}
              className="z-10 opacity-40 h-40 w-40 md:h-64 md:w-64"
            />
            <Image
              src={`/avatars/${teamInfo.short_name.toLowerCase()}/${
                playerData.ign
              }.png`}
              alt={`${playerData.ign} avatar`}
              width={250}
              height={250}
              className="rounded-full absolute z-50 h-40 w-40 md:h-64 md:w-64"
            />
            <div
              className={`flex flex-col text-3xl md:text-8xl ml-auto gap-y-2 ${Rajdhani_Font.className} text-right`}
            >
              <h2>{playerData.ign}</h2>
              <h3 className="opacity-60 text-xl font-semibold leading-0 md:text-3xl">
                {playerData.role}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
