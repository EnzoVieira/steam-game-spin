"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { LogIn } from "lucide-react"

export function LoginButton() {
  return (
    <Button
      className="gradient text-white w-full"
      size="lg"
      onClick={() => signIn("steam", { callbackUrl: "/" })}
    >
      <LogIn className="mr-2 size-4" />
      Login with Steam
    </Button>
  )
}
