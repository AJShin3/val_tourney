"use client";
import SiteHeader from "@/components/ui/site_header";
import LegalAndCreds from "@/components/ui/legal_and_creds";
import TeamGraphic from "@/components/ui/team_graphic";
import { team_data } from "@/data";
import PlayerStat from "@/components/ui/player_stat";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { InfoIcon } from "@phosphor-icons/react";
type SortOption = "name" | "time" | "rank";

export default function Home() {
  const [currPlayer, setCurrPlayer] = useState<string | null>(null);
  const handleAvatarClick = (player: string) => {
    setCurrPlayer(player);
  };

  const handleAvatarClose = () => {
    setCurrPlayer(null);
  };

  const [sortBy, setSortBy] = useState<SortOption>("rank");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const sortedTeams = [...team_data].sort((a, b) => {
    if (sortBy === "rank") {
      return Number(a.rank) - Number(b.rank);
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "time") {
      return (
        new Date(a.timeOfMatch).getTime() - new Date(b.timeOfMatch).getTime()
      );
    }
    return 0;
  });

  const regions = ["EMEA", "NA", "APAC", "CHINA", "SA"];

  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  const filteredTeams =
    selectedRegions.length > 0
      ? sortedTeams.filter((team) => selectedRegions.includes(team.region))
      : sortedTeams;

  return (
    <div className="relative flex flex-col gap-y-4 w-full max-w-5xl mx-auto p-4 my-10">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <SiteHeader />
        <LegalAndCreds />
      </div>
      <div className="my-10 flex flex-col md:flex-row justify-between items-center gap-y-3">
        <div className="md:flex md:flex-row grid grid-cols-3 gap-y-4 w-full gap-x-6">
          {regions.map((region) => {
            const isSelected = selectedRegions.includes(region);

            return (
              <button
                key={region}
                onClick={() => toggleRegion(region)}
                className="focus:outline-none"
              >
                {(region === "NA" || region === "SA") && (
                  <div className="place-self-end items-start text-start group relative hover:cursor-pointer">
                    <InfoIcon size={16} className="text-val-white/30" />
                    <p
                      className={cn(
                        "group-hover:flex hidden z-50 duration-150 transition text-white border border-val-white rounded-md py-2 px-4 text-xs absolute -top-20 left-0 w-[420px] bg-val-black"
                      )}
                    >
                      You might be wondering why Americas is split, and
                      it&apos;s really simple: <br />
                      1) The continents looked better separated in the UI
                      <br />
                      2) I&apos;m a biased American and want to be able to sort
                      by NA teams
                    </p>
                  </div>
                )}
                {region === "APAC" && (
                  <div className="place-self-end items-start text-start group relative hover:cursor-pointer">
                    <InfoIcon size={16} className="text-val-white/30" />
                    <p
                      className={cn(
                        "group-hover:flex hidden z-50 duration-150 transition text-white border border-val-white rounded-md py-2 px-4 text-xs absolute -top-20 left-0 w-[420px] bg-val-black"
                      )}
                    >
                      You might also be wondering why China is in the APAC
                      image... and thats also very simple. for the life of me, I
                      couldnt find an outline without China but with India, so
                      we went with both. If someone makes one or finds one,
                      happy to replace.
                    </p>
                  </div>
                )}
                <Image
                  src={`/regions/${region}.png`}
                  width={96}
                  height={96}
                  alt={`${region} outline for filtering`}
                  className={`transition-opacity h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 ${
                    isSelected ? "opacity-100" : "opacity-20"
                  }`}
                />
              </button>
            );
          })}
        </div>
        <div className="flex flex-col max-w-fit items-end text-lg leading-6 text-right">
          <button
            className={`${
              sortBy === "name" ? "text-val-white" : "text-val-white/70"
            }`}
            onClick={() => setSortBy("name")}
          >
            alphabetical
          </button>
          <button
            className={`${
              sortBy === "time"
                ? "text-val-white min-w-fit w-30"
                : "text-val-white/70 w-30"
            }`}
            onClick={() => setSortBy("time")}
          >
            time to match
          </button>
          <button
            className={` ${
              sortBy === "rank" ? "text-val-white" : "text-val-white/70"
            }`}
            onClick={() => setSortBy("rank")}
          >
            rank
          </button>
        </div>
      </div>
      {filteredTeams.map((team) => (
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
