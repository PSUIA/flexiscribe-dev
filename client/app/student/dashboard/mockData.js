// Mock data for UI visualization
// This file acts as a placeholder until connected to the database

// User Profile Data
export const mockUserProfile = {
  username: "erunim",
  firstName: "Camille",
  lastName: "Enraca",
  email: "camille.enraca@example.com",
  studentId: "2201000",
  course: "BSCpE",
  yearLevel: "4th Year",
  role: "Student",
  profileImage: "/img/default-avatar.png"
};

// Dashboard Stats
export const mockDashboardStats = {
  rank: "Ascendant",
  xp: 10543,
  xpProgress: 65, // percentage
  studyStreak: 7,
  streakIcon: "🔥"
};

// Notifications Data
export const mockNotifications = [
  {
    id: 1,
    type: "reviewer",
    title: "New Reviewer Available",
    message: "Introduction to Computer Science reviewer has been uploaded",
    time: "5 minutes ago",
    read: false,
    link: "/student/reviewers"
  },
  {
    id: 2,
    type: "quiz",
    title: "New Quiz Available",
    message: "Data Structures Quiz is now available to take",
    time: "2 hours ago",
    read: false,
    link: "/student/quizzes"
  },
  {
    id: 3,
    type: "achievement",
    title: "Achievement Unlocked!",
    message: "You've earned the 'Week Warrior' badge for 7-day streak",
    time: "1 day ago",
    read: false,
    link: "/student/dashboard"
  },
  {
    id: 4,
    type: "reviewer",
    title: "Reviewer Updated",
    message: "Database Management reviewer has been updated with new content",
    time: "2 days ago",
    read: true,
    link: "/student/reviewers"
  }
];

// Reviewers Data
export const mockReviewers = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    subject: "CS101",
    description: "Fundamental concepts of computer science and programming",
    uploadDate: "2024-12-20",
    lastUpdated: "2024-12-22",
    downloads: 145,
    views: 320
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    subject: "CS102",
    description: "Common data structures and algorithmic approaches",
    uploadDate: "2024-12-18",
    lastUpdated: "2024-12-21",
    downloads: 230,
    views: 450
  },
  {
    id: 3,
    title: "Database Management Systems",
    subject: "CS201",
    description: "Relational databases, SQL, and database design principles",
    uploadDate: "2024-12-15",
    lastUpdated: "2024-12-23",
    downloads: 189,
    views: 380
  },
  {
    id: 4,
    title: "Web Development Fundamentals",
    subject: "CS202",
    description: "HTML, CSS, JavaScript, and modern web technologies",
    uploadDate: "2024-12-14",
    lastUpdated: "2024-12-20",
    downloads: 210,
    views: 420
  },
  {
    id: 5,
    title: "Object-Oriented Programming",
    subject: "CS103",
    description: "OOP concepts, design patterns, and best practices",
    uploadDate: "2024-12-12",
    lastUpdated: "2024-12-19",
    downloads: 175,
    views: 340
  },
  {
    id: 6,
    title: "Operating Systems",
    subject: "CS301",
    description: "OS concepts, process management, and memory management",
    uploadDate: "2024-12-10",
    lastUpdated: "2024-12-18",
    downloads: 156,
    views: 290
  },
  {
    id: 7,
    title: "Computer Networks",
    subject: "CS302",
    description: "Network protocols, architecture, and security",
    uploadDate: "2024-12-08",
    lastUpdated: "2024-12-17",
    downloads: 142,
    views: 270
  },
  {
    id: 8,
    title: "Software Engineering",
    subject: "CS303",
    description: "Software development lifecycle and engineering practices",
    uploadDate: "2024-12-05",
    lastUpdated: "2024-12-16",
    downloads: 167,
    views: 310
  }
];

// Quizzes Data
export const mockQuizzes = [
  {
    id: 1,
    title: "CS101 Midterm Quiz",
    subject: "CS101",
    description: "Test your knowledge on computer science fundamentals",
    totalQuestions: 25,
    duration: 30, // minutes
    difficulty: "Easy",
    passingScore: 70,
    attempts: 3,
    availableUntil: "2024-12-30"
  },
  {
    id: 2,
    title: "Data Structures Final Quiz",
    subject: "CS102",
    description: "Comprehensive quiz on data structures and algorithms",
    totalQuestions: 30,
    duration: 45,
    difficulty: "Hard",
    passingScore: 75,
    attempts: 2,
    availableUntil: "2024-12-28"
  },
  {
    id: 3,
    title: "Database Basics Quiz",
    subject: "CS201",
    description: "Quiz covering SQL and database design",
    totalQuestions: 20,
    duration: 25,
    difficulty: "Medium",
    passingScore: 70,
    attempts: 3,
    availableUntil: "2024-12-29"
  },
  {
    id: 4,
    title: "HTML & CSS Quiz",
    subject: "CS202",
    description: "Test your front-end development skills",
    totalQuestions: 15,
    duration: 20,
    difficulty: "Easy",
    passingScore: 65,
    attempts: 4,
    availableUntil: "2024-12-31"
  },
  {
    id: 5,
    title: "OOP Concepts Quiz",
    subject: "CS103",
    description: "Object-oriented programming principles and patterns",
    totalQuestions: 22,
    duration: 30,
    difficulty: "Medium",
    passingScore: 72,
    attempts: 3,
    availableUntil: "2024-12-27"
  },
  {
    id: 6,
    title: "Operating Systems Quiz",
    subject: "CS301",
    description: "OS concepts and system programming",
    totalQuestions: 28,
    duration: 40,
    difficulty: "Hard",
    passingScore: 75,
    attempts: 2,
    availableUntil: "2024-12-26"
  },
  {
    id: 7,
    title: "Networking Fundamentals Quiz",
    subject: "CS302",
    description: "Network protocols and architecture",
    totalQuestions: 24,
    duration: 35,
    difficulty: "Medium",
    passingScore: 70,
    attempts: 3,
    availableUntil: "2024-12-29"
  }
];

