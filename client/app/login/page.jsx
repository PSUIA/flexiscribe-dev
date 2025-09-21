"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Password Strength Checker
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: "", color: "" };
    if (pwd.length < 6) return { label: "Weak", color: "bg-red-400" };
    if (pwd.length < 10) return { label: "Medium", color: "bg-yellow-300" };
    return { label: "Strong", color: "bg-[var(--success-green)]" };
  };

  const strength = getPasswordStrength(password);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (email === "testUser@gmail.com" && password === "testUser123") {
      router.push("/login/student_dashboard");
      alert("Login successful ✅");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-purple-900/70 bg-cover bg-center px-6 py-12"
      style={{ backgroundImage: "url('img/bg-img.png')" }}
    >
      <div className="w-full max-w-md p-8 mx-auto justify-center items-center bg-white/95 rounded-3xl border-4 border-[var(--lavender-border)] shadow-xl backdrop-blur-md">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-[var(--brand-purple)] mb-8">
          Log In
        </h1>

        {error && (
          <p className="text-red-500 text-sm mb-6 text-center">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[var(--brand-purple)] mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-[var(--brand-purple)] px-4 py-3 text-sm font-[var(--brand-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple-light)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.name@your.email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[var(--brand-purple)] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-xl border border-[var(--brand-purple)] px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-purple-light)]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
                {/* Eye toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeIcon className="h-5 w-5 text-[var(--brand-purple)]" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 text-[var(--brand-purple)]" />
                  )}
                </button>
            </div>

            {/* Password strength */}
            {strength.label && (
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">{strength.label}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 rounded-full ${strength.color}`}
                    style={{
                      width:
                        strength.label === "Weak"
                          ? "33%"
                          : strength.label === "Medium"
                          ? "66%"
                          : "100%",
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-[var(--brand-purple)] hover:bg-[var(--brand-purple-dark)] transition shadow-md"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-[var(--brand-purple)]">
          No account?{" "}
          <a
            href="/signup"
            className="font-semibold text-[var(--brand-purple)] hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}
