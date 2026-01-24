import ScheduleGrid from "./_components/ScheduleGrid";

import { classes } from "@/lib/mock/classes";
import { days } from "@/lib/mock/days";
import { notifications } from "@/lib/mock/notifications";
import { generateTimeSlots } from "@/lib/timeSlots";

export default function SchedulePage() {
  const timeSlots = generateTimeSlots(7, 22);

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
