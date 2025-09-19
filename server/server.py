import torch
import torch_directml
import whisper
import sounddevice as sd
import numpy as np
import queue
import threading

# ==============================
# CONFIGURATION
# ==============================
MODEL_NAME = "tiny"  # try "base" for better accuracy if GPU can handle
SAMPLE_RATE = 16000
CHUNK_DURATION = 2.0  # seconds per chunk
PRINT_PARTIAL = True  # show intermediate results live

# ==============================
# SETUP
# ==============================
print("🔧 Initializing DirectML...")
dml_device = torch_directml.device()
print(f"✅ Using DirectML on AMD GPU: {dml_device}")

print(f"⏳ Loading Whisper model '{MODEL_NAME}' on CPU first...")
model = whisper.load_model(MODEL_NAME, device="cpu")
model = model.to(dml_device)
print(f"✅ Whisper model loaded on DirectML device!\n")

# ==============================
# AUDIO CAPTURE SETUP
# ==============================
audio_queue = queue.Queue()

def audio_callback(indata, frames, time, status):
    """Callback to continuously collect audio chunks."""
    if status:
        print(f"⚠️ {status}")
    audio_queue.put(indata.copy())

# Open input stream
stream = sd.InputStream(
    samplerate=SAMPLE_RATE,
    channels=1,
    dtype="float32",
    callback=audio_callback,
    blocksize=int(SAMPLE_RATE * CHUNK_DURATION)
)
stream.start()

print("🎙️ Listening... Speak English or Tagalog (Press Ctrl+C to stop)")

# ==============================
# PROCESSING LOOP
# ==============================
try:
    while True:
        audio_chunk = audio_queue.get()
        audio_np = np.squeeze(audio_chunk)

        # Run Whisper transcription
        result = model.transcribe(audio_np, language=None)  # auto-detect language
        text = result["text"].strip()

        if text:
            print(f"📝 {text}")

except KeyboardInterrupt:
    print("\n🛑 Stopped by user.")
    stream.stop()
    stream.close()