"""
Purpose:
    Entry point for the fLexiScribe pipeline.

Functions:
    - Starts the orchestrator to run transcription and summarization concurrently

Notes:
    - Minimal logic here; delegates all processing to orchestrator
    - Keeps main.py clean and focused on launching the pipeline
"""

from pipeline.orchestrator import start_pipeline

if __name__ == "__main__":
    start_pipeline()
