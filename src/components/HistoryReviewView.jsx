import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Eye,
  Trophy,
  X,
  XCircle
} from 'lucide-react'
import { useMemo } from 'react'
import { useApp } from '../context/AppContext'
import { questionPool } from '../data/questions'

export default function HistoryReviewView({ entryId, onClose }) {
  const ctx = useApp()
  const examHistory = ctx.examHistory ?? []
  const entry = examHistory.find(e => e.id === entryId)

  const questionLookup = useMemo(() => {
    const m = new Map()
    questionPool.forEach(q => m.set(q.id, q))
    return m
  }, [])

  if (!entry) {
    return (
      <div className="space-y-5 animate-fade-in">
        <ReviewHeader title="Exam Review" subtitle="Attempt not found" onClose={onClose} />
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center">
          <p className="text-slate-600 dark:text-slate-300">
            That exam attempt is no longer in your history. It may have been cleared or replaced.
          </p>
          <button
            onClick={onClose}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to dashboard
          </button>
        </div>
      </div>
    )
  }

  const dateLabel = new Date(entry.date).toLocaleString('en-CA', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
  const pct = Math.round((entry.score / entry.total) * 100)
  const passing = pct >= 70
  const responses = entry.responses ?? []
  const modeLabel = entry.mode === 'exam'
    ? 'Timed Exam'
    : entry.mode === 'drill' ? 'Flag Drill' : 'Practice'

  return (
    <div className="space-y-5 animate-fade-in">
      <ReviewHeader
        title={`Exam Review — ${dateLabel}`}
        subtitle={`${modeLabel} • ${Math.round(entry.durationSec / 60)} min`}
        onClose={onClose}
      />

      {/* Summary */}
      <section className={`rounded-2xl p-5 sm:p-7 text-white shadow-xl
        ${passing ? 'bg-gradient-to-br from-emerald-500 to-emerald-700'
                  : 'bg-gradient-to-br from-rose-500 to-rose-700'}`}>
        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5" /> Final score
        </div>
        <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">{pct}%</p>
        <p className="text-base font-semibold mt-1">
          {entry.score} / {entry.total} correct
        </p>
        <p className="text-xs text-white/85 mt-2 flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          {dateLabel} • {modeLabel} • {Math.round(entry.durationSec / 60)} min
        </p>
      </section>

      {/* If this is an old entry without responses, explain and exit */}
      {responses.length === 0 ? (
        <section className="rounded-2xl border-2 border-amber-300/70 dark:border-amber-700/40 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-900 p-5">
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed flex items-start gap-2">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
            This attempt was completed before per-question history was added.
            Only the summary score was saved. Take a new exam to see full
            question-by-question review going forward.
          </p>
        </section>
      ) : (
        <>
          {/* Per-category breakdown if available */}
          {entry.byCategory && Object.keys(entry.byCategory).length > 0 && (
            <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Performance by category
              </h2>
              <div className="space-y-3">
                {Object.entries(entry.byCategory).map(([cat, v]) => {
                  const p = Math.round((v.right / v.total) * 100)
                  const tone = p >= 80 ? 'emerald' : p >= 60 ? 'amber' : 'rose'
                  const bar = { emerald: 'bg-emerald-500', amber: 'bg-amber-500', rose: 'bg-rose-500' }[tone]
                  return (
                    <div key={cat}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-200">{cat}</span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {v.right} / {v.total} ({p}%)
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div className={`h-full ${bar} transition-all duration-700`} style={{ width: `${p}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* Question-by-question review */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              All {responses.length} questions
            </h2>
            <div className="space-y-3">
              {responses.map((resp, i) => {
                const q = questionLookup.get(resp.questionId)
                if (!q) {
                  return (
                    <article
                      key={`missing-${i}`}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"
                    >
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-bold">
                          Q{i + 1}
                        </span>
                        <span className="text-slate-500">
                          Question is no longer in the pool.
                        </span>
                      </div>
                    </article>
                  )
                }
                return <ReviewQuestion key={resp.questionId} q={q} idx={i} response={resp} />
              })}
            </div>
          </section>
        </>
      )}

      {/* Bottom close button — prominent and full-width on mobile */}
      <div className="pt-2 pb-2 sm:flex sm:justify-center">
        <button
          onClick={onClose}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-bold bg-brand-600 text-white hover:bg-brand-700 shadow-lg transition"
        >
          <X className="w-4 h-4" /> Close Review
        </button>
      </div>
    </div>
  )
}

/* ─── Sub-components ─────────────────────────────────────────────── */

function ReviewHeader({ title, subtitle, onClose }) {
  return (
    <header className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onClose}
          className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close review"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="min-w-0">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-1">
            <Eye className="w-3 h-3" /> Detailed review
          </p>
          <h1 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-tight truncate">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  )
}

function ReviewQuestion({ q, idx, response }) {
  const correct = response.isCorrect
  const userAns = response.selectedOption
  const unanswered = userAns === null || userAns === undefined

  return (
    <article
      className={`rounded-xl border p-4 sm:p-5
        ${correct
          ? 'bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/50'
          : 'bg-rose-50/40 dark:bg-rose-950/10 border-rose-200 dark:border-rose-900/50'}`}
    >
      <div className="flex items-center gap-2 text-xs mb-3 flex-wrap">
        <span className="px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300 font-bold">
          Q{idx + 1}
        </span>
        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-semibold">
          {q.category}
        </span>
        {q.chapter && (
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 font-medium">
            Ch {q.chapter}
          </span>
        )}
        <span className="ml-auto">
          {correct ? (
            <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-rose-700 dark:text-rose-300 font-bold">
              <XCircle className="w-3.5 h-3.5" /> Incorrect
            </span>
          )}
        </span>
      </div>

      <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
        {q.question}
      </h3>

      <div className="mt-3 space-y-2">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.answer
          const isUserChoice = i === userAns

          let containerCls = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
          let badgeCls    = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'

          if (isCorrect) {
            containerCls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-700'
            badgeCls = 'bg-emerald-500 text-white'
          } else if (isUserChoice && !isCorrect) {
            containerCls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-700'
            badgeCls = 'bg-rose-500 text-white'
          }

          return (
            <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border-2 ${containerCls}`}>
              <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${badgeCls}`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed pt-0.5 flex-1">
                {opt}
              </span>
              <span className="flex flex-col items-end gap-1 shrink-0">
                {isCorrect && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500 text-white">
                    <CheckCircle2 className="w-3 h-3" /> Correct
                  </span>
                )}
                {isUserChoice && !isCorrect && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-rose-500 text-white">
                    <XCircle className="w-3 h-3" /> Your choice
                  </span>
                )}
                {isUserChoice && isCorrect && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-600 text-white">
                    Your choice ✓
                  </span>
                )}
              </span>
            </div>
          )
        })}
      </div>

      {unanswered && (
        <p className="mt-3 text-sm text-slate-500 italic flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" /> You did not answer this question.
        </p>
      )}

      {/* Explanation block — always shown */}
      <div className="mt-4 rounded-lg border border-amber-300/70 dark:border-amber-700/40 bg-amber-50/70 dark:bg-amber-950/20 p-3 sm:p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1 flex items-center gap-1">
          <Eye className="w-3 h-3" /> Explanation (解析)
        </p>
        <p className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed">{q.explanation}</p>
      </div>
    </article>
  )
}
