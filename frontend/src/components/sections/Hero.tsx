import Link from "next/link";
export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-8">
        <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
          UNESCO Youth Hackathon 2026
        </span>
      </div>

      <h1 className="mt-8 max-w-5xl text-6xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
        PeerLearn AI
      </h1>

      <h2 className="mt-6 max-w-4xl text-3xl font-semibold text-gray-800 md:text-5xl">
        The AI Operating System
        <br />
        for Collaborative Learning
      </h2>

      <p className="mt-4 max-w-3xl text-lg text-gray-500">
        AI builds your roadmap, forms study groups, guides every session, tracks
        your progress, and helps your team learn together.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/dashboard"
          className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Get Started
        </Link>

        <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition duration-300 hover:bg-gray-100">
          Watch Demo
        </button>
      </div>
    </section>
  );
}
