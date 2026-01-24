"use client";

import { Bell, FileText, Search, User } from "lucide-react";
import { useState } from "react";
import { notifications } from "@/lib/mock/notifications";

export default function TranscriptionHeader() {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="mb-4 sm:mb-6">

      {/* ===== TOP BAR ===== */}
      <div className="flex items-center justify-between gap-3">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#9b8ae0] flex items-center justify-center text-white">
            <FileText size={20} />
          </div>

          <h1 className="text-lg sm:text-xl font-semibold text-[#6b5fcf]">
            Transcriptions
          </h1>

          {/* DESKTOP SEARCH */}
          <div className="hidden lg:block relative w-[520px]">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9d8adb]"
            />
            <input
              type="text"
              placeholder="Search"
              className="
                w-full
                pl-[48px] pr-4 py-3
                rounded-full
                bg-[#e9e8f2]
                text-sm
                text-[#6b6b6b]
                placeholder:text-[#9d8adb]
                outline-none
                shadow-[0_3px_15px_rgba(0,0,0,0.05)]
              "
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* NOTIF */}
          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="
                w-9 h-9 sm:w-10 sm:h-10
                rounded-full
                bg-[#f1effb]
                flex items-center justify-center
                hover:bg-[#e5e1fa]
                transition
              "
            >
              <Bell size={17} className="text-[#6b5fcf]" />
            </button>

            {notifOpen && (
              <NotifDropdown notifications={notifications} />
            )}
          </div>

          {/* USER */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block text-right">
              <div className="text-sm font-semibold text-[#6b5fcf]">
                Uia.
              </div>
              <div className="text-xs text-gray-500">
                Instructor
              </div>
            </div>

            {/* ONLY CHANGE HERE */}
            <div className="
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full
              bg-[#9b8ae0]
              flex items-center justify-center
              text-white
              font-semibold
            ">
              {"U"}
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE SEARCH ===== */}
      <div className="relative w-full mt-3 lg:hidden">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9d8adb]"
        />
        <input
          type="text"
          placeholder="Search"
          className="
            w-full
            pl-[48px] pr-4 py-3
            rounded-full
            bg-[#e9e8f2]
            text-sm
            text-[#6b6b6b]
            placeholder:text-[#9d8adb]
            outline-none
            shadow-[0_3px_15px_rgba(0,0,0,0.05)]
          "
        />
      </div>
    </div>
  );
}

/* ================= NOTIFICATION UI ================= */

function NotifDropdown({ notifications }) {
  return (
    <div className="
      absolute right-0 top-12
      w-[300px] md:w-[360px]
      bg-white text-gray-800
      rounded-xl
      border border-gray-200
      shadow-lg
      z-50
      overflow-hidden
    ">

      {/* HEADER */}
      <div className="px-4 py-3 flex items-center justify-between border-b">
        <h3 className="text-sm font-semibold">
          Notifications
        </h3>

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
      className={`
        flex items-start gap-3
        px-4 py-3
        cursor-pointer
        hover:bg-gray-50
        transition
        ${unread ? "bg-[#f7f5ff]" : "bg-white"}
      `}
    >

      {/* Avatar */}
      <div className="
        w-9 h-9
        rounded-full
        bg-[#9d8adb]/20
        text-[#6b5cbf]
        flex items-center justify-center
        text-xs font-semibold
        shrink-0
      ">
        {name[0]}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm leading-snug">
          <span className="font-medium">
            {name}
          </span>{" "}
          <span className="text-gray-600">
            {message}
          </span>
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {time}
        </p>
      </div>

      {/* Unread dot */}
      {unread && (
        <span className="
          w-2 h-2
          bg-[#9d8adb]
          rounded-full
          mt-2
        " />
      )}
    </div>
  );
}
