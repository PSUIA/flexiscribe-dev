"use client";
import React, { useState, useEffect } from "react";
import { FaPlay, FaMicrophone, FaCheck, FaPowerOff, FaUserCircle, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function PrototypeDashboard() {
  const [isRecording, setIsRecording] = useState(false);
  const [micConnected, setMicConnected] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const [audioStream, setAudioStream] = useState(null);
  const [showGuide, setShowGuide] = useState(false);
  const animationFrameRef = React.useRef(null);
  const audioContextRef = React.useRef(null);
  const analyserRef = React.useRef(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    
    // Show guide on every dashboard load
    setShowGuide(true);
    
    // Check microphone permission on mount only if API is available
    if (typeof window !== 'undefined' && navigator?.mediaDevices?.getUserMedia) {
      checkMicrophonePermission();
    }

    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Stop recording when mic is disconnected
  useEffect(() => {
    if (!micConnected && isRecording) {
      setIsRecording(false);
      console.log("Recording stopped: Microphone disconnected");
    }
  }, [micConnected, isRecording]);

  const checkMicrophonePermission = async () => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !navigator?.mediaDevices?.getUserMedia) {
      setMicConnected(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicConnected(true);
      setAudioStream(stream);
      
      // Set up audio analysis for mic activity animation
      startAudioMonitoring(stream);
    } catch (err) {
      console.error("Microphone access denied:", err);
      setMicConnected(false);
    }
  };

  const startAudioMonitoring = (stream) => {
    // Create audio context and analyser
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    microphone.connect(analyser);
    
    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    
    // Monitor audio levels
    const detectAudio = () => {
      analyser.getByteFrequencyData(dataArray);
      
      // Calculate average volume
      const average = dataArray.reduce((a, b) => a + b) / bufferLength;
      const normalizedLevel = Math.min(average / 128, 1); // Normalize to 0-1
      
      setAudioLevel(normalizedLevel);
      
      animationFrameRef.current = requestAnimationFrame(detectAudio);
    };
    
    detectAudio();
  };

  const stopAudioMonitoring = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (audioStream) {
      audioStream.getTracks().forEach(track => track.stop());
      setAudioStream(null);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setAudioLevel(0);
  };

  const handlePlayClick = async () => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !navigator?.mediaDevices?.getUserMedia) {
      alert("MediaDevices API not available. Please use HTTPS or localhost.");
      return;
    }

    if (!micConnected) {
      alert("Please connect your microphone first!");
      return;
    }

    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsRecording(true);
        console.log("Recording started...");
        // In a real implementation, you would handle the recording here
      } catch (err) {
        console.error("Error starting recording:", err);
        alert("Failed to start recording. Please check your microphone.");
      }
    } else {
      setIsRecording(false);
      console.log("Recording stopped...");
      // In a real implementation, you would stop and process the recording here
    }
  };

  const handleMicClick = () => {
    if (micConnected) {
      // Stop monitoring if already connected
      stopAudioMonitoring();
      setMicConnected(false);
    } else {
      // Start monitoring
      checkMicrophonePermission();
    }
  };

  const handleLogout = () => {
    // Clean up audio monitoring
    stopAudioMonitoring();
    setMicConnected(false);
    setIsRecording(false);
    
    // Navigate to landing page
    router.push('/');
  };

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="prototype-container">
      {/* User Guide Modal */}
      {showGuide && (
        <div className="guide-overlay" onClick={() => setShowGuide(false)}>
          <div className="guide-modal" onClick={(e) => e.stopPropagation()}>
            <button className="guide-close" onClick={() => setShowGuide(false)}>✕</button>
            
            <div className="guide-header">
              <img src="/img/fLexiScribe-logo.png" alt="Logo" className="guide-logo" />
              <div>
                <h2 className="guide-title">fLexiScribe</h2>
                <p className="guide-subtitle">Your Note-Taking Assistant</p>
              </div>
            </div>

            <div className="guide-content">
              {/* Step 1 */}
              <div className="guide-step">
                <div className="guide-step-number">1</div>
                <div className="guide-step-icon">
                  <FaPowerOff />
                </div>
                <div className="guide-step-content">
                  <h3 className="guide-step-title">POWER ON</h3>
                  <p className="guide-step-text">
                    Press the <strong>Power Button</strong> to start the device.<br />
                    Wait for the Home Screen to load.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="guide-step">
                <div className="guide-step-number">2</div>
                <div className="guide-step-icon">
                  <FaMicrophone />
                </div>
                <div className="guide-step-content">
                  <h3 className="guide-step-title">CONNECT MIC</h3>
                  <p className="guide-step-text">
                    Power on the <strong>Microphone</strong> and connect it<br />
                    to the device. Click the MIC button to enable.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="guide-step">
                <div className="guide-step-number">3</div>
                <div className="guide-step-icon">
                  <FaUserCircle />
                </div>
                <div className="guide-step-content">
                  <h3 className="guide-step-title">LOGIN ACCOUNT</h3>
                  <p className="guide-step-text">
                    Login your <strong>Educator Account</strong> to the device.<br />
                    You are now logged in and ready to record.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="guide-step">
                <div className="guide-step-number">4</div>
                <div className="guide-step-icon">
                  <FaPlay />
                </div>
                <div className="guide-step-content">
                  <h3 className="guide-step-title">START RECORD</h3>
                  <p className="guide-step-text">
                    Start the recording by pressing the <strong>Play Button</strong><br />
                    shown on the screen. Speak clearly into the mic.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="guide-step">
                <div className="guide-step-number">5</div>
                <div className="guide-step-icon">
                  <div className="stop-icon"></div>
                </div>
                <div className="guide-step-content">
                  <h3 className="guide-step-title">STOP RECORD</h3>
                  <p className="guide-step-text">
                    Stop the recording by pressing the <strong>Stop Button</strong><br />
                    shown on the screen. Your recording will be saved.
                  </p>
                </div>
              </div>
            </div>

            <button className="guide-button" onClick={() => setShowGuide(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}

      <div className="prototype-content">
        {/* Action Buttons - Top Right */}
        <div className="action-buttons">
          <button className="action-btn help-btn" onClick={toggleGuide} aria-label="Open guide">
            <FaQuestionCircle />
            <span>Guide</span>
          </button>
          <button className="action-btn logout-btn" onClick={handleLogout} aria-label="Logout">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>

        {/* Header */}
        <div className="prototype-header">
          <div className="logo-section">
            <div className="logo-content">
              <img src="/img/fLexiScribe-logo.png" alt="Logo" className="h-24 w-24" />
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold">fLexiScribe</h1>
                <p className="text-sm font-normal">Your Note-Taking Assistant</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Control Panel */}
        <div className="control-panel">
          {/* Play Button */}
          <div className="control-section">
            <div className="control-label">PLAY</div>
            <button 
              className={`control-button play-button ${isRecording ? 'recording' : ''}`}
              onClick={handlePlayClick}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
            >
              <FaPlay className="control-icon" />
            </button>
            <div className="control-status">
              {isRecording ? "Recording..." : "Press play to start recording."}
            </div>
          </div>

          {/* Mic Button */}
          <div className="control-section">
            <div className="control-label">MIC</div>
            <button 
              className={`control-button mic-button ${micConnected ? 'connected' : 'disconnected'} ${audioLevel > 0.1 ? 'active' : ''}`}
              onClick={handleMicClick}
              aria-label="Check microphone"
              style={{
                '--audio-level': audioLevel
              }}
            >
              {/* Show mic icon when no activity, sound wave when active */}
              {audioLevel > 0.1 ? (
                <div className="sound-wave">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="wave-bar"
                      style={{
                        '--bar-height': audioLevel,
                        '--bar-delay': `${index * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              ) : (
                <FaMicrophone className="control-icon" />
              )}
            </button>
            
            <div className={`control-status mic-status ${micConnected ? 'connected' : ''}`}>
              <span>MIC: </span>
              {micConnected ? (
                <>
                  <FaCheck className="check-icon" /> Connected
                </>
              ) : (
                "Disconnected"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
