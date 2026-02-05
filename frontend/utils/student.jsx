// Reusable utility functions for student pages

/**
 * Get time-based greeting
 * @param {Date} currentTime - The current time
 * @returns {string} - Time-appropriate greeting
 */
export const getGreeting = (currentTime) => {
  if (!currentTime) return "Welcome";
  const hour = currentTime.getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 18) return "Good Afternoon";
  if (hour >= 18 && hour < 22) return "Good Evening";
  return "Good Night";
};

/**
 * Get daily rotating message (changes every day)
 * @param {Date} currentTime - The current time
 * @param {Array} mockDailyMessages - Array of daily messages
 * @returns {string} - Daily message
 */
export const getDailyMessage = (currentTime, mockDailyMessages) => {
  if (!currentTime) return mockDailyMessages[0];
  // Get day of year (0-365) and use modulo to cycle through messages
  const startOfYear = new Date(currentTime.getFullYear(), 0, 0);
  const diff = currentTime - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const messageIndex = dayOfYear % mockDailyMessages.length;
  return mockDailyMessages[messageIndex];
};

/**
 * Get daily rotating quote (changes every day)
 * @param {Date} currentTime - The current time
 * @param {Array} mockQuotes - Array of quotes
 * @returns {Object} - Daily quote object
 */
export const getDailyQuote = (currentTime, mockQuotes) => {
  if (!currentTime) return mockQuotes[0];
  // Get day of year (0-365) and use modulo to cycle through quotes
  const startOfYear = new Date(currentTime.getFullYear(), 0, 0);
  const diff = currentTime - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const quoteIndex = dayOfYear % mockQuotes.length;
  return mockQuotes[quoteIndex];
};

/**
 * Calculate streak based on activity
 * @returns {Object} - Streak data with count, isActive, and lastActivityDate
 */
export const calculateStreak = () => {
  const today = new Date().toISOString().split('T')[0];
  const savedStreak = localStorage.getItem('studyStreak');
  
  if (savedStreak) {
    const parsed = JSON.parse(savedStreak);
    const lastActivity = new Date(parsed.lastActivityDate);
    const currentDate = new Date(today);
    const daysDiff = Math.floor((currentDate - lastActivity) / (1000 * 60 * 60 * 24));
    
    // If last activity was today, streak is active
    if (daysDiff === 0) {
      return {
        count: parsed.count,
        isActive: true,
        lastActivityDate: parsed.lastActivityDate
      };
    }
    // If last activity was yesterday, streak continues but not active today yet
    else if (daysDiff === 1) {
      return {
        count: parsed.count,
        isActive: false,
        lastActivityDate: parsed.lastActivityDate
      };
    }
    // If more than 1 day passed, streak is broken
    else {
      return {
        count: 0,
        isActive: false,
        lastActivityDate: null
      };
    }
  }
  
  // No saved streak
  return {
    count: 0,
    isActive: false,
    lastActivityDate: null
  };
};

/**
 * Check if user has completed at least 1 activity today
 * @returns {boolean} - True if user has activity today
 */
export const hasActivityToday = () => {
  const today = new Date().toISOString().split('T')[0];
  const savedActivities = localStorage.getItem('dailyActivities');
  
  if (!savedActivities) return false;
  
  const activities = JSON.parse(savedActivities);
  return activities[today] && activities[today].length > 0;
};

/**
 * Record activity to update streak (only activates if at least 1 activity done)
 * @param {Function} setStreakData - State setter for streak data
 * @returns {void}
 */
