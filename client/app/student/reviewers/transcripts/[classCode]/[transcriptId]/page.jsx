"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { 
  FaMoon, FaSun, FaArrowLeft, FaDownload, FaExpand, 
  FaCompress, FaSearchPlus, FaSearchMinus
} from "react-icons/fa";
import mammoth from "mammoth";
import { mockTranscriptsByClass } from "../../../../dashboard/mockData";
import "./styles.css";

export default function TranscriptViewerPage() {
  const router = useRouter();
  const params = useParams();
  const { classCode, transcriptId } = params;
  
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const contentRef = useRef(null);
  
  // Get transcript info
  const transcripts = mockTranscriptsByClass[classCode] || [];
  const transcript = transcripts.find(t => t.id === parseInt(transcriptId));

  // For demo purposes, we'll use a sample DOCX URL
  const docxUrl = "/sample.docx";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  // Cleanup on unmount - exit fullscreen if active
  useEffect(() => {
    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error("Error exiting fullscreen:", err));
      }
    };
  }, []);

  // Listen for fullscreen changes (ESC key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const loadDocx = async () => {
      try {
        setLoading(true);
        const response = await fetch(docxUrl);
        const arrayBuffer = await response.arrayBuffer();
        
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
        setLoading(false);
      } catch (err) {
        console.error("Error loading DOCX:", err);
        setError("Failed to load document. Please make sure a sample DOCX exists in the public folder.");
        setLoading(false);
      }
    };

    loadDocx();
  }, [docxUrl]);

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.1, 3.0));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(docxUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = transcript?.title || "transcript.docx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error("Error downloading file:", err);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      contentRef.current?.requestFullscreen().catch(err => {
        console.error("Error entering fullscreen:", err);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.error("Error exiting fullscreen:", err);
      });
    }
  };

  if (!transcript) {
    return (
      <div className="docx-viewer-container">
        <div className="error-message">
          <h2>Transcript not found</h2>
          <button onClick={() => router.push(`/student/reviewers/transcripts/${classCode}`)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`docx-viewer-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Toolbar */}
      <div className="docx-toolbar">
        <div className="toolbar-left">
          <button className="back-btn" onClick={() => router.push(`/student/reviewers/transcripts/${classCode}`)}>
            <FaArrowLeft className="back-icon" />
            <span>Back</span>
          </button>
          
          <div className="document-title">
            <h2>{transcript.title}</h2>
            <div className="document-info">
              <span className="info-badge">{classCode}</span>
              {transcript.duration && <span>{transcript.duration}</span>}
              {transcript.date && <span>{new Date(transcript.date).toLocaleDateString()}</span>}
              {transcript.fileSize && <span>{transcript.fileSize}</span>}
            </div>
          </div>
        </div>

        <div className="toolbar-right">
          <button className="toolbar-btn" onClick={toggleDarkMode} title={darkMode ? "Light Mode" : "Dark Mode"}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="toolbar-btn" onClick={handleDownload} title="Download">
            <FaDownload />
          </button>
          <button className="toolbar-btn" onClick={toggleFullscreen} title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="zoom-controls">
        <button 
          className="zoom-btn" 
          onClick={handleZoomIn} 
          disabled={scale >= 3.0}
          title="Zoom In"
        >
          <FaSearchPlus />
        </button>
        <div className="zoom-level">{Math.round(scale * 100)}%</div>
        <button 
          className="zoom-btn" 
          onClick={handleZoomOut} 
          disabled={scale <= 0.5}
          title="Zoom Out"
        >
          <FaSearchMinus />
        </button>
      </div>

      {/* Document Content */}
      <div className="docx-content-wrapper" ref={contentRef}>
        <div className="docx-document-wrapper">
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading document...</p>
            </div>
          ) : error ? (
            <div className="error-message">
              <p>{error}</p>
              <p className="error-note">For demo: Add a file named "sample.docx" to the public folder</p>
            </div>
          ) : (
            <div 
              className="docx-content"
              style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
