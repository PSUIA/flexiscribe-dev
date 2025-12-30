"""
Purpose:
    Generate reviewer-ready summaries from live transcription in near real-time.
    Uses progressive batch summarization with translation support.

Functions:
    - start_summarizer()
        - Read transcript segments periodically
        - Progressive batch processing: translate → summarize → refine
        - Updates summary continuously as new content arrives
        - Maintains context continuity across the lecture

Notes:
    - Progressive refinement: each batch updates the running summary
    - Supports translation from Tagalog to English
    - AI-powered context-aware summarization
    - Updates summary.txt after each batch for live reviewing
"""

import os
import re
import time
import threading
from transformers import pipeline
from .config import TARGET_SUMMARY_WORDS
from .file_manager import read_transcript_segments, write_summary

# Suppress TF warnings
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

print("[Summarizer] Loading models...")
translator = pipeline("translation", model="Helsinki-NLP/opus-mt-tl-en", device=-1)
summarizer_model = pipeline("summarization", model="facebook/bart-large-cnn", device=-1)
print("[Summarizer] Models loaded\n")

# Thread-safe state
_lock = threading.Lock()
_progressive_summary = ""
_last_processed_count = 0


def translate_chunk(chunk):
    """Translate a chunk of text to English."""
    sentences = re.split(r'(?<=[.!?])\s+', chunk)
    translated = []
    
    for sent in sentences:
        if not sent or len(sent) < 5:
            continue
        try:
            result = translator(sent, max_length=1024)
            trans = result[0]["translation_text"]
            translated.append(trans)
        except:
            translated.append(sent)
    
    return ' '.join(translated)


def clean_basic_artifacts(text):
    """Remove timestamps and extra whitespace."""
    cleaned = re.sub(r'\[[\d:]+\]', '', text)
    cleaned = re.sub(r'\([\d:]+\)', '', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned


def chunk_transcript(text, chunk_size=250):
    """Split transcript into chunks by sentences."""
    sentences = re.split(r'(?<=[.!?])\s+', text)
    chunks = []
    current_chunk = []
    current_length = 0
    
    for sent in sentences:
        sent_words = len(sent.split())
        
        if current_length + sent_words > chunk_size and current_chunk:
            chunks.append(' '.join(current_chunk))
            current_chunk = [sent]
            current_length = sent_words
        else:
            current_chunk.append(sent)
            current_length += sent_words
    
    if current_chunk:
        chunks.append(' '.join(current_chunk))
    
    return chunks


def summarize_chunk(chunk_text):
    """Summarize a single chunk using AI."""
    try:
        summary = summarizer_model(
            chunk_text,
            max_length=300,
            min_length=100,
            do_sample=False
        )[0]["summary_text"]
        return summary
    except:
        words = chunk_text.split()[:200]
        return ' '.join(words)


def merge_and_refine(prev_summary, new_chunk_summary):
    """Merge previous summary with new chunk summary."""
    if not prev_summary:
        return new_chunk_summary
    
    combined = f"{prev_summary} {new_chunk_summary}"
    
    try:
        refined = summarizer_model(combined, max_length=400, min_length=150, do_sample=False)
        return refined[0]["summary_text"]
    except:
        return combined


def process_new_transcript_batch(new_text):
    """Process new transcript text and update progressive summary."""
    global _progressive_summary
    
    if not new_text.strip():
        return _progressive_summary
    
    # Clean and chunk the new text
    cleaned = clean_basic_artifacts(new_text)
    chunks = chunk_transcript(cleaned, chunk_size=250)
    
    print(f"[Summarizer] Processing {len(chunks)} batches")
    
    for idx, chunk in enumerate(chunks, 1):
        # Translate
        translated = translate_chunk(chunk)
        
        # Summarize
        chunk_summary = summarize_chunk(translated)
        
        # Merge with previous summary
        with _lock:
            _progressive_summary = merge_and_refine(_progressive_summary, chunk_summary)
        
        print(f"[Summarizer] Batch {idx}/{len(chunks)} processed")
    
    return _progressive_summary


def final_compression(summary, target_words=500):
    """Final compression to target word count."""
    current_words = len(summary.split())
    
    if current_words <= target_words * 1.2:
        return summary
    
    try:
        compressed = summarizer_model(
            summary,
            max_length=target_words,
            min_length=int(target_words * 0.8),
            do_sample=False
        )[0]["summary_text"]
        return compressed
    except:
        return summary


def format_as_paragraphs(text):
    """Format into readable paragraphs."""
    sentences = re.split(r'(?<=[.!?])\s+', text)
    
    paragraphs = []
    current = []
    
    for sent in sentences:
        current.append(sent)
        if len(current) >= 3:
            paragraphs.append(' '.join(current))
            current = []
    
    if current:
        paragraphs.append(' '.join(current))
    
    return '\n\n'.join(paragraphs)


def save_progressive_summary(summary, is_final=False):
    """Save progressive summary with appropriate header."""
    if is_final:
        # Extract topic
        topic = summary.split('.')[0] if summary else "Lecture content"
        
        header = (
            "=" * 60 + "\n"
            "LECTURE SUMMARY\n"
            "=" * 60 + "\n\n"
            f"Topic: {topic}\n\n"
            + "-" * 60 + "\n\n"
        )
        
        summary_words = len(summary.split())
        footer = (
            f"\n\n{'-' * 60}\n"
            f"Summary Statistics:\n"
            f"  Word Count: {summary_words}\n"
            f"  Method: Progressive batch refinement\n"
            f"{'-' * 60}"
        )
        
        content = header + summary + footer
    else:
        header = (
            f"LECTURE SUMMARY (In Progress)\n\n"
            f"Current word count: {len(summary.split())}\n\n"
        )
        
        footer = (
            f"Status: Live summarization in progress"
        )
        
        content = header + summary + footer
    
    write_summary(content)


def start_summarizer(check_interval=10):
    """
    Live progressive summarization thread.
    
    Continuously monitors transcript file and updates summary.
    Each new batch of transcript is translated, summarized, and merged
    with the previous summary to maintain context continuity.
    """
    global _last_processed_count, _progressive_summary
    
    print(f"[Summarizer] Check interval: {check_interval}s\n")
    
    try:
        while True:
            time.sleep(check_interval)
            
            segments = read_transcript_segments()
            current_count = len(segments)
            
            # Check if there's new content
            if current_count <= _last_processed_count:
                continue
            
            # Get only the new segments
            new_segments = segments[_last_processed_count:]
            new_text = " ".join([s["text"] for s in new_segments])
            
            print(f"[Summarizer] New content: {current_count - _last_processed_count} segments")
            
            # Process new batch
            updated_summary = process_new_transcript_batch(new_text)
            
            # Format and save
            formatted = format_as_paragraphs(updated_summary)
            save_progressive_summary(formatted, is_final=False)
            
            # Update counter
            with _lock:
                _last_processed_count = current_count
            
            print(f"[Summarizer] Summary updated: {len(formatted.split())} words\n")
    
    except KeyboardInterrupt:
        print("\n[Summarizer] Finalizing summary...")
        
        # Final compression and save
        with _lock:
            if _progressive_summary:
                final = final_compression(_progressive_summary, TARGET_SUMMARY_WORDS)
                formatted_final = format_as_paragraphs(final)
                save_progressive_summary(formatted_final, is_final=True)
                print(f"[Summarizer] Final summary saved: {len(formatted_final.split())} words")
        
        print("[Summarizer] Stopped")