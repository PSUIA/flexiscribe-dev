"use client";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { AcademicCapIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function RoleSelection() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="container">
      <button className="btn-back fixed top-4 right-4" onClick={handleBack}>
        <FiArrowLeft size={18} />
        Back
      </button>
      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="flex flex-col items-center mb-12">
          <span className="font-extrabold text-5xl text-center mb-2">
            Welcome to fLexiScribe
          </span>
          <span className="text-center text-xl">
            Choose your role to continue
          </span>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Card */}
          <div className="neu-card hover:scale-105 transition-transform duration-200">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-accent-primary rounded-full p-6">
                <AcademicCapIcon className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Student</h2>
              <p className="text-lg opacity-90">
                Access your lectures, notes, quizzes and track your learning progress
              </p>
              <div className="flex flex-col gap-3 w-full pt-4">
                <button
                  onClick={() => router.push("/auth/student/login")}
                  className="neu-btn"
                >
                  Log In as Student
                </button>
                <button
                  onClick={() => router.push("/auth/student/register")}
                  className="neu-btn bg-brand-secondary hover:bg-accent-primary"
                >
                  Sign Up as Student
                </button>
              </div>
            </div>
          </div>

          {/* Educator Card */}
          <div className="neu-card hover:scale-105 transition-transform duration-200">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-accent-primary rounded-full p-6">
                <UserGroupIcon className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Educator</h2>
              <p className="text-lg opacity-90">
                Create courses, manage content and monitor student performance
              </p>
              <div className="flex flex-col gap-3 w-full pt-4">
                <button
                  onClick={() => router.push("/auth/educator/login")}
                  className="neu-btn"
                >
                  Log In as Educator
                </button>
                <button
                  onClick={() => router.push("/auth/educator/register")}
                  className="neu-btn bg-brand-secondary hover:bg-accent-primary"
                >
                  Sign Up as Educator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
