import { useEffect, useState } from 'react'

type Health = { status: string; app: string }
type Connection = { state: 'loading' | 'error' } | { state: 'success'; data: Health }

export default function BackendConnection() {
  const [connection, setConnection] = useState<Connection>({ state: 'loading' })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)
    let active = true
    fetch('/api/health', { signal: controller.signal, headers: { Accept: 'application/json' } })
      .then(async (response) => {
        if (!response.ok) throw new Error('API unavailable')
        const data: Health = await response.json()
        if (data.status !== 'ok' || typeof data.app !== 'string') throw new Error('Invalid response')
        if (active) setConnection({ state: 'success', data })
      })
      .catch(() => { if (active) setConnection({ state: 'error' }) })
      .finally(() => clearTimeout(timeout))
    return () => { active = false; clearTimeout(timeout); controller.abort() }
  }, [attempt])

  return (
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div role="status" aria-live="polite">
            <h2 className="text-lg font-medium">Backend connection</h2>
            <p className="mt-2 text-slate-400">
              {connection.state === 'loading' && 'Connecting to the Laravel API…'}
              {connection.state === 'success' && `${connection.data.app} is connected and ready.`}
              {connection.state === 'error' && 'The API is unavailable. Start the Laravel server, then try again.'}
            </p>
          </div>
          <button className="mt-5 rounded-lg bg-teal-400 px-4 py-2 font-medium text-slate-950 transition hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400 disabled:cursor-wait disabled:opacity-50" disabled={connection.state === 'loading'} onClick={() => { setConnection({ state: 'loading' }); setAttempt((value) => value + 1) }}>Check connection</button>
        </div>
  )
}
