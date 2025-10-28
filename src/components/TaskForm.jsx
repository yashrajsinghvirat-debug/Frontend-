import { useDispatch } from 'react-redux'
import { addTask } from '../store/taskSlice'
import { validateTask } from '../utils/validators'
import { useState } from 'react'

export default function TaskForm() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ title: '', category: '', description: '', dueDate: '' })
  const [errors, setErrors] = useState({})

  function submit(e) {
    e.preventDefault()
    const res = validateTask(form)
    setErrors(res.errors)
    if (!res.valid) return
    dispatch(addTask(form))
    setForm({ title: '', category: '', description: '', dueDate: '' })
  }

  return (
    <form onSubmit={submit} className="card p-4 grid gap-3">
      <div>
        <label className="block text-sm mb-1">Title</label>
        <input className="input" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">Category</label>
        <select className="input" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
          <option value="">Select</option>
          <option>Work</option>
          <option>Study</option>
          <option>Personal</option>
        </select>
        {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">Due Date</label>
        <input type="date" className="input" value={form.dueDate} onChange={e => setForm({ ...form, dueDate: e.target.value })} />
        {errors.dueDate && <p className="text-red-600 text-sm mt-1">{errors.dueDate}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">Description</label>
        <textarea className="input" rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      </div>
      <div className="flex justify-end">
        <button className="btn" type="submit">Add Task</button>
      </div>
    </form>
  )
}
