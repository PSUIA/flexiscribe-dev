"use client";

/* ================= IMPORTS ================= */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Sun, Moon, X } from "lucide-react";

/* ================= FALLBACK MOCK DATA ================= */
// NOTE: Local mock used to avoid build errors when alias imports
// (e.g. @/lib/...) are unavailable in this environment.
const notifications = [
  {
    id: 1,
    name: "Registrar",
    message: "approved your schedule request",
    time: "2 mins ago",
    unread: true,
  },
  {
    id: 2,
    name: "Dean",
    message: "sent a meeting invite",
    time: "1 hour ago",
    unread: false,
  },
  {
    id: 3,
    name: "System",
    message: "updated grading module",
    time: "Yesterday",
    unread: false,
  },
];

/* ================= MAIN ================= */

export default function ProfessorProfileCard() {
  const router = useRouter();
  const [openNotif, setOpenNotif] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const [name, setName] = useState("Uia");

  /* THEME INIT */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggleDarkMode() {
    const next = !dark;

    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function handleSignOut() {
    // Clear any stored authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Navigate to login page
    router.push("/auth/educator/login");
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
          />
        </Modal>
      )}

      {/* EDIT PROFILE */}
      {editOpen && (
        <Modal onClose={() => setEditOpen(false)}>
          <EditProfile
            name={name}
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

        {openNotif && <NotifDropdown />}
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

function NotifDropdown() {
  return (
    <div className="absolute right-0 mt-3 w-[280px] sm:w-[360px] bg-white text-gray-800 rounded-xl border shadow-lg z-50 overflow-hidden">
      <div className="px-4 py-3 flex justify-between border-b">
        <h3 className="text-sm font-semibold">Notifications</h3>

        <button className="text-xs text-[#9d8adb] hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="max-h-[300px] overflow-y-auto">
        {notifications.map((item) => (
          <NotifItem key={item.id} {...item} />
        ))}
      </div>

      <div className="px-4 py-2 text-center border-t">
        <button className="text-xs text-gray-500 hover:text-gray-700">
          View all notifications
        </button>
      </div>
    </div>
  );
}

function NotifItem({ name, message, time, unread }) {
  return (
    <div
      className={`
        flex gap-3 px-4 py-3 hover:bg-gray-50 transition
        ${unread ? "bg-[#f7f5ff]" : "bg-white"}
      `}
    >
      <div className="w-9 h-9 rounded-full bg-[#9d8adb]/20 text-[#6b5cbf] flex items-center justify-center text-xs font-semibold">
        {name?.charAt(0)}
      </div>

      <div className="flex-1">
        <p className="text-sm">
          <span className="font-medium">{name}</span>{" "}
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

function EditProfile({ setEditOpen, name, setName }) {
  const [email, setEmail] = useState("uia@university.edu");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [subjects, setSubjects] = useState("");

  return (
    <div className="bg-white w-full rounded-[28px] p-6 text-gray-700">
      <h2 className="text-xl font-semibold mb-5 text-[#4c4172]">
        Edit Profile
      </h2>

      {/* FORM */}
      <div className="space-y-4 text-sm">
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+63 9xx xxx xxxx"
        />

        <Input
          label="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <Input
          label="Subjects Handled"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />

        <Input label="Position" value="Instructor" disabled />
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between mt-6">
        <button className="text-sm text-red-500 hover:underline">
          Change Password
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => setEditOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={() => setEditOpen(false)}
            className="px-4 py-2 rounded-lg bg-[#9d8adb] text-white"
          >
            Save Changes
          </button>
        </div>
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
