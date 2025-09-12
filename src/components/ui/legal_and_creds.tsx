import Image from "next/image";
import People from "@/components/ui/people";

export default function LegalAndCreds() {
  return (
    <div className="flex flex-col mt-8 md:mt-0 md:items-end">
      <div className="flex flex-row gap-x-4 items-center max-h-fit">
        <div className="md:text-right text-val-white text-xs flex flex-col max-w-60">
          <p className="text-sm font-bold">CHAMPIONS PARIS STATS</p>
          <p className="text-val-white/70">
            was created under Riot Games `Legal Jibber Jabber` policy using
            assets owned by Riot Games. Riot Games does not endorse or sponsor
            this project.
          </p>
        </div>
        <Image
          src={"/eiffel_tower.png"}
          width={64}
          height={0}
          className="opacity-70 hidden md:flex"
          alt="eiffel tower asset"
        />
      </div>
      <div className="flex flex-col gap-y-2 text-val-white text-xs mt-12 mb-1">
        <div className="flex flex-row mb-1">
          <p>made with {`<3`} by members of val community</p>{" "}
        </div>
      </div>
      <People
        title={"dev - voxize"}
        link={"https://x.com/VoxizeVAL"}
        link2={"https://github.com/BrendanKeaton"}
      />
      <People title={"design - zoestol"} link={"https://x.com/zoestol"} />
      <People title={"stats - smit"} link={"https://x.com/__Smit"} />
      <People title={"dev - andrew"} link2={"https://github.com/AJShin3"} />
    </div>
  );
}
