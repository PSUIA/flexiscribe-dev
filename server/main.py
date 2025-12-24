from pipeline.summarizer import Summarizer
from pipeline.config import INPUT_TEXT_PATH, OUTPUT_SUMMARY_PATH

if __name__ == "__main__":
    summarizer = Summarizer()

    print("Starting summarization...")
    summary = summarizer.summarize_file(INPUT_TEXT_PATH, OUTPUT_SUMMARY_PATH)

    print("\n--- FINAL SUMMARY ---\n")
    print(summary)
    print(f"\nSummary saved to: {OUTPUT_SUMMARY_PATH}")