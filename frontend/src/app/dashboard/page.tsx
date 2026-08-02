export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl p-8">

        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back, Ouissal 👋
        </h1>

        <p className="mt-2 text-gray-600">
          Here's your learning dashboard.
        </p>

        {/* Top Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold text-gray-900">
              🎯 Today's Goal
            </h2>

            <p className="mt-4 text-gray-600">
              Complete AWS Networking Module.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold text-gray-900">
              📈 Progress
            </h2>

            <p className="mt-4 text-3xl font-bold text-blue-600">
              68%
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold text-gray-900">
              🔥 Weekly Streak
            </h2>

            <p className="mt-4 text-3xl font-bold text-orange-500">
              12 Days
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}