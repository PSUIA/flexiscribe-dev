"""
config.py

Purpose:
    Store all configuration variables for the project in one place.

Contents to include:
    - Directories:
        - AUDIO_DIR: Folder containing input audio files (data/lectures/)
        - TRANSCRIPTS_DIR: Folder for transcript outputs (transcripts/)
        - SUMMARIES_DIR: Folder for summary outputs (summaries/)
        - MODELS_DIR: Folder containing Whisper, Vosk, and NLP models
    - Model configuration:
        - WHISPER_MODEL: e.g., 'base', 'small', 'medium', 'large'
        - VOSK_MODEL_PATH: local Vosk offline model
        - NLP_MODEL_NAME: e.g., BART or T5 Hugging Face model
    - Summarization parameters:
        - MAX_SUMMARY_LENGTH
        - MIN_SUMMARY_LENGTH
    - Optional parameters:
        - CHUNK_SIZE: for splitting long transcripts or audio
        - TRANSCRIPTION_STRATEGY: 'whisper', 'vosk', or 'hybrid'
        - LOGGING: True/False
"""

SAMPLERATE = 16000
CHANNELS = 1

WHISPER_MODEL = "base"  
VOSK_MODEL_ENGLISH = ""
VOSK_MODEL_TAGALOG = ""

MODEL_NAME = "sshleifer/distilbart-cnn-12-6"
LOCAL_MODEL_PATH = "/absolute/path/to/external/models/distilbart"  # must exist after download

# GPU settings
REQUIRE_CUDA = True
USE_FP16 = True

# Text processing
MAX_WORDS_PER_CHUNK = 500       # adjust for very long transcripts
MAX_INPUT_TOKENS = 1024

# Generation parameters
MAX_SUMMARY_LENGTH = 150
MIN_SUMMARY_LENGTH = 40
NUM_BEAMS = 4
LENGTH_PENALTY = 2.0

# Data paths
INPUT_TEXT_PATH = "/absolute/path/to/external/data/lecture_transcript.txt"
OUTPUT_SUMMARY_PATH = "/absolute/path/to/external/data/lecture_summary.txt"