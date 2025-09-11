import Link from "next/link";
import { GithubLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";

interface PeopleProps {
  title: string;
  link?: string;
  link2?: string;
}

export default function People({ title, link, link2 }: PeopleProps) {
  return (
    <div className="text-val-white/70 justify-end text-sm text-right flex flex-row items-center leading-5">
      <p className="mr-4">{title}</p>
      <Link href={`${link2}`} className={`${link2 ? "" : "hidden"}`}>
        <GithubLogoIcon />
      </Link>
      <Link href={`${link}`} className={`mr-1 ${link ? "" : "hidden"}`}>
        <XLogoIcon />
      </Link>
    </div>
  );
}
