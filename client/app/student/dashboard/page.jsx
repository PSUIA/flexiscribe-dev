"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaBell, FaSearch } from "react-icons/fa";
import "./styles.css";

export default function StudentDashboard() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    router.push("/login");
  };

  // Calculate clock hand angles
  const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourAngle = (hours * 30) + (minutes * 0.5);
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  // Format time and date
  const timeString = currentTime.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
  const dateString = currentTime.toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

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
          <svg className="clock-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" />
            {/* Hour markers */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
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
            ))}
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
              stroke="#ffeb3b" 
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
      <main className="main-content">
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
              <div className="user-avatar">⚪</div>
              <div className="user-info">
                <div className="user-name">Eru.</div>
                <div className="user-role">Student</div>
              </div>
            </div>
          </div>
        </header>

        {/* Welcome Banner */}
        <div className="welcome-banner">
          <div className="welcome-text">
            <h2>Welcome, Eru!</h2>
            <p>Ready for another day of learning?</p>
          </div>
          <div className="welcome-mascot">🐱❤️</div>
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Study Streak */}
            <div className="card study-streak">
              <h3>Study Streak</h3>
              <div className="streak-icon">🔥</div>
              <div className="streak-count">7 day streak</div>
            </div>

            {/* Jump Back In */}
            <div className="card jump-back">
              <h3>Jump Back In</h3>
              <div className="progress-circle">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="150.72"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">40%</text>
                </svg>
              </div>
              <div className="progress-label">Periodic Interrupt...</div>
            </div>

            {/* Quote of the Day */}
            <div className="card quote-card">
              <div className="quote-mascot">😸</div>
              <div className="quote-content">
                <h3>Quote of the Day</h3>
                <p className="quote-text">
                  "The beautiful thing about learning is nobody can take it away from you."
                </p>
                <p className="quote-author">-Albert Einstein</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Ascendant Card */}
            <div className="card ascendant-card">
              <div className="rank-badge">⭐</div>
              <h3>Ascendant</h3>
              <div className="xp-bar">
                <div className="xp-fill" style={{width: '65%'}}></div>
              </div>
              <div className="xp-amount">10543 XP</div>
            </div>

            {/* Recently Added */}
            <div className="card recently-added">
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
        </div>
      </main>
    </div>
  );
}
