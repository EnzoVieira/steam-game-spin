"use client"

import { signOut } from "next-auth/react"

import { Button } from "./ui/button"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      <LogOut className="size-4" />
    </Button>
  )
}
