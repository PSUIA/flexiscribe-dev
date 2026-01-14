"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { Editor } from "@tinymce/tinymce-react";
import { 
  FaMoon, FaSun, FaArrowLeft, FaDownload, FaSave
} from "react-icons/fa";
import mammoth from "mammoth";
import { mockReviewersByClass } from "../../../dashboard/mockData";
import "./styles.css";

export default function ReviewerEditorPage() {
  const router = useRouter();
  const params = useParams();
  const classCode = params.classCode;
  const reviewerId = params.reviewerId;
  
  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [contentLoaded, setContentLoaded] = useState(false);
  const editorRef = useRef(null);
  const contentInitialized = useRef(false);
  const initialContentRef = useRef("");
  const isTyping = useRef(false);
  
  // Get reviewer data
  const reviewers = mockReviewersByClass[classCode] || [];
  const reviewer = reviewers.find(r => r.id === parseInt(reviewerId));
  
  // Use absolute URL for both localhost and network access
  const getDocxUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/sample.docx`;
    }
    return "/sample.docx";
  };

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  // Load DOCX document
  useEffect(() => {
    const loadDocument = async () => {
      try {
        const docxUrl = getDocxUrl();
        console.log("Loading document from:", docxUrl);
        
        // Check localStorage first
        const savedContent = localStorage.getItem(`reviewer-${classCode}-${reviewerId}`);
        if (savedContent) {
          console.log("Loading from localStorage");
          initialContentRef.current = savedContent;
          setEditorContent(savedContent);
          setContentLoaded(true);
          setLoading(false);
          return;
        }

        console.log("Fetching DOCX file...");
        const response = await fetch(docxUrl, {
          method: 'GET',
          cache: 'no-cache',
          headers: {
            'Accept': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          }
        });
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        
        if (!response.ok) throw new Error(`Document not found: ${response.status}`);
        
        const arrayBuffer = await response.arrayBuffer();
        console.log("ArrayBuffer size:", arrayBuffer.byteLength);
        
        const result = await mammoth.convertToHtml({ 
          arrayBuffer,
          styleMap: [
            "p[style-name='Heading 1'] => h1:fresh",
            "p[style-name='Heading 2'] => h2:fresh",
            "p[style-name='Heading 3'] => h3:fresh",
            "b => strong",
            "i => em",
          ]
        });
        
        console.log("Conversion result:", result.value.substring(0, 200));
        initialContentRef.current = result.value;
        setEditorContent(result.value);
        setContentLoaded(true);
        setLoading(false);
      } catch (err) {
        console.error("Error loading document:", err);
        setEditorContent(`
          <h1>Welcome to the Reviewer Editor</h1>
          <p>Start typing to create your document...</p>
          <p><em>Note: Place a DOCX file at public/sample.docx to load it automatically.</em></p>
          <p style="color: red;"><strong>Error: ${err.message}</strong></p>
        `);
        setLoading(false);
      }
    };

    loadDocument();
  }, [classCode, reviewerId]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("Saving...");
    
    try {
      localStorage.setItem(`reviewer-${classCode}-${reviewerId}`, editorContent);
      
      // TODO: Backend Integration
      // await fetch('http://your-backend-url/api/reviewers/save', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     classCode,
      //     reviewerId,
      //     content: editorContent,
      //     format: 'html'
      //   })
      // });
      
      setSaveStatus("✓ Saved");
      setTimeout(() => setSaveStatus(""), 2000);
    } catch (error) {
      console.error("Save error:", error);
      setSaveStatus("✗ Error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      // TODO: Backend Integration
      // const response = await fetch('http://your-backend-url/api/reviewers/convert-to-pdf', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ content: editorContent })
      // });
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = `${reviewer?.title || 'reviewer'}.pdf`;
      // a.click();
      
      alert("PDF download will be implemented with backend. See BACKEND_INTEGRATION.md");
    } catch (error) {
      console.error("PDF download error:", error);
    }
  };

  if (!reviewer) {
    return (
      <div className="reviewer-editor-container">
        <div className="error-message">
          <h2>Reviewer not found</h2>
          <button onClick={() => router.push(`/student/reviewers/${classCode}`)}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`reviewer-editor-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Toolbar */}
      <div className="editor-toolbar">
        <div className="toolbar-left">
          <button className="toolbar-btn back-btn" onClick={() => router.back()}>
            <FaArrowLeft />
            <span>Back</span>
          </button>
          <div className="document-title">
            <h2>{reviewer.title}</h2>
            <div className="document-info">{classCode} • Editable Document</div>
          </div>
        </div>
        <div className="toolbar-right">
          {saveStatus && <div className="save-status">{saveStatus}</div>}
          <button className="toolbar-btn" onClick={handleSave} disabled={isSaving}>
            <FaSave />
            <span>{isSaving ? "Saving..." : "Save"}</span>
          </button>
          <button className="toolbar-btn" onClick={handleDownloadPDF}>
            <FaDownload />
            <span>Download PDF</span>
          </button>
          <button className="toolbar-btn icon-only" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="editor-content">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading document...</p>
          </div>
        ) : (
          <div className="tinymce-wrapper">
            <Editor
              key={contentLoaded ? 'loaded' : 'loading'}
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              initialValue={initialContentRef.current || "<p>Loading content...</p>"}
              onInit={(evt, editor) => {
                editorRef.current = editor;
                contentInitialized.current = true;
                console.log("TinyMCE initialized, editor ready");
                console.log("Content loaded:", contentLoaded, "Content length:", initialContentRef.current?.length || 0);
              }}
              onEditorChange={(content) => {
                isTyping.current = true;
                setEditorContent(content);
              }}
              init={{
                height: 700,
                width: '100%',
                menubar: false,
                promotion: false,
                license_key: 'gpl',
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                  'anchor', 'searchreplace', 'visualblocks', 'code',
                  'insertdatetime', 'media', 'table', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright | bullist numlist | table | removeformat',
                table_toolbar: 'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | tablecellprops tablemergecells tablesplitcells',
                content_style: `
                  body { 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #1a1a1a;
                    padding: 20px;
                  }
                  table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                    table-layout: fixed;
                  }
                  table td, table th {
                    border: 2px solid #5b21b6;
                    padding: 12px;
                    vertical-align: top;
                  }
                  table tr:first-child td, table tr:first-child th {
                    background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
                    color: white;
                    font-weight: 700;
                  }
                  table td[style*="width: 30%"] {
                    background: #f3f4f6;
                    width: 30%;
                  }
                  table td[style*="width: 70%"] {
                    background: #white;
                    width: 70%;
                  }
                  table td[colspan] {
                    background: #fefce8;
                  }
                `,
                skin: darkMode ? 'oxide-dark' : 'oxide',
                content_css: darkMode ? 'dark' : 'default',
                branding: false,
                resize: false,
                statusbar: true,
                table_default_attributes: {
                  border: '2'
                },
                table_default_styles: {
                  'border-collapse': 'collapse',
                  'width': '100%'
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
