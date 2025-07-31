import NextAuth from "next-auth"
import Steam, { STEAM_PROVIDER_ID } from "next-auth-steam"
import { NextRequest } from "next/server"

interface IContext {
  params: {
    nextauth: string[]
  }
}

async function auth(req: NextRequest, ctx: IContext) {
  return NextAuth(req, ctx, {
    providers: [
      Steam(req, {
        clientSecret: process.env.STEAM_SECRET!,
        callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/steam`,
      }),
    ],
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
  })
}

export { auth as GET, auth as POST }
