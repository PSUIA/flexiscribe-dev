"use client";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  const getStarted = () => {
    router.push("/login");
  };

  return (
    <div className="container min-h-screen flex flex-col">
      {/* Navbar */}
        <nav className="neu-navbar">
          {/* Logo */}
          <div className="neu-navbar-logo">
            <img src="/img/logo.png" alt="Logo" className="h-8 w-8" />
            <span>fLexiScribe</span>
          </div>

          {/* Links */}
          <div className="neu-navbar-links">
            <a href="#mission">Our Mission</a>
            <a href="#services">Services</a>
            <a href="#about-us">About Us</a>
          </div>

          {/* Actions */}
          <div className="neu-navbar-actions">
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </nav>


      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="heading-1 mb-4">From Speech to Study-Ready Notes</h1>
          <p className="paragraph mb-4">
            Redefining how students capture, organize, and review lectures. With
            real-time speech-to-text transcription and an intelligent
            auto-reviewer generator,
            <span className="font-bold text-[var(--brand-purple-dark)]"> fLexiScribe </span>
            ensures no detail is missed and every concept is easier to revisit.
          </p>
          <p className="font-bold text-[var(--brand-purple-dark)] mb-8">
            Listen better. Write less. Learn more.
          </p>

          {/* Get Started Button */}
          <button className="btn-get-started" onClick={getStarted}>
            Get Started
          </button>

        </div>
      </main>
    </div>
  );
}
