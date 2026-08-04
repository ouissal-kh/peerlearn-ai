import SessionCard from "@/components/dashboard/SessionCard";

export default function SessionsPage() {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            📅 Learning Sessions
          </h1>

          <p className="mt-2 text-gray-600">
            Join your upcoming collaborative learning sessions.
          </p>
        </div>

        <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90">
          + Schedule Session
        </button>
      </div>

      <SessionCard />
    </>
  );
}