import { Games } from "@/components/games"
import { RouletteAndStats } from "@/components/roulette-and-stats"
import { getAuthOptions } from "@/config/auth"
import { getOwnedGames } from "@/http/get-owned-games"
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = (await getServerSession(getAuthOptions()))!
  const ownedGames = await getOwnedGames(session.user.steam.steamid)

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <RouletteAndStats games={ownedGames.games} />

      <Games className="lg:col-span-2" games={ownedGames.games} />
    </main>
  )
}
