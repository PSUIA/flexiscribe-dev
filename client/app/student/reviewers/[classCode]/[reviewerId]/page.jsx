"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";
import { 
  FaArrowLeft, 
  FaDownload, 
  FaSearchPlus, 
  FaSearchMinus, 
  FaChevronLeft, 
  FaChevronRight,
  FaHighlighter,
  FaStickyNote,
  FaFont,
  FaEraser,
  FaSave,
  FaExpand,
  FaCompress
} from "react-icons/fa";
import { mockReviewersByClass } from "../../../dashboard/mockData";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./styles.css";

export default function PDFViewerPage() {
  const router = useRouter();
  const params = useParams();
  const classCode = params.classCode;
  const reviewerId = params.reviewerId;
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTool, setActiveTool] = useState(null);
  const [annotations, setAnnotations] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // Get reviewer data
  const reviewers = mockReviewersByClass[classCode] || [];
  const reviewer = reviewers.find(r => r.id === parseInt(reviewerId));

  // For demo purposes, we'll use a sample PDF URL
  // In production, this would come from your backend/storage
  const pdfUrl = "/sample.pdf"; // You'll need to add a sample PDF to your public folder

  // Set up PDF.js worker
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
  }, []);

  // Memoize PDF options to prevent unnecessary reloads
  const pdfOptions = useMemo(() => ({
    cMapUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
  }), []);

  useEffect(() => {
    // Load saved annotations from localStorage
    const savedAnnotations = localStorage.getItem(`annotations-${classCode}-${reviewerId}`);
    if (savedAnnotations) {
      setAnnotations(JSON.parse(savedAnnotations));
    }
  }, [classCode, reviewerId]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      return Math.max(1, Math.min(newPage, numPages));
    });
  };

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.2, 3.0));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  };

  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${reviewer?.title || 'document'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleToolSelect = (tool) => {
    setActiveTool(activeTool === tool ? null : tool);
  };

  const handleSaveAnnotations = () => {
    localStorage.setItem(`annotations-${classCode}-${reviewerId}`, JSON.stringify(annotations));
    alert('Annotations saved successfully!');
  };

  const handleClearAnnotations = () => {
    if (window.confirm('Are you sure you want to clear all annotations?')) {
      setAnnotations([]);
      localStorage.removeItem(`annotations-${classCode}-${reviewerId}`);
    }
  };

  const handleAddNote = () => {
    const noteText = prompt('Enter your note:');
    if (noteText) {
      const newAnnotation = {
        id: Date.now(),
        type: 'note',
        page: pageNumber,
        text: noteText,
        timestamp: new Date().toISOString()
      };
      setAnnotations([...annotations, newAnnotation]);
    }
  };

  const handleAddText = () => {
    const text = prompt('Enter text to add:');
    if (text) {
      const newAnnotation = {
        id: Date.now(),
        type: 'text',
        page: pageNumber,
        text: text,
        timestamp: new Date().toISOString()
      };
      setAnnotations([...annotations, newAnnotation]);
    }
  };

  if (!reviewer) {
    return (
      <div className="pdf-viewer-container">
        <div className="error-message">
          <h2>Reviewer not found</h2>
          <button onClick={() => router.push(`/student/reviewers/${classCode}`)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-viewer-container">
      {/* Header Toolbar */}
      <div className="pdf-toolbar">
        <div className="toolbar-left">
          <button className="toolbar-btn back-btn" onClick={() => router.push(`/student/reviewers/${classCode}`)}>
            <FaArrowLeft />
            <span>Back</span>
          </button>
          <div className="document-title">
            <h2>{reviewer.title}</h2>
            <span className="document-info">{reviewer.subject} • {reviewer.fileSize}</span>
          </div>
        </div>

        <div className="toolbar-right">
          <button className="toolbar-btn" onClick={handleDownload} title="Download PDF">
            <FaDownload />
          </button>
          <button className="toolbar-btn" onClick={toggleFullscreen} title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>

      {/* Edit Toolbar */}
      <div className="edit-toolbar">
        <div className="edit-tools">
          <button 
            className={`tool-btn ${activeTool === 'highlight' ? 'active' : ''}`}
            onClick={() => handleToolSelect('highlight')}
            title="Highlight"
          >
            <FaHighlighter />
            <span>Highlight</span>
          </button>
          <button 
            className={`tool-btn ${activeTool === 'note' ? 'active' : ''}`}
            onClick={handleAddNote}
            title="Add Note"
          >
            <FaStickyNote />
            <span>Note</span>
          </button>
          <button 
            className={`tool-btn ${activeTool === 'text' ? 'active' : ''}`}
            onClick={handleAddText}
            title="Add Text"
          >
            <FaFont />
            <span>Text</span>
          </button>
          <button 
            className="tool-btn"
            onClick={handleClearAnnotations}
            title="Clear All"
          >
            <FaEraser />
            <span>Clear</span>
          </button>
          <button 
            className="tool-btn save-btn"
            onClick={handleSaveAnnotations}
            title="Save Annotations"
          >
            <FaSave />
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="pdf-content">
        {/* Zoom Controls */}
        <div className="zoom-controls">
          <button className="zoom-btn" onClick={handleZoomOut} disabled={scale <= 0.5}>
            <FaSearchMinus />
          </button>
          <span className="zoom-level">{Math.round(scale * 100)}%</span>
          <button className="zoom-btn" onClick={handleZoomIn} disabled={scale >= 3.0}>
            <FaSearchPlus />
          </button>
        </div>

        {/* PDF Document */}
        <div className="pdf-document-wrapper">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            options={pdfOptions}
            loading={
              <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading PDF...</p>
              </div>
            }
            error={
              <div className="error-message">
                <p>Failed to load PDF. Please make sure a sample PDF exists in the public folder.</p>
                <p className="error-note">For demo: Add a file named "sample.pdf" to the public folder</p>
              </div>
            }
          >
            {/* Render all pages for scrolling */}
            {Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} className="pdf-page-container">
                <Page 
                  pageNumber={index + 1} 
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="pdf-page"
                />
                <div className="page-number-label">Page {index + 1} of {numPages}</div>
                
                {/* Annotations for this page */}
                {annotations
                  .filter(ann => ann.page === index + 1)
                  .map(annotation => (
                    <div key={annotation.id} className={`annotation annotation-${annotation.type}`}>
                      <div className="annotation-content">
                        {annotation.type === 'note' && (
                          <>
                            <FaStickyNote className="annotation-icon" />
                            <span>{annotation.text}</span>
                          </>
                        )}
                        {annotation.type === 'text' && <span>{annotation.text}</span>}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </Document>
        </div>

        {/* Page Navigation Info */}
        <div className="page-navigation">
          <div className="page-info">
            <span>Total Pages: {numPages || '--'}</span>
          </div>
        </div>
      </div>

      {/* Annotations Sidebar */}
      {annotations.length > 0 && (
        <div className="annotations-sidebar">
          <h3>Annotations ({annotations.length})</h3>
          <div className="annotations-list">
            {annotations.map(annotation => (
              <div 
                key={annotation.id} 
                className="annotation-item"
                onClick={() => setPageNumber(annotation.page)}
              >
                <div className="annotation-header">
                  {annotation.type === 'note' && <FaStickyNote />}
                  {annotation.type === 'text' && <FaFont />}
                  <span className="annotation-page">Page {annotation.page}</span>
                </div>
                <p className="annotation-text">{annotation.text}</p>
                <button 
                  className="delete-annotation"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAnnotations(annotations.filter(a => a.id !== annotation.id));
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
