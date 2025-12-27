"""
Purpose:
    Handle reading and writing of transcript segments and summary files.

Functions to implement:
    - save_transcript_segment(segment: dict)
        - Save a single transcription segment as a JSON line
    - read_transcript_segments() -> list
        - Read all JSON lines from the transcript file and return as list of dicts
    - write_summary(summary_text: str)
        - Write the final summarized text to a file

Notes:
    - Should only deal with file I/O
    - JSON format is used for transcript segments to preserve timestamps and structure
    - Summary file is plain text for reviewer-ready bullets
"""


import json
from pathlib import Path
from .config import TRANSCRIPT_FILE, SUMMARY_FILE

def save_transcript_segment(segment):
    with open(TRANSCRIPT_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps(segment) + "\n")

def read_transcript_segments():
    segments = []
    path = Path(TRANSCRIPT_FILE)

    if not path.exists():
        return segments
    
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            try:
                segments.append(json.loads(line))
            except:
                continue
    return segments

def write_summary(summary_text):
    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        f.write(summary_text)
