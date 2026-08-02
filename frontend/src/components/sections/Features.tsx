export default function Features() {
  const features = [
    {
      icon: "🧠",
      title: "AI Learning Roadmap",
      description:
        "Generate a personalized roadmap based on your goals, skills, and available time.",
    },
    {
      icon: "👥",
      title: "Smart Team Matching",
      description:
        "Find the best teammates using AI based on level, interests, and availability.",
    },
    {
      icon: "📅",
      title: "AI Session Planner",
      description:
        "Every study session has a clear agenda, objectives, and follow-up tasks.",
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description:
        "Track learning progress, completed goals, streaks, and team performance.",
    },
    {
      icon: "🏆",
      title: "Challenges & Rewards",
      description:
        "Stay motivated with achievements, XP, badges, and collaborative challenges.",
    },
    {
      icon: "🤖",
      title: "AI Mentor",
      description:
        "Ask questions anytime and receive guidance, explanations, and study advice.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Everything you need to learn better
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            PeerLearn AI combines planning, collaboration, AI assistance, and
            progress tracking into one intelligent learning platform.
          </p>
        </div>

        <div className="flex h-full flex-col rounded-3xl mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >
              <div className="text-6xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
