"use client";

import { useState, useEffect } from "react";
import { Bell, LogOut, X } from "lucide-react";

export default function EducatorHeader({ userName = "Educator" }) {
  const [openNotif, setOpenNotif] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [openProfile, setOpenProfile] = useState(false);
  const [showAllNotifs, setShowAllNotifs] = useState(false);
  const [allNotifications, setAllNotifications] = useState([]);
  const [loadingAll, setLoadingAll] = useState(false);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const res = await fetch("/api/educator/notifications?limit=10");
        if (res.ok) {
          const data = await res.json();
          setNotifications(data.notifications);
        }
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    }
    fetchNotifications();
  }, []);

  async function handleMarkAllRead() {
    try {
      await fetch("/api/educator/notifications/mark-all-read", {
        method: "POST",
      });
      const res = await fetch("/api/educator/notifications?limit=10");
      if (res.ok) {
        const data = await res.json();
        setNotifications(data.notifications);
      }
    } catch (error) {
      console.error("Failed to mark all as read:", error);
    }
  }

  async function handleViewAllNotifications() {
    setOpenNotif(false);
    setShowAllNotifs(true);
    setLoadingAll(true);
    try {
      const res = await fetch("/api/educator/notifications?limit=100");
      if (res.ok) {
        const data = await res.json();
        setAllNotifications(data.notifications);
      }
    } catch (error) {
      console.error("Failed to fetch all notifications:", error);
    } finally {
      setLoadingAll(false);
    }
  }

  async function handleSignOut() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/auth/educator/login";
    } catch (error) {
      console.error("Logout error:", error);
      window.location.href = "/auth/educator/login";
    }
  }

  const initial = userName?.charAt(0)?.toUpperCase() || "E";

  return (
    <div className="flex items-center gap-3 relative">
      {/* Notification Button */}
      <button
        onClick={() => setOpenNotif(!openNotif)}
        className="w-10 h-10 rounded-full bg-[#f1effb] flex items-center justify-center hover:bg-[#e5e1fa] relative"
      >
        <Bell size={18} className="text-[#6b5fcf]" />
        {notifications.filter((n) => !n.read).length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </button>

      {openNotif && (
        <NotifDropdown
          notifications={notifications}
          onMarkAllRead={handleMarkAllRead}
          onViewAll={handleViewAllNotifications}
          onClose={() => setOpenNotif(false)}
        />
      )}

      {/* All Notifications Modal */}
      {showAllNotifs && (
        <AllNotificationsModal
          notifications={allNotifications}
          loading={loadingAll}
          onClose={() => setShowAllNotifs(false)}
        />
      )}

      {/* Profile Button */}
      <div className="relative">
        <button
          onClick={() => setOpenProfile(!openProfile)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="text-right hidden md:block">
            <div className="text-sm font-semibold text-[#6b5fcf]">
              {userName}
            </div>
            <div className="text-xs text-gray-500">Instructor</div>
          </div>

          <div className="w-10 h-10 rounded-full bg-[#9b8ae0] flex items-center justify-center text-white font-bold">
            {initial}
          </div>
        </button>

        {openProfile && (
          <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border z-50">
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function NotifDropdown({ notifications = [], onMarkAllRead, onViewAll, onClose }) {
  function formatTime(createdAt) {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInSeconds = Math.floor((now - created) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return created.toLocaleDateString();
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="absolute right-0 top-12 w-[280px] sm:w-[360px] bg-white text-gray-800 rounded-xl border shadow-lg z-50 overflow-hidden">
        <div className="px-4 py-3 flex justify-between border-b">
          <h3 className="text-sm font-semibold">Notifications</h3>

          <button
            onClick={onMarkAllRead}
            className="text-xs text-[#9d8adb] hover:underline"
          >
            Mark all as read
          </button>
        </div>

        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500 text-sm">
              No notifications
            </div>
          ) : (
            notifications.map((item) => (
              <NotifItem
                key={item.id}
                title={item.title}
                message={item.message}
                time={formatTime(item.createdAt)}
                unread={!item.read}
              />
            ))
          )}
        </div>

        <div className="px-4 py-2 text-center border-t">
          <button
            onClick={onViewAll}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            View all notifications
          </button>
        </div>
      </div>
    </>
  );
}

function AllNotificationsModal({ notifications = [], loading, onClose }) {
  function formatTime(createdAt) {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInSeconds = Math.floor((now - created) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return created.toLocaleDateString();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-base font-semibold text-[#6b5fcf]">All Notifications</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="px-5 py-12 text-center text-gray-400 text-sm">Loading...</div>
          ) : notifications.length === 0 ? (
            <div className="px-5 py-12 text-center text-gray-400 text-sm">No notifications</div>
          ) : (
            notifications.map((item) => (
              <NotifItem
                key={item.id}
                title={item.title}
                message={item.message}
                time={formatTime(item.createdAt)}
                unread={!item.read}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function NotifItem({ title, message, time, unread }) {
  const initial = title?.charAt(0)?.toUpperCase() || "N";

  return (
    <div
      className={`
        flex gap-3 px-4 py-3 hover:bg-gray-50 transition
        ${unread ? "bg-[#f7f5ff]" : "bg-white"}
      `}
    >
      <div className="w-9 h-9 rounded-full bg-[#9d8adb]/20 text-[#6b5cbf] flex items-center justify-center text-xs font-semibold">
        {initial}
      </div>

      <div className="flex-1">
        <p className="text-sm">
          <span className="font-medium">{title}</span>{" "}
          <span className="text-gray-600">{message}</span>
        </p>

        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>

      {unread && <span className="w-2 h-2 bg-[#9d8adb] rounded-full mt-2" />}
    </div>
  );
}
