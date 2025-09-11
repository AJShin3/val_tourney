"use client";
import { useEffect, useState } from "react";
import { team } from "@/types";
import { Rajdhani_Font } from "@/app/fonts";

type TeamGraphicProps = {
  team: team;
};

export default function TeamName({ team }: TeamGraphicProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

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

  return (
    <div className="flex flex-col leading-4 w-fit ml-48">
      <div className="flex flex-row justify-between text-val-white">
        <p className="text-val-white/60">[{timeLeft}]</p>
        <p>vs {team.opponent}</p>
      </div>
      <h2
        className={`text-val-white text-7xl font-semibold ${Rajdhani_Font.className}`}
      >
        {team.name}
      </h2>
    </div>
  );
}
