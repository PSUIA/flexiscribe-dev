"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scheduleData } from "@/lib/mock/educatorSchedule";

export default function ScheduleCard() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const today = new Date().toLocaleString("en-US", {
      weekday: "long",
    });

    // Show ONLY today's schedules
    const todaysSchedule = scheduleData.filter((item) =>
      item.time.startsWith(today)
    );

    setSchedules(todaysSchedule);
  }, []);

  return (
    <Link href="/educator/schedule" className="block cursor-pointer">
      <div
        className="
          w-full
          min-h-[275px]
          bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
          rounded-[36px]
          shadow-[0_15px_60px_rgba(76,65,114,0.30)]
          text-white
          overflow-hidden
          transition-transform hover:scale-[1.01]
        "
      >
        {/* HEADER */}
        <div
          className="
            text-center
            text-xl
            font-semibold
            py-4
            bg-white/15
            shadow-[inset_0_-5px_6px_rgba(0,0,0,0.25)]
          "
        >
          Today’s Schedule
        </div>

        {/* ITEMS (SCROLLABLE) */}
        <div
          className="
            space-y-2
            px-4 py-3
            max-h-[200px]
            overflow-y-auto
            pr-3
          "
        >
          {schedules.length === 0 ? (
            <p className="text-center text-white/80">
              No schedule for today 🎉
            </p>
          ) : (
            schedules.map((item, index) => (
              <ScheduleItem key={index} {...item} />
            ))
          )}
        </div>
      </div>
    </Link>
  );
}

/* ================= ITEM ================= */

function ScheduleItem({ title, code, time }) {
  return (
    <div
      className="
        relative
        flex gap-8
        pl-16 pr-6 py-3
        rounded-[22px]
        bg-white/18
        shadow-[0_6px_14px_rgba(0,0,0,0.25)]
      "
    >
      <Image
        src="/pin.png"
        alt="Pin"
        width={80}
        height={40}
        className="
          absolute
          left-[-15px]
          top-1/2
          -translate-y-1/2
          drop-shadow-md
          pointer-events-none
        "
      />

      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-white/85">{code}</p>
        <p className="text-sm text-white/75">{time}</p>
      </div>
    </div>
  );
}
