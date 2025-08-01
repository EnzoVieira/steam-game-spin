import { Clock, Gamepad } from "lucide-react"

export function RouletteAndStats() {
  return (
    <div className="sticky top-12 h-fit">
      <Roulette />

      <Stats />
    </div>
  )
}

function Roulette() {
  return (
    <div className="border rounded-lg p-6 mb-4">
      <h3 className="text-2xl font-bold">Steam Games Roulette</h3>
      <p className="text-muted-foreground">6 unplayed games</p>
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
