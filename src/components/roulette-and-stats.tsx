import { Clock, Gamepad } from "lucide-react"
import { Roulette } from "./roulette"
import { type IGame } from "@/http/get-owned-games"

interface IRouletteAndStatsProps {
  games: IGame[]
}

export async function RouletteAndStats({ games }: IRouletteAndStatsProps) {
  return (
    <div className="sticky top-12 h-fit">
      <Roulette className="mb-4" games={games} />

      <Stats games={games} />
    </div>
  )
}

function Stats({ games }: IRouletteAndStatsProps) {
  return (
    <div className="flex gap-x-4">
      <div className="border rounded-lg p-6 flex flex-1 flex-col items-center">
        <Gamepad className="size-6 mb-2" />
        <strong className="text-2xl">{games.length}</strong>
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
