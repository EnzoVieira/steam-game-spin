import { getOwnedGames } from "@/http/get-owned-games"

interface IGamesProps {
  steamId: string
}

export async function Games({ steamId }: IGamesProps) {
  const ownedGames = await getOwnedGames(steamId)

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Your Owned Games</h2>
      <ul className="list-disc">
        {/* This is where you would map over the games and display them */}
        {/* Example: {games.map(game => <li key={game.appid}>{game.name}</li>)} */}
      </ul>
    </div>
  )
}
