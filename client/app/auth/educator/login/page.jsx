"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { FiArrowLeft } from "react-icons/fi";

export default function EducatorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPrototypeMode, setIsPrototypeMode] = useState(false);

  useEffect(() => {
    const redirect = searchParams.get('redirect');
    setIsPrototypeMode(redirect === 'prototype');
  }, [searchParams]);

  // Password Strength Checker
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: "", color: "" };
    if (pwd.length < 6) return { label: "Weak", color: "bg-red-400" };
    if (pwd.length < 10) return { label: "Medium", color: "bg-yellow-300" };
    return { label: "Strong", color: "bg-green-400" };
  };

  const strength = getPasswordStrength(password);

  const handleBack = () => {
    if (isPrototypeMode) {
      router.push("/");
    } else {
      router.push("/auth/role-selection");
    }
  };

  // Handle form submission
  const [success, setSuccess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (email === "educator@example.com" && password === "educatoracc0123") {
      if (isPrototypeMode) {
        router.push("/prototype");
      } else {
        router.push("/educator/dashboard");
      }
      setError("");
      setSuccess("Login successful ✅");
    } else {
      setError("Invalid email or password ❌");
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <button className="btn-back fixed top-4 right-4" onClick={handleBack}>
        <FiArrowLeft size={18} />
        Back
      </button>
      <div className="neu-card w-full max-w-md mx-auto justify-center">
        {/* Title */}
        <div className="flex flex-col items-center mb-6 mt-2">
          <span className="font-extrabold text-4xl text-center mb-2">
            {isPrototypeMode ? "Prototype Login" : "Educator Log In"}
          </span>
          <span className="text-center text-md mb-2">
            {isPrototypeMode ? "Sign in to access the recording prototype" : "Access your fLexiScribe educator portal"}
          </span>
        </div>
        {/* Success message */}
        {success && <p className="success-msg mb-4 text-center">{success}</p>}

        {/* Error message */}
        {error && <p className="error-msg mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="neu-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="educator@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Password</label>
              <a
                href="/auth/forgot-password"
                className="text-sm font-semibold hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            {/* Password input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="neu-input pr-12"
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
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
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
          <button type="submit" className="neu-btn">
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-10 text-center text-sm">
          No account?{" "}
          <a
            href="/auth/educator/register"
            className="font-semibold hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}
