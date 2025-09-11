"use client";
import { useEffect, useState } from "react";
import { team } from "@/types";
import { Rajdhani_Font } from "@/app/fonts";

type TeamGraphicProps = {
  team: team;
};

export default function TeamName({ team }: TeamGraphicProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  // --- Countdown logic ---
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(team.timeOfMatch).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("Match started!");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h:${minutes}m:${seconds}s`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 50);

    return () => clearInterval(timer);
  }, [team.timeOfMatch]);

  const getFontSize = (nameLength: number) => {
    if (nameLength <= 8) return "text-2xl sm:text-4xl lg:text-7xl";
    if (nameLength <= 12) return "text-xl sm:text-3xl lg:text-6xl";
    if (nameLength <= 16) return "text-lg sm:text-2xl lg:text-5xl";
    return "text-4xl md:text-3xl";
  };

  const fontSizeClass = getFontSize(team.name.length);

  return (
    <div className="flex flex-col leading-4 w-fit ml-24 mb-10 md:mb-0 md:ml-48">
      <div className="flex flex-row text-xs md:text-base justify-between text-val-white">
        <p className="text-val-white/60">[{timeLeft}]</p>
        <p>&nbsp;vs&nbsp;{team.opponent}</p>{" "}
        {/* Add space between the two texts, doing normal spaces broken in some cases. DO NOT CHANGE*/}
      </div>
      <h2
        className={`text-val-white font-semibold ${Rajdhani_Font.className} ${fontSizeClass}`}
      >
        {team.name}
      </h2>
    </div>
  );
}
