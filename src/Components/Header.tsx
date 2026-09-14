import gradPic from '@/assets/grad-pic.jpeg'

const navigationItems = ['About Me', 'Experience', 'Contact']

export default function Header() {
    return (
        <header className="flex h-[90px] w-full items-center justify-between border-b border-slate-800 px-6 sm:px-10">
            <div className="flex items-center gap-3">
                <div
                    aria-label="Photo placeholder"
                    className="size-16 overflow-hidden rounded-full border border-slate-600 bg-slate-900"
                >
                    <img src={gradPic} alt="Gian" className="size-full object-cover object-top" />
                </div>
                <span className="text-2xl font-medium tracking-tight text-slate-100">Gian</span>
            </div>

            <nav aria-label="Primary navigation" className="hidden sm:block">
                <ul className="flex items-center gap-5 text-xl font-semibold text-slate-400 sm:gap-8">
                    {navigationItems.map((item, index) => (
                        <li key={item}>
                            <button
                                type="button"
                                className={`transition-colors hover:text-teal-300 active:opacity-75 focus-visible:text-teal-300 focus-visible:outline-none ${index === 0 ? 'text-teal-300 underline decoration-2 underline-offset-8' : ''}`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
