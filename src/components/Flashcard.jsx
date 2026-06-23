import { Check, RotateCcw, X } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../context/AppContext'

export default function Flashcard({ day, card }) {
  const [flipped, setFlipped] = useState(false)
  const { flashcardMastery, markFlashcard } = useApp()
  const key = `${day}-${card.term}`
  const status = flashcardMastery[key]

  return (
    <div className="space-y-2">
      <button
        onClick={() => setFlipped(f => !f)}
        className={`w-full min-h-[180px] rounded-2xl border-2 p-5 text-left transition-all duration-300
          ${flipped
            ? 'bg-gradient-to-br from-brand-50 to-white dark:from-brand-950/30 dark:to-slate-900 border-brand-200 dark:border-brand-900'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-800'}`}
      >
        <div className="text-[10px] uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2">
          {flipped ? 'Definition' : 'Tap to reveal'}
        </div>
        {!flipped ? (
          <p className="text-lg font-bold text-slate-900 dark:text-white">{card.term}</p>
        ) : (
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{card.definition}</p>
        )}
      </button>

      <div className="flex items-center gap-2">
        <button
          onClick={() => markFlashcard(day, card.term, 'review')}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition
            ${status === 'review'
              ? 'bg-rose-500 text-white'
              : 'bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/30 dark:text-rose-300 dark:hover:bg-rose-900/30'}`}
        >
          <X className="w-3.5 h-3.5" /> Review
        </button>
        <button
          onClick={() => { setFlipped(false) }}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition"
          aria-label="Reset card"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => markFlashcard(day, card.term, 'known')}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition
            ${status === 'known'
              ? 'bg-emerald-500 text-white'
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-900/30'}`}
        >
          <Check className="w-3.5 h-3.5" /> Known
        </button>
      </div>
    </div>
  )
}
