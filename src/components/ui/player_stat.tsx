import { ArrowLeftIcon } from "@phosphor-icons/react";
import { players, team_data } from "@/data";
import Image from "next/image";

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
        className="hover:cursor-pointer flex items-center justify-center h-10 w-10 absolute top-4 left-4 text-val-white hover:text-val-white/50 rounded-full border border-white hover:border-val-white/50 transition duration-150"
      >
        <ArrowLeftIcon size={16} weight="bold" />
      </button>
      <div className="w-full h-fit p-4 md:p-20 mt-20">
        {playerData && teamInfo && (
          <div className="">
            <Image
              src={`/avatars/${teamInfo.short_name.toLowerCase()}/${
                playerData.ign
              }.png`}
              alt={`${playerData.ign} avatar`}
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
    </div>
  );
}
