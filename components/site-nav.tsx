export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a
          href="#top"
          className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-accent-vermilion md:text-base"
        >
          Nina G.W.
        </a>
        <div className="flex items-center gap-4 font-serif text-base text-ink md:gap-9 md:text-2xl">
          <a href="#about" className="transition-opacity hover:opacity-60">
            Info
          </a>
          <a href="#work" className="whitespace-nowrap transition-opacity hover:opacity-60">
            <span className="hidden md:inline">Selected </span>Work
          </a>
          <a href="#contact" className="transition-opacity hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
