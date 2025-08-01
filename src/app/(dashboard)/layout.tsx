import { LogoutButton } from "@/components/logout-button"
import SessionProvider from "@/context/session-provider"
import { getServerSession } from "next-auth"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <SessionProvider session={session}>
      <header>
        <h1>Logo</h1>
        <LogoutButton />
      </header>
      <main className="min-h-screen">{children}</main>
    </SessionProvider>
  )
}
