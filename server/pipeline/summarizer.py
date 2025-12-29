"""
Purpose:
    Generate reviewer-ready summaries from live transcription in near real-time.

Functions:
    - start_summarizer()
        - Read transcript segments periodically (default every 10s)
        - Chunk segments into manageable sizes
        - Generate bullet-point summaries using a CPU-based Hugging Face model
        - Save summary to summary.txt

Notes:
    - Summaries are clean bullets without timestamps
    - Designed to be CPU-friendly for testing on slower machines
    - Updates summary regularly for live reviewing
"""

import os
import time
from transformers import pipeline
from .config import SUMMARY_INTERVAL, CHUNK_SEGMENTS, MAX_SUMMARY_LENGTH, MIN_SUMMARY_LENGTH
from .file_manager import read_transcript_segments, write_summary
from .utils import chunk_segments

# Suppress TF warnings
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

print("Loading summarization model on CPU...")

summarizer_model = pipeline("summarization", model="facebook/bart-large-cnn", device=-1)

print("Summarization model loaded.\n")

def start_summarizer():
    previous_count = 0
    try:
        while True:
            time.sleep(SUMMARY_INTERVAL)

            segments = read_transcript_segments()

            if len(segments) == previous_count:
                continue

            previous_count = len(segments)

            bullets = []

            for chunk in chunk_segments(segments, CHUNK_SEGMENTS):
                text = " ".join([s["text"] for s in chunk])

                if not text.strip():
                    continue

                result = summarizer_model(
                    text,
                    max_length=MAX_SUMMARY_LENGTH,
                    min_length=MIN_SUMMARY_LENGTH,
                    do_sample=False
                )
                
                bullets.append(f"- {result[0]['summary_text']}")

            final_summary = "\n".join(bullets)
            
            write_summary(final_summary)

    except KeyboardInterrupt:
        print("\n*STOPPED SUMMARIZATION*")