import clsx from 'clsx'

export default function FilterBar({ query, onQuery, category, onCategory, status, onStatus }) {
  return (
    <div className={clsx('card p-3 mb-4 grid gap-2 md:grid-cols-3')}>
      <input
        className="input"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <select className="input" value={category} onChange={(e) => onCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option>Work</option>
        <option>Study</option>
        <option>Personal</option>
      </select>
      <select className="input" value={status} onChange={(e) => onStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}
