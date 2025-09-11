import { Rajdhani_Font } from "@/app/fonts";
import { AuroraText } from "../magicui/aurora-text";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <div className="flex flex-col gap-y-4 max-w-lg md:max-w-xl">
      <AuroraText
        className={`font-bold mb-3 text-3xl md:text-5xl ${Rajdhani_Font.className}`}
      >
        CHAMPIONS PARIS STATS
      </AuroraText>
      <p className="text-val-white/70 text-sm">
        this website is a fan made project by a few members of the Valorant
        community. the goal was to provide a more interesting and interactive
        “pre-tournament” champs graphic than the one offs commonly seen on
        X/Twitter. all team name are clickable and will provide a number of team
        stats. additionally, all player images are clickable and summarize a
        players stats from the 2025 Franchise Season.
      </p>
      <p className="text-val-white/70 text-sm">
        if you have any requests or something looks broken, feel free to reach
        out to us on x/twitter. (or for the more technically inclined, make a pr
        on our github ({`-->`}). and yes, all data is stored in local. there
        isnt that much and it makes it incredibly fast).
      </p>
      <div className="flex flex-row justify-between mt-3 items-center">
        <p className="text-val-white font-bold text-2xl">enjoy the stats.</p>
        <Image
          src={"/champs_logo.png"}
          width={64}
          height={0}
          className=""
          alt="champions logo"
        />
      </div>
    </div>
  );
}
