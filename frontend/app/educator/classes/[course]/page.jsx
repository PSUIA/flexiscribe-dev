"use client";

import { useParams } from "next/navigation";
import { GraduationCap } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

import SectionCard from "@/components/educator/classes/SectionCard";
import StudentTableCard from "@/components/educator/classes/StudentTableCard";
import EducatorHeader from "@/components/educator/layout/EducatorHeader";

/* ================= PAGE ================= */

export default function ClassPage() {
  const { course } = useParams();

  // Real data state
  const [allClasses, setAllClasses] = useState([]);
  const [userName, setUserName] = useState("Educator");
  const [activeSection, setActiveSection] = useState("");
  const [activeClassId, setActiveClassId] = useState(null);

  // Fetch classes, profile, and notifications from API
  useEffect(() => {
    async function fetchData() {
      try {
        const [classesRes, profileRes] = await Promise.all([
          fetch("/api/educator/classes"),
          fetch("/api/educator/profile"),
        ]);

        if (classesRes.ok) {
          const data = await classesRes.json();
          setAllClasses(data.classes || []);
        }
        if (profileRes.ok) {
          const data = await profileRes.json();
          setUserName(data.educator?.fullName?.split(" ")[0] || "Educator");
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  // Filter classes for this course
  const courseClasses = useMemo(() => {
    return allClasses.filter(
      (c) =>
        c.subject.toLowerCase() ===
        course?.toLowerCase()
    );
  }, [course, allClasses]);

  // Set initial active section when classes load
  useEffect(() => {
    if (courseClasses.length && !activeSection) {
      setActiveSection(courseClasses[0].section);
      setActiveClassId(courseClasses[0].id);
    }
  }, [courseClasses]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#9b8ae0] flex items-center justify-center text-white">
            <GraduationCap size={20} />
          </div>

          <h1 className="text-sm sm:text-xl font-semibold text-[#6b5fcf] uppercase">
            Class : {course}
          </h1>
        </div>

        {/* RIGHT */}
        <EducatorHeader userName={userName} />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

        {/* SECTION CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-1
            gap-4
            w-full lg:w-[420px]
          "
        >
          {courseClasses.map((cls) => (
            <SectionCard
              key={cls.id}
              {...cls}
              time={cls.startTime}
              active={activeSection === cls.section}
              onClick={() => {
                setActiveSection(cls.section);
                setActiveClassId(cls.id);
              }}
            />
          ))}
        </div>

        {/* TABLE */}
        <div className="w-full max-w-full overflow-x-auto">
          <StudentTableCard section={activeSection} classId={activeClassId} />
        </div>
      </div>
    </div>
  );
}
