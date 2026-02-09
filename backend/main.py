import threading
import queue
import time
from transcriber.live_transcriber import summarization_worker
from transcriber.whisper_worker import whisper_worker

def main():
    run_id = time.strftime("%Y%m%d_%H%M%S")
    text_queue = queue.Queue()
    stop_event = threading.Event()

    t1 = threading.Thread(target=whisper_worker, args=(text_queue, stop_event))
    t2 = threading.Thread(target=summarization_worker, args=(text_queue, run_id, stop_event))

    print("[DEBUG] Starting transcription...")
    t1.start()
    t2.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("[DEBUG] Stopping...")
        stop_event.set()
        t1.join()
        t2.join()

if __name__ == "__main__":
    main()
