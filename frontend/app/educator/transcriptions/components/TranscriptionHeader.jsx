"use client";

import { FileText, Search } from "lucide-react";
import { useState, useEffect } from "react";
import EducatorHeader from "@/components/educator/layout/EducatorHeader";

export default function TranscriptionHeader() {
  const [userName, setUserName] = useState("Educator");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/educator/profile");
        if (res.ok) {
          const data = await res.json();
          setUserName(data.educator.fullName.split(" ")[0] || "Educator");
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    }
    fetchProfile();
  }, []);

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
        <EducatorHeader userName={userName} />
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
