"use client";

import { useState } from "react";
import UsersFilterBar from "@/components/admin/modals/UsersFilterBar";
import UsersTable from "@/components/admin/modals/UsersTable";
import AddUserModal from "@/components/admin/modals/AddUserModal";

export default function ManageAccountsPage() {
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("All");
  const [addOpen, setAddOpen] = useState(false);

  return (
    <div className="p-3 space-y-5">
      <UsersFilterBar
        role={role}
        status={status}
        date={date}
        onRoleChange={setRole}
        onStatusChange={setStatus}
        onDateChange={setDate}
        onAddUser={() => setAddOpen(true)}
      />

      <UsersTable
        roleFilter={role}
        statusFilter={status}
        dateFilter={date}
      />

      {addOpen && (
        <AddUserModal
          onClose={() => setAddOpen(false)}
        />
      )}
    </div>
  );
}
