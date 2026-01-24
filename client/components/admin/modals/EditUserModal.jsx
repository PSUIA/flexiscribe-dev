"use client";

import { X, Shield, Mail, User } from "lucide-react";
import { useState } from "react";

export default function EditUserModal({ user, onClose }) {
  const [role, setRole] = useState(user.role);
  const [status, setStatus] = useState(user.status || "Active");
  const [email, setEmail] = useState(user.email || "");

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#f5f3ff] px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-bold text-[#4c4172]">
            Edit User
          </h3>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <div className="flex items-center gap-3 bg-gray-100 border rounded-xl px-4 py-3 mt-1">
              <User size={18} className="text-gray-600" />
              <input
                value={user.name}
                disabled
                className="
                  w-full
                  bg-transparent
                  text-gray-800
                  font-medium
                  outline-none
                "
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <div className="flex items-center gap-3 bg-gray-100 border rounded-xl px-4 py-3 mt-1">
              <Mail size={18} className="text-gray-600" />
              <input
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                  w-full
                  bg-transparent
                  text-gray-800
                  font-medium
                  outline-none
                  placeholder-gray-500
                "
                placeholder="user@email.com"
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <p className="text-sm font-bold text-[#4c4172] mb-2">
              Role
            </p>

            {["Student", "Educator", "Admin"].map(
              (r) => (
                <label
                  key={r}
                  className="
                    flex
                    items-center
                    justify-between
                    bg-gray-50
                    border
                    rounded-xl
                    px-4
                    py-3
                    mb-2
                    cursor-pointer
                    text-gray-700
                    font-medium
                  "
                >
                  {r}

                  <input
                    type="radio"
                    name="role"
                    checked={role === r}
                    onChange={() =>
                      setRole(r)
                    }
                  />
                </label>
              )
            )}
          </div>

          {/* Status */}
          <div>
            <p className="text-sm font-bold text-[#4c4172] mb-2">
              Account Status
            </p>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setStatus("Active")
                }
                className={`
                  flex-1 py-2 rounded-xl border font-medium
                  ${
                    status === "Active"
                      ? "bg-[#9d8adb] text-white"
                      : "text-gray-700"
                  }
                `}
              >
                Active
              </button>

              <button
                onClick={() =>
                  setStatus("Inactive")
                }
                className={`
                  flex-1 py-2 rounded-xl border font-medium
                  ${
                    status === "Inactive"
                      ? "bg-[#9d8adb] text-white"
                      : "text-gray-700"
                  }
                `}
              >
                Inactive
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#faf9ff] px-6 py-4 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              px-5
              py-2
              rounded-full
              text-gray-700
              hover:bg-gray-100
            "
          >
            Cancel
          </button>

          <button
            className="
              bg-[#9d8adb]
              text-white
              px-6
              py-2
              rounded-full
              hover:opacity-90
            "
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
