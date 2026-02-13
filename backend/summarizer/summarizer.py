from ollama_client import generate_response
from prompt_builder import build_minute_summary_prompt, build_cornell_prompt
from json_utils import extract_json

def summarize_minute(text, model="gemma3:1b"):
    return extract_json(generate_response(model, build_minute_summary_prompt(text)))

def summarize_cornell(text, model="gemma3:1b"):
    return extract_json(generate_response(model, build_cornell_prompt(text)))