export const recordActivity = (setStreakData) => {
  const today = new Date().toISOString().split('T')[0];
  const currentStreak = calculateStreak();
  
  // Check if user has done at least 1 activity today
  if (!hasActivityToday()) {
    return;
  }
  
  // If already active today, don't update
  if (currentStreak.isActive) {
    return;
  }
  
  // If last activity was yesterday or today is first activity
  const lastActivity = currentStreak.lastActivityDate;
  let newCount = currentStreak.count;
  
  if (!lastActivity) {
    // First activity ever
    newCount = 1;
  } else {
    const lastDate = new Date(lastActivity);
    const currentDate = new Date(today);
    const daysDiff = Math.floor((currentDate - lastDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 1) {
      // Consecutive day - increment streak
      newCount = currentStreak.count + 1;
    } else if (daysDiff === 0) {
      // Same day - keep count
      newCount = currentStreak.count;
    } else {
      // Streak broken - start new
      newCount = 1;
    }
  }
  
  const newStreak = {
    count: newCount,
    isActive: true,
    lastActivityDate: today
  };
  
  localStorage.setItem('studyStreak', JSON.stringify(newStreak));
  if (setStreakData) {
    setStreakData(newStreak);
  }
};

/**
 * Track daily activities (quiz completion, reviewer view, etc.)
 * @param {string} activityType - Type of activity to track
 * @param {Function} setStreakData - State setter for streak data (optional)
 * @returns {void}
 */
export const trackActivity = (activityType, setStreakData) => {
  const today = new Date().toISOString().split('T')[0];
  const activitiesKey = 'dailyActivities';
  const savedActivities = localStorage.getItem(activitiesKey);
  
  let activities = savedActivities ? JSON.parse(savedActivities) : {};
  
  // Initialize today's activities if not exists
  if (!activities[today]) {
    activities[today] = [];
  }
  
  // Add activity if not already recorded
  if (!activities[today].includes(activityType)) {
    activities[today].push(activityType);
    localStorage.setItem(activitiesKey, JSON.stringify(activities));
  }
  
  // After tracking activity, update streak
  recordActivity(setStreakData);
};

/**
 * All rank tiers with their XP ranges
 */
export const ALL_RANKS = [
  { name: "Learner V", tier: "V", xpMin: 0, xpMax: 199, color: "#CD7F32", icon: "/img/learner-5.png" },
  { name: "Learner IV", tier: "IV", xpMin: 200, xpMax: 399, color: "#CD7F32", icon: "/img/learner-4.png" },
  { name: "Learner III", tier: "III", xpMin: 400, xpMax: 599, color: "#CD7F32", icon: "/img/learner-3.png" },
  { name: "Learner II", tier: "II", xpMin: 600, xpMax: 799, color: "#CD7F32", icon: "/img/learner-2.png" },
  { name: "Learner I", tier: "I", xpMin: 800, xpMax: 999, color: "#CD7F32", icon: "/img/learner-1.png" },
  { name: "Habit Builder V", tier: "V", xpMin: 1000, xpMax: 1199, color: "#C0C0C0", icon: "/img/habit-builder-5.png" },
  { name: "Habit Builder IV", tier: "IV", xpMin: 1200, xpMax: 1399, color: "#C0C0C0", icon: "/img/habit-builder-4.png" },
  { name: "Habit Builder III", tier: "III", xpMin: 1400, xpMax: 1599, color: "#C0C0C0", icon: "/img/habit-builder-3.png" },
  { name: "Habit Builder II", tier: "II", xpMin: 1600, xpMax: 1799, color: "#C0C0C0", icon: "/img/habit-builder-2.png" },
  { name: "Habit Builder I", tier: "I", xpMin: 1800, xpMax: 1999, color: "#C0C0C0", icon: "/img/habit-builder-1.png" },
  { name: "Growth Seeker V", tier: "V", xpMin: 2000, xpMax: 2299, color: "#FFD700", icon: "/img/growth-seeker-5.png" },
  { name: "Growth Seeker IV", tier: "IV", xpMin: 2300, xpMax: 2599, color: "#FFD700", icon: "/img/growth-seeker-4.png" },
  { name: "Growth Seeker III", tier: "III", xpMin: 2600, xpMax: 2899, color: "#FFD700", icon: "/img/growth-seeker-3.png" },
  { name: "Growth Seeker II", tier: "II", xpMin: 2900, xpMax: 3199, color: "#FFD700", icon: "/img/growth-seeker-2.png" },
  { name: "Growth Seeker I", tier: "I", xpMin: 3200, xpMax: 3499, color: "#FFD700", icon: "/img/growth-seeker-1.png" },
  { name: "Self-Driven V", tier: "V", xpMin: 3500, xpMax: 3899, color: "#90EE90", icon: "/img/self-driven-5.png" },
  { name: "Self-Driven IV", tier: "IV", xpMin: 3900, xpMax: 4299, color: "#90EE90", icon: "/img/self-driven-4.png" },
  { name: "Self-Driven III", tier: "III", xpMin: 4300, xpMax: 4699, color: "#90EE90", icon: "/img/self-driven-3.png" },
  { name: "Self-Driven II", tier: "II", xpMin: 4700, xpMax: 5099, color: "#90EE90", icon: "/img/self-driven-2.png" },
  { name: "Self-Driven I", tier: "I", xpMin: 5100, xpMax: 5499, color: "#90EE90", icon: "/img/self-driven-1.png" },
  { name: "Mastery V", tier: "V", xpMin: 5500, xpMax: 5999, color: "#9370DB", icon: "/img/mastery-5.png" },
  { name: "Mastery IV", tier: "IV", xpMin: 6000, xpMax: 6499, color: "#9370DB", icon: "/img/mastery-4.png" },
  { name: "Mastery III", tier: "III", xpMin: 6500, xpMax: 6999, color: "#9370DB", icon: "/img/mastery-3.png" },
  { name: "Mastery II", tier: "II", xpMin: 7000, xpMax: 7499, color: "#9370DB", icon: "/img/mastery-2.png" },
  { name: "Mastery I", tier: "I", xpMin: 7500, xpMax: 7999, color: "#9370DB", icon: "/img/mastery-1.png" },
  { name: "Peak Performer V", tier: "V", xpMin: 8000, xpMax: 8499, color: "#00CED1", icon: "/img/peak-performer-5.png" },
  { name: "Peak Performer IV", tier: "IV", xpMin: 8500, xpMax: 8999, color: "#00CED1", icon: "/img/peak-performer-4.png" },
  { name: "Peak Performer III", tier: "III", xpMin: 9000, xpMax: 9499, color: "#00CED1", icon: "/img/peak-performer-3.png" },
  { name: "Peak Performer II", tier: "II", xpMin: 9500, xpMax: 9999, color: "#00CED1", icon: "/img/peak-performer-2.png" },
  { name: "Peak Performer I", tier: "I", xpMin: 10000, xpMax: 10499, color: "#00CED1", icon: "/img/peak-performer-1.png" },
  { name: "Ascendant", tier: "VII", xpMin: 10500, xpMax: 999999, color: "#FF1493", icon: "/img/ascendant.png" }
];

/**
 * Calculate rank based on XP
 * @param {number} xp - The XP amount
 * @returns {Object} - Rank object with name, tier, xpMin, xpMax, color, icon, and xp
 */
export const calculateRank = (xp) => {
  for (const rank of ALL_RANKS) {
    if (xp >= rank.xpMin && xp <= rank.xpMax) {
      return { ...rank, xp };
    }
  }
  return { ...ALL_RANKS[0], xp }; // Default to Learner V
};

/**
 * Toggle sidebar state
 * @param {boolean} sidebarOpen - Current sidebar state
 * @param {Function} setSidebarOpen - State setter
 * @returns {void}
 */
export const toggleSidebar = (sidebarOpen, setSidebarOpen) => {
  setSidebarOpen(!sidebarOpen);
};

/**
 * Toggle dark mode
 * @param {boolean} darkMode - Current dark mode state
 * @param {Function} setDarkMode - State setter
 * @returns {void}
 */
export const toggleDarkMode = (darkMode, setDarkMode) => {
  setDarkMode(!darkMode);
  if (!darkMode) {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
};

/**
 * Handle navigation and close sidebar on mobile
 * @param {string} path - Navigation path
 * @param {Object} router - Next.js router
 * @param {boolean} sidebarOpen - Current sidebar state
 * @param {Function} setSidebarOpen - State setter
 * @returns {void}
 */
export const handleNavigation = (path, router, sidebarOpen, setSidebarOpen) => {
  router.push(path);
  if (sidebarOpen) {
    setSidebarOpen(false);
  }
};
