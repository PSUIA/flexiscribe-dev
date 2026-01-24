export function generateTimeSlots(startHour, endHour) {
  const slots = [];

  for (let hour = startHour; hour < endHour; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const start = new Date(0, 0, 0, hour, min);
      const end = new Date(0, 0, 0, hour, min + 30);

      slots.push(
        `${start.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })} – ${end.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })}`
      );
    }
  }

  return slots;
}
