"use client"

import { IGame } from "@/http/get-owned-games"
import { GameCard } from "./game-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

interface IFilteredGamesListProps {
  games: IGame[]
}

export function FilteredGamesList({ games }: IFilteredGamesListProps) {
  const gamesPlayed = games.filter((game) => game.playtime_forever > 0)
  const gamesNotPlayed = games.filter((game) => game.playtime_forever === 0)

  if (games.length === 0) {
    return <p>No games found.</p>
  }

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="w-full mb-4">
        <TabsTrigger value="all">All ({games.length})</TabsTrigger>
        <TabsTrigger value="unplayed">
          Unplayed ({gamesNotPlayed.length})
        </TabsTrigger>
        <TabsTrigger value="played">Played ({gamesPlayed.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="all">
        <ul>
          {games.map((game) => (
            <li key={game.appid} className="mb-4">
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      </TabsContent>

      <TabsContent value="unplayed">
        <ul>
          {gamesNotPlayed.map((game) => (
            <li key={game.appid} className="mb-4">
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      </TabsContent>

      <TabsContent value="played">
        <ul>
          {gamesPlayed.map((game) => (
            <li key={game.appid} className="mb-4">
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  )
}
