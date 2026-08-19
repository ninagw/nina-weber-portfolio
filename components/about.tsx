export function About() {
  return (
    <section id="about" className="border-t border-border px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <p className="font-serif text-2xl leading-tight text-ink md:text-4xl">
            {
              "I've always been fascinated by websites and new technologies — but it was my master's degree in 2022 that turned that curiosity into a love for coding."
            }
          </p>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ink/80 md:text-lg">
            Since then I&apos;ve taught myself to program through bootcamps,
            Udemy and a lot of YouTube. I moved from marketing and publishing
            into building things for the web, and I&apos;m now working toward a
            future in Web3 and blockchain development.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden">
            <img
              src="/images/about.png"
              alt="Close-up of hands typing on a laptop in an editorial film style"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-6 font-sans text-sm font-bold uppercase tracking-[0.12em] text-accent-vermilion">
            Nina G.W.
          </p>
          <p className="mt-3 font-serif text-3xl italic text-accent-vermilion md:text-4xl">
            Web Developer &amp; Aspiring Blockchain Dev
          </p>
        </div>
      </div>
    </section>
  )
}
