"use client";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="container min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="neu-navbar">
        {/* Logo */}
        <div className="neu-navbar-logo">
          <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-15 w-15" />
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold">fLexiScribe</span>
            <span className="text-xs font-normal">Your Note-Taking Assistant</span>
          </div>
        </div>

        {/* Actions */}
        <div className="neu-navbar-actions">
          <button className="btn-login text-md" onClick={() => router.push("/auth/educator/login?redirect=prototype")}>
            Prototype
          </button>
          <button className="btn-login text-md" onClick={() => router.push("/auth/role-selection")}>
            Student & Educator Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold mt-6 mb-6">From Speech to Study-Ready Notes</h1>
          <p className="text-lg mb-4 leading-relaxed">
            Redefining how students capture, organize, and review lectures.<br />
            With real-time speech-to-text transcription and an intelligent auto-reviewer generator,<br /> 
            fLexiScribe ensures no detail is missed and every concept is easier to revisit.
          </p>
          <p className="font-bold text-xl mb-12">
            Listen better. Write less. Learn more.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 items-center gap-8 mb-14">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-red-400 rounded-xl p-4 shadow-lg">
                <span className="text-white text-3xl">📃</span>
              </div>
              <span className="text-md font-semibold">Get Auto-Generated PDF Reviewer</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-yellow-200 rounded-xl p-4 shadow-lg">
                <span className="text-3xl">💡</span>
              </div>
              <span className="text-md font-semibold">Generate Interactive Quiz</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-cyan-200 rounded-xl p-4 shadow-lg">
                <span className="text-3xl">🏆</span>
              </div>
              <span className="text-md font-semibold">Earn XP and Rank UP!</span>
            </div>
          </div>

          {/* Get Started Button */}
          <button className="btn-get-started" onClick={() => router.push("/auth/role-selection")}>
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
