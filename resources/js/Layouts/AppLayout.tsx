import type { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return <main className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16">{children}</main>
}
