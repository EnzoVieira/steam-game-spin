import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      {session && (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      )}
    </main>
  )
}
