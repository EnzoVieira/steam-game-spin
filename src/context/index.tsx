"use client"

import SessionProvider from "@/context/session-provider"
import { getQueryClient } from "@/lib/query-client"
import { QueryClientProvider } from "@tanstack/react-query"

interface ProvidersProps {
  children?: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient()

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}
