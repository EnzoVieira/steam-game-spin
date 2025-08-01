import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      steam: {
        steamid: string
        communityvisibilitystate: number
        profilestate: number
        personaname: string
        profileurl: string
        avatar: string
        avatarmedium: string
        avatarfull: string
        avatarhash: string
        lastlogoff: number
        personastate: number
        primaryclanid: string
        timecreated: number
        personastateflags: number
      }
    } & DefaultSession["user"]
  }
}
