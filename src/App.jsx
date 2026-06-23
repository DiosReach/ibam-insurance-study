import { useState } from 'react'
import Dashboard from './components/Dashboard'
import ExamEngine from './components/ExamEngine'
import MobileNav from './components/MobileNav'
import Sidebar from './components/Sidebar'
import StudyView from './components/StudyView'

export default function App() {
  const [view, setView] = useState('dashboard') // 'dashboard' | 'study' | 'exam'
  const [studyDay, setStudyDay] = useState(1)
  const [examMode, setExamMode] = useState('practice')

  const goToDay = (day) => {
    setStudyDay(day)
    setView('study')
  }

  const startExam = (mode) => {
    setExamMode(mode)
    setView('exam')
  }

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Sidebar view={view} onNavigate={setView} />
      <main className="flex-1 min-w-0 overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 pb-24 md:pb-10">
          {view === 'dashboard' && (
            <Dashboard onOpenDay={goToDay} onStartExam={startExam} />
          )}
          {view === 'study' && (
            <StudyView initialDay={studyDay} onBack={() => setView('dashboard')} />
          )}
          {view === 'exam' && (
            <ExamEngine initialMode={examMode} onExit={() => setView('dashboard')} />
          )}
        </div>
      </main>
      <MobileNav view={view} onNavigate={setView} />
    </div>
  )
}
