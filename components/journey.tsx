const JOURNEY = [
  { year: "since 2024", text: "Web Developer – E.ON Digital Technology" },
  { year: "2024", text: "HerHackathon — Beiersdorf project" },
  { year: "2024", text: "Web Development Bootcamp – neuefische GmbH" },
  { year: "2023", text: "Web Development Bootcamp – App Brewery" },
  { year: "2022", text: "Master's thesis on NFTs & blockchain" },
  {
    year: "2021",
    text: "First interaction with code during my master\u2019s degree",
  },
  {
    year: "2018 — 2021",
    text: "Building websites and working with various CMS in publishing",
  },
  { year: "before 2018", text: "WordPress blogs and websites, just for fun" },
];

export function Journey() {
  return (
    <section id="journey" className="border-t border-border px-5 py-20 md:px-10 md:py-28">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h2 className="font-serif text-4xl italic text-accent-vermilion md:text-6xl">
          My Tech Journey
        </h2>
        <span className="font-sans text-sm uppercase tracking-[0.15em] text-ink/60">
          A path into code
        </span>
      </div>

      <ol className="mt-14 md:mt-20">
        {JOURNEY.map((item) => (
          <li
            key={item.year + item.text}
            className="grid grid-cols-1 gap-2 border-t border-border py-6 md:grid-cols-12 md:items-baseline md:gap-8"
          >
            <span className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-accent-vermilion md:col-span-3">
              {item.year}
            </span>
            <span className="font-serif text-2xl leading-tight text-ink md:col-span-9 md:text-3xl">
              {item.text}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
