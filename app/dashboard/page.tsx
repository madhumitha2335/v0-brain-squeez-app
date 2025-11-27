"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { SubjectCard } from "@/components/subject-card"
import { subjects } from "@/lib/subjects-data"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-2">Choose Your Subject</h1>
          <p className="text-muted-foreground">
            Select a subject to begin learning with notes, important questions, and MCQ quizzes
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              id={subject.id}
              name={subject.name}
              description={subject.description}
              icon={subject.icon}
              color={subject.color}
            />
          ))}
        </div>

        {/* Learning Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-pink-50 dark:from-blue-950/20 dark:to-pink-950/20 rounded-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">Why Choose Brain Squeez?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">📚</div>
              <h3 className="font-semibold text-foreground mb-2">Comprehensive Notes</h3>
              <p className="text-sm text-muted-foreground">
                Well-organized study materials with multiple chapters covering all key topics.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">❓</div>
              <h3 className="font-semibold text-foreground mb-2">Important Questions</h3>
              <p className="text-sm text-muted-foreground">
                5 fundamental questions per subject with detailed explanations.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">Interactive MCQs</h3>
              <p className="text-sm text-muted-foreground">
                10 multiple-choice questions with instant feedback and explanations.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-primary">8</div>
            <p className="text-sm text-muted-foreground mt-2">Subjects</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-secondary">100+</div>
            <p className="text-sm text-muted-foreground mt-2">Questions</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-accent">Interactive</div>
            <p className="text-sm text-muted-foreground mt-2">Learning</p>
          </div>
        </div>
      </main>
    </div>
  )
}
