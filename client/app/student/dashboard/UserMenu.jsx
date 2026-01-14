"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaRegUserCircle, FaUser, FaKey, FaSignOutAlt, FaTrophy } from "react-icons/fa";

export default function UserMenu({ userName, userRole }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const menuRef = useRef(null);
  const router = useRouter();

  // Load profile image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    setIsOpen(false);
    router.push("/student/profile");
  };

  const handleRank = () => {
    setIsOpen(false);
    router.push("/student/rank");
  };

  const handleChangePassword = () => {
    setIsOpen(false);
    router.push("/student/profile#change-password");
  };

  const handleLogout = () => {
    setIsOpen(false);
    localStorage.removeItem("token");
    sessionStorage.clear();
    router.push("/auth/student/login");
  };

  return (
    <div className="user-menu-container" ref={menuRef}>
      <div className="user-profile" onClick={toggleMenu}>
        <div className="user-avatar">
          {profileImage ? (
            <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          ) : (
            <FaRegUserCircle />
          )}
        </div>
        <div className="user-info">
          <div className="user-name">{userName}</div>
          <div className="user-role">{userRole}</div>
        </div>
      </div>

      {isOpen && (
        <div className="user-dropdown">
          <div className="dropdown-item" onClick={handleProfile}>
            <FaUser className="dropdown-icon" />
            <span>My Profile</span>
          </div>
          <div className="dropdown-item" onClick={handleRank}>
            <FaTrophy className="dropdown-icon" />
            <span>My Rank</span>
          </div>
          <div className="dropdown-item" onClick={handleChangePassword}>
            <FaKey className="dropdown-icon" />
            <span>Change Password</span>
          </div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item logout-item" onClick={handleLogout}>
            <FaSignOutAlt className="dropdown-icon" />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
}
