"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import TranscriptionHeader from "./_components/TranscriptionHeader";
import CourseTabs from "./_components/CourseTabs";
import TranscriptCard from "./_components/TranscriptCard";
import PreviewPanel from "./_components/PreviewPanel";

import { transcripts, courses } from "@/lib/mock/transcripts";

export default function TranscriptionsPage() {
  const searchParams = useSearchParams();

  const [activeCourse, setActiveCourse] = useState("CPP117");
  const [selected, setSelected] = useState(null);

  /* Sync from URL */
  useEffect(() => {
    const course = searchParams.get("course");
    const id = searchParams.get("id");

    if (course) setActiveCourse(course);

    if (id) {
      const found = transcripts.find(
        (t) => t.id === Number(id)
      );
      setSelected(found || null);
    }
  }, [searchParams]);

  const filtered = transcripts.filter(
    (t) => t.course === activeCourse
  );

  return (
    <div className="h-full flex flex-col px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
      <TranscriptionHeader />

      <div className="mt-3 sm:mt-4">
        <CourseTabs
          courses={courses}
          activeCourse={activeCourse}
          onChange={(course) => {
            setActiveCourse(course);
            setSelected(null);
          }}
        />
      </div>

      {/* MAIN LAYOUT */}
      <div className="
        flex-1
        mt-4 sm:mt-6
        flex flex-col
        lg:grid lg:grid-cols-[360px_1fr]
        gap-4 sm:gap-6
        min-h-0
      ">

        {/* LIST */}
        <aside className="
          overflow-y-auto
          pr-1
          pb-6
          rounded-xl
          flex-shrink-0
        ">
          <div className="space-y-4 sm:space-y-6 px-1">
            {filtered.map((t) => (
              <TranscriptCard
                key={t.id}
                transcript={t}
                selected={selected?.id === t.id}
                onSelect={() => setSelected(t)}
              />
            ))}
          </div>
        </aside>

        {/* PREVIEW */}
        <main className="
          min-w-0
          flex
          flex-col
        ">
          <PreviewPanel transcript={selected} />
        </main>

      </div>
    </div>
  );
}
