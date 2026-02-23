import time
import numpy as np
import sounddevice as sd
from faster_whisper import WhisperModel
import threading

from config import SAMPLE_RATE, CHANNELS, WHISPER_MODEL, WHISPER_DEVICE, WHISPER_COMPUTE_TYPE

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


def whisper_worker(text_queue, stop_event, session):
    """
    Live transcription worker for a session:
    - Real-time partial transcript every 10 seconds
    - Summarizes every 60 seconds
    """
    model = get_whisper_model()
    print(f"[INFO] Whisper worker started for session {session.session_id}")

    audio_buffer = []
    transcript_buffer = []

    DISPLAY_INTERVAL = 10  # seconds for real-time display
    SUMMARY_INTERVAL = 60  # seconds for summarization

    last_display_time = time.time()
    last_summary_time = time.time()

    def audio_callback(indata, frames, time_info, status):
        if status:
            print(f"[WARN] {status}")
        audio_buffer.append(indata[:, 0].copy())  # mono

    try:
        with sd.InputStream(
            samplerate=SAMPLE_RATE,
            channels=CHANNELS,
            callback=audio_callback,
            blocksize=int(SAMPLE_RATE * DISPLAY_INTERVAL),
        ):
            print(f"[INFO] Recording audio for session {session.session_id}...")
            while not stop_event.is_set():
                time.sleep(0.5)  # check buffer twice per second

                if not audio_buffer:
                    continue

                now = time.time()

                # 1️⃣ Real-time 10s display
                if now - last_display_time >= DISPLAY_INTERVAL:
                    audio_data = np.concatenate(audio_buffer, axis=0)
                    audio_buffer.clear()

                    if np.max(np.abs(audio_data)) > 0:
                        audio_data = audio_data.astype(np.float32)
                        audio_data /= np.max(np.abs(audio_data))

                    segments, _ = model.transcribe(audio_data, beam_size=5)
                    partial_text = " ".join(seg.text.strip() for seg in segments if seg.text.strip())

                    if partial_text:
                        transcript_buffer.append(partial_text)
                        # Send to queue for frontend display
                        text_queue.put({"mode": "transcript", "text": partial_text})
                        # Append to session for SSE streaming
                        session.transcript_chunks.append({
                            "timestamp": int(now),
                            "text": partial_text
                        })

                    last_display_time = now

                # 2️⃣ 60-second summarization
                if now - last_summary_time >= SUMMARY_INTERVAL and transcript_buffer:
                    summary_text = " ".join(transcript_buffer)
                    text_queue.put({"mode": "summary", "text": summary_text})
                    # Store minute summary in session
                    session.minute_summaries.append({
                        "timestamp": int(now),
                        "summary": summary_text
                    })
                    transcript_buffer = []  # reset after summarizing
                    last_summary_time = now

    except Exception as e:
        print(f"[ERROR] Whisper worker for session {session.session_id}: {e}")
    finally:
        print(f"[INFO] Whisper worker stopped for session {session.session_id}")