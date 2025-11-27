import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/components/auth-context"
import "./globals.css"

import { Geist_Mono, Francois_One as V0_Font_Francois_One, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _francoisOne = V0_Font_Francois_One({ subsets: ['latin'], weight: ["400"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Brain Squeez - Master Your Subjects",
  description:
    "Interactive learning platform with study notes, important questions, and MCQ quizzes across 8 subjects: Maths, Science, English, Social Studies, History, Accounts, Commerce, and Economics.",
  keywords: "learning, education, quiz, study, interactive, subjects",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
