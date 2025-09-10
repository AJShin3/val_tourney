import { player_data } from "@/data";

export default function Players() {
  return (
    <div className="text-black font-bold space-y-2">
      {player_data.map((player, index) => (
        <div key={index} className="p-2 border rounded">
          <p>IGN: {player.ign}</p>
          <p>Country: {player?.country}</p>
          <p>Team: {player.team}</p>
        </div>
      ))}
    </div>
  );
}
