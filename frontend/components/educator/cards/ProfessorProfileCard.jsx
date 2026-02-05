"use client";

/* ================= IMPORTS ================= */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Sun, Moon, X } from "lucide-react";

/* ================= MAIN ================= */

export default function ProfessorProfileCard() {
  const router = useRouter();
  const [openNotif, setOpenNotif] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const [name, setName] = useState("Uia");
  const [educator, setEducator] = useState(null);
  const [notifications, setNotifications] = useState([]);

  /* THEME INIT */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  /* FETCH EDUCATOR PROFILE */
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/educator/profile");
        if (res.ok) {
          const data = await res.json();
          setEducator(data.educator);
          setName(data.educator.fullName.split(" ")[0] || "Professor");
        }
      } catch (error) {
        console.error("Failed to fetch educator profile:", error);
      }
    }
    fetchProfile();
  }, []);

  /* FETCH NOTIFICATIONS */
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

  function toggleDarkMode() {
    const next = !dark;

    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  async function handleSignOut() {
    try {
      // Call logout API to clear the auth cookie
      await fetch("/api/auth/logout", { method: "POST" });
      
      // Clear any client-side storage
      localStorage.clear();
      sessionStorage.clear();
      
      // Redirect to login
      window.location.href = "/auth/educator/login";
    } catch (error) {
      console.error("Logout error:", error);
      // Redirect anyway
      window.location.href = "/auth/educator/login";
    }
  }

  async function handleMarkAllRead() {
    try {
      await fetch("/api/educator/notifications/mark-all-read", {
        method: "POST",
      });
      // Refresh notifications
      const res = await fetch("/api/educator/notifications?limit=10");
      if (res.ok) {
        const data = await res.json();
        setNotifications(data.notifications);
      }
    } catch (error) {
      console.error("Failed to mark all as read:", error);
    }
  }

  function handleViewAllNotifications() {
    // You can create a dedicated notifications page
    router.push("/educator/notifications");
  }

  const initial = name?.charAt(0)?.toUpperCase() || "?";

  return (
    <>
      {/* MOBILE BUTTON */}
      <div className="md:hidden flex justify-end mb-2">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9d8adb] to-[#4c4172] flex items-center justify-center shadow-lg text-white font-semibold"
        >
          {initial}
        </button>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block">
        <ProfileCard
          name={name}
          dark={dark}
          toggleDarkMode={toggleDarkMode}
          openNotif={openNotif}
          setOpenNotif={setOpenNotif}
          setEditOpen={setEditOpen}
          handleSignOut={handleSignOut}
          notifications={notifications}
          handleMarkAllRead={handleMarkAllRead}
          handleViewAllNotifications={handleViewAllNotifications}
        />
      </div>

      {/* MOBILE PROFILE */}
      {mobileOpen && (
        <Modal onClose={() => setMobileOpen(false)}>
          <ProfileCard
            mobile
            name={name}
            dark={dark}
            toggleDarkMode={toggleDarkMode}
            openNotif={openNotif}
            setOpenNotif={setOpenNotif}
            setEditOpen={(v) => {
              setMobileOpen(false);
              setEditOpen(v);
            }}
            handleSignOut={handleSignOut}
            notifications={notifications}
            handleMarkAllRead={handleMarkAllRead}
            handleViewAllNotifications={handleViewAllNotifications}
          />
        </Modal>
      )}

      {/* EDIT PROFILE */}
      {editOpen && (
        <Modal onClose={() => setEditOpen(false)}>
          <EditProfile
            educator={educator}
            setEducator={setEducator}
            setName={setName}
            setEditOpen={setEditOpen}
          />
        </Modal>
      )}
    </>
  );
}

/* ================= PROFILE CARD ================= */

