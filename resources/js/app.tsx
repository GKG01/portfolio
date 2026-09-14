import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'

void createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob<{ default: typeof import('./Pages/Home').default }>('./Pages/**/*.tsx')
    const page = pages[`./Pages/${name}.tsx`]
    if (!page) throw new Error(`Unknown Inertia page: ${name}`)
    return page().then((module) => module.default)
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
