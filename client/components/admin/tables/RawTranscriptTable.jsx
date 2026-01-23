"use client";

import { useState } from "react";
import { transcripts } from "@/lib/mock/transcripts";
import TranscriptPreviewModal from "@/components/admin/modals/TranscriptPreviewModal";

export default function RawTranscriptTable() {
  const [course, setCourse] = useState("ALL");
  const [section, setSection] = useState("ALL");
  const [activeTranscript, setActiveTranscript] = useState(null);

  const normalize = (v) => v?.toString().trim().toUpperCase();

  const filteredTranscripts = transcripts.filter((t) => {
    const courseMatch =
      course === "ALL" || normalize(t.course) === normalize(course);
    const sectionMatch =
      section === "ALL" || normalize(t.section) === normalize(section);
    return courseMatch && sectionMatch;
  });

  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-sm border border-[#d5cfec] bg-white">

        {/* ================= HEADER ================= */}
        <div className="bg-gradient-to-br from-[#9d8adb] to-[#4c4172] px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                Raw Transcripts
              </h3>
              <p className="text-xs text-white/80 mt-1">
                {filteredTranscripts.length} transcript(s)
              </p>
            </div>

            <div className="flex gap-2">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="px-3 py-1.5 text-sm rounded-md bg-white text-[#3f3764] border"
              >
                <option value="ALL">All Courses</option>
                <option value="CPP117">CPP117</option>
                <option value="CPP116">CPP116</option>
              </select>

              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="px-3 py-1.5 text-sm rounded-md bg-white text-[#3f3764] border"
              >
                <option value="ALL">All Sections</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="block sm:hidden divide-y">
          {filteredTranscripts.map((t) => (
            <div key={t.id} className="p-4 space-y-2">
              <div className="text-xs font-medium text-[#6b6396]">
                {t.course} • Section {t.section}
              </div>

              <div className="font-medium text-[#3f3764]">
                {t.title}
              </div>

              <div className="text-xs text-[#6b6396]">
                {t.date} • {t.duration} • {t.length}
              </div>

              <div className="flex gap-2 pt-2">
                {/* ✅ FIXED MOBILE VIEW BUTTON */}
                <button
                  onClick={() => setActiveTranscript(t)}
                  className="
                    px-3 py-2
                    text-xs
                    rounded-md
                    font-medium
                    bg-[#9d8adb]
                    text-white
                    hover:bg-[#4c4172]
                  "
                >
                  View
                </button>

                <button
                  className="
                    px-3 py-2
                    text-xs
                    rounded-md
                    bg-red-500
                    text-white
                    hover:bg-red-600
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {filteredTranscripts.length === 0 && (
            <div className="p-10 text-center text-[#6b6396]">
              No transcripts available
            </div>
          )}
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm text-[#3f3764]">
            <thead className="bg-[#f3f1fa] border-b border-[#e3def4]">
              <tr>
                <th className="px-5 py-3 text-left font-semibold">Course</th>
                <th className="text-center font-semibold">Title</th>
                <th className="font-semibold">Date</th>
                <th className="font-semibold">Duration</th>
                <th className="font-semibold">Length</th>
                <th className="text-center font-semibold">Section</th>
                <th className="text-center pr-5 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredTranscripts.map((t, i) => (
                <tr
                  key={t.id}
                  className={`
                    border-b border-[#eeeaf8]
                    ${i % 2 === 0 ? "bg-white" : "bg-[#faf9fd]"}
                    hover:bg-[#f1effa]
                  `}
                >
                  <td className="px-5 py-3 font-medium">{t.course}</td>
                  <td className="max-w-[360px] truncate">{t.title}</td>
                  <td className="text-[#6b6396]">{t.date}</td>
                  <td className="text-[#6b6396]">{t.duration}</td>
                  <td className="text-[#6b6396]">{t.length}</td>
                  <td className="text-center text-[#6b6396]">{t.section}</td>

                  <td className="pr-5 text-right">
                    <button
                      onClick={() => setActiveTranscript(t)}
                      className="
                        px-3 py-1.5
                        text-xs
                        rounded-md
                        border border-[#d5cfec]
                        text-[#3f3764]
                        hover:bg-[#edeaf7]
                        mr-2
                      "
                    >
                      View
                    </button>

                    <button
                      className="
                        px-3 py-1.5
                        text-xs
                        rounded-md
                        bg-red-500
                        text-white
                        hover:bg-red-600
                      "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredTranscripts.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-14 text-center text-[#6b6396]">
                    No transcripts available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {activeTranscript && (
        <TranscriptPreviewModal
          transcript={activeTranscript}
          onClose={() => setActiveTranscript(null)}
        />
      )}
    </>
  );
}
