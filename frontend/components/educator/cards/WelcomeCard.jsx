"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WelcomeCard({
  subtitle = "Ready to manage your classes today?",
}) {
  const [name, setName] = useState("Professor");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/educator/profile");
        if (res.ok) {
          const data = await res.json();
          const parts = data.educator.fullName?.trim().split(/\s+/) || [];
          setName(parts[0] || "Professor");
        }
      } catch (error) {
        console.error("Failed to fetch educator profile:", error);
      }
    }
    fetchProfile();
  }, []);
  return (
    <div
      className="
        edu-welcome-banner
        relative
        min-h-[90px] lg:min-h-[110px] xl:min-h-[130px]
        w-full
        bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
        rounded-[16px] md:rounded-[24px] lg:rounded-[30px]
        px-6 md:px-10 lg:px-12 xl:px-16
        py-5 md:py-6 lg:py-7
        flex items-center
        overflow-visible
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
      "
    >
      {/* TEXT */}
      <div className="z-10">
        <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
          Welcome, {name}!
        </h2>

        <p className="text-xs md:text-sm lg:text-base text-white/90 mt-1 opacity-90">
          {subtitle}
        </p>
      </div>

      {/* DESKTOP IMAGE */}
      <div className="hidden md:block absolute right-6 lg:right-8 bottom-0">
        <Image
          src="/owl-prof.png"
          alt="Welcome illustration"
          width={200}
          height={300}
          className="lg:w-[180px] xl:w-[220px]"
          priority
        />
      </div>

      {/* MOBILE IMAGE */}
      <div className="md:hidden absolute right-3 bottom-2">
        <Image
          src="/owl-prof.png"
          alt="Welcome illustration"
          width={90}
          height={120}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
