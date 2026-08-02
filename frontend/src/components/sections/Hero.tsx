export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">

      <span className="rounded-full border px-4 py-1 text-sm">
        UNESCO Hackathon 2026
      </span>

      <h1 className="mt-8 max-w-5xl text-6xl font-bold tracking-tight">
        PeerLearn AI
      </h1>

      <p className="mt-6 max-w-2xl text-xl text-gray-600">
        The Operating System for Collaborative Learning.
      </p>

      <p className="mt-4 max-w-3xl text-lg text-gray-500">
        AI builds your roadmap, forms study groups, guides every session,
        tracks your progress, and helps your team learn together.
      </p>

      <button className="mt-10 rounded-xl bg-black px-8 py-4 text-white">
        Get Started
      </button>

    </section>
  );
}