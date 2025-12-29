"""
Purpose:
    Entry point for the fLexiScribe pipeline.

Functions:
    - Starts the orchestrator to run transcription and summarization concurrently
    - Handles graceful shutdown on interruption

Notes:
    - Minimal logic here; delegates all processing to orchestrator
    - Keeps main.py clean and focused on launching the pipeline
    - Both threads (transcription and summarization) run simultaneously
    - Progressive summarization continuously updates as lecture proceeds
"""

from pipeline.orchestrator import start_pipeline

if __name__ == "__main__":
    try:
        print("[Main] Initializing fLexiScribe...\n")
        start_pipeline()
        
    except KeyboardInterrupt:
        print("\n[Main] Pipeline stopped by user")
        print("[Main] Transcription saved")
        print("[Main] Summary finalized\n")
    
    except Exception as e:
        print(f"\n[Main] Error: {e}")
        print("[Main] Pipeline terminated unexpectedly\n")
