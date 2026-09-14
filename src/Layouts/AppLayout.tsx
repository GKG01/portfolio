import type { ReactNode } from 'react'
import Header from '@/Components/Header'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="mx-auto flex min-h-[calc(100vh-105px)] max-w-6xl items-center px-6 py-16 sm:px-10">
        {children}
      </div>
    </main>
  )
}
