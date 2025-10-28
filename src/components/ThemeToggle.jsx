import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setTheme } from '../store/taskSlice'

export default function ThemeToggle() {
  const theme = useSelector(s => s.tasks.settings.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <button className="btn" onClick={() => dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))}>
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
