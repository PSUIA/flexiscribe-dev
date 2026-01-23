"use client";

import { recentActivities } from "@/lib/mock/recentActivities";

export default function RecentActivityCard() {
  return (
    <div
      className="
        h-[260px]
        rounded-[32px]
        bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
        px-8
        py-7
        text-white
        shadow-[0_26px_60px_rgba(76,65,114,0.45)]
        overflow-hidden
      "
    >
      <div className="relative h-full">

        {/* TIMELINE LINE */}
        <div
          className="
            absolute
            left-[18px]
            top-[20px]
            bottom-[20px]
            w-[2px]
            bg-white/35
          "
        />

        {/* CONTENT */}
        <div
          className="
            h-full
            overflow-y-auto
            pr-3
            space-y-6
            scrollbar-thin
            scrollbar-thumb-white/30
            scrollbar-track-transparent
          "
        >
          {recentActivities.map((item, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-[36px_120px_56px_1fr]
                items-start
                transition
                duration-200
                hover:translate-x-[2px]
              "
            >
              {/* DOT */}
              <div className="flex justify-center">
                <span
                  className="
                    mt-[6px]
                    h-3.5
                    w-3.5
                    rounded-full
                    bg-white
                    shadow-[0_0_0_6px_rgba(255,255,255,0.12)]
                  "
                />
              </div>

              {/* TIME */}
              <span className="text-base font-semibold text-white/95">
                [{item.time}]
              </span>

              {/* USER */}
              <span className="text-base font-medium text-white/85">
                {item.user}
              </span>

              {/* ACTION */}
              <span className="text-base leading-snug text-white/90">
                {item.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
