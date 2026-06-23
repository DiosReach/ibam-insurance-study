import { BookOpen, GraduationCap, LayoutDashboard } from 'lucide-react'

const links = [
  { id: 'dashboard', label: 'Home',  icon: LayoutDashboard },
  { id: 'study',     label: 'Study', icon: BookOpen },
  { id: 'exam',      label: 'Exam',  icon: GraduationCap }
]

export default function MobileNav({ view, onNavigate }) {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-800 pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3">
        {links.map(link => {
          const active = view === link.id
          const Icon = link.icon
          return (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`flex flex-col items-center gap-1 py-2.5 text-xs font-medium transition
                ${active ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'}`}
            >
              <Icon className="w-5 h-5" />
              {link.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
