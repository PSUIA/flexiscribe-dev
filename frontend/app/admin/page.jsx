"use client";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function AdminLanding() {
  const router = useRouter();

  return (
    <div className="admin-landing-container">
      {/* Navbar */}
      <nav className="neu-navbar">
        {/* Logo */}
        <div className="neu-navbar-logo">
          <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-15 w-15" />
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold">fLexiScribe</span>
            <span className="text-xs font-normal">Your Note-Taking Assistant</span>
          </div>
        </div>

        {/* Actions */}
        <div className="neu-navbar-actions">
          <button 
            className="btn-login text-md admin-portal-btn" 
            onClick={() => router.push("/auth/admin/login")}
          >
            Admin Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="admin-landing-main">
        <div className="admin-landing-content">
          {/* Title */}
          <h1 className="admin-landing-title">
            Manage fLexiScribe with <span className="confidence-text">Confidence</span>
          </h1>
          
          {/* Subtitle */}
          <p className="admin-landing-subtitle">
            Oversee users, ensure platform integrity, and maintain seamless operations.<br />
            The fLexiScribe Admin Portal provides centralized tools for monitoring<br />
            activity, managing content, and optimizing system performance.
          </p>

          {/* Feature Grid */}
          <div className="admin-features-grid">
            {/* Row 1 */}
            <div className="admin-feature-item">
              <div className="admin-feature-icon purple-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <span className="admin-feature-text">Manage Users</span>
            </div>

            <div className="admin-feature-item">
              <div className="admin-feature-icon green-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <span className="admin-feature-text">View Audit Trails</span>
            </div>

            {/* Row 2 */}
            <div className="admin-feature-item">
              <div className="admin-feature-icon blue-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <span className="admin-feature-text">Track User Behavior</span>
            </div>

            <div className="admin-feature-item">
              <div className="admin-feature-icon yellow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <span className="admin-feature-text">Generate Data Reports</span>
            </div>
          </div>

          {/* Admin Login Button */}
          <button 
            className="admin-login-btn" 
            onClick={() => router.push("/auth/admin/login")}
          >
            Admin Login
          </button>
        </div>
      </main>
    </div>
  );
}