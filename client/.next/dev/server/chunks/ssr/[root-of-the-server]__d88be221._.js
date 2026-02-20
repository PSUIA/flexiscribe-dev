module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/client/app/student/dashboard/mockData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for UI visualization
// This file acts as a placeholder until connected to the database
// User Profile Data
__turbopack_context__.s([
    "enrolledClasses",
    ()=>enrolledClasses,
    "mockAchievements",
    ()=>mockAchievements,
    "mockBadges",
    ()=>mockBadges,
    "mockDailyMessages",
    ()=>mockDailyMessages,
    "mockDashboardStats",
    ()=>mockDashboardStats,
    "mockLeaderboard",
    ()=>mockLeaderboard,
    "mockNotifications",
    ()=>mockNotifications,
    "mockQuizzes",
    ()=>mockQuizzes,
    "mockQuotes",
    ()=>mockQuotes,
    "mockRankSystem",
    ()=>mockRankSystem,
    "mockRecentActivity",
    ()=>mockRecentActivity,
    "mockReviewers",
    ()=>mockReviewers,
    "mockReviewersByClass",
    ()=>mockReviewersByClass,
    "mockSearchData",
    ()=>mockSearchData,
    "mockStudyProgress",
    ()=>mockStudyProgress,
    "mockSubjects",
    ()=>mockSubjects,
    "mockTranscriptsByClass",
    ()=>mockTranscriptsByClass,
    "mockUserProfile",
    ()=>mockUserProfile,
    "rawTranscripts",
    ()=>rawTranscripts
]);
const mockUserProfile = {
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
const mockDashboardStats = {
    rank: "Ascendant",
    xp: 10543,
    xpProgress: 65,
    studyStreak: 7,
    streakIcon: "🔥",
    streakActive: true,
    lastActivityDate: "2024-12-24",
    streakHistory: [
        {
            date: "2024-12-24",
            activity: "quiz",
            completed: true
        },
        {
            date: "2024-12-23",
            activity: "reviewer",
            completed: true
        },
        {
            date: "2024-12-22",
            activity: "quiz",
            completed: true
        },
        {
            date: "2024-12-21",
            activity: "reviewer",
            completed: true
        },
        {
            date: "2024-12-20",
            activity: "quiz",
            completed: true
        },
        {
            date: "2024-12-19",
            activity: "quiz",
            completed: true
        },
        {
            date: "2024-12-18",
            activity: "reviewer",
            completed: true
        }
    ]
};
const mockNotifications = [
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
const enrolledClasses = [
    {
        id: 1,
        code: "CPP117",
        name: "Embedded Systems"
    }
];
const rawTranscripts = [
    {
        id: 1,
        code: "CPP117",
        name: "Embedded Systems"
    }
];
const mockReviewersByClass = {
    "CPP117": [
        {
            id: 1,
            title: "Periodic Interrupt, Waveform Generation, and Time Measurement",
            subject: "CPP117",
            description: "Comprehensive guide to timer-based interrupts and waveform generation techniques",
            uploadDate: "2024-12-20",
            lastUpdated: "2024-12-22",
            fileType: "PDF",
            fileSize: "2.4 MB",
            pages: 45
        },
        {
            id: 2,
            title: "Microcontroller Architecture and Assembly Programming",
            subject: "CPP117",
            description: "Deep dive into microcontroller internals and low-level programming",
            uploadDate: "2024-12-18",
            lastUpdated: "2024-12-21",
            fileType: "PDF",
            fileSize: "3.1 MB",
            pages: 62
        },
        {
            id: 3,
            title: "Embedded Systems Communication Protocols",
            subject: "CPP117",
            description: "I2C, SPI, UART and other communication protocols explained",
            uploadDate: "2024-12-15",
            lastUpdated: "2024-12-19",
            fileType: "PDF",
            fileSize: "1.8 MB",
            pages: 38
        }
    ]
};
const mockTranscriptsByClass = {
    "CPP117": [
        {
            id: 1,
            title: "Lecture 1 - Introduction to Embedded Systems",
            subject: "CPP117",
            date: "2024-12-01",
            duration: "1h 30m",
            fileType: "DOCX",
            fileSize: "45 KB",
            status: "Processed"
        },
        {
            id: 2,
            title: "Lecture 2 - Timer and Counter Fundamentals",
            subject: "CPP117",
            date: "2024-12-05",
            duration: "2h 00m",
            fileType: "DOCX",
            fileSize: "58 KB",
            status: "Processed"
        },
        {
            id: 3,
            title: "Lecture 3 - Interrupt Handling Mechanisms",
            subject: "CPP117",
            date: "2024-12-08",
            duration: "1h 45m",
            fileType: "DOCX",
            fileSize: "52 KB",
            status: "Processed"
        }
    ]
};
const mockReviewers = [
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
const mockQuizzes = [
    {
        id: 1,
        title: "CS101 Midterm Quiz",
        subject: "CS101",
        description: "Test your knowledge on computer science fundamentals",
        totalQuestions: 25,
        duration: 30,
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
const mockLeaderboard = [
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
const mockRecentActivity = [
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
const mockStudyProgress = [
    {
        id: 1,
        reviewerId: 1,
        reviewerTitle: "Introduction to Computer Science",
        subject: "CS101",
        progress: 90,
        lastStudied: "2024-12-24",
        lastStudiedTime: "15:30",
        currentSection: "Chapter 5: Algorithms",
        totalSections: 8,
        completedSections: 7,
        link: "/student/reviewers/1?section=5"
    },
    {
        id: 2,
        reviewerId: 2,
        reviewerTitle: "Data Structures and Algorithms",
        subject: "CS102",
        progress: 65,
        lastStudied: "2024-12-23",
        lastStudiedTime: "10:20",
        currentSection: "Chapter 3: Trees and Graphs",
        totalSections: 6,
        completedSections: 4,
        link: "/student/reviewers/2?section=3"
    },
    {
        id: 3,
        reviewerId: 3,
        reviewerTitle: "Database Management Systems",
        subject: "CS201",
        progress: 40,
        lastStudied: "2024-12-22",
        lastStudiedTime: "14:45",
        currentSection: "Chapter 2: SQL Queries",
        totalSections: 5,
        completedSections: 2,
        link: "/student/reviewers/3?section=2"
    }
];
const mockRankSystem = {
    currentRank: {
        name: "Ascendant",
        level: 0,
        tier: "VII",
        xp: 10543,
        xpMin: 10500,
        xpMax: 999999,
        color: "#FF1493",
        icon: "/img/ascendant-badge.png"
    },
    allRanks: [
        // Learner Tiers
        {
            name: "Learner I",
            tier: "I",
            xpMin: 800,
            xpMax: 999,
            color: "#CD7F32",
            icon: "/img/learner-1.png"
        },
        {
            name: "Learner II",
            tier: "II",
            xpMin: 600,
            xpMax: 799,
            color: "#CD7F32",
            icon: "/img/learner-2.png"
        },
        {
            name: "Learner III",
            tier: "III",
            xpMin: 400,
            xpMax: 599,
            color: "#CD7F32",
            icon: "/img/learner-3.png"
        },
        {
            name: "Learner IV",
            tier: "IV",
            xpMin: 200,
            xpMax: 399,
            color: "#CD7F32",
            icon: "/img/learner-4.png"
        },
        {
            name: "Learner V",
            tier: "V",
            xpMin: 0,
            xpMax: 199,
            color: "#CD7F32",
            icon: "/img/learner-5.png"
        },
        // Habit Builder Tiers
        {
            name: "Habit Builder I",
            tier: "I",
            xpMin: 1800,
            xpMax: 1999,
            color: "#C0C0C0",
            icon: "/img/habit-builder-1.png"
        },
        {
            name: "Habit Builder II",
            tier: "II",
            xpMin: 1600,
            xpMax: 1799,
            color: "#C0C0C0",
            icon: "/img/habit-builder-2.png"
        },
        {
            name: "Habit Builder III",
            tier: "III",
            xpMin: 1400,
            xpMax: 1599,
            color: "#C0C0C0",
            icon: "/img/habit-builder-3.png"
        },
        {
            name: "Habit Builder IV",
            tier: "IV",
            xpMin: 1200,
            xpMax: 1399,
            color: "#C0C0C0",
            icon: "/img/habit-builder-4.png"
        },
        {
            name: "Habit Builder V",
            tier: "V",
            xpMin: 1000,
            xpMax: 1199,
            color: "#C0C0C0",
            icon: "/img/habit-builder-5.png"
        },
        // Growth Seeker Tiers
        {
            name: "Growth Seeker I",
            tier: "I",
            xpMin: 3200,
            xpMax: 3499,
            color: "#FFD700",
            icon: "/img/growth-seeker-1.png"
        },
        {
            name: "Growth Seeker II",
            tier: "II",
            xpMin: 2900,
            xpMax: 3199,
            color: "#FFD700",
            icon: "/img/growth-seeker-2.png"
        },
        {
            name: "Growth Seeker III",
            tier: "III",
            xpMin: 2600,
            xpMax: 2899,
            color: "#FFD700",
            icon: "/img/growth-seeker-3.png"
        },
        {
            name: "Growth Seeker IV",
            tier: "IV",
            xpMin: 2300,
            xpMax: 2599,
            color: "#FFD700",
            icon: "/img/growth-seeker-4.png"
        },
        {
            name: "Growth Seeker V",
            tier: "V",
            xpMin: 2000,
            xpMax: 2299,
            color: "#FFD700",
            icon: "/img/growth-seeker-5.png"
        },
        // Self-Driven Tiers
        {
            name: "Self-Driven I",
            tier: "I",
            xpMin: 5100,
            xpMax: 5499,
            color: "#90EE90",
            icon: "/img/self-driven-1.png"
        },
        {
            name: "Self-Driven II",
            tier: "II",
            xpMin: 4700,
            xpMax: 5099,
            color: "#90EE90",
            icon: "/img/self-driven-2.png"
        },
        {
            name: "Self-Driven III",
            tier: "III",
            xpMin: 4300,
            xpMax: 4699,
            color: "#90EE90",
            icon: "/img/self-driven-3.png"
        },
        {
            name: "Self-Driven IV",
            tier: "IV",
            xpMin: 3900,
            xpMax: 4299,
            color: "#90EE90",
            icon: "/img/self-driven-4.png"
        },
        {
            name: "Self-Driven V",
            tier: "V",
            xpMin: 3500,
            xpMax: 3899,
            color: "#90EE90",
            icon: "/img/self-driven-5.png"
        },
        // Mastery Tiers
        {
            name: "Mastery I",
            tier: "I",
            xpMin: 7500,
            xpMax: 7999,
            color: "#9370DB",
            icon: "/img/mastery-1.png"
        },
        {
            name: "Mastery II",
            tier: "II",
            xpMin: 7000,
            xpMax: 7499,
            color: "#9370DB",
            icon: "/img/mastery-2.png"
        },
        {
            name: "Mastery III",
            tier: "III",
            xpMin: 6500,
            xpMax: 6999,
            color: "#9370DB",
            icon: "/img/mastery-3.png"
        },
        {
            name: "Mastery IV",
            tier: "IV",
            xpMin: 6000,
            xpMax: 6499,
            color: "#9370DB",
            icon: "/img/mastery-4.png"
        },
        {
            name: "Mastery V",
            tier: "V",
            xpMin: 5500,
            xpMax: 5999,
            color: "#9370DB",
            icon: "/img/mastery-5.png"
        },
        // Peak Performer Tiers
        {
            name: "Peak Performer I",
            tier: "I",
            xpMin: 10000,
            xpMax: 10499,
            color: "#00CED1",
            icon: "/img/peak-performer-1.png"
        },
        {
            name: "Peak Performer II",
            tier: "II",
            xpMin: 9500,
            xpMax: 9999,
            color: "#00CED1",
            icon: "/img/peak-performer-2.png"
        },
        {
            name: "Peak Performer III",
            tier: "III",
            xpMin: 9000,
            xpMax: 9499,
            color: "#00CED1",
            icon: "/img/peak-performer-3.png"
        },
        {
            name: "Peak Performer IV",
            tier: "IV",
            xpMin: 8500,
            xpMax: 8999,
            color: "#00CED1",
            icon: "/img/peak-performer-4.png"
        },
        {
            name: "Peak Performer V",
            tier: "V",
            xpMin: 8000,
            xpMax: 8499,
            color: "#00CED1",
            icon: "/img/peak-performer-5.png"
        },
        // Ascendant (Highest Rank)
        {
            name: "Ascendant",
            tier: "VII",
            xpMin: 10500,
            xpMax: 999999,
            color: "#FF1493",
            icon: "/img/ascendant-badge.png"
        }
    ]
};
const mockAchievements = [
    {
        id: 1,
        name: "Week Warrior",
        description: "Maintained a 7-day study streak",
        icon: "🔥",
        category: "Streak",
        earned: true,
        earnedDate: "2024-12-21",
        rarity: "common"
    },
    {
        id: 2,
        name: "Quiz Master",
        description: "Completed 25 quizzes",
        icon: "🎯",
        category: "Quiz",
        earned: true,
        earnedDate: "2024-12-18",
        rarity: "rare"
    },
    {
        id: 3,
        name: "Perfect Score",
        description: "Got 100% on any quiz",
        icon: "⭐",
        category: "Quiz",
        earned: false,
        earnedDate: null,
        rarity: "legendary"
    },
    {
        id: 4,
        name: "Knowledge Seeker",
        description: "Downloaded 10 reviewers",
        icon: "📚",
        category: "Reviewer",
        earned: true,
        earnedDate: "2024-12-15",
        rarity: "common"
    },
    {
        id: 5,
        name: "Early Bird",
        description: "Complete a quiz before 8 AM",
        icon: "🌅",
        category: "Special",
        earned: true,
        earnedDate: "2024-12-10",
        rarity: "uncommon"
    },
    {
        id: 6,
        name: "Night Owl",
        description: "Study after midnight",
        icon: "🦉",
        category: "Special",
        earned: false,
        earnedDate: null,
        rarity: "uncommon"
    },
    {
        id: 7,
        name: "Speed Demon",
        description: "Complete a quiz in under 5 minutes",
        icon: "⚡",
        category: "Quiz",
        earned: false,
        earnedDate: null,
        rarity: "rare"
    },
    {
        id: 8,
        name: "Consistency King",
        description: "Maintained a 30-day study streak",
        icon: "👑",
        category: "Streak",
        earned: false,
        earnedDate: null,
        rarity: "legendary"
    },
    {
        id: 9,
        name: "First Steps",
        description: "Complete your first quiz",
        icon: "👣",
        category: "Milestone",
        earned: true,
        earnedDate: "2024-11-28",
        rarity: "common"
    },
    {
        id: 10,
        name: "Bookworm",
        description: "Downloaded 50 reviewers",
        icon: "🐛",
        category: "Reviewer",
        earned: false,
        earnedDate: null,
        rarity: "epic"
    },
    {
        id: 11,
        name: "Social Butterfly",
        description: "Top 10 on the leaderboard",
        icon: "🦋",
        category: "Leaderboard",
        earned: true,
        earnedDate: "2024-12-20",
        rarity: "rare"
    },
    {
        id: 12,
        name: "Champion",
        description: "Reach #1 on the leaderboard",
        icon: "🏆",
        category: "Leaderboard",
        earned: false,
        earnedDate: null,
        rarity: "legendary"
    }
];
const mockBadges = [
    {
        id: 1,
        name: "Bronze Star",
        description: "Reached Learner rank",
        icon: "⭐",
        color: "#CD7F32",
        earned: true,
        earnedDate: "2024-11-15"
    },
    {
        id: 2,
        name: "Silver Star",
        description: "Reached Habit Builder rank",
        icon: "⭐",
        color: "#C0C0C0",
        earned: true,
        earnedDate: "2024-11-25"
    },
    {
        id: 3,
        name: "Gold Star",
        description: "Reached Growth Seeker rank",
        icon: "⭐",
        color: "#FFD700",
        earned: true,
        earnedDate: "2024-12-05"
    },
    {
        id: 4,
        name: "Emerald Star",
        description: "Reached Self-Driven rank",
        icon: "⭐",
        color: "#90EE90",
        earned: true,
        earnedDate: "2024-12-12"
    },
    {
        id: 5,
        name: "Purple Star",
        description: "Reached Mastery rank",
        icon: "⭐",
        color: "#9370DB",
        earned: false,
        earnedDate: null
    },
    {
        id: 6,
        name: "Diamond Star",
        description: "Reached Peak Performer rank",
        icon: "⭐",
        color: "#00CED1",
        earned: false,
        earnedDate: null
    },
    {
        id: 7,
        name: "Legendary Star",
        description: "Reached Ascendant rank",
        icon: "⭐",
        color: "#FF1493",
        earned: true,
        earnedDate: "2024-12-22"
    }
];
const mockSearchData = [
    // Reviewers for search
    ...mockReviewers.map((reviewer)=>({
            id: `reviewer-${reviewer.id}`,
            type: "reviewer",
            title: reviewer.title,
            subject: reviewer.subject,
            link: `/student/reviewers/${reviewer.id}`
        })),
    // Quizzes for search
    ...mockQuizzes.map((quiz)=>({
            id: `quiz-${quiz.id}`,
            type: "quiz",
            title: quiz.title,
            subject: quiz.subject,
            link: `/student/quizzes/${quiz.id}`
        }))
];
const mockSubjects = [
    {
        code: "CS101",
        name: "Introduction to Computer Science",
        semester: 1,
        year: 1
    },
    {
        code: "CS102",
        name: "Data Structures and Algorithms",
        semester: 2,
        year: 1
    },
    {
        code: "CS103",
        name: "Object-Oriented Programming",
        semester: 1,
        year: 2
    },
    {
        code: "CS201",
        name: "Database Management Systems",
        semester: 2,
        year: 2
    },
    {
        code: "CS202",
        name: "Web Development Fundamentals",
        semester: 1,
        year: 3
    },
    {
        code: "CS301",
        name: "Operating Systems",
        semester: 2,
        year: 3
    },
    {
        code: "CS302",
        name: "Computer Networks",
        semester: 1,
        year: 4
    },
    {
        code: "CS303",
        name: "Software Engineering",
        semester: 2,
        year: 4
    }
];
const mockQuotes = [
    {
        id: 1,
        text: "The beautiful thing about learning is nobody can take it away from you.",
        author: "B.B. King",
        emoji: "📚"
    },
    {
        id: 2,
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
        emoji: "🌍"
    },
    {
        id: 3,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        emoji: "💡"
    },
    {
        id: 4,
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        emoji: "💪"
    },
    {
        id: 5,
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        emoji: "✨"
    },
    {
        id: 6,
        text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
        author: "Abigail Adams",
        emoji: "🎯"
    },
    {
        id: 7,
        text: "The expert in anything was once a beginner.",
        author: "Helen Hayes",
        emoji: "🌱"
    },
    {
        id: 8,
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        emoji: "⏰"
    },
    {
        id: 9,
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        emoji: "🚀"
    },
    {
        id: 10,
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        emoji: "🎬"
    },
    {
        id: 11,
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        emoji: "🏆"
    },
    {
        id: 12,
        text: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
        author: "Richard Feynman",
        emoji: "🔬"
    },
    {
        id: 13,
        text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
        author: "Brian Herbert",
        emoji: "🎁"
    },
    {
        id: 14,
        text: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln",
        emoji: "📈"
    }
];
const mockDailyMessages = [
    "Ready for another day of learning?",
    "Let's make today productive!",
    "Time to level up your knowledge!",
    "Every day is a chance to learn something new!",
    "Your future self will thank you for studying today!",
    "Knowledge is power - let's get started!",
    "Make today count - you've got this!"
];
}),
"[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PDFViewerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Document$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__ = __turbopack_context__.i("[project]/client/node_modules/react-pdf/dist/esm/Document.js [app-ssr] (ecmascript) <export default as Document>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__ = __turbopack_context__.i("[project]/client/node_modules/react-pdf/dist/esm/Page.js [app-ssr] (ecmascript) <export default as Page>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__ = __turbopack_context__.i("[project]/client/node_modules/pdfjs-dist/build/pdf.mjs [app-ssr] (ecmascript) <export * as pdfjs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/student/dashboard/mockData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
// PDF.js options - defined outside component to prevent recreation
const pdfOptions = {
    cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].version}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].version}/standard_fonts/`
};
function PDFViewerPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const classCode = params.classCode;
    const reviewerId = params.reviewerId;
    const [numPages, setNumPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pageNumber, setPageNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1.0);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [annotations, setAnnotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDrawing, setIsDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditToolbar, setShowEditToolbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [textBoxPosition, setTextBoxPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [textBoxPage, setTextBoxPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draggingAnnotation, setDraggingAnnotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Get reviewer data
    const reviewers = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockReviewersByClass"][classCode] || [];
    const reviewer = reviewers.find((r)=>r.id === parseInt(reviewerId));
    // For demo purposes, we'll use a sample PDF URL
    // In production, this would come from your backend/storage
    const pdfUrl = "/sample.pdf"; // You'll need to add a sample PDF to your public folder
    // Set up PDF.js worker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__pdfjs$3e$__["pdfjs"].GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load saved annotations from localStorage
        const savedAnnotations = localStorage.getItem(`annotations-${classCode}-${reviewerId}`);
        if (savedAnnotations) {
            setAnnotations(JSON.parse(savedAnnotations));
        }
    }, [
        classCode,
        reviewerId
    ]);
    const onDocumentLoadSuccess = ({ numPages })=>{
        setNumPages(numPages);
    };
    const changePage = (offset)=>{
        setPageNumber((prevPageNumber)=>{
            const newPage = prevPageNumber + offset;
            return Math.max(1, Math.min(newPage, numPages));
        });
    };
    const handleZoomIn = ()=>{
        setScale((prevScale)=>Math.min(prevScale + 0.2, 3.0));
    };
    const handleZoomOut = ()=>{
        setScale((prevScale)=>Math.max(prevScale - 0.2, 0.5));
    };
    const handleDownload = ()=>{
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${reviewer?.title || 'document'}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };
    const toggleFullscreen = ()=>{
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };
    const handleToolSelect = (tool)=>{
        setActiveTool(activeTool === tool ? null : tool);
        setTextBoxPosition(null);
    };
    const handleSaveAnnotations = ()=>{
        localStorage.setItem(`annotations-${classCode}-${reviewerId}`, JSON.stringify(annotations));
        alert('Annotations saved successfully!');
    };
    const handleClearAnnotations = ()=>{
        if (window.confirm('Are you sure you want to clear all annotations?')) {
            setAnnotations([]);
            localStorage.removeItem(`annotations-${classCode}-${reviewerId}`);
            setActiveTool(null);
        }
    };
    const handleAddNote = ()=>{
        const noteText = prompt('Enter your note:');
        if (noteText) {
            const newAnnotation = {
                id: Date.now(),
                type: 'note',
                page: pageNumber,
                text: noteText,
                timestamp: new Date().toISOString()
            };
            setAnnotations([
                ...annotations,
                newAnnotation
            ]);
        }
    };
    const handleTextSelection = (e, pageNum)=>{
        if (activeTool !== 'highlight') return;
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        if (selectedText) {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const pageElement = e.currentTarget;
            const pageRect = pageElement.getBoundingClientRect();
            const newAnnotation = {
                id: Date.now(),
                type: 'highlight',
                page: pageNum,
                text: selectedText,
                position: {
                    x: (rect.left - pageRect.left) / pageRect.width * 100,
                    y: (rect.top - pageRect.top) / pageRect.height * 100,
                    width: rect.width / pageRect.width * 100,
                    height: rect.height / pageRect.height * 100
                },
                timestamp: new Date().toISOString()
            };
            setAnnotations([
                ...annotations,
                newAnnotation
            ]);
            selection.removeAllRanges();
        }
    };
    const handlePageClick = (e, pageNum)=>{
        if (activeTool === 'text') {
            const pageElement = e.currentTarget;
            const rect = pageElement.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 100;
            const y = (e.clientY - rect.top) / rect.height * 100;
            setTextBoxPosition({
                x,
                y
            });
            setTextBoxPage(pageNum);
        } else if (activeTool === 'clear') {
            // Clear mode - clicking background does nothing
            return;
        }
    };
    const handleTextBoxSubmit = (text)=>{
        if (text && textBoxPosition && textBoxPage) {
            const newAnnotation = {
                id: Date.now(),
                type: 'text',
                page: textBoxPage,
                text: text,
                position: textBoxPosition,
                timestamp: new Date().toISOString()
            };
            setAnnotations([
                ...annotations,
                newAnnotation
            ]);
            setTextBoxPosition(null);
            setTextBoxPage(null);
            setActiveTool(null);
        }
    };
    const handleDeleteAnnotation = (annotationId, e)=>{
        if (e) {
            e.stopPropagation();
        }
        if (activeTool === 'clear') {
            setAnnotations(annotations.filter((a)=>a.id !== annotationId));
        }
    };
    const handleAddText = ()=>{
        setActiveTool('text');
    };
    const handleTextMouseDown = (e, annotation, pageNum)=>{
        if (activeTool === 'clear') return; // Don't drag in eraser mode
        e.stopPropagation();
        const pageElement = e.currentTarget.closest('.pdf-page-container');
        const rect = pageElement.getBoundingClientRect();
        const clickX = (e.clientX - rect.left) / rect.width * 100;
        const clickY = (e.clientY - rect.top) / rect.height * 100;
        setDraggingAnnotation(annotation.id);
        setDragOffset({
            x: clickX - annotation.position.x,
            y: clickY - annotation.position.y
        });
    };
    const handleMouseMove = (e, pageNum)=>{
        if (!draggingAnnotation) return;
        const pageElement = e.currentTarget;
        const rect = pageElement.getBoundingClientRect();
        const newX = (e.clientX - rect.left) / rect.width * 100 - dragOffset.x;
        const newY = (e.clientY - rect.top) / rect.height * 100 - dragOffset.y;
        // Clamp values to keep text within page bounds
        const clampedX = Math.max(0, Math.min(100, newX));
        const clampedY = Math.max(0, Math.min(100, newY));
        setAnnotations(annotations.map((ann)=>ann.id === draggingAnnotation ? {
                ...ann,
                position: {
                    ...ann.position,
                    x: clampedX,
                    y: clampedY
                }
            } : ann));
    };
    const handleMouseUp = ()=>{
        if (draggingAnnotation) {
            setDraggingAnnotation(null);
            setDragOffset({
                x: 0,
                y: 0
            });
        }
    };
    if (!reviewer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pdf-viewer-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "error-message",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Reviewer not found"
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/student/reviewers/${classCode}`),
                        children: "Go Back"
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                lineNumber: 270,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
            lineNumber: 269,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pdf-viewer-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pdf-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "back-btn",
                                onClick: ()=>router.push(`/student/reviewers/${classCode}`),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                        className: "back-icon"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "document-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: reviewer.title
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "document-info",
                                        children: [
                                            reviewer.subject,
                                            " • ",
                                            reviewer.fileSize
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn",
                                onClick: ()=>setShowEditToolbar(!showEditToolbar),
                                title: showEditToolbar ? "Hide Annotation Toolbar" : "Show Annotation Toolbar",
                                children: showEditToolbar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEyeSlash"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 301,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 301,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn",
                                onClick: toggleDarkMode,
                                title: darkMode ? "Light Mode" : "Dark Mode",
                                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSun"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 304,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMoon"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 304,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn",
                                onClick: handleDownload,
                                title: "Download PDF",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn",
                                onClick: toggleFullscreen,
                                title: isFullscreen ? "Exit Fullscreen" : "Fullscreen",
                                children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCompress"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 310,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaExpand"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 310,
                                    columnNumber: 46
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            showEditToolbar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "edit-toolbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "edit-tools",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `tool-btn ${activeTool === 'highlight' ? 'active' : ''}`,
                            onClick: ()=>handleToolSelect('highlight'),
                            title: "Highlight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHighlighter"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Highlight"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `tool-btn ${activeTool === 'note' ? 'active' : ''}`,
                            onClick: handleAddNote,
                            title: "Add Note",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStickyNote"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Note"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `tool-btn ${activeTool === 'text' ? 'active' : ''}`,
                            onClick: handleAddText,
                            title: "Add Text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFont"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Text"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "tool-btn",
                            onClick: handleClearAnnotations,
                            title: "Clear All Annotations",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEraser"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Clear All"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `tool-btn ${activeTool === 'clear' ? 'active' : ''}`,
                            onClick: ()=>handleToolSelect('clear'),
                            title: "Eraser Mode",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEraser"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Eraser"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "tool-btn save-btn",
                            onClick: handleSaveAnnotations,
                            title: "Save Annotations",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSave"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "viewer-main-content",
                children: [
                    annotations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "annotations-sidebar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    "Annotations (",
                                    annotations.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "annotations-list",
                                children: annotations.map((annotation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "annotation-item",
                                        onClick: ()=>setPageNumber(annotation.page),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "annotation-header",
                                                children: [
                                                    annotation.type === 'note' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStickyNote"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 385,
                                                        columnNumber: 52
                                                    }, this),
                                                    annotation.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFont"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 386,
                                                        columnNumber: 52
                                                    }, this),
                                                    annotation.type === 'highlight' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHighlighter"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 387,
                                                        columnNumber: 57
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "annotation-page",
                                                        children: [
                                                            "Page ",
                                                            annotation.page
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 388,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                lineNumber: 384,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "annotation-text",
                                                children: annotation.text
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                lineNumber: 390,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "delete-annotation",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setAnnotations(annotations.filter((a)=>a.id !== annotation.id));
                                                },
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, annotation.id, true, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 379,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `pdf-content ${activeTool ? `tool-active tool-${activeTool}` : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "zoom-controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "zoom-btn",
                                        onClick: handleZoomOut,
                                        disabled: scale <= 0.5,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearchMinus"], {}, void 0, false, {
                                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                            lineNumber: 411,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 410,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "zoom-level",
                                        children: [
                                            Math.round(scale * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 413,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "zoom-btn",
                                        onClick: handleZoomIn,
                                        disabled: scale >= 3.0,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearchPlus"], {}, void 0, false, {
                                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                            lineNumber: 415,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 414,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 409,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pdf-document-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Document$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Document$3e$__["Document"], {
                                    file: pdfUrl,
                                    onLoadSuccess: onDocumentLoadSuccess,
                                    options: pdfOptions,
                                    loading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "loading-spinner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "spinner"
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Loading PDF..."
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, void 0),
                                    error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "error-message",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Failed to load PDF. Please make sure a sample PDF exists in the public folder."
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "error-note",
                                                children: 'For demo: Add a file named "sample.pdf" to the public folder'
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, void 0),
                                    children: Array.from(new Array(numPages), (el, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pdf-page-container",
                                            onMouseUp: (e)=>handleTextSelection(e, index + 1),
                                            onClick: (e)=>handlePageClick(e, index + 1),
                                            onMouseMove: (e)=>handleMouseMove(e, index + 1),
                                            onMouseUpCapture: handleMouseUp,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$pdf$2f$dist$2f$esm$2f$Page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Page$3e$__["Page"], {
                                                    pageNumber: index + 1,
                                                    scale: scale,
                                                    renderTextLayer: true,
                                                    renderAnnotationLayer: true,
                                                    className: "pdf-page"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "page-number-label",
                                                    children: [
                                                        "Page ",
                                                        index + 1,
                                                        " of ",
                                                        numPages
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                    lineNumber: 455,
                                                    columnNumber: 17
                                                }, this),
                                                annotations.filter((ann)=>ann.page === index + 1 && ann.type === 'highlight' && ann.position).map((annotation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `annotation-overlay highlight-overlay ${activeTool === 'clear' ? 'erasable' : ''}`,
                                                        style: {
                                                            left: `${annotation.position.x}%`,
                                                            top: `${annotation.position.y}%`,
                                                            width: `${annotation.position.width}%`,
                                                            height: `${annotation.position.height}%`
                                                        },
                                                        onClick: (e)=>handleDeleteAnnotation(annotation.id, e),
                                                        title: activeTool === 'clear' ? 'Click to erase' : annotation.text
                                                    }, annotation.id, false, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 461,
                                                        columnNumber: 21
                                                    }, this)),
                                                annotations.filter((ann)=>ann.page === index + 1 && ann.type === 'text' && ann.position).map((annotation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `annotation-overlay text-overlay ${activeTool === 'clear' ? 'erasable' : ''} ${draggingAnnotation === annotation.id ? 'dragging' : ''}`,
                                                        style: {
                                                            left: `${annotation.position.x}%`,
                                                            top: `${annotation.position.y}%`
                                                        },
                                                        onMouseDown: (e)=>handleTextMouseDown(e, annotation, index + 1),
                                                        onClick: (e)=>{
                                                            if (activeTool === 'clear') {
                                                                handleDeleteAnnotation(annotation.id, e);
                                                            }
                                                        },
                                                        title: activeTool === 'clear' ? 'Click to erase' : 'Drag to move',
                                                        children: annotation.text
                                                    }, annotation.id, false, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 479,
                                                        columnNumber: 21
                                                    }, this)),
                                                textBoxPosition && textBoxPage === index + 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-box-input",
                                                    style: {
                                                        left: `${textBoxPosition.x}%`,
                                                        top: `${textBoxPosition.y}%`
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        autoFocus: true,
                                                        placeholder: "Enter text...",
                                                        onKeyDown: (e)=>{
                                                            if (e.key === 'Enter') {
                                                                handleTextBoxSubmit(e.target.value);
                                                            } else if (e.key === 'Escape') {
                                                                setTextBoxPosition(null);
                                                                setTextBoxPage(null);
                                                            }
                                                        },
                                                        onBlur: (e)=>{
                                                            if (e.target.value.trim()) {
                                                                handleTextBoxSubmit(e.target.value);
                                                            } else {
                                                                setTextBoxPosition(null);
                                                                setTextBoxPage(null);
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this),
                                                annotations.filter((ann)=>ann.page === index + 1 && ann.type === 'note').map((annotation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `annotation annotation-${annotation.type}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "annotation-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStickyNote"], {
                                                                    className: "annotation-icon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                                    lineNumber: 537,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: annotation.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                            lineNumber: 536,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, annotation.id, false, {
                                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                                        lineNumber: 535,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, `page_${index + 1}`, true, {
                                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 421,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 420,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-navigation",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "page-info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Total Pages: ",
                                            numPages || '--'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 550,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 549,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 548,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 407,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                lineNumber: 372,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d88be221._.js.map