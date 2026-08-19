export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a
          href="#top"
          className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-accent-vermilion md:text-base"
        >
          Nina Weber
        </a>
        <div className="flex items-center gap-4 font-serif text-base text-ink md:gap-9 md:text-2xl">
          <a href="#about" className="transition-opacity hover:opacity-60">
            About
          </a>
          <a href="#techstack" className="transition-opacity hover:opacity-60">
            Tech Stack
          </a>
          <a
            href="#projects"
            className="whitespace-nowrap transition-opacity hover:opacity-60"
          >
            Selected Work
            {/*<span className="hidden md:inline">Selected </span>Work*/}
          </a>
          <a href="#journey" className="transition-opacity hover:opacity-60">
            My Journey
          </a>
          <a href="#contact" className="transition-opacity hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
