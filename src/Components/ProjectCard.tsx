type ProjectCardProps = {
    title: string
    description: string
    technologies: readonly string[]
    link?: string | null
    label?: string
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link = null,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-6 rounded-2xl border border-teal-300/40 bg-teal-300/[0.06] p-6">
            <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${title} (opens in a new tab)`}
                            className="shrink-0 rounded text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
                        >
                            View site <span aria-hidden="true">↗</span>
                        </a>
                    )}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </div>
    )
}
