"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
  onClick?: (player: string) => void;
}

export const AvatarCircles = ({
  className,
  avatarUrls,
  onClick,
}: AvatarCirclesProps) => {
  return (
    <div
      className={cn(
        "z-10 flex -space-x-4 rtl:space-x-reverse ml-20",
        className
      )}
    >
      {avatarUrls.map((url, index) => (
        <button
          key={index}
          onClick={
            onClick ? () => onClick(avatarUrls[index].profileUrl) : undefined
          }
          className="group relative hover:cursor-pointer"
        >
          <Image
            key={index}
            className="h-7 w-7 sm:h-10 sm:w-10 lg:h-14 lg:w-14 rounded-full border bg-val-black border-white dark:border-gray-800"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
          <div
            className={cn(
              "group-hover:flex hidden text-white border border-val-white rounded-md py-1 px-2 text-xs absolute -top-10 left-0"
            )}
          >
            <p>{avatarUrls[index].profileUrl}</p>
          </div>
        </button>
      ))}
    </div>
  );
};
