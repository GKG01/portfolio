import gmailIcon from '@/assets/gmail.svg'

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex min-h-[calc(100vh-90px)] scroll-mt-[90px] items-center border-t border-slate-800 py-24"
        >
            <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12 lg:p-16">
                <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
                    <span className="h-px w-10 bg-teal-400" />
                    Contact
                </p>
                <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Have a project in mind?
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                    I’m always open to thoughtful conversations, new ideas, and opportunities to build something useful.
                </p>
                <a
                    href="https://mail.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200"
                >
                    <img src={gmailIcon} alt="" aria-hidden="true" className="size-5" />
                    giankristoffgerodias@gmail.com <span aria-hidden="true">↗</span>
                </a>
            </div>
        </section>
    )
}
