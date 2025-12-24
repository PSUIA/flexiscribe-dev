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
import torch
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from pipeline.config import *

torch.set_grad_enabled(False)

class Summarizer:
    def __init__(self):
        if REQUIRE_CUDA and not torch.cuda.is_available():
            raise RuntimeError("CUDA device required. CPU execution disabled.")

        self.device = torch.device("cuda")

        # Bootstrap model if missing
        if not os.path.exists(LOCAL_MODEL_PATH):
            print("Local model not found. Downloading DistilBART...")
            os.makedirs(LOCAL_MODEL_PATH, exist_ok=True)
            AutoTokenizer.from_pretrained(MODEL_NAME).save_pretrained(LOCAL_MODEL_PATH)
            AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME).save_pretrained(LOCAL_MODEL_PATH)
            print("Model downloaded and cached.")

        # Load model
        self.tokenizer = AutoTokenizer.from_pretrained(LOCAL_MODEL_PATH)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(LOCAL_MODEL_PATH).to(self.device)

        if USE_FP16:
            self.model = self.model.half()

        self.model.eval()

    def _chunk_text(self, text):
        """Yield chunks of text to avoid exceeding token limit"""
        words = text.split()
        for i in range(0, len(words), MAX_WORDS_PER_CHUNK):
            yield " ".join(words[i:i + MAX_WORDS_PER_CHUNK])

    def _summarize_chunk(self, text):
        """Summarize a single chunk"""
        inputs = self.tokenizer(
            text,
            return_tensors="pt",
            truncation=True,
            max_length=MAX_INPUT_TOKENS
        ).to(self.device)

        with torch.inference_mode():
            summary_ids = self.model.generate(
                inputs["input_ids"],
                max_length=MAX_SUMMARY_LENGTH,
                min_length=MIN_SUMMARY_LENGTH,
                num_beams=NUM_BEAMS,
                length_penalty=LENGTH_PENALTY,
                early_stopping=True
            )

        return self.tokenizer.decode(summary_ids[0], skip_special_tokens=True)

    def summarize_text(self, text):
        """Hierarchical summarization: chunk → combine → final summary"""
        partial_summaries = [self._summarize_chunk(chunk) for chunk in self._chunk_text(text)]
        return self._summarize_chunk(" ".join(partial_summaries))

    def summarize_file(self, input_path, output_path=None):
        """Summarize a file and optionally save output"""
        with open(input_path, "r", encoding="utf-8") as f:
            text = f.read()

        summary = self.summarize_text(text)

        if output_path:
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(summary)

        return summary