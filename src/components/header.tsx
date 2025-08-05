import { Gamepad2 } from "lucide-react"

import { ProfileButton } from "@/app/(dashboard)/components/profile-button"

export function Header() {
  return (
    <header className="p-4 border-b flex items-center justify-between h-20">
      <div className="flex gap-3.5 items-center">
        <div className="size-10 lg:size-12 rounded-sm flex items-center justify-center gradient">
          <Gamepad2 className="size-6 lg:size-8 text-white" />
        </div>

        <div>
          <h1 className="text-lg lg:text-2xl font-bold">Steam Roulette</h1>
          <p className="text-muted-foreground text-xs lg:text-sm font-medium">
            Find your next adventure
          </p>
        </div>
      </div>

      <ProfileButton />
    </header>
  )
}
