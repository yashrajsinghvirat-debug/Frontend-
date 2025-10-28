import { isAfter, parseISO, startOfDay } from 'date-fns'

export function validateTask(input) {
  const errors = {}
  const title = (input.title || '').trim()
  if (!title) errors.title = 'Title is required'

  const category = (input.category || '').trim()
  if (!category) errors.category = 'Category is required'

  if (!input.dueDate) {
    errors.dueDate = 'Due date is required'
  } else {
    const today = startOfDay(new Date())
    const due = startOfDay(parseISO(input.dueDate))
    if (isAfter(today, due)) {
      errors.dueDate = 'Due date cannot be in the past'
    }
  }

  return { valid: Object.keys(errors).length === 0, errors }
}
