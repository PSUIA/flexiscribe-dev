"""
Purpose:
    Coordinate the concurrent execution of transcription and summarization.

Functions:
    - start_pipeline()
        - Start summarizer in a separate daemon thread
        - Start transcription in main thread
        - Ensure both run concurrently and safely

Notes:
    - Ensures modular separation of transcription and summarization
    - Allows live summarization while recording
"""

from threading import Thread
from .transcription import start_transcription
from .summarizer import start_summarizer

def start_pipeline():
    summary_thread = Thread(target=start_summarizer, daemon=True)
    summary_thread.start()

    start_transcription()