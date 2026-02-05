export default function ClassBlock({ title, section, room, color }) {
  return (
    <div
      className={`h-full w-full rounded-lg px-3 py-2 text-white text-xs font-semibold flex flex-col justify-center text-center ${color}`}
    >
      <div>{title}</div>
      <div className="opacity-90">{section}</div>
      <div className="opacity-80">{room}</div>
    </div>
  );
}
