import AppLayout from '@/Layouts/AppLayout'

function Home() {
    return (
        <AppLayout>
            <section className="w-full">
                <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-teal-400">
                    Your next project starts here
                </p>
                <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">portfolio</h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                    A clean foundation for your next idea. React, TypeScript, and Tailwind CSS to make it yours.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((name) => (
                        <span key={name} className="rounded-full border border-slate-700 px-4 py-2 text-sm">
                            {name}
                        </span>
                    ))}
                </div>
            </section>
        </AppLayout>
    )
}

export default Home
