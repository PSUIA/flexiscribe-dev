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

# Model paths
WHISPER_MODEL = "small"
VOSK_MODEL_PATH = "./models/vosk-model-en-us-0.42-gigaspeech"

# Transcript settings
TRANSCRIPTS_DIR = "./data/transcripts/"
os.makedirs(TRANSCRIPTS_DIR, exist_ok=True)