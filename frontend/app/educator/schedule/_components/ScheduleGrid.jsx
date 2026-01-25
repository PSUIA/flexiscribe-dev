"use client";

import { Calendar, Bell, X } from "lucide-react";
import { useState } from "react";
import ClassBlock from "./ClassBlock";

/* ================= NOTIFICATION UI ================= */

function NotifDropdown({ notifications }) {
  return (
    <div className="absolute right-0 top-12 w-[300px] md:w-[360px] bg-white text-gray-800 rounded-xl border border-gray-200 shadow-lg z-50 overflow-hidden">

      {/* HEADER */}
      <div className="px-4 py-3 flex items-center justify-between border-b">
        <h3 className="text-sm font-semibold">Notifications</h3>
        <button className="text-xs text-[#9d8adb] hover:underline">
          Mark all as read
        </button>
      </div>

      {/* LIST */}
      <div className="max-h-[300px] overflow-y-auto">
        {notifications.map((item) => (
          <NotifItem key={item.id} {...item} />
        ))}
      </div>

      {/* FOOTER */}
      <div className="px-4 py-2 text-center border-t">
        <button className="text-xs text-gray-500 hover:text-gray-700">
          View all notifications
        </button>
      </div>
    </div>
  );
}

function NotifItem({ name, message, time, unread }) {
  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 cursor-pointer
      hover:bg-gray-50 transition
      ${unread ? "bg-[#f7f5ff]" : "bg-white"}`}
    >

      <div className="w-9 h-9 rounded-full bg-[#9d8adb]/20 text-[#6b5cbf] flex items-center justify-center text-xs font-semibold shrink-0">
        {name[0]}
      </div>

      <div className="flex-1">
        <p className="text-sm leading-snug">
          <span className="font-medium">{name}</span>{" "}
          <span className="text-gray-600">{message}</span>
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {time}
        </p>
      </div>

      {unread && (
        <span className="w-2 h-2 bg-[#9d8adb] rounded-full mt-2" />
      )}
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

const ROW_HEIGHT = 56;

export default function ScheduleGrid({
  classes,
  days,
  notifications,
  timeSlots,
}) {
  const [activeClass, setActiveClass] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);

  const userName = "Uia.";
  const userInitial = userName[0];

  const schedule = classes.map((cls) => {
    const startIndex = timeSlots.findIndex((t) =>
      t.startsWith(cls.start)
    );

    const endTime =
      startIndex !== -1
        ? timeSlots[startIndex + 2]?.split(" – ")[1]
        : "";

    return {
      ...cls,
      startIndex,
      durationSlots: 3,
      startTime: `${cls.start} – ${endTime}`,
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

        <div className="flex items-center gap-3 relative">

          {/* NOTIF BTN */}
          <button
            onClick={() => setNotifOpen((p) => !p)}
            className="w-10 h-10 rounded-full bg-[#f1effb] flex items-center justify-center hover:bg-[#e5e1fa]"
          >
            <Bell size={18} className="text-[#6b5fcf]" />
          </button>

          {notifOpen && (
            <NotifDropdown notifications={notifications} />
          )}

          {/* PROFILE */}
          <div className="flex items-center gap-2">
            <div className="text-right hidden md:block">
              <div className="text-sm font-semibold text-[#6b5fcf]">
                {userName}
              </div>
              <div className="text-xs text-gray-500">
                Instructor
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-[#9b8ae0] flex items-center justify-center text-white font-bold">
              {userInitial}
            </div>
          </div>

        </div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
