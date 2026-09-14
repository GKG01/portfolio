const personalPortfolio = {
    title: 'Personal Portfolio',
    description: 'A responsive personal site for sharing my experience, projects, and the work I create.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
}

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-[90px] border-t border-slate-800 py-24">
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
                <span className="h-px w-10 bg-teal-400" />
                Projects
            </div>
            <div className="mt-10 max-w-md rounded-2xl border border-teal-300/40 bg-teal-300/[0.06] p-6">
                <p className="text-sm font-semibold text-teal-300">Personal project</p>
                <h2 className="mt-3 text-xl font-bold text-white">{personalPortfolio.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-400">{personalPortfolio.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                    {personalPortfolio.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
