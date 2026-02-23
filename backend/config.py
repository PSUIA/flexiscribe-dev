import os

# Base output directory for transcription files
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "output")

# Whisper settings
SAMPLE_RATE = 16000
CHUNK_DURATION = 10  # seconds per audio chunk
CHANNELS = 1
WHISPER_MODEL = "base"
WHISPER_DEVICE = "cpu"
WHISPER_COMPUTE_TYPE = "float32"

# Summarizer settings
OLLAMA_MODEL = "gemma3:1b"

# Minute buffer interval (seconds)
BUFFER_INTERVAL = 60

# Frontend callback URL (Next.js API)
FRONTEND_URL = os.environ.get("FRONTEND_URL", "http://localhost:3000")
