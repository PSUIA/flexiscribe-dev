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

import os

# Audio settings
SAMPLERATE = 16000
CHANNELS = 1

# Whisper refinement settings
WHISPER_MODEL = "base"  # Used by faster-whisper (GPU)
WHISPER_WINDOW_SEC = 60
WHISPER_OVERLAP_SEC = 15

# Vosk (real-time captions)
VOSK_MODEL_PATH = "/home/psuia/Documents/fLexiScribe/server/models/vosk-model-en-us-0.42-gigaspeech/"

# Directories
TRANSCRIPTS_DIR = "data/transcripts/"
AUDIO_DIR = "data/audio/"

os.makedirs(TRANSCRIPTS_DIR, exist_ok=True)
os.makedirs(AUDIO_DIR, exist_ok=True)