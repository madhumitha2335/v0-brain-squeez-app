"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-context"
import { BrainSqueezelogo } from "@/components/brain-squeez-logo"
import { SignupForm } from "@/components/signup-form"
import { LoginForm } from "@/components/login-form"

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true)
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  // Redirect if already authenticated
  if (isAuthenticated) {
    router.push("/dashboard")
  }

  const handleDemoAccess = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BrainSqueezelogo />
          </div>
          <h1 className="text-4xl font-bold text-foreground text-balance">Brain Squeez</h1>
          <p className="text-muted-foreground mt-2">Master any subject with interactive learning</p>
        </div>

        {/* Auth Card */}
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          {/* Tab Toggle */}
          <div className="flex gap-2 mb-6 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 rounded-md font-medium transition-all ${
                isSignup
                  ? "bg-gradient-to-r from-blue-600 to-pink-500 text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 rounded-md font-medium transition-all ${
                !isSignup
                  ? "bg-gradient-to-r from-blue-600 to-pink-500 text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign In
            </button>
          </div>

          {/* Forms */}
          {isSignup ? <SignupForm /> : <LoginForm />}

          {/* Demo Access */}
          <div className="mt-6 pt-6 border-t border-border">
            <button
              onClick={handleDemoAccess}
              className="w-full py-2 px-4 text-sm font-medium text-primary hover:bg-accent/10 rounded-lg transition-colors"
            >
              Continue as Guest
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-xs text-muted-foreground">Subjects</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">100+</div>
            <p className="text-xs text-muted-foreground">Questions</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">100%</div>
            <p className="text-xs text-muted-foreground">Free</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}
