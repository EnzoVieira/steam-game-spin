import { Games } from "@/components/games"
import { getAuthOptions } from "@/config/auth"
import { getServerSession } from "next-auth"
import { Suspense } from "react"

export default async function Home() {
  const session = await getServerSession(getAuthOptions())

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      {session && (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <pre>
            <code>{JSON.stringify(session, null, 2)}</code>
          </pre>

          <Suspense fallback={<p>Loading games...</p>}>
            <Games steamId={session.user.steam.steamid} />
          </Suspense>
        </div>
      )}
    </main>
  )
}
