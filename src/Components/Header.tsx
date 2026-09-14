import { useEffect, useState } from 'react'
import gradPic from '@/assets/grad-pic.jpeg'

const navigationItems = [
    { label: 'About Me', href: '#about-me' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

export default function Header() {
    const [activeSection, setActiveSection] = useState('about-me')

    useEffect(() => {
        const updateActiveSection = () => {
            const sectionIds = navigationItems.map((item) => item.href.slice(1))
            const currentSection = sectionIds.reduce((activeId, sectionId) => {
                const section = document.getElementById(sectionId)

                return section && section.offsetTop - 120 <= window.scrollY ? sectionId : activeId
            }, sectionIds[0])

            setActiveSection(currentSection)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })

        return () => window.removeEventListener('scroll', updateActiveSection)
    }, [])

    return (
        <header className="sticky top-0 z-50 flex h-[90px] w-full items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 backdrop-blur sm:px-10">
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
                    {navigationItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                                className={`transition-colors hover:text-teal-300 focus-visible:text-teal-300 focus-visible:outline-none ${activeSection === item.href.slice(1) ? 'text-teal-300 underline decoration-2 underline-offset-8' : ''}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
