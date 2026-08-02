export default function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Active Learners",
    },
    {
      value: "500+",
      label: "Study Groups",
    },
    {
      value: "92%",
      label: "Goal Completion",
    },
    {
      value: "24/7",
      label: "AI Mentor",
    },
  ];

  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-white p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h2 className="text-5xl font-bold text-blue-600">
                {stat.value}
              </h2>

              <p className="mt-4 text-lg font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}