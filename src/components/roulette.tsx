"use client"

import { cn, getRandomElement } from "@/lib/utils"
import { Shuffle } from "lucide-react"
import { Button } from "./ui/button"
import { GameCard } from "./game-card"
import clsx from "clsx"
import { useState } from "react"
import { IGame } from "@/http/get-owned-games"

interface IRouletteProps extends React.ComponentProps<"div"> {
  games: IGame[]
}

export function Roulette({ className, games, ...rest }: IRouletteProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedGame, setSelectedGame] = useState<IGame | null>(null)

  async function handleSpin() {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate a delay for the spinning effect

    const gamesNeverPlayed = games.filter((game) => game.playtime_forever === 0)

    const randomGame = getRandomElement(gamesNeverPlayed)

    if (!randomGame) {
      setIsLoading(false)
      return
    }

    setSelectedGame(randomGame)
    setIsLoading(false)
  }

  return (
    <div
      className={cn(
        "border rounded-lg p-6 flex flex-col items-center",
        className,
      )}
      {...rest}
    >
      <div className="size-32 gradient rounded-full flex items-center justify-center mb-4">
        <Shuffle className={clsx("size-14", { "animate-spin": isLoading })} />
      </div>

      <h3 className="text-lg font-bold">Steam Games Roulette</h3>
      <p className="text-muted-foreground">6 unplayed games available</p>

      <Button
        className="mt-4 gradient text-white"
        size="lg"
        isLoading={isLoading}
        onClick={handleSpin}
      >
        <Shuffle className="size-4" />
        Spin the Roulette
      </Button>

      {selectedGame && !isLoading && (
        <GameCard game={selectedGame} className="mt-6 w-full" />
      )}
    </div>
  )
}
