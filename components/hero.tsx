export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 md:px-10">
      {/* Email tagline */}
      <p className="pt-24 font-serif text-xl italic text-accent-vermilion md:pt-28 md:text-3xl">
        Nina Weber
      </p>

      {/* Overlapping editorial image */}
      <div className="pointer-events-none absolute right-0 top-[26%] z-0 w-[58%] max-w-[640px] md:top-[22%] md:w-[42%]">
        <img
          src="/images/hero.png"
          alt="Nina working at her desk, shot in an editorial film style"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Massive display headline */}
      <div className="relative z-10 mt-6 md:mt-10">
        <h1 className="display-serif text-accent-vermilion">
          <span className="block text-[clamp(2.75rem,13vw,15rem)]">DEVELOPER</span>
          <span className="block text-[clamp(2.75rem,13vw,15rem)]">PORTFOLIO</span>
        </h1>
      </div>

      {/* Bottom meta row */}
      <div className="absolute inset-x-5 bottom-8 z-10 flex flex-col gap-4 md:inset-x-10 md:flex-row md:items-end md:justify-between">
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
