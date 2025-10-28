import reducer, { addTask, updateTask, deleteTask, toggleComplete, setTheme } from './taskSlice'

function baseState() {
  return {
    tasks: [],
    settings: { theme: 'light' },
  }
}

test('addTask adds a task with defaults', () => {
  const state = baseState()
  const next = reducer(state, addTask({ title: 'Test', category: 'Work', dueDate: '2099-01-01' }))
  expect(next.tasks.length).toBe(1)
  expect(next.tasks[0]).toMatchObject({ title: 'Test', category: 'Work', isCompleted: false })
})

test('updateTask updates task fields', () => {
  const s1 = reducer(baseState(), addTask({ title: 'A', category: 'Work', dueDate: '2099-01-01' }))
  const id = s1.tasks[0].id
  const s2 = reducer(s1, updateTask({ id, title: 'B' }))
  expect(s2.tasks[0].title).toBe('B')
})

test('toggleComplete flips completion', () => {
  const s1 = reducer(baseState(), addTask({ title: 'A', category: 'Work', dueDate: '2099-01-01' }))
  const id = s1.tasks[0].id
  const s2 = reducer(s1, toggleComplete(id))
  expect(s2.tasks[0].isCompleted).toBe(true)
})

test('deleteTask removes task', () => {
  const s1 = reducer(baseState(), addTask({ title: 'A', category: 'Work', dueDate: '2099-01-01' }))
  const id = s1.tasks[0].id
  const s2 = reducer(s1, deleteTask(id))
  expect(s2.tasks.length).toBe(0)
})

test('setTheme updates theme', () => {
  const s1 = baseState()
  const s2 = reducer(s1, setTheme('dark'))
  expect(s2.settings.theme).toBe('dark')
})
