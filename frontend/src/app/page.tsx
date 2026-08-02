export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-6xl font-bold text-gray-900">
        PeerLearn AI
      </h1>

      <p className="mt-6 max-w-2xl text-center text-lg text-gray-600">
        AI Operating System for Collaborative Learning
      </p>

      <button className="mt-10 rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90">
        Get Started
      </button>
    </main>
  );
}