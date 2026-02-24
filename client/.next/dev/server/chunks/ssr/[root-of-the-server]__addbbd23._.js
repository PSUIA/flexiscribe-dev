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
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

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
    "mockAvailableLessons",
    ()=>mockAvailableLessons,
    "mockBadges",
    ()=>mockBadges,
    "mockCompletedQuizzes",
    ()=>mockCompletedQuizzes,
    "mockDailyMessages",
    ()=>mockDailyMessages,
    "mockDashboardStats",
    ()=>mockDashboardStats,
    "mockLeaderboard",
    ()=>mockLeaderboard,
    "mockNotifications",
    ()=>mockNotifications,
    "mockQuizQuestions",
    ()=>mockQuizQuestions,
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
    profileImage: "/img/learner-1.png"
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
const mockCompletedQuizzes = [
    {
        id: 1,
        lesson: "Periodic Interrupt, Waveform Generation, and Time Measurement",
        subject: "CPP117",
        quizType: "MCQ",
        numQuestions: 10,
        accuracy: 80,
        completedDate: "2024-12-28",
        lastAccessedDate: "2024-12-31T10:30:00",
        score: 8,
        totalScore: 10
    },
    {
        id: 2,
        lesson: "Data Acquisition, Control, Sensors, and Actuators",
        subject: "CPP117",
        quizType: "Fill-in",
        numQuestions: 20,
        accuracy: 90,
        completedDate: "2024-12-27",
        lastAccessedDate: "2024-12-30T15:20:00",
        score: 18,
        totalScore: 20
    },
    {
        id: 3,
        lesson: "Asynchronous Serial and Synchronous Serial Communication",
        subject: "CPP117",
        quizType: "Flashcard",
        numQuestions: 20,
        accuracy: 70,
        completedDate: "2024-12-26",
        lastAccessedDate: "2024-12-29T09:15:00",
        score: 14,
        totalScore: 20
    },
    {
        id: 4,
        lesson: "Microcontroller Architecture and Assembly Programming",
        subject: "CPP117",
        quizType: "MCQ",
        numQuestions: 15,
        accuracy: 85,
        completedDate: "2024-12-25",
        lastAccessedDate: "2024-12-28T14:45:00",
        score: 13,
        totalScore: 15
    },
    {
        id: 5,
        lesson: "Embedded Systems Communication Protocols",
        subject: "CPP117",
        quizType: "Fill-in",
        numQuestions: 12,
        accuracy: 75,
        completedDate: "2024-12-24",
        lastAccessedDate: "2024-12-27T11:30:00",
        score: 9,
        totalScore: 12
    }
];
const mockQuizQuestions = {
    // MCQ Quiz - Quiz ID 1
    1: {
        quizType: "MCQ",
        questions: [
            {
                id: 1,
                question: "What is polling?",
                options: [
                    "state of continuous monitoring",
                    "request generated by an instruction",
                    "electronic alerting signal",
                    "signal that temporarily halts CPU execution"
                ],
                correctAnswer: 0,
                hint: "Think about continuous checking of status"
            },
            {
                id: 2,
                question: "What does PWM stand for?",
                options: [
                    "Power Wave Modulation",
                    "Pulse Width Modulation",
                    "Periodic Wave Management",
                    "Power Width Management"
                ],
                correctAnswer: 1,
                hint: "It's a technique used to control analog circuits with digital outputs"
            },
            {
                id: 3,
                question: "Which timer mode is used for waveform generation?",
                options: [
                    "Normal Mode",
                    "CTC Mode",
                    "Fast PWM Mode",
                    "Phase Correct PWM Mode"
                ],
                correctAnswer: 2,
                hint: "This mode generates high-frequency PWM waveforms"
            }
        ]
    },
    // Fill-in Quiz - Quiz ID 2
    2: {
        quizType: "Fill-in",
        questions: [
            {
                id: 1,
                question: "An interrupt is a signal that __________ halts the CPU's normal execution to respond to an event.",
                correctAnswer: "temporarily",
                hint: "It's not permanent, just a brief pause"
            },
            {
                id: 2,
                question: "ADC stands for __________ to Digital Converter.",
                correctAnswer: "Analog",
                hint: "It converts continuous signals to discrete values"
            },
            {
                id: 3,
                question: "A __________ is a device that converts physical quantities into electrical signals.",
                correctAnswer: "sensor",
                hint: "These devices detect changes in the environment"
            }
        ]
    },
    // Flashcard Quiz - Quiz ID 3
    3: {
        quizType: "Flashcard",
        questions: [
            {
                id: 1,
                front: "PERIODIC INTERRUPT",
                back: "Events that occur at regular, fixed time intervals, triggered by a hardware timer.",
                hint: "Think about events happening at consistent intervals"
            },
            {
                id: 2,
                front: "ASYNCHRONOUS SERIAL",
                back: "Data transmission where each byte is sent independently with start and stop bits, without a shared clock signal.",
                hint: "Communication without a common timing reference"
            },
            {
                id: 3,
                front: "SYNCHRONOUS SERIAL",
                back: "Data transmission where data bits are sent in sync with a clock signal shared between devices.",
                hint: "Communication with a shared timing signal"
            }
        ]
    }
};
const mockAvailableLessons = [
    {
        id: 1,
        title: "Periodic Interrupt, Waveform Generation, and Time Measurement",
        subject: "CPP117"
    },
    {
        id: 2,
        title: "Data Acquisition, Control, Sensors, and Actuators",
        subject: "CPP117"
    },
    {
        id: 3,
        title: "Asynchronous Serial and Synchronous Serial Communication",
        subject: "CPP117"
    },
    {
        id: 4,
        title: "Microcontroller Architecture and Assembly Programming",
        subject: "CPP117"
    },
    {
        id: 5,
        title: "Embedded Systems Communication Protocols",
        subject: "CPP117"
    },
    {
        id: 6,
        title: "Timer and Counter Fundamentals",
        subject: "CPP117"
    },
    {
        id: 7,
        title: "Interrupt Handling Mechanisms",
        subject: "CPP117"
    },
    {
        id: 8,
        title: "ADC and DAC Interfaces",
        subject: "CPP117"
    }
];
const mockLeaderboard = [
    {
        rank: 1,
        username: "erunim",
        studentId: "2201000",
        xp: 10501,
        level: "Ascendant",
        streak: 20,
        quizzesTaken: 45,
        averageScore: 92
    },
    {
        rank: 2,
        username: "yuriTheGreat",
        studentId: "2201001",
        xp: 10000,
        level: "Peak Performer I",
        streak: 16,
        quizzesTaken: 42,
        averageScore: 89
    },
    {
        rank: 3,
        username: "bellaTrix",
        studentId: "2201002",
        xp: 8499,
        level: "Peak Performer V",
        streak: 14,
        quizzesTaken: 38,
        averageScore: 87
    },
    {
        rank: 4,
        username: "mollyMoon",
        studentId: "2201003",
        xp: 7500,
        level: "Mastery I",
        streak: 13,
        quizzesTaken: 28,
        averageScore: 85
    },
    {
        rank: 5,
        username: "ranNoir",
        studentId: "22041004",
        xp: 5999,
        level: "Mastery V",
        streak: 12,
        quizzesTaken: 25,
        averageScore: 83
    },
    {
        rank: 6,
        username: "monaLisa",
        studentId: "22041005",
        xp: 5100,
        level: "Self-Driven I",
        streak: 11,
        quizzesTaken: 23,
        averageScore: 80
    },
    {
        rank: 7,
        username: "skyWalker",
        studentId: "22041006",
        xp: 3899,
        level: "Self-Driven V",
        streak: 10,
        quizzesTaken: 21,
        averageScore: 78
    },
    {
        rank: 8,
        username: "shinObix",
        studentId: "22041007",
        xp: 3200,
        level: "Growth Seeker I",
        streak: 9,
        quizzesTaken: 19,
        averageScore: 76
    },
    {
        rank: 9,
        username: "margotRoux",
        studentId: "22041008",
        xp: 2299,
        level: "Growth Seeker V",
        streak: 8,
        quizzesTaken: 17,
        averageScore: 74
    },
    {
        rank: 10,
        username: "charlesX",
        studentId: "22041009",
        xp: 1800,
        level: "Habit Builder I",
        streak: 7,
        quizzesTaken: 15,
        averageScore: 72
    },
    {
        rank: 11,
        username: "lunaSky",
        studentId: "22041010",
        xp: 1000,
        level: "Habit Builder V",
        streak: 6,
        quizzesTaken: 13,
        averageScore: 70
    },
    {
        rank: 12,
        username: "novaStar",
        studentId: "22041011",
        xp: 800,
        level: "Learner I",
        streak: 5,
        quizzesTaken: 11,
        averageScore: 68
    },
    {
        rank: 13,
        username: "echoWave",
        studentId: "22041012",
        xp: 199,
        level: "Learner V",
        streak: 4,
        quizzesTaken: 9,
        averageScore: 66
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
        icon: "/img/ascendant.png"
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
            icon: "/img/ascendant.png"
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
        code: "CPP117",
        name: "Embedded Systems",
        semester: 1,
        year: 4
    },
    {
        code: "CPP118",
        name: "Computer Architecture and Organization",
        semester: 1,
        year: 4
    },
    {
        code: "CPP119",
        name: "Data Signal Processing",
        semester: 1,
        year: 4
    },
    {
        code: "CPP120",
        name: "CpE Practice and Design 1",
        semester: 1,
        year: 4
    },
    {
        code: "CPP121",
        name: "Fundamentals of Mixed Signals and Sensors",
        semester: 1,
        year: 4
    },
    {
        code: "CPE102",
        name: "Network Embedded Systems",
        semester: 1,
        year: 4
    },
    {
        code: "CPE103",
        name: "Mobile Embedded Systems",
        semester: 2,
        year: 4
    },
    {
        code: "CPP122",
        name: "Cpe Practice and Design 2",
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
    ()=>ReviewerEditorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/mammoth/lib/index.js [app-ssr] (ecmascript)");
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
function ReviewerEditorPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const classCode = params.classCode;
    const reviewerId = params.reviewerId;
    const [editorContent, setEditorContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [contentLoaded, setContentLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get reviewer data
    const reviewers = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockReviewersByClass"][classCode] || [];
    const reviewer = reviewers.find((r)=>r.id === parseInt(reviewerId));
    const docxUrl = "/sample.docx";
    // Load theme preference
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark-mode');
        }
    }, []);
    // Load DOCX document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadDocument = async ()=>{
            try {
                console.log("Loading document from:", docxUrl);
                // Check localStorage first
                const savedContent = localStorage.getItem(`reviewer-${classCode}-${reviewerId}`);
                if (savedContent) {
                    console.log("Loading from localStorage");
                    setEditorContent(savedContent);
                    setContentLoaded(true);
                    setLoading(false);
                    return;
                }
                console.log("Fetching DOCX file...");
                const response = await fetch(docxUrl);
                console.log("Response status:", response.status);
                if (!response.ok) throw new Error(`Document not found: ${response.status}`);
                const arrayBuffer = await response.arrayBuffer();
                console.log("ArrayBuffer size:", arrayBuffer.byteLength);
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].convertToHtml({
                    arrayBuffer,
                    styleMap: [
                        "p[style-name='Heading 1'] => h1:fresh",
                        "p[style-name='Heading 2'] => h2:fresh",
                        "p[style-name='Heading 3'] => h3:fresh",
                        "b => strong",
                        "i => em"
                    ]
                });
                console.log("Conversion result:", result.value.substring(0, 200));
                setEditorContent(result.value);
                setContentLoaded(true);
                setLoading(false);
            } catch (err) {
                console.error("Error loading document:", err);
                setEditorContent(`
          <h1>Welcome to the Reviewer Editor</h1>
          <p>Start typing to create your document...</p>
          <p><em>Note: Place a DOCX file at public/sample.docx to load it automatically.</em></p>
          <p style="color: red;"><strong>Error: ${err.message}</strong></p>
        `);
                setLoading(false);
            }
        };
        loadDocument();
    }, [
        classCode,
        reviewerId,
        docxUrl
    ]);
    // Set content after TinyMCE editor is ready
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('Content effect triggered:', {
            hasEditor: !!editorRef.current,
            contentLoaded,
            contentLength: editorContent?.length || 0
        });
        if (editorRef.current && contentLoaded && editorContent) {
            console.log('Setting content in editor, length:', editorContent.length);
            console.log('First 100 chars:', editorContent.substring(0, 100));
            try {
                editorRef.current.setContent(editorContent);
                console.log('✓ Content successfully set in editor');
            } catch (err) {
                console.error('✗ Error setting content:', err);
            }
        }
    }, [
        contentLoaded,
        editorContent
    ]);
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
    const handleSave = async ()=>{
        setIsSaving(true);
        setSaveStatus("Saving...");
        try {
            localStorage.setItem(`reviewer-${classCode}-${reviewerId}`, editorContent);
            // TODO: Backend Integration
            // await fetch('http://your-backend-url/api/reviewers/save', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({
            //     classCode,
            //     reviewerId,
            //     content: editorContent,
            //     format: 'html'
            //   })
            // });
            setSaveStatus("✓ Saved");
            setTimeout(()=>setSaveStatus(""), 2000);
        } catch (error) {
            console.error("Save error:", error);
            setSaveStatus("✗ Error");
        } finally{
            setIsSaving(false);
        }
    };
    const handleDownloadPDF = async ()=>{
        try {
            // TODO: Backend Integration
            // const response = await fetch('http://your-backend-url/api/reviewers/convert-to-pdf', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ content: editorContent })
            // });
            // const blob = await response.blob();
            // const url = window.URL.createObjectURL(blob);
            // const a = document.createElement('a');
            // a.href = url;
            // a.download = `${reviewer?.title || 'reviewer'}.pdf`;
            // a.click();
            alert("PDF download will be implemented with backend. See BACKEND_INTEGRATION.md");
        } catch (error) {
            console.error("PDF download error:", error);
        }
    };
    if (!reviewer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "reviewer-editor-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "error-message",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Reviewer not found"
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/student/reviewers/${classCode}`),
                        children: "Go Back"
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                lineNumber: 179,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
            lineNumber: 178,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `reviewer-editor-container ${darkMode ? 'dark-mode' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "editor-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn back-btn",
                                onClick: ()=>router.back(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {}, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "document-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: reviewer.title
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "document-info",
                                        children: [
                                            classCode,
                                            " • Editable Document"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toolbar-right",
                        children: [
                            saveStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "save-status",
                                children: saveStatus
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 202,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn",
                                onClick: handleSave,
                                disabled: isSaving,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSave"], {}, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isSaving ? "Saving..." : "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn",
                                onClick: handleDownloadPDF,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Download PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "toolbar-btn icon-only",
                                onClick: toggleDarkMode,
                                children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSun"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 212,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMoon"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                    lineNumber: 212,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "editor-content",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loading-spinner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner"
                        }, void 0, false, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading document..."
                        }, void 0, false, {
                            fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tinymce-wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Editor"], {
                        tinymceScriptSrc: "/tinymce/tinymce.min.js",
                        initialValue: "<p>Loading content...</p>",
                        onInit: (evt, editor)=>{
                            editorRef.current = editor;
                            console.log("TinyMCE initialized, editor ready");
                            console.log("Content available at init:", editorContent?.length || 0, "chars");
                            // If content is already loaded, set it now
                            if (contentLoaded && editorContent) {
                                console.log('Content already loaded, setting immediately');
                                console.log('First 100 chars of content:', editorContent.substring(0, 100));
                                try {
                                    editor.setContent(editorContent);
                                    console.log('✓ Content set successfully in onInit');
                                    // Verify content was actually set
                                    const currentContent = editor.getContent();
                                    console.log('Verified content in editor:', currentContent.length, 'chars');
                                } catch (err) {
                                    console.error('✗ Error setting content in onInit:', err);
                                }
                            }
                        },
                        onEditorChange: (content)=>setEditorContent(content),
                        init: {
                            height: 700,
                            width: '100%',
                            menubar: false,
                            promotion: false,
                            license_key: 'gpl',
                            plugins: [
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'code',
                                'insertdatetime',
                                'media',
                                'table',
                                'help',
                                'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright | bullist numlist | table | removeformat',
                            table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | tablecellprops tablemergecells tablesplitcells',
                            content_style: `
                  body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #1a1a1a;
                    padding: 20px;
                  }
                  table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                    table-layout: fixed;
                  }
                  table td, table th {
                    border: 2px solid #5b21b6;
                    padding: 12px;
                    vertical-align: top;
                  }
                  table tr:first-child td, table tr:first-child th {
                    background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
                    color: white;
                    font-weight: 700;
                  }
                  table td[style*="width: 30%"] {
                    background: #f3f4f6;
                    width: 30%;
                  }
                  table td[style*="width: 70%"] {
                    background: #white;
                    width: 70%;
                  }
                  table td[colspan] {
                    background: #fefce8;
                  }
                `,
                            skin: darkMode ? 'oxide-dark' : 'oxide',
                            content_css: darkMode ? 'dark' : 'default',
                            branding: false,
                            resize: false,
                            statusbar: true,
                            table_default_attributes: {
                                border: '2'
                            },
                            table_default_styles: {
                                'border-collapse': 'collapse',
                                'width': '100%'
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                        lineNumber: 226,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                    lineNumber: 225,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/student/reviewers/[classCode]/[reviewerId]/page.jsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__addbbd23._.js.map