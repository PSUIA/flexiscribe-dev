"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaBook,
  FaUsers,
  FaCalendarAlt,
  FaCog,
  FaMicrophone,
  FaChartLine,
} from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

export default function EducatorDashboard() {
  const [isRecording, setIsRecording] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // load saved theme
  useEffect(() => {
    try {
      const saved = localStorage.getItem("fs_dark");
      if (saved === "1") setIsDark(true);
    } catch (e) {}
  }, []);

  // persist theme
  useEffect(() => {
    try {
      localStorage.setItem("fs_dark", isDark ? "1" : "0");
    } catch (e) {}
  }, [isDark]);

  // helper classes
  const rootBgClass = isDark
    ? "bg-[#0b1220] text-gray-100"
    : "bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] text-gray-800";

  const cardBg = isDark ? "bg-[#0f1720]" : "bg-white";
  const subtleBg = isDark ? "bg-[#071327]" : "bg-gray-50";
  const headingColor = isDark ? "text-[#c5a6f9]" : "text-[#4c4172]";

  // Sidebar backgrounds
  const sidebarBg = isDark
    ? "bg-gradient-to-br from-[#0d0d16] via-[#141428] to-[#1b1b30]"
    : "bg-gradient-to-br from-[#4c4172] via-[#9d8adb] to-[#c5a6f9]";
  const sidebarText = isDark ? "text-gray-200" : "text-white";
  const sidebarHover = isDark ? "hover:bg-white/5" : "hover:bg-white/10";

  // Icon classes
  const iconClass = isDark ? "text-[#c5a6f9]" : "text-white";

  // Quick action / transcription button theme
  const actionBg = sidebarBg;
  const actionText = sidebarText;

  return (
    <div className={`${rootBgClass} flex min-h-screen`}>
      {/* Sidebar */}
      <aside
        className={`w-64 ${sidebarBg} p-6 flex flex-col justify-between rounded-r-2xl shadow-lg`}
      >
        <div>
          <div className="flex items-center justify-between">
            <h2 className={`text-2xl font-bold ${sidebarText}`}>fLexiScribe</h2>
            <button
              onClick={() => setIsDark((d) => !d)}
              className={`p-2 rounded-lg transition ${
                isDark ? "hover:bg-white/10" : "hover:bg-white/20"
              }`}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <BsSun className="text-yellow-300" />
              ) : (
                <BsMoon className="text-gray-700" />
              )}
            </button>
          </div>
          <p
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-purple-200"
            }`}
          >
            Your Note-Taking Assistant
          </p>
          <ul className="mt-10 space-y-4">
            <li
              className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer ${sidebarHover}`}
            >
              <FaChalkboardTeacher className={iconClass} /> Dashboard
            </li>
            <li
              className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer ${sidebarHover}`}
            >
              <FaBook className={iconClass} /> Manage Courses
            </li>
            <li
              className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer ${sidebarHover}`}
            >
              <FaUsers className={iconClass} /> Students
            </li>
            <li
              className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer ${sidebarHover}`}
            >
              <FaCalendarAlt className={iconClass} /> Calendar
            </li>
            <li
              className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer ${sidebarHover}`}
            >
              <FaCog className={iconClass} /> Settings
            </li>
          </ul>
        </div>

        <div
          className={`px-4 py-3 rounded-xl text-center ${sidebarHover} ${sidebarText}`}
        >
          <p className="text-sm opacity-80">Need Help?</p>
          <button className="mt-2 px-4 py-2 rounded-lg bg-purple-300/30 hover:bg-purple-200/40">
            Support
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Hero Section */}
        <div
          className={`rounded-xl p-6 flex items-center justify-between shadow-md ${cardBg}`}
        >
          <div>
            <h2 className={`text-2xl font-bold ${headingColor}`}>
              Welcome, Professor!
            </h2>
            <p className={isDark ? "text-gray-300" : "text-gray-500"}>
              Manage your classes, monitor students, and transcribe your
              lectures live.
            </p>
          </div>
          <img
            src="/teacher-illustration.png"
            alt="educator"
            className="h-24"
          />
        </div>

        {/* Live Transcription */}
        <h3 className={`mt-10 mb-4 text-lg font-semibold ${headingColor}`}>
          Live Transcription
        </h3>
        <div
          className={`p-6 rounded-xl shadow-md ${cardBg} flex flex-col items-center gap-4`}
        >
          {/* Pulsing Transcription Button */}
          <motion.button
            onClick={() => setIsRecording((r) => !r)}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: isRecording
                ? [
                    "0 0 0px rgba(255, 0, 0, 0.5)",
                    "0 0 20px rgba(255, 0, 0, 0.8)",
                    "0 0 0px rgba(255, 0, 0, 0.5)",
                  ]
                : [
                    "0 0 0px rgba(157, 138, 219, 0.5)",
                    "0 0 20px rgba(157, 138, 219, 0.8)",
                    "0 0 0px rgba(157, 138, 219, 0.5)",
                  ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg shadow-md transform transition duration-300 ease-in-out hover:scale-110 hover:brightness-110 ${actionBg} ${actionText}`}
          >
            <FaMicrophone />
            {isRecording ? "Stop Transcription" : "Start Transcription"}
          </motion.button>

          {/* Transcript box with Live indicator */}
          <div
            className={`w-full h-48 rounded-lg p-4 overflow-y-auto ${subtleBg} shadow-inner flex flex-col`}
          >
            {isRecording ? (
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                <span className="text-red-600 font-semibold">Live…</span>
              </div>
            ) : null}

            <p
              className={isDark ? "text-gray-300 italic" : "text-gray-500 italic"}
            >
              {isRecording
                ? "Listening and transcribing in real time..."
                : "Transcript will appear here in real time..."}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <h3 className={`mt-10 mb-4 text-lg font-semibold ${headingColor}`}>
          Quick Actions
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <button
            className={`p-6 rounded-xl text-center shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110 ${actionBg} ${actionText}`}
          >
            <FaBook className={`mx-auto text-2xl mb-2 ${iconClass}`} />
            <h4 className="font-bold">Create Course</h4>
            <p className="text-sm opacity-90">Upload materials & lessons</p>
          </button>
          <button
            className={`p-6 rounded-xl text-center shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110 ${actionBg} ${actionText}`}
          >
            <FaChartLine className={`mx-auto text-2xl mb-2 ${iconClass}`} />
            <h4 className="font-bold">View Analytics</h4>
            <p className="text-sm opacity-90">Track class performance</p>
          </button>
          <button
            className={`p-6 rounded-xl text-center shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110 ${actionBg} ${actionText}`}
          >
            <FaCalendarAlt className={`mx-auto text-2xl mb-2 ${iconClass}`} />
            <h4 className="font-bold">Schedule Lecture</h4>
            <p className="text-sm opacity-90">Plan upcoming sessions</p>
          </button>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside
        className={`w-80 ${sidebarBg} p-6 space-y-6 rounded-l-2xl shadow-lg ${sidebarText}`}
      >
        {/* Profile */}
        <div className="rounded-xl p-6 text-center bg-white/10">
          <h4 className="font-bold">Professor Jane</h4>
          <p className="text-sm opacity-80">Educator</p>
          <button className="mt-3 px-4 py-2 rounded-lg bg-purple-300/30 hover:bg-purple-200/40">
            Sign Out
          </button>
        </div>

        {/* Calendar */}
        <div>
          <h4 className="font-bold mb-2">Calendar</h4>
          <div className="h-40 rounded-lg flex items-center justify-center text-2xl bg-white/10">
            📅
          </div>
        </div>

        {/* Students */}
        <div>
          <h4 className="font-bold mb-2">Top Students</h4>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span>Anna</span>{" "}
              <span className="font-bold text-green-300">#01</span>
            </li>
            <li className="flex items-center justify-between">
              <span>David</span>{" "}
              <span className="font-bold text-green-300">#02</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Maria</span>{" "}
              <span className="font-bold text-green-300">#03</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
