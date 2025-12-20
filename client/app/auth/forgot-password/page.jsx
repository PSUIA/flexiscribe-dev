"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { FiArrowLeft } from "react-icons/fi";

export default function ForgotPassword() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: email, 2: code, 3: new password
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleBack = () => {
    router.push("/auth/student/login");
  };

  // Password Strength Checker
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: "", color: "" };
    if (pwd.length < 6) return { label: "Weak", color: "bg-red-400" };
    if (pwd.length < 10) return { label: "Medium", color: "bg-yellow-300" };
    return { label: "Strong", color: "bg-green-400" };
  };

  const strength = getPasswordStrength(newPassword);

  // Step 1: Send verification code
  const handleSendCode = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Generate a 4-digit code
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);

    // Simulate sending email (in production, this would call an API)
    console.log(`Verification code sent to ${email}: ${code}`);
    
    setSuccess(`Verification code sent to ${email}`);
    setTimeout(() => {
      setStep(2);
      setSuccess("");
    }, 1500);
  };

  // Step 2: Verify code
  const handleVerifyCode = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!code) {
      setError("Please enter the verification code");
      return;
    }

    if (code !== generatedCode) {
      setError("Invalid verification code");
      return;
    }

    setSuccess("Code verified successfully!");
    setTimeout(() => {
      setStep(3);
      setSuccess("");
    }, 1000);
  };

  // Step 3: Reset password
  const handleResetPassword = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // In production, this would call an API to update the password
    setSuccess("Password reset successful! Redirecting...");
    setTimeout(() => {
      router.push("/auth/student/login");
    }, 2000);
  };

  const handleResendCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);
    console.log(`New verification code sent to ${email}: ${code}`);
    setSuccess("New code sent to your email");
    setTimeout(() => setSuccess(""), 3000);
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
            {step === 1 && "Forgot Password"}
            {step === 2 && "Verify Code"}
            {step === 3 && "Reset Password"}
          </span>
          <span className="text-center text-md mb-2">
            {step === 1 && "Enter your email to receive a verification code"}
            {step === 2 && "Enter the 4-digit code sent to your email"}
            {step === 3 && "Create a new password for your account"}
          </span>
        </div>

        {/* Success message */}
        {success && <p className="success-msg mb-4 text-center">{success}</p>}

        {/* Error message */}
        {error && <p className="error-msg mb-4 text-center">{error}</p>}

        {/* Step 1: Email Input */}
        {step === 1 && (
          <form onSubmit={handleSendCode} className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="neu-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
              />
            </div>
            <button type="submit" className="neu-btn">
              Send Verification Code
            </button>
          </form>
        )}

        {/* Step 2: Code Verification */}
        {step === 2 && (
          <form onSubmit={handleVerifyCode} className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                Verification Code
              </label>
              <input
                type="text"
                className="neu-input text-center text-2xl tracking-widest"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="0000"
                maxLength={4}
              />
              <p className="text-sm text-center mt-3">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="font-semibold hover:underline"
                >
                  Resend
                </button>
              </p>
            </div>
            <button type="submit" className="neu-btn">
              Verify Code
            </button>
          </form>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-8">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="neu-input pr-12"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                />
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="neu-input pr-12"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="neu-btn">
              Reset Password
            </button>
          </form>
        )}

        {/* Footer */}
        <p className="mt-10 text-center text-sm">
          Remember your password?{" "}
          <a href="/auth/student/login" className="font-semibold hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}
