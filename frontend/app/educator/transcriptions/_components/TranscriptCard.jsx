"use client";

export default function TranscriptCard({
  transcript = {},   // 👈 fallback
  selected = false,
  onSelect,
}) {

  function handleClick() {
    if (onSelect) onSelect();
  }

  return (
    <div
      className={`
        bg-white
        rounded-[26px] sm:rounded-[28px]
        overflow-hidden
        transition-all duration-300 ease-out
        cursor-pointer
        ${
          selected
            ? "ring-2 ring-[#9d8adb] shadow-[0_12px_30px_rgba(157,138,219,0.28)]"
            : "shadow-[0_8px_22px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
        }
      `}
      onClick={handleClick}
    >
      {/* ================= HEADER ================= */}
      <div className="
        bg-gradient-to-br
        from-[#8f7bd1] to-[#7d6ac4]
        px-5 sm:px-6
        py-4 sm:py-5
        flex justify-between items-start
        gap-4
      ">
        <h3 className="
          text-white
          font-semibold
          text-base sm:text-[15px]
          leading-snug
          max-w-[75%]
          break-words
        ">
          {transcript.title || "No title"}
        </h3>

        <span className="
          text-[11px]
          text-white
          bg-white/20
          px-3 py-1.5
          rounded-full
          font-medium
          shrink-0
        ">
          Class {transcript.section || "-"}
        </span>
      </div>

      {/* ================= BODY ================= */}
      <div className="
        px-5 sm:px-6
        py-5
        text-[13px]
        space-y-4
      ">
        {[
          ["Category", transcript.category],
          ["Date", transcript.date],
          ["Duration", transcript.duration],
          ["Length", transcript.length],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between items-start gap-3"
          >
            <span className="font-semibold text-[#5f54a6]">
              {label}
            </span>
            <span className="text-[#6f63a8] text-right">
              {value || "-"}
            </span>
          </div>
        ))}

        {/* ACTION */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="
            mt-5
            w-full
            rounded-[16px]
            border border-[#c8c1f1]
            py-3.5
            text-[#6f63a8]
            font-medium
            hover:bg-[#edeaff]
          "
        >
          View Transcript
        </button>
      </div>
    </div>
  );
}
