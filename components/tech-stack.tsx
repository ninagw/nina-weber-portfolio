const STACK = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Stencil.js",
  "HTML",
  "CSS",
  "styled-components",
  "Shell",
  "MongoDB",
  "Git",
  "GitHub",
  "VS Code",
];

export function TechStack() {
  return (
    <section id="techstack" className="border-t border-border bg-accent-vermilion px-5 py-14 text-accent-foreground md:px-10 md:py-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h2 className="font-sans text-sm font-bold uppercase tracking-[0.15em]">
          Tech Stack
        </h2>
        <span className="font-serif text-lg italic opacity-80">
          Tools I build with
        </span>
      </div>

      <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 md:mt-14 md:gap-x-8">
        {STACK.map((item) => (
          <li
            key={item}
            className="display-serif text-[clamp(2rem,6vw,5rem)] leading-none transition-opacity hover:opacity-70"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
