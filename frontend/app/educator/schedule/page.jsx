"use client";

import { useEffect, useState } from "react";
import ScheduleGrid from "./components/ScheduleGrid";
import { days } from "@/lib/mock/days";
import { notifications } from "@/lib/mock/notifications";
import { generateTimeSlots } from "@/lib/timeSlots";

export default function SchedulePage() {
  const timeSlots = generateTimeSlots(7, 22);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const res = await fetch("/api/educator/schedule");
        if (res.ok) {
          const data = await res.json();
          setClasses(data.schedule);
        }
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
      }
    }
    fetchSchedule();
  }, []);

  return (
    <div className="p-8">
      <ScheduleGrid
        classes={classes}
        days={days}
        notifications={notifications}
        timeSlots={timeSlots}
      />
    </div>
  );
}
