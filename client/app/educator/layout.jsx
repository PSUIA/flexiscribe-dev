"use client";

import SidebarClient from "@/components/educator/layout/SidebarClient";

export default function EducatorLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarClient />

      <main className="flex-1 bg-gray-50 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
