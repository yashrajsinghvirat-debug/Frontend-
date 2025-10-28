import { useSelector } from 'react-redux'
import TaskForm from '../components/TaskForm'
import DashboardStats from '../components/DashboardStats'
import TaskCard from '../components/TaskCard'

export default function Dashboard() {
  const tasks = useSelector(s => s.tasks.tasks)
  const recent = tasks.slice(0, 5)

  return (
    <div className="container-app space-y-4">
      <h1 className="text-2xl font-bold">TaskSphere Dashboard</h1>
      <TaskForm />
      <DashboardStats tasks={tasks} />
      <div className="grid gap-3">
        {recent.map(t => <TaskCard key={t.id} task={t} />)}
      </div>
    </div>
  )
}
