"""                           
Purpose:
    Provide helper functions that can be used across multiple modules.

Functions to implement:
    - flatten_audio(audio_buffer: list) -> np.array
        - Concatenate audio chunks and flatten to mono

Notes:
    - Keep functions general-purpose and reusable
    - Avoid adding core logic; only helpers
"""

import numpy as np

def flatten_audio(audio_buffer):
    audio = np.concatenate(audio_buffer, axis=0)
    return audio.flatten()