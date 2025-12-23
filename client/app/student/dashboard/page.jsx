"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaBell, FaSearch, FaRegUserCircle, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./styles.css";

export default function StudentDashboard() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    router.push("/login");
  };

  // Don't render clock until mounted to avoid hydration mismatch
  if (!mounted || !currentTime) {
    return (
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo-section">
            <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-16 w-16" />
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">fLexiScribe</h1>
              <p className="text-xs font-normal">Your Note-Taking Assistant</p>
            </div>
          </div>

          <nav className="nav-menu">
            <div className="nav-item active">
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
            {/* Placeholder while loading */}
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
          <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-16 w-16" />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold">fLexiScribe</h1>
            <p className="text-xs font-normal">Your Note-Taking Assistant</p>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-item active">
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

        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

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
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <FaBell />
            </button>
            <div className="user-profile">
              <div className="user-avatar"><FaRegUserCircle /></div>
              <div className="user-info">
                <div className="user-name">Eru.</div>
                <div className="user-role">Student</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Grid Contents */}
        <div className="dashboard-grid">
            {/* Welcome Banner */}
            <div className="welcome-banner md:col-span-2 lg:col-span-8">
              <div className="grid grid-cols-2 grid-rows-2">
                <div className="col-start-1 row-start-1 items-start flex justify-center flex-col">
                  <span className="font-bold text-xl md:text-2xl lg:text-3xl">Welcome, Eru!</span>
                </div>
                <div className="col-start-1 row-start-2 items-start flex justify-center flex-col">
                  <span className="font-normal text-xs md:text-sm opacity-90">Ready for another day of learning?</span>
                </div>
                <div className="welcome-mascot row-span-2 col-start-2 row-start-1 items-end flex flex-col justify-end">
                  <img src="/img/fLexiScribe-mascot.png" alt="Mascot" className="h-auto w-full max-w-[100px] md:max-w-[150px]" />
                </div>
              </div>
            </div>

            {/* Ascendant Card */}
            <div className="card ascendant-card lg:col-span-4">
              <div className="grid grid-cols-3 grid-rows-3 items-center">
                  <div className="row-span-3 items-start flex flex-col justify-center">
                    <img src="/img/ascendant-badge.png" alt="Badge" className="h-auto w-full max-w-[80px] md:max-w-[100px]" />
                  </div>
                  <div className="col-span-2 font-semibold text-sm md:text-md items-start flex flex-col">Ascendant</div>
                  <div className="xp-bar col-span-2 col-start-2 row-start-2">
                    <div className="xp-fill" style={{width: '65%'}}></div>
                  </div>
                  <div className="col-span-2 col-start-2 row-start-3 font-normal text-sm md:text-md items-start flex flex-col">10543 XP</div>
              </div>
            </div>

            {/* Study Streak */}
            <div className="card study-streak lg:col-span-4">
                <h3>Study Streak</h3>
                <div className="streak-icon">🔥</div>
                <div className="streak-count">7 day streak</div>
            </div>

            {/* Jump Back In */}
            <div className="card jump-back lg:col-span-4 flex flex-col items-center text-center">
                <h3>Jump Back In</h3>
                <div style={{ width: 100, height: 100 }} className="md:w-[120px] md:h-[120px]">
                  <CircularProgressbar
                    value={90}
                    text={`90%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      textColor: 'var(--accent-secondary)',
                      pathColor: 'var(--accent-primary)',
                      trailColor: 'var(--brand-tertiary)',
                      textSize: '18px',
                      pathTransitionDuration: 0.5,
                    })}
                  />
                </div>
                <div className="progress-label">Periodic Interrupt...</div>
            </div>

            {/* Recently Added */}
            <div className="card recently-added lg:col-span-4">
                <h3>Recently Added</h3>
                <div className="document-preview">
                  <div className="doc-icon">📄</div>
                  <div className="doc-info">
                    <div className="doc-title">Data Acquisition, Controls, Sensors an...</div>
                  </div>
                </div>
                <button className="generate-quiz-btn">Generate Quiz</button>
            </div>

            {/* Leaderboard */}
            <div className="md:col-span-2 lg:col-span-8">
              <div className="card leaderboard-card">
                <h3>Leaderboard</h3>
                <div className="leaderboard-list">
                  <div className="leaderboard-item gold">
                    <div className="rank-circle">🥇</div>
                    <div className="player-info">
                      <div className="player-name">Eru</div>
                      <div className="player-xp">10.5K XP</div>
                    </div>
                  </div>
                  <div className="leaderboard-item silver">
                    <div className="rank-circle">🥈</div>
                    <div className="player-info">
                      <div className="player-name">Yuri</div>
                      <div className="player-xp">10.1K XP</div>
                    </div>
                  </div>
                  <div className="leaderboard-item bronze">
                    <div className="rank-circle">🥉</div>
                    <div className="player-info">
                      <div className="player-name">Bella</div>
                      <div className="player-xp">9k XP</div>
                    </div>
                  </div>
                </div>
                <div className="leaderboard-more">• • •</div>
              </div>
            </div>

            {/* Quote of the Day */}
            <div className="lg:col-span-4">
              <div className="card quote-card">
                <div className="quote-content">
                  <h3>Quote of the Day</h3>
                  <div className="quote-mascot">😸</div>
                  <p className="quote-text">
                    "The beautiful thing about learning is nobody can take it away from you."
                  </p>
                  <p className="quote-author">-Albert Einstein</p>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
