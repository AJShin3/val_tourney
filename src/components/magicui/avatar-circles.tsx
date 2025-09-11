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
}

export const AvatarCircles = ({
  className,
  avatarUrls,
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
          onClick={() => {
            console.log(`Avatar ${index + 1} clicked`);
          }}
        >
          <Image
            key={index}
            className="h-7 w-7 sm:h-10 sm:w-10 lg:h-14 lg:w-14 rounded-full border bg-val-black border-white dark:border-gray-800"
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </button>
      ))}
    </div>
  );
};
