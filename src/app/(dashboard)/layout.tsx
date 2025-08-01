import { Header } from "@/components/header"
import SessionProvider from "@/context/session-provider"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <Header />

      <main className="min-h-screen">{children}</main>
    </SessionProvider>
  )
}
