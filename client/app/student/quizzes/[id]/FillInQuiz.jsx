"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaBars, FaTimes, FaMoon, FaSun, FaLightbulb, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import UserMenu from "../../dashboard/UserMenu";
import NotificationMenu from "../../dashboard/NotificationMenu";
import SearchBar from "../../dashboard/SearchBar";
import { mockUserProfile } from "../../dashboard/mockData";
import "../../dashboard/styles.css";
import "./quiz-styles.css";

export default function FillInQuiz({ quiz, questions }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const currentQuestion = questions.questions[currentQuestionIndex];
  const totalQuestions = questions.questions.length;

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

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setShowHint(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswer("");
      setShowHint(false);
    }
  };

  const handleBack = () => {
    router.push("/student/quizzes");
  };

  // Split the question by the blank (represented by __________)
  const renderQuestion = () => {
    const parts = currentQuestion.question.split("__________");
    return (
      <div className="fill-in-question">
        {parts[0]}
        <input
          type="text"
          className="fill-in-input"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer"
        />
        {parts[1]}
      </div>
    );
  };

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
        </aside>
        <main className="main-content">
          <div>Loading...</div>
        </main>
      </div>
    );
  }

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const secondAngle = seconds * 6;

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const dateString = currentTime.toLocaleDateString('en-US', {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={`dashboard-container ${!sidebarOpen ? 'sidebar-hidden' : ''}`}>
      {/* Sidebar Toggle Button - Now visible on all screen sizes */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
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
          <div className="nav-item" onClick={() => router.push('/student/reviewers')}>
            <FaBook className="nav-icon" />
            <span>Reviewers</span>
          </div>
          <div className="nav-item active" onClick={() => router.push('/student/quizzes')}>
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
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" />
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
        
        {/* Quiz Content */}
        <div className="quiz-content-main">
          {/* Quiz Header */}
          <div className="quiz-header-section">
            <div className="quiz-type-dropdown">
              <span className="quiz-type-icon">✏️</span>
              <span className="quiz-type-text">Fill-in</span>
            </div>
            <div className="quiz-progress">
              {currentQuestionIndex + 1} / {totalQuestions}
            </div>
            <button className="quiz-back-btn" onClick={handleBack}>
              Back
            </button>
          </div>

          {/* Quiz Title */}
          <h1 className="quiz-title">{quiz.lesson}</h1>

          {/* Fill-in Container */}
          <div className="fillin-container">
            {/* Hint Button */}
            <button 
              className="hint-button"
              onClick={() => setShowHint(!showHint)}
            >
              <FaLightbulb /> Get a hint.
            </button>

            {/* Hint Display */}
            {showHint && (
              <div className="hint-display">
                {currentQuestion.hint}
              </div>
            )}

            {/* Question Card */}
            <div className="fillin-question-card">
              {renderQuestion()}
            </div>

            {/* Navigation Buttons */}
            <div className="quiz-navigation">
              <button 
                className="nav-button prev"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <FaArrowLeft />
              </button>
              <button 
                className="nav-button next"
                onClick={handleNext}
                disabled={currentQuestionIndex === totalQuestions - 1}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
