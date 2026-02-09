def build_minute_summary_prompt(text: str) -> str:
    return f"""
Summarize this lecture segment.

Return ONLY valid JSON:
{{
  "summary": "...",
  "key_points": ["...", "..."]
}}

Text:
{text}
"""


def build_cornell_prompt(text: str) -> str:
    return f"""
Create a FINAL Cornell Notes summary.

Return ONLY valid JSON:
{{
  "title": "...",
  "cue_questions": ["...", "..."],
  "notes": ["...", "..."],
  "summary": "..."
}}

Lecture:
{text}
"""
