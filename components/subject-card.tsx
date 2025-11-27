"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

interface SubjectCardProps {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

export function SubjectCard({ id, name, description, icon, color }: SubjectCardProps) {
  return (
    <Link href={`/subject/${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0">
        {/* Gradient header */}
        <div className={`bg-gradient-to-br ${color} h-32 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20 bg-white/20" />
          <span className="text-5xl">{icon}</span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground text-balance">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>

          {/* Progress and Meta */}
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold text-primary">0%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-3">
              <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-2 rounded-full w-0 transition-all" />
            </div>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>3 Notes</span>
              <span>5 Questions</span>
              <span>10 MCQs</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
