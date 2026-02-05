"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaSearch, FaBars, FaTimes, FaMoon, FaSun, FaArrowLeft, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import UserMenu from "@/components/student/ui/UserMenu";
import NotificationMenu from "@/components/student/ui/NotificationMenu";
import SearchBar from "@/components/student/ui/SearchBar";
import "../../student/dashboard/styles.css";

export default function ChangePassword() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [studentProfile, setStudentProfile] = useState(null);
  
  // Password visibility states
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    verificationCode: ""
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1: Enter passwords, 2: Verify code
  const [generatedCode, setGeneratedCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }

    // Fetch student profile from database
    const fetchStudentProfile = async () => {
      try {
        const response = await fetch('/api/students/profile');
        if (response.ok) {
          const data = await response.json();
          setStudentProfile(data.profile);
        } else {
          console.error('Failed to fetch student profile');
        }
      } catch (error) {
        console.error('Error fetching student profile:', error);
      }
    };

    fetchStudentProfile();

    return () => clearInterval(timer);
  }, []);

  // Countdown timer for resend code
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = "New password must be different from current password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateVerificationCode = () => {
    // Generate a 6-digit verification code
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationCode = () => {
    const code = generateVerificationCode();
    setGeneratedCode(code);
    setCodeSent(true);
    setCountdown(60); // 60 seconds cooldown
    
    // In a real app, this would send the code via email/SMS
    // For demo purposes, we'll just show it in console
    console.log("Verification code:", code);
    alert(`Verification code sent! (Demo code: ${code})`);
  };

  const handleContinueToVerification = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      sendVerificationCode();
      setStep(2);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    
    if (!formData.verificationCode) {
      setErrors({ verificationCode: "Please enter the verification code" });
      return;
    }

    if (formData.verificationCode !== generatedCode) {
      setErrors({ verificationCode: "Invalid verification code" });
      return;
    }

    // Code is valid, proceed with password change
    // TODO: Implement password change API call
    alert("Password changed successfully!");
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      verificationCode: ""
    });
    setStep(1);
    setGeneratedCode("");
    setCodeSent(false);
    router.push("/student/dashboard");
  };

  const handleResendCode = () => {
    if (countdown === 0) {
      sendVerificationCode();
    }
  };

  const handleBackToPasswordForm = () => {
    setStep(1);
    setFormData(prev => ({ ...prev, verificationCode: "" }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step === 1) {
      handleContinueToVerification(e);
    } else {
      handleVerifyCode(e);
    }
  };

  const handleBack = () => {
    router.push("/student/dashboard");
  };

  if (!mounted || !currentTime) {
    return <div className="dashboard-container">Loading...</div>;
  }

  const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourAngle = hours * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  const timeString = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const dateString = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="dashboard-container">
      {/* Mobile Menu Toggle Button */}
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="logo-section">
          <div className="logo-content">
            <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-16 w-16" />
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">fLexiScribe</h1>
              <p className="text-xs font-normal">Your Note-Taking Assistant</p>
            </div>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-item" onClick={() => router.push("/student/dashboard")}>
            <FaHome className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-item">
            <FaBook className="nav-icon" />
            <span>Reviewers</span>
          </div>
          <div className="nav-item">
            <FaGamepad className="nav-icon" />
            <span>Quizzes</span>
          </div>
          <div className="nav-item">
            <FaTrophy className="nav-icon" />
            <span>Leaderboard</span>
          </div>
        </nav>

        <div className="clock-widget">
          <svg className="clock-svg" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
              (angle) => (
                <line
                  key={angle}
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="15"
                  stroke="white"
                  strokeWidth="2"
                  transform={`rotate(${angle} 50 50)`}
                />
              )
            )}
            <line
              className="hour-hand"
              x1="50"
              y1="50"
              x2="50"
              y2="30"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${hourAngle} 50 50)`}
            />
            <line
              className="minute-hand"
              x1="50"
              y1="50"
              x2="50"
              y2="20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${minuteAngle} 50 50)`}
            />
            <line
              className="second-hand"
              x1="50"
              y1="50"
              x2="50"
              y2="15"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              transform={`rotate(${secondAngle} 50 50)`}
            />
            <circle cx="50" cy="50" r="3" fill="white" />
          </svg>
          <div className="clock-time">{timeString}</div>
          <div className="clock-date">{dateString}</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content flex flex-col justify-between min-h-screen">
        {/* Header */}
        <header className="dashboard-header">
          <SearchBar />
          <div className="header-actions">
            <button className="theme-toggle-btn" onClick={toggleDarkMode} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            <NotificationMenu />
            
            <UserMenu userName={studentProfile?.username || 'Student'} userRole={studentProfile?.role || 'Student'} userAvatar={studentProfile?.avatar} />
          </div>
        </header>
        
        {/* Change Password Content */}
        <div className="profile-content">
          <div className="profile-header">
            <button className="back-btn" onClick={handleBack}>
              <FaArrowLeft /> Back to Dashboard
            </button>
            <h1 className="profile-title">Change Password</h1>
          </div>

          <div className="password-card">
            <div className="password-icon-container">
              <FaLock className="password-icon" />
            </div>
            
            <form onSubmit={handleSubmit} className="password-form">
              {step === 1 ? (
                <>
                  {/* Step 1: Password Form */}
                  {/* Current Password */}
                  <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <div className="password-input-container">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        className={errors.currentPassword ? "error" : ""}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.currentPassword && (
                      <span className="error-message">{errors.currentPassword}</span>
                    )}
                  </div>

                  {/* New Password */}
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <div className="password-input-container">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        className={errors.newPassword ? "error" : ""}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.newPassword && (
                      <span className="error-message">{errors.newPassword}</span>
                    )}
                    <span className="hint-text">Password must be at least 8 characters long</span>
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <div className="password-input-container">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={errors.confirmPassword ? "error" : ""}
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <span className="error-message">{errors.confirmPassword}</span>
                    )}
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="submit-btn">
                      Continue to Verification
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Step 2: Verification Code */}
                  <div className="verification-step">
                    <h3 className="verification-title">Verify Your Identity</h3>
                    <p className="verification-text">
                      We've sent a 6-digit verification code to your email address.
                      Please enter it below to confirm the password change.
                    </p>

                    <div className="form-group">
                      <label htmlFor="verificationCode">Verification Code</label>
                      <input
                        type="text"
                        id="verificationCode"
                        name="verificationCode"
                        value={formData.verificationCode}
                        onChange={handleInputChange}
                        className={errors.verificationCode ? "error" : ""}
                        placeholder="Enter 6-digit code"
                        maxLength="6"
                      />
                      {errors.verificationCode && (
                        <span className="error-message">{errors.verificationCode}</span>
                      )}
                    </div>

                    <div className="resend-code-section">
                      <button
                        type="button"
                        className="resend-code-btn"
                        onClick={handleResendCode}
                        disabled={countdown > 0}
                      >
                        {countdown > 0 
                          ? `Resend code in ${countdown}s` 
                          : "Resend code"}
                      </button>
                    </div>

                    <div className="form-actions">
                      <button 
                        type="button" 
                        className="back-to-form-btn"
                        onClick={handleBackToPasswordForm}
                      >
                        Back
                      </button>
                      <button type="submit" className="submit-btn">
                        Verify & Change Password
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
