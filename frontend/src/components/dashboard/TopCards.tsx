const stats = [
  {
    title: "Active Courses",
    value: "12",
    icon: "📚",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Team Members",
    value: "8 Online",
    icon: "👥",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Weekly Streak",
    value: "12 Days",
    icon: "🔥",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "XP Earned",
    value: "2450 XP",
    icon: "⭐",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function TopCards() {
  return (
    <section className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${item.color}`}
            >
              {item.icon}
            </div>

            <h3 className="mt-6 text-lg font-semibold text-gray-500">
              {item.title}
            </h3>

            <p className="mt-2 text-4xl font-bold text-gray-900">
              {item.value}
            </p>

            <div className="mt-6 h-1 w-12 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-24 group-hover:bg-blue-600" />
          </div>
        ))}
      </div>
    </section>
  );
}