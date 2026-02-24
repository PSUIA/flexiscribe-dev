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
"[project]/client/app/student/dashboard/UserMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function UserMenu({ userName, userRole }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    const handleProfile = ()=>{
        setIsOpen(false);
        router.push("/student/profile");
    };
    const handleRank = ()=>{
        setIsOpen(false);
        router.push("/student/rank");
    };
    const handleChangePassword = ()=>{
        setIsOpen(false);
        router.push("/student/change-password");
    };
    const handleLogout = ()=>{
        setIsOpen(false);
        localStorage.removeItem("token");
        sessionStorage.clear();
        router.push("/auth/student/login");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "user-menu-container",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-profile",
                onClick: toggleMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-avatar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegUserCircle"], {}, void 0, false, {
                            fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-name",
                                children: userName
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-role",
                                children: userRole
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "user-dropdown",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown-item",
                        onClick: handleProfile,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUser"], {
                                className: "dropdown-icon"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "My Profile"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown-item",
                        onClick: handleRank,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrophy"], {
                                className: "dropdown-icon"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "My Rank"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown-item",
                        onClick: handleChangePassword,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaKey"], {
                                className: "dropdown-icon"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Change Password"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown-divider"
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dropdown-item logout-item",
                        onClick: handleLogout,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSignOutAlt"], {
                                className: "dropdown-icon"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/student/dashboard/UserMenu.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
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
    studyStreak: 3,
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
        text: "Strive for progress, not perfection.",
        author: "Unknown",
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
"[project]/client/app/student/dashboard/NotificationMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/student/dashboard/mockData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NotificationMenu() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Map notification types to icons
    const getIconForType = (type)=>{
        switch(type){
            case "reviewer":
                return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBook"];
            case "quiz":
                return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGamepad"];
            case "achievement":
                return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrophy"];
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBell"];
        }
    };
    // Add icons to notifications from mockData
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockNotifications"].map((notif)=>({
            ...notif,
            icon: getIconForType(notif.type)
        })));
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    const handleNotificationClick = (notification)=>{
        // Mark notification as read
        setNotifications((prev)=>prev.map((notif)=>notif.id === notification.id ? {
                    ...notif,
                    read: true
                } : notif));
        // Navigate to the respective page
        setIsOpen(false);
        router.push(notification.link);
    };
    const markAllAsRead = ()=>{
        setNotifications((prev)=>prev.map((notif)=>({
                    ...notif,
                    read: true
                })));
    };
    const unreadCount = notifications.filter((n)=>!n.read).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "notification-menu-container",
        ref: menuRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "notification-btn",
                onClick: toggleMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBell"], {}, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "notification-badge",
                        children: unreadCount
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "notification-dropdown",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notification-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mark-all-read",
                                onClick: markAllAsRead,
                                children: "Mark all as read"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notification-list",
                        children: notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "no-notifications",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBell"], {
                                    className: "empty-icon"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No notifications yet"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this) : notifications.map((notification)=>{
                            const IconComponent = notification.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `notification-item ${notification.read ? 'read' : 'unread'}`,
                                onClick: ()=>handleNotificationClick(notification),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "notification-icon-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            className: "notification-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                            lineNumber: 106,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "notification-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "notification-title",
                                                children: notification.title
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                                lineNumber: 109,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "notification-message",
                                                children: notification.message
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                                lineNumber: 110,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "notification-time",
                                                children: notification.time
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                                lineNumber: 111,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                        lineNumber: 108,
                                        columnNumber: 21
                                    }, this),
                                    !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "unread-indicator"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                        lineNumber: 114,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, notification.id, true, {
                                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                                lineNumber: 100,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notification-footer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "view-all-btn",
                            children: "View All Notifications"
                        }, void 0, false, {
                            fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/student/dashboard/NotificationMenu.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/client/app/student/dashboard/SearchBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/student/dashboard/mockData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function SearchBar() {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filteredResults, setFilteredResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Map types to icons
    const getIconForType = (type)=>{
        return type === "reviewer" ? __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBook"] : __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGamepad"];
    };
    // Add icons to search data
    const searchData = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockSearchData"].map((item)=>({
            ...item,
            icon: getIconForType(item.type)
        }));
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // Filter results based on search query
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchQuery.trim().length > 0) {
            const query = searchQuery.toLowerCase();
            const results = searchData.filter((item)=>item.title.toLowerCase().includes(query) || item.subject.toLowerCase().includes(query) || item.type.toLowerCase().includes(query));
            setFilteredResults(results);
            setIsOpen(true);
        } else {
            setFilteredResults([]);
            setIsOpen(false);
        }
    }, [
        searchQuery
    ]);
    const handleInputChange = (e)=>{
        setSearchQuery(e.target.value);
    };
    const handleResultClick = (item)=>{
        setSearchQuery("");
        setIsOpen(false);
        router.push(item.link);
    };
    const handleClearSearch = ()=>{
        setSearchQuery("");
        setIsOpen(false);
    };
    const groupedResults = {
        reviewers: filteredResults.filter((item)=>item.type === "reviewer"),
        quizzes: filteredResults.filter((item)=>item.type === "quiz")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search-bar-container",
        ref: searchRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                        className: "search-icon"
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search for reviewers, quizzes...",
                        value: searchQuery,
                        onChange: handleInputChange,
                        onFocus: ()=>searchQuery && setIsOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "clear-search-btn",
                        onClick: handleClearSearch,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                            fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            isOpen && filteredResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-dropdown",
                children: [
                    groupedResults.reviewers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-group-title",
                                children: "Reviewers"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            groupedResults.reviewers.map((item)=>{
                                const IconComponent = item.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-result-item",
                                    onClick: ()=>handleResultClick(item),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "search-result-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                                                fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                                lineNumber: 109,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                            lineNumber: 108,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "search-result-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-result-title",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-result-subject",
                                                    children: item.subject
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                    lineNumber: 103,
                                    columnNumber: 19
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this),
                    groupedResults.quizzes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-group-title",
                                children: "Quizzes"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            groupedResults.quizzes.map((item)=>{
                                const IconComponent = item.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-result-item",
                                    onClick: ()=>handleResultClick(item),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "search-result-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                                                fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                                lineNumber: 133,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "search-result-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-result-title",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-result-subject",
                                                    children: item.subject
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                            lineNumber: 135,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                                    lineNumber: 127,
                                    columnNumber: 19
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            isOpen && searchQuery && filteredResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-dropdown",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-search-results",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                            className: "empty-search-icon"
                        }, void 0, false, {
                            fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                'No results found for "',
                                searchQuery,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/student/dashboard/SearchBar.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TranscriptViewerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mammoth/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$UserMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/student/dashboard/UserMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$NotificationMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/student/dashboard/NotificationMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$SearchBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/app/student/dashboard/SearchBar.jsx [app-ssr] (ecmascript)");
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
;
;
function TranscriptViewerPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const { classCode, transcriptId } = params;
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [htmlContent, setHtmlContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1.0);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [annotationMode, setAnnotationMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [annotations, setAnnotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get transcript info
    const transcripts = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockTranscriptsByClass"][classCode] || [];
    const transcript = transcripts.find((t)=>t.id === parseInt(transcriptId));
    // For demo purposes, we'll use a sample DOCX URL
    // In production, this would come from your backend/storage
    const docxUrl = "/sample.docx"; // You'll need to add a sample DOCX to your public folder
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        setCurrentTime(new Date());
        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark-mode');
        }
        return ()=>clearInterval(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load DOCX file and convert to HTML
        const loadDocx = async ()=>{
            try {
                setLoading(true);
                const response = await fetch(docxUrl);
                const arrayBuffer = await response.arrayBuffer();
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mammoth$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].convertToHtml({
                    arrayBuffer
                });
                setHtmlContent(result.value);
                setLoading(false);
            } catch (err) {
                console.error("Error loading DOCX:", err);
                setError("Failed to load document. Please make sure a sample DOCX exists in the public folder.");
                setLoading(false);
            }
        };
        if (mounted) {
            loadDocx();
        }
    }, [
        mounted,
        docxUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load saved annotations from localStorage
        const savedAnnotations = localStorage.getItem(`transcript-annotations-${classCode}-${transcriptId}`);
        if (savedAnnotations) {
            setAnnotations(JSON.parse(savedAnnotations));
        }
    }, [
        classCode,
        transcriptId
    ]);
    const toggleSidebar = ()=>{
        setSidebarOpen(!sidebarOpen);
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
    const handleZoomIn = ()=>{
        setScale((prevScale)=>Math.min(prevScale + 0.1, 2.0));
    };
    const handleZoomOut = ()=>{
        setScale((prevScale)=>Math.max(prevScale - 0.1, 0.5));
    };
    const handleDownload = async ()=>{
        try {
            const response = await fetch(docxUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = transcript?.title || 'transcript.docx';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (err) {
            console.error("Error downloading file:", err);
        }
    };
    const toggleFullscreen = ()=>{
        if (!document.fullscreenElement) {
            contentRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };
    const handleAnnotationClick = (type)=>{
        if (annotationMode === type) {
            setAnnotationMode(null);
        } else {
            setAnnotationMode(type);
            if (type === 'note') {
                const text = prompt("Enter your note:");
                if (text) {
                    const newAnnotation = {
                        id: Date.now(),
                        type: 'note',
                        text: text,
                        timestamp: new Date().toISOString()
                    };
                    const updatedAnnotations = [
                        ...annotations,
                        newAnnotation
                    ];
                    setAnnotations(updatedAnnotations);
                    localStorage.setItem(`transcript-annotations-${classCode}-${transcriptId}`, JSON.stringify(updatedAnnotations));
                }
                setAnnotationMode(null);
            }
        }
    };
    if (!mounted || !currentTime) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dashboard-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: "sidebar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/fLexiScribe-logo.png",
                                alt: "Logo",
                                className: "h-16 w-16"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold",
                                        children: "fLexiScribe"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-normal",
                                        children: "Your Note-Taking Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "main-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
            lineNumber: 168,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `dashboard-container ${darkMode ? 'dark-mode' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `sidebar ${sidebarOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/img/fLexiScribe-logo.png",
                                alt: "Logo",
                                className: "h-16 w-16"
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold",
                                        children: "fLexiScribe"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-normal",
                                        children: "Your Note-Taking Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "nav-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/student/dashboard",
                                className: "nav-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHome"], {
                                        className: "nav-icon"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/student/reviewers",
                                className: "nav-item active",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBook"], {
                                        className: "nav-icon"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reviewers"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/student/quizzes",
                                className: "nav-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGamepad"], {
                                        className: "nav-icon"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Quizzes"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/student/leaderboard",
                                className: "nav-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrophy"], {
                                        className: "nav-icon"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Leaderboard"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-footer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2024 fLexiScribe"
                        }, void 0, false, {
                            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "top-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "menu-btn",
                                onClick: toggleSidebar,
                                children: sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                    lineNumber: 226,
                                    columnNumber: 28
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBars"], {}, void 0, false, {
                                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                    lineNumber: 226,
                                    columnNumber: 42
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$SearchBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "top-bar-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-btn theme-toggle",
                                        onClick: toggleDarkMode,
                                        children: darkMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSun"], {}, void 0, false, {
                                            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                            lineNumber: 233,
                                            columnNumber: 27
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMoon"], {}, void 0, false, {
                                            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                            lineNumber: 233,
                                            columnNumber: 39
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$NotificationMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$UserMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        userProfile: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$app$2f$student$2f$dashboard$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUserProfile"]
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "viewer-container",
                        ref: contentRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "viewer-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "back-btn",
                                        onClick: ()=>router.back(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {}, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Back to Transcripts"
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "viewer-title-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "viewer-title",
                                                children: transcript?.title || 'Transcript Viewer'
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "viewer-meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "meta-badge",
                                                        children: classCode
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 17
                                                    }, this),
                                                    transcript?.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "meta-info",
                                                        children: transcript.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 42
                                                    }, this),
                                                    transcript?.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "meta-info",
                                                        children: new Date(transcript.date).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "viewer-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "action-btn-toolbar",
                                                onClick: handleDownload,
                                                title: "Download",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 260,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Download"
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 261,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "action-btn-toolbar",
                                                onClick: toggleFullscreen,
                                                title: "Fullscreen",
                                                children: [
                                                    isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCompress"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 33
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaExpand"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 50
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isFullscreen ? 'Exit' : 'Fullscreen'
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 265,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "annotation-toolbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Annotation Tools:"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "annotation-buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `annotation-btn ${annotationMode === 'note' ? 'active' : ''}`,
                                                onClick: ()=>handleAnnotationClick('note'),
                                                title: "Add Note",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStickyNote"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 279,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Note"
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `annotation-btn ${annotationMode === 'highlight' ? 'active' : ''}`,
                                                onClick: ()=>handleAnnotationClick('highlight'),
                                                title: "Highlight (Select text and click)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHighlighter"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 287,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Highlight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 288,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `annotation-btn ${annotationMode === 'text' ? 'active' : ''}`,
                                                onClick: ()=>handleAnnotationClick('text'),
                                                title: "Add Text",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFont"], {}, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 295,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Text"
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                        lineNumber: 296,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "zoom-controls",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "zoom-btn",
                                        onClick: handleZoomOut,
                                        disabled: scale <= 0.5,
                                        title: "Zoom Out",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearchMinus"], {}, void 0, false, {
                                            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "zoom-level",
                                        children: [
                                            Math.round(scale * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "zoom-btn",
                                        onClick: handleZoomIn,
                                        disabled: scale >= 2.0,
                                        title: "Zoom In",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearchPlus"], {}, void 0, false, {
                                            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "docx-document-wrapper",
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "loading-spinner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "spinner"
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Loading document..."
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "error-message",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "error-note",
                                                children: 'For demo: Add a file named "sample.docx" to the public folder'
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "docx-content",
                                        style: {
                                            transform: `scale(${scale})`,
                                            transformOrigin: 'top center'
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: htmlContent
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    annotations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "annotations-panel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Your Notes"
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            annotations.map((annotation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `annotation-item annotation-${annotation.type}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "annotation-header",
                                                            children: [
                                                                annotation.type === 'note' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaStickyNote"], {}, void 0, false, {
                                                                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 54
                                                                }, this),
                                                                annotation.type === 'highlight' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHighlighter"], {}, void 0, false, {
                                                                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 59
                                                                }, this),
                                                                annotation.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFont"], {}, void 0, false, {
                                                                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 54
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "annotation-time",
                                                                    children: new Date(annotation.timestamp).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "annotation-text",
                                                            children: annotation.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, annotation.id, true, {
                                                    fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/student/reviewers/transcripts/[classCode]/[transcriptId]/page.jsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7ece9ac0._.js.map