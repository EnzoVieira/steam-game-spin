import { getAuthOptions } from "@/config/auth"
import NextAuth from "next-auth"
import { NextRequest } from "next/server"

interface IContext {
  params: {
    nextauth: string[]
  }
}

async function auth(req: NextRequest, ctx: IContext) {
  return NextAuth(req, ctx, getAuthOptions(req))
}

export { auth as GET, auth as POST }
