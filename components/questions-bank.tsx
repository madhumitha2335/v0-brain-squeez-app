"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { ImportantQuestion } from "@/lib/important-questions-data"
import { ChevronDown, ChevronUp } from "lucide-react"

interface QuestionsBankProps {
  questions: ImportantQuestion[]
}

export function QuestionsBank({ questions }: QuestionsBankProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleQuestion = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">5 Important Questions</h3>
        <p className="text-sm text-muted-foreground">
          Master the fundamental concepts with these important questions and detailed answers.
        </p>
      </div>

      {questions.map((q, index) => (
        <Card key={q.id} className="overflow-hidden border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
          <button
            onClick={() => toggleQuestion(q.id)}
            className="w-full p-4 flex items-start justify-between bg-card hover:bg-muted/50 transition-colors text-left"
          >
            <div className="flex-1 pr-4">
              <p className="text-xs font-semibold text-secondary mb-1">Q{index + 1}</p>
              <p className="font-semibold text-foreground">{q.question}</p>
            </div>
            {expandedId === q.id ? (
              <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
            )}
          </button>

          {expandedId === q.id && (
            <div className="px-4 pb-4 border-t border-border bg-muted/30">
              <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">{q.answer}</p>
            </div>
          )}
        </Card>
      ))}

      {/* Load More */}
      <Button
        variant="outline"
        className="w-full mt-6 bg-transparent"
        onClick={() => alert("More questions coming soon!")}
      >
        Load More Questions
      </Button>
    </div>
  )
}
