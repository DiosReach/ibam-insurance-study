import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AppContext = createContext(null)

const DEFAULT_PROGRESS = {
  completedDays: [],     // array of day numbers
  flashcardMastery: {},  // { "1-Pure Risk": "known" | "review" }
  examHistory: [],       // [{ id, date, mode, score, total, durationSec, byCategory: {...} }]
  theme: 'light'
}

export function AppProvider({ children }) {
  const [state, setState] = useLocalStorage('ibam-prep-state', DEFAULT_PROGRESS)

  useEffect(() => {
    const root = document.documentElement
    if (state.theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [state.theme])

  const toggleTheme = useCallback(() => {
    setState(s => ({ ...s, theme: s.theme === 'dark' ? 'light' : 'dark' }))
  }, [setState])

  const toggleDayComplete = useCallback((day) => {
    setState(s => {
      const set = new Set(s.completedDays)
      set.has(day) ? set.delete(day) : set.add(day)
      return { ...s, completedDays: [...set].sort((a, b) => a - b) }
    })
  }, [setState])

  const markFlashcard = useCallback((day, term, status) => {
    setState(s => ({
      ...s,
      flashcardMastery: { ...s.flashcardMastery, [`${day}-${term}`]: status }
    }))
  }, [setState])

  const recordExam = useCallback((result) => {
    setState(s => ({
      ...s,
      examHistory: [
        { ...result, id: Date.now(), date: new Date().toISOString() },
        ...s.examHistory
      ].slice(0, 30)
    }))
  }, [setState])

  const resetAll = useCallback(() => {
    setState(DEFAULT_PROGRESS)
  }, [setState])

  const value = useMemo(
    () => ({ ...state, toggleTheme, toggleDayComplete, markFlashcard, recordExam, resetAll }),
    [state, toggleTheme, toggleDayComplete, markFlashcard, recordExam, resetAll]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
