import StudyGroupCard from "@/components/dashboard/StudyGroupCard";

export default function GroupsPage() {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            👥 Study Groups
          </h1>

          <p className="mt-2 text-gray-600">
            Learn together with students who share your goals.
          </p>
        </div>

        <button className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90">
          + Create Group
        </button>
      </div>

      <StudyGroupCard />
    </>
  );
}