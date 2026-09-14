import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gradPic from '@/assets/grad-pic.jpeg'

const navigationItems = [
    { label: 'About Me', href: '#about-me' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Header() {
    const [activeSection, setActiveSection] = useState('about-me')
    const [indicator, setIndicator] = useState({ left: 0, width: 0 })
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

    useEffect(() => {
        const updateActiveSection = () => {
            const sectionIds = navigationItems.map((item) => item.href.slice(1))
            const currentSection = sectionIds.reduce((activeId, sectionId) => {
                const section = document.getElementById(sectionId)

                return section && section.getBoundingClientRect().top <= window.innerHeight * 0.55
                    ? sectionId
                    : activeId
            }, sectionIds[0])

            setActiveSection(currentSection)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })

        return () => window.removeEventListener('scroll', updateActiveSection)
    }, [])

    useLayoutEffect(() => {
        const activeLink = linkRefs.current[activeSection]

        if (!activeLink) {
            return
        }

        setIndicator({ left: activeLink.offsetLeft, width: activeLink.offsetWidth })
    }, [activeSection])

    useEffect(() => {
        const updateIndicator = () => {
            const activeLink = linkRefs.current[activeSection]

            if (activeLink) {
                setIndicator({ left: activeLink.offsetLeft, width: activeLink.offsetWidth })
            }
        }

        window.addEventListener('resize', updateIndicator)

        return () => window.removeEventListener('resize', updateIndicator)
    }, [activeSection])

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
                <ul className="relative flex items-center gap-5 text-xl font-semibold text-slate-400 sm:gap-8">
                    <span
                        aria-hidden="true"
                        className="absolute -bottom-2 h-0.5 rounded-full bg-teal-300 transition-[left,width] duration-300 ease-out"
                        style={{ left: indicator.left, width: indicator.width }}
                    />
                    {navigationItems.map((item) => {
                        const sectionId = item.href.slice(1)
                        const isActive = activeSection === sectionId

                        return (
                            <li key={item.label}>
                                <a
                                    ref={(element) => {
                                        linkRefs.current[sectionId] = element
                                    }}
                                    href={item.href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`transition-colors duration-300 active:opacity-75 hover:text-teal-300 focus-visible:text-teal-300 focus-visible:outline-none ${isActive ? 'text-teal-300' : ''}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
