"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaBars, FaTimes, FaMoon, FaSun, FaArrowLeft, FaMedal, FaStar, FaCrown } from "react-icons/fa";
import UserMenu from "../dashboard/UserMenu";
import NotificationMenu from "../dashboard/NotificationMenu";
import SearchBar from "../dashboard/SearchBar";
import { mockUserProfile, mockRankSystem, mockAchievements, mockBadges } from "../dashboard/mockData";
import "../dashboard/styles.css";
import "./styles.css";

export default function StudentRank() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // overview, achievements, badges

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

  const currentRank = mockRankSystem.currentRank;
  const xpProgress = ((currentRank.xp - currentRank.xpMin) / (currentRank.xpMax - currentRank.xpMin)) * 100;
  const earnedAchievements = mockAchievements.filter(a => a.earned);
  const lockedAchievements = mockAchievements.filter(a => !a.earned);
  const earnedBadges = mockBadges.filter(b => b.earned);
  const lockedBadges = mockBadges.filter(b => !b.earned);

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
            
            <UserMenu userName={mockUserProfile.username} userRole={mockUserProfile.role} />
          </div>
        </header>
        
        {/* Rank Content */}
        <div className="rank-page-container">
          {/* Back Button */}
          <button className="back-button" onClick={handleBack}>
            <FaArrowLeft /> Back to Dashboard
          </button>

          {/* Page Title */}
          <div className="page-title">
            <FaTrophy className="title-icon" />
            <h1>Your Rank & Achievements</h1>
          </div>

          {/* Current Rank Banner */}
          <div className="rank-banner">
            <div className="rank-banner-left">
              <div className="rank-badge-large">
                <img src={currentRank.icon} alt={currentRank.name} />
              </div>
              <div className="rank-details">
                <h2 className="rank-title">{currentRank.name}</h2>
                <p className="rank-tier">Tier {currentRank.tier}</p>
                <div className="xp-info">
                  <span className="current-xp">{currentRank.xp.toLocaleString()} XP</span>
                  {currentRank.xpMax !== 999999 && (
                    <span className="next-rank"> / {currentRank.xpMax.toLocaleString()} XP to next rank</span>
                  )}
                </div>
                <div className="xp-progress-bar">
                  <div className="xp-progress-fill" style={{ width: `${Math.min(xpProgress, 100)}%` }}></div>
                </div>
              </div>
            </div>
            <div className="rank-banner-right">
              <div className="rank-stats-grid">
                <div className="rank-stat">
                  <FaMedal className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-value">{earnedAchievements.length}</span>
                    <span className="stat-label">Achievements</span>
                  </div>
                </div>
                <div className="rank-stat">
                  <FaStar className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-value">{earnedBadges.length}</span>
                    <span className="stat-label">Badges</span>
                  </div>
                </div>
                <div className="rank-stat">
                  <FaCrown className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-value">4th</span>
                    <span className="stat-label">Leaderboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="rank-tabs">
            <button 
              className={`rank-tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Rank Overview
            </button>
            <button 
              className={`rank-tab ${activeTab === "achievements" ? "active" : ""}`}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements ({earnedAchievements.length}/{mockAchievements.length})
            </button>
            <button 
              className={`rank-tab ${activeTab === "badges" ? "active" : ""}`}
              onClick={() => setActiveTab("badges")}
            >
              Badges ({earnedBadges.length}/{mockBadges.length})
            </button>
          </div>

          {/* Tab Content */}
          <div className="rank-tab-content">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="overview-content">
                <h3 className="section-title">All Ranks</h3>
                <div className="ranks-grid">
                  {mockRankSystem.allRanks.slice().sort((a, b) => b.xpMin - a.xpMin).map((rank, index) => {
                    const isCurrentRank = rank.name === currentRank.name;
                    const isPassed = currentRank.xp >= rank.xpMin;
                    
                    return (
                      <div 
                        key={index} 
                        className={`rank-item ${isCurrentRank ? 'current-rank' : ''} ${isPassed ? 'passed' : 'locked'}`}
                      >
                        <div className="rank-item-icon">
                          <img src={rank.icon} alt={rank.name} />
                          {isCurrentRank && <div className="current-badge">Current</div>}
                        </div>
                        <div className="rank-item-info">
                          <h4>{rank.name}</h4>
                          <p>{rank.xpMin.toLocaleString()} - {rank.xpMax === 999999 ? '∞' : rank.xpMax.toLocaleString()} XP</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === "achievements" && (
              <div className="achievements-content">
                <h3 className="section-title">Earned Achievements</h3>
                <div className="achievements-grid">
                  {earnedAchievements.map((achievement) => (
                    <div key={achievement.id} className="achievement-card earned">
                      <div className="achievement-icon">{achievement.icon}</div>
                      <div className="achievement-info">
                        <h4>{achievement.name}</h4>
                        <p>{achievement.description}</p>
                        <span className={`achievement-rarity ${achievement.rarity}`}>{achievement.rarity}</span>
                        <span className="achievement-date">Earned: {achievement.earnedDate}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="section-title locked-section">Locked Achievements</h3>
                <div className="achievements-grid">
                  {lockedAchievements.map((achievement) => (
                    <div key={achievement.id} className="achievement-card locked">
                      <div className="achievement-icon locked-icon">🔒</div>
                      <div className="achievement-info">
                        <h4>{achievement.name}</h4>
                        <p>{achievement.description}</p>
                        <span className={`achievement-rarity ${achievement.rarity}`}>{achievement.rarity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Badges Tab */}
            {activeTab === "badges" && (
              <div className="badges-content">
                <h3 className="section-title">Earned Badges</h3>
                <div className="badges-grid">
                  {earnedBadges.map((badge) => (
                    <div key={badge.id} className="badge-card earned">
                      <div className="badge-icon" style={{ color: badge.color }}>
                        {badge.icon}
                      </div>
                      <div className="badge-info">
                        <h4>{badge.name}</h4>
                        <p>{badge.description}</p>
                        <span className="badge-date">Earned: {badge.earnedDate}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="section-title locked-section">Locked Badges</h3>
                <div className="badges-grid">
                  {lockedBadges.map((badge) => (
                    <div key={badge.id} className="badge-card locked">
                      <div className="badge-icon locked-icon">🔒</div>
                      <div className="badge-info">
                        <h4>{badge.name}</h4>
                        <p>{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
