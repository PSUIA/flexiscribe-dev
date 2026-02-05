"use client";

import {
  Search,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  X,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileModal from "../modals/ProfileModal";

/* MOCK */
const notifications = [
  {
    title: "New student registered",
    desc: "A new user joined the system",
    time: "2 minutes ago",
  },
  {
    title: "Audit log updated",
    desc: "Security activity recorded",
    time: "1 hour ago",
  },
];

export default function TopBar({ onMenuClick }) {
  const router = useRouter();
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);
  const [profileTab, setProfileTab] = useState("profile");

  const [viewAllOpen, setViewAllOpen] = useState(false);

  const closeAll = () => {
    setNotifOpen(false);
    setUserOpen(false);
  };

  const handleSignOut = async () => {
    closeAll();
    try {
      // Call logout API to clear the auth cookie
      await fetch("/api/auth/logout", { method: "POST" });
      
      // Clear any client-side storage
      localStorage.clear();
      sessionStorage.clear();
      
      // Redirect to login
      window.location.href = "/auth/admin/login";
    } catch (error) {
      console.error("Logout error:", error);
      // Redirect anyway
      window.location.href = "/auth/admin/login";
    }
  };

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 right-0 z-50
          bg-[#f4f3fb] border-b border-[#e6e3f3]
          w-full md:left-[345px] md:w-[calc(100%-345px)]
        "
      >
        <div className="h-[72px] flex items-center px-4 sm:px-10">

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={onMenuClick}
            className="md:hidden mr-3 p-2 rounded-lg hover:bg-white"
          >
            <Menu size={22} className="text-[#4c4172]" />
          </button>

          {/* SEARCH */}
          <div className="relative flex-1 max-w-[900px]">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9d8adb]"
            />

            <input
              type="text"
              placeholder="Search or run a command"
              className="
                w-full h-[48px]
                pl-14 pr-4
                rounded-lg
                bg-white
                border border-[#dedbf0]
                text-[#4c4172]
                placeholder:text-[#9d8adb]
                outline-none
                focus:border-[#9d8adb]
                focus:ring-1 focus:ring-[#9d8adb]/30
                transition
              "
            />
          </div>

          {/* RIGHT */}
          <div className="ml-auto flex items-center gap-4">

            {/* NOTIFICATIONS */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotifOpen(!notifOpen);
                  setUserOpen(false);
                }}
                className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-white"
              >
                <Bell size={18} className="text-[#6f63a6]" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {notifOpen && (
                <div className="absolute right-0 top-12 w-[320px] sm:w-[360px] rounded-xl bg-white border shadow-lg">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-semibold text-[#4c4172]">
                      Notifications
                    </p>
                  </div>

                  <div className="divide-y">
                    {notifications.map((n, i) => (
                      <div
                        key={i}
                        className="px-4 py-3 hover:bg-[#f7f6fc]"
                      >
                        <p className="text-sm font-medium text-[#4c4172]">
                          {n.title}
                        </p>
                        <p className="text-xs text-[#6f63a6]">
                          {n.desc}
                        </p>
                        <p className="text-xs text-[#9d8adb] mt-1">
                          {n.time}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 py-3 border-t text-center">
                    <button
                      onClick={() => {
                        setNotifOpen(false);
                        setViewAllOpen(true);
                      }}
                      className="text-sm text-[#6f63a6] hover:underline"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* USER MENU */}
            <div className="relative">
              <button
                onClick={() => {
                  setUserOpen(!userOpen);
                  setNotifOpen(false);
                }}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white"
              >
                <div className="w-8 h-8 rounded-full bg-[#9d8adb] flex items-center justify-center text-white text-sm font-semibold">
                  S
                </div>

                <span className="hidden sm:block text-sm font-medium text-[#4c4172]">
                  Sky
                </span>

                <ChevronDown size={14} className="text-[#6f63a6]" />
              </button>

              {userOpen && (
                <div className="absolute right-0 top-12 w-56 rounded-xl bg-white border shadow-lg p-2">
                  <MenuItem
                    icon={<User size={16} />}
                    label="View Profile"
                    onClick={() => {
                      setProfileTab("profile");
                      setProfileOpen(true);
                      closeAll();
                    }}
                  />

                  <MenuItem
                    icon={<Settings size={16} />}
                    label="Account Settings"
                    onClick={() => {
                      setProfileTab("security");
                      setProfileOpen(true);
                      closeAll();
                    }}
                  />

                  <div className="my-2 h-px bg-[#ece9f6]" />

                  <MenuItem
                    icon={<LogOut size={16} />}
                    label="Sign out"
                    onClick={handleSignOut}
                    danger
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* SPACER */}
      <div className="h-[72px]" />

      {/* MODALS */}
      {viewAllOpen && (
        <Modal title="All Notifications" onClose={() => setViewAllOpen(false)}>
          {notifications.map((n, i) => (
            <div key={i} className="px-6 py-4 hover:bg-[#f7f6fc]">
              <p className="text-sm font-medium text-[#4c4172]">
                {n.title}
              </p>
              <p className="text-xs text-[#6f63a6]">
                {n.desc}
              </p>
            </div>
          ))}
        </Modal>
      )}

      <ProfileModal
        open={profileOpen}
        defaultTab={profileTab}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
}

/* SMALL COMPONENTS */

function MenuItem({ icon, label, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm
        ${danger
          ? "text-red-600 hover:bg-[#fdecec]"
          : "text-[#4c4172] hover:bg-[#f4f3fb]"
        }`}
    >
      {icon}
      {label}
    </button>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <p className="text-lg font-semibold text-[#4c4172]">
            {title}
          </p>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="max-h-[420px] overflow-y-auto divide-y">
          {children}
        </div>
      </div>
    </div>
  );
}
