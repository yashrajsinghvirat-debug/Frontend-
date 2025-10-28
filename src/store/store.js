import { configureStore } from '@reduxjs/toolkit'
import tasksReducer, { hydrate } from './taskSlice'
import { loadState, saveStateDebounced } from '../utils/storage'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
})

// Hydrate from localStorage
const persisted = loadState()
if (persisted) {
  try {
    store.dispatch(hydrate(persisted))
  } catch (e) {
    // ignore corrupt state
  }
}

// Persist on change with debounce
store.subscribe(() => {
  const state = store.getState()
  saveStateDebounced({
    tasks: state.tasks.tasks,
    settings: state.tasks.settings,
  })
})
