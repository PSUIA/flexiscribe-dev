"use client";

import { useParams } from "next/navigation";
import { GraduationCap, Bell } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";

import SectionCard from "@/components/educator/classes/SectionCard";
import StudentTableCard from "@/components/educator/classes/StudentTableCard";

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
        {notifications.length === 0 && (
          <p className="p-4 text-sm text-gray-400 text-center">
            No notifications
          </p>
        )}

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

function NotifItem({ title, message, read, createdAt }) {
  // Format relative time from createdAt
  const timeAgo = createdAt ? (() => {
    const diff = Date.now() - new Date(createdAt).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins} min${mins > 1 ? "s" : ""} ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} hour${hrs > 1 ? "s" : ""} ago`;
    const days = Math.floor(hrs / 24);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  })() : "";

  return (
    <div
      className={`
        flex items-start gap-3
        px-4 py-3
        cursor-pointer
        hover:bg-gray-50
        transition
        ${!read ? "bg-[#f7f5ff]" : "bg-white"}
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
        {(title || "N")[0]}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-sm leading-snug">
          <span className="font-medium">
            {title}
          </span>{" "}
          <span className="text-gray-600">
            {message}
          </span>
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {timeAgo}
        </p>
      </div>

      {/* Unread dot */}
      {!read && (
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

/* ================= PAGE ================= */

export default function ClassPage() {
  const { course } = useParams();

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Real data state
  const [allClasses, setAllClasses] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [userName, setUserName] = useState("Educator");
  const [activeSection, setActiveSection] = useState("");
  const [activeClassId, setActiveClassId] = useState(null);

  // Fetch classes, profile, and notifications from API
  useEffect(() => {
    async function fetchData() {
      try {
        const [classesRes, profileRes, notifsRes] = await Promise.all([
          fetch("/api/educator/classes"),
          fetch("/api/educator/profile"),
          fetch("/api/educator/notifications?limit=10"),
        ]);

        if (classesRes.ok) {
          const data = await classesRes.json();
          setAllClasses(data.classes || []);
        }
        if (profileRes.ok) {
          const data = await profileRes.json();
          setUserName(data.educator?.fullName?.split(" ")[0] || "Educator");
        }
        if (notifsRes.ok) {
          const data = await notifsRes.json();
          setNotifications(data.notifications || []);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  // Filter classes for this course
  const courseClasses = useMemo(() => {
    return allClasses.filter(
      (c) =>
        c.subject.toLowerCase() ===
        course?.toLowerCase()
    );
  }, [course, allClasses]);

  // Set initial active section when classes load
  useEffect(() => {
    if (courseClasses.length && !activeSection) {
      setActiveSection(courseClasses[0].section);
      setActiveClassId(courseClasses[0].id);
    }
  }, [courseClasses]);

  useEffect(() => {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", close);
    }

    return () =>
      document.removeEventListener("mousedown", close);
  }, [open]);

  const unreadCount = notifications.filter(
    (n) => !n.read
  ).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#9b8ae0] flex items-center justify-center text-white">
            <GraduationCap size={20} />
          </div>

          <h1 className="text-sm sm:text-xl font-semibold text-[#6b5fcf] uppercase">
            Class : {course}
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3" ref={ref}>

          {/* NOTIF */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="
                w-9 h-9 sm:w-11 sm:h-11
                rounded-full
                bg-[#f2efff]
                flex items-center justify-center
                hover:bg-[#e8e3ff]
                relative
              "
            >
              <Bell size={18} className="text-[#6b5cbf]" />

              {unreadCount > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    w-4 h-4 sm:w-5 sm:h-5
                    rounded-full
                    bg-red-500 text-white
                    text-[10px]
                    flex items-center justify-center
                  "
                >
                  {unreadCount}
                </span>
              )}
            </button>

            {open && (
              <NotifDropdown notifications={notifications} />
            )}
          </div>

          {/* USER */}
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-[#6b5fcf]">
                {userName}
              </div>
              <div className="text-xs text-gray-500">
                Instructor
              </div>
            </div>

            <div
              className="
                w-9 h-9 sm:w-10 sm:h-10
                rounded-full
                bg-[#9b8ae0]
                flex items-center justify-center
                text-white font-semibold
              "
            >
              {userName.charAt(0)}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

        {/* SECTION CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-1
            gap-4
            w-full lg:w-[420px]
          "
        >
          {courseClasses.map((cls) => (
            <SectionCard
              key={cls.id}
              {...cls}
              time={cls.startTime}
              active={activeSection === cls.section}
              onClick={() => {
                setActiveSection(cls.section);
                setActiveClassId(cls.id);
              }}
            />
          ))}
        </div>

        {/* TABLE */}
        <div className="w-full max-w-full overflow-x-auto">
          <StudentTableCard section={activeSection} classId={activeClassId} />
        </div>
      </div>
    </div>
  );
}
