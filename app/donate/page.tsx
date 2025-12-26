export default function DonatePage() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-400">Donate</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Support the work
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Your support helps advance education-centered reform, narrative authorship programming,
            reentry support, and community rebuilding efforts.
          </p>
        </header>

        <section className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-4">
          <h2 className="text-2xl font-bold">How donations are used</h2>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Program delivery (workshops, series, residencies)</li>
            <li>Curriculum printing and participant materials</li>
            <li>Community partnerships and travel support</li>
            <li>Program evaluation and reporting</li>
          </ul>
        </section>

        <section className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-4">
          <h2 className="text-2xl font-bold">Donate now</h2>
          <p className="text-gray-300">
            If you already have a donation link (Stripe/PayPal/fiscal sponsor), place it here.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-black hover:opacity-90"
          >
            Add your donation link
          </a>

          <p className="text-sm text-gray-500">
            We can connect Stripe Checkout or a fiscal sponsor donation page next.
          </p>
        </section>
      </div>
    </main>
  );
}
