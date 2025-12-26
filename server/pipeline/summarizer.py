"""
summarizer.py

Purpose:
    Generate concise summaries from cleaned transcript text.

Functions to implement:
    - summarize_text(text)
        - Load NLP summarization model (BART, T5, etc.)
        - Input: cleaned transcript
        - Optional: handle long transcripts by chunking
        - Generate summary for each chunk and merge into final summary
        - Return final summary string

Notes:
    - Summarization parameters (max/min length) configurable in config.py
    - Keep module flexible to switch NLP models if needed
"""
import os
import time
from pathlib import Path
from transformers import pipeline
import json

# ------------------------------
# Suppress TF info/warnings
# ------------------------------
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

TRANSCRIPT_FILE = Path("transcript.txt")
SUMMARY_FILE = Path("summary.txt")
SUMMARY_INTERVAL = 10  # seconds for near real-time summary
CHUNK_SEGMENTS = 20    # number of transcript segments per summarization chunk

# ------------------------------
# Load summarization model on CPU
# ------------------------------
print("Loading summarization model on CPU...")
summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn",
    device=-1
)
print("Summarization model loaded on CPU.\n")

# ------------------------------
# Read structured transcript
# ------------------------------
def read_segments():
    segments = []
    if not TRANSCRIPT_FILE.exists():
        return segments
    with open(TRANSCRIPT_FILE, "r", encoding="utf-8") as f:
        for line in f:
            try:
                segments.append(json.loads(line))
            except:
                continue
    return segments

# ------------------------------
# Write bullet summary
# ------------------------------
def write_summary(summary_text):
    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        f.write(summary_text)
    print(f"[SUMMARY UPDATED] {len(summary_text.split())} words")

# ------------------------------
# Chunk transcript segments
# ------------------------------
def chunk_segments(segments, chunk_size=CHUNK_SEGMENTS):
    for i in range(0, len(segments), chunk_size):
        yield segments[i:i + chunk_size]

# ------------------------------
# Generate reviewer-ready bullet summary (no timestamps)
# ------------------------------
def start_summarizer():
    print(f"Starting live summarizer (updates every {SUMMARY_INTERVAL}s)...\n")
    previous_count = 0
    try:
        while True:
            time.sleep(SUMMARY_INTERVAL)
            segments = read_segments()
            if len(segments) == previous_count:
                continue
            previous_count = len(segments)

            bullets = []
            for chunk in chunk_segments(segments):
                # Combine texts for summarization
                text = " ".join([s["text"] for s in chunk])
                result = summarizer(
                    text,
                    max_length=50,
                    min_length=20,
                    do_sample=False
                )
                summary_text = result[0]["summary_text"]
                bullets.append(f"- {summary_text}")

            final_summary = "\n".join(bullets)
            write_summary(final_summary)

    except KeyboardInterrupt:
        print("\n*STOPPED LIVE SUMMARIZATION*")
