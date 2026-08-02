export default function Problem() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            The Problem
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Learning today is fragmented.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
            Millions of learners struggle to find the right roadmap,
            collaborate effectively, and stay motivated throughout
            their learning journey.
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
  <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div className="text-4xl">📚</div>

    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
      Too Many Courses
    </h3>

    <p className="mt-3 text-gray-600">
      Learners waste time searching through endless resources without a clear roadmap.
    </p>
  </div>

  <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div className="text-4xl">🤝</div>

    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
      Hard to Find Study Partners
    </h3>

    <p className="mt-3 text-gray-600">
      Finding motivated teammates with similar goals is difficult.
    </p>
  </div>

  <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div className="text-4xl">📈</div>

    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
      No Progress Tracking
    </h3>

    <p className="mt-3 text-gray-600">
      Most learners have no system that keeps them accountable every day.
    </p>
  </div>
</div>

      </div>
    </section>
    
  );
  
}