"use client";

import Image from "next/image";
import { useState } from "react";
import { leaderboardColumns } from "@/lib/mock/educatorLeaderboard";

/* ================= STUDENT ================= */

function Student({ name, exp, icon, rank }) {
  const badge =
    rank === 1
      ? "/leaderboard/gold.png"
      : rank === 2
      ? "/leaderboard/silver.png"
      : rank === 3
      ? "/leaderboard/bronze.png"
      : icon || "/leaderboard/lilac.png";

  const progress =
    rank === 1
      ? "100%"
      : rank === 2
      ? "85%"
      : rank === 3
      ? "70%"
      : "50%";

  return (
    <div
      className={`
        group
        flex items-center gap-3
        p-2 rounded-xl
        transition-all duration-300 ease-out
        hover:bg-white/10 hover:translate-x-1
        ${rank <= 3 ? "bg-white/20 shadow-md scale-[1.02]" : ""}
      `}
    >
      <Image
        src={badge}
        alt="rank badge"
        width={48}
        height={48}
        className="shrink-0 transition group-hover:scale-110"
      />

      <div className="flex-1">
        <div className="text-[15px] font-semibold tracking-wide">
          #{rank} {name}
        </div>

        <div className="text-xs text-white/80">
          {exp}
        </div>

        <div className="w-full h-1 bg-white/20 rounded mt-1 overflow-hidden">
          <div
            className="h-1 bg-yellow-400 rounded transition-all duration-500"
            style={{ width: progress }}
          />
        </div>
      </div>
    </div>
  );
}

/* ================= COLUMN ================= */

function LeaderboardColumn({ data, startRank }) {
  return (
    <div className="w-[150px] md:w-[180px] space-y-1 shrink-0">
      {data.map((s, i) => (
        <Student
          key={s.name}
          {...s}
          rank={startRank + i}
        />
      ))}
    </div>
  );
}

/* ================= MAIN ================= */

export default function StudentsLeaderboardCard() {
  const [columns] = useState(leaderboardColumns);

  const { col1, col2, col3 } = columns;

  return (
    <div
      className="
        relative
        bg-gradient-to-br from-[#8f7acb] to-[#5a4a86]
        rounded-[32px]
        px-6 md:px-10
        py-3
        text-white
        shadow-[-8px_-8px_20px_rgba(255,255,255,0.15),_8px_8px_24px_rgba(0,0,0,0.25)]
        overflow-visible
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <h3 className="text-xl font-semibold tracking-wide">
            Students Leaderboard
          </h3>
        </div>

        <span className="text-sm text-white/70">
          Weekly Ranking
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex items-start overflow-x-auto md:overflow-visible">
        <LeaderboardColumn
          data={col1}
          startRank={1}
        />
        <div className="w-10 shrink-0" />

        <LeaderboardColumn
          data={col2}
          startRank={col1.length + 1}
        />
        <div className="w-10 shrink-0" />

        <LeaderboardColumn
          data={col3}
          startRank={col1.length + col2.length + 1}
        />
        <div className="w-16 shrink-0" />
      </div>

      {/* FOOTER */}
      <div className="mt-4 text-xs text-white/60">
        Updated just now
      </div>

      {/* TROPHY */}
      <Image
        src="/leaderboard/awardicon.png"
        alt="Award"
        width={265}
        height={200}
        className="
          absolute
          -bottom-8
          -right-6
          hidden md:block
          scale-95
          pointer-events-none
        "
      />
    </div>
  );
}
