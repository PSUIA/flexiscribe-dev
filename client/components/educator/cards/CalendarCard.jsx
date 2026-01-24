"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarCard() {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const monthName = new Date(year, month).toLocaleString("default", {
    month: "long",
  });

  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();

  /* ALWAYS 42 CELLS */
  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const arr = [];

    for (let i = 0; i < firstDay; i++) arr.push(null);
    for (let d = 1; d <= totalDays; d++) arr.push(d);
    while (arr.length < 42) arr.push(null);

    return arr;
  }, [year, month]);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  return (
    <div
      className="
        relative
        w-full
        h-[270px]
        bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
        rounded-[36px]
        shadow-[0_18px_40px_rgba(76,65,114,0.30)]
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-3
          bg-white
          rounded-[36px]
          shadow-[0_10px_30px_rgba(0,0,0,0.10)]
          overflow-hidden
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="bg-black text-white flex items-center justify-between px-6 py-3 text-sm font-semibold">
          <button onClick={prevMonth}>
            <ChevronLeft size={18} />
          </button>

          <span>
            {monthName.toUpperCase()} {year}
          </span>

          <button onClick={nextMonth}>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* WEEKDAYS */}
        <div className="grid grid-cols-7 text-[11px] text-gray-500 text-center py-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>

        {/* DAYS */}
        <div className="grid grid-cols-7 grid-rows-6 flex-1 px-3 pb-3 text-sm">
          {days.map((day, i) => {
            const isToday =
              day && isCurrentMonth && day === today.getDate();

            return (
              <div
                key={i}
                className="flex items-center justify-center"
              >
                {day ? (
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                      isToday
                        ? "bg-[#e07a86] text-white font-semibold"
                        : "text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {day}
                  </span>
                ) : (
                  <span className="w-8 h-8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
