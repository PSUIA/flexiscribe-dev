"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchClasses() {
      try {
        const res = await fetch("/api/educator/classes");
        if (res.ok) {
          const data = await res.json();
          setClasses(data.classes);
        }
      } catch (error) {
        console.error("Failed to fetch classes:", error);
      }
    }
    fetchClasses();
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg sm:text-2xl font-bold">
          Classes
        </h1>
      </div>

      {/* LIST */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-5
        "
      >
        {classes.map((cls) => (
          <Link
            key={cls.id}
            href={`/educator/classes/${cls.subject}`}
            className="block"
          >
            <div
              className="
                h-full
                p-4 sm:p-5
                bg-white
                rounded-xl
                border border-gray-200
                shadow-sm
                transition
                hover:bg-gray-50
                hover:shadow-md
              "
            >
              <h2 className="font-semibold text-base sm:text-lg">
                {cls.subject} – Section {cls.section}
              </h2>

              <p className="mt-1 text-sm sm:text-base text-gray-600">
                {cls.day} • {cls.startTime}
              </p>

              <p className="text-sm sm:text-base text-gray-600">
                Room {cls.room}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
