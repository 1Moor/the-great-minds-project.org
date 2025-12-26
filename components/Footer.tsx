export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-2 text-sm">
        <div className="space-y-2">
          <p className="text-gray-300 font-semibold">Navigate</p>
          <div className="grid grid-cols-2 gap-2 text-gray-400">
            <a className="hover:text-white" href="/about">About</a>
            <a className="hover:text-white" href="/programs">Programs</a>
            <a className="hover:text-white" href="/booking">Booking</a>
            <a className="hover:text-white" href="/donate">Donate</a>
            <a className="hover:text-white" href="/blog">Blog</a>
            <a className="hover:text-white" href="/events">Events</a>
            <a className="hover:text-white" href="/contact">Contact</a>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-300 font-semibold">Legal</p>
          <p className="text-gray-400">
            © {new Date().getFullYear()} The Great Minds Project 5.0. All rights reserved.
          </p>
          <p className="text-gray-500">
            Guided by the principle:{" "}
            <span className="italic text-gray-300">“The Thought Is The Cause Of It All”</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
