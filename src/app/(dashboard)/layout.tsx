import { LogoutButton } from "@/components/logout-button"
import SessionProvider from "@/context/session-provider"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <header>
        <h1>Logo</h1>
        <LogoutButton />
      </header>
      <main className="min-h-screen">{children}</main>
    </SessionProvider>
  )
}
