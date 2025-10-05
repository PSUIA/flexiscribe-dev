Live real-time transcription with Whisper
========================================

Files added:
- `live_transcribe.py`: records live audio and transcribes in chunks, appending transcripts to a file.
- `requirements.txt`: Python packages needed.

Quick start (PowerShell on Windows):

1. Create and activate a virtual environment (recommended):

```powershell
python -m venv .venv; .\.venv\Scripts\Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the transcriber:

```powershell
python live_transcribe.py --model small --lang auto --chunk 5 --outfile transcript.txt
```

Options:
- `--model`: whisper model (tiny, base, small, medium, large). Larger models are slower but more accurate.
- `--lang`: 'auto', 'en' (English), or 'tl' (Tagalog).
- `--chunk`: seconds per recorded chunk to transcribe (default 5s).
- `--samplerate`: recording sample rate. Default 16000.
- `--silence-threshold`: RMS threshold to skip quiet chunks.

Notes and tips:
- The script uses the CPU by default. For faster transcription you can install the optional GPU-capable versions and dependencies following the `whisper` project instructions.
- On Windows, you may need to allow microphone access and ensure drivers are installed.
- If you want line-by-line updates in an app, read `transcript.txt` as it's appended in real time.

Stopping:
- Press Ctrl+C to stop the recording loop gracefully.

Troubleshooting:
- If recording fails, check that your default microphone works and that no other app is blocking it.
- If import errors occur for `whisper`, install it via `pip install -U openai-whisper` and follow model download guidance in the project's README.
