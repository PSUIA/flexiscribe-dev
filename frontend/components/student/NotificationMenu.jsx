"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const menuRef = useRef(null);

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

  const unreadCount = 0; // Placeholder - will be determined by other components in the future

  return (
    <div className="notification-menu-container" ref={menuRef}>
      <button className="notification-btn" onClick={toggleMenu}>
        <FaBell />
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h3>Notifications</h3>
          </div>

          <div className="notification-list" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '3rem 1rem',
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            <div>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔔</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>No notifications yet</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>You'll be notified of important updates here</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
