"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaBook, FaGamepad, FaTrophy, FaBars, FaTimes, FaMoon, FaSun, FaChevronDown } from "react-icons/fa";
import UserMenu from "../dashboard/UserMenu";
import NotificationMenu from "../dashboard/NotificationMenu";
import SearchBar from "../dashboard/SearchBar";
import { mockUserProfile, mockCompletedQuizzes, mockAvailableLessons } from "../dashboard/mockData";
import "../dashboard/styles.css";
import "./styles.css";

export default function QuizzesPage() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sortedQuizzes, setSortedQuizzes] = useState([]);
  
  // Quiz generation states
  const [selectedLesson, setSelectedLesson] = useState("");
  const [selectedQuizType, setSelectedQuizType] = useState("");
  const [selectedNumQuestions, setSelectedNumQuestions] = useState("");
  
  // Dropdown states
  const [lessonDropdownOpen, setLessonDropdownOpen] = useState(false);
  const [quizTypeDropdownOpen, setQuizTypeDropdownOpen] = useState(false);
  const [numQuestionsDropdownOpen, setNumQuestionsDropdownOpen] = useState(false);
  
  // Refs for dropdowns
  const lessonDropdownRef = useRef(null);
  const quizTypeDropdownRef = useRef(null);
  const numQuestionsDropdownRef = useRef(null);
  
  const quizTypes = [
    { value: "MCQ", label: "Multiple Choice" },
    { value: "Fill-in", label: "Fill in the Blanks" },
    { value: "Flashcard", label: "Flashcards" }
  ];
  
  const questionNumbers = [10, 15, 20, 25, 30];

  const [showGeneratedNotification, setShowGeneratedNotification] = useState(false);
  const [generatedQuizInfo, setGeneratedQuizInfo] = useState(null);

  useEffect(() => {
    // Check if a quiz was just generated
    const quizGenerated = localStorage.getItem('quiz-generated');
    if (quizGenerated) {
      const info = JSON.parse(quizGenerated);
      setGeneratedQuizInfo(info);
      setShowGeneratedNotification(true);
      
      // Remove the flag
      localStorage.removeItem('quiz-generated');
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowGeneratedNotification(false);
      }, 5000);
    }
  }, []);

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

    // Load quiz access times from localStorage and sort quizzes
    const savedAccessTimes = JSON.parse(localStorage.getItem('quizAccessTimes') || '{}');
    const quizzesWithUpdatedTimes = mockCompletedQuizzes.map(quiz => ({
      ...quiz,
      lastAccessedDate: savedAccessTimes[quiz.id] || quiz.lastAccessedDate
    }));
    
    // Sort by most recently accessed
    const sorted = [...quizzesWithUpdatedTimes].sort((a, b) => {
      const dateA = new Date(a.lastAccessedDate);
      const dateB = new Date(b.lastAccessedDate);
      return dateB - dateA; // Most recent first
    });
    
    setSortedQuizzes(sorted);

    return () => clearInterval(timer);
  }, []);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lessonDropdownRef.current && !lessonDropdownRef.current.contains(event.target)) {
        setLessonDropdownOpen(false);
      }
      if (quizTypeDropdownRef.current && !quizTypeDropdownRef.current.contains(event.target)) {
        setQuizTypeDropdownOpen(false);
      }
      if (numQuestionsDropdownRef.current && !numQuestionsDropdownRef.current.contains(event.target)) {
        setNumQuestionsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  const handleGenerateQuiz = () => {
    if (selectedLesson && selectedQuizType && selectedNumQuestions) {
      console.log("Generating quiz:", {
        lesson: selectedLesson,
        quizType: selectedQuizType,
        numQuestions: selectedNumQuestions
      });
      // TODO: Implement quiz generation logic
      alert(`Quiz generated!\nLesson: ${selectedLesson}\nType: ${selectedQuizType}\nQuestions: ${selectedNumQuestions}`);
      
      // Reset form
      setSelectedLesson("");
      setSelectedQuizType("");
      setSelectedNumQuestions("");
    } else {
      alert("Please fill in all fields to generate a quiz");
    }
  };

  const handleQuizClick = (quiz) => {
    console.log("Opening quiz:", quiz);
    
    // Update last accessed time
    const now = new Date().toISOString();
    const savedAccessTimes = JSON.parse(localStorage.getItem('quizAccessTimes') || '{}');
    savedAccessTimes[quiz.id] = now;
    localStorage.setItem('quizAccessTimes', JSON.stringify(savedAccessTimes));
    
    // Update sorted quizzes to reflect new access time
    const updatedQuizzes = sortedQuizzes.map(q => 
      q.id === quiz.id ? { ...q, lastAccessedDate: now } : q
    );
    const sorted = [...updatedQuizzes].sort((a, b) => {
      const dateA = new Date(a.lastAccessedDate);
      const dateB = new Date(b.lastAccessedDate);
      return dateB - dateA;
    });
    setSortedQuizzes(sorted);
    
    // Navigate to quiz detail/result page
    router.push(`/student/quizzes/${quiz.id}`);
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
            <div className="nav-item">
              <FaHome className="nav-icon" />
              <span>Dashboard</span>
            </div>
            <div className="nav-item">
              <FaBook className="nav-icon" />
              <span>Reviewers</span>
            </div>
            <div className="nav-item active">
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
        
        {/* Quizzes Content */}
        <div className="quizzes-content">
          {/* Quiz Generated Notification */}
          {showGeneratedNotification && generatedQuizInfo && (
            <div className="quiz-generated-notification">
              <div className="quiz-notification-icon">✓</div>
              <div className="notification-content">
                <h4>Quiz Generated Successfully!</h4>
                <p>A new quiz has been generated from "{generatedQuizInfo.reviewerTitle}" in {generatedQuizInfo.classCode}</p>
              </div>
              <button 
                className="notification-close"
                onClick={() => setShowGeneratedNotification(false)}
              >
                ×
              </button>
            </div>
          )}

          {/* Generate Quiz Section */}
          <div className="generate-quiz-section">
            <h2 className="generate-quiz-title">Generate Quiz</h2>
            <div className="generate-quiz-form">
              {/* Lesson Dropdown */}
              <div className="quiz-input-group" ref={lessonDropdownRef}>
                <label className="quiz-input-label">Lesson</label>
                <div 
                  className="quiz-dropdown-trigger"
                  onClick={() => {
                    setLessonDropdownOpen(!lessonDropdownOpen);
                    setQuizTypeDropdownOpen(false);
                    setNumQuestionsDropdownOpen(false);
                  }}
                >
                  <span className={!selectedLesson ? "quiz-placeholder" : ""}>
                    {selectedLesson || "Select a lesson"}
                  </span>
                  <FaChevronDown className={`quiz-dropdown-icon ${lessonDropdownOpen ? 'open' : ''}`} />
                </div>
                {lessonDropdownOpen && (
                  <div className="quiz-dropdown-menu">
                    {mockAvailableLessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className={`quiz-dropdown-item ${selectedLesson === lesson.title ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedLesson(lesson.title);
                          setLessonDropdownOpen(false);
                        }}
                      >
                        {lesson.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quiz Type Dropdown */}
              <div className="quiz-input-group" ref={quizTypeDropdownRef}>
                <label className="quiz-input-label">Type of Quiz</label>
                <div 
                  className="quiz-dropdown-trigger"
                  onClick={() => {
                    setQuizTypeDropdownOpen(!quizTypeDropdownOpen);
                    setLessonDropdownOpen(false);
                    setNumQuestionsDropdownOpen(false);
                  }}
                >
                  <span className={!selectedQuizType ? "quiz-placeholder" : ""}>
                    {selectedQuizType ? quizTypes.find(qt => qt.value === selectedQuizType)?.label : "Select quiz type"}
                  </span>
                  <FaChevronDown className={`quiz-dropdown-icon ${quizTypeDropdownOpen ? 'open' : ''}`} />
                </div>
                {quizTypeDropdownOpen && (
                  <div className="quiz-dropdown-menu">
                    {quizTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`quiz-dropdown-item ${selectedQuizType === type.value ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedQuizType(type.value);
                          setQuizTypeDropdownOpen(false);
                        }}
                      >
                        {type.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Number of Questions Dropdown */}
              <div className="quiz-input-group" ref={numQuestionsDropdownRef}>
                <label className="quiz-input-label">No. of Questions</label>
                <div 
                  className="quiz-dropdown-trigger"
                  onClick={() => {
                    setNumQuestionsDropdownOpen(!numQuestionsDropdownOpen);
                    setLessonDropdownOpen(false);
                    setQuizTypeDropdownOpen(false);
                  }}
                >
                  <span className={!selectedNumQuestions ? "quiz-placeholder" : ""}>
                    {selectedNumQuestions || "Select number"}
                  </span>
                  <FaChevronDown className={`quiz-dropdown-icon ${numQuestionsDropdownOpen ? 'open' : ''}`} />
                </div>
                {numQuestionsDropdownOpen && (
                  <div className="quiz-dropdown-menu">
                    {questionNumbers.map((num) => (
                      <div
                        key={num}
                        className={`quiz-dropdown-item ${selectedNumQuestions === num.toString() ? 'selected' : ''}`}
                        onClick={() => {
                          setSelectedNumQuestions(num.toString());
                          setNumQuestionsDropdownOpen(false);
                        }}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="generate-quiz-btn" onClick={handleGenerateQuiz}>
                Generate Quiz
              </button>
            </div>
          </div>

          {/* Recent Quizzes Section */}
          <div className="section-container">
            <h2 className="section-title">Recent</h2>
            <div className="quizzes-grid">
              {sortedQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="quiz-card"
                  onClick={() => handleQuizClick(quiz)}
                >
                  <div className="quiz-meta-badges">
                    <div className="quiz-questions-badge">
                      {quiz.numQuestions} Qs
                    </div>
                    <div className={`quiz-type-badge type-${quiz.quizType.toLowerCase()}`}>
                      {quiz.quizType}
                    </div>
                  </div>
                  <h3 className="quiz-card-title">{quiz.lesson}</h3>
                  <div className="quiz-card-footer">
                    <div className="quiz-accuracy-label">Accuracy</div>
                    <div className="quiz-accuracy-bar-container">
                      <div 
                        className="quiz-accuracy-bar"
                        style={{ width: `${quiz.accuracy}%` }}
                      ></div>
                    </div>
                    <div className="quiz-accuracy-percentage">{quiz.accuracy}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
