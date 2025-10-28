import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  settings: {
    theme: 'light',
  },
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    hydrate(state, action) {
      return action.payload || state
    },
    addTask: {
      reducer(state, action) {
        state.tasks.unshift(action.payload)
      },
      prepare(task) {
        return {
          payload: {
            id: nanoid(),
            title: task.title,
            category: task.category,
            description: task.description || '',
            dueDate: task.dueDate,
            isCompleted: false,
            createdAt: new Date().toISOString(),
          },
        }
      },
    },
    updateTask(state, action) {
      const idx = state.tasks.findIndex(t => t.id === action.payload.id)
      if (idx !== -1) state.tasks[idx] = { ...state.tasks[idx], ...action.payload }
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },
    toggleComplete(state, action) {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) task.isCompleted = !task.isCompleted
    },
    setTheme(state, action) {
      state.settings.theme = action.payload
    },
    clearAll(state) {
      state.tasks = []
    },
  },
})

export const { hydrate, addTask, updateTask, deleteTask, toggleComplete, setTheme, clearAll } = tasksSlice.actions
export default tasksSlice.reducer
