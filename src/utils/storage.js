const STORAGE_KEY = 'tasksphere_state_v1'

let debounceTimer = null
export function saveStateDebounced(state, delay = 300) {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => saveState(state), delay)
}

export function saveState(state) {
  try {
    const serialized = JSON.stringify(state)
    localStorage.setItem(STORAGE_KEY, serialized)
  } catch (e) {
    // storage may be full or unavailable; noop
  }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (e) {
    // invalid JSON or access error
    return null
  }
}
