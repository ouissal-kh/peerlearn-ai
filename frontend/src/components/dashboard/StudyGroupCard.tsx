const groups = [
  {
    name: "Cloud Computing",
    members: 8,
    level: "Intermediate",
    nextSession: "Today • 7:00 PM",
  },
  {
    name: "Web Development",
    members: 12,
    level: "Beginner",
    nextSession: "Tomorrow • 5:00 PM",
  },
  {
    name: "Artificial Intelligence",
    members: 6,
    level: "Advanced",
    nextSession: "Friday • 6:30 PM",
  },
];

export default function StudyGroupCard() {
  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <div
          key={group.name}
          className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">
              {group.name}
            </h3>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              {group.level}
            </span>
          </div>

          <p className="mt-5 text-gray-600">
            👥 {group.members} Members
          </p>

          <p className="mt-2 text-gray-500">
            📅 {group.nextSession}
          </p>

          <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
            Join Group
          </button>
        </div>
      ))}
    </div>
  );
}