"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfileModal({
  open,
  defaultTab,
  onClose,
}) {
  const [tab, setTab] = useState(defaultTab);

  useEffect(() => {
    if (open) {
      setTab(defaultTab);
    }
  }, [defaultTab, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-[560px] bg-white rounded-2xl shadow-2xl p-7 z-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Account Settings
          </h2>

          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        {/* PROFILE HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-[#9d8adb] flex items-center justify-center text-white text-xl font-semibold">
            S
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Sky.
            </p>
            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-6 border-b mb-5">
          {["profile", "security"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2 capitalize text-sm font-medium transition
                ${
                  tab === t
                    ? "border-b-2 border-[#9d8adb] text-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="space-y-5 text-sm text-gray-700">

          {/* ================= PROFILE ================= */}
          {tab === "profile" && (
            <>
              <h3 className="font-semibold text-gray-900">
                Personal Information
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Full Name</label>
                  <input
                    className="w-full mt-1 rounded-lg border px-3 py-2"
                    defaultValue="Sky."
                  />
                </div>

                <div>
                  <label>Username</label>
                  <input
                    className="w-full mt-1 rounded-lg border px-3 py-2"
                    defaultValue="sky_admin"
                  />
                </div>
              </div>

              <div>
                <label>Email</label>
                <input
                  className="w-full mt-1 rounded-lg border px-3 py-2 bg-gray-100"
                  disabled
                  defaultValue="admin@flexiscribe.edu"
                />
              </div>

              <div>
                <label>Role</label>
                <input
                  className="w-full mt-1 rounded-lg border px-3 py-2 bg-gray-100"
                  disabled
                  defaultValue="Administrator"
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  className="w-full mt-1 rounded-lg border px-3 py-2"
                  placeholder="+63 9XX XXX XXXX"
                />
              </div>

              <div className="flex justify-end">
                <button className="bg-[#9d8adb] text-white px-6 py-2 rounded-full hover:bg-[#8b78d1]">
                  Save Changes
                </button>
              </div>
            </>
          )}

          {/* ================= SECURITY ================= */}
          {tab === "security" && (
            <>
              <h3 className="font-semibold text-gray-900">
                Security Settings
              </h3>

              <div>
                <label>Current Password</label>
                <input
                  type="password"
                  className="w-full mt-1 rounded-lg border px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>New Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 rounded-lg border px-3 py-2"
                  />
                </div>

                <div>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 rounded-lg border px-3 py-2"
                  />
                </div>
              </div>

              <div className="text-xs text-gray-500">
                Password must be at least 8 characters.
              </div>

              <div className="flex justify-between items-center pt-3">
                <button className="text-red-600 hover:underline">
                  Log out of all devices
                </button>

                <button className="bg-[#9d8adb] text-white px-6 py-2 rounded-full hover:bg-[#8b78d1]">
                  Update Password
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
