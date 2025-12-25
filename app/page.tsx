import React from "react";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          THE GREAT MINDS PROJECT 5.0 - JUSTICE THROUGH THOUGHT
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Transforming thought. Dismantling harmful narratives.
          Advancing criminal and social justice through education,
          narrative authorship, and community rebuilding.
        </p>

        <div className="border-t border-gray-700 pt-8 space-y-2 text-gray-400">
          <p>Guided by the principle:</p>
          <p className="italic text-xl text-white">
            “The Thought Is The Cause Of It All”
          </p>
        </div>
      </section>
    </main>
  );
}
