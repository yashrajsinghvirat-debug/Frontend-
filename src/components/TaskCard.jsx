import { format, isAfter, parseISO, startOfDay } from 'date-fns'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleComplete } from '../store/taskSlice'

export default function TaskCard({ task }) {
  const dispatch = useDispatch()
  const due = startOfDay(parseISO(task.dueDate))
  const today = startOfDay(new Date())
  const overdue = isAfter(today, due) && !task.isCompleted

  return (
    <div className="card p-4 flex items-start justify-between gap-3">
      <div>
        <h3 className="font-semibold text-lg flex items-center gap-2">
          {task.isCompleted ? '✅' : '📝'} {task.title}
        </h3>
        <p className="text-sm text-slate-500">{task.category} • Due {format(due, 'MMM d, yyyy')}</p>
        {task.description && (
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200 line-clamp-2" title={task.description}>{task.description}</p>
        )}
        {overdue && <p className="text-red-600 text-sm mt-1">Overdue</p>}
      </div>
      <div className="flex gap-2">
        <button className="btn" onClick={() => dispatch(toggleComplete(task.id))}>{task.isCompleted ? 'Mark Pending' : 'Mark Done'}</button>
        <button className="btn" onClick={() => { if (confirm('Delete this task?')) dispatch(deleteTask(task.id)) }}>Delete</button>
      </div>
    </div>
  )
}
