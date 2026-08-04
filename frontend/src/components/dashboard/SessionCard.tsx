const sessions = [
  {
    title: "AWS Networking",
    date: "Today",
    time: "7:00 PM",
    mentor: "Sarah Ahmed",
    status: "Live",
  },
  {
    title: "React Components",
    date: "Tomorrow",
    time: "5:30 PM",
    mentor: "Mohamed Ali",
    status: "Upcoming",
  },
  {
    title: "Linux Basics",
    date: "Friday",
    time: "6:00 PM",
    mentor: "John Smith",
    status: "Upcoming",
  },
];

export default function SessionCard() {
  return (
    <div className="space-y-6">
      {sessions.map((session) => (
        <div
          key={session.title}
          className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">
              {session.title}
            </h3>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                session.status === "Live"
                  ? "bg-green-100 text-green-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {session.status}
            </span>
          </div>

          <p className="mt-5 text-gray-600">
            📅 {session.date}
          </p>

          <p className="mt-2 text-gray-600">
            ⏰ {session.time}
          </p>

          <p className="mt-2 text-gray-500">
            👨‍🏫 Mentor: {session.mentor}
          </p>

          <button className="mt-6 w-full rounded-xl bg-black py-3 font-medium text-white transition hover:opacity-90">
            Join Session
          </button>
        </div>
      ))}
    </div>
  );
}