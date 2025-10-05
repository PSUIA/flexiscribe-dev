#!/usr/bin/env python3
"""
Live speech-to-text recorder using OpenAI Whisper (local) and sounddevice.

Features:
- Records short audio chunks from the default microphone and transcribes each chunk in real time.
- Appends every recognized transcript line to an output file and prints it to the console.
- Supports English and Tagalog explicitly, or automatic language detection.
- Ctrl+C stops recording gracefully.

Notes:
- Uses `whisper` (OpenAI Whisper) local model. For speed/accuracy pick an appropriate model (tiny, base, small, medium, large).
- Requires `sounddevice` and `soundfile` for recording and saving audio.

"""
import argparse
import pathlib
import queue
import sys
import time
from datetime import datetime

import numpy as np
import sounddevice as sd
import soundfile as sf

try:
    import whisper
except Exception as e:
    print("Failed to import whisper. Please install 'whisper' from PyPI (pip install -U openai-whisper).")
    raise

def parse_args():
    parser = argparse.ArgumentParser(description="Live microphone transcribe (English/Tagalog) using Whisper")
    parser.add_argument("--model", default="small", help="Whisper model to load (tiny, base, small, medium, large)")
    parser.add_argument("--lang", default="auto", help="Language: 'auto', 'en' for English, 'tl' for Tagalog")
    parser.add_argument("--chunk", type=float, default=5.0, help="Chunk length in seconds to record before transcribing")
    parser.add_argument("--samplerate", type=int, default=16000, help="Recording sample rate (Hz). Whisper works well with 16000")
    parser.add_argument("--outfile", default="transcript.txt", help="File to append live transcripts to")
    parser.add_argument("--silence-threshold", type=float, default=0.01, help="RMS threshold under which a chunk is considered silence and skipped")
    return parser.parse_args()

class LiveTranscriber:
    def __init__(self, model_name: str, lang: str, samplerate: int, chunk_s: float, out_path: pathlib.Path, silence_threshold: float):
        self.model_name = model_name
        self.lang_arg = None if lang == "auto" else lang
        self.samplerate = samplerate
        self.chunk_s = chunk_s
        self.out_path = out_path
        self.silence_threshold = silence_threshold

        print(f"Loading Whisper model '{model_name}' (this may take a while)...")
        self.model = whisper.load_model(model_name)
        print("Model loaded.")

        # thread-safe queue to receive recorded chunks
        self.q = queue.Queue()

    def record_callback(self, indata, frames, time_info, status):
        if status:
            print(f"Recording status: {status}", file=sys.stderr)
        # copy the data to avoid referencing the same memory
        self.q.put(indata.copy())

    def run(self):
        print("Starting live transcription. Press Ctrl+C to stop.")
        channels = 1
        try:
            with sd.InputStream(samplerate=self.samplerate, channels=channels, callback=self.record_callback):
                buffer = np.empty((0, channels), dtype=np.float32)
                chunk_frames = int(self.chunk_s * self.samplerate)

                while True:
                    # gather frames until chunk size
                    while buffer.shape[0] < chunk_frames:
                        frames = self.q.get()
                        buffer = np.vstack((buffer, frames))

                    chunk = buffer[:chunk_frames]
                    buffer = buffer[chunk_frames:]

                    # mono convert and flatten
                    audio = np.squeeze(chunk)

                    # silence detection (RMS)
                    rms = float(np.sqrt(np.mean(audio.astype(np.float64) ** 2)))
                    if rms < self.silence_threshold:
                        # skip and continue
                        print(f"{datetime.now().strftime('%H:%M:%S')} - silence (rms={rms:.5f}) - skipped")
                        continue

                    # Transcribe
                    try:
                        # whisper accepts numpy arrays in float32 with sample rate 16000
                        result = self.model.transcribe(audio, language=self.lang_arg, task="transcribe")
                    except Exception as e:
                        print(f"Transcription error: {e}")
                        continue

                    text = result.get("text", "").strip()
                    if text:
                        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                        line = f"[{timestamp}] {text}\n"
                        print(line, end="")
                        try:
                            with open(self.out_path, "a", encoding="utf-8") as f:
                                f.write(line)
                        except Exception as e:
                            print(f"Failed to write transcript to {self.out_path}: {e}")

        except KeyboardInterrupt:
            print("\nInterrupted by user. Exiting.")
        except Exception as e:
            print(f"Fatal error in recording/transcribing loop: {e}")

def main():
    args = parse_args()
    out_path = pathlib.Path(args.outfile)

    # ensure parent dir exists
    if out_path.parent and not out_path.parent.exists():
        out_path.parent.mkdir(parents=True, exist_ok=True)

    # validate language
    lang = args.lang.lower()
    if lang not in ("auto", "en", "tl"):
        print("Unsupported --lang value. Use 'auto', 'en', or 'tl'. Falling back to auto.")
        lang = "auto"

    transcriber = LiveTranscriber(model_name=args.model, lang=lang, samplerate=args.samplerate, chunk_s=args.chunk, out_path=out_path, silence_threshold=args.silence_threshold)
    transcriber.run()

if __name__ == "__main__":
    main()