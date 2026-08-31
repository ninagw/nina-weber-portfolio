export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-8 md:min-h-screen md:px-10 md:pb-0">
      {/* Email tagline */}
      <p className="pt-24 font-serif text-xl italic text-accent-vermilion md:pt-28 md:text-3xl">
        Nina Weber
      </p>

      {/* Overlapping editorial image */}
      <div className="pointer-events-none absolute right-0 top-[24%] z-0 w-[62%] max-w-[640px] md:top-[22%] md:w-[42%]">
        <img
          src="/images/hero.png"
          alt="Nina working at her desk, shot in an editorial film style"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Massive display headline */}
      <div className="relative z-10 mt-12 md:mt-10">
        <h1 className="display-serif text-accent-vermilion">
          <span className="block bg-transparent text-[clamp(2.75rem,13vw,15rem)]">DEVELOPER</span>
          <span className="block bg-transparent text-[clamp(2.75rem,13vw,15rem)]">PORTFOLIO</span>
        </h1>
      </div>

      {/* Bottom meta row */}
      <div className="relative z-10 mt-auto flex flex-col gap-4 pt-12 md:absolute md:inset-x-10 md:bottom-8 md:mt-0 md:flex-row md:items-end md:justify-between md:pt-0">
        <p className="max-w-md font-sans text-base leading-relaxed text-ink md:text-lg">
          Self-taught web developer building for the browser today and the
          blockchain tomorrow.
        </p>
        <p className="font-sans text-sm uppercase tracking-[0.15em] text-ink/60">
          Munich, DE — Est. 2021
        </p>
      </div>
    </section>
  )
}
