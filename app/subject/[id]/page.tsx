"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { subjects } from "@/lib/subjects-data"
import { subjectNotes } from "@/lib/notes-data"
import { importantQuestions } from "@/lib/important-questions-data"
import { mcqQuestions } from "@/lib/mcq-data"
import { NotesViewer } from "@/components/notes-viewer"
import { QuestionsBank } from "@/components/questions-bank"
import { MCQQuiz } from "@/components/mcq-quiz"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

type TabType = "notes" | "questions" | "mcq"

export default function SubjectPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>("notes")
  const subjectId = params.id as string

  const subject = subjects.find((s) => s.id === subjectId)
  const notes = subjectNotes[subjectId as keyof typeof subjectNotes] || []
  const questions = importantQuestions[subjectId as keyof typeof importantQuestions] || []
  const quizQuestions = mcqQuestions[subjectId as keyof typeof mcqQuestions] || []

  if (!subject) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Subject not found</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6 gap-2">
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>

        {/* Subject Header */}
        <div className={`bg-gradient-to-br ${subject.color} rounded-lg p-8 text-white mb-8`}>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{subject.icon}</span>
            <div>
              <h1 className="text-3xl font-bold">{subject.name}</h1>
              <p className="text-white/80 mt-1">{subject.description}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab("notes")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "notes"
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            Study Notes
          </button>
          <button
            onClick={() => setActiveTab("questions")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "questions"
                ? "text-secondary border-secondary"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            Important Questions
          </button>
          <button
            onClick={() => setActiveTab("mcq")}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "mcq"
                ? "text-accent border-accent"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            MCQ Quiz
          </button>
        </div>

        {/* Content Sections */}
        <div className="mb-12">
          {activeTab === "notes" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Study Materials</h2>
              <NotesViewer notes={notes} />
              <div className="flex gap-4 justify-center py-8">
                <Button className="bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white">
                  Open Full Notes
                </Button>
                <Button variant="outline">Download PDF</Button>
              </div>
            </div>
          )}

          {activeTab === "questions" && (
            <div>
              <QuestionsBank questions={questions} />
            </div>
          )}

          {activeTab === "mcq" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">MCQ Quiz (10 Questions)</h2>
              <MCQQuiz questions={quizQuestions} />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
