"use client";
import React, { JSX, useEffect, useState } from "react";
import { players } from "@/data";
import { FireSimpleIcon, CubeIcon } from "@phosphor-icons/react";

type StatKey = "cl" | "kd" | "acs" | "adr" | "fk";

type Player = {
  ign: string;
  team?: string;
  role?: string;
  acs?: number;
  kd?: number;
  cl?: string;
  adr?: number;
  fk?: number;
};

type PlayerOneStatProps = {
  stat_name: StatKey;
  stat_value?: string | number;
  player_name?: string;
  visible_stat_name?: string;
};

function parseStat(p: Player, key: StatKey): number {
  const raw = p[key];
  if (raw == null) return -Infinity;
  if (key === "cl") {
    const cleaned = String(raw).replace("%", "").trim();
    const n = parseFloat(cleaned);
    return Number.isFinite(n) ? n : -Infinity;
  }
  const n = Number(raw);
  return Number.isFinite(n) ? n : -Infinity;
}

export default function PlayerOneStat({
  stat_name,
  stat_value,
  player_name,
  visible_stat_name,
}: PlayerOneStatProps) {
  const [rank, setRank] = useState<number | null>(null);

  useEffect(() => {
    if (!player_name) return;

    const allowed: StatKey[] = ["cl", "kd", "acs", "adr", "fk"];
    if (!allowed.includes(stat_name)) {
      console.warn(`Unsupported stat_name: ${stat_name}`);
      return;
    }

    const sorted = [...players].sort(
      (a: Player, b: Player) =>
        parseStat(b, stat_name) - parseStat(a, stat_name)
    );

    const index = sorted.findIndex((p: Player) => p.ign === player_name);
    setRank(index + 1);
  }, [stat_name, player_name]);

  let icon: JSX.Element | null = null;
  if (rank !== null) {
    if (rank <= 10) {
      icon = (
        <div className="absolute -top-12 -right-12 w-24 h-24 flex items-center justify-center">
          <svg
            viewBox="0 0 350 350"
            className="w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="fireGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#dc2626" /> {/* red-600 */}
                <stop offset="100%" stopColor="#facc15" /> {/* yellow-400 */}
              </linearGradient>
            </defs>
            <FireSimpleIcon
              size={350}
              weight="fill"
              color="url(#fireGradient)"
              className="rotate-12"
            />
          </svg>
          <span className="absolute text-xl mr-4 mt-4 font-bold text-white">
            #{rank}
          </span>
        </div>
      );
    } else if (rank > players.length - 10) {
      icon = (
        <div className="absolute -top-12 -right-12 w-24 h-24 flex items-center justify-center">
          <svg
            viewBox="0 0 350 350"
            className="w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="iceGradient"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#2563eb" /> {/* blue-600 */}
                <stop offset="100%" stopColor="#67e8f9" /> {/* cyan-300 */}
              </linearGradient>
            </defs>
            <CubeIcon size={350} weight="fill" color="url(#iceGradient)" />
          </svg>
          <span className="absolute text-xl mt-2 font-bold text-white">
            #{rank}
          </span>
        </div>
      );
    }
  }

  return (
    <div className="relative w-[80vw] md:w-9/10 h-16 md:h-20 border border-white bg-val-black flex flex-row justify-between px-16 items-center">
      <p className="text-val-white text-sm md:text-xl font-medium">
        {visible_stat_name}
      </p>
      <p className="text-val-white text-2xl md:text-4xl font-semibold">
        {stat_value}
      </p>
      {icon}
    </div>
  );
}
