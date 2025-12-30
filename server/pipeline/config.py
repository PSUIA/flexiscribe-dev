"""
Purpose:
    Store all constants, configuration parameters, and model objects used across the pipeline.

Contents:
    - Audio settings (sample rate, channels, chunk duration)
    - File paths for transcripts and summaries
    - Whisper model initialization
    - Summarizer settings (interval, chunk size, max/min summary length)

Notes:
    - Centralized location for easy modification of parameters
    - No computation or I/O should be performed here
"""

from faster_whisper import WhisperModel

# Files
TRANSCRIPT_FILE = "transcript.txt"
SUMMARY_FILE = "summary.txt"

# Audio
SAMPLE_RATE = 16000
CHANNELS = 1
CHUNK_DURATION = 5  # seconds per transcription chunk

# Whisper model
WHISPER_MODEL = WhisperModel("small", device="cpu", compute_type="int8")

# Summarizer settings
SUMMARY_CHECK_INTERVAL = 10  # seconds between checking for new transcript content
TARGET_SUMMARY_WORDS = 500
