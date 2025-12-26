const programs = [
  {
    title: "STILL HEALING",
    desc:
      "A poetry-based, non-clinical healing and authorship curriculum for justice-impacted individuals and communities.",
    href: "/programs/still-healing",
  },
  {
    title: "Authorship & Identity Workshops",
    desc:
      "Interactive workshops focused on language, identity, and narrative ownership—designed for schools, campuses, and communities.",
    href: "/contact",
  },
  {
    title: "Justice-Impacted Leadership Dialogues",
    desc:
      "Facilitated dialogues that confront stigma, policy, and the cultural narratives that shape crime-and-punishment systems.",
    href: "/contact",
  },
];

export default function ProgramsPage() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-400">Programs</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Programs that move people—and systems.
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Our programs are the vehicles through which the mission is carried out—rooted in education, narrative authorship,
            and community rebuilding.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 hover:border-gray-700 transition"
            >
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="text-gray-300 mt-3 leading-relaxed">{p.desc}</p>
              <p className="text-sm text-gray-400 mt-6">Learn more →</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
