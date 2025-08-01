import { Gamepad2 } from "lucide-react"

import { LogoutButton } from "./logout-button"

export function Header() {
  return (
    <header className="p-4 border-b flex items-center justify-between">
      <div className="flex gap-3.5 items-center">
        <div className="size-12 rounded-sm flex items-center justify-center bg-red-500">
          <Gamepad2 className="size-8 text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-bold">Steam Roulette</h1>
          <p className="text-muted-foreground text-sm font-medium">
            Find your next adventure
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <LogoutButton />
      </div>
    </header>
  )
}
