import { LoginButton } from "@/components/login-button"
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <h1>Login</h1>
      <LoginButton />

      {session && (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      )}

      <ul>
        <li>
          <code>session.user?.steam</code>:{" "}
          {JSON.stringify(session.user?.steam, null, 2)}
        </li>
      </ul>
    </main>
  )
}
