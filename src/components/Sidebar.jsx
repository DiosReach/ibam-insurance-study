import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Moon,
  Sun,
  Trash2
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const links = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'study',     label: 'Study',     icon: BookOpen },
  { id: 'exam',      label: 'Mock Exam', icon: GraduationCap }
]

export default function Sidebar({ view, onNavigate }) {
  const { theme, toggleTheme, resetAll, completedDays } = useApp()
  const pct = Math.round((completedDays.length / 14) * 100)

  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
      <div className="px-6 py-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-md shadow-brand-900/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">IBAM Prep</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Fundamentals — 14 Days</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Roadmap Progress</span>
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400">{pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(link => {
          const active = view === link.id
          const Icon = link.icon
          return (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                ${active
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50'}`}
            >
              <Icon className={`w-4 h-4 ${active ? 'text-brand-600 dark:text-brand-400' : ''}`} />
              {link.label}
            </button>
          )
        })}
      </nav>

      <div className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 transition"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          onClick={() => {
            if (confirm('Reset all progress, mastery, and exam history?')) resetAll()
          }}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
        >
          <Trash2 className="w-4 h-4" />
          Reset Progress
        </button>
      </div>
    </aside>
  )
}
