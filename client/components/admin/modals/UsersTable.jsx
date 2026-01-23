"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import EditUserModal from "./EditUserModal";
import { USERS } from "@/lib/mock/users";

/* STATUS BADGE STYLES */
const STATUS_STYLE = {
  Active:
    "bg-green-100 text-green-700 border border-green-300",
  Inactive:
    "bg-gray-100 text-gray-600 border border-gray-300",
  Banned:
    "bg-red-100 text-red-600 border border-red-300",
};

/* GRID LAYOUT */
const GRID =
  "grid-cols-[28px_2fr_1fr_1.3fr_1fr] sm:grid-cols-[32px_3fr_1.5fr_2.5fr_1.5fr_2fr_1fr]";

export default function UsersTable({
  roleFilter,
  statusFilter,
  dateFilter,
}) {
  const [editUser, setEditUser] = useState(null);
  const [selected, setSelected] = useState([]);

  /* FILTER LOGIC */
  const filtered = USERS.filter((u) => {
    if (roleFilter !== "All" && u.role !== roleFilter)
      return false;

    if (
      statusFilter !== "All" &&
      u.status !== statusFilter
    )
      return false;

    if (dateFilter !== "All") {
      const days = Number(dateFilter);
      const diff =
        (Date.now() -
          new Date(u.joined).getTime()) /
        (1000 * 60 * 60 * 24);

      if (diff > days) return false;
    }

    return true;
  });

  function toggleAll() {
    if (
      selected.length === filtered.length &&
      filtered.length > 0
    ) {
      setSelected([]);
    } else {
      setSelected(filtered.map((u) => u.id));
    }
  }

  function toggleOne(id) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  }

  return (
    <>
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden sm:block bg-white rounded-3xl shadow-[0_24px_60px_rgba(76,65,114,0.18)] overflow-hidden">

        {/* HEADER */}
        <div
          className={`grid ${GRID} bg-[#9d8adb] px-5 py-4 text-white text-sm font-semibold items-center`}
        >
          <input
            type="checkbox"
            checked={
              selected.length === filtered.length &&
              filtered.length > 0
            }
            onChange={toggleAll}
          />

          <span>Full Name</span>
          <span>Username</span>
          <span className="text-center">Status</span>
          <span>Role</span>
          <span>Joined</span>
          <span className="text-center">Actions</span>
        </div>

        {/* ROWS */}
        <div className="divide-y divide-[#eeeaf8]">
          {filtered.map((u) => (
            <div
              key={u.id}
              className={`grid ${GRID} px-5 py-4 items-center hover:bg-[#f7f5fc] transition`}
            >
              <input
                type="checkbox"
                checked={selected.includes(u.id)}
                onChange={() => toggleOne(u.id)}
              />

              {/* NAME */}
              <div>
                <p className="font-semibold text-[#4c4172]">
                  {u.name}
                </p>
                <p className="text-sm text-[#7b6fae]">
                  {u.email}
                </p>
              </div>

              {/* USERNAME */}
              <div className="text-[#6f63a6]">
                @{u.username}
              </div>

              {/* STATUS */}
              <div className="flex justify-center">
                <span
                  className={`
                    px-3 py-1
                    rounded-full
                    text-xs font-semibold
                    whitespace-nowrap
                    ${STATUS_STYLE[u.status]}
                  `}
                >
                  {u.status}
                </span>
              </div>

              {/* ROLE */}
              <div className="text-[#6f63a6]">
                {u.role}
              </div>

              {/* JOINED */}
              <div className="text-[#9a94b8]">
                {formatDate(u.joined)}
              </div>

              {/* ACTIONS */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setEditUser(u)}
                  className="
                    w-8 h-8 flex items-center justify-center
                    rounded-full text-[#6f63a6]
                    hover:bg-[#ede9fe]
                  "
                >
                  <Pencil size={16} />
                </button>

                <button
                  className="
                    w-8 h-8 flex items-center justify-center
                    rounded-full text-red-500
                    hover:bg-[#fdecec]
                  "
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="sm:hidden space-y-4">

        {filtered.map((u) => (
          <div
            key={u.id}
            className="bg-white rounded-2xl p-4 shadow"
          >
            {/* HEADER */}
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-[#4c4172]">
                  {u.name}
                </p>
                <p className="text-sm text-[#7b6fae]">
                  {u.email}
                </p>
              </div>

              <span
                className={`
                  px-5 py-3
                  rounded-full
                  text-xs font-semibold
                  whitespace-nowrap
                  border
                  ${STATUS_STYLE[u.status]}
                `}
              >
                {u.status}
              </span>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">

              <div>
                <p className="text-gray-400 text-xs">
                  Username
                </p>
                <p className="font-medium text-[#4c4172]">
                  @{u.username}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">
                  Role
                </p>
                <p className="font-medium text-[#4c4172]">
                  {u.role}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">
                  Joined
                </p>
                <p className="font-medium text-[#4c4172]">
                  {formatDate(u.joined)}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setEditUser(u)}
                className="
                  px-4 py-2 text-sm
                  rounded-full border
                  text-[#6f63a6]
                "
              >
                Edit
              </button>

              <button
                className="
                  px-4 py-2 text-sm
                  rounded-full
                  bg-red-100 text-red-600
                "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editUser && (
        <EditUserModal
          user={editUser}
          onClose={() => setEditUser(null)}
        />
      )}
    </>
  );
}
