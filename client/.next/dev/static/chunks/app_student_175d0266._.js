(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/student/dashboard/mockData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for UI visualization
// This file acts as a placeholder until connected to the database
// User Profile Data
__turbopack_context__.s([
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
    "mockRankDetails",
    ()=>mockRankDetails,
    "mockRecentActivity",
    ()=>mockRecentActivity,
    "mockReviewers",
    ()=>mockReviewers,
    "mockSearchData",
    ()=>mockSearchData,
    "mockSubjects",
    ()=>mockSubjects,
    "mockUserProfile",
    ()=>mockUserProfile
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
    streakIcon: "🔥"
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
const mockRankDetails = {
    rankName: "Ascendant",
    tier: 3,
    level: 42,
    currentXP: 10543,
    nextRankXP: 15000,
    xpProgress: 65,
    globalRank: 4,
    courseRank: 2,
    xpBreakdown: {
        quizzes: 6500,
        streaks: 2100,
        reviewers: 1543,
        achievements: 400
    },
    rankHierarchy: [
        {
            name: "Bronze",
            requiredXP: 0,
            achieved: true,
            current: false
        },
        {
            name: "Silver",
            requiredXP: 1000,
            achieved: true,
            current: false
        },
        {
            name: "Gold",
            requiredXP: 3000,
            achieved: true,
            current: false
        },
        {
            name: "Platinum",
            requiredXP: 6000,
            achieved: true,
            current: false
        },
        {
            name: "Ascendant",
            requiredXP: 10000,
            achieved: true,
            current: true
        },
        {
            name: "Diamond",
            requiredXP: 15000,
            achieved: false,
            current: false
        },
        {
            name: "Master",
            requiredXP: 25000,
            achieved: false,
            current: false
        },
        {
            name: "Legend",
            requiredXP: 40000,
            achieved: false,
            current: false
        }
    ],
    recentMilestones: [
        {
            title: "Reached Ascendant Rank",
            date: "2024-12-20",
            icon: "🏆",
            xpGained: 500
        },
        {
            title: "Completed 25 Quizzes",
            date: "2024-12-18",
            icon: "🎯",
            xpGained: 250
        },
        {
            title: "7-Day Study Streak",
            date: "2024-12-21",
            icon: "🔥",
            xpGained: 300
        }
    ]
};
const mockAchievements = [
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
        earnedDate: null,
        progress: {
            current: 0,
            required: 1,
            percentage: 0
        }
    },
    {
        id: 4,
        name: "Knowledge Seeker",
        description: "Downloaded 10 reviewers",
        icon: "📚",
        earned: true,
        earnedDate: "2024-12-15"
    },
    {
        id: 5,
        name: "Early Bird",
        description: "Complete a quiz before 8 AM",
        icon: "🌅",
        earned: false,
        earnedDate: null,
        progress: {
            current: 0,
            required: 1,
            percentage: 0
        }
    },
    {
        id: 6,
        name: "Night Owl",
        description: "Study past midnight 5 times",
        icon: "🦉",
        earned: false,
        earnedDate: null,
        progress: {
            current: 2,
            required: 5,
            percentage: 40
        }
    },
    {
        id: 7,
        name: "Speed Demon",
        description: "Complete a quiz in under 5 minutes",
        icon: "⚡",
        earned: true,
        earnedDate: "2024-12-10"
    },
    {
        id: 8,
        name: "Consistency King",
        description: "Maintain a 30-day study streak",
        icon: "👑",
        earned: false,
        earnedDate: null,
        progress: {
            current: 7,
            required: 30,
            percentage: 23
        }
    },
    {
        id: 9,
        name: "Social Butterfly",
        description: "Share 10 reviewers with classmates",
        icon: "🦋",
        earned: false,
        earnedDate: null,
        progress: {
            current: 3,
            required: 10,
            percentage: 30
        }
    },
    {
        id: 10,
        name: "Professor's Favorite",
        description: "Get top score in 5 different subjects",
        icon: "🎓",
        earned: false,
        earnedDate: null,
        progress: {
            current: 1,
            required: 5,
            percentage: 20
        }
    }
];
const mockBadges = [
    {
        id: 1,
        name: "Bronze Scholar",
        category: "Rank",
        description: "Achieved Bronze rank",
        imageUrl: "/img/bronze-badge.png",
        earned: true,
        earnedDate: "2024-11-01"
    },
    {
        id: 2,
        name: "Silver Scholar",
        category: "Rank",
        description: "Achieved Silver rank",
        imageUrl: "/img/silver-badge.png",
        earned: true,
        earnedDate: "2024-11-15"
    },
    {
        id: 3,
        name: "Gold Scholar",
        category: "Rank",
        description: "Achieved Gold rank",
        imageUrl: "/img/gold-badge.png",
        earned: true,
        earnedDate: "2024-12-01"
    },
    {
        id: 4,
        name: "Platinum Scholar",
        category: "Rank",
        description: "Achieved Platinum rank",
        imageUrl: "/img/platinum-badge.png",
        earned: true,
        earnedDate: "2024-12-10"
    },
    {
        id: 5,
        name: "Ascendant Scholar",
        category: "Rank",
        description: "Achieved Ascendant rank",
        imageUrl: "/img/ascendant-badge.png",
        earned: true,
        earnedDate: "2024-12-20"
    },
    {
        id: 6,
        name: "Diamond Scholar",
        category: "Rank",
        description: "Achieved Diamond rank",
        imageUrl: "/img/diamond-badge.png",
        earned: false,
        earnedDate: null
    },
    {
        id: 7,
        name: "Quiz Novice",
        category: "Quiz",
        description: "Completed 5 quizzes",
        imageUrl: "/img/quiz-novice-badge.png",
        earned: true,
        earnedDate: "2024-11-20"
    },
    {
        id: 8,
        name: "Quiz Expert",
        category: "Quiz",
        description: "Completed 50 quizzes",
        imageUrl: "/img/quiz-expert-badge.png",
        earned: false,
        earnedDate: null
    },
    {
        id: 9,
        name: "Streak Starter",
        category: "Streak",
        description: "3-day study streak",
        imageUrl: "/img/streak-starter-badge.png",
        earned: true,
        earnedDate: "2024-12-15"
    },
    {
        id: 10,
        name: "Streak Master",
        category: "Streak",
        description: "30-day study streak",
        imageUrl: "/img/streak-master-badge.png",
        earned: false,
        earnedDate: null
    },
    {
        id: 11,
        name: "Subject Champion - CS",
        category: "Subject",
        description: "Top scorer in Computer Science",
        imageUrl: "/img/cs-champion-badge.png",
        earned: true,
        earnedDate: "2024-12-12"
    },
    {
        id: 12,
        name: "Subject Champion - Math",
        category: "Subject",
        description: "Top scorer in Mathematics",
        imageUrl: "/img/math-champion-badge.png",
        earned: false,
        earnedDate: null
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
const mockDailyMessages = [
    "Ready for another day of learning?",
    "Let's make today productive!",
    "Time to level up your knowledge!",
    "Every day is a chance to learn something new!",
    "Your future self will thank you for studying today!",
    "Knowledge is power - let's get started!",
    "Make today count - you've got this!"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/student/rank/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RankPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/student/dashboard/mockData.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './styles.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function RankPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rank-page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "rank-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "back-btn",
                        onClick: ()=>router.push("/student/dashboard"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {}, void 0, false, {
                                fileName: "[project]/app/student/rank/page.jsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            " Back to Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/student/rank/page.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Rank & Achievements"
                    }, void 0, false, {
                        fileName: "[project]/app/student/rank/page.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/student/rank/page.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rank-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rank-overview-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rank-display-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rank-badge-large",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/img/ascendant-badge.png",
                                        alt: "Rank Badge"
                                    }, void 0, false, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/student/rank/page.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rank-details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].rankName
                                        }, void 0, false, {
                                            fileName: "[project]/app/student/rank/page.jsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "rank-tier",
                                            children: [
                                                "Tier ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].tier
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/student/rank/page.jsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "xp-section",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "xp-bar-large",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "xp-fill-large",
                                                        style: {
                                                            width: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].xpProgress}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 36,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/student/rank/page.jsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "xp-text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "current-xp",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].currentXP.toLocaleString(),
                                                                " XP"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 42,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "next-rank",
                                                            children: [
                                                                "Next Rank: ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].nextRankXP.toLocaleString(),
                                                                " XP"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 43,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/student/rank/page.jsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/student/rank/page.jsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rank-stats",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stat-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stat-label",
                                                            children: "Global Rank"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 48,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stat-value",
                                                            children: [
                                                                "#",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].globalRank
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 49,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/student/rank/page.jsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stat-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stat-label",
                                                            children: "Course Rank"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 52,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stat-value",
                                                            children: [
                                                                "#",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].courseRank
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 53,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/student/rank/page.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "stat-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stat-label",
                                                            children: "Level"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 56,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "stat-value",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].level
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 57,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/student/rank/page.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/student/rank/page.jsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/student/rank/page.jsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/student/rank/page.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/student/rank/page.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rank-tabs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `rank-tab ${activeTab === "overview" ? "active" : ""}`,
                                onClick: ()=>setActiveTab("overview"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrophy"], {}, void 0, false, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    " Overview"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/rank/page.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `rank-tab ${activeTab === "achievements" ? "active" : ""}`,
                                onClick: ()=>setActiveTab("achievements"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    " Achievements"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/rank/page.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `rank-tab ${activeTab === "badges" ? "active" : ""}`,
                                onClick: ()=>setActiveTab("badges"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMedal"], {}, void 0, false, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    " Badges"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/rank/page.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/student/rank/page.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tab-content",
                        children: [
                            activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overview-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overview-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overview-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "XP Breakdown"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "xp-breakdown",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xp-source",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-name",
                                                                        children: "Quizzes Completed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-xp",
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].xpBreakdown.quizzes,
                                                                            " XP"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 97,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 95,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xp-source",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-name",
                                                                        children: "Study Streaks"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 100,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-xp",
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].xpBreakdown.streaks,
                                                                            " XP"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 99,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xp-source",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-name",
                                                                        children: "Reviewers Downloaded"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 104,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-xp",
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].xpBreakdown.reviewers,
                                                                            " XP"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 103,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "xp-source",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-name",
                                                                        children: "Achievements"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 108,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "source-xp",
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].xpBreakdown.achievements,
                                                                            " XP"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overview-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Rank Journey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rank-journey",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].rankHierarchy.map((rank, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `rank-step ${rank.current ? "current" : ""} ${rank.achieved ? "achieved" : ""}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rank-step-icon",
                                                                        children: rank.achieved ? "✓" : rank.current ? "●" : "○"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rank-step-info",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rank-step-name",
                                                                                children: rank.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                                lineNumber: 127,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rank-step-xp",
                                                                                children: [
                                                                                    rank.requiredXP.toLocaleString(),
                                                                                    " XP"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                                lineNumber: 128,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 119,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "recent-milestones",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Recent Milestones"
                                            }, void 0, false, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "milestones-list",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockRankDetails"].recentMilestones.map((milestone, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "milestone-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "milestone-icon",
                                                                children: milestone.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "milestone-info",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "milestone-title",
                                                                        children: milestone.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "milestone-date",
                                                                        children: milestone.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "milestone-xp",
                                                                children: [
                                                                    "+",
                                                                    milestone.xpGained,
                                                                    " XP"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/rank/page.jsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            activeTab === "achievements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "achievements-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "achievements-summary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Achievements Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAchievements"].filter((a)=>a.earned).length,
                                                    " of ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAchievements"].length,
                                                    " unlocked"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "achievements-grid",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockAchievements"].map((achievement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `achievement-card ${achievement.earned ? "earned" : "locked"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "achievement-icon",
                                                        children: achievement.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "achievement-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                children: achievement.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 169,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: achievement.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this),
                                                            achievement.earned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "earned-date",
                                                                children: [
                                                                    "Earned: ",
                                                                    achievement.earnedDate
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 172,
                                                                columnNumber: 25
                                                            }, this),
                                                            !achievement.earned && achievement.progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "achievement-progress",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "progress-bar",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "progress-fill",
                                                                            style: {
                                                                                width: `${achievement.progress.percentage}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                                            lineNumber: 177,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "progress-text",
                                                                        children: [
                                                                            achievement.progress.current,
                                                                            "/",
                                                                            achievement.progress.required
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 175,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, achievement.id, true, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/rank/page.jsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            activeTab === "badges" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "badges-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "badges-summary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Badge Collection"
                                            }, void 0, false, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBadges"].filter((b)=>b.earned).length,
                                                    " of ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBadges"].length,
                                                    " collected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "badges-grid",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockBadges"].map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `badge-card ${badge.earned ? "earned" : "locked"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "badge-image-container",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: badge.imageUrl,
                                                            alt: badge.name,
                                                            className: !badge.earned ? "grayscale" : ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/student/rank/page.jsx",
                                                            lineNumber: 207,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "badge-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                children: badge.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 214,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "badge-category",
                                                                children: badge.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 215,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "badge-description",
                                                                children: badge.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 216,
                                                                columnNumber: 23
                                                            }, this),
                                                            badge.earned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "earned-date",
                                                                children: [
                                                                    "Earned: ",
                                                                    badge.earnedDate
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 218,
                                                                columnNumber: 25
                                                            }, this),
                                                            !badge.earned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "locked-message",
                                                                children: "Keep studying to unlock!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/student/rank/page.jsx",
                                                                lineNumber: 221,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/student/rank/page.jsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, badge.id, true, {
                                                fileName: "[project]/app/student/rank/page.jsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/student/rank/page.jsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/student/rank/page.jsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/student/rank/page.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/student/rank/page.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/student/rank/page.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(RankPage, "qMpUukrFGLc4Ci7heJFr23rdtHU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RankPage;
var _c;
__turbopack_context__.k.register(_c, "RankPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_student_175d0266._.js.map