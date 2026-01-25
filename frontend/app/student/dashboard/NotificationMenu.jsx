"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBell, FaBook, FaTrophy, FaGamepad, FaCheckCircle } from "react-icons/fa";
import { mockNotifications } from "./mockData";

export default function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);
  
  // Map notification types to icons
  const getIconForType = (type) => {
    switch(type) {
      case "reviewer": return FaBook;
      case "quiz": return FaGamepad;
      case "achievement": return FaTrophy;
      default: return FaBell;
    }
  };
  
  // Add icons to notifications from mockData
  const [notifications, setNotifications] = useState(
    mockNotifications.map(notif => ({
      ...notif,
      icon: getIconForType(notif.type)
    }))
  );

  const menuRef = useRef(null);
  const router = useRouter();

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

  const handleNotificationClick = (notification) => {
    // Mark notification as read
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === notification.id ? { ...notif, read: true } : notif
      )
    );
    
    // Navigate to the respective page
    setIsOpen(false);
    router.push(notification.link);
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleViewAll = () => {
    setIsOpen(false);
    setShowAllModal(true);
  };

  const closeModal = () => {
    setShowAllModal(false);
  };

  return (
    <>
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
            {unreadCount > 0 && (
              <button className="mark-all-read" onClick={markAllAsRead}>
                Mark all as read
              </button>
            )}
          </div>

          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="no-notifications">
                <FaBell className="empty-icon" />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <div className="notification-icon-wrapper">
                      <IconComponent className="notification-icon" />
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">{notification.title}</div>
                      <div className="notification-message">{notification.message}</div>
                      <div className="notification-time">{notification.time}</div>
                    </div>
                    {!notification.read && (
                      <div className="unread-indicator"></div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {notifications.length > 0 && (
            <div className="notification-footer">
              <button className="view-all-btn" onClick={handleViewAll}>View All Notifications</button>
            </div>
          )}
        </div>
      )}
    </div>

    {/* Full Notifications Modal */}
    {showAllModal && (
      <>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="notifications-modal">
          <div className="modal-header">
            <h2>All Notifications</h2>
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
          </div>
          
          <div className="modal-actions">
            {unreadCount > 0 && (
              <button className="mark-all-read-modal" onClick={markAllAsRead}>
                <FaCheckCircle /> Mark all as read
              </button>
            )}
          </div>

          <div className="modal-notification-list">
            {notifications.length === 0 ? (
              <div className="no-notifications-modal">
                <FaBell className="empty-icon-modal" />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`modal-notification-item ${notification.read ? 'read' : 'unread'}`}
                    onClick={() => {
                      handleNotificationClick(notification);
                      closeModal();
                    }}
                  >
                    <div className="modal-notification-icon-wrapper">
                      <IconComponent className="modal-notification-icon" />
                    </div>
                    <div className="modal-notification-content">
                      <div className="modal-notification-title">{notification.title}</div>
                      <div className="modal-notification-message">{notification.message}</div>
                      <div className="modal-notification-time">{notification.time}</div>
                    </div>
                    {!notification.read && (
                      <div className="modal-unread-indicator"></div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    )}
    </>
  );
}
