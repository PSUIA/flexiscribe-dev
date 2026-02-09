import queue
import numpy as np
import sounddevice as sd
from faster_whisper import WhisperModel

SAMPLE_RATE = 16000
CHUNK_DURATION = 5  # seconds per chunk
CHANNELS = 1

model = WhisperModel("base", device="cpu", compute_type="float32")

def whisper_worker(text_queue: queue.Queue):
    """
    Records live audio from mic, transcribes with Whisper, and sends text to text_queue.
    """
    print("[INFO] Whisper worker started.")
    buffer = []

    def callback(indata, frames, time_info, status):
        if status:
            print(f"[WARN] {status}")
        buffer.append(indata[:, 0].copy())

    with sd.InputStream(
        samplerate=SAMPLE_RATE,
        channels=CHANNELS,
        callback=callback,
        blocksize=int(SAMPLE_RATE * CHUNK_DURATION)
    ):
        print("[INFO] Recording audio...")
        while True:
            sd.sleep(CHUNK_DURATION * 1000)

            if not buffer:
                continue

            audio_data = np.concatenate(buffer, axis=0)
            buffer.clear()

            if np.max(np.abs(audio_data)) > 0:
                audio_data = audio_data.astype(np.float32)
                audio_data /= np.max(np.abs(audio_data))

            segments, _ = model.transcribe(audio_data, beam_size=5)
            transcript_text = " ".join([seg.text.strip() for seg in segments]).strip()

            if transcript_text:
                text_queue.put(transcript_text)
            else:
                print("[DEBUG] Whisper returned empty transcript.")
