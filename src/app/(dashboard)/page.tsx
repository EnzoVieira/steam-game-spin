import { Games } from "@/components/games"
import { RouletteAndStats } from "@/components/roulette-and-stats"
import { getAuthOptions } from "@/config/auth"
import { getServerSession } from "next-auth"
import { Suspense } from "react"

export default async function Home() {
  const session = (await getServerSession(getAuthOptions()))!

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <RouletteAndStats />

      <Suspense fallback={<p>Loading games...</p>}>
        <Games className="lg:col-span-2" steamId={session.user.steam.steamid} />
      </Suspense>
    </main>
  )
}
