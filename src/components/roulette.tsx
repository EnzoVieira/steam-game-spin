"use client"

import { cn } from "@/lib/utils"
import { Shuffle } from "lucide-react"
import { Button } from "./ui/button"
import { chooseGameAction } from "@/actions/choose-game"

type RouletteProps = React.ComponentProps<"div">

export function Roulette({ className, ...rest }: RouletteProps) {
  return (
    <div
      className={cn(
        "border rounded-lg p-6 flex flex-col items-center",
        className,
      )}
      {...rest}
    >
      <div className="size-32 gradient rounded-full flex items-center justify-center mb-4">
        <Shuffle className="size-14" />
      </div>

      <h3 className="text-lg font-bold">Steam Games Roulette</h3>
      <p className="text-muted-foreground">6 unplayed games available</p>

      <Button
        className="mt-4 gradient text-white"
        size="lg"
        onClick={async () => await chooseGameAction()}
      >
        <Shuffle className="size-4" />
        Spin the Roulette
      </Button>
    </div>
  )
}