function ProfileCard({
  name,
  dark,
  toggleDarkMode,
  openNotif,
  setOpenNotif,
  setEditOpen,
  handleSignOut,
  notifications,
  handleMarkAllRead,
  handleViewAllNotifications,
  mobile = false,
}) {
  return (
    <div
      className={`
        relative
        ${mobile ? "w-full" : "w-[345px]"}
        h-[170px]
        bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
        text-white
        rounded-[36px]
        px-8 py-6
        shadow-[0_14px_40px_rgba(0,0,0,0.18)]
        flex flex-col
      `}
    >
      {/* NOTIFICATION */}
      <div className="absolute top-6 right-6">
        <button onClick={() => setOpenNotif(!openNotif)}>
          <Bell size={22} />
        </button>

        {openNotif && (
          <NotifDropdown
            notifications={notifications}
            onMarkAllRead={handleMarkAllRead}
            onViewAll={handleViewAllNotifications}
          />
        )}
      </div>

      {/* USER INFO */}
      <div className="flex items-center gap-4">
        <Avatar name={name} />

        <div>
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-white/80 text-sm">Instructor</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-auto space-y-1 text-white/80 text-sm">
        <p
          onClick={() => setEditOpen(true)}
          className="cursor-pointer hover:underline"
        >
          Edit Profile
        </p>

        <p 
          onClick={handleSignOut}
          className="cursor-pointer hover:underline"
        >
          Sign Out
        </p>
      </div>

      {/* DARK MODE */}
      <button
        onClick={toggleDarkMode}
        className="absolute right-5 bottom-5 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
      >
        {dark ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </div>
  );
}

/* ================= NOTIFICATIONS ================= */

function NotifDropdown({ notifications = [], onMarkAllRead, onViewAll }) {
  function formatTime(createdAt) {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInSeconds = Math.floor((now - created) / 1000);
    
    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return created.toLocaleDateString();
  }

  return (
    <div className="absolute right-0 mt-3 w-[280px] sm:w-[360px] bg-white text-gray-800 rounded-xl border shadow-lg z-50 overflow-hidden">
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

      {unread && (
        <span className="w-2 h-2 bg-[#9d8adb] rounded-full mt-2" />
      )}
    </div>
  );
}

/* ================= EDIT PROFILE ================= */

function EditProfile({ setEditOpen, educator, setEducator, setName }) {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    gender: "",
    birthDate: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (educator) {
      setFormData({
        fullName: educator.fullName || "",
        username: educator.username || "",
        gender: educator.gender || "",
        birthDate: educator.birthDate ? educator.birthDate.split("T")[0] : "",
      });
    }
  }, [educator]);

  async function handleSave() {
    setLoading(true);
    try {
      const res = await fetch("/api/educator/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setEducator(data.educator);
        setName(data.educator.fullName.split(" ")[0] || "Professor");
        setEditOpen(false);
      } else {
        const error = await res.json();
        alert(error.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Failed to save profile:", error);
      alert("An error occurred while saving");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white w-full rounded-[28px] p-6 text-gray-700">
      <h2 className="text-xl font-semibold mb-5 text-[#4c4172]">
        Edit Profile
      </h2>

      {/* FORM */}
      <div className="space-y-4 text-sm">
        <Input
          label="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />

        <Input
          label="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border outline-none"
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
            <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
          </select>
        </div>

        <Input
          label="Birth Date"
          type="date"
          value={formData.birthDate}
          onChange={(e) =>
            setFormData({ ...formData, birthDate: e.target.value })
          }
        />

        <Input
          label="Email"
          value={educator?.user?.email || ""}
          disabled
        />

        <Input
          label="Department"
          value={educator?.department?.name || ""}
          disabled
        />
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => setEditOpen(false)}
          className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700"
          disabled={loading}
        >
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="px-4 py-2 rounded-lg bg-[#9d8adb] text-white disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

/* ================= MODAL ================= */

function Modal({ children, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[28px] w-[90%] max-w-[480px] p-4 max-h-[85vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2"
        >
          <X size={18} />
        </button>

        {children}
      </div>
    </div>
  );
}

/* ================= UI PARTS ================= */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>

      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg border outline-none"
      />
    </div>
  );
}

function Avatar({ name }) {
  return (
    <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center text-xl font-semibold uppercase">
      {name?.charAt(0) || "?"}
    </div>
  );
}
