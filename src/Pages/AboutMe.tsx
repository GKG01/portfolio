import gradPic from '@/assets/grad-pic.jpeg'

export function AboutMe() {
    return (
        <section
            id="about-me"
            className="relative grid min-h-[calc(100vh-90px)] scroll-mt-[90px] gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20"
        >
            <div className="relative z-10">
                <div className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
                    <span className="h-px w-10 bg-teal-400" />
                    About me
                </div>
                <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-7xl">
                    I build digital experiences with <span className="text-teal-300">purpose.</span>
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
                    I’m Gian, a developer who enjoys turning thoughtful ideas into simple, useful, and polished
                    products. This is a small collection of the work, skills, and curiosities that shape my craft.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                        href="#experience"
                        className="rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200 active:opacity-75"
                    >
                        View my work
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200 transition hover:border-teal-300 hover:text-teal-300 active:opacity-75"
                    >
                        Let’s connect <span aria-hidden="true">↗</span>
                    </a>
                </div>
                <div className="mt-14 flex gap-10 border-t border-slate-800 pt-6 text-sm">
                    <div>
                        <p className="text-2xl font-bold text-white">01</p>
                        <p className="mt-1 text-slate-500">Curious mind</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">∞</p>
                        <p className="mt-1 text-slate-500">Things to learn</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">100%</p>
                        <p className="mt-1 text-slate-500">Personal touch</p>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
                <div className="absolute -right-4 -top-4 size-24 rounded-full border border-teal-300/30 sm:-right-8 sm:-top-8 sm:size-32" />
                <div className="absolute -bottom-5 -left-5 size-24 rounded-full bg-teal-300/10 blur-2xl sm:-bottom-8 sm:-left-8 sm:size-40" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900 shadow-2xl shadow-teal-950/30">
                    <img src={gradPic} alt="Gian" className="size-full object-cover object-top" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent px-7 pb-7 pt-24">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Hello, I’m Gian</p>
                        <p className="mt-2 text-sm text-slate-300">Developer · Lifelong learner</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
