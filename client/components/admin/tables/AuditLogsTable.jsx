"use client";

import { useState, useMemo } from "react";
import { auditLogs } from "@/lib/mock/auditLogs";

/* ================= HELPERS ================= */

function formatDateTime(value) {
  const d = new Date(value);
  return {
    date: d.toLocaleDateString(),
    time: d.toLocaleTimeString(),
  };
}

const ROLE_STYLES = {
  Admin: "bg-purple-100 text-purple-700",
  Educator: "bg-blue-100 text-blue-700",
  Student: "bg-green-100 text-green-700",
};

/* ================= UI PARTS ================= */

function RoleBadge({ role }) {
  return (
    <span
      className={`text-xs px-5 py-1 rounded-full font-medium ${ROLE_STYLES[role]}`}
    >
      {role}
    </span>
  );
}

function SortIcon({ active, dir }) {
  return (
    <span className="ml-1 text-xs">
      {active ? (dir === "asc" ? "▲" : "▼") : "⇅"}
    </span>
  );
}

function MobileLogCard({ log }) {
  const { date, time } = formatDateTime(log.datetime);

  return (
    <div className="border rounded-xl p-8 bg-white space-y-3 shadow-sm">
      <div className="flex justify-between text-xs text-gray-500">
        <span>{date}</span>
        <span>{time}</span>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-900">
          {log.name}
        </p>
        <RoleBadge role={log.role} />
      </div>

      <div>
        <p className="text-xs text-gray-500">Action</p>
        <p className="text-sm text-gray-800">
          {log.action}
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-500">IP Address</p>
        <p className="text-sm text-gray-800">
          {log.ip}
        </p>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */

export default function AuditLogsTable() {
  const [date, setDate] = useState("");
  const [sortKey, setSortKey] = useState("datetime");
  const [sortDir, setSortDir] = useState("desc");

  /* FILTER */
  const filteredLogs = useMemo(() => {
    if (!date) return auditLogs;
    return auditLogs.filter((log) =>
      log.datetime.startsWith(date)
    );
  }, [date]);

  /* SORT */
  const sortedLogs = useMemo(() => {
    return [...filteredLogs].sort((a, b) => {
      let A = a[sortKey];
      let B = b[sortKey];

      if (sortKey === "datetime") {
        A = new Date(A);
        B = new Date(B);
      }

      if (A < B) return sortDir === "asc" ? -1 : 1;
      if (A > B) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredLogs, sortKey, sortDir]);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5">
        <div>
          <h2 className="text-lg font-semibold text-[#4c4172]">
            Activity Logs
          </h2>
          <p className="text-sm text-gray-500">
            Track system activities
          </p>
        </div>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-3 py-2 rounded-lg text-sm text-gray-700"
        />
      </div>

      {/* MOBILE */}
      <div className="md:hidden space-y-4">
        {sortedLogs.map((log) => (
          <MobileLogCard
            key={log.id}
            log={log}
          />
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="bg-[#f4f1fb]">
              <th className="p-3 text-center w-[60px] text-[#4c4172]">#</th>

              <th
                onClick={() => handleSort("datetime")}
                className="p-3 text-center cursor-pointer text-[#4c4172]"
              >
                Date
                <SortIcon
                  active={sortKey === "datetime"}
                  dir={sortDir}
                />
              </th>

              <th className="text-center text-[#4c4172]">
                Time
              </th>

              <th
                onClick={() => handleSort("name")}
                className="text-center cursor-pointer text-[#4c4172]"
              >
                Name
                <SortIcon
                  active={sortKey === "name"}
                  dir={sortDir}
                />
              </th>

              <th className="text-center text-[#4c4172]">
                Role
              </th>

              <th className="text-center text-[#4c4172]">
                Action
              </th>

              <th className="text-center text-[#4c4172]">
                IP
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedLogs.map((log, i) => {
              const { date, time } =
                formatDateTime(log.datetime);

              return (
                <tr
                  key={log.id}
                  className="
                    border-b
                    transition
                    hover:bg-[#f7f5ff]
                  "
                >
                  <td className="text-center text-gray-500">
                    {i + 1}
                  </td>

                  <td className="p-4 text-center text-gray-800">
                    {date}
                  </td>

                  <td className="text-center text-gray-800">
                    {time}
                  </td>

                  <td className="text-center font-medium text-gray-900">
                    {log.name}
                  </td>

                  <td className="text-center">
                    <RoleBadge role={log.role} />
                  </td>

                  <td className="text-center text-gray-800 truncate">
                    {log.action}
                  </td>

                  <td className="text-center text-gray-800">
                    {log.ip}
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

    </div>
  );
}
