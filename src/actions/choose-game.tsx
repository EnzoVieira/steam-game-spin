// "use server"

// export async function chooseGameAction() {
//   const session = await getServerSession(getAuthOptions())

//   if (!session || !session.user.steam.steamid) {
//     return {
//       success: false,
//       message: "Unauthorized.",
//     }
//   }

//   const ownedGames = await getOwnedGames(session.user.steam.steamid)

//   const gamesNeverPlayed = ownedGames.games.filter(
//     (game) => game.playtime_forever === 0,
//   )

//   const randomGame = getRandomElement(gamesNeverPlayed)

//   return {
//     success: true,
//     game: randomGame,
//   }
// }

"use server"

import { getAuthOptions } from "@/config/auth"
import { getOwnedGames } from "@/http/get-owned-games"
import { getRandomElement } from "@/lib/utils"
import { getServerSession } from "next-auth"
import { actionClient } from "@/lib/safe-action"

export const chooseGameAction = actionClient.action(async () => {
  const session = await getServerSession(getAuthOptions())

  if (!session || !session.user.steam.steamid) {
    return {
      success: false,
      message: "Unauthorized.",
    }
  }

  const ownedGames = await getOwnedGames(session.user.steam.steamid)

  const gamesNeverPlayed = ownedGames.games.filter(
    (game) => game.playtime_forever === 0,
  )

  const randomGame = getRandomElement(gamesNeverPlayed)

  if (!randomGame) {
    return {
      success: false,
      message: "No unplayed games available.",
    }
  }

  return {
    success: true,
    message: `You should play ${randomGame.name}!`,
    game: randomGame,
  }
})
