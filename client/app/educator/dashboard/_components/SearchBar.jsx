"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  placeholder = "Search",
  onChange,
}) {
  return (
    <div
      className="
        w-full
        flex items-center gap-3
        px-6 py-4
        rounded-full
        bg-[#e9e8f2]
        shadow-[0_6px_18px_rgba(0,0,0,0.05)]
      "
    >
      <Search size={26} className="text-[#9d8adb]" />

      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        aria-label="Search"
        className="
          flex-1
          bg-transparent
          outline-none
          text-base
          text-[#6b6b6b]
          placeholder:text-[#9d8adb]
        "
      />
    </div>
  );
}
