"use client";

import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import ClassBlock from "./ClassBlock";
import EducatorHeader from "@/components/educator/layout/EducatorHeader";

/* ================= MAIN COMPONENT ================= */

const ROW_HEIGHT = 56;

export default function ScheduleGrid({
  classes,
  days,
  notifications,
  timeSlots,
}) {
  const [activeClass, setActiveClass] = useState(null);
  const [userName, setUserName] = useState("Educator");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/educator/profile");
        if (res.ok) {
          const data = await res.json();
          setUserName(data.educator.fullName.split(" ")[0] || "Educator");
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    }
    fetchProfile();
  }, []);

  const schedule = classes.map((cls) => {
    const startIndex = timeSlots.findIndex((t) =>
      t.startsWith(cls.startTime)
    );

    const endTime =
      startIndex !== -1
        ? timeSlots[startIndex + 2]?.split(" – ")[1]
        : "";

    return {
      ...cls,
      start: cls.startTime, // Add for compatibility
      startIndex,
      durationSlots: 3,
      startTime: `${cls.startTime} – ${endTime}`,
    };
  });

  return (
    <div className="w-full relative">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#9b8ae0] flex items-center justify-center text-white">
            <Calendar size={20} />
          </div>
          <h1 className="text-xl font-semibold text-[#6b5fcf]">
            Schedule
          </h1>
        </div>

        <EducatorHeader userName={userName} />
      </div>

      {/* GRID WRAPPER (scroll on mobile) */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px] grid grid-cols-[130px_repeat(7,1fr)] border border-[#a99ae6] rounded-xl bg-white overflow-hidden">

          <div className="bg-[#9b8ae0] text-white text-xs font-semibold text-center p-4">
            TIME
          </div>

          {days.map((day) => (
            <div
              key={day}
              className="bg-[#9b8ae0] text-white text-xs font-semibold text-center p-4"
            >
              {day.toUpperCase()}
            </div>
          ))}

          {timeSlots.map((time, rowIndex) => (
            <div key={time} className="contents">

              <div className="border border-[#a99ae6] text-[11px] text-[#7a6fcf] flex items-center justify-center h-[56px]">
                {time}
              </div>

              {days.map((day) => {
                const cls = schedule.find(
                  (s) => s.day === day && s.startIndex === rowIndex
                );

                const covered = schedule.find(
                  (s) =>
                    s.day === day &&
                    rowIndex > s.startIndex &&
                    rowIndex < s.startIndex + s.durationSlots
                );

                if (covered && !cls) return <div key={`${day}-${time}`} />;

                return (
                  <div
                    key={`${day}-${time}`}
                    className="border border-[#a99ae6] h-[56px] relative"
                  >
                    {cls && (
                      <div
                        onClick={() => setActiveClass(cls)}
                        className="absolute left-1 right-1 top-1 cursor-pointer"
                        style={{
                          height:
                            cls.durationSlots * ROW_HEIGHT - 8,
                        }}
                      >
                        <ClassBlock
                          title={`CLASS ${cls.section}`}
                          section={`Section ${cls.section}`}
                          room={cls.room}
                          color={
                            cls.subject === "CPP117" &&
                            cls.section === "A"
                              ? "bg-purple-600"
                              : cls.subject === "CPP116" &&
                                cls.section === "A"
                              ? "bg-emerald-500"
                              : cls.subject === "CPP116" &&
                                cls.section === "B"
                              ? "bg-yellow-400"
                              : cls.subject === "CPP117" &&
                                cls.section === "B"
                              ? "bg-pink-500"
                              : "bg-[#9b8ae0]"
                          }
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (unchanged) */}
      {activeClass && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[90%] max-w-sm p-6 relative">

            <button
              onClick={() => setActiveClass(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold mb-2 text-[#4c4172]">
              {activeClass.subject}
            </h2>

            <div className="text-sm space-y-2 text-gray-700">
              <div><strong>Day:</strong> {activeClass.day}</div>
              <div><strong>Time:</strong> {activeClass.startTime}</div>
              <div><strong>Section:</strong> {activeClass.section}</div>
              <div><strong>Room:</strong> {activeClass.room}</div>
              {activeClass.classCode && (
                <div className="mt-3 p-3 bg-[#f5f3ff] rounded-lg">
                  <strong className="text-[#4c4172]">Class Code:</strong>{" "}
                  <span className="font-mono text-[#9d8adb] tracking-wider">
                    {activeClass.classCode}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
