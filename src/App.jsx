import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AllTasks from './pages/AllTasks'
import About from './pages/About'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  return (
    <div className="min-h-full">
      <header className="border-b border-slate-200 dark:border-slate-800">
        <nav className="container-app flex items-center justify-between py-3">
          <div className="flex items-center gap-6">
            <NavLink to="/" className="text-xl font-bold">TaskSphere</NavLink>
            <div className="hidden md:flex items-center gap-4 text-sm">
              <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'}>Dashboard</NavLink>
              <NavLink to="/tasks" className={({isActive}) => isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'}>All Tasks</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'}>About</NavLink>
            </div>
          </div>
          <ThemeToggle />
        </nav>
      </header>
      <main className="py-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<AllTasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}
