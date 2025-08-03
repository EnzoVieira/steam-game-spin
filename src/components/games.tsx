import { getOwnedGames } from "@/http/get-owned-games"
import { cn } from "@/lib/utils"
import { FilteredGamesList } from "./filtered-games-list"

interface IGamesProps extends React.ComponentProps<"div"> {
  steamId: string
}

export async function Games({ steamId, className, ...rest }: IGamesProps) {
  const ownedGames = await getOwnedGames(steamId)

  return (
    <div className={cn("w-full border p-6 rounded-lg", className)} {...rest}>
      <h2 className="text-2xl font-bold mb-8">Steam Library</h2>

      <FilteredGamesList games={ownedGames.games} />
    </div>
  )
}
