import { Clock, Gamepad } from "lucide-react"
import { Roulette } from "./roulette"

export function RouletteAndStats() {
  return (
    <div className="sticky top-12 h-fit">
      <Roulette className="mb-4" />

      <Stats />
    </div>
  )
}

function Stats() {
  return (
    <div className="flex gap-x-4">
      <div className="border rounded-lg p-6 flex flex-1 flex-col items-center">
        <Gamepad className="size-6 mb-2" />
        <strong className="text-2xl">12</strong>
        <span className="text-muted-foreground">Total games</span>
      </div>

      <div className="border rounded-lg p-6 flex flex-1 flex-col items-center">
        <Clock className="size-6 mb-2" />
        <strong className="text-2xl">12</strong>
        <span className="text-muted-foreground">Total hours</span>
      </div>
    </div>
  )
}
