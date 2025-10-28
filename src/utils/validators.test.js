import { validateTask } from './validators'

const future = '2099-01-01'

test('invalid when missing fields', () => {
  const { valid, errors } = validateTask({ title: '', category: '', dueDate: '' })
  expect(valid).toBe(false)
  expect(errors.title).toBeTruthy()
  expect(errors.category).toBeTruthy()
  expect(errors.dueDate).toBeTruthy()
})

test('invalid when past date', () => {
  const { valid, errors } = validateTask({ title: 'A', category: 'Work', dueDate: '2000-01-01' })
  expect(valid).toBe(false)
  expect(errors.dueDate).toBeTruthy()
})

test('valid when proper', () => {
  const { valid, errors } = validateTask({ title: 'A', category: 'Work', dueDate: future })
  expect(valid).toBe(true)
  expect(errors).toEqual({})
})
