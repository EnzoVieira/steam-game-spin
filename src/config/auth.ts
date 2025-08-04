import { AuthOptions } from "next-auth"
import Steam, { STEAM_PROVIDER_ID } from "next-auth-steam"
import { NextRequest } from "next/server"

export function getAuthOptions(req?: NextRequest): AuthOptions {
  return {
    pages: {
      signIn: "/login",
    },
    providers: req
      ? [
          Steam(req, {
            clientSecret: process.env.STEAM_SECRET!,
            callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/steam`,
          }),
        ]
      : [],
    callbacks: {
      async jwt({ token, account, profile }) {
        if (account?.provider === STEAM_PROVIDER_ID) {
          token.steam = profile
        }

        return token
      },
      async session({ session, token }) {
        if ("steam" in token) {
          // @ts-expect-error: steam property is not typed on session.user
          session.user.steam = token.steam
        }

        return session
      },
    },
  }
}
