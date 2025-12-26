export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/20 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Column 1 */}
          <div className="space-y-3">
            <p className="text-white font-semibold">Navigate</p>
            <div className="grid gap-2">
              <a className="text-white hover:text-blue-400 transition" href="/about">
                About
              </a>
              <a className="text-white hover:text-blue-400 transition" href="/programs">
                Programs
              </a>
              <a className="text-white hover:text-blue-400 transition" href="/booking">
                Booking
              </a>
              <a className="text-white hover:text-blue-400 transition" href="/donate">
                Donate
              </a>
              <a className="text-white hover:text-blue-400 transition" href="/blog">
                Blog
              </a>
              <a className="text-white hover:text-blue-400 transition" href="/events">
                Events
              </a>
              <a className="text-white hover:text-blue-400 transition" href="/contact">
                Contact
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <p className="text-white font-semibold">Guiding Principle</p>
            <p className="text-white leading-relaxed italic">
              “The Thought Is The Cause Of It All”
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <p className="text-white font-semibold">Legal</p>
            <p className="text-white text-sm">
              © {new Date().getFullYear()} The Great Minds Project 5.0. All rights reserved.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white">
          Built with purpose. Powered by narrative.
        </div>
      </div>
    </footer>
  );
}
