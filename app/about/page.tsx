export default function AboutPage() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-400">About</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Great Minds Project 5.0
          </h1>
          <p className="text-gray-300 leading-relaxed">
            The Great Minds Project 5.0 exists to address the systems of crime and punishment by transforming thought,
            dismantling harmful narratives, and advancing criminal and social justice reform through education,
            narrative authorship, and community rebuilding.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Guided by the principle “The Thought Is The Cause Of It All,” the organization works to end juvenile
            life-without-parole sentences, disrupt the school-to-prison pipeline, support reentry and reintegration,
            remove stigma associated with incarceration, rebuild marginalized communities, and confront cultural,
            political, and economic forces rooted in racism and classism that shape harmful outcomes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Our Philosophy</h2>
          <p className="text-gray-300 leading-relaxed">
            We believe transformation begins at the level of thought. Before behavior, there is belief. Before policy,
            there is narrative. By restoring language, authorship, and intellectual agency, we create conditions for
            people to interrupt cycles of harm and participate meaningfully in personal and community rebuilding.
          </p>
        </section>

        <section className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-3">
          <h2 className="text-2xl font-bold">Founder</h2>
          <p className="text-gray-300 leading-relaxed">
            Demetris Knuckles El is an author, poet, educator, and justice reform advocate, and the founder of The Great
            Minds Project 5.0. His work sits at the intersection of education, narrative authorship, and justice,
            offering clear frameworks for transformation grounded in lived experience and disciplined self-study.
          </p>
        </section>
      </div>
    </main>
  );
}
