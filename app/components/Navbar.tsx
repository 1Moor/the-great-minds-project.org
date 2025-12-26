"use client";
import { usePathname } from "next/navigation";
    export default function Navbar() {
        const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 py-5">
        <a
          className="text-white font-extrabold tracking-tight text-lg md:text-xl hover:opacity-90"
          href="/"
        >
          THE GREAT MINDS PROJECT 5.0
        </a>

        <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base">
         <a
  className={
    pathname === "/about"
      ? "text-white font-semibold underline underline-offset-8"
      : "text-white/80 hover:text-white transition"
  }
  href="/about"
>
  About
</a>
 
          <a
  className={
    pathname === "/programs"
      ? "text-white font-semibold underline underline-offset-8"
      : "text-white/80 hover:text-white transition"
  }
  href="/programs"
>
  Programs
</a>

          <a
  className={
    pathname === "/donate"
      ? "text-white font-semibold underline underline-offset-8"
      : "text-white/80 hover:text-white transition"
  }
  href="/donate"
>
  Donate
</a>

          <a
  className={
    pathname === "/contact"
      ? "text-white font-semibold underline underline-offset-8"
      : "text-white/80 hover:text-white transition"
  }
  href="/contact"
>
  Contact
</a>

        </div>
      </nav>
    </header>
  );
}
