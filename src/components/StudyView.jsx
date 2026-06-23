import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock,
  Lightbulb,
  Sparkles,
  Target
} from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { curriculum } from '../data/curriculum'
import Flashcard from './Flashcard'

const TOTAL = 15

export default function StudyView({ initialDay = 1, onBack }) {
  const [activeChapter, setActiveChapter] = useState(initialDay)
  const { completedDays, toggleDayComplete } = useApp()
  const ch = curriculum.find(c => c.chapter === activeChapter) ?? curriculum[0]
  const done = completedDays.includes(ch.chapter)

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="md:hidden inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600"
        >
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </button>
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setActiveChapter(c => Math.max(1, c - 1))}
            disabled={activeChapter === 1}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
            aria-label="Previous chapter"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveChapter(c => Math.min(TOTAL, c + 1))}
            disabled={activeChapter === TOTAL}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
            aria-label="Next chapter"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chapter Picker Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-1 px-1">
        {curriculum.map(c => {
          const isDone = completedDays.includes(c.chapter)
          const isActive = c.chapter === activeChapter
          return (
            <button
              key={c.chapter}
              onClick={() => setActiveChapter(c.chapter)}
              className={`shrink-0 w-9 h-9 rounded-lg text-xs font-bold relative transition
                ${isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 ring-2 ring-brand-600/20'
                  : isDone
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 hover:bg-emerald-200'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              aria-label={`Chapter ${c.chapter}`}
            >
              {isDone && !isActive ? <Check className="w-3.5 h-3.5 mx-auto" /> : c.chapter}
            </button>
          )
        })}
      </div>

      {/* Header card */}
      <header className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300 font-bold">
            Chapter {ch.chapter} / {TOTAL}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-semibold">
            {ch.category}
          </span>
          <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" /> {ch.estMinutes} min
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-3 leading-tight">
          {ch.title}
        </h1>
        <p className="mt-2 flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
          <Target className="w-4 h-4 mt-0.5 shrink-0 text-brand-600 dark:text-brand-400" />
          <span>{ch.objective}</span>
        </p>
        <button
          onClick={() => toggleDayComplete(ch.chapter)}
          className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition
            ${done
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-brand-600 text-white hover:bg-brand-700'}`}
        >
          {done ? <><CircleCheck className="w-4 h-4" /> Chapter completed</> : <>Mark chapter as complete</>}
        </button>
      </header>

      {/* Summary paragraphs */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          Study content
        </h2>
        <div className="space-y-3">
          {ch.summary.map((point, i) => (
            <div
              key={i}
              className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 hover:shadow-sm transition"
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-brand-100 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Traps */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Must-know exam traps
        </h2>
        <div className="rounded-2xl border-2 border-amber-300/70 dark:border-amber-700/40 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-900 p-5">
          <ul className="space-y-3">
            {ch.secrets.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-100">
                <Lightbulb className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Flashcards */}
      <section>
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Key terms ({ch.flashcards.length})
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">Tap each card to flip</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ch.flashcards.map(card => (
            <Flashcard key={card.term} day={ch.chapter} card={card} />
          ))}
        </div>
      </section>

      {/* Nav footer */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setActiveChapter(c => Math.max(1, c - 1))}
          disabled={activeChapter === 1}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button
          onClick={() => setActiveChapter(c => Math.min(TOTAL, c + 1))}
          disabled={activeChapter === TOTAL}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-40"
        >
          Next chapter <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
