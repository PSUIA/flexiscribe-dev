"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaBars, FaTimes, FaMoon, FaSun, FaFolderOpen } from "react-icons/fa";
import UserMenu from "@/components/student/UserMenu";
import NotificationMenu from "@/components/student/NotificationMenu";
import SearchBar from "@/components/student/SearchBar";
import { enrolledClasses, rawTranscripts } from "../dashboard/mockData";
import "../dashboard/styles.css";
import "./styles.css";

export default function ReviewersPage() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [classCode, setClassCode] = useState("");
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    // Set initial time on mount
    setMounted(true);
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Check for saved theme preference
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

  const handleAddClass = () => {
    if (classCode.trim()) {
      console.log("Adding class with code:", classCode);
      // TODO: Implement class addition logic
      setClassCode("");
    }
  };

  const handleClassClick = (classItem) => {
    router.push(`/student/reviewers/${classItem.code}`);
  };

  const handleTranscriptClick = (transcript) => {
    router.push(`/student/reviewers/transcripts/${transcript.code}`);
  };

  // Don't render clock until mounted to avoid hydration mismatch
  if (!mounted || !currentTime) {
    return (
      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="logo-section">
            <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-16 w-16" />
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">fLexiScribe</h1>
              <p className="text-xs font-normal">Your Note-Taking Assistant</p>
            </div>
          </div>
          <nav className="nav-menu">
            <div className="nav-item">
              <FaHome className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-item active">
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
            <div style={{ height: '200px' }}></div>
          </div>
        </aside>
        <main className="main-content">
          <div>Loading...</div>
        </main>
      </div>
    );
  }

  // Calculate clock hand angles
  const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourAngle = hours * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  // Format time and date
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
          <div className="nav-item" onClick={() => router.push('/student/dashboard')}>
            <FaHome className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-item active">
            <FaBook className="nav-icon" />
            <span>Reviewers</span>
          </div>
          <div className="nav-item" onClick={() => router.push('/student/quizzes')}>
            <FaGamepad className="nav-icon" />
            <span>Quizzes</span>
          </div>
          <div className="nav-item" onClick={() => router.push('/student/leaderboard')}>
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
            {/* Hour markers */}
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
            {/* Hour hand */}
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
            {/* Minute hand */}
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
            {/* Second hand */}
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
            {/* Center dot */}
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
            {/* Theme Toggle Button */}
            <button className="theme-toggle-btn" onClick={toggleDarkMode} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            <NotificationMenu />
            
            <UserMenu userName={studentProfile?.username || 'Student'} userRole={studentProfile?.role || 'Student'} userAvatar={studentProfile?.avatar} />
          </div>
        </header>
        
        {/* Reviewers Content */}
        <div className="reviewers-content">
          {/* Add Class Section */}
          <div className="add-class-section">
            <div className="class-input-container">
              <label className="class-input-label">Enter Class Code</label>
              <input
                type="text"
                className="class-input"
                placeholder="P5U1A"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddClass()}
              />
            </div>
            <button className="add-class-btn" onClick={handleAddClass}>
              Add Class
            </button>
          </div>

          {/* Enrolled Classes Section */}
          <div className="section-container">
            <h2 className="section-title">Enrolled Classes</h2>
            <div className="folders-grid">
              {enrolledClasses.map((classItem) => (
                <div
                  key={classItem.id}
                  className="folder-card"
                  onClick={() => handleClassClick(classItem)}
                >
                  <div className="folder-icon-wrapper">
                    <FaFolderOpen className="folder-icon" />
                  </div>
                  <div className="folder-label">{classItem.code}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Raw Transcripts Section */}
          <div className="section-container">
            <h2 className="section-title">Raw Transcripts</h2>
            <div className="folders-grid">
              {rawTranscripts.map((transcript) => (
                <div
                  key={transcript.id}
                  className="folder-card"
                  onClick={() => handleTranscriptClick(transcript)}
                >
                  <div className="folder-icon-wrapper">
                    <FaFolderOpen className="folder-icon" />
                  </div>
                  <div className="folder-label">{transcript.code}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
