const packages = [
  {
    title: "Keynote Address",
    desc: "A high-impact talk on thought, narrative, transformation, and justice-centered reform.",
    duration: "45–75 minutes",
  },
  {
    title: "Spoken Word Performance",
    desc: "A curated performance experience designed for campuses, conferences, and community events.",
    duration: "20–45 minutes",
  },
  {
    title: "Workshop",
    desc: "Interactive authorship-centered learning rooted in language, reflection, and dignity.",
    duration: "60–120 minutes",
  },
  {
    title: "Residency / Multi-Session Series",
    desc: "A deeper engagement: workshops, dialogues, and programmatic delivery over multiple days or weeks.",
    duration: "Custom",
  },
];

export default function BookingPage() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-400">Booking</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Book Demetris Knuckles El
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Speaking, workshops, performances, and residencies that align thought, narrative authorship,
            and justice-centered reform with measurable purpose.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          {packages.map((p) => (
            <div key={p.title} className="border border-gray-900 rounded-2xl p-6 bg-neutral-950">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="text-gray-300 mt-3 leading-relaxed">{p.desc}</p>
              <p className="text-sm text-gray-400 mt-4">Typical duration: {p.duration}</p>
            </div>
          ))}
        </section>

        <section className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-4">
          <h2 className="text-2xl font-bold">Booking request</h2>
          <p className="text-gray-300">
            For now, submit your request by email. (We can add a full form + scheduling tool next.)
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@thegreatmindsproject.org?subject=Booking%20Request%20-%20The%20Great%20Minds%20Project%205.0"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-black hover:opacity-90"
            >
              Email booking request
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-gray-700 hover:border-gray-500"
            >
              Contact page
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
