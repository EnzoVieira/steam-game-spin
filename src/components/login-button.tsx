"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { SteamIcon } from "./icons/SteamIcon"

export function LoginButton() {
  return (
    <Button
      className="bg-black hover:bg-[#1b2838] text-white w-full"
      size="lg"
      onClick={() => signIn("steam", { callbackUrl: "/" })}
    >
      <SteamIcon className="size-4" />
      Login with Steam
    </Button>
  )
}
