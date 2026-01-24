"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";

const Sidebar = dynamic(() => import("./Sidebar"), {
  ssr: false,
});

export default function SidebarClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 📌 SLIM EDGE TAB */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
        className="
          fixed top-5 left-0 z-50
          px-2 py-3

          bg-gradient-to-b from-[#9d8adb] to-[#4c4172]
          text-white
          shadow-lg

          rounded-r-xl

          flex items-center justify-center

          transition-all duration-300
          hover:pl-3
          md:hidden
        "
      >
        <Menu size={16} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 z-50 h-screen
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-4 right-4 z-50
            w-9 h-9
            flex items-center justify-center

            rounded-full
            bg-black/40 text-white
            shadow-md
            md:hidden
          "
        >
          <X size={18} />
        </button>

        <Sidebar />
      </div>
    </>
  );
}
