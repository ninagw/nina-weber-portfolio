export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-accent-vermilion px-5 py-14 text-accent-foreground md:px-10 md:py-28"
    >
      <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] opacity-80">
        Contact
      </p>

      <h2 className="display-serif mt-8 text-[clamp(3rem,12vw,11rem)]">
        LET&apos;S CONNECT
      </h2>

      <div className="mt-12 grid gap-10 border-t border-accent-foreground/25 pt-10 md:grid-cols-3">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.15em] opacity-70">
            Social
          </p>
          <a
            href="https://www.linkedin.com/in/nina-weber-54253b16a/"
            target="_blank"
            className="mt-2 block font-serif text-2xl italic transition-opacity hover:opacity-70 md:text-3xl"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.15em] opacity-70">
            Elsewhere
          </p>
          <a
            href="https://github.com/ninagw"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block font-serif text-2xl italic transition-opacity hover:opacity-70 md:text-3xl"
          >
            GitHub
          </a>
        </div>
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.15em] opacity-70">
            Based in
          </p>
          <p className="mt-2 font-serif text-2xl italic md:text-3xl">
            Munich, Germany
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-1 border-t border-accent-foreground/25 pt-6 text-sm opacity-70 md:flex-row md:items-center md:justify-between">
        <span className="font-sans uppercase tracking-[0.12em]">
          Nina Weber
        </span>
        <span className="font-sans">
          &copy; {new Date().getFullYear()} — Designed &amp; built with love and AI
        </span>
      </div>
    </footer>
  );
}
