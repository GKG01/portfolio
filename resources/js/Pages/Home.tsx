import { Head } from '@inertiajs/react'
import BackendConnection from '@/Components/BackendConnection'
import AppLayout from '@/Layouts/AppLayout'

function Home({ appName }: { appName: string }) {

  return (
    <AppLayout>
      <Head title={appName} />
      <section className="w-full">
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-teal-400">Your next project starts here</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{appName}</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">A clean foundation for your next idea. Laravel, Inertia, a React interface, MySQL, and Tailwind CSS to make it yours.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {['Laravel', 'Inertia', 'React', 'MySQL', 'TypeScript', 'Tailwind CSS', 'Vite'].map((name) => (
            <span key={name} className="rounded-full border border-slate-700 px-4 py-2 text-sm">{name}</span>
          ))}
        </div>
        <BackendConnection />
        <p className="mt-6 text-sm text-slate-500">Edit resources/js/Pages/Home.tsx and routes/web.php to start building.</p>
      </section>
    </AppLayout>
  )
}

export default Home
