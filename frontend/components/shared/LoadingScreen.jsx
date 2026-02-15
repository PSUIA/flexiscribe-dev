"use client";
import React from "react";

/**
 * Universal loading screen for admin, educator, and student.
 * Uses brand colors and displays the fLexiScribe logo with a pulsing animation.
 */
export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo-wrapper">
          <img
            src="/img/fLexiScribe-logo.png"
            alt="fLexiScribe"
            className="loading-logo"
          />
        </div>
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">Loading<span className="loading-dots"></span></p>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #9d8adb 0%, #4c4172 100%);
          z-index: 99999;
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .loading-logo-wrapper {
          animation: logoPulse 2s ease-in-out infinite;
        }

        .loading-logo {
          width: 100px;
          height: 100px;
          object-fit: contain;
          filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2));
        }

        @keyframes logoPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.85; }
        }

        .loading-spinner {
          position: relative;
          width: 48px;
          height: 48px;
        }

        .spinner-ring {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.15);
          border-top-color: #c5a6f9;
          animation: spin 0.9s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 1px;
          margin: 0;
        }

        .loading-dots::after {
          content: '';
          animation: dots 1.5s steps(4, end) infinite;
        }

        @keyframes dots {
          0% { content: ''; }
          25% { content: '.'; }
          50% { content: '..'; }
          75% { content: '...'; }
          100% { content: ''; }
        }
      `}</style>
    </div>
  );
}
