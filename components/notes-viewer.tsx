"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Note {
  id: string
  title: string
  content: string
}

interface NotesViewerProps {
  notes: Note[]
}

export function NotesViewer({ notes }: NotesViewerProps) {
  const [expandedNote, setExpandedNote] = useState<string | null>(notes[0]?.id || null)

  const toggleNote = (noteId: string) => {
    setExpandedNote(expandedNote === noteId ? null : noteId)
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Card
          key={note.id}
          className="overflow-hidden border-l-4 border-l-primary hover:shadow-lg transition-shadow cursor-pointer"
        >
          <button
            onClick={() => toggleNote(note.id)}
            className="w-full p-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground text-left">{note.title}</h3>
            {expandedNote === note.id ? (
              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
            ) : (
              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
            )}
          </button>

          {expandedNote === note.id && (
            <div className="px-4 pb-4 border-t border-border">
              <div className="prose prose-sm dark:prose-invert max-w-none text-foreground whitespace-pre-wrap leading-relaxed">
                {note.content}
              </div>
            </div>
          )}
        </Card>
      ))}

      {/* Load More Notes */}
      <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={() => alert("More notes coming soon!")}>
        Load More Notes
      </Button>
    </div>
  )
}
