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

# Audio
SAMPLE_RATE = 16000
CHANNELS = 1
CHUNK_DURATION = 5  # seconds per transcription chunk

# Files
TRANSCRIPT_FILE = "transcript.txt"
SUMMARY_FILE = "summary.txt"

# Whisper model
WHISPER_MODEL = WhisperModel("small", device="cpu", compute_type="int8")

# Summarizer settings
SUMMARY_INTERVAL = 10  # seconds
CHUNK_SEGMENTS = 20    # number of transcript segments per summarization chunk
MAX_SUMMARY_LENGTH = 50
MIN_SUMMARY_LENGTH = 20