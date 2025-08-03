import { Clock, Gamepad } from "lucide-react"
import { Roulette } from "./roulette"
import { type IGame } from "@/http/get-owned-games"

import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(duration)
dayjs.extend(relativeTime)

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
  const totalMinutes = games.reduce((acc, game) => {
    return acc + (game.playtime_forever || 0)
  }, 0)

  const duration = dayjs.duration(totalMinutes, "minutes")

  const formatDuration = () => {
    const years = duration.years()
    const months = duration.months()
    const days = duration.days()
    const hours = duration.hours()
    const minutes = duration.minutes()

    const parts = []

    if (years > 0) parts.push(`${years} year${years !== 1 ? "s" : ""}`)
    if (months > 0) parts.push(`${months} month${months !== 1 ? "s" : ""}`)
    if (days > 0) parts.push(`${days} day${days !== 1 ? "s" : ""}`)
    if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`)
    if (minutes > 0 && parts.length < 2)
      parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`)

    if (parts.length === 0) return "0 minutes"
    if (parts.length === 1) return parts[0]
    if (parts.length === 2) return parts.join(" and ")

    return parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1]
  }

  const durationPlayed = formatDuration()

  return (
    <div className="flex gap-x-4">
      <div className="border rounded-lg p-6 flex flex-1 flex-col gap-2">
        <span className="text-muted-foreground flex items-center text-sm">
          <Gamepad className="size-4 mr-1.5" /> Total games
        </span>
        <strong className="text-2xl">{games.length} games</strong>
      </div>

      <div className="border rounded-lg p-6 flex flex-1 flex-col gap-2">
        <span className="text-muted-foreground flex items-center text-sm">
          <Clock className="size-4 mr-1.5" />
          Time played
        </span>
        <strong className="text-lg">{durationPlayed}</strong>
      </div>
    </div>
  )
}
