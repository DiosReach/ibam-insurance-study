import { AlertTriangle, ArrowLeft, BookOpenCheck, Clock, ScrollText, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { statutoryConditions } from '../data/statutoryConditions'

export default function CheatSheetView({ onBack }) {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className="space-y-5 animate-fade-in">
      <button
        onClick={onBack}
        className="md:hidden inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600"
      >
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </button>

      <header className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-900 p-6 text-white shadow-xl shadow-indigo-900/20">
        <div className="flex items-center gap-2 text-indigo-100 text-xs font-bold uppercase tracking-wider">
          <ScrollText className="w-4 h-4" /> Manitoba Insurance Act
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
          Statutory Conditions Cheat Sheet
        </h1>
        <p className="mt-2 text-indigo-100 text-sm max-w-2xl">
          All 14 statutory conditions deemed part of every fire/property contract in Manitoba (C.C.S.M. c.I40 Part V).
          Tap any card to expand the full rule. The "trap" line is the most-tested wording on the exam.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-indigo-100">
          <span className="inline-flex items-center gap-1"><BookOpenCheck className="w-3.5 h-3.5" /> 14 conditions</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Memorize key timings</span>
        </div>
      </header>

      <section className="grid sm:grid-cols-2 gap-3">
        {statutoryConditions.map(sc => {
          const open = expandedId === sc.number
          return (
            <article
              key={sc.number}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => setExpandedId(open ? null : sc.number)}
                className="w-full text-left p-5"
                aria-expanded={open}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 flex items-center justify-center font-bold text-sm">
                    SC {sc.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 dark:text-white">{sc.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{sc.key}</p>
                    {sc.timing && (
                      <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" /> {sc.timing}
                      </p>
                    )}
                  </div>
                </div>
              </button>
              {open && (
                <div className="px-5 pb-5 -mt-1 space-y-3 animate-fade-in">
                  <div className="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Full rule</p>
                    <p className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed">{sc.rule}</p>
                  </div>
                  {sc.trap && (
                    <div className="rounded-lg border border-amber-300/70 dark:border-amber-700/40 bg-amber-50/70 dark:bg-amber-950/20 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1 inline-flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Exam trap
                      </p>
                      <p className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed">{sc.trap}</p>
                    </div>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </section>

      <section className="rounded-2xl border-2 border-amber-300/70 dark:border-amber-700/40 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-slate-900 p-5">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Numbers you MUST memorize
        </div>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          {[
            { k: '15 days', v: 'Insurer cancellation (registered mail)' },
            { k: '5 days', v: 'Insurer cancellation (personal delivery)' },
            { k: '60 days', v: 'Loss payable after proof of loss (SC 12)' },
            { k: '30 days', v: 'Insurer notice to repair/replace (SC 13)' },
            { k: '45 days', v: 'Insurer must begin repair (SC 13)' },
            { k: '15 days', v: 'Insured to pay extra premium on material change (SC 4)' }
          ].map((row, i) => (
            <div key={i} className="rounded-lg bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 p-3">
              <p className="text-lg font-extrabold text-amber-700 dark:text-amber-300 tracking-tight">{row.k}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug mt-0.5">{row.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
