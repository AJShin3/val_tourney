import SiteHeader from "@/components/ui/site_header";
import Image from "next/image";
import Link from "next/link";
import People from "@/components/ui/people";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 w-full max-w-5xl mx-auto p-4 my-10">
      <div className="flex flex-row justify-between w-full">
        <SiteHeader />
        <div className="flex flex-col items-end">
          <div className="flex flex-row gap-x-4 items-center max-h-fit">
            <div className="text-right text-val-white text-xs flex flex-col max-w-60">
              <p className="text-sm font-bold">CHAMPIONS PARIS STATS</p>
              <p className="text-val-white/70">
                was created under Riot Games `Legal Jibber Jabber` policy using
                assets owned by Riot Games. Riot Games does not endorse or
                sponsor this project.
              </p>
            </div>
            <Image
              src={"/eiffel_tower.png"}
              width={64}
              height={0}
              className="opacity-70"
              alt="eiffel tower asset"
            />
          </div>
          <div className="flex flex-col gap-y-2 text-val-white text-xs mt-12 mb-1">
            <div className="flex flex-row mb-1">
              <p>made with {`<3`} by members of</p>{" "}
              <Link
                className="underline ml-1"
                href={"https://www.mbxtechnologies.com"}
              >
                MBX Technologies
              </Link>
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
      </div>
    </div>
  );
}