// Leaderboard Data
export const mockLeaderboard = [
  {
    rank: 1,
    username: "TechMaster99",
    studentId: "2024-00123",
    xp: 15420,
    level: "Master",
    streak: 15,
    quizzesTaken: 45,
    averageScore: 92
  },
  {
    rank: 2,
    username: "CodeNinja",
    studentId: "2024-00089",
    xp: 14230,
    level: "Diamond",
    streak: 12,
    quizzesTaken: 42,
    averageScore: 89
  },
  {
    rank: 3,
    username: "StudyPro",
    studentId: "2024-00201",
    xp: 13105,
    level: "Diamond",
    streak: 10,
    quizzesTaken: 38,
    averageScore: 87
  },
  {
    rank: 4,
    username: "erunim",
    studentId: "2201000",
    xp: 10543,
    level: "Ascendant",
    streak: 7,
    quizzesTaken: 28,
    averageScore: 85
  },
  {
    rank: 5,
    username: "QuizKing",
    studentId: "2024-00156",
    xp: 9876,
    level: "Ascendant",
    streak: 8,
    quizzesTaken: 25,
    averageScore: 83
  }
];

// Recent Activity
export const mockRecentActivity = [
  {
    id: 1,
    type: "quiz",
    title: "Completed Data Structures Quiz",
    score: 85,
    date: "2024-12-23",
    time: "14:30"
  },
  {
    id: 2,
    type: "reviewer",
    title: "Downloaded Web Development Reviewer",
    date: "2024-12-22",
    time: "10:15"
  },
  {
    id: 3,
    type: "achievement",
    title: "Earned 7-Day Streak Badge",
    date: "2024-12-21",
    time: "09:00"
  }
];

// Achievements/Badges
export const mockAchievements = [
  {
    id: 1,
    name: "Week Warrior",
    description: "Maintained a 7-day study streak",
    icon: "🔥",
    earned: true,
    earnedDate: "2024-12-21"
  },
  {
    id: 2,
    name: "Quiz Master",
    description: "Completed 25 quizzes",
    icon: "🎯",
    earned: true,
    earnedDate: "2024-12-18"
  },
  {
    id: 3,
    name: "Perfect Score",
    description: "Got 100% on any quiz",
    icon: "⭐",
    earned: false,
    earnedDate: null
  },
  {
    id: 4,
    name: "Knowledge Seeker",
    description: "Downloaded 10 reviewers",
    icon: "📚",
    earned: true,
    earnedDate: "2024-12-15"
  }
];

// Search Data (Combined for search functionality)
export const mockSearchData = [
  // Reviewers for search
  ...mockReviewers.map(reviewer => ({
    id: `reviewer-${reviewer.id}`,
    type: "reviewer",
    title: reviewer.title,
    subject: reviewer.subject,
    link: `/student/reviewers/${reviewer.id}`
  })),
  // Quizzes for search
  ...mockQuizzes.map(quiz => ({
    id: `quiz-${quiz.id}`,
    type: "quiz",
    title: quiz.title,
    subject: quiz.subject,
    link: `/student/quizzes/${quiz.id}`
  }))
];

// Subject/Course List
export const mockSubjects = [
  { code: "CS101", name: "Introduction to Computer Science", semester: 1, year: 1 },
  { code: "CS102", name: "Data Structures and Algorithms", semester: 2, year: 1 },
  { code: "CS103", name: "Object-Oriented Programming", semester: 1, year: 2 },
  { code: "CS201", name: "Database Management Systems", semester: 2, year: 2 },
  { code: "CS202", name: "Web Development Fundamentals", semester: 1, year: 3 },
  { code: "CS301", name: "Operating Systems", semester: 2, year: 3 },
  { code: "CS302", name: "Computer Networks", semester: 1, year: 4 },
  { code: "CS303", name: "Software Engineering", semester: 2, year: 4 }
];

// Motivational Quotes
export const mockQuotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  }
];
