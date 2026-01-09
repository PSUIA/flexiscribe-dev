"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaSearch, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UserMenu from "./UserMenu";
import NotificationMenu from "./NotificationMenu";
import SearchBar from "./SearchBar";
import { mockUserProfile, mockDashboardStats, mockDailyMessages, mockRankSystem, mockQuotes, mockReviewers, mockLeaderboard, mockStudyProgress } from "./mockData";
import "./styles.css";

export default function StudentDashboard() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Calculate XP progress for rank bar
  const currentRank = mockRankSystem.currentRank;
  const xpProgress = ((currentRank.xp - currentRank.xpMin) / (currentRank.xpMax - currentRank.xpMin)) * 100;
  
  // Get time-based greeting
  const getGreeting = () => {
    if (!currentTime) return "Welcome";
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    if (hour >= 18 && hour < 22) return "Good Evening";
    return "Good Night";
  };

  // Get daily rotating message (changes every day)
  const getDailyMessage = () => {
    if (!currentTime) return mockDailyMessages[0];
    // Get day of year (0-365) and use modulo to cycle through 7 messages
    const startOfYear = new Date(currentTime.getFullYear(), 0, 0);
    const diff = currentTime - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const messageIndex = dayOfYear % 7;
    return mockDailyMessages[messageIndex];
  };

  // Get daily rotating quote (changes every day, cycles through 14 quotes)
  const getDailyQuote = () => {
    if (!currentTime) return mockQuotes[0];
    // Get day of year (0-365) and use modulo to cycle through 14 quotes
    const startOfYear = new Date(currentTime.getFullYear(), 0, 0);
    const diff = currentTime - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const quoteIndex = dayOfYear % 14; // 14 quotes for 2-week rotation
    return mockQuotes[quoteIndex];
  };

  // Get most recently added reviewer
  const getRecentReviewer = () => {
    // Sort reviewers by uploadDate in descending order and return the most recent
    const sortedReviewers = [...mockReviewers].sort((a, b) => 
      new Date(b.uploadDate) - new Date(a.uploadDate)
    );
    return sortedReviewers[0];
  };

  // Handle Generate Quiz button click
  const handleGenerateQuiz = () => {
    // Redirect to quiz page
    router.push(`/student/quizzes`);
  };

  // Get top 3 students from leaderboard
  const getTopLeaderboard = () => {
    return mockLeaderboard.slice(0, 3);
  };

  // Handle View Full Leaderboard
  const handleViewLeaderboard = () => {
    router.push('/student/leaderboard');
  };

  // Format XP for display (e.g., 15420 -> 15.4K)
  const formatXP = (xp) => {
    if (xp >= 1000) {
      return `${(xp / 1000).toFixed(1)}K`;
    }
    return xp.toString();
  };

  // Get most recent study progress
  const getRecentStudyProgress = () => {
    // Sort by lastStudied date and return the most recent
    const sortedProgress = [...mockStudyProgress].sort((a, b) => 
      new Date(b.lastStudied + ' ' + b.lastStudiedTime) - new Date(a.lastStudied + ' ' + a.lastStudiedTime)
    );
    return sortedProgress[0];
  };

  // Handle Jump Back In click
  const handleJumpBackIn = () => {
    router.push('/student/reviewers');
  };

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
          <div className="logo-content">
            <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-16 w-16" />
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold">fLexiScribe</h1>
              <p className="text-xs font-normal">Your Note-Taking Assistant</p>
            </div>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-item active" onClick={() => router.push('/student/dashboard')}>
            <FaHome className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-item" onClick={() => router.push('/student/reviewers')}>
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
            
            <UserMenu userName={mockUserProfile.username} userRole={mockUserProfile.role} />
          </div>
        </header>
        
        {/* Grid Contents */}
        <div className="dashboard-grid">
            {/* Welcome Banner */}
            <div className="welcome-banner md:col-span-2 lg:col-span-8">
              <div className="grid grid-cols-2 grid-rows-2">
                <div className="col-start-1 row-start-1 items-start flex justify-center flex-col">
                  <span className="font-bold text-xl md:text-2xl lg:text-3xl">{getGreeting()}, {mockUserProfile.username}!</span>
                </div>
                <div className="col-start-1 row-start-2 items-start flex justify-center flex-col">
                  <span className="font-normal text-xs md:text-sm opacity-90">{getDailyMessage()}</span>
                </div>
                <div className="welcome-mascot col-start-2 row-span-2 flex items-center justify-center">
                  😻{/* <img src="/img/fLexiScribe-mascot.png" alt="Mascot" className="h-auto w-full max-w-[100px] md:max-w-[150px]" /> */}
                </div>
              </div>
            </div>

            {/* Rank Card */}
            <div className="card rank-card lg:col-span-4" onClick={() => router.push("/student/rank")} style={{ cursor: 'pointer' }}>
              <div className="rank-card-content">
                <div className="rank-badge-container">
                  <img src="/img/ascendant.png" alt="Badge" className="rank-badge-img" />
                </div>
                <div className="rank-info">
                  <div className="rank-name">{mockRankSystem.currentRank.name}</div>
                  <div className="rank-tier">Tier {mockRankSystem.currentRank.tier}</div>
                  <div className="xp-bar">
                    <div className="xp-fill" style={{width: `${Math.min(xpProgress, 100)}%`}}></div>
                  </div>
                  <div className="rank-xp">{mockRankSystem.currentRank.xp.toLocaleString()} XP</div>
                </div>
              </div>
            </div>

            {/* Study Streak */}
            <div className={`card study-streak lg:col-span-4 ${mockDashboardStats.streakActive ? 'streak-active' : 'streak-inactive'}`}>
                <div className="card-header-compact">
                  <h3>Study Streak</h3>
                </div>
                <div className="streak-content">
                  <div className="streak-icon-container">
                    <div className="streak-icon">{mockDashboardStats.streakIcon}</div>
                    {mockDashboardStats.streakActive && (
                      <>
                        <div className="fire-particle fire-particle-1"></div>
                        <div className="fire-particle fire-particle-2"></div>
                        <div className="fire-particle fire-particle-3"></div>
                        <div className="fire-glow"></div>
                      </>
                    )}
                  </div>
                  <div className="streak-count">{mockDashboardStats.studyStreak} days</div>
                  {mockDashboardStats.streakActive ? (
                    <div className="streak-status active">✓ Active</div>
                  ) : (
                    <div className="streak-status inactive">Keep going!</div>
                  )}
                </div>
            </div>

            {/* Jump Back In */}
            <div className="card jump-back lg:col-span-4" onClick={handleJumpBackIn} style={{ cursor: 'pointer' }}>
                <div className="card-header-compact">
                  <h3>Jump Back In</h3>
                </div>
                <div className="jump-back-content">
                  <div className="progress-circle">
                    <CircularProgressbar
                      value={getRecentStudyProgress().progress}
                      text={`${getRecentStudyProgress().progress}%`}
                      strokeWidth={10}
                      styles={buildStyles({
                        textColor: 'var(--accent-secondary)',
                        pathColor: 'var(--accent-primary)',
                        trailColor: 'var(--brand-tertiary)',
                        textSize: '22px',
                        pathTransitionDuration: 0.5,
                      })}
                    />
                  </div>
                  <div className="progress-label">{getRecentStudyProgress().reviewerTitle}</div>
                  <div className="progress-section">{getRecentStudyProgress().currentSection}</div>
                </div>
            </div>

            {/* Recently Added */}
            <div className="card recently-added lg:col-span-4">
                <div className="card-header-compact">
                  <h3>Recently Added</h3>
                </div>
                <div className="recently-added-content">
                  <div className="document-preview">
                    <div className="doc-icon">📄</div>
                    <div className="doc-info">
                      <div className="doc-title">{getRecentReviewer().title}</div>
                      <div className="doc-subject">{getRecentReviewer().subject}</div>
                    </div>
                  </div>
                  <button className="generate-quiz" onClick={handleGenerateQuiz}>Generate Quiz</button>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="md:col-span-2 lg:col-span-8">
              <div className="card leaderboard-card">
                <h3>Leaderboard</h3>
                <div className="leaderboard-list">
                  {getTopLeaderboard().map((player, index) => {
                    const medalClass = index === 0 ? 'gold' : index === 1 ? 'silver' : 'bronze';
                    const medalEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
                    
                    return (
                      <div key={player.studentId} className={`leaderboard-item ${medalClass}`}>
                        <div className="rank-circle">{medalEmoji}</div>
                        <div className="player-info">
                          <div className="player-name">{player.username}</div>
                          <div className="player-xp">{formatXP(player.xp)} XP</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button className="leaderboard-more" onClick={handleViewLeaderboard}>
                  See More
                </button>
              </div>
            </div>

            {/* Quote of the Day */}
            <div className="lg:col-span-4">
              <div className="card quote-card">
                <div className="quote-content">
                  <h3>Quote of the Day</h3>
                  <div className="quote-mascot">{getDailyQuote().emoji}</div>
                  <p className="quote-text">
                    "{getDailyQuote().text}"
                  </p>
                  <p className="quote-author">— {getDailyQuote().author}</p>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
