"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  placeholder = "Search",
  onChange,
}) {
  return (
    <div
      className="
        edu-search-bar
        w-full
        flex items-center gap-3
        px-5 py-3
        lg:px-6 lg:py-4
        rounded-full
        bg-white dark:bg-[#2d2640]
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
      "
    >
      <Search size={22} className="text-white shrink-0" />

      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        aria-label="Search"
        className="
          flex-1
          bg-transparent
          outline-none
          text-sm lg:text-base
          text-white
          placeholder:text-white
        "
      />
    </div>
  );
}
