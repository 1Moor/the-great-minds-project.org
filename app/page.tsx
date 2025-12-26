export default function Home() {
  return (
    <main className="px-6">
      {/* HERO */}
      <section className="mx-auto max-w-6xl pt-16 md:pt-24 pb-14 md:pb-20 text-center">
        <p className="text-white/70 uppercase tracking-[0.25em] text-xs">
          Presented by The Great Minds Project 5.0
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
          Transforming thought.
          <span className="block">Dismantling harmful narratives.</span>
          <span className="block">Rebuilding communities.</span>
        </h1>

        <p className="mx-auto max-w-3xl mt-6 text-white/80 text-lg leading-relaxed">
          The Great Minds Project 5.0 exists to address the systems of crime and punishment by transforming thought,
          dismantling harmful narratives, and advancing criminal and social justice reform through education,
          narrative authorship, and community rebuilding.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/booking"
            className="rounded-xl px-7 py-3 bg-white text-black font-semibold hover:opacity-90 transition"
          >
            Book Demetris
          </a>
          <a
            href="/programs/still-healing"
            className="rounded-xl px-7 py-3 border border-white/20 text-white font-semibold hover:border-white/40 transition"
          >
            Explore STILL HEALING
          </a>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <p className="text-white/70">Guided by the principle</p>
          <p className="mt-2 italic text-white text-xl">
            “The Thought Is The Cause Of It All”
          </p>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="mx-auto max-w-6xl border-y border-white/10 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-semibold">Justice Reform</p>
          <p className="text-white/70 mt-2 leading-relaxed">
            Ending juvenile life-without-parole sentencing and challenging the narratives that justify it.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold">Education + Authorship</p>
          <p className="text-white/70 mt-2 leading-relaxed">
            Curriculum and workshops rooted in language, dignity, reflection, and narrative ownership.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold">Community Rebuilding</p>
          <p className="text-white/70 mt-2 leading-relaxed">
            Supporting reentry, reintegration, stigma removal, and pathway-building for impacted communities.
          </p>
        </div>
      </section>

      {/* FEATURED PROGRAM */}
      <section className="mx-auto max-w-6xl py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-white/70 uppercase tracking-[0.25em] text-xs">
            Featured Program
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
            STILL HEALING
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed text-lg">
            A poetry-based, non-clinical healing and authorship curriculum designed for individuals and communities
            directly and indirectly impacted by incarceration—without diagnosis, forced disclosure, or therapeutic framing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/programs/still-healing"
              className="rounded-xl px-7 py-3 bg-white text-black font-semibold hover:opacity-90 transition"
            >
              View Program
            </a>
            <a
              href="/contact"
              className="rounded-xl px-7 py-3 border border-white/20 text-white font-semibold hover:border-white/40 transition"
            >
              Bring it to Your Space
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black p-8">
          <h3 className="text-white font-semibold text-xl">Core Outcomes</h3>
          <ul className="mt-5 space-y-3 text-white/80 list-disc pl-5">
            <li>Emotional literacy through language and reflection</li>
            <li>Narrative ownership without retraumatization</li>
            <li>Identity rebuilding beyond stigma and labels</li>
            <li>Structured, dignified self-authorship</li>
          </ul>
        </div>
      </section>

      {/* FOUNDER CTA */}
      <section className="mx-auto max-w-6xl pb-20">
        <div className="rounded-2xl border border-white/10 p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Partner with The Great Minds Project 5.0
          </h3>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Universities, nonprofits, foundations, community organizations, and justice-impacted institutions:
            bring speaking, workshops, and program delivery into your space with clarity, dignity, and measurable purpose.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/booking"
              className="rounded-xl px-7 py-3 bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Booking Options
            </a>
            <a
              href="/donate"
              className="rounded-xl px-7 py-3 border border-white/20 text-white font-semibold hover:border-white/40 transition"
            >
              Support the Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
