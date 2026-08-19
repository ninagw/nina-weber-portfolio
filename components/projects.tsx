type Project = {
  index: string
  title: string
  year: string
  image: string
  description: string
  tags: string[]
  githubUrl: string
  projectUrl: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Pocket Pets',
    year: '2024',
    image: '/images/proj-pets.png',
    description:
      'A cozy virtual-pet gaming app — care for your pets, play minigames and shop for treats, with weather, seasons and music. A four-week group project from my Web Development Bootcamp.',
    tags: ['React.js', 'Next.js', 'styled-components'],
    githubUrl: 'https://github.com/ninagw/pocket-pets',
    projectUrl: 'https://pocket-pets.example.com',
  },
  {
    index: '02',
    title: 'Quiz App',
    year: '2023',
    image: '/images/proj-quiz.png',
    description:
      'One of my first projects: answer, create and mark your own quiz questions. Built from scratch to learn the fundamentals.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ninagw/quiz-app',
    projectUrl: 'https://quiz-app.example.com',
  },
  {
    index: '03',
    title: 'Calculator',
    year: '2023',
    image: '/images/proj-calc.png',
    description:
      'A fully functional calculator with a modern, animated design. My playground for CSS animations and more complex JavaScript logic.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Vercel'],
    githubUrl: 'https://github.com/ninagw/calculator',
    projectUrl: 'https://calculator.example.com',
  },
  {
    index: '04',
    title: 'Event Website',
    year: '2021',
    image: '/images/proj-event.png',
    description:
      'My final journalism-school project: a mobile-first site to sell tickets, grow a newsletter and surface event details for online marketing traffic.',
    tags: ['WordPress', 'Marketing'],
    githubUrl: 'https://github.com/ninagw/event-website',
    projectUrl: 'https://event-website.example.com',
  },
  {
    index: '05',
    title: 'CMS Websites & Blogs',
    year: '2014 — 2018',
    image: '/images/proj-web.png',
    description:
      'Years of building websites and blogs on WordPress and Squarespace — from a travel blog to an affiliate interior blog — always valuing aesthetics, navigation and UX.',
    tags: ['WordPress', 'Squarespace'],
    githubUrl: 'https://github.com/ninagw/cms-websites',
    projectUrl: 'https://cms-websites.example.com',
  },
]

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="group grid items-center gap-6 md:grid-cols-12 md:gap-8">
      <div className={flip ? 'md:order-2 md:col-span-7' : 'md:col-span-7'}>
        <div className="overflow-hidden">
          <img
            src={project.image || '/placeholder.svg'}
            alt={`${project.title} project, editorial film style`}
            className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className={flip ? 'md:order-1 md:col-span-5' : 'md:col-span-5'}>
        <div className="flex items-baseline gap-4">
          <span className="font-sans text-sm font-bold tracking-[0.1em] text-ink/50">
            {project.index}
          </span>
          <span className="font-sans text-sm uppercase tracking-[0.12em] text-ink/50">
            {project.year}
          </span>
        </div>
        <h3 className="display-serif mt-3 text-[clamp(2.5rem,6vw,5rem)] text-accent-vermilion">
          {project.title}
        </h3>
        <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink/80 md:text-lg">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-ink/25 px-3 py-1 font-sans text-xs uppercase tracking-[0.1em] text-ink/70"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-ink px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-background transition-colors hover:bg-accent-vermilion"
          >
            GitHub
          </a>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-ink px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-accent-vermilion hover:text-accent-foreground"
          >
            Live Project
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="work" className="border-t border-border px-5 py-20 md:px-10 md:py-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h2 className="font-serif text-4xl italic text-accent-vermilion underline decoration-1 underline-offset-8 md:text-6xl">
          Selected Work
        </h2>
        <span className="font-sans text-sm uppercase tracking-[0.15em] text-ink/60">
          Five projects
        </span>
      </div>

      <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.title} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
