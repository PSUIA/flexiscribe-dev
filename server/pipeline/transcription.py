"""
transcription.py

Purpose:
    Convert audio files into transcript text using Whisper or Vosk.
    Supports both online (Whisper) and offline (Vosk) transcription.

Functions to implement:
    - transcribe_whisper(audio_path, transcript_file)
        - Load Whisper model
        - Transcribe audio file to text
        - Save raw transcript to transcripts folder
        - Optional: handle long audio in chunks

    - transcribe_vosk(audio_path, transcript_file, model_path)
        - Load Vosk offline model
        - Read WAV audio file
        - Convert audio to text
        - Save transcript
        - Optional: batch or streaming transcription

Notes:
    - Ensure audio format compatibility
    - Add error handling for missing or corrupted audio files
    - Keep model choice flexible
"""

import queue
import threading
import numpy as np
import sounddevice as sd
import whisper
import vosk
import json

from .config import SAMPLERATE, CHANNELS, WHISPER_MODEL, VOSK_MODEL_PATH
from .file_manager import generate_transcript_file, append_text_to_file

# Load models
print("Loading Whisper model...")
whisper_model = whisper.load_model(WHISPER_MODEL)

print("Loading Vosk model...")
vosk_model = vosk.Model(VOSK_MODEL_PATH)

audio_queue = queue.Queue()

def audio_callback(indata, frames, time, status):
    if status:
        print(status, flush=True)
    audio_queue.put(bytes(indata))

# Vosk transcription thread
def vosk_transcriber(transcript_file):
    rec = vosk.KaldiRecognizer(vosk_model, SAMPLERATE)
    while True:
        data = audio_queue.get()
        if rec.AcceptWaveform(data):
            result_json = rec.Result()
            text = json.loads(result_json)['text']
            if text.strip():
                print("Vosk:", text)
                append_text_to_file(transcript_file, text)

# Whisper transcription thread
def whisper_transcriber(transcript_file, chunk_size=10):
    buffer = np.zeros(0, dtype=np.float32)
    while True:
        data = audio_queue.get()
        audio_chunk = np.frombuffer(data, dtype=np.int16).astype(np.float32) / 32768.0
        buffer = np.concatenate((buffer, audio_chunk))
        
        if len(buffer) >= chunk_size * SAMPLERATE:
            audio_input = buffer[:chunk_size*SAMPLERATE]
            buffer = buffer[chunk_size*SAMPLERATE:]
            
            result = whisper_model.transcribe(audio_input, language="en")
            text = result.get("text", "").strip()
            if text:
                print("Whisper:", text)
                append_text_to_file(transcript_file, text)

# Start transcription
def start_transcription():
    transcript_file = generate_transcript_file()
    print(f"Transcription saved to: {transcript_file}")
    
    # Start threads
    threading.Thread(target=vosk_transcriber, args=(transcript_file,), daemon=True).start()
    threading.Thread(target=whisper_transcriber, args=(transcript_file,), daemon=True).start()
    
    # Start audio stream
    try:
        with sd.RawInputStream(samplerate=SAMPLERATE, blocksize=8000, dtype='int16',
                               channels=CHANNELS, callback=audio_callback):
            print("Recording... Press Ctrl+C to stop.")
            while True:
                sd.sleep(1000)
    except KeyboardInterrupt:
        print("\nStopped recording.")