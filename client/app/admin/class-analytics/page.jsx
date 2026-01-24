"use client";

import {
  Layers,
  CheckSquare,
  FileText,
  Users,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from "lucide-react";

import RawTranscriptTable from "@/components/admin/tables/RawTranscriptTable";
import { classAnalyticsData } from "@/lib/mock/classAnalytics";

export default function ClassAnalyticsPage() {
  const totals = classAnalyticsData.reduce(
    (acc, item) => {
      acc.flashcards += item.flashcards;
      acc.mcqs += item.quizzes;
      acc.fitb += item.fitb;
      return acc;
    },
    { flashcards: 0, mcqs: 0, fitb: 0 }
  );

  // Mock weekly deltas
  const deltas = {
    flashcards: +12,
    mcqs: -4,
    fitb: +6,
  };

  const exportSummary = () => {
    const content = `
CLASS ANALYTICS SUMMARY

Generated Content
- Flashcards: ${totals.flashcards}
- MCQs: ${totals.mcqs}
- FITB: ${totals.fitb}

Class Overview
- Students: 53
- Avg Score: 91%
- Engagement: High
- Avg Session: 20 min
    `.trim();

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "class_analytics_summary.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#f4f3fb] px-4 sm:px-6 py-6 sm:py-8 space-y-14">

      {/* ================= TRANSCRIPTS ================= */}
      <section className="space-y-4">
        <SectionTitle>Transcripts</SectionTitle>
        <RawTranscriptTable />
      </section>

      {/* ================= GENERATED CONTENT ================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <SectionTitle>Generated Content</SectionTitle>

          <button
            onClick={exportSummary}
            className="
              flex items-center gap-2
              px-4 py-2
              text-xs
              rounded-lg
              border
              bg-white
              text-[#4c4172]
              hover:bg-[#edeaf7]
              transition
            "
          >
            <Download size={14} />
            Export Summary
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 -mt-2">
          <StatCard
            icon={Layers}
            label="Flashcards"
            value={totals.flashcards}
            delta={deltas.flashcards}
          />
          <StatCard
            icon={CheckSquare}
            label="MCQs"
            value={totals.mcqs}
            delta={deltas.mcqs}
          />
          <StatCard
            icon={FileText}
            label="FITB"
            value={totals.fitb}
            delta={deltas.fitb}
          />
        </div>
      </section>

      {/* ================= CLASS OVERVIEW ================= */}
      <section className="space-y-5">
        <SectionTitle>Class Overview</SectionTitle>

        <div
          className="
            relative
            rounded-3xl
            bg-gradient-to-br
            from-[#8f7fd1]
            to-[#4c4172]
            p-6 sm:p-8
            shadow-lg
            overflow-hidden
          "
        >
          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_65%)] opacity-20" />

          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-7 text-white">
            <OverviewMetric icon={Users} label="Students" value="53" />
            <OverviewMetric icon={CheckSquare} label="Avg Score" value="91%" />
            <OverviewMetric
              icon={Activity}
              label="Engagement"
              value="High"
              highlight
            />
            <OverviewMetric icon={Layers} label="Reviewers" value="53" />
          </div>

          <div
            className="
              relative
              mt-8
              pt-4
              border-t border-white/20
              flex flex-col sm:flex-row
              justify-between
              text-xs
              text-white/80
            "
          >
            <span>
              Quizzes completed: <b className="text-white">53</b>
            </span>
            <span>
              Avg. session: <b className="text-white">20 min</b>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SectionTitle({ children }) {
  return (
    <h2
      className="
        text-xs sm:text-sm
        font-semibold
        tracking-widest
        uppercase
        text-[#4c4172]
        border-l-4
        border-[#9d8adb]
        pl-3
      "
    >
      {children}
    </h2>
  );
}

function StatCard({ icon: Icon, label, value, delta }) {
  const positive = delta > 0;
  const negative = delta < 0;

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-[#e3def4]
        px-5 py-4
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#edeaf7] flex items-center justify-center text-[#6f66b8]">
            <Icon size={18} />
          </div>

          <div>
            <div className="text-2xl font-semibold text-[#3f3764]">
              {value}
            </div>
            <div className="text-xs text-[#6b6396]">{label}</div>
          </div>
        </div>

        <DeltaBadge positive={positive} negative={negative}>
          {positive && <ArrowUpRight size={14} />}
          {negative && <ArrowDownRight size={14} />}
          {!positive && !negative && "—"}
          {delta !== 0 && `${Math.abs(delta)}%`}
        </DeltaBadge>
      </div>

      <div className="mt-2 text-[11px] text-[#8a82b3]">
        vs last week
      </div>
    </div>
  );
}

function DeltaBadge({ children, positive, negative }) {
  return (
    <span
      className={`
        text-xs
        px-2 py-1
        rounded-full
        flex items-center gap-1
        ${
          positive
            ? "bg-green-100 text-green-700"
            : negative
            ? "bg-red-100 text-red-700"
            : "bg-gray-100 text-gray-500"
        }
      `}
    >
      {children}
    </span>
  );
}

function OverviewMetric({ icon: Icon, label, value, highlight }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-white/80">
        <Icon size={14} />
        {label}
      </div>

      <div
        className={`text-2xl font-semibold ${
          highlight ? "text-[#ffe9a7]" : ""
        }`}
      >
        {value}
      </div>

      {highlight && (
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/20">
          Active
        </span>
      )}
    </div>
  );
}
