export default function ContactPage() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-400">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact The Great Minds Project 5.0
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Partnership inquiries, program requests, media, and booking. Reach out and we’ll respond.
          </p>
        </header>

        <section className="border border-gray-900 rounded-2xl p-6 bg-neutral-950 space-y-4">
          <h2 className="text-2xl font-bold">Email</h2>
          <p className="text-gray-300">
            <a className="underline hover:text-white" href="mailto:info@thegreatmindsproject.org">
              info@thegreatmindsproject.org
            </a>
          </p>

          <div className="pt-2">
            <a
              href="mailto:info@thegreatmindsproject.org?subject=Inquiry%20-%20The%20Great%20Minds%20Project%205.0"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-black hover:opacity-90"
            >
              Send an email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
