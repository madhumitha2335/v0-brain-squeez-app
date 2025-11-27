"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "./auth-context"
import { BrainSqueezelogo } from "./brain-squeez-logo"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="border-b border-border bg-card sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <BrainSqueezelogo />
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground">Welcome back!</p>
            <p className="text-xs text-muted-foreground">{user?.name || "Student"}</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="text-sm bg-transparent">
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
