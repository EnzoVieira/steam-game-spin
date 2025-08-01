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
      <main className="min-h-screen">{children}</main>
    </SessionProvider>
  )
}
