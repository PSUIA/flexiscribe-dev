"""
preprocessing.py

Purpose:
    Clean and prepare transcript text for summarization.

Functions to implement:
    - clean_text(text)
        - Remove line breaks, extra spaces, timestamps
        - Remove filler words ('um', 'uh', etc.)
        - Fix punctuation and capitalization
        - Optional: normalize Taglish (Filipino-English) content

Notes:
    - Output should be a cleaned string ready for NLP summarization
    - Keep preprocessing modular to allow adding more cleaning rules
"""

import torch

print(f"CUDA Available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA Device Name: {torch.cuda.get_device_name(0)}")
else:
    print("CUDA is not available, falling back to CPU.")

