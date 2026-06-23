import {
  AlertCircle,
  ArrowLeft,
  BookmarkPlus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Filter,
  Flag,
  GraduationCap,
  RotateCcw,
  Star,
  Trash2,
  Trophy,
  XCircle,
  Zap
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useApp } from '../context/AppContext'
import { examChapters, questionPool } from '../data/questions'

const EXAM_LENGTH = 30
const EXAM_DURATION_SEC = 30 * 60

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ExamEngine({ initialMode = 'practice', onExit, onOpenReview }) {
  const ctx = useApp()
  const { recordExam, toggleFlagQuestion, clearFlagged } = ctx
  const examHistory = ctx.examHistory ?? []
  const flaggedQuestions = ctx.flaggedQuestions ?? {}
  const [stage, setStage] = useState('setup') // setup | running | review
  const [mode, setMode] = useState(initialMode) // 'practice' | 'exam' | 'drill'
  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState({})
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_SEC)
  const startedAtRef = useRef(null)

  useEffect(() => {
    if (stage !== 'running' || mode !== 'exam') return
    if (secondsLeft <= 0) {
      finishExam()
      return
    }
    const t = setInterval(() => setSecondsLeft(s => s - 1), 1000)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, mode, secondsLeft])

  const startExam = (chosenMode, opts = {}) => {
    let pool = questionPool
    if (opts.chapterFilter && opts.chapterFilter !== 'all') {
      pool = pool.filter(q => q.chapter === opts.chapterFilter)
    }
    if (chosenMode === 'drill') {
      pool = pool.filter(q => flaggedQuestions[q.id])
    }
    if (pool.length === 0) return

    const limit = chosenMode === 'exam' ? EXAM_LENGTH : Math.min(EXAM_LENGTH, pool.length)
    const picked = shuffle(pool).slice(0, Math.min(limit, pool.length))
    setQuestions(picked)
    setAnswers({})
    setRevealed({})
    setCurrentIdx(0)
    setMode(chosenMode)
    setSecondsLeft(EXAM_DURATION_SEC)
    setStage('running')
    startedAtRef.current = Date.now()
  }

  const finishExam = () => {
    const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answer ? 1 : 0), 0)
    const durationSec = Math.round((Date.now() - (startedAtRef.current || Date.now())) / 1000)
    const byCategory = {}
    const responses = []
    questions.forEach(q => {
      const bucket = (byCategory[q.category] ??= { right: 0, total: 0 })
      bucket.total += 1
      if (answers[q.id] === q.answer) bucket.right += 1
      const selected = answers[q.id]
      responses.push({
        questionId: q.id,
        selectedOption: selected === undefined ? null : selected,
        isCorrect: selected === q.answer
      })
    })
    recordExam({ mode, score, total: questions.length, durationSec, byCategory, responses })
    setStage('review')
  }

  const current = questions[currentIdx]
  const answeredCount = Object.keys(answers).length
  const flaggedCount = Object.keys(flaggedQuestions).length

  if (stage === 'setup') {
    return (
      <ExamSetup
        onStart={startExam}
        history={examHistory}
        flaggedCount={flaggedCount}
        onClearFlagged={clearFlagged}
        onExit={onExit}
        onOpenReview={onOpenReview}
      />
    )
  }

  if (stage === 'review') {
    const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answer ? 1 : 0), 0)
    return (
      <ExamReview
        questions={questions}
        answers={answers}
        score={score}
        flaggedQuestions={flaggedQuestions}
        onToggleFlag={toggleFlagQuestion}
        onRetake={() => setStage('setup')}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <ExamHeader
        mode={mode}
        secondsLeft={secondsLeft}
        currentIdx={currentIdx}
        total={questions.length}
        answeredCount={answeredCount}
        onExit={() => {
          if (confirm('Exit this exam? Your progress will be lost.')) onExit()
        }}
        onFinish={finishExam}
      />

      <ExamQuestion
        q={current}
        idx={currentIdx}
        selected={answers[current.id]}
        revealed={mode === 'practice' && revealed[current.id]}
        flagged={!!flaggedQuestions[current.id]}
        onToggleFlag={() => toggleFlagQuestion(current.id)}
        onAnswer={(optIdx) => {
          setAnswers(a => ({ ...a, [current.id]: optIdx }))
          if (mode === 'practice') setRevealed(r => ({ ...r, [current.id]: true }))
        }}
        mode={mode}
      />

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
          disabled={currentIdx === 0}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        {currentIdx === questions.length - 1 ? (
          <button
            onClick={finishExam}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Flag className="w-4 h-4" /> Finish exam
          </button>
        ) : (
          <button
            onClick={() => setCurrentIdx(i => Math.min(questions.length - 1, i + 1))}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <QuestionGrid
        questions={questions}
        currentIdx={currentIdx}
        answers={answers}
        flaggedQuestions={flaggedQuestions}
        onJump={(i) => setCurrentIdx(i)}
      />
    </div>
  )
}

/* ─── Setup ──────────────────────────────────────────────────────────── */

function ExamSetup({ onStart, history, flaggedCount, onClearFlagged, onExit, onOpenReview }) {
  const [chapterFilter, setChapterFilter] = useState('all')

  const filteredCount = useMemo(() => {
    if (chapterFilter === 'all') return questionPool.length
    return questionPool.filter(q => q.chapter === chapterFilter).length
  }, [chapterFilter])

  return (
    <div className="space-y-5 animate-fade-in">
      <button
        onClick={onExit}
        className="md:hidden inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <header>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Mock Exam Engine</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl">
          Practice by chapter or take a full random exam. Total pool: <strong>{questionPool.length}</strong> questions across 15 textbook chapters.
        </p>
      </header>

      {/* Chapter filter */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          <Filter className="w-3.5 h-3.5" /> Practice by chapter
        </div>
        <div className="flex flex-wrap gap-1.5">
          <CategoryChip
            label="Full Random Exam"
            active={chapterFilter === 'all'}
            count={questionPool.length}
            onClick={() => setChapterFilter('all')}
          />
          {examChapters.map(c => {
            const count = questionPool.filter(q => q.chapter === c.chapter).length
            return (
              <CategoryChip
                key={c.chapter}
                label={`Ch ${c.chapter} — ${c.title}`}
                active={chapterFilter === c.chapter}
                count={count}
                onClick={() => setChapterFilter(c.chapter)}
              />
            )
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <ModeCard
          title="Practice Mode"
          subtitle="Instant feedback after every question"
          desc={`${Math.min(EXAM_LENGTH, filteredCount)} questions. Best for learning — explanations appear immediately. No timer.`}
          icon={Zap}
          accent="emerald"
          disabled={filteredCount === 0}
          onClick={() => onStart('practice', { chapterFilter })}
          cta="Start practice"
        />
        <ModeCard
          title="Timed Exam"
          subtitle="Full simulation, no feedback until end"
          desc={`${EXAM_LENGTH} questions, ${EXAM_DURATION_SEC / 60} minutes. Just like the real exam.`}
          icon={GraduationCap}
          accent="brand"
          disabled={filteredCount === 0}
          onClick={() => onStart('exam', { chapterFilter })}
          cta="Start timed exam"
        />
      </div>

      {/* Drill flagged */}
      {flaggedCount > 0 && (
        <div className="rounded-2xl border-2 border-amber-300/70 dark:border-amber-700/40 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-900 p-5">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5" /> Flagged questions
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Drill {flaggedCount} flagged question{flaggedCount === 1 ? '' : 's'}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Re-test only the questions you flagged for review.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onStart('drill')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600"
              >
                <Star className="w-4 h-4" /> Drill flagged
              </button>
              <button
                onClick={() => {
                  if (confirm(`Clear all ${flaggedCount} flagged questions?`)) onClearFlagged()
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 dark:bg-rose-950/30 dark:text-rose-300 dark:hover:bg-rose-900/30"
              >
                <Trash2 className="w-4 h-4" /> Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Recent results
            </h2>
            <span className="text-[10px] font-medium text-slate-400">Tap to review</span>
          </div>
          <div className="space-y-2">
            {history.slice(0, 5).map(e => (
              <HistoryRow key={e.id} entry={e} onOpen={onOpenReview} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function labelForMode(m) {
  if (m === 'exam') return 'Timed Exam'
  if (m === 'drill') return 'Flag Drill'
  return 'Practice'
}

function HistoryRow({ entry, onOpen }) {
  const pct = Math.round((entry.score / entry.total) * 100)
  const passing = pct >= 70
  const clickable = typeof onOpen === 'function'
  const Comp = clickable ? 'button' : 'div'
  const dt = new Date(entry.date)
  return (
    <Comp
      onClick={clickable ? () => onOpen(entry.id) : undefined}
      className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition
        ${clickable
          ? 'bg-slate-50 hover:bg-brand-50 dark:bg-slate-800/50 dark:hover:bg-brand-950/30 cursor-pointer group'
          : 'bg-slate-50 dark:bg-slate-800/50'}`}
    >
      <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm
        ${passing ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                  : 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300'}`}>
        {pct}%
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
          {entry.score} / {entry.total} correct
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {labelForMode(entry.mode)} • {dt.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })} {dt.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' })} • {Math.round(entry.durationSec / 60)} min
        </p>
      </div>
      {clickable && (
        <ChevronRight className="shrink-0 w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition" />
      )}
    </Comp>
  )
}

export { HistoryRow }

function CategoryChip({ label, active, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition inline-flex items-center gap-1.5
        ${active
          ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'}`}
    >
      {label}
      <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold
        ${active ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700'}`}>
        {count}
      </span>
    </button>
  )
}

function ModeCard({ title, subtitle, desc, icon: Icon, accent, onClick, cta, disabled }) {
  const styles = accent === 'brand'
    ? 'from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900'
    : 'from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800'
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-left p-6 rounded-2xl bg-gradient-to-br ${styles} text-white shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed`}
    >
      <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="text-white/80 text-sm">{subtitle}</p>
      <p className="text-white/90 text-sm mt-3 leading-relaxed">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
        {cta} <ChevronRight className="w-4 h-4" />
      </span>
    </button>
  )
}

/* ─── Running ───────────────────────────────────────────────────────── */

function ExamHeader({ mode, secondsLeft, currentIdx, total, answeredCount, onExit, onFinish }) {
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')
  const lowTime = mode === 'exam' && secondsLeft < 300
  const pct = Math.round((answeredCount / total) * 100)

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
      <div className="flex items-center justify-between gap-3">
        <button onClick={onExit} className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-rose-600">
          <ArrowLeft className="w-4 h-4" /> Exit
        </button>
        {mode === 'exam' && (
          <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm font-bold
            ${lowTime ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 animate-pulse' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
            <Clock className="w-4 h-4" />
            {mm}:{ss}
          </div>
        )}
        <button onClick={onFinish} className="text-sm font-semibold text-brand-700 dark:text-brand-400 hover:underline">
          Finish
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="text-slate-500 dark:text-slate-400">
          Question <span className="font-bold text-slate-900 dark:text-white">{currentIdx + 1}</span> / {total}
        </span>
        <span className="text-slate-500 dark:text-slate-400">
          {answeredCount} of {total} answered ({pct}%)
        </span>
      </div>
      <div className="mt-1.5 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div className="h-full bg-brand-600 transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function ExamQuestion({ q, idx, selected, revealed, flagged, onToggleFlag, onAnswer, mode }) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 animate-slide-up">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300 font-bold">
            Q{idx + 1}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-semibold">
            {q.category}
          </span>
        </div>
        <button
          onClick={onToggleFlag}
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition
            ${flagged
              ? 'bg-amber-500 text-white hover:bg-amber-600'
              : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-amber-950/30'}`}
          aria-label={flagged ? 'Unflag question' : 'Flag question for review'}
        >
          {flagged ? <Star className="w-3.5 h-3.5 fill-current" /> : <BookmarkPlus className="w-3.5 h-3.5" />}
          {flagged ? 'Flagged' : 'Flag'}
        </button>
      </div>

      <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
        {q.question}
      </h2>

      <div className="mt-4 space-y-2">
        {q.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrect = i === q.answer
          const showResult = revealed
          let cls = 'border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-700 hover:bg-brand-50/40 dark:hover:bg-brand-950/20'
          if (showResult && isCorrect) cls = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-700'
          else if (showResult && isSelected && !isCorrect) cls = 'border-rose-400 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-700'
          else if (isSelected) cls = 'border-brand-500 bg-brand-50 dark:bg-brand-950/30 dark:border-brand-700'
          return (
            <button
              key={i}
              disabled={revealed}
              onClick={() => onAnswer(i)}
              className={`w-full flex items-start gap-3 text-left p-3.5 rounded-xl border-2 transition ${cls}`}
            >
              <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold
                ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}
                ${showResult && isCorrect ? '!bg-emerald-500 !text-white' : ''}
                ${showResult && isSelected && !isCorrect ? '!bg-rose-500 !text-white' : ''}`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed pt-0.5">{opt}</span>
              {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-auto mt-0.5" />}
              {showResult && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-auto mt-0.5" />}
            </button>
          )
        })}
      </div>

      {mode === 'practice' && revealed && (
        <div className="mt-4 rounded-xl border border-amber-300/70 dark:border-amber-700/40 bg-amber-50/70 dark:bg-amber-950/20 p-4 animate-fade-in">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-semibold text-sm">
            <Eye className="w-4 h-4" /> Explanation
          </div>
          <p className="mt-1.5 text-sm text-slate-800 dark:text-slate-100 leading-relaxed">{q.explanation}</p>
        </div>
      )}
    </article>
  )
}

function QuestionGrid({ questions, currentIdx, answers, flaggedQuestions, onJump }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">Question map</p>
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q, i) => {
          const answered = answers[q.id] !== undefined
          const isCurrent = i === currentIdx
          const isFlagged = flaggedQuestions[q.id]
          return (
            <button
              key={q.id}
              onClick={() => onJump(i)}
              className={`relative w-8 h-8 rounded-md text-xs font-bold transition
                ${isCurrent
                  ? 'bg-brand-600 text-white ring-2 ring-brand-600/30'
                  : answered
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 hover:bg-emerald-200'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              {i + 1}
              {isFlagged && <Star className="absolute -top-1 -right-1 w-3 h-3 text-amber-500 fill-amber-500" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Review ────────────────────────────────────────────────────────── */

function ExamReview({ questions, answers, score, flaggedQuestions, onToggleFlag, onRetake, onExit }) {
  const total = questions.length
  const pct = Math.round((score / total) * 100)
  const passing = pct >= 70
  const byCat = useMemo(() => {
    const bucket = {}
    questions.forEach(q => {
      const b = (bucket[q.category] ??= { right: 0, total: 0 })
      b.total += 1
      if (answers[q.id] === q.answer) b.right += 1
    })
    return bucket
  }, [questions, answers])

  return (
    <div className="space-y-5 animate-fade-in">
      <div className={`rounded-2xl p-6 sm:p-8 text-white shadow-xl
        ${passing ? 'bg-gradient-to-br from-emerald-500 to-emerald-700' : 'bg-gradient-to-br from-rose-500 to-rose-700'}`}>
        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5" /> Exam complete
        </div>
        <p className="mt-2 text-5xl sm:text-6xl font-extrabold">{pct}%</p>
        <p className="text-lg font-semibold mt-1">{score} / {total} correct</p>
        <p className="mt-2 text-white/90 text-sm max-w-md">
          {passing
            ? 'Strong work — that\'s in the passing zone. Flag the few misses and drill them again.'
            : 'Not yet at the 70% target. Flag every wrong answer below and run a Flag Drill.'}
        </p>
        <div className="mt-4 flex gap-2">
          <button onClick={onRetake} className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-lg text-sm font-semibold transition">
            <RotateCcw className="w-4 h-4" /> Retake
          </button>
          <button onClick={onExit} className="inline-flex items-center gap-1.5 bg-white text-slate-900 hover:bg-white/90 px-3 py-1.5 rounded-lg text-sm font-semibold transition">
            Back to dashboard
          </button>
        </div>
      </div>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          Performance by category
        </h2>
        <div className="space-y-3">
          {Object.entries(byCat).map(([cat, v]) => {
            const p = Math.round((v.right / v.total) * 100)
            const tone = p >= 80 ? 'emerald' : p >= 60 ? 'amber' : 'rose'
            const colors = { emerald: 'bg-emerald-500', amber: 'bg-amber-500', rose: 'bg-rose-500' }[tone]
            return (
              <div key={cat}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700 dark:text-slate-200">{cat}</span>
                  <span className="text-slate-500 dark:text-slate-400">{v.right} / {v.total} ({p}%)</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className={`h-full ${colors} transition-all duration-700`} style={{ width: `${p}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          Review each question
        </h2>
        <div className="space-y-3">
          {questions.map((q, i) => {
            const userAns = answers[q.id]
            const correct = userAns === q.answer
            const flagged = !!flaggedQuestions[q.id]
            return (
              <article key={q.id}
                className={`rounded-xl border p-4
                  ${correct
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/50'
                    : 'bg-rose-50/40 dark:bg-rose-950/10 border-rose-200 dark:border-rose-900/50'}`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs">
                    {correct ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 dark:text-rose-300 font-bold">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect
                      </span>
                    )}
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{q.category}</span>
                  </div>
                  <button
                    onClick={() => onToggleFlag(q.id)}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold transition
                      ${flagged
                        ? 'bg-amber-500 text-white hover:bg-amber-600'
                        : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700 dark:bg-slate-800 dark:text-slate-300'}`}
                    aria-label={flagged ? 'Unflag' : 'Flag for drill'}
                  >
                    {flagged ? <Star className="w-3 h-3 fill-current" /> : <BookmarkPlus className="w-3 h-3" />}
                    {flagged ? 'Flagged' : 'Flag'}
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                  Q{i + 1}. {q.question}
                </p>
                <div className="mt-2 space-y-1.5 text-sm">
                  {!correct && userAns !== undefined && (
                    <p className="text-rose-700 dark:text-rose-300">
                      <span className="font-semibold">Your answer:</span> {String.fromCharCode(65 + userAns)}. {q.options[userAns]}
                    </p>
                  )}
                  {userAns === undefined && (
                    <p className="text-slate-500 italic flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Unanswered
                    </p>
                  )}
                  <p className="text-emerald-700 dark:text-emerald-300">
                    <span className="font-semibold">Correct:</span> {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">Why: </span>
                  {q.explanation}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
