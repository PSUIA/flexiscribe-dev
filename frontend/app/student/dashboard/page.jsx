"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaSearch, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StudentSidebar from "@/components/student/layout/StudentSidebar";
import StudentHeader from "@/components/student/layout/StudentHeader";
import { mockDailyMessages, mockQuotes } from "./mockData";
import { 
  getGreeting, 
  getDailyMessage, 
  getDailyQuote, 
  calculateStreak, 
  trackActivity, 
  hasActivityToday, 
  recordActivity, 
  calculateRank, 
  toggleSidebar as utilToggleSidebar, 
  toggleDarkMode as utilToggleDarkMode, 
  handleNavigation as utilHandleNavigation 
} from "../../../utils/student";
import "./styles.css";


export default function StudentDashboard() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [studentProfile, setStudentProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);
  const [streakData, setStreakData] = useState({
    count: 0,
    isActive: false,
    lastActivityDate: null
  });
  const [currentRank, setCurrentRank] = useState({
    name: "Learner V",
    tier: "V",
    xp: 0,
    xpMin: 0,
    xpMax: 199,
    color: "#CD7F32",
    icon: "/img/learner-5.png"
  });

  // Calculate XP progress for rank bar
  const xpProgress = ((currentRank.xp - currentRank.xpMin) / (currentRank.xpMax - currentRank.xpMin)) * 100;

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

    // Initialize streak data (don't record activity on load, only when user does something)
    const currentStreak = calculateStreak();
    setStreakData(currentStreak);

    // Fetch student profile from database
    const fetchStudentProfile = async () => {
      try {
        const response = await fetch('/api/students/profile');
        if (response.ok) {
          const data = await response.json();
          setStudentProfile(data.profile);
          
          // Set XP and calculate rank
          const studentXP = data.profile.xp || 0;
          const rank = calculateRank(studentXP);
          setCurrentRank(rank);
        } else {
          console.error('Failed to fetch student profile');
        }
      } catch (error) {
        console.error('Error fetching student profile:', error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch leaderboard from database
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/students/leaderboard');
        if (response.ok) {
          const data = await response.json();
          setLeaderboard(data.leaderboard);
        } else {
          console.error('Failed to fetch leaderboard');
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };

    fetchStudentProfile();
    fetchLeaderboard();

    return () => clearInterval(timer);
  }, []);

  /* ============================================
   * ACTIVITY TRACKING INTEGRATION GUIDE
   * ============================================
   * To activate the streak, call trackActivity() when users complete activities.
   * 
   * Examples:
   * 
   * 1. Quiz Completion:
   *    trackActivity('quiz_completed', setStreakData);
   * 
   * 2. Reviewer Viewed:
   *    trackActivity('reviewer_viewed', setStreakData);
   * 
   * 3. Flashcard Session:
   *    trackActivity('flashcard_session', setStreakData);
   * 
   * 4. MCQ Practice:
   *    trackActivity('mcq_practice', setStreakData);
   * 
   * The streak will only increment after at least 1 activity is tracked per day.
   * ============================================ */

  const handleToggleSidebar = () => utilToggleSidebar(sidebarOpen, setSidebarOpen);
  const handleToggleDarkMode = () => utilToggleDarkMode(darkMode, setDarkMode);
  const handleNav = (path) => utilHandleNavigation(path, router, sidebarOpen, setSidebarOpen);

  const handleLogout = async () => {
    try {
      // Call logout API to clear the auth cookie
      await fetch("/api/auth/logout", { method: "POST" });
      
      // Clear any client-side storage
      localStorage.clear();
      sessionStorage.clear();
      
      // Redirect to login
      window.location.href = "/auth/student/login";
    } catch (error) {
      console.error("Logout error:", error);
      // Redirect anyway
      window.location.href = "/auth/student/login";
    }
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
      <StudentSidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentTime={currentTime}
        hourAngle={hourAngle}
        minuteAngle={minuteAngle}
        secondAngle={secondAngle}
        timeString={timeString}
        dateString={dateString}
      />

      {/* Main Content */}
      <main className="main-content flex flex-col justify-between min-h-screen">
        <StudentHeader 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          studentProfile={studentProfile}
        />
        
        {/* Grid Contents */}
        <div className="dashboard-grid">
            {/* Welcome Banner */}
            <div className="welcome-banner md:col-span-2 lg:col-span-8">
              <div className="grid grid-cols-2 grid-rows-2">
                <div className="col-start-1 row-start-1 items-start flex justify-center flex-col">
                  <span className="font-bold text-xl md:text-2xl lg:text-3xl">{getGreeting(currentTime)}, {studentProfile?.username || 'Student'}!</span>
                </div>
                <div className="col-start-1 row-start-2 items-start flex justify-center flex-col">
                  <span className="font-normal text-xs md:text-sm opacity-90">{getDailyMessage(currentTime, mockDailyMessages)}</span>
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
                  <img src={currentRank.icon} alt="Badge" className="rank-badge-img" />
                </div>
                <div className="rank-info">
                  <div className="rank-name">{currentRank.name}</div>
                  <div className="rank-tier">Tier {currentRank.tier}</div>
                  <div className="xp-bar">
                    <div className="xp-fill" style={{width: `${Math.min(xpProgress, 100)}%`}}></div>
                  </div>
                  <div className="rank-xp">{currentRank.xp.toLocaleString()} XP</div>
                </div>
              </div>
            </div>

            {/* Study Streak */}
            <div className={`card study-streak lg:col-span-4 ${streakData.isActive ? 'streak-active' : 'streak-inactive'}`}>
                <div className="card-header-compact">
                  <h3>Study Streak</h3>
                </div>
                <div className="streak-content">
                  <div className="streak-icon-container">
                    <div className="streak-icon">🔥</div>
                    {streakData.isActive && (
                      <>
                        <div className="fire-particle fire-particle-1"></div>
                        <div className="fire-particle fire-particle-2"></div>
                        <div className="fire-particle fire-particle-3"></div>
                        <div className="fire-glow"></div>
                      </>
                    )}
                  </div>
                  <div className="streak-count">{streakData.count} days</div>
                  {streakData.isActive ? (
                    <div className="streak-status active">✓ Active</div>
                  ) : (
                    <div className="streak-status inactive">Keep going!</div>
                  )}
                </div>
            </div>

            {/* Jump Back In - Placeholder for future implementation */}
            <div className="card jump-back lg:col-span-4">
                <div className="card-header-compact">
                  <h3>Jump Back In</h3>
                </div>
                <div className="jump-back-content">
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '2rem',
                    gap: '1rem',
                    minHeight: '180px'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--brand-secondary) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                    }}>
                      📚
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ 
                        fontSize: '1rem', 
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                      }}>No Recent Activity</p>
                      <p style={{ 
                        fontSize: '0.85rem', 
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}>Start reviewing to track your progress</p>
                    </div>
                  </div>
                </div>
            </div>

            {/* Recently Added - Placeholder for future implementation */}
            <div className="card recently-added lg:col-span-4">
                <div className="card-header-compact">
                  <h3>Recently Added</h3>
                </div>
                <div className="recently-added-content">
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    padding: '2rem',
                    gap: '1rem',
                    minHeight: '180px'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--brand-secondary) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                    }}>
                      📄
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ 
                        fontSize: '1rem', 
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                      }}>No Content Available</p>
                      <p style={{ 
                        fontSize: '0.85rem', 
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}>New reviewers will appear here</p>
                    </div>
                  </div>
                </div>
            </div>

            {/* Leaderboard */}
            <div className="md:col-span-2 lg:col-span-8">
              <div className="card leaderboard-card">
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <h3>Leaderboard</h3>
                </div>
                
                {leaderboard.length === 0 ? (
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    padding: '3rem 2rem',
                    gap: '1.5rem'
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      boxShadow: '0 4px 20px rgba(255, 215, 0, 0.2)'
                    }}>
                      🏆
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                      }}>No Leaderboard Data</p>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255, 255, 255, 0.7)',
                        maxWidth: '400px'
                      }}>Start earning XP to appear on the leaderboard</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Top 3 Podium Mini Version */}
                    {leaderboard.length >= 3 && (
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'flex-end', 
                        gap: '1rem',
                        marginBottom: '2rem',
                        padding: '1rem'
                      }}>
                        {[
                          { medal: '🥈', gradient: 'linear-gradient(135deg, #C0C0C0 0%, #808080 100%)', size: 50, border: '#C0C0C0', fontSize: '1.5rem' }, // 2nd
                          { medal: '👑', gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', size: 60, border: '#FFD700', fontSize: '2rem', translateY: -10, usernameColor: '#FFD700', xpColor: 'rgba(255, 255, 255, 0.8)', fontWeight: '700' }, // 1st
                          { medal: '🥉', gradient: 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)', size: 50, border: '#CD7F32', fontSize: '1.5rem' }, // 3rd
                        ].map((podium, idx) => {
                          const user = leaderboard[idx];
                          return (
                            <div key={idx} style={{ 
                              display: 'flex', 
                              flexDirection: 'column', 
                              alignItems: 'center',
                              flex: 1,
                              maxWidth: '120px',
                              transform: podium.translateY ? `translateY(${podium.translateY}px)` : 'none'
                            }}>
                              <div style={{
                                width: podium.size,
                                height: podium.size,
                                borderRadius: '50%',
                                background: podium.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: podium.fontSize,
                                marginBottom: '0.5rem',
                                border: `3px solid ${podium.border}`,
                                boxShadow: podium.boxShadow || 'none'
                              }}>
                                {podium.medal}
                              </div>
                              <div style={{ 
                                fontSize: podium.fontSize === '2rem' ? '0.85rem' : '0.75rem', 
                                fontWeight: podium.fontWeight || '600',
                                color: podium.usernameColor || 'var(--text-primary)',
                                textAlign: 'center',
                                marginBottom: '0.25rem',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                width: '100%'
                              }}>
                                {user?.username}
                              </div>
                              <div style={{ 
                                fontSize: podium.fontSize === '2rem' ? '0.75rem' : '0.7rem', 
                                color: podium.xpColor || 'rgba(255, 255, 255, 0.7)',
                                fontWeight: podium.fontWeight ? '600' : 'normal'
                              }}>
                                {user?.xp?.toLocaleString()} XP
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Leaderboard List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {leaderboard.slice(0, 3).map((user, index) => {
                        const isCurrentUser = user.username === studentProfile?.username;
                        const getRankColor = (rank) => {
                          if (rank === 1) return "#FFD700";
                          if (rank === 2) return "#C0C0C0";
                          if (rank === 3) return "#CD7F32";
                          return "var(--brand-primary)";
                        };

                        return (
                          <div 
                            key={user.id || index}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0.75rem 1rem',
                              borderRadius: '8px',
                              background: isCurrentUser ? 'rgba(41, 182, 246, 0.15)' : 'pink',
                              border: isCurrentUser ? '2px solid var(--accent-primary)' : '2px solid transparent',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => { if (!isCurrentUser) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                            onMouseLeave={(e) => { if (!isCurrentUser) e.currentTarget.style.background = 'var(--brand-tertiary)'; }}
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: getRankColor(index + 1),
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.85rem',
                              fontWeight: '700',
                              color: index < 3 ? '#000' : '#fff',
                              marginRight: '1rem',
                              flexShrink: 0
                            }}>{index + 1}</div>

                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}>
                                {user.username} {isCurrentUser && '(You)'}
                              </div>
                              <div style={{
                                fontSize: '0.75rem',
                                color: 'rgba(255, 255, 255, 0.6)',
                                marginTop: '0.125rem'
                              }}>
                                {user.level || 'Learner'}
                              </div>
                            </div>

                            <div style={{
                              fontSize: '0.85rem',
                              fontWeight: '700',
                              color: '#FFD700',
                              marginLeft: '1rem',
                              flexShrink: 0
                            }}>
                              {user.xp?.toLocaleString()} XP
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <button 
                      onClick={() => router.push('/student/leaderboard')}
                      className="leaderboard-more"
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      See More
                    </button>

                    {/* View All Button at bottom for mobile */}
                    {leaderboard.length > 5 && (
                      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <button 
                          onClick={() => router.push('/student/leaderboard')}
                          style={{
                            padding: '0.75rem 2rem',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--brand-secondary) 100%)',
                            border: 'none',
                            color: 'white',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            width: '100%'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.02)';
                            e.target.style.boxShadow = '0 4px 15px rgba(41, 182, 246, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          View Full Leaderboard
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Quote of the Day */}
            <div className="lg:col-span-4">
              <div className="card quote-card">
                <div className="quote-content">
                  <h3>Quote of the Day</h3>
                  <div className="quote-mascot">{getDailyQuote(currentTime, mockQuotes).emoji}</div>
                  <p className="quote-text">
                    "{getDailyQuote(currentTime, mockQuotes).text}"
                  </p>
                  <p className="quote-author">— {getDailyQuote(currentTime, mockQuotes).author}</p>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
