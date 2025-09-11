import { ArrowLeftIcon } from "@phosphor-icons/react";

type PlayerStatProps = {
  currPlayer: string;
  handleAvatarClose: () => void;
};

export default function PlayerStat(playerProps: PlayerStatProps) {
  return (
    <div className="text-white text-3xl font-bold z-50 bg-gradient-to-b from-val-black/90 via-val-black/95 to-val-black w-full h-full backdrop-blur-xs absolute">
      <button
        onClick={playerProps.handleAvatarClose}
        className="hover:cursor-pointer flex items-center justify-center h-10 w-10 absolute top-4 left-4 text-val-white hover:text-val-white/50 rounded-full border border-white hover:border-val-white/50 transition duration-150"
      >
        <ArrowLeftIcon size={16} weight="bold" />
      </button>
    </div>
  );
}
