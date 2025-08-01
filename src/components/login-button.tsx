"use client"

import { signIn } from "next-auth/react"

export function LoginButton() {
  return (
    <button
      onClick={() => signIn("steam", { redirect: true, callbackUrl: "/" })}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Login with Steam
    </button>
  )
}
