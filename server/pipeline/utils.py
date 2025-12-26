"""
Purpose:
    Provide helper functions that can be used across multiple modules.

Functions to implement:
    - flatten_audio(audio_buffer: list) -> np.array
        - Concatenate audio chunks and flatten to mono
    - chunk_segments(segments: list, chunk_size: int) -> generator
        - Split a list of transcript segments into smaller chunks for summarization
    - optional logging or progress reporting functions
    - optional timing or performance helpers

Notes:
    - Keep functions general-purpose and reusable
    - Avoid adding core logic; only helpers
"""

import numpy as np

def flatten_audio(audio_buffer):
    audio = np.concatenate(audio_buffer, axis=0)
    return audio.flatten()

def chunk_segments(segments, chunk_size):
    for i in range(0, len(segments), chunk_size):
        yield segments[i:i + chunk_size]