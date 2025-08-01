export interface IGame {
  appid: number
  name: string
  playtime_forever: number
  img_icon_url: string
  has_community_visible_stats: boolean
  playtime_windows_forever: number
  playtime_mac_forever: number
  playtime_linux_forever: number
  playtime_deck_forever: number
  rtime_last_played: number
  playtime_disconnected: number
}

export interface IGetOwnedGamesResponse {
  game_count: number
  games: IGame[]
}

export async function getOwnedGames(
  steamId: string,
): Promise<IGetOwnedGamesResponse> {
  const apiUrl = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_SECRET}&steamid=${steamId}&format=json&include_appinfo=true`

  const response = await fetch(apiUrl)

  if (!response.ok) {
    console.error("Failed to fetch games:", response.statusText)
    throw new Error("Failed to fetch games")
  }

  const data = await response.json()

  return data.response
}
