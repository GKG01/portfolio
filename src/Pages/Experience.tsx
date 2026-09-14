const skills = ['React', 'React Native', 'Laravel', 'Flutter', 'FastAPI', 'PostgreSQL', 'MySQL', 'Firebase']

export default function Experience() {
    return (
        <section id="experience" className="min-h-[calc(100vh-90px)] scroll-mt-[90px] border-t border-slate-800 py-24">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                <div>
                    <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
                        <span className="h-px w-10 bg-teal-400" />
                        Experience
                    </div>
                    <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                        Building, learning, and improving.
                    </h2>
                    <p className="mt-6 max-w-md leading-7 text-slate-400">
                        A snapshot of the places and projects where I’ve grown as a software developer.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-semibold text-slate-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="space-y-5">
                    <article className="relative rounded-2xl border border-teal-300/40 bg-teal-300/[0.06] p-6 sm:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold text-teal-300">Aug 2025 — Sep 2026</p>
                                <h3 className="mt-2 text-xl font-bold text-white">Software Developer</h3>
                                <p className="mt-1 text-slate-400">MAC CORMACK, UNIPESSOAL LDA</p>
                            </div>
                            <span className="rounded-full border border-teal-300/30 px-3 py-1 text-xs font-semibold text-teal-200">
                                Professional
                            </span>
                        </div>
                        <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                            <li>Developed features, fixed bugs, and refactored existing applications.</li>
                            <li>Integrated Firebase Authentication and third-party services.</li>
                            <li>Built and tested mobile features with React Native and Expo.</li>
                            <li>Collaborated through pull requests, reviews, testing, and documentation.</li>
                        </ul>
                    </article>

                    <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
                        <p className="text-sm font-semibold text-teal-300">Feb 2025 — May 2025</p>
                        <h3 className="mt-2 text-xl font-bold text-white">Software Engineer Intern</h3>
                        <p className="mt-1 text-slate-400">HIPE Japan Inc.</p>
                        <p className="mt-5 text-sm leading-6 text-slate-300">
                            Refactored code, fixed bugs, and added features to the company’s Human Resource Information
                            System using React for the frontend and Laravel for the backend.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
                        <p className="text-sm font-semibold text-teal-300">May 2025 — Aug 2026</p>
                        <h3 className="mt-2 text-xl font-bold text-white">
                            Offline Medical Information Management App
                        </h3>
                        <p className="mt-1 text-slate-400">Client Project</p>
                        <p className="mt-5 text-sm leading-6 text-slate-300">
                            Collaborated on an offline desktop application for patient information management, built
                            with Flutter, FastAPI, and PostgreSQL.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}
