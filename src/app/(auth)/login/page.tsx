import { LoginButton } from "@/components/login-button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Gamepad2 } from "lucide-react"

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-6 min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="mx-auto mb-6 size-12 rounded-sm flex items-center justify-center gradient">
            <Gamepad2 className="size-8 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-center">Steam Roulette</h1>
          <p className="text-muted-foreground text-center text-sm">
            Log in to access your Steam Library and discover your next gaming
            adventure
          </p>
        </CardHeader>

        <CardContent>
          <LoginButton />
        </CardContent>

        <CardFooter className="flex-col gap-4">
          <p className="text-xs text-muted-foreground text-center">
            We use Steam OpenID to securely authenticate your account. Your
            credentials are never stored.
          </p>

          <div className="flex gap-1.5 items-center">
            <div className="size-2 rounded-full bg-blue-500"></div>
            <p className="text-xs text-muted-foreground">
              Secure Steam authentication
            </p>
          </div>
        </CardFooter>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have a Steam account?{" "}
        <a href="https://store.steampowered.com/join/" className="underline">
          Create one here
        </a>
      </p>
    </main>
  )
}
