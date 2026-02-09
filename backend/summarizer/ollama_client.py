import ollama

def generate_response(model: str, prompt: str) -> str:
    response = ollama.chat(
        model=model,
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a JSON-only API. "
                    "You must return ONLY valid JSON. "
                    "No explanations. No markdown. No extra text."
                )
            },
            {"role": "user", "content": prompt}
        ]
    )

    return response["message"]["content"].strip()
