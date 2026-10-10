import ProjectCard from '@/Components/ProjectCard'

const Projects = [
    {
        id: 'readingful',
        link: 'https://readingful.com',
        title: 'Readingful',
        description:
            "A children's reading-practice platform. This was a project from my previous work that I heavily contributed to.",
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    },
    {
        id: 'assistant-app',
        link: null,
        title: 'Assistant App',
        description:
            'A desktop personal assistant designed primarily for Windows. This project is currently in progress still.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Tauri', 'SQLite', 'Python'],
    },
    {
        id: 'clinify',
        link: null,
        title: 'Clinify',
        description:
            'A desktop app for simple storage and retrieval of patient information and documents. Built this together with two friends of mine.',
        technologies: ['Flutter', 'PostgreSQL', 'Python'],
    },
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="scroll-mt-[90px] border-t border-slate-800 py-24">
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
                <span className="h-px w-10 bg-teal-400" />
                Projects
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {Projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
            <a
                href="https://github.com/GKG01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
            >
                View more on Github
            </a>
        </section>
    )
}
