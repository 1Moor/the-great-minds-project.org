export default function StillHealingPage() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-400">Program</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">STILL HEALING</h1>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            STILL HEALING is a poetry-based, non-clinical healing and authorship curriculum designed for individuals and
            communities directly and indirectly impacted by incarceration, trauma, and systemic harm—without diagnosis,
            forced disclosure, or therapeutic labeling.
          </p>
        </header>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-4">
            <h2 className="text-2xl font-bold">Who it’s for</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Justice-impacted individuals</li>
              <li>Colleges and universities</li>
              <li>Community organizations</li>
              <li>Reentry and transitional programs</li>
              <li>Educators and facilitators</li>
            </ul>
          </div>

          <div className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-4">
            <h2 className="text-2xl font-bold">What makes it different</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>No forced disclosure</li>
              <li>No clinical labels</li>
              <li>No retraumatization as a requirement</li>
              <li>Emphasis on dignity, choice, and pace</li>
            </ul>
          </div>
        </section>

        <section className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-4">
          <h2 className="text-2xl font-bold">Delivery formats</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="border border-gray-900 rounded-xl p-4">
              <p className="font-semibold text-white">One-day intensives</p>
              <p className="text-gray-400 mt-1">A concentrated introduction and experience.</p>
            </div>
            <div className="border border-gray-900 rounded-xl p-4">
              <p className="font-semibold text-white">Multi-week series</p>
              <p className="text-gray-400 mt-1">Structured modules delivered over time.</p>
            </div>
            <div className="border border-gray-900 rounded-xl p-4">
              <p className="font-semibold text-white">College residencies</p>
              <p className="text-gray-400 mt-1">Workshops + speaking + campus engagement.</p>
            </div>
            <div className="border border-gray-900 rounded-xl p-4">
              <p className="font-semibold text-white">Train-the-facilitator</p>
              <p className="text-gray-400 mt-1">Build internal capacity for delivery.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-black hover:opacity-90"
            >
              Bring STILL HEALING to your space
            </a>
            <a
              href="/booking"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-gray-700 hover:border-gray-500"
            >
              Booking options
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
