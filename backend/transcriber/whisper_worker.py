import queue
import threading
import numpy as np
import sounddevice as sd
from faster_whisper import WhisperModel

import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config import SAMPLE_RATE, CHUNK_DURATION, CHANNELS, WHISPER_MODEL, WHISPER_DEVICE, WHISPER_COMPUTE_TYPE

# Lazy-load the model (only once)
_model = None
_model_lock = threading.Lock()


def get_whisper_model() -> WhisperModel:
    global _model
    if _model is None:
        with _model_lock:
            if _model is None:
                print("[INFO] Loading Whisper model...")
                _model = WhisperModel(
                    WHISPER_MODEL,
                    device=WHISPER_DEVICE,
                    compute_type=WHISPER_COMPUTE_TYPE,
                )
                print("[INFO] Whisper model loaded.")
    return _model


def whisper_worker(text_queue: queue.Queue, stop_event: threading.Event):
    """
    Records live audio from mic, transcribes with Whisper, and sends text to text_queue.
    Respects stop_event to gracefully shut down.
    """
    model = get_whisper_model()
    print("[INFO] Whisper worker started.")
    buffer = []

    def callback(indata, frames, time_info, status):
        if status:
            print(f"[WARN] {status}")
        buffer.append(indata[:, 0].copy())

    try:
        with sd.InputStream(
            samplerate=SAMPLE_RATE,
            channels=CHANNELS,
            callback=callback,
            blocksize=int(SAMPLE_RATE * CHUNK_DURATION),
        ):
            print("[INFO] Recording audio...")
            while not stop_event.is_set():
                sd.sleep(CHUNK_DURATION * 1000)

                if not buffer:
                    continue

                audio_data = np.concatenate(buffer, axis=0)
                buffer.clear()

                if np.max(np.abs(audio_data)) > 0:
                    audio_data = audio_data.astype(np.float32)
                    audio_data /= np.max(np.abs(audio_data))

                segments, _ = model.transcribe(audio_data, beam_size=5)
                transcript_text = " ".join(
                    [seg.text.strip() for seg in segments]
                ).strip()

                if transcript_text:
                    text_queue.put(transcript_text)
                else:
                    print("[DEBUG] Whisper returned empty transcript.")

    except Exception as e:
        print(f"[ERROR] Whisper worker error: {e}")
    finally:
        print("[INFO] Whisper worker stopped.")
