import { buttonVariants } from "@/components/ui/button";

type Project = {
  index: string;
  title: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  repoURL: string;
  liveURL: string;
};

function isVideoSource(src: string) {
  return src.toLowerCase().endsWith(".mp4");
}

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Pocket Pets",
    year: "2024",
    image: "/images/proj-pocketpets_NinaWeber.png",
    description:
      "A cozy virtual-pet gaming app — care for your pets, play minigames and shop for treats, with weather, seasons and music. A four-week group project from my Web Development Bootcamp.",
    tags: ["React.js", "Next.js", "styled-components", "MongoDB", "Mongoose", "Vercel"],
    repoURL: "https://github.com/ninagw/pocket-pets",
    liveURL: "https://pocket-pets-kappa.vercel.app/",
  },
  {
    index: "02",
    title: "Quiz App",
    year: "2023",
    image: "/images/proj-quizapp_NinaWeber.png",
    description:
      "One of my first projects: answer, create and mark your own quiz questions. Built from scratch to learn the fundamentals.",
    tags: ["JavaScript", "HTML", "CSS"],
    repoURL: "https://github.com/ninagw/quiz-app",
    liveURL: "https://ninagw.github.io/quiz-app/",
  },
  {
    index: "03",
    title: "Calculator",
    year: "2023",
    image: "/images/proj-calc_NinaWeber_video.mp4",
    description:
      "A fully functional calculator with a modern, animated design. My playground for CSS animations and more complex JavaScript logic.",
    tags: ["JavaScript", "HTML", "CSS", "Vercel"],
    repoURL: "https://github.com/ninagw/calculator",
    liveURL: "https://webapp-calculator.vercel.app/",
  },
  {
    index: "04",
    title: "Event Website",
    year: "2021",
    image: "/images/proj-eventwebsite_NinaWeber.png",
    description:
      "My final journalism-school project: a mobile-first site to sell tickets, grow a newsletter and surface event details for online marketing traffic.",
    tags: ["WordPress", "Marketing", "Business Analysis", "Communication", "Design Thinking"],
    repoURL: "",
    liveURL: "",
  },
  {
    index: "05",
    title: "CMS Websites & Blogs",
    year: "2014 — 2018",
    image: "/images/proj-blogs_NinaWeber.png",
    description:
      "Years of building websites and blogs on WordPress and Squarespace — from a travel blog to an affiliate interior blog — always valuing aesthetics, navigation and UX.",
    tags: ["WordPress", "Squarespace", "UX Design", "Content Management"],
    repoURL: "",
    liveURL: "",
  },
];

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const repoURL = !!project.repoURL;
  const liveURL = !!project.liveURL;
  const hasVideo = isVideoSource(project.image);

  return (
    <article className="group grid items-center gap-6 md:grid-cols-12 md:gap-8">
      <div className={flip ? "md:order-2 md:col-span-7" : "md:col-span-7"}>
        <div className="overflow-hidden">
          {hasVideo ? (
            <video
              className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${project.title} project preview video`}
            >
              <source src={project.image} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} project, editorial film style`}
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}
        </div>
      </div>

      <div className={flip ? "md:order-1 md:col-span-5" : "md:col-span-5"}>
        <div className="flex items-baseline gap-4">
          <span className="font-sans text-sm font-bold tracking-widest text-ink/50">
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
              className="border border-ink/25 px-3 py-1 font-sans text-xs uppercase tracking-widest text-ink/70"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex mt-6 flex-wrap gap-2">
          {repoURL && (
            <a
              href={project.repoURL}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              To GitHub Repository
            </a>
          )}
          {liveURL && (
            <a
              href={project.liveURL}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-5 py-14 md:px-10 md:py-28"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h2 className="font-serif text-4xl italic text-accent-vermilion underline decoration-1 underline-offset-8 md:text-6xl">
          Selected Work
        </h2>
        <span className="font-sans text-sm uppercase tracking-[0.15em] text-ink/60">
          My projects
        </span>
      </div>

      <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
        {PROJECTS.map((project, i) => (
          <ProjectRow
            key={project.title}
            project={project}
            flip={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
