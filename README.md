# TaskSphere – Task Management Dashboard

Responsive, offline-capable task management dashboard built with React, Tailwind CSS, and Redux Toolkit. Features CRUD, filtering, theme persistence, analytics, and robust validation.

## Features
- **Task CRUD**
- **Categories** (Work, Study, Personal)
- **Due dates** with overdue highlighting
- **Dashboard analytics** (pie chart)
- **Search & filter** by title, category, status
- **Dark/Light mode** (persistent)
- **LocalStorage persistence** with debounce
- **Offline-first**
- **Form validations**
- **Responsive UI**

## Tech Stack
- React (Vite), React Router
- Redux Toolkit
- Tailwind CSS
- Axios
- Recharts
- Jest + React Testing Library

## Getting Started
1. Install deps
   ```bash
   npm i
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
3. Run tests
   ```bash
   npm test -- --watchAll=false
   ```

## Project Structure
```
src/
  components/
    TaskForm.jsx
    TaskCard.jsx
    FilterBar.jsx
    DashboardStats.jsx
    ThemeToggle.jsx
  pages/
    Dashboard.jsx
    AllTasks.jsx
    About.jsx
  store/
    taskSlice.js
    store.js
  utils/
    storage.js
    validators.js
  App.jsx
  main.jsx
  index.css
```

## Testing
- Unit tests for `taskSlice` and `validators`.
- Run: `npm test -- --watchAll=false`

## CI
GitHub Actions workflow at `.github/workflows/frontend-ci.yml`:
- Node 20.19
- Install deps
- Run tests
- Build

## Deployment
Frontend-only. Recommended: Vercel
1. Push to GitHub
2. Import repo in Vercel
3. Set Framework: Vite/React
4. Deploy → live link

## License
MIT
