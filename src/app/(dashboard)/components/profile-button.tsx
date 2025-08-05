"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

export function ProfileButton() {
  const { data: session } = useSession()

  if (!session) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-1.5">
          <div>
            <strong className="hidden lg:block line-clamp-1">
              {session.user.name}
            </strong>
          </div>

          <Avatar>
            <AvatarImage src={session.user.image as string} />
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Button
            variant="ghost"
            size="icon"
            className="w-full justify-start"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogOut className="size-4" />
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
