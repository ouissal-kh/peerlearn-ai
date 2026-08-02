import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
className="text-2xl font-extrabold text-gray-900 tracking-tight"        >
          PeerLearn AI
        </Link>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">
          <Link href="#features" className="text-gray-700 hover:text-black transition">
            Features
          </Link>

          <Link href="#how-it-works" className="text-gray-700 hover:text-black transition">
            How It Works
          </Link>

          <Link href="#rankings" className="text-gray-700 hover:text-black transition">
            Rankings
          </Link>

          <Link href="#about" className="text-gray-700 hover:text-black transition">
            About
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

   <button
  className="rounded-xl border border-black px-5 py-2 text-black transition hover:bg-black hover:text-white"
>
  Sign In
</button>

          <button className="rounded-xl bg-black px-5 py-2 text-white transition hover:opacity-90">
            Get Started
          </button>

        </div>

      </nav>
    </header>
  );
}