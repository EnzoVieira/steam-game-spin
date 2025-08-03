import { IGame } from "@/http/get-owned-games"
import { cn } from "@/lib/utils"

interface IGameCardProps extends React.ComponentProps<"article"> {
  game: IGame
}

export function GameCard({ game, className, ...rest }: IGameCardProps) {
  return (
    <article className={cn("border p-6 rounded-md", className)} {...rest}>
      <header className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <div className="size-8 rounded-sm overflow-hidden">
            <img
              src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}
              alt={game.name}
              className="object-cover w-full h-full"
            />
          </div>

          <h3 className="text-xl font-semibold">{game.name}</h3>
        </div>

        <span className="text-sm">Unplayed</span>
      </header>

      <footer className="mt-2">
        <p className="text-sm font-medium">
          Playtime: {game.playtime_forever} minutes
        </p>
      </footer>
    </article>
  )
}
