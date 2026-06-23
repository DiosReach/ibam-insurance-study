import {
  Car,
  Check,
  ChevronRight,
  Clock,
  Flame,
  GraduationCap,
  ScrollText,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import { curriculum } from '../data/curriculum'
import { questionPool } from '../data/questions'

const TOTAL = 15

const categoryColor = {
  Foundations:  'bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300',
  'Contract Law': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300',
  Regulation:   'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/40 dark:text-fuchsia-300',
  Process:      'bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
  Property:     'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  Commercial:   'bg-teal-100 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300',
  Liability:    'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  Automobile:   'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300',
  Ethics:       'bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300',
  Specialty:    'bg-lime-100 text-lime-700 dark:bg-lime-950/40 dark:text-lime-300'
}

export default function Dashboard({ onOpenDay, onStartExam, onNavigate }) {
  const { completedDays, examHistory } = useApp()
  const completedInRange = completedDays.filter(n => n >= 1 && n <= TOTAL).length
  const pct = Math.round((completedInRange / TOTAL) * 100)
  const nextCh = curriculum.find(c => !completedDays.includes(c.chapter)) ?? curriculum[TOTAL - 1]
  const bestScore = examHistory.reduce(
    (m, e) => Math.max(m, Math.round((e.score / e.total) * 100)),
    0
  )

  return (
    <div className="space-y-6 animate-fade-in">
      <header>
        <p className="text-sm font-medium text-brand-600 dark:text-brand-400">Welcome back</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
          15-Chapter Master Study App — IBAC Fundamentals
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
          Aligned to the IBAC textbook table of contents. Read each chapter&apos;s summaries, drill the key terms, then quiz yourself by chapter or take a full random exam.
        </p>
      </header>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Stat icon={TrendingUp}     label="Chapters Done" value={`${completedInRange}/${TOTAL}`} accent="text-brand-600" />
        <Stat icon={Target}         label="Progress"       value={`${pct}%`}                     accent="text-emerald-600" />
        <Stat icon={Flame}          label="Question Bank"  value={questionPool.length}           accent="text-amber-600" />
        <Stat icon={GraduationCap}  label="Best Score"     value={bestScore ? `${bestScore}%` : '—'} accent="text-fuchsia-600" />
      </section>

      <section className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-xl shadow-brand-900/20">
          <div className="flex items-center gap-2 text-brand-100 text-xs font-medium uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" /> Next up
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mt-2">Chapter {nextCh.chapter}: {nextCh.title}</h2>
          <p className="text-brand-100 mt-1 text-sm">{nextCh.objective}</p>
          <div className="flex items-center gap-3 mt-4 text-xs text-brand-100">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {nextCh.estMinutes} min</span>
            <span>•</span>
            <span>{nextCh.flashcards.length} key terms</span>
          </div>
          <button
            onClick={() => onOpenDay(nextCh.chapter)}
            className="mt-5 inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Open chapter <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide">
            <GraduationCap className="w-3.5 h-3.5" /> Quick test
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">Run a mock exam</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {questionPool.length}-question pool. Practice by chapter or take a full random exam.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => onStartExam('practice')}
              className="px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-900/40 text-sm font-semibold transition"
            >
              Practice
            </button>
            <button
              onClick={() => onStartExam('exam')}
              className="px-3 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700 text-sm font-semibold transition"
            >
              Timed Exam
            </button>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 gap-3">
        <ToolCard
          icon={ScrollText}
          title="Statutory Conditions Cheat Sheet"
          subtitle="All 14 SCs of the Manitoba Insurance Act"
          accent="indigo"
          onClick={() => onNavigate?.('cheatsheet')}
        />
        <ToolCard
          icon={Car}
          title="MPI Premium Calculator"
          subtitle="See how DSR, deductibles, and liability shift Autopac premiums"
          accent="rose"
          onClick={() => onNavigate?.('mpi')}
        />
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">15-Chapter Roadmap</h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">{completedInRange} of {TOTAL} complete</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {curriculum.map(ch => {
            const done = completedDays.includes(ch.chapter)
            return (
              <button
                key={ch.chapter}
                onClick={() => onOpenDay(ch.chapter)}
                className={`text-left p-4 rounded-xl border transition group relative overflow-hidden
                  ${done
                    ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md'}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold
                      ${done
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-brand-100 group-hover:text-brand-700 dark:group-hover:bg-brand-950/40 dark:group-hover:text-brand-300'}`}>
                      {done ? <Check className="w-4 h-4" /> : ch.chapter}
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${categoryColor[ch.category] || categoryColor.Foundations}`}>
                      {ch.category}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white text-sm leading-snug">{ch.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {ch.estMinutes}m</span>
                  <span>{ch.flashcards.length} terms</span>
                </div>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function Stat({ icon: Icon, label, value, accent }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
        <Icon className={`w-3.5 h-3.5 ${accent}`} />
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</div>
    </div>
  )
}

function ToolCard({ icon: Icon, title, subtitle, accent, onClick }) {
  const accents = {
    indigo: 'from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 shadow-indigo-900/20',
    rose:   'from-rose-600 to-rose-800 hover:from-rose-700 hover:to-rose-900 shadow-rose-900/20'
  }
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 rounded-2xl bg-gradient-to-br ${accents[accent] ?? accents.indigo} text-white shadow-lg transition flex items-center gap-4`}
    >
      <div className="shrink-0 w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-base leading-snug">{title}</h3>
        <p className="text-white/80 text-xs mt-0.5">{subtitle}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-white/70" />
    </button>
  )
}
