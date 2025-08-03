import { Header } from "@/components/header"
import { Providers } from "@/context"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <Header />

      <main className="mt-12 px-4 min-h-[calc(100dvh-80px)]">{children}</main>
    </Providers>
  )
}
