import { AvatarCircles } from "@/components/magicui/avatar-circles";

const teams = [
  "blg",
  "drg",
  "drx",
  "edg",
  "fnc",
  "g2",
  "giantx",
  "mibr",
  "nrg",
  "prx",
  "rrq",
  "sen",
  "t1",
  "th",
  "tl",
  "xlg",
];

const teamMembers = (team: string) => {
  return Array.from({ length: 5 }, (_, playerIndex) => ({
    imageUrl: encodeURI(
      `/headshots/${team}/player ${playerIndex + 1} headshot.png`
    ),
  }));
};

const TeamsPage = () => {
  return (
    <div className="space-y-6">
      {teams.map((team, index) => {
        const teamAvatars = teamMembers(team);
        return (
          <div key={index}>
            <h3 className="mb-2 font-semibold">{team}</h3>
            <AvatarCircles avatarUrls={teamAvatars} />
          </div>
        );
      })}
    </div>
  );
};

export default TeamsPage;
