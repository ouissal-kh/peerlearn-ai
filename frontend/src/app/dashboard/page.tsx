import DashboardHeader from "@/components/dashboard/DashboardHeader";
import TopCards from "@/components/dashboard/TopCards";
import RoadmapCard from "@/components/dashboard/RoadmapCard";
import StudyGroupCard from "@/components/dashboard/StudyGroupCard";
import SessionCard from "@/components/dashboard/SessionCard";
import MentorCard from "@/components/dashboard/MentorCard";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <TopCards />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <RoadmapCard />

        <div className="space-y-6">
          <StudyGroupCard />
          <SessionCard />
          <MentorCard />
        </div>
      </div>
    </>
  );
}