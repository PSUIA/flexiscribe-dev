"""
preprocessing.py

Purpose:
    Safe Taglish/Tagalog → English lecture summarization pipeline.
    Ensures no garbled words, hallucinations, or nonsense output.
"""

import re
import nltk
from transformers import pipeline

# ---------------------------
# NLTK setup
# ---------------------------
nltk.download('words')
from nltk.corpus import words
english_vocab = set(words.words())

# ---------------------------
# Cleaning
# ---------------------------
def clean_transcript(text: str) -> str:
    fillers = r"\b(uhm|uh|ah|ano|yung|diba|ayun|tapos|minsan)\b"
    text = re.sub(fillers, "", text, flags=re.IGNORECASE)
    text = re.sub(r"\[.*?\]|\(.*?\)", "", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

# ---------------------------
# Detect Tagalog / Taglish
# ---------------------------
def contains_tagalog(text: str) -> bool:
    tagalog_words = r"\b(ang|mga|ng|sa|ay|at|pero|dahil|kaya|tapos|minsan|hindi|wala)\b"
    return bool(re.search(tagalog_words, text, re.IGNORECASE))

# ---------------------------
# Sanitize input for English
# ---------------------------
def sanitize_input(text: str) -> str:
    sanitized_words = []
    for w in text.split():
        clean_word = re.sub(r'[^a-zA-Z]', '', w)
        if clean_word.lower() in english_vocab or not clean_word:
            sanitized_words.append(w)
        else:
            # Replace unrecognized words with blank
            sanitized_words.append("")
    return " ".join(sanitized_words)

# ---------------------------
# Chunk text
# ---------------------------
def chunk_text(text: str, max_words: int = 350) -> list:
    sentences = re.split(r'(?<=[.!?])\s+', text)
    chunks, current = [], ""
    for s in sentences:
        if len(current.split()) + len(s.split()) <= max_words:
            current += s + " "
        else:
            chunks.append(current.strip())
            current = s + " "
    if current.strip():
        chunks.append(current.strip())
    return chunks

# ---------------------------
# NLTK English check
# ---------------------------
def is_english_word(word: str) -> bool:
    word_clean = re.sub(r'[^a-zA-Z]', '', word)
    if not word_clean:
        return True
    return word_clean.lower() in english_vocab

def sentence_contains_nonenglish(sentence: str) -> bool:
    return any(not is_english_word(w) for w in sentence.split())

# ---------------------------
# Paraphrase sentence safely
# ---------------------------
def paraphrase_sentence(sentence: str, summarizer, safe=True) -> str:
    if safe:
        result = summarizer(
            sentence,
            min_length=20,
            max_length=60,
            do_sample=False,
            num_beams=4
        )[0]["summary_text"]
    else:
        result = summarizer(
            sentence,
            min_length=20,
            max_length=60,
            do_sample=True,
            temperature=0.7,
            top_p=0.9,
            num_beams=1
        )[0]["summary_text"]
    return result

# ---------------------------
# Summarize a single chunk safely
# ---------------------------
def summarize_chunk(chunk: str, summarizer, paraphrase=False) -> str:
    sanitized_chunk = sanitize_input(chunk)
    result = summarizer(
        sanitized_chunk,
        min_length=50,
        max_length=120,
        do_sample=False,
        num_beams=6,
        repetition_penalty=1.15
    )[0]["summary_text"]

    sentences = re.split(r'(?<=[.!?])\s+', result)
    final_sentences = []
    for sent in sentences:
        if sentence_contains_nonenglish(sent):
            # Deterministic correction if garbled
            corrected = paraphrase_sentence(sent, summarizer, safe=True)
            final_sentences.append(corrected)
        else:
            # Optional mild paraphrasing
            if paraphrase:
                corrected = paraphrase_sentence(sent, summarizer, safe=False)
            else:
                corrected = sent
            final_sentences.append(corrected)
    return " ".join(final_sentences)

# ---------------------------
# Main summarize function
# ---------------------------
def summarize_transcript(text: str, paraphrase=False) -> str:
    # Step 1: Clean
    cleaned = clean_transcript(text)

    # Step 2: Translate if Tagalog / Taglish
    if contains_tagalog(cleaned):
        translator = pipeline("translation", model="Helsinki-NLP/opus-mt-tl-en")
        translated_chunks = []
        for chunk in chunk_text(cleaned):
            translated_chunks.append(translator(chunk)[0]["translation_text"])
        translated_text = " ".join(translated_chunks)
    else:
        translated_text = cleaned

    # Step 3: Chunk text for summarization
    chunks = chunk_text(translated_text)

    # Step 4: Initialize summarizer
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn", device=-1)

    # Step 5: Summarize each chunk safely
    chunk_summaries = [summarize_chunk(c, summarizer, paraphrase) for c in chunks]

    # Step 6: Optional global final summary
    if len(chunk_summaries) > 1:
        combined = " ".join(chunk_summaries)
        # Final deterministic summary
        final_summary = summarizer(
            combined,
            min_length=70,
            max_length=150,
            do_sample=False,
            num_beams=6,
            repetition_penalty=1.15
        )[0]["summary_text"]
        return final_summary

    return chunk_summaries[0]

# ---------------------------
# Test
# ---------------------------
if __name__ == "__main__":
    text = """
    Sa modernong panahon, artificial intelligence (AI) ay nagiging malaking bahagi ng ating araw-araw na buhay.
    Parang sa mga smartphones, AI assistants tulad ng Siri at Google Assistant ay tumutulong sa pag-organize ng
    schedules at reminders. Minsan, AI rin ang ginagamit sa healthcare, tulad ng pag-diagnose ng sakit gamit ang
    machine learning algorithms. Sa industriya naman, automation powered by AI ay nagpapabilis ng production
    processes at nagpapaayos ng efficiency. Kaya, maraming kumpanya ang nag-iinvest sa AI research upang
    manatiling competitive. Teachers also emphasize critical thinking, problem-solving skills, and responsible
    AI usage to prepare the next generation for future challenges.
    """

    # Enable paraphrasing for readability
    summary = summarize_transcript(text, paraphrase=True)
    print(summary)
