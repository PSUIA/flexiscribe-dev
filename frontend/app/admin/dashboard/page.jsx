import StatCard from "@/components/admin/cards/StatCard";
import ProgressCard from "@/components/admin/cards/ProgressCard";
import RecentActivityCard from "@/components/admin/cards/RecentActivityCard";
import ClassAnalyticsCard from "@/components/admin/cards/ClassAnalyticsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8 sm:space-y-10">

      {/* QUICK STATS */}
      <section className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#9d8adb]">
          Quick Stats
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5 sm:gap-6
          "
        >
          <StatCard label="Total Students" value={102} />
          <StatCard label="Total Educators" value={1} />
          <StatCard label="Active Users" value={52} />
        </div>
      </section>

      {/* PROGRESS */}
      <ProgressCard
        flashcards={19}
        mcqs={30}
        fitb={3}
      />

      {/* ANALYTICS */}
      <section>
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1.7fr_3fr]
            gap-6
          "
        >
          {/* RECENT ACTIVITY */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9d8adb]">
              Recent Activity
            </h2>
            <RecentActivityCard />
          </div>

          {/* CLASS ANALYTICS */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#9d8adb]">
              Class Analytics
            </h2>
            <ClassAnalyticsCard />
          </div>
        </div>
      </section>
    </div>
  );
}
