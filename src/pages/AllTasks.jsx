import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import FilterBar from '../components/FilterBar'
import TaskCard from '../components/TaskCard'

export default function AllTasks() {
  const tasks = useSelector(s => s.tasks.tasks)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')

  const filtered = useMemo(() => {
    return tasks.filter(t => {
      if (query && !t.title.toLowerCase().includes(query.toLowerCase())) return false
      if (category && t.category !== category) return false
      if (status === 'completed' && !t.isCompleted) return false
      if (status === 'pending' && t.isCompleted) return false
      return true
    })
  }, [tasks, query, category, status])

  return (
    <div className="container-app">
      <h1 className="text-2xl font-bold mb-3">All Tasks</h1>
      <FilterBar
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={setCategory}
        status={status}
        onStatus={setStatus}
      />
      <div className="grid gap-3">
        {filtered.length === 0 ? (
          <div className="card p-6 text-center text-slate-500">No tasks match your filters.</div>
        ) : (
          filtered.map(t => <TaskCard key={t.id} task={t} />)
        )}
      </div>
    </div>
  )
}
