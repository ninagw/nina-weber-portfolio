export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-12 md:min-h-screen md:px-10 md:pb-0"
    >
      <p className="pt-24 font-serif text-xl italic text-accent-vermilion md:pt-28 md:text-3xl">
        Hi, I am Nina. Welcome to my
      </p>

      {/* Editorial image — in flow on mobile, overlapping on desktop */}
      <div className="pointer-events-none relative z-0 ml-auto mt-6 w-[70%] max-w-160 md:absolute md:right-0 md:top-[22%] md:mt-0 md:w-[42%]">
        <img
          src="/images/hero_1024px_NinaWeber_2.png"
          alt="Nina working at her desk, shot in an editorial film style"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Massive display headline */}
      <div className="relative z-10 mt-6 md:mt-10">
        <h1 className="display-serif text-accent-vermilion">
          <span className="block text-[clamp(2.75rem,13vw,15rem)]">
            DEVELOPER
          </span>
          <span className="block text-[clamp(2.75rem,13vw,15rem)]">
            PORTFOLIO
          </span>
        </h1>
      </div>

      {/* Meta row — in flow on mobile, pinned to bottom on desktop */}
      <div className="relative z-10 mt-8 flex flex-col gap-4 md:absolute md:inset-x-10 md:bottom-8 md:mt-0 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md font-sans text-base leading-relaxed text-ink md:text-lg">
          Self-taught web developer building for the browser today and the
          blockchain tomorrow.
        </p>
       {/* <p className="font-sans text-sm uppercase tracking-[0.15em] text-ink/60">
          Munich, DE — Est. 2021
        </p>*/}
      </div>
    </section>
  );
}