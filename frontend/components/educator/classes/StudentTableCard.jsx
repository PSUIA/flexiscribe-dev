"use client";

import { useState, useEffect } from "react";

export default function StudentTableCard({ section, classId }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!classId) return;

    async function fetchStudents() {
      setLoading(true);
      try {
        const res = await fetch(`/api/educator/classes/${classId}/students`);
        if (res.ok) {
          const data = await res.json();
          setStudents(data.students || []);
        } else {
          setStudents([]);
        }
      } catch (error) {
        console.error("Failed to fetch students:", error);
        setStudents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, [classId]);

  return (
    <div
      className="
        w-full
        rounded-[26px] sm:rounded-[36px]
        bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
        p-[5px] sm:p-[6px]
        shadow-[0_18px_40px_rgba(76,65,114,0.35)]
      "
    >
      <div
        className="
          rounded-[22px] sm:rounded-[30px]
          bg-[#f1effb]
          overflow-hidden
        "
      >

        {/* HEADER */}
        <div
          className="
            px-4 sm:px-8
            py-4 sm:py-6
            bg-gradient-to-br from-[#9d8adb] to-[#6f63b5]
            text-white
          "
        >
          <h2 className="text-sm sm:text-xl font-semibold tracking-wide">
            {section
              ? `SECTION – ${section.toUpperCase()} STUDENTS`
              : "STUDENTS"}
          </h2>

          <p className="text-[11px] sm:text-sm opacity-80 mt-1">
            Enrolled student list
          </p>
        </div>

        {/* TABLE */}
        <div className="bg-white overflow-x-auto">
          <table
            className="
              w-full
              text-[11px] sm:text-sm
              text-[#6b5fcf]
            "
          >

            <thead>
              <tr className="border-b border-[#e6e2fb] bg-[#faf9ff]">
                <th className="px-3 sm:px-8 py-3 text-left font-semibold">
                  Student
                </th>
                <th className="px-3 sm:px-8 py-3 text-center font-semibold">
                  ID
                </th>
                <th className="px-3 sm:px-8 py-3 text-center font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {students.map((s) => (
                <tr
                  key={s.studentNo}
                  className="
                    border-b border-[#f0edfb]
                    hover:bg-[#f6f4ff]
                    transition
                  "
                >
                  <td className="px-3 sm:px-8 py-3 font-medium truncate max-w-[140px]">
                    {s.name}
                  </td>

                  <td className="px-3 sm:px-8 py-3 text-center">
                    {s.studentNo}
                  </td>

                  <td className="px-3 sm:px-8 py-3 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-[2px] rounded-full text-[10px] sm:text-xs font-semibold ${
                        s.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}

              {loading && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    Loading students...
                  </td>
                </tr>
              )}

              {!loading && students.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-8 text-center text-gray-400"
                  >
                    No students found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
