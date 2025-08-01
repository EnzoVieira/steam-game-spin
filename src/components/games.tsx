import { getOwnedGames } from "@/http/get-owned-games"

interface IGamesProps {
  steamId: string
}

export async function Games({ steamId }: IGamesProps) {
  const ownedGames = await getOwnedGames(steamId)

  return (
    <div className="w-full border p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-8">Steam Library</h2>

      <ul>
        {ownedGames.games.map((game) => (
          <li key={game.appid} className="border p-6 rounded-md mb-4">
            <div className="flex justify-between items-center">
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
            </div>

            <p className="mt-2 text-sm font-medium">
              Playtime: {game.playtime_forever} minutes
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
