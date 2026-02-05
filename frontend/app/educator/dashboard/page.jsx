"use client";

import { useState } from "react";

import SearchBar from "@/components/educator/layout/SearchBar";
import ProfessorProfileCard from "@/components/educator/cards/ProfessorProfileCard";
import ScheduleCard from "@/components/educator/cards/ScheduleCard";
import WelcomeCard from "@/components/educator/cards/WelcomeCard";
import LectureRecordingsCard from "@/components/educator/cards/LectureRecordingsCard";
import CalendarCard from "@/components/educator/cards/CalendarCard";
import StudentsLeaderboardCard from "@/components/educator/cards/StudentsLeaderboardCard";

export default function DashboardPage() {

  const [query, setQuery] = useState("");

  return (
    <>
      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col gap-5 p-4">

        {/* HEADER ROW */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <SearchBar
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* PROFILE */}
          <ProfessorProfileCard />
        </div>

        {/* WELCOME */}
        <WelcomeCard />

        {/* MAIN CONTENT */}
        <LectureRecordingsCard />

        {/* SECONDARY */}
        <ScheduleCard />
        <CalendarCard />

        {/* STATS */}
        <StudentsLeaderboardCard />

      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden md:block lg:hidden p-6 space-y-6">

        <div className="grid grid-cols-2 gap-6">

          <SearchBar
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />

          <ProfessorProfileCard />
        </div>

        <WelcomeCard />

        <div className="grid grid-cols-2 gap-6">
          <LectureRecordingsCard />
          <ScheduleCard />
        </div>

        <CalendarCard />
        <StudentsLeaderboardCard />

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block p-8 max-w-[1600px] mx-auto">

        <div className="grid grid-cols-12 gap-6">

          {/* SEARCH */}
          <div className="col-span-8">
            <SearchBar
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* PROFILE */}
          <div className="col-span-4 row-span-2">
            <ProfessorProfileCard />
          </div>

          <div className="col-span-8">
            <WelcomeCard />
          </div>

          <div className="col-span-4 row-span-2">
            <LectureRecordingsCard />
          </div>

          <div className="col-span-4">
            <ScheduleCard />
          </div>

          <div className="col-span-4">
            <CalendarCard />
          </div>

          <div className="col-span-8">
            <StudentsLeaderboardCard />
          </div>

        </div>
      </div>
    </>
  );
}
