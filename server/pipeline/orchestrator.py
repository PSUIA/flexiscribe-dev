"""
orchestrator.py

Purpose:
    Orchestrate the full end-to-end workflow:
    Audio → Transcription → Preprocessing → Summarization → Save Summary

Functions to implement:
    - run_pipeline(audio_file, transcript_file, summary_file, strategy="hybrid")
        Steps:
            1. Transcribe audio using transcription.py with selected strategy
            2. Read transcript and clean it using preprocessing.py
            3. Generate summary using summarizer.py
            4. Save summary using file_manager.py
        Optional:
            - Batch processing of multiple audio files
            - Error handling for missing or corrupted files
            - Logging execution time for each stage

Notes:
    - Flexible transcription strategy:
        'whisper', 'vosk', or 'hybrid'
    - Core module connecting all other modules
"""
