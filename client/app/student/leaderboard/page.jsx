"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaBars, FaTimes, FaMoon, FaSun, FaCrown, FaMedal, FaStar, FaFire } from "react-icons/fa";
import UserMenu from "../dashboard/UserMenu";
import NotificationMenu from "../dashboard/NotificationMenu";
import SearchBar from "../dashboard/SearchBar";
import { mockUserProfile, mockLeaderboard } from "../dashboard/mockData";
import "../dashboard/styles.css";
import "./styles.css";

export default function StudentLeaderboard() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  const handleNavigation = (path) => {
    router.push(path);
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

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
            <div className="nav-item">
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
            <div className="nav-item active">
              <FaTrophy className="nav-icon" />
              <span>Leaderboard</span>
            </div>
          </nav>

          <div className="clock-widget">
            {/* Placeholder while loading */}
            <div style={{ height: '200px' }}></div>
          </div>
        </aside>
        <main className="main-content flex flex-col justify-between min-h-screen">
          <div>Loading...</div>
        </main>
      </div>
    );
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

  // Get top 3 users
  const topThree = mockLeaderboard.slice(0, 3);
  const restOfLeaderboard = mockLeaderboard.slice(3);

  // Find current user's rank
  const currentUserRank = mockLeaderboard.find(user => user.username === mockUserProfile.username);

  const getRankColor = (rank) => {
    if (rank === 1) return "#FFD700"; // Gold
    if (rank === 2) return "#C0C0C0"; // Silver
    if (rank === 3) return "#CD7F32"; // Bronze
    return "var(--brand-primary)";
  };

  const getMedalIcon = (rank) => {
    if (rank === 1) return <FaCrown className="medal-icon gold" />;
    if (rank === 2) return <FaMedal className="medal-icon silver" />;
    if (rank === 3) return <FaMedal className="medal-icon bronze" />;
    return null;
  };

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
          <div className="nav-item" onClick={() => handleNavigation("/student/dashboard")}>
            <FaHome className="nav-icon" />
            <span>Dashboard</span>
          </div>
          <div className="nav-item" onClick={() => handleNavigation("/student/reviewers")}>
            <FaBook className="nav-icon" />
            <span>Reviewers</span>
          </div>
          <div className="nav-item" onClick={() => handleNavigation("/student/quizzes")}>
            <FaGamepad className="nav-icon" />
            <span>Quizzes</span>
          </div>
          <div className="nav-item active" onClick={() => handleNavigation("/student/leaderboard")}>
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

        {/* Leaderboard Content */}
        <div className="leaderboard-page-container">
          <div className="page-title">
            <FaTrophy className="title-icon" />
            <h1>LEADERBOARD</h1>
          </div>

          {/* Top 3 Podium */}
          <div className="podium-section">
            <div className="podium-container">
              {/* 2nd Place */}
              <div className="podium-card second-place">
                <div className="podium-medal">
                  <div className="medal-badge silver-medal">
                    <span className="medal-text">2ND</span>
                  </div>
                </div>
                <div className="podium-avatar">
                  <div className="avatar-circle">
                    <FaStar className="avatar-icon" />
                  </div>
                </div>
                <h3 className="podium-username">{topThree[1]?.username}</h3>
                <p className="podium-xp">{topThree[1]?.xp.toLocaleString()} XP</p>
                <div className="podium-rank-badge">
                  <FaMedal className="rank-icon" />
                  <span>{topThree[1]?.level}</span>
                </div>
              </div>

              {/* 1st Place */}
              <div className="podium-card first-place">
                <div className="podium-medal">
                  <div className="medal-badge gold-medal">
                    <span className="medal-text">1ST</span>
                  </div>
                </div>
                <div className="podium-avatar">
                  <div className="avatar-circle">
                    <FaStar className="avatar-icon" />
                  </div>
                </div>
                <h3 className="podium-username">{topThree[0]?.username}</h3>
                <p className="podium-xp">{topThree[0]?.xp.toLocaleString()} XP</p>
                <div className="podium-rank-badge">
                  <FaCrown className="rank-icon" />
                  <span>{topThree[0]?.level}</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="podium-card third-place">
                <div className="podium-medal">
                  <div className="medal-badge bronze-medal">
                    <span className="medal-text">3RD</span>
                  </div>
                </div>
                <div className="podium-avatar">
                  <div className="avatar-circle">
                    <FaStar className="avatar-icon" />
                  </div>
                </div>
                <h3 className="podium-username">{topThree[2]?.username}</h3>
                <p className="podium-xp">{topThree[2]?.xp.toLocaleString()} XP</p>
                <div className="podium-rank-badge">
                  <FaMedal className="rank-icon" />
                  <span>{topThree[2]?.level}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Leaderboard Table */}
          <div className="leaderboard-table-section">
            <div className="table-header">
              <div className="header-cell rank-col">Rank</div>
              <div className="header-cell username-col">Username</div>
              <div className="header-cell ranking-col">Ranking</div>
              <div className="header-cell xp-col">XP Points</div>
            </div>

            <div className="leaderboard-list">
              {mockLeaderboard.map((user) => (
                <div 
                  key={user.rank} 
                  className={`leaderboard-row ${user.username === mockUserProfile.username ? 'current-user' : ''}`}
                  style={{ 
                    borderLeft: user.rank <= 3 ? `4px solid ${getRankColor(user.rank)}` : 'none'
                  }}
                >
                  <div className="cell rank-col">
                    <div className="rank-number" style={{ color: getRankColor(user.rank) }}>
                      {user.rank <= 3 && getMedalIcon(user.rank)}
                      {user.rank > 3 && <span className="rank-text">{user.rank}TH</span>}
                    </div>
                  </div>
                  
                  <div className="cell username-col">
                    <div className="leaderboard-user-info">
                      <div className="leaderboard-user-avatar">
                        <FaStar className="avatar-icon" />
                      </div>
                      <span className="username">{user.username}</span>
                      {user.username === mockUserProfile.username && (
                        <span className="you-badge">You</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="cell ranking-col">
                    <div className="ranking-badge">
                      {user.rank === 1 ? (
                        <FaCrown className="ranking-icon gold" />
                      ) : (
                        <FaMedal className="ranking-icon" />
                      )}
                      <span>{user.level}</span>
                    </div>
                  </div>
                  
                  <div className="cell xp-col">
                    <span className="xp-value">{user.xp.toLocaleString()} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Stats Card */}
          {currentUserRank && (
            <div className="user-stats-card">
              <h3>Your Performance</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <FaTrophy className="stat-icon" />
                  <div className="stat-info">
                    <p className="stat-label">Current Rank</p>
                    <p className="stat-value">#{currentUserRank.rank}</p>
                  </div>
                </div>
                <div className="stat-item">
                  <FaStar className="stat-icon" />
                  <div className="stat-info">
                    <p className="stat-label">Total XP</p>
                    <p className="stat-value">{currentUserRank.xp.toLocaleString()}</p>
                  </div>
                </div>
                <div className="stat-item">
                  <FaFire className="stat-icon" />
                  <div className="stat-info">
                    <p className="stat-label">Study Streak</p>
                    <p className="stat-value">{currentUserRank.streak} days</p>
                  </div>
                </div>
                <div className="stat-item">
                  <FaGamepad className="stat-icon" />
                  <div className="stat-info">
                    <p className="stat-label">Quizzes Taken</p>
                    <p className="stat-value">{currentUserRank.quizzesTaken}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
