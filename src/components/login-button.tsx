"use client"

import { signIn, signOut } from "next-auth/react"

export function LoginButton() {
  return (
    <div>
      <button
        onClick={() => signIn("steam")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login with Steam
      </button>

      <button type="button" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  )
}
