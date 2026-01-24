"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { lectureRecordings as mockData } from "@/lib/mock/educatorLectureRecordings";

export default function LectureRecordingsCard() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const latestThree = mockData.slice(-3);
    setLectures(latestThree);
  }, []);

  return (
    <div
      className="
        relative overflow-visible
        bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
        rounded-[36px]
        px-4 md:px-3 pt-4 pb-6
        shadow-[0_14px_40px_rgba(0,0,0,0.15)]
        text-white min-h-[420px] md:min-h-[600px]
        flex flex-col
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3 px-6 md:px-14">
        <h3 className="text-lg md:text-xl font-bold">
          Lecture Recordings
        </h3>
      </div>

      {/* LIST */}
      <div className="space-y-4 flex-1">
        {lectures.map((lecture, index) => (
          <LectureItem key={index} {...lecture} />
        ))}
      </div>

      {/* ILLUSTRATION */}
      <Image
        src="/speech-text-sticker.png"
        alt="Speech to Text"
        width={500}
        height={500}
        className="
          absolute bottom-[-20px] left-[-85px]
          max-w-none pointer-events-none select-none
          hidden md:block
        "
      />
    </div>
  );
}

/* ================= ITEM ================= */

function LectureItem({ date, duration, course }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-white/90 px-2">
        <span>{date}</span>
        <span>{duration}</span>
      </div>

      <div className="bg-white rounded-full px-8 py-3 flex items-center gap-7 shadow-sm">
        <Link
          href={`/educator/transcriptions?course=${course}`}
          className="text-[#6f63a8] font-medium hover:underline"
        >
          View Transcript
        </Link>

        <span className="text-[#6f63a8]">|</span>

        <span className="font-semibold text-[#6f63a8]">
          {course}
        </span>
      </div>
    </div>
  );
}
