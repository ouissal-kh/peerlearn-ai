import MentorCard from "@/components/dashboard/MentorCard";

export default function MentorPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          🤖 AI Mentor
        </h1>

        <p className="mt-2 text-gray-600">
          Ask questions, receive personalized guidance, and learn faster with AI.
        </p>
      </div>

      <MentorCard />
    </>
  );
}