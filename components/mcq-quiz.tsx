"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { MCQQuestion } from "@/lib/mcq-data"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface MCQQuizProps {
  questions: MCQQuestion[]
}

export function MCQQuiz({ questions }: MCQQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const currentQuestion = questions[currentIndex]
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer

  const handleAnswerClick = (optionIndex: number) => {
    if (!answered) {
      setSelectedAnswer(optionIndex)
      setAnswered(true)
      if (optionIndex === currentQuestion.correctAnswer) {
        setCorrectCount(correctCount + 1)
      }
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setCorrectCount(0)
    setQuizComplete(false)
  }

  if (quizComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center border-0 shadow-lg">
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary mb-4">
              {correctCount}/{questions.length}
            </div>
            <p className="text-2xl font-semibold text-foreground mb-2">Quiz Complete!</p>
            <p className="text-muted-foreground">
              You got {correctCount} out of {questions.length} correct
            </p>
          </div>

          {/* Score breakdown */}
          <div className="bg-muted rounded-lg p-6 mb-6">
            <p className="text-lg font-semibold text-foreground mb-3">Your Performance</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-foreground">Percentage</span>
              <span className="text-2xl font-bold text-primary">
                {Math.round((correctCount / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-600 to-pink-500 h-3 rounded-full transition-all"
                style={{ width: `${(correctCount / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Button
            onClick={handleRestart}
            className="w-full bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600"
          >
            Try Again
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">{correctCount} Correct</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-pink-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card className="p-6 sm:p-8 mb-6 border-0 shadow-lg">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6">{currentQuestion.question}</h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={answered}
              className={`w-full p-4 text-left rounded-lg font-medium transition-all border-2 ${
                !answered
                  ? "border-border bg-card hover:border-primary hover:bg-muted cursor-pointer"
                  : index === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20 text-foreground"
                    : index === selectedAnswer
                      ? "border-red-500 bg-red-50 dark:bg-red-950/20 text-foreground"
                      : "border-border bg-card text-muted-foreground opacity-50"
              }`}
            >
              <div className="flex items-center gap-3">
                {answered && index === currentQuestion.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
                {answered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
                {(!answered || (index !== currentQuestion.correctAnswer && index !== selectedAnswer)) && (
                  <div className="w-5 h-5 rounded-full border-2 border-current flex-shrink-0" />
                )}
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {answered && (
          <div
            className={`p-4 rounded-lg mb-6 flex gap-3 ${
              isCorrect
                ? "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900"
                : "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900"
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600" />
              )}
            </div>
            <div>
              <p className={`font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                {isCorrect ? "Correct!" : "Wrong!"}
              </p>
              <p className="text-sm text-foreground mt-1">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}

        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={!answered}
          className="w-full bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white disabled:opacity-50"
        >
          {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </Button>
      </Card>
    </div>
  )
}
