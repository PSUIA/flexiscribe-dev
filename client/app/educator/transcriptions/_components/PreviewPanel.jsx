"use client";

import { useRef, useState } from "react";

export default function PreviewPanel({ transcript }) {
  const pdfRef = useRef(null);
  const [zoom, setZoom] = useState(1);

  const download = async () => {
    if (!pdfRef.current || !transcript) return;

    const html2pdf = (await import("html2pdf.js")).default;

    html2pdf()
      .set({
        margin: 12,
        filename: `${transcript.title}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4" },
      })
      .from(pdfRef.current)
      .save();
  };

  return (
    <div className="
      h-full
      rounded-[28px] sm:rounded-[42px]
      bg-gradient-to-br from-[#9d8adb] to-[#7d6ac4]
      p-4 sm:p-6
      flex flex-col
    ">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h2 className="text-white text-sm font-semibold">
          Transcribed Preview
        </h2>

        {transcript && (
          <button
            onClick={download}
            className="
              self-start sm:self-auto
              text-white text-xs
              bg-white/20
              px-4 py-1.5
              rounded-full
              hover:bg-white/30 transition
            "
          >
            Download PDF
          </button>
        )}
      </div>

      {/* ================= FRAME ================= */}
      <div className="
        relative
        flex-1
        rounded-[20px] sm:rounded-[30px]
        bg-[#2f2b47]
        p-3 sm:p-6
        overflow-hidden
      ">

        {!transcript && (
          <div className="h-full flex items-center justify-center">
            <p className="text-white/70 text-sm">
              Select a transcript to preview
            </p>
          </div>
        )}

        {transcript && (
          <>
            {/* ================= SCROLL AREA ================= */}
            <div className="h-full overflow-auto flex justify-center">

              {/* SCALE WRAPPER */}
              <div
                className="origin-top transition-transform duration-300 w-full sm:w-auto"
                style={{ transform: `scale(${zoom})` }}
              >

                {/* ================= DOCUMENT ================= */}
                <div
                  ref={pdfRef}
                  className="
                    bg-white
                    w-full sm:w-[560px]
                    min-h-[520px] sm:min-h-[792px]
                    border border-black
                    shadow-[0_14px_40px_rgba(0,0,0,0.35)]
                  "
                >

                  {/* TOP BAR */}
                  <div className="
                    grid
                    grid-cols-1 sm:grid-cols-[180px_1fr]
                    bg-[#9d8adb]
                    text-white
                    font-semibold
                    border-b border-black
                    text-xs
                  ">
                    <div className="px-3 py-2 text-center sm:border-r border-black">
                      {transcript.date}
                    </div>
                    <div className="px-3 py-2 text-center">
                      {transcript.title}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="
                    grid
                    grid-cols-1 sm:grid-cols-[180px_1fr]
                    min-h-[300px]
                  ">

                    {/* CUE */}
                    <div className="p-4 sm:p-5 sm:border-r border-black">
                      <p className="text-xs font-semibold uppercase mb-3 text-[#6b5fcf]">
                        Cue
                      </p>

                      <ul className="list-disc list-inside space-y-2 text-[#6b5fcf] text-xs">
                        {transcript.cue.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    {/* NOTES */}
                    <div className="p-4 sm:p-5 text-[#6b5fcf] leading-relaxed text-xs">
                      <p className="font-semibold uppercase mb-3">
                        Notes
                      </p>
                      {transcript.notes}
                    </div>
                  </div>

                  {/* SUMMARY */}
                  <div className="border-t border-black p-4 sm:p-6 text-center text-xs">
                    <p className="font-semibold uppercase mb-2 text-[#6b5fcf]">
                      Summary
                    </p>
                    <p className="text-[#6b5fcf]">
                      {transcript.summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= ZOOM ================= */}
            <div className="
              absolute
              bottom-3 sm:bottom-4
              left-1/2 -translate-x-1/2
              flex items-center gap-5
              bg-[#3a355c]
              text-white
              px-4 py-2
              rounded-full
              text-xs
            ">
              <button
                onClick={() =>
                  setZoom((z) => Math.max(0.8, z - 0.1))
                }
              >
                −
              </button>

              <span>
                {Math.round(zoom * 100)}%
              </span>

              <button
                onClick={() =>
                  setZoom((z) => Math.min(1.4, z + 0.1))
                }
              >
                +
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
