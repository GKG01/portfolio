import type { ReactNode } from 'react'
import Header from '@/Components/Header'

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">{children}</div>
        </main>
    )
}
