"""
Purpose:
    Capture live audio from the microphone and transcribe it in real-time using Faster Whisper.

Functions:
    - start_transcription()
        - Open the microphone stream
        - Capture audio chunks
        - Flatten audio and send to Whisper model
        - Save each transcription segment to transcript.txt via file_manager
        - Print real-time transcript to console with timestamps

Notes:
    - Each segment is saved as a JSON line with 'start', 'end', and 'text'
    - Handles KeyboardInterrupt to stop safely
    - Timestamps are cumulative using CHUNK_DURATION
"""

import sounddevice as sd
from .config import WHISPER_MODEL, SAMPLE_RATE, CHANNELS, CHUNK_DURATION
from .file_manager import save_transcript_segment
from .utils import flatten_audio

audio_buffer = []
time_offset = 0.0

def callback(indata, frames, time, status):
    if status:
        print(status)

    audio_buffer.append(indata.copy())

def start_transcription():
    global time_offset

    print("Whisper model loaded.")
    print("LISTENING... Ctrl+C to stop.")

    with sd.InputStream(samplerate=SAMPLE_RATE, channels=CHANNELS, dtype="float32",callback=callback):
        try:
            while True:
                sd.sleep(CHUNK_DURATION * 1000)

                if not audio_buffer:
                    continue

                audio = flatten_audio(audio_buffer)
                audio_buffer.clear()

                segments, info = WHISPER_MODEL.transcribe(audio, language="en", vad_filter=False)

                for segment in segments:
                    seg_data = {
                        "start": round(segment.start + time_offset, 2),
                        "end": round(segment.end + time_offset, 2),
                        "text": segment.text
                    }
                    save_transcript_segment(seg_data)

                    print(f"[{seg_data['start']} -> {seg_data['end']}] {seg_data['text']}")

                time_offset += CHUNK_DURATION

        except KeyboardInterrupt:
            print("\n*STOPPED TRANSCRIPTION*")