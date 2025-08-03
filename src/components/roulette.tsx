"use client"

import { cn } from "@/lib/utils"
import { Shuffle } from "lucide-react"
import { Button } from "./ui/button"
import { chooseGameAction } from "@/actions/choose-game"
import { useAction } from "next-safe-action/hooks"
import { GameCard } from "./game-card"
import clsx from "clsx"
import { useState } from "react"

type RouletteProps = React.ComponentProps<"div">

export function Roulette({ className, ...rest }: RouletteProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { executeAsync, result, hasSucceeded } = useAction(chooseGameAction)

  async function handleSpin() {
    setIsLoading(true)
    await executeAsync()
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate a delay for the spinning effect
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

      {hasSucceeded && !isLoading && result.data?.game && (
        <GameCard game={result.data.game} className="mt-6 w-full" />
      )}
    </div>
  )
}
