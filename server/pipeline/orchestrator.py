"""
Purpose:
    Coordinate the concurrent execution of transcription and summarization.

Functions:
    - start_pipeline()
        - Start summarizer in a separate daemon thread with configurable interval
        - Start transcription in main thread
        - Ensure both run concurrently and safely
        - Handle graceful shutdown of both threads

Notes:
    - Ensures modular separation of transcription and summarization
    - Allows live progressive summarization while recording
    - Thread-safe with proper locking mechanisms
    - Summarization runs independently and continuously updates
"""

from threading import Thread
from .transcription import start_transcription
from .summarizer import start_summarizer
from .config import SUMMARY_CHECK_INTERVAL

def start_pipeline():
    """
    Start the fLexiScribe pipeline with concurrent transcription and summarization.
    
    The summarizer runs as a daemon thread that:
    - Checks for new transcript content every SUMMARY_CHECK_INTERVAL seconds
    - Progressively builds and refines summary as lecture continues
    - Updates summary.txt in real-time for live reviewing
    """
    print("[Pipeline] Starting fLexiScribe pipeline")
    print(f"[Pipeline] Summarizer check interval: {SUMMARY_CHECK_INTERVAL}s\n")
    
    # Start summarizer thread
    summary_thread = Thread(
        target=start_summarizer,
        args=(SUMMARY_CHECK_INTERVAL,),
        daemon=True,
        name="SummarizerThread"
    )
    summary_thread.start()
    print("[Summarizer] Thread started\n")
    
    # Start transcription in main thread
    print("[Transcription] Starting...\n")
    start_transcription()