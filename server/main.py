from threading import Thread
from pipeline.transcription import start_transcription
from pipeline.summarizer import start_summarizer

# Start summarizer thread
summary_thread = Thread(target=start_summarizer, daemon=True)
summary_thread.start()

# Start transcription in main thread
start_transcription()
