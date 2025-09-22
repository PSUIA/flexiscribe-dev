"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { FaTachometerAlt, FaBook, FaGamepad, FaChartLine, FaCalendarAlt, FaUser, FaEllipsisH } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

export default function StudentDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    router.push("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">fLexiScribe</h2>
        <p className="subtitle">Your Note-Taking Assistant</p>
        <p className="welcome">Welcome Back,<br /><span>testUser!</span></p>

        <ul className="menu">
          <li><FaTachometerAlt /> Dashboard</li>
          <li><FaBook /> Reviewers</li>
          <li><FaGamepad /> Practice Quiz</li>
          <li><FaChartLine /> Leaderboard</li>
          <li><FaChartLine /> Progress</li>
          <li><FaCalendarAlt /> Schedule</li>
          <li><FaUser /> Profile</li>
          { /* More Menu */ }
          <li className="more-menu">
            <FaEllipsisH /> More
            <ul className="more-dropdown">
              <li><IoMdSettings /> Settings</li>
              <li><BiHelpCircle /> Help</li>
              <li onClick={handleLogout} className="btn">
                <FiLogOut /> Log Out</li>
            </ul>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Row */}
        <div className="top-row">
          <div className="card streak">
            <h3 className="text-xl font-bold">Study Streak</h3>
            <p>14 day streak</p>
          </div>
          <div className="card quiz">
            <h3 className ="text-xl font-bold">Quiz Average</h3>
            <p className="highlight">90%</p>
            <span>accuracy</span>
          </div>
          <div className="card silver">
            <h3 className="text-xl font-bold">Silver Club</h3>
            <p>You’re ranked <strong>#1</strong></p>
            <span>Keep it up to stay in the top 3!</span>
          </div>
        </div>

        {/* Middle Row */}
        <div className="middle-row">
          <div className="card review">
            <h3 className="text-xl font-bold">Review Completion</h3>
            <p className="highlight">50%</p>
            <span>25 out of 50 flashcards</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bottom-row">
          <div className="card transcript">
            <h3 className="text-xl font-bold">Live Transcript</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac libero scelerisque...</p>
          </div>
          <div className="card slide-preview">
            <h3 className="text-xl font-bold">Slide Preview</h3>
            <div className="slide-box"></div>
          </div>
        </div>
      </main>
    </div>
  );
}