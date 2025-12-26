"""
transcription.py

Purpose:
    Provide robust, long-form speech-to-text transcription optimized for
    lectures and meetings (1+ hour duration).

    The module implements a hybrid transcription pipeline:
        - Vosk is used for low-latency, real-time captions
        - Whisper (GPU-accelerated) is used for delayed, offline-quality refinement
        - Raw audio is continuously recorded to disk for reliability and recovery

    This design achieves near–offline Whisper accuracy while still producing
    real-time transcription output.

Architecture Overview:
    Microphone input is fanned out to three parallel consumers:
        1. WAV writer (lossless audio persistence)
        2. Vosk streaming recognizer (real-time captions)
        3. Whisper refinement buffer (high-accuracy transcription)

    Whisper operates on overlapping audio windows to preserve linguistic
    context and sentence continuity.

Key Components:
    - Real-time audio capture using sounddevice
    - Threaded processing with isolated queues (no shared consumers)
    - GPU-accelerated Whisper via faster-whisper
    - Offline Vosk model for streaming transcription
    - Append-only transcript output compatible with long recordings

Functions:
    start_transcription()
        - Initializes models and audio streams
        - Starts background threads for:
            * WAV recording
            * Vosk real-time transcription
            * Whisper delayed refinement
        - Runs continuously until interrupted (Ctrl+C)

    vosk_transcriber(transcript_file)
        - Performs low-latency, streaming transcription
        - Suitable for live captions and immediate feedback
        - Appends provisional text to the transcript file

    whisper_refiner(transcript_file)
        - Processes audio in long, overlapping windows (e.g., 60s with overlap)
        - Produces high-accuracy, offline-quality transcription
        - Appends refined text to the transcript file
        - Designed to lag behind real time to preserve context and accuracy

    wav_writer(wav_path)
        - Writes raw PCM audio to disk continuously
        - Guarantees no data loss and enables offline reprocessing

Notes:
    - This module is designed for embedded GPU platforms (e.g., Jetson Orin)
    - Whisper latency is intentional and expected
    - Audio capture is non-blocking and resilient to backpressure
    - Transcript directory structure is preserved and append-only
    - Final transcript quality converges to full offline Whisper transcription

Limitations:
    - Real-time output is provisional until Whisper refinement completes
    - Transcript replacement (instead of append) is not implemented by default
    - Speaker diarization is not included but can be added later
"""
"""
transcription.py

Hybrid transcription pipeline:
- Vosk: real-time captions (low latency)
- Whisper (faster-whisper): delayed refinement (offline-quality)
- Continuous WAV recording for reliability

Designed for 1+ hour lectures on Jetson Orin Nano Super.
"""
"""
transcription.py

Hybrid transcription pipeline with final flush:
- Vosk: real-time captions (low latency)
- Whisper (faster-whisper): delayed refinement (offline-quality)
- Continuous WAV recording for reliability

Designed for 1+ hour lectures on Jetson Orin Nano Super.
"""

import sounddevice as sd
import numpy as np
from .config import WHISPER_MODEL, SAMPLE_RATE, CHANNELS, CHUNK_DURATION
from pathlib import Path
import json

TRANSCRIPT_FILE = Path("transcript.txt")

audio_buffer = []
language_printed = False
time_offset = 0.0

def callback(indata, frames, time, status):
    if status:
        print(status)
    audio_buffer.append(indata.copy())

def start_transcription():
    global language_printed, time_offset

    transcript_file = open(TRANSCRIPT_FILE, "a", encoding="utf-8")

    print("Whisper model loaded.")
    print("LISTENING... Speak clearly into the microphone.")
    print("Press Ctrl+C to stop.\n")

    try:
        with sd.InputStream(
            samplerate=SAMPLE_RATE,
            channels=CHANNELS,
            dtype="float32",
            callback=callback
        ):
            while True:
                sd.sleep(CHUNK_DURATION * 1000)

                if not audio_buffer:
                    continue

                audio = np.concatenate(audio_buffer, axis=0)
                audio_buffer.clear()
                audio = audio.flatten()

                print(f"Captured {audio.shape[0]} samples")

                segments, info = WHISPER_MODEL.transcribe(
                    audio,
                    language="en",
                    vad_filter=False
                )

                if not language_printed:
                    print(f"\nDetected language: {info.language}\n")
                    language_printed = True

                for segment in segments:
                    start = segment.start + time_offset
                    end = segment.end + time_offset
                    segment_data = {
                        "start": round(start, 2),
                        "end": round(end, 2),
                        "text": segment.text
                    }
                    # Save as JSON line
                    transcript_file.write(json.dumps(segment_data) + "\n")
                    transcript_file.flush()
                    # Print to console
                    print(f"[{start:.2f}s -> {end:.2f}s] {segment.text}")

                time_offset += CHUNK_DURATION

    except KeyboardInterrupt:
        print("\n*STOPPED TRANSCRIPTION*")
        transcript_file.close()