import queue
import time
from summarizer.summarizer import summarize_minute, summarize_cornell
from utils.json_writer import write_json

def summarization_worker(text_queue, run_id, stop_event):
    minute = 0
    transcript = {"metadata": {"run_id": run_id}, "chunks": []}
    summaries = {"metadata": {"run_id": run_id}, "summaries": []}

    while not stop_event.is_set() or not text_queue.empty():
        try:
            text = text_queue.get(timeout=1)
        except queue.Empty:
            continue

        minute += 1

        transcript["chunks"].append({"minute": minute, "text": text})
        write_json(
            transcript,
            f"output/transcripts/transcript_run_{run_id}.json"
        )

        summary = summarize_minute(text)
        summaries["summaries"].append(
            {"minute": minute, **summary}
        )
        write_json(
            summaries,
            f"output/minute_summaries/minute_summary_run_{run_id}.json"
        )

    # Final Cornell summary
    full_text = "\n".join(c["text"] for c in transcript["chunks"])
    cornell = summarize_cornell(full_text)
    write_json(
        cornell,
        f"output/final_summaries/final_cornell_run_{run_id}.json"
    )
