import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

export default function DashboardStats({ tasks }) {
  const completed = tasks.filter(t => t.isCompleted).length
  const pending = tasks.length - completed
  const data = [
    { name: 'Completed', value: completed, color: '#16a34a' },
    { name: 'Pending', value: pending, color: '#f59e0b' },
  ]

  if (tasks.length === 0) {
    return (
      <div className="card p-6 text-center">
        <p className="text-slate-500">No tasks yet. Add your first task!</p>
      </div>
    )
  }

  return (
    <div className="card p-4 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
